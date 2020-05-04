import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  envProps = {
    profilePicUrl: 'https://picsum.photos',
  };
  browserWindow = window || {};
  browserWindowEnv = this.browserWindow['__env'] || {};

  constructor() {}

  deepMerge() {
    for (const key in this.browserWindowEnv) {
      if (this.browserWindowEnv.hasOwnProperty(key)) {
        this.envProps[key] = window['__env'][key];
      }
    }
  }
}
