import movie from "./api/movie";

import styled from "styled-components";
const Home = () => {
  return (
    <Table>
      <h1>영화 목록</h1>
      <td>제목</td>
      <td>장르</td>
      <td>영화배우</td>
      <td>삭제</td>
    </Table>
  );
};
export default Home();
