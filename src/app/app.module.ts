import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';
// import { FileInputConfig, NGX_MAT_FILE_INPUT_CONFIG } from 'ngx-material-file-input';

// export const config: FileInputConfig = {
//   sizeUnit: 'Octet'
// };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
     
  ],
  // providers: [
  //  { provide: NGX_MAT_FILE_INPUT_CONFIG, useValue: config }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
