export type SubmissionStatus = "Pending" | "Approved" | "Declined";

export type ConciergeSubmission = {
  id: string;
  clientName: string;
  email: string;
  phoneNumber: string;
  itemCategory: string;
  brand: string;
  modelName: string;
  estimatedValue: string;
  condition: string;
  itemDescription: string;
  shippingLabelRequested: "Yes" | "No";
  payoutAcknowledgement: boolean;
  photos: Array<{
    name: string;
    type: string;
    size: number;
    previewUrl: string;
  }>;
  submittedAt: string;
  status: SubmissionStatus;
  statusUpdatedAt: string;
};

type ConciergeDashboardStats = {
  pendingReviews: number;
  approvedToday: number;
  declinedToday: number;
};

type ConciergeSubmissionInput = Omit<
  ConciergeSubmission,
  "id" | "submittedAt" | "status" | "statusUpdatedAt"
>;

type ConciergeSubmissionStore = {
  submissions: ConciergeSubmission[];
};

const initialSubmissions: ConciergeSubmission[] = [
  {
    id: "seed-hermes-birkin",
    clientName: "Amelia Sinclair",
    email: "amelia@privateclient.com",
    phoneNumber: "(212) 555-0184",
    itemCategory: "Designer Bags",
    brand: "Hermes",
    modelName: "Birkin 30 Togo Gold",
    estimatedValue: "$18,500",
    condition: "Excellent",
    itemDescription: "Includes lock, clochette, dust bag, and recent spa receipt.",
    shippingLabelRequested: "Yes",
    payoutAcknowledgement: true,
    photos: [],
    submittedAt: "2026-03-22T14:10:00.000Z",
    status: "Pending",
    statusUpdatedAt: "2026-03-22T14:10:00.000Z",
  },
  {
    id: "seed-rolex-submariner",
    clientName: "Julian Mercer",
    email: "julian@mercerholdings.com",
    phoneNumber: "(917) 555-0142",
    itemCategory: "Watches",
    brand: "Rolex",
    modelName: "Submariner Date 126610LN",
    estimatedValue: "$11,900",
    condition: "Good",
    itemDescription: "Full set with card and box. Light desk wear on clasp.",
    shippingLabelRequested: "No",
    payoutAcknowledgement: true,
    photos: [],
    submittedAt: "2026-03-22T10:45:00.000Z",
    status: "Approved",
    statusUpdatedAt: "2026-03-22T15:00:00.000Z",
  },
  {
    id: "seed-charizard-psa9",
    clientName: "Sofia Bennett",
    email: "sofia@bennettcollection.com",
    phoneNumber: "(305) 555-0121",
    itemCategory: "Collectibles",
    brand: "Pokemon",
    modelName: "Base Set Charizard PSA 9",
    estimatedValue: "$8,250",
    condition: "Excellent",
    itemDescription: "PSA slab with strong centering and clean holo surface.",
    shippingLabelRequested: "Yes",
    payoutAcknowledgement: true,
    photos: [],
    submittedAt: "2026-03-21T18:20:00.000Z",
    status: "Declined",
    statusUpdatedAt: "2026-03-22T12:30:00.000Z",
  },
  {
    id: "seed-scotty-circle-t",
    clientName: "Nathaniel Cross",
    email: "nathaniel@crosscapital.com",
    phoneNumber: "(404) 555-0175",
    itemCategory: "Golf Equipment",
    brand: "Scotty Cameron",
    modelName: "Circle T Timeless Newport 2",
    estimatedValue: "$6,400",
    condition: "New",
    itemDescription: "Original headcover and certificate included. Never gamed.",
    shippingLabelRequested: "No",
    payoutAcknowledgement: true,
    photos: [],
    submittedAt: "2026-03-21T16:05:00.000Z",
    status: "Pending",
    statusUpdatedAt: "2026-03-21T16:05:00.000Z",
  },
];

declare global {
  var __afterMarketConciergeStore__: ConciergeSubmissionStore | undefined;
}

const store =
  globalThis.__afterMarketConciergeStore__ ??
  (globalThis.__afterMarketConciergeStore__ = {
    submissions: initialSubmissions,
  });

export function getConciergeSubmissions() {
  return [...store.submissions].sort((left, right) =>
    right.submittedAt.localeCompare(left.submittedAt),
  );
}

export function addConciergeSubmission(input: ConciergeSubmissionInput) {
  const timestamp = new Date().toISOString();
  const submission: ConciergeSubmission = {
    id: crypto.randomUUID(),
    submittedAt: timestamp,
    status: "Pending",
    statusUpdatedAt: timestamp,
    ...input,
  };

  store.submissions = [submission, ...store.submissions];

  return submission;
}

export function updateConciergeSubmissionStatus(
  id: string,
  status: SubmissionStatus,
) {
  const index = store.submissions.findIndex((submission) => submission.id === id);

  if (index === -1) {
    return null;
  }

  const updatedSubmission = {
    ...store.submissions[index],
    status,
    statusUpdatedAt: new Date().toISOString(),
  };

  store.submissions = [
    ...store.submissions.slice(0, index),
    updatedSubmission,
    ...store.submissions.slice(index + 1),
  ];

  return updatedSubmission;
}

export function getConciergeDashboardStats(): ConciergeDashboardStats {
  const today = new Date().toISOString().slice(0, 10);

  return {
    pendingReviews: store.submissions.filter(
      (submission) => submission.status === "Pending",
    ).length,
    approvedToday: store.submissions.filter(
      (submission) =>
        submission.status === "Approved" &&
        submission.statusUpdatedAt.slice(0, 10) === today,
    ).length,
    declinedToday: store.submissions.filter(
      (submission) =>
        submission.status === "Declined" &&
        submission.statusUpdatedAt.slice(0, 10) === today,
    ).length,
  };
}

export function formatSubmissionDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}
