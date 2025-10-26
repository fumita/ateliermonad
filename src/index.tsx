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

        <section id="service" class="service-section">
          <div class="container">
            <h2 class="service-main-title">サービス</h2>

            <div class="service-item">
              <h3 class="service-item-title">技術支援</h3>
              <p class="service-description">
                過去、多くの開発を行なってた知見を活かし、事業に必要な技術選定、およびアーキテクチャ設計を支援します。
              </p>
              <h4 class="service-example-title">事例</h4>
              <ul class="service-example-list">
                <li>新規ウェブサービスにおいて、技術選定、アーキテクチャ構成支援、および、その質の高い実装を手がけ、ある程度メンバーや会社規模が変わっても耐えられるようなアーキテクチャを構成しました。</li>
              </ul>
            </div>

            <div class="service-item">
              <h3 class="service-item-title">コンサルティング</h3>
              <p class="service-description">
                レベルの高いエンジニアを育成するには、十分レベルが高いエンジニアからの指導が 上達の近道であると考えています。
                エンジニア育成・採用に関するコンサルティングを行なっています。
              </p>
              <h4 class="service-example-title">事例</h4>
              <ul className="service-example-list">
                <li>未成熟なエンジニア組織を成熟したものにするべく、採用面接に関するトレーニングを行ない、より確度の高い面接ができるような指導を行ないました。</li>
              </ul>
              <ul className="service-example-list">
                <li>情報系出身でない新卒者や、IT業界出身でない非エンジニア職に対してレベルに合わせた研修を行い、最新のWeb系スタートアップの業務水準に耐えられるようなIT基礎力を習得する研修を行ないました。</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
})

export default app