import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const getAnimals = async () => {
  return await instance.get("animal");
};
export const getAnimal = async (no) => {
  return await instance.get("animal/" + no);
};
// 수정
export const updateAnimal = async (data) => {
  return await instance.get("animal" + data);
};
export const addAnimal = async (data) => {
  return await instance.post("animal", data);
};
export const delAnimal = async (no) => {
  return await instance.delete("animal" + no);
};
