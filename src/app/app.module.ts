import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NgPipesModule } from 'ngx-pipes';
import { AppComponent } from './app.component';
import { GunDb } from './gun.service';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/TestView',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgPipesModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [GunDb],
    bootstrap: [AppComponent]
})

export class AppModule {
    AppModule() {
    }
}
