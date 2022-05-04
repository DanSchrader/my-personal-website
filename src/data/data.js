import ImagePerson from "../images/daniel-schrader-2022.png";
import ImageInterests from "../images/reaper-281.png";
import LogoBD from '../images/beerserker-design-logo-rund.svg';
import LogoBP from '../images/beerserker-productions-logo.svg';
import LogoBI from '../images/burns-iceman-logo-rund.svg';

const data = [
    {
        _id: "person",
        button: "About me",
        src: ImagePerson,
        alt: "Image of Daniel Schrader",
        title: "Daniel Schrader",
        text: {
            p1: "Hello, I'm the world's tallest dwarf. I left Khazad-dum in 2012, because the doors were to small and the chilis not hot enough.",
            p2: "For a few years I improved my skills as a graphic blacksmith and ran a small one-dwarf-company as a filming, audiorecording, editing, writing and designing Media Creator.",
            p3: "For 15 years I funded my self-education and start-up years as a barkeeper. That also meant a lot of fun and satisfied my interests in haptic work with ingredients.",
            p4: "Like for many others my situation changed with the upcoming pandemic. I wanted to learn something new and focus on the right things.",
            p5: "Finally I decided to learn how to code from the beginning and gratuated a Web Development Bootcamp at neuefische. Here I am now: A junior frontend developer.",
            p6: "Where do I see myself in 5 years? - In a tiny house in the middle of a chili forest as a full-stack developer.",
        },
    },
    {
        _id: "beerserkerdesign",
        button: "Beerserker Design",
        src: LogoBD,
        alt: "Beerserker-Design-Logo",
        title: "Beerserker Design",
        text: {
            p1: "Beerserker Design is an overview about my skills and working experience at the moment. Design experience turned out to be very useful for UI-Development and it's preparation with Figma or Adobe UX.",
            p2: "Since I started coding as a Trainee Web Developer at neuefische I learned many helpful things for a modern working environment like Git- and GitHub-workflow as well as pair- and mob-programming.",
            p3: "I also got in touch with Storybook, React-Testing-Library and Scrum. After introductions to HTML, CSS and Java Script (vanilla) the bootcamp focused on React and Styled-Components.",
            p4: "React-Router, Vercel Deployment, API-fetching and small backends with MongoDB were also very handy things, I learned to integrate into projects.",
            
        },
    },
    {
        _id: "beerserkerproductions",
        button: "Beerserker Productions",
        src: LogoBP,
        alt: "Beerserker-Productions-Logo",
        title: "Beerserker Productions",
        text: {
            p1: "Beerserker Productions is what remains of my former one-dwarf-company 'Schrader-Wolff-Media'.",
            p2: "Before the bootcamp I used to work with the Adobe Creative Cloud - especially with Photoshop, Illustrator, InDesign, Premiere Pro and After Effects.",
            p3: "I can handle a (D)SLR or any digital video camera for filming, Cubase or field recorders for audio recording and WordPress for content writing.",
        },
    },
    {
        _id: "burnsandiceman",
        button: "Burns & Iceman",
        src: LogoBI,
        alt: "Burns-and-Iceman-Logo",
        title: "T. Burns & T.W. Iceman",
        text: {
            p1: "'T. Burns and T.W. Iceman' is the name of my future retirement company. It produces stunning hot sauces, seasonings and syrups for drinks.",
            p2: "Unfortunately - except for a birthday present special edition - 'T. Burns & T.W. Iceman' never filled a bottle of hot sauce yet, because I ate it all before it could hit any bottleneck.",
        },
    },
    {
        _id: "interests",
        button: "Interests",
        src: ImageInterests,
        alt: "Image of 281 grams of Carolina Reaper",
        title: "Interests",
        text: {
            p1: "My guilty passion #1 are chilis. The hotter, the better. I must confess, I got a little addicted to Capsaicin over the last years.",
            p2: "I love to watch them grow, eat them fresh or make lovely hot seasonings and hot sauces. Yes, I love salad - if it's hot.",
            p3: "My other interests are cooking, BBQ, metal, festivals and concerts, camping, tabletop games, fantasy and ancient myths.",
        },
    },
];

export default data;