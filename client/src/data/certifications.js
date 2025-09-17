import awslogo from "../assets/icons/aws.svg";
import azure from "../assets/icons/azure.svg";
import sap from "../assets/icons/sap.svg";
import aws from "../assets/pdf/aws.pdf";
import azurepdf from "../assets/pdf/azure.pdf";
import sappdf from "../assets/pdf/sap.pdf";
export const CERTIFICATIONS = [
  {
    id: "cert1",
    name: "AWS Certified Cloud Practitioner",
    logo: awslogo,
    skills: ["Cloud Computing", "AWS Cloud","AWS Core Services", "AWS Architecture"],
    description: "Validated cloud expertise with AWS Cloud foundational certification.",
    certificateUrl: aws
  },
  {
    id: "cert2",
    name: "Microsoft Certified Azure Fundamentals",
    logo: azure,
    skills: ["Azure", "Cloud Basics","Cloud Security", "Cloud Storage","Cloud Networking"],
    description: "Demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
    certificateUrl: azurepdf
  },
  {
    id: "cert3",
    name: "SAP Getting started with Web Development",
    logo: sap,
    skills: ["HTML", "CSS", "JavaScript", "SAP UI5", "User Interfaces"],
    description: "Demonstrated the ability to build user interfaces using HTML, CSS, JavaScript, and laying groundwork for SAPUI5 development.",
    certificateUrl: sappdf
  }
];
