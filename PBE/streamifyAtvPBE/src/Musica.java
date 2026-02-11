public class Musica {
    private String titulo;
    private String artista;
    private String genero;
    private int duracao;

    public Musica(String titulo, String artista, String genero, int duracao){
        this.titulo = titulo;
        this.artista = artista;
        this.genero = genero;
        this.duracao = duracao;
    }

    public String getTitulo() {
        return titulo;
    }

    private void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getArtista() {
        return artista;
    }

    private void setArtista(String artista){
        this.artista = artista;
    }

    public String getGenero() {
        return genero;
    }

    private void setGenero(String genero) {
        this.genero = genero;
    }

    public int getDuracao() {
        return duracao;
    }

    private void setDuracao(int duracao){
        this.duracao = duracao;
    }

    @Override
    public String toString() {
        return "\nMúsica: \n || Título: " + this.titulo + "\n || Artista: " + this.artista +
                "\n || Genêro: " + this.genero + "\n || Duração: " + this.duracao + " segundos";
    }

}