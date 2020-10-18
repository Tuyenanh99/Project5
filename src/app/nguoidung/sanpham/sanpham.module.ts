
import { SanphamComponent } from './sanpham.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SanphamComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: SanphamComponent,
        children: [

          {
            path:'',
            component: SanphamComponent
          }
        ]
      },
  ]),
  ]
})
export class SanphamModule { }
