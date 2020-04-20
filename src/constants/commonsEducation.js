import politecnicoLogo from "../img/politecnicoMilanoLogo.png";
import fracastoroLogo from "../img/liceoFracastoroLogo.png";
import stJonesLogo from "../img/stJonesLogo.png";

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
