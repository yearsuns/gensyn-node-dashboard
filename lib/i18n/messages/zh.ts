export default {
  // Navigation
  nav: {
    home: 'Gensyn节点面板',
  },

  // Search
  search: {
    label: '输入 PeerId（每行一个或用逗号分隔）',
    placeholder: '输入一个或多个 PeerId，用换行符或逗号分隔\n示例：\npeerId1\npeerId2\npeerId3',
    hint: '您可以输入多个 PeerId，每行一个或用逗号分隔。PeerId 数量没有限制。',
    button: '查询',
    searching: '查询中...',
    invalidFormat: 'PeerId 格式无效',
    noPeerIds: '请输入至少一个 PeerId',
    noValidPeerIds: '未找到有效的 PeerId',
    noResults: '未找到匹配的节点。',
    results: '查询结果',
    duplicates: '⚠️ 检测到重复的 PeerId，已自动去重：',
  },

  // Node metrics
  metrics: {
    participation: '参与度',
    rewards: '奖励',
    wins: '获胜次数',
  },

  // Node card
  nodeCard: {
    peerId: 'PeerId',
    address: '地址',
    copyTooltip: '点击复制完整 PeerId',
    copied: '✓ 已复制',
  },
};

