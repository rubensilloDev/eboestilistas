📄 Guía de Estándares de HTML

1. Estructura básica del documento
Uso obligatorio de <!DOCTYPE html>: Si
Idioma por defecto (lang): es
Codificación (charset): [ ]
Meta viewport: Si
Plantilla base:
<!DOCTYPE html>
<html lang="[ ]">
<head>
  <meta charset="[ ]">
  <meta name="viewport" content="[ ]">
  <title>[ ]</title>
</head>
<body>
  [Contenido]
</body>
</html>


3. Convenciones de nomenclatura
Clases CSS: Debe de tener todas las etiquetas su respectiva clase que sea en español y que identifique y describa perfectamente la etiqueta (debe ser sencillo y eficaz)
IDs: Deben de tener IDs solo las cosas mas importantes, que se usen pocos IDs

4. Uso de etiquetas HTML
Etiquetas semánticas obligatorias: header, main, section, article (si hay, si no no), footer, etc
Uso de <div>: todas las secciones deben tener al menos un div, que envuelva todo el contenido de esas

5. Accesibilidad (a11y)
Uso de atributos alt en imágenes: Obligatorio
Estructura de encabezados (h1-h6): Solo un H1 por página

7. Organización del código
Indentación: Tabs
Comentarios: Se debe de comentar el archivo lo mas completo posible, al menos debe tener comentarios para dividir las distintas secciones de la pagina.

8. Buenas prácticas
Evitar código duplicado
NO poner codigo CSS
Uso de scripts inline: No permitido

11. Compatibilidad y testing
Navegadores soportados: Todos
