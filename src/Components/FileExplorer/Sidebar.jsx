import React, { useState } from "react";

const Sidebar = ({ list, addNodeToList, deleteNodeFromList }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="container">
      {list.map((node) => (
        <div className="folder-list" key={Math.random()}>
          {node.isFolder && (
            <span
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {isExpanded?.[node.name] ? "- " : "+ "}
            </span>
          )}
          <span>{node.name}</span>
          {node.isFolder && (
            <span onClick={() => addNodeToList(node.id)}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZda1QrYX7H33QfZREuBBZ0GLUUjsz2f8tUQ&s"
                alt="icon"
                className="icon"
              />
            </span>
          )}
          <span onClick={() => deleteNodeFromList(node.id)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
              alt="icon"
              className="icon"
            />
          </span>

          {isExpanded?.[node.name] && node.children && (
            <Sidebar
              list={node.children}
              addNodeToList={addNodeToList}
              deleteNodeFromList={deleteNodeFromList}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
