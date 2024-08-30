'use client';

import { ReactNode, ReactElement } from "react";
import useScrollbar from "@/hooks/useScrollbar";

type Props = {
  children?: ReactNode;
};

export const Scrollbar = ({
  children,
}: Props): ReactElement => {
  const {
    contentRef,
    thumbRef,
    thumbHeight,
    handleScroll,
    handleThumbMouseDown,
    isScrollable,
  } = useScrollbar();

  const width = isScrollable ? 'calc(100% - 4px)' : '100%';

  return (
    <div className="custom-scrollbar">
      <div
        className="custom-scrollbar-content"
        ref={contentRef}
        onScroll={handleScroll}
      >
        <div style={{ width }}>
          {children}
        </div>
      </div>
      {isScrollable && (
        <div className="custom-scrollbar-track">
          <div
            className="custom-scrollbar-thumb"
            ref={thumbRef}
            style={{ height: `${thumbHeight}px` }}
            onMouseDown={handleThumbMouseDown}
          ></div>
        </div>
      )}
    </div>
  );
};
