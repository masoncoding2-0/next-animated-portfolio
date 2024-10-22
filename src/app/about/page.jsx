"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRef } from "react";

const skills = [
    { type: "language", title: "Python" },
    { type: "language", title: "Ruby" },
    { type: "language", title: "JavaScript" },
    { type: "language", title: "Elixir" },
    { type: "language", title: "Golang" },
    { type: "language", title: "Solidity" },
    { type: "language", title: "TypeScript" },
    { type: "framework", title: "Django" },
    { type: "framework", title: "Flask" },
    { type: "framework", title: "Ruby on Rails" },
    { type: "framework", title: "React.js" },
    { type: "framework", title: "Astro.js" },
    { type: "framework", title: "Next.js" },
    { type: "framework", title: "Vue.js" },
    { type: "framework", title: "Angular.js" },
    { type: "databases", title: "MySQL" },
    { type: "databases", title: "PostgreSQL" }, // Corrección aquí
    { type: "databases", title: "MongoDB" },
    { type: "databases", title: "Supabase" },
    { type: "databases", title: "AstroDB" },
    { type: "databases", title: "Prisma.js" },
    { type: "rpa", title: "Robocorp" },
    { type: "rpa", title: "Selenium" },
    { type: "rpa", title: "UiPath" },
    { type: "devops", title: "AWS" },
    { type: "devops", title: "Google Cloud Platform" },
    { type: "devops", title: "Github" },
    { type: "devops", title: "Azure" },
    { type: "devops", title: "Docker" },
    { type: "devops", title: "Capybara" },
    { type: "devops", title: "Jenkins" },
    { type: "devops", title: "Kubernetes" },
    { type: "external", title: "REST Api" },
    { type: "external", title: "GraphQL" },
    { type: "lowcode", title: "N8N" }, // Corrección aquí
    { type: "lowcode", title: "Zappier" }, // Corrección aquí
    { type: "lowcode", title: "Zoho" }, // Corrección aquí
    { type: "collaboration", title: "Slack" }, // Corrección aquí
    { type: "collaboration", title: "Jira" }, // Corrección aquí
    { type: "collaboration", title: "Trello" }, // Corrección aquí
    { type: "collaboration", title: "Linear" }, // Corrección aquí
    { type: "collaboration", title: "Miro" }, // Corrección aquí
    { type: "collaboration", title: "Notion" }, // Corrección aquí
    { type: "soft_skills", title: "Project Management" },
    { type: "soft_skills", title: "Agile Methodologies" },
    { type: "soft_skills", title: "Conflict resolution" },
    { type: "soft_skills", title: "Communication" },
    { type: "soft_skills", title: "Critical Thinking" },
];

const timelineData = [
    {
        title: "Ruby Developer",
        date: "Jan. 2024 - Aug. 2024",
        description: "I developed a complete e-Commerce with the shopping cart, connected with the inventory at the physical store already made with microservices architecture. With ruby on rails, with TDD with Rspec, React.js, Tailwind.CSS.",
        company: "Litium",
    },
    {
        title: "Python Developer",
        date: "Jun. 2023 - Jan. 2024",
        description: "Designed and developed full-stack web applications using Python with Django and Flask frameworks, delivering tailored solutions for retail and streaming companies across the USA, UK, Latin America, and Spain. Built and optimized RESTful APIs for retail and streaming platforms, integrating third-party services such as payment gateways, streaming protocols, and user authentication systems (OAuth2, JWT) to enable seamless customer experiences. Developed desktop applications using Python for inventory management, customer data processing, and content distribution systems, providing retail and streaming companies with enhanced control over their operations.",
        company: "Litium",
    },
    {
        title: "RPA Developer",
        date: "Jul. 2023 - Nov. 2023",
        description: "Creation and management of Robocorp robots for the automation of judicial processes.",
        company: "Juzto",
    },
    {
        title: "Zoho Support Developer",
        date: "Mar. 2023 - Ago. 2023",
        description:
            "Application Support Analyst Zoho CRM, AWS S3, Supabase support",
        company: "Juzto",
    },
    {
        title: "Jr. Python Developer",
        date: "Jan. 2022 - Mar. 2023",
        description: "Full-Stack development of a platform to upload media to AWS S3 with Django.",
        company: "Juzto",
    },
    {
        title: "Software Engineer Ruby",
        date: "Sep. 2021 - Mar. 2022",
        description: "Led the development of scalable web applications using Ruby on Rails for healthcare companies in the UK and Latin America, focusing on building secure and efficient systems for managing patient data, appointments, and clinical workflows. Designed and implemented RESTful APIs to enable seamless integration with third-party healthcare services and mobile applications, improving interoperability and accessibility of patient information across different platforms. Built desktop applications with Ruby, providing custom solutions for healthcare providers to manage patient records, billing systems, and inventory tracking, resulting in enhanced operational efficiency and accuracy. Ensured compliance with industry standards (such as HIPAA and GDPR) by implementing strong encryption, data masking, and access control mechanisms to safeguard sensitive medical and patient data.",
        company: "BairesDev",
    },
    {
        title: "JavaScript Developer",
        date: "2020-Current",
        description: "Developed full-stack applications using MERN (MongoDB, Express.js, React, Node.js), MEVN (MongoDB, Express.js, Vue.js, Node.js), and MEAN (MongoDB, Express.js, Angular, Node.js) stacks to deliver scalable and maintainable web solutions for various client projects. Implemented server-side logic using Node.js and Express, focusing on building RESTful APIs that interact with MongoDB databases to manage data, ensuring optimized performance and scalability for real-time applications. Built responsive and dynamic front-end interfaces using React, Vue.js, and Angular frameworks, creating seamless user experiences across devices by leveraging advanced JavaScript techniques and component-based architectures. Architected and deployed modern web applications with Next.js, utilizing its features such as server-side rendering (SSR), static site generation (SSG), and API routes to enhance SEO performance and improve overall page load times. Integrated third-party services and APIs, including payment gateways, authentication providers (OAuth, JWT), and cloud-based storage (AWS S3, Firebase), streamlining external functionalities into core applications. Optimized application performance and security, implementing caching strategies (Redis, CDN), JWT-based authentication, and proper data validation to prevent vulnerabilities and ensure smooth user interactions. Collaborated with cross-functional teams, including UI/UX designers and backend developers, to define project requirements, deliver high-quality code, and troubleshoot complex issues during the software development lifecycle. Maintained and updated existing codebases for long-term projects, performing regular code refactoring, implementing new features, and resolving bugs to ensure stability and performance enhancements. Automated CI/CD pipelines using DevOps tools such as Jenkins, Docker, and GitLab CI, ensuring smooth deployment processes and minimal downtime during production releases.",
        company: "MunayTech",
    },
    {
        title: "Ruby Developer",
        date: "2019-Current",
        description: "Automated routine tasks and workflows for healthcare providers, developing custom scripts and background jobs using Sidekiq, enabling the automatic processing of large datasets, billing cycles, and appointment scheduling. Optimized database queries and backend logic, ensuring fast and efficient data retrieval for complex medical records by leveraging ActiveRecord and database indexing techniques. Collaborated closely with healthcare professionals to gather requirements, understand business processes, and translate them into technical solutions, ensuring that the final product met the clinical and operational needs of end users. Performed continuous performance improvements and code optimizations, focusing on reducing application load times and improving overall user experience for healthcare professionals and administrative staff. Deployed and maintained applications using cloud-based infrastructures such as AWS, ensuring high availability, scalability, and security for healthcare systems used by multiple clinics and hospitals. Conducted regular code reviews and mentoring, ensuring high coding standards and best practices were followed across the development team, contributing to the overall quality and maintainability of the software.",
        company: "MunayTech",
    },
    {
        title: "Python Developer",
        date: "2018-Current",
        description:
            "Development of web and desktop projects using Python, Django, Flask for retail, streaming companies in USA, UK, Latam, and Spain.",
        company: "MunayTech",
    },
];


