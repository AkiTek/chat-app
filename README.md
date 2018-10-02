# アプリ概要
### [現時点] ReduxとDjangoをWebsocketによる通信ができるようにしている。まだ具体的な中身はなし

<今後の手順>
- <フロント側>
  - 別のタブからの書き込みは色を変えるなど、自分と他人のコメントを識別できるような簡易な仕組みを作る
  - LINEのようなチャット画面に整える
  - 随時追加//

- <バックエンド>
  - チャットのやり取りを記録する
  - アプリ起動すると以前のチャットが残ってるようにする
  - 随時追加//

- <データベース>
  - 何が適切かを判断する
  
- <インフラ>
  - まだ小さいのでそこまで考慮していない

### パッケージなど

- Python

  `django@2.1.1` `channels@2.1.3` `channels-redis@2.3.0`
  
## アプリの起動の仕方

### React + Redux
ルートディレクトリで、`npm start`

### Django + Python
chatアプリケーションのルートディレクトリで, `python3 manage.py runserver`

### Redis
redisも起動する必要あり。
入れていないなら、`brew install redis`

他二つとは別コンソールタブで `redis-server /usr/local/etc/redis.conf`
