const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const words = [
    {text: "Philippines"},
    {text: "Manila"},
    {text: "Makati"},
    {text: "Baguio"},
    {text: "Philippines"},
    {text: "Manila"},
    {text: "Makati"},
    {text: "Baguio"},
];

const counterItems = [
    {value: 1, suffix: "+", label: "Years of Experience"},
    {value: 0, suffix: "+", label: "Satisfied Clients"},
    {value: 1, suffix: "+", label: "Completed Projects"},
    {value: 0, suffix: "%", label: "Client Retention Rate"},
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Anthony contributed creativity and technical expertise to the team, driving significant enhancements in frontend performance and delivering faster, more efficient user experiences.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "January 2023 - Present",
        responsibilities: [
            "Designed and implemented interactive features to enhance the website's user interface.",
            "Worked hand-in-hand with UI/UX designers to create intuitive and engaging user experiences.",
            "Streamlined web applications to ensure peak performance, speed, and scalability.",
        ],
    },
    {
        review: "Anthony's work on Appwrite’s mobile app demonstrated exceptional quality and efficiency. He delivered solutions that elevated our mobile experience and aligned perfectly with our product goals.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Full Stack Developer",
        date: "June 2020 - December 2022",
        responsibilities: [
            "Developed cross-platform mobile applications using React Native, seamlessly integrating with Appwrite's backend services.",
            "Enhanced app performance and user satisfaction by optimizing code and conducting rigorous testing.",
            "Collaborated with the product team to implement new features based on user and stakeholder feedback.",
        ],
    },
    {
        review: "Anthony has made exceptional contributions to Docker's web applications. He tackles challenges with a strategic and solutions-oriented approach.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "React Native Developer",
        date: "March 2019 - May 2020",
        responsibilities: [
            "Spearheaded the development of Docker's web applications with a strong emphasis on scalability and performance.",
            "Collaborated with backend engineers to ensure seamless integration of APIs with the frontend.",
            "Enhanced the Docker ecosystem by contributing to open-source projects widely adopted by the community.",
        ],
    },
];

const socialImgs = [
    {
        name: "gh",
        url: "https://github.com/anthonytagorda",
        imgPath: "/images/gh.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/anthony-tagorda/",
        imgPath: "/images/linkedin.png",
    },
    {
        name: "ig",
        url: "https://www.instagram.com/a.shin.o/",
        imgPath: "/images/ig.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/anthony.tagorda/",
        imgPath: "/images/fb.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    socialImgs,
    techStackIcons,
    navLinks,
};
