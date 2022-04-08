import MainVue from "@/page/blue/Main.vue";
import Side from '@/page/blue/Side.vue';
import Mid from '@/page/blue/Mid.vue';
import JyqkView from "@/views/JyqkView.vue";
import TqskView from "@/views/TqskView.vue";
import YjxxView from "@/views/YjxxView.vue";
import ReservoirOverviewView from "@/views/reservoirOverview/ReservoirOverviewView.vue";
import RiverOverviewView from "@/views/riverOverview/RiverOverviewView.vue";
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

  const ReservoirOverviewViewConfig = {
    style:{
      width: '50%',
      height: '260px'
    },
    componentName: ReservoirOverviewView,
  };

  const RiverOverviewViewConfig = {
    style:{
      width: '50%',
      height: '260px'
    },
    componentName: RiverOverviewView,
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
              ReservoirOverviewViewConfig,
              RiverOverviewViewConfig,
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