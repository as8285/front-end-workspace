import axios from "axios";

// 반복 만들기

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// 1개 보여주기 - getAniaml
export const getAnimal = async () => {
  return await instance.get("animal/" + no);
};

// 수정하기 - updateAnimal
export const getAniaml = async () => {
  return await instance.put("animal", data);
};

export const getAnimals = async () => {
  return await instace.get("animal");
};

export const addAnimal = async (data) => {
  return await instace.post("animal", data);
};

export const delAnimal = async (no) => {
  return await instace.delete("animal", no);
};
