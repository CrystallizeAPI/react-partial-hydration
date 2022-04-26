export const queryGetPage = `
  query GET_PAGE($language: String!, $path: String!) {
    page: catalogue(language: $language, path: $path) {
      path
      name

      ... on Product {
        defaultVariant {
          sku
          price
          name
          firstImage {
            url
            altText
            variants {
              url
              width
              height
              size
            }
          }
        }
      }

      intro: component(id: "intro") {
        content {
          ... on RichTextContent {
            json
          }
        }
      }
      source: component(id: "source") {
        content {
          ... on SingleLineContent {
            text
          }
        }
      }
    }
  }
`;
