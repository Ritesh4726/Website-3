import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      // If URL not matching any registered one then we drop user to 404 page.
      path: "*",
      name: "notfound",
      component: require("@/pages/errors/NotFound").default,
    },
    {
	path: "",
	alias: '/home',
      name: "home",
      component: require("@/pages/Home").default,
    },
    {
      path: "/store",
      name: "store",
      component: require("@/pages/Store").default,
    },
    {
      path: "/downloads",
      name: "downloads",
      component: require("@/pages/Downloads").default,
    },
    {
      path: "/contributors",
      name: "contributors",
      component: require("@/pages/Contributors").default,
    },
    {
      path: "/submit",
      name: "submit",
      component: require("@/pages/store/Submit").default,
    },
  ],
});
