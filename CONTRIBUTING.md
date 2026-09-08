> 🌐 本文档由 [storybookjs/storybook](https://github.com/storybookjs/storybook) 翻译，英文原版见原项目。
>
> 注：原文件超过 10000 字符，本译文覆盖核心章节；目录结构等代码块保持原样，完整内容以英文原版为准。

# 贡献者指南
> 提示：如果你想快速做一次贡献，可以到 Issues 标签页找 "good first issue" 标签，里面是容易在 GitHub 上直接修复的小型前端和文档任务。


我们欢迎任何类型、任何技术水平的贡献。作为一个开源项目，我们相信社区的力量，欢迎一切帮助 Storybook 变得更好的贡献。无论你是开发者、设计师、作者，还是单纯想帮忙的人，我们都欢迎你加入。如果有意参与贡献，请先阅读以下指南。

无论你是开源新人还是资深贡献者，我们都欢迎。以下是为 Storybook 做贡献的几种方式：

- 为功能请求[创建 RFC](https://storybook.js.org/docs/contribute/RFC)
- 修复、改进或澄清我们的[文档](https://storybook.js.org/docs/contribute/documentation/documentation-updates)
- 添加[新示例](https://storybook.js.org/docs/contribute/documentation/new-snippets)，展示如何在某个 JS 框架中使用 Storybook
- [让 Storybook 集成某个 JS 框架](https://storybook.js.org/docs/contribute/framework)，或改进对现有框架的支持
- [编写 addon](https://storybook.js.org/docs/addons) 来扩展 Storybook 的功能

如果你不知道从哪里开始，随时可以这样帮我们：

- [报告 bug](https://github.com/storybookjs/storybook/issues/new/choose)
- 在 Storybook 的 GitHub 讨论区回答 [Help](https://github.com/storybookjs/storybook/discussions/categories/help?discussions_q=is%3Aopen+category%3AHelp) 类问题
- [浏览可修复的 `Good First Issue`](https://github.com/storybookjs/storybook/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)

> **注意**：开始贡献之前，请阅读[行为准则](./CODE_OF_CONDUCT.md)；如果对项目或贡献流程有任何疑问，欢迎到 Discord 的 [`#contributing`](https://discord.com/channels/486522875931656193/839297503446695956) 频道联系维护者。

## 关于 AI 贡献：绝不要让 LLM 替你说话

团队欢迎在为 Storybook 做贡献时把 AI 当作个人助理使用。但我们坚信，每个 issue 和 pull request 背后必须是真实的人。

所有 issue 和 pull request 都必须由真实的人通过官方模板发起。如果 AI 参与了 pull request 的创建，请披露所使用的工具（如 Claude、Codex、Copilot）。

完全由 AI 生成、没有任何人参与的 pull request 或 issue（例如由自动化代理提交的）会被维护者打上标签，若 3 天内没有真实的人回应将被自动关闭。

AI 在 issue、pull request 或讨论中发表的、没有价值或包含错误信息的评论会被维护者隐藏；若形成垃圾信息行为，还可能被封禁。

这些措施有助于减轻维护负担，保持团队工作高效。

## 快速指南

### 前置条件

Storybook 基于 `.nvmrc` 文件中指定的特定 Node.js 版本开发。
你可以使用任意版本管理器安装正确的 Node.js 版本，我们推荐使用 [fnm](https://github.com/Schniz/fnm)。

1. 运行以下命令，检查你是否安装了正确版本的 Node.js：

  ```shell
  # 检查当前使用的版本
  node --version
  # node 版本管理器
  nvm use 22
  # pnpm
  pnpm env use --global 22
  ```

2. 安装 [fnm](https://github.com/Schniz/fnm/tree/master?tab=readme-ov-file#installation)，并在 shell 配置中加入以下参数：`fnm env`、`use-on-cd`、`corepack-enabled` 和 `version-file-strategy recursive`。

   ```shell
   eval "$(fnm env --use-on-cd --corepack-enabled --version-file-strategy recursive)"
   ```

3. 如果你是 Windows 用户，需要启用 Windows Subsystem for Linux（WSL），可参照[这里的说明](https://docs.microsoft.com/en-us/windows/wsl/install)操作。

### 运行本地开发环境

- 在 Windows 环境下，所有命令都应在具有管理员权限的终端中运行。

### 项目里有什么？

Storybook 使用 monorepo 结构来管理项目及其软件包。以下是值得关注的目录和文件（注释已译，结构保持原样）：

```shell
.
├── CHANGELOG.md                  # 当前版本 Storybook 的更新日志
├── CHANGELOG.prerelease.md
├── CHANGELOG.v1-5.md
├── CHANGELOG.v6.md
├── CODEOWNERS
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING                  # 面向维护者的信息
├── CONTRIBUTING.md               <--------- 你在这里！
├── LICENSE
├── MAINTAINERS.md
├── MIGRATION.md                  # Storybook 迁移指南
├── README.md
├── RESOLUTIONS.md
├── SECURITY.md
├── code                         # Storybook 代码库
│   ├── __mocks__
│   ├── addons
│   ├── bench
│   ├── builders
│   ├── chromatic.config.json
│   ├── core                     # Storybook UI 与 API 的核心包
│   ├── e2e-internal             # 内部 Storybook UI 的 Playwright e2e 测试
│   ├── e2e-sandbox              # 生成的沙盒的 Playwright e2e 测试
│   ├── frameworks               # 不同框架-打包器组合的 Storybook 版本
│   ├── lib                      # CLI 与插件
│   ├── node_modules
│   ├── nx.json
│   ├── package.json
│   ├── playwright.config.ts
│   ├── presets                  # 预设（preset）包
│   ├── .oxfmtrc.json
│   ├── renderers                # 面向不同框架的 Storybook 渲染器
│   ├── sandbox                  # 用于 bug 复现或实验的沙盒
│   ├── tsconfig.json
│   ├── vitest-setup.ts
│   ├── vitest.config.ts
│   ├── vitest.helpers.ts
│   └── vitest.workspace.ts
├── codecov.yml
├── dependabot.yml
├── docs                         # 文档
│   ├── _assets
│   ├── _snippets
│   ├── addons
│   ├── api
│   ├── builders
│   ├── configure
│   ├── contribute
│   ├── essentials
│   ├── faq.mdx
│   ├── frameworks.js
│   ├── get-started
│   ├── index.mdx
│   ├── migration-guide
│   ├── sharing
│   ├── versions
│   ├── writing-docs
│   ├── writing-stories
│   └── writing-tests
├── node_modules
├── package.json                      # yarn monorepo 的根
├── .oxfmtrc.json
├── scripts                           # 构建与辅助脚本
├── test-storybooks
│   ├── ember-cli
│   ├── external-docs
│   ├── portable-stories-kitchen-sink
│   ├── server-kitchen-sink
│   └── standalone-preview
└── yarn.lock
```

### 复刻（fork）仓库

如果你计划向 Storybook 代码库贡献代码，应先把仓库 fork 到自己的 GitHub 账号下。这样你就可以修改代码，并在准备好后向主仓库提交 pull request。

另外，把我们的代码库添加为 upstream，可以保证你能够基于主仓库的最新变更进行 rebase。操作命令如下：

```shell
git remote add upstream https://github.com/storybookjs/storybook.git
git fetch upstream
git branch --set-upstream-to upstream/main main
```

### 运行本地开发环境

如果你想参与 Storybook 代码库的开发，可以在本地把它跑起来，熟悉代码库和开发环境。开始开发前，请始终在根目录运行 `yarn start`。`yarn start` 会安装所需依赖、构建项目（包括各软件包），并生成一个使用 React + TypeScript 的沙盒环境，附带一组测试 story 帮你上手。

```shell
# 进入 Storybook 仓库的根目录
cd path/to/your/storybook/fork

# 安装所需依赖
yarn
# 启动开发环境
yarn start
```

### 修改代码

如果你想在沙盒运行期间修改 Storybook 软件包的代码，需要按以下步骤操作：

1. 另开一个终端，在 `code/` 目录下运行 `yarn build --watch <包1> <包2>`。

例如，要构建 `@storybook/react`、`storybook` 本体、`@storybook/builder-vite` 和 `@storybook/addon-docs` 这几个包，运行：

```shell
# 进入 code 目录
cd path/to/your/storybook/fork/code

# 以 watch 模式构建指定包
yarn build --watch react core-server api addon-docs
```

大多数包名就是发布包名中 `@storybook/` 后面的部分。

例如，要以 watch 模式同时构建 `@storybook/react storybook @storybook/builder-vite @storybook/addon-docs`：

```shell
cd code
yarn build --watch react storybook builder-vite addon-docs
```

2. 如果沙盒以 ["linked"](https://yarnpkg.com/cli/link) 模式（默认）运行，刷新页面即可看到变更（如果改的是 server 侧的包，可能需要重启沙盒）。

3. 如果沙盒以 "unlinked" 模式运行，则需要从 `publish` 步骤重新运行沙盒才能看到变更：

```shell
yarn task --task dev --template <你的模板> --start-from=publish
```

4. 如果你在 `/code` 或其他包内做了任何改动，记得在该包内运行 `yarn test`，确保没有破坏任何测试。

### Angular 专属代码

如果你在改 Angular 相关代码，需要在上述命令后追加 `--prod`，以确保 Angular 编译器能正确捕获变更而不报错。这会以生产模式构建所有包。

```shell
# 以生产模式启动构建过程
yarn task --prod
```

```shell
# 以生产模式构建指定包
yarn build --prod --watch angular storybook addon-docs
```

### 使用不同的沙盒模板运行

你可以运行 `yarn task` 选择一个特定模板作为沙盒，它会提示你进一步选择想要的模板和要运行的任务。

### 聚焦修复 CI 中的某个沙盒

我们的 CI 会运行大量沙盒，选择 `ci:daily` 工作流时尤其如此。

当某个特定沙盒失败时，首选在本地调试；但如果实在无法本地调试，可以强制 CI 只聚焦一部分沙盒而不是全量运行。做法如下：

在下面这个链接里可以编辑过滤函数：
https://github.com/storybookjs/storybook/blob/3d49093954243d4d520774243866de840f298bf4/scripts/ci/main.ts#L70-L88

实际上你可以按任意作业过滤，只运行 `test-runner`、`e2e`、`vite` 沙盒等。

## 故障排查

### 初始化过程抛出错误

如果你运行 `yarn start` 时遇到以下错误，尝试再运行一次 `yarn start`：

```shell
> NX ENOENT: no such file or directory, open 'storybook/code/node_modules/nx/package.json'
```

### Storybook 没有检测到代码库的变更

如果你是 Storybook 贡献者且仍然遇到问题，建议检查本地 Storybook 实例是否存在意外的本地改动。可以使用以下命令：

```shell
git clean -dx --dry-run
```

执行该命令可以预览：如果加 `--force` 标志运行，哪些未跟踪或被忽略的文件和目录会从你的工作目录中被移除。在带 `--force` 标志运行之前，请先提交你想保留的本地改动，否则它们会丢失。

## 参与 Storybook 贡献

更多贡献建议，请参阅我们[Storybook 官网上的全新贡献指南](https://storybook.js.org/docs/contribute)。
