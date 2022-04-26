import { Suspense } from "react";
import { GetStaticProps } from "next";

import { getPage, Page } from "../crystallize";
import { GlobalStyles } from "../components/global-styles";
import PageContent from "../components/page-content";

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPage();

  return {
    props: {
      page,
    },
    revalidate: 1,
  };
};

interface Props {
  page: Page;
}

export default function IndexPartialHydration(props: Props) {
  const { page } = props;

  return (
    <>
      <GlobalStyles />
      <main>
        <Suspense fallback="Loading...">
          <PageContent page={page} />
        </Suspense>
      </main>
    </>
  );
}
