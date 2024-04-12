import { getFetch, getAwait, getAxios, useGetQuery } from "./api/animal";
import { useEffect, useState } from "react";

const App = () => {
  //const [data, setData] = useState([]);

  //const dataLoad = async () => {
  //const result = await getAxios();
  //setData(result);
  // getAwait().then((result) => {
  //   console.log(result);
  //   setData(result);
  // });
  //};

  //useEffect(() => {
  // dataLoad();
  //}, []);

  // react-query
  const { data, isLoading, isError } = useGetQuery();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <>
      {data?.map((animal) => (
        <div key={animal.no}>{animal.name}</div>
      ))}
    </>
  );
};

export default App;
