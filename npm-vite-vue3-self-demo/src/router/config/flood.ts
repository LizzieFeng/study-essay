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
export const floodRouterConfig = {
    path: "/flood",
    component: BlueMainPage,
    children:[
      {
        path: 'index',
        components: layoutRwConfig,
        props: {
          Left: {
            config: [
              TqybViewConfig,
              TqybViewConfig,
              TqybViewConfig,
              TqybViewConfig,
              TqybViewConfig,
              TqybViewConfig,
            ]
          },
          Mid: {
            config: MidConfig,
          },
          Right: {
            config: [
              TqybViewConfig,
              TqybViewConfig,
              TqybViewConfig,
              TqybViewConfig,
              TqybViewConfig,
              TqybViewConfig,
            ]
          },
        }
      }
    ]
  }