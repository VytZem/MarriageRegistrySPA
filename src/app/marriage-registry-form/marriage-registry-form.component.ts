import { Component, Input, OnInit } from '@angular/core';
import { MarriageRegistryService } from  'src/app/shared/marriage-registry.service'
import { MarriageRecord } from 'src/app/shared/marriage-record.model';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-marriage-registry-form',
  templateUrl: './marriage-registry-form.component.html',
  styleUrls: ['./marriage-registry-form.component.css']
})
export class MarriageRegistryFormComponent implements OnInit {

  constructor(public service:MarriageRegistryService) {
    this.marriageRecord = new MarriageRecord();
    this.marriageRecord.marriageDate = new Date();
    this.marriageRecord.persons = [];

    this.marriageRecord.persons.push(new Person());
    this.marriageRecord.persons.push(new Person());

   }


  @Input() marriageRecord:MarriageRecord;
 
  ngOnInit(): void {   

  }
 

  showSuccessBar(){
    let showAddSuccess = document.getElementById('add-success-alert');

    if(showAddSuccess){
      showAddSuccess.style.display = "block";
    }
  }  

  showErrorBar(message:string){
    let showAddError = document.getElementById('add-error-alert');

    if(showAddError){
      showAddError.style.display = "block";
      showAddError.innerText = message;
    }
  }

  removeErrorBar(){
    let showAddError = document.getElementById('add-error-alert');
    if(showAddError){
      showAddError.remove();
    }
  }

  removeAddButton(){
    let addButton = document.getElementById('add-button');
    addButton?.remove();
  }

  closeModal(){
    let closeModalBtn = document.getElementById('add-modal-close');
    if(closeModalBtn){
      closeModalBtn.click();
    }
  } 



  getErrorMessage(error:any):string{
    let errorMessage = '';

      if(error.status == 400){
          errorMessage =  error.error ? error.error : error.statusText.toString();      
      }
      else{
        errorMessage = "Something went wrong. Please try again, or contact website administrator";
      }

        return errorMessage; 
  }

  addMarriageRecord(){

    this.service.addMarriageRecord(this.marriageRecord).subscribe(res => {
      
    this.removeErrorBar();  
    this.showSuccessBar();
    this.removeAddButton();  
    
    },
    err => {

      let errorMessage = this.getErrorMessage(err);

      this.showErrorBar(errorMessage);
      
    })
  }

}
