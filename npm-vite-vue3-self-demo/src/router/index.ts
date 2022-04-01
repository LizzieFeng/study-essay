import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Side from '@/page/Side.vue';
import Mid from '@/page/Mid.vue';
import JyqkView from "@/views/JyqkView.vue";
import TqskView from "@/views/TqskView.vue";
import YjxxView from "@/views/YjxxView.vue";
import MapNavView from '@/views/MapNavView.vue';
import MainVue from "@/page/Main.vue";
const layoutRwConfig = {
  Left: Side,
  Mid,
  Right: Side,
};
const TqskViewConfig = {
  style:{
    width: '25%',
    height: '200px'
  },
  componentName: TqskView,
};
const JyqkViewConfig = {
  style:{
    width: '45%',
    height: '100px'
  },
  componentName: JyqkView,
};

const YjxxViewConfig = {
  style:{
    width: '100%',
    height: '100px'
  },
  componentName: YjxxView,
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect:"/forest/index",
    },
    {
      path: "/forest",
      component: MainVue,
      children:[
        {
          path: 'index',
          components: layoutRwConfig,
          props: {
            Left: {
              config: [
                TqskViewConfig,
                YjxxViewConfig,
              ]
            },
            Mid: {

            },
            Right: {
              config: [
                JyqkViewConfig,
                TqskViewConfig,
              ]
            },
          }
        }
      ]
    },
    {
      path: "/flood",
      component: MainVue,
      children:[
        {
          path: 'index',
          components: layoutRwConfig,
          props: {
            Left: {
              config: [
                JyqkViewConfig,
              ]
            },
            Right: {
              config: [
                JyqkViewConfig,
              ]
            },
          }
        }
      ]
    },
  ],
});

export default router;
