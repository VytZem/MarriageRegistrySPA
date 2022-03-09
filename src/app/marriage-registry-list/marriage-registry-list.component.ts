import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { MarriageRegistryService } from  'src/app/shared/marriage-registry.service'
import { MarriageRecord } from '../shared/marriage-record.model';
import { Person } from '../shared/person.model';
@Component({
  selector: 'app-marriage-registry-list',
  templateUrl: './marriage-registry-list.component.html',
  styleUrls: ['./marriage-registry-list.component.css']
})
export class MarriageRegistryListComponent implements OnInit {

  marriageRecordList$!:Observable<MarriageRecord[]>

  constructor(private service:MarriageRegistryService) { }

  ngOnInit(): void {
    this.marriageRecordList$ = this.service.getMarriageRecordList();
  }

  modalTitle: string = '';
  activateAddMarriageRegistryFormComponent = false;
  marriageRecord:any;

  modalAdd(){
    
    this.marriageRecord = new MarriageRecord();
    this.marriageRecord.persons = [];
    this.marriageRecord.persons.push(new Person());
    this.marriageRecord.persons.push(new Person());

    this.modalTitle = "Add new marriage record";
    this.activateAddMarriageRegistryFormComponent = true;

  }

  modalClose(){
    this.activateAddMarriageRegistryFormComponent = false;
    this.marriageRecordList$ = this.service.getMarriageRecordList();
  }

}
