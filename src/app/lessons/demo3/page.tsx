"use client";
import Image from "next/image";
import styles from "../../components/Demo1.module.css";
import { useState, useEffect } from "react";

/**
 * http://localhost:3000/lessons/demo3
 */

export default function Demo3() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
}
