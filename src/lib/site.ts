export const languages = ['zh', 'en'] as const;
export type Language = typeof languages[number];
export const sections = ['articles', 'projects', 'resources', 'about'] as const;
export const home = (lang: Language) => lang === 'zh' ? '/' : '/en/';
export const path = (lang: Language, section: string) => `/${lang}/${section}/`;
export const articlePath = (article: { id: string; data: { lang: Language } }) =>
  `/${article.data.lang}/articles/${article.id}/`;
export const dateLabel = (date: Date, lang: Language) => new Intl.DateTimeFormat(
  lang === 'zh' ? 'zh-CN' : 'en-GB', { dateStyle: 'long', timeZone: 'UTC' }
).format(date);
export const copy = {
  zh: {
    description: 'Jinlong Guo 的研究文章、交互项目与开放研究资料。',
    home: 'Home', articles: 'Articles', projects: 'Projects', resources: 'Resources', about: 'About',
    articleHeading: '文章', projectHeading: '项目', resourceHeading: '研究资料', aboutHeading: '关于',
    empty: '尚无已发布文章。', latest: '最新文章', all: '查看全部文章',
    intro: '研究文章、交互项目与开放研究资料。',
    project: 'The Metascience of Agentic Science',
    projectDescription: '一份人主导、AI 辅助的交互式研究地图。浏览、检索并追溯 Agentic Science 元科学研究的公开资源。',
    explore: '打开 Research Atlas', download: '下载研究数据',
    dataset: '完整 JSON 数据', csv: '表格 CSV', source: 'Atlas 源码包',
    version: 'v0.1.0 · 资料截至 2026 年 11 月 24 日',
    scope: '108 条独立资源 · 6 个栏目 · 搜索、筛选、时间线与数据导出',
    aboutText: '这里是 Jinlong Guo 的个人研究网站，以 Knowledge Reconstruction（知识重构者）为名发布文章、项目与研究资料。',
    back: '返回文章列表', github: 'GitHub 源码', author: '作者',
  },
  en: {
    description: 'Research writing, interactive projects, and open research materials by Jinlong Guo.',
    home: 'Home', articles: 'Articles', projects: 'Projects', resources: 'Resources', about: 'About',
    articleHeading: 'Articles', projectHeading: 'Projects', resourceHeading: 'Resources', aboutHeading: 'About',
    empty: 'No published articles yet.', latest: 'Latest articles', all: 'All articles',
    intro: 'Research writing, interactive projects, and open research materials.',
    project: 'The Metascience of Agentic Science',
    projectDescription: 'A human-led, AI-assisted interactive research atlas. Explore public resources on the metascience of agentic science and trace their sources.',
    explore: 'Explore the Research Atlas', download: 'Download research data',
    dataset: 'Complete JSON dataset', csv: 'CSV spreadsheet', source: 'Atlas source archive',
    version: 'v0.1.0 · As of 24 November 2026',
    scope: '108 resources · 6 collections · Search, filters, timeline, and data export',
    aboutText: 'This is the personal research website of Jinlong Guo, publishing articles, projects, and research materials under the name Knowledge Reconstruction（知识重构者）.',
    back: 'Back to articles', github: 'Source on GitHub', author: 'Author',
  },
};
