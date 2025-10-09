import { create } from "zustand";

interface TextState {
  text: string;
  setText: (value: string) => void;
}

export const useTextStore = create<TextState>((set) => ({
  text: "",
  setText: (value) => set({ text: value }),
}));
