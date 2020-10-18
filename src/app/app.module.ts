import { NguoidungModule } from './nguoidung/nguoidung.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './nguoidung/header/header.component';
// import { FooterComponent } from './nguoidung/footer/footer.component';
// // import { MenuComponent } from './nguoidung/menu/menu.component';
// import { MainComponent } from './nguoidung/main/main.component';
// import { SanphamComponent } from './nguoidung/sanpham/sanpham.component';
// import { GioithieuComponent } from './nguoidung/gioithieu/gioithieu.component';
// import { TintucComponent } from './nguoidung/tintuc/tintuc.component';
// import { ChitietspComponent } from './nguoidung/chitietsp/chitietsp.component';
// import { NguoidungComponent } from './nguoidung/nguoidung.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: MainComponent,
//   },
//   {
//     path: 'sanpham',
//     component: SanphamComponent,
//   },
//   {
//     path: 'chitietsp',
//     component: ChitietspComponent,
//   },
//   {
//     path: 'home',
//     component: MainComponent,
//   },
// ];
@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // MenuComponent,
    // MainComponent,
    // SanphamComponent,
    // GioithieuComponent,
    // TintucComponent,
    // ChitietspComponent,
    // NguoidungComponent
  ],
  imports: [
    BrowserModule,
    NguoidungModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
