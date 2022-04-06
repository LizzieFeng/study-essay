// import { RequestWithoutServerClass } from '@/util/requestWithoutToken';
// import publishObjectPath from '@/util/configRegistry';
// const  CryptoJS = require('crypto-js');

// export class LoginServer {

//   public neoService: any;
//   public euipService: any;

//   constructor(opt: any, axiosFilterFn?: any) {
//       this.neoService = new RequestWithoutServerClass(opt);
//       // euip的接口
//       const euipOpt = {baseURL: publishObjectPath.value.euipUrl + '/euip'};
//       this.euipService = new RequestWithoutServerClass(euipOpt);
//       if (axiosFilterFn) {
//         axiosFilterFn.call(this, this.euipService.serverObj);
//         // 公共publicToken登录
//         axiosFilterFn.call(this, this.neoService.serverObj);

//       }
//   }

//   // 公共publicToken登录。
//   public passLoginByPublicToken(parma: any) {
//     const url = 'auth/baseTokenLogin';
//     return this.neoService.serverObj.post(url , parma);
//   }
//   /** 密码加密接口*/
//   public encryption() {
//     const url = '/api/config/system/batchkeys/v1';
//     const parma: any = { keys: ['system_identification_login_name']};
//     return  new Promise((resolve, reject) => {
//       this.euipService.serverObj.post(url, parma).then((response: any) => {
//         resolve(response.data);
//       }, (err: any) => {
//         reject(err);
//       });
//     });
//   }
//   /** 密码密钥加密方法*/
//   public aesEncrypt(message: any, key: any, iv= null) {
//     const encryptKey = CryptoJS.enc.Utf8.parse(key);
//     const cipher = CryptoJS.AES.encrypt(message, encryptKey, {
//         iv: !!iv ? CryptoJS.enc.Hex.parse(iv) : null,
//         mode: !!iv ? CryptoJS.mode.CBC : CryptoJS.mode.ECB,
//         padding: CryptoJS.pad.Pkcs7,
//     });
//     return cipher.ciphertext.toString(CryptoJS.enc.Base64);
//   }


//     /** euip的登录接口*/
//   public toLogin(parma: any) {
//     const url = '/auth/login';
//     return  this.neoService.serverObj.post(url , parma);
//   }
// }
export {}