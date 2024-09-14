import { create } from "zustand";

interface CounterState {
  title: string;
  imageUrl: string;
  song: string | null;
  setTitle: (title: string) => void;
  setImageUrl: (imageUrl: string) => void;
  setSong: (song: string) => void;
  updateMusicInfo: (title: string, imageUrl: string, song: string) => void;
}

export const useMusicStore = create<CounterState>((set) => ({
  title: "",
  imageUrl: "",
  song: null,
  setTitle: (title) => set({ title }),
  setImageUrl: (imageUrl) => set({ imageUrl }),
  setSong: (song) => set({ song }),
  updateMusicInfo: (title, imageUrl, song) => set({ title, imageUrl, song }),
}));
