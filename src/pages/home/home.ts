import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from "../../components/share/card/card";
interface Product {
  name: string;
  price: number;
  aviable: boolean;
  description: string;
  imageUrl: string;
  stock: number;
}

interface Contacto {
  name: string;
  email: string;
  phone: string;
  socialMedia?: string[];
}
@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  isLogeged = false;
  videojuegos: String[] = ['Mario Bross', 'Zelda', 'Metroid', 'Halo', 'Fifa', 'Conker', 'Minecraft'];

  misContactos: Contacto[] = [
    { name: 'Juan Perez', email: 'juan@example.com', phone: '1234567890', socialMedia: ['@juanperez', 'juan.perez'] },
    { name: 'Maria Gomez', email: 'maria@example.com', phone: '0987654321', socialMedia: ['@mariagomez'] },
    { name: 'Carlos Sanchez', email: 'carlos@example.com', phone: '1122334455', socialMedia: ['@carlossanchez'] },
  ]

  chetos: Product = {
    name: 'Cheetos',
    price: 10,
    aviable: true,
    description: 'Cheetos de queso',
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpFub74hi00mE-P4cddtz5qvrJ1q6JfHp5N-DFxusIH8U6BufIWjLCULL5PgnZC1T4Dwphv4EeAcUWGuXrSwVobhOK0RM8KY1Cia8lIF_bc9z-g8T1MMwu',
    stock: 1
  }
  eliminarVideojuegos () {
    this.videojuegos = [];
  }
  
 }
