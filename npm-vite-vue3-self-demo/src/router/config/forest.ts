import {layoutRwConfig, BlueMainPage} from "../layout/BlueTheme";
import {
    TqybViewConfig,
    TqskViewConfig,
    YjxxViewConfig,
    JyqkViewConfig,
    ReservoirOverviewViewConfig,
    RiverOverviewViewConfig,
} from '../viewsComponent/ViewComponentRegistry';
  
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
    component: BlueMainPage,
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
              TqybViewConfig,
              YjxxViewConfig,
            ]
          },
          Mid: {
            config: MidConfig,
          },
          Right: {
            config: [
              TqskViewConfig,
              ReservoirOverviewViewConfig,
              JyqkViewConfig,
              YjxxViewConfig,
            ]
          },
        }
      }
    ]
  }