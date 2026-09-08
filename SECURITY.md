> 🌐 本文档由 [storybookjs/storybook](https://github.com/storybookjs/storybook) 翻译，英文原版见原项目。

# 安全策略

## 受支持的版本

我们会针对安全漏洞发布补丁，主要聚焦于最新的主版本。

仅当漏洞的 CVSS 评分为高危（High）或严重（Critical）（7.0+）时，安全修复才会向后移植到前两个主版本。是否向后移植取决于严重性评估以及在这些版本上实施补丁的可行性。

- 最新主版本：所有安全漏洞
- 前两个主版本：仅限高危或严重（CVSS 7.0+）漏洞
- 更旧的版本：不再支持（用户应升级到受支持的版本）

## 报告漏洞

如需报告漏洞，你可以通过 [X](https://x.com/storybookjs) 或 [Bluesky](https://bsky.app/profile/storybook.js.org) 直接联系维护者，或提交一份安全通告（security advisory）。

当我们修复了严重安全问题后，会在 GitHub 和/或 npm 上发布安全通告，在[发布说明](https://github.com/storybookjs/storybook/releases)中描述变更内容，并通过适当渠道通知社区。

## 安全通告

GitHub 提供了通过[安全通告](https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)私密报告漏洞的选项。它为报告者与 Storybook 核心团队之间提供了一个安全、私密的渠道，用于讨论和处理安全漏洞。

### 与依赖相关的通告

除非下游依赖中的漏洞确实会给 Storybook 用户带来现实的安全风险，否则请不要为了报告下游依赖的漏洞而单独发起安全通告。

Storybook 直接或间接依赖大量软件包。其中某个依赖存在漏洞，并不自动意味着 Storybook 存在漏洞、可被利用或可被用于恶意目的。安全报告应当清楚地说明该漏洞如何通过 Storybook 本身被利用。仅引用依赖通告、而未证明其对 Storybook 实际影响的报告，大概率无法被处理。例如，弱随机哈希生成器如果只被 Storybook 用来生成非敏感的 HTML 元素标识符，就不构成安全问题。

如果某个下游依赖已有安全补丁，且升级它能切实改善 Storybook 的安全态势，请改而提交 bug 报告或拉取请求（pull request），而不是安全通告。
