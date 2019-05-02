import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";
import { MessageService } from "../message.service";
import { AppService } from "../app.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  constructor(private messageService: MessageService, private appService: AppService, private router: Router,
  private location: Location) {}

  ngOnInit() {}

  onSubmit(email, password){
	  this.appService.createUser(email, password).subscribe(result => {
      this.router.navigate(["/sendo"]);

    });
  }

  goBack(){
    this.location.back();
  }

}
