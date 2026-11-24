import type { GrammarLessonDetail } from './types'

export const category2Lessons: GrammarLessonDetail[] = [
  // 13. SENTENCE ELEMENTS
  {
    id: 'sentence-elements',
    title: 'Sentence Elements',
    vietnameseTitle: 'Các thành phần câu',
    category: 'Cấu trúc câu',
    categoryId: 'sentence-structure',
    level: 'A1–B1',
    summary: 'Nhận diện và phân tích 5 thành phần cốt lõi của câu tiếng Anh: Chủ ngữ (S), Động từ (V), Tân ngữ (O), Bổ ngữ (C) và Trạng ngữ (A).',
    overview: 'Mỗi câu trong tiếng Anh được xây dựng từ các khối kiến trúc cơ bản gọi là thành phần câu (Sentence Elements). Việc nắm vững 5 thành phần cốt lõi S - V - O - C - A giúp người học phân tích cấu trúc câu chính xác, tránh viết câu què cụt (sentence fragments) và tạo nền tảng vững chắc cho việc học các cấu trúc phức tạp.',
    foundation: 'Một câu hoàn chỉnh bắt buộc phải có ít nhất Chủ ngữ (Subject) và Động từ vị ngữ (Verb). Các thành phần còn lại như Tân ngữ (Object), Bổ ngữ (Complement) và Trạng ngữ (Adverbial) xuất hiện tùy thuộc vào bản chất của động từ vị ngữ.',
    classification: [
      {
        title: 'Chủ ngữ (Subject - S)',
        description: 'Chủ thể thực hiện hành động hoặc là đối tượng trung tâm được miêu tả. Thường là danh từ, cụm danh từ, đại từ, danh động từ (V-ing) hoặc mệnh đề danh từ.'
      },
      {
        title: 'Động từ (Verb - V)',
        description: 'Trái tim của vị ngữ, biểu thị hành động hoặc trạng thái. Có thể là động từ đơn, cụm động từ hoặc trợ động từ đi kèm động từ chính.'
      },
      {
        title: 'Tân ngữ (Object - O: Direct & Indirect)',
        description: 'Đối tượng chịu tác động của động từ. Tân ngữ trực tiếp (Direct Object - Od) nhận trực tiếp hành động; Tân ngữ gián tiếp (Indirect Object - Oi) nhận đối tượng trực tiếp.'
      },
      {
        title: 'Bổ ngữ (Complement - C: Subject & Object Complement)',
        description: 'Bổ ngữ cho chủ ngữ (Cs) đứng sau linking verb để định danh chủ ngữ. Bổ ngữ cho tân ngữ (Co) đứng sau tân ngữ để mô tả hoặc định danh tân ngữ.'
      },
      {
        title: 'Trạng ngữ (Adverbial - A)',
        description: 'Thành phần phụ cung cấp thông tin về thời gian, nơi chốn, cách thức, nguyên nhân, mục đích. Có thể lược bỏ mà câu vẫn đúng ngữ pháp.'
      }
    ],
    formulas: [
      {
        title: 'Công thức phân tích 5 thành phần',
        formula: 'S (Ai / Cái gì?) + V (Làm gì / Như thế nào?) + O (Chịu tác động gì?) + C (Là gì / Ra sao?) + A (Ở đâu / Khi nào / Như thế nào?)',
        note: 'Ví dụ: [The teacher] (S) [gave] (V) [us] (Oi) [a quiz] (Od) [in the classroom] (A).'
      },
      {
        title: 'Phân biệt Bổ ngữ tân ngữ (Co) vs Tân ngữ trực tiếp (Od)',
        formula: 'S + V + O + Co: O = Co (We elected him [O] captain [Co] -> He is the captain)\nS + V + Oi + Od: Oi != Od (He bought her [Oi] flowers [Od] -> Her is not flowers)',
        note: 'Kiểm tra dấu bằng (=) giữa O và thành phần đứng sau.'
      }
    ],
    usage: [
      {
        context: 'Xác định thành phần bắt buộc vs thành phần tùy chọn',
        explanation: 'S và V là bắt buộc; O và C phụ thuộc loại động từ; A là thành phần tùy chọn có thể thêm bớt linh hoạt.',
        example: { english: 'Birds (S) fly (V). vs Birds (S) fly (V) south (A) in winter (A).', vietnamese: 'Chim bay. vs Chim bay về phương nam vào mùa đông.' }
      },
      {
        context: 'Phân tích tân ngữ gián tiếp và tân ngữ trực tiếp',
        explanation: 'Hành động chuyển đổi giữa hai cấu trúc có giới từ to/for.',
        example: { english: 'She sent me (Oi) an email (Od) = She sent an email (Od) to me (Prep + O).', vietnamese: 'Cô ấy đã gửi cho tôi một email.' }
      },
      {
        context: 'Sử dụng bổ ngữ cho tân ngữ (Object Complement)',
        explanation: 'Thường gặp với các động từ: make, consider, elect, call, keep, find, appoint.',
        example: { english: 'The good news made everyone (O) joyful (Co).', vietnamese: 'Tin vui đã làm cho mọi người cảm thấy vui mừng.' }
      }
    ],
    examples: [
      { english: 'My sister (S) became (V) an architect (Cs).', vietnamese: 'Chị gái tôi đã trở thành một kiến trúc sư.', note: 'An architect là bổ ngữ cho chủ ngữ (Cs).' },
      { english: 'They (S) painted (V) the fence (O) white (Co).', vietnamese: 'Họ đã sơn hàng rào màu trắng.', note: 'White là bổ ngữ miêu tả tân ngữ the fence.' },
      { english: 'Suddenly (A), the lights (S) went out (V).', vietnamese: 'Đột nhiên đèn vụt tắt.', note: 'Suddenly là trạng ngữ đứng đầu câu.' }
    ],
    importantNotes: [
      'Một câu tiếng Anh chuẩn luôn cần chủ ngữ rõ ràng (trừ câu mệnh lệnh ngầm hiểu chủ ngữ là You).',
      'Đừng nhầm lẫn giữa Trạng ngữ (Adverbial) và Tân ngữ (Object): Tân ngữ chịu tác động trực tiếp của hành động (read a book), còn Trạng ngữ chỉ bối cảnh (read in the library).',
      'Bổ ngữ (Complement) không phải là tân ngữ: Sau động từ to be/linking verbs (seem, become), từ đi sau là Bổ ngữ (Cs), không phải tân ngữ.',
      'Câu mệnh lệnh: Listen! / Open the door! (Chủ ngữ You được ẩn đi).'
    ],
    comparison: {
      title: 'Phân biệt Direct Object (Od) vs Subject Complement (Cs)',
      points: [
        { concept: 'Direct Object (Tân ngữ trực tiếp: She met a doctor)', difference: 'Đứng sau ngoại động từ, chủ ngữ và tân ngữ là HAI ĐỐI TƯỢNG KHÁC NHAU (She != a doctor).' },
        { concept: 'Subject Complement (Bổ ngữ chủ ngữ: She is a doctor)', difference: 'Đứng sau động từ nối, chủ ngữ và bổ ngữ CÙNG CHỈ MỘT ĐỐI TƯỢNG (She = a doctor).' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp công sở: Phân công nhiệm vụ và bầu trưởng nhóm',
      dialogueOrSentences: [
        { speaker: 'Director', text: 'We have considered the project carefully. We appoint Peter team leader.', translation: 'Chúng tôi đã xem xét dự án cẩn thận. Chúng tôi bổ nhiệm Peter làm trưởng nhóm.' },
        { speaker: 'Peter', text: 'Thank you! I will do my best to make our team successful.', translation: 'Cảm ơn sếp! Em sẽ nỗ lực hết mình để đưa đội nhóm đạt thành công.' },
        { speaker: 'Director', text: 'The management board trusts you completely.', translation: 'Ban giám đốc hoàn toàn tin tưởng ở em.' }
      ]
    },
    summaryPoints: [
      '5 thành phần câu cốt lõi: S (Chủ ngữ), V (Động từ), O (Tân ngữ), C (Bổ ngữ), A (Trạng ngữ).',
      'S + V là khung xương bắt buộc của mọi câu tiếng Anh.',
      'Tân ngữ trả lời cho câu hỏi: Gặp ai? Mua cái gì? (What / Whom).',
      'Bổ ngữ định danh hoặc mô tả đặc điểm (chủ ngữ hoặc tân ngữ).',
      'Trạng ngữ trả lời: Ở đâu? Khi nào? Như thế nào? Tại sao?'
    ],
    exercises: [
      {
        id: 'se-mc-1',
        type: 'multiple-choice',
        prompt: 'In the sentence "The committee elected Ms. Evans chairperson", what is the grammatical role of "chairperson"?',
        choices: ['Object complement (Co)', 'Direct object (Od)', 'Subject complement (Cs)', 'Adverbial (A)'],
        correctAnswers: ['Object complement (Co)'],
        explanation: 'Chairperson bổ nghĩa và định danh cho tân ngữ Ms. Evans (Ms. Evans = chairperson), do đó là bổ ngữ tân ngữ (Object complement).',
        translation: 'Trong câu "Ủy ban đã bầu bà Evans làm chủ tịch", "chairperson" đóng vai trò là bổ ngữ tân ngữ.',
        level: 'Trung bình'
      },
      {
        id: 'se-mc-2',
        type: 'multiple-choice',
        prompt: 'Identify the SUBJECT COMPLEMENT (Cs) in the sentence: "Despite the bad weather, the tourists remained cheerful."',
        choices: ['cheerful', 'the tourists', 'remained', 'the bad weather'],
        correctAnswers: ['cheerful'],
        explanation: 'Cheerful là tính từ đứng sau động từ nối remained để miêu tả trạng thái của chủ ngữ the tourists.',
        translation: 'Xác định bổ ngữ chủ ngữ trong câu: "Bất chấp thời tiết xấu, du khách vẫn vui vẻ." -> cheerful.',
        level: 'Cơ bản'
      },
      {
        id: 'se-mc-3',
        type: 'multiple-choice',
        prompt: 'In "The mechanic repaired my car yesterday", "yesterday" functions as a(n) ___.',
        choices: ['Adverbial (A)', 'Direct object (Od)', 'Subject (S)', 'Complement (C)'],
        correctAnswers: ['Adverbial (A)'],
        explanation: 'Yesterday chỉ thời gian khi hành động diễn ra, đóng vai trò là trạng ngữ (Adverbial).',
        translation: 'Trong câu "Hôm qua người thợ máy đã sửa xe của tôi", "yesterday" đóng vai trò là trạng ngữ.',
        level: 'Cơ bản'
      },
      {
        id: 'se-mc-4',
        type: 'multiple-choice',
        prompt: 'In the sentence "My uncle sent my sister a silver necklace", what is "my sister"?',
        choices: ['Indirect object (Oi)', 'Direct object (Od)', 'Subject complement (Cs)', 'Object complement (Co)'],
        correctAnswers: ['Indirect object (Oi)'],
        explanation: 'My sister là người nhận chiếc vòng bạc (a silver necklace - Od), nên my sister là tân ngữ gián tiếp (Oi).',
        translation: 'Trong câu "Bác tôi gửi cho em gái tôi một chiếc vòng cổ bạc", "my sister" là tân ngữ gián tiếp.',
        level: 'Cơ bản'
      },
      {
        id: 'se-mc-5',
        type: 'multiple-choice',
        prompt: 'Which sentence follows the pattern: Subject + Verb + Direct Object + Prepositional Object?',
        choices: [
          'She explained the problem to the students.',
          'She is a teacher.',
          'Birds sing sweetly.',
          'They made him captain.'
        ],
        correctAnswers: ['She explained the problem to the students.'],
        explanation: 'She (S) + explained (V) + the problem (Od) + to the students (Prep + O).',
        translation: 'Câu nào theo mẫu S + V + Od + Prep O? -> She explained the problem to the students.',
        level: 'Trung bình'
      },
      {
        id: 'se-fb-1',
        type: 'fill-blank',
        prompt: 'In "The company offered him a prestigious position", "him" is the ___ object. (direct/indirect)',
        hint: 'Người nhận đồ vật là tân ngữ gián tiếp.',
        correctAnswers: ['indirect'],
        explanation: 'Him là tân ngữ gián tiếp (Indirect object) nhận vị trí công việc.',
        translation: 'Trong câu "Công ty đã mời anh ấy một vị trí danh giá", "him" là tân ngữ gián tiếp.',
        level: 'Cơ bản'
      },
      {
        id: 'se-fb-2',
        type: 'fill-blank',
        prompt: 'In "The coffee smells wonderful", "wonderful" serves as the subject ___. (complement/object)',
        hint: 'Đứng sau động từ nối smells bổ nghĩa cho coffee.',
        correctAnswers: ['complement'],
        explanation: 'Wonderful là tính từ đóng vai trò bổ ngữ cho chủ ngữ (Subject complement) sau linking verb smells.',
        translation: 'Trong câu "Cà phê có mùi thơm tuyệt vời", "wonderful" đóng vai trò là bổ ngữ chủ ngữ.',
        level: 'Cơ bản'
      },
      {
        id: 'se-fb-3',
        type: 'fill-blank',
        prompt: 'In "They named their newborn daughter Sophia", "Sophia" is the object ___. (complement/adverbial)',
        hint: 'Bổ nghĩa định danh cho tân ngữ daughter.',
        correctAnswers: ['complement'],
        explanation: 'Sophia định danh cho tân ngữ their newborn daughter nên là bổ ngữ tân ngữ (Object complement).',
        translation: 'Trong câu "Họ đã đặt tên cho con gái mới sinh là Sophia", "Sophia" là bổ ngữ tân ngữ.',
        level: 'Trung bình'
      },
      {
        id: 'se-fb-4',
        type: 'fill-blank',
        prompt: 'The essential elements that every full English declarative sentence must contain are Subject and ___. (Verb/Object)',
        hint: 'Khung xương tối thiểu của câu.',
        correctAnswers: ['Verb'],
        explanation: 'Mọi câu trần thuật tiếng Anh bắt buộc phải có Subject và Verb.',
        translation: 'Các thành phần thiết yếu mà mọi câu trần thuật tiếng Anh phải có là Chủ ngữ và Động từ.',
        level: 'Cơ bản'
      },
      {
        id: 'se-fb-5',
        type: 'fill-blank',
        prompt: 'In "He solved the math puzzle effortlessly", "effortlessly" functions as a(n) ___. (adverbial/complement)',
        hint: 'Chỉ cách thức giải bài toán.',
        correctAnswers: ['adverbial'],
        explanation: 'Effortlessly chỉ cách thức giải quyết bài toán nên đóng vai trò là trạng ngữ (Adverbial).',
        translation: 'Trong câu "Anh ấy đã giải câu đố toán học một cách dễ dàng", "effortlessly" đóng vai trò là trạng ngữ.',
        level: 'Cơ bản'
      },
      {
        id: 'se-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai cấu trúc câu (thiếu chủ ngữ): "Arrived at the international airport after a ten-hour flight."',
        hint: 'Câu tiếng Anh trần thuật bắt buộc phải có chủ ngữ rõ ràng (They/We arrived...).',
        correctAnswers: [
          'They arrived at the international airport after a ten-hour flight.',
          'We arrived at the international airport after a ten-hour flight.'
        ],
        explanation: 'Câu trần thuật tiếng Anh không thể thiếu chủ ngữ. Thêm đại từ chủ ngữ (They/We) ở đầu câu.',
        translation: 'Họ đã đến sân bay quốc tế sau một chuyến bay dài mười tiếng.',
        level: 'Cơ bản'
      },
      {
        id: 'se-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The sudden storm made the mountain roads dangerously."',
        hint: 'Động từ make + O + Co (tính từ dangerous).',
        correctAnswers: [
          'The sudden storm made the mountain roads dangerous.'
        ],
        explanation: 'Cấu trúc make + Object + Object Complement (Adj): made the roads dangerous (không dùng trạng từ dangerously).',
        translation: 'Cơn bão bất ngờ đã khiến những con đường miền núi trở nên nguy hiểm.',
        level: 'Trung bình'
      },
      {
        id: 'se-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She bought to her mother a magnificent silk scarf."',
        hint: 'Khi tân ngữ gián tiếp đứng trước tân ngữ trực tiếp, không dùng giới từ to (bought her mother).',
        correctAnswers: [
          'She bought her mother a magnificent silk scarf.',
          'She bought a magnificent silk scarf for her mother.'
        ],
        explanation: 'Cấu trúc: S + V + Oi + Od (không có giới từ) HOẶC S + V + Od + for + Oi: bought her mother a scarf / bought a scarf for her mother.',
        translation: 'Cô ấy đã mua cho mẹ một chiếc khăn lụa lộng lẫy.',
        level: 'Trung bình'
      },
      {
        id: 'se-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The milk turned sourly after sitting in the warm sun."',
        hint: 'Turn là linking verb chỉ sự biến đổi trạng thái, đi với tính từ sour.',
        correctAnswers: [
          'The milk turned sour after sitting in the warm sun.'
        ],
        explanation: 'Turn ở đây là linking verb (bị chua), bổ ngữ phải là tính từ sour chứ không phải trạng từ sourly.',
        translation: 'Sữa đã bị chua sau khi để ngoài trời nắng ấm.',
        level: 'Trung bình'
      },
      {
        id: 'se-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The voters considered him as an honest leader."',
        hint: 'Động từ consider đi trực tiếp với Co không cần as (considered him an honest leader).',
        correctAnswers: [
          'The voters considered him an honest leader.'
        ],
        explanation: 'Cấu trúc chuẩn: consider + Object + Object Complement: considered him an honest leader (bỏ as).',
        translation: 'Các cử tri đã coi ông ấy là một nhà lãnh đạo trung thực.',
        level: 'Nâng cao'
      },
      {
        id: 'se-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau chuyển đổi từ mẫu S + V + Oi + Od sang mẫu S + V + Od + to + Oi: "He gave his daughter a silver locket."',
        hint: 'He gave a silver locket to his daughter.',
        correctAnswers: [
          'He gave a silver locket to his daughter.'
        ],
        explanation: 'Chuyển đổi tân ngữ trực tiếp (a silver locket) lên trước kèm giới từ to + tân ngữ gián tiếp (his daughter).',
        translation: 'Ông ấy đã tặng một chiếc mề đay bạc cho con gái mình.',
        level: 'Cơ bản'
      },
      {
        id: 'se-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết một câu theo mô hình: Subject + Verb + Object + Object Complement (tính từ) dùng động từ "paint" và màu "green".',
        hint: 'They painted the front door green.',
        correctAnswers: [
          'They painted the front door green.',
          'She painted the bedroom walls green.',
          'We painted the fence green.'
        ],
        explanation: 'Mô hình SVOC: They (S) painted (V) the door (O) green (Co).',
        translation: 'Họ đã sơn cánh cửa trước màu xanh lá cây.',
        level: 'Trung bình'
      },
      {
        id: 'se-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng động từ nối "seem" đi với bổ ngữ chủ ngữ "exhausted": "It appears that the workers are exhausted."',
        hint: 'The workers seem exhausted.',
        correctAnswers: [
          'The workers seem exhausted.'
        ],
        explanation: 'Mô hình SVC: The workers (S) seem (V) exhausted (Cs).',
        translation: 'Những người công nhân dường như kiệt sức.',
        level: 'Cơ bản'
      },
      {
        id: 'se-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết một câu hoàn chỉnh có trạng ngữ chỉ thời gian và trạng ngữ chỉ nơi chốn: "We arrived in London yesterday."',
        hint: 'Mẫu: We arrived in London yesterday.',
        correctAnswers: [
          'We arrived in London yesterday.',
          'They arrived in Hanoi yesterday.',
          'We met at the station yesterday.'
        ],
        explanation: 'Câu có S (We) + V (arrived) + A_nơi chốn (in London) + A_thời gian (yesterday).',
        translation: 'Chúng tôi đã đến Luân Đôn ngày hôm qua.',
        level: 'Cơ bản'
      },
      {
        id: 'se-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết câu dùng cấu trúc "make + O + Co" để diễn đạt: "Tin tốt lành này đã làm mẹ tôi rất hạnh phúc."',
        hint: 'This good news made my mother very happy.',
        correctAnswers: [
          'This good news made my mother very happy.',
          'The good news made my mother very happy.'
        ],
        explanation: 'Cấu trúc: S (The good news) + V (made) + O (my mother) + Co (very happy).',
        translation: 'Tin tốt lành này đã làm mẹ tôi rất hạnh phúc.',
        level: 'Cơ bản'
      }
    ]
  },

  // 14. SENTENCE STRUCTURES
  {
    id: 'sentence-structures',
    title: 'Sentence Structures',
    vietnameseTitle: 'Cấu trúc câu',
    category: 'Cấu trúc câu',
    categoryId: 'sentence-structure',
    level: 'A2–B1',
    summary: 'Nắm vững 7 mô hình câu căn bản trong ngữ pháp tiếng Anh: SV, SVO, SVC, SVOO, SVOC, SVA, SVOA.',
    overview: 'Trong tiếng Anh, trật tự từ có tính cố định cao. Mọi câu văn dù dài hay ngắn đều được xây dựng dựa trên 7 mô hình câu chuẩn (7 Basic Sentence Patterns). Việc hiểu rõ các mô hình này giúp người học tự tin phân tích các câu dài phức tạp trong đọc hiểu và viết câu chuẩn xác không mắc lỗi ngữ pháp.',
    foundation: 'Khung mô hình câu được quyết định trực tiếp bởi ĐỘNG TỪ chính trong câu. Động từ có thể là nội động từ (SV), ngoại động từ đơn (SVO), ngoại động từ kép (SVOO), ngoại động từ phức (SVOC), động từ nối (SVC) hoặc động từ đòi hỏi trạng ngữ bắt buộc (SVA, SVOA).',
    classification: [
      {
        title: 'Mẫu 1: S + V (Chủ ngữ + Nội động từ)',
        description: 'Động từ tự trọn nghĩa, không cần tân ngữ: The baby smiled. Rain fell.'
      },
      {
        title: 'Mẫu 2: S + V + O (Chủ ngữ + Ngoại động từ + Tân ngữ trực tiếp)',
        description: 'Mẫu câu phổ biến nhất trong tiếng Anh: She bought a new laptop.'
      },
      {
        title: 'Mẫu 3: S + V + C (Chủ ngữ + Động từ nối + Bổ ngữ cho chủ ngữ)',
        description: 'Động từ nối liên kết S với Cs (danh từ hoặc tính từ): He is a talented surgeon. The tea smells fragrant.'
      },
      {
        title: 'Mẫu 4: S + V + Oi + Od (Chủ ngữ + Động từ + Tân ngữ gián tiếp + Tân ngữ trực tiếp)',
        description: 'Động từ trao tặng (give, send, buy, tell): My father gave me a watch.'
      },
      {
        title: 'Mẫu 5: S + V + Od + Co (Chủ ngữ + Động từ + Tân ngữ trực tiếp + Bổ ngữ cho tân ngữ)',
        description: 'Tân ngữ đi kèm bổ ngữ định danh hoặc miêu tả nó: They elected him president. The news made her sad.'
      },
      {
        title: 'Mẫu 6: S + V + A (Chủ ngữ + Động từ + Trạng ngữ bắt buộc)',
        description: 'Động từ đòi hỏi trạng ngữ nơi chốn/thời gian để hoàn thiện nghĩa: The museum lies on the hill. My family lives in Da Nang.'
      },
      {
        title: 'Mẫu 7: S + V + O + A (Chủ ngữ + Động từ + Tân ngữ + Trạng ngữ bắt buộc)',
        description: 'Đặt/để vật ở đâu: She put the keys in her purse.'
      }
    ],
    formulas: [
      {
        title: 'Bảng tổng kết 7 mô hình câu cốt lõi',
        formula: '1. S + V: Birds fly.\n2. S + V + O: She plays tennis.\n3. S + V + C: He became famous.\n4. S + V + Oi + Od: She lent him money.\n5. S + V + Od + Co: We consider him honest.\n6. S + V + A: The concert lasted two hours.\n7. S + V + Od + A: He parked the car in the garage.',
        note: 'Các trạng ngữ bổ sung (không bắt buộc) có thể xuất hiện ở bất kỳ mẫu câu nào mà không làm thay đổi bản chất của mô hình đó.'
      }
    ],
    usage: [
      {
        context: 'Lựa chọn mô hình câu dựa trên động từ (Verb valency)',
        explanation: 'Mỗi động từ yêu cầu các bổ ngữ đặc thù đi kèm.',
        example: { english: 'Put (bắt buộc S + V + O + A): He put the book on the desk (không thể chỉ nói: He put the book).', vietnamese: 'Anh ấy đặt quyển sách lên bàn.' }
      },
      {
        context: 'Chuyển đổi giữa mẫu SVOO và SVO + Prep O',
        explanation: 'Đổi trật tự tân ngữ bằng giới từ to hoặc for.',
        example: { english: 'He bought me (Oi) flowers (Od) = He bought flowers (Od) for me (Prep O).', vietnamese: 'Anh ấy đã mua hoa cho tôi.' }
      },
      {
        context: 'Nhận diện bổ ngữ tân ngữ (SVOC)',
        explanation: 'Dùng để mô tả kết quả của hành động lên tân ngữ.',
        example: { english: 'The loud music drove the neighbors (O) crazy (Co).', vietnamese: 'Tiếng nhạc lớn đã làm những người hàng xóm phát điên.' }
      }
    ],
    examples: [
      { english: 'The ancient castle stands on a rocky cliff.', vietnamese: 'Tòa lâu đài cổ kính sừng sững trên vách đá.', note: 'Mô hình S + V + A (trạng ngữ nơi chốn bắt buộc).' },
      { english: 'Her brilliant performance made the director proud.', vietnamese: 'Màn trình diễn xuất sắc của cô ấy đã khiến đạo diễn tự hào.', note: 'Mô hình S + V + O + Co.' },
      { english: 'The committee awarded the researcher a prestigious grant.', vietnamese: 'Ủy ban đã trao tặng cho nhà nghiên cứu một khoản tài trợ danh giá.', note: 'Mô hình S + V + Oi + Od.' }
    ],
    importantNotes: [
      'Một số động từ đòi hỏi trạng ngữ bắt buộc (obligatory adverbials): put, place, lie, stand, live. Ví dụ câu "He put the luggage" là câu què cụt (fragment), bắt buộc phải có nơi chốn "in the trunk".',
      'Đừng nhầm lẫn giữa SVOO (hai tân ngữ) và SVOC (một tân ngữ + một bổ ngữ): Trong SVOC, O và C là cùng một đối tượng (They made him boss -> He is the boss). Trong SVOO, Oi và Od là hai đối tượng hoàn toàn khác nhau (He gave her a ring -> Her != ring).',
      'Thành phần Trạng ngữ (A) có thể di chuyển linh hoạt (đầu câu, giữa câu, cuối câu) trong khi S, V, O thường giữ vị trí cố định.'
    ],
    comparison: {
      title: 'Phân biệt S + V + Oi + Od vs S + V + Od + Co',
      points: [
        { concept: 'S + V + Oi + Od (Tân ngữ kép)', difference: 'Oi và Od là 2 thực thể độc lập: She baked him (Oi) a cake (Od).' },
        { concept: 'S + V + Od + Co (Tân ngữ + Bổ ngữ)', difference: 'Od và Co cùng quy chiếu về 1 thực thể: The heat turned the milk (Od) sour (Co).' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp hàng ngày: Kể về trải nghiệm chuyến đi',
      dialogueOrSentences: [
        { speaker: 'Hoàng', text: 'Where did you stay during your trip to Da Lat?', translation: 'Bạn đã ở đâu trong chuyến đi Đà Lạt thế?' },
        { speaker: 'My', text: 'We rented a cozy wooden villa on the hillside. The view was absolutely breathtaking.', translation: 'Bọn mình thuê một biệt thự gỗ ấm cúng trên sườn đồi. Quang cảnh đẹp tuyệt trần.' },
        { speaker: 'Hoàng', text: 'That sounds delightful! The fresh air must have made you completely refreshed.', translation: 'Nghe thích thật đấy! Không khí trong lành hẳn đã làm bạn cảm thấy hoàn toàn sảng khoái.' }
      ]
    },
    summaryPoints: [
      'Có 7 mô hình câu cơ bản: SV, SVO, SVC, SVOO, SVOC, SVA, SVOA.',
      'Bản chất của động từ quyết định các thành phần bắt buộc theo sau.',
      'SVOO gồm người nhận (Oi) và vật được trao (Od).',
      'SVOC gồm tân ngữ và bổ ngữ (tính từ/danh từ) mô tả tân ngữ đó.',
      'SVA và SVOA có trạng ngữ bắt buộc đi kèm động từ (put, place, live, stand).'
    ],
    exercises: [
      {
        id: 'ss-mc-1',
        type: 'multiple-choice',
        prompt: 'Identify the sentence pattern of: "The chef cooked the guests a fabulous four-course meal."',
        choices: ['S + V + Oi + Od', 'S + V + Od + Co', 'S + V + O + A', 'S + V + C'],
        correctAnswers: ['S + V + Oi + Od'],
        explanation: 'The chef (S) cooked (V) the guests (Oi) a fabulous meal (Od). Đây là mô hình SVOO.',
        translation: 'Đầu bếp đã nấu cho các vị khách một bữa ăn bốn món tuyệt vời. -> S + V + Oi + Od.',
        level: 'Trung bình'
      },
      {
        id: 'ss-mc-2',
        type: 'multiple-choice',
        prompt: 'Which sentence follows the pattern: Subject + Verb + Object + Object Complement (SVOC)?',
        choices: [
          'The noisy renovation made the neighbors furious.',
          'The noisy renovation lasted three weeks.',
          'The workers repaired the roof yesterday.',
          'The manager gave the workers a bonus.'
        ],
        correctAnswers: ['The noisy renovation made the neighbors furious.'],
        explanation: 'The renovation (S) made (V) the neighbors (O) furious (Co). Furious là tính từ bổ ngữ cho the neighbors.',
        translation: 'Câu nào theo mô hình SVOC? -> The noisy renovation made the neighbors furious.',
        level: 'Trung bình'
      },
      {
        id: 'ss-mc-3',
        type: 'multiple-choice',
        prompt: 'In the sentence "The historic monument stands on a high rocky cliff", what is the sentence pattern?',
        choices: ['S + V + A', 'S + V + O', 'S + V + C', 'S + V'],
        correctAnswers: ['S + V + A'],
        explanation: 'The monument (S) stands (V) on a high rocky cliff (A - trạng ngữ nơi chốn bắt buộc).',
        translation: 'Đài tưởng niệm lịch sử sừng sững trên một vách đá cao. -> S + V + A.',
        level: 'Trung bình'
      },
      {
        id: 'ss-mc-4',
        type: 'multiple-choice',
        prompt: 'Choose the sentence that represents the S + V + C pattern with a linking verb:',
        choices: [
          'The freshly ground coffee smelled wonderful.',
          'He drank the freshly ground coffee quickly.',
          'She brewed fresh coffee for the guests.',
          'The coffee cup fell on the carpet.'
        ],
        correctAnswers: ['The freshly ground coffee smelled wonderful.'],
        explanation: 'The coffee (S) smelled (V - linking) wonderful (Cs - tính từ bổ ngữ chủ ngữ).',
        translation: 'Câu nào theo mẫu S + V + C? -> The freshly ground coffee smelled wonderful.',
        level: 'Cơ bản'
      },
      {
        id: 'ss-mc-5',
        type: 'multiple-choice',
        prompt: 'Which sentence requires an OBLIGATORY ADVERBIAL (SVOA) to be grammatically complete?',
        choices: [
          'She placed the delicate porcelain vase on the mantelpiece.',
          'She admired the delicate porcelain vase.',
          'She washed the delicate porcelain vase carefully.',
          'She bought a porcelain vase.'
        ],
        correctAnswers: ['She placed the delicate porcelain vase on the mantelpiece.'],
        explanation: 'Động từ place đòi hỏi bắt buộc phải có nơi chốn đặt để (on the mantelpiece). Nếu bỏ trạng ngữ này câu sẽ què cụt.',
        translation: 'Câu nào đòi hỏi trạng ngữ bắt buộc (SVOA)? -> She placed the delicate porcelain vase on the mantelpiece.',
        level: 'Nâng cao'
      },
      {
        id: 'ss-fb-1',
        type: 'fill-blank',
        prompt: 'The sentence "The baby cried" follows the basic pattern Subject + ___. (Verb/Object)',
        hint: 'Mô hình đơn giản nhất gồm 2 thành phần.',
        correctAnswers: ['Verb'],
        explanation: 'The baby (S) cried (V) là mô hình S + V.',
        translation: 'Câu "The baby cried" theo mô hình S + Verb.',
        level: 'Cơ bản'
      },
      {
        id: 'ss-fb-2',
        type: 'fill-blank',
        prompt: 'In "The board appointed Sarah managing director", "managing director" is the object ___. (complement/adverbial)',
        hint: 'Bổ ngữ cho tân ngữ Sarah.',
        correctAnswers: ['complement'],
        explanation: 'Managing director là bổ ngữ cho tân ngữ Sarah (Sarah = managing director).',
        translation: 'Trong câu trên, "managing director" là bổ ngữ tân ngữ (Object complement).',
        level: 'Trung bình'
      },
      {
        id: 'ss-fb-3',
        type: 'fill-blank',
        prompt: 'The pattern S + V + Oi + Od can be rewritten as S + V + Od + ___ + Oi when using the verb "give". (to/for)',
        hint: 'Động từ give đi với giới từ to.',
        correctAnswers: ['to'],
        explanation: 'Give something to someone: đi với giới từ to.',
        translation: 'Mẫu SVOO có thể viết lại thành S + V + Od + to + Oi với động từ give.',
        level: 'Cơ bản'
      },
      {
        id: 'ss-fb-4',
        type: 'fill-blank',
        prompt: 'In "She kept her precious jewelry in a secure safe", "in a secure safe" functions as an obligatory ___. (adverbial/complement)',
        hint: 'Thành phần trạng ngữ chỉ nơi chốn bắt buộc của động từ kept.',
        correctAnswers: ['adverbial'],
        explanation: 'In a secure safe là trạng ngữ nơi chốn bắt buộc của động từ keep: S + V + Od + A.',
        translation: 'Trong câu trên, "in a secure safe" là trạng ngữ bắt buộc.',
        level: 'Nâng cao'
      },
      {
        id: 'ss-fb-5',
        type: 'fill-blank',
        prompt: 'The sentence "Her proposal seems very promising" belongs to the S + V + ___ pattern. (C/O)',
        hint: 'Seems là linking verb, sau nó là bổ ngữ.',
        correctAnswers: ['C'],
        explanation: 'Promising là tính từ bổ ngữ cho chủ ngữ proposal: mô hình SVC.',
        translation: 'Câu trên thuộc mô hình S + V + C.',
        level: 'Cơ bản'
      },
      {
        id: 'ss-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai (câu què cụt thiếu trạng ngữ bắt buộc của động từ put): "Before leaving the hotel room, he put the room key."',
        hint: 'Động từ put bắt buộc phải có trạng ngữ chỉ nơi chốn (on the desk / in his pocket).',
        correctAnswers: [
          'Before leaving the hotel room, he put the room key on the desk.',
          'Before leaving the hotel room, he put the room key in his pocket.'
        ],
        explanation: 'Động từ put theo mô hình SVOA, bắt buộc phải có trạng ngữ nơi chốn đi kèm.',
        translation: 'Trước khi rời phòng khách sạn, anh ấy đã đặt chìa khóa phòng lên bàn.',
        level: 'Trung bình'
      },
      {
        id: 'ss-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The exciting news made everyone in the room happily."',
        hint: 'Cấu trúc make + O + Co (tính từ happy).',
        correctAnswers: [
          'The exciting news made everyone in the room happy.'
        ],
        explanation: 'Sau make + Object là bổ ngữ tính từ (happy), không dùng trạng từ happily.',
        translation: 'Tin tức hào hứng đã khiến tất cả mọi người trong phòng cảm thấy vui vẻ.',
        level: 'Cơ bản'
      },
      {
        id: 'ss-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "My grandmother told to me an interesting bedtime story."',
        hint: 'Cấu trúc SVOO không có giới từ to giữa told và me.',
        correctAnswers: [
          'My grandmother told me an interesting bedtime story.',
          'My grandmother told an interesting bedtime story to me.'
        ],
        explanation: 'Cấu trúc S + V + Oi + Od: told me a story (không có to).',
        translation: 'Bà tôi đã kể cho tôi nghe một câu chuyện thú vị trước khi đi ngủ.',
        level: 'Cơ bản'
      },
      {
        id: 'ss-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The ancient bridge collapsed sudden yesterday morning."',
        hint: 'Cần trạng từ bổ nghĩa cho collapsed (suddenly).',
        correctAnswers: [
          'The ancient bridge collapsed suddenly yesterday morning.'
        ],
        explanation: 'Bổ nghĩa cho động từ collapsed là trạng ngữ cách thức suddenly (không dùng tính từ sudden).',
        translation: 'Cây cầu cổ đã bất ngờ sụp đổ vào sáng hôm qua.',
        level: 'Cơ bản'
      },
      {
        id: 'ss-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "They considered that the candidate was inappropriate for the post, so they selected him as leader."',
        hint: 'Sửa vế sau: selected him leader (bỏ as) để tạo mô hình SVOC.',
        correctAnswers: [
          'They considered that the candidate was inappropriate for the post, so they selected him leader.'
        ],
        explanation: 'Trong mô hình SVOC với elect/select, dùng trực tiếp danh từ bổ ngữ: selected him leader.',
        translation: 'Họ đã chọn anh ấy làm lãnh đạo.',
        level: 'Nâng cao'
      },
      {
        id: 'ss-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau chuyển đổi từ mẫu SVOO sang mẫu SVO + Prep O: "The hotel manager sent the VIP guest a complimentary bottle of wine."',
        hint: 'The hotel manager sent a complimentary bottle of wine to the VIP guest.',
        correctAnswers: [
          'The hotel manager sent a complimentary bottle of wine to the VIP guest.'
        ],
        explanation: 'Đổi Od lên trước: sent a bottle of wine to the VIP guest.',
        translation: 'Người quản lý khách sạn đã gửi một chai rượu vang miễn phí cho vị khách VIP.',
        level: 'Trung bình'
      },
      {
        id: 'ss-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết một câu theo mô hình S + V + Od + Co (tính từ) dùng động từ "find" và tính từ "fascinating": "Tôi thấy cuốn sách này rất lôi cuốn."',
        hint: 'I find this book fascinating.',
        correctAnswers: [
          'I find this book fascinating.',
          'I found this book fascinating.'
        ],
        explanation: 'Mô hình SVOC: I (S) find (V) this book (Od) fascinating (Co).',
        translation: 'Tôi thấy cuốn sách này rất lôi cuốn.',
        level: 'Cơ bản'
      },
      {
        id: 'ss-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết một câu theo mô hình S + V + A (trạng ngữ nơi chốn bắt buộc) với chủ ngữ "The old castle" và động từ "lies": "Tòa lâu đài cổ nằm trong thung lũng."',
        hint: 'The old castle lies in the peaceful valley.',
        correctAnswers: [
          'The old castle lies in the valley.',
          'The old castle lies in the peaceful valley.'
        ],
        explanation: 'Mô hình SVA: The castle (S) lies (V) in the valley (A).',
        translation: 'Tòa lâu đài cổ nằm trong thung lũng.',
        level: 'Trung bình'
      },
      {
        id: 'ss-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng động từ "consider" theo mô hình SVOC: "In our opinion, David is our most reliable teammate."',
        hint: 'We consider David our most reliable teammate.',
        correctAnswers: [
          'We consider David our most reliable teammate.'
        ],
        explanation: 'Mô hình SVOC: We (S) consider (V) David (Od) our most reliable teammate (Co).',
        translation: 'Chúng tôi coi David là đồng đội đáng tin cậy nhất của mình.',
        level: 'Nâng cao'
      },
      {
        id: 'ss-sc-5',
        type: 'sentence-construction',
        prompt: 'Đặt một câu đơn giản theo mô hình S + V (nội động từ): "Mặt trời mọc ở hướng đông."',
        hint: 'The sun rises in the east.',
        correctAnswers: [
          'The sun rises in the east.',
          'The sun rises.'
        ],
        explanation: 'The sun (S) rises (V) in the east (A tùy chọn).',
        translation: 'Mặt trời mọc ở hướng đông.',
        level: 'Cơ bản'
      }
    ]
  },

  // 15. SENTENCE TYPES
  {
    id: 'sentence-types',
    title: 'Sentence Types',
    vietnameseTitle: 'Các loại câu',
    category: 'Cấu trúc câu',
    categoryId: 'sentence-structure',
    level: 'A2–B1',
    summary: 'Phân loại câu theo cấu trúc (Câu đơn, Câu ghép, Câu phức, Câu ghép-phức) và theo mục đích nói (Trần thuật, Nghi vấn, Mệnh lệnh, Cảm thán).',
    overview: 'Trong tiếng Anh, câu được phân loại theo hai góc độ: (1) Cấu trúc ngữ pháp (dựa trên số lượng và mối quan hệ giữa các mệnh đề độc lập và phụ thuộc), và (2) Mục đích giao tiếp (dùng để tuyên bố, hỏi, ra lệnh hay cảm thán). Nắm chắc bài học này giúp người học đa dạng hóa cấu trúc câu khi viết và giao tiếp linh hoạt.',
    foundation: 'Mệnh đề độc lập (Independent Clause) có thể đứng một mình như một câu hoàn chỉnh. Mệnh đề phụ thuộc (Dependent Clause) không thể đứng một mình mà phải đi kèm mệnh đề độc lập. Số lượng và cách kết hợp giữa các mệnh đề này tạo nên 4 kiểu câu theo cấu trúc.',
    classification: [
      {
        title: 'Phân loại theo Cấu trúc (Structural Classification)',
        description: '1. Câu đơn (Simple sentence): 1 mệnh đề độc lập.\n2. Câu ghép (Compound sentence): 2+ mệnh đề độc lập nối bằng FANBOYS hoặc dấu chấm phẩy.\n3. Câu phức (Complex sentence): 1 mệnh đề độc lập + 1+ mệnh đề phụ thuộc.\n4. Câu ghép-phức (Compound-Complex): 2+ mệnh đề độc lập + 1+ mệnh đề phụ thuộc.'
      },
      {
        title: 'Phân loại theo Mục đích (Functional Classification)',
        description: '1. Câu trần thuật (Declarative): khẳng định/phủ định thông tin, kết thúc bằng dấu chấm (.).\n2. Câu nghi vấn (Interrogative): đặt câu hỏi, kết thúc bằng dấu hỏi (?).\n3. Câu mệnh lệnh (Imperative): yêu cầu, chỉ dẫn, khuyên nhủ, kết thúc bằng (.) hoặc (!).\n4. Câu cảm thán (Exclamatory): bộc lộ cảm xúc mạnh, kết thúc bằng (!).'
      }
    ],
    formulas: [
      {
        title: 'Công thức 4 loại câu theo cấu trúc',
        formula: 'Câu đơn: [S + V]\nCâu ghép: [Clause 1], + and/but/so/or/yet + [Clause 2] HOẶC [Clause 1]; [Clause 2]\nCâu phức: [Subordinating conjunction] + [Mệnh đề phụ], + [Mệnh đề chính] HOẶC [Mệnh đề chính] + [Mệnh đề phụ]\nCâu ghép-phức: [Mệnh đề độc lập 1] + and/but + [Mệnh đề độc lập 2] + [Mệnh đề phụ]',
        note: 'Ví dụ: Although it was raining (phụ), we went out (độc lập 1), and we had a great time (độc lập 2).'
      },
      {
        title: 'Cấu trúc câu cảm thán với What và How',
        formula: 'WHAT + a/an + Adj + N (số ít đếm được) + S + V! (What a beautiful day it is!)\nWHAT + Adj + N (số nhiều / không đếm được) + S + V! (What delicious food!)\nHOW + Adj / Adv + S + V! (How beautifully she sings!)',
        note: 'What đi với cụm danh từ; How đi với tính từ hoặc trạng từ.'
      }
    ],
    usage: [
      {
        context: 'Sử dụng câu ghép để liên kết hai ý tưởng cân bằng',
        explanation: 'Nối hai mệnh đề độc lập có tầm quan trọng tương đương.',
        example: { english: 'The sun was shining brightly, yet a chilly wind was blowing.', vietnamese: 'Mặt trời chiếu sáng rực rỡ, nhưng một cơn gió lạnh vẫn thổi.' }
      },
      {
        context: 'Sử dụng câu phức để thể hiện mối quan hệ phụ thuộc (Nguyên nhân, Thời gian, Điều kiện)',
        explanation: 'Nhấn mạnh mệnh đề chính và làm rõ hoàn cảnh bằng mệnh đề phụ.',
        example: { english: 'Because the deadline is approaching rapidly, we must prioritize this task.', vietnamese: 'Bởi vì hạn chót đang đến gần nhanh chóng, chúng ta phải ưu tiên nhiệm vụ này.' }
      },
      {
        context: 'Sử dụng câu mệnh lệnh lịch sự trong giao tiếp công việc',
        explanation: 'Thêm Please ở đầu hoặc cuối câu mệnh lệnh để tăng tính lịch thiệp.',
        example: { english: 'Please review the attached contract and let me know your thoughts.', vietnamese: 'Xin vui lòng xem lại hợp đồng đính kèm và cho tôi biết ý kiến của bạn.' }
      }
    ],
    examples: [
      { english: 'She loves reading classical literature. (Simple sentence)', vietnamese: 'Cô ấy yêu thích đọc văn học cổ điển. (Câu đơn)', note: 'Một mệnh đề độc lập duy nhất.' },
      { english: 'I wanted to call you, but my phone battery had died. (Compound sentence)', vietnamese: 'Tôi đã muốn gọi cho bạn, nhưng điện thoại của tôi hết pin. (Câu ghép)', note: 'Hai mệnh đề độc lập nối bằng liên từ but.' },
      { english: 'When the bell rang, the students packed their bags and left. (Complex sentence)', vietnamese: 'Khi chuông reo, các học sinh đã thu dọn cặp và ra về. (Câu phức)', note: 'Mệnh đề phụ bắt đầu bằng When.' },
      { english: 'What a magnificent view from the mountaintop! (Exclamatory sentence)', vietnamese: 'Thật là một quang cảnh tráng lệ từ đỉnh núi! (Câu cảm thán)', note: 'Câu cảm thán với What.' }
    ],
    importantNotes: [
      'Tránh lỗi câu nối sai dấu (Comma Splice): Không được nối hai mệnh đề độc lập chỉ bằng một dấu phẩy (Sai: I love music, I play guitar; Đúng: I love music, and I play guitar HOẶC I love music; I play guitar).',
      'Tránh câu què cụt (Sentence Fragment): Mệnh đề phụ thuộc đứng một mình có dấu chấm (Sai: Because I was ill.; Đúng: Because I was ill, I stayed home.).',
      'Trong câu cảm thán với What, chỉ dùng a/an nếu danh từ là đếm được số ít (Không dùng a/an với danh từ số nhiều hoặc không đếm được: What beautiful scenery!, KHÔNG dùng What a beautiful scenery!).'
    ],
    comparison: {
      title: 'Phân biệt Compound Sentence vs Complex Sentence',
      points: [
        { concept: 'Compound Sentence (Câu ghép)', difference: 'Nối các mệnh đề ĐỘC LẬP ngang hàng bằng liên từ kết hợp FANBOYS hoặc dấu chấm phẩy (;).' },
        { concept: 'Complex Sentence (Câu phức)', difference: 'Gồm ít nhất một mệnh đề ĐỘC LẬP và một mệnh đề PHỤ THUỘC nối bằng liên từ phụ thuộc (although, because, if, when...).' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp hàng ngày: Khen ngợi và cảm thán trong bữa tiệc',
      dialogueOrSentences: [
        { speaker: 'Khách', text: 'What a delicious dinner you have prepared for us tonight!', translation: 'Bữa tối tối nay bạn chuẩn bị cho chúng tôi thật là ngon tuyệt!' },
        { speaker: 'Chủ nhà', text: 'Thank you! Please have some more dessert if you like.', translation: 'Cảm ơn bạn! Xin mời dùng thêm chút đồ tráng miệng nếu bạn thích nhé.' },
        { speaker: 'Khách', text: 'How delightfully this chocolate cake melts in the mouth!', translation: 'Chiếc bánh sô-cô-la này tan trong miệng mới thú vị làm sao!' }
      ]
    },
    summaryPoints: [
      'Câu theo cấu trúc: Câu đơn (1 độc lập), Câu ghép (2+ độc lập), Câu phức (1 độc lập + 1+ phụ thuộc), Câu ghép-phức.',
      'Câu theo chức năng: Trần thuật (.), Nghi vấn (?), Mệnh lệnh (. hoặc !), Cảm thán (!).',
      'Tránh lỗi Comma Splice: Không nối 2 mệnh đề độc lập bằng dấu phẩy đơn độc.',
      'Công thức câu cảm thán: What + (a/an) + Adj + N! / How + Adj/Adv + S + V!',
      'Câu mệnh lệnh có chủ ngữ You được ngầm hiểu.'
    ],
    exercises: [
      {
        id: 'st-mc-1',
        type: 'multiple-choice',
        prompt: '"Although the weather was harsh, the team continued their trek, and they reached the summit by noon." This sentence is a ___.',
        choices: ['compound-complex sentence', 'complex sentence', 'compound sentence', 'simple sentence'],
        correctAnswers: ['compound-complex sentence'],
        explanation: 'Câu gồm 1 mệnh đề phụ (Although the weather was harsh) và 2 mệnh đề độc lập nối bằng and -> Câu ghép-phức (compound-complex).',
        translation: 'Câu trên thuộc loại câu gì? -> Câu ghép-phức (compound-complex sentence).',
        level: 'Nâng cao'
      },
      {
        id: 'st-mc-2',
        type: 'multiple-choice',
        prompt: 'Choose the grammatically correct EXCLAMATORY sentence:',
        choices: [
          'What a wonderful performance she gave!',
          'What wonderful performance she gave!',
          'How a wonderful performance she gave!',
          'How wonderful performance she gave!'
        ],
        correctAnswers: ['What a wonderful performance she gave!'],
        explanation: 'Performance là danh từ đếm được số ít, cấu trúc câu cảm thán đúng là What + a + Adj + N + S + V: What a wonderful performance she gave!',
        translation: 'Chọn câu cảm thán đúng ngữ pháp: -> What a wonderful performance she gave!',
        level: 'Trung bình'
      },
      {
        id: 'st-mc-3',
        type: 'multiple-choice',
        prompt: '"Turn off all electrical appliances before leaving the office." This is an example of a(n) ___ sentence.',
        choices: ['imperative', 'declarative', 'interrogative', 'exclamatory'],
        correctAnswers: ['imperative'],
        explanation: 'Câu đưa ra mệnh lệnh, yêu cầu và bắt đầu bằng động từ nguyên mẫu (chủ ngữ You ẩn) là câu mệnh lệnh (imperative).',
        translation: 'Câu trên là một ví dụ về câu mệnh lệnh (imperative).',
        level: 'Cơ bản'
      },
      {
        id: 'st-mc-4',
        type: 'multiple-choice',
        prompt: 'Which of the following is a COMPOUND sentence?',
        choices: [
          'I wanted to buy the vintage coat, but I didn\'t have enough cash.',
          'Because I didn\'t have enough cash, I couldn\'t buy the coat.',
          'Wanting to buy the coat, I searched for an ATM.',
          'I couldn\'t buy the vintage coat without cash.'
        ],
        correctAnswers: ['I wanted to buy the vintage coat, but I didn\'t have enough cash.'],
        explanation: 'Hai mệnh đề độc lập nối với nhau bằng liên từ kết hợp but -> Câu ghép (compound sentence).',
        translation: 'Câu nào sau đây là câu ghép? -> Tôi muốn mua chiếc áo khoác cổ điển, nhưng tôi không có đủ tiền mặt.',
        level: 'Trung bình'
      },
      {
        id: 'st-mc-5',
        type: 'multiple-choice',
        prompt: 'Identify the COMMA SPLICE error among the options below:',
        choices: [
          'The rain stopped, the sun came out.',
          'The rain stopped, and the sun came out.',
          'The rain stopped; the sun came out.',
          'When the rain stopped, the sun came out.'
        ],
        correctAnswers: ['The rain stopped, the sun came out.'],
        explanation: 'Nối hai mệnh đề độc lập chỉ bằng một dấu phẩy mà không có liên từ là lỗi Comma Splice.',
        translation: 'Xác định lỗi Comma Splice: -> The rain stopped, the sun came out.',
        level: 'Nâng cao'
      },
      {
        id: 'st-fb-1',
        type: 'fill-blank',
        prompt: '___ intelligent and thoughtful these students are! (What/How)',
        hint: 'Đi trực tiếp trước tính từ intelligent dùng How.',
        correctAnswers: ['How'],
        explanation: 'Cấu trúc How + Adj + S + V: How intelligent these students are!',
        translation: 'Những học sinh này mới thông minh và sâu sắc làm sao!',
        level: 'Cơ bản'
      },
      {
        id: 'st-fb-2',
        type: 'fill-blank',
        prompt: '___ an incredible goal the striker scored in the final minute! (What/How)',
        hint: 'Đi trước cụm an + Adj + Noun dùng What.',
        correctAnswers: ['What'],
        explanation: 'Cấu trúc What + a/an + Adj + N + S + V: What an incredible goal...',
        translation: 'Thật là một bàn thắng không thể tin nổi mà tiền đạo đã ghi ở phút cuối cùng!',
        level: 'Cơ bản'
      },
      {
        id: 'st-fb-3',
        type: 'fill-blank',
        prompt: 'A simple sentence contains exactly ___ independent clause(s). (one/two)',
        hint: 'Câu đơn chỉ có 1 mệnh đề độc lập.',
        correctAnswers: ['one'],
        explanation: 'Câu đơn (Simple sentence) chỉ chứa đúng 1 mệnh đề độc lập.',
        translation: 'Một câu đơn chứa chính xác một mệnh đề độc lập.',
        level: 'Cơ bản'
      },
      {
        id: 'st-fb-4',
        type: 'fill-blank',
        prompt: 'In imperative sentences such as "Close the door", the implied subject is ___. (you/we)',
        hint: 'Chủ ngữ ngầm hiểu là ngôi thứ hai.',
        correctAnswers: ['you'],
        explanation: 'Trong câu mệnh lệnh, chủ ngữ ngầm hiểu luôn là You.',
        translation: 'Trong câu mệnh lệnh, chủ ngữ ngầm hiểu là you.',
        level: 'Cơ bản'
      },
      {
        id: 'st-fb-5',
        type: 'fill-blank',
        prompt: 'A compound sentence joins independent clauses using coordinating conjunctions or a ___. (semicolon/comma)',
        hint: 'Dấu chấm phẩy có thể thay thế liên từ FANBOYS.',
        correctAnswers: ['semicolon'],
        explanation: 'Dấu chấm phẩy (semicolon ;) có thể dùng để nối hai mệnh đề độc lập trong câu ghép.',
        translation: 'Câu ghép nối các mệnh đề độc lập bằng liên từ kết hợp hoặc dấu chấm phẩy.',
        level: 'Trung bình'
      },
      {
        id: 'st-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi Comma Splice: "The alarm went off loudly, everyone evacuated the building immediately."',
        hint: 'Thêm liên từ and sau dấu phẩy hoặc thay bằng dấu chấm phẩy.',
        correctAnswers: [
          'The alarm went off loudly, and everyone evacuated the building immediately.',
          'The alarm went off loudly; everyone evacuated the building immediately.'
        ],
        explanation: 'Lỗi Comma Splice nối hai mệnh đề độc lập; sửa bằng cách thêm liên từ and hoặc dùng dấu chấm phẩy.',
        translation: 'Chuông báo động vang lên inh ỏi, và mọi người đã sơ tán khỏi tòa nhà ngay lập tức.',
        level: 'Trung bình'
      },
      {
        id: 'st-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu cảm thán: "What a terrible weather we are having today!"',
        hint: 'Weather là danh từ không đếm được, không dùng a.',
        correctAnswers: [
          'What terrible weather we are having today!'
        ],
        explanation: 'Weather là danh từ không đếm được, không dùng mạo từ a trong câu cảm thán: What terrible weather...!',
        translation: 'Hôm nay thời tiết thật là tồi tệ làm sao!',
        level: 'Cơ bản'
      },
      {
        id: 'st-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai câu què cụt (Sentence Fragment): "Because he had trained intensively for six months."',
        hint: 'Mệnh đề phụ không thể đứng một mình làm câu trọn vẹn, cần thêm mệnh đề chính.',
        correctAnswers: [
          'Because he had trained intensively for six months, he won the race.',
          'He won the race because he had trained intensively for six months.'
        ],
        explanation: 'Mệnh đề phụ thuộc đứng một mình là lỗi câu què cụt; cần nối thêm mệnh đề chính.',
        translation: 'Bởi vì anh ấy đã luyện tập chuyên sâu suốt sáu tháng, anh ấy đã thắng cuộc đua.',
        level: 'Trung bình'
      },
      {
        id: 'st-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu cảm thán: "How a beautiful garden they have created!"',
        hint: 'Cấu trúc với How không đi kèm mạo từ a và danh từ (phải dùng What hoặc How beautiful the garden is).',
        correctAnswers: [
          'What a beautiful garden they have created!',
          'How beautiful their garden is!'
        ],
        explanation: 'Có mạo từ a + danh từ garden phải dùng What a beautiful garden... hoặc How beautiful their garden is!',
        translation: 'Thật là một khu vườn đẹp đẽ mà họ đã tạo nên!',
        level: 'Cơ bản'
      },
      {
        id: 'st-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu mệnh lệnh: "Please to send me the updated schedule by five o\'clock."',
        hint: 'Sau Please dùng động từ nguyên mẫu không to (Please send).',
        correctAnswers: [
          'Please send me the updated schedule by five o\'clock.'
        ],
        explanation: 'Sau Please là động từ nguyên mẫu không to trong câu mệnh lệnh: Please send me...',
        translation: 'Làm ơn hãy gửi cho tôi lịch trình cập nhật trước 5 giờ.',
        level: 'Cơ bản'
      },
      {
        id: 'st-sc-1',
        type: 'sentence-construction',
        prompt: 'Chuyển hai câu đơn sau thành một câu ghép (Compound sentence) dùng liên từ "but": "She studied very hard. She did not pass the exam."',
        hint: 'She studied very hard, but she did not pass the exam.',
        correctAnswers: [
          'She studied very hard, but she did not pass the exam.'
        ],
        explanation: 'Dùng dấu phẩy và liên từ but để tạo câu ghép.',
        translation: 'Cô ấy đã học rất chăm chỉ, nhưng cô ấy đã không vượt qua kỳ thi.',
        level: 'Cơ bản'
      },
      {
        id: 'st-sc-2',
        type: 'sentence-construction',
        prompt: 'Chuyển hai câu trên thành một câu phức (Complex sentence) bắt đầu bằng "Although":',
        hint: 'Although she studied very hard, she did not pass the exam.',
        correctAnswers: [
          'Although she studied very hard, she did not pass the exam.'
        ],
        explanation: 'Although đứng đầu mệnh đề phụ chỉ sự nhượng bộ để tạo câu phức.',
        translation: 'Mặc dù cô ấy đã học rất chăm chỉ, cô ấy đã không vượt qua kỳ thi.',
        level: 'Cơ bản'
      },
      {
        id: 'st-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết một câu cảm thán dùng "What a/an" để khen ngợi một ý tưởng tuyệt vời: "Đó quả là một ý tưởng tuyệt vời!"',
        hint: 'What a brilliant idea!',
        correctAnswers: [
          'What a brilliant idea!',
          'What a great idea!',
          'What a wonderful idea!'
        ],
        explanation: 'Cấu trúc câu cảm thán: What a/an + Adj + N!',
        translation: 'Thật là một ý tưởng tuyệt vời!',
        level: 'Cơ bản'
      },
      {
        id: 'st-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết một câu cảm thán dùng "How" để khen ngợi cô ấy hát hay: "Cô ấy hát hay làm sao!"',
        hint: 'How beautifully she sings!',
        correctAnswers: [
          'How beautifully she sings!'
        ],
        explanation: 'Cấu trúc câu cảm thán: How + Adv + S + V!',
        translation: 'Cô ấy hát hay làm sao!',
        level: 'Cơ bản'
      },
      {
        id: 'st-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết một câu mệnh lệnh lịch sự yêu cầu ai đó tắt điện thoại trong rạp chiếu phim dùng từ "Please".',
        hint: 'Please turn off your mobile phone during the movie.',
        correctAnswers: [
          'Please turn off your mobile phone during the movie.',
          'Please turn off your mobile phones in the cinema.',
          'Please switch off your mobile phone.'
        ],
        explanation: 'Câu mệnh lệnh lịch sự: Please + V-inf + ...',
        translation: 'Xin vui lòng tắt điện thoại di động trong suốt bộ phim.',
        level: 'Cơ bản'
      }
    ]
  },

  // 16. QUESTION FORMS
  {
    id: 'question-forms',
    title: 'Question Forms',
    vietnameseTitle: 'Các dạng câu hỏi',
    category: 'Cấu trúc câu',
    categoryId: 'sentence-structure',
    level: 'A1–B2',
    summary: 'Công thức và cách đặt câu hỏi Yes/No, câu hỏi Wh-, phân biệt câu hỏi chủ ngữ vs tân ngữ, câu hỏi đuôi (Tag questions) và câu hỏi gián tiếp (Indirect questions).',
    overview: 'Hệ thống câu hỏi (Question Forms) trong tiếng Anh là công cụ giao tiếp chủ đạo để thu thập thông tin, xác nhận sự việc hoặc bày tỏ sự lịch sự. Tiếng Anh có quy tắc đảo ngữ trợ động từ chặt chẽ khi đặt câu hỏi mà người học cần nắm vững.',
    foundation: 'Quy tắc cơ bản của câu hỏi tiếng Anh là đảo Trợ động từ (Auxiliary Verb: do/does/did/be/have) hoặc Động từ khuyết thiếu (Modal Verb) lên trước chủ ngữ. Riêng trường hợp từ để hỏi (Who/What) đóng vai trò là CHỦ NGỮ thì KHÔNG ĐẢO trợ động từ.',
    classification: [
      {
        title: 'Câu hỏi Yes/No (Yes/No Questions)',
        description: 'Bắt đầu bằng trợ động từ hoặc to be: Do/Does/Did + S + V? / Is/Are/Was/Were + S + ...? Câu trả lời bắt đầu bằng Yes hoặc No.'
      },
      {
        title: 'Câu hỏi lấy thông tin (Wh- Questions)',
        description: 'Bắt đầu bằng từ để hỏi: Who (ai), Whom (ai - tân ngữ), Whose (của ai), What (cái gì), Which (cái nào), Where (ở đâu), When (khi nào), Why (tại sao), How (như thế nào).'
      },
      {
        title: 'Câu hỏi hỏi Chủ ngữ vs Hỏi Tân ngữ (Subject vs Object Questions)',
        description: 'Hỏi chủ ngữ: Wh-word + V (không mượn do/does/did). Hỏi tân ngữ: Wh-word + do/does/did + S + V?'
      },
      {
        title: 'Câu hỏi đuôi (Tag Questions)',
        description: 'Mệnh đề chính khẳng định -> Đuôi phủ định; Mệnh đề chính phủ định -> Đuôi khẳng định.'
      },
      {
        title: 'Câu hỏi gián tiếp / lịch sự (Indirect Questions)',
        description: 'Mở đầu bằng cụm lịch sự: Could you tell me...? / Do you know...? Phần mệnh đề sau quay về trật tự câu trần thuật (S + V), KHÔNG ĐẢO NGỮ.'
      }
    ],
    formulas: [
      {
        title: 'Phân biệt Hỏi Chủ ngữ vs Hỏi Tân ngữ (CỰC KỲ QUAN TRỌNG)',
        formula: 'Hỏi CHỦ NGỮ: Who / What + V (chia theo thì) + O? (Who called you yesterday? -> Tom called me.)\nHỏi TÂN NGỮ: Who / Whom / What + Trợ động từ + S + V1? (Who did you call yesterday? -> I called Tom.)',
        note: 'Khi từ để hỏi chính là chủ ngữ thực hiện hành động, TUYỆT ĐỐI KHÔNG mượn do/does/did.'
      },
      {
        title: 'Quy tắc Câu hỏi gián tiếp (Indirect Questions)',
        formula: '[Cụm mở đầu lịch sự] + [Wh-word / If / Whether] + [S + V]',
        note: 'Could you tell me where the station is? (ĐÚNG) · Could you tell me where is the station? (SAI).'
      },
      {
        title: 'Công thức Câu hỏi đuôi (Tag Questions)',
        formula: 'S + V (khẳng định), + trợ động từ/be + not + Đại từ S?\nS + trợ động từ/be + not + V, + trợ động từ/be + Đại từ S?',
        note: 'Ngoại lệ: I am late, aren\'t I? · Let\'s go, shall we? · Open the window, will you?'
      }
    ],
    usage: [
      {
        context: 'Hỏi thông tin lịch sự với Indirect Questions',
        explanation: 'Dùng trong giao tiếp trang trọng, công sở hoặc hỏi đường người lạ.',
        example: { english: 'Do you happen to know what time the library closes today?', vietnamese: 'Bạn có biết hôm nay thư viện đóng cửa lúc mấy giờ không?' }
      },
      {
        context: 'Xác nhận thông tin với Tag Questions',
        explanation: 'Hạ giọng ở đuôi khi muốn người nghe đồng tình; lên giọng ở đuôi khi thực sự muốn hỏi thông tin.',
        example: { english: 'You have completed the financial audit, haven\'t you?', vietnamese: 'Bạn đã hoàn thành cuộc kiểm toán tài chính rồi, phải không?' }
      },
      {
        context: 'Lựa chọn giữa hai phương án (Alternative Questions)',
        explanation: 'Hỏi lựa chọn dùng liên từ or.',
        example: { english: 'Would you prefer hot tea or iced coffee?', vietnamese: 'Bạn muốn dùng trà nóng hay cà phê đá?' }
      }
    ],
    examples: [
      { english: 'Who broke the antique ceramic vase? (Subject question)', vietnamese: 'Ai đã làm vỡ chiếc bình gốm cổ thế? (Hỏi chủ ngữ)', note: 'Động từ broke chia thẳng, không dùng did.' },
      { english: 'Who did you invite to the housewarming party? (Object question)', vietnamese: 'Bạn đã mời ai đến bữa tiệc tân gia thế? (Hỏi tân ngữ)', note: 'Đảo trợ động từ did lên trước you.' },
      { english: 'She hardly ever complains about work, does she? (Tag question)', vietnamese: 'Cô ấy hầu như không bao giờ phàn nàn về công việc, có phải không?', note: 'Hardly mang nghĩa phủ định nên đuôi ở thể khẳng định does she.' }
    ],
    importantNotes: [
      'Bẫy câu hỏi gián tiếp: Tuyệt đối không đảo trợ động từ trong mệnh đề phụ: \'Could you tell me where does he live?\' là SAI -> \'Could you tell me where he lives?\' mới là ĐÚNG.',
      'Câu hỏi đuôi với từ phủ định ngầm: Khi mệnh đề chính có hardly, seldom, rarely, never, nobody, neither thì mệnh đề được coi là PHỦ ĐỊNH -> đuôi phải ở dạng KHẲNG ĐỊNH.',
      'Ngoại lệ câu hỏi đuôi đặc biệt: I am -> aren\'t I?; Let\'s -> shall we?; Mệnh lệnh (Don\'t do that) -> will you?; Nothing -> it; Nobody/Everybody -> they.'
    ],
    comparison: {
      title: 'Phân biệt Direct Questions vs Indirect Questions',
      points: [
        { concept: 'Direct Question (Trực tiếp)', difference: 'Đảo trợ động từ lên trước chủ ngữ: Where is the nearest bank?' },
        { concept: 'Indirect Question (Gián tiếp)', difference: 'Giữ nguyên trật tự câu khẳng định (S + V): Can you tell me where the nearest bank is?' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp hỏi đường du lịch: Hỏi đường một cách lịch sự',
      dialogueOrSentences: [
        { speaker: 'Tourist', text: 'Excuse me, could you tell me how I can get to the central station?', translation: 'Xin lỗi, anh có thể chỉ cho tôi làm thế nào để đến ga trung tâm được không ạ?' },
        { speaker: 'Local', text: 'Sure! Take Bus number 7, and it will take you straight there.', translation: 'Chắc chắn rồi! Anh cứ bắt xe buýt số 7 là sẽ đến thẳng đó.' },
        { speaker: 'Tourist', text: 'The bus stop is just around the corner, isn\'t it?', translation: 'Trạm dừng xe buýt ở ngay khúc quanh kia, phải không anh?' }
      ]
    },
    summaryPoints: [
      'Câu hỏi Yes/No đảo trợ động từ lên trước S.',
      'Câu hỏi Wh- hỏi tân ngữ mượn trợ động từ; hỏi chủ ngữ chia thẳng động từ không mượn do/does/did.',
      'Câu hỏi đuôi: Mệnh đề khẳng định -> đuôi phủ định và ngược lại.',
      'Mệnh đề có từ phủ định ngầm (never, rarely, hardly, nobody) -> đuôi khẳng định.',
      'Câu hỏi gián tiếp: Không đảo ngữ trong mệnh đề sau (S + V).'
    ],
    exercises: [
      {
        id: 'qf-mc-1',
        type: 'multiple-choice',
        prompt: 'Could you please let me know when ___ ready for review?',
        choices: [
          'the proposal will be',
          'will the proposal be',
          'will be the proposal',
          'is the proposal will be'
        ],
        correctAnswers: ['the proposal will be'],
        explanation: 'Đây là câu hỏi gián tiếp (Could you please let me know...), mệnh đề sau giữ trật tự câu trần thuật: the proposal (S) will be (V).',
        translation: 'Bạn có thể vui lòng cho tôi biết khi nào bản đề xuất sẽ sẵn sàng để xem xét không?',
        level: 'Trung bình'
      },
      {
        id: 'qf-mc-2',
        type: 'multiple-choice',
        prompt: '___ discovered the source of the mysterious radio signal?',
        choices: [
          'Who',
          'Who did',
          'Whom did',
          'Whom'
        ],
        correctAnswers: ['Who'],
        explanation: 'Câu hỏi hỏi về chủ ngữ thực hiện hành động khám phá (Subject question), nên dùng Who + V (discovered), không mượn trợ động từ did.',
        translation: 'Ai đã khám phá ra nguồn gốc của tín hiệu vô tuyến bí ẩn đó?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-mc-3',
        type: 'multiple-choice',
        prompt: 'Nobody in the design department attended the seminar yesterday, ___?',
        choices: ['did they', 'didn\'t they', 'did he', 'didn\'t he'],
        correctAnswers: ['did they'],
        explanation: 'Nobody mang nghĩa phủ định nên phần đuôi ở thể khẳng định. Đại từ thay thế cho Nobody ở đuôi là they, câu ở quá khứ nên trợ động từ là did: did they.',
        translation: 'Hôm qua không ai trong phòng thiết kế tham dự buổi hội thảo, có phải không?',
        level: 'Nâng cao'
      },
      {
        id: 'qf-mc-4',
        type: 'multiple-choice',
        prompt: 'I am invited to present at the international symposium, ___?',
        choices: ['aren\'t I', 'amn\'t I', 'am I', 'don\'t I'],
        correctAnswers: ['aren\'t I'],
        explanation: 'Ngoại lệ câu hỏi đuôi: I am... có phần đuôi phủ định tương ứng là aren\'t I?',
        translation: 'Tôi được mời thuyết trình tại hội nghị chuyên đề quốc tế, có phải không?',
        level: 'Trung bình'
      },
      {
        id: 'qf-mc-5',
        type: 'multiple-choice',
        prompt: 'Let\'s organize a welcome party for the new international interns, ___?',
        choices: ['shall we', 'will you', 'do we', 'aren\'t we'],
        correctAnswers: ['shall we'],
        explanation: 'Câu rủ rê bắt đầu bằng Let\'s có câu hỏi đuôi cố định là shall we?',
        translation: 'Chúng ta hãy tổ chức một bữa tiệc chào mừng các thực tập sinh quốc tế mới, được chứ?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-fb-1',
        type: 'fill-blank',
        prompt: 'She rarely drinks sugary carbonated beverages, ___ she? (does/doesn\'t)',
        hint: 'Rarely mang nghĩa phủ định ngầm nên đuôi ở thể khẳng định.',
        correctAnswers: ['does'],
        explanation: 'Rarely là từ phủ định ngầm nên câu hỏi đuôi ở dạng khẳng định: does she.',
        translation: 'Cô ấy hiếm khi uống đồ uống có gas nhiều đường, có phải không?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-fb-2',
        type: 'fill-blank',
        prompt: '___ did you consult about your tax declaration form? (Who/Whom)',
        hint: 'Hỏi về tân ngữ chịu tác động của hành động tham vấn.',
        correctAnswers: ['Whom', 'Who'],
        explanation: 'Whom là đại từ nghi vấn chuẩn chỉ tân ngữ (trong văn nói có thể dùng Who).',
        translation: 'Bạn đã tham vấn ai về mẫu tờ khai thuế của mình thế?',
        level: 'Trung bình'
      },
      {
        id: 'qf-fb-3',
        type: 'fill-blank',
        prompt: 'Do you know where the nearest underground station ___? (is/is it)',
        hint: 'Câu hỏi gián tiếp không đảo ngữ.',
        correctAnswers: ['is'],
        explanation: 'Trong câu hỏi gián tiếp, động từ to be đứng ở cuối mệnh đề sau chủ ngữ: where the nearest station is.',
        translation: 'Bạn có biết ga tàu điện ngầm gần nhất ở đâu không?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-fb-4',
        type: 'fill-blank',
        prompt: 'Please shut the window when you leave, ___ you? (will/shall)',
        hint: 'Câu mệnh lệnh có đuôi will you.',
        correctAnswers: ['will'],
        explanation: 'Câu mệnh lệnh yêu cầu lịch sự dùng câu hỏi đuôi will you.',
        translation: 'Làm ơn hãy đóng cửa sổ khi bạn rời đi nhé, được không?',
        level: 'Trung bình'
      },
      {
        id: 'qf-fb-5',
        type: 'fill-blank',
        prompt: '___ caused the sudden power outage throughout the entire district? (What/What did)',
        hint: 'Hỏi về chủ ngữ gây ra sự cố.',
        correctAnswers: ['What'],
        explanation: 'What là chủ ngữ gây ra hành động caused, không dùng did.',
        translation: 'Cái gì đã gây ra sự cố mất điện đột ngột trên toàn quận?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu hỏi gián tiếp: "Could you tell me what time does the express train arrive?"',
        hint: 'Bỏ trợ động từ does và chia động từ arrives sau chủ ngữ.',
        correctAnswers: [
          'Could you tell me what time the express train arrives?'
        ],
        explanation: 'Trong câu hỏi gián tiếp, không mượn trợ động từ does mà chia động từ thẳng theo chủ ngữ: what time the express train arrives.',
        translation: 'Bạn có thể cho tôi biết mấy giờ thì chuyến tàu tốc hành đến nơi không?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu hỏi chủ ngữ: "Who did invent the world wide web in 1989?"',
        hint: 'Hỏi chủ ngữ không dùng did.',
        correctAnswers: [
          'Who invented the world wide web in 1989?'
        ],
        explanation: 'Who ở đây làm chủ ngữ của hành động phát minh, không mượn trợ động từ did: Who invented the world wide web?',
        translation: 'Ai đã phát minh ra mạng toàn cầu (world wide web) vào năm 1989?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu hỏi đuôi: "You have lived here for five years, haven\'t you lived?"',
        hint: 'Câu hỏi đuôi chỉ dùng trợ động từ + đại từ chủ ngữ (haven\'t you).',
        correctAnswers: [
          'You have lived here for five years, haven\'t you?'
        ],
        explanation: 'Phần đuôi chỉ gồm trợ động từ và đại từ chủ ngữ: haven\'t you (không lặp lại động từ chính lived).',
        translation: 'Bạn đã sống ở đây được năm năm rồi, có phải không?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu hỏi đuôi: "Nobody called me while I was away, didn\'t they?"',
        hint: 'Nobody mang nghĩa phủ định nên đuôi phải là khẳng định (did they).',
        correctAnswers: [
          'Nobody called me while I was away, did they?'
        ],
        explanation: 'Nobody mang nghĩa phủ định sẵn, do đó câu hỏi đuôi phải ở dạng khẳng định: did they?',
        translation: 'Không ai gọi cho tôi trong lúc tôi đi vắng, có phải không?',
        level: 'Trung bình'
      },
      {
        id: 'qf-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu hỏi gián tiếp: "I wonder where has she gone after the meeting."',
        hint: 'Mệnh đề sau wonder giữ trật tự S + V (where she has gone).',
        correctAnswers: [
          'I wonder where she has gone after the meeting.'
        ],
        explanation: 'Sau I wonder là mệnh đề danh từ giữ trật tự khẳng định: where she has gone (không đảo has lên trước she).',
        translation: 'Tôi tự hỏi cô ấy đã đi đâu sau cuộc họp.',
        level: 'Trung bình'
      },
      {
        id: 'qf-sc-1',
        type: 'sentence-construction',
        prompt: 'Chuyển câu hỏi trực tiếp sau thành câu hỏi gián tiếp bắt đầu bằng "Do you know": "Where does the manager live?"',
        hint: 'Do you know where the manager lives?',
        correctAnswers: [
          'Do you know where the manager lives?'
        ],
        explanation: 'Câu hỏi gián tiếp bỏ does và chia động từ lives sau chủ ngữ the manager.',
        translation: 'Bạn có biết người quản lý sống ở đâu không?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-sc-2',
        type: 'sentence-construction',
        prompt: 'Đặt câu hỏi cho phần gạch chân làm chủ ngữ (Someone): "Someone knocked on the front door."',
        hint: 'Who knocked on the front door?',
        correctAnswers: [
          'Who knocked on the front door?'
        ],
        explanation: 'Hỏi chủ ngữ: Who + V + ...? Không dùng did.',
        translation: 'Ai đã gõ cửa trước thế?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-sc-3',
        type: 'sentence-construction',
        prompt: 'Đặt câu hỏi cho phần gạch chân làm tân ngữ (his manager): "He called his manager yesterday."',
        hint: 'Who did he call yesterday? hoặc Whom did he call yesterday?',
        correctAnswers: [
          'Who did he call yesterday?',
          'Whom did he call yesterday?'
        ],
        explanation: 'Hỏi tân ngữ: Who/Whom + did + S + V1?',
        translation: 'Hôm qua anh ấy đã gọi cho ai?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-sc-4',
        type: 'sentence-construction',
        prompt: 'Hoàn thành câu hỏi đuôi cho câu rủ rê: "Let\'s take a short break after this intensive module."',
        hint: 'Let\'s take a short break after this intensive module, shall we?',
        correctAnswers: [
          'Let\'s take a short break after this intensive module, shall we?'
        ],
        explanation: 'Câu rủ rê với Let\'s có câu hỏi đuôi là shall we?',
        translation: 'Chúng ta hãy nghỉ giải lao một lát sau học phần căng thẳng này nhé, được chứ?',
        level: 'Cơ bản'
      },
      {
        id: 'qf-sc-5',
        type: 'sentence-construction',
        prompt: 'Chuyển câu hỏi Yes/No "Is the meeting room available?" thành câu hỏi gián tiếp lịch sự bắt đầu bằng "Could you tell me if":',
        hint: 'Could you tell me if the meeting room is available?',
        correctAnswers: [
          'Could you tell me if the meeting room is available?',
          'Could you tell me whether the meeting room is available?'
        ],
        explanation: 'Chuyển câu hỏi Yes/No thành gián tiếp dùng if/whether + S + V.',
        translation: 'Bạn có thể cho tôi biết liệu phòng họp có còn trống không?',
        level: 'Trung bình'
      }
    ]
  },

  // 17. SUBJECT–VERB AGREEMENT
  {
    id: 'subject-verb-agreement',
    title: 'Subject–Verb Agreement',
    vietnameseTitle: 'Sự hòa hợp giữa chủ ngữ và động từ',
    category: 'Cấu trúc câu',
    categoryId: 'sentence-structure',
    level: 'A2–B2',
    summary: 'Quy tắc hòa hợp số ít / số nhiều giữa chủ ngữ và động từ; xử lý các trường hợp đặc biệt: danh từ tập hợp, đại từ bất định, either/neither, as well as.',
    overview: 'Sự hòa hợp giữa Chủ ngữ và Động từ (Subject–Verb Agreement - SVA) là nguyên lý cơ bản nhất trong ngữ pháp tiếng Anh: Chủ ngữ số ít đi với động từ số ít; Chủ ngữ số nhiều đi với động từ số nhiều. Tuy nhiên, tiếng Anh có rất nhiều bẫy ngữ pháp liên quan đến các cụm từ chèn, đại từ bất định và danh từ tập hợp đòi hỏi sự phân tích cẩn thận.',
    foundation: 'Chìa khóa để không bao giờ chia sai động từ là phải xác định ĐÚNG CHỦ NGỮ CỐT LÕI (Head Noun) của câu, bỏ qua các thành phần bổ ngữ hoặc cụm giới từ xen vào giữa chủ ngữ và động từ.',
    classification: [
      {
        title: 'Quy tắc cơ bản & Cụm từ xen giữa',
        description: 'Chủ ngữ số ít (He, She, The car) + V(s/es) / is / was / has. Chủ ngữ số nhiều (They, We, The cars) + V nguyên mẫu / are / were / have. Cụm giới từ xen giữa (with, along with, as well as, together with, in addition to) KHÔNG làm thay đổi số của chủ ngữ chính.'
      },
      {
        title: 'Cấu trúc Either...or & Neither...nor & Not only...but also',
        description: 'Động từ hòa hợp với CHỦ NGỮ GẦN NÓ NHẤT (Nguyên tắc lân cận - Proximity Rule).'
      },
      {
        title: 'Đại từ bất định (Indefinite Pronouns)',
        description: 'Everyone, someone, anyone, no one, everything, nothing, each, every, either, neither luôn chia động từ SỐ ÍT.'
      },
      {
        title: 'A number of vs The number of',
        description: 'A number of + N số nhiều + V SỐ NHIỀU (rất nhiều...). The number of + N số nhiều + V SỐ ÍT (số lượng của...).'
      },
      {
        title: 'Danh từ tập hợp (Collective Nouns)',
        description: 'Family, team, committee, audience: Chia số ít khi xem như một khối thống nhất; chia số nhiều khi nhấn mạnh từng thành viên riêng lẻ.'
      },
      {
        title: 'Khoảng cách, Thời gian, Tiền bạc, Đo lường',
        description: 'Các cụm từ chỉ tổng số tiền, thời gian, khoảng cách, trọng lượng được xem như MỘT ĐƠN VỊ nên luôn chia động từ SỐ ÍT (Ten miles is a long distance; Fifty dollars is too much).'
      }
    ],
    formulas: [
      {
        title: 'Quy tắc Cụm từ chèn (Intervening phrases)',
        formula: 'S1 + (along with / as well as / together with / in addition to / accompanied by) + S2 + V (chia theo S1)',
        note: 'The teacher, along with his students, IS (chia theo the teacher) planting trees.'
      },
      {
        title: 'Quy tắc Either/Neither/Or',
        formula: 'Either A or B + V (chia theo B)\nNeither A nor B + V (chia theo B)',
        note: 'Neither the manager nor the employees WERE present (chia theo employees).'
      },
      {
        title: 'Quy tắc Phân số và Phần trăm',
        formula: 'Percentage / Fraction + of + N (không đếm được / số ít) + V (số ít)\nPercentage / Fraction + of + N (số nhiều) + V (số nhiều)',
        note: 'Half of the cake IS gone · Half of the students ARE absent.'
      }
    ],
    usage: [
      {
        context: 'Bỏ qua cụm giới từ để chia động từ chính xác',
        explanation: 'Xác định danh từ chính đứng trước giới từ of/in/with.',
        example: { english: 'The quality of these organic products is exceptional.', vietnamese: 'Chất lượng của các sản phẩm hữu cơ này là đặc biệt tốt.' }
      },
      {
        context: 'Chia động từ với danh từ có đuôi -s nhưng là số ít',
        explanation: 'Tên môn học, bệnh tật, tin tức.',
        example: { english: 'Physics is his favourite academic subject.', vietnamese: 'Vật lý là môn học yêu thích của anh ấy.' }
      },
      {
        context: 'Chia động từ với cụm chỉ tiền bạc và thời gian',
        explanation: 'Xem như một tổng thể thống nhất.',
        example: { english: 'Three hours is sufficient time to complete the test.', vietnamese: 'Ba tiếng đồng hồ là thời gian đủ để hoàn thành bài thi.' }
      }
    ],
    examples: [
      { english: 'Every citizen has the legal right to vote.', vietnamese: 'Mỗi công dân đều có quyền bầu cử theo luật định.', note: 'Every + N số ít + V số ít (has).' },
      { english: 'A number of international researchers have joined the conference.', vietnamese: 'Nhiều nhà nghiên cứu quốc tế đã tham gia hội nghị.', note: 'A number of đi với động từ số nhiều (have joined).' },
      { english: 'The number of applicants has doubled this year.', vietnamese: 'Số lượng ứng viên đã tăng gấp đôi trong năm nay.', note: 'The number of đi với động từ số ít (has doubled).' }
    ],
    importantNotes: [
      'Bẫy đại từ bất định: Mọi đại từ tận cùng bằng -one, -body, -thing (everyone, somebody, anything) đều chia động từ SỐ ÍT.',
      'Cấu trúc There is / There are: Động từ hòa hợp với danh từ ĐỨNG LIỀN SAU NÓ (There is a book and three pens; There are three pens and a book).',
      'The + Adj (chỉ nhóm người như the rich, the poor, the elderly) luôn đi với động từ SỐ NHIỀU.',
      'None of: Trong văn phong học thuật chuẩn thường đi với động từ số ít nếu danh từ sau of là số ít, và có thể đi với số ít hoặc số nhiều nếu danh từ là số nhiều.'
    ],
    comparison: {
      title: 'Phân biệt A number of vs The number of',
      points: [
        { concept: 'A number of (+ N số nhiều)', difference: 'Nghĩa là "Nhiều / Một số": Luôn đi với động từ SỐ NHIỀU: A number of students are playing.' },
        { concept: 'The number of (+ N số nhiều)', difference: 'Nghĩa là "Con số / Số lượng của...": Luôn đi với động từ SỐ ÍT: The number of students is fifty.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp điều hành công việc: Thống nhất số liệu cuộc họp',
      dialogueOrSentences: [
        { speaker: 'Giám đốc', text: 'The number of participants in our seminar has exceeded expectations.', translation: 'Số lượng người tham gia buổi hội thảo của chúng ta đã vượt quá mong đợi.' },
        { speaker: 'Thư ký', text: 'Yes, twenty thousand dollars was collected from ticket sales.', translation: 'Vâng, hai mươi nghìn đô-la đã được thu về từ việc bán vé.' },
        { speaker: 'Giám đốc', text: 'Every member of our team deserves praise for this success.', translation: 'Mỗi thành viên trong đội ngũ chúng ta đều xứng đáng được khen ngợi vì thành công này.' }
      ]
    },
    summaryPoints: [
      'S số ít đi với V số ít; S số nhiều đi với V số nhiều.',
      'Bỏ qua cụm từ chèn (as well as, along with, with) để chia theo chủ ngữ đầu tiên.',
      'Either...or / Neither...nor chia theo chủ ngữ gần động từ nhất.',
      'A number of + N số nhiều + V số nhiều; The number of + N số nhiều + V số ít.',
      'Khoảng cách, tiền bạc, thời gian luôn xem là 1 đơn vị -> chia V số ít.'
    ],
    exercises: [
      {
        id: 'sva-mc-1',
        type: 'multiple-choice',
        prompt: 'The manager, along with her senior assistants, ___ attending the global technology summit.',
        choices: ['is', 'are', 'were', 'have been'],
        correctAnswers: ['is'],
        explanation: 'Cụm \'along with her senior assistants\' là thành phần chèn; chủ ngữ chính là The manager (số ít) nên động từ chia là is.',
        translation: 'Người quản lý cùng với các trợ lý cấp cao của mình đang tham dự hội nghị thượng đỉnh công nghệ toàn cầu.',
        level: 'Cơ bản'
      },
      {
        id: 'sva-mc-2',
        type: 'multiple-choice',
        prompt: 'Neither the pilot nor the flight attendants ___ responsible for the mechanical failure.',
        choices: ['were', 'was', 'is', 'has been'],
        correctAnswers: ['were'],
        explanation: 'Quy tắc lân cận với Neither...nor: động từ chia theo chủ ngữ gần nhất \'the flight attendants\' (số nhiều) -> were.',
        translation: 'Cả phi công lẫn các tiếp viên hàng không đều không chịu trách nhiệm về sự cố kỹ thuật.',
        level: 'Trung bình'
      },
      {
        id: 'sva-mc-3',
        type: 'multiple-choice',
        prompt: 'Fifty miles on this winding mountain road ___ quite a challenging journey.',
        choices: ['is', 'are', 'were', 'have been'],
        correctAnswers: ['is'],
        explanation: 'Cụm từ chỉ khoảng cách (Fifty miles) được xem là một đơn vị đo lường thống nhất, chia động từ số ít is.',
        translation: 'Năm mươi dặm trên con đường núi quanh co này là một hành trình khá gian nan.',
        level: 'Trung bình'
      },
      {
        id: 'sva-mc-4',
        type: 'multiple-choice',
        prompt: 'The number of applicants registering for the scholarship program ___ significantly this autumn.',
        choices: ['has increased', 'have increased', 'are increasing', 'were increased'],
        correctAnswers: ['has increased'],
        explanation: 'The number of luôn đi với động từ số ít (has increased).',
        translation: 'Số lượng ứng viên đăng ký chương trình học bổng đã tăng lên đáng kể vào mùa thu này.',
        level: 'Trung bình'
      },
      {
        id: 'sva-mc-5',
        type: 'multiple-choice',
        prompt: 'There ___ a large conference table and twelve ergonomic chairs in the boardroom.',
        choices: ['is', 'are', 'were', 'have been'],
        correctAnswers: ['is'],
        explanation: 'Với cấu trúc There + be, động từ hòa hợp với danh từ đứng liền kề nó: a large conference table (số ít) -> is.',
        translation: 'Có một chiếc bàn hội nghị lớn và mười hai chiếc ghế công thái học trong phòng họp hội đồng.',
        level: 'Nâng cao'
      },
      {
        id: 'sva-fb-1',
        type: 'fill-blank',
        prompt: 'Every student in the high school ___ required to wear a uniform on Mondays. (is/are)',
        hint: 'Every đi với động từ số ít.',
        correctAnswers: ['is'],
        explanation: 'Every student là chủ ngữ số ít nên đi với is.',
        translation: 'Mỗi học sinh trong trường trung học đều phải mặc đồng phục vào các ngày thứ Hai.',
        level: 'Cơ bản'
      },
      {
        id: 'sva-fb-2',
        type: 'fill-blank',
        prompt: 'A number of innovative solutions ___ proposed during the brainstorm session. (was/were)',
        hint: 'A number of đi với động từ số nhiều.',
        correctAnswers: ['were'],
        explanation: 'A number of đi với danh từ số nhiều và động từ số nhiều were.',
        translation: 'Nhiều giải pháp đổi mới đã được đề xuất trong phiên thảo luận ý tưởng.',
        level: 'Trung bình'
      },
      {
        id: 'sva-fb-3',
        type: 'fill-blank',
        prompt: 'Ten thousand dollars ___ donated anonymously to the children\'s hospital yesterday. (was/were)',
        hint: 'Số tiền xem như 1 tổng thể số ít.',
        correctAnswers: ['was'],
        explanation: 'Khoản tiền Ten thousand dollars được xem như một khoản số ít nên chia was.',
        translation: 'Mười nghìn đô-la đã được quyên góp ẩn danh cho bệnh viện nhi ngày hôm qua.',
        level: 'Cơ bản'
      },
      {
        id: 'sva-fb-4',
        type: 'fill-blank',
        prompt: 'Either you or he ___ to submit the project overview to the department head. (has/have)',
        hint: 'Chia theo chủ ngữ gần nhất he.',
        correctAnswers: ['has'],
        explanation: 'Either...or chia theo chủ ngữ gần nhất he (số ít) -> has to submit.',
        translation: 'Hoặc bạn hoặc anh ấy phải nộp bản tổng quan dự án cho trưởng phòng.',
        level: 'Trung bình'
      },
      {
        id: 'sva-fb-5',
        type: 'fill-blank',
        prompt: 'The quality of the raw materials used in production ___ strictly controlled. (is/are)',
        hint: 'Chủ ngữ chính là The quality (số ít).',
        correctAnswers: ['is'],
        explanation: 'Chủ ngữ chính là The quality (số ít), không phải materials -> is controlled.',
        translation: 'Chất lượng của các nguyên liệu thô được dùng trong sản xuất được kiểm soát nghiêm ngặt.',
        level: 'Trung bình'
      },
      {
        id: 'sva-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The CEO, together with his directors, have approved the annual budget."',
        hint: 'Together with là cụm từ chèn; chia theo chủ ngữ chính The CEO (has).',
        correctAnswers: [
          'The CEO, together with his directors, has approved the annual budget.'
        ],
        explanation: 'Chủ ngữ chính là The CEO (ngôi thứ ba số ít), cụm \'together with his directors\' không làm đổi số của chủ ngữ -> has approved.',
        translation: 'Tổng giám đốc, cùng với các giám đốc của mình, đã phê duyệt ngân sách hàng năm.',
        level: 'Cơ bản'
      },
      {
        id: 'sva-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "A number of passenger was complaining about the delayed flight."',
        hint: 'A number of đi với danh từ số nhiều passengers và động từ số nhiều were.',
        correctAnswers: [
          'A number of passengers were complaining about the delayed flight.'
        ],
        explanation: 'A number of + N số nhiều (passengers) + V số nhiều (were complaining).',
        translation: 'Nhiều hành khách đang phàn nàn về chuyến bay bị hoãn.',
        level: 'Trung bình'
      },
      {
        id: 'sva-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Three hundred kilometers are a very long distance to travel by bicycle in one day."',
        hint: 'Khoảng cách xem như 1 đơn vị số ít (is a very long distance).',
        correctAnswers: [
          'Three hundred kilometers is a very long distance to travel by bicycle in one day.'
        ],
        explanation: 'Cụm từ chỉ khoảng cách (Three hundred kilometers) đóng vai trò là một đơn vị thống nhất nên chia động từ số ít is.',
        translation: 'Ba trăm ki-lô-mét là một khoảng cách rất dài để di chuyển bằng xe đạp trong một ngày.',
        level: 'Cơ bản'
      },
      {
        id: 'sva-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Everyone in the advanced chemistry class have completed the lab experiment."',
        hint: 'Everyone chia động từ số ít (has).',
        correctAnswers: [
          'Everyone in the advanced chemistry class has completed the lab experiment.'
        ],
        explanation: 'Everyone là đại từ bất định đi với động từ số ít: has completed.',
        translation: 'Mọi người trong lớp hóa học nâng cao đều đã hoàn thành thí nghiệm thực hành.',
        level: 'Cơ bản'
      },
      {
        id: 'sva-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Neither the manager nor the employees was aware of the structural changes."',
        hint: 'Neither...nor chia theo employees (số nhiều) -> were.',
        correctAnswers: [
          'Neither the manager nor the employees were aware of the structural changes.'
        ],
        explanation: 'Theo quy tắc lân cận, động từ hòa hợp theo the employees (số nhiều) -> were aware.',
        translation: 'Cả người quản lý lẫn các nhân viên đều không hay biết về những thay đổi cơ cấu.',
        level: 'Trung bình'
      },
      {
        id: 'sva-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng cụm chèn "as well as": "The teacher and the students were excited about the field trip."',
        hint: 'The teacher as well as the students was excited about the field trip.',
        correctAnswers: [
          'The teacher as well as the students was excited about the field trip.'
        ],
        explanation: 'Khi dùng as well as, động từ hòa hợp theo chủ ngữ đầu tiên The teacher (số ít) -> was.',
        translation: 'Thầy giáo cũng như các học sinh đều rất hào hứng về chuyến đi thực tế.',
        level: 'Trung bình'
      },
      {
        id: 'sva-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng cấu trúc "The number of" để nhấn mạnh số lượng: "Many electric cars are being manufactured."',
        hint: 'The number of electric cars is increasing rapidly.',
        correctAnswers: [
          'The number of electric cars being manufactured is increasing.',
          'The number of electric cars is increasing rapidly.'
        ],
        explanation: 'The number of + N số nhiều + V số ít (is).',
        translation: 'Số lượng xe điện được sản xuất đang gia tăng.',
        level: 'Nâng cao'
      },
      {
        id: 'sva-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết một câu diễn đạt khoảng thời gian 2 tiếng đồng hồ là đủ dùng động từ to be: "Two hours is enough for the test."',
        hint: 'Two hours is enough to complete the exam.',
        correctAnswers: [
          'Two hours is enough to complete the exam.',
          'Two hours is enough for this test.'
        ],
        explanation: 'Two hours là cụm từ chỉ thời gian xem như 1 đơn vị số ít đi với is.',
        translation: 'Hai tiếng đồng hồ là đủ để hoàn thành bài thi.',
        level: 'Cơ bản'
      },
      {
        id: 'sva-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng cặp liên từ "Neither...nor" với hai chủ ngữ "the boss" và "the workers": "The boss was not satisfied. The workers were not satisfied either."',
        hint: 'Neither the boss nor the workers were satisfied.',
        correctAnswers: [
          'Neither the boss nor the workers were satisfied.'
        ],
        explanation: 'Neither...nor chia theo chủ ngữ gần nhất the workers (số nhiều) -> were satisfied.',
        translation: 'Cả ông chủ lẫn các công nhân đều không hài lòng.',
        level: 'Trung bình'
      },
      {
        id: 'sva-sc-5',
        type: 'sentence-construction',
        prompt: 'Đặt một câu với đại từ bất định "Each of the participants" đi với động từ to be và tính từ "enthusiastic".',
        hint: 'Each of the participants is enthusiastic.',
        correctAnswers: [
          'Each of the participants is enthusiastic.',
          'Each of the participants was enthusiastic.'
        ],
        explanation: 'Each of + N số nhiều chia động từ số ít is/was.',
        translation: 'Mỗi người tham gia đều rất nhiệt huyết.',
        level: 'Cơ bản'
      }
    ]
  }
]
