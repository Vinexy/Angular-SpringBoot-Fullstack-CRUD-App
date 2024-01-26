import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrl: './post-customer.component.css'
})
export class PostCustomerComponent {

  postCustomerForm: FormGroup | any;



  constructor(private customerService:CustomerService, private fb:FormBuilder){
    
  }
  ngOnInit(){
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],

    })

  }
  postCustomer(){
    console.log(
    this.postCustomerForm.value
    );
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res)=>{
      console.log(res);
      
    });
    
  }

}
