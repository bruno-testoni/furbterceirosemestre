public class NoArvore<T> {


	public NoArvore<T> esq;
	public NoArvore<T> dir;
    private T info;
    private NoArvore<T> filho;
    private NoArvore<T> irmao;
	public Object getNivel;

public NoArvore(T info, NoArvore<T> esq, NoArvore<T> dir){
	this.info = info;
	this.esq = esq;
	this.dir = dir;
}

 
    public NoArvore(T info) {
        this.info = info;
    }
 
    public T getInfo() {
        return info;
    }

 

    public void setInfo(T info) {
        this.info = info;
    }

 

    public void inserirFilho(NoArvore<T> novo) {
        novo.irmao = this.filho;
        this.filho = novo;
    }

 

 
    public NoArvore<T> pertence(T info) {
        if (this.info.equals(info)) {
            return this;
        }
        NoArvore<T> no;
        if (this.filho != null) {
            no = filho.pertence(info);
            if (no != null) {
                return no;
            }
        }
        if (this.irmao != null) {
            return irmao.pertence(info);
        }
        return null;
    }

 

    public String imprimePre() {
        String str = "<" + this.info;
        if (this.filho != null) {
            str += filho.imprimePre();
        }
        str += ">";
        if (this.irmao != null) {
            str += irmao.imprimePre();
        }
        return str;
    }

    public NoArvore<T> getIrmao() {
        return irmao;
    }

 

    public NoArvore<T> getFilho() {
        return filho;
    }

 

    public void setFilho(NoArvore<T> filho) {
        this.filho = filho;
    }

 

    public void setIrmao(NoArvore<T> irmao) {
        this.irmao = irmao;
    }





	public void getNivel() {
		// TODO Auto-generated method stub
		
	}


    

 

    
    
    

 

 }