import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourriersComponent } from './courriers/courriers.component';
import { LoginComponent } from './auth/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/token.interceptor';
import { ExpertComponent } from './auth/register/expert/expert.component';
import { SecretaireComponent } from './auth/register/secretaire/secretaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './auth/header/header.component';
import { UserListsComponent } from './users/user-lists/user-lists.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { UserAddCoordonateurComponent } from './users/user-add/user-add-coordonateur/user-add-coordonateur.component';
import { AddCourrierComponent } from './courriers/add-courrier/add-courrier.component';
import { CourrierDetailsComponent } from './courriers/courrier-details/courrier-details.component';
import { CourrierUpdateComponent } from './courriers/courrier-update/courrier-update.component';
import { UserEditRoleComponent } from './users/user-add/user-edit-role/user-edit-role.component';
import { CourrierUsersComponent } from './courriers/courrier-users/courrier-users.component';
import { CourrierAddUsersComponent } from './courriers/courrier-add-users/courrier-add-users.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { CourrierAddFilesComponent } from './courriers/courrier-add-files/courrier-add-files.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'courriers/lists',
    component: CourriersComponent,
    data: { title: 'List of Courriers' }
  },
  {
    path: 'courriers/form',
    component: AddCourrierComponent,
    data: { title: 'Courrier form' }
  },
  {
    path: 'courriers/details/:id',
    component: CourrierDetailsComponent,
    data: { title: 'Courrier details' }
  },
  {
    path: 'courriers/details/users/:id',
    component: CourrierUsersComponent,
    data: { title: 'Courrier details users' }
  },
  {
    path: 'courriers/details/add-users/:id',
    component: CourrierAddUsersComponent,
    data: { title: 'Courrier add users' }
  },
  {
    path: 'courriers/details/add-files/:id',
    component: CourrierAddFilesComponent,
    data: { title: 'Courrier add files upload' }
  },
  {
    path: 'courriers/update/:id',
    component: CourrierUpdateComponent,
    data: { title: 'Courrier update form' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'users/lists',
    component: UserListsComponent,
    data: {title: 'List of Account'}
  },
  {
    path: 'users/user-details/:id',
    component: UserDetailsComponent,
    data: {title: 'Details for an Account'}
  },
  {
    path: 'users/user-edit/:id',
    component: UserUpdateComponent,
    data: {title: 'Edition for an Account'}
  },
  {
    path: 'users/user-edit-role/:id',
    component: UserEditRoleComponent,
    data: {title: 'Edition roles for an Account'}
  },
  {
    path: 'users/form',
    component: UserAddCoordonateurComponent,
    data: {title: 'Account new form'}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CourriersComponent,
    LoginComponent,
    ExpertComponent,
    SecretaireComponent,
    HeaderComponent,
    UserListsComponent,
    UserDetailsComponent,
    UserUpdateComponent,
    UserAddCoordonateurComponent,
    AddCourrierComponent,
    CourrierDetailsComponent,
    CourrierUpdateComponent,
    UserEditRoleComponent,
    CourrierUsersComponent,
    CourrierAddUsersComponent,
    CourrierAddFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
