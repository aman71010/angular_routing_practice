import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { ServerResolver } from "./server-resolver.service";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children: [
        {path: ':id/:name', component: UserComponent}
    ]},
    {path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
        {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
        {path: ':id/edit', component: EditServerComponent}
    ]},
    {path: 'not-found', component: NotFoundComponent, data: {message: 'Not Found!'}},
    {path: '**', redirectTo: 'not-found'}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}