const AboutPage = () => {
    const [selectedTab, setSelectedTab] = useState('language');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    }

    const filteredSkills = skills.filter(skill => skill.type === selectedTab);

    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY IMAGE */}
                        <Image
                            src="/me.jpg"
                            alt=""
                            width={112}
                            height={112}
                            className="w-28 h-28 rounded-full object-cover"
                        />
                        {/* BIOGRAPHY TITLE */}
                        <h1 className="font-bold text-2xl"> BIOGRAPHY </h1>
                        {/* BIOGRAPHY DESC */}
                        <p className="text-lg">
                            Systems Engineer with a dual degree and over 6 years of experience as a Fullstack Developer,
                            RPA Developer, and DevOps Developer. I've worked both as a freelancer and in-house,
                            delivering tech solutions for public and private organizations.
                            Skilled in a wide range of technologies, including Python, Ruby, JavaScript, among others.
                            Additionally, I bring 2 years of experience in Digital Marketing, with a strong passion for Digital Transformation
                            and Cryptocurrencies. Currently, I’m honing my skills in mobile development using frameworks such as
                            Ionic, React Native, Next.js, Vue.js, and Flutter.
                        </p>
                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">I don't just write code; I craft solutions that are efficient, scalable, and meaningful.</span>
                        {/* BIOGRAPHY SIGNATURE SVG */}
                        <div className="self-end">
                            <Image
                                src="/signature.svg"
                                alt="Signature"
                                width={200}  // Puedes ajustar el tamaño
                                height={100} // según necesites
                            />
                        </div>
                    </div>
                    {/* BIOGRAPHY SCROLL SVG */}
                    <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </motion.svg>
                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: "-900px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="flex gap-4 flex-wrap"
                        >
                            <div className="border-b border-amber-200 dark:border-amber-700">
                                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                                    {["language", "framework", "databases", "external", "rpa", "devops", "lowcode", "collaboration", "soft_skills"].map((tab) => (
                                        <li key={tab} className="me-2">
                                            <button
                                                onClick={() => handleTabClick(tab)}
                                                className={`inline-flex items-center justify-center p-4 border-b-2 ${selectedTab === tab ? 'border-amber-500 text-amber-500' : 'border-transparent text-amber-700'}   hover:text-amber-500`}
                                            >
                                                {tab.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())} {/* Formatear el nombre de la pestaña */}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Lista de skills filtradas según la pestaña seleccionada */}
                            <div className="mt-4 flex gap-4 flex-wrap">
                                {filteredSkills.map((skill, index) => (
                                    <div key={index} className="rounded p-2 text-sm cursor-pointer bg-amber-500 text-white hover:bg-white hover:text-amber-500">
                                        {skill.title}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    {/* BIOGRAPHY SCROLL SVG */}
                    <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </motion.svg>
                    {/* EXPERIENCE CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={experienceRef}>
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.6 }}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}

                            <ol className="relative border-s border-amber-200 dark:border-amber-700">
                                {timelineData.map((item, index) => (
                                    <li className="mb-10 ms-6" key={index}>
                                        <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-white dark:ring-amber-900 dark:bg-amber-700">
                                            <svg
                                                className="w-2.5 h-2.5 text-amber-600 dark:text-amber-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </span>
                                        <h2 className="mb-1 text-lg font-semibold text-black dark:text-black">
                                            {item.title}
                                        </h2>
                                        <time className=" italic block mb-2 text-sm font-normal leading-none text-black dark:text-black">
                                            {item.date}
                                        </time>
                                        <p className="font-normal text-lg text-black ark:text-black">
                                            {item.description}
                                        </p>
                                        <h3 className="text-base font-semibold text-black ark:text-black">
                                            {item.company}
                                        </h3>
                                    </li>
                                ))}
                            </ol>
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 xl:1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
}

export default AboutPage;
