const render = () => {
  renderAboutSection();
  renderProjectsSection();
  renderCertificationsSection();
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

const renderProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio",
      github: "https://github.com/ariveroi/Portfolio-2.0",
      main_language: "Javascript",
      in_progress: true,
    },
    {
      title: "Learn With Quiz",
      github: "https://github.com/ariveroi/Learn-with-quiz",
      main_language: "React",
      in_progress: true,
    },
    {
      title: "L'alberca web",
      github: "https://github.com/ariveroi/lalberca-web",
      main_language: "React",
      in_progress: true,
    },
    {
      title: "Padel Tournaments",
      github: "https://github.com/ariveroi/padel-torunaments",
      main_language: "React Native",
      in_progress: true,
    },
    // {
    //   title: "Templates for React",
    //   github: "https://github.com/ariveroi/templates-for-react",
    //   main_language: "React",
    //   in_progress: true,
    // },
    {
      title: "CMS Tool",
      github: "https://github.com/ariveroi/cms-tool",
      main_language: "React | Django",
      in_progress: true,
    },
    {
      title: "AI Flapy Bird",
      github: "https://github.com/ariveroi/aiflapy",
      main_language: "Python",
      in_progress: true,
    },
    {
      title: "ToDo Chrome Extension",
      github: "https://github.com/ariveroi/todo-extension",
      main_language: "Javascript",
      in_progress: true,
    },
    {
      title: "Drag and Drop",
      github: "https://github.com/ariveroi/kanban-drag-and-drop",
      main_language: "Javascript",
      in_progress: true,
    },
    // {
    //   title: "Web Bundler",
    //   github: "https://github.com/ariveroi/react-redux-ts",
    //   main_language: "Typescript",
    //   in_progress: true,
    // },
    // {
    //   title: "Travel App",
    //   github: "https://github.com/ariveroi/travel-app",
    //   main_language: "React Native",
    //   in_progress: true,
    // },
  ];

  const projectsContainer = document.querySelector(".projects-container");

  projects.forEach((project) => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    projectContainer.innerHTML = `
    <div class="project-item">
      <div class="project-item-header">
        <h3 class="project-item-title">
          <a href="" target="_blank">${project.title}</a>
        </h3>
      </div>
      <div class="project-item-footer">
        <i class="icon fa-brands fa-github"></i>
        <a href="#" class="project-tag">${project.main_language}</a>
      </div>
    </div>
            `;
    projectContainer.addEventListener("click", () => {
      window.open(project.github, "_blank");
    });
    projectsContainer.appendChild(projectContainer);
  });
};

const showGithub = (url) => {
  window.open(url, "_blank");
};

const renderCertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      company: "Amazon Web Services",
      date: "March 2022",
      img: "assets/aws.svg",
    },
    {
      title: "Salesforce Certified Administrator",
      company: "Salesforce",
      date: "July 2022",
      img: "assets/salesforce.png",
    },
  ];

  const certificationsContainer = document.querySelector(
    ".certifications-container"
  );
  certifications.forEach((certification) => {
    const certificationContainer = document.createElement("div");
    certificationContainer.classList.add("certification-container");
    certificationContainer.innerHTML = `
    <div class="certification-item">
      
      <div class="certification-item-img">
        <img src="${certification.img}" alt="${certification.company}" class="certification-item-logo">
      </div>
      <div class="certification-item-header">
        <h3 class="certification-item-title">
          <a href="" target="_blank">${certification.title}</a>
        </h3>
        <h4 class="certification-item-company">${certification.company}</h4>
      </div>
      <div class="certification-item-footer">
        <span class="certification-item-date">${certification.date}</span>
      
      </div>
    </div>
            `;
    certificationsContainer.appendChild(certificationContainer);
  });
};

window.addEventListener("load", render);
