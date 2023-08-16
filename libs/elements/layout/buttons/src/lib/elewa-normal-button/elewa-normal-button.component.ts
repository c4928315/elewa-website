import { Component, Input } from '@angular/core';
import { ButtonData } from 'libs/models/schema/ui/buttons/buttons';

@Component({
  selector: 'elewa-normal-button',
  templateUrl: './elewa-normal-button.component.html',
  styleUrls: ['./elewa-normal-button.component.scss'],
})
export class ElewaNormalButtonComponent {
 

  constructor() {
    this.data = {  
      text: "",
      bgColor: "",
      color: "",
      hoverBgColor: "",
      hoverColor: ""
    };
  }

  @Input() data: ButtonData;
}
