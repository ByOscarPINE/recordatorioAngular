import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Explosion } from '../../components/explosion/explosion';

interface usuario {
  id: number;
  name: string;
  edad: number;
  activo: boolean;
}

interface tarea {
  tarea: string;
  description: string;
  done: boolean;
}


@Component({
  selector: 'app-examen',
  imports: [Explosion],
  templateUrl: './examen.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Examen {
  usuario = []
  usuarios : usuario[] = [
    { id: 1, name: 'Juan', edad: 25, activo: true },
    { id: 2, name: 'Maria', edad: 30, activo: false },
    { id: 3, name: 'Pedro', edad: 28, activo: true },
  ];
  tareas : tarea[] = [
    {tarea: 'Tarea 1', description: 'Descripción de la tarea 1', done: false },
    {tarea: 'Tarea 2', description: 'Descripción de la tarea 2', done: true },
    {tarea: 'Tarea 3', description: 'Descripción de la tarea 3', done: false },
    {tarea: 'Tarea 4', description: 'Descripción de la tarea 4', done: true },
    {tarea: 'Tarea 5', description: 'Descripción de la tarea 5', done: false },
  ];

  searchUser(id: number) {
    this.usuarios = this.usuarios.find(user => user.id == id) ? [this.usuarios.find(user => user.id == id)!] : [];
  }

  mostrarTareas() {
    this.tareas = this.tareas.shift() ? this.tareas : [];
    this.tareas = this.tareas.pop() ? this.tareas : [];
  }

 }
