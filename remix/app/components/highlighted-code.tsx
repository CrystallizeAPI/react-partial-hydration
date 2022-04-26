import SyntaxHighlighter from "react-syntax-highlighter";
// @ts-expect-error
import codeStyle from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-light.js";

export function HighlightedCode({ sourceCode }: { sourceCode: string }) {
  return (
    <SyntaxHighlighter language="javascript" style={codeStyle}>
      {sourceCode}
    </SyntaxHighlighter>
  );
}
