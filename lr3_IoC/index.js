var NetworkErrorTotalSenrtyService = /** @class */ (function () {
    function NetworkErrorTotalSenrtyService() {
        this.counter = 0;
    }
    NetworkErrorTotalSenrtyService.prototype.logRequest = function (request) {
        this.counter++;
        console.log("request " + request + " to enpoint end - total error count = " + this.counter);
    };
    return NetworkErrorTotalSenrtyService;
}());
var NetworkErrorSenrtyService = /** @class */ (function () {
    function NetworkErrorSenrtyService() {
    }
    NetworkErrorSenrtyService.prototype.logRequest = function (request) {
        console.log("request " + request + " to enpoint end with error - time:" + new Date().getTime());
    };
    return NetworkErrorSenrtyService;
}());
var CustomAxios = /** @class */ (function () {
    function CustomAxios(service) {
        this.service = service;
    }
    CustomAxios.prototype.doSomeJob = function (request) {
        var response = this.doRequest(request);
        if (response.data)
            return;
        this.service.logRequest(request);
    };
    CustomAxios.prototype.doRequest = function (request) {
        console.log("request " + request + " is done");
        return Math.random() > 0.5
            ? { data: true, error: null }
            : { data: null, error: true };
    };
    return CustomAxios;
}());
var request = "post";
// success counter
var axiosInstance = new CustomAxios(new NetworkErrorSenrtyService());
axiosInstance.doSomeJob("api/endpoint1");
axiosInstance.doSomeJob("api/endpoint2");
axiosInstance.doSomeJob("api/endpoint3");
// error counter
axiosInstance.service = new NetworkErrorTotalSenrtyService();
axiosInstance.doSomeJob("api/endpoint1");
axiosInstance.doSomeJob("api/endpoint2");
axiosInstance.doSomeJob("api/endpoint3");
