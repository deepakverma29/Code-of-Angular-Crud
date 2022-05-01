import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-success-message',
  templateUrl: './show-success-message.component.html',
  styleUrls: ['./show-success-message.component.scss']
})
export class ShowSuccessMessageComponent implements OnInit {

  @Input() Message='';
  @Input() isVisible=false;
  constructor() { }

  ngOnInit(): void {
  }
  closeMessage(){
    this.isVisible=false;
    this.Message='';
  }
}
