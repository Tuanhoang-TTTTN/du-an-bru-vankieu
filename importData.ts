export interface VocabWord {
  bru: string;
  vietnamese: string;
}

export interface VocabTopic {
  id: number | string;
  topic: string;
  description: string;
  wordsCount: number;
  status: string;
  words?: VocabWord[];
}

export const initialVocabData: VocabTopic[] = [
  {
    id: 1,
    topic: 'Gia đình & Xưng hô',
    description: 'Từ vựng giao tiếp cơ bản xưng hô gia đình tiếng Bru - Vân Kiều',
    wordsCount: 8,
    status: 'Đã giao',
    words: [
      { bru: 'A-Mạ', vietnamese: 'Mẹ' },
      { bru: 'A-Pơ', vietnamese: 'Cha / Bố' },
      { bru: 'A-Côn', vietnamese: 'Con' },
      { bru: 'A-Mấy', vietnamese: 'Bà' },
      { bru: 'A-Co', vietnamese: 'Anh / Chị' },
    ]
  },
  {
    id: 2,
    topic: 'Chào hỏi & Giao tiếp',
    description: 'Các từ ngữ thông dụng dùng trong sinh hoạt hàng ngày',
    wordsCount: 10,
    status: 'Đang học',
    words: [
      { bru: 'Sơ-đăng', vietnamese: 'Chào bạn' },
      { bru: 'Ơi-chao', vietnamese: 'Cảm ơn' },
      { bru: 'Lơ-mô', vietnamese: 'Cái gì' },
    ]
  },
  {
    id: 3,
    topic: 'Số đếm & Thời gian',
    description: 'Đếm số và các mốc thời gian trong ngày',
    wordsCount: 12,
    status: 'Mới',
    words: [
      { bru: 'Mụi', vietnamese: 'Một' },
      { bru: 'Băl', vietnamese: 'Hai' },
      { bru: 'Pe', vietnamese: 'Ba' },
    ]
  }
];