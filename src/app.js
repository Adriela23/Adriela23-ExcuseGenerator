/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let subject = ["A jogger", "A racoon", "My dog", "The driver"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "lost my"];
  let object = [
    "homework",
    "shoe",
    "weekly report",
    "sandwich",
    "monkey",
    "pinecone"
  ];
  let when = [
    "yesterday",
    "last summer",
    "when I woke up",
    "in the middle of the night"
  ];

  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let objectIndex = Math.floor(Math.random() * object.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    object[objectIndex] +
    " " +
    when[whenIndex]
  );
};
