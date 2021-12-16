import { rootReducer } from './../reducers/index';
import { ApiService } from './services/api.service';
import { HttpService } from './services/http.service';
import { AuthrequestInterceptor } from './authrequest.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMember } from './all-member/all-member.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberDetail } from './member-detail/member-detail.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AllMember,
    RegisterComponent,
    MemberDetail,
    PagenotfoundComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthrequestInterceptor, multi: true }, HttpService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
