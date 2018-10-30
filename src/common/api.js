const BASE_URL = 'api/v1'
const API = {}

const urlMap = {
  posts: `posts`
}

for (let key in urlMap) {
  API[key] = `${BASE_URL}/${urlMap[key]}`
}

export default API
