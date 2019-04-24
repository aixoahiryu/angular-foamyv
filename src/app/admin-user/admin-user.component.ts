import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";
import { MessageService } from "../message.service";

@Component({
  selector: "admin-user",
  templateUrl: "./admin-user.component.html",
  styleUrls: ["./admin-user.component.css"]
})
export class AdminUserComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  search: string = "";
  asc: string = "asc";
  order: string = "name";
  total_products: number;
  count: number = 0;
  total: number = 0;

  ngOnInit() {
    this.messageService.search.subscribe(search => (this.search = search));
    this.messageService.search.subscribe(search => (this.search = search));
    this.messageService.asc.subscribe(mess => (this.asc = mess));
    this.messageService.order.subscribe(mess => (this.order = mess));
    this.messageService.count.subscribe(mess => (this.count = mess));
    this.messageService.CartItems.forEach(item => {
      this.total += item.price * item.counter_view;
    });
  }

  filterBy(prop: string, asc: string) {
    if (prop == "title") {
      prop = "name";
    }
    if (asc == "asc")
      return this.messageService.CartItems.sort((a, b) =>
        a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
      );
    else if (asc == "desc")
      return this.messageService.CartItems.sort((a, b) =>
        a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
      );
  }

  onCount(c: number) {
    this.messageService.setCount(this.count + c);
  }
}
