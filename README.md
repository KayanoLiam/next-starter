# Next Forge - Multilingual Next.js 15 Starter Template

🌍 **Languages**: [English](#english) | [中文](#中文) | [日本語](#日本語)

---

## English

A modern, feature-rich Next.js 15 multilingual starter template designed to help developers quickly build globally-ready websites with built-in internationalization support.

### ✨ Features

- 🌐 **Multilingual Support**: Built-in i18n with English, Chinese, and Japanese
- 🎨 **Modern UI**: Clean design with Tailwind CSS and Shadcn/ui components
- 🌙 **Theme Toggle**: Dark/Light mode with system preference detection
- 📱 **Responsive Design**: Mobile-first responsive layout
- 📝 **MDX Blog System**: Powerful blog system with MDX support
- 🔍 **SEO Optimized**: Comprehensive SEO with automatic sitemap and robots.txt
- 📊 **Analytics Ready**: Integrated support for multiple analytics platforms
- ⚡ **Performance**: Optimized for speed and Core Web Vitals
- 🛡️ **Type Safe**: Full TypeScript support with strict type checking

### 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nextjs-15-starter.git
   cd nextjs-15-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### ⚙️ Configuration

#### Basic Setup
- **Site Configuration**: Edit `config/site.ts` for website metadata
- **Assets**: Update logos and icons in `public/` directory
- **SEO**: Configure `app/sitemap.ts` and `app/robots.ts`

#### Internationalization
- **Languages**: Add/modify language files in `i18n/messages/`
- **Routing**: Configure supported locales in `i18n/routing.ts`
- **Middleware**: Set up locale detection in `middleware.ts`
- **Pages**: Create localized pages under `app/[locale]/`

#### Content Management
- **Blog Posts**: Create MDX files in `blogs/[locale]/`
- **Static Pages**: Manage content in `content/[page]/[locale].mdx`

### 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Internationalization**: next-intl
- **Content**: MDX with gray-matter
- **State Management**: Zustand
- **Analytics**: Vercel Analytics, Google Analytics, Baidu Analytics
- **Deployment**: Vercel

### 📄 License

MIT License - feel free to use this template for your projects.

---

## 中文

一个现代化、功能丰富的 Next.js 15 多语言启动模板，旨在帮助开发者快速构建具有内置国际化支持的全球化网站。

### ✨ 特性

- 🌐 **多语言支持**: 内置中文、英文、日语国际化
- 🎨 **现代化 UI**: 基于 Tailwind CSS 和 Shadcn/ui 的简洁设计
- 🌙 **主题切换**: 深色/浅色模式，支持系统偏好检测
- 📱 **响应式设计**: 移动端优先的响应式布局
- 📝 **MDX 博客系统**: 强大的 MDX 博客系统
- 🔍 **SEO 优化**: 全面的 SEO 优化，自动生成站点地图和 robots.txt
- 📊 **分析工具**: 集成多个分析平台支持
- ⚡ **性能优化**: 针对速度和核心网页指标优化
- 🛡️ **类型安全**: 完整的 TypeScript 支持和严格类型检查

### 🚀 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/your-username/nextjs-15-starter.git
   cd nextjs-15-starter
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   pnpm install
   # 或
   yarn install
   ```

3. **设置环境变量**
   ```bash
   cp .env.example .env.local
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

5. **打开浏览器**
   访问 [http://localhost:3000](http://localhost:3000)

### ⚙️ 配置

#### 基础设置
- **网站配置**: 编辑 `config/site.ts` 设置网站元数据
- **资源文件**: 更新 `public/` 目录中的 logo 和图标
- **SEO**: 配置 `app/sitemap.ts` 和 `app/robots.ts`

#### 国际化
- **语言文件**: 在 `i18n/messages/` 中添加/修改语言文件
- **路由配置**: 在 `i18n/routing.ts` 中配置支持的语言
- **中间件**: 在 `middleware.ts` 中设置语言检测
- **页面**: 在 `app/[locale]/` 下创建本地化页面

#### 内容管理
- **博客文章**: 在 `blogs/[locale]/` 中创建 MDX 文件
- **静态页面**: 在 `content/[page]/[locale].mdx` 中管理内容

### 🛠️ 技术栈

- **框架**: Next.js 15 with App Router
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: Shadcn/ui + Radix UI
- **国际化**: next-intl
- **内容**: MDX with gray-matter
- **状态管理**: Zustand
- **分析**: Vercel Analytics, Google Analytics, 百度统计
- **部署**: Vercel

### 📄 许可证

MIT 许可证 - 欢迎在您的项目中使用此模板。

---

## 日本語

グローバル対応のウェブサイトを素早く構築するための、国際化サポートが組み込まれた現代的で機能豊富な Next.js 15 多言語スターターテンプレートです。

### ✨ 主な機能

- 🌐 **多言語対応**: 英語、中国語、日本語の国際化サポート
- 🎨 **モダンな UI**: Tailwind CSS と Shadcn/ui によるクリーンなデザイン
- 🌙 **テーマ切り替え**: ダーク/ライトモード、システム設定検出対応
- 📱 **レスポンシブデザイン**: モバイルファーストのレスポンシブレイアウト
- 📝 **MDX ブログシステム**: 強力な MDX ブログシステム
- 🔍 **SEO 最適化**: 包括的な SEO、自動サイトマップと robots.txt 生成
- 📊 **アナリティクス対応**: 複数のアナリティクスプラットフォーム統合
- ⚡ **パフォーマンス**: 速度とコアウェブバイタルに最適化
- 🛡️ **型安全**: 完全な TypeScript サポートと厳密な型チェック

### 🚀 クイックスタート

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/your-username/nextjs-15-starter.git
   cd nextjs-15-starter
   ```

2. **依存関係のインストール**
   ```bash
   npm install
   # または
   pnpm install
   # または
   yarn install
   ```

3. **環境変数の設定**
   ```bash
   cp .env.example .env.local
   ```

4. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

5. **ブラウザで確認**
   [http://localhost:3000](http://localhost:3000) にアクセス

### ⚙️ 設定

#### 基本設定
- **サイト設定**: `config/site.ts` でウェブサイトのメタデータを編集
- **アセット**: `public/` ディレクトリのロゴとアイコンを更新
- **SEO**: `app/sitemap.ts` と `app/robots.ts` を設定

#### 国際化
- **言語ファイル**: `i18n/messages/` で言語ファイルを追加/編集
- **ルーティング設定**: `i18n/routing.ts` でサポートする言語を設定
- **ミドルウェア**: `middleware.ts` で言語検出を設定
- **ページ**: `app/[locale]/` 下にローカライズされたページを作成

#### コンテンツ管理
- **ブログ記事**: `blogs/[locale]/` で MDX ファイルを作成
- **静的ページ**: `content/[page]/[locale].mdx` でコンテンツを管理

### 🛠️ 技術スタック

- **フレームワーク**: Next.js 15 with App Router
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UI コンポーネント**: Shadcn/ui + Radix UI
- **国際化**: next-intl
- **コンテンツ**: MDX with gray-matter
- **状態管理**: Zustand
- **アナリティクス**: Vercel Analytics, Google Analytics, Baidu Analytics
- **デプロイ**: Vercel

### 📄 ライセンス

MIT ライセンス - このテンプレートをプロジェクトで自由にご利用ください。