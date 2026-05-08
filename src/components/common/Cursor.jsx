import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const ring = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = {
        x: e.clientX,
        y: e.clientY,
      };

      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";

        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", onMove);

    let raf;

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.13;

      ring.current.y += (mouse.current.y - ring.current.y) * 0.13;

      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";

        ringRef.current.style.top = ring.current.y + "px";
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    const onEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = "20px";
        cursorRef.current.style.height = "20px";
        cursorRef.current.style.background = "#22d3ee";
      }

      if (ringRef.current) {
        ringRef.current.style.width = "54px";
        ringRef.current.style.height = "54px";

        ringRef.current.style.borderColor = "rgba(34,211,238,0.4)";
      }
    };

    const onLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = "11px";
        cursorRef.current.style.height = "11px";
        cursorRef.current.style.background = "#6366f1";
      }

      if (ringRef.current) {
        ringRef.current.style.width = "34px";
        ringRef.current.style.height = "34px";

        ringRef.current.style.borderColor = "rgba(99,102,241,0.5)";
      }
    };

    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);

      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />

      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
