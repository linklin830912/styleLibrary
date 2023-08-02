import React, { useRef, useEffect } from "react";
import style from "./searchInputStyle.module.css";
import isTrue from "../../untils/generals/isTrue";

type SearchInputProps = {
  text: string;
  isBrief: boolean;
};

function SearchInput(props: SearchInputProps) {
  return (
    <>
      <input
        className={style.container_input}
        type="text"
        placeholder={isTrue(props.isBrief) ? "..." : `search ${props.text}`}
      />
    </>
  );
}
export default SearchInput;
