export default {
  // Navigation
  nav: {
    home: 'Gensyn Knoten Dashboard',
  },

  // Search
  search: {
    label: 'PeerId(s) eingeben (eines pro Zeile oder durch Kommas getrennt)',
    placeholder: 'Geben Sie eine oder mehrere PeerIds ein, getrennt durch Zeilenumbrüche oder Kommas\nBeispiel:\npeerId1\npeerId2\npeerId3',
    hint: 'Sie können mehrere PeerIds eingeben, eines pro Zeile oder durch Kommas getrennt. Keine Begrenzung der Anzahl der PeerIds.',
    button: 'Abfrage',
    searching: 'Abfrage läuft...',
    invalidFormat: 'Ungültiges PeerId-Format',
    noPeerIds: 'Bitte geben Sie mindestens eine PeerId ein',
    noValidPeerIds: 'Keine gültigen PeerIds gefunden',
    noResults: 'Keine Knoten für die angegebenen PeerIds gefunden.',
    results: 'Abfrageergebnisse',
    duplicates: '⚠️ Doppelte PeerIds erkannt, automatisch dedupliziert:',
  },

  // Node metrics
  metrics: {
    participation: 'Teilnahme',
    rewards: 'Belohnungen',
    wins: 'Siege',
  },

  // Node card
  nodeCard: {
    peerId: 'PeerId',
    address: 'Adresse',
    copyTooltip: 'Klicken Sie, um die vollständige PeerId zu kopieren',
    copied: '✓ Kopiert',
  },
};

