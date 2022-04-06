// const publicPath = require('../config/index').jsonPath;
// import publishObjectPath from '@/util/configRegistry';
// // 从json中取对应的服务器地址
// // 之前的pulicPath 在config/evn.js 修改， 现在json/publishObjectPath.json 里面 serverPath 里面修改
// // 之前的serverPath , 现在调用configServerPath
// const configServerPath =
//     publishObjectPath.value && publishObjectPath.value.serverPath;

// const videoServerPath = publishObjectPath.value && publishObjectPath.value.video;
// // 数据来源
// const dataApiServer =
//     publishObjectPath.value && publishObjectPath.value.serverPath;
// const planResponse =
//        publishObjectPath.value && publishObjectPath.value.gempUserServer;
//     // publishObjectPath.value && publishObjectPath.value.planResponse;
// // 辅助分析
// const analysisServer =
//     publishObjectPath.value && publishObjectPath.value.gempUserServer;
// import { DizhenServer } from '@/api/feature/dizhenServer';
// import { BuildingServer } from '@/api/feature/searchresource/BuildingServer';
// import { EventInfoServer } from '@/api/feature/eventInfoServer';
// import { WarningInfoServer } from '@/api/feature/warningInfoServer';
// import { WeatherServerUpdated } from '@/api/feature/weather/weatherServerUpdated';
// import {UnderstandCard} from '@/api/feature/understandCard/UnderstandCard';
// import { RiverWaterSystemServe } from '@/api/feature/riverWaterSystem/riverWaterSystemServe';
// import { WeatherRainWaterServer } from '@/api/feature/floodTyphoon/weatherRainWaterServer';
// import { DataSourcesServer } from '@/api/feature/disasterJudge/dataSourcesServer';
// import injectFilter from '@/filter/RequireFilter';
// import emisRequireFilter from '@/filter/OutlinkRequireFilter';
// import modelRequireFilter from '@/filter/modelRequireFilter'; // 模型接口过滤（不加token）
// import { ProgressSituationServer } from '@/api/feature/progressSituationServer';
// import { MapServer } from '@/api/feature/mapServer';
// import { StaticDataRequestServer } from '@/api/feature/staticDataRequestServer';
// import { GisToolServer } from '@/api/feature/gisMapTool/gisMapToolServer';
// import { PictureServer } from '@/api/feature/pictureServer';
// import { EventServer } from '@/api/feature/EventServer';
// import { PlotServer } from '@/api/feature/plot/plotServer';
// import { PlotNoSqlService } from '@/api/feature/plot/plotNoSqlService';
// import { PlotPgServiceNew } from '@/api/feature/plot/plotPgServiceNew';
// import { DisasterJudgeServer } from '@/api/feature/disasterJudge/disasterJudgeServer';
// import { HazServer } from '@/api/feature/disasterJudge/server/HazServer';
// import { HazServerShip } from '@/api/feature/disasterJudge/server/HazServerShip';
// import { NormalResourceServer } from '@/api/feature/normal/resourceServer';
// import { ManagementOnDutyServer } from '@/api/feature/managementOnDutyServer';
// import { HistoricalEarthquakeServer } from '@/api/feature/historicalEarthquakeServer'; // 历史地震接口
// import { AirStationServer } from '@/api/feature/airStationServer'; // 航空护林站接口
// import { PushDataRequestServe } from '@/api/feature/PushDataRequestServe'; // 根据事件id、组件位置id，请求推送的数据
// import { PushDataRequestServeOther } from '@/api/feature/PushDataRequestServeOther'; // 18080的ip
// import { DistrictServer } from '@/api/feature/disasterJudge/DistrictServer';
// import { MultiuleInterfaceServer } from '@/api/feature/MultiuleInterfaceServer';
// import { RescueTeamServer } from '@/api/feature/disasterJudge/RescueTeamServer';
// import { RescueTeamFakeServer } from '@/api/feature/disasterJudge/RescueTeamFakeServer';
// import { GeocodeServer } from '@/api/feature/GeocodeServer';
// import { ESSearchServer } from '@/api/feature/ESSearchServer';
// import { NomalLeftServer } from '@/api/feature/normal/normalLeft';
// import { LocationServer } from '@/api/feature/locationServer';
// import { RescueSituationServer } from '@/api/feature/rescueSituation/RescueSituationServer'; // 调度态势查询
// import { HazardoubaseinfoServer } from '@/api/feature/hazardoubaseinfoServer'; // 危化企业基本信息
// import { RealtimeTeam } from '@/api/feature/realtimeTeam';
// import { FirePointServer } from '@/api/feature/firePoint';  // 火点数据
// import { EventPushServer } from '@/api/feature/normal/eventPushServer'; // 事件回显到新的支撑屏
// import { RegionSelectionServer } from '@/api/feature/regionSelectionServer'; // 事件回显到新的支撑屏
// import { LoginServer } from '@/api/service/LoginServer';
// import { GetEvemtInfoOrCreatedInfo } from '@/api/feature/getEvemtInfoOrCreatedInfo';
// import { UpdateEadsEaffectRange } from '@/api/feature/UpdateEadsEaffectRange';
// import { UserToken } from '@/api/feature/UserToken';
// import { EadsWebPlot } from '@/api/feature/plot/eadsWebPlot';
// import {OneKeyDispatchEdssServer} from '@/api/feature/oneKeyDispatch/oneKeyDispatchEdssServer';
// import { EmisEmergencyPlan } from '@/api/feature/EmisEmergencyPlan/EmisEmergencyPlan'; // 应急响应改造后，emis的应急预案
// import {EdssEmergencyPlan} from '@/api/feature/EmisEmergencyPlan/EdssEmergencyPlan'; // 应急响应 edss
// import { EventAnalysisServer } from '@/api/feature/eventAnalysis/EventAnalysisServer'; // 辅助分析
// import { DetailsAnalysisServer } from '@/api/feature/eventAnalysis/DetailsAnalysisServer'; // 辅助分析
// import { FireFroestModelServer } from '@/api/feature/fireFroestModule/fireFroestModuleServer';
// import { ForestFireSituationServer } from '@/api/feature/ForestFireSituation/forestFireSituationServer';
// import { AddressBookServer } from '@/api/feature/DoubleScreen/addressBookServer'; // 通讯录相关
// import { EgisDataServer } from '@/api/service/EgisDataServer'; // egis数据服务
// import { EgisDataServerRight } from '@/api/service/EgisDataServerRight'; // 防护目标请求egis服务接口
// import { GisStaticServer } from '@/api/service/GisStaticServer';
// import { EventRiskServer } from '@/api/feature/EventRisk/EventRiskServer'; // emis端：接入风险分析数据
// import { GisStorageTankServer } from '@/api/feature/GisStorageTank/GisStorageTankServer'; // 大型储罐火
// import { GisChemicalBlastServer  } from '@/api/feature/GisChemicalBlast/GisChemicalBlastServer'; // 压力容器爆炸
// import { AtmosphericDiffusionServer  } from '@/api/feature/atmosphericDiffusion/AtmosphericDiffusionServer'; // 大气扩散专题
// import { PopularAnalysisServer } from '@/api/feature/popularAnalysis/PopularAnalysisServer'; // 舆情分析
// const dizhenServer = new DizhenServer({ baseURL: publicPath });
// const buildingServer = new BuildingServer(
//     { baseURL: configServerPath },
//     injectFilter,
//   );
// const eventInfoServer = new EventInfoServer(
//     { baseURL: publishObjectPath.value.serverPathadmin },
//     injectFilter,
// );
// const progressSituationServer = new ProgressSituationServer(
//     { baseURL: publicPath },
//     injectFilter,
// );
// const oneKeyDispatchEdssServer = new OneKeyDispatchEdssServer(
//     { baseURL: publishObjectPath.value.serverPathadmin},
//     injectFilter,
// );
// const warningInfoServer = new WarningInfoServer(
//     { baseURL: configServerPath },
//     injectFilter,
// );
// const understandCard = new UnderstandCard(
//     { baseURL: publishObjectPath.value.serverPathadmin },
//     injectFilter,
// );
// const weatherServerUpdated = new WeatherServerUpdated({ baseURL: publishObjectPath.value.serverPath }, injectFilter);
// const riverWaterSystemServe = new RiverWaterSystemServe({ baseURL: configServerPath }, injectFilter);
// // 数据来源

