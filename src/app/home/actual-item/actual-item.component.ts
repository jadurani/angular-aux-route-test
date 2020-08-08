import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-actual-item',
  templateUrl: './actual-item.component.html',
  styleUrls: ['./actual-item.component.scss'],
})
export class ActualItemComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log({route: this.route.snapshot.paramMap.get('id')})
  }

}
