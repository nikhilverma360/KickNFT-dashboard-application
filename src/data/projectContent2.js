import image1 from "@/images/explore-projects-1.webp";
import image2 from "@/images/explore-projects-2.webp";
import image3 from "@/images/explore-projects-3.webp";
import image4 from "@/images/explore-projects-4.webp";
import image5 from "@/images/explore-projects-5.webp";
import image6 from "@/images/explore-projects-6.webp";
import flag from "@/images/flag.png";
import info from "@/images/info.jpg";
import bg1 from "@/images/project1-b.jpg";
import bg2 from "@/images/project-bg-2.jpg";
import thumb3 from "@/images/project2-a.png"; //section image
// import projectDetails2 from "@/images/project-details-2.jpg";
import thumb2 from "@/images/project2-b.png"; //section image
import projectInfo from "@/images/owner.png";
import projectPerk1 from "@/images/Funder-silver.png";
import projectPerk2 from "@/images/Funder-gold.png";
import projectPerk3 from "@/images/Funder-platinum.png";
import thumb from "@/images/explore-projects-2.webp";

import { faqs } from "./faqArea";

export const socials3 = [
    {
        id: 1,
        icon: "fa fa-facebook-square",
        href: "#",
    },
    {
        id: 2,
        icon: "fa fa-twitter",
        href: "#",
    },
    {
        id: 3,
        icon: "ffa fa-pinterest-p",
        href: "#",
    },
    {
        id: 4,
        icon: "fa fa-instagram",
        href: "#",
    },
];

const projects = [
    {
        id: 1,
        image: image1,
        category: "Health",
        date: "10 Days Left",
        title: "SunnySide: Self Heating & Cooling Lunchbox",
        goal: "36000.00",
        raised: 43,
    },
    {
        id: 2,
        image: image2,
        category: "Tech",
        date: "50 Days Left",
        title: "Banala Sense - FOR BETTER SLEEP .ONLY A BUTTON AWAY",
        goal: "50000.00",
        raised: 23,
    },
    {
        id: 3,
        image: image3,
        category: "Tech",
        date: "20 Days Left",
        title: "Segway SuperScooter GT Series: Perform the Future ",
        goal: "350000.00",
        raised: 25,
    },
    {
        id: 4,
        image: image4,
        category: "Tech",
        date: "40 Days Left",
        title: "Subnado: Compact & Lightweight Underwater Scooter",
        goal: "3600.00",
        raised: 23,
    },
    {
        id: 5,
        image: image5,
        category: "Tech",
        date: "20 Days Left",
        title: "Afreda S6: A Fold-in-1s Reverse 3-wheel E-bike ",
        goal: "500000.00",
        raised: 25,
    },
    {
        id: 6,
        image: image6,
        category: "Tech",
        date: "24 Days Left",
        title: "PicoPC: Tiny Desktop PC, Win10 Linux 4K Computer",
        goal: "100000.00",
        raised: 75,
    },
];

export const projectsArea = {
    tagline: "Businesses You Can Back",
    title: "Explore Projects",
    projects,
};

export const exploreProjects = {
    tagline: "Businesses You Can Back",
    title: "Explore Projects",
    projects: [
        {
            id: 1,
            image: "project-1.jpg",
            tagline: "Health",
            date: "10 Days Left",
            title: "SunnySide: Self Heating & Cooling Lunchbox",
            raised: 43,

        },
        {
            id: 2,
            image: "project-2.jpg",
            tagline: "Design",
            date: "20 Days Left",
            title: "The Power Bank that is Always Charged",
            raised: 23,
        },
        {
            id: 3,
            image: "project-3.jpg",
            tagline: "Design",
            date: "20 Days Left",
            title: "The Power Bank that is Always Charged",
            raised: 23,
        },
        {
            id: 4,
            image: "project-4.jpg",
            tagline: "Design",
            date: "20 Days Left",
            title: "The Power Bank that is Always Charged",
            raised: 23,
        },
        {
            id: 5,
            image: "project-5.jpg",
            tagline: "Design",
            date: "20 Days Left",
            title: "The Power Bank that is Always Charged",
            raised: 23,
        },
        {
            id: 6,
            image: "project-7.jpg",
            tagline: "Design",
            date: "20 Days Left",
            title: "The Power Bank that is Always Charged",
            raised: 23,
        },
    ],
};

