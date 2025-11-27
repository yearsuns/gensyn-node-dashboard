export default {
  // Navigation
  nav: {
    home: 'Gensyn 노드 패널',
  },

  // Search
  search: {
    label: 'PeerId 입력 (한 줄에 하나 또는 쉼표로 구분)',
    placeholder: '하나 이상의 PeerId를 입력하고 줄바꿈 또는 쉼표로 구분\n예시:\npeerId1\npeerId2\npeerId3',
    hint: '여러 PeerId를 입력할 수 있습니다. 한 줄에 하나 또는 쉼표로 구분하세요. PeerId 수에 제한이 없습니다.',
    button: '조회',
    searching: '조회 중...',
    invalidFormat: 'PeerId 형식이 유효하지 않습니다',
    noPeerIds: '최소한 하나의 PeerId를 입력하세요',
    noValidPeerIds: '유효한 PeerId를 찾을 수 없습니다',
    noResults: '제공된 PeerId에 해당하는 노드를 찾을 수 없습니다.',
    results: '조회 결과',
    duplicates: '⚠️ 중복된 PeerId가 감지되어 자동으로 중복 제거되었습니다:',
  },

  // Node metrics
  metrics: {
    participation: '참여',
    rewards: '보상',
    wins: '승리',
  },

  // Node card
  nodeCard: {
    peerId: 'PeerId',
    address: '주소',
    copyTooltip: '전체 PeerId를 복사하려면 클릭',
    copied: '✓ 복사됨',
  },
};

