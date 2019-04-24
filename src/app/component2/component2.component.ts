import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";
import { MessageService } from "../message.service";

@Component({
  selector: "app-com2",
  templateUrl: "./component2.component.html",
  styleUrls: ["./component2.component.css"]
})
export class Com2Component implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  @Input() item1: any;

  @Output() count = new EventEmitter<number>();

  sendCount(c: number) {
    this.count.emit(c);
    this.messageService.addCart(this.item1);
  }
}
