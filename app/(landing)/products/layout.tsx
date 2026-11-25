// Loads the CSS-mask icon styles used by every /products page (see
// scripts/gen-mask-icons.cjs). Kept out of globals.css so other pages don't
// download it.
import "./product-icons.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
