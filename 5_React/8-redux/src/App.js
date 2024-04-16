import Header from "./components/Header";
import { increase, decrease } from "./store/counter";
// 초기값 가져오기
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <button OnClick={() => dispatch(increase())}>+1</button>
      <button OnClick={() => dispatch(decrease())}>-1</button>
    </>
  );
};

export default App;
