import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // withComponentInputBinding sẽ lấy được id params tương ứng từ url và trong cấu hình routes
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        // paramsInheritanceStrategy: 'always' sẽ kế thừa params từ parent route để trong các route con có thể sử dụng params của parent
        paramsInheritanceStrategy: 'always',
      })
    ),
  ],
};
