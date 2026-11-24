import { allGrammarLessons, getGrammarLesson } from './grammar/index';

export type GrammarSection =
  | 'Từ loại'
  | 'Cấu trúc câu'
  | '12 thì tiếng Anh'
  | 'Mệnh đề'
  | 'Các dạng câu đặc biệt'
  | 'Cấu trúc ngữ pháp mở rộng';

export interface GrammarExample {
  english: string;
  vietnamese: string;
}

export interface GrammarTopic {
  id: string;
  title: string;
  section: GrammarSection;
  level: string;
  summary: string;
  explanation: string;
  structure: string;
  usage: string[];
  examples: GrammarExample[];
}

export interface GrammarFolderItem {
  title: string;
  topicId?: string;
}

export interface GrammarFolder {
  id: string;
  title: string;
  description: string;
  items: GrammarFolderItem[];
}

/**
 * 15 Preserved Tense Topics (12 Tenses + 3 Supplemental Lessons)
 * Kept 100% intact to preserve all progress, interactive practice, and visual guides.
 */
const tenseTopics: GrammarTopic[] = [
  { id: 'present-simple', title: 'Thì hiện tại đơn', section: '12 thì tiếng Anh', level: 'A1', summary: 'Thói quen, sự thật và lịch trình.', explanation: 'Hiện tại đơn diễn tả điều thường xuyên xảy ra hoặc đúng nói chung. Với he, she, it, động từ thường thêm -s/-es ở câu khẳng định.', structure: 'Khẳng định: S + V(s/es) · Phủ định: S + do/does not + V · Hỏi: Do/Does + S + V?', usage: ['Thói quen và hoạt động lặp lại.', 'Sự thật hiển nhiên, trạng thái.', 'Lịch trình cố định.'], examples: [{ english: 'She takes the bus to work every day.', vietnamese: 'Cô ấy đi xe buýt đến chỗ làm mỗi ngày.' }] },
  { id: 'present-continuous', title: 'Thì hiện tại tiếp diễn', section: '12 thì tiếng Anh', level: 'A1', summary: 'Hành động đang diễn ra hoặc kế hoạch gần.', explanation: 'Dùng be ở hiện tại cùng động từ thêm -ing để nói về hành động đang diễn ra quanh thời điểm nói.', structure: 'S + am/is/are + V-ing', usage: ['Việc đang diễn ra lúc nói.', 'Tình huống tạm thời.', 'Kế hoạch đã sắp xếp trong tương lai gần.'], examples: [{ english: 'They are having lunch right now.', vietnamese: 'Họ đang ăn trưa ngay lúc này.' }] },
  { id: 'present-perfect', title: 'Thì hiện tại hoàn thành', section: '12 thì tiếng Anh', level: 'A2', summary: 'Trải nghiệm hoặc kết quả liên quan đến hiện tại.', explanation: 'Thì này nối một sự việc trong quá khứ với hiện tại; thường không nêu thời điểm quá khứ đã kết thúc.', structure: 'S + have/has + past participle (V3)', usage: ['Trải nghiệm đến nay.', 'Việc vừa xảy ra hoặc có kết quả hiện tại.', 'Việc bắt đầu trước đây và vẫn còn liên quan.'], examples: [{ english: 'I have visited Hue twice.', vietnamese: 'Tôi đã đến Huế hai lần.' }] },
  { id: 'present-perfect-continuous', title: 'Thì hiện tại hoàn thành tiếp diễn', section: '12 thì tiếng Anh', level: 'B1', summary: 'Nhấn mạnh quá trình kéo dài đến hiện tại.', explanation: 'Dùng để nhấn mạnh khoảng thời gian hoặc quá trình của hành động bắt đầu trong quá khứ và còn tiếp diễn, hoặc vừa mới dừng.', structure: 'S + have/has been + V-ing', usage: ['Nhấn mạnh thời lượng của hành động.', 'Hành động vừa dừng nhưng còn dấu hiệu hiện tại.'], examples: [{ english: 'She has been studying for two hours.', vietnamese: 'Cô ấy đã học suốt hai tiếng.' }] },
  { id: 'past-simple', title: 'Thì quá khứ đơn', section: '12 thì tiếng Anh', level: 'A1', summary: 'Sự việc đã kết thúc tại thời điểm quá khứ.', explanation: 'Động từ có dạng quá khứ; với động từ có quy tắc thường thêm -ed, còn động từ bất quy tắc cần học dạng riêng.', structure: 'Khẳng định: S + V2 · Phủ định: S + did not + V · Hỏi: Did + S + V?', usage: ['Sự việc đã xảy ra và kết thúc.', 'Chuỗi sự việc trong quá khứ.'], examples: [{ english: 'We watched a film last night.', vietnamese: 'Tối qua chúng tôi đã xem một bộ phim.' }] },
  { id: 'past-continuous', title: 'Thì quá khứ tiếp diễn', section: '12 thì tiếng Anh', level: 'A2', summary: 'Hành động đang diễn ra tại một thời điểm quá khứ.', explanation: 'Dùng was/were với V-ing để đặt bối cảnh hoặc mô tả hành động đang diễn ra khi một việc khác xen vào.', structure: 'S + was/were + V-ing', usage: ['Hành động đang diễn ra tại mốc quá khứ.', 'Bối cảnh cho sự việc khác.', 'Hai hành động kéo dài đồng thời.'], examples: [{ english: 'I was cooking when you called.', vietnamese: 'Tôi đang nấu ăn thì bạn gọi.' }] },
  { id: 'past-perfect', title: 'Thì quá khứ hoàn thành', section: '12 thì tiếng Anh', level: 'B1', summary: 'Việc xảy ra trước một mốc quá khứ khác.', explanation: 'Dùng had + V3 để làm rõ hành động nào đã hoàn tất trước một hành động hoặc thời điểm trong quá khứ.', structure: 'S + had + past participle (V3)', usage: ['Một việc hoàn tất trước việc khác trong quá khứ.', 'Làm rõ thứ tự sự việc khi cần thiết.'], examples: [{ english: 'The train had left before we arrived.', vietnamese: 'Tàu đã rời đi trước khi chúng tôi đến.' }] },
  { id: 'past-perfect-continuous', title: 'Thì quá khứ hoàn thành tiếp diễn', section: '12 thì tiếng Anh', level: 'B2', summary: 'Quá trình kéo dài trước một mốc quá khứ.', explanation: 'Nhấn mạnh thời lượng của hành động kéo dài cho đến một thời điểm hoặc sự việc khác trong quá khứ.', structure: 'S + had been + V-ing', usage: ['Nhấn mạnh quá trình hoặc thời lượng trước một mốc quá khứ.', 'Giải thích nguyên nhân của một trạng thái trong quá khứ.'], examples: [{ english: 'He had been waiting for an hour when the bus came.', vietnamese: 'Anh ấy đã đợi một tiếng khi xe buýt đến.' }] },
  { id: 'future-simple', title: 'Thì tương lai đơn', section: '12 thì tiếng Anh', level: 'A2', summary: 'Dự đoán, quyết định tức thời và lời hứa.', explanation: 'Will đứng trước động từ nguyên mẫu; dạng này thường dùng cho quyết định tại thời điểm nói, dự đoán hoặc lời hứa.', structure: 'S + will + V nguyên mẫu', usage: ['Quyết định vừa đưa ra.', 'Dự đoán hoặc lời hứa.'], examples: [{ english: 'I will call you tonight.', vietnamese: 'Tối nay tôi sẽ gọi cho bạn.' }] },
  { id: 'future-continuous', title: 'Thì tương lai tiếp diễn', section: '12 thì tiếng Anh', level: 'B1', summary: 'Hành động sẽ đang diễn ra tại một mốc tương lai.', explanation: 'Dùng will be + V-ing để nói về hoạt động sẽ diễn ra vào một thời điểm cụ thể trong tương lai.', structure: 'S + will be + V-ing', usage: ['Hành động đang diễn ra tại mốc tương lai.', 'Hỏi lịch trình một cách lịch sự.'], examples: [{ english: 'At 8 p.m., I will be studying.', vietnamese: 'Lúc 8 giờ tối, tôi sẽ đang học.' }] },
  { id: 'future-perfect', title: 'Thì tương lai hoàn thành', section: '12 thì tiếng Anh', level: 'B2', summary: 'Việc sẽ hoàn tất trước một mốc tương lai.', explanation: 'Dùng will have + V3 để diễn tả việc sẽ xong trước một thời điểm hoặc sự việc tương lai.', structure: 'S + will have + past participle (V3)', usage: ['Nhấn mạnh kết quả hoàn tất trước hạn hoặc mốc tương lai.'], examples: [{ english: 'She will have finished the report by Friday.', vietnamese: 'Cô ấy sẽ hoàn thành báo cáo trước thứ Sáu.' }] },
  { id: 'future-perfect-continuous', title: 'Thì tương lai hoàn thành tiếp diễn', section: '12 thì tiếng Anh', level: 'B2', summary: 'Thời lượng của quá trình tính đến một mốc tương lai.', explanation: 'Nhấn mạnh một hoạt động đã kéo dài bao lâu khi đến một thời điểm trong tương lai.', structure: 'S + will have been + V-ing', usage: ['Nhấn mạnh thời lượng của quá trình đến một mốc tương lai.'], examples: [{ english: 'By June, they will have been working here for a year.', vietnamese: 'Đến tháng Sáu, họ sẽ làm việc ở đây được một năm.' }] },
  { id: 'be-going-to', title: 'Tương lai gần (Be Going To)', section: '12 thì tiếng Anh', level: 'A2', summary: 'Diễn đạt dự định có trước và dự đoán dựa trên dấu hiệu hiện tại.', explanation: 'Be going to dùng be chia theo chủ ngữ, going to và động từ nguyên mẫu. Bài học tập trung vào dự định, bằng chứng hiện tại và cách phân biệt với các cách nói tương lai khác.', structure: 'S + am/is/are + going to + V1', usage: ['Dự định đã có trước thời điểm nói.', 'Dự đoán dựa trên dấu hiệu hiện tại.'], examples: [{ english: 'Look at those clouds. It is going to rain.', vietnamese: 'Nhìn những đám mây kia kìa. Trời sắp mưa.' }] },
  { id: 'tense-contrasts', title: 'Phân biệt các thì dễ nhầm lẫn', section: '12 thì tiếng Anh', level: 'B1', summary: 'So sánh chín cặp thì theo thời điểm, quá trình, kết quả và ý định.', explanation: 'Luyện chọn thì theo nghĩa và mốc thời gian trong ngữ cảnh, không dựa máy móc vào một từ khóa.', structure: 'Xác định thời điểm → diễn biến → điều muốn nhấn mạnh → chọn cấu trúc phù hợp', usage: ['So sánh các cặp thì thường nhầm.', 'Giải thích lựa chọn dựa trên ngữ cảnh.'], examples: [{ english: 'I have lived here for five years.', vietnamese: 'Tôi đã sống ở đây được năm năm (và hiện vẫn sống ở đây).' }] },
  { id: 'mixed-tense-practice', title: 'Bài tập tổng hợp chọn thì và chia động từ', section: '12 thì tiếng Anh', level: 'A1–B2', summary: 'Ôn 12 thì và be going to qua bốn cấp độ luyện tập.', explanation: 'Bài tập tăng dần từ nhận diện cấu trúc đến hội thoại, đoạn văn và tình huống có nhiều mốc thời gian.', structure: 'Chọn thì theo ngữ cảnh; chia động từ đúng dạng và giải thích lựa chọn', usage: ['Ôn kiến thức qua nhiều dạng câu.', 'Luyện dùng thì trong hội thoại và đoạn văn.'], examples: [{ english: 'By the time we arrive, the film will have started.', vietnamese: 'Khi chúng tôi đến, bộ phim sẽ bắt đầu rồi.' }] }
];

