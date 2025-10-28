# 🚀 ConvoyLife - Cloudflare Pages 完整部署指南

## ⚠️ 重要：Cloudflare Pages 构建设置

### 第一步：检查 Cloudflare Pages 设置

登录 Cloudflare Dashboard → Pages → 您的项目 → Settings → Builds & deployments

**必须确保以下设置正确：**

| 设置项 | 值 | 重要性 |
|--------|-----|--------|
| **Framework preset** | `None` 或 `Vite` | ⭐⭐⭐ |
| **Build command** | `npm run build` | ⭐⭐⭐ |
| **Build output directory** | `dist` | ⭐⭐⭐ |
| **Root directory** | `/` (留空) | ⭐⭐⭐ |
| **Node version** | `18` 或 `20` | ⭐⭐ |

---

## 🔍 问题排查清单

### 1. 检查构建日志

访问：Cloudflare Pages → 您的项目 → Deployments → 最新部署

**查看是否有以下错误：**
- ❌ `Build failed` - 构建失败
- ❌ `Command not found` - 命令未找到
- ❌ `Module not found` - 模块缺失
- ✅ `Success` - 构建成功

**如果构建失败，可能的原因：**
1. Node 版本太低（需要 18+）
2. 构建命令错误
3. 输出目录错误

---

### 2. 检查部署状态

在 Cloudflare Pages 的 Deployments 页面：

**成功的部署应该显示：**
- ✅ Status: **Active**
- ✅ Build time: **~30s - 2min**
- ✅ 文件数量: **~10+ files**

**如果显示：**
- ❌ Status: **Failed** → 查看构建日志
- ❌ Files: **0 files** → 输出目录设置错误
- ❌ Build time: **<5s** → 构建命令未执行

---

### 3. 检查访问URL

Cloudflare Pages 提供的 URL 格式：
- ✅ 正确：`https://your-project.pages.dev`
- ✅ 正确：`https://your-custom-domain.com`
- ❌ 错误：直接访问子路径会404（HashRouter已解决）

**访问时请：**
1. 访问根路径：`https://your-project.pages.dev`
2. 应该自动重定向到：`https://your-project.pages.dev/#/`
3. 看到 ConvoyLife 网站

---

### 4. 如果看到404页面

**可能的原因：**

#### A. 构建输出目录错误
在 Cloudflare Pages 设置中，确保：
```
Build output directory = dist
```
**不是** `build`，**不是** `public`，**不是** `/dist`，是 `dist`

#### B. 构建失败但部署了旧版本
1. 删除当前部署
2. 重新触发部署
3. 确保构建成功

#### C. 没有 index.html
检查 Cloudflare 构建日志中是否有：
```
✓ dist/index.html created
```

---

## 📝 完整部署步骤

### 方法1：通过 Cloudflare Dashboard（推荐）

#### Step 1: 创建新项目
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Pages**
3. 点击 **Create a project**
4. 选择 **Connect to Git**
5. 授权并选择您的 GitHub 仓库：`kydomain1/ConvoyLife`

#### Step 2: 配置构建设置
```
Project name: convoylife
Production branch: main
Framework preset: None (或 Vite)
Build command: npm run build
Build output directory: dist
Root directory: (留空)
```

#### Step 3: 环境变量（可选）
无需设置环境变量

#### Step 4: 保存并部署
点击 **Save and Deploy**

等待构建完成（约1-2分钟）

#### Step 5: 访问网站
构建成功后会显示：
```
https://convoylife.pages.dev
```
点击访问！

---

### 方法2：检查现有部署

如果已经创建了项目但不工作：

1. **进入项目设置**
   - Cloudflare Pages → 您的项目 → Settings

2. **检查 Builds & deployments**
   - Build command: `npm run build` ✅
   - Build output directory: `dist` ✅
   
3. **重新部署**
   - 进入 Deployments 标签
   - 点击最新部署右侧的 ⋯
   - 选择 **Retry deployment**

4. **查看构建日志**
   - 等待构建完成
   - 点击部署查看详细日志
   - 确保没有错误

---

## 🐛 常见错误及解决方案

### 错误1: "Build failed: npm not found"
**解决方案：**
在 Settings → Environment variables 添加：
```
NODE_VERSION = 18
```

### 错误2: "Build output directory is empty"
**解决方案：**
检查 Build output directory 设置为 `dist`（不是 `/dist`）

### 错误3: "404 Page Not Found"
**解决方案：**
1. 确认访问的是根路径（如 `yoursite.pages.dev`）
2. 清除浏览器缓存（Ctrl+Shift+R）
3. 检查构建是否成功
4. 确认 dist/index.html 存在

### 错误4: "白屏/空白页"
**解决方案：**
1. 按 F12 打开开发者工具
2. 查看 Console 是否有 JavaScript 错误
3. 查看 Network 是否有资源加载失败
4. 确认使用了 HashRouter（已完成）

---

## ✅ 验证部署成功

访问您的网站后，检查：

1. ✅ 能看到 ConvoyLife logo 和导航栏
2. ✅ 能看到首页的文章卡片
3. ✅ 点击文章能正常打开
4. ✅ URL 格式为 `yoursite.com/#/blog/article-name`
5. ✅ 所有图片正常显示
6. ✅ 社交媒体图标可点击

---

## 📞 还是不行？

### 请提供以下信息：

1. **Cloudflare 构建日志**
   - 截图或复制最后50行日志

2. **当前设置**
   - Build command: ?
   - Build output directory: ?
   - Framework preset: ?

3. **浏览器控制台错误**
   - 按 F12，截图 Console 标签
   - 截图 Network 标签

4. **访问的URL**
   - 您访问的完整URL是什么？

---

## 🎯 预期结果

**构建成功后：**
- 访问 `https://your-project.pages.dev`
- 自动重定向到 `https://your-project.pages.dev/#/`
- 看到完整的 ConvoyLife 博客网站
- 所有功能正常工作

---

## 💡 提示

- HashRouter 已启用，不再依赖服务器配置
- 每次 push 到 GitHub main 分支都会自动部署
- 可以在 Cloudflare Dashboard 查看部署历史
- 支持自定义域名

**部署应该在2分钟内完成！**

