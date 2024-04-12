import { getAnimals, delAnimal } from "../api/animal";
import { useEffect, useState } from "react";
import styled from "styled-components";
const Table = styled.table`
  width: 100%;
  th {
    font-weight: bold;
    padding: 10px;
  }
  td {
    padding: 10px;
    text-align: center;
    border-top: 1px dashed gray;
  }
`;

const Home = () => {
  const [animals, setAnimals] = useState([]);

  const animalAPI = async () => {
    const result = await getAnimals();
    setAnimals(result.data);
  };

  useEffect(() => {
    animalAPI();
  }, []);

  const onDelete = async (no) => {
    await delAnimal(no);
    // 삭제 새로고침 x
    setAnimals(animals.filter((animal) => animal.no !== no));
  };

  return (
    <table>
      <thread>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>삭제</th>
        </tr>
      </thread>

      <tbody>
        {animals.map((animal) => (
          <tr key={animal.no}>
            <td>{animal.name}</td>
            <td>{animal.age}</td>
            <td>
              <button onClick={() => onDelete(animal.no)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Home;