/**
 * 30 Standardized New Lessons generated from allGrammarLessons
 */
const newGrammarTopics: GrammarTopic[] = allGrammarLessons.map(lesson => ({
  id: lesson.id,
  title: lesson.vietnameseTitle ? `${lesson.title} – ${lesson.vietnameseTitle}` : lesson.title,
  section: lesson.category as GrammarSection,
  level: lesson.level,
  summary: lesson.summary,
  explanation: lesson.overview,
  structure: lesson.formulas.length > 0 ? lesson.formulas.map(f => f.formula).join(' · ') : 'Xem chi tiết trong bài học',
  usage: lesson.usage.map(u => `${u.context}: ${u.explanation}`),
  examples: lesson.examples.map(e => ({ english: e.english, vietnamese: e.vietnamese }))
}));

export const grammarTopics: GrammarTopic[] = [
  ...newGrammarTopics,
  ...tenseTopics
];

export const grammarSections: GrammarSection[] = [
  'Từ loại',
  'Cấu trúc câu',
  '12 thì tiếng Anh',
  'Mệnh đề',
  'Các dạng câu đặc biệt',
  'Cấu trúc ngữ pháp mở rộng'
];

/**
 * 6 MAJOR CATEGORIES IN EXACT SEQUENTIAL ORDER
 * 1. DANH MỤC 1: TỪ LOẠI (12 topics)
 * 2. DANH MỤC 2: CẤU TRÚC CÂU (5 topics)
 * 3. DANH MỤC 3: 12 THÌ TIẾNG ANH (12 tenses + 3 supplement topics preserved)
 * 4. DANH MỤC 4: MỆNH ĐỀ (2 topics)
 * 5. DANH MỤC 5: CÁC DẠNG CÂU ĐẶC BIỆT (8 topics)
 * 6. DANH MỤC 6: CẤU TRÚC NGỮ PHÁP MỞ RỘNG (3 topics)
 */