// const dataSourcesServer = new DataSourcesServer({ baseURL: dataApiServer }, injectFilter);
// // 危化企业的基本数据模板
// const hazardoubaseinfoServer = new HazardoubaseinfoServer({ baseURL: dataApiServer }, injectFilter);
// const realtimeTeam = new RealtimeTeam({ baseURL: dataApiServer }, injectFilter);
// const firePoint = new FirePointServer({ baseURL: dataApiServer }, injectFilter);
// const multiuleInterfaceServer = new MultiuleInterfaceServer({ baseURL: configServerPath });
// const weatherRainWaterServer = new WeatherRainWaterServer({ baseURL: publicPath }, injectFilter);
// const fireFroestModelServer = new FireFroestModelServer({ baseURL: publishObjectPath.value.serverPath }, modelRequireFilter);
// const forestFireSituationServer = new ForestFireSituationServer({ baseURL: publicPath }, injectFilter);
// const addressBookServer = new AddressBookServer({ baseURL: dataApiServer }, injectFilter);

// const mapServer = new MapServer({ baseURL: publicPath });
// const staticDataRequestServer = new StaticDataRequestServer({
//     baseURL: publicPath,
// });

// const gisToolServer = new GisToolServer({ baseURL: publicPath });
// const plotServer = new PlotServer({ baseURL: publicPath }, injectFilter);
// const plotNoSqlService = new PlotPgServiceNew({ baseURL: publishObjectPath.value.serverPathadmin }, injectFilter);
// const plotPgServiceNew = new PlotPgServiceNew({ baseURL: publishObjectPath.value.serverPathadmin }, injectFilter);
// //
// const disasterJudgeServer = new DisasterJudgeServer({
//     baseURL: configServerPath,
// });

