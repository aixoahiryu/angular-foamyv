import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";
import { MessageService } from "../message.service";

@Component({
  selector: "app-nav2",
  templateUrl: "./nav2.component.html",
  styleUrls: ["./nav2.component.css"]
})
export class Nav2Component implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  sendOrder(o: string) {
    this.messageService.setOrder(o);
  }

  sendAsc(a: string) {
    this.messageService.setAsc(a);
  }

  sendSearch(s: string) {
    this.messageService.setSearch(s);
  }

  sendSearch2(s2: string) {
    this.messageService.setSearch2(s2);
  }
}
