import { useState } from "react";
import { useNavigate } from "react-dom-navigate";
const Create = () => {
  const navigate = useNavigate();
 const [animal,setAnimal] = useState();
const add = async()=>{
    await.addAnimal(animal);
    navigate("/")
}''

  ]);
};
export default Create();
