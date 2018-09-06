import { Component } from '@angular/core';
import { ModelService } from './services/ModelService';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';

  constructor(private modelService: ModelService) {

  }

  getModelPart() {
    return this.modelService.model.table[this.modelService.screen];
  }

  changeScreen() {
    if (this.modelService.screen === 0) {
      this.modelService.screen = 1;
    } else {
      this.modelService.screen = 0;
    }
  }

  onSubmit(f: FormGroup) {
    console.log(f.value);
    console.log(JSON.stringify(this.getModelPart()));
  }
}
