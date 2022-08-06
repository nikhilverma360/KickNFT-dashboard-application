import image1 from "@/images/creator1.jpg";
import image2 from "@/images/creator2.jpg";
import image3 from "@/images/creator3.jpg";

import flag from "@/images/flag.png";
import info from "@/images/info.jpg";
import bg1 from "@/images/project5-b.jpg";
import bg2 from "@/images/project-bg-2.jpg";
import thumb3 from "@/images/creator1-b.jpg"; //section image
// import projectDetails2 from "@/images/project-details-2.jpg";
import thumb2 from "@/images/creator1-a.jpg"; //section image
import projectInfo from "@/images/owner.png";
import projectPerk1 from "@/images/supporter-silver.png";
import projectPerk2 from "@/images/supporter-gold.png";
import projectPerk3 from "@/images/supporter-platinum.png";
import thumb from "@/images/creator1.jpg";

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

const creators = [
    {
        id: 1,
        image: image1,
        category: "Youtuber",
        date: "30 Days Left",
        title: "Salil jamdar - New Webseries Production",
        goal: "25000.00",
        raised: 13,
    },
    {
        id: 2,
        image: image2,
        category: "Instagramer",
        date: "20 Days Left",
        title: "Gaurav Taneja - Lauching a new Sponsoring Edition On Instagram ",
        goal: "20000.00",
        raised: 13,
    },
    {
        id: 3,
        image: image3,
        category: "Writer",
        date: "20 Days Left",
        title: "Chetan Bagat - Producing a new movie based on my novel ",
        goal: "50000.00",
        raised: 15,
    },
];

export const creatorsArea = {
    tagline: "Businesses You Can Back",
    title: "Explore Projects",
    creators,
};

export const exploreCreators = {
    tagline: "Businesses You Can Back",
    title: "Explore Projects",
    projects: [
        {
            id: 1,
            image: image1,
            tagline: "Youtuber",
            date: "30 Days Left",
            title: "Salil jamdar - New Webseries Production",
            goal: "25000.00",
            raised: 13,
        },
        {
            id: 2,
            image: image2,
            tagline: "Instagramer",
            date: "20 Days Left",
            title: "Gaurav Taneja - Lauching a new Sponsoring Edition On Instagram ",
            goal: "20000.00",
            raised: 13,
        },
        {
            id: 3,
            image: image3,
            tagline: "Writer",
            date: "20 Days Left",
            title: "Chetan Bagat - Producing a new movie based on my novel",
            goal: "50000.00",
            raised: 15,
        },
    
    ],
};

export const creatorArea = [
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

export const creatorDetailsArea = {
    thumb,
    tagline: "Tech",
    country: "India",
    title: "Salil jamdar - New Webseries Production ",
    pledged: 2203,
    backers: 8,
    daysLeft: 20,
    raised: 3,
    goal: "250000.00",
    socials: socials3,
};

export const creatorDetailsTabBtns = [
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

export const creatorDetailsStory = {
    ids: "pills-home",
    text: "About - Salil Jamdar began his YouTube journey in 2014 with the web series Shudh Desi Endings. Later, the producers of Shudh Desi Endings reached out to him and offered him to start a YouTube channel where he would post parodies of several songs and movies. He started the channel Shudh Desi Gaane in the year 2015.",
    lists: [
        '',
       
       
    ],
    image: thumb2,
    text2:" I wants to create my new series and for that i want some fund to start the production as webseries production is very costly thing. You can support me.",
    text3:"",
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

export const creatorDetailsFaq = {
    id: "pills-profile",
    faqs,
};

export const creatorDetailsUpdates = {
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

export const creatorDetailsComments = {
    idc: "pills-4",
    comments: [
        {
            id: 1,
            
        },
    ],
};

export const creatorDetailsSidebar = {
    info: {
        image: projectInfo,
        name: " Salil",
        backed: 20,
        text: "Youtuber",
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
    creators: creators.slice(0, 3),
};
