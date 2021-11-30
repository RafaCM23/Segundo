import java.util.Objects;

public class ProductoBean {

	private int id;
	private String nombre;
	private Double precio;
	private String img;
	
	
	public ProductoBean() {
		super();
	}
	public ProductoBean(String nombre,Double precio) {
		super();
		this.nombre=nombre;
		this.precio=precio;
		this.id=this.getId();
	}


	public int getId() {
		return hashCode();
	}


	public void setId() {
		this.id = hashCode();
	}


	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public Double getPrecio() {
		return precio;
	}


	public void setPrecio(Double precio) {
		this.precio = precio;
	}


	@Override
	public int hashCode() {
		return Objects.hash(nombre, precio);
	}


	public boolean equals(ProductoBean obj) {
		if (this.id == obj.id)
			return true;
		else {
			return false;
		}
		
		
	}
	@Override
	public String toString() {
		return "id=" + id + ", nombre=" + nombre + ", precio=" + precio;
	}
	
	
	
	
}
