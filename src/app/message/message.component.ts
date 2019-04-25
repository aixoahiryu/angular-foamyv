import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";
import { MessageService } from "../message.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class Nav2Component implements OnInit {
  constructor(private messageService: MessageService) {}
  message:string = "";

  ngOnInit() {
    this.messageService.message.subscribe(mess => (this.message = mess));
  }

}
