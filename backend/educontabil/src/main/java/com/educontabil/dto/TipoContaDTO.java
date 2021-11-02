package com.educontabil.dto;

import com.educontabil.entity.TipoConta;

public class TipoContaDTO {

	private Integer codigo;
	private String tipoConta;
			
	public TipoContaDTO() {}	
	
	public TipoContaDTO(Integer codigo, String tipoConta) {
		this.codigo = codigo;
		this.tipoConta = tipoConta;
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
	public void setTipoConta(String tipoConta) {
		this.tipoConta = tipoConta;
	}
	
	public TipoConta toDTO() {
		return new TipoConta(codigo, tipoConta);
	}
	
	public static TipoContaDTO fromDTO (TipoConta tipoConta)  {
		return new TipoContaDTO(
				tipoConta.getCodigo(),
				tipoConta.getTipoConta()
				);
	}
}
