# Prueba Técnica - Beezy

## Mi proyecto

- Dónde localizarlo  
   Mi trabajo se encuentra en el repositorio de Github y puedes encontrar facilmente el link a Github Page que da acceso a la última versión de mi **rama master** en el apartado _About_. [Acceder a la web](https://github.com/JuditAldeguer/Beezy)

  Deseo destacar que he seguido un **diseño responsive**, el cual varia al pasar de versión mobil a tablet y a desktop y he usado **Bootstrap**, que estoy aprendiendo ahora, para el CSS.

  Por otro lado, como podrás ver, este trabajo consta de dos ramas **rama dev** para todo lo que está en desarrollo y **rama master** que contiene el producto final.

- Qué es  
  Se trata de una aplicación web que sirve de Visualizar los personajes de la serie Breaking Bad.

  - Obtener información de los personajes iniciales gracias a una primera llamada a la **API** y con el **useEffect**
  - Pintar los personajes iniciales
  - Cambiar el orden de visaluzación de los personajes: por Nombre, por Nickname.
  - Al clicar sobre un personaje, ver su **Información Deallada**.
  - Posibilidad de **filtrar** los personajes según nombre, estado y aparición en serie "Better Call Saul".
  - Para una mejor estructura, está desglosado en **Componentes**
  - Tres visualizaciones distintas usando **Route, Switch**
  - Informar con una visalización distinta si no existe la url **notFoundPage** con el uso de **ModalWindows**.
  - Uso de **Bootstrap** por dar estilo.  
  - Introducir **Typescript** y **Testing** los cuales estoy aprendiendo


- Qué partes tiene  
  Contiene tres partes claras:

  1. El _header_
     - Título de la página
     - Menú hamburguesa
  2. El _main_
     - Fromulario para el filtrado
     - Personajes
  3. El _footer_


- Qué se podría añadir  
  - Añadir más testing y trabajar con la métodologia Test Driven Development (TDD).
  - Posibilidad de añadir más funcionalidades como, por ejemplo:
      - Buscador por nickname.
      - Al haber más de 10 personajes como resultado, incorporar componente que permita navegar de una páina a otra.
      - Guardar los datos en LocalStorage / BBDD dichas nuevos personajes. 


- Qué tecnologías usa
  He usado los lenguages HTML, CSS, TypeScript, Bootstrap y React.  
  El preprocesador de CSS usado ha sido SAAS pues garcias al react-starter-Kit he podido usar diferentes herramientas como la _automatización de gulp_.

- Cómo se instala  
  Gracias al Starter-Kit la instalación es muy simple, únicamente se precisa de _Visual Studio Code_ con las correspondientes extensiones, un navegador como, por ejemplo, _Chrome_ y _Github_.

- Cómo se ejecuta  
  Una vez se dispone de estas herramientas bien ubicadas, con los comandos <npm install> y <npm start> abrirá el proyecto en [http://localhost:3000](http://localhost:3000) y podrás empezar a hacer uso del React-Starter-Kit y sus facilidades.

- Cómo se prueban los test  
  Con el comando <npm run testl> y podrás empezar a hacer uso testing.

Espero que os guste mi trabajo, por supuesto tengotodavía mucho a mejorar pero no me faltan ganas! Espero que podáis darme indicaciones para seguir mejorando.  
Gracias por adelantado!!