// const hazServer = new HazServer({ baseURL: publicPath });

// const hazServerShip = new HazServerShip({ baseURL: publicPath });

// const normalResourceServer = new NormalResourceServer({ baseURL: publicPath });

// const pictureServer = new PictureServer({ baseURL: publicPath });

// const eventServer = new EventServer({ baseURL: publishObjectPath.value.eadsServerPath }, injectFilter);

// const managementOnDutyServer = new ManagementOnDutyServer(
//     { baseURL: configServerPath },
//     injectFilter,
// );

// const historicalEarthquakeServer = new HistoricalEarthquakeServer(
//     { baseURL: configServerPath },
//     injectFilter,
// );
// const airStationServer = new AirStationServer(
//     { baseURL: configServerPath },
//     injectFilter,
// );
// const nomalLeftServer = new NomalLeftServer({ baseURL: publicPath }, injectFilter);

// // 由之前的配置vue.config.js aip 转成josn配置
// const pushDataRequestServe = new PushDataRequestServe(
//     { baseURL: configServerPath },
//     injectFilter,
// );

// // 由之前的配置vue.config.js aip 转成josn配置
// const pushDataRequestServeOther = new PushDataRequestServeOther(
//     { baseURL: publishObjectPath.value.serverPathadmin },
//     injectFilter,
// );
// const districtServer = new DistrictServer(
//     { baseURL: configServerPath },
//     injectFilter,
// );
// const rescueTeamServer = new RescueTeamServer(
//     { baseURL: configServerPath },
//     injectFilter,
// );
// const rescueTeamFakeServer = new RescueTeamFakeServer(
//     { baseURL: configServerPath },
//     injectFilter,
// );
// const geocodeServer = new GeocodeServer(
//     { baseURL: configServerPath },
//     injectFilter,
// );
// const essearchServer = new ESSearchServer({baseURL: publicPath});
// const rescueSituationServer = new RescueSituationServer(
//     { baseURL: publicPath },
//     injectFilter,
// );
// const locationServer = new LocationServer({ baseURL: publicPath });
// // 事件回显到新的操作屏
// const eventPushServer = new EventPushServer(
//     { baseURL: configServerPath },
// );
// // 区域选择server
// const regionSelectionServer = new RegionSelectionServer(
//     { baseURL: configServerPath },
// );
// // 登录请求
// const loginServer = new LoginServer({
//     baseURL: publishObjectPath.value.serverPathadmin,
// },
//     modelRequireFilter,
// );
// // 事件列表  事件处置  获取事件信息(处置新建)
// const getEvemtInfoOrCreatedInfo = new GetEvemtInfoOrCreatedInfo({
//     baseURL: configServerPath,
// },
//     injectFilter,
// );
// // 展示屏更改经验圈的时候 通知支撑屏 同步信息
// const updateEadsEaffectRange = new UpdateEadsEaffectRange({
//     baseURL: publishObjectPath.value.serverPathadmin,
// },
//     injectFilter,
// );
// // 登陆验证
// const userToken = new UserToken({
//     baseURL: configServerPath,
// },
//     injectFilter,
// );
// const eadsWebPlot = new EadsWebPlot({
//     baseURL : configServerPath,
//   },
//   injectFilter,
//   );
// // 应急响应 Emis
// const emisEmergencyPlan = new EmisEmergencyPlan(
//     { baseURL: planResponse },
//     emisRequireFilter,
// );
// // 应急响应 Edss
// const edssEmergencyPlan = new EdssEmergencyPlan(
//     { baseURL: publishObjectPath.value.serverPathadmin },
//     injectFilter,
// );
// // 辅助分析
// const eventAnalysisServer = new EventAnalysisServer(
//     { baseURL: analysisServer },
//     injectFilter,
// );
// // egis数据服务
// const egisDataServer = new EgisDataServer(
//     { baseURL: publishObjectPath.value.egisDataServer },
//     emisRequireFilter,
// );

