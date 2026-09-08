// 【汉化注释】本文件是文档站点的框架能力矩阵数据源:
// - coreFrameworks:Storybook 官方核心支持的框架
// - communityFrameworks:由社区维护的框架
// - featureGroups:按功能组(Essentials / Addons / Docs)列出各特性,
//   `supported` 表示明确支持的框架列表,`unsupported` 表示明确不支持的框架列表,
//   两者都缺省时表示对所有框架可用;`path` / `repoPath` 指向对应文档页面。
module.exports = {
  // 核心框架:文档中默认展示、支持程度最高
  coreFrameworks: ['react', 'vue', 'angular', 'web-components'],
  // 社区框架:由社区贡献者开发和维护
  communityFrameworks: ['ember', 'html', 'svelte', 'preact', 'qwik', 'solid'],
  featureGroups: [
    // 功能组一:Essentials(基础必备功能包)
    {
      name: 'Essentials',
      features: [
        {
          name: 'Actions',
          unsupported: [],
          path: 'essentials/actions',
        },
        {
          name: 'Backgrounds',
          unsupported: [],
          path: 'essentials/backgrounds',
        },
        {
          name: 'Docs',
          unsupported: [],
          path: 'writing-docs',
        },
        {
          name: 'Viewport',
          unsupported: [],
          path: 'essentials/viewport',
        },
        {
          name: 'Controls',
          supported: ['react', 'vue', 'angular', 'web-components', 'ember'],
          path: 'essentials/controls',
        },
        {
          name: 'Measure',
          unsupported: [],
          path: 'essentials/measure-and-outline#measure-addon',
        },
        {
          name: 'Outline',
          unsupported: [],
          path: 'essentials/measure-and-outline#outline-addon',
        },
      ],
    },
    // 功能组二:Addons(插件能力,如交互测试、测试运行器、覆盖率等)
    {
      name: 'Addons',
      features: [
        {
          name: 'a11y',
          unsupported: [],
        },
        {
          name: 'interactions',
          supported: [
            'react',
            'vue',
            'angular',
            'web-components',
            'nextjs',
            'html',
            'svelte',
            'preact',
          ],
          unsupported: ['ember', 'qwik'],
        },
        {
          name: 'test-runner',
          supported: [
            'react',
            'vue',
            'angular',
            'web-components',
            'nextjs',
            'html',
            'svelte',
            'preact',
          ],
          unsupported: ['ember'],
          path: 'writing-tests/integrations/test-runner',
        },
        {
          name: 'test coverage',
          supported: [
            'react',
            'vue',
            'angular',
            'web-components',
            'nextjs',
            'html',
            'svelte',
            'preact',
          ],
          unsupported: ['ember'],
          path: 'writing-tests/test-coverage',
        },
        {
          name: 'cssresources',
          unsupported: [],
        },
        {
          name: 'design-assets',
          unsupported: [],
        },
        {
          name: 'events',
          unsupported: ['svelte'],
        },
        {
          name: 'google-analytics',
          unsupported: [],
        },
        {
          name: 'graphql',
          supported: ['react', 'angular'],
        },
        {
          name: 'jest',
          unsupported: [],
        },
        {
          name: 'knobs',
          unsupported: [],
        },
        {
          name: 'links',
          unsupported: [],
        },
        {
          name: 'queryparams',
          unsupported: [],
        },
        {
          name: 'storysource',
          unsupported: [],
        },
      ],
    },
    // 功能组三:Docs(文档能力,如 CSF、Autodocs、各类 Doc Blocks)
    {
      name: 'Docs',
      features: [
        {
          name: 'CSF Stories',
          unsupported: [],
          path: 'api/csf',
        },
        {
          name: 'Autodocs',
          supported: [
            'react',
            'vue',
            'angular',
            'web-components',
            'nextjs',
            'html',
            'svelte',
            'preact',
          ],
        },
        {
          name: 'Doc Blocks - ArgTypes',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-argtypes',
        },
        {
          name: 'Doc Blocks - Canvas',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-canvas',
        },
        {
          name: 'Doc Blocks - ColorPalette',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-colorpalette',
        },
        {
          name: 'Doc Blocks - Controls',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-controls',
        },
        {
          name: 'Doc Blocks - Description',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-description',
        },
        {
          name: 'Doc Blocks - IconGallery',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-icongallery',
        },
        {
          name: 'Doc Blocks - Markdown',
          unsupported: [''],
          path: 'api/doc-blocks/doc-block-markdown',
        },
        {
          name: 'Doc Blocks - Meta',

          unsupported: [''],
          path: 'api/doc-blocks/doc-block-meta',
        },
        {
          name: 'Doc Blocks - Primary',

          unsupported: [''],
          path: 'api/doc-blocks/doc-block-primary',
        },
        {
          name: 'Doc Blocks - Source',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-source',
        },
        {
          name: 'Doc Blocks - Story',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-story',
        },
        {
          name: 'Doc Blocks - Stories',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-stories',
        },
        {
          name: 'Doc Blocks - Subtitle',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-subtitle',
        },
        {
          name: 'Doc Blocks - Title',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-title',
        },
        {
          name: 'Doc Blocks - Typeset',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-typeset',
        },
        {
          name: 'Doc Blocks - Unstyled',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-unstyled',
        },
        {
          name: 'Doc Blocks - UseOf',
          unsupported: [],
          path: 'api/doc-blocks/doc-block-useof',
        },
        {
          name: 'storiesOf stories',
          unsupported: [
            'react',
            'vue',
            'angular',
            'svelte',
            'web-components',
            'nextjs',
            'html',
            'ember',
            'html',
            'svelte',
            'preact',
            'qwik',
          ],
          repoPath: 'lib/core/preview-api/storiesOf.md',
        },
        {
          name: 'Inline stories',
          supported: ['react', 'vue', 'web-components', 'html', 'svelte', 'angular'],
        },
      ],
    },
  ],
};
