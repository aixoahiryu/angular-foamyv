import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  DoCheck
} from "@angular/core";
import { Item } from "../item";
import { AppService } from "../app.service";
import firebaseApp from "../firebase.config";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  ngOnInit() {}

  ngDoCheck() {
    this.check();
  }

  constructor(private appService: AppService) {}

  result: string;
  name: string;

  login(username: string, password: string) {
    this.appService.getLogin(username, password).subscribe(
      result => {
        this.result = result;
        this.check();
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.result);
  }

  logout() {
    this.appService.logout().subscribe(result => {
      console.log(result);
      this.check();
    });
  }

  loginState: boolean;

  check() {
    this.appService.checkLogin().subscribe(result => {
      this.loginState = result.state;
      this.name = result.username;
    });
  }
}
