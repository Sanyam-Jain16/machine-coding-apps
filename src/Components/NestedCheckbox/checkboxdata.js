export const checkboxes = [
  {
    id: 0,
    name: "Software Engineer",
    children: [
      {
        id: 1,
        name: "Frontend",
        children: [
          {
            id: 2,
            name: "React",
            children: [
              { id: 10, name: "Hooks" },
              { id: 11, name: "Redux", children: [{ id: 225, name: "Saga" }] },
            ],
          },
          {
            id: 3,
            name: "Angular",
            children: [
              { id: 12, name: "Components" },
              { id: 13, name: "Services" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 100,
    name: "Fruits",
    children: [
      {
        id: 101,
        name: "Citrus",
        children: [
          { id: 102, name: "Orange" },
          { id: 103, name: "Lemon" },
        ],
      },
      {
        id: 104,
        name: "Berries",
        children: [
          { id: 105, name: "Strawberry" },
          { id: 106, name: "Blueberry" },
        ],
      },
    ],
  },
];
