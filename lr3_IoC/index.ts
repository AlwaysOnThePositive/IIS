interface SenrtyService {
  logRequest(request: string): void;
}

class NetworkErrorTotalSenrtyService implements SenrtyService {
  counter = 0;
  public logRequest(request: string): void {
    this.counter++;
    console.log(
      `request ${request} to enpoint end - total error count = ${this.counter}`
    );
  }
}

class NetworkErrorSenrtyService implements SenrtyService {
  public logRequest(request: string): void {
    console.log(
      `request ${request} to enpoint end with error - time:${new Date().getTime()}`
    );
  }
}

class CustomAxios {
  service: SenrtyService;

  constructor(service: SenrtyService) {
    this.service = service;
  }

  doSomeJob(request: string): any {
    const response = this.doRequest(request);
    if (response.data) return;

    this.service.logRequest(request);
  }

  doRequest(request: string): any {
    console.log(`request ${request} is done`);
    return Math.random() > 0.5
      ? { data: true, error: null }
      : { data: null, error: true };
  }
}

// error sentry
const axiosInstance = new CustomAxios(new NetworkErrorSenrtyService());
axiosInstance.doSomeJob("api/endpoint1");
axiosInstance.doSomeJob("api/endpoint2");
axiosInstance.doSomeJob("api/endpoint3");

// error total sentry
axiosInstance.service = new NetworkErrorTotalSenrtyService();
axiosInstance.doSomeJob("api/endpoint1");
axiosInstance.doSomeJob("api/endpoint2");
axiosInstance.doSomeJob("api/endpoint3");
