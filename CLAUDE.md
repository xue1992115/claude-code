# CLAUDE.md

本文档为 Claude Code (claude.ai/code) 在此仓库中工作时提供指引。

## 项目概述

这是一个个人项目，包含基于 HTML5 Canvas 构建的**粒子动画系统**。支持多种交互式动画模式，具有鼠标/触控交互和配色方案切换功能。所有动画逻辑均包含在单个 HTML 文件中。

## 关键文件

- `particle-animation.html` — 主项目文件：交互式粒子动画，包含 5 种模式（流动、星座、漩涡、萤火、彩虹）和 4 种配色方案（极光、落日、森林、霓虹）。使用 Canvas 2D 径向渐变发光效果、粒子轨迹和星座式连线绘制。

## 常用命令

```bash
# 在浏览器中打开动画
open particle-animation.html

# 运行 Python 测试脚本
python3 test.py
```

## 架构

粒子动画通过单个 IIFE（立即调用函数表达式）构建在 `particle-animation.html` 中：

- **Particle 类** — 每个粒子包含位置、速度、色相/饱和度/亮度/透明度、轨迹历史记录，以及与模式相关的行为方法（`updateFlow`、`updateConstellation`、`updateVortex`、`updateFirefly`、`updateRainbow`）。粒子根据模式进行大小脉冲和发光。

- **动画循环** (`requestAnimationFrame`) — 清空画布，根据当前模式更新所有粒子，在适用时绘制星座连线，并渲染鼠标光晕叠加层。

- **配色方案** — 4 种配色方案定义为色相数组 + 背景色，通过按钮或 `C` 键循环切换。

- **控制** — 底部工具栏按钮切换模式；点击切换配色方案。键盘快捷键：`1`-`5` 键切换模式，`C` 键切换配色。

## 开发说明

- 动画为单文件项目 — 无构建工具、打包工具或依赖项。
- 所有渲染使用 `hsla()` 颜色字符串实现粒子发光和轨迹效果。
- 粒子密度在窗口大小变化时根据视口计算（`W*H / 8000`，限制在 60–300 之间）。
- 同时支持触控事件和鼠标事件，实现移动端兼容。

## 项目约定

### Vue 组件规范

- **Vue 组件统一使用 `<script setup>` 语法糖**，禁止使用选项式 API（`export default { data, methods, ... }`）。
- 组合式函数（composables）优先于 mixins。

### 接口请求

- 所有接口请求统一封装使用项目自带的 `request` 工具，禁止直接使用 `axios`、`fetch` 或其他 HTTP 客户端。
- 请求统一放在 `src/api/` 目录下管理。
