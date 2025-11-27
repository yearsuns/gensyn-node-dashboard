export default {
  // Navigation
  nav: {
    home: 'Gensyn Node Dashboard',
  },

  // Search
  search: {
    label: 'Enter PeerId(s) (one per line or comma-separated)',
    placeholder: 'Enter one or more PeerIds, separated by newlines or commas\nExample:\npeerId1\npeerId2\npeerId3',
    hint: 'You can enter multiple PeerIds, one per line or separated by commas. No limit on the number of PeerIds.',
    button: 'Query',
    searching: 'Querying...',
    invalidFormat: 'Invalid PeerId format',
    noPeerIds: 'Please enter at least one PeerId',
    noValidPeerIds: 'No valid PeerIds found',
    noResults: 'No nodes found for the provided PeerIds.',
    results: 'Query Results',
    duplicates: '⚠️ Duplicate PeerIds detected, automatically deduplicated:',
  },

  // Node metrics
  metrics: {
    participation: 'Participation',
    rewards: 'Rewards',
    wins: 'Wins',
  },

  // Node card
  nodeCard: {
    peerId: 'PeerId',
    address: 'Address',
    copyTooltip: 'Click to copy full PeerId',
    copied: '✓ Copied',
  },
};

