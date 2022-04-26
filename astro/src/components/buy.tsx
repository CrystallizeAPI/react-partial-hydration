import { useEffect, useState } from "react";
import type { CrystallizeProductVariant } from "../crystallize/types";

export function Buy({ variant }: { variant: CrystallizeProductVariant }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestIdleCallback(() => setReady(true));
    return () => cancelIdleCallback(id);
  }, []);

  function onClick() {
    localStorage.setItem("cart", JSON.stringify([{ sku: variant.sku }]));
    alert(`Added ${variant.name} to cart`);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: ready ? "green" : "red" }}
    >
      Buy now ({variant.price}€)
    </button>
  );
}
