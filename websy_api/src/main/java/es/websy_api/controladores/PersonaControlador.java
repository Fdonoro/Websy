package es.websy_api.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import es.websy_api.modelos.PersonaModelo;
import es.websy_api.repositorios.PersonaRepositorio;

@RestController
@RequestMapping("/api/persona")
public class PersonaControlador {

	@Autowired
	private PersonaRepositorio personaRepositorio;
	
    @RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<PersonaModelo>> recuperarTodos(){
		System.out.println("aaaa");
		List<PersonaModelo> prueba = personaRepositorio.findAll();
		if (prueba == null || prueba.size()==0) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}else {
			return ResponseEntity.ok(prueba);
		}
	}
	
}
