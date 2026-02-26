import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { min } from 'rxjs';

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
  formEmpleado!: FormGroup;

  validatorMessages: any = {
    name: {
      required: "El nombre es requerido",
      minlength: "El nombre debe tener al menos 3 caracteres"
    },
    perfil: {
      required: "El perfil es requerido",
      minlength: "El perfil debe tener al menos 30 caracteres"
    },
    puesto: {
      required: "El puesto es requerido"  
    },
    edad: {
      required: "La edad es requerida",
      min: "La edad mínima es 18 años",
      max: "La edad máxima es 70 años"
    },
    email: {
      required: "El email es requerido"
    },
    generate: {
      required: "El generate es requerido",
      min: "El generate debe ser mayor a 1000"
    }
  }

  getErrorMessage(ctrl: string){
    const control = this.formEmpleado.get(ctrl);
    if(!control || !control.errors || !control.touched){
      return "";
    }
    const errors = control.errors;
    for (const errorKey in errors) {
      if(this.validatorMessages[ctrl][errorKey]){
        return this.validatorMessages[ctrl][errorKey];
      }
    }
    return  "";
  }
  

  constructor() {
    this.formProduct = this.fb.group({
      name: ['',Validators.required],
      description: [''],
      price: [,Validators.required],
      stock: [,Validators.required]
    })
    this.formEmpleado = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      perfil: ['', [Validators.required, Validators.minLength(30)]],
      puesto: ['',Validators.required],
      edad: [,[Validators.required,Validators.min(18),Validators.max(70)]],
      email: [,Validators.required],
      generate: [,[Validators.required, Validators.min(1000)]],
    })

  }

  saveProduct(){
    if(this.formProduct.invalid){
      this.formProduct.markAllAsTouched()
      return;
    }else{
      console.log(this.formProduct.value);
    }
  }

  // setErrors(control:String){
  //   return this.formProduct.get(control)?.errors &&
  //   this.formProduct.get(control)?.touched
  // }
  
}
