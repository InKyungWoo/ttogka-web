import { create } from "zustand";

const useCardStore = create((set) => ({
  selectedCard: null, // 선택된 카드 정보
  cardList: [], // 카드 목록
  selectCard: (card) => set({ selectedCard: card }),
  setCardList: (list) => set({ cardList: list }),
}));

export default useCardStore;
