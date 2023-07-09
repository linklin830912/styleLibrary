import React from "react";
import style from "./styles/panelStyle.module.css";

type panelProps = {
  header?: string;
  children?: JSX.Element | JSX.Element[];
};
export function Panel(props: panelProps) {
  return (
    <>
      <div className={style.container_div}>
        <div className={style.panel_styel_div}>
          {props.header && (
            <div className={style.header_div}>
              <h4>{props.header}</h4>
            </div>
          )}
          {props.children && (
            <div className={style.children_div}>{props.children}</div>
          )}
        </div>
      </div>
    </>
  );
}
