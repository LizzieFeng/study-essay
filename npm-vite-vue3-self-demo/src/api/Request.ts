
import axios from 'axios';

export class RequestServerClass {

    public serverObj: any;

    constructor(opt?: object) {
        const obj = Object.assign({}, opt);
        this.serverObj = axios.create(
            obj,
        );
    }
}
