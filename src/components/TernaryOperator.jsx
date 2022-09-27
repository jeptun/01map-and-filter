import React, { useEffect } from "react";

export default function TernaryOperator() {
  let age = 32;
  let name = "Josef";
  // useEffect(() => {
  //   let age = 34;
  //   let name = "Niko";
  //   // if (age > 33) {
  //   //   console.log("You are now old");
  //   // } else if (name === "Josef" && age === 33) {
  //   //   console.log("I am 33 years old");
  //   //   console.log("Josef is my Name");
  //   // } else {
  //   //   console.log("I am less than 33 years old");
  //   //   console.log("Josef is not my Name");
  //   // }
  //   age > 33 ? (
  //     console.log("You are now old")
  //   ) : name === "Josef" && age === 33 ? (
  //     <>
  //       {console.log("I am 33 years old")}
  //       {console.log("Josef is my Name")}
  //     </>
  //   ) : (
  //     <>
  //       {console.log("I am less than 33 years old")}
  //       {console.log("Josef is not my Name")}
  //     </>
  //   );
  // }, []);
  return (
    <div className="container">
   { age > 33 ? ( <h1> You are now old</h1>) : name === "Josef" && age === 33 ? (
    <>
    <h2>
    "I am 33 years old"
    </h2>
    <h2>"Josef is my Name"</h2>
    </>
   )
   :(   <>
        <h2>I am less than 33 years old</h2>
        <h2>Josef is not my Name</h2>
      </>)}
    </div>
  );
}
