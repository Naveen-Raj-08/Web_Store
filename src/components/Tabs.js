import React from "react";

const handleTab = () => {
  document.getElementById("Review").style.display = "none";
  document.getElementById("Details").style.display = "block";
};
const handleTab2 = () => {
  document.getElementById("Review").style.display = "block";
  document.getElementById("Details").style.display = "none";
};
export const ProductTab = () => {
  return (
    <div>
      <div className="tabs">
        <button className="active" onClick={handleTab}>
          Details
        </button>
        <button onClick={handleTab2}>Review</button>
      </div>
      <div id="Details" className="tab">
        <table>
          <tr>
            <td id="topic">category</td>
            <td id="detail">Champagne</td>
          </tr>
          <tr>
            <td id="topic">region</td>
            <td id="detail">France</td>
          </tr>
          <tr>
            <td id="topic">abv</td>
            <td id="detail">12%</td>
          </tr>
          <tr>
            <td id="topic">specialty</td>
            <td id="detail">Organic</td>
          </tr>
          <tr>
            <td id="topic">Base Intgredients</td>
            <td id="detail">Grapes</td>
          </tr>
        </table>
      </div>

      <div id="Review" className="tab" style={{ display: "none" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore <br />
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex
          <br />
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat.
          <br />
        </p>
      </div>
      <div className="History">
        <h5>What champagne is made from?</h5>
        <p>
          <strong>Champagne </strong> is a sparkling wine made from three types
          of grapes: Pinot noir, <br />
          Chardonnay, and Pinot Meunier, and it is created exclusively in the
          Champagne region of France.
          <br />
          Although sparkling wines are produced throughout the world, most
          countries restrict the use of the word Champagne <br />
          to wines that are made in the Champagne region. Wine has been made in
          this region since before medieval times. <br />
          Today, there are more than a hundred Champagne houses, in addition to
          almost 20,000 smaller vignerons, or vine-growing producers.
        </p>

        <h5>Another name for champagne </h5>
        <p>
          Supposedly, the first champagne in France was a happy accident. The
          pressure that was created in the bottle from the fermentation caused
          the bottle to explode. This led to the nickname le vin du diable, or
          <strong> “the devil’s wine.”</strong> If you’re looking to truly
          impress guests this New Year’s Eve, get out your sword. At ceremonial
          occasions, a technique called sabrage is used to open a Champagne
          bottle. It involves sliding a saber along the neck of the bottle and
          breaking the glass. Cheers.
        </p>
      </div>
    </div>
  );
};
