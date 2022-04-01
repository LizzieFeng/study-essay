import MainVue from "@/page/Main.vue";
import Side from '@/page/Side.vue';
import Mid from '@/page/Mid.vue';
import JyqkView from "@/views/JyqkView.vue";
import TqskView from "@/views/TqskView.vue";
import YjxxView from "@/views/YjxxView.vue";
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
  
  const MidConfig = {
    leftNav: {
      config: [2,3,5,5,6]
    },
    rightNav: {
      config: [3,5,6]
    },
    mapNav: {
      config: [8,9,6]
    },
    layerNav: {
      config: [1,21,3]
    }
  };
export const forestRouterConfig = {
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
            config: MidConfig,
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
  }