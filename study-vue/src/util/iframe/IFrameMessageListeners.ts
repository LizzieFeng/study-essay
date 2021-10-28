import { IFrameMessageBus } from './IFrameMessageBus';
import { MessageNames } from './IFrameMessageNames';
import {
    ToggleEarlyWarning,
    ToggleWeather,
} from './IFrameMessageInterface';
import Vue from 'vue';
/**
 * IFrame消息监听，触发不同的动作
 */
export class IFrameMessageListeners {
    private bus: IFrameMessageBus;
    private app: Vue; // App.vue 实例
    constructor(bus: IFrameMessageBus, app: Vue) {
        this.bus = bus;
        this.app = app;
    }

    public bind() {
        const messageBus: any = (this.app as any).messageBus;
        const store: any = (this.app as any).$store;
    }
}
