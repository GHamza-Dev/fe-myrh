import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocalStorageService} from "../services/storage/local-storage.service";
import {Router} from "@angular/router";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.localStorageService.get('token');

    const route = this.router.routerState.snapshot.root;

    if (token && route.data && route.data?.['guard'] === 'AuthorizeGuard'){

      console.info("Intercepted by AppInterceptor")

      const clonedRequest = request.clone({
        headers: request.headers.set("Authorization",
          "Bearer " + token)
      });

      return next.handle(clonedRequest);
    }

    return next.handle(request);
  }
}
