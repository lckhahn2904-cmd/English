import type { GrammarLessonDetail } from '../types'

export const cat1Part2Lessons: GrammarLessonDetail[] = [
  // 5. QUANTIFIERS
  {
    id: 'quantifiers',
    title: 'Quantifiers',
    vietnameseTitle: 'Từ chỉ số lượng',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A1–B1',
    summary: 'Từ biểu thị số lượng hoặc lượng của danh từ; phân biệt rõ cách dùng với danh từ đếm được, không đếm được và cả hai.',
    overview: 'Từ chỉ số lượng (Quantifiers) là từ hoặc cụm từ đứng trước danh từ để cho biết số lượng (đối với danh từ đếm được) hoặc lượng (đối với danh từ không đếm được). Việc dùng đúng lượng từ là chìa khóa để diễn đạt chuẩn xác trong cả văn viết học thuật và giao tiếp hàng ngày.',
    foundation: 'Quy tắc vàng của lượng từ là phải luôn xác định danh từ đi sau là đếm được (số ít hay số nhiều) hay không đếm được. Một số lượng từ chỉ dùng với danh từ đếm được, một số chỉ dùng với danh từ không đếm được, và một số dùng được cho cả hai loại.',
    classification: [
      {
        title: 'Chỉ đi với Danh từ đếm được số nhiều',
        description: 'many, few, a few, several, a number of, both, a couple of. Ví dụ: many students, a few apples, several options.'
      },
      {
        title: 'Chỉ đi với Danh từ không đếm được',
        description: 'much, little, a little, a bit of, a great deal of, an amount of. Ví dụ: much sugar, a little time, a bit of luck.'
      },
      {
        title: 'Đi được với CẢ HAI loại danh từ',
        description: 'some, any, a lot of, lots of, plenty of, all, most, no, none of. Ví dụ: some water / some books, a lot of time / a lot of people.'
      },
      {
        title: 'Đi với Danh từ đếm được số ít',
        description: 'each, every, either, neither, another. Ví dụ: each person, every day, another cup.'
      }
    ],
    formulas: [
      {
        title: 'Phân biệt Few vs A few & Little vs A little',
        formula: 'Few / Little = Rất ít, hầu như không có (mang sắc thái TIÊU CỰC, thiếu thốn)\nA few / A little = Một vài, một ít, đủ dùng (mang sắc thái TÍCH CỰC, lạc quan)',
        note: 'I have a little money (tôi vẫn còn ít tiền đủ uống cà phê) KHÁC VỚI I have little money (tôi gần như cạn tiền rồi).'
      },
      {
        title: 'Some vs Any',
        formula: 'Some: dùng trong câu khẳng định, lời mời, lời đề nghị lịch sự (Would you like some tea?)\nAny: dùng trong câu phủ định và câu hỏi thông thường (I don\'t have any money; Do you have any questions?)',
        note: 'Trong câu khẳng định, Any mang nghĩa là \'bất kỳ\': You can choose any book you like.'
      }
    ],
    usage: [
      {
        context: 'Diễn tả số lượng lớn (Large quantity)',
        explanation: 'Trong câu khẳng định thân mật thường dùng a lot of / lots of; trong câu phủ định hoặc nghi vấn trang trọng dùng many / much.',
        example: { english: 'There wasn\'t much traffic on the highway this morning.', vietnamese: 'Sáng nay không có nhiều xe cộ trên đường cao tốc.' }
      },
      {
        context: 'Đưa ra lời mời hoặc yêu cầu lịch sự với Some',
        explanation: 'Dù là câu hỏi, nếu mục đích là mời mọc hoặc mong đợi câu trả lời \'Yes\', ta dùng Some.',
        example: { english: 'Would you like some fresh orange juice?', vietnamese: 'Bạn có muốn dùng một chút nước cam tươi không?' }
      },
      {
        context: 'Biểu thị sự khan hiếm với Few / Little',
        explanation: 'Nhấn mạnh sự thiếu hụt gần như bằng không.',
        example: { english: 'He has few friends because he rarely speaks to anyone.', vietnamese: 'Anh ấy có rất ít bạn bè vì anh ấy hiếm khi nói chuyện với ai.' }
      }
    ],
    examples: [
      { english: 'We still have a few minutes before the train departs.', vietnamese: 'Chúng ta vẫn còn vài phút trước khi tàu khởi hành.', note: 'A few đi với danh từ đếm được minutes mang nghĩa tích cực.' },
      { english: 'She speaks a little English, so we can communicate.', vietnamese: 'Cô ấy nói được một chút tiếng Anh, nên chúng tôi có thể giao tiếp được.', note: 'A little đi với danh từ không đếm được English.' },
      { english: 'Most people prefer working from home these days.', vietnamese: 'Hầu hết mọi người ngày nay đều thích làm việc tại nhà hơn.', note: 'Most đi với danh từ số nhiều people.' }
    ],
    importantNotes: [
      'Much và Many thường dùng trong câu phủ định và nghi vấn. Trong câu khẳng định thân mật, người bản xứ ưa chuộng dùng a lot of hoặc lots of.',
      'A number of + N số nhiều + V số nhiều (nhiều...). The number of + N số nhiều + V số ít (số lượng của...).',
      'None of + N số nhiều có thể đi với V số ít (trang trọng) hoặc V số nhiều (thông dụng).',
      'Few và Little không có mạo từ \'a\' mang nghĩa tiêu cực (gần như không có gì).'
    ],
    comparison: {
      title: 'Phân biệt A few vs Few & A little vs Little',
      points: [
        { concept: 'A few / A little (Có mạo từ \'a\')', difference: 'Nghĩa tích cực: Có một ít, vẫn đủ để dùng hoặc làm việc gì đó.' },
        { concept: 'Few / Little (Không có \'a\')', difference: 'Nghĩa tiêu cực: Rất ít, hiếm hoi, hầu như không đáng kể, không đủ dùng.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp nấu ăn tại nhà: Kiểm tra nguyên liệu trong bếp',
      dialogueOrSentences: [
        { speaker: 'Nam', text: 'Do we have any eggs left in the fridge?', translation: 'Chúng ta còn quả trứng nào trong tủ lạnh không?' },
        { speaker: 'Trang', text: 'We only have a few eggs left, and there is very little butter.', translation: 'Chúng ta chỉ còn vài quả trứng thôi, và còn rất ít bơ.' },
        { speaker: 'Nam', text: 'Okay, I will buy some butter and a lot of vegetables at the supermarket.', translation: 'Được rồi, anh sẽ mua một ít bơ và nhiều rau ở siêu thị.' }
      ]
    },
    summaryPoints: [
      'Xác định danh từ đếm được hay không đếm được trước khi chọn lượng từ.',
      'Many / Few / A few + danh từ đếm được số nhiều.',
      'Much / Little / A little + danh từ không đếm được.',
      'Few / Little mang nghĩa tiêu cực (quá ít); A few / A little mang nghĩa tích cực (vẫn còn một ít).',
      'Some dùng cho câu khẳng định và lời mời; Any dùng cho phủ định và câu hỏi.'
    ],
    exercises: [
      {
        id: 'quant-mc-1',
        type: 'multiple-choice',
        prompt: 'Fortunately, we still have ___ time left to complete the survey before the deadline.',
        choices: ['a little', 'little', 'a few', 'few'],
        correctAnswers: ['a little'],
        explanation: 'Time là danh từ không đếm được; từ \'Fortunately\' (may mắn thay) chỉ sắc thái tích cực nên dùng a little.',
        translation: 'May mắn thay, chúng tôi vẫn còn một ít thời gian để hoàn thành khảo sát trước hạn chót.',
        level: 'Cơ bản'
      },
      {
        id: 'quant-mc-2',
        type: 'multiple-choice',
        prompt: 'Sadly, very ___ students turned up for the optional seminar on Saturday morning.',
        choices: ['few', 'a few', 'little', 'a little'],
        correctAnswers: ['few'],
        explanation: 'Students là danh từ đếm được số nhiều; từ \'Sadly\' (đáng buồn thay) biểu thị sự thiếu hụt tiêu cực nên dùng few.',
        translation: 'Đáng buồn là rất ít sinh viên đến tham dự buổi hội thảo tự chọn vào sáng thứ Bảy.',
        level: 'Trung bình'
      },
      {
        id: 'quant-mc-3',
        type: 'multiple-choice',
        prompt: '___ applicants who applied for the managerial position had impressive credentials.',
        choices: ['Several of the', 'Much of the', 'Every of the', 'A little of the'],
        correctAnswers: ['Several of the'],
        explanation: 'Applicants là danh từ đếm được số nhiều, lượng từ phù hợp là Several of the.',
        translation: 'Một vài ứng viên nộp hồ sơ vào vị trí quản lý có những chứng chỉ rất ấn tượng.',
        level: 'Trung bình'
      },
      {
        id: 'quant-mc-4',
        type: 'multiple-choice',
        prompt: 'Would you care for ___ freshly brewed coffee while you wait for the doctor?',
        choices: ['some', 'any', 'many', 'few'],
        correctAnswers: ['some'],
        explanation: 'Lời mời lịch sự (Would you care for...) dùng some dù là câu hỏi.',
        translation: 'Bạn có muốn dùng một chút cà phê mới pha trong khi chờ bác sĩ không?',
        level: 'Cơ bản'
      },
      {
        id: 'quant-mc-5',
        type: 'multiple-choice',
        prompt: 'A large number of foreign tourists ___ visiting the ancient citadel this season.',
        choices: ['are', 'is', 'was', 'has been'],
        correctAnswers: ['are'],
        explanation: 'A number of + N số nhiều luôn đi với động từ số nhiều (are).',
        translation: 'Một số lượng lớn du khách nước ngoài đang đến tham quan cố đô vào mùa này.',
        level: 'Nâng cao'
      },
      {
        id: 'quant-fb-1',
        type: 'fill-blank',
        prompt: 'There is not ___ milk left in the bottle, so please buy another carton. (much/many)',
        hint: 'Milk là danh từ không đếm được.',
        correctAnswers: ['much'],
        explanation: 'Milk không đếm được nên trong câu phủ định dùng much.',
        translation: 'Không còn nhiều sữa trong chai đâu, nên hãy mua thêm một hộp nữa nhé.',
        level: 'Cơ bản'
      },
      {
        id: 'quant-fb-2',
        type: 'fill-blank',
        prompt: 'Don\'t worry, I have ___ reliable friends who can help us move houses tomorrow. (a few/few)',
        hint: 'Mang nghĩa tích cực (đủ người giúp).',
        correctAnswers: ['a few'],
        explanation: 'A few mang nghĩa tích cực (có vài người bạn sẵn lòng giúp).',
        translation: 'Đừng lo, tôi có vài người bạn đáng tin cậy có thể giúp chúng ta chuyển nhà vào ngày mai.',
        level: 'Cơ bản'
      },
      {
        id: 'quant-fb-3',
        type: 'fill-blank',
        prompt: 'The manager had ___ patience with careless mistakes made by new interns. (little/few)',
        hint: 'Patience là danh từ không đếm được.',
        correctAnswers: ['little'],
        explanation: 'Patience là danh từ không đếm được, dùng little để biểu thị hầu như không có sự kiên nhẫn.',
        translation: 'Người quản lý có rất ít kiên nhẫn với những sai sót do bất cẩn của các thực tập sinh mới.',
        level: 'Trung bình'
      },
      {
        id: 'quant-fb-4',
        type: 'fill-blank',
        prompt: 'The number of electric vehicles in our city ___ increasing steadily each year. (is/are)',
        hint: 'The number of đi với động từ số ít.',
        correctAnswers: ['is'],
        explanation: 'The number of đi với động từ số ít (is increasing).',
        translation: 'Số lượng xe điện trong thành phố chúng ta đang tăng đều đặn qua từng năm.',
        level: 'Nâng cao'
      },
      {
        id: 'quant-fb-5',
        type: 'fill-blank',
        prompt: 'Do you have ___ spare coins to pay for the parking ticket? (some/any)',
        hint: 'Câu hỏi thông thường dùng any.',
        correctAnswers: ['any'],
        explanation: 'Trong câu hỏi nghi vấn thông thường về sự tồn tại, dùng any.',
        translation: 'Bạn có đồng xu lẻ nào để trả tiền vé đỗ xe không?',
        level: 'Cơ bản'
      },
      {
        id: 'quant-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "We didn\'t make many progress during yesterday\'s discussion."',
        hint: 'Progress là danh từ không đếm được nên không đi với many.',
        correctAnswers: [
          'We didn\'t make much progress during yesterday\'s discussion.'
        ],
        explanation: 'Progress là danh từ không đếm được, phải dùng much progress chứ không dùng many progress.',
        translation: 'Chúng tôi đã không đạt được nhiều tiến triển trong cuộc thảo luận ngày hôm qua.',
        level: 'Cơ bản'
      },
      {
        id: 'quant-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "I have few money left, so I cannot afford this expensive dinner."',
        hint: 'Money không đếm được nên không dùng few.',
        correctAnswers: [
          'I have little money left, so I cannot afford this expensive dinner.'
        ],
        explanation: 'Money là danh từ không đếm được, biểu thị thiếu thốn phải dùng little money.',
        translation: 'Tôi còn rất ít tiền, nên tôi không thể chi trả cho bữa tối đắt đỏ này.',
        level: 'Cơ bản'
      },
      {
        id: 'quant-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The number of endangered tigers are dropping at an alarming rate."',
        hint: 'The number of đi với động từ số ít (is).',
        correctAnswers: [
          'The number of endangered tigers is dropping at an alarming rate.'
        ],
        explanation: 'Cấu trúc The number of + N số nhiều luôn chia động từ số ít: is dropping.',
        translation: 'Số lượng loài hổ có nguy cơ tuyệt chủng đang sụt giảm ở mức đáng báo động.',
        level: 'Trung bình'
      },
      {
        id: 'quant-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She has several experience in managing international marketing projects."',
        hint: 'Experience (kinh nghiệm) là không đếm được, không đi với several.',
        correctAnswers: [
          'She has much experience in managing international marketing projects.',
          'She has a lot of experience in managing international marketing projects.'
        ],
        explanation: 'Experience với nghĩa kinh nghiệm là danh từ không đếm được, dùng much experience hoặc a lot of experience.',
        translation: 'Cô ấy có nhiều kinh nghiệm trong việc quản lý các dự án tiếp thị quốc tế.',
        level: 'Trung bình'
      },
      {
        id: 'quant-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Would you like any more chocolate cake with your tea?"',
        hint: 'Lời mời lịch sự dùng some.',
        correctAnswers: [
          'Would you like some more chocolate cake with your tea?'
        ],
        explanation: 'Trong câu hỏi đóng vai trò là lời mời lịch sự, dùng some thay vì any.',
        translation: 'Bạn có muốn dùng thêm chút bánh sô-cô-la cùng với trà không?',
        level: 'Cơ bản'
      },
      {
        id: 'quant-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng "a few" để mang nghĩa tích cực: "There are some questions that I still need to clarify."',
        hint: 'I still have a few questions to clarify.',
        correctAnswers: [
          'I still have a few questions to clarify.',
          'There are a few questions that I still need to clarify.'
        ],
        explanation: 'A few questions biểu thị còn một vài câu hỏi cần làm rõ.',
        translation: 'Tôi vẫn còn một vài câu hỏi cần làm rõ.',
        level: 'Cơ bản'
      },
      {
        id: 'quant-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau nhấn mạnh sự khan hiếm dùng "little": "He had almost no knowledge about the new software."',
        hint: 'He had little knowledge about the new software.',
        correctAnswers: [
          'He had little knowledge about the new software.'
        ],
        explanation: 'Little đi với danh từ không đếm được knowledge tương đương với almost no knowledge.',
        translation: 'Anh ấy hầu như có rất ít kiến thức về phần mềm mới.',
        level: 'Trung bình'
      },
      {
        id: 'quant-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sử dụng cấu trúc "A number of" đi với động từ số nhiều: "Many residents have signed the petition."',
        hint: 'A number of residents have signed the petition.',
        correctAnswers: [
          'A number of residents have signed the petition.'
        ],
        explanation: 'A number of residents mang nghĩa nhiều cư dân và chia động từ số nhiều have signed.',
        translation: 'Nhiều cư dân đã ký vào bản kiến nghị.',
        level: 'Trung bình'
      },
      {
        id: 'quant-sc-4',
        type: 'sentence-construction',
        prompt: 'Đặt một câu hỏi đưa ra lời đề nghị giúp đỡ dùng lượng từ "some": "Tôi có thể cho bạn một vài lời khuyên không?"',
        hint: 'Can I give you some advice?',
        correctAnswers: [
          'Can I give you some advice?',
          'Could I give you some advice?'
        ],
        explanation: 'Lời đề nghị giúp đỡ dùng some advice.',
        translation: 'Tôi có thể cho bạn một vài lời khuyên được không?',
        level: 'Cơ bản'
      },
      {
        id: 'quant-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết một câu khẳng định có từ hạn định "any" mang nghĩa "bất kỳ": "Bạn có thể tham gia bất kỳ khóa học nào bạn muốn."',
        hint: 'You can join any course you want.',
        correctAnswers: [
          'You can join any course you want.',
          'You can choose any course you want.'
        ],
        explanation: 'Trong câu khẳng định, any mang nghĩa là bất kỳ đối tượng nào.',
        translation: 'Bạn có thể tham gia bất kỳ khóa học nào bạn muốn.',
        level: 'Nâng cao'
      }
    ]
  },

  // 6. VERBS
  {
    id: 'verbs',
    title: 'Verbs',
    vietnameseTitle: 'Động từ',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A1–B2',
    summary: 'Từ chỉ hành động hoặc trạng thái; phân biệt nội động từ, ngoại động từ, động từ nối (linking verbs) và trợ động từ.',
    overview: 'Động từ (Verbs) là trái tim của câu tiếng Anh. Động từ diễn tả hành động (run, write, build), trạng thái (exist, know, believe), hoặc cảm xúc (love, feel). Không có động từ, một chuỗi từ không thể trở thành một câu hoàn chỉnh.',
    foundation: 'Động từ trong tiếng Anh biến đổi theo 4 khía cạnh chính: Ngôi và Số của chủ ngữ (SVA), Thì (Tense - thời gian), Thể (Aspect - đơn, tiếp diễn, hoàn thành), và Thể chủ động / bị động (Voice).',
    classification: [
      {
        title: 'Động từ hành động vs Động từ trạng thái (Action vs Stative Verbs)',
        description: 'Action verbs diễn tả hành động thể chất/tâm trí cụ thể (run, eat, speak). Stative verbs diễn tả trạng thái, cảm xúc, nhận thức, sở hữu (know, like, understand, belong, believe) và thường KHÔNG chia ở các thì tiếp diễn.'
      },
      {
        title: 'Nội động từ vs Ngoại động từ (Intransitive vs Transitive)',
        description: 'Nội động từ không cần tân ngữ đi kèm (sleep, arrive, laugh). Ngoại động từ bắt buộc phải có ít nhất một tân ngữ trực tiếp (buy, send, read, kick).'
      },
      {
        title: 'Động từ nối (Linking Verbs)',
        description: 'Không diễn tả hành động mà kết nối chủ ngữ với một tính từ hoặc danh từ bổ nghĩa: be, become, seem, appear, look, taste, smell, sound, feel.'
      },
      {
        title: 'Trợ động từ (Auxiliary Verbs)',
        description: 'Động từ hỗ trợ tạo thì, thể phủ định và câu hỏi: be (am/is/are/was/were), do (do/does/did), have (have/has/had) và động từ khuyết thiếu (can, will, must).'
      }
    ],
    formulas: [
      {
        title: 'Cấu trúc Ngoại động từ vs Nội động từ',
        formula: 'Nội động từ: S + V (The baby cried loudly)\nNgoại động từ đơn: S + V + O (She bought a laptop)\nNgoại động từ kép: S + V + O_gián tiếp + O_trực tiếp (He gave me a book)',
        note: 'Nội động từ KHÔNG THỂ chuyển sang câu bị động vì không có tân ngữ.'
      },
      {
        title: 'Cấu trúc Động từ nối (Linking Verbs)',
        formula: 'S + Linking Verb + Adjective (KHÔNG dùng Trạng từ -ly)',
        note: 'The soup tastes delicious (ĐÚNG). The soup tastes deliciously (SAI).'
      }
    ],
    usage: [
      {
        context: 'Diễn tả hành động đang diễn ra (Action Verbs)',
        explanation: 'Các động từ hành động có thể chia ở thì tiếp diễn tự nhiên.',
        example: { english: 'They are building a modern bridge over the river.', vietnamese: 'Họ đang xây dựng một cây cầu hiện đại bắc qua sông.' }
      },
      {
        context: 'Diễn tả tri giác và cảm xúc với Linking Verbs',
        explanation: 'Dùng tính từ đứng sau động từ nối để miêu tả đặc điểm của chủ ngữ.',
        example: { english: 'The music sounds wonderful and soothing.', vietnamese: 'Bản nhạc nghe thật tuyệt vời và êm dịu.' }
      },
      {
        context: 'Động từ vừa là trạng thái vừa là hành động (Look, Think, Have, Smell)',
        explanation: 'Khi chỉ trạng thái tĩnh không chia tiếp diễn; khi chỉ hành động có chủ ý có thể chia tiếp diễn.',
        example: { english: 'I think you are right (quan điểm). vs I am thinking about the problem (đang suy ngẫm).', vietnamese: 'Tôi nghĩ bạn đúng. vs Tôi đang suy nghĩ về vấn đề đó.' }
      }
    ],
    examples: [
      { english: 'She resembles her mother closely.', vietnamese: 'Cô ấy trông rất giống mẹ mình.', note: 'Resemble là động từ trạng thái, không dùng tiếp diễn.' },
      { english: 'The sun rose at 6 a.m. this morning.', vietnamese: 'Mặt trời đã mọc lúc 6 giờ sáng nay.', note: 'Rise là nội động từ, không có tân ngữ.' },
      { english: 'He raised his hand to ask a question.', vietnamese: 'Anh ấy đã giơ tay lên để đặt câu hỏi.', note: 'Raise là ngoại động từ, có tân ngữ his hand.' }
    ],
    importantNotes: [
      'Không dùng thì tiếp diễn với các stative verbs thuần túy: belong, consist of, contain, depend on, know, understand, believe, remember.',
      'Phân biệt cặp động từ dễ lẫn: Rise (nội động từ: tự mọc lên/tăng lên) vs Raise (ngoại động từ: nâng cái gì lên).',
      'Lie (nằm: lie - lay - lain) vs Lay (đặt để cái gì: lay - laid - laid).',
      'Sau linking verbs (look, seem, sound, taste, smell, feel) bắt buộc dùng TÍNH TỪ, không dùng trạng từ: She looks happy (không dùng happily).'
    ],
    comparison: {
      title: 'Phân biệt Transitive Verbs vs Intransitive Verbs',
      points: [
        { concept: 'Transitive (Ngoại động từ)', difference: 'Bắt buộc cần tân ngữ nhận hành động (buy something, send someone sth), chuyển được sang câu bị động.' },
        { concept: 'Intransitive (Nội động từ)', difference: 'Tự bản thân có nghĩa trọn vẹn, không có tân ngữ (sleep, arrive, die), KHÔNG BAO GIỜ chuyển sang bị động.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp ăn uống: Đánh giá món ăn tại nhà hàng',
      dialogueOrSentences: [
        { speaker: 'Duy', text: 'How does your grilled salmon taste?', translation: 'Món cá hồi nướng của bạn vị thế nào?' },
        { speaker: 'Mai', text: 'It tastes absolutely delicious! The sauce smells very fresh.', translation: 'Vị ngon tuyệt cú mèo! Nước sốt có mùi rất thơm và tươi.' },
        { speaker: 'Duy', text: 'Great, I am thinking of ordering the same dish.', translation: 'Tuyệt, mình cũng đang tính gọi món giống thế đây.' }
      ]
    },
    summaryPoints: [
      'Động từ thể hiện hành động hoặc trạng thái của chủ ngữ.',
      'Ngoại động từ cần tân ngữ; Nội động từ không có tân ngữ (không có thể bị động).',
      'Động từ nối (look, feel, taste, sound, seem) đi với tính từ.',
      'Động từ trạng thái (stative verbs) không dùng ở thì tiếp diễn.',
      'Cần phân biệt cặp động từ: rise/raise, lie/lay.'
    ],
    exercises: [
      {
        id: 'verbs-mc-1',
        type: 'multiple-choice',
        prompt: 'The freshly baked apple pie smells ___ throughout the entire bakery.',
        choices: ['delicious', 'deliciously', 'more deliciously', 'deliciousness'],
        correctAnswers: ['delicious'],
        explanation: 'Smell trong câu này là linking verb chỉ cảm giác, đi với tính từ delicious.',
        translation: 'Chiếc bánh táo mới nướng thơm phức khắp cả tiệm bánh.',
        level: 'Cơ bản'
      },
      {
        id: 'verbs-mc-2',
        type: 'multiple-choice',
        prompt: 'The government plans to ___ the minimum wage for workers next month.',
        choices: ['raise', 'rise', 'arise', 'raising'],
        correctAnswers: ['raise'],
        explanation: 'Cần một ngoại động từ có tân ngữ \'the minimum wage\', do đó dùng raise (tăng mức lương).',
        translation: 'Chính phủ dự định tăng mức lương tối thiểu cho người lao động vào tháng tới.',
        level: 'Trung bình'
      },
      {
        id: 'verbs-mc-3',
        type: 'multiple-choice',
        prompt: 'I currently ___ the technical details of the new cybersecurity policy.',
        choices: ['understand', 'am understanding', 'am understood', 'have been understanding'],
        correctAnswers: ['understand'],
        explanation: 'Understand là động từ trạng thái nhận thức (stative verb), không chia ở thì tiếp diễn.',
        translation: 'Hiện tại tôi đã hiểu rõ các chi tiết kỹ thuật của chính sách an ninh mạng mới.',
        level: 'Cơ bản'
      },
      {
        id: 'verbs-mc-4',
        type: 'multiple-choice',
        prompt: 'The injured hiker ___ on the grass until the rescue helicopter arrived.',
        choices: ['lay', 'laid', 'lied', 'lain'],
        correctAnswers: ['lay'],
        explanation: 'Quá khứ đơn của nội động từ lie (nằm) là lay (lie - lay - lain).',
        translation: 'Người đi bộ đường dài bị thương đã nằm trên bãi cỏ cho đến khi trực thăng cứu hộ đến.',
        level: 'Nâng cao'
      },
      {
        id: 'verbs-mc-5',
        type: 'multiple-choice',
        prompt: 'Which of the following sentences contains an INTRANSITIVE verb?',
        choices: [
          'The train arrived on platform three.',
          'She read an interesting novel.',
          'They painted the front door.',
          'He bought a new bicycle.'
        ],
        correctAnswers: ['The train arrived on platform three.'],
        explanation: 'Arrive là nội động từ (intransitive verb) không có tân ngữ trực tiếp (on platform three là trạng ngữ nơi chốn).',
        translation: 'Câu nào sau đây chứa nội động từ? -> Đoàn tàu đã đến sân ga số ba.',
        level: 'Trung bình'
      },
      {
        id: 'verbs-fb-1',
        type: 'fill-blank',
        prompt: 'Global temperatures continue to ___ due to greenhouse gas emissions. (rise/raise)',
        hint: 'Tự tăng lên không có tân ngữ dùng rise.',
        correctAnswers: ['rise'],
        explanation: 'Rise là nội động từ dùng khi nhiệt độ tự tăng lên, không cần tân ngữ.',
        translation: 'Nhiệt độ toàn cầu tiếp tục tăng lên do khí thải nhà kính.',
        level: 'Trung bình'
      },
      {
        id: 'verbs-fb-2',
        type: 'fill-blank',
        prompt: 'This antique violin ___ to my great-grandfather over a century ago. (belong/belonged)',
        hint: 'Quá khứ đơn của belong.',
        correctAnswers: ['belonged'],
        explanation: 'Belong là stative verb, chia thì quá khứ đơn là belonged.',
        translation: 'Cây đàn vĩ cầm cổ này từng thuộc về cụ cố tôi hơn một thế kỷ trước.',
        level: 'Cơ bản'
      },
      {
        id: 'verbs-fb-3',
        type: 'fill-blank',
        prompt: 'The speaker asked everyone in the audience to ___ their hands. (rise/raise)',
        hint: 'Giơ tay (có tân ngữ their hands) dùng raise.',
        correctAnswers: ['raise'],
        explanation: 'Raise là ngoại động từ có tân ngữ their hands.',
        translation: 'Diễn giả đã yêu cầu mọi người trong khán phòng giơ tay lên.',
        level: 'Cơ bản'
      },
      {
        id: 'verbs-fb-4',
        type: 'fill-blank',
        prompt: 'Be quiet! The baby ___ peacefully in the adjoining room. (sleep)',
        hint: 'Hành động đang diễn ra lúc nói.',
        correctAnswers: ['is sleeping'],
        explanation: 'Sleep là action verb, diễn tả hành động đang diễn ra nên chia is sleeping.',
        translation: 'Trật tự nào! Em bé đang ngủ yên giấc trong căn phòng bên cạnh.',
        level: 'Cơ bản'
      },
      {
        id: 'verbs-fb-5',
        type: 'fill-blank',
        prompt: 'Her voice sounds very ___ over the telephone today. (weak/weakly)',
        hint: 'Sound là linking verb đi với tính từ.',
        correctAnswers: ['weak'],
        explanation: 'Sound là động từ nối, đi kèm tính từ weak để miêu tả chủ ngữ.',
        translation: 'Giọng cô ấy nghe có vẻ rất yếu ớt qua điện thoại hôm nay.',
        level: 'Trung bình'
      },
      {
        id: 'verbs-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "I am knowing the answer to that difficult question right now."',
        hint: 'Know là stative verb không dùng tiếp diễn.',
        correctAnswers: [
          'I know the answer to that difficult question right now.'
        ],
        explanation: 'Know là động từ trạng thái nhận thức, không chia ở dạng tiếp diễn (am knowing -> know).',
        translation: 'Tôi biết câu trả lời cho câu hỏi khó đó ngay lúc này.',
        level: 'Cơ bản'
      },
      {
        id: 'verbs-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The flowers in the botanical garden look wonderfully."',
        hint: 'Look là linking verb đi với tính từ (wonderful).',
        correctAnswers: [
          'The flowers in the botanical garden look wonderful.'
        ],
        explanation: 'Look ở đây là động từ nối, bổ ngữ đi sau phải là tính từ wonderful chứ không phải trạng từ wonderfully.',
        translation: 'Những bông hoa trong vườn bách thảo trông thật tuyệt vời.',
        level: 'Cơ bản'
      },
      {
        id: 'verbs-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She laid in bed all morning because she had a severe headache."',
        hint: 'Quá khứ của lie (nằm) là lay.',
        correctAnswers: [
          'She lay in bed all morning because she had a severe headache.'
        ],
        explanation: 'Động từ lie (nằm) có dạng quá khứ là lay; laid là quá khứ của lay (đặt/để cái gì).',
        translation: 'Cô ấy đã nằm trên giường cả buổi sáng vì bị đau đầu dữ dội.',
        level: 'Nâng cao'
      },
      {
        id: 'verbs-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The company will rise the price of its subscription services."',
        hint: 'Tăng giá có tân ngữ the price nên phải dùng ngoại động từ raise.',
        correctAnswers: [
          'The company will raise the price of its subscription services.'
        ],
        explanation: 'Rise là nội động từ không có tân ngữ; ở đây có tân ngữ \'the price\' nên phải dùng ngoại động từ raise.',
        translation: 'Công ty sẽ tăng giá các dịch vụ thuê bao của mình.',
        level: 'Trung bình'
      },
      {
        id: 'verbs-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "This luxury sports car is belonging to a famous pop singer."',
        hint: 'Belong là stative verb không chia tiếp diễn.',
        correctAnswers: [
          'This luxury sports car belongs to a famous pop singer.'
        ],
        explanation: 'Belong là động từ chỉ sở hữu (stative verb), không chia ở thì tiếp diễn (is belonging -> belongs).',
        translation: 'Chiếc xe thể thao hạng sang này thuộc về một ca sĩ nhạc pop nổi tiếng.',
        level: 'Cơ bản'
      },
      {
        id: 'verbs-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng động từ nối "taste" đi với tính từ: "The soup has a delicious flavor."',
        hint: 'The soup tastes delicious.',
        correctAnswers: [
          'The soup tastes delicious.'
        ],
        explanation: 'Taste là động từ nối đi trực tiếp với tính từ delicious.',
        translation: 'Món súp có vị rất ngon.',
        level: 'Cơ bản'
      },
      {
        id: 'verbs-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sử dụng ngoại động từ "raise" thay thế cho "increase": "We must increase our quality standards immediately."',
        hint: 'We must raise our quality standards immediately.',
        correctAnswers: [
          'We must raise our quality standards immediately.'
        ],
        explanation: 'Raise là ngoại động từ mang nghĩa nâng cao/tăng lên.',
        translation: 'Chúng ta phải nâng cao các tiêu chuẩn chất lượng của mình ngay lập tức.',
        level: 'Trung bình'
      },
      {
        id: 'verbs-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết một câu diễn đạt hành động suy ngẫm đang diễn ra dùng thì hiện tại tiếp diễn của "think": "Tôi đang suy nghĩ về lời đề nghị của bạn."',
        hint: 'I am thinking about your offer.',
        correctAnswers: [
          'I am thinking about your offer.',
          'I am thinking about your proposal.'
        ],
        explanation: 'Khi think diễn tả hành động đang suy nghĩ trong đầu, nó có thể dùng ở thì tiếp diễn.',
        translation: 'Tôi đang suy nghĩ về lời đề nghị của bạn.',
        level: 'Trung bình'
      },
      {
        id: 'verbs-sc-4',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau sang bị động nếu có thể (nếu là nội động từ thì viết "Cannot be changed"): "The plane landed safely on the runway."',
        hint: 'Land ở đây là nội động từ, không có tân ngữ.',
        correctAnswers: [
          'Cannot be changed',
          'Cannot be changed.',
          'Cannot change'
        ],
        explanation: 'Landed là nội động từ, không có tân ngữ nên không thể chuyển sang câu bị động.',
        translation: 'Chiếc máy bay đã hạ cánh an toàn trên đường băng. (Không thể chuyển bị động).',
        level: 'Nâng cao'
      },
      {
        id: 'verbs-sc-5',
        type: 'sentence-construction',
        prompt: 'Đặt một câu với động từ nối "seem" đi với tính từ "confident": "Anh ấy dường như rất tự tin về kết quả."',
        hint: 'He seems very confident about the results.',
        correctAnswers: [
          'He seems very confident about the results.',
          'He seems confident about the results.'
        ],
        explanation: 'Seem là động từ nối đi với tính từ confident.',
        translation: 'Anh ấy dường như rất tự tin về các kết quả.',
        level: 'Cơ bản'
      }
    ]
  },

  // 7. ADJECTIVES
  {
    id: 'adjectives',
    title: 'Adjectives',
    vietnameseTitle: 'Tính từ',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A1–B1',
    summary: 'Từ miêu tả tính chất, đặc điểm của danh từ; quy tắc trật tự tính từ OSASCOMP, tính từ đuôi -ed/-ing và tính từ sau động từ nối.',
    overview: 'Tính từ (Adjectives) là từ loại dùng để bổ nghĩa cho danh từ hoặc đại từ, cung cấp thêm thông tin về đặc điểm, tính chất, màu sắc, kích thước, xuất xứ hoặc cảm xúc của sự vật, con người.',
    foundation: 'Tính từ trong tiếng Anh có hai vị trí cơ bản: đứng TRƯỚC danh từ (Attributive position: a quiet room, a beautiful painting) hoặc đứng SAU động từ nối (Predicative position: The room is quiet; She feels happy). Tính từ tiếng Anh KHÔNG biến đổi theo số ít hay số nhiều của danh từ.',
    classification: [
      {
        title: 'Tính từ miêu tả (Descriptive Adjectives)',
        description: 'Chỉ kích thước, hình dáng, màu sắc, tính chất: tall, round, red, gentle, modern.'
      },
      {
        title: 'Tính từ tận cùng bằng đuôi -ED vs -ING',
        description: '-ED chỉ cảm xúc của người (bị tác động): bored, interested, excited, tired.\n-ING chỉ tính chất của sự vật/hiện tượng gây ra cảm xúc: boring, interesting, exciting, tiring.'
      },
      {
        title: 'Tính từ ghép (Compound Adjectives)',
        description: 'Được tạo bởi 2 hay nhiều từ nối bằng dấu gạch ngang: well-known, part-time, five-star, good-looking.'
      },
      {
        title: 'Tính từ chỉ quốc tịch và nguồn gốc (Proper Adjectives)',
        description: 'Được hình thành từ tên riêng quốc gia và luôn viết hoa: Vietnamese, Japanese, British, American.'
      }
    ],
    formulas: [
      {
        title: 'Quy tắc Trật tự Tính từ trước Danh từ: OSASCOMP',
        formula: 'O (Opinion - Ý kiến): beautiful, lovely, terrible\nS (Size - Kích cỡ): big, small, tiny, huge\nA (Age - Tuổi tác/Độ cũ mới): young, old, ancient, modern\nS (Shape - Hình dạng): round, square, oval\nC (Color - Màu sắc): red, black, white, blue\nO (Origin - Nguồn gốc): Vietnamese, Italian, Japanese\nM (Material - Chất liệu): wooden, leather, silk, metal\nP (Purpose - Mục đích): sleeping (bag), running (shoes)',
        note: 'Ví dụ: a lovely (O) small (S) ancient (A) wooden (M) chair.'
      },
      {
        title: 'Quy tắc đuôi -ED vs -ING',
        formula: 'Person + be + V-ed (I am interested in art)\nThing + be + V-ing (The art exhibition is interesting)',
        note: 'Một người cũng có thể dùng -ing nếu người đó gây ra cảm giác cho người khác: He is a boring person (Anh ta là kẻ tẻ nhạt).'
      }
    ],
    usage: [
      {
        context: 'Đứng trước danh từ để bổ nghĩa (Attributive)',
        explanation: 'Cung cấp thông tin trực tiếp cho danh từ đứng liền sau.',
        example: { english: 'They live in a charming little cottage.', vietnamese: 'Họ sống trong một ngôi nhà tranh nhỏ duyên dáng.' }
      },
      {
        context: 'Đứng sau động từ nối để làm vị ngữ (Predicative)',
        explanation: 'Bổ nghĩa cho chủ ngữ thông qua động từ nối.',
        example: { english: 'The contract looks satisfactory to both parties.', vietnamese: 'Bản hợp đồng trông có vẻ thỏa đáng cho cả hai bên.' }
      },
      {
        context: 'Tính từ chỉ độ dài, tuổi tác có số đếm và dấu gạch nối',
        explanation: 'Khi làm tính từ ghép đứng trước danh từ, danh từ đo lường KHÔNG được thêm -s.',
        example: { english: 'A ten-year-old boy (KHÔNG dùng ten-years-old boy).', vietnamese: 'Một cậu bé mười tuổi.' }
      }
    ],
    examples: [
      { english: 'She wore an elegant long black silk dress.', vietnamese: 'Cô ấy đã mặc một chiếc váy lụa đen dài thanh lịch.', note: 'Trật tự OSASCOMP: elegant (Opinion) - long (Size) - black (Color) - silk (Material).' },
      { english: 'We were completely exhausted after the marathon.', vietnamese: 'Chúng tôi hoàn toàn kiệt sức sau cuộc chạy marathon.', note: 'Tính từ đuôi -ed miêu tả trạng thái cảm xúc của người.' },
      { english: 'It was a very disappointing result for the team.', vietnamese: 'Đó là một kết quả rất đáng thất vọng đối với toàn đội.', note: 'Tính từ đuôi -ing miêu tả tính chất của kết quả.' }
    ],
    importantNotes: [
      'Tính từ trong tiếng Anh không đổi theo số nhiều (Sai: \'differents ideas\'; Đúng: \'different ideas\').',
      'Một số tính từ chỉ dùng ở vị trí vị ngữ sau động từ nối (không đứng trước danh từ): asleep, alone, alive, afraid, aware, ashamed.',
      'Tính từ ghép có số đếm luôn ở số ít: a two-hour flight (không dùng a two-hours flight).',
      'Phân biệt rõ: bored (bị buồn chán) vs boring (tẻ nhạt gây chán).'
    ],
    comparison: {
      title: 'Phân biệt -ED Adjectives vs -ING Adjectives',
      points: [
        { concept: '-ED Adjectives (Tired, Excited, Frightened)', difference: 'Diễn tả cảm xúc, tâm trạng người/vật trải qua khi bị tác động: I feel tired.' },
        { concept: '-ING Adjectives (Tiring, Exciting, Frightening)', difference: 'Diễn tả tính chất, đặc điểm của sự vật/hoàn cảnh tạo ra cảm xúc đó: It was a tiring day.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp đánh giá phim ảnh: Thảo luận về bộ phim vừa xem',
      dialogueOrSentences: [
        { speaker: 'Lâm', text: 'How did you find the sci-fi movie yesterday?', translation: 'Bạn thấy bộ phim khoa học viễn tưởng hôm qua thế nào?' },
        { speaker: 'Trúc', text: 'I was a bit disappointed. The plot was rather confusing.', translation: 'Mình hơi thất vọng một chút. Cốt truyện khá khó hiểu.' },
        { speaker: 'Lâm', text: 'Really? I thought the special effects were stunning and thrilling.', translation: 'Thế á? Mình lại thấy hiệu ứng kỹ xảo tuyệt đẹp và ly kỳ đấy chứ.' }
      ]
    },
    summaryPoints: [
      'Tính từ bổ nghĩa cho danh từ (đứng trước danh từ) hoặc bổ ngữ sau linking verbs.',
      'Tính từ không thay đổi hình thức theo số ít/số nhiều.',
      'Nhớ thần chú trật tự tính từ OSASCOMP: Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Purpose.',
      'Đuôi -ed: miêu tả cảm xúc bản thân; Đuôi -ing: miêu tả tính chất đối tượng tạo ra cảm xúc.',
      'Tính từ ghép có số đếm luôn giữ ở số ít: a five-star hotel.'
    ],
    exercises: [
      {
        id: 'adj-mc-1',
        type: 'multiple-choice',
        prompt: 'She bought a ___ antique table at the European flea market.',
        choices: [
          'beautiful large round wooden',
          'large beautiful wooden round',
          'wooden beautiful large round',
          'round beautiful large wooden'
        ],
        correctAnswers: ['beautiful large round wooden'],
        explanation: 'Trật tự OSASCOMP: beautiful (Opinion) -> large (Size) -> round (Shape) -> wooden (Material).',
        translation: 'Cô ấy đã mua một chiếc bàn gỗ tròn lớn tuyệt đẹp ở chợ đồ cũ châu Âu.',
        level: 'Trung bình'
      },
      {
        id: 'adj-mc-2',
        type: 'multiple-choice',
        prompt: 'The documentary about climate change was so ___ that many viewers were moved to tears.',
        choices: ['shocking', 'shocked', 'shockingly', 'shock'],
        correctAnswers: ['shocking'],
        explanation: 'Bộ phim tài liệu gây ra cảm xúc chấn động cho người xem nên dùng tính từ đuôi -ing (shocking).',
        translation: 'Bộ phim tài liệu về biến đổi khí hậu gây chấn động đến mức nhiều người xem đã rơi nước mắt.',
        level: 'Cơ bản'
      },
      {
        id: 'adj-mc-3',
        type: 'multiple-choice',
        prompt: 'My grandparents are staying at a ___ beachfront resort during their golden anniversary.',
        choices: ['five-star', 'five-stars', 'five-starred', 'fives-star'],
        correctAnswers: ['five-star'],
        explanation: 'Tính từ ghép có số đếm và danh từ đứng trước danh từ resort không thêm -s: five-star.',
        translation: 'Ông bà tôi đang nghỉ tại một khu nghỉ dưỡng ven biển năm sao trong dịp kỷ niệm đám cưới vàng.',
        level: 'Cơ bản'
      },
      {
        id: 'adj-mc-4',
        type: 'multiple-choice',
        prompt: 'The young mother was very ___ when her little daughter fell off the swing.',
        choices: ['frightened', 'frightening', 'frighten', 'frighteningly'],
        correctAnswers: ['frightened'],
        explanation: 'Miêu tả cảm xúc sợ hãi của người mẹ (bị tác động tâm lý) dùng tính từ đuôi -ed: frightened.',
        translation: 'Người mẹ trẻ đã rất sợ hãi khi con gái nhỏ bị ngã khỏi xích đu.',
        level: 'Cơ bản'
      },
      {
        id: 'adj-mc-5',
        type: 'multiple-choice',
        prompt: 'Which adjective can ONLY be used after a linking verb (predicative position)?',
        choices: ['afraid', 'tall', 'clever', 'modern'],
        correctAnswers: ['afraid'],
        explanation: 'Afraid là tính từ chỉ dùng ở vị ngữ sau động từ nối (He is afraid), không đứng trực tiếp trước danh từ (không dùng \'an afraid boy\').',
        translation: 'Tính từ nào chỉ dùng sau động từ nối? -> afraid.',
        level: 'Nâng cao'
      },
      {
        id: 'adj-fb-1',
        type: 'fill-blank',
        prompt: 'After hiking up the steep mountain all day, we were completely ___. (exhaust)',
        hint: 'Cảm xúc mệt mỏi của người dùng tính từ đuôi -ed.',
        correctAnswers: ['exhausted'],
        explanation: 'Chủ ngữ we chỉ người cảm thấy mệt mỏi kiệt sức nên dùng tính từ exhausted.',
        translation: 'Sau khi đi bộ leo núi dốc cả ngày, chúng tôi hoàn toàn kiệt sức.',
        level: 'Cơ bản'
      },
      {
        id: 'adj-fb-2',
        type: 'fill-blank',
        prompt: 'They attended a ___ conference in Singapore last week. (three-day/three-days)',
        hint: 'Tính từ ghép có số đếm không thêm -s.',
        correctAnswers: ['three-day'],
        explanation: 'Tính từ ghép đứng trước danh từ conference giữ số ít: three-day conference.',
        translation: 'Họ đã tham dự một hội nghị kéo dài ba ngày tại Singapore vào tuần trước.',
        level: 'Trung bình'
      },
      {
        id: 'adj-fb-3',
        type: 'fill-blank',
        prompt: 'The lecture was so ___ that half of the students fell asleep. (bore)',
        hint: 'Tính chất bài giảng gây chán dùng đuôi -ing.',
        correctAnswers: ['boring'],
        explanation: 'Bài giảng tẻ nhạt gây ra cảm giác buồn ngủ nên dùng tính từ boring.',
        translation: 'Bài giảng tẻ nhạt đến mức một nửa số sinh viên đã ngủ gật.',
        level: 'Cơ bản'
      },
      {
        id: 'adj-fb-4',
        type: 'fill-blank',
        prompt: 'He received a ___ sports car as a graduation gift from his parents. (brand-new/brand-news)',
        hint: 'Tính từ ghép chỉ sự hoàn toàn mới.',
        correctAnswers: ['brand-new'],
        explanation: 'Tính từ ghép brand-new mang nghĩa mới toanh.',
        translation: 'Anh ấy đã nhận được một chiếc xe thể thao mới toanh làm quà tốt nghiệp từ bố mẹ.',
        level: 'Trung bình'
      },
      {
        id: 'adj-fb-5',
        type: 'fill-blank',
        prompt: 'The team was deeply ___ by the sudden cancellation of the match. (disappoint)',
        hint: 'Tâm trạng thất vọng của đội bóng.',
        correctAnswers: ['disappointed'],
        explanation: 'Tâm trạng thất vọng của tập thể người dùng disappointed.',
        translation: 'Cả đội đã vô cùng thất vọng trước việc trận đấu đột ngột bị hủy bỏ.',
        level: 'Cơ bản'
      },
      {
        id: 'adj-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "We had to submit a twenty-pages report to the committee."',
        hint: 'Tính từ ghép có số đếm không thêm -s vào page.',
        correctAnswers: [
          'We had to submit a twenty-page report to the committee.'
        ],
        explanation: 'Tính từ ghép twenty-page đứng trước danh từ report đóng vai trò tính từ nên page không thêm -s.',
        translation: 'Chúng tôi đã phải nộp một bản báo cáo dài hai mươi trang cho ủy ban.',
        level: 'Cơ bản'
      },
      {
        id: 'adj-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "I found the ending of the detective novel very confused."',
        hint: 'Cái kết của cuốn tiểu thuyết gây bối rối dùng confusing.',
        correctAnswers: [
          'I found the ending of the detective novel very confusing.'
        ],
        explanation: 'Cái kết của tiểu thuyết gây cảm giác khó hiểu, bối rối cho người đọc nên dùng tính từ confusing.',
        translation: 'Tôi thấy phần kết của cuốn tiểu thuyết trinh thám rất khó hiểu.',
        level: 'Trung bình'
      },
      {
        id: 'adj-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She lives in an ancient small stone house in the countryside."',
        hint: 'Theo OSASCOMP, Size đứng trước Age: small ancient stone house.',
        correctAnswers: [
          'She lives in a small ancient stone house in the countryside.'
        ],
        explanation: 'Trật tự tính từ: Size (small) đứng trước Age (ancient), trước Material (stone): a small ancient stone house.',
        translation: 'Cô ấy sống trong một ngôi nhà đá cổ nhỏ ở vùng nông thôn.',
        level: 'Nâng cao'
      },
      {
        id: 'adj-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The teacher proposed several differents solutions to the conflict."',
        hint: 'Tính từ tiếng Anh không thêm -s ở số nhiều.',
        correctAnswers: [
          'The teacher proposed several different solutions to the conflict.'
        ],
        explanation: 'Tính từ different không bao giờ thêm -s theo danh từ số nhiều: different solutions.',
        translation: 'Giáo viên đã đề xuất một vài giải pháp khác nhau cho cuộc xung đột.',
        level: 'Cơ bản'
      },
      {
        id: 'adj-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The museum guards were looking for the alone tourist after closing time."',
        hint: 'Alone không đứng trước danh từ; thay bằng solitary hoặc unaccompanied.',
        correctAnswers: [
          'The museum guards were looking for the solitary tourist after closing time.',
          'The museum guards were looking for the tourist who was alone after closing time.'
        ],
        explanation: 'Alone là tính từ vị ngữ, không đứng trực tiếp trước danh từ. Dùng the solitary tourist hoặc the tourist who was alone.',
        translation: 'Các nhân viên bảo vệ bảo tàng đã tìm kiếm người du khách đơn độc sau giờ đóng cửa.',
        level: 'Nâng cao'
      },
      {
        id: 'adj-sc-1',
        type: 'sentence-construction',
        prompt: 'Sắp xếp các tính từ sau thành cụm danh từ hoàn chỉnh: "a / leather / black / stylish / jacket".',
        hint: 'Trật tự OSASCOMP: stylish (Opinion) -> black (Color) -> leather (Material).',
        correctAnswers: [
          'a stylish black leather jacket'
        ],
        explanation: 'Trật tự đúng: a stylish (Opinion) black (Color) leather (Material) jacket.',
        translation: 'Một chiếc áo khoác da màu đen sành điệu.',
        level: 'Trung bình'
      },
      {
        id: 'adj-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sử dụng tính từ đuôi -ed miêu tả cảm xúc: "The horror film terrified the young children."',
        hint: 'The young children were terrified by the horror film.',
        correctAnswers: [
          'The young children were terrified by the horror film.',
          'The young children were terrified of the horror film.'
        ],
        explanation: 'Terrified là tính từ đuôi -ed miêu tả sự kinh hãi của lũ trẻ.',
        translation: 'Các em nhỏ đã vô cùng khiếp sợ bởi bộ phim kinh dị.',
        level: 'Cơ bản'
      },
      {
        id: 'adj-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng tính từ ghép có dấu gạch nối: "The flight took ten hours from Hanoi to London."',
        hint: 'It was a ten-hour flight from Hanoi to London.',
        correctAnswers: [
          'It was a ten-hour flight from Hanoi to London.'
        ],
        explanation: 'Ten-hour là tính từ ghép không có đuôi -s bổ nghĩa cho flight.',
        translation: 'Đó là một chuyến bay dài mười tiếng từ Hà Nội đến Luân Đôn.',
        level: 'Trung bình'
      },
      {
        id: 'adj-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng tính từ đuôi -ing để chỉ tính chất: "The news surprised everyone in the room."',
        hint: 'The news was surprising to everyone in the room.',
        correctAnswers: [
          'The news was surprising to everyone in the room.'
        ],
        explanation: 'Surprising là tính từ đuôi -ing chỉ tính chất bất ngờ của tin tức.',
        translation: 'Tin tức đó gây ngạc nhiên cho tất cả mọi người trong phòng.',
        level: 'Cơ bản'
      },
      {
        id: 'adj-sc-5',
        type: 'sentence-construction',
        prompt: 'Đặt một câu miêu tả ngôi nhà cổ dùng 3 tính từ theo trật tự: Opinion (lovely), Age (ancient), Material (brick).',
        hint: 'They bought a lovely ancient brick house.',
        correctAnswers: [
          'They bought a lovely ancient brick house.',
          'We visited a lovely ancient brick house.',
          'She lives in a lovely ancient brick house.'
        ],
        explanation: 'Trật tự: lovely (Opinion) ancient (Age) brick (Material) house.',
        translation: 'Họ đã mua một ngôi nhà gạch cổ kính đáng yêu.',
        level: 'Nâng cao'
      }
    ]
  },

  // 8. ADVERBS
  {
    id: 'adverbs',
    title: 'Adverbs',
    vietnameseTitle: 'Trạng từ',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A2–B1',
    summary: 'Từ bổ nghĩa cho động từ, tính từ, trạng từ khác hoặc cả câu; phân loại trạng từ chỉ cách thức, tần suất, thời gian, nơi chốn và mức độ.',
    overview: 'Trạng từ (Adverbs) là từ loại đóng vai trò làm rõ thông tin về cách thức (hành động diễn ra như thế nào), tần suất (bao lâu một lần), thời gian (khi nào), nơi chốn (ở đâu), hoặc mức độ (đến mức nào). Trạng từ có thể bổ nghĩa cho động từ, tính từ, trạng từ khác, hoặc toàn bộ mệnh đề.',
    foundation: 'Phần lớn trạng từ chỉ cách thức được hình thành bằng công thức: [Tính từ] + -ly (quick -> quickly, careful -> carefully). Tuy nhiên có những ngoại lệ quan trọng giữ nguyên hình thức (fast, hard, late, early) hoặc biến đổi đặc biệt (good -> well).',
    classification: [
      {
        title: 'Trạng từ chỉ cách thức (Adverbs of Manner)',
        description: 'Trả lời cho câu hỏi \'How?\' (như thế nào): fluently, carefully, quickly, quietly, well.'
      },
      {
        title: 'Trạng từ chỉ tần suất (Adverbs of Frequency)',
        description: 'Trả lời cho \'How often?\': always, usually, often, sometimes, rarely, hardly ever, never.'
      },
      {
        title: 'Trạng từ chỉ thời gian & Nơi chốn (Time & Place)',
        description: 'Thời gian: yesterday, now, soon, already, yet. Nơi chốn: here, there, everywhere, outside, abroad.'
      },
      {
        title: 'Trạng từ chỉ mức độ (Adverbs of Degree)',
        description: 'Bổ nghĩa cho tính từ/trạng từ: very, extremely, quite, rather, fairly, too, enough, completely.'
      },
      {
        title: 'Trạng từ liên kết & bình luận (Sentence Adverbs)',
        description: 'Bổ nghĩa cho cả câu, đứng đầu câu ngăn cách bằng dấu phẩy: Fortunately, Obviously, However, Therefore.'
      }
    ],
    formulas: [
      {
        title: 'Quy tắc vị trí của Trạng từ tần suất',
        formula: 'Đứng TRƯỚC động từ thường (She often reads books)\nĐứng SAU động từ To Be (He is always punctual)\nĐứng GIỮA trợ động từ và động từ chính (They have never visited Rome)',
        note: 'Trạng từ phủ định (rarely, seldom, never) đứng đầu câu sẽ gây ra hiện tượng đảo ngữ.'
      },
      {
        title: 'Vị trí của Enough',
        formula: 'Tính từ / Trạng từ + ENOUGH (good enough, quickly enough)\nENOUGH + Danh từ (enough money, enough time)',
        note: 'Enough đứng SAU tính từ/trạng từ nhưng đứng TRƯỚC danh từ.'
      },
      {
        title: 'Ngoại lệ về trạng từ không có đuôi -ly',
        formula: 'fast -> fast\nhard -> hard\nlate -> late\nearly -> early\ngood -> well',
        note: 'Hardly mang nghĩa là \'hầu như không\', KHÔNG PHẢI là trạng từ của hard. Lately mang nghĩa là \'dạo gần đây\', KHÔNG PHẢI là muộn.'
      }
    ],
    usage: [
      {
        context: 'Bổ nghĩa cho động từ chính (Manner)',
        explanation: 'Thường đứng sau động từ hoặc sau tân ngữ của động từ.',
        example: { english: 'He drove the car carefully along the icy road.', vietnamese: 'Anh ấy đã lái xe một cách cẩn thận dọc theo con đường băng tuyết.' }
      },
      {
        context: 'Bổ nghĩa cho tính từ (Degree)',
        explanation: 'Đứng ngay trước tính từ để tăng hoặc giảm mức độ miêu tả.',
        example: { english: 'The examination was unexpectedly difficult.', vietnamese: 'Kỳ thi khó một cách bất ngờ.' }
      },
      {
        context: 'Trạng từ bình luận bổ nghĩa cho cả câu',
        explanation: 'Đứng đầu câu để thể hiện thái độ hoặc đánh giá của người nói.',
        example: { english: 'Fortunately, nobody was injured in the collision.', vietnamese: 'May mắn thay, không có ai bị thương trong vụ va chạm.' }
      }
    ],
    examples: [
      { english: 'She speaks English remarkably fluently.', vietnamese: 'Cô ấy nói tiếng Anh lưu loát một cách đáng kinh ngạc.', note: 'Remarkably (mức độ) bổ nghĩa cho fluently (cách thức).' },
      { english: 'He works hard to provide for his extended family.', vietnamese: 'Anh ấy làm việc chăm chỉ để chu cấp cho đại gia đình.', note: 'Hard là trạng từ chỉ sự chăm chỉ (không dùng hardly).' },
      { english: 'She is experienced enough to lead this international project.', vietnamese: 'Cô ấy đủ kinh nghiệm để dẫn dắt dự án quốc tế này.', note: 'Enough đứng sau tính từ experienced.' }
    ],
    importantNotes: [
      'Không thêm -ly vào các từ vốn dĩ là tính từ: friendly, lovely, lonely, silly, ugly. Muốn chuyển sang trạng từ phải dùng cụm: in a friendly manner / in a friendly way.',
      'Phân biệt: Hard (chăm chỉ/vất vả) vs Hardly (hầu như không). Ví dụ: He works hard (anh ấy làm việc chăm chỉ) KHÁC He hardly works (anh ấy hầu như chẳng làm gì).',
      'Phân biệt: Late (muộn/trễ) vs Lately (gần đây).',
      'Không dùng trạng từ đứng giữa động từ và tân ngữ trực tiếp (Sai: She speaks fluently English; Đúng: She speaks English fluently).'
    ],
    comparison: {
      title: 'Phân biệt Hard vs Hardly & Late vs Lately',
      points: [
        { concept: 'Hard (Trạng từ)', difference: 'Nỗ lực, chăm chỉ, vất vả: study hard, work hard.' },
        { concept: 'Hardly (Trạng từ)', difference: 'Hầu như không (mang nghĩa phủ định): I can hardly hear you.' },
        { concept: 'Late (Trạng từ)', difference: 'Đến muộn, trễ giờ: arrive late.' },
        { concept: 'Lately (Trạng từ)', difference: 'Dạo gần đây (thường dùng trong thì hiện tại hoàn thành): I haven\'t seen him lately.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp công sở: Nhận xét tiến độ công việc',
      dialogueOrSentences: [
        { speaker: 'Giám đốc', text: 'How is the new marketing campaign going?', translation: 'Chiến dịch tiếp thị mới đang tiến triển thế nào rồi?' },
        { speaker: 'Trưởng nhóm', text: 'It is progressing extremely well. Our team has worked really hard.', translation: 'Chiến dịch đang tiến triển cực kỳ tốt. Đội ngũ chúng em đã làm việc thực sự chăm chỉ.' },
        { speaker: 'Giám đốc', text: 'Excellent! Hopefully, we will reach our target soon.', translation: 'Xuất sắc! Hy vọng chúng ta sẽ sớm đạt mục tiêu.' }
      ]
    },
    summaryPoints: [
      'Trạng từ bổ nghĩa cho động từ, tính từ, trạng từ khác hoặc toàn bộ câu.',
      'Trạng từ tần suất đứng trước V thường, sau To Be, giữa trợ động từ và V chính.',
      'Enough đứng sau Adj/Adv nhưng đứng trước Danh từ.',
      'Ghi nhớ các ngoại lệ: fast, hard, late, early, well.',
      'Tránh nhầm lẫn các cặp từ: hard vs hardly, late vs lately.'
    ],
    exercises: [
      {
        id: 'adv-mc-1',
        type: 'multiple-choice',
        prompt: 'The young violinist performed the classical concerto ___ on stage.',
        choices: ['beautifully', 'beautiful', 'beauty', 'more beautiful'],
        correctAnswers: ['beautifully'],
        explanation: 'Performed là động từ thường nên cần trạng từ cách thức beautifully để bổ nghĩa.',
        translation: 'Nghệ sĩ vĩ cầm trẻ đã trình diễn bản hòa tấu cổ điển một cách tuyệt đẹp trên sân khấu.',
        level: 'Cơ bản'
      },
      {
        id: 'adv-mc-2',
        type: 'multiple-choice',
        prompt: 'He was so exhausted from the marathon that he could ___ keep his eyes open.',
        choices: ['hardly', 'hard', 'hardy', 'hardest'],
        correctAnswers: ['hardly'],
        explanation: 'Hardly mang nghĩa \'hầu như không\': anh ấy hầu như không thể mở nổi mắt.',
        translation: 'Anh ấy kiệt sức sau cuộc chạy marathon đến mức hầu như không thể mở nổi mắt.',
        level: 'Trung bình'
      },
      {
        id: 'adv-mc-3',
        type: 'multiple-choice',
        prompt: 'She is not qualified ___ to manage such a complex financial portfolio.',
        choices: ['enough', 'too', 'very', 'so'],
        correctAnswers: ['enough'],
        explanation: 'Tính từ qualified đứng trước enough (qualified enough).',
        translation: 'Cô ấy chưa đủ trình độ để quản lý một danh mục tài chính phức tạp như vậy.',
        level: 'Cơ bản'
      },
      {
        id: 'adv-mc-4',
        type: 'multiple-choice',
        prompt: 'The manager welcomed the international delegates in a very ___ manner.',
        choices: ['friendly', 'friendlily', 'friend', 'friendship'],
        correctAnswers: ['friendly'],
        explanation: 'Friendly là tính từ, cấu trúc \'in a friendly manner\' dùng để diễn đạt ý trạng từ (một cách thân thiện).',
        translation: 'Người quản lý đã chào đón các đại biểu quốc tế theo một cách thức rất thân thiện.',
        level: 'Trung bình'
      },
      {
        id: 'adv-mc-5',
        type: 'multiple-choice',
        prompt: 'Have you visited any interesting museums in the capital city ___?',
        choices: ['lately', 'late', 'later', 'latest'],
        correctAnswers: ['lately'],
        explanation: 'Lately mang nghĩa là \'dạo gần đây\', thường dùng trong thì hiện tại hoàn thành.',
        translation: 'Dạo gần đây bạn có ghé thăm bảo tàng thú vị nào ở thủ đô không?',
        level: 'Cơ bản'
      },
      {
        id: 'adv-fb-1',
        type: 'fill-blank',
        prompt: 'The athlete ran extremely ___ and broke the regional sprint record. (fast)',
        hint: 'Trạng từ của fast vẫn là fast.',
        correctAnswers: ['fast'],
        explanation: 'Fast vừa là tính từ vừa là trạng từ, không có từ fastly.',
        translation: 'Vận động viên đã chạy cực kỳ nhanh và phá kỷ lục chạy nước rút của khu vực.',
        level: 'Cơ bản'
      },
      {
        id: 'adv-fb-2',
        type: 'fill-blank',
        prompt: 'She speaks French very ___, having lived in Paris for over five years. (good)',
        hint: 'Trạng từ của good là well.',
        correctAnswers: ['well'],
        explanation: 'Trạng từ cách thức của tính từ good là well.',
        translation: 'Cô ấy nói tiếng Pháp rất giỏi sau khi đã sống ở Paris hơn năm năm.',
        level: 'Cơ bản'
      },
      {
        id: 'adv-fb-3',
        type: 'fill-blank',
        prompt: 'Students ___ complete their assignments on time before midnight. (usually)',
        hint: 'Trạng từ tần suất đứng trước động từ thường complete.',
        correctAnswers: ['usually'],
        explanation: 'Trạng từ tần suất usually đứng trước động từ thường complete.',
        translation: 'Các sinh viên thường hoàn thành bài tập đúng hạn trước nửa đêm.',
        level: 'Cơ bản'
      },
      {
        id: 'adv-fb-4',
        type: 'fill-blank',
        prompt: 'The weather was ___ cold, so we decided to postpone our mountain hike. (bitter)',
        hint: 'Thêm đuôi -ly vào tính từ để tạo trạng từ chỉ mức độ.',
        correctAnswers: ['bitterly'],
        explanation: 'Bitterly cold là cụm phổ biến chỉ cái lạnh tê tái buốt giá.',
        translation: 'Thời tiết lạnh buốt giá, nên chúng tôi đã quyết định hoãn chuyến đi bộ leo núi.',
        level: 'Trung bình'
      },
      {
        id: 'adv-fb-5',
        type: 'fill-blank',
        prompt: 'He works very ___ because he wants to earn a promotion this year. (hard/hardly)',
        hint: 'Chăm chỉ nỗ lực dùng hard.',
        correctAnswers: ['hard'],
        explanation: 'Work hard là làm việc chăm chỉ, nỗ lực.',
        translation: 'Anh ấy làm việc rất chăm chỉ vì anh ấy muốn được thăng chức trong năm nay.',
        level: 'Cơ bản'
      },
      {
        id: 'adv-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She speaks fluently English because she studied abroad in Australia."',
        hint: 'Không đặt trạng từ giữa động từ speaks và tân ngữ English.',
        correctAnswers: [
          'She speaks English fluently because she studied abroad in Australia.'
        ],
        explanation: 'Trạng từ cách thức không được chen vào giữa động từ và tân ngữ trực tiếp (speaks English fluently).',
        translation: 'Cô ấy nói tiếng Anh lưu loát vì cô ấy đã từng đi du học ở Úc.',
        level: 'Cơ bản'
      },
      {
        id: 'adv-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "He was driving too fastly on the slippery highway."',
        hint: 'Không có từ fastly trong tiếng Anh.',
        correctAnswers: [
          'He was driving too fast on the slippery highway.'
        ],
        explanation: 'Fast vừa là tính từ vừa là trạng từ, không tồn tại từ fastly.',
        translation: 'Anh ấy đã lái xe quá nhanh trên đường cao tốc trơn trượt.',
        level: 'Cơ bản'
      },
      {
        id: 'adv-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "He studied hardly for the entrance exam, but he failed."',
        hint: 'Học chăm chỉ phải dùng hard chứ không phải hardly (hầu như không).',
        correctAnswers: [
          'He studied hard for the entrance exam, but he failed.'
        ],
        explanation: 'Study hard là học chăm chỉ. Hardly mang nghĩa phủ định (hầu như không học).',
        translation: 'Anh ấy đã học tập chăm chỉ cho kỳ thi tuyển sinh nhưng đã trượt.',
        level: 'Trung bình'
      },
      {
        id: 'adv-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She is always to school on time."',
        hint: 'Thiếu động từ to be hoặc động từ thường (She is always at school / She always goes to school).',
        correctAnswers: [
          'She always goes to school on time.',
          'She is always at school on time.'
        ],
        explanation: 'Always là trạng từ tần suất không thể thay thế động từ vị ngữ của câu.',
        translation: 'Cô ấy luôn luôn đến trường đúng giờ.',
        level: 'Trung bình'
      },
      {
        id: 'adv-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "He arrived lately at the airport and missed his scheduled flight."',
        hint: 'Đến muộn là arrive late (lately là dạo gần đây).',
        correctAnswers: [
          'He arrived late at the airport and missed his scheduled flight.'
        ],
        explanation: 'Arrive late là đến trễ/muộn; lately mang nghĩa gần đây (thời gian).',
        translation: 'Anh ấy đã đến sân bay muộn và lỡ chuyến bay theo lịch trình của mình.',
        level: 'Trung bình'
      },
      {
        id: 'adv-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng trạng từ "carefully" thay thế cho "with great care": "The surgeon examined the patient\'s X-ray with great care."',
        hint: 'The surgeon examined the patient\'s X-ray carefully.',
        correctAnswers: [
          'The surgeon examined the patient\'s X-ray carefully.'
        ],
        explanation: 'Carefully thay thế cho cụm with great care để chỉ cách thức hành động.',
        translation: 'Bác sĩ phẫu thuật đã kiểm tra phim chụp X-quang của bệnh nhân một cách cẩn thận.',
        level: 'Cơ bản'
      },
      {
        id: 'adv-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sử dụng trạng từ "enough": "He is very strong. He can lift this heavy iron box."',
        hint: 'He is strong enough to lift this heavy iron box.',
        correctAnswers: [
          'He is strong enough to lift this heavy iron box.'
        ],
        explanation: 'Cấu trúc: Adj + enough + to V (strong enough to lift...).',
        translation: 'Anh ấy đủ khỏe để nhấc chiếc hộp sắt nặng này.',
        level: 'Cơ bản'
      },
      {
        id: 'adv-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng trạng từ liên kết đầu câu "Fortunately": "It was lucky that the fire brigade arrived before the fire spread."',
        hint: 'Fortunately, the fire brigade arrived before the fire spread.',
        correctAnswers: [
          'Fortunately, the fire brigade arrived before the fire spread.'
        ],
        explanation: 'Fortunately đứng đầu câu làm trạng từ bình luận đánh giá toàn bộ sự việc.',
        translation: 'May mắn thay, đội cứu hỏa đã đến trước khi ngọn lửa lan rộng.',
        level: 'Trung bình'
      },
      {
        id: 'adv-sc-4',
        type: 'sentence-construction',
        prompt: 'Chuyển đổi câu dùng trạng từ chỉ tần suất "hardly ever": "He almost never eats fast food because of his strict diet."',
        hint: 'He hardly ever eats fast food because of his strict diet.',
        correctAnswers: [
          'He hardly ever eats fast food because of his strict diet.'
        ],
        explanation: 'Hardly ever đồng nghĩa với almost never.',
        translation: 'Anh ấy hầu như không bao giờ ăn thức ăn nhanh vì chế độ ăn kiêng nghiêm ngặt.',
        level: 'Nâng cao'
      },
      {
        id: 'adv-sc-5',
        type: 'sentence-construction',
        prompt: 'Đặt một câu hoàn chỉnh với trạng từ "fluently" bổ nghĩa cho kỹ năng nói ngoại ngữ của bạn.',
        hint: 'Mẫu: She speaks two languages fluently.',
        correctAnswers: [
          'She speaks two foreign languages fluently.',
          'He speaks English and French fluently.',
          'I want to speak English fluently.'
        ],
        explanation: 'Fluently đứng sau cụm tân ngữ ngôn ngữ để miêu tả cách thức nói lưu loát.',
        translation: 'Cô ấy nói hai ngoại ngữ một cách lưu loát.',
        level: 'Cơ bản'
      }
    ]
  }
]
