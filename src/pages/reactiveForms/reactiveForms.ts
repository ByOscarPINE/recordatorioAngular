import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactiveForms.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveForms { 
  fb = inject(FormBuilder)
  formProduct!: FormGroup;

  constructor() {
    this.formProduct = this.fb.group({
      name: ['',Validators.required],
      description: [''],
      price: [,Validators.required],
      stock: [,Validators.required]
    })
  }

  saveProduct(){
    console.log(this.formProduct.value);
  }
  
}
