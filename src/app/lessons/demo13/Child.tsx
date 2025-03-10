import React, { useEffect } from "react";

/*
function Child({ returnComment }) {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Peter")}</div>;
}
*/

// Define prop types for the Child component
type ChildProps = {
  returnComment: (name: string) => string;  // Define returnComment as a function
};

const Child: React.FC<ChildProps> = ({ returnComment }) => {
  return <div>{returnComment("Peter")}</div>;  // Calling the function with "Peter" as an argument
};

export default Child;
