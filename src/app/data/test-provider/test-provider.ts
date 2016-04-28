import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";

export class TestProviderConfig {
  constructor(public configValue: String) {

  }
}

@Injectable()
export class TestProvider {
  constructor(private _config: TestProviderConfig) {}

  syncMethod() {
    return this._config.configValue;
  }

  eventEmitterMethod() {
    return Observable.timer(10, 10).take(20);
  }

  promiseMethod() {
    return new Promise((resolve) => setTimeout(() => resolve(this._config.configValue), 1500));
  }
}
