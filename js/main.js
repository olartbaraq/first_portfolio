const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const leftPanel = document.querySelector(".left-panel");
const mainBody = document.querySelector(".main-body");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    leftPanel.style.display = "block";
    mainBody.style.position = "relative";
    mainBody.style.top = "55rem";

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    leftPanel.style.display = "none";
    mainBody.style.position = "relative";
    mainBody.style.top = "0rem";
    showMenu = false;
  }
}

let slideIndex = 1;
let timer = null;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearTimeout(timer);
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(timer);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n == undefined) {
    n = ++slideIndex;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timer = setTimeout(showSlides, 10000);
}

const gridContainer = document.getElementById("grid-container");

const PROJECTS = [
  {
    id: 1,
    name: "IBEDCPay",
    image: "../assets/ibedcpay.png",
    tools: "Golang, Python, React JS, React-Native, SQL, Data Analytics",
    description:
      "IBEDCPay is both a web and mobile application; direct and reliable solution for managing your IBEDC electricity bills and payments without the need for third-party intermediaries. Our mission is to provide you with a seamless and convenient platform to handle your electricity bills and payments efficiently.",
    githubLink: "https://github.com/olartbaraq",
    demoLink: "https://pay.ibedc.com",
  },
  {
    id: 2,
    name: "Ops Manager",
    image: "../assets/ops.webp",
    tools: "Python,Javascript, Django, Flutter, SQL, Data Analytics",
    description:
      "Ops Manager is a field workforce management system that provide capabilities for process automation, operational enhancements, real-time visibility into field activities, improved customer services and revenue generation. The mobile application performs these functions:",
    githubLink:
      "https://play.google.com/store/apps/details?id=com.monarchtechnologies.opsmanagerapp&hl=en&gl=US",
    demoLink: "https://ops.ibedc.com/login",
  },
  {
    id: 3,
    name: "MSMS",
    image: "../assets/IBEDClogo.png",
    tools: "Python,Javascript, Django, SQL, Data Analytics",
    description:
      "MSMS is an acrnonym for Meter and Seal Management System that provides and monitors all operations pertaining to prepaid meters ranging from sales, replacement of faulty meters, meter allocation, payment confirmation e.t.c",
    githubLink: "https://github.com/olartbaraq",
    demoLink: "https://msms.ibedc.com/map/",
  },
  {
    id: 4,
    name: "Ra'Nkan",
    image: "../assets/rankan.jpeg",
    tools:
      "Golang,Typescript, NextJS, React-Native, Gin, PostgreSQL, Data Analytics, Cloudinary, AWS",
    description:
      "RA 'NKAN is a cutting-edge e-commerce platform developed using Golang, Gin, React Native, NextJS, PostgreSQL, and hosted on AWS infrastructure. It offers a seamless shopping experience across web and mobile devices, leveraging modern technologies for optimal performance, scalability, and intuitive user interfaces. With its robust backend, responsive frontend, and secure data management, RA 'NKAN aims to redefine the e-commerce landscape.",
    githubLink: "https://github.com/olartbaraq/Ra-Nkan_Frontend",
    demoLink: "",
  },
  {
    id: 5,
    name: "Chat Home",
    image: "../assets/chathome.png",
    tools:
      "Python,Typescript, Django, SQL, Data Analytics, React JS, WebSocket",
    description:
      "ChatHome is a forward-thinking web chat platform transforming the way users converse about home rentals.ChatHome creates a dynamic environment where users collaborate, share experiences, and make informed decisions about home rentals.",
    githubLink: "https://github.com/olartbaraq/chathome-frontend",
    demoLink: "https://chathome-frontend.vercel.app/",
  },
  {
    id: 6,
    name: "Load Balancer",
    image: "../assets/loadbalancer.jpeg",
    tools: "Golang, net/http, reverseProxy, Data Structure and Algorithms",
    description:
      "Developed a load balancer in Go utilizing the round-robin scheduling algorithm. Implemented the core functionality to distribute incoming requests across multiple servers, ensuring efficient load distribution and high availability. Demonstrated proficiency in Go programming, concurrent processing, and network communication.",
    githubLink:
      "https://github.com/olartbaraq/John_Crickett_Coding_Challenge/tree/main/Load_Balancer",
    demoLink: "",
  },
  // Add more project objects as needed
];

// PROJECTS.forEach((project) => {
//   const gridItem = document.createElement("div");
//   gridItem.classList.add("grid-item");

//   const img = document.createElement("img");
//   img.src = project.image;
//   gridItem.appendChild(img);

//   const projectInfo = document.createElement("div");
//   projectInfo.classList.add("project-info");

//   const projectTitle = document.createElement("h3");
//   projectTitle.classList.add("project-title");
//   projectTitle.textContent = project.name;
//   projectInfo.appendChild(projectTitle);

//   const projectDescription = document.createElement("p");
//   projectDescription.classList.add("project-description");
//   projectDescription.textContent = project.description;
//   projectInfo.appendChild(projectDescription);

//   const buttonContainer = document.createElement("div");
//   buttonContainer.classList.add("button-container");

//   const githubButton = document.createElement("button");
//   githubButton.textContent = "GitHub";
//   githubButton.addEventListener("click", () => {
//     window.open(project.githubLink, "_blank");
//   });
//   buttonContainer.appendChild(githubButton);

//   const demoButton = document.createElement("button");
//   demoButton.textContent = "Demo";
//   demoButton.addEventListener("click", () => {
//     window.open(project.demoLink, "_blank");
//   });
//   buttonContainer.appendChild(demoButton);

//   projectInfo.appendChild(buttonContainer);
//   gridItem.appendChild(projectInfo);

//   gridContainer.appendChild(gridItem);
// });

PROJECTS.forEach((project) => {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const img = document.createElement("img");
  img.src = project.image;
  imageContainer.appendChild(img);
  gridItem.appendChild(imageContainer);

  const projectInfo = document.createElement("div");
  projectInfo.classList.add("project-info");

  const projectTitle = document.createElement("h3");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = project.name;
  projectInfo.appendChild(projectTitle);

  const projectDescription = document.createElement("p");
  projectDescription.classList.add("project-description");
  projectDescription.textContent = project.description;
  projectInfo.appendChild(projectDescription);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const githubButton = document.createElement("button");
  githubButton.textContent = "GitHub";
  githubButton.addEventListener("click", () => {
    window.open(project.githubLink, "_blank");
  });
  buttonContainer.appendChild(githubButton);

  const demoButton = document.createElement("button");
  demoButton.textContent = "Demo";
  demoButton.addEventListener("click", () => {
    window.open(project.demoLink, "_blank");
  });
  buttonContainer.appendChild(demoButton);

  projectInfo.appendChild(buttonContainer);

  const toolsContainer = document.createElement("div");
  toolsContainer.classList.add("tools-container");

  const toolsLabel = document.createElement("span");
  toolsLabel.classList.add("tools-label");
  toolsLabel.textContent = "Tools: ";
  toolsContainer.appendChild(toolsLabel);

  const toolsList = document.createElement("ul");
  toolsList.classList.add("tools-list");

  const tools = Array.isArray(project.tools)
    ? project.tools
    : project.tools.split(",").map((tool) => tool.trim());
  tools.forEach((tool) => {
    const toolItem = document.createElement("li");
    toolItem.textContent = tool;
    toolsList.appendChild(toolItem);
  });

  toolsContainer.appendChild(toolsList);
  projectInfo.appendChild(toolsContainer);

  gridItem.appendChild(projectInfo);

  gridContainer.appendChild(gridItem);
});
