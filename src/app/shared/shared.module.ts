import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentsModule
  ]
})
export class SharedModule { }
