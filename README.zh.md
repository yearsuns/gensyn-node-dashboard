**Language / 语言**: [English](./README.md) | [中文](#)

# Gensyn 节点面板

用于查看 Gensyn 分布式计算网络节点信息的 Web 仪表盘。

## 功能特性

- 🔍 通过 PeerId 搜索节点（支持多个 PeerId）
- 📊 查看节点关键指标（参与度、奖励、获胜次数）
- 🌐 多语言支持（12 种语言：英语、中文、日语、韩语、法语、德语、西班牙语、越南语、乌克兰语、印地语、俄语、土耳其语）
- 🎨 科技感 UI 设计，采用玻璃态效果

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript 5.x
- **UI**: React 18+ (Client Components)
- **区块链**: viem + Multicall3
- **样式**: Tailwind CSS v4
- **国际化**: 自定义 LanguageContext
- **包管理器**: pnpm

## 快速开始

### 前置要求

- Node.js 18+
- pnpm (推荐)

### 安装 pnpm

```bash
npm install -g pnpm
# 或使用 corepack
corepack enable
corepack prepare pnpm@latest --activate
```

### 安装依赖

```bash
pnpm install
```

### 配置环境变量

创建 `.env.local` 文件并填入配置：

```bash
# 创建 .env.local 文件
touch .env.local
```

编辑 `.env.local` 文件，填入以下配置：

```env
# Gensyn 网络 RPC 地址（必需）
NEXT_PUBLIC_GENSYN_RPC_URL=https://rpc.gensyn.network

# 节点注册合约地址（必需）
NEXT_PUBLIC_NODE_REGISTRY_ADDRESS=0x你的合约地址

# Multicall3 合约地址（必需）
NEXT_PUBLIC_MULTICALL3_ADDRESS=0x你的Multicall3合约地址
```

**重要**: 
- 所有环境变量都是**必需的**，必须正确配置才能运行应用。
- 统一使用 `NEXT_PUBLIC_` 前缀，客户端和服务端代码都可以读取（避免重复配置）。
- 所有 `NEXT_PUBLIC_` 前缀的环境变量会在构建时注入到客户端代码中。
- 如果环境变量未配置，应用启动时会显示明确的错误提示。

**提示**: 可以参考项目根目录下的 `.env.example` 文件作为配置模板。

### 启动开发服务器

```bash
pnpm dev
```

应用将在 `http://localhost:3000` 启动。

## 开发

### 代码质量

```bash
# 代码检查
pnpm lint

# 类型检查
pnpm type-check
```

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 项目结构

```
app/                    # Next.js App Router 页面
components/             # React 组件
  ui/                  # UI 组件
lib/                    # 工具函数和库
  blockchain/          # 区块链交互逻辑
  utils/               # 工具函数
  i18n/                # 国际化配置
types/                 # TypeScript 类型定义
```

## License

See [LICENSE](./LICENSE) file.

