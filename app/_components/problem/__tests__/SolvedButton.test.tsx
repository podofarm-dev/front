import { render, screen, fireEvent } from '@testing-library/react';
import SolvedButton from '../SolvedButton';
import { SOLVED_STATUS } from '@/app/_constants/status';

describe('SolvedButton Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('기본 상태로 정상적으로 렌더링되어야 합니다', () => {
    render(<SolvedButton value={SOLVED_STATUS.ALL} onChange={mockOnChange} />);

    // 드롭다운 트리거 버튼이 렌더링되어야 함
    const triggerButton = screen.getByRole('button', { name: /status/i });
    expect(triggerButton).toBeInTheDocument();

    // 초기에는 드롭다운 메뉴가 닫혀있어야 함
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('드롭다운 메뉴를 클릭하면 메뉴가 열려야 합니다', () => {
    render(<SolvedButton value={SOLVED_STATUS.ALL} onChange={mockOnChange} />);

    const triggerButton = screen.getByRole('button', { name: /status/i });
    fireEvent.click(triggerButton);

    // 드롭다운 메뉴가 열려야 함
    expect(screen.getByRole('menu')).toBeInTheDocument();

    // 모든 옵션이 표시되어야 함
    expect(screen.getByText('전체 문제')).toBeInTheDocument();
    expect(screen.getByText('푼 문제')).toBeInTheDocument();
    expect(screen.getByText('틀린 문제')).toBeInTheDocument();
  });

  it('상태를 변경하면 onChange가 호출되어야 합니다', () => {
    render(<SolvedButton value={SOLVED_STATUS.ALL} onChange={mockOnChange} />);

    // 드롭다운 메뉴 열기
    const triggerButton = screen.getByRole('button', { name: /status/i });
    fireEvent.click(triggerButton);

    // '푼 문제' 선택
    const completeOption = screen.getByText('푼 문제');
    fireEvent.click(completeOption);

    // onChange가 올바른 값으로 호출되어야 함
    expect(mockOnChange).toHaveBeenCalledWith(SOLVED_STATUS.COMPLETE);
  });

  it('현재 선택된 상태가 올바르게 표시되어야 합니다', () => {
    render(<SolvedButton value={SOLVED_STATUS.COMPLETE} onChange={mockOnChange} />);

    // 드롭다운 메뉴 열기
    const triggerButton = screen.getByRole('button', { name: /status/i });
    fireEvent.click(triggerButton);

    // '푼 문제' 옵션이 선택된 상태로 표시되어야 함
    const completeOption = screen.getByText('푼 문제');
    expect(completeOption).toHaveAttribute('data-state', 'checked');
  });

  it('키보드 네비게이션이 정상적으로 동작해야 합니다', () => {
    render(<SolvedButton value={SOLVED_STATUS.ALL} onChange={mockOnChange} />);

    // 드롭다운 메뉴 열기
    const triggerButton = screen.getByRole('button', { name: /status/i });
    fireEvent.click(triggerButton);

    // 키보드로 옵션 선택
    fireEvent.keyDown(triggerButton, { key: 'ArrowDown' });
    fireEvent.keyDown(triggerButton, { key: 'Enter' });

    // onChange가 호출되어야 함
    expect(mockOnChange).toHaveBeenCalled();
  });
});
