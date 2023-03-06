package es.websy_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class WebsyApiApplication {    

	public static void main(String[] args) {
		SpringApplication.run(WebsyApiApplication.class, args);
	}

}
