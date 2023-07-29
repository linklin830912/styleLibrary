import React from "react";
import { Global } from "@emotion/react";
import globalStyle from "./styles/globalStyle";
import { useAppSelector } from "./app/hooks";
import MainContent from "./components/formattings/contents/MainContent";

function App() {
  const color = useAppSelector((state) => state.color);
  const font = useAppSelector((state) => state.font);
  return (
    <>
      <Global styles={globalStyle(color, font)} />
      <MainContent />
    </>
  );
}

export default App;
