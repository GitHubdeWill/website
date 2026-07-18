import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Markdown = (props) => (
  <ReactMarkdown
    {...props}
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
    components={{
      math: ({ value }) => <BlockMath>{value}</BlockMath>,
      inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>,
    }}
  />
);

export default Markdown;
