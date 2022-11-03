# Tokyo Web3 Hackathon NFT部門 「Compost Project in India」

本リポジトリでは、「Compost Project in India」プロジェクトのフロントエンド機能を作成。
バックエンドのスマートコントラクトはthirdweb、データ保存用NoSQLサービスはFirebaseを用いて構築。

## Information
### 使用したtech stacks

 - フロントエンド開発言語：Typescript
 - JavaScriptフレームワーク：[Next.js](https://nextjs.org/)
 - スマートコントラクト開発：[thirdweb](https://thirdweb.com/)
 - NoSQLデータベース: Firestore

### 使用したBlockchain
 - goerli testnet

### deployしたContract
 - NFT発行用SmartContract Address： 0xEb06a00E9d0D3646098f4100b15a01221db27Ba8
 - Token発行用SmartContract Address：0x1C1cBD89F147e65580485E0E9919F42E682A9bE9

### テスト手順を含むリポジトリへのリンク
ブラウザから以下URLにアクセスして操作を行ってください。

https://makishy-dapps.web.app/

スマートコントラクトはgoerli testnet上に構築しています。
NFT取得およびトークン交換時にはガス代を要求されるため、GoerliETHを事前に取得しておく必要があります。

注）上記URLは本ハッカソン用に構築した期間限定のURLです。大量アクセスがあると課金を伴うためアクセスを停止させる可能性があります。利用は本ハッカソンの審査目的に留めてください。