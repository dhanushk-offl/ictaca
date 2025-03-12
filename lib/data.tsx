import { CalendarDays, Users, BookOpen, Presentation } from "lucide-react"

export const conferenceData = {
  name: "5th International Conference on Technology and Advancement in Computing Applications",
  shortName: "ICTACA-2025",
  date: "May 30-31, 2025",
  venue: "C Abdul Hakeem College of Engineering and Technology",
  location: "Melvisharam, Ranipet",
  description:
    "Join us for the 5th International Conference on Technology and Advancement in Computing Applications (ICTACA-2025), a premier forum for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns in the field of computing and technology.",
  email: "ictaca@cahcet.edu.in",
  phone: "+91 97901 47886",
  website: "https://ictaca.cahcet.in",
  registrationLink: "https://forms.gle/M9shESg3mj4TUC7GA",
  heroBackground: "/cover-img.jpg",
  // guidelinesPdf: "/placeholder-guidelines.pdf",
  locationLink: "https://maps.app.goo.gl/ahRqG7pftu2oLDc49" ,
  collegeLogo: "/college-logo-ictata.png"
}

export const announcements = [
  "Registrations for ICTACA-2025 are now open!",
  "Submit your research papers for presentation at the conference",
  "Join us for the 5th International Conference on Technology and Advancement in Computing Applications",
  "Last date for paper submission is April 21, 2025",
]

export const importantDates = [
  // { id: 1, event: "Abstract submission", date: "March 20, 2025" },
  // { id: 2, event: "Full Paper Submission", date: "March 27, 2025" },
  { id: 5, event: "Last Date of Registration", date: "April 21, 2025" },
  { id: 3, event: "Notification of Acceptance", date: "May 5, 2025" },
  { id: 4, event: "Camera Ready Paper Submission", date: "May 15, 2025" },
  { id: 6, event: "Conference Dates", date: "May 30-31, 2025" },
]

export const aboutInstitution = {
  name: "C Abdul Hakeem College of Engineering and Technology",
  shortName: "CAHCET",
  description:
    "C Abdul Hakeem College of Engineering and Technology (CAHCET) was established in the year 1986 by Melvisharam Muslim Educational Society (MMES). The college is approved by AICTE, New Delhi and affiliated to Anna University, Chennai. The college offers undergraduate and postgraduate programs in various disciplines of engineering and technology. The institution has state-of-the-art infrastructure and well-qualified faculty members dedicated to providing quality education.",
  image: "/cahcet-front.webp",
}

export const callForPapers = [
  { id: 1, domain: "Artificial Intelligence and Machine Learning" },
  { id: 2, domain: "Big Data Analytics and Data Science" },
  { id: 3, domain: "Cloud Computing and Distributed Systems" },
  { id: 4, domain: "Cyber Security and Privacy" },
  { id: 5, domain: "Internet of Things (IoT) and Smart Systems" },
  { id: 6, domain: "Computer Vision and Image Processing" },
  { id: 7, domain: "Natural Language Processing" },
  { id: 8, domain: "Blockchain Technology and Applications" },
  { id: 9, domain: "Mobile Computing and Wireless Networks" },
  { id: 10, domain: "Software Engineering and DevOps" },
  { id: 11, domain: "Human-Computer Interaction" },
  { id: 12, domain: "Quantum Computing" },
]

export const registrationFees = [
  { id: 1, category: "Students/ Research Scholars", fee: "₹1,500" },
  { id: 2, category: "Industry Delegates", fee: "₹2,000" },
  { id: 3, category: "Foreign Delegates", fee: "$120 (USD)" }
]

