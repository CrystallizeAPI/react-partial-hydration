import { ContentTransformer } from "@crystallize/react-content-transformer";

import type { Page } from "../crystallize";
import { HighlightedCode } from "./highlighted-code";
import Buy from "./buy";

type Props = {
  page: Page;
};

export default function PageContent(props: Props) {
  const { page } = props;

  return (
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
  );
}
