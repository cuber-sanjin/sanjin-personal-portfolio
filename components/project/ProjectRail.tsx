import Link from "next/link";
import { getAllProjects } from "@/lib/content";

/**
 * ProjectRail — 项目详情页左侧侧边栏
 * 顶部「返回项目全览」按钮 + 其他项目图标列表（仅图标，悬停显示名称 tooltip），
 * 当前项目高亮。移动端自动折叠为横向滚动条（隐藏 tooltip）。
 */

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function ProjectRail({ currentSlug }: { currentSlug: string }) {
  const others = getAllProjects().filter((p) => p.slug !== currentSlug);
  const current = getAllProjects().find((p) => p.slug === currentSlug);

  return (
    <aside className="project-rail" aria-label="其他项目">
      <Link href="/projects" className="rail-back">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        返回项目全览
      </Link>

      <h4 className="rail-title">其他项目</h4>

      {others.length === 0 ? (
        <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", margin: 0 }}>
          暂无其他项目
        </p>
      ) : (
        <nav className="rail-list" aria-label="跳转到其他项目">
          {others.map((p) => {
            const coverUrl = p.frontmatter.cover
              ? `${p.frontmatter.cover.startsWith("/") ? BASE : ""}${p.frontmatter.cover}`
              : undefined;
            return (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="rail-item"
                data-tooltip={p.frontmatter.title}
                aria-label={p.frontmatter.title}
              >
                <span
                  className="rail-thumb"
                  style={coverUrl ? { backgroundImage: `url(${coverUrl})` } : undefined}
                  aria-hidden="true"
                >
                  {!coverUrl && <span>📁</span>}
                </span>
              </Link>
            );
          })}
        </nav>
      )}

      <span className="rail-now" style={{ paddingInline: "var(--space-2)", fontSize: "var(--text-xs)" }}>
        当前：{current?.frontmatter.title ?? currentSlug}
      </span>
    </aside>
  );
}
