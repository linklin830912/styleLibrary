import React, { useState, useMemo, useEffect } from "react";
import style from "./styles/mainContent.module.css";
import MenuPanel from "../panels/MenuPanel";
import ContentPanel from "../panels/ContentPanel";
import CodePanel from "../panels/CodePanel";
import { useMainContent } from "./hooks/useMainContent";
import DrawerButton from "../../styles/buttons/DrawerButton";

export type mainContentProps = {
  panelPortions?: {
    left?: number;
    right?: number;
  };
};

function MainContent(props: mainContentProps) {
  const minPanelWidth = 60;
  const {
    leftPanelWidth,
    rightPanelWidth,
    windowWidth,
    currentPositionButton,
    setCurrentPositionButton,
    setLeftButtonPosition,
    setRightButtonPosition,
  } = useMainContent(props);

  return (
    <>
      <div
        className={style.container_div}
        onMouseMove={(e) => {
          if (currentPositionButton === 0) {
            setLeftButtonPosition(
              e.clientX < minPanelWidth ? minPanelWidth : e.clientX
            );
          } else if (currentPositionButton === 1) {
            setRightButtonPosition(e.clientX);
          }
        }}
        onMouseUp={() => {
          setCurrentPositionButton(undefined);
        }}
      >
        <div>
          <div style={{ width: `${leftPanelWidth}px` }}>
            <MenuPanel />
          </div>
        </div>
        <DrawerButton
          onMouseDown={() => {
            setCurrentPositionButton(0);
          }}
        />
        <div>
          <div
            style={{
              width: `${windowWidth - leftPanelWidth - rightPanelWidth}px`,
            }}
          >
            <ContentPanel />
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
            <CodePanel />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
