import { TodoFormComponent } from './todo-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoFormComponent],
  exports: [TodoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class TodoFormModule {}
