import finleapLogo from "img/finleapLogo.png";
import smbLogo from "img/smbLogo.png";
import boomLogo from "img/boomLogo.png";

import smb1 from "img/smbImages/smb1.png";
import smb2 from "img/smbImages/smb2.png";
import smb3 from "img/smbImages/smb3.png";
import smb4 from "img/smbImages/smb4.png";
import smb5 from "img/smbImages/smb5.png";
import smb6 from "img/smbImages/smb6.png";

const workList = [
  {
    logoImg: boomLogo,
    title: "BOOM Image Studio",
    position: "Junior Frontend Engineer",
    period: "April 2020 - Ongoing",
    location: "Milan",
    textList: [
      {
        text:
          "My team builds the core product of the company: a platform in which professional photographers can connect to companies who need photos for their product.",
      },
      {
        text:
          "I significantly contributed building part of the website frontend.",
      },
      {
        text: `I worked 1 month building the website frontend for "SalesBook", a project launched by BOOM and used to complete the photo business flow.`,
      },
    ],
    tools: "React, Redux, Typescript, Git, Jira.",
  },
  {
    logoImg: finleapLogo,
    title: "Finleap",
    position: "Junior Frontend Developer",
    period: "October 2019 - April 2020",
    location: "Milan",
    textList: [
      {
        text:
          "My team builds SaaS software for 'Cessione del quinto', an Italian Administration process to obtain a loan.",
      },
      { text: "I contributed by building parts of the website frontend." },
      {
        text:
          "I work in React and I learnt a lot both on the tech side (software development best practices and team work) and on the personal side as I got to enjoy a young workspace and disrupting company environment.",
      },
    ],
    tools: "React, Apollo GraphQL, NodeJS, Git, ClickUp.",
  },
  {
    logoImg: smbLogo,
    title: "Saint Mary Boulevard",
    position: "Manager and Founder",
    period: "March 2016 - Ongoing",
    location: "Verona",
    textList: [
      {
        text: "I started this project when I was 20 together with my brother.",
      },
      {
        text:
          "Our concept was to create a clothing brand after the name of the town where we lived. It started as a fun side-project, but it became a solid reality and one of the most popular brand in Verona and near towns. We also partnered with schools and small-to-medium sized associations to create customised clothing.",
      },
      {
        text:
          "During these years I learnt how to manage a business and all the components that revolve around it: relationship with customers and suppliers, taxes, marketing tactics and managing my own business.",
      },
    ],
    images: [smb1, smb2, smb3, smb4, smb5, smb6],
  },
];

export default workList;
