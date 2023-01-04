---
description: Docusaurus 自设计之初的目标就是易于安装且运行快速。

hide_table_of_contents: true
---


# 介绍


⚡️ Docusaurus 会帮助你在**极短时间内搭建漂亮的文档网站**。

💸 自己造轮子是一件苦差事。 现在，你可以**专注于内容创作**，只需编写 Markdown 文件即可。


💥 想深入了解吗？ 来试试包括文档分版、本地化、自定义搜索、个性化主题在内的**进阶功能特性**吧！

💅 看看**[我们最爱的 Docusaurus 网站](/#)**来获取灵感，并读读其他人的**[使用感言](https://twitter.com/sebastienlorber/timelines/1392048416872706049)**吧！

🧐 Docusaurus 是一款**静态站点生成器**。 可以搭建带有快速客户端导航的**单页应用**，充分利用了 **React**，让你的网站具有交互能力。 它提供了开箱即用的**文档功能**，不过也可用于搭建**各种网站**（个人网站、产品、博客、营销主页，等等）。

![](/img/slash-introducing.svg)

## 快速通道 ⏱️ {#fast-track}

边玩边学 Docusaurus，仅需 **5 分钟**！

创建一个新的 Docusaurus 网站，并跟随内含的**极为简短**的教程。

安装 [Node.js](https://nodejs.org/zh-cn/download/)，
Node.js v16.14 或以上版本（你可以运行 node -v 命令查看版本号）。 你可以用 nvm 来管理同一机器上的多个 Node 版本。
安装 Node.js 时，建议勾选所有和依赖相关的选项。

然后创建一个新 Docusaurus 网站：



```bash
npx create-docusaurus@latest my-website classic
```
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<details>
  <summary>其他安装指令</summary>

你也可以用你喜欢的包管理器来初始化新项目：

```mdx-code-block
<Tabs>
<TabItem value="npm">
```
```bash
npm init docusaurus
```
```mdx-code-block
</TabItem>
<TabItem value="yarn">
```
```bash
yarn create docusaurus
```
```mdx-code-block
</TabItem>
<TabItem value="pnpm">
```
```bash
pnpm create docusaurus
```
```mdx-code-block
</TabItem>
</Tabs>
```
</details>



运行网站：

```bash
cd my-website
npx docusaurus start
```

打开 [http://localhost:3000](http://localhost:3000) 并遵循教程。

:::tip

用 **[docusaurus.new](https://docusaurus.new)** 在浏览器中即刻体验 Docusaurus！

或者在线阅读**[5分钟教程](https://tutorial.docusaurus.io)**。



## 特性 {#features}

Docusaurus 从设计之初就极度重视开发者及贡献者的体验。

- ⚛️ **用 💚 和 React 打造**：
  - 使用 React 实现扩展与自定义
  - 提供你自己的 React 组件，从而完全掌控网站的浏览体验
- **可插拔**：
  - 使用基础模板搭建网站，随后使用进阶功能及插件
  - 开放你的插件源码，与社区共享
- ✂️ **开发者体验**：
  - 立即开始撰写你的软件文档
  - 统一配置文件，贡献者可以轻松维护
  - 热重载，飞速增量构建
  - 基于路由的代码及数据拆分
  - 轻松发布到 GitHub Pages、Netlify、Vercel 和其他部署服务

我们的共同目标——快速让用户找到需要的内容，并更好地了解你的产品。 我们和你分享我们的最佳实践，帮助你正确而优雅地构建自己的文档网站。

- 🎯 **SEO 友好**：
  - 为每条路径静态生成 HTML 文件。
  - 为每个页面做单独搜索引擎优化，帮助用户快速到达官方文档，解决当前问题。
- 📝 **由 MDX 驱动**：
  - 用 JSX 和 React 撰写交互组件，并将其嵌入 Markdown。
  - 在实时编辑器中分享你的代码，让你的用户迅速爱上你的产品。
- 🔍 **搜索**：全站均可被搜索。
- 💾 **文档分版**：帮助你的文档与项目发布保持同步。
- 🌍 **国际化 (i18n)**：将你的网站翻译成多国语言。

Docusaurus 2 生而乐意为全体用户服务，而且快如闪电。

- ⚡️ **快如闪电**。 Docusaurus 2 遵循 [PRPL 模式](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)来确保内容可以迅速加载。
- 🦖 **无障碍访问**。 我们重视无障碍访问性，让所有用户都能平等地访问你的网站。

## 设计理念 {#design-principles}

- **低学习成本**。 Docusaurus 的 API 小而精，保证易于上手使用。 用户仍然可以完成大多数功能，即使需要花更多时间写更多代码。 没有抽象要比错误的抽象更好，我们不希望用户在错误的抽象上捣鼓解决方案。 必看讲座——[最小化 API 表面积](https://www.youtube.com/watch?v=4anAwXYqLG8)。
- **直观易懂**。 用户查看 Docusaurus 项目目录或添加新特性时不会感到头昏脑胀。 软件应简单直观，用户则可轻松扩展。
- **分层结构**。 软件栈的分层（内容/主题/样式）应一目了然——充分抽象且模块化。
- **合理的默认值**。 常见、热门的性能优化选项会自动支持，并仍提供手动覆盖的方式。
- **不受约束**。 用户无需使用默认插件或 CSS（虽然我们强烈推荐这么做）。 某些核心基础设施，例如 React Loadable 和 React Router 不能替换，因为我们基于这些做了默认性能优化，但更高层的架构则可以随意替换。 Markdown 引擎、CSS 框架、CSS 方法和其他架构的选择完全取决于用户。

我们相信，开发者足够了解一个应用库的运行原理，才能够更好地使用它。 因此，我们愿意花费精力来阐释 Docusaurus 的架构和各个组成部分，希望读者们可以拥有对它更深的理解，从而更熟练地使用它。


<!--

Explain the principles that guide the development of Docusaurus.

References
---
- https://www.gatsbyjs.org/docs/behind-the-scenes/
- https://reactjs.org/docs/design-principles.html
- https://v1.vuepress.vuejs.org/miscellaneous/design-concepts.html

-->

## 与其他工具的对比 {#comparison-with-other-tools}

在所有的静态网站生成器中，Docusaurus 独树一帜，专注于文档网站，拥有诸多开箱即用的功能。

我们同时也研究了其他一些主流静态站点生成器，想和你一起分享我们比较后的看法，希望能帮你在多种选择中做出判断。

### Gatsby {#gatsby}

[Gatsby](https://www.gatsbyjs.com/) 自带诸多功能，而且拥有丰富的插件生态，足以胜任 Docusaurus 的所有功能。 当然，这带来了较陡的学习曲线。 Gatsby 在许多方面做得都很出色，适合构建许多类型的网站。 另一方面，Docusaurus 力图将一件事做到尽善尽美——成为最好的内容撰写与发布工具。

GraphQL 是 Gatsby 的核心，但搭建 Gatsby 网站不一定要用到它。 而在大多数静态网站中，你更不需要 GraphQL 所提供的灵活性。

Docusaurus 2 的许多方面都被 Gatsby 的出色之处所启发，这是一个优秀的替代品。

[Docz](https://github.com/pedronauck/docz) 是一个 Gatsby 主题，用于搭建文档网站。 它的功能与 Docusaurus 相比要匮乏。

### Next.js {#nextjs}

[Next.js](https://nextjs.org/) 是另一款极为热门的 React 混合框架。 它可以帮助你构建出色的文档网站，但它并不着重于文档功能本身，而且需要你手动实现 Docusaurus 所自带的功能。

[Nextra](https://github.com/shuding/nextra) 是一款基于 Next.js 的静态站点生成器。 它的功能与 Docusaurus 相比要匮乏。

### VuePress {#vuepress}

[VuePress](https://vuepress.vuejs.org/) 与 Docusaurus 有许多共同点——都非常专注于以内容为中心的网站，且都提供量身定制的文档特性。 但是，VuePress 是 Vue 驱动的，而 Docusaurus 则是 React 驱动的。 如果你想要一个基于 Vue 的解决方案，VuePress 是个不错的选择。

### MkDocs {#mkdocs}

[MkDocs](https://www.mkdocs.org/) 是一款受欢迎的 Python 静态站点生成器，其设计理念与 Docusaurus 类似。

如果你不需要单页应用，也不打算利用 React 的话，这是个好选择。

[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) 是一款很好看的主题。

### Docsify {#docsify}

[Docsify](https://docsify.js.org/) 让你能轻松创建文档网站，但它并不是一款静态网站生成器，而且对搜索引擎不太友好。

### GitBook {#gitbook}

[GitBook](https://www.gitbook.com/) 的设计清爽，诸多开源项目都在使用。 但随着它把重点逐渐从开源工具转向商业产品，它不再符合开源项目文档网站的需要。 结果就是，许多项目转用了其他产品。 你也许在[这里](https://github.com/reduxjs/redux/issues/3161)听说过 Redux 转投 Docusaurus 怀抱的事情。

目前，GitBook 只对开源和非营利团队免费。 Docusaurus 则对所有人免费。

### Jekyll {#jekyll}

在市面上的静态网站生成器中，[Jekyll](https://github.com/jekyll/jekyll) 是最成熟而优秀的之一——实际上，在 Docusaurus 诞生之前，Facebook 的绝大多数开源站点都是用 Jekyll 构建的！ 它的上手难度极低。 在静态网站构建方面，我们想要为你带来和 Jekyll 类似的开发者体验。

相比于静态生成 HTML，再通过 `<script />` 标签实现交互，Docusaurus 网站本身就是一个 React 应用。 我们希望借由现代化 JavaScript 生态系统工具，在文档站点性能、资源构建系统，优化和易部署性等领域制定新标准。

## 了解最新消息 {#staying-informed}

- [GitHub](https://github.com/facebook/docusaurus)
- [Twitter](https://twitter.com/docusaurus)
- [博客](/blog)
- [Discord](https://discord.gg/docusaurus)

## 缺点什么？ {#something-missing}

如果你发现文档存在问题，或者有改进文档或项目的建议，请向我们[提 issue](https://github.com/facebook/docusaurus)，或者在 Twitter 上 [@docusaurus](https://twitter.com/docusaurus)。

对于新功能请求，你可以在我们的 [Canny 需求管理板](/#)上创建一个帖子。Canny 是一个方便的路线图管理工具，可以将需求按照赞同票数量降序排序， 与 GitHub issue 相比，我们团队能够更好地了解什么新功能的需求更高，而 GitHub issue 更难标明这点。 请尽量避免提交新功能的合并请求 (Pull Request)，尤其是大改动，因为可能已经有人在着手实现它了，或者这个功能可能是我们未来规划的一部分。 总之，请先联系我们！
