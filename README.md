# jiafei-36 的个人主页

全新制作的中文个人综合主页。原生 HTML、CSS 和 JavaScript，无构建依赖。适配手机和电脑，支持浅色与深色主题、键盘导航及减少动画偏好。不含统计跟踪脚本。

## 文件

- `index.html`：个人首页的介绍、探索方向、随笔列表与联系入口。
- `styles.css`：配色、排版和响应式布局。
- `theme.js`、`script.js`：主题记忆与切换。
- `notes/a-new-start.html`：第一篇开篇随笔。
- `404.html`：找不到页面时的提示。
- `favicon.svg`：网站图标。
- `.nojekyll`：让 GitHub Pages 直接发布静态文件。

## 发布到 GitHub Pages

1. 在 `jiafei-36` 账号下新建公开仓库 `jiafei-36.github.io`。
2. 将本目录中的网站文件放到仓库的根目录，提交到 `main` 分支。
3. 进入仓库 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. 选择 `main` 分支与 `/ (root)`，点击 **Save**。
6. 等待 GitHub Pages 发布完成，访问 `https://jiafei-36.github.io/`。

## 日常修改

直接编辑 `index.html` 里的文字。添加随笔时，复制 `notes/a-new-start.html`，更改标题、日期与正文，再在首页的 `journal` 区域添加链接。

首版使用昵称 `jiafei-36` 和 GitHub 联系链接。没有填入未经确认的学历、职业、项目经历或联系方式。首页介绍与开篇随笔为可修改的初稿。
