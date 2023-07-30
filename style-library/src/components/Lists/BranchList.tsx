import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import style from "./styles/branchListStyle.module.css";
import { useAppSelector } from "../../../../app/hooks";
import route from "../../../../app/routes/route";
import isTrue from "../../../../untils/generals/isTrue";

type branchListProps = {
  listItems: route[];
};

function BranchList(props: branchListProps) {
  const color = useAppSelector((state) => state.color);

  return (
    <Router>
      <ul className={style.container_ul}>
        {props.listItems.map((item, index) => (
          <li key={index}>
            <div className={style.li_div}>
              <BranchListSvg
                isEnd={index === props.listItems.length - 1}
                stroke={color.mainColor}
              />
              <span>
                <Link to={item.value}>{item.name}</Link>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Router>
  );
}
export default BranchList;

type branchListSvgProps = {
  stroke: string;
  isEnd?: boolean;
};
function BranchListSvg(props: branchListSvgProps) {
  return (
    <svg
      viewBox="0 0 5 10"
      width={"10px"}
      strokeWidth={"0.5px"}
      stroke={props.stroke}
      fill="transparent"
    >
      {isTrue(props.isEnd) && <polyline points="5,5 0.53,5 0.53,0 " />}
      {!isTrue(props.isEnd) && (
        <>
          <line x1="0.53" y1="0" x2="0.53" y2="10" />
          <line x1="0.53" y1="5" x2="5" y2="5" />
        </>
      )}
    </svg>
  );
}
