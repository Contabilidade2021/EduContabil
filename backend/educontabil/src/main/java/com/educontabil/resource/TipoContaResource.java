package com.educontabil.resource;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.educontabil.dto.TipoContaDTO;
import com.educontabil.entity.TipoConta;
import com.educontabil.services.TipoContaService;

@RestController
@RequestMapping(value = "/api/tipo-contas")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TipoContaResource {

	@Autowired
	private TipoContaService service;
		
	@RequestMapping
	public ResponseEntity<List<TipoContaDTO>> findAll( ) {		
		List<TipoConta> list = service.findAll();	
		List<TipoContaDTO> listDTO =
				list.stream()
				.map(TipoContaDTO :: fromDTO)
				.collect(Collectors.toList());
	    return ResponseEntity.ok().body(listDTO);
	}
		
	@RequestMapping(value="/page", method=RequestMethod.GET)
	public Page<TipoContaDTO> findPage(
			@RequestParam(value = "tipoConta" , required = false , defaultValue = "") String tipoConta,
			Pageable pageable) {
		Page<TipoConta> list = service.findAllPage(pageable);	
		Page<TipoContaDTO> listDto = list.map(TipoContaDTO :: fromDTO);  
		return listDto;
	}
		
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<TipoConta> findById(@PathVariable Integer id) {
		TipoConta obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<TipoContaDTO> insert( @RequestBody TipoContaDTO objDTO){
		TipoConta tipoConta = objDTO.toDTO();
		service.insert(tipoConta);
		return ResponseEntity.ok(TipoContaDTO.fromDTO(tipoConta));
	}
		
	@RequestMapping(value="/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> updade( @RequestBody TipoContaDTO objDTO, @PathVariable Integer id){
		TipoConta obj = objDTO.toDTO();
		obj.setCodigo(id);	
		obj = service.update(obj);
		return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id){
			service.delete(id);
			return ResponseEntity.noContent().build();
	}
	
}
