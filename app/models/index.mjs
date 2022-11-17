import Departamentos from "./departamentos.mjs";
import Municipios from "./municipios.mjs";
import Estudiantes from './estudiante.mjs';

Departamentos.associate();
Municipios.associate();
Estudiantes.associate();

export {
  Departamentos,
  Municipios,
  Estudiantes,
}