export type MarketplaceName =
  | "eBay"
  | "Facebook Marketplace"
  | "Mercari"
  | "Craigslist";

export type MockListing = {
  marketplace: MarketplaceName;
  itemTitle: string;
  listingPrice: number;
};

export const mockDealFeed: MockListing[] = [
  {
    marketplace: "Facebook Marketplace",
    itemTitle: "omega seamster old watch blue dial",
    listingPrice: 880,
  },
  {
    marketplace: "Craigslist",
    itemTitle: "rolex date just vintage watch silver",
    listingPrice: 2450,
  },
  {
    marketplace: "Mercari",
    itemTitle: "tudor blackbay watch nice 41mm",
    listingPrice: 1195,
  },
  {
    marketplace: "eBay",
    itemTitle: "canon eos r6 mirrorless camera body",
    listingPrice: 840,
  },
  {
    marketplace: "Facebook Marketplace",
    itemTitle: "jordan 1 chicago size 10 lightly worn",
    listingPrice: 280,
  },
  {
    marketplace: "Mercari",
    itemTitle: "omega seamaster professional midsize",
    listingPrice: 1325,
  },
  {
    marketplace: "Craigslist",
    itemTitle: "rolex date just two tone old watch",
    listingPrice: 3180,
  },
  {
    marketplace: "eBay",
    itemTitle: "tudor black bay gmt pepsi",
    listingPrice: 1795,
  },
  {
    marketplace: "Facebook Marketplace",
    itemTitle: "canon rf 28 70 lens nice",
    listingPrice: 1260,
  },
  {
    marketplace: "Mercari",
    itemTitle: "jordan 1 chicago og high",
    listingPrice: 355,
  },
  {
    marketplace: "Craigslist",
    itemTitle: "omega seamster diver full set",
    listingPrice: 1460,
  },
  {
    marketplace: "eBay",
    itemTitle: "rolex datejust smooth bezel blue dial",
    listingPrice: 3695,
  },
];
