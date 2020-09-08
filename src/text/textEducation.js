import politecnicoLogo from "img/politecnicoMilanoLogo.png";
import fracastoroLogo from "img/liceoFracastoroLogo.png";
import stJonesLogo from "img/stJonesLogo.png";

export const textEducation = {
  en: [
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
  ],
  it: [
    {
      logoImg: politecnicoLogo,
      title: "Politecnico Di Milano",
      extraInfo: "Laurea triennale in Ingegneria Informatica",
      period: "2015 - 2020",
      location: "Milano",
      textList: [
        {
          text:
            "Corsi frequentati: Fondamenti di Informatica - Fondamenti di Internet e Reti - Architettura dei Calcolatori e Sistemi Operativi - Algoritmi e Principi dell'Informatica - Fondamenti di Automatica - Probabilità e Statistica per l'Informatica - Database - Reti Logiche - Hypermedia Applications - Ingegneria del Software - Sistemi Informativi",
        },
        {
          text: `Progetto di Hypermedia - Linguaggi: HTML, CSS, Javascript. La consegna è stata creato un sito a proposito di una conferenza riguardo le crypto valute. Uno dei requisiti è stato usare PostgreSQL (servizio per gestire database) per gestire i dati.`,
        },
        {
          text: `Progetto di Ingegneria del Software - Linguaggi: Java e le librerie Java per costruire un video game con pattern MVC. Il risultato è stato di circa 30 mila righe di codice, implementazione server e client e una simpatica GUI e CLI per giocare.`,
        },
        {
          text: `Progetto di Algoritmi e Principi dell'Informatica - Lo scopo del progetto è stato creare una macchina di Touring usando il linguaggio di programmazione C. È stato richiesto di prestare attenzione a complessità temporale e spaziale.`,
        },
        {
          text: `Progetto di Reti Logiche - Abbiamo usato VHDL per risolvere un problema logico usando segnali elettrici (come il segnale di clock, segnale dati e segnale di reset).`,
        },
      ],
      images: [],
    },
    {
      logoImg: fracastoroLogo,
      title: "Liceo Scientifico Girolamo Fracastoro",
      extraInfo: "Diploma di Scuola Superiore",
      period: "2010 - 2015",
      location: "Verona",
      textList: [],
      images: [],
    },
    {
      logoImg: stJonesLogo,
      title: "Università St. John's",
      extraInfo: "Corso di inglese durato 1 mese",
      period: "Luglio 2012",
      location: "New York (USA)",
      textList: [],
      images: [],
    },
  ],
};
