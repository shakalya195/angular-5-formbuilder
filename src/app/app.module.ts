import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { DndModule } from 'ngx-drag-drop';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

const appRoutes: Routes = [
  { path: '', component: EditAppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EditAppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    SweetAlert2Module.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DndModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
