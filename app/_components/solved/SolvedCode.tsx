'use client';

import { Dispatch, SetStateAction, useCallback } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';

// 테마 옵션 설정
const options = {
  fontSize: 14,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  lineNumbers: 'on',
  automaticLayout: true,
  stickyScroll: {
    enabled: false,
  },
};

interface SolvedCodeProps {
  solvedCode: string;
  setSolvedCode: Dispatch<SetStateAction<string>>;
}

const SolvedCode = ({ solvedCode, setSolvedCode }: SolvedCodeProps) => {
  const handleEditorChange = useCallback((value: string | undefined) => {
    if (value !== undefined) {
      setSolvedCode(value);
    }
  }, []);

  // Monaco 인스턴스에서 테마 정의
  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.editor.defineTheme('myCustomTheme', {
      base: 'vs-dark', // 기본 테마
      inherit: true, // 기본 테마 스타일 상속 여부
      rules: [
        // 기본 토큰
        { token: 'comment', foreground: '76808B' },
        { token: 'keyword', foreground: '8AAAFF' },

        // 문자열 및 숫자
        { token: 'string', foreground: 'FEA48E' },
        { token: 'number', foreground: '76DB89' },

        // 타입 및 식별자
        { token: 'type', foreground: '8AAAFF' },
        { token: 'identifier', foreground: 'f3f179' },
        { token: 'variable', foreground: 'ECFAFF' },

        // 클래스 및 함수
        { token: 'class', foreground: 'ffffff' },
        { token: 'interface', foreground: 'F3F179' },
        { token: 'function', foreground: 'EEB8FF' }, // 이거 안됨
        { token: 'method', foreground: 'EEB8FF' }, // 이거 안됨

        // Java 특화 토큰 추가
        { token: 'delimiter', foreground: 'ECFAFF' },
        { token: 'operator', foreground: 'ECFAFF' }, // 이거 안됨
        { token: 'annotation', foreground: 'FEA48E' },
        { token: 'modifier', foreground: '8AAAFF' }, // 이거 안됨
        { token: 'constant', foreground: '76DB89' },

        // 불리언 값
        { token: 'keyword.true', foreground: '76DB89' },
        { token: 'keyword.false', foreground: '76DB89' },

        // 타입 이름
        { token: 'entity.name.type', foreground: 'F3F179' },
      ],
      colors: {
        'editor.background': '#212830', // 배경색 (원래 투명 설정은 적용 안 됨)
        'editor.foreground': '#ECFAFF', // 기본 텍스트
        'editorCursor.foreground': '#f5e0dc', // 커서
        'editor.selectionBackground': '#77a7f342', // 선택 영역
        'editor.selectionHighlightBackground': '#f5e0dc80',
        'editor.lineHighlightBackground': '#2a333b', // 현재 줄 하이라이트
        'editorGutter.background': '#212830', // 줄 번호 배경
        'editorGutter.foreground': '#9198a1', // 줄 번호 색상
      },
    });
  };

  return (
    <Editor
      height="100%"
      language="java"
      value={solvedCode}
      theme="myCustomTheme"
      options={options}
      onChange={handleEditorChange}
      beforeMount={handleEditorWillMount}
    />
  );
};

export default SolvedCode;
