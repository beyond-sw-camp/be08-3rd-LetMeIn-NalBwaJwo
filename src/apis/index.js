import axios from "axios";

console.log(import.meta.env.VITE_PUBLIC_SERVER_URL);

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_SERVER_URL,
  timeout: 3000,
});

apiClient.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    console.log(error);

    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
apiClient.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    console.log(error);

    return Promise.reject(error);
  }
);

export default apiClient;
