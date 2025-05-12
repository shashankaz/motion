import { create } from "zustand";

interface Done {
  done: boolean;
  setDone: (state: boolean) => void;
}

export const useDone = create<Done>()((set) => ({
  done: false,
  setDone: (state) => set(() => ({ done: state })),
}));
