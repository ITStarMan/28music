const routers = {
  '': {
    component (resolve) {
      require(['./components/pages/pg_index.vue'], resolve)
    }
  },
  '/deta/:goodsID': {
    component (resolve) {
      require(['./components/pages/pg_detail.vue'], resolve)
    }
  },
  '/second/:CegID': {
    component (resolve) {
      require(['./components/pages/pg_second.vue'], resolve)
    }
  },
  '/reg': {
    component (resolve) {
      require(['./components/pages/pg_reg.vue'], resolve)
    }
  },
  '/login': {
    component (resolve) {
      require(['./components/pages/pg_login.vue'], resolve)
    }
  }
}

export default routers
