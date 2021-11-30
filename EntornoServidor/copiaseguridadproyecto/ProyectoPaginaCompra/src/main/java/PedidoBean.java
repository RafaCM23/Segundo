import java.util.ArrayList;
import java.util.HashMap;

public class PedidoBean {

	private int id;
	private HashMap<ProductoBean, Integer> productos;
	
	
	public PedidoBean() {
		super();
		productos= new HashMap<ProductoBean, Integer>();
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public HashMap<ProductoBean, Integer> getProductos() {
		return productos;
	}


	public void anadirProducto(ProductoBean p, int cantidad) {
		productos.put(p, cantidad);
	}
	
	
	public Double calculaTotal() {
		
		Double total=0.0;
		
		for (ProductoBean producto: productos.keySet()) {
			int cantidad= productos.get(producto);
			total+=(producto.getPrecio()*cantidad);
		}
		
		
		return total;
	}
}
