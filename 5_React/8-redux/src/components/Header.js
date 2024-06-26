// 초기값 가져오기
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const counter = useSelector((state) => state.counter);
  return <h1>Total clicks: {counter}</h1>;
};
export default Header;
