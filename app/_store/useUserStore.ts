import { create } from 'zustand';
import { ACCESS_TOKEN_KEY } from '@/app/_constants/api';

interface UserStore {
  memberId: string;
  setMemberId: (memberId: string) => void;
}

const getInitialMemberId = () => {
  if (typeof window === 'undefined') return '';

  const authStorage = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!authStorage) return '';

  try {
    const { state } = JSON.parse(authStorage);
    return state?.memberId || '';
  } catch (error) {
    console.error('Error parsing authStorage:', error);
    return '';
  }
};

export const useUserStore = create<UserStore>((set) => ({
  memberId: getInitialMemberId(),
  setMemberId: (memberId) => set({ memberId }),
}));
