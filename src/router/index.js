import { createRouter, createWebHistory } from 'vue-router'
import EmployeeList from '../views/EmployeeList.vue'
import Home from '../views/Home.vue'
import Update from '../views/Update.vue'
import UpdateCheck from '../views/UpdateCheck.vue'
import DeleteCheck from '../views/DeleteCheck.vue'
import Create from '../views/Create.vue'
import CreateCheck from '../views/CreateCheck.vue'



//views 1page  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    }
    ,
    {
      path: '/users',
      component: EmployeeList
    }
    ,
    {
      path: '/update',
      component: Update
    }
    ,
    {
      path: '/update_comfirm',
      component: UpdateCheck
    }
    ,
    {
      path: '/create',
      component: Create
    }
    ,
    {
      path: '/create_comfirm',
      component: CreateCheck
    }
    ,
    {
      path: '/delete/:id',
      component: DeleteCheck
    }

  ]
})

export default router
