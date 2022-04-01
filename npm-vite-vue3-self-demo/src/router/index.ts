import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Head from '@/page/edssLayout/Head.vue';
import Left from '@/page/edssLayout/Left.vue';
import Mid from '@/page/edssLayout/Mid.vue';
import Right from '@/page/edssLayout/Right.vue';
import JyqkView from "@/views/JyqkView.vue";
import TqskView from "@/views/TqskView.vue";
import YjxxView from "@/views/YjxxView.vue";
import MapNavView from '@/views/MapNavView.vue';
import ChildNavView from '@/views/ChildNavView.vue';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect:"/forest",
    },
    {
      path: "/forest",
      components: {
        Head,
        Left,
        Mid,
        Right,
      },
      props: {
        Left: {
          config: [
            JyqkView,
            TqskView
          ]
        },
        Mid: {
          leftNavConfig:[],
          rightNavConfig: [],
        },
        Right: {
          config: [
            JyqkView,
            TqskView
          ]
        },
      },
      children:[
        {
          path: 'nav',
          components: {
            LeftNav:ChildNavView,
            RightNav:ChildNavView,
          },
        }
      ]
    },
    {
      path: "/flood",
      components: {
        Head,
        Left,
        Mid,
        Right,
      },
      props: {
        Left: {
          config: [
            JyqkView,
            TqskView,
            YjxxView
          ]
        },
        Right: {
          config: [
            JyqkView,
            TqskView
          ]
        },
      }
    },
  ],
});

export default router;
