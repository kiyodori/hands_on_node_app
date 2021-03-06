# 概要
これはNode.jsの学習用教材です。

最終的に、APIを使用して取得してきたデータをWebサービスとして公開できるようになります。
Node.js、Express、MySQLの入門書を読まれた方が、APIを使用して実際にWebサービスを開発される際の架け橋となることを想定しています。

※ 特定対象向けの教材のため、解説に不備が多いと思います。ご了承ください。
※ デバイスは Mac OS X を前提としています。

# 学習の進め方
`doc`の下に解説を載せています。

1から順に解説しています。
ファイル名の数値は、ブランチ名と同じになっています。`1.md`を読まれている際は、ブランチも`1`に切り替えると、その解説時のコードを見ることができます。

1から順に、実際に手を動かしながら進めてください。
正しいコードが分からなくなってしまった際は、ブランチを切り替えてコードを確認してみてください。

# アプリケーションの動かし方
以下のコマンドを実行することでアプリケーションを動かせます。

```
$ git clone https://github.com/kiyodori/hands_on_node_app.git
$ yarn install

# データベースを作成します
$ mysql -u root -p < config/db.sql

# マイグレーションを実行します
$ node_modules/.bin/sequelize db:migrate

# APIからデータを取得します
$ yarn support

# サーバーを起動します
$ yarn start
```

これでサーバーが起動しました。以下のURLにアクセスします。

```
http://localhost:3000/
```
