import type { KnowledgeNode } from "../types/knowledge";

function question(id: string, title: string, answers: string[]): KnowledgeNode {
  return {
    id: `behavior-${id}`,
    title,
    description: "Open the card to explore the answer below.",
    children: answers.map((answer, index) => ({
      id: `behavior-${id}-answer-${index + 1}`,
      title: `Answer ${String(index + 1).padStart(2, "0")}`,
      description: answer,
    })),
  };
}

export const behaviorQuestions: KnowledgeNode = {
  id: "behavior",
  title: "Behavior Questions",
  subtitle: "Interview answers and conversation prompts",
  icon: "book",
  description: "Practice answers to teamwork and workplace questions, plus prompts for interviews and everyday conversations.",
  children: [
    question("teamwork-story", "What happen during your teamwork?", [
      "I remember that there was a project about collecting data and analyzing it based on cloud technology deployment and coordination between frontend and backend system. At the beginning of that project, I wasn’t very familiar with some of the technologies we were using, like cloud platforms, Fission for serverless function and Redis used for data buffering. And my teammates are stuck in that as well.",
      "So I spent about six hours over two days completing self-paced learning modules like there are some available lessons with cartoon character provided on AWS that help you get up to speed. After that, I was able to complete my assigned tasks successfully, and I received positive feedback from my teammates cause I was able to help them. I think this experience shows that I can learn independently and take initiative when I’m faced with something unfamiliar.",
    ]),
    question("teamwork-success", "What do you think help teamwork success?", [
      "I think teamwork is all about collaboration. Collaborated with team members during busy trade periods by dividing tasks, communicating clearly on the floor and that was why I’m looking for an in-person internship cause I reckon talking to people face-to-face is both efficient and enjoyable. Back to the topic, collaboration also includes stepping into support colleagues when customer traffic increased.",
    ]),
    question("uncooperative-teammate", "What if someone in your team refuse to cooperate?", [
      "If someone on my team refused to cooperate, I think communication and collaboration would be the key to resolving the situation.",
      "If I were the team leader I would keep in touch with my teammate to keep info updated and find out issue at the early stage. If I noticed that someone was not sharing their opinions in meetings, or repeatedly missing meetings without letting the team know in advance, I would first contact them directly. I might also invite them for a coffee chat so I could better understand what was happening and whether they needed any support.",
      "If they were going through some difficulties, I would be willing to help them, as long as I could still complete my own assigned work. If the issue was something relatively minor, such as being shy, feeling uncomfortable speaking in meetings, or having different opinions from the rest of the team, I would discuss it with them and, when appropriate, involve the other team members so that we could find a solution together.",
      "However, if I had already tried communicating with them and they still refused to cooperate, or they agreed to contribute but did not take any action, I would then assess how urgent the remaining work was and prepare a backup plan.",
      "For example, we might need to reallocate some tasks among the other team members to make sure the project could still be completed on time. I would discuss any changes with the team first to make sure everyone understood the situation and to see whether they had a better alternative.",
      "If the issue still could not be resolved within the team, I would seek support from someone with more authority, such as a lecturer or tutor in a university project, or a manager in the workplace.",
      "Overall, I would try to understand the person and solve the problem through communication first, while also making sure that the team's progress and deadlines were not affected. The main goal is always to achieve the delivery.",
    ]),
    question("mentor-left", "What would you do if your mentor left?", [
      "(Ask twice to make sure that what aspect does the interviewer want to hear answer from -- the relationship with mentor or the solution in company of residual time.)",
      "During an internship, if my mentor told me they were leaving the team while I was still working on an assigned project, I would want to make sure the transition did not interrupt my progress.",
      "So I think my responsibility would be to understand what work I could continue independently and identify anything that still require guidance.",
      "As I said, effective communication is the key to successful teamwork and organizational success. I would keep in touch with my mentor to make sure I stay updated on any important information or changes. Before my mentor left, I would arrange a handover meeting and prepare a list of my current tasks, completed work, blockers, and questions.",
      "I would also ask them to point me to relevant documentation and introduce me to another team member who could support me when necessary. After that, I would keep my work documented so the new mentor or supervisor could quickly understand my progress.",
      "This would help me maintain continuity instead of stopping work just because one person had left. It would also make the transition easier for both me and the team.",
    ]),
    question("ai-tools", "How do you use AI tools?", [
      "In my daily work, I use AI as a powerful productivity tool, but not a replacement for my own judgment. For example, when I have a new project with a lot of technical details, my goal is to understand it quickly and produce a solid first version.",
      "I'll use AI to organize my notes, brainstorm ideas, or draft an outline. And if it's a coding task, I might ask AI to explain unfamiliar code or suggest where an error might be. But then I carefully review everything, test it myself, check it against reliable sources, and then refine it.",
      "The result is that I get to work more efficiently, explore more ideas, but I still own the final decision and quality. In all, AI is a collaboration tool for me, and that's it.",
    ]),
    question("frontend familiarity", "How familiar are you with frontend development?", [
      "Over these two years I spent most of time on backend development and distributed system, as well as some systems that support academic researches, so I would say I'm still building my frontend skills.",
      "But I do have some hands-on experience with React and TypeScript through a personal project where I built an interactive knowledge map. Through the project, I've started learning about components of DOM, state management, and how user interactions update the interface. I aslo use AI tools to support my development, and I will always make an effort to understand why the code looks like in that way.",
      "Besides, I've worked with many programming languages from many domains, such as foundation programing C/C++, modern language python/Java, Matlab that used for matirx computing and signal processing, declaritive language like Prolog/Haskell, SQL language. This experience has helped me become comfortable picking up new languages and adapting to different technologies.",
      "So although frontend development is relatively new to me, I'm confident in my ability to learn and get up to speed quickly, and to contribute to real work in your team."]),
    question("recruiter-questions", "Five questions for asking recruiter at the end of interview.", [
      "(1)How large is the team, and how are responsibilities divided among team members? How does the team usually collaborate?",
      "(2)What are the key priorities or success metrics for the team? For example, is the main focus on delivering products on time, maintaining high quality, or staying closely engaged with customers to improve retention?",
      "(3)If we look at the most successful people on your team, what are the most important common traits or habits among them that make them so exceptional, compared to someone who just does what is required of them. (Resilient or flexible)",
      "(4)In the short term, what are the main problems or priorities you’d like an intern in this role to help with? And when it comes to long term, how do you see this role evolving into a full-time position, and what impact would you hope that person could have on the team.",
      "(5)How does the team usually support interns or junior team members in learning and improving? For example, how is feedback typically given, and how often would I have opportunities to learn from more experienced team members?",
      "(6)From your perspective, is there anything in my experience, resume, or the impression I gave you today that I could strengthen to become a better candidate for this type of role?",
    ]),
    question("daily-questions", "Five questions for daily communication.", [
      "(1)What do you like to do in your free time? Or if you have more time, what would you want to do? (To ask about hobby)",
      "(2)How long have you been working here? (To redirect topic to career path)",
      "(3)What’s your favorite part about working at your company?",
      "(4)What’s something you wish you had known earlier?",
      "(5)How many countries have you been to?",
      "(6)How was your weekend?",
    ]),
  ],
};
