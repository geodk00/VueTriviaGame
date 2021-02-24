import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../views/HomePage.vue'
import QuestionView from './../views/QuestionView.vue'
import ResultView from './../views/ResultView.vue'
import NotFound from './../components/NotFound'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/question/:id', component: QuestionView },
    { path: '/result', component: ResultView },
    { path: '*', component: NotFound }
  ]
})
