
import { useState } from 'react'
import './App.css'

const questions = [
  {
    question: 'ถ้าเราได้ใช้เวลาด้วยกันหนึ่งวัน อยากทำอะไรที่สุด?',
    answers: ['นอนคุยกันทั้งวัน', 'ไปเที่ยวด้วยกัน', 'เล่นเกมด้วยกัน'],
  },
  {
    question: 'อะไรที่ทำให้รู้สึกว่าอีกคนใส่ใจเรามากที่สุด?',
    answers: ['จำเรื่องเล็ก ๆ ได้', 'อยู่ฟังตอนเหนื่อย', 'ทักมาหาก่อน'],
  },
  {
    question: 'ถ้าเลือกเก็บหนึ่งอย่างไว้ในโลกของเรา จะเลือกอะไร?',
    answers: ['จดหมายถึงกัน', 'รูปความทรงจำ', 'ข้อความก่อนนอน'],
  },
]

function App() {
  const [letterOpen, setLetterOpen] = useState(false)
  const [memoryOpen, setMemoryOpen] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [finished, setFinished] = useState(false)

  const question = questions[questionIndex]

  function chooseAnswer(answer) {
    setAnswers((previous) => [...previous, answer])
    if (questionIndex === questions.length - 1) {
      setFinished(true)
    } else {
      setQuestionIndex((previous) => previous + 1)
    }
  }

  function restartGame() {
    setQuestionIndex(0)
    setAnswers([])
    setFinished(false)
  }

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
          โลกใบเล็ก ๆ ที่มีเรื่องราวของเรา<br />
          ค่อย ๆ สร้างความทรงจำไปด้วยกัน
        </p>
        <a className="main-button" href="#our-things">
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

      <section className="memories" id="our-things">
        <p className="section-label">MADE JUST FOR YOU</p>
        <h2 className="section-title">Little things, <em>big feelings.</em></h2>

        <div className="cards">
          <article className="memory-card">
            <div className="card-icon">💌</div>
            <h3>Letters for you</h3>
            <p>มีบางคำที่กัญอยากบอกเบ๊บ</p>
            <button className="surprise" onClick={() => setLetterOpen(!letterOpen)}>
              {letterOpen ? 'ปิดจดหมาย ♡' : 'เปิดจดหมาย ♡'}
            </button>
            {letterOpen && (
              <div className="surprise-message">
                ถึงเบ๊บคนเก่ง<br /><br />
                กัญตั้งใจทำโลกใบเล็ก ๆ นี้ให้เบ๊บนะคับ
                อยากให้ตรงนี้เป็นพื้นที่ที่เราเก็บเรื่องราวดี ๆ
                และมีอะไรให้ยิ้มได้ในวันธรรมดา
                ขอบคุณที่เข้ามาเป็นส่วนหนึ่งในโลกของกัญนะคับ ♡
              </div>
            )}
          </article>

<article className="memory-card">
  <div className="card-icon">🌷</div>
  <h3>Our memories</h3>
  <p>เก็บเรื่องราวเล็ก ๆ ที่มีความหมาย</p>

  <button
    className="surprise"
    onClick={() => setMemoryOpen(!memoryOpen)}
  >
    {memoryOpen ? 'ปิดความทรงจำ ♡' : 'เปิดความทรงจำ ♡'}
  </button>

  {memoryOpen && (
    <div className="surprise-message">
      <h4>เรื่องราวของเราสองคน ♡</h4>
      <p>
        จากวันแรกที่เราเริ่มคุยกัน
        จนถึงวันนี้ที่มีกันอยู่ในทุก ๆ วัน
        กัญอยากค่อย ๆ เก็บเรื่องราวของเราไว้ตรงนี้นะคับ
      </p>
      <p>นี่เป็นเพียงหน้าแรกของความทรงจำอีกมากมายที่จะตามมา ♡</p>
    </div>
  )}
</article>

          <article className="memory-card">
            <div className="card-icon">🎮</div>
            <h3>Love quiz</h3>
            <p>ลองตอบคำถามน่ารัก ๆ กัน</p>
            {!finished ? (
              <>
                <p className="quiz-progress">
                  คำถาม {questionIndex + 1} / {questions.length}
                </p>
                <h4>{question.question}</h4>
                <div className="quiz-answers">
                  {question.answers.map((answer) => (
                    <button
                      className="quiz-option"
                      key={answer}
                      onClick={() => chooseAnswer(answer)}
                    >
                      {answer}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="surprise-message">
                <h4>ขอบคุณที่มาเล่นด้วยกันนะ ♡</h4>
                <p>คำตอบของเรา</p>
                {answers.map((answer, index) => (
                  <p key={`${answer}-${index}`}>
                    {index + 1}. {answer}
                  </p>
                ))}
                <button className="surprise" onClick={restartGame}>
                  เล่นอีกครั้ง ↻
                </button>
              </div>
            )}
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
