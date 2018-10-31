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
              {id: 1, title: 'hot pot', content: 'nice food', categoryId: 1, createAt: '10:10:10'},
              {id: 2, title: 'effective javascript', content: 'nice book', categoryId: 2, createAt: '12:12:12'}
            ]
            this.save({ list })
          }
        }catch(error) {
          throw new Error(error)
        }
     },
     async get(id) {
        try {
          const res = await axios.get(API.posts, { id })
          console.log(res);
        }catch(error) {
          throw new Error(error)
        }
     }
  }
}
