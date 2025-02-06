import React, { useState } from "react";
import supabase from "../supabaseClient";
import { v4 as uuidv4 } from "uuid";
import {
  Divider,
  LinearProgress,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import "./stylepage/Hero.css"; // Import the HeroSection CSS

const HeroSection = () => {
  const [loadingMessage, setLoadingMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [uniqueUrl, setUniqueUrl] = useState(""); // Store the unique URL to navigate to later

  const apiKey = "AIzaSyDE2uQD9el6VVvh_rNyEr8erL5cdv6Tavw";

  const calculateCO2ePerNewVisit = (totalByteWeight) => {
    const totalByteWeightMB = totalByteWeight / (1024 * 1024);
    return ((totalByteWeightMB / 1.8) * 0.6).toFixed(2);
  };

  const buildQueryURL = (url) => {
    return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      url
    )}&strategy=desktop&category=performance&key=${apiKey}`;
  };

  const fetchData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadingMessage("Fetching data...");
    setResults(null);

    const inputURL = e.target.url.value;
    const email = e.target.email.value;
    const uniqueKey = uuidv4();
    const uniqueUrl = `/results/${uniqueKey}`;

    try {
      const url = buildQueryURL(inputURL);
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`API request failed with status ${response.status}`);

      const json = await response.json();
      const totalByteWeightValue =
        json.lighthouseResult.audits["total-byte-weight"].numericValue;
      const co2ePerVisit = calculateCO2ePerNewVisit(totalByteWeightValue);

      await supabase.from("client").insert([
        {
          url: inputURL,
          page_weight: totalByteWeightValue / (1024 * 1024),
          co2e_per_visit: parseFloat(co2ePerVisit),
          email,
          device: "desktop",
          unique_url: uniqueUrl,
        },
      ]);

      const emailResponse = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          
            email: email,   // Keep this line
            url: inputURL,
            device: "Desktop",
            MB: (totalByteWeightValue / (1024 * 1024)).toFixed(2),
            grams: co2ePerVisit,
            uniqueUrl,       // No need for the second 'email' key
          
        }),
      });

      if (!emailResponse.ok) {
        const text = await emailResponse.text();
        console.error("Error response from the server:", text);
        throw new Error("Failed to send email: " + text);
      }

      setLoadingMessage("Data successfully loaded, saved, and email sent!");
      setResults({
        device: "Desktop",
        MB: (totalByteWeightValue / (1024 * 1024)).toFixed(2),
        grams: co2ePerVisit,
      });
      setUniqueUrl(uniqueUrl); // Set the unique URL to navigate to later
    } catch (error) {
      console.error(error);
      setLoadingMessage(error.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="hero-section">
      <div className="page-width">
        <div className="hero-inner" style={{ textAlign: "center" }}>
          <h4>What's my website's impact on the planet?🔥</h4>
          <h1>Make your website
            <br />
            eco-friendly, today.
          </h1>
        </div>
        <div className="section-home">
          <h3>Estimate Your Web Page Carbon Impact</h3>
          <form onSubmit={fetchData}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="url"
                  name="url"
                  label="Enter URL"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Enter Email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button
                  type="Analyzing"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isLoading}
                >
                  {isLoading ? "Analyzing..." : "Analyzing"}
                </Button>
              </Grid>
            </Grid>
          </form>
          <p>{loadingMessage}</p>
          {isLoading && <LinearProgress />}
          {results && (
            <div className="results">
              <Divider />
              <h3>Results:</h3>
              <p>
                <strong>Device Name:</strong> {results.device}
              </p>
              <p>
                <strong>Page Weight:</strong> {results.MB} MB
              </p>
              <p>
                <strong>CO2e per Visit:</strong> {results.grams} g
              </p>
              {/* Display the unique URL */}
              {uniqueUrl && (
                <p>
                  <strong>Your Unique URL:</strong> <a href={uniqueUrl}>{uniqueUrl}</a>
                </p>
              )}
            </div>
          )}
          <p>
            By using this carbon calculator, you agree to the information that
            you submit being stored and published in our public database.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
