import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <a href="#">목록</a>
        <a href="#">추가</a>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout();
