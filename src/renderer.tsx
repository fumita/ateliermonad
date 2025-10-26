import {jsxRenderer} from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description"
              content="AtelierMonadは、モダンな技術スタックと高い開発力で、価値あるソフトウェアを提供します。"/>
        <meta name="keywords" content="ソフトウェア開発,システム開発,技術コンサルティング,AtelierMonad"/>
        <title>AtelierMonad - 確かな技術力で、未来を創造する</title>
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
