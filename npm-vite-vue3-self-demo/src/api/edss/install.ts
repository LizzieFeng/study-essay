import GlobConfig from "@/util/ConfigRegistry";
import injectFilter from './RequireFilter';
import {ReservoirServer} from './ReservoirServer';

const reservoirServer = new ReservoirServer(
    {},
    injectFilter,
)

export  {
    reservoirServer
};