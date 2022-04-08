import BlueMainPage from "@/page/blue/BlueMainPage.vue";
import BlueSidePage from '@/page/blue/BlueSidePage.vue';
import BlueMidPage from '@/page/blue/BlueMidPage.vue';
const layoutRwConfig = {
    Left: BlueSidePage,
    Mid: BlueMidPage,
    Right: BlueSidePage,
  };

export {
    layoutRwConfig,
    BlueMainPage
}