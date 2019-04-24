import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";
import { MessageService } from "../message.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"]
})
export class DisplayComponent implements OnInit {
  ngOnInit() {
    this.messageService.search.subscribe(search => (this.search = search));
    this.messageService.asc.subscribe(mess => (this.asc = mess));
    this.messageService.order.subscribe(mess => (this.order = mess));
    this.messageService.count.subscribe(mess => (this.count = mess));
  }

  constructor(private messageService: MessageService) {}

  Items: Item[] = [
    { title: "Black T-shirt", price: 40 },
    { title: "White T-shirt", price: 50 },
    { title: "Business Suit", price: 45 },
    { title: "Wedding Vest", price: 44 },
    { title: "Wedding Dress", price: 43 }
  ];

  count: number = 0;
  order: string = "title";
  asc: string = "asc";
  search: string = "";

  onCount(c: number) {
    this.messageService.setCount(this.count + c);
  }

  filterBy(prop: string, asc: string) {
    if (asc == "asc")
      return this.Items.sort((a, b) =>
        a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
      );
    else if (asc == "desc")
      return this.Items.sort((a, b) =>
        a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
      );
  }
}
