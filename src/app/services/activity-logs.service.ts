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
  private activitiesEndpoint = environment.backend + 'api/v1/activities';
  

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

  getAllActivities()  {
    return this.http.get(this.activitiesEndpoint).pipe(
    map(( response: Response ) => response.json()))
    .toPromise();
  }



}
