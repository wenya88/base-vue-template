# base-frontend

## commit-msg 格式

```
<type>: <subject> #header部分
<body>
<footer>

```

## type 类型

```
{ type: 'feat', section: 'Features | 新功能' },
{ type: 'fix', section: 'Bug Fixes | Bug 修复' },
{ type: 'init', section: 'Init | 初始化' },
{ type: 'docs', section: 'Documentation | 文档' },
{ type: 'style', section: 'Styles | 风格' },
{ type: 'refactor', section: 'Code Refactoring | 代码重构' },
{ type: 'perf', section: 'Performance Improvements | 性能优化' },
{ type: 'test', section: 'Tests | 测试' },
{ type: 'revert', section: 'Revert | 回退' },
{ type: 'build', section: 'Build System | 打包构建' },
{ type: 'chore', section: 'Chore | 构建/工程依赖/工具' },
{ type: 'ci', section: 'Continuous Integration | CI 配置' }
```

```
subject (用于说明本次commit的简短概述，不超过50个字符)

body (用于本次commit的简短概述，可以分成多行)

```

## CHANGELOG 配置

```
在master分支发版本时，git merge 过后，使用运行npm run release 生成版本号 并打上git tag
```

```
提升主版号：
npm run release -- --release-as major
提升次版号：
npm run release -- --release-as minor
```
