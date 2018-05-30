import axios from 'axios'

// require('dotenv').config()

async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const key = process.env.FOOD_API_KEY
  console.log('API Key: ', key)
  // const res = await axios(
  //   `${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`
  // )
  // console.log(res)
}
getResults('pizza')
