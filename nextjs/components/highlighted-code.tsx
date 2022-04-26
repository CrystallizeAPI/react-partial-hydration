import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import codeStyle from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-seaside-light";

SyntaxHighlighter.registerLanguage("javascript", js);

export function HighlightedCode({ sourceCode }: { sourceCode: string }) {
  return (
    <SyntaxHighlighter language="javascript" style={codeStyle}>
      {sourceCode}
    </SyntaxHighlighter>
  );
}
