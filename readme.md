# steam-arg : Proyecto Final de React

Hola! Este es el repo para la entrega final de mi proyecto de React para Coderhouse.
Creé la App mockeando un eCommerce para juegos de Steam *(seguro te preguntás: pero Steam ya vende en $ ARS, no? Tenés razón, pero bueno, quería hacer algo que me guste)*.

## Librerias y Herramientas utilizadas
 
 - Vite
 - React-Router-Dom
 - Firebase
 - MUI
 - Formik
 - Yup

## Vistas

**Principales**

 - **Home:** Es el landing page. Muestra el catálogo entero de juegos. Se
   puede filtrar por categoría *(genero)* con el botón *"Categorías"* en el
   Navbar.
 - **Item:** Vista de detalle del producto que fue clickeado. Contiene botón *"Agregar al Carrito"*.
 - **Acerca de:** Datos generales del creador.
 - **Shop:** Esta vista está compuesta por una tabla *(el carrito de compras)*
   y un form *(datos del usuario)* para poder confirmar la compra.


## Árbol de Componentes

 **Home:** 
 - *ItemList:* Renderiza todos los juegos dinámicamente con `ProductCard`, iterando un array basado en datos de Firebase.
 - *ProductCard:* Recibe props de ItemList para renderizar una Card con los datos del juego.
 - *Spinner:* Se renderiza cuando la operacion asíncrona de `ItemList` todavía esta siendo procesada.

**Item:** 
 - *ItemDetails:* Grid con los datos del juego. Recibe los datos de Firebase directamente.
 - *AddCartButton:* Boton para agregar al carrito. Recibe props de `ItemDetails` para poder pushear el juego al array del carrito de manera óptima. Utiliza el CartContext.
 
 **Acerca de:**
 - *AboutCard:* Simple Card que renderiza datos.

**Shop:**
 - *ShopCartList:* Componente base para ordenar a ShopCartListTable y recibir el Context de manera más ordenada.
 - *ShopCartListTable:* Tabla principal que renderiza el array del carrito de compras. Tiene boton para remover articulos del carrito.
 - *ShopForm:* Formulario para ingresar los datos del usuario. Utiliza Formik y Yup para validacion de datos.
 - *ShopMsg:* Mensaje que se renderiza al recibir los datos. Renderiza el ID de la compra.

**Componentes globales/generales:**

 - *Navbar:* Navegacion de la App con las paginas y el componente `CartWidget` para mostrar los items del carrito.
 - *Footer:* Un simple footer con info!!!
 - *CategoryMenu:* Menu desplegable al ser clickeado. Muestra todas las categorias o generos de juegos disponibles.


----

Creo que eso es todo!

Todos los componentes utilizan MUI con algunos estilos modificados para darle una apariencia ordenada y con estilo DarkMode.
