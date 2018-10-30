import produce from 'immer';
import axios from 'axios';
import API from '~/common/api.js';

export default {
  state: {
    list: []
  },
  reducers: {
    save: (state, payload) => produce(state, draft => ({ ...draft, ...payload }))
  },
  effects: {
     async getAll() {
        try {
          const res = await axios.get(API.posts)
          if(res.status === 200) {
            let list = [
              { id: 1, title: 'cook', color: 'red' },
              { id: 2, title: 'book', color: 'tal'}
            ]
            this.save({ list })
          }
        }catch(error) {
          throw new Error(error)
        }
     },
     async get(id) {
     }
  }
}
