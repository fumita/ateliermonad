import {Hono} from 'hono'
import {renderer} from './renderer'

const app = new Hono()

app.use(renderer)

// ヘッダーコンポーネント
const Header = () => (
  <header class="header">
    <div class="container">
      <div class="header-content">
        <h1 class="logo">AtelierMonad</h1>
        <nav class="nav">
          <a href="#service">Service</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </div>
  </header>
)

// ヒーローセクション
const Hero = () => (
  <section class="hero">
    <div class="container">
      <h2 class="hero-title">確かな技術力で、未来を創造する</h2>
      <p class="hero-subtitle">
        AtelierMonadは、モダンな技術スタックと<br/>
        高い開発力で価値あるソフトウェアを提供します
      </p>
    </div>
  </section>
)

// サービスセクション
const Service = () => (
  <section id="service" class="service">
    <div class="container">
      <h2 class="section-title">Service</h2>
      <div class="service-grid">
        <div class="service-card">
          <h3>ソフトウェア開発</h3>
          <p>
            モダンな技術スタックを活用した、保守性・拡張性に優れたシステム開発を提供します。
          </p>
        </div>
        <div class="service-card">
          <h3>技術コンサルティング</h3>
          <p>
            アーキテクチャ設計から実装まで、確かな技術力で課題解決をサポートします。
          </p>
        </div>
        <div class="service-card">
          <h3>教育・トレーニング</h3>
          <p>
            最新の開発手法やベストプラクティスに関するトレーニングを提供します。
          </p>
        </div>
      </div>
    </div>
  </section>
)

// About セクション
const About = () => (
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About</h2>
      <div class="about-content">
        <p>
          AtelierMonadは、確かな技術力と実装力で、
          お客様のビジネスを支えるソフトウェアを創り出します。
        </p>
        <p>
          私たちは、品質と保守性を重視したコードを書き、
          長期的に価値を提供できるシステムづくりを目指しています。
          最新の技術トレンドをキャッチアップしながら、
          実践的で堅牢なソリューションを提供します。
        </p>
        <div class="about-info">
          <h3>会社情報</h3>
          <dl>
            <dt>会社名</dt>
            <dd>株式会社AtelierMonad</dd>
            <dt>業務内容</dt>
            <dd>
              <ol>
                <li>コンピューターシステムの企画、研究、開発、販売及び保守に関する業務</li>
                <li>コンピューターシステムの導入及び利用に関するコンサルティング業務</li>
                <li>インターネットを利用した各種情報提供サービス</li>
                <li>経営、組織及び人材育成に関するコンサルティング業務</li>
              </ol>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </section>
)

// フッター
const Footer = () => (
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 AtelierMonad. All rights reserved.</p>
    </div>
  </footer>
)

// メインページ
app.get('/', (c) => {
  return c.render(
    <>
      <Header/>
      <Hero/>
      <Service/>
      <About/>
      <Footer/>
    </>
  )
})

export default app
