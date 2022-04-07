import {RequestServerClass} from '@/api/Request';


export class JsonFileServer {

    public rSerivce: any;

    constructor(opt?: any, axiosFilterFn?: any) {
        this.rSerivce = new RequestServerClass(opt);
        if ( axiosFilterFn ) {
            axiosFilterFn.call(this, this.rSerivce.serverObj);
        }
    }

    public getStaticJsonByUrl(url: string) {
        return new Promise((resolve, reject) => {
            this.rSerivce.serverObj.get(url)
            .then((res: any) => {
                resolve(res)
            })
            .catch((error: any) => {
                resolve({})
            })
        });
    }
}
