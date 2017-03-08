const routers = {
  '': {
    component (resolve) {
      require(['./components/pages/pg_index.vue'], resolve)
    }
  }
}
export default routers
