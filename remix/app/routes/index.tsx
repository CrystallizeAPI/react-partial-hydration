import { useLoaderData } from "@remix-run/react";
import { ContentTransformer } from "@crystallize/react-content-transformer";

import { getPage } from "~/crystallize";
import { Buy } from "~/components/buy";
import { HighlightedCode } from "~/components/highlighted-code";

export function loader() {
  return getPage();
}

export function headers() {
  return {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  };
}

export default function Index() {
  const page = useLoaderData();

  return (
    <main>
      <div className="page-content">
        <h1>{page.name}</h1>
        <section className="blog-intro">
          <ContentTransformer json={page.intro} />
        </section>
        <section>
          <Buy variant={page.defaultVariant} />
        </section>
        <section className="source-code">
          <HighlightedCode sourceCode={page.sourceCode} />
        </section>
      </div>
    </main>
  );
}
