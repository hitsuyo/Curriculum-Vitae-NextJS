"use client";
import React, { useRef } from "react";
import Button from "./Button";

/*
    https://www.youtube.com/watch?v=LlvBzyy-558  (phút 52:53 giây)
    http://localhost:3000/lessons/demo10
*/

function ImperativeHandle() {
  // const buttonRef = useRef(null);
  const buttonRef = useRef<{ alterToggle: () => void } | null>(null);

  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current?.alterToggle();
        }}
      >
        Button From Parent
      </button>

      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
