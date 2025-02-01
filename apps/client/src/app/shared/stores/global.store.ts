import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IState {
  sideMenuOpened: boolean;
}

interface IStore extends IState {
  handleChangeGlobalStore: (value: Partial<IState>) => void;
}

// global store
export const useGlobalStore = create<IStore>()(
  devtools(
    (set) => ({
      sideMenuOpened: true,
      handleChangeGlobalStore: (value) => set((state) => ({ ...state, ...value })),
    }),
    { enabled: process.env.NODE_ENV !== 'production' },
  ),
);
