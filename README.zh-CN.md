<div align="center">

# storybook 中文文档

**Storybook — 隔离构建 UI 组件与页面的前端工作台(中文汉化文档)**

[![原项目](https://img.shields.io/badge/原项目-storybookjs--storybook-blue?style=flat-square&logo=github)](https://github.com/storybookjs/storybook)
[![英文原版 README](https://img.shields.io/badge/原版-README.md-blueviolet?style=flat-square)](https://github.com/storybookjs/storybook/blob/main/README.md)
[![License](https://img.shields.io/github/license/storybookjs/storybook?style=flat-square)](https://github.com/storybookjs/storybook/blob/main/LICENSE)
[![微信联系](https://img.shields.io/badge/微信-uaycar-brightgreen?style=flat-square&logo=wechat)](#)

</div>

---

> 本文档是 [storybookjs/storybook](https://github.com/storybookjs/storybook) 官方 README 的中文翻译整理版,内容有删节与意译,以英文原版为准。
> 完整源代码请访问原项目:https://github.com/storybookjs/storybook
>
> **代部署 / 定制服务 / 技术咨询 请添加微信:uaycar**

---

## 📖 Storybook 是什么

Storybook 是一个面向前端的工作台(workshop),用于**隔离地**构建 UI 组件和页面。成千上万的团队将它用于 UI 开发、测试与文档编写。

- 官网与入门指南:[storybook.js.org](https://storybook.js.org/?ref=readme)
- 官方文档:[storybook.js.org/docs](https://storybook.js.org/docs?ref=readme)
- 组件案例百科(Component Encyclopedia):[storybook.js.org/showcase](https://storybook.js.org/showcase?ref=readme)

它的核心思想:把组件从业务页面里"拆"出来,在独立沙盒中逐个状态地开发、预览、测试和归档,最终形成一套可浏览、可测试、可复用的组件资产库。

## 🚀 快速上手

在已有的前端项目根目录执行(Storybook 会自动识别 React / Vue / Angular / Svelte / Web Components 等框架并完成配置):

```bash
npx storybook@latest init
```

初始化完成后启动本地工作台:

```bash
npm run storybook
```

浏览器访问 `http://localhost:6006` 即可看到组件工作台界面。构建可部署的静态站点:

```bash
npm run build-storybook
```

不想在本地装环境?打开 [storybook.new](https://storybook.new) 即可在 StackBlitz 中秒开一个在线示例项目。

## 🛠 支持的框架(节选)

Storybook 通过 renderer / framework 适配几乎所有主流前端技术栈:

| 渲染器 | 说明 |
| :----- | :----- |
| [React](https://github.com/storybookjs/storybook/tree/main/code/renderers/react) | 生态最大、使用最广的官方渲染器 |
| [Vue 3](https://github.com/storybookjs/storybook/tree/main/code/renderers/vue3) | 官方支持 Vue 3 组合式 API |
| [Angular](https://github.com/storybookjs/storybook/tree/main/code/frameworks/angular) | 官方框架级适配 |
| [Svelte](https://github.com/storybookjs/storybook/tree/main/code/renderers/svelte) | 官方渲染器 |
| [Web Components](https://github.com/storybookjs/storybook/tree/main/code/renderers/web-components) | 原生自定义元素支持 |
| [React Native](https://github.com/storybookjs/react-native) | 由独立仓库维护的移动端支持 |
| Android / iOS / Flutter | 通过 [storybookjs/native](https://github.com/storybookjs/native) 扩展移动端开发 |

其余还包括 Preact、HTML、Ember、Qwik、SolidJS 等,完整列表见原 README 的 "Supported Frameworks" 表格。

## 🔗 常用插件(Addons,节选)

Storybook 的能力很大程度来自插件生态,代表性官方插件:

| 插件 | 功能 |
| :----- | :----- |
| [a11y](https://github.com/storybookjs/storybook/tree/main/code/addons/a11y) | 在 Storybook 内检查组件的无障碍可访问性 |
| [actions](https://github.com/storybookjs/storybook/tree/main/code/core/src/actions) | 记录用户与组件交互时触发的动作日志 |
| [docs](https://github.com/storybookjs/storybook/tree/main/code/addons/docs) | 为组件自动生成高质量文档页 |
| [backgrounds](https://github.com/storybookjs/storybook/tree/main/code/core/src/backgrounds) | 在界面中自由切换组件背景色 |
| [viewport](https://github.com/storybookjs/storybook/tree/main/code/core/src/viewport) | 切换视口尺寸/布局,调试响应式组件 |
| [measure](https://github.com/storybookjs/storybook/tree/main/code/core/src/measure) | 可视化检查布局与盒模型 |
| [outline](https://github.com/storybookjs/storybook/tree/main/code/core/src/outline) | 可视化调试 CSS 布局与对齐 |
| [jest](https://github.com/storybookjs/addon-jest) | 在 Storybook 中查看组件单元测试结果 |
| [links](https://github.com/storybookjs/storybook/tree/main/code/addons/links) | 在不同 story 之间建立链接跳转 |
| [graphql](https://github.com/storybookjs/addon-graphql) | 在 story 内直接查询 GraphQL 服务 |

插件与框架的支持矩阵见官方文档 [Frameworks Feature Support](https://storybook.js.org/docs/configure/integration/frameworks-feature-support?ref=readme)。

**弃用迁移提示**(意译):

- 使用 info / notes 插件的,建议迁移到 [docs](https://github.com/storybookjs/storybook/tree/main/code/addons/docs) 插件;
- 使用 contexts 插件的,建议迁移到 [toolbars](https://github.com/storybookjs/storybook/tree/next/code/addons/toolbars);
- 使用 addon-storyshots 的,建议迁移到官方 [test-runner](https://github.com/storybookjs/test-runner)。

## 🏅 徽章与品牌素材

Storybook 提供官方徽章,可放在项目 README 中并链接到你的在线 Storybook:

```md
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](你的在线 Storybook 地址)
```

Logo、视频、品牌色等演示物料见官方 [brand 仓库](https://github.com/storybookjs/brand)。

## 👥 社区

- 推特(X):[@storybookjs](https://x.com/storybookjs)
- 官方博客:[storybook.js.org/blog](https://storybook.js.org/blog/?ref=readme) 与 [Medium](https://medium.com/storybookjs)
- 聊天室:[Discord](https://discord.gg/storybook)
- 视频与直播:[YouTube 频道](https://www.youtube.com/channel/UCr7Quur3eIyA_oe8FNYexfg)
- 求助:到原仓库新建 [GitHub Discussions](https://github.com/storybookjs/storybook/discussions/new?category=help)

## 👏 参与贡献

Storybook 欢迎一切形式的贡献:

- Pull Request 与 Star 永远欢迎;
- 新手请先阅读原仓库的 [CONTRIBUTING.md](https://github.com/storybookjs/storybook/blob/main/CONTRIBUTING.md);
- 也可以在 [Discord](https://discord.gg/storybook) 里找维护者,他们会花时间带你入门;
- 原仓库会用 `good first issue` 标签标记适合新人的入门 issue。

### 开发常用脚本(面向贡献者,monorepo)

Storybook 源码以 monorepo 组织,常用脚本:

#### `yarn start`

> 启动一个带测试 story 的沙盒模板 Storybook

#### `yarn task`

> 同上,但可通过选项自定义沙盒(例如选择其他框架)

#### `yarn lint`

> 用 remark 与 eslint 检查代码是否符合 lint 规则

- `yarn lint:js` —— 检查 JS
- `yarn lint:md` —— 检查 Markdown 与代码示例
- `yarn lint:js --fix` —— 自动修复 JS 问题

#### `yarn test`

> 用 jest 检查单元测试是否全部通过

- `yarn run test --core --watch` —— 以 watch 模式运行核心测试

### 赞助

原项目通过 [Open Collective](https://opencollective.com/storybook) 接受赞助与捐助,赞助者 Logo 展示在原 README 中,细节见原仓库 Sponsors / Backers 章节。

## 📄 许可证

原项目基于 [MIT](https://github.com/storybookjs/storybook/blob/main/LICENSE) 许可证开源。

---

<div align="center">

**代部署 / 定制服务 / 技术咨询 请添加微信:uaycar**

本项目为 [storybookjs/storybook](https://github.com/storybookjs/storybook) 的中文翻译版本,所有代码版权归原项目作者所有,遵循其原始许可证(MIT)。

**如果觉得有用,请给原项目点个 Star!** ⭐

</div>
