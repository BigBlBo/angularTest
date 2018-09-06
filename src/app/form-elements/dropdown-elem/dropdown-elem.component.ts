import { Component, OnInit, Input } from '@angular/core';
import { ModelService } from '../../services/ModelService';

@Component({
  selector: 'app-dropdown-elem',
  templateUrl: './dropdown-elem.component.html',
  styleUrls: ['./dropdown-elem.component.css']
})
export class DropdownElemComponent implements OnInit {
  @Input() controlType: string;
  @Input() element: string;
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

}
