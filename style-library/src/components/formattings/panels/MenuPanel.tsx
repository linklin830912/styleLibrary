import React, { useState, useEffect, useRef } from "react";
import style from "./styles/menuPanelStyle.module.css";
import SearchInput from "../../generals/inputs/SearchInput";
import { Panel } from "./Panel";
import BranchList from "../../generals/Lists/BranchList";
import { generalRoutes } from "../../../app/routes/route";

function MenuPanel() {
  const limitWidth = 75;
  const [isBrief, setIsBrief] = useState<boolean>(false);
  const containerDivRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      containerDivRef?.current?.offsetWidth &&
      containerDivRef?.current?.offsetWidth < limitWidth
    ) {
      setIsBrief(true);
    } else {
      setIsBrief(false);
    }
  }, [containerDivRef?.current?.offsetWidth]);

  return (
    <div className={style.container_div} ref={containerDivRef}>
      <Panel header="SEARCH">
        <SearchInput text="component" isBrief={isBrief} />
      </Panel>
      <Panel header="GENERAL">
        <BranchList listItems={generalRoutes} />
      </Panel>
    </div>
  );
}
export default MenuPanel;
