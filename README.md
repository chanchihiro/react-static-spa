react-static-spa
---

### はじめに

react + redux + pug + scssで作る静的ページです <br>
以下のページを参考にさせていただいています。 	<br>
( https://github.com/jkazama/sample-ui-react )


#### ビルド/テスト稼働環境構築

`npm install -g gulp`
`npm install -g yarn`
`yarn`

### 動作確認

動作確認は以下の手順で行ってください。

`gulp`
    - 確認用のブラウザが自動的に起動する。うまく起動しなかったときは 「 http://localhost:3000 」 へアクセス

### 開発の流れ

基本的にテンプレート ( .pug / .scss / .js ( Babel ) ) を Web リソース ( .html / .css / .js ) へ Gulp / Webpack でリアルタイム変換させながら開発をしていきます。  
動作確認は Gulp で独自に Web サーバを立ち上げた後、ブラウザ上で行います。  

### 配布用ビルドの流れ

配布リソース生成の流れは開発時と同様ですが、監視の必要が無いことと、配布リソースに対する minify や revison の付与などを行う必要があるため、別タスク （ build-prod ） で実行します。

#### ビルド / リリース

`gulp build-prod`
`public` ディレクトリ直下に出力されたファイルをリリース先のディレクトリへコピー


### 依存ライブラリ

| ライブラリ           | 用途 |
| ----------------------- | ------------- |
| `react`　　　　　　　　　  | アプリケーションの UI 機能を提供 |
| `react-dom`　　　　　　　  | アプリケーションの UI 機能 ( DOM ) を提供 |
| `react-router-dom`        | 4.2.+    | React.js の SPA ルーティングサポート |
| `react-tap-event-plugin` | タップ操作のサポート |
| `redux`                   | Flux 風な状態/イベント概念をサポート |
| `react-router-redux`      | Redux の状態モデルに対応した react-router |
| `material-ui`              | マテリアルデザインな UI ライブラリ |
| `lodash` 　　　　　　　　  | 汎用ユーティリティライブラリ |
| `dateformat`　　　　　　   | 日時ライブラリ |
| `superagent`             | HTTP 連携ライブラリ |

### License

本サンプルのライセンスはコード含めて全て *MIT License* です。  
プロジェクト立ち上げ時のベース実装サンプルとして気軽にご利用ください。
