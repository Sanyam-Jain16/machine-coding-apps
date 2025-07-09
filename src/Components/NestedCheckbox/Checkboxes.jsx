import React from "react";
import "./checkbox.css";
import { checkboxes } from "./checkboxdata";

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      // check all the children if present
      const updateChildren = (node) => {
        node?.children?.forEach((child) => {
          newState[child.id] = isChecked;
          if (child.children) {
            updateChildren(child);
          }
        });
      };
      updateChildren(node);

      // check parent if all children are checked

      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      checkboxes.forEach((node) => verifyChecked(node));

      return newState;
    });
  };

  return (
    <div>
      {data?.map((node) => (
        <div className="parent" key={node.id}>
          <input
            type="checkbox"
            id={node.id}
            onChange={(e) => handleChange(e.target.checked, node)}
            checked={checked[node.id] || false}
          />
          <span>{node.name}</span>
          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
