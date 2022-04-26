import { GetStaticProps } from "next";

import { Page, getPage } from "../crystallize";
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

export default function Index(props: Props) {
  const { page } = props;

  return (
    <>
      <GlobalStyles />
      <main>
        <PageContent page={page} />
      </main>
    </>
  );
}
