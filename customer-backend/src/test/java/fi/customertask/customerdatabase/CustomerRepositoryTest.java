package fi.customertask.customerdatabase;

import fi.customertask.customerdatabase.domain.Customer;
import fi.customertask.customerdatabase.domain.CustomerRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CustomerRepositoryTest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private CustomerRepository repository;

    //    Test the CustomerRepository findByFirstName method
    @Test
    public void findByFirstName() {
        Customer customer = new Customer("firstNameTest", "lastNameTest", "01.01.1901", "TEST", "TEST");
        entityManager.persistAndFlush(customer);

        List<Customer> customers = repository.findByFirstName("firstNameTest");

        assertThat(customers).hasSize(1);
        assertThat(customers.get(0).getLastName()).isEqualTo("lastNameTest");
    }

    //    Test that the customer is created and saved correctly.
    @Test
    public void saveCustomer() {
        Customer customer = new Customer("TEST", "TEST", "01.01.1901", "TEST", "TEST");
        entityManager.persistAndFlush(customer);

        assertThat(customer.getID()).isNotNull();
    }

    //    Test the customers are deleted correctly
    @Test
    public void deleteCustomer() {
        entityManager.persistAndFlush(new Customer("TEST", "TEST", "01.01.1901", "TEST", "TEST"));
        entityManager.persistAndFlush(new Customer("TEST2", "TEST2", "01.01.1902", "TEST2", "TEST2"));

        repository.deleteAll();
        assertThat(repository.findAll()).isEmpty();
    }
}
