'use client';

import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { useCallback, useState } from 'react';

interface SolvedCodeProps {
  code: string;
}

const SolvedCode = ({ code }: SolvedCodeProps) => {
  const [solvedCode, setSolvedCode] = useState(code);

  const onChange = useCallback((value: string) => {
    setSolvedCode(value);
    console.log(value);
  }, []);

  return (
    <CodeMirror value={solvedCode} theme={vscodeDark} extensions={[java()]} onChange={onChange} />
  );
};

export default SolvedCode;
