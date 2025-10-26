# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

このプロジェクトは、Cloudflare Pages上で動作するHonoベースのWebアプリケーションです。ViteをビルドツールとしてTypeScriptで記述され、JSXレンダリング機能を含みます。

## 開発コマンド

### 開発サーバーの起動

```bash
npm run dev
```

Vite開発サーバーが起動し、Cloudflareアダプターを使用してローカル環境でWorkerをエミュレートします。

### ビルド

```bash
npm run build
```

Viteを使用してプロダクション用のビルドを生成します。

### プレビュー

```bash
npm run preview
```

Wrangler Pages開発サーバーでビルド済みアプリケーションをプレビューします。

### デプロイ

```bash
npm run deploy
```

ビルドを実行してから、Wrangler Pages経由でCloudflareにデプロイします。

### 型生成

```bash
npm run cf-typegen
```

Worker設定に基づいて`CloudflareBindings`型を生成/同期します。

## アーキテクチャ

### フレームワーク構成

- **Honoフレームワーク**: エッジランタイム向けの軽量Webフレームワーク
- **Vite**: 開発サーバーとビルドツール
- **Cloudflare Pages**: デプロイ先プラットフォーム

### ディレクトリ構造

- `src/index.tsx`: メインアプリケーションエントリーポイント。Honoアプリケーションの初期化とルート定義
- `src/renderer.tsx`: JSXレンダラー設定。HTML全体のレイアウトを定義
- `public/static/`: 静的アセット（CSS等）
- `dist/`: ビルド出力ディレクトリ（Viteにより生成）

### JSXレンダリング

- `tsconfig.json`で`jsxImportSource`として`hono/jsx`を使用
- `jsxRenderer`ミドルウェアでHTMLレイアウトをラップ
- `c.render()`メソッドでコンポーネントをレンダリング

### Cloudflare Bindings

型安全性を確保するため、Honoインスタンス作成時にジェネリクスとして`CloudflareBindings`を渡すこと:

```typescript
const app = new Hono<{ Bindings: CloudflareBindings }>()
```

## 開発環境

- **Node.js**: 22.21.0（mise.tomlで管理）
- TypeScriptのstrictモードが有効
