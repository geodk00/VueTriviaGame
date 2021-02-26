import axios from 'axios'

function b64DecodeUnicode (str) {
  // from stack: https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
  // Going backwards: from bytestream, to percent-encoding, to original string.
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))
}

async function fetchFromApi (options) {
  try {
    // fetch base64 encoded strings so we don't have to handle html entities in the strings
    options = { ...options, encode: 'base64' }
    const questionResponse = await axios.get('https://opentdb.com/api.php', { params: options })
    const questions = []

    if (Array.isArray(questionResponse.data.results)) {
      questionResponse.data.results.forEach((question, index) => {
        // decode response from base64
        for (const property in question) {
          if (Array.isArray(question[property])) {
            question[property].forEach((element, index) => {
              question[property][index] = b64DecodeUnicode(element)
            })
          } else {
            question[property] = b64DecodeUnicode(question[property])
          }
        }
        // insert the correct answer in a random position along with the incorrect answers
        const answers = question.incorrect_answers
        delete question.incorrect_answers
        const InsertIndex = Math.floor(Math.random() * answers.length) // random index between 0 and answers.length (both inclusive)
        answers.splice(InsertIndex, 0, question.correct_answer)

        // wrap the answers with their index as 'id' for use as a key in vue
        question.answers = answers.map((answer, id) => { return { id, answer } })
        // give the question an 'id' as well, also for use as a key in vue
        question.id = index
        questions.push(question)
      })
      return questions
    }
  } catch (e) {
    console.log(e)
  }
}

export default fetchFromApi
