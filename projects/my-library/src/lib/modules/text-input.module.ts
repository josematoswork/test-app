import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../components/text-input/text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '.';
import { TooltipModule } from './tooltip.module';

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, ReactiveFormsModule, IconsModule, TooltipModule],
  exports: [TextInputComponent],
})
export class TextInputModule {}
