import React from "react";
import policy from "../Assets/Imgs/08 1.png";
import Mark from "../Assets/Imgs/list terms.png";

function Policy() {
  return (
    <section className="text-white">
      <div className="policyTextContainer">
        <div className="policyText">
          <h4>Privacy Policy and</h4>
          <h4>Terms</h4>
          <p>Last updated on September 12, 2023</p>
          <p>
            Below are out privacy & policy, ehich outline a lot of goodies. It's
            our aim to always take of participant
          </p>
        </div>
        <div>
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div>
            <h4>Licensing Policy</h4>
            <div>
              <p> Here are terms of our standard License:</p>
              <div>
                <div>
                  <img src={Mark} alt="Mark" />
                  <p>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
                <div>
                  <img src={Mark} alt="Mark" />
                  <p>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="policyImageContainer"></div>
    </section>
  );
}

export default Policy;
