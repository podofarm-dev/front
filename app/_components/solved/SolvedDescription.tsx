'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

interface SolvedDescriptionProps {
  description: string;
}

const SolvedDescription = ({ description }: SolvedDescriptionProps) => {
  return (
    <ReactMarkdown
      children={description || ''}
      rehypePlugins={[rehypeRaw]} // HTML 태그를 허용
      remarkPlugins={[remarkGfm]} // GFM 문법 지원
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight text-[#FFD700]" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight text-[#ADFF2F]" {...props} />
        ),
        h5: ({ node, ...props }) => (
          <h5 className="scroll-m-20 text-xl font-bold tracking-tight text-[#281aa8]" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="leading-7 text-[#FFFFFF] [&:not(:first-child)]:mt-6" {...props} />
        ),
        code({ node, className, children, ...props }) {
          const isInline = (props as any).inline ?? false;
          const match = /language-(\w+)/.exec(className || '');
          return !isInline && match ? (
            <CodeMirror
              value={String(children).replace(/\n$/, '')}
              theme={vscodeDark}
              extensions={[java()]}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default SolvedDescription;
