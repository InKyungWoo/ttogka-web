import axios from "axios";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 네트워크 연결 상태 확인
const checkNetworkStatus = async () => {
  try {
    await api.get("/"); // 빈 요청을 보내서 서버와의 연결을 확인
    console.log("네트워크 연결이 정상입니다.");
  } catch (error) {
    console.error("네트워크 연결에 문제가 있습니다:", error);
  }
};

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 수행할 작업
    return config;
  },
  (error) => {
    // 요청 오류 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    // 성공적인 응답 처리
    return response.data;
  },
  (error) => {
    // 응답 오류 처리
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          console.error("잘못된 요청:", data);
          break;
        case 401:
          console.error("인증 오류:", data);
          break;
        case 404:
          console.error("API가 찾을 수 없음:", data);
          break;
        case 500:
          console.error("서버 오류:", data);
          break;
        default:
          console.error("알 수 없는 오류:", data);
      }
    } else if (error.request) {
      // 요청이 만들어지지 않은 경우 (네트워크 오류 등)
      console.error("요청 오류:", error.request);
    } else {
      // 그 외의 오류 처리
      console.error("오류 발생:", error.message);
    }
    return Promise.reject(error);
  }
);

// checkNetworkStatus();

export default api;
