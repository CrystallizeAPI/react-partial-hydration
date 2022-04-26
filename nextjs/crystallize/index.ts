import { createClient } from "@crystallize/js-api-client";

import { queryGetPage } from "./query-get-page";
import type { CrystallizeProductVariant, CrystallizeRichText } from "./types";

const client = createClient({
  tenantIdentifier: "react-partial-hydration",
});

export type Page = {
  name: string;
  path: string;
  intro: CrystallizeRichText;
  sourceCode: string;
  defaultVariant: CrystallizeProductVariant;
};

export async function getPage(): Promise<Page> {
  const { page } = await client.catalogueApi(queryGetPage, {
    path: "/react-1820",
    language: "en",
  });

  return {
    ...page,
    intro: page.intro?.content?.json,
    sourceCode: await fetch(page.source?.content?.text).then((r) => r.text()),
  };
}