export const projectArea = [
    {
        id: 1,
        bg: bg1,
        title: "Ready? Explore",
        text: "There are not is many variations of passages of lorem available.",
        linkText: "Discover projects",
    },
    {
        id: 2,
        bg: bg2,
        title: "Feeling Inspired?",
        text: "There are not is many variations of passages of lorem available.",
        linkText: "Join our team",
        btnClassName: " main-btn-2",
        className: " project-inspired",
    },
];

export const projectDetailsArea = {
    thumb,
    flag,
    tagline: "Health",
    country: "United Kingdom",
    title: "Banala Sense - BETTER SLEEP - ONLY A BUTTON AWAY",
    pledged: 2203,
    backers: 8,
    daysLeft: 10,
    raised: 43,
    goal: "50000.00",
    socials: socials3,
};

export const projectDetailsTabBtns = [
    {
        id: "pills-home",
        name: "Story",
    },
    {
        id: "pills-profile",
        name: "FAQs",
    },
    {
        id: "pills-contact",
        name: "Updates",
    },
    {
        id: "pills-4",
        name: "Comments",
    },
];

export const projectDetailsStory = {
    ids: "pills-home",
    text: " Fall Asleep Faster, Sleep Deeper & Improve Mental Clarity with Isochronic Sound Technology. As the seasons change and the days become shorter and the night's longer, ensure you're one step ahead of the dreaded winter blues. Welcome to Banala® Sense, our pioneering, ground-breaking, sleep-inducing smart mini speaker integrated with isochronic sound technology.Finally, you can say goodbye to insomnia and enjoy a prolonged, deeper, healing night's sleep. Bring Banala Sense into your life and harmonize your sleep cycles. With our schedules becoming increasingly chaotic, we must ensure we're getting our eight hours of beauty sleep each night.",
    lists: [
        ' Banala Sense introduces you to an intense sleep journey from the beginning of the night to the morning.',
        'Regular use of Banala Sense will restore your natural sleep cycles to their highest levels. In addition, continued use of our device will ensure your overall health improves.',
       
    ],
    image: thumb2,
    text2:
        "Smart Sleep-Cycle-Inducing System will start with the Theta Isochronic sound to help slow your cluttered mind down. Then, the Theta wave will ensure you fall into a deep sleep. Lastly, the Delta wave will make you experience an intense rest. In addition, the secret blend of other eclectic waves will ensure your peaceful rest continues.",
    text3:
        "Banala Life is a company dedicated to helping people worldwide sleep better. Based on extensive and insightful research, we offer solutions that improve the well-being of our users. Our mission is to defeat insomnia once and for all. ",
    // items: [
    //     {
    //         idi: 1,
    //         title: "One Power Bank for Every Wrist Car",
    //         text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.",
    //     },
    //     {
    //         idi: 2,
    //         title: "One Power Bank for Every Wrist Car",
    //         className: "mt-45 mb-50",
    //         text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.",
    //     },
    // ],
    images: thumb3,
};

export const projectDetailsFaq = {
    id: "pills-profile",
    faqs,
};

export const projectDetailsUpdates = {
    id: "pills-contact",
    updates: [
        {
            id: 1,
            title: " is the first update of our new project",
            info: {
                image: info,
                name: "Sarah Albert",
                date: "4 March, 2020",
            },
        },
    ],
};

export const projectDetailsComments = {
    idc: "pills-4",
    comments: [
        {
            id: 1,
            image: "comment-2.2.jpg",
            name: "Kevin Martin",
            date: "3 July, 2022",
            text: "It is really a awesome project. It gonna improve lives of lots of people",
        },
    ],
};

export const projectDetailsSidebar = {
    info: {
        image: projectInfo,
        name: "Mark Wilson",
        backed: 20,
        text: " Entrepreneur & Passionate Builder",
    },
    perks: [
        {
            id: 1,
            image: projectPerk1,
            sold: 10,
            off: 50,
            amount: "0.1 Matic",
            claimed: 10,
            totalClaimed: 50,
        },
        {
            id: 2,
            image: projectPerk2,
            sold: 15,
            off: 50,
            amount: "0.2 Matic",
            claimed: 13,
            totalClaimed: 50,
        },
        {
            id: 3,
            image: projectPerk3,
            sold: 13,
            off: 50,
            amount: "0.3 Matic",
            claimed: 12,
            totalClaimed: 50,
        },
    ],
};

export const similarProjects = {
    tagline: "Businesses You Can Back",
    title: "Similar Projects",
    projects: projects.slice(0, 3),
};
