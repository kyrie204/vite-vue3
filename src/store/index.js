import { createStore } from 'vuex'
import { moduleA } from './module/a'
import { moduleB } from './module/b'

export const store = createStore({
    modules: {
      a: moduleA,
      b: moduleB
    }
})
  