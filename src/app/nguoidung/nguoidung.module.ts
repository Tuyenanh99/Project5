import { GioithieuModule } from './gioithieu/gioithieu.module';

// import { SanphamComponent } from './sanpham/sanpham.component';
import { NguoidungComponent } from './nguoidung.component';
// import { SanphamComponent } from './sanpham.component';?
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SanphamModule } from './sanpham/sanpham.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';


export const mainRoutes: Routes = [
  {
    path:'',
    component: NguoidungComponent,
    children: [
      { path: 'sanpham', loadChildren:
      () => import('./sanpham/sanpham.module').then(m => m.SanphamModule)
      },
      { path: 'gioithieu', loadChildren:
      () => import('./gioithieu/gioithieu.module').then(m => m.GioithieuModule)
      },
      {
        path:'',
        component: MainComponent
      }
    ]
  }

];

@NgModule({
  declarations: [
    NguoidungComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
   NguoidungComponent,
  ],
  bootstrap: [NguoidungComponent]
})
export class NguoidungModule { }
