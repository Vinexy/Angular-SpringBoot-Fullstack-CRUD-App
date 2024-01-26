import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})

export class UpdateCustomerComponent {

  updateCustomerForm: FormGroup | any;

  id: number =this.activatedRoute.snapshot.params["id"];
  http: any;
  constructor(private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,private fb:FormBuilder, private router: Router){ }

  ngOnInit(){
    this.getCustomerById()
    
      this.updateCustomerForm = this.fb.group({
        name: [null, [Validators.required]],
        phone: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
      })
  }

  getCustomerById(){
    this.customerService.getCustomerById(this.id).subscribe((res)=>{
      this.updateCustomerForm.patchValue(res);
      
    });
  }

  updateCustomer(){
    this.customerService.updateCustomerById(this.id,this.updateCustomerForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("");
      }
    })
  }

}
