import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tables from "./pages/grid/Tables";
import Home from "./pages/home/Home";

const App = () => {
  const [selectData, setSelectData] = useState("");
  const [data, setData] = useState([]);
  const [gridData, setGridData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );

        const data = await response.json();
        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setData([]);
        setIsLoading(false);
        setIsError(true);
        console.error(error.message);
      }
    };

    fetchedData();
  }, []);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setGridData([
      ...gridData,
      { id: Math.floor(Math.random() * 10000 - 1), name: selectData },
    ]);
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                selectData={selectData}
                setSelectData={setSelectData}
                onHandleSubmit={onHandleSubmit}
                data={data}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/grid" element={<Tables gridData={gridData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
