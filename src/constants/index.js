import project1 from "../assets/projects/project-1.jpg";

export const HERO_CONTENT = `I’m a passionate Data Scientist with a strong foundation in Python, machine learning, deep learning, and natural language processing (NLP). With hands-on experience in building and deploying data-driven applications using Streamlit, React, and Flask, I specialize in transforming complex data into actionable insights and scalable solutions. Whether it’s developing intelligent models, creating interactive dashboards, or fine-tuning workflows, I thrive on solving challenges with the right mix of technology and innovation. Skilled with tools like VSCode, Jupyter Notebook, and more, I’m constantly pushing the boundaries of AI and analytics.`;

export const ABOUT_TEXT = `I’m a final-year B.Tech student specializing in Artificial Intelligence and Data Science. My journey in tech has been driven by a deep passion for solving complex problems using AI and data analytics. With hands-on experience in machine learning, deep learning, and NLP, I focus on building impactful models and applications that turn data into meaningful insights. I enjoy working with tools like Python, Streamlit, and Flask to create powerful data solutions, and I’m always eager to learn and apply new techniques as I move forward in my career.`;

export const EDUCATIONS = [
  {
    Year: "2021 - Present",
    Intitute: "Modern Institute of Technology and Research Centre Alwar",
    Course: "Artificial Intelligence and Data Science",
    university: "Bikaner Technical University",
    Score: "8 SGPA",
  },
  {
    Year: "2020 - 2021",
    Intitute: "Gyandeep Sr. Sec. School",
    Course: "12th Grade (Senior Secondary)",
    university: "Rajasthan Board of Technical Education",
    Score: "95.20%",
  },
  {
    Year: "2018 - 2019",
    Intitute: "New Maharshi M V Sec. Sch. 3/50 NEB Extension, Alwar",
    Course: "10th Grade (Senior Secondary)",
    university: "Rajasthan Board of Technical Education",
    Score: "80.83%",
  },

]

export const EXPERIENCES = [
  {
    year: "SEP, 2024 - PRESENT",
    role: "Neural Network Engineer Trainee",
    company: "Radical Innovations Group - RIG",
    description: `At RIG, I worked on various computer vision and NLP projects. My
contributions included developing and fine-tuning models for object
detection and text processing tasks. I utilized tools like YOLO and
Transformers to build robust solutions for real-world applications,
enhancing my skills in deep learning and AI development.`,
    technologies: ["python","Deep learning","NLP", "Computer Vision" ,"Javascript", "React.js",],
  },
  {
    year: "june, 2024 - july 2024 ",
    role: "Deep Learning & NLP Summer Training",
    company: "skills ocean",
    description: `Completed industrial training focused on deep learning and NLP. Gained
hands-on experience in building and fine-tuning models using state-of-theart frameworks such as TensorFlow and Hugging Face. Worked on
projects involving NLP tasks and computer vision, applying advanced AI
techniques to solve real-world problems.`,
    technologies: ["Deep learning","NLP", "Computer Vision" , 'PowerBI', 'Tablue'],
  }
];

export const PROJECTS = [
  {
    title: "Phonepe Transaction Analysis",
    image: project1,
    description:
      "A Streamlit Web App which take phonepe transaction pdf and show insides from transactions. it include Data Preprocessing, Data Visulisation.",
    duration: 'jul-aug 2024',
    technologies: ["python", "Streamlit","Matplotlib"],
    deploy: "https://upi-analysis.streamlit.app/",
    github: "https://github.com/Apurvanaruka/UPI-analysis/"
  },
  {
    title: "Amazon Clone",
    image: "https://play-lh.googleusercontent.com/G7jAks-PRl4d7IkL-s3Ir44nGyPq0Yh872N5UMwZYIJz4wG1Oj0DqoQjsAR5ddKZbQ",
    description:
      "Amazon clone is a website which is clone of amazon.com. is use only HTML and CSS to create Amazon website fronted part",
    duration: 'jun-aug 2023',
    technologies: ["python", "Streamlit"],
    deploy: "https://apurvanaruka.github.io/amazon-clone/",
    github: "https://github.com/Apurvanaruka/amazon-clone"
  }
];

export const CONTACT = {
  address: "Alwar, Rajasthan, India , 301001",
  phoneNo: "+91 9602119226",
  email: "apurvanaruka1@gmail.com",
};
export const LINKS = {
  linkedin: "https://linkedin.com/in/apurva-naruka/",
  github: "https://github.com/apurvanaruka/",
  X: "https://x.com/apurva_naruka/"
}