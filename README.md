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

- 探索 AWS、HPC、Machine Learning、Haskell、Frontend、Database、Distributed Systems 七个领域。
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

现有素材与来源见 [ASSET_CREDITS.md](./ASSET_CREDITS.md)。Overview 顶部使用本地 MP4 动态封面；七个领域分别使用横向 2D 动画场景图，卡片和领域页共用同一主题画面。

将你选择的图片放入 `public/assets/`，然后统一在 `src/config/themes.ts` 中配置：

```ts
hpc: {
  name: 'Example theme',
  accent: '#53869b',
  wash: '#edf5f8',
  label: 'Many cores. One shared goal.',
  background: asset('scenes/example-theme.png'),
  source: 'https://your-original-source.example/',
},
```

推荐使用宽幅 PNG/WebP，并把主要角色放在画面右侧，为领域标题预留左侧空间。背景通过渐变遮罩保证文字可读；卡片使用 `object-fit: cover` 自动裁切。新增素材时请更新来源记录。

Overview 视频位于 `public/assets/video/site-background.mp4`。浏览器不允许带声音自动播放，因此视频默认静音；访客点击封面右上角的 `Sound on` 后可启用声音。进入领域页时视频节点会卸载，不会继续播放或占用页面背景。

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
  components/    递归知识节点、详情面板、主题卡片和图标
  config/        主题颜色和背景配置
  data/          学习内容
  types/         TypeScript 数据类型
  utils/         递归路径查找与节点展开
  App.tsx        导航、搜索与本地学习进度
  index.css      Tailwind 入口和响应式主题样式
public/assets/   场景图片和背景视频
```

## 验证

- 2026-10-08：TypeScript 检查和 Vite 生产构建通过。
