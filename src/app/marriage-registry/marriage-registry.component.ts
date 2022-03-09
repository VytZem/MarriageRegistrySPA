import { Component, OnInit } from '@angular/core';
import { MarriageRegistryService } from '../shared/marriage-registry.service';

@Component({
  selector: 'app-marriage-registry',
  templateUrl: './marriage-registry.component.html',
  styles: [
  ]
})
export class MarriageRegistryComponent implements OnInit {

  constructor(public service: MarriageRegistryService) { }

  ngOnInit(): void { }

}
