import { ContentTransformer } from "./content-transformer";

import { HighlightedCode } from "./highlighted-code";
import { Page } from "../crystallize";
import Buy from "./buy.client";

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
