package com.codewithprojects.crud_spring.service;

import com.codewithprojects.crud_spring.entity.Customer;
import com.codewithprojects.crud_spring.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;

    public Customer postCustomer(Customer customer){
        System.out.println(customer);
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getOneCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer updateOneUser(Long id, Customer newCustomer) {
        Optional<Customer> customer = customerRepository.findById(id);
        if(customer.isPresent()) {
            Customer foundCustomer = customer.get();
            foundCustomer.setName(newCustomer.getName());
            foundCustomer.setEmail(newCustomer.getEmail());
            foundCustomer.setPhone(newCustomer.getPhone());
            customerRepository.save(foundCustomer);
            return foundCustomer;
        } else
            return null;
    }

    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }
}
