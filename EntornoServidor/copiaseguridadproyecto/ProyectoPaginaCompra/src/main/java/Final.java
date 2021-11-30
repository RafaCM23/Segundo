

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Final
 */
@WebServlet("/Final")
public class Final extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public Final() {
        super();
       
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession sesion = request.getSession(false);
		if(sesion.getAttribute("usuario")==null|| sesion.getAttribute("usuario").equals("nologeado")) {
			String url = "Error.jsp";
			response.sendRedirect(url);
		}
		PedidoBean pedido=(PedidoBean) sesion.getAttribute("pedido");
		ArrayList<ProductoBean> ordenada=(ArrayList<ProductoBean>) sesion.getAttribute("ordenada");
		
		PrintWriter print = response.getWriter();
		
		
		print.println("<!DOCTYPE html>\n"
				+ "		<html lang=\"es\">\n"
				+ "		<head>\n"
				+ "		    <meta charset=\"UTF-8\">\n"
				+ "		    <title>· CHECKOUT ·</title>\n"
				+ "		</head>\n"
				+ "		<link rel=\"stylesheet\" href=\"HTML/final.css\">\n"
				+ "		<body>\n"
				+ "		    <h2>Detalles del pedido</h2>\n"
				+ "		    <div class=\"contenedor\">\n"
				+ "		       \n"
				+ "		    </div>\n"
				+ "		    \n"
				+ "		    <div class=\"pedido\">\n");
				Double total=0.0;
				 for (ProductoBean p : ordenada) {
					print.println("<img src='"+p.getImg()+"' width='75' height='auto'>"+p.getNombre()+" "+ p.getPrecio()+"â¬ x "+pedido.getProductos().get(p)+"<br>");
					total+=p.getPrecio();
					};
					
					
					print.println("<br>Total: "+total+"€");
					Double impuestos=total*0.2;
					print.println("<br>Impuestos: "+impuestos+"€");
					Double totalImpuestos=total+impuestos;
					print.println("<br>Total Final: "+totalImpuestos+"€");
					
				print.print("		        <form action=\"HTML/catalogo.html\" method=\"POST\">\n"
				+ "		       \n"
				+ "		        <button type=\"submit\">Confirmar</button>\n"
				+ "\n"
				+ "		    </form>\n"
				+ "<form action=\"./Invalidate\" method=\"POST\">\n"
				+ "       \n"
				+ "        <button type=\"submit\">Salir de la sesion</button>\n"
				+ "\n"
				+ "    </form>"
				+ "		    </div>\n"
				+ "		    \n"
				+ "\n"
				+ "		    \n"
				+ "		    \n"
				+ "		</body>\n"
				+ "		</html>");
		
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
