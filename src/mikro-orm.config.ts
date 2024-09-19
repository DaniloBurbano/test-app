import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';

const config: MikroOrmModuleOptions = {
  entities: ['./dist/entities'], // Directorio donde estarán tus entidades (clases)
  entitiesTs: ['./src/entities'], // Directorio donde estarán tus entidades en TS
  dbName: 'movies',                 // Nombre de la base de datos (según lo configurado en Docker)
  user: 'admin',                    // Usuario de la base de datos
  password: 'admin',            // Contraseña de la base de datos
  host: 'localhost',               // Host (localhost si es en la misma máquina o la IP del contenedor)
  port: 5432,                      // Puerto de conexión
  debug: true,                     // Opción para mostrar más detalles en la consola (opcional)
};

export default config;