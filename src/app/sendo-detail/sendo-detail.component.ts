import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";
import { SendoService } from "../sendo.service";
import { MessageService } from "../message.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-sendo-detail",
  templateUrl: "./sendo-detail.component.html",
  styleUrls: ["./sendo-detail.component.css"]
})
export class SendoDetailComponent implements OnInit {
  constructor(
    private sendo: SendoService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}
  total_products: number;
  count: number = 0;
  data: any;
  id: number;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");

    this.sendo.getProduct(this.id).subscribe(result => {
      this.data = result;
      console.log(result);
    });
  }
}
