import { Component, OnInit } from '@angular/core';
import { ActivityLogsService } from '../../services/activity-logs.service';

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
  styleUrls: [ ],
  providers: [ ActivityLogsService ]
})
export class BabiesComponent implements OnInit {

  babies:             any[] = [];

  constructor( public _activity_logs_service_yts: ActivityLogsService ) {
    this._activity_logs_service_yts = _activity_logs_service_yts;
   }

  ngOnInit() {
    this.getAll();
  }

  getAll( ) {
    return this._activity_logs_service_yts.getAllBabies()
    .then( response => {
      console.log('babies: ', response);

      this.babies = response;

    })
    .catch(function (error) {
      return ;
    });
  }


}
