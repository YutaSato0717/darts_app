## アプリ概要（開発継続中）

## アプリ名「Aizu Darts」
<img width="250" alt="AizuDartsimage" src="https://github.com/YutaSato0717/House-Hunting/assets/109122250/38390b5f-3513-4aa8-bb76-50ccd6c30c18">

## コンセプト
所属しているダーツサークルで、部員のダーツ試合データを記録することを目的としたアプリ。
プレイヤーが記録していくことでサークル内ランキングやプレイヤーごとのレーティングが算出される。

## 使用言語・技術

### フロントエンド

- React（フレームワーク）
- javascript

### バックエンド

- Node.js
- javascript
- MySQL

## 機能

- ログイン機能
- プロフィール編集
- ゲーム結果記録（クリケット、01、カウントアップでそれぞれ）
- プレイヤーデータ表示（平均スタッツやレート等。できたらグラフで）
- ランキング表示（レーティングやスタッツ順にプレイヤー名を表示）

## コマンド類メモ

- MySQL開始: mysql -u root -p
- アプリ実行：yarn dev

## データベーステーブル一覧

|  | リクエスト |  |  | レスポンス |  |
| --- | --- | --- | --- | --- | --- |
| 処理の内容 | 変数名 | 型 | 必須 | 変数 | 型 |
| ユーザー情報 | Id(pk) | int | ○ | Id(pk) |  |
| users | name | string | ○ | name | string |
|  | password | string | ○ |  |  |
|  | grade | int |  | grade | int |
|  | email | string | ○ |  | string |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
| 01の中間テーブル | Id(pk) |  | ○ | Id(pk) |  |
| results_01 | win | int | ○ | win | int |
|  | lose | int | ○ | lose | int |
|  | stats_Id | int | ○ | stats | int |
|  | user_Id | int |  | user_Id | int |
|  |  |  |  |  |  |
| 01のスタッツ |  |  |  |  |  |
| stats_01 | Id(pk) | int | ○ | Id(pk) | int |
|  | stats | double | ○ | stats | double |
|  |  |  |  |  |  |
| クリケットの中間テーブル | Id(pk) | int | ○ | Id(pk) | int |
| results_cricket | win | int | ○ | win | int |
|  | lose | int | ○ | lose | int |
|  | stats_Id | int | ○ | stats_Id | int |
|  | user_Id | int |  | user_Id | string |
|  |  |  |  |  |  |
| クリケのスタッツ |  |  |  |  |  |
| stats_cricket | Id(pk) | int | ○ | Id(pk) | int |
|  | stats | double | ○ | stats | double |
|  |  |  |  |  |  |
| カウントアップの結果 |  |  |  |  |  |
| results_count_up | max_score | int |  | max_score | int |
|  | user_Id | int |  | user_Id | string |
|  | score_Id | int | ○ | score_Id | int |
|  |  |  |  |  |  |
| カウントアップのスコア |  |  |  |  |  |
| score_count_up | Id(pk) | int | ○ | Id(pk) | int |
|  | score | double | ○ | score | double |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

