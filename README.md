# Knowledge Reconstruction（知识重构者）

Jinlong Guo 的个人研究网站。Astro 静态生成，GitHub Pages 托管，Pages CMS 编辑文章。无外部字体、分析脚本或前端 CDN 依赖。

## 访问与日常写作

- 网站：https://jinlongguo.github.io/
- Atlas：https://jinlongguo.github.io/atlas/
- 完整数据：https://jinlongguo.github.io/atlas/data/atlas.json
- CSV：https://jinlongguo.github.io/atlas/data/atlas.csv
- 编辑器：https://app.pagescms.org/jinlongguo/jinlongguo.github.io/main/collection/articles

在 Pages CMS 使用 GitHub 登录并选择本仓库的 `main` 分支。打开「文章 Articles」，点击新建文章，填写标题、日期、摘要、标签和语言。正文的可视化编辑器和 Source 模式可自由切换；链接工具或 Markdown 链接均可使用任意合法外部网址。图片可在正文工具栏上传，也可选取媒体库中的图片。附件在「附件 Downloads」上传后，以 `/files/文件名` 链接引用。

草稿开关默认开启。点击保存会保存到 GitHub，但不会发布到网站；关闭「草稿 Draft」后保存即发布，GitHub Actions 自动构建部署，通常需等待几分钟。修改已发布文章后再次保存即可更新；开启草稿并保存可撤下文章。

草稿仅从公开网站排除；本仓库公开，因此草稿和历史版本仍可被查看。不要保存私人资料或凭据。CMS 的提交身份使用 GitHub App，避免将私人邮箱写进提交；本机提交身份仅在本仓库设置为 Jinlong Guo / 9891509+jinlongguo@users.noreply.github.com。

中文、英文文章按语言分别展示。文章有对应译文时，为两个版本填写相同的 `translationKey`；没有译文时，语言按钮返回另一语言的文章目录。

## 内容结构

- `src/content/articles/*.md`：文章；YAML frontmatter 与 Markdown 正文。
- `public/uploads/`：公开图片。
- `public/files/`：公开附件。
- `public/atlas/`：原 Atlas 可维护源码与完整研究数据，原样保留 HTML、CSS、JavaScript、SVG、JSON。
- `public/atlas/data/atlas.csv`：从原 JSON 确定性转换的表格下载，不重生成研究数据。
- `public/downloads/metascience-atlas-source.zip`：独立 Atlas 源码包。
- `docs/atlas/README.md`：Atlas 原始维护与方法说明。
- `scripts/build-atlas-downloads.py`：按现有数据更新 CSV 和源码下载包。
- `.pages.yml`：Pages CMS 的文章、图片、附件编辑配置。
- `.github/workflows/deploy.yml`：每次推送 main 自动构建和部署。

## 本地维护

Node.js >=22.12；安装 `npm ci`，预览 `npm run dev`，构建及基础核验 `npm run build`。GitHub Actions 使用 Node.js 24。

Atlas 原始版本 v0.1.0，资料截至 2026-11-24，108 条独立资源和 10 个补充链接。修改 Atlas 后运行 `python3 scripts/build-atlas-downloads.py` 更新下载包，再构建。原 Netlify 部署不受此仓库影响，本次迁移不对其作任何修改。