export const committeeMembers = {
  honoraryPatron: [
    {
      id: 1,
      name: "Dr. S. Ziauddin Ahmed",
      position: "Chairman",
      image: "/faculties/chairman.webp",
    },
  ],
  chiefPatron: [
    {
      id: 1,
      name: "Mr. V. Mohamed Rizwanullah",
      position: "Correspondent",
      image: "/faculties/correspondent.jpg",
    },
  ],
  patron: [
    {
      id: 1,
      name: "Dr. M. Sasikumar",
      position: "Principal",
      image: "/faculties/principal.webp",
    },
    {
      id: 2,
      name: "Dr. Muzaffer Hussain",
      position: "Vice Principal",
      image: "/faculties/vp-cahcet.webp",
    },
  ],
  convener: [
    {
      id: 1,
      name: "Dr. K. Abrar Ahmed",
      position: "HOD/CSE",
      image: "/faculties/hod_cse.jpg",
    },
    {
      id: 2,
      name: "Dr. S. Umamaheswari",
      position: "HOD/IT",
      image: "/faculties/hod-it.webp",
    },
    {
      id: 3,
      name: "Mr. T.S. Karthick",
      position: "HOD/AI&DS",
      image: "/faculties/hod-ai.png",
    },
    {
      id: 4,
      name: "Dr. M. Sadique Basha",
      position: "HOD/MCA",
      image: "/faculties/hod-mca.webp",
    },
  ],
  coConvener: [
    {
      id: 1,
      name: "Dr. R. Z. Inamul Hussain",
      position: "Assoc.Prof./CSE",
      image: "/faculties/inamul-cse.webp",
    },
  ],
  coordinator: [
    {
      id: 1,
      name: "Mr. B. Palanisamy",
      position: "AP/CSE",
      image: "/faculties/palanisamy-cse.webp",
    },
    {
      id: 2,
      name: "Mr. M. Mohamed Rafee",
      position: "AP/IT",
      image: "/faculties/rafee-it.webp",
    },
    {
      id: 3,
      name: "Mrs. C. Olga Rajee",
      position: "AP/AI&DS",
      image: "/faculties/olga-aids.webp",
    },
    {
      id: 4,
      name: "Mrs. V.I. SumaiyaBanu",
      position: "AP/MCA",
      image: "/faculties/sumaya-mca.webp",
    },
  ],
  internationalAdvisory: [
    { id: 1, name: "Dr. Muhammad Rukunuddin Ghalib", affiliation: "De Montfort Univ, Dubai" },
    { id: 2, name: "Dr. Md. Imran Basheer", affiliation: "University Dammam, Saudi Arabia" },
    { id: 3, name: "Dr. C. Mohamed Hashim", affiliation: "Chalmers University, Sweden" },
    { id: 4, name: "Dr. Subramaniam Ganesan", affiliation: "Oakland University, USA" },
    { id: 5, name: "Dr. Saaidal Razalli Bin Azzuhri", affiliation: "University of Malaya, Malaysia" },
    { id: 6, name: "Dr. Xiao-Zhi Gao", affiliation: "University of Eastern Finland, Finland" },
    { id: 7, name: "Dr. Muhammad H Rashid", affiliation: "University of West Florida, Florida" },
  ],
  nationalAdvisory: [
    { id: 1, name: "Dr. A. Rajesh", affiliation: "Jain Deemed University, Bangalore" },
    { id: 2, name: "Dr. R Manivannan", affiliation: "Stanley College of Engg.& Tech., HYD" },
    { id: 3, name: "Dr. G. Suresh", affiliation: "Sri Indu College of Engg. & Tech., HYD" },
    { id: 4, name: "Dr. M. Md. Mustafa", affiliation: "Sri Krishna College of Engg. & Tech., Coimbatore" },
    { id: 5, name: "Dr. R. Sugumar", affiliation: "Sri Indu College of Engg. & Tech. HYD" },
    { id: 6, name: "Dr. Kotteeswaran", affiliation: "Vel Tech University, Chennai" },
    { id: 7, name: "Dr. P. Epsiba", affiliation: "Sri Indu College of Engg. & Tech., HYD" },
    { id: 8, name: "Dr. K.O.Md. Arif", affiliation: "Presidency University, Bangalore" },
    { id: 9, name: "Dr. K. Lokeshwaran", affiliation: "Madanapalle Institute of Tech. Madanapalle" },
    { id: 10, name: "Dr. Pritee Khanna", affiliation: "Indian Institute of Info., Tech., Madhya Pradesh" },
  ],
  organizingChairs: [
    {
      id: 1,
      name: "Dr. K. Abrar Ahmed",
      position: "HOD/CSE",
      image: "/faculties/hod_cse.jpg",
    },
    {
      id: 2,
      name: "Dr. S. Umamaheswari",
      position: "HOD/IT",
      image: "/faculties/hod-it.webp",
    },
    {
      id: 3,
      name: "Mr. T.S. Karthick",
      position: "HOD/AI&DS",
      image: "/faculties/hod-ai.png",
    },
    {
      id: 4,
      name: "Dr. M. Sadique Basha",
      position: "HOD/MCA",
      image: "/faculties/hod-mca.webp",
    },
  ],
  technicalProgramCoordinators: [
    { id: 1, name: "Dr. Muzaffer Hussain", position: "Professor/AI&DS" },
    { id: 2, name: "Mr. K. Md. Abdul Kader", position: "Assoc. Professor" },
    { id: 3, name: "Mrs. M. Dhanalakshmi", position: "AP/IT" },
    { id: 5, name: "Mrs. S. Saranya", position: "AP/IT" },
    { id: 6, name: "Mrs. P. Saranyadevi", position: "AP/IT" },
    { id: 7, name: "Mrs. P. Sandhiya", position: "AP/IT" },
    { id: 9, name: "Mr. T. Balaji", position: "AP/CSE" },
    { id: 10, name: "Mr. M. Abdul Naseer", position: "AP/CSE" },
    { id: 11, name: "Mr. K.A. Suhail Ahmed", position: "AP/CSE" },
    { id: 12, name: "Mr. M. Askar Basha", position: "AP/CSE" },
    { id: 13, name: "Mrs. P. Revathi", position: "AP/CSE" },
    { id: 14, name: "Mr. B. Palanisamy", position: "AP/CSE" },
    { id: 15, name: "Mrs. S. Saranya", position: "AP/CSE" },
    { id: 16, name: "Ms. A. Kalaiselvi", position: "AP/CSE" },
    { id: 17, name: "Mrs. G. Sundari", position: "AP/CSE" },
    { id: 18, name: "Mrs. V. Indulakshmi", position: "AP/CSE" },
    { id: 19, name: "Mrs. R. Vanmathi", position: "AP/CSE" },
    { id: 20, name: "Ms. T.M. Roshan Banu", position: "AP/CSE" },
    { id: 21, name: "Mrs. Samundi", position: "AP/CSE" },
    { id: 22, name: "Mrs. V.I. SumaiyaBanu", position: "AP/MCA" },
    { id: 23, name: "Mrs. R. Kavitha", position: "AP/MCA" },
  ],
}

