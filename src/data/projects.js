export const projects = [
  {
    id: 'proyecto-1',
    name: 'Gestión de proyectos y documentos colaborativos',
    description: 'Sistema de gestión de proyectos construido con React + ASP.NET Core 8 y MySQL.',
    longDescrition:'Permite a los usuarios crear espacios de trabajo, organizar proyectos en una vista de árbol y editar el contenido de cada proyecto mediante un editor de bloques rich-text (EditorJS), con guardado automático.',
    features: [
      'Autenticación segura con registro por email, login con Google OAuth y sistema de JWT con refresh tokens (HttpOnly cookies).',
      'Espacios de trabajo (Workspaces) — cada usuario puede crear y unirse a múltiples espacios de trabajo, con roles de administrador y miembro.',
      'Proyectos — crear, renombrar, eliminar y abrir proyectos en una vista de árbol.',
      'Editor de bloques — contenido estructurado con headers, checklists, código, tablas e imágenes (EditorJS).',
      'Verificación por email — códigos de verificación y emails transaccionales vía SMTP (Brevo).'
    ]
  }
]