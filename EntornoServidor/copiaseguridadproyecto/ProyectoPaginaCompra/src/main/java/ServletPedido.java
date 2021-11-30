

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

/**
 * Servlet implementation class ServletPedido
 */
@WebServlet("/ServletPedido")
public class ServletPedido extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public ServletPedido() {
        super();
    }

	//Hay que hacer server de login para autenticar usuario
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession sesion = request.getSession(false);
		PrintWriter print = response.getWriter();
		if(sesion.getAttribute("usuario")==null|| sesion.getAttribute("usuario").equals("nologeado")) {
			String url = "Error.jsp";
			response.sendRedirect(url);
			
		}
		
		
		
		int cant1=Integer.parseInt(request.getParameter("cantidad1"));
		int cant2=Integer.parseInt(request.getParameter("cantidad2"));
		int cant3=Integer.parseInt(request.getParameter("cantidad3"));
		int cant4=Integer.parseInt(request.getParameter("cantidad4"));
		int cant5=Integer.parseInt(request.getParameter("cantidad5"));
		int cant6=Integer.parseInt(request.getParameter("cantidad6"));
		
		PedidoBean pedido= new PedidoBean();
		ProductoBean producto1 = new ProductoBean("MSI",850.0);
		ProductoBean producto2 = new ProductoBean("Razer",1250.0);
		ProductoBean producto3 = new ProductoBean("Republic",2500.0);
		ProductoBean producto4 = new ProductoBean("Aurora Elite",750.0);
		ProductoBean producto5 = new ProductoBean("Antec N1000",1100.0);
		ProductoBean producto6 = new ProductoBean("Trident X Plus",2000.0);
		
		
		
		
		if (cant1>0 && cant1<11) { producto1.setImg("img/portatil1.png"); pedido.anadirProducto(producto1, cant1);}
		if (cant2>0 && cant2<11) { producto2.setImg("img/portatil2.png"); pedido.anadirProducto(producto2, cant2);}
		if (cant3>0 && cant3<11) { producto3.setImg("img/portatil3.png"); pedido.anadirProducto(producto3, cant3);}
		if (cant4>0 && cant4<11) { producto4.setImg("img/pc1.png"); pedido.anadirProducto(producto4, cant4);}
		if (cant5>0 && cant5<11) { producto5.setImg("img/pc2.png"); pedido.anadirProducto(producto5, cant5);}
		if (cant6>0 && cant6<11) { producto6.setImg("img/pc3.png"); pedido.anadirProducto(producto6, cant6);}
		
		
		
		Comparator<ProductoBean> comparador = new Comparator<ProductoBean>() {
			@Override
			public int compare(ProductoBean o1, ProductoBean o2) {
				
				return o1.getNombre().compareTo(o2.getNombre());
			}
		};
		
		List<ProductoBean> keys = new ArrayList<ProductoBean>(pedido.getProductos().keySet());
		Collections.sort(keys,comparador);
		
		sesion.setAttribute("pedido",pedido);
		sesion.setAttribute("ordenada",keys);
		
		
		imprimir(pedido,keys,response);
		
	}
		
		protected void imprimir(PedidoBean order, List<ProductoBean> ordkeys, HttpServletResponse response) {
			
			
			
			
			PrintWriter print;
			try {
				print = response.getWriter();
				print.println("<!DOCTYPE html>\n"
						+ "			<html lang=\"es\">\n"
						+ "			<head>\n"
						+ "			    <meta charset=\"UTF-8\">\n"
						+ "			    <title>Â· CHECKOUT Â·</title>\n"
						+ "			</head>\n"
						+ "			<link rel=\"stylesheet\" href=\"HTML/pedido.css\">\n"
						+ "			<body>\n"
						+ "			    <h2>Detalles del pedido</h2>\n"
						+ "			    <div class=\"contenedor\">\n"
						+ "			       \n"
						+ "			    </div>\n");
				
				print.println("<div class=\"resumen\">");
				Double total=0.0;
				 for (ProductoBean p : ordkeys) {
					print.println("<img src='"+p.getImg()+"' width='75' height='auto'>"+p.getNombre()+" "+ p.getPrecio()+"â¬ x "+order.getProductos().get(p)+"<br>");
					total+=p.getPrecio();
					};
					
					
					print.println("<br>Total: "+total+"€");
				print.println( "</div>\n   <div class=\"formulario\">\n"
						+ "			        <form action=\"Final\" method=\"POST\">\n"
						+ "			        <label for=\"codPost\">*Cod Postal:</label>"
						+ "<input type=\"number\" name=\"codPost\" id=\"codPost\" min=\"10000\" max=\"99999\" placeholder=\"ej: 41300...\" required>\n"
						+ "			        <br>\n"
						+ "			        <label for=\"calle\">*Calle:</label><input type=\"text\" name=\"calle\" id=\"calle\" placeholder=\"Calle/via/avenida\" required>\n"
						+ "			        <label for=\"numero\">*num:</label><input type=\"number\" name=\"numero\" id=\"numero\" min=\"0\" max=\"150\" placeholder=\"ej: 99\" required>\n"
						+ "			        <br>\n"
						+ "			        <label for=\"piso\">*Puerta:</label><input type=\"text\" name=\"numero\" id=\"piso\" placeholder=\"ej:2Âº C\" size=\"3\" maxlength=\"4\" required>\n"
						+ "			        <br>\n"
						+ "			        <pre><h2>         Metodos de pago</h2></pre>\n"
						+ "			        <input type=\"radio\" name=\"metodoPago\" id=\"pagoTarjeta\" required>Tarjeta</input>\n"
						+ "			        <input type=\"radio\" name=\"metodoPago\" id=\"pagoContra\" required>Contrareembolso</input>\n"
						+ "			        <input type=\"radio\" name=\"metodoPago\" id=\"pagoCrypto\" required>Crypto</input>\n"
						+ "			        <br>\n"
						+ "			        <button type=\"submit\">Proceder</button>\n <br><br>"
						+ "\n"
						+ "			    </form>\n"
						+ "<form action=\"./Invalidate\" method=\"POST\">\n"
						+ "       \n"
						+ "        <button type=\"submit\">Salir de la sesion</button>\n"
						+ "\n"
						+ "    </form>"
						+ "			    </div>\n"
						+ "			    \n"
						+ "\n"
						+ "			    \n"
						+ "			    \n"
						+ "			</body>\n"
						+ "			</html>");
				
				
			} catch (IOException e) {
				System.out.println(e.getMessage());
			}
			
					
		}
		
	
	

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
