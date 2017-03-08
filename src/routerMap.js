const routers = {
  '/login': {
    component (resolve) {
      require(['./components/pages/pg_login.vue'], resolve)
    }
  },
  '': {
    component (resolve) {
      require(['./components/pages/pg_apiList.vue'], resolve)
    }
  },
  '/register': {
    component (resolve) {
      require(['./components/pages/pg_register.vue'], resolve)
    }
  },
  '/add': {
    component (resolve) {
      require(['./components/pages/pg_add.vue'], resolve)
    }
  },
  '/add1/:ApiID': {
    component (resolve) {
      require(['./components/pages/pg_add1.vue'], resolve)
    }
  },
  '/detail/:ApiID': {
    component (resolve) {
      require(['./components/pages/pg_detail.vue'], resolve)
    }
  },
  '/center/:pageFlae': {
    component (resolve) {
      require(['./components/pages/pg_center.vue'], resolve)
    }
  },
  '/centerall/:pageFlae': {
    component (resolve) {
      require(['./components/pages/pg_centerall.vue'], resolve)
    }
  },
  '/developer/:userId': {
    component (resolve) {
      require(['./components/pages/pg_developer.vue'], resolve)
    }
  },
  '/appDetail/:appID': {
    component (resolve) {
      require(['./components/pages/pg_appDetail.vue'], resolve)
    }
  },
  '/appobserve/:appID': {
    component (resolve) {
      require(['./components/pages/pg_appObserve.vue'], resolve)
    }
  },
  '/doc': {
    component (resolve) {
      require(['./components/pages/pg_developerDoc.vue'], resolve)
    }
  },
  '/resetPassport': {
    component (resolve) {
      require(['./components/pages/pg_resetPassport.vue'], resolve)
    }
  },
  '/setup/:ApiID': {
    component (resolve) {
      require(['./components/pages/pg_setup.vue'], resolve)
    }
  },
  '/data/:ApiID': {
    component (resolve) {
      require(['./components/pages/pg_data.vue'], resolve)
    }
  },
  '/help/:ApiID': {
    component (resolve) {
      require(['./components/pages/pg_help.vue'], resolve)
    }
  }
}
export default routers
