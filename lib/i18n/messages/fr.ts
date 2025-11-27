export default {
  // Navigation
  nav: {
    home: 'Tableau de bord des nœuds Gensyn',
  },

  // Search
  search: {
    label: 'Entrez le(s) PeerId (un par ligne ou séparés par des virgules)',
    placeholder: 'Entrez un ou plusieurs PeerIds, séparés par des sauts de ligne ou des virgules\nExemple:\npeerId1\npeerId2\npeerId3',
    hint: 'Vous pouvez entrer plusieurs PeerIds, un par ligne ou séparés par des virgules. Aucune limite sur le nombre de PeerIds.',
    button: 'Requête',
    searching: 'Requête en cours...',
    invalidFormat: 'Format de PeerId invalide',
    noPeerIds: 'Veuillez entrer au moins un PeerId',
    noValidPeerIds: 'Aucun PeerId valide trouvé',
    noResults: 'Aucun nœud trouvé pour les PeerIds fournis.',
    results: 'Résultats de requête',
    duplicates: '⚠️ PeerIds en double détectés, déduplication automatique :',
  },

  // Node metrics
  metrics: {
    participation: 'Participation',
    rewards: 'Récompenses',
    wins: 'Victoires',
  },

  // Node card
  nodeCard: {
    peerId: 'PeerId',
    address: 'Adresse',
    copyTooltip: 'Cliquez pour copier le PeerId complet',
    copied: '✓ Copié',
  },
};

