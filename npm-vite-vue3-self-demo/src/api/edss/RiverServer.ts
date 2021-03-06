import {RequestServerClass} from '@/api/Request';
import {jsonFileServer} from '@/api/common/install';

export class RiverServer {

    public rSerivce: any;

    constructor(opt?: any, axiosFilterFn?: any) {
        this.rSerivce = new RequestServerClass(opt);
        if ( axiosFilterFn ) {
            axiosFilterFn.call(this, this.rSerivce.serverObj);
        }
    }

    public getWarnStatistics() {
        const url = '/json/mockdata/river/WarnStatistics.json';
        let result: any = [];
        return new Promise((resolve, reject) => {
            jsonFileServer.getStaticJsonByUrl(url)
            .then((res: any) => {
                result = res && res.data || {};
                resolve(result);
            })
            .catch((error: any) => {
                resolve(result);
            })
        });
    }

    public getWarnList() {
        const url = '/json/mockdata/river/WarnList.json';
        let result: any = [];
        return new Promise((resolve, reject) => {
            jsonFileServer.getStaticJsonByUrl(url)
            .then((res: any) => {
                result = res && res.data && res.data.length && res.data  || [];
                resolve(result);
            })
            .catch((error: any) => {
                resolve(result);
            })
        });
    }
}
