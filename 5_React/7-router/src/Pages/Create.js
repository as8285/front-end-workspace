import styled from "styled-components";
import { addAnimal } from "../api/animal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh -70px);
  * {
    margin-right: 5px;
    padding: 5px;
  }
  button {
    background-color: black;
    color: white;
    border-radius: 4px;
    border: 1px solid black;
    cursor: pointer;
  }
`;

const Create = () => {
  const navigate = useNavigate();
  const [animal, setAnimals] = useState({});

  const add = async () => {
    await addAnimal(animal);
    navigate("/");
  };
  return (
    <Div>
      <input
        type="text"
        placeholder="동물이름 입력"
        value={animal.name}
        onChange={(e) =>
          setAnimals((prev) => ({ ...prev, name: e.target.value }))
        }
      />

      <input
        type="text"
        placeholder="동물나이 입력"
        value={animal.age}
        onChange={(e) =>
          setAnimals((prev) => ({ ...prev, age: e.target.value }))
        }
      />

      <button onClick={add}>동물추가</button>
    </Div>
  );
};
export default Create;
