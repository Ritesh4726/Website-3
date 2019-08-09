import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "",
      name: "home",
      component: require("@/pages/Home").default
    },
    {
      // If URL not matching any registered one then we drop user to 404 page.
      path: "*",
      redirect: "/"
    },
    {
      path: "/store",
      beforeEnter(to, from, next) {
        window.location = "https://beta.premid.app/store";
      }
    },
    {
      path: "/downloads",
      name: "downloads",
      component: require("@/pages/Downloads").default
    },
    {
      path: "/contributors",
      name: "contributors",
      component: require("@/pages/Contributors").default
    }
  ]
});
