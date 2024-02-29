import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService as CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
    console.log(this.customerService);
  }
  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getAll().subscribe({
      next: (it) => {
        this.customers = it;
        console.log(it);
      },
      error: (e: Error) => {
        console.log(e);
      },
    });
  }
}
