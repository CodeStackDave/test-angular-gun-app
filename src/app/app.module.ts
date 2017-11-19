import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NgPipesModule } from 'ngx-pipes';
import { AppComponent } from './app.component';
import { GunDb } from './gun.service';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order/order.component';


const appRoutes: Routes = [
    { path: 'new-order', component: OrderListComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        OrderListComponent
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
