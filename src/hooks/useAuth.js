import { ref } from 'vue'
import { defineStore } from 'pinia'

/*

type CurrentUser = {
  userId: number;
  username: string;
}

*/

export const useAuth = defineStore('useAuth', () => {
  const isLoggedIn = ref(true)
  const currentUser = ref({
    userId: 1,
    username: '용상윤',
  })

  return { isLoggedIn, currentUser }
})
