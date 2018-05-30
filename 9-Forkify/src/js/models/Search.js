import axios from 'axios'

export default class Search {
  constructor(query) {
    this.query = query
  }

  async getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = process.env.FOOD_API_KEY
    try {
      const res = await axios(
        `${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`
      )
      this.result = res.data.recipes
      // console.log(this.result)
    } catch (error) {
      console.log('Error: ', error)
    }
  }
}
