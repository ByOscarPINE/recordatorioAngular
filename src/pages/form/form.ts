import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { price_valid } from '../../validators/price_valid';

@Component({
  selector: 'app-form',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Form {
  fb = inject(FormBuilder)
  formProduct!: FormGroup;
  
  constructor() {
    this.formProduct = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(15)]],
      price: [,[  Validators.required, Validators.min(1000)]],
      stock: [,[Validators.required,Validators.min(1), Validators.max(1000)]],
      precioEntrada: [,[Validators.required, Validators.min(1)]],
      precioSalida: [,[Validators.required, Validators.min(1)]],
      codigo: ['',Validators.required]
    },
    {
      validators: price_valid('precioEntrada', 'precioSalida')
    })
  }
  validatorMessages: any = {
    name: {
      required: "El nombre es requerido",
      minlength: "El nombre debe tener al menos 3 caracteres"
    },
    description: {
      required: "La descripción es requerida",
      minlength: "La descripción debe tener al menos 15 caracteres"
    },
    stock: {
      required: "El stock es requerido",
      min: "El stock mínimo es 1",
      max: "El stock máximo es 1000"
    },
    precioEntrada: {
      required: "El precio de entrada es requerido",
      min: "El precio de entrada debe ser mayor a 0"
    },
    precioSalida: {
      required: "El precio de salida es requerido",
      min: "El precio de salida debe ser mayor a 0",
      priceComparison: "El precio de salida debe ser mayor al precio de entrada"
    },
    codigo: {
      required: "El código es requerido",
    }
  }

  getErrorMessage(ctrl: string){
    const control = this.formProduct.get(ctrl);
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
  


  saveProduct(){
    if(this.formProduct.invalid){
      this.formProduct.markAllAsTouched()
      return;
    }else{
      console.log(this.formProduct.value);
    }
  }

 }
