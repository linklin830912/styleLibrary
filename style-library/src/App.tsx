import React from "react";
import { Global } from "@emotion/react";
import globalStyle from "./styles/globalStyle";
import { useAppSelector } from "./app/hooks";
import MainContent from "./components/formattings/contents/MainContent";

function App() {
  const theme = useAppSelector((state) => state.theme);
  return (
    <>
      <Global styles={globalStyle(theme)} />
      <MainContent />
    </>
  );
}

export default App;
