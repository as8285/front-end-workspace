import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
// 가장 먼저 스토어 생성

const store = createStore(store);

// Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
