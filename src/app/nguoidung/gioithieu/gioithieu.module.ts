import { GioithieuComponent } from './gioithieu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    GioithieuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: GioithieuComponent,
        children: [

          {
            path:'',
            component: GioithieuComponent
          }
        ]
      },
  ]),
  ]
})
export class GioithieuModule { }
