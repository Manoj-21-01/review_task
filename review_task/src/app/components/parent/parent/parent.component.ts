import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data-services/data-services.service';
import { ColorService } from 'src/app/services/colorservices/color-services.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  userInput: string = '';
  colorInput: string = ''; // Input for color

  constructor(private data: DataService, private router: Router, private colorService: ColorService) { }

  onSubmit() {
    this.data.changeMessage(this.userInput);
    this.colorService.changeColor(this.colorInput); // Change color
    this.router.navigate(['/parent/child1']); // Navigate to child1 component
  }
}
