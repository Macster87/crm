import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerIndexComponent } from './customer-index.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { CustomerNewComponent } from './views/customer-new/customer-new.component';
import { CustomerDetailComponent } from './views/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CustomerIndexComponent,
    CustomerListComponent,
    CustomerNewComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
  ],
  imports: [CommonModule, HttpClientModule, CustomerRoutingModule],
})
export class CustomerModule {}
