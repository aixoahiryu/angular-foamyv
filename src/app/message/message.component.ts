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
					opacity: 1,
					width: '200px'
				})),
				state('hide', style({
					opacity: 0,
					width: '0px'
				})),
				transition('* => hide', [
					animate('1s')
				]),
				transition('* => show', [
					animate('0.5s')
				]),
			]),
		trigger('filterAnimation', [
			transition(':enter, * => 0, * => -1', []),
			transition(':increment', [
				query(':enter', [
					style({ opacity: 0, width: '0px'}),
					stagger(50, [
						animate('300ms ease-out', style({ opacity: 1, width: '*'})),
					]),
				], { optional: true })
			]),
			transition(':decrement', [
				query(':leave', [
          style({ width: '*'}),
					stagger(50, [
						animate('300ms ease-out', style({ opacity: 0, width: '0px'})),
					]),
				])
			]),
		]),
	]
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
