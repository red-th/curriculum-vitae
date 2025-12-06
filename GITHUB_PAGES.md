# GitHub Pages 部署指南

## 🚀 部署步骤

### 1. 创建 GitHub 仓库

1. 在 GitHub 上创建一个新仓库（例如：`resume-website`）
2. 将本地文件推送到仓库：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

### 2. 启用 GitHub Pages

1. 进入仓库设置（Settings）
2. 在左侧菜单找到 "Pages"
3. 在 "Source" 部分选择：
   - **Branch**: `main` 或 `master`
   - **Folder**: `/ (root)`
4. 点击 "Save"
5. 等待几分钟，GitHub 会生成网站地址：`https://你的用户名.github.io/仓库名/`

## ⚠️ 常见问题解决

### 问题 1: 样式不显示（CSS 未加载）

**原因**: 路径问题，GitHub Pages 可能需要相对路径或仓库名前缀

**解决方案 A - 如果仓库在根目录**:
确保所有路径都是相对路径（当前已正确）：
- `styles/main.css` ✅
- `scripts/main.js` ✅
- `assets/images/avatar.jpg` ✅

**解决方案 B - 如果仓库在子目录**:
如果您的仓库名是 `resume-website`，需要修改路径：

在 `index.html` 中，将：
```html
<link rel="stylesheet" href="styles/main.css">
```
改为：
```html
<link rel="stylesheet" href="/resume-website/styles/main.css">
```

或者使用相对路径（推荐）：
```html
<link rel="stylesheet" href="./styles/main.css">
```

### 问题 2: 页面显示为纯文本

**原因**: GitHub Pages 可能在使用 Jekyll 处理

**解决方案**: 
已创建 `.nojekyll` 文件，确保它被推送到仓库：
```bash
git add .nojekyll
git commit -m "Add .nojekyll file"
git push
```

### 问题 3: 图片不显示

**检查**:
1. 确保 `assets/images/avatar.jpg` 文件存在
2. 如果图片不存在，网站会自动显示姓名首字母占位符
3. 检查图片文件大小（建议小于 1MB）

### 问题 4: JavaScript 功能不工作

**检查**:
1. 打开浏览器开发者工具（F12）
2. 查看 Console 标签页是否有错误
3. 检查 Network 标签页，确认 `main.js` 是否成功加载

## 🔧 快速修复检查清单

- [ ] 所有文件已推送到 GitHub
- [ ] `.nojekyll` 文件已创建并推送
- [ ] GitHub Pages 已启用（Settings > Pages）
- [ ] 选择了正确的分支（main 或 master）
- [ ] 等待了 1-2 分钟让 GitHub 处理
- [ ] 使用正确的 URL 访问（格式：`https://用户名.github.io/仓库名/`）

## 📝 路径修复脚本

如果样式仍然不显示，可以尝试以下修复：

### 方法 1: 使用绝对路径（推荐）

修改 `index.html` 第 16 行：
```html
<!-- 从 -->
<link rel="stylesheet" href="styles/main.css">
<!-- 改为 -->
<link rel="stylesheet" href="./styles/main.css">
```

修改 `index.html` 第 368 行：
```html
<!-- 从 -->
<script src="scripts/main.js"></script>
<!-- 改为 -->
<script src="./scripts/main.js"></script>
```

### 方法 2: 使用仓库名前缀

如果您的仓库名是 `resume-website`，修改为：
```html
<link rel="stylesheet" href="/resume-website/styles/main.css">
<script src="/resume-website/scripts/main.js"></script>
```

## 🧪 测试步骤

1. **本地测试**:
   ```bash
   # 使用 Python
   python -m http.server 8000
   # 访问 http://localhost:8000
   ```

2. **检查文件结构**:
   确保文件结构如下：
   ```
   仓库根目录/
   ├── index.html
   ├── .nojekyll
   ├── styles/
   │   └── main.css
   ├── scripts/
   │   └── main.js
   ├── assets/
   │   └── images/
   └── favicon.ico
   ```

3. **检查浏览器控制台**:
   - 按 F12 打开开发者工具
   - 查看 Console 是否有错误
   - 查看 Network 标签，确认所有资源都成功加载

## 💡 提示

- GitHub Pages 可能需要几分钟才能更新
- 清除浏览器缓存后刷新（Ctrl+F5 或 Cmd+Shift+R）
- 如果问题持续，检查仓库的 Actions 标签页，查看是否有构建错误

