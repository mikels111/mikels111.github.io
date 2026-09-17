export const projects = [
  {
    id: 'proyecto-1',
    repository: 'github.com/mikels111/GestionProyectos',
    name: 'Gestión de proyectos y documentos colaborativos',
    description: 'Sistema de gestión de proyectos construido con React + ASP.NET Core 8 y MySQL.',
    longDescrition:'Permite a los usuarios crear espacios de trabajo, organizar proyectos en una vista de árbol y editar el contenido de cada proyecto mediante un editor de bloques rich-text (EditorJS), con guardado automático.',
    features: [
      'Autenticación segura con registro por email, login con Google OAuth y sistema de JWT con refresh tokens (HttpOnly cookies).',
      'Espacios de trabajo (Workspaces): cada usuario puede crear y unirse a múltiples espacios de trabajo, con roles de administrador y miembro.',
      'Proyectos: crear, renombrar, eliminar y abrir proyectos en una vista de árbol.',
      'Editor de bloques: contenido estructurado con headers, checklists, código, tablas e imágenes (EditorJS).',
      'Verificación por email: códigos de verificación y emails transaccionales vía SMTP (Brevo).'
    ],
    images: [
      '$/images/projects/gp/GP1.png',
      '$/images/projects/gp/GP2.png',
      '$/images/projects/gp/GP3.png'
    ]

  },
  {
    id: 'proyecto-2',
    repository: 'github.com/mikels111/facturacion',
    name: 'Gestor de Finanzas Personales',
    description: 'Aplicación fullstack de gestión de finanzas. Construida con React + ASP.NET Core 10 y SQLite.',
    longDescrition:'Finanzas personales basadas en el sistema de "cajas" (moneyboxes), donde cada caja representa una categoría de gasto/ahorro (Inversión, Necesidades, Ocio, Gastos Grandes, Donación) con un porcentaje asignado.',
    features: [
      'Depósito global: Al ingresar una cantidad, se distribuye automáticamente entre todas las cajas según el porcentaje configurado en cada una.',
      'Depósito/Retiro individual: Operaciones de ingreso y retiro sobre una caja específica.',
      'Dashboard con importe global: Visualización del saldo total en tiempo real.',
      'Historial de movimientos: Registro completo de ingresos y retiros con importes previos (por caja y global).',
      'Gráficas de evolución: Chart de área con la evolución del importe global y chart de barras con el desglose de gastos por categoría en las últimas 4 semanas.'
    ],
    images: [
      '$/images/projects/gf/GF1.png',
      '$/images/projects/gf/GF2.png',
      '$/images/projects/gf/GF3.png'
    ]

  }
]