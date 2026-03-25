const fillerWords = new Set([
  "old",
  "vintage",
  "watch",
  "nice",
]);

const phraseCorrections: Array<[RegExp, string]> = [
  [/\bdate\s+just\b/g, "datejust"],
  [/\bblack\s*bay\b/g, "black bay"],
];

const wordCorrections = new Map<string, string>([
  ["rolex", "Rolex"],
  ["omega", "Omega"],
  ["seamster", "Seamaster"],
  ["seamaster", "Seamaster"],
  ["datejust", "Datejust"],
  ["tudor", "Tudor"],
  ["black", "Black"],
  ["bay", "Bay"],
]);

function toProperCase(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function normalizeItemTitle(title: string) {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) {
    return "";
  }

  let normalized = trimmedTitle.toLowerCase().replace(/[^a-z0-9\s]/g, " ");

  for (const [pattern, replacement] of phraseCorrections) {
    normalized = normalized.replace(pattern, replacement);
  }

  const cleanedWords = normalized
    .split(/\s+/)
    .filter(Boolean)
    .filter((word) => !fillerWords.has(word))
    .map((word) => wordCorrections.get(word) ?? toProperCase(word));

  return cleanedWords.join(" ").trim();
}
