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
  formEmpleado!: FormGroup;

  validatorMessage = {
    name: [
      { type: 'required', message: 'El nombre es requerido' }
    ],
    price: [
      { type: 'required', message: 'El precio es requerido' },
      { type: 'min', message: 'El precio debe ser mayor a 0' }
    ],
    stock: [
      { type: 'required', message: 'El stock es requerido' },
      { type: 'min', message: 'El stock debe ser mayor a 0' }
    ],
    perfil:[
      { type: 'required', message: 'El perfil es requerido' },
      { type: 'minlength', message: 'El perfil debe tener al menos 30 caracteres' }
    ],
    puesto:[
      { type: 'required', message: 'El puesto es requerido' },
    ],
    edad:[
      { type: 'required', message: 'La edad es requerida' },
      { type: 'min', message: 'La edad debe ser mayor a 18' },
      { type: 'max', message: 'La edad debe ser menor a 70' }
    ],
    email:[
      { type: 'required', message: 'El email es requerido' },
    ],
    generate:[
      { type: 'required', message: 'La cantidad a generar es requerida' },
      { type: 'min', message: 'La cantidad a generar debe ser mayor a 1000' },
    ]
  }

  getErrorMessage(control: string){
    const errors = this.formEmpleado.get(control)?.errors;
    if(errors){
      const firstKey = Object.keys(errors)[0];
      const validator = this.validatorMessage[control as keyof typeof this.validatorMessage].find(v => v.type === firstKey);
      return validator ? validator.message : '';
    }
    return '';
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
