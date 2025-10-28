# ConvoyLife - Cloudflare Pages 部署指南

## 🚀 部署步骤

### 1. Cloudflare Pages 设置

在 Cloudflare Pages 中配置以下构建设置：

- **框架预设**: `Vite`
- **构建命令**: `npm run build`
- **构建输出目录**: `dist`
- **Node 版本**: `18` 或更高

### 2. 环境变量（可选）

如果需要，可以在 Cloudflare Pages 设置中添加环境变量。

### 3. 自动部署

每次推送到 GitHub main 分支时，Cloudflare Pages 会自动构建和部署。

## 📝 重要配置文件

### `public/_redirects`
```
/* /index.html 200
```
这个文件确保所有路由请求都被重定向到 index.html，使 React Router 正常工作。

### `vite.config.js`
包含正确的构建配置，确保资源路径正确。

## 🔧 本地测试

在推送到生产环境之前，可以本地测试构建：

```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 🌐 访问网站

部署完成后，您的网站将可以通过 Cloudflare Pages 提供的 URL 访问。

## ⚠️ 常见问题

### 页面空白
- ✅ 确保 `public/_redirects` 文件存在
- ✅ 检查 Cloudflare Pages 构建日志
- ✅ 确认构建输出目录设置为 `dist`

### 路由 404 错误
- ✅ `_redirects` 文件会处理所有 SPA 路由
- ✅ 确保使用了 BrowserRouter（已配置）

### 静态资源加载失败
- ✅ `vite.config.js` 中 `base: '/'` 确保正确的资源路径
- ✅ 检查浏览器控制台是否有错误

## 📞 支持

如有问题，请检查：
1. Cloudflare Pages 构建日志
2. 浏览器开发者工具控制台
3. 网络请求面板

