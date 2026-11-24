# The Metascience of Agentic Science

知识重构者（Knowledge Reconstruction）策展的静态研究地图。资料截至 2026-11-24，数据版本 0.1.0。

## 预览与托管

解压预览包后，在浏览器中打开单文件 HTML 即可使用完整的搜索、筛选、导出与时间线。正式网站源文件位于 dist/。此目录可直接交给支持静态文件的 HTTPS 主机，首页为 index.html。无需数据库、账户、API 密钥或构建步骤。

## 更新记录

编辑 dist/data/atlas.json 的 records 数组。复制一个同类条目，指定唯一、稳定的 id，并核查其公开来源。保留 title 和 originalTitle 以记录订正。summary 是中文简介。date、end 接受 YYYY、YYYY-MM 或 YYYY-MM-DD，日期缺失用 null。各次独立活动可使用 occurrences。years 是有效年份索引，跨年计划列出涵盖的年份。countries、communities、themes 和 categories 为多值数组。categories 使用同一 JSON 文件中 categories 数组的零基索引。

organizer、type、status、verification、evidence 和 sources 分别保存责任方、资源类型、活动状态、核查程度、核查说明和来源列表。网址应使用公开 HTTPS 链接。related 可列相关记录的 ID。原始材料的位置和措辞保存在 sourceRows、sourceDate、sourceContext 和 originalSummary。保留原始证据，缺失字段不补猜。

更新 asOf、version，复核状态与日期。首页统计和所有检索视图直接读取新数据。sourceRowCount 记录初始材料行数。新来源材料和归并规则发生变化时，同步维护“关于与方法”的相应文字。

将更新后的 dist/ 整体作为下一版本部署。包中的单文件预览代表当前快照，在线站点使用独立 JSON。生成新的离线版本可在项目根目录执行 python3 make_preview.py。

## 数据口径

109 行源材料合并为 108 条独立资源，另保留 10 个补充链接。Paper2Agent 保留两个栏目。研究共同体和主题标签为可修订的人工策展分类。对于仅找到日程的过去活动，核查状态标为部分核实，举办情况待核。
