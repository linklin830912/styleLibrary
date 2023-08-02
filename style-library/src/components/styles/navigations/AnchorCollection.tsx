import React, { useState, useRef, useEffect } from "react";
import style from "./styles/anchorCollectionStyle.module.css";
import Anchor from "./Anchor";
import { motion } from "framer-motion";
import HeaderType from "../../enums/HeaderType";
import StatusType from "../../enums/StatusType";
import { convertStatusToStyle } from "../../../untils/styles/convertStatusToStyle";
import { convertHeaderToStyle } from "../../../untils/styles/convertHeaderToStyle";

export type anchorType = {
  href: string;
  title: string;
  children?: anchorType[];
};

type anchorCollectionProps = {
  referenceBranch: anchorType[];
  status?: StatusType;
  size?: HeaderType;
};

function AnchorCollection(props: anchorCollectionProps) {
  const defaultStatus = StatusType.main;
  const defaultSize = HeaderType.h4;
  const [selectedHref, setSelectedHref] = useState<string>();
  const [height, setHeight] = useState<number>(0);
  const [unitHeight, setUnitHeight] = useState<number>();
  const status = convertStatusToStyle(style, props.status || defaultStatus);
  const size = convertHeaderToStyle(style, props.size || defaultSize);

  const containerDivRef = useRef<HTMLDivElement>(null);
  const contentDivRef = useRef<HTMLDivElement>(null);
  const pointerContainerDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      contentDivRef.current?.offsetHeight &&
      contentDivRef.current?.children.length
    )
      setUnitHeight(
        contentDivRef.current?.offsetHeight /
          contentDivRef.current?.children.length
      );
  }, [contentDivRef]);

  return (
    <div
      className={`${style.container_div} ${status} ${size}`}
      ref={containerDivRef}
    >
      <div className={style.pointer_container_div} ref={pointerContainerDivRef}>
        <motion.div
          className={style.pointer_div}
          style={{ height: unitHeight }}
          animate={{ y: height }}
        ></motion.div>
      </div>
      <div className={style.content_div} ref={contentDivRef}>
        {props.referenceBranch.map((x, index0) => (
          <React.Fragment key={`${index0}_0`}>
            <Anchor
              title={`${x.title} ${index0}_0`}
              href={x.href}
              level={0}
              size={props.size || defaultSize}
              status={props.status || defaultStatus}
              isSelected={x.href === selectedHref}
              onClick={(e) => {
                handleOnClick(x, e);
              }}
            />
            {x.children?.map((y, index1) => (
              <React.Fragment key={`${index1}_1`}>
                <Anchor
                  title={`${y.title} ${index1}_1`}
                  href={y.href}
                  level={1}
                  size={props.size || defaultSize}
                  status={props.status || defaultStatus}
                  isSelected={y.href === selectedHref}
                  onClick={(e) => {
                    handleOnClick(y, e);
                  }}
                />
                {y.children?.map((z, index2) => (
                  <React.Fragment key={`${index2}_2`}>
                    <Anchor
                      title={`${z.title} ${index2}_2`}
                      href={z.href}
                      level={2}
                      size={props.size || defaultSize}
                      status={props.status || defaultStatus}
                      isSelected={z.href === selectedHref}
                      onClick={(e) => {
                        handleOnClick(z, e);
                      }}
                    />
                    {z.children?.map((w, index3) => (
                      <React.Fragment key={`${index3}_3`}>
                        <Anchor
                          title={`${w.title} ${index3}_3`}
                          href={w.href}
                          level={3}
                          size={props.size || defaultSize}
                          status={props.status || defaultStatus}
                          isSelected={w.href === selectedHref}
                          onClick={(e) => {
                            handleOnClick(w, e);
                          }}
                        />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  function handleOnClick(
    anchorType: anchorType,
    e: React.MouseEvent<HTMLAnchorElement>
  ) {
    if (
      !pointerContainerDivRef.current?.offsetTop ||
      !contentDivRef.current?.offsetTop
    )
      return;

    setSelectedHref(anchorType.href);
    setHeight(e.currentTarget.offsetTop - contentDivRef.current?.offsetTop);
  }
}

export default AnchorCollection;
