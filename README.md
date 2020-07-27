# photoViewer
URL：
http://tagfaphotoviewer.net/ 

## 狙い
- AWSで複数サービスを組み合わせたWebサイト作成
- フロントエンド基礎の学習

## 採用技術
- AWS(EC2,S3,Cognito,Route53)
- HTML,CSS,JavaScript

## 処理フロー
①HTTPアクセス

- Route53でFQDNの名前解決し、Webサーバ(Nginxが稼働)にアクセス

②認証情報取得

- CognitoのIDプールを作成し、S3の特定のBucketにのみアクセス可能なIAMを付与

③画像ファイルDL

- ②で作成したIDでS3へアクセス。画像を取得。

![構成図](https://white-stone-0e55e8d00.azurestaticapps.net/about/02.jpg)
