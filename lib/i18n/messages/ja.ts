export default {
  // Navigation
  nav: {
    home: 'Gensynノードパネル',
  },

  // Search
  search: {
    label: 'PeerIdを入力（1行に1つ、またはカンマ区切り）',
    placeholder: '1つ以上のPeerIdを入力し、改行またはカンマで区切る\n例：\npeerId1\npeerId2\npeerId3',
    hint: '複数のPeerIdを入力できます。1行に1つ、またはカンマで区切ってください。PeerIdの数に制限はありません。',
    button: '照会',
    searching: '照会中...',
    invalidFormat: 'PeerIdの形式が無効です',
    noPeerIds: '少なくとも1つのPeerIdを入力してください',
    noValidPeerIds: '有効なPeerIdが見つかりません',
    noResults: '指定されたPeerIdに一致するノードが見つかりません。',
    results: '照会結果',
    duplicates: '⚠️ 重複するPeerIdが検出されました。自動的に重複が削除されました：',
  },

  // Node metrics
  metrics: {
    participation: '参加',
    rewards: '報酬',
    wins: '勝利',
  },

  // Node card
  nodeCard: {
    peerId: 'PeerId',
    address: 'アドレス',
    copyTooltip: 'クリックして完全なPeerIdをコピー',
    copied: '✓ コピーしました',
  },
};

