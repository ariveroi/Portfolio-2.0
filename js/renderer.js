const render = () => {
  renderAboutSection();
};

const renderAboutSection = () => {
  const experience = [
    {
      title: "Salesforce Developer",
      company: "NTS Seidor",
      date: "March 2022 - Present",
      description: "TBD",
    },
    {
      title: "Cloud Architect",
      company: "Accenture",
      date: "January 2022 - March 2022",
      description:
        "Development of infrastructures based on cloud environments, making use of the technologies and services offered by Amazon Web Services (AWS).",
    },
    {
      title: "Product Manager Intern",
      company: "Amazon",
      date: "May 2021 - November 2021",
      description:
        "Development of a web-based tool to automate internal business processes. I used AWS to manage the back-end logic and Vue as the front-end framework. Also, I did product management tasks, gathering feedback from users to improve the tool, or trying to gain adoption of it.",
    },
    {
      title: "Political Coordinator",
      company: "Spanish Senate",
      date: "September 2020 - May 2021",
      description:
        "Management and organization of a parliamentary group within the Spanish Senate. In addition, if time allowed, I developed software tools to streamline and automate some processes.",
    },
    {
      title: "Cybersecurity Consultant",
      company: "Deloitte",
      date: "July 2019 - September 2020",
      description:
        "Consultant specialized in cybersecurity risks, oriented towards the study and analysis of the cybersecurity capabilities of different companies, as well as in the development and advice on their Continuity Plans.",
    },
    {
      title: "Software Engineer Intern",
      company: "Universidad Politécnica de Madrid",
      date: "May 2018 - August 2018",
      description: "TBD",
    },
  ];

  const education = [
    {
      title: "Bachelor of Science",
      company: "Universidad Politécnica de Madrid",
      date: "September 2018 - May 2020",
      description:
        "Computer Science and Engineering. Specialty: Software Engineering.",
    },
    {
      title: "Certificate of Proficiency",
      company: "Universidad Politécnica de Madrid",
      date: "September 2018",
      description:
        "Computer Science and Engineering. Specialty: Software Engineering.",
    },
  ];

  const experienceContainer = document.querySelector("#experience");
  const educationContainer = document.querySelector("#education");

  renderComponent(experience, experienceContainer);
  renderComponent(education, educationContainer);
};

const renderComponent = (info, container) => {
  info.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("timeline-item");
    itemContainer.innerHTML = `
            <div class="circle-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">
                    <i class="fa fa-calendar"></i>${item.date}
                </span>
                <h4 class="timeline-title">${item.title}</h4>
                <h5 class="timeline-company">${item.company}</h5>
                <p class="timeline-description">${item.description}</p>
            </div>
            `;
    container.appendChild(itemContainer);
  });
};

window.addEventListener("load", render);
