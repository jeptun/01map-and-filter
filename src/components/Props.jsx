import { useState } from "react";
import PropsChildren from "./PropsChildren";

export default function Props() {
  const [childName, setChildName] = useState("Josef");
  const [parentName, setParentName] = useState("Tikal");
  
  const changeChildName = () => {
    setChildName("Jone");
  };

  const changeParentName = (values) => {
    setParentName(values);
  };

  return (
    <div className="container">
      <PropsChildren
        isChildName={childName}
        ischangeChildName={changeChildName}
        isParentName={parentName}
        isChangeParentName={changeParentName}
      />
    </div>
  );
}
