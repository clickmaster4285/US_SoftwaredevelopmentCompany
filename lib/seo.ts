const BRAND = " | Clickmasters";
const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 145;

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
  if (text.length <= DESC_MAX) return text;

  const sliced = text.slice(0, DESC_MAX);
  const breakAt = sliced.lastIndexOf(" ");
  const cut = (breakAt >= DESC_MIN ? sliced.slice(0, breakAt) : sliced)
    .replace(/[,\s;:]+$/g, "")
    .trim();
  return cut.length <= DESC_MAX ? cut : cut.slice(0, DESC_MAX).trim();
}
