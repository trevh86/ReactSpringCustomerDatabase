package fi.customertask.customerdatabase;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class CustomerRestTest {
    
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testRest() throws Exception {

//        Test spring-boot-starter-data-rest route returns OK status code.
        this.mockMvc.perform(get("http://localhost:8080/api/customers/"))
                .andExpect(status().isOk());

//        Test the getAll API endpoint I created in CustomerController by checking it returns OK status code.
        this.mockMvc.perform(get("http://localhost:8080/customers/"))
                .andExpect(status().isOk());
    }
}
