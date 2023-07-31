import React, { useState, useEffect, useRef } from "react";
import style from "./styles/menuPanelStyle.module.css";
import { Panel } from "./Panel";
import { dataEntryRoutes, generalRoutes } from "../../../app/routes/route";
import SearchInput from "../../inputs/SearchInput";
import BranchList from "../../Lists/BranchList";
import PressButton from "../../styles/buttons/PressButton";
import StatusType from "../../enums/StatusType";
import HeaderType from "../../enums/HeaderType";

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
