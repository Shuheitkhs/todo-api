# Todo アプリ README

このプロジェクトでは、フロントエンドは Next.js/React を使用し、バックエンドは JSON Server を使用して簡易な Todo アプリを構築します。REST API の作り方とフロントエンドの連携を学ぶ初心者向けの内容です。

フロントエンドのリポジトリ
https://github.com/Shuheitkhs/todo-app-node

## プロジェクト概要

- **フロントエンド**: Next.js/React を使って UI を構築します。
- **バックエンド**: JSON Server を使って簡易的な REST API を提供します。

このプロジェクトを通して、Node.js を使った簡単な CRUD 操作を行う API 設計を学びましょう！

## 環境セットアップ

### 前提条件

- Node.js がインストールされていること。
- Git がインストールされていること。

### リポジトリのクローン

1. GitHub からリポジトリをクローンします。
   ```bash
   git clone https://github.com/Shuheitkhs/todo-api
   cd todo-app
   ```

### バックエンドのセットアップ（JSON Server）

1. **JSON Server のインストール**

   - JSON Server をインストールします。

   ```bash
   npm install -g json-server
   ```

2. **JSON Server の起動**

   - プロジェクトディレクトリ内に `db.json` ファイルを用意してください。このファイルが簡易的なデータベースになります。

   ```db.json
   {
     "todos": [
       {
         "id": "1730817762442",
         "text": "jsonサーバー",
         "completed": false
       },
       {
         "text": "PUTメソッド・保存",
         "completed": false,
         "id": "1730819961300"
       }
     ]
   }
   ```

   - JSON Server を使用してローカルサーバーを起動します。

   ```bash
   json-server --watch db.json --port 4000
   ```

   - サーバーが起動すると、`http://localhost:4000/todos` でデータにアクセスできます。

### フロントエンドのセットアップ（Next.js/React）

1. **依存関係のインストール**

   - フロントエンドの依存関係をインストールします。

   ```bash
   cd frontend
   npm install
   ```

2. **環境変数の設定**

   - フロントエンドからバックエンドの API にアクセスするために、`.env.local` ファイルを作成します。

   ```
   NEXT_PUBLIC_API_URL=http://localhost:4000
   ```

3. **開発サーバーの起動**
   - フロントエンドの開発サーバーを起動します。
   ```bash
   npm run dev
   ```
   - ブラウザで `http://localhost:3000` にアクセスし、Todo アプリを確認できます。

## 機能説明

- **Todo の追加**: フォームから新しい Todo を追加します。
- **Todo の表示**: JSON Server から取得した Todo をリスト表示します。
- **Todo の更新**: Todo の状態（完了/未完了）を更新します。
- **Todo の削除**: 不要な Todo を削除します。

## JSON Server エンドポイント

- **GET /todos**: Todo リストを取得します。
- **POST /todos**: 新しい Todo を追加します。
- **PUT /todos/:id**: 既存の Todo を更新します。
- **DELETE /todos/:id**: Todo を削除します。

## よくあるエラーと対処法

**ポートがすでに使用されています**

- JSON Server や開発サーバーが別のプロセスで使用中の場合があります。ポート番号を変更するか、不要なプロセスを停止してください。

## 今後の学習ポイント

- このアプリを使って、API の仕組みやフロントエンドとのやり取りを理解できたと思います。
- 次回は、このアプリを Vercel や Render を使ってデプロイし、誰でもアクセスできるようにする予定です。

## 貢献

このプロジェクトは自由にフォークして学習用途で使用してください。改善点があればプルリクエストを歓迎します！

## ライセンス

MIT ライセンスのもとで公開しています。
