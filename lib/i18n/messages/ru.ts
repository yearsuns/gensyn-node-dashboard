export default {
  // Navigation
  nav: {
    home: 'Панель узлов Gensyn',
  },

  // Search
  search: {
    label: 'Введите PeerId (по одному на строку или через запятую)',
    placeholder: 'Введите один или несколько PeerId, разделенных переносами строк или запятыми\nПример:\npeerId1\npeerId2\npeerId3',
    hint: 'Вы можете ввести несколько PeerId, по одному на строку или через запятую. Нет ограничений на количество PeerId.',
    button: 'Запрос',
    searching: 'Запрос...',
    invalidFormat: 'Неверный формат PeerId',
    noPeerIds: 'Пожалуйста, введите хотя бы один PeerId',
    noValidPeerIds: 'Действительных PeerId не найдено',
    noResults: 'Не найдено узлов для указанных PeerId.',
    results: 'Результаты запроса',
    duplicates: '⚠️ Обнаружены дублирующиеся PeerId, автоматически удалены:',
  },

  // Node metrics
  metrics: {
    participation: 'Участие',
    rewards: 'Награды',
    wins: 'Победы',
  },

  // Node card
  nodeCard: {
    peerId: 'PeerId',
    address: 'Адрес',
    copyTooltip: 'Нажмите, чтобы скопировать полный PeerId',
    copied: '✓ Скопировано',
  },
};

