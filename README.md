# automatas2

## Mobile Gym Trainer App

Link: https://github.com/emafer77/automatas2/blob/main/README.md

**Author(s):** fernado Emanuel Ramirez Ahumada

**estado:** Desarrollo

**Ultima actualización:** 2024-05-30

**Objetivo**

El objetivo principal es proporcionar a los usuarios una experiencia de entrenamiento personalizada y respaldada por datos científicos, fomentando un estilo de vida saludable y activo.

Nota: Este es un diseño inicial y puede requerir ajustes y revisiones a medida que el proyecto avanza. Se espera que este diseño sirva como guía para el desarrollo del proyecto de la aplicación móvil del entrenador de gimnasio.

### Contenido

**Goals**

Proporcionar orientación personalizada sobre los mejores ejercicios para cada grupo muscular.
Ofrecer vídeos explicativos para asegurar la correcta ejecución de los ejercicios.
Integrar datos científicos para respaldar la efectividad de los ejercicios recomendados.
Generar rutinas automáticas adaptadas a la intensidad y repeticiones adecuadas para cada usuario.
Incluir una tabla de progreso para que los usuarios puedan rastrear su mejora física.

**Non-Goals**

Background

eh visto aplicaciones moviles que su funcionalidad se asemeja a la aplicacion , la
diferencia de mi aplicacion tendra una interfaz amigable facil de entender , tendra videos de expertos en el tema ademas que contara con inteligencia
artificial que brindara soporte a preguntas asi como creara rutinas de acuerdo a las necesidades de cada persona.

**Overview**

se requiere una app movil que guarde videos en secciones dependiendo la zona del cuerpo humano que se quiere entrenar
las secciones seran:

- piernas
- espalda
- brazos
- hombros
- pecho

**Detailed Design**

Solution 1

**Frontend**

en la pantalla principal se visualizara una lista de la parte del cuerpo al que se quiere enfocar que al darle click despliegara lista de musculos especificos
ejemplo
pecho:
pecho superior:
-desplegar videos
-informacion del musculo

tambien en la misma pantalla habra una seccion para crear rutina
-se despliegara un asistente virtual que le hara prenguntas al usuario
ejemplo:
¿que edad tienes?

¿cual es tu peso actual?

¿cuanto mides actualmente?

¿cual es tu meta?

- perder grasa
- ganar musculo
- perder grasa y ganar musculo

¿que deseas entrenar hoy?

¿cual es el tiempo con el que dispones?

De acuerdo con la informacion obtenida buscara los videos de ejercicio y creara una rutina expesifica

**Herramientas utilizadas**

- react native
- expo

**Backend**

se desarrollo una base de datos en donde se guardaron informacion que sera requerida del front end, es decir guardaron datos cientificos de informacion de cada musculo, los mejores ejercicios con su respectiva informacion, tambien se llevo a cabo un servidor, este es capas de obtener toda la informacion de la base datos , este manda la informacion a nuestro client

**Herramientas utilizadas**

- MySql
- node

### Visualizacion del proyecto en funcionalidad

primeramente tenemos nuestra pantalla principal en ella tenemos 2 opciones

- crear rutina
- musculos
  (hasta la fecha solo musculos tiene funcionalidad)

![pantalla principal](/imagenes%20/1.png)

Cuando se le da click en musculos despliega la siguiente pantalla.

En ella se muestran las parte del cuerpo que deseas entrenanar

![pantalla 2](/imagenes%20/2.png)

En el ejemplo anterior se le dio click en Espalda

se desplegara la siguiente pantalla en ella se muestran los musculos que se pueden entrenar de la espalda

![pantalla 4](/imagenes%20/3.png)

a continuacion se le da click en dorsal ancho , de ahi se desplegara la siguiente pantalla con la informacion del musculos

![pantalla 3](/imagenes%20/6.png)

si deslizamos la pantalla apareceran dos opciones en cualquiera de ellas desplegara una nueva pantalla con los ejercicios para trabajar ese musculo

![pantalla 5](/imagenes%20/4.png)

aqui se muestra como la informacion del ejercicio y una muestra en video de como realizarlo

![pantalla 6](/imagenes%20/5.png)
