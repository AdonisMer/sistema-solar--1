# Explorador del Sistema Solar — Azure App Service

Aplicación original en React + Vite, adaptada para App Service Linux con Node 22 LTS. Se conserva la interfaz, el buscador, los filtros, la ordenación y los detalles de los cuerpos celestes.

## Subir el ZIP a Azure
1. Usa Node 22 LTS y Linux en tu App Service.
2. En Centro de implementación selecciona una nueva implementación y carga el ZIP completo, sin volver a comprimirlo.
3. Este ZIP tiene package.json directamente en la raíz, junto a package-lock.json, server.cjs, dist/ y los archivos fuente. No debe haber una carpeta sistema-solar/ envolviéndolos.
4. Espera a que finalicen la compilación y la implementación.
5. En Configuración > Configuración general (puede aparecer dentro de Configuración de la pila), establece el comando de inicio: npm start
6. Guarda los cambios, reinicia la aplicación y abre su URL.

El servidor escucha en 0.0.0.0 y en el puerto PORT que proporciona Azure. Solo publica el contenido de dist/. Los archivos fuente y de configuración no se sirven al navegador.

La carpeta dist/ ya va compilada para facilitar el despliegue. Azure también puede regenerarla mediante npm run build, usando las dependencias del proyecto. No se incluye node_modules: se restaura desde package-lock.json.

## Ejecutar en tu equipo con Node 22
- npm ci
- npm run dev: desarrollo con Vite.
- npm run build: compilar en dist/.
- npm start: servir la compilación en http://localhost:8080.

## Cambios respecto al ZIP original
- Eliminada la carpeta envolvente dentro del ZIP para que Azure detecte package.json.
- Declarada la versión 22.x de Node en package.json y en el lockfile.
- Añadido el comando start y el servidor de producción server.cjs.
- Incluida la compilación dist/.
- Sin cambios en src/, index.html ni vite.config.js.

## Referencia
https://learn.microsoft.com/azure/app-service/configure-language-nodejs