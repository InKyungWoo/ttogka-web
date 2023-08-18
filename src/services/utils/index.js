import axios from "axios";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 네트워크 연결 상태 확인 함수
const checkNetworkStatus = async () => {
  try {
    await api.get("/"); // 빈 요청을 보내서 서버와의 연결을 확인
    console.log("네트워크 연결이 정상입니다.");
  } catch (error) {
    console.error("네트워크 연결에 문제가 있습니다:", error);
  }
};

checkNetworkStatus();

export default api;
