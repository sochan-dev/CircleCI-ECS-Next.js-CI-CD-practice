# docker で Next.js×Express×Mysql のアプリケーションを構築。Next.js 編

## 環境構築手順

git pull でソースコード pull

```
git pll https://github.com/sochan-dev/docker-practice-frontend-next.js.git
```

イメージのプルとコンテナの作成

```
docker-compose up -d
```

command: ash -c 'yarn && yarn dev'により、<br/>
パッケージインストールと起動も行われる。

## コンテナ起動（docker-compose up -d 以降）

docker-compose up して docker-stop だとコンテナが増え続ける。<br/>
一度作ったコンテナを起動する際は start を使う。

```
docker-compose start -d
```

## docker ファイルを更新した場合

```
docker-compose build --no-cache
```

これでキャッシュを使わずにイメージを再ビルドできる。

## 気を付けた点

### Next.js の場合 SWC の機能の互換性が無く以下のエラーが出る。

```
error - Failed to load SWC binary, see more info here: https://nextjs.org/docs/messages/failed-loading-swc
```

SWC の設定をオフにするか、SWC に必要なパッケージをインストールすると解決する。<br/>
→ 今回は SWC に必要なパッケージをインストールして解決した ↓

```
yarn add next@11.1.1-canary.7
```

### ホットリロードされない問題

以下で解決すると思ったが、ホットリロードされないままだった。
自分のＯＳは windows

```
environment:
      - CHOKIDAR_USEPOLLING=true
```

docker on windows の場合は以下で解決した。

```
environment:
            - CHOKIDAR_USEPOLLING=true
```
