public class Pedido {
    private int idPedido;
    private int quantidade;
    private String data;
    private Cliente cliente;
    private Produto produto;

    public Pedido(int idPedido, int quantidade, String data, Cliente cliente, Produto produto){
        this.idPedido = idPedido;
        this.quantidade = quantidade;
        this.data = data;
        this.cliente = cliente;
        this.produto = produto;
    }

    public int getIdPedido(){
        return idPedido;
    }

    public int getQuantidade(){
        return quantidade;
    }

    public String getData() {
        return data;
    }

    public Cliente getCliente(){
        return cliente;
    }

    public Produto getProduto(){
        return produto;
    }

    public void setIdPedido(int idPedido){
        this.idPedido = idPedido;
    }

    public void setQuantidade(int quantidade){
        this.quantidade = quantidade;
    }

    public void setData(String data){
        this.data = data;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public void setProduto(Produto produto){
        this.produto = produto;
    }

    public void criarPedido(int idPedido, int quantidade, String data, Cliente cliente, Produto produto){
        cliente = this.cliente;
        produto = this.produto;
        quantidade = this.quantidade;
        data = this.data;
        idPedido = this.idPedido;
    }

    public void exibirPedido(){
        System.out.printf("-----------\n" + " Cliente: \n" + "-----------\n" + cliente + "\n-----------"
                + "\n Produto: \n" + "-----------\n" + produto + "\n-----------"
                + "\n Informações do pedido: " + "\n-----------"
                + "\n Quantidade: " + quantidade + "\n Data da compra: " + data + "\n Id do pedido: " + idPedido + "\n-----------");
    }

}
