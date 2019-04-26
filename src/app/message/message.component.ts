import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item";
import { MessageService } from "../message.service";
import {trigger, transition, query, style, stagger, animate, state} from "@angular/animations";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"],
  animations: [
    trigger('trigger1', [
				state('show', style({
					opacity: 1.0,
				})),
				state('hide', style({
					opacity: 0.0,
				})),
				transition('show => hide', [
					animate('1s')
				]),
				transition('hide => show', [
					animate('0.5s')
				]),
			]),
  	/*trigger('trigger1', [
  		state('true', style({ opacity: 0.0 })),
  		state('false', style({ opacity: 1.0 })),
  		transition('false <=> true', animate(500))
  	])*/
  ],
})
export class MessageComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  message:string = "";
  hideMessage: boolean = true;

  ngOnInit() {
    this.messageService.message.subscribe(mess => {
      this.message = mess;
      if(mess.length>0)
        {
          this.hideMessage = false;
        }
    });
  }

}
