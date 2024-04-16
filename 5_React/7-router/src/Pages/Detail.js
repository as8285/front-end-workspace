import { getAnimal, updateAnimal } from "../api/animal";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    margin-right: 5px;
    padding: 5px;
  }
  button {
    background-color: black;
    color: white;
    border-radius: 4px;
    border: 1px solid black;
  }
`;
const Detail = () => {
  const { no } = useParams();
  const navigate = useNavigate();
  // 초기 세팅을 해줘야 한다.
  const [animal, setAnimal] = useState({ name: "", age: 0 });

  const animalAPI = async () => {
    const response = await getAnimal(no);
    navigate("/");
    setAnimal(response.data);
  };

  useEffect(() => {
    animalAPI();
  }, []);
  const update = async () => {
    await updateAnimal(no);
    setAnimal(response.data);
  };
  return (
    <>
      <input
        type="text"
        value={animal.name}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="text"
        value={animal.age}
        onChange={(e) =>
          setAnimal((prev) => ({ ...prev, age: e.target.value }))
        }
      />
      <button onClick={() => updateAnimal(animal.no)}>정보 수정</button>
    </>
  );
};

export default Detail;
