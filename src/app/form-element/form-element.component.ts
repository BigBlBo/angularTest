import { Component, OnInit, Input } from '@angular/core';
import { ModelService } from '../services/ModelService';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {
  @Input() controlType: string;
  @Input() element: string;
  @Input() typeEle: string;
  @Input() register: string;


  constructor(private modelService: ModelService) { }

  ngOnInit() {
  }

  getModelPart() {
    return this.modelService.model.table[this.modelService.screen];
  }

  getReg() {
    const obj = this.modelService.registers[this.register];
    // console.log(Object.keys(obj).map(key => ({type: key, value: obj[key]})));
    return Object.keys(obj).map(key => ({type: key, value: obj[key]}));
  }

  changeScreen() {
    if (this.modelService.screen === 0) {
      this.modelService.screen = 1;
    } else {
      this.modelService.screen = 0;
    }
  }

  onSubmit() {
    console.log(JSON.stringify(this.getModelPart()));
  }
}
