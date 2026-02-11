import java.util.Scanner;
void main() {
    Scanner lerTeclado = new Scanner(System.in);
    int escolha;

    BancoDeDiscos biblioteca = new BancoDeDiscos();
    BancoDePodcast bibliotecaPodcast = new BancoDePodcast();

    System.out.println("=====================================");
    System.out.println("Olá! Seja bem vindo ao Streamify!!!");

    do {

        System.out.println("=====================================");
        System.out.println("Oque você gostaria de fazer?\n");
        System.out.println("0 - Sair do programa;");
        System.out.println("1 - Adicionar novas músicas à minha biblioteca;");
        System.out.println("2 - Visualisar as músicas dentro da minha biblioteca;");
        System.out.println("3 - Adicionar novos podcasts à minha biblioteca;");
        System.out.println("4 - Visualisar os podcasts dentro da minha biblioteca;;");
        System.out.println("=====================================");
        escolha = lerTeclado.nextInt();

        switch (escolha){
            case 0:
                System.out.println("Saindo do Streamify... 👋");
                System.exit(0);
            case 1:
                String titulo;
                String artista;
                String genero;
                int duracao;
                int resposta;

                do {
                    System.out.println("Insira o título da música:");
                    titulo = lerTeclado.nextLine();
                    titulo = lerTeclado.nextLine();
                    System.out.println("Insira o artista da música:");
                    artista = lerTeclado.nextLine();
                    System.out.println("Insira o genêro da música:");
                    genero = lerTeclado.nextLine();
                    System.out.println("Insira a duração da música:");
                    duracao = lerTeclado.nextInt();

                    biblioteca.adicionarMusicas(new Musica(titulo,artista,genero,duracao));
                    System.out.println("Gostaria de adicionar outra música? (0 - NÃO | 1 - SIM)");
                    resposta = lerTeclado.nextInt();

                } while (resposta != 0);

                break;
            case 2:
                int resposta1;
                do {
                    biblioteca.listarMusicas();
                    System.out.println("Digite 0 para retornar ao menu.");
                    resposta1 = lerTeclado.nextInt();
                } while (resposta1 != 0);

                break;
            case 3:
                String tituloPodcast;
                String descricao;

                do {
                    System.out.println("Insira o título do podcast:");
                    tituloPodcast = lerTeclado.nextLine();
                    tituloPodcast = lerTeclado.nextLine();
                    System.out.println("Insira o autor do poscast:");
                    artista = lerTeclado.nextLine();
                    System.out.println("Insira a duração do podcast:");
                    duracao = lerTeclado.nextInt();
                    System.out.println("Insira a descrição do podcast:");
                    descricao = lerTeclado.nextLine();
                    descricao = lerTeclado.nextLine();

                    bibliotecaPodcast.adicionarPodcasts(new Podcast(tituloPodcast,artista,duracao,descricao));
                    System.out.println("Gostaria de adicionar outro podcast? (0 - NÃO | 1 - SIM)");
                    resposta = lerTeclado.nextInt();
                } while (resposta != 0);

                break;
            case 4:
                int resposta2;
                do {
                    bibliotecaPodcast.listarPodcasts();
                    System.out.println("Digite 0 para retornar ao menu.");
                    resposta2 = lerTeclado.nextInt();
                } while (resposta2 != 0);
                break;
            default:
                System.out.println("Não foi possível identificar sua resposta. Tente novamente.");
        }

    } while (true);
}