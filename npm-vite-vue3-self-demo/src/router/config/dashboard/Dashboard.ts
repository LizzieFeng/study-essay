import {BlueMainPage, BlueThemePage} from "../../layout/BlueTheme";
import { forestRouterConfig } from "./forest";
import {floodRouterConfig} from "./flood";
const DashboardRouter = {
  path: "/dashboard",
  component: BlueThemePage,
  children: [
    {
      path: forestRouterConfig.path,
      components: forestRouterConfig.components,
      props: forestRouterConfig.props,
    },
    {
      path: floodRouterConfig.path,
      components: floodRouterConfig.components,
      props: floodRouterConfig.props,
    }
  ],
};
export {
  DashboardRouter,
}