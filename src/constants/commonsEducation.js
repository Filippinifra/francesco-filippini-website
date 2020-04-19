import politecnicoLogo from "../img/politecnicoMilanoLogo.png";
import fracastoroLogo from "../img/liceoFracastoroLogo.png";
import stJonesLogo from "../img/stJonesLogo.png";

const educationList = [
  {
    logoImg: politecnicoLogo,
    title: "Politecnico Di Milano",
    extraInfo: "Bachelor of Computer Engineering",
    periodAndLocation: "Milan, 2015 - 2020",
    textList: [
      {
        text:
          "Courses attended: Fundamentals of Computer Science - Fundamentals of Internet and Networks - Computer Architecture and Operating Systems - Algorithms and Principles of Computer Science - Fundamentals of Automatic - Probability and Statistics for Information Technology - Databases - Logical Networking - Hypermedia Applications - Software Engineering - Information System",
      },
    ],
    images: [],
  },
  {
    logoImg: fracastoroLogo,
    title: "Liceo Scientifico Girolamo Fracastoro",
    extraInfo: "Italian High School Diploma",
    periodAndLocation: "Verona, 2010 - 2015",
    textList: [],
    images: [],
  },
  {
    logoImg: stJonesLogo,
    title: "St. John's University",
    extraInfo: "English 1 month course",
    periodAndLocation: "New York, July 2012",
    textList: [],
    images: [],
  },
];

export default educationList;
