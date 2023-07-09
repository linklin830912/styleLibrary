import React, { useState, useMemo, useEffect } from "react";
import { mainContentProps } from "../MainContent";

export function useMainContent(props: mainContentProps) {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const [leftPortion, setLeftPortion] = useState<number>(
    props.panelPortions?.left || 0.3
  );
  const [rightPortion, setRightPortion] = useState<number>(
    props.panelPortions?.right || 0.3
  );
  const [leftButtonPosition, setLeftButtonPosition] = useState<number>(
    windowWidth * leftPortion
  );
  const [rightButtonPosition, setRightButtonPosition] = useState<number>(
    windowWidth * (1 - rightPortion)
  );
  const [currentPositionButton, setCurrentPositionButton] = useState<number>(); //0=left, 1=right

  useEffect(() => {
    setLeftPortion(leftButtonPosition / windowWidth);
    setRightPortion((windowWidth - rightButtonPosition) / windowWidth);
  }, [leftButtonPosition, rightButtonPosition]);

  const { leftPanelWidth, rightPanelWidth } = useMemo<{
    leftPanelWidth: number;
    rightPanelWidth: number;
  }>(() => {
    return {
      leftPanelWidth: windowWidth * leftPortion,
      rightPanelWidth: windowWidth * rightPortion,
    };
  }, [windowWidth, leftPortion, rightPortion]);

  return {
    leftPanelWidth,
    rightPanelWidth,
    windowWidth,
    currentPositionButton,
    setCurrentPositionButton,
    setLeftButtonPosition,
    setRightButtonPosition,
  };
}
