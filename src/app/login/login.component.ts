import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  DoCheck,
  AfterViewChecked
} from "@angular/core";
import { Item } from "../item";
import { AppService } from "../app.service";
import firebaseApp from "../firebase.config";
import {MessageService} from "../message.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, AfterViewChecked {
  ngOnInit() {  }
  ngAfterViewChecked(){
    this.check();
  }

  ngDoCheck() {
    this.check();
  }

  constructor(private appService: AppService, private messageService: MessageService) {}

  result: string;
  name: string;

  login(username: string, password: string) {
    this.appService.getLogin(username, password).subscribe(
      result => {
        this.result = result;
        
      },
      error => {
        this.messageService.setMessage("Login error");
      }
    );
    console.log(this.result);
  }

  logout() {
    this.appService.logout().subscribe(result => {
      
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