export const grammarFolders: GrammarFolder[] = [
  {
    id: 'parts-of-speech',
    title: 'Từ loại',
    description: 'Giúp người học hiểu từng nhóm từ, chức năng, vị trí và cách sử dụng trong câu.',
    items: [
      { title: '1. Nouns – Danh từ', topicId: 'nouns' },
      { title: '2. Pronouns – Đại từ', topicId: 'pronouns' },
      { title: '3. Determiners – Từ hạn định', topicId: 'determiners' },
      { title: '4. Articles – Mạo từ', topicId: 'articles' },
      { title: '5. Quantifiers – Từ chỉ số lượng', topicId: 'quantifiers' },
      { title: '6. Verbs – Động từ', topicId: 'verbs' },
      { title: '7. Adjectives – Tính từ', topicId: 'adjectives' },
      { title: '8. Adverbs – Trạng từ', topicId: 'adverbs' },
      { title: '9. Prepositions – Giới từ', topicId: 'prepositions' },
      { title: '10. Conjunctions – Liên từ', topicId: 'conjunctions' },
      { title: '11. Interjections – Thán từ', topicId: 'interjections' },
      { title: '12. Word Formation – Cấu tạo từ', topicId: 'word-formation' }
    ]
  },
  {
    id: 'sentence-structure',
    title: 'Cấu trúc câu',
    description: 'Giúp người học biết cách kết hợp từ thành câu đúng ngữ pháp, hiểu thành phần và trật tự từ.',
    items: [
      { title: '13. Sentence Elements – Các thành phần câu', topicId: 'sentence-elements' },
      { title: '14. Sentence Structures – Cấu trúc câu', topicId: 'sentence-structures' },
      { title: '15. Sentence Types – Các loại câu', topicId: 'sentence-types' },
      { title: '16. Question Forms – Các dạng câu hỏi', topicId: 'question-forms' },
      { title: '17. Subject–Verb Agreement – Sự hòa hợp chủ vị', topicId: 'subject-verb-agreement' }
    ]
  },
  {
    id: 'tenses',
    title: '12 thì tiếng Anh',
    description: 'Hiểu cách diễn đạt thời gian, hành động, trạng thái và mối quan hệ giữa các sự kiện qua 12 thì chuẩn.',
    items: [
      { title: 'Thì hiện tại đơn', topicId: 'present-simple' },
      { title: 'Thì hiện tại tiếp diễn', topicId: 'present-continuous' },
      { title: 'Thì hiện tại hoàn thành', topicId: 'present-perfect' },
      { title: 'Thì hiện tại hoàn thành tiếp diễn', topicId: 'present-perfect-continuous' },
      { title: 'Thì quá khứ đơn', topicId: 'past-simple' },
      { title: 'Thì quá khứ tiếp diễn', topicId: 'past-continuous' },
      { title: 'Thì quá khứ hoàn thành', topicId: 'past-perfect' },
      { title: 'Thì quá khứ hoàn thành tiếp diễn', topicId: 'past-perfect-continuous' },
      { title: 'Thì tương lai đơn', topicId: 'future-simple' },
      { title: 'Thì tương lai tiếp diễn', topicId: 'future-continuous' },
      { title: 'Thì tương lai hoàn thành', topicId: 'future-perfect' },
      { title: 'Thì tương lai hoàn thành tiếp diễn', topicId: 'future-perfect-continuous' },
    ]
  },
  {
    id: 'clauses',
    title: 'Mệnh đề',
    description: 'Biết cách kết hợp nhiều ý tưởng trong câu, hiểu quan hệ giữa các mệnh đề và cách sử dụng.',
    items: [
      { title: '18. Relative Clauses – Mệnh đề quan hệ', topicId: 'relative-clauses' },
      { title: '19. Clauses – Các loại mệnh đề', topicId: 'clauses' }
    ]
  },
  {
    id: 'special-sentences',
    title: 'Các dạng câu đặc biệt',
    description: 'Biết cách chuyển đổi, nhấn mạnh và diễn đạt câu linh hoạt hơn trong giao tiếp và văn viết.',
    items: [
      { title: '20. Passive Voice – Câu bị động', topicId: 'passive-voice' },
      { title: '21. Conditionals – Câu điều kiện', topicId: 'conditionals' },
      { title: '22. Reported Speech – Câu tường thuật', topicId: 'reported-speech' },
      { title: '23. Comparison – So sánh', topicId: 'comparison' },
      { title: '24. Wishes & Subjunctive – Câu ước và câu giả định', topicId: 'wishes-subjunctive' },
      { title: '25. Inversion – Đảo ngữ', topicId: 'inversion' },
      { title: '26. Causative Structures – Cấu trúc nhờ vả', topicId: 'causative-structures' },
      { title: '27. Emphasis & Cleft Sentences – Câu nhấn mạnh và câu chẻ', topicId: 'emphasis-cleft' }
    ]
  },
  {
    id: 'extended-grammar',
    title: 'Cấu trúc ngữ pháp mở rộng',
    description: 'Hoàn thiện kiến thức nâng cao, hiểu cách sử dụng cấu trúc linh hoạt và diễn đạt tự nhiên hơn.',
    items: [
      { title: '28. Modal Verbs – Động từ khuyết thiếu', topicId: 'modal-verbs' },
      { title: '29. Gerunds & Infinitives – Danh động từ và động từ nguyên mẫu', topicId: 'gerunds-infinitives' },
      { title: '30. Ellipsis & Substitution – Lược bỏ và thay thế', topicId: 'ellipsis-substitution' }
    ]
  }
];

export { getGrammarLesson };
