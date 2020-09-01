import { Component, OnInit } from '@angular/core';
import { ActivityLogsService } from '../../services/activity-logs.service';

@Component({
  selector: 'app-assistants',
  templateUrl: './assistants.component.html',
  styleUrls: [ ],
  providers: [ ActivityLogsService ]
})
export class AssistantsComponent implements OnInit {

  assistants: any[] = [];

  constructor( public _activity_logs_service_yts: ActivityLogsService ) {
    this._activity_logs_service_yts = _activity_logs_service_yts;
  }

  ngOnInit() {
    this.getAll();
  }

  getAll( ) {
    return this._activity_logs_service_yts.getAllAssistants()
    .then( response => {
      console.log('assistants: ', response);

      this.assistants = response;

    })
    .catch(function (error) {
      return ;
    });
  }


}
