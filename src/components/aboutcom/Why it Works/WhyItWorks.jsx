import React from "react";
import "./WhyItWorks.css";
const WhyItWorks = () => {
  return (
    <div className="container12">
      <img src="/why.png" alt="Elderly person eating" className="image" />
      <div className="content10">
        <h1>Why it Works</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquam dolor turpis venenatis
          malesuada leo eu. Et mi in lacinia ornare vel eget. Nulla maecenas
          praesent turpis nunc ipsum pulvinar tortor. Euismod habitant tristique
          dictum nec neque ut.
        </p>
        <div className="image-text">
          <div className="table">
            <div className="table-row">
              <div className="table-header">Concern</div>
              <div className="table-header">Concern Addressed</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Don't know who needs it</div>
              <div className="table-cell">
                We work with verified and legitimate partner organizations to
                ensure that donations are distributed to those in need.
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">Don't know if they are genuine</div>
              <div className="table-cell">
                By monitoring our partner organizations and individuals, we can
                assure that donations reach the intended beneficiaries such as
                homeless individuals, senior citizens, students, and orphans.
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">
                Businesses have no incentive to donate
              </div>
              <div className="table-cell">
                Partner match donors with local recipients, reducing
                transportation costs and eliminating food waste.
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">Transportation</div>
              <div className="table-cell">
                Partner organizations will share expenses and pay for
                transportation when needed, ensuring timely and necessary food
                delivery to those in need.
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">Cost</div>
              <div className="table-cell">
                Donors are protected under the Good Samaritan Law, which shields
                food donors from liability when donating to those in need.
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">Liability fears</div>
              <div className="table-cell">
                Deloitte match donors with local recipients, reducing
                transportation costs and eliminating food waste.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyItWorks;
