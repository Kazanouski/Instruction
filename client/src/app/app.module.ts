import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication.service'; 
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component'; 
import { ManualService } from './manual.service';
import { ManualComponent } from './manual/manual.component';
import { AddComponent } from './add/add.component';
import { ManualDetailComponent } from './manual-detail/manual-detail.component';
import { UserManualsComponent } from './user-manuals/user-manuals.component';
import { AddStepComponent } from './add-step/add-step.component';
import { StepComponent } from './step/step.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { UsersService } from './users.service';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

const routes: Routes =[
  {path: '', component: ManualComponent}, 
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuardService]},
  {path: 'add/:userId', component:AddComponent},
  {path: 'manual/:id/:step', component:ManualDetailComponent},
  {path: 'manual/:id/:step', component:StepComponent},
  {path: 'userManuals/:userId', component:UserManualsComponent},
  {path: 'addSteps/:manualId', component:AddStepComponent},
  {path: 'users', component:UsersComponent},
  {path: 'users/:id', component: UpdateUsersComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ManualComponent,
    AddComponent,
    ManualDetailComponent,
    UserManualsComponent,
    AddStepComponent,
    StepComponent,
    AdminComponent,
    UsersComponent,
    UpdateUsersComponent,
    AddCommentsComponent,
    ViewCommentsComponent,
    ConfirmEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService, AuthGuardService, ManualService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
