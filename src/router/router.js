import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main"
import About from "@/pages/About"
const routes = [
  {
    path: '/',
    component: Main
  },
//   {
//     path: '/posts',
//     component: UserPage
// },
{
    path: '/about',
    component: About
},
// {
//     path: '/posts/:id',
//     component: PostIdPage
// },
// {
//     path: '/store',
//     component: PostPageWithStore
// },
// {
//     path: '/composition',
//     component: PostPageCompositionApi
// },
  
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;
