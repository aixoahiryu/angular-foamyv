import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DisplayComponent } from "./display/display.component";
import { SendoComponent } from "./sendo/sendo.component";
import { SendoDetailComponent } from "./sendo-detail/sendo-detail.component";
import { CartComponent } from "./cart/cart.component";
import { AdminUserComponent } from "./admin-user/admin-user.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/sendo", pathMatch: "full" },
  {
    path: "product/:id",
    component: SendoDetailComponent,
    canActivate: [AuthGuard]
  },
  { path: "sendo", component: SendoComponent },
  { path: "display", component: DisplayComponent },
  { path: "cart", component: CartComponent, canActivate: [AuthGuard] },
  { path: "admin", component: AdminUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
