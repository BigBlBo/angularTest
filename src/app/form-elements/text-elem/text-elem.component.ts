import { Component, OnInit, Input } from '@angular/core';
import { ModelService } from '../../services/ModelService';

@Component({
  selector: 'app-text-elem',
  templateUrl: './text-elem.component.html',
  styleUrls: ['./text-elem.component.css']
})
export class TextElemComponent implements OnInit {
  @Input() element: string;
  @Input() typeEle: string;

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.modelService.conuter++;
    console.log(this.modelService.conuter);
  }

  getModelPart() {
    return this.modelService.model.table[this.modelService.screen];
  }
}
