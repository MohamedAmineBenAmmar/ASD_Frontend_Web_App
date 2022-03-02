import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";

import { useSelector } from "react-redux";

export const DataVisualizer = () => {
  const [selection, setSelection] = useState([]);

  const { tree } = useSelector((state) => ({ tree: state.dataManager.tree }));



  const data = [
    {
      label: "F.C Barcelona",
      expanded: true,
      children: [
        {
          label: "F.C Barcelona",
          expanded: true,
          children: [
            {
              label: "Chelsea FC",
            },
            {
              label: "F.C. Barcelona",
            },
          ],
        },
        {
          label: "Real Madrid",
          expanded: true,
          children: [
            {
              label: "Bayern Munich",
            },
            {
              label: "Real Madrid",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="organizationchart-demo">
      <div className="card">
        <OrganizationChart value={tree}></OrganizationChart>
      </div>
    </div>
  );
};
