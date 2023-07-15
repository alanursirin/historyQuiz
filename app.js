const quizData = [
    {
      question: 'Which famous actress is also known as the co-inventor of Wi-Fi technology?',
      a: 'Hedy Lamarr',
      b: 'Alan Turing',
      c: 'Tim Berners-Lee',
      d: 'Charles Babbage',
      e: 'Vint Cerf',
      correct: 'a',
    },
    {
      question: 'Which mathematician and computer scientist played a pivotal role in cracking the Enigma code during World War II?',
      a: 'Hedy Lamarr',
      b: 'Alan Turing',
      c: 'Tim Berners-Lee',
      d: 'Charles Babbage',
      e: 'Vint Cerf',
      correct: 'b',
    },
    {
      question: 'Who is credited as the inventor of the computer?',
      a: 'Hedy Lamarr',
      b: 'Alan Turing',
      c: 'Tim Berners-Lee',
      d: 'Charles Babbage',
      e: 'Vint Cerf',
      correct: 'd',
    },
    {
      question: 'Who is the person credited with inventing the World Wide Web (WWW)?',
      a: 'Hedy Lamarr',
      b: 'Alan Turing',
      c: 'Tim Berners-Lee',
      d: 'Charles Babbage',
      e: 'Vint Cerf',
      correct: 'c',
    },
    {
      question: 'Who is often referred to as one of the "fathers of the Internet" for his significant contributions to its development?',
      a: 'Hedy Lamarr',
      b: 'Alan Turing',
      c: 'Tim Berners-Lee',
      d: 'Charles Babbage',
      e: 'Vint Cerf',
      
      correct: 'e',
    },
  ]
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const e_text = document.getElementById('e_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
  }
  
  function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    //console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> Test Finished, ${score * 20} You Scored </h2>
        <button class="submit" onClick="location.reload()"> TRY AGAIN  </button>
  
      `
      }
    }
  })