export const departmentContacts = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    contacts: [
      {
        name: "Dr R.Z.INAMUL HUSSAIN",
        role: "Assistant Professor",
        phone: "+91 97901 47886 ",
        email: " inamulhasan.rz@cahcet.edu.in"
      },
    ]
  },
  {
    id: "it",
    name: "Information Technology",
    contacts: [
      {
        name: "Mr. M. Mohamed Rafee",
        role: "Assistant Professor",
        phone: "+91 97901 47886",
        email: "mdrafee@gmail.com"
      },
    ]
  },
  {
    id: "ai-ds",
    name: "AI & Data Science",
    contacts: [
      {
        name: "Mrs. Olga Rajee",
        role: "Assistant Professor",
        phone: "+91 9952380056",
        email: "olgarajee.aids@cahcet.edu.in"
      },
    ]
  },
  {
    id: "mca",
    name: "Master of Computer Applications",
    contacts: [
      {
        name: "Ms. V.I. Sumaiya Banu",
        role: "Assistant Professor",
        phone: "+91 8870061804",
        email: "sumaiya.mca@cahcet.edu.in"
      },
    ]
  }
]

export const submissionGuidelines = [
  {
    id: 1,
    guideline: "All papers must be original and not simultaneously submitted to another journal or conference.",
  },
  { id: 2, guideline: "Papers should be formatted according to the IEEE conference template." },
  { id: 3, guideline: "The length of the paper should not exceed 6 pages including figures and references." },
  { id: 4, guideline: "All papers will be peer-reviewed by at least two independent reviewers." },
  { id: 5, guideline: "At least one author of each accepted paper must register for the conference." },
  { id: 6, guideline: "Plagiarism check will be conducted for all submissions." },
  { id: 7, guideline: "Selected papers will be recommended for publication in Scopus indexed journals." },
]

