import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";
import { MessageService } from "../message.service";

@Component({
  selector: "app-nav1",
  templateUrl: "./nav1.component.html",
  styleUrls: ["./nav1.component.css"]
})
export class Nav1Component implements OnInit {
  constructor(private messageService: MessageService) {}

  count: number = 0;

  ngOnInit() {
    this.messageService.count.subscribe(mess => (this.count = mess));
  }
}
