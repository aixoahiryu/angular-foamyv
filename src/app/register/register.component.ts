import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";
import { MessageService } from "../message.service";
import { AppService } from "../app.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private messageService: MessageService, private appService: AppService, private router: Router) {}
  avatarLink: string = "";

  ngOnInit() {}

  onSubmit(value){
	this.appService.createUser(value, this.avatarLink)
	.then(
	  res => {
	    this.router.navigate(['/sendo']);
	  }
	)
}

}
