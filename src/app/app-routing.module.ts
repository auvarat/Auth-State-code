import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AllMember } from './all-member/all-member.component';
import { MemberDetail } from './member-detail/member-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { AuthgdGuard } from './services/authgd.guard';

const routes: Routes = [
  { path: '', component: AllMember, canActivate: [AuthgdGuard] },
  { path: 'adminlogin', component: RegisterComponent },
  { path: 'member-details/:id', component: MemberDetail, canActivate: [AuthgdGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthgdGuard] },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
