package Model;
import java.util.List;

public class listaPaises {
    String nomePais;
    String nomeCapital;

    private List<listaPaises> paises;

    public listaPaises(String nomePais, String nomeCapital){
        nomePais = this.nomePais;
        nomeCapital = this.nomeCapital;
    }

    public String getNomePais() {
        return nomePais;
    }

    public String getNomeCapital() {
        return nomeCapital;
    }

    public void setNomePais(String nomePais) {
        this.nomePais = nomePais;
    }

    public void setNomeCapital(String nomeCapital) {
        this.nomeCapital = nomeCapital;
    }
}
