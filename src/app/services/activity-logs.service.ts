import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogsService {

  constructor( private http: Http ) { }

  private activityLogs = environment.backend + 'api/v1/activity_logs';
  private babiesEndpoint = environment.backend + 'api/v1/babies';

  getAllActivityLogs()  {
    return this.http.get(this.activityLogs).pipe(
    map(( response: Response ) => response.json()))
    .toPromise();
  }

  getAllBabies()  {
    return this.http.get(this.babiesEndpoint).pipe(
    map(( response: Response ) => response.json()))
    .toPromise();
  }



}
