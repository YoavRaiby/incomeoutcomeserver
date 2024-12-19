import React, { useEffect } from "react";
import fruit1 from "../assets/fruit1.png";
import fruit2 from "../assets/fruit2.png";
import fruit3 from "../assets/fruit3.png";
import "./FallingFruits.css";

function FallingFruits() {
  useEffect(() => {
    const container = document.getElementById("fruit-container");
    const maxFruits = 10; // מקסימום מספר הפירות על המסך

    const createFruit = () => {
      if (container.childNodes.length >= maxFruits) return; // עצור אם הגענו למגבלה

      const fruit = document.createElement("img");
      const fruits = [fruit1, fruit2, fruit3];
      fruit.src = fruits[Math.floor(Math.random() * fruits.length)];
      fruit.className = "fruit";
      fruit.style.left = `${Math.random() * 100}vw`;
      fruit.style.animationDuration = `${Math.random() * 5 + 3}s`; // מהירות רנדומלית
      container.appendChild(fruit);

      fruit.addEventListener("animationend", () => {
        fruit.remove(); // הסרת הפרי בסוף האנימציה
      });
    };

    const interval = setInterval(createFruit, 300);
    return () => clearInterval(interval);
  }, []);

  return <div id="fruit-container" className="falling-fruits"></div>;
}

export default FallingFruits;
