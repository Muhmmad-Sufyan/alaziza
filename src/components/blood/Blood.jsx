import React from "react";
import "./Blood.css";
const Blood = () => {
  return (
    <div className="blod-container">
      <h2 style={{ textAlign: "center", padding: "40px 0px" }}>
        How to get
        <span style={{ color: "#EB638B" }} className="highlight">
          #Blood?
        </span>
      </h2>
      <div className="blod-r">
        <img src="/13.png" alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <h1>1</h1>
      </div>
      <div className="blod-1">
        <div className="blod-2">
          <img src="/11.png" alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <h1>2</h1>
        </div>
        <div className="blod-3">
          <img src="/14.png" alt="" />
        </div>

        <div className="blod-2">
          <img src="/23.png" alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <h1>3</h1>
        </div>
      </div>

      <div className="blod-why">
        <h1>
          Why donate <span style={{ color: "#EB638B" }}>#blood</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Arcu felis purus at cras
          volutpat. Sit sapien non sollicitudin neque consectetur pellentesque
          purus semper ultricies. Egestas elementum quam vehicula lacus.
          Vestibulum elit risus ipsum lacus donec nibh. Lacus augue nascetur non
          integer cursus. Magna pharetra integer sed augue tristique sed eget.{" "}
        </p>
      </div>
      <div className="blod-cards">
        <div className="blod-card">
          <h3>Save lives</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu felis purus at cras
            volutpat. Sit sapien non sollicitudin neque consectetur pellentesque
            purus.
          </p>
        </div>
        <div className="blod-card">
          <h3>Emergency situation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu felis purus at cras
            volutpat. Sit sapien non sollicitudin neque consectetur pellentesque
            purus.
          </p>
        </div>
        <div className="blod-card">
          <h3>Medical Procedure</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu felis purus at cras
            volutpat. Sit sapien non sollicitudin neque consectetur pellentesque
            purus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blood;
