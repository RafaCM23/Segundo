<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.HashMap" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>· LOGIN ·</title>
</head>
<link rel="stylesheet" href="HTML/login.css">

		<%
		HashMap <String, String> usuarios = new HashMap<String, String>();
		usuarios.put("Admin", "Admin");
		usuarios.put("Rafa", "rafa123");
		usuarios.put("juanjo", "jojuan99");
		usuarios.put("anonimo", "#{@ŋ5sSwt€€ħw3LS68");
		usuarios.put("pepe", "pepe"); 
		%>
		
<body>
    <div class="contenedor">
        <h2>Login</h2>
        <form action="http://localhost:8080/ProyectoPaginaCompra/index.jsp" method="POST">
            <label for="user">Usuario:</label><input type="text" name="user" id="user">
            <br>
            <label for="password">Contraseña:</label><input type="text" name="password" id="password">
            <br>
            <button type="submit">Entrar</button>
        </form>
        </div>
        
        <%
        
        String usuario = request.getParameter("user");
    	String contrasena = request.getParameter("password");
    	HttpSession sesion = request.getSession(true);
    	PrintWriter print = response.getWriter();
    	
    	if(usuarios.containsKey(usuario) && usuarios.get(usuario).equals(contrasena)) {
    		String url = "http://localhost:8080/ProyectoPaginaCompra/HTML/catalogo.html";
			response.sendRedirect(url);
			sesion.setAttribute("intentos",0);
			sesion.setAttribute("usuario","registrado");
		
    	}
    	else{
    	
    			if(sesion.getAttribute("intentos")==null ||(Integer)sesion.getAttribute("intentos")==0 ){
    				sesion.setAttribute("intentos",1);sesion.setAttribute("usuario",null);}
    			
    	else{
    			
    		Integer intentos=(Integer) sesion.getAttribute("intentos");
    			sesion.setAttribute("usuario",null);
    			print.println ("<p style='text-align:center' with='100'>Numero de intentos :"+intentos+"</p>"); 
    			sesion.setAttribute("intentos", (1+intentos));
    	}
    				
    	}
		
        %>
    
</body>
</html>  