const routers = {
  '': {
    component (resolve) {
      require(['./components/pages/pg_index.vue'], resolve)
    }
  },
  '/second': {
    component (resolve) {
      require(['./components/pages/pg_second.vue'], resolve)
    }
  }
}
export default routers
