import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user/user.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FeahterIconModule} from "../../core/feather-icon/feather-icon.module";
import {NgbDatepickerModule, NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {NgApexchartsModule} from "ng-apexcharts";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  {
    path: 'list',
    component: UserComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  }
]
@NgModule({
  declarations: [UserComponent, StatisticsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FeahterIconModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgApexchartsModule,
    SweetAlert2Module.forRoot()
  ]
})
export class UsermoduleModule { }
