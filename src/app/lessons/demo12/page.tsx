"use client";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";

/*
    https://www.youtube.com/watch?v=LlvBzyy-558
    http://localhost:3000/lessons/demo12
*/

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/comments", {}).then((res) => {
      setData(res.data);
    });
  }, []); /* [] : tham số thứ 2 : [] nghĩa là chỉ cho phép gọi 1 lần */

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div className="container mx-auto">
      <div className="bg-white py-5">
        <div className="App text-black">
          <div>{getLongestName}</div>

          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {""}
            Toggle
          </button>
          {toggle && <h1> toggle</h1>}
        </div>
      </div>
    </div>
  );
}
