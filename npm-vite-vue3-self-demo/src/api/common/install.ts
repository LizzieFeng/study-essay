import GlobConfig from "@/util/ConfigRegistry";
import injectFilter from './RequireFilter';
import {JsonFileServer} from './JsonFileServer';

const jsonFileServer =  new JsonFileServer(
    { baseURL: '/' },
    injectFilter,
)
export {
    jsonFileServer,
};