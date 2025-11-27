export default {
  // Navigation
  nav: {
    home: 'Panel de nodos Gensyn',
  },

  // Search
  search: {
    label: 'Ingrese PeerId(s) (uno por línea o separados por comas)',
    placeholder: 'Ingrese uno o más PeerIds, separados por saltos de línea o comas\nEjemplo:\npeerId1\npeerId2\npeerId3',
    hint: 'Puede ingresar múltiples PeerIds, uno por línea o separados por comas. No hay límite en la cantidad de PeerIds.',
    button: 'Consultar',
    searching: 'Consultando...',
    invalidFormat: 'Formato de PeerId inválido',
    noPeerIds: 'Por favor ingrese al menos un PeerId',
    noValidPeerIds: 'No se encontraron PeerIds válidos',
    noResults: 'No se encontraron nodos para los PeerIds proporcionados.',
    results: 'Resultados de consulta',
    duplicates: '⚠️ Se detectaron PeerIds duplicados, se eliminaron automáticamente:',
  },

  // Node metrics
  metrics: {
    participation: 'Participación',
    rewards: 'Recompensas',
    wins: 'Victorias',
  },

  // Node card
  nodeCard: {
    peerId: 'PeerId',
    address: 'Dirección',
    copyTooltip: 'Haga clic para copiar el PeerId completo',
    copied: '✓ Copiado',
  },
};

