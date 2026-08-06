/* ============================================
   Personal Data — About Page & Hero
   替换为你的真实信息
   ============================================ */

export const personalInfo = {
  name: "SANJIN",
  title: "应届毕业生 · 数据分析与应用开发方向",
  tagline: "以真实项目记录数据分析、Web 应用与 AI 辅助开发实践。",
  github: "https://github.com/cuber-sanjin",
  resumeFile: "/SANJIN-Resume.docx",
};

export const jobPreference = {
  targetRoles: ["数据分析", "AI 应用开发", "Java Web 开发"],
  targetCities: ["面议"],
  availability: "2026 届应届毕业生",
  workMode: ["全职", "实习"],
};

export interface Skill {
  name: string;
  level: number; // 1-5, 用于显示熟练度条
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "语言",
    skills: [
      { name: "Python", level: 3 },
      { name: "Java", level: 2 },
      { name: "HTML / CSS / JavaScript", level: 3 },
      { name: "SQL", level: 3 },
    ],
  },
  {
    category: "框架 & 库",
    skills: [
      { name: "Flask / Servlet", level: 2 },
      { name: "React / Next.js", level: 2 },
      { name: "Pandas / jieba / ECharts", level: 3 },
    ],
  },
  {
    category: "工具 & 平台",
    skills: [
      { name: "Git / GitHub", level: 3 },
      { name: "MySQL", level: 2 },
      { name: "AI 辅助开发", level: 3 },
    ],
  },
];

export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const experiences: Experience[] = [];

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description?: string;
}

export const education: Education[] = [];
