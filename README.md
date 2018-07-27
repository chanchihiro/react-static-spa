react-static-spa
---

### はじめに

react + redux + pug + scssで作る静的ページです
以下のページを参考にさせていただいています。 	<br>
( https://github.com/jkazama/sample-ui-react )


#### ビルド/テスト稼働環境構築

ビルドは [Node.js](http://nodejs.jp/) + [Webpack](https://webpack.github.io/) + [Gulp](http://gulpjs.com/) + [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) で行います。以下の手順でインストールしてください。

1. Node.js の[公式サイト](http://nodejs.jp/)からインストーラをダウンロードしてインストール。
1. 「 `npm install -g gulp` 」 を実行して Gulp をインストール。
    - Mac ユーザは 「 `sudo npm install -g gulp` 」 で。
1. 「 `npm install -g yarn` 」を実行して Yarn をインストール。
    - Mac ユーザは 「 `sudo npm install -g yarn` 」 で。
    - インストール作業を npm 経由で直接実行する場合は不要です
1. コンソールで本ディレクトリ直下へ移動後、「 `yarn` 」を実行して `package.json` 内のライブラリをインストール
    - Yarn を利用しない時は 「 `npm install` 」 を実行。
    - node-sass あたりでビルドに失敗した場合は、 「 `npm uninstall node-sass` 」 を実行してから再度試してみてください。

### 動作確認

動作確認は以下の手順で行ってください。

1. コンソールで本ディレクトリ直下へ移動し、 「 `gulp` 」 を実行
    - 確認用のブラウザが自動的に起動する。うまく起動しなかったときは 「 http://localhost:3000 」 へアクセス

### 開発の流れ

基本的にテンプレート ( .pug / .scss / .js ( Babel ) ) を Web リソース ( .html / .css / .js ) へ Gulp / Webpack でリアルタイム変換させながら開発をしていきます。  
動作確認は Gulp で独自に Web サーバを立ち上げた後、ブラウザ上で行います。  

#### 各種テンプレートファイルの変更監視 / Web サーバ起動

+ コンソールで本ディレクトリ直下へ移動し、 「 `gulp` 」 を実行

### 配布用ビルドの流れ

配布リソース生成の流れは開発時と同様ですが、監視の必要が無いことと、配布リソースに対する minify や revison の付与などを行う必要があるため、別タスク （ build-prod ） で実行します。

#### 配布用 Web リソースのビルド / リリース

+ コンソールで本ディレクトリ直下へ移動し、 「 `gulp build-prod` 」 を実行
+ `public` ディレクトリ直下に出力されたファイルをリリース先のディレクトリへコピー


### 依存ライブラリ

| ライブラリ               | バージョン | 用途/追加理由 |
| ----------------------- | -------- | ------------- |
| `react`　　　　　　　　　  | 16.2.+    | アプリケーションの UI 機能を提供 |
| `react-dom`　　　　　　　  | 16.2.+    | アプリケーションの UI 機能 ( DOM ) を提供 |
| `react-router-dom`        | 4.2.+    | React.js の SPA ルーティングサポート |
| `react-tap-event-plugin`  | 3.0.+    | タップ操作のサポート |
| `redux`                   | 3.7.+     | Flux 風な状態/イベント概念をサポート |
| `react-router-redux`      | 5.0.+     | Redux の状態モデルに対応した react-router |
| `material-ui`             | 0.18.+    | マテリアルデザインな UI ライブラリ |
| `lodash` 　　　　　　　　  | 4.17.+    | 汎用ユーティリティライブラリ |
| `dateformat`　　　　　　   | 3.0.+    | 日時ライブラリ |
| `superagent`              | 3.8.+    | HTTP 連携ライブラリ |

### License

本サンプルのライセンスはコード含めて全て *MIT License* です。  
プロジェクト立ち上げ時のベース実装サンプルとして気軽にご利用ください。
