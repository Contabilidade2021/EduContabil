package com.educontabil.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TipoConta")
public class TipoConta implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	private Integer codigo;
	private String tipoConta;
	
		
	public TipoConta() {}	
		
	public TipoConta( String TipoConta, Integer codigo) {		
		this.codigo = codigo;
		this.tipoConta = TipoConta;
	}
	
	public TipoConta(Integer codigo, String TipoConta) {		
		this.codigo = codigo;
		this.tipoConta = TipoConta;
	}

	public Integer getCodigo() {
		return codigo;
	}
	
	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}
	
	public String getTipoConta() {
		return tipoConta;
	}
	
	public void setTipoConta(String TipoConta) {
		this.tipoConta = TipoConta;
	}

	@Override
	public String toString() {
		return "TipoConta [codigo=" + codigo + ", TipoConta=" + tipoConta + "]";
	}
	
		
	
}
