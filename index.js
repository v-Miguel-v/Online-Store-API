/* Initial & Global Values */
const { logErrors, boomErrorHandler, serverErrorHandler } = require("./middlewares/errorhandlers.middleware");
const routerApi = require("./routes");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => { console.log(`El servidor está corriendo en el puerto ${port}`); });
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(serverErrorHandler);

/* Pages */
// Main Page
app.get("/", getMainPage);
function getMainPage(request, response) {
	response.send(`
		<h1>Servidor de Prueba</h1>
		<p>El servidor se ha creado satisfactoriamente usando <i>express</i>.</p>
		<p>Justo ahora no estás en ninguna ruta en concreto, te encuentras en <b>la página principal</b>.</p>
		<br>
		<p><u>Prueba a acceder a las siguientes rutas:</u></p>
		<ul>
			<li><a href="http://localhost:3000/api/v1/users">Users</a></li>
			<li><a href="http://localhost:3000/api/v1/products">Products</a></li>
			<li><a href="http://localhost:3000/api/v1/categories">Categories</a></li>
			<li><a href="http://localhost:3000/example-route">Example Route</a></li>
		</ul>
	`);
}

// Example Route
app.get("/example-route", getExampleRoutePage); 
function getExampleRoutePage(request, response) {
	response.send(`
		<h1>Servidor de Prueba</h1>
		<p>Ahora te encuentras en <b>la ruta de ejemplo</b>.</p>
		<p><a href="http://localhost:3000">Regresar a la Página Principal</a></p>
	`);	
}