package fi.customertask.customerdatabase.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface CustomerRepository extends CrudRepository<Customer, Long> {

    //    Only added for demonstration purposes
    List<Customer> findByFirstName(@Param("firstName") String firstName);

}
