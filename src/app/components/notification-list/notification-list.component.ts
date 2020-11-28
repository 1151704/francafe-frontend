import { NotificacionService } from './../../core/notificacion.service';
import { NotificationType, Notification } from './../../models/notification';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  notifications: Notification[] = [];
  private _subscription: Subscription;

  constructor(private _notificationSvc: NotificacionService) { }

  private _addNotification(notification: Notification) {

    this.notifications.push(notification);

    if (notification.timeout !== 0) {
      setTimeout(() => this.close(notification), notification.timeout);

    }
  }

  ngOnInit() {
    this._subscription = this._notificationSvc.getObservable().subscribe(notification => this._addNotification(notification));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  close(notification: Notification) {
    this.notifications = this.notifications.filter(notif => notif.id !== notification.id);
  }


  className(notification: Notification): string {

    let style: string;

    switch (notification.type) {

      case NotificationType.success:
        style = 'noti-success';
        break;

      case NotificationType.warning:
        style = 'noti-warning';
        break;

      case NotificationType.error:
        style = 'noti-error';
        break;

      default:
        style = 'noti-info';
        break;
    }

    return style;
  }

}
