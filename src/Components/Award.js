import React from "react";
import Reward from "../Assets/Imgs/Rewards.png";
import Cup from "../Assets/Imgs/cup.png";

function Award() {
  return (
    <section>
      <div className="cupContainer">
        <img src={Cup} alt="" />
      </div>
      <div className="medalsContainer">
        <div className="medalText">
          <h4>Prizes and </h4>
          <h4>Rewards</h4>
          <p>
            Highline of the prize or reward for winners and for participants
          </p>
        </div>
        <div className="medals">
          <img src={Reward} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Award;
