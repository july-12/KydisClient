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
            this.save({ list: res.data })
          }
        }catch(error) {
          throw new Error(error)
        }
     },
     async get(id) {
     }
  }
}
