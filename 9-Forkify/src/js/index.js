import axios from 'axios'

// require('dotenv').config()

async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const key = process.env.FOOD_API_KEY
  try {
    const res = await axios(
      `${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`
    )
    const recipes = res.data
    console.log(recipes)
  } catch (error) {
    console.log('Error: ', error)
  }
}
getResults('pizza')
