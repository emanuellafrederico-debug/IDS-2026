public class Podcast {
    private String titulo;
    private String autor;
    private String descricao;
    private int duracao;

    public Podcast(String titulo, String autor, int duracao, String descricao){
        this.titulo = titulo;
        this.autor = autor;
        this.descricao = descricao;
        this.duracao = duracao;
    }

    public String getTitulo() {
        return titulo;
    }

    private void setTitulo(){
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    private void setAutor(){
     this.autor = autor;
    }

    public String getDescricao() {
        return descricao;
    }

    private void setDescricao(){
        this.descricao = descricao;
    }

    public int getDuracao() {
        return duracao;
    }

    private void setDuracao(){
        this.duracao = duracao;
    }

    @Override
    public String toString() {
        return "\nPodcast: \n || Título: " + this.titulo + "\n || Artista: " + this.autor +
                 "\n || Duração: " + this.duracao + " segundos" + "\n || Descrição: " + this.descricao;
    }
}
