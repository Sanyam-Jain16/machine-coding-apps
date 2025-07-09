import React, { useState } from "react";
import Checkboxes from "./Checkboxes";
import { checkboxes } from "./checkboxdata";

const NestedCheckBox = () => {
  const [checked, setChecked] = useState({});
  return (
    <>
      <Checkboxes checked={checked} setChecked={setChecked} data={checkboxes} />
    </>
  );
};

export default NestedCheckBox;
