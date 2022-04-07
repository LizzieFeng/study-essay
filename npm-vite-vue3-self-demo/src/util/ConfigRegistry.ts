import {ref, reactive} from 'vue';
import * as BaseConfig from '/public/json/config/BaseConfig.json';
const GlobConfig: any = reactive(
    {
        BaseConfig: reactive({...BaseConfig}),
        MapConfig: '',
    }
);


export default GlobConfig;