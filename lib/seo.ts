const BRAND = " | Clickmasters";
const TITLE_MAX = 60;
const DESC_MIN = 70;
// Not a ranking rule: Google truncates snippets by pixel width (~150–160
// characters). Descriptions up to this length are kept whole.
const DESC_SOFT_MAX = 160;

function clean(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function fitTitle(raw: string) {
  let name = clean(raw)
    .replace(/\s*[|–—-]\s*Clickmasters\b.*$/i, "")
    .replace(/\s*[|–—-]\s*ClickMasters\b.*$/i, "")
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

export function fitDescription(raw: string | undefined, subject: string) {
  let text = clean(raw || "");
  if (text.length < DESC_MIN) {
    const extra = `${subject} from Clickmasters includes scoped delivery, a written timeline, and a quote before build starts.`;
    text = clean(`${text} ${extra}`);
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
