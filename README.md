# 个人简历网站

一个简洁、专业、功能完整的个人简历网站，专为大一新生设计，特别适合集成电路专业学生。

## ✨ 特性

- 🎨 **简洁设计**：极简风格，留白充分，视觉层次清晰
- 🌓 **双主题模式**：支持深色/浅色主题切换，自动适配系统偏好
- 📱 **完全响应式**：完美适配手机、平板、桌面设备
- ⚡ **纯原生实现**：无框架依赖，仅使用 HTML/CSS/JS
- 🎯 **专业展示**：针对集成电路专业优化的内容结构
- ♿ **无障碍支持**：语义化标签，键盘导航友好
- 🖨️ **打印友好**：优化的打印样式

## 📁 项目结构

```
resume-website/
├── index.html          # 主HTML文件
├── styles/
│   └── main.css       # 主样式文件（包含所有样式）
├── scripts/
│   └── main.js        # JavaScript功能文件
├── assets/
│   └── images/
│       └── avatar.jpg # 个人头像（需要自行添加）
├── favicon.ico        # 网站图标
└── README.md          # 本文件
```

## 🚀 快速开始

### 1. 下载项目

下载所有文件到本地目录。

### 2. 添加个人头像

将你的头像图片命名为 `avatar.jpg`，放在 `assets/images/` 目录下。

**如果没有头像**：网站会自动显示姓名首字母的占位符。

### 3. 自定义个人信息

打开 `index.html` 文件，找到以下部分并修改：

#### 个人信息（第47-52行）
```html
<h1 class="hero-name">谭浩</h1>
<p class="hero-title">Hao Tan</p>
<p class="hero-subtitle">湖北大学 · 集成电路设计与集成系统 · 大一学生</p>
<p class="hero-bio">
  专注于集成电路设计与EDA工具应用，对数字电路设计和芯片验证有浓厚兴趣。
  致力于通过实践项目提升专业技能，探索前沿技术。
</p>
```

#### 联系方式（第54-62行）
```html
<a href="mailto:1312616873@qq.com" ...>
<a href="tel:+8613755165615" ...>
```

#### 教育背景（第70-110行）
- 修改学校、专业、时间、GPA
- 更新相关课程列表
- 修改成就列表

#### 技能（第115-180行）
- 修改技能名称和百分比
- 更新EDA工具列表
- 修改软技能标签

#### 社交链接（第188-210行）
- 更新GitHub、LinkedIn等链接

### 4. 本地预览

#### 方法一：直接打开（简单）
直接双击 `index.html` 文件在浏览器中打开。

#### 方法二：使用本地服务器（推荐）
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (需要安装 http-server)
npx http-server
```

然后访问 `http://localhost:8000`

## 🎨 自定义样式

### 修改主题颜色

编辑 `styles/main.css` 文件，找到 `:root` 部分（第12-30行）：

```css
:root {
  --color-primary: #2563eb;        /* 主色调：深蓝色 */
  --color-primary-light: #3b82f6;  /* 主色浅色 */
  --color-accent: #10b981;          /* 强调色：绿色 */
  /* ... 其他颜色变量 */
}
```

修改这些变量值即可改变整个网站的颜色主题。

### 修改字体

在 `styles/main.css` 的 `body` 样式中（第55行）：

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', ...;
```

可以添加或修改字体。

### 修改间距

所有间距基于 `--spacing-unit: 8px`（第29行），可以修改这个值来调整整体间距。

## 📝 功能说明

### 主题切换
- 点击导航栏右侧的月亮/太阳图标切换主题
- 主题偏好会保存到浏览器本地存储
- 首次访问会自动检测系统主题偏好

### 响应式菜单
- 在移动设备上，点击右上角的三条横线图标打开/关闭菜单
- 点击菜单项或外部区域自动关闭菜单

### 平滑滚动
- 点击导航链接会平滑滚动到对应区域
- 自动考虑固定导航栏的高度偏移

### 技能进度条动画
- 当技能区域滚动到视口时，进度条会动画显示
- 使用 Intersection Observer API 实现

### 返回顶部按钮
- 向下滚动超过300px时显示
- 点击平滑滚动到页面顶部

## 🔧 常见问题

### Q: 头像不显示？
A: 确保头像文件名为 `avatar.jpg` 且放在 `assets/images/` 目录下。如果文件不存在，会自动显示姓名首字母占位符。

### Q: 如何修改技能百分比？
A: 在 `index.html` 中找到对应的技能项，修改两个地方：
1. `<span class="skill-level">85%</span>` 中的百分比
2. `<div class="skill-progress" style="width: 85%"></div>` 中的 width 值

### Q: 如何添加新的技能？
A: 复制一个现有的 `.skill-item` 块，修改技能名称和百分比即可。

### Q: 如何修改课程列表？
A: 在 `index.html` 中找到 `.courses-list`，添加或删除 `<li>` 项。

### Q: 邮箱链接不工作？
A: 确保 `href` 属性以 `mailto:` 开头，格式如：`mailto:your.email@example.com`

### Q: 如何部署到GitHub Pages？
1. 将所有文件推送到GitHub仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择主分支作为源
4. 访问 `https://yourusername.github.io/repository-name`

## 📱 浏览器支持

- Chrome/Edge (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- 移动浏览器 (iOS Safari, Chrome Mobile)

## 📄 许可证

MIT License - 可自由使用和修改

## 💡 扩展建议

### 可以添加的功能：
1. **项目展示区**：添加个人项目或课程项目
2. **证书/奖项区**：展示获得的证书和奖项
3. **博客链接**：如果有技术博客，可以添加链接
4. **PDF下载**：添加简历PDF下载功能
5. **多语言支持**：添加中英文切换

### 代码优化建议：
1. 将CSS拆分为多个模块文件
2. 使用CSS预处理器（如Sass）
3. 添加构建工具（如Webpack/Vite）进行代码压缩
4. 添加单元测试

## 🎓 学习资源

- [MDN Web Docs](https://developer.mozilla.org/) - Web开发文档
- [CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
- [Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

---

**提示**：这是一个教学项目，代码中包含详细注释，便于学习和修改。祝你学习愉快！🚀

