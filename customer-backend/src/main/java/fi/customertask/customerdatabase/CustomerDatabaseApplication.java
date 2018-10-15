package fi.customertask.customerdatabase;

import fi.customertask.customerdatabase.domain.Customer;
import fi.customertask.customerdatabase.domain.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CustomerDatabaseApplication {
    @Autowired
    private CustomerRepository customerRepository;

    public static void main(String[] args) {
        SpringApplication.run(CustomerDatabaseApplication.class, args);
    }

    @Bean
    CommandLineRunner runner() {
        return args -> {
            // Save dummy data to database
            customerRepository.save(new Customer("John", "Doe", "01.06.1989", "JDoe", "nonHashedPassword"));
            customerRepository.save(new Customer("Joe", "Shabadoo", "06.09.1970", "Shabba", "password123"));
            customerRepository.save(new Customer("Spruce", "Moose", "01.01.1900", "GetIn", "ISaidGetIn"));
        };
    }
}
