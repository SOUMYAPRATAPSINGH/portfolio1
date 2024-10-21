import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import logo from "./Logo.png";
import me from "./me.jpg";

export const DATA = {
  name: "Soumya Pratap Singh",
  initials: "P",
  url: "https://pratap.io",
  location: "Chennai ,TN",
  locationLink: "https://maps.app.goo.gl/nqYxGkSzxPumtVdB8",
  description:
    "",
  summary:
    "I'm Batman, a Computer Science student with experience in full-stack development, cloud computing, and AI integration. I've worked with Python, JavaScript, React, and Node.js through internships and personal projects. I'm looking to apply my technical skills and problem-solving abilities in a software engineering role.",
  avatarUrl: "./tax.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Node.js",
    "Python",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://drive.google.com/file/d/19ddB_CZezOcPYKfHYzWQuO5kAnL46Wtk/view?usp=drivesdk", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "soumyapratapsingh.work@gmail.com",
    tel: "+91-9691080370",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SOUMYAPRATAPSINGH",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/soumyapratapsingh/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Resume: {
      //   name: "Youtube",
      //   url: "https://drive.google.com/file/d/19ddB_CZezOcPYKfHYzWQuO5kAnL46Wtk/view?usp=drivesdk",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    // {
    //   company: "Atomic Finance",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Bitcoin Protocol Engineer",
    //   logoUrl: "/atomic.png",
    //   start: "May 2021",
    //   end: "Oct 2022",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
    {
      company: "Systemica Solutions",
      href: "#",
      badges: [],
      location: "Remote (U.K/India)",
      title: "Software Engineering Intern",
      logoUrl: "/systemica.png",
      start: "March 2024",
      end: "May 2024",
      description:
        "Developed front-end features using JavaScript frameworks and libraries to enhance user experience. Explored innovative methods to improve feature development and optimize back-end processes. Deepened comprehension of product terminology and domain-specific language.",
    },
    {
      company: "Cisco",
      href: "#",
      badges: [],
      location: "Remote(India(AICTE))",
      title: "Cloud Engineering Intern",
      logoUrl: "/cisco.png",
      start: "June 2023",
      end: "August 2023",
      description:
        "Acquired knowledge of cloud computing principles and explored various development and scaling models. Leveraged Amazon Web Services (AWS) cloud platform for executing real-time projects.",
    },
    
  ],
  education: [
    // {
    //   school: "Buildspace",
    //   href: "https://buildspace.so",
    //   degree: "s3, s4, sf1, s5",
    //   logoUrl: "/buildspace.jpg",
    //   start: "2023",
    //   end: "2024",
    // },
    {
      school: "Vel Tech RR Dr.SD R&D Institute of Science and Technology",
      href: "#",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/veltech.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Bardsley High School",
      href: "#",
      degree: "12th CBSE",
      logoUrl: "/bardsley.png",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
    {
      title: "🏙️ Virtual-Estate",
      href: "#",
      dates: "2023 - 2024",
      active: true,
      description:
        "🚀 Next-level real estate experience! Immersive 3D property tours meet cutting-edge CRM. Turning house hunting into a tech adventure!",
      technologies: [
        "Express.Js", "Node.Js", "Tailwind.Css", "React", "MongoDB", "Firebase", "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://vr-project-livid.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      coolFactor: "3D tours that make you feel like a property tycoon!",
    },
    {
      title: "📚 Summarizzer",
      href: "#",
      dates: "2023 - 2024",
      active: true,
      description:
        "💨 TL;DR on steroids! Rapid API-powered summarization engine that turns walls of text into bite-sized brilliance.",
      technologies: [
        "Rapid API", "Vite-React.Js", "Tailwind.Css", "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://summ-rizz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      coolFactor: "Making long reads short and smart!",
    },
    {
      title: "🎨 UI-Customize (Cognizant)",
      href: "#",
      dates: "2023 - 2024",
      active: true,
      description:
        "🔧 Dashboard magic! Users become UI wizards, crafting their perfect workspace. Admins get superpowers to shape the global look.",
      technologies: [
        "React.js", "Node.js", "Tailwind", "MongoDB", "Git", "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://dash-ui-b38a.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      coolFactor: "Turning boring dashboards into personal playgrounds!",
    },
    {
      title: "❤️ Heart Disease Prediction",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "🔮 Crystal ball for heart health! Random Forest algorithm crunches data to predict heart risks. Early detection never looked so smart!",
      technologies: [
        "Random Forest", "Flask", "Python", "Git"
      ],
      links: [
        {
          type: "Source",
          href: "https://colab.research.google.com/drive/1X1K3EPXhF_DUA4bexdPfoJuXKXCRfWck?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      coolFactor: "AI that keeps hearts beating strong!",
    },
    {
      title: "🔬 Skin Cancer Detection",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "🖼️ Picture-perfect health diagnosis! CNNs dive deep into skin images, catching cancer before it can hide. Early detection at its finest!",
      technologies: [
        "Convolutional Neural Networks", "Flask", "Python", "Git"
      ],
      links: [
        {
          type: "Source",
          href: "https://drive.google.com/file/d/1VY0OIgpeenaS3icv0Qy8CrxnKo0sH9UF/view",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      coolFactor: "Making dermatologists' jobs easier, one pixel at a time!",
    },
    {
      title: "💰 Banking Application",
      href: "#",
      dates: "2022 - 2023",
      active: true,
      description:
        "🏦 CRUD operations meet money management! Secure, sleek, and user-friendly - banking for the digital age.",
      technologies: [
        "Java Servlet", "JSP", "CSS", "Tomcat", "MySQL Workbench"
      ],
      links: [
        {
          type: "Source",
          href: "https://drive.google.com/drive/folders/11D1dIsXm1yeSS_ppJP34s_bjANicB1Ez",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      coolFactor: "Making banking cool (yes, it's possible)!",
    },
    {
      title: "🧠 Eunoia",
      href: "#",
      dates: "2022 - 2023",
      active: true,
      description:
        "🤖 AI meets mental health! This full-stack marvel identifies disorders, logs conditions, and even senses emotions. The future of mental wellness is here!",
      technologies: [
        "Express.Js", "Node.Js", "Tailwind.Css", "React", "MongoDB", "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.eunoiaofficials.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      coolFactor: "Your personal AI therapist, minus the couch!",
    },
   
  ],
  hackathons: [
    {
      title: "IIT Bombay Hackathon Hero",
      date: "2024",
      image:"/iitbombay.png",
      description: "Crushed it at IIT Bombay's Hackathon! Snagged a Top 4 spot against the cream of the crop.",
      coolFactor: "Proving I can hang with the best tech minds in India!",
      // links: [
      //       {
      //         title: "Devpost",
      //         icon: <Icons.globe className="h-4 w-4" />,
      //         href: "https://devpost.com/software/my6footprint",
      //       },
      //       {
      //         title: "ML",
      //         icon: <Icons.github className="h-4 w-4" />,
      //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
      //       },
      //       {
      //         title: "iOS",
      //         icon: <Icons.github className="h-4 w-4" />,
      //         href: "https://github.com/Wallet6/CarbonWallet",
      //       },
      //       {
      //         title: "Server",
      //         icon: <Icons.github className="h-4 w-4" />,
      //         href: "https://github.com/Wallet6/wallet6-server",
      //       },
      //     ],
    },
    {
      title: "IIT Kanpur Hackathon",
      date: "2024",
      image:"/iitkanpur.png",
      description: "Crushed it at IIT Kanpur's Hackathon! Snagged a Top  spot against the cream of the crop.",
      coolFactor: "Proving I can hang with the best tech minds in India!",
    },
    {
      title: "PI Pro Champion",
      date: "2024",
      image:"/pi.jpg",
      description: "Dominated the inter-departmental PI Pro competition. First place, baby!",
      coolFactor: "King of the academic jungle!",
    },
    {
      title: "Triple Threat Ideator",
      date: "2024",
      image:"/ideathon.jpeg",
      description: "Made it to the Top 10 in ideation competitions. Not once, not twice, but THREE times in 2024!",
      coolFactor: "My ideas are so good, they can't ignore me!",
    },
    {
      title: "Certified Tech Wizard",
      date: "2023",
      image:"/cisco2.png",
      description: "Racked up certs in CCSK v4.1, CCNA v7(1,2,3), Cybersecurity Essentials, and more!",
      coolFactor: "Collecting tech certs like they're Pokémon!",
    },
    {
      title: "Data Visualization",
      date: "2023",
      
      image:"/dv.png",
      description: "Mastered the art of making data pretty with Tableau, courtesy of Infosys.",
      coolFactor: "Turning boring numbers into eye candy!",
    },
    {
      title: "Git Guru",
      date: "2023",
      image:"/git.png",
      description: "Became one with version control",
      coolFactor: "I speak fluent commit message!",
    },
    {
      title: "Bug Buster",
      date: "2023",
      image:"/debug.png",
      description: "Leveled up in Software Testing and throughout this time secured top spots in more then 2 debugging events.",
      coolFactor: "I don't just find bugs, I make them extinct!",
    },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    
  ],
} as const;
