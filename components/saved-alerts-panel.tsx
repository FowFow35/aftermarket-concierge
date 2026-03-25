"use client";

import { FormEvent, useState } from "react";

type Alert = {
  brand: string;
  maxBuyPrice: string;
  minimumProfit: string;
};

const starterAlerts: Alert[] = [
  { brand: "Rolex", maxBuyPrice: "$6,500", minimumProfit: "$1,000" },
  { brand: "Omega", maxBuyPrice: "$2,800", minimumProfit: "$600" },
];

export function SavedAlertsPanel() {
  const [brand, setBrand] = useState("");
  const [maxBuyPrice, setMaxBuyPrice] = useState("");
  const [minimumProfit, setMinimumProfit] = useState("");
  const [alerts, setAlerts] = useState(starterAlerts);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!brand || !maxBuyPrice || !minimumProfit) {
      return;
    }

    setAlerts((currentAlerts) => [
      {
        brand,
        maxBuyPrice: `$${maxBuyPrice}`,
        minimumProfit: `$${minimumProfit}`,
      },
      ...currentAlerts,
    ]);
    setBrand("");
    setMaxBuyPrice("");
    setMinimumProfit("");
  }

  return (
    <section className="alerts-layout">
      <form className="scanner-card" onSubmit={handleSubmit}>
        <div className="panel-heading">
          <p className="panel-kicker">Create Alert</p>
          <h2>Save a rule for watches you want to buy.</h2>
        </div>

        <label className="field">
          <span>Brand</span>
          <input
            type="text"
            name="brand"
            placeholder="Tudor"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          />
        </label>

        <label className="field">
          <span>Max buy price</span>
          <input
            type="number"
            name="maxBuyPrice"
            placeholder="3200"
            value={maxBuyPrice}
            onChange={(event) => setMaxBuyPrice(event.target.value)}
          />
        </label>

        <label className="field">
          <span>Minimum profit</span>
          <input
            type="number"
            name="minimumProfit"
            placeholder="700"
            value={minimumProfit}
            onChange={(event) => setMinimumProfit(event.target.value)}
          />
        </label>

        <button type="submit" className="primary-button">
          Save alert
        </button>
      </form>

      <div className="alerts-list">
        <div className="panel-heading">
          <p className="panel-kicker">Tracked Setups</p>
          <h2>Current saved alerts</h2>
        </div>

        {alerts.map((alert) => (
          <article className="alert-card" key={`${alert.brand}-${alert.maxBuyPrice}`}>
            <div>
              <p className="metric-label">Brand</p>
              <h3>{alert.brand}</h3>
            </div>
            <div className="alert-metrics">
              <div>
                <p className="metric-label">Max buy</p>
                <p className="alert-value">{alert.maxBuyPrice}</p>
              </div>
              <div>
                <p className="metric-label">Min profit</p>
                <p className="alert-value">{alert.minimumProfit}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
