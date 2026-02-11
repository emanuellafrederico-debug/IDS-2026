import java.util.ArrayList;
import java.util.List;

public class BancoDePodcast {
    private List<Podcast> podcasts;

    public BancoDePodcast(){
        this.podcasts = new ArrayList<>();
    }

    public void adicionarPodcasts(Podcast novoPodcast) {
        this.podcasts.add(novoPodcast);
        System.out.println("Novo podcast adicionado à biblioteca!");
    }

    public void listarPodcasts(){
        for(int i = 0; i < this.podcasts.size(); i++){
            System.out.println(this.podcasts.get(i).toString());
        }
    }
}
