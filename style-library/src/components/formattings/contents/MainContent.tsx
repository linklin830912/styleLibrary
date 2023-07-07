import React, { useState, useMemo } from "react";
import style from "./mainContent.module.css";
import MenuPanel from "../panels/MenuPanel";
import DrawerButton from "../buttons/DrawerButton";
import ContentPanel from "../panels/ContentPanel";
import CodePanel from "../panels/CodePanel";

function MainContent() {
  const panelWidth = 300;

  const [leftButtonPosition, setLeftButtonPosition] =
    useState<number>(panelWidth);
  const [rightButtonPosition, setRightButtonPosition] = useState<number>(
    window.innerWidth - panelWidth
  );
  const [currentPositionButton, setCurrentPositionButton] = useState<number>(); //0=left, 1=right

  const leftPanelWidth = useMemo<number>(() => {
    return leftButtonPosition;
  }, [leftButtonPosition]);
  const midPanelWidth = useMemo<number>(() => {
    return rightButtonPosition - leftButtonPosition;
  }, [leftButtonPosition, rightButtonPosition]);

  return (
    <>
      <div
        className={style.container_div}
        onMouseMove={(e) => {
          if (currentPositionButton === 0) setLeftButtonPosition(e.clientX);
          else if (currentPositionButton === 1)
            setRightButtonPosition(e.clientX);
        }}
        onMouseUp={() => {
          setCurrentPositionButton(undefined);
        }}
      >
        <div>
          <div style={{ width: `${leftPanelWidth}px` }}>
            <MenuPanel></MenuPanel>
          </div>
        </div>
        <DrawerButton
          onMouseDown={() => {
            setCurrentPositionButton(0);
          }}
        />
        <div>
          <div style={{ width: `${midPanelWidth}px` }}>
            <ContentPanel></ContentPanel>
          </div>
        </div>
        <DrawerButton
          onMouseDown={() => {
            setCurrentPositionButton(1);
          }}
          isFlipped={true}
        />
        <div>
          <div>
            <CodePanel></CodePanel>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
