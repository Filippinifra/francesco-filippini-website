import politecnicoLogo from "img/politecnicoMilanoLogo.png";
import fracastoroLogo from "img/liceoFracastoroLogo.png";
import stJonesLogo from "img/stJonesLogo.png";

const educationList = [
  {
    logoImg: politecnicoLogo,
    title: "Politecnico Di Milano",
    extraInfo: "Bachelor of Computer Engineering",
    period: "2015 - 2020",
    location: "Milan",
    textList: [
      {
        text:
          "Courses attended: Fundamentals of Computer Science - Fundamentals of Internet and Networks - Computer Architecture and Operating Systems - Algorithms and Principles of Computer Science - Fundamentals of Automatic - Probability and Statistics for Information Technology - Databases - Logical Networking - Hypermedia Applications - Software Engineering - Information System",
      },
      {
        text: `Hypermedia project - Using HTML, CSS, Javascript. Assignment was to create a crypto conference website and one of the requirements was to create a PostgreSQL database in order to store data.`,
      },
      {
        text: `Software Engineering project - Using Java and Java libraries to build an MVC virtual game. The result was about 30 thousand lines of code, client and server implementation and a GUI and a CLI to play the game.`,
      },
      {
        text: `Algorithms and Principles of Computer Science project - The task was to create an algorithm to implement a Touring Machine using C. We had to pay attention to temporal and spatial complexity.`,
      },
      {
        text: `Logical Networks project - We used VHDL to satisfy the assignment and resolve a logical problem using electrical signals (like clock signal, data signal and reset signal).`,
      },
    ],
    images: [],
  },
  {
    logoImg: fracastoroLogo,
    title: "Liceo Scientifico Girolamo Fracastoro",
    extraInfo: "Italian High School Diploma",
    period: "2010 - 2015",
    location: "Verona",
    textList: [],
    images: [],
  },
  {
    logoImg: stJonesLogo,
    title: "St. John's University",
    extraInfo: "English 1 month course",
    period: "July 2012",
    location: "New York (USA)",
    textList: [],
    images: [],
  },
];

export default educationList;
