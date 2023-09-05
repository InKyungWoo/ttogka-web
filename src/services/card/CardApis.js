import api from "../utils";

/** 주요 카드사 목록 api */
export const GetMajorCardCompany = async () => {
  try {
    const response = await api.get(`/brand/`, {});
    return response.data;
  } catch (error) {
    console.error(
      "주요 카드사 목록을 가져오는 중에 오류가 발생했습니다:",
      error
    );
    throw error;
  }
};

/** 기타 카드사 목록 api */
export const GetExtraCardCompany = async () => {
  try {
    const response = await api.get(`/brand`, {
      params: {
        extra: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "기타 카드사 목록을 가져오는 중에 오류가 발생했습니다:",
      error
    );
    throw error;
  }
};

/** 카드 목록 api */
export const GetCardList = async (companyId, cardType) => {
  try {
    const response = await api.get(`/brand/${companyId}`, {
      params: {
        cate: cardType,
      },
    });
    return response.data;
  } catch (error) {
    console.error("카드 목록을 가져오는 중에 오류가 발생했습니다:", error);
    throw error;
  }
};

/** 카드 상세 api */
export const PostCardDetailList = async (cardId, view) => {
  try {
    const response = await api.post(`/card/${cardId}`, {
      view_count: view + 1,
    });
    return response.data;
  } catch (error) {
    console.error("카드 상세 정보를 가져오는 중에 오류가 발생했습니다:", error);
    throw error;
  }
};

/** 분야별 순위 api */
export const GetCategoryRank = async (categoryId) => {
  try {
    const response = await api.get("/rank", {
      params: {
        category: categoryId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("분야별 순위를 가져오는 중에 오류가 발생했습니다:", error);
    throw error;
  }
};
