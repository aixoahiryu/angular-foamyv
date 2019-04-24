import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { Com1Component } from "./com1/com1.component";
import { Com2Component } from "./com2/com2.component";
import { MyFilterPipe } from "./pipe/my-filter.pipe";
import { Nav1Component } from "./nav1/nav1.component";
import { Nav2Component } from "./nav2/nav2.component";
import { LoginComponent } from "./login/login.component";
import { DisplayComponent } from "./display/display.component";
import { SendoComponent } from "./sendo/sendo.component";
import { SendoDetailComponent } from "./sendo-detail/sendo-detail.component";
import { CartComponent } from "./cart/cart.component";
import { AppService } from "./app.service";
import { MessageService } from "./message.service";
import { AppRoutingModule } from "./app-routing.module";
import { SendoService } from "./sendo.service";
import { AdminUserComponent } from "./admin-user/admin-user.component";
import { AuthGuard } from "./auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    Com2Component,
    MyFilterPipe,
    Nav1Component,
    Nav2Component,
    LoginComponent,
    DisplayComponent,
    SendoComponent,
    SendoDetailComponent,
    CartComponent,
    AdminUserComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [AppService, MessageService, SendoService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
