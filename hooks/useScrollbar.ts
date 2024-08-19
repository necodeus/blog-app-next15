'use client';

import { useRef, useState, useEffect } from 'react';

const useScrollbar = () => {
  const contentRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
  const thumbRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
  const [thumbHeight, setThumbHeight] = useState(0);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const calculateThumbHeight = () => {
    const contentHeight = contentRef.current.scrollHeight;
    const visibleHeight = contentRef.current.clientHeight;
    const ratio = visibleHeight / contentHeight;
    setThumbHeight(visibleHeight * ratio);
    setScrollRatio(ratio);
    setIsScrollable(contentHeight > visibleHeight);
  };

  useEffect(() => {
    calculateThumbHeight();
    window.addEventListener('resize', calculateThumbHeight);

    return () => {
      window.removeEventListener('resize', calculateThumbHeight);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = contentRef.current.scrollTop;

    if (!thumbRef.current) return;

    thumbRef.current.style.top = `${scrollTop * scrollRatio}px`;
  };

  const handleThumbMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const startY = e.clientY;
    const startTop = thumbRef?.current?.offsetTop;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaY = e.clientY - startY;
      contentRef.current.scrollTop = (startTop + deltaY) / scrollRatio;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return {
    contentRef,
    thumbRef,
    thumbHeight,
    handleScroll,
    handleThumbMouseDown,
    isScrollable,
  };
};

export default useScrollbar;
