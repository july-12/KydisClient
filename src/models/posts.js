import produce from 'immer';
import axios from 'axios';
import API from '~/common/api.js';

export default {
  state: {
    list: [],
    post: {}
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
        try {
          const res = await axios.get(`${API.posts}/${id}`)
          console.log(res);
          if(res.status === 200) {
            this.save({ post: res.data })
          }
        }catch(error) {
          throw new Error(error)
        }
     },
     async create(values) {
        try {
          await axios.post(API.posts, { ...values })
        }catch(error) {
          throw new Error(error)
        }
     },
     async update({ id, values }) {
        try {
          await axios.put(`${API.posts}/${id}`, { ...values })
        }catch(error) {
          throw new Error(error)
        }
     },
     async delete(id) {
        try {
          await axios.delete(`${API.posts}/${id}`)
        }catch(error) {
          throw new Error(error)
        }
     }
  }
}
