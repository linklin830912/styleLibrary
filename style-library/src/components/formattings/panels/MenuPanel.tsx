import React, { useState, useEffect, useRef } from "react";
import style from "./styles/menuPanelStyle.module.css";
import SearchInput from "../../generals/inputs/SearchInput";
import { Panel } from "./Panel";
import BranchList from "../../generals/Lists/BranchList";
import { dataEntryRoutes, generalRoutes } from "../../../app/routes/route";
import PressButton from "../buttons/PressButton";
import HeaderType from "../../generals/enums/HeaderType";
import StatusType from "../../generals/enums/StatusType";

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
      <Panel header="DATA ENTRY">
        <BranchList listItems={dataEntryRoutes} />
      </Panel>
      <PressButton
        title="press button"
        onClick={() => {}}
        status={StatusType.main}
        size={HeaderType.h1}
        isRoundCornered={false}
        isStretch={false}
      />
    </div>
  );
}
export default MenuPanel;
