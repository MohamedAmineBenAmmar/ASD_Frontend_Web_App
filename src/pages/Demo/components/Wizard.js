import React, { useState, useRef } from "react";
import { useHistory } from 'react-router-dom'
import { Steps } from "primereact/steps";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

// Import the components that will build our form wizard
import { FileSelecter } from "./FileSelecter";
import { DataVisualizer } from "./DataVisualizer";

const Wizard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const history = useHistory()
  const toast = useRef(null);
  const items = [
    {
      label: "File Selection",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "First Step",
          detail: event.item.label,
        });
      },
    },
    {
      label: "Data Visualization",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Seat Selection",
          detail: event.item.label,
        });
      },
    },
  ];

  const Component = activeIndex == 0 ? <FileSelecter /> : <DataVisualizer />;

  return (
    <div className="steps-demo">
      <Toast ref={toast}></Toast>

      <div className="card">
        <Button
          label="Back to main page"
          type="button"
          className="p-button-raised"
          onClick={() => {
            history.push("/");
          }}
        />
        <h2>Live Demo</h2>
        <Steps
          model={items}
          activeIndex={activeIndex}
          onSelect={(e) => setActiveIndex(e.index)}
          readOnly={false}
        />
      </div>

      <div className="grid mt-8">
        <div className="col-8 col-offset-2">{Component}</div>
      </div>
    </div>
  );
};

export default Wizard;
