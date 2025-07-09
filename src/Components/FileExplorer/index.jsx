import React, { useState } from "react";
import Sidebar from "./Sidebar";
import json from "./data.json";

// Done
// expand and collapse folder
// add and remove file/ folder
// nested file folder structure

// Todo
// add file

const FileExplorer = () => {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter name");
    const isFolder = confirm("Is this folder");
    const updateTree = (listOfNodes) => {
      return listOfNodes.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now().toString(),
                name,
                isFolder: isFolder,
                children: [],
              },
            ],
          };
        }
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }
        return node;
      });
    };
    setData((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (id) => {
    const updateTree = (listOfNodes) => {
      return listOfNodes
        .filter((node) => node.id !== id)
        .map((node) => {
          if (node.children) {
            return {
              ...node,
              children: updateTree(node.children),
            };
          }
          return node;
        });
    };
    setData((prev) => updateTree(prev));
  };
  return (
    <>
      <h1>File Explorer</h1>
      <Sidebar
        list={data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </>
  );
};

export default FileExplorer;
