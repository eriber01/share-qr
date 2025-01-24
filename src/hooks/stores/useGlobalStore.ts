import { create } from 'zustand';

interface GlobalStore {
  isOpenShareQrModal: boolean;
  toggleShareQrModal: () => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  isOpenShareQrModal: false,
  toggleShareQrModal: () =>
    set((state) => ({
      isOpenShareQrModal: !state.isOpenShareQrModal,
    })),
}));