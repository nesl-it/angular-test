import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NevigationComponent } from './nevigation/nevigation.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddblockComponent } from './addblock/addblock.component';
import { FooterComponent } from './footer/footer.component';
import { AddfoterComponent } from './addfoter/addfoter.component';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModelviewComponent } from './modelview/modelview.component';
import { BlogComponent } from './blog/blog.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    NevigationComponent,
    AddbookComponent,
    AddblockComponent,
    FooterComponent,
    AddfoterComponent,
    ModelviewComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
