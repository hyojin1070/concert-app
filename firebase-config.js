// ⚠️ Firebase 콘솔에서 복사한 값으로 아래를 채워주세요.
// 경로: https://console.firebase.google.com → 프로젝트 선택 → 왼쪽 위 톱니바퀴 → 프로젝트 설정
//       → 아래로 스크롤 → "내 앱" → 웹 아이콘(</>)으로 등록한 앱의 SDK 설정 및 구성
//
// 값을 채우기 전까지 index.html은 내장된 기본 목록으로 동작합니다.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 관리자 페이지(admin.html) 접속 시 입력해야 하는 비밀번호.
// 아무나 이 값을 코드에서 볼 수 있으니, 정말 민감한 데이터는 이 방식으로 보호하지 마세요.
const ADMIN_PASSWORD = "concert2026";
