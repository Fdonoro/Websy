package es.websy_api.repositorios;


import org.springframework.data.mongodb.repository.MongoRepository;

import es.websy_api.modelos.PersonaModelo;

public interface PersonaRepositorio extends MongoRepository<PersonaModelo, String>{

}
