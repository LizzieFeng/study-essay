import GlobConfig from "@/util/ConfigRegistry";
import injectFilter from './RequireFilter';
import {ReservoirServer} from './ReservoirServer';
import { RiverServer } from "./RiverServer";

const reservoirServer = new ReservoirServer({},injectFilter,)

const riverServer = new RiverServer({}, injectFilter)

export  {
    reservoirServer,
    riverServer
};