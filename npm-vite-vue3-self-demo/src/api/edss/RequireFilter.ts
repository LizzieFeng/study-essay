const BaseFilter = {
    request(servObj: any): any {
        servObj.interceptors.request.use((config: any) => {
            return config;
        }, (error: any) => {
            return Promise.reject(error);
        });
    },
    response(servObj: any) {
        servObj.interceptors.response.use( (res: any) => {
          return res.data;
          return Promise.reject(new Error('未知服务器错误'));
        });
    },
  };
  
  function injectFilter(servObj: any) {
    BaseFilter.request(servObj);
    BaseFilter.response(servObj);
  }
  
  
  export default injectFilter;
  