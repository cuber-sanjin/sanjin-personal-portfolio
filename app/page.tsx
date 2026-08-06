import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { ModuleEntries } from "@/components/home/ModuleEntries";
import { ProjectCard } from "@/components/project/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getAllProjects } from "@/lib/content";
import { personalInfo, jobPreference } from "@/data/about";

const CAPABILITIES = [
  {
    title: "Web 应用实践",
    desc: "使用 HTML、CSS、JavaScript、React/Next.js 与 Java Web 完成作品集、图书借阅管理、PWA 等课程与个人项目，并持续完善工程基础。",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    title: "AI 应用实践",
    desc: "在痛风小程序中尝试将图片识别能力接入具体使用场景，并持续学习接口调用、结果处理与功能验证。",
    icon: (
      <>
        <rect x="4" y="7" width="16" height="12" rx="3" />
        <path d="M12 3v4M9 13h.01M15 13h.01M9.5 16.5h5" />
      </>
    ),
  },
  {
    title: "数据处理与可视化",
    desc: "使用 Python、Pandas、jieba、LDA、ECharts 完成微博文本分析和课程数据看板，关注数据清洗、特征处理与可视化表达。",
    icon: (
      <>
        <path d="M3 3v18h18M8 17v-5M13 17V8M18 17v-9" />
      </>
    ),
  },
  {
    title: "工程协作与学习",
    desc: "使用 Git/GitHub 管理代码，配合 PyCharm、VS Code、Android Studio 等工具进行运行验证、问题定位与项目文档整理。",
    icon: (
      <>
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.5.4.9 1 .9 1.6V16h5v-.5c0-.6.4-1.2.9-1.6A6 6 0 0012 3z" />
      </>
    ),
  },
];

function CapIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function HomePage() {
  const projects = getAllProjects();
  const featured = projects[0];
  const rest = projects.slice(1, 3);

  return (
    <>
      <HomeHero />

      {/* ── 模块跳转入口：博客 / 项目 / 魔方 ── */}
      <ModuleEntries />

      {/* ── 精选项目 ── */}
      <section style={{ padding: "var(--space-20) 0" }} aria-label="精选项目">
        <div className="container">
          <div className="section-bar reveal">
            <SectionHeading subtitle="每个项目都标注了我的真实角色、技术难点与可验证链接。">
              精选项目
            </SectionHeading>
            <Link href="/projects" className="section-more">
              查看全部
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="projects-grid">
            {featured && (
              <div className="reveal" style={rest.length > 0 ? { gridColumn: "1 / -1" } : undefined}>
                <ProjectCard slug={featured.slug} frontmatter={featured.frontmatter} featured />
              </div>
            )}
            {rest.map((project) => (
              <div className="reveal" key={project.slug}>
                <ProjectCard slug={project.slug} frontmatter={project.frontmatter} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 能力概览 ── */}
      <section className="band-tint" style={{ padding: "var(--space-20) 0" }} aria-label="能力概览">
        <div className="container">
          <div className="reveal">
            <SectionHeading
              align="center"
              subtitle="以课程设计与个人项目为载体，持续积累数据处理、应用开发和工程协作经验。"
            >
              我能做什么
            </SectionHeading>
          </div>

          <div className="cap-grid">
            {CAPABILITIES.map((c) => (
              <article key={c.title} className="cap-card reveal">
                <span className="cap-icon">
                  <CapIcon>{c.icon}</CapIcon>
                </span>
                <h3 className="cap-title">{c.title}</h3>
                <p className="cap-desc">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 结尾 CTA ── */}
      <section className="cta-band" aria-label="求职意向">
        <div className="container cta-inner reveal">
          <div>
            <p className="cta-eyebrow">{jobPreference.availability}</p>
            <h2 className="cta-title">应届求职中 · 期待加入你的团队</h2>
            <p className="cta-desc">
              求职方向：{jobPreference.targetRoles.join(" / ")} ·
              期望城市：{jobPreference.targetCities.join(" / ")}
            </p>
          </div>
          <div className="cta-actions">
            <Button href={personalInfo.resumeFile} download>
              下载简历
            </Button>
            <Button href={personalInfo.github} variant="ghost" className="btn-on-dark" external>
              GitHub
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
