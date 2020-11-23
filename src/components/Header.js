import React, { useEffect } from "react";
import Anime from "animejs";

export const Header = () => {
  useEffect(() => {
    var textWrapper = document.querySelector(".ml12");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    Anime.timeline({ loop: true })
      .add({
        targets: ".ml12 .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i,
      })
      .add({
        targets: ".ml12 .letter",
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
  });
  return (
    <>
      <div className="Header">
        <h1 className="ml12">Welcome to our Page</h1>
        <p>Beer, wine and liquor delivered to your doorstep.</p>
        <h5>call +19235 2345</h5>
      </div>
    </>
  );
};
