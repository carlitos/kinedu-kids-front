import { Component, OnInit } from '@angular/core';
import { ActivityLogsService } from '../../services/activity-logs.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: [ ],
  providers: [ ActivityLogsService ]
})
export class ActivitiesComponent implements OnInit {

  activities:             any[] = [];

  constructor( public _activity_logs_service_yts: ActivityLogsService ) {
    this._activity_logs_service_yts = _activity_logs_service_yts;
  }

  ngOnInit() {
    this.getAll();
  }

  getAll( ) {
    return this._activity_logs_service_yts.getAllActivities()
    .then( response => {
      console.log('activities: ', response);

      this.activities = response;

    })
    .catch(function (error) {
      return ;
    });
  }


}
