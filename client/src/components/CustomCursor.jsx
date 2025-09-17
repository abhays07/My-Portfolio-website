import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    const animate = () => {
      if (cursorRef.current) {
        const { x, y } = mousePos.current;

        cursorRef.current.style.transform = `translate3d(${x + 12}px, ${y + 12}px, 0) scale(${clicked ? 0.5 : 0.75})`;
        cursorRef.current.style.opacity = visible ? "1" : "0";
        cursorRef.current.style.width = clicked ? "10px" : "16px";
        cursorRef.current.style.height = clicked ? "10px" : "16px";
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(requestRef.current);
    };
  }, [clicked, visible]);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 rounded-full bg-yellow-400 transition-all duration-150 ease-out"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "20px",
        height: "20px",
        marginLeft: "-10px",
        marginTop: "-10px ",
        opacity: 1,
        transform: "translate3d(0, 0, 0) scale(0.75)",
      }}
    />
  );
}
