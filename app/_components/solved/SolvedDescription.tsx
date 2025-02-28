'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
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
          <h1
            className="mb-4 mt-6 scroll-m-20 text-lg font-semibold uppercase leading-tight text-secondary-foreground"
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <h2
            className="mb-4 mt-6 scroll-m-20 text-lg font-semibold uppercase leading-tight text-secondary-foreground"
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3
            className="mb-4 mt-6 scroll-m-20 text-lg font-semibold uppercase leading-tight text-secondary-foreground"
            {...props}
          />
        ),
        h4: ({ node, ...props }) => (
          <h4
            className="mb-4 mt-6 scroll-m-20 text-lg font-semibold uppercase leading-tight text-secondary-foreground"
            {...props}
          />
        ),
        h5: ({ node, ...props }) => (
          <h5
            className="mb-4 mt-6 scroll-m-20 pb-1 text-lg font-semibold uppercase leading-tight text-secondary-foreground"
            {...props}
          />
        ),
        h6: ({ node, ...props }) => (
          <h6
            className="mb-2 scroll-m-20 pb-1 text-sm font-bold uppercase leading-tight text-primary-foreground"
            {...props}
          />
        ),
        hr: ({ node, ...props }) => <hr className="my-4 border-t border-[#666]" {...props} />,
        p: ({ node, ...props }) => (
          <p className="my-2 text-base font-medium leading-7 text-primary-foreground" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul
            className="mt-2 list-disc space-y-1 pl-6 text-base font-medium text-primary-foreground"
            {...props}
          />
        ),
        ol: ({ node, ...props }) => (
          <ol className="mt-2 list-decimal space-y-1 pl-6 text-primary-foreground" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="mt-4 border-l-4 border-primary-foreground pl-4 italic text-primary-foreground"
            {...props}
          />
        ),
        a: ({ node, ...props }) => (
          <a className="text-accent-foreground hover:underline" {...props} />
        ),
        img: ({ node, ...props }) => (
          <img className="h-auto max-w-full rounded-lg shadow-md" {...props} />
        ),
        strong: ({ node, ...props }) => <strong className="font-bold text-[#B2C0CC]" {...props} />,
        em: ({ node, ...props }) => <em className="italic text-primary-foreground" {...props} />,
        del: ({ node, ...props }) => (
          <del className="text-primary-foreground line-through" {...props} />
        ),
        table: ({ node, ...props }) => (
          <table
            className="my-4 w-full border-collapse border border-bolder text-primary-foreground"
            {...props}
          />
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-[#333] text-primary-foreground" {...props} />
        ),
        tbody: ({ node, ...props }) => <tbody className="bg-[#222]" {...props} />,
        tr: ({ node, ...props }) => (
          <tr className="border-b border-[#444] transition-colors hover:bg-[#333]" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th className="border border-[#555] px-4 py-2 text-left font-bold" {...props} />
        ),
        td: ({ node, ...props }) => <td className="border border-[#555] px-4 py-2" {...props} />,
        code({ node, className, children, ...props }) {
          const isInline = (props as any).inline ?? false;

          // 인라인 코드일 경우
          if (isInline) {
            return (
              <code
                className="inline-code mx-1 rounded border border-bolder bg-[#2D2D2D] px-2 py-1 text-primary-foreground"
                {...props}
              >
                {children}
              </code>
            );
          }

          // 블록 코드일 경우 (pre 안에서 처리되므로 여기서는 기본 스타일만)
          return (
            <code
              className="mx-1 rounded border border-bolder bg-[#2D2D2D] px-2 py-1 text-primary-foreground"
              {...props}
            >
              {children}
            </code>
          );
        },
        pre({ node, className, children, ...props }) {
          // codehilite 클래스가 있는 경우
          if (className?.includes('codehilite')) {
            return (
              <pre className="flex" {...props}>
                {children}
              </pre>
            );
          }

          // 기본 pre 스타일
          return (
            <pre
              className="my-4 overflow-x-auto rounded-lg border border-[#555] bg-[#2D2D2D] p-4 text-primary-foreground"
              {...props}
            >
              {children}
            </pre>
          );
        },
      }}
    />
  );
};

export default SolvedDescription;
