import { TokenStorageService } from './auth/token-storage.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'francafe-frontend';

  secundsSeccionValidate = 600; // # of secunds

  constructor(private router: Router,  private token: TokenStorageService) {
  }

  ngOnInit() {
    setInterval(() => {
      if (this.router.url != '/inicio/signin') {
        this.token.validate();
      }
    },this.secundsSeccionValidate*1000);
  }

}
