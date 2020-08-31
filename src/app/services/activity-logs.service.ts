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

  getAllActivityLogs()  {
    return this.http.get(this.activityLogs).pipe(
    map(( response: Response ) => response.json()))
    .toPromise();
  }

  // getAllActivityLogs( id: string ) {
  //   return this.http.get( this.activityLogs)
  //   .map(( response: any ) => {
  //     console.log('SAL CHINGAO', response.json());
  //     return response.json();
  // })
  // .toPromise
  // }


}
