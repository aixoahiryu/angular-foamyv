import { Component } from "@angular/core";
import { Item } from "./item";
import {slideInAnimation} from "./animation";
import {Router} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideInAnimation]
})
export class AppComponent {
  constructor(private router: Router){}

  Items: Item[] = [
    { title: "Black T-shirt", price: 40 },
    { title: "White T-shirt", price: 50 },
    { title: "Business Suit", price: 45 },
    { title: "Wedding Vest", price: 44 },
    { title: "Wedding Dress", price: 43 }
  ];

  count: number = 0;
  onCount(c: number) {
    this.count += c;
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

  order: string = "title";
  asc: string = "asc";
  search: string = "";
  onOrder(o: string) {
    this.order = o;
  }

  onAsc(a: string) {
    this.asc = a;
  }

  onSearch(s: string) {
    this.search = s;
  }

  prepareRoute(outlet: RouterOutlet) {
	return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
}
