import {Hono} from 'hono'
import {renderer} from './renderer'
import {Header} from './components/Header'
import {Hero} from './components/Hero'
import {Service} from './components/Service'
import {About} from './components/About'
import {Footer} from './components/Footer'

const app = new Hono()

app.use(renderer)

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