// // 防护目标、风险隐患、应急资源公用查询服务
// const egisDataServerRight = new EgisDataServerRight(
//     { baseURL: publishObjectPath.value.egisDataServer },
//     injectFilter,
// );

// // 辅助分析详情页面
// const detailsAnalysisServer = new DetailsAnalysisServer(
//     { baseURL: analysisServer },
//     injectFilter,
// );
// const gisStaticServer = new GisStaticServer(
//     { baseURL: publicPath },
//     injectFilter,
// );
// // 风险分析数据
// const eventRiskServer = new EventRiskServer(
//     // { baseURL: publishObjectPath.value.gempUserServer },
//     { baseURL: planResponse },
//     injectFilter,
// );

// // 储罐火消防灭火
// const gisStorageTankServer = new GisStorageTankServer(
//     { baseURL: analysisServer },
//     modelRequireFilter,
// );

// // 压力容器爆炸
// const gisChemicalBlastServer = new GisChemicalBlastServer(
//     { baseURL: publishObjectPath.value.chemicalexplodeServer },
//     modelRequireFilter,
// );

// // 大气扩散专题
// const atmosphericDiffusionServer = new AtmosphericDiffusionServer(
//     { baseURL: '' },
//     modelRequireFilter,
// );
// const popularAnalysisServer = new PopularAnalysisServer({ baseURL: publishObjectPath.value.publicHealthPopularServer }, injectFilter);


// export {
//     dizhenServer,
//     buildingServer,
//     eventInfoServer,
//     warningInfoServer,
//     weatherServerUpdated, // 现在服务端将和天气相关的接口进行了统一，即前端和天气相关的功能都应该走这个实例
//     understandCard,
//     riverWaterSystemServe,
//     dataSourcesServer,
//     progressSituationServer,
//     mapServer,
//     staticDataRequestServer,
//     gisToolServer,
//     pictureServer,
//     eventServer,
//     plotServer,
//     plotNoSqlService,
//     plotPgServiceNew,
//     disasterJudgeServer,
//     multiuleInterfaceServer,
//     hazServer,
//     hazServerShip,
//     normalResourceServer,
//     managementOnDutyServer,
//     historicalEarthquakeServer,
//     airStationServer,
//     pushDataRequestServe, // 根据事件id、组件位置id，请求推送的数据
//     pushDataRequestServeOther, // 18080
//     districtServer,
//     rescueTeamServer,
//     rescueTeamFakeServer,
//     geocodeServer,
//     essearchServer,
//     nomalLeftServer, // 常态左侧应急资源tab的icon
//     locationServer,
//     rescueSituationServer, // 调度态势查询
//     eventPushServer, // 事件回显到新的操作屏
//     hazardoubaseinfoServer, // 危化企业的基本信息
//     realtimeTeam,  // 实时队伍的数据
//     firePoint,  // 火点数据服务
//     regionSelectionServer, // 区域选择server
//     loginServer,
//     getEvemtInfoOrCreatedInfo, // 事件列表  事件处置  获取事件信息(处置新建)
//     updateEadsEaffectRange, // 变更经验圈通知推送屏
//     userToken, // token 验证
//     eadsWebPlot, // 支撑屏在展示屏中的标绘
//     oneKeyDispatchEdssServer, // 一键调度edss发短信
//     emisEmergencyPlan, // 应急响应 改造后的， emis
//     edssEmergencyPlan, // 应急响应 改造后的， edss
//     eventAnalysisServer, // 辅助分析
//     detailsAnalysisServer, // 辅助分析详情
//     weatherRainWaterServer, // 防汛气象雨水情请求服务
//     fireFroestModelServer, // 风险评估模型  监测站点请求服务
//     forestFireSituationServer, // 防汛森火态势
//     addressBookServer, // 防汛森火通讯录
//     egisDataServer, // egis数据服务
//     egisDataServerRight,
//     gisStaticServer,
//     eventRiskServer, // 风险分析数据
//     gisStorageTankServer, // 储罐火消防灭火
//     gisChemicalBlastServer, // 压力容器爆炸
//     popularAnalysisServer, // 公共卫生专题舆情分析服务
//     atmosphericDiffusionServer, // 大气扩散专题
// };
export {}