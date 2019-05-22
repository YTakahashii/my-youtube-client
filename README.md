# My YouTube Client

技術習得と redux-saga と TypeScript を使った実装をプロジェクトメンバーに伝えるために作成した YouTube クライアントです。

本家に近づけることが目標。

## セットアップ

1. [YouTube API 承認の認証情報を取得する](https://developers.google.com/youtube/registering_an_application?hl=ja)を参考に、YouTubeAPI の API KEY を取得します。
1. `.env`をプロジェクト直下に作成し、`REACT_APP_YOUTUBE_API_KEY`にセットします。（参考：`.example.env`）

## 使用している API

[YouTube Data API (v3)
Search: list](https://developers.google.com/youtube/v3/docs/search/list?hl=ja)

## 更新履歴

- キーワード検索で最新 20 件の動画リストを表示 (2019-05-23)
  [![Image from Gyazo](https://i.gyazo.com/e01acdef145648f418ea1fcf39989a92.gif)](https://gyazo.com/e01acdef145648f418ea1fcf39989a92)

## Future work

- アプリ内での動画再生
- React-Router による適切なルーティング
- OAuth を使ったログイン
- その他色々
