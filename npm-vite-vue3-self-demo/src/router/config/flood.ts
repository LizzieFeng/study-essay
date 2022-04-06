import MainVue from "@/page/blue/Main.vue";
import Side from '@/page/blue/Side.vue';
import Mid from '@/page/blue/Mid.vue';
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
      config: [2,3]
    },
    rightNav: {
      config: [3,6]
    },
    mapNav: {
      config: [6]
    },
    layerNav: {
      config: [3]
    }
  };
export const floodRouterConfig = {
    path: "/flood",
    component: MainVue,
    children:[
      {
        path: 'index',
        components: layoutRwConfig,
        props: {
          Left: {
            config: [
              TqskViewConfig,
            ]
          },
          Mid: {
            config: MidConfig,
          },
          Right: {
            config: [
                JyqkViewConfig,
            ]
          },
        }
      }
    ]
  }