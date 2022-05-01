import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-error-message',
  templateUrl: './show-error-message.component.html',
  styleUrls: ['./show-error-message.component.scss']
})
export class ShowErrorMessageComponent implements OnInit {
  @Input() Message='';
  @Input() isVisibleError=false;
  constructor() { }

  ngOnInit(): void {
  }
  closeMessage(){
    this.isVisibleError=false;
    this.Message='';
  }
}
