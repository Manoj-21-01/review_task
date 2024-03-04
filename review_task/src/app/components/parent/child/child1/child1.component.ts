import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-services/data-services.service';
import { ColorService } from 'src/app/services/colorservices/color-services.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnDestroy {

  message!: string;
  subscription!: Subscription;
  color: string = ''; 

  constructor(private data: DataService, private colorService: ColorService) { }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => {
      this.message = message;
    });

    this.colorService.currentColor.subscribe(color => {
      this.color = color;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
