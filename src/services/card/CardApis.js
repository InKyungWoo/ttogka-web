import api from "../utils";

/** 주요 카드사 목록 api */
export const GetMajorCardCompany = () => {
  return api.get(`/api/v1/brands/1/`);
};

/** 기타 카드사 목록 api */
export const GetExtraCardCompany = () => {
  return api.get(`/api/v1/brands`, {
    params: {
      extra: true,
    },
  });
};

/** 카드 목록 api */
export const GetCardList = (companyId, cardType) => {
  return api.get(`/api/v1/brands/${companyId}`, {
    params: {
      cate: cardType,
    },
  });
};

/** 카드 상세 api */
export const PostCardDetailList = (cardId, view) => {
  return api.post(`/api/v1/card/${cardId}`, {
    view_count: view + 1,
  });
};

/** 분야별 순위 api */
export const GetCategoryRank = (categoryId) => {
  return api.get("/api/v1/rank", {
    params: {
      category: categoryId,
    },
  });
};
