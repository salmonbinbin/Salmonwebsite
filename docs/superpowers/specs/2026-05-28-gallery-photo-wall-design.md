# 照片墙设计文档

## 概述

在个人网站中新增「照片墙」页面，展示 Salmon 参加各类活动的照片与经历文章。以经典瀑布流布局呈现，按主题分区，点击活动卡片弹出照片轮播与文章。

## 路由与导航

- 路由：`/gallery`
- Navbar 新增「照片墙」导航项，位于「写作」和「关于」之间
- 首页可选：在 Timeline 下方加照片墙预览区（展示最近 3-4 个活动封面）

## 主题分类

基于用户实际经历，分为两个主题：

| 主题 | 对应活动 | 照片来源 |
|------|----------|----------|
| 夏校/冬校 | 2025 杭州云谷夏校、2025 广州民心港人子弟学校夏校、2026 民心+三亚冬校 | `25Hangzhou summer school/`、`25minxin sumer school/`、`26minxin and sanya winter school/` |
| 志愿者/公益 | 共青团新会区义工联朝阳行动等 | `volunteer and friends/` |

## 数据结构

### `src/data/gallery.json`

```json
[
  {
    "id": "hangzhou-summer-2025",
    "theme": "夏校/冬校",
    "title": "2025 杭州云谷夏校",
    "date": "2025-07",
    "summary": "在杭州云谷学校参与教学实践与文化交流...",
    "content": "完整文章，支持 ## 标题和 **加粗** 标记",
    "coverIndex": 0,
    "photos": [
      { "src": "/gallery/hangzhou-summer-1.jpg", "alt": "描述" }
    ]
  }
]
```

字段说明：
- `id`：URL 友好的 slug
- `theme`：主题分类，用于筛选和 tag pill 颜色映射
- `title`：活动标题
- `date`：YYYY-MM 格式，用于排序
- `summary`：卡片上显示的摘要（1-2 句）
- `content`：弹窗中展开的完整文章（复用 WritingDetail 的 markdown 渲染逻辑）
- `coverIndex`：photos 数组中作为封面的索引
- `photos`：照片数组，每张有 src 和 alt

### 照片存放

照片从 `/Users/salmon/Desktop/pthoto/` 迁移到 `public/gallery/`，按活动重命名：
- `hangzhou-summer-1.jpg` ~ `hangzhou-summer-14.jpg`
- `minxin-summer-1.jpg` ~ `minxin-summer-12.jpg`
- `minxin-sanya-winter-1.jpg` ~ `minxin-sanya-winter-36.jpg`
- `volunteer-1.jpg` ~ `volunteer-20.jpg`

## 页面布局

### Gallery 页面

```
┌─────────────────────────────────────────────┐
│  照片墙                                      │
│  记录每一段值得回味的经历                      │
│                                              │
│  [全部] [夏校/冬校] [志愿者/公益]              │
│                                              │
│  ── 夏校/冬校 ────────────────────────────── │
│                                              │
│  ┌────┐  ┌────────┐  ┌────┐  ┌────────┐    │
│  │ ▓▓ │  │  ▓▓▓▓  │  │ ▓▓ │  │  ▓▓▓▓  │    │
│  │ ▓▓ │  │  ▓▓▓▓  │  │ ▓▓ │  │  ▓▓▓▓  │    │
│  │ ▓▓ │  │  ▓▓▓▓  │  └────┘  └────────┘    │
│  └────┘  │  ▓▓▓▓  │  ┌────────┐             │
│  ┌────┐  └────────┘  │  ▓▓▓▓  │             │
│  │ ▓▓ │              └────────┘             │
│  └────┘                                      │
│                                              │
│  ── 志愿者/公益 ──────────────────────────── │
│                                              │
│  ┌────────┐  ┌────┐  ┌────────┐             │
│  │  ▓▓▓▓  │  │ ▓▓ │  │  ▓▓▓▓  │             │
│  └────────┘  └────┘  └────────┘             │
└─────────────────────────────────────────────┘
```

布局实现：CSS `columns: 3`（桌面）→ `columns: 2`（平板）→ `columns: 1`（手机），`break-inside: avoid` 防止卡片被截断。

### 活动卡片（瀑布流中的单元）

采用「照片堆叠 + 标题」方案：
- 主照片用 `border-2 border-fg` + `shadow-card`
- 背后 1-2 张叠放的小照片角（CSS offset），暗示照片组
- 底部显示标题 + theme 彩色 tag pill
- 悬停：`animate-wiggle` + 阴影加深

### 弹窗（GalleryModal）

点击活动卡片后弹出：
- 背景遮罩（`bg-fg/60 backdrop-blur-sm`）
- 弹窗容器：`border-2 border-fg rounded-2xl shadow-card`，最大宽度 `max-w-3xl`
- 顶部：照片轮播（左右箭头 + 底部指示点），支持键盘左右箭头
- 中间：活动标题 + theme 标签 + 日期
- 下方：文章摘要默认展示，点击「展开全文 ▼」展开完整内容
- 关闭：右上角 X 按钮 / ESC 键 / 点击遮罩
- 动画：Framer Motion `AnimatePresence`，缩放+淡入

## 组件拆分

| 组件 | 文件 | 职责 |
|------|------|------|
| `Gallery` | `src/pages/Gallery.jsx` | 页面主组件，主题筛选 + 瀑布流布局 |
| `PhotoCard` | `src/components/PhotoCard.jsx` | 瀑布流中的活动卡片（堆叠照片+标题） |
| `GalleryModal` | `src/components/GalleryModal.jsx` | 弹窗，照片轮播 + 文章展示 |
| `ImageCarousel` | `src/components/ImageCarousel.jsx` | 照片轮播子组件（箭头+指示点） |

## 样式规范

完全复用现有设计系统：
- 边框：`border-2 border-fg`
- 阴影：`shadow-card`（静态）、`shadow-pop`（悬停）
- 圆角：`rounded-2xl`
- Theme 颜色：夏校/冬校 = amber（tertiary）、志愿者 = emerald（quaternary）
- 动画：`animate-wiggle`（卡片悬停）、`animate-float`（装饰元素）
- 字体：`font-heading`（标题）、`font-body`（正文）
- SectionWrapper 包裹页面

## 文章渲染

复用 `WritingDetail.jsx` 中的 markdown-like 渲染逻辑：
- `\n\n` 分段
- `## ` 开头为标题
- `**text**` 为加粗（accent 色）

提取为共用工具函数 `src/utils/renderContent.jsx`。

## 交互细节

1. 主题筛选：点击 tag pill 过滤，「全部」显示所有主题
2. 卡片悬停：wiggle 动画 + 阴影变化
3. 弹窗入场/退场：Framer Motion 缩放动画
4. 轮播：左右箭头切换，底部指示点可点击，键盘左右箭头支持
5. 文章展开：默认显示摘要，点击展开按钮显示全文，按钮变为「收起 ▲」
6. 弹窗关闭：X / ESC / 点击遮罩

## 实现步骤

1. 迁移照片到 `public/gallery/`，按活动重命名
2. 创建 `gallery.json` 数据文件
3. 提取 `renderContent` 工具函数
4. 实现 `ImageCarousel` 组件
5. 实现 `GalleryModal` 组件
6. 实现 `PhotoCard` 组件
7. 实现 `Gallery` 页面
8. 更新路由和 Navbar
9. 可选：首页照片墙预览区
