"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function DealScannerForm() {
  const router = useRouter();
  const [itemTitle, setItemTitle] = useState("");
  const [listingPrice, setListingPrice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams();

    if (itemTitle.trim()) {
      params.set("title", itemTitle.trim());
    }

    if (listingPrice.trim()) {
      params.set("price", listingPrice.trim());
    }

    const query = params.toString();
    router.push(query ? `/results?${query}` : "/results");
  }

  return (
    <form className="scanner-card" onSubmit={handleSubmit}>
      <div className="panel-heading">
        <p className="panel-kicker">Deal Scanner</p>
        <h2>Enter a listing to score the flip.</h2>
      </div>

      <label className="field">
        <span>Item title</span>
        <input
          type="text"
          name="itemTitle"
          placeholder="Rolex Datejust 36 blue dial"
          value={itemTitle}
          onChange={(event) => setItemTitle(event.target.value)}
        />
      </label>

      <label className="field">
        <span>Listing price</span>
        <input
          type="number"
          name="listingPrice"
          placeholder="2500"
          value={listingPrice}
          onChange={(event) => setListingPrice(event.target.value)}
        />
      </label>

      <button type="submit" className="primary-button">
        Scan
      </button>
    </form>
  );
}
