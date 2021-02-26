import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './../views/HomeView.vue'
import QuestionView from './../views/QuestionView.vue'
import ResultView from './../views/ResultView.vue'
import NotFoundComponent from './../components/NotFoundComponent'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomeView },
    { path: '/question/:id(\\d+)', component: QuestionView },
    { path: '/result', component: ResultView },
    { path: '*', component: NotFoundComponent }
  ]
})
