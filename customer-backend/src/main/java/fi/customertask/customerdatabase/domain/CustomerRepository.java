package fi.customertask.customerdatabase.domain;

import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository <Customer, Long> {
    // TODO: 15/10/2018 Add other queries such as delete etc.
    // Removed old query findAll to test implicit definition. It is!
}
