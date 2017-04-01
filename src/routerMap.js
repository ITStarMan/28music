const routers = {
  '': {
    component (resolve) {
      require(['./components/pages/pg_index.vue'], resolve)
    }
  },
  'deta': {
    component (resolve) {
      require(['./components/pages/pg_detail.vue'], resolve)
  	}
  },
  '/second/:CegID': {
    component (resolve) {
      require(['./components/pages/pg_second.vue'], resolve)
    }
  }
}

export default routers
