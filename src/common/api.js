const BASE_URL = 'api/v1'
const API = {}

const resources = [
  'posts',
  'categories',
  'comments'
]

resources.forEach(r => {
  API[r] = `${BASE_URL}/${r}`
})

export default API
