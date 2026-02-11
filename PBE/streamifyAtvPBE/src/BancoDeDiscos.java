import java.util.ArrayList;
import java.util.List;
public class BancoDeDiscos {
    private List<Musica> musicas;

    public BancoDeDiscos(){
        this.musicas = new ArrayList<>();
    }

    public void adicionarMusicas(Musica novaMusica) {
        this.musicas.add(novaMusica);
        System.out.println("Nova música adicionada à biblioteca!");
    }

    public void listarMusicas(){
        for(int i = 0; i < this.musicas.size(); i++){
            System.out.println(this.musicas.get(i).toString());
        }
    }

}
