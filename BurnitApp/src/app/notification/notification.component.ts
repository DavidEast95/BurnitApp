import { NotificationService } from '../services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types

  //Niall - notification logic

  display: boolean = false;
  message: string;
  constructor(private notifier: NotificationService) {
    notifier.emitter.subscribe(
      data => {
        this.display = data.display;
        this.message = data.message;
      }
    );
  }

  removeMessage() {
    this.display = false;
    this.message = '';
  }
  
  ngOnInit() {
  }

}
