
import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState(false)

  return (
    <main className="world">
      <nav className="nav">
        <a className="brand" href="#">
          <span className="brand-icon">♡</span>
          our little world
        </a>
        <span className="nav-note">made with love ♡</span>
      </nav>

      <section className="hero">
        <div className="eyebrow">A LITTLE WORLD FOR TWO</div>
        <div className="hero-heart">♡</div>
        <h1>Our Little<br /><span>World.</span></h1>
        <p className="intro">
          โลกใบเล็ก ๆ ที่มีแค่เรื่องราวของเรา<br />
          และยังมีอะไรให้เราได้สร้างด้วยกันอีกเยอะเลย
        </p>
        <a className="main-button" href="#memories">
          explore our world <span>↗</span>
        </a>
        <div className="floating flower">✿</div>
        <div className="floating sparkle">✧</div>
      </section>

      <section className="couple">
        <p className="section-label">THIS LITTLE WORLD BELONGS TO</p>
        <div className="names">
          <div className="person">
            <div className="avatar">ก</div>
            <h2>กัญ</h2>
            <p>your little sunshine</p>
          </div>
          <div className="heart-between">♡</div>
          <div className="person">
            <div className="avatar avatar-pink">บ</div>
            <h2>เบ๊บ</h2>
            <p>my favorite person</p>
          </div>
        </div>
      </section>

      <section className="memories" id="memories">
        <p className="section-label">A PLACE FOR OUR STORIES</p>
        <h2 className="section-title">Little things, <em>big feelings.</em></h2>
        <div className="cards">
          <article className="memory-card">
            <div className="card-icon">💌</div>
            <h3>Letters for you</h3>
            <p>คำที่บางทีเขินเกินกว่าจะพูดออกไป</p>
            <span>coming soon ♡</span>
          </article>
          <article className="memory-card">
            <div className="card-icon">🌷</div>
            <h3>Our memories</h3>
            <p>เก็บเรื่องราวเล็ก ๆ ที่มีความหมาย</p>
            <span>coming soon ♡</span>
          </article>
          <article className="memory-card">
            <div className="card-icon">🌙</div>
            <h3>Little moments</h3>
            <p>พื้นที่สำหรับวันธรรมดาของเรา</p>
            <span>coming soon ♡</span>
          </article>
        </div>
      </section>

      <section className="love-note">
        <span className="note-flower">୨୧</span>
        <p className="section-label">A LITTLE REMINDER</p>
        <h2>You're my favorite<br /><em>part of every day.</em></h2>
        <p className="note-text">
          ไม่ว่าวันนี้จะเป็นยังไง<br />
          ขอให้ตรงนี้เป็นพื้นที่เล็ก ๆ ที่ทำให้เรายิ้มได้นะ
        </p>
        <button className="surprise" onClick={() => setMessage(!message)}>
          {message ? 'close my little note ♡' : 'open a little surprise ♡'}
        </button>
        {message && (
          <div className="surprise-message">
            กัญตั้งใจทำโลกใบเล็ก ๆ นี้ให้เบ๊บนะคับ<br />
            อยากเก็บเรื่องราวของเราไว้ตรงนี้ไปเรื่อย ๆ เลย ♡
          </div>
        )}
      </section>

      <footer>
        <a className="brand" href="#">♡ our little world</a>
        <p>a little space, made for our little story.</p>
        <span>made with love · กัญ & เบ๊บ</span>
      </footer>
    </main>
  )
}

export default App
