package com.educontabil.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.educontabil.entity.TipoConta;

@Repository
public interface TipoContaRepository extends JpaRepository<TipoConta, Integer> {
	
	@Query(" SELECT "
			+ "	 t "
			+ " FROM "
			+ "	 TipoConta t "
			+ " where "
			+ "	upper(t.tipoConta) like upper(:tipoConta)  ")
	Page<TipoConta> getCodConta( String tipoConta, Pageable pageable );

}
