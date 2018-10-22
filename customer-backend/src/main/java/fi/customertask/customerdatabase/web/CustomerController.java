package fi.customertask.customerdatabase.web;

import fi.customertask.customerdatabase.domain.Customer;
import fi.customertask.customerdatabase.domain.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;

    //    Added for demonstration. Using spring-boot-starter-data-rest for actual API for ease of use.
    @RequestMapping("/customers")
    public Iterable<Customer> getCustomers() {
        return customerRepository.findAll();
    }
}
