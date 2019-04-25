import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MessageService {
  CartItems: any[] = [];

  private messageSource = new BehaviorSubject("");
  message = this.messageSource.asObservable();

  private searchSource = new BehaviorSubject("");
  private search2Source = new BehaviorSubject("");
  private ascSource = new BehaviorSubject("asc");
  private orderSource = new BehaviorSubject("title");
  private countSource = new BehaviorSubject(0);
  private minPriceSource = new BehaviorSubject(0);
  private maxPriceSource = new BehaviorSubject(0);
  search = this.searchSource.asObservable();
  search2 = this.search2Source.asObservable();
  count = this.countSource.asObservable();
  asc = this.ascSource.asObservable();
  order = this.orderSource.asObservable();
  minPrice = this.minPriceSource.asObservable();
  maxPrice = this.maxPriceSource.asObservable();

  setMinPrice(c: number) {
    this.minPriceSource.next(c);
  }

  setMaxPrice(c: number) {
    this.maxPriceSource.next(c);
  }

  setSearch(message: string) {
    this.searchSource.next(message);
  }

  setSearch2(message: string) {
    this.search2Source.next(message);
  }

  setCount(c: number) {
    this.countSource.next(c);
  }

  setAsc(a: string) {
    this.ascSource.next(a);
  }

  setOrder(o: string) {
    this.orderSource.next(o);
  }

  addCart(item: any) {
    var exist = 0;
    this.CartItems.forEach(element => {
      if (element.id == item.id) {
        element.counter_view += 1;
        exist = 1;
      }
    });
    if (exist == 0) {
      item.counter_view = 1;
      this.CartItems.push(item);
    }
  }

  clear() {
    this.messages = [];
  }
}
