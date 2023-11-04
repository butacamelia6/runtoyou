import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES:any = {
  required: 'Should not be empty',
  email: 'Email is not valid',
  pattern: `at least 8 characters ,
          one uppercase letter,
          one lowercase letter, 
          one number, 
          one special character (e.g., !, @, #, $). `,
  minlength: 'The value is too short',
  notMatch: 'Password and Confirm does not'
}
@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit, OnChanges{
 
  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }


  @Input()
  control!:AbstractControl;
  @Input()
  showErrorsWhen:boolean = true;
  errorMessages: string[] = [];
  // @Input()

  checkValidation(){
    const errors = this.control.errors;

    if(!errors){
      this.errorMessages = [];
      return;
    }

    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map(
      key => VALIDATORS_MESSAGES[key]);
  }
}
