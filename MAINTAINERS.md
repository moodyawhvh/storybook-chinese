> 🌐 本文档由 [storybookjs/storybook](https://github.com/storybookjs/storybook) 翻译，英文原版见原项目。

本文档概述了维护者应遵循的部分流程。

# PR 流程

1. 使用正确的[标签](#labels)进行分类（triage）
2. 如果存在与之相关的变更，请确保在关闭前已发布并测试

# 必须 Core/DX 批准

非草稿 PR 在合并前，必须获得 Storybook **Core** 或 **Developer Experience** GitHub 团队中至少一名活跃成员的**批准评审（approving review）**。维护者（及其他团队）的评审不满足此门槛。自我批准不算数。即使其他 Core/DX 成员请求了修改，一份 Core/DX 批准即足够。推送新提交时，批准不会被标记为过期（stale）。

# 标签（Labels）

> 注：下表标签名保持英文原样，“用途”列已翻译。

| 标签名                         | 用途                                                                                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| accessibility                  | 与无障碍（accessibility）相关的 issue、bug 或 pull request                                                                                            |
| addon:(name)                   | 与 Storybook addon 相关的 issue、bug 或 pull request（如 [Controls](/docs/essentials/controls.mdx)）                                                  |
| app:(name)                     | 与 Storybook 支持的框架相关的 issue、bug 或 pull request（如 React）                                                                                  |
| api:(name)                     | 与 Storybook API 相关的 issue、bug 或 pull request（如 [makeDecorator](/docs/addons/addons-api.mdx#makeDecorator-API)）                               |
| args                           | 与 Storybook 的 [args](/docs/writing-stories/args.mdx) 相关的 issue、bug 或 pull request                                                              |
| babel/webpack                  | 与 Storybook 构建系统相关的 issue、bug 或 pull request（如 Webpack 或 Babel）；Webpack 5 的问题见下                                                     |
| block:(name)                   | Storybook 某个功能面（surface area）内的问题或 bug（如 [argTypes](/docs/api/doc-blocks/doc-block-argtypes.mdx)）                                        |
| BREAKING CHANGE                | 在 Storybook 生态内引入破坏性变更的 issue 或 pull request                                                                                              |
| BREAKING PRERELASE             | 破坏性变更，但仅影响 prerelease 用户（相对于稳定版而言不算破坏）                                                                                       |
| build-storybook                | 与 Storybook 生产构建相关的 issue、bug 或 pull request                                                                                                 |
| cleanup                        | 不会出现在发布更新日志中的小型清理样式改动                                                                                                             |
| bug                            | Storybook 内部的 bug                                                                                                                                  |
| cli                            | 影响 Storybook CLI 的 issue、bug 或 pull request                                                                                                      |
| compatibility with other tools | Storybook 与其他工具之间的 issue、bug 或 pull request（如 [Nuxt](https://nuxtjs.org/)）                                                               |
| components                     | 与 Storybook 内部组件相关的 issue、bug 或 pull request                                                                                                |
| composition                    | 与 Storybook [Composition](/docs/sharing/storybook-composition.mdx) 相关的 issue、bug 或 pull request                                                 |
| configuration                  | 与 Storybook [配置](/docs/configure/index.mdx)相关的 issue、bug 或 pull request                                                                       |
| core                           | 与 Storybook Core 相关的 issue、bug 或 pull request                                                                                                   |
| cra                            | 影响 Storybook 与 Create React APP（[CRA](https://create-react-app.dev/docs/getting-started/)）兼容性的 issue、bug 或 pull request                     |
| CSF                            | 与 Storybook 的[组件 Story 格式（CSF）](/docs/api/csf.mdx)相关的 issue、bug 或 pull request                                                            |
| decorators                     | 与 Storybook 的[装饰器（Decorators）](/docs/writing-stories/decorators.mdx)相关的 issue、bug 或 pull request                                            |
| dependencies                   | 与上游依赖相关的 issue、bug 或 pull request                                                                                                           |
| discussion                     | 维护者与社区正在讨论中的 issue                                                                                                                        |
| do not merge                   | 会引入回归、不会被合并的 pull request                                                                                                                 |
| documentation                  | 影响 Storybook 文档的 issue、bug 或 pull request                                                                                                      |
| duplicate                      | 仓库 issues 中已被提出过的问题或 issue                                                                                                                |
| feature request               | 请求在 Storybook 中加入新功能                                                                                                                         |
| flow                           | 与 Storybook 和 Flow 相关的 issue、bug 或 pull request                                                                                                |
| Funded on Issuehunt            | 在 [IssueHunt](https://issuehunt.io/) 上获得资助的 Storybook issue                                                                                    |
| gatsby                         | 影响 Storybook 与 [Gatsby](https://www.gatsbyjs.com/) 的 issue、bug 或 pull request                                                                   |
| good first issue               | 影响较小、帮助新成员入门并开始贡献的 Storybook issue                                                                                                  |
| has workaround                 | 存在替代解决办法的 issue 或 bug                                                                                                                       |
| help wanted                    | 需要社区额外协助的 issue 或 bug                                                                                                                       |
| ie11                           | 与 Storybook 和 IE11 相关的 issue、bug 或 pull request                                                                                                |
| in progress                    | 正在与作者一起评审或处理中的 issue 或 pull request                                                                                                    |
| inactive                       | 已停滞、没有持续开发的 issue 或 pull request                                                                                                          |
| maintenance                    | 与 Storybook 内部维护相关的 issue 或 pull request                                                                                                     |
| mdx                            | 与 MDX 和 Storybook 相关的 issue、bug 或 pull request                                                                                                 |
| medium                         | 在 Storybook 中涉及较大工作量的 issue 或 pull request                                                                                                 |
| monorepos                      | 与 Storybook 和 monorepo 相关的 issue、bug 或 pull request                                                                                            |
| mui                            | 影响 Storybook 与 [Material-UI](https://material-ui.com/) 的 issue、bug 或 pull request                                                               |
| multiframework                 | 影响多个受支持框架的 issue、bug 或 pull request（如 React、Vue）                                                                                      |
| needs more info                | 需要作者补充更多上下文的 issue 或 bug                                                                                                                 |
| needs reproduction             | 需要提供复现才能查看处理的 issue 或 bug                                                                                                               |
| needs triage                   | 需要维护者进一步调查的 issue、bug 或 pull request                                                                                                     |
| nextjs                         | 与 Storybook 同 [Next.js](https://nextjs.org/) 的集成相关的 issue、bug 或 pull request                                                                |
| nx                             | 与 Storybook 同 [NX](https://nx.dev/) 的集成相关的 issue、bug 或 pull request                                                                         |
| other                          | Storybook 的杂项 issue 或 pull request                                                                                                                |
| P(n)                           | bug 或 issue 的优先级，范围从 `0`（最紧急）到 `N`（最不紧急）                                                                                          |
| patch                          | 将被拣选（pick）到主分支的 bug 修复和文档 pull request                                                                                                |
| performance issue              | 影响 Storybook 性能的 issue、bug 或 pull request                                                                                                      |
| picked                         | 已被 cherry-pick 到主分支的补丁 PR                                                                                                                    |
| presets                        | 影响 Storybook 预设（preset）的 issue、bug 或 pull request                                                                                            |
| question / support             | 关于 Storybook 的一般性提问                                                                                                                           |
| run e2e extended test suite    | 影响 Storybook 测试套件的 pull request                                                                                                                |
| search                         | 与 Storybook 搜索功能相关的 issue、bug 或 pull request                                                                                                |
| security                       | 涉及 Storybook 安全性的 issue、bug 或 pull request                                                                                                    |
| small                          | 只需少量工作即可完成的 issue 或 pull request                                                                                                          |
| source-loader                  | 与 Storybook story 内代码展示相关的 issue、bug 或 pull request                                                                                        |
| theming                        | 与 Storybook 定制化相关的 issue、bug 或 pull request（如[主题定制](/docs/configure/user-interface/theming.mdx)）                                       |
| todo                           | 正在处理中的 issue 或 pull request                                                                                                                    |
| typescript                     | 与 TypeScript 相关的 issue、bug 或 pull request                                                                                                       |
| ui                             | 与 Storybook UI 相关的 issue、bug 或 pull request                                                                                                     |
| webpack5                       | 与 Webpack 5 相关的 issue、bug 或 pull request                                                                                                        |
| won't fix                      | 维护者不会处理的 issue 或 pull request（例如会引入回归）                                                                                              |
| yarn/npm                       | 与 node 包管理器相关的 issue 或 pull request                                                                                                          |
