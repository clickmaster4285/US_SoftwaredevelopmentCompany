const BRAND = " | Clickmasters";
const TITLE_MAX = 60;
const DESC_MIN = 70;
// Not a ranking rule: Google truncates snippets by pixel width (~150–160
// characters); 155 matches the audit tool's threshold. Descriptions up to
// this length are kept whole.
const DESC_SOFT_MAX = 155;

function clean(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

/** Hand-written titles for pages whose default title was too short or
 * duplicated another page's title. Keyed by path. */
export const TITLE_OVERRIDES: Record<string, string> = {
  // Was "Crypto Wallets | Clickmasters" (29 chars).
  "/blockchain-and-web3/crypto-wallet-development":
    "Crypto Wallet Development Services",
  // Was identical to /mobile-app-development/mobile-app-development-services.
  "/software-development/mobile-app-development":
    "Mobile App Development for Custom Software",
};

export function fitTitle(raw: string) {
  let name = clean(raw)
    .replace(/\s*[|–—-]\s*Clickmasters\b.*$/i, "")
    .replace(/\s*[|–—-]\s*Clickmasters\b.*$/i, "")
    .trim();

  const withBrand = () => `${name}${BRAND}`;
  if (withBrand().length <= TITLE_MAX) return withBrand();

  name = name.replace(/\s+services$/i, "").trim();
  if (withBrand().length <= TITLE_MAX) return withBrand();

  const budget = TITLE_MAX - BRAND.length;
  const sliced = name.slice(0, budget);
  const breakAt = sliced.lastIndexOf(" ");
  name = (breakAt > 18 ? sliced.slice(0, breakAt) : sliced)
    .replace(/[|–—,\s]+$/g, "")
    .trim();
  return `${name}${BRAND}`;
}

/** Descriptions under this length are flagged as "too short" by SEO tools
 * (Ahrefs uses 110) and waste snippet space. */
const DESC_TARGET_MIN = 110;

// Factual closing sentences (written scope/quote and remote-first delivery are
// stated across the site), longest first. The longest one that keeps the
// description within DESC_SOFT_MAX is appended to short descriptions.
const DESC_SUFFIXES = [
  "Clickmasters provides a written scope, timeline and quote before development starts.",
  "Written scope, timeline and quote from Clickmasters before work starts.",
  "Scoped and quoted in writing by Clickmasters before work starts.",
  "Written scope and quote from Clickmasters before work starts.",
  "Scoped and quoted in writing by Clickmasters.",
  "Remote-first delivery from Clickmasters.",
  "Delivered by Clickmasters.",
];

export function fitDescription(raw: string | undefined, subject: string) {
  let text = clean(raw || "") || subject;
  if (text.length < DESC_TARGET_MIN) {
    const base = /[.!?]$/.test(text) ? text : `${text}.`;
    const suffix = DESC_SUFFIXES.find(
      (s) => base.length + 1 + s.length <= DESC_SOFT_MAX,
    );
    text = suffix ? `${base} ${suffix}` : base;
  }
  if (text.length <= DESC_SOFT_MAX) return text;

  // Prefer ending on a complete sentence. The old version sliced at a word
  // boundary, which published fragments such as "...Get a free" and
  // "...scope, timeline, and" as the search snippet.
  const head = text.slice(0, DESC_SOFT_MAX + 1);
  const sentenceEnds = [...head.matchAll(/[.!?](?=\s|$)/g)].map(
    (m) => (m.index ?? 0) + 1,
  );
  const lastSentence = sentenceEnds.filter((end) => end >= DESC_MIN).pop();
  if (lastSentence) return text.slice(0, lastSentence).trim();

  // No sentence end in range: cut at a word boundary and mark the cut.
  const sliced = text.slice(0, DESC_SOFT_MAX - 1);
  const breakAt = sliced.lastIndexOf(" ");
  const cut = (breakAt >= DESC_MIN ? sliced.slice(0, breakAt) : sliced)
    .replace(/[,\s;:–—-]+$/g, "")
    .replace(/\s+(and|or|with|for|to|a|an|the|of|in|&)$/i, "")
    .trim();
  return `${cut}…`;
}
