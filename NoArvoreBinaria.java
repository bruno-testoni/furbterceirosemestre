public class NoArvoreBinaria<T> {
	private T info;
	public NoArvoreBinaria<T> esq;
	public NoArvoreBinaria<T> dir;
    private int contadornivel;
	public NoArvoreBinaria(T info) {
		this.info = info;
	}

	public NoArvoreBinaria(T info, NoArvoreBinaria<T> esq, NoArvoreBinaria<T> dir) {
		this.info = info;
		this.esq = esq;
		this.dir = dir;
	}

	public NoArvoreBinaria<T> pertence(T info) {
		if (info.equals(this.info))
			return this;

		NoArvoreBinaria<T> retorno = null;
		if (esq != null) {
			retorno = esq.pertence(info);
		}
		if (retorno == null && dir != null) {
			return dir.pertence(info);
		}
		return retorno;
	}

	public String imprimePre() {
	contadornivel = 0;
	
		String str = "<" + this.info;
		
		// esquerda
		if (esq == null) {
			str += "<>";
			contadornivel++;
		} else {
			str += esq.imprimePre();
		}
		
		// direita
		if (dir == null) {
			str += "<>";
			contadornivel++;
		} else {
			str += dir.imprimePre();
		}
		return str + ">";
	}

	public String imprimeCentral() {
		String str = "";
		// esquerda
		if (esq != null) {
			str += esq.imprimeCentral();
		}
		
	
		str += this.info.toString()+" ";
		
		// direita
		if (dir != null) {
			str += dir.imprimeCentral();
		}
		return str;
	}
	
	public T getInfo() {
		return info;
	}

	public void setInfo(T info) {
		this.info = info;
	}

	public NoArvoreBinaria<T> getEsq() {
		return esq;
	}

	public void setEsq(NoArvoreBinaria<T> esq) {
		this.esq = esq;
	}

	public NoArvoreBinaria<T> getDir() {
		return dir;
	}

	public void setDir(NoArvoreBinaria<T> dir) {
		this.dir = dir;
	}

	public int compareTo(T valor) {
		// TODO Auto-generated method stub
		return 0;
	}
public void setContadorNivel() {
	this.contadornivel = contadornivel;
}
public int getContadorNivel() {
	return contadornivel;
	
}

}