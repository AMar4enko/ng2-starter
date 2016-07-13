import {
  fdescribe,
  beforeEach,
  beforeEachProviders,
  inject,
  async,
  it
} from 'angular2/testing';

import {TestProviderConfig, TestProvider} from "./test-provider";
import {provide} from "angular2/core";

describe('TestProvider', () => {
  let config: TestProviderConfig = new TestProviderConfig('test-value');
  let testProvider: TestProvider;

  beforeEachProviders(() => [
    provide(TestProviderConfig, {useValue: config}),
    TestProvider
  ]);

  beforeEach(inject([TestProvider], (_testProvider) => {
    testProvider = _testProvider;
  }));

  it('has sync method', () => {
    expect(testProvider.syncMethod()).toEqual(config.configValue);
  });

  it('has promise method', async(inject([], () => {
    return testProvider.promiseMethod()
      .then((value) => {
        expect(value).toEqual(config.configValue);
      });
  })));

  it('has event emitter method', (done) => {
    let spyObject = {
      subscriber: () => {}
    };

    spyOn(spyObject, 'subscriber');

    testProvider.eventEmitterMethod()
      .subscribe(spyObject.subscriber, null, () => {
        expect(spyObject.subscriber).toHaveBeenCalledTimes(20);
        done();
      });
  });
});