export const venueInfo = {
  name: "C Abdul Hakeem College of Engineering and Technology",
  address: "Melvisharam, Ranipet District, Tamil Nadu - 632509, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.003760157616!2d79.2958108!3d12.907479499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad35d34059d16f%3A0xb443fab6e00b313f!2sC.%20Abdul%20Hakeem%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1741492538327!5m2!1sen!2sin",
  transportation: [
    {
      id: 1,
      mode: "By Air",
      description:
        "The nearest international airport is Chennai International Airport, approximately 100 km from the venue. Taxis and buses are available from the airport to Melvisharam.",
    },
    {
      id: 2,
      mode: "By Train",
      description:
        "Walaja Road Railway Station is the nearest railway station, about 5 km from the venue. Auto-rickshaws and taxis are available from the station.",
    },
    {
      id: 3,
      mode: "By Bus",
      description:
        "Melvisharam is well connected by road. State transport and private buses operate regularly from Chennai, Vellore, and other major cities to Melvisharam.",
    },
    {
      id: 4,
      mode: "By Car",
      description:
        "The venue is located on the Chennai-Bangalore highway (NH 4), making it easily accessible by car from major cities.",
    },
  ],
}

export const partners = [
  { id: 1, name: "CSI", logo: "/logo-csi.jpg" },
  { id: 2, name: "IIC", logo: "/iic_logo.png" },
]


export const quickLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Call for Papers", href: "#call-for-papers" },
  { id: 4, name: "Important Dates", href: "#important-dates" },
  { id: 5, name: "Registration", href: "/register" },
  { id: 6, name: "Committee", href: "#committee" },
  { id: 7, name: "Venue", href: "#venue" },
  { id: 8, name: "Partners", href: "#partners" },
  { id: 9, name: "Gallery", href: "#gallery" },
  { id: 9, name: "Contact", href: "#contact" },
]

export const contactInfo = {
  address:
    "C Abdul Hakeem College of Engineering and Technology, Melvisharam, Ranipet District, Tamil Nadu - 632509, India",
  email: "ictaca@cahcet.edu.in",
  phone: "+91 97901 47886",
  website: "https://ictaca.cahcet.in",
}

export const galleryImages = [
  {
    id: 1,
    title: "Inaguration - ICTACA 2024",
    caption: "Inaugural ceremony of ICTACA-2024",
    src: "/gallery/img_1.jpg",
    alt: "Inaugural ceremony of ICTACA-2024"
  },
  {
    id: 2,
    title: "Crowd at Conference",
    caption: "Audience at the conference hall",
    src: "/gallery/img_2.jpg",
    alt: "Audience at the conference hall - icata24"
  },
  {
    id: 3,
    title: "ICTACA 2019",
    caption: "Exchange of Event Momentos of ICTATA 2019",
    src: "/gallery/img_3.jpg",
    alt: "Exchange of Event Momentos of ICTATA 2019"
  },
]

export const stats = [
  {
    id: 1,
    value: "300+",
    label: "Attendees",
    icon: Users,
  },
  {
    id: 2,
    value: "2",
    label: "Days",
    icon: CalendarDays,
  },
  {
    id: 3,
    value: "5+",
    label: "Talks",
    icon: Presentation,
  },
  {
    id: 4,
    value: "10+",
    label: "Projects",
    icon: BookOpen,
  },
]

export const SocialLinks = {
  linkedin: "https://www.linkedin.com/school/cahcet-in/",
  instagram: "https://www.instagram.com/cahcet_media_official/",
}

