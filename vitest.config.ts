import { coverageConfigDefaults, defineConfig } from 'vitest/config';

/**
 * 【汉化注释】CircleCI 向 Node.js 上报的线程数不正确,因此需要手动设置。
 * 单元测试运行在 xlarge 资源类(8 个 vCPU)上。
 *
 * @see https://jahed.dev/2022/11/20/fixing-node-js-multi-threading-on-circleci/
 * @see https://vitest.dev/config/maxworkers.html#maxworkers
 * @see https://circleci.com/docs/configuration-reference/#x86
 * @see .circleci/config.yml#L187
 */
// CI 环境下:Windows 用 4 线程,其他平台用 7 线程;本地开发不限制(maxWorkers=undefined)
const threadCount = process.env.CI ? (process.platform === 'win32' ? 4 : 7) : undefined;
// 【汉化注释】CI + Windows 组合下跳过 Storybook 自身的浏览器模式测试
const shouldRunStorybookTests = !(process.env.CI && process.platform === 'win32');

// 【汉化注释】vitest 项目(project)列表:按目录通配聚合 monorepo 内所有子包的 vitest 配置
const projects = [
  'agent-eval/vitest.config.ts',
  'code/addons/*/vitest.config.ts',
  'code/frameworks/*/vitest.config.ts',
  'code/lib/*/vitest.config.ts',
  'code/core/vitest.config.ts',
  'code/builders/*/vitest.config.ts',
  'code/presets/*/vitest.config.ts',
  'code/renderers/*/vitest.config.ts',
  'scripts/vitest.config.ts',
];

/**
 * 【汉化注释】CI 上只运行我们自己的单元测试;出于性能考虑不安装 playwright,
 * 因此这些需要浏览器模式的测试不会被加入执行。
 */
if (shouldRunStorybookTests) {
  projects.push('code/vitest.config.storybook.ts');
}

export default defineConfig({
  test: {
    env: {
      NODE_ENV: 'test',
    },

    pool: 'threads',
    maxWorkers: threadCount,
    projects,

    coverage: {
      provider: 'istanbul',
      // 【汉化注释】覆盖率统计排除:mock 文件、构建产物(dist)、
      // 各类配置文件及 stories 示例文件
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/__mocks/**',
        '**/dist/**',
        'playwright.config.ts',
        'vitest-setup.ts',
        'vitest.helpers.ts',
        '**/*.stories.*',
      ],
    },
  },
});
