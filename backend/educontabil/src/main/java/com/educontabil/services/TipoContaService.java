package com.educontabil.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.educontabil.entity.TipoConta;
import com.educontabil.repositories.TipoContaRepository;
import com.educontabil.services.exceptions.DataIntegrityException;

@Service
public class TipoContaService {
	
	@Autowired
	private TipoContaRepository  repo;
	
	public List <TipoConta> findAll() {
        return repo.findAll();
    }
	
	public TipoConta findById(Integer id) {
		Optional<TipoConta> obj = repo.findById(id);
		return obj.orElseThrow(() -> new com.educontabil.services.exceptions.ObjectNotFoundException(
				"Objeto não encontrado Id: " + id + " tipo: " + TipoContaService.class.getName()));
	}
	
	public Page<TipoConta> findAllPage(Pageable pageable) {
		return repo.findAll(pageable);
	}
	
	public TipoConta insert(TipoConta obj) {
		obj.setCodigo(null);
		return repo.save(obj);
	}
		
	public TipoConta update(TipoConta obj) {
		obj.setCodigo(obj.getCodigo());
		return repo.save(obj);
	}
	
	public void delete(Integer id) {
		findById(id);
		try {			
			repo.deleteById(id);
		} catch (DataIntegrityViolationException e) {
			throw new DataIntegrityException("Não é possível excluir uma especialidade que está sendo usada pelo nuticionista");
		}
		
    }
		

}
