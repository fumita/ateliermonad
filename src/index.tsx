import {Hono} from 'hono'
import {renderer} from './renderer'

const app = new Hono()

app.use(renderer)

// メインページ
app.get('/', (c) => {
  return c.render(
    <>
      <header class="header">
        <div class="container">
          <nav class="nav">
            <a href="#service">SERVICE</a>
            <a href="#about">ABOUT</a>
          </nav>
        </div>
      </header>

      <main class="main">
        <div class="container">
          <h1 class="company-name">株式会社AtelierMonad</h1>
          <h2 class="profile-title">COMPANY PROFILE</h2>

          <table class="company-info">
            <tbody>
              <tr>
                <td class="label">名称</td>
                <td class="value">株式会社AtelierMonad (AtelierMonad, Inc.)</td>
              </tr>
              <tr>
                <td class="label">設立</td>
                <td class="value">2025年2月7日</td>
              </tr>
              <tr>
                <td class="label">資本金</td>
                <td class="value">10万円 (資本準備金等含む)</td>
              </tr>
              <tr>
                <td class="label">代表取締役</td>
                <td class="value">鈴木 文太 すずき ふみた</td>
              </tr>
              <tr>
                <td class="label">住所</td>
                <td class="value">東京都大田区南六郷2-32-4　アールコート南六郷304</td>
              </tr>
              <tr>
                <td class="label">連絡先</td>
                <td class="value">contact@ateliermonad.com</td>
              </tr>
            </tbody>
          </table>

          <h3 class="business-title">業務内容</h3>
          <ol class="business-list">
            <li>コンピューターシステムの企画、研究、開発、販売及び保守に関する業務</li>
            <li>コンピューターシステムの導入及び利用に関するコンサルティング業務</li>
            <li>インターネットを利用した各種情報提供サービス</li>
            <li>経営、組織及び人材育成に関するコンサルティング業務</li>
          </ol>
        </div>
      </main>
    </>
  )
})

export default app