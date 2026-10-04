import {
  Injectable,
  inject
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  environment
} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RobotControlService {

  private readonly http =
    inject(HttpClient);

  private readonly apiUrl =
    environment.robotControlUrl;


  start(): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/start`,
      {}
    );
  }


  stop(): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/stop`,
      {}
    );
  }


  status(): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/status`
    );
  }


  getPipelineState(): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/pipeline-state`
    );
  }


  getLogs(
    service: string
  ): Observable<any> {

    return this.http.get(
      `${this.apiUrl}/logs/${encodeURIComponent(service)}`
    );
  }

}