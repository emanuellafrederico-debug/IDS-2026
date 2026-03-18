public class Cachorro extends Animal implements Brincalhao{

    @Override
    public void emitirSom(){
        System.out.println("Au au! =:0)");
    }

    @Override
    public void brincar() {
        System.out.println("Cachorro brincando...");
    }
}
