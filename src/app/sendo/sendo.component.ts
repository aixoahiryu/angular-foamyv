import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";
import { SendoService } from "../sendo.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-sendo",
  templateUrl: "./sendo.component.html",
  styleUrls: ["./sendo.component.css"]
})
export class SendoComponent implements OnInit {
  constructor(
    private sendo: SendoService,
    private messageService: MessageService
  ) {}
  search: string = "";
  search2: string = "";
  asc: string = "asc";
  order: string = "name";
  total_products: number;
  count: number = 0;
  data: any[];
  searchData: any[];
  display: any[];

  ngOnInit() {
    this.messageService.search.subscribe(search => (this.search = search));
    this.messageService.search2.subscribe(search => {
      this.sendo
        .searchProducts(search)
        .subscribe(result => (this.searchData = result.data));
      this.search2 = search;
    });
    this.messageService.asc.subscribe(mess => (this.asc = mess));
    this.messageService.order.subscribe(mess => (this.order = mess));
    this.messageService.count.subscribe(mess => (this.count = mess));

    this.sendo.getProducts().subscribe(result => {
      this.total_products = result.product_total;
      this.data = result.data;
      //console.log(result);
    });
  }

  filterBy(prop: string, asc: string) {
    if (this.search2.length > 0) {
      this.display = this.searchData;
    } else if (this.search2.length == 0) {
      this.display = this.data;
    }
    if (prop == "title") {
      prop = "name";
    }
    if (asc == "asc")
      return this.display.sort((a, b) =>
        a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
      );
    else if (asc == "desc")
      return this.display.sort((a, b) =>
        a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
      );
  }

  onCount(c: number) {
    this.messageService.setCount(this.count + c);
  }
}
