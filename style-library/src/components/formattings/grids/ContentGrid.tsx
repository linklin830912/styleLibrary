import React from "react";
import style from "./styles/contentGridStyle.module.css";
import { Panel } from "../panels/Panel";

type contentGridProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
};
function ContentGrid(props: contentGridProps) {
  return (
    <>
      <div className={style.container_div}>
        <h2>{props.title}</h2>
        <Panel header={"SET UP"}></Panel>
      </div>
    </>
  );
}

export default ContentGrid;
