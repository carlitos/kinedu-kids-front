import { Component, OnInit } from '@angular/core';
import { ActivityLogsService } from '../../services/activity-logs.service';

@Component({
  selector: 'app-activity-logs',
  templateUrl: './activity-logs.component.html',
  styleUrls: [ ],
  providers: [ ActivityLogsService ]
})
export class ActivityLogsComponent implements OnInit {

  activity_logs:             any[] = [];

  constructor( public _activity_logs_service_yts: ActivityLogsService) {
    this._activity_logs_service_yts = _activity_logs_service_yts;
   }

  ngOnInit() {
    this.getAll();
  }


  getAll( ) {
    return this._activity_logs_service_yts.getAllActivityLogs()
    .then( activity_logs => {
      console.log('activity logs: ', activity_logs);

      this.activity_logs = activity_logs;
    })
    .catch(function (error) {
      return ;
    });
  }


}
