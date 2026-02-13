void main() {

    Cliente cliente = new Cliente(1,"Josézinho","josedasilva@gmnail.com");
    Produto produto = new Produto(5,"lanche",10.99);
    Pedido pedido = new Pedido(3,2,"21/10/2008",cliente,produto);

    pedido.exibirPedido();
}
