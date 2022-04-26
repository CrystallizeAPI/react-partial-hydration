import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atelierSeasideLight as codeStyle } from "react-syntax-highlighter/dist/cjs/styles/hljs/index.js";

export function HighlightedCode({ sourceCode }: { sourceCode: string }) {
  return (
    <SyntaxHighlighter language="javascript" style={codeStyle}>
      {sourceCode}
    </SyntaxHighlighter>
  );
}
