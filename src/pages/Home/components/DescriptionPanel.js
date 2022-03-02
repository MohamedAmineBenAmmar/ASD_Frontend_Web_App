import React from "react";
import { Button } from "primereact/button";
import { useHistory } from 'react-router-dom'

// import img1 from "../../../assets/images/hero-1.png";
// import img1 from "../../../assets/images/dictionary.jpg"
// import img1 from "../../../assets/images/book.jpg"
import img1 from "../../../assets/images/library.jpg";

const DescriptionPanel = () => {
  const history = useHistory()
  
  return (    
      <div className="surface-card p-4 shadow-2 border-round w-full ">
        <div className="grid grid-nogutter surface-0 text-800">
          <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
              <span className="block text-6xl font-bold mb-1">
                Algorithms and data stuctures
              </span>
              <div className="text-6xl text-primary font-bold mb-3">
                Create and explore your dictionary
              </div>
              <p className="mt-0 mb-4 text-700 line-height-3">
                This website represents an interface that will allow you to
                create and manage you dictionaries.
                <br />
              </p>

              <Button
                label="Live Demo"
                type="button"
                className="mr-3 p-button-raised"
                onClick={() => {history.push('/demo')}}
              />
              {/* <Button
                label="Live Demo"
                type="button"
                className="p-button-outlined"
              /> */}
            </section>
          </div>
          <div className="col-12 md:col-6 overflow-hidden">
            <img
              src={img1}
              alt="hero-1"
              className="md:ml-auto block md:h-full"
              style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
            />
          </div>
        </div>
      </div>   
  );
};

export default DescriptionPanel;
