# My Learning Map

一个属于自己的计算机科学学习小宇宙。通过可展开的知识树、问答卡片和角色主题，把零散的知识连接起来。

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide. This is a completely static application: no backend, accounts, database, or server-side routing.

## 开始使用

安装当前受支持的 Node.js LTS 及配套 npm，然后在项目目录运行：

```bash
npm install
npm run dev
```

访问终端显示的地址，默认是 `http://localhost:5173`。

```bash
npm run build     # TypeScript 检查及生产构建，输出 dist/
npm run preview   # 预览生产构建
```

如果 WSL 中的 `npm` 错误地指向 Windows 安装目录，请在 WSL 内安装 Node.js/npm 并检查 `command -v node npm`。已有依赖时，也可以直接运行 `node node_modules/vite/bin/vite.js --host 0.0.0.0`。

## 可以做什么

- 探索 AWS、HPC、Machine Learning、Haskell、Database、Distributed Systems 六个领域。
- 点击节点展开或收起子节点，通过连线查看知识层级；点击面包屑回到父节点。
- 在右侧查看解释、关键点、可展开问答和代码示例；手机上详情面板位于知识树下方。
- 阅读完整的 AWS / S3、Bucket、Object、Static Website Hosting 初始内容。
- 搜索所有层级的标题与描述，使用 `Ctrl+K` / `⌘K` 聚焦搜索，`Esc` 清空。
- 将主题标为已学，在 My progress 中查看；学习标记和最近探索记录保存在当前浏览器的 localStorage 中。
- 切换领域时切换配色、角色及装饰；动画遵循系统“减少动态效果”偏好。
- 在手机上通过菜单打开侧栏，所有导航和知识节点均可用键盘操作。

学习数据不会发送到服务器，也不会跨设备同步。清除浏览器数据会清除进度；浏览器禁止持久化存储时，进度仅在本次会话中保留。领域根节点可以标记，概览的 topics / learned 数值只统计领域下的知识节点。

## 添加知识

编辑 `src/data/knowledge.ts`。所有节点使用 `src/types/knowledge.ts` 中的同一类型，支持任意深度的 `children`；每个节点必须有全局唯一且稳定的 `id`。

```ts
{
  id: 's3-versioning',
  title: 'Versioning',
  description: 'Keep multiple versions of an object in a bucket.',
  keyPoints: ['Recover from an accidental overwrite.'],
  questions: [{
    question: 'Does versioning replace backups?',
    answer: 'No. It is one layer of protection within a broader recovery plan.',
  }],
  example: 'An optional code example',
}
```

把以上节点添加到 S3 的 `children` 即可，搜索、知识树、面包屑和计数会自动更新。新增顶级领域时，也需要在 `src/config/themes.ts` 中按同一 `id` 添加主题。

## 添加 / 替换动漫素材

现有官方素材与来源见 [ASSET_CREDITS.md](./ASSET_CREDITS.md)。本次加入了后藤一里和爱蜜莉雅，分别用于 AWS 与 Machine Learning；其他领域使用几何与轨道图案占位。

将你选择的图片放入 `public/assets/`，然后统一在 `src/config/themes.ts` 中配置：

```ts
hpc: {
  name: 'Arknights',
  accent: '#53869b',
  wash: '#edf5f8',
  label: 'Many cores. One shared goal.',
  character: asset('arknights/character.png'),
  background: asset('arknights/background.webp'),
  source: 'https://your-original-source.example/',
},
```

推荐透明 PNG/WebP。角色使用 `object-fit: contain` 和 `pointer-events: none`，融入主题横幅与笔记面板；可选背景通过低透明度和模糊保证文字可读。图片加载失败时显示装饰占位，不影响知识导航。无需修改 React 组件。新增素材时请更新来源记录。

## 部署到 Amazon S3

1. 创建用于网站的 S3 bucket。
2. 在 Properties 中启用 Static website hosting，设置 Index document 为 `index.html`。
3. 执行 `npm run build`。
4. 将 `dist/` **内部文件**上传到 bucket 根目录，包括 `index.html`、`favicon.svg` 和 `assets/`。
5. 为打算公开的网站文件配置读取权限。直接使用 S3 website endpoint 时，需要允许公开读取；仅给这个网站专用 bucket 设置必要权限，遵循你的账户策略。
6. 打开 S3 提供的 website endpoint 测试。

网站不使用路径路由，切换主题不会改变 URL，刷新不需要额外 SPA rewrite 配置。部署在子目录时，Vite 的相对 base 和主题资源路径也可正常使用。

S3 website endpoints 仅提供 HTTP。如需 HTTPS，可使用 CloudFront；使用私有 S3 bucket + CloudFront OAC 时，应配置 S3 REST origin，而非 website endpoint。部署参考：[AWS 官方静态网站指南](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)、[网站端点说明](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteEndpoints.html)。

## 项目结构

```text
src/
  components/    递归知识节点、详情面板、主题卡片、插画和图标
  config/        主题颜色、角色图片和背景配置
  data/          学习内容
  types/         TypeScript 数据类型
  utils/         递归路径查找与节点展开
  App.tsx        导航、搜索与本地学习进度
  index.css      Tailwind 入口和响应式主题样式
public/assets/   本地角色素材
```

## 本次验证

- 依赖安装及 `npm run build` 成功；项目依赖审计未报告漏洞。
- Chromium 实际测试：六个领域入口、递归展开、面包屑、问答、已学标记及刷新后的进度恢复、搜索、角色切换、详情面板开关和素材缺失回退。
- 检查了 1440、1024、768、390、320px 页面宽度，未发现页面横向溢出；手机导航可用。
- 首页与 AWS / S3 详情页通过 axe 自动可访问性检查，浏览器未发现 JavaScript 运行错误。自动检查不替代完整的人工辅助技术验证。
