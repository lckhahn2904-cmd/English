import type { GrammarLessonDetail } from '../types'

export const cat5Part2Lessons: GrammarLessonDetail[] = [
  // 24. WISHES & SUBJUNCTIVE
  {
    id: 'wishes-subjunctive',
    title: 'Wishes & Subjunctive',
    vietnameseTitle: 'Câu ước và câu giả định',
    category: 'Các dạng câu đặc biệt',
    categoryId: 'special-sentences',
    level: 'B1–B2',
    summary: 'Câu ước với Wish và If only ở tương lai, hiện tại và quá khứ; câu giả định hiện tại (Present Subjunctive) với động từ và tính từ chỉ yêu cầu/khuyên nhủ.',
    overview: 'Câu ước (Wishes) và Thức giả định (Subjunctive) là các cấu trúc diễn tả những điều không có thật, những mong ước, yêu cầu, đề xuất hoặc giả định mang tính trang trọng. Thành thạo thức giả định là thước đo của trình độ tiếng Anh học thuật và nâng cao.',
    foundation: 'Bản chất của câu ước và câu giả định là "lùi một bước so với thực tế". Đối với Wish: ước điều trái hiện tại lùi về quá khứ đơn; ước điều trái quá khứ lùi về quá khứ hoàn thành. Đối với thức giả định (Subjunctive): động từ trong mệnh đề that LUÔN Ở DẠNG NGUYÊN MẪU KHÔNG TO (bare infinitive) với mọi ngôi chủ ngữ.',
    classification: [
      {
        title: 'Câu ước ở Tương lai (Future Wish)',
        description: 'S + wish + S + WOULD / COULD + V1. Mong muốn ai đó thay đổi hành vi hoặc mong điều gì tốt đẹp xảy ra trong tương lai.'
      },
      {
        title: 'Câu ước ở Hiện tại (Present Wish)',
        description: 'S + wish + S + V2/ed (To be dùng WERE cho mọi ngôi). Ước một điều trái ngược với thực tế đang diễn ra ở hiện tại.'
      },
      {
        title: 'Câu ước ở Quá khứ (Past Wish / Regret)',
        description: 'S + wish + S + HAD + V3/ed. Bày tỏ sự nuối tiếc về một sự việc đã xảy ra hoặc không xảy ra trong quá khứ.'
      },
      {
        title: 'Thức giả định với Động từ (Verbs of demanding/suggesting)',
        description: 'Demand, insist, recommend, suggest, propose, request, order, advise + THAT + S + (SHOULD) + V-inf.'
      },
      {
        title: 'Thức giả định với Tính từ (Adjectives of urgency/importance)',
        description: 'It is essential / crucial / vital / important / mandatory / necessary + THAT + S + (SHOULD) + V-inf.'
      }
    ],
    formulas: [
      {
        title: 'Công thức 3 cấp độ của WISH / IF ONLY',
        formula: 'Tương lai: S + wish + S + would / could + V1 (I wish it would stop raining)\nHiện tại: S + wish + S + V2/ed (were) (I wish I were taller)\nQuá khứ: S + wish + S + had + V3 (I wish I had studied harder)',
        note: 'If only mang nghĩa giống Wish nhưng có sắc thái cảm xúc mãnh liệt hơn: If only I had known!'
      },
      {
        title: 'Công thức Thức giả định hiện tại (Present Subjunctive)',
        formula: 'S + suggest / demand / insist / recommend + THAT + S + (should) + V_nguyên mẫu\nIt is essential / vital / crucial + THAT + S + (should) + V_nguyên mẫu',
        note: 'Động từ to be ở thể giả định luôn là \'be\': The doctor recommended that he BE hospitalized immediately.'
      }
    ],
    usage: [
      {
        context: 'Phàn nàn về hành vi gây khó chịu của người khác với Wish + would',
        explanation: 'Diễn tả sự bực mình và mong người khác ngừng làm việc gì.',
        example: { english: 'I wish you would stop tapping your pen during the exam.', vietnamese: 'Tôi ước gì bạn ngừng gõ bút trong lúc làm bài thi.' }
      },
      {
        context: 'Đưa ra yêu cầu có tính pháp lý hoặc tính khẩn cấp cao trong công việc',
        explanation: 'Dùng thức giả định với mandatory, crucial, essential.',
        example: { english: 'It is mandatory that all visitors wear a security identification badge.', vietnamese: 'Điều bắt buộc là mọi khách đến thăm phải đeo thẻ nhận diện an ninh.' }
      },
      {
        context: 'Thể hiện sự hối tiếc sâu sắc trong quá khứ',
        explanation: 'Dùng If only + past perfect.',
        example: { english: 'If only we had backed up the database before the cyberattack.', vietnamese: 'Giá như chúng tôi đã sao lưu cơ sở dữ liệu trước cuộc tấn công mạng.' }
      }
    ],
    examples: [
      { english: 'I wish I had enough time to travel around South America.', vietnamese: 'Tôi ước gì mình có đủ thời gian để đi du lịch khắp Nam Mỹ.', note: 'Ước trái hiện tại (had).' },
      { english: 'The committee demanded that the chairperson resign immediately.', vietnamese: 'Ủy ban đã yêu cầu chủ tịch phải từ chức ngay lập tức.', note: 'Thức giả định: resign ở dạng nguyên mẫu không chia -s dù chủ ngữ là ngôi thứ 3.' },
      { english: 'It is crucial that every employee be familiar with emergency safety protocols.', vietnamese: 'Điều cốt yếu là mọi nhân viên phải nắm vững các quy trình an toàn khẩn cấp.', note: 'To be ở thể giả định là \'be\'.' }
    ],
    importantNotes: [
      'Không dùng wish + would cho chính bản thân mình (Sai: I wish I would stop smoking; Đúng: I wish I could stop smoking).',
      'Trong thức giả định tiếng Anh-Mỹ, động từ luôn ở dạng nguyên mẫu không to (He recommended that she submit the report); tiếng Anh-Anh có thể thêm should (that she should submit).',
      'Phân biệt Wish (ước điều không có thật) vs Hope (hy vọng điều có thể thành hiện thực ở tương lai: I hope you pass the test).',
      'Cấu trúc It\'s (high) time: It\'s high time + S + V2/ed: Đã đến lúc ai đó phải làm gì (It\'s high time you went to bed).'
    ],
    comparison: {
      title: 'Phân biệt Wish vs Hope',
      points: [
        { concept: 'Wish (Ước)', difference: 'Diễn tả điều KHÔNG THỂ XẢY RA hoặc TRÁI NGƯỢC THỰC TẾ: I wish I had wings.' },
        { concept: 'Hope (Hy vọng)', difference: 'Diễn tả điều CÓ THỂ XẢY RA ở hiện tại hoặc tương lai: I hope the weather is good tomorrow.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp y tế: Bác sĩ đưa ra yêu cầu khẩn cấp cho bệnh nhân',
      dialogueOrSentences: [
        { speaker: 'Bác sĩ', text: 'It is vital that you take this medication strictly twice a day.', translation: 'Điều quan trọng sống còn là bác phải uống loại thuốc này nghiêm ngặt hai lần mỗi ngày.' },
        { speaker: 'Bệnh nhân', text: 'I wish I had visited the hospital sooner when the symptoms first appeared.', translation: 'Tôi ước gì mình đã đến bệnh viện sớm hơn khi các triệu chứng mới xuất hiện.' },
        { speaker: 'Bác sĩ', text: 'Don\'t worry. We will ensure that you receive the best possible medical care.', translation: 'Bác đừng lo. Chúng tôi sẽ đảm bảo rằng bác nhận được sự chăm sóc y tế tốt nhất có thể.' }
      ]
    },
    summaryPoints: [
      'Wish tương lai: would / could + V1; Wish hiện tại: V2/were; Wish quá khứ: had + V3.',
      'If only mang cảm xúc mạnh mẽ hơn Wish.',
      'Thức giả định với demand, insist, suggest, recommend: that + S + V-inf.',
      'Thức giả định với essential, vital, crucial, mandatory: that + S + V-inf (to be dùng be).',
      'It\'s high time + S + V2/ed: Đã đến lúc phải làm gì.'
    ],
    exercises: [
      {
        id: 'ws-mc-1',
        type: 'multiple-choice',
        prompt: 'The safety inspector insisted that the chemical plant ___ operations until further notice.',
        choices: ['suspend', 'suspends', 'suspended', 'must suspend'],
        correctAnswers: ['suspend'],
        explanation: 'Thức giả định sau động từ insisted that: động từ suspend giữ ở dạng nguyên mẫu không chia dù chủ ngữ là the chemical plant.',
        translation: 'Thanh tra an toàn đã khăng khăng yêu cầu nhà máy hóa chất phải tạm ngừng hoạt động cho đến khi có thông báo mới.',
        level: 'Nâng cao'
      },
      {
        id: 'ws-mc-2',
        type: 'multiple-choice',
        prompt: 'It is essential that each participant ___ present at the opening ceremony on time.',
        choices: ['be', 'is', 'are', 'was'],
        correctAnswers: ['be'],
        explanation: 'Thức giả định với It is essential that: động từ to be luôn giữ dạng nguyên mẫu là \'be\' cho mọi ngôi.',
        translation: 'Điều thiết yếu là mỗi người tham gia phải có mặt đúng giờ tại lễ khai mạc.',
        level: 'Nâng cao'
      },
      {
        id: 'ws-mc-3',
        type: 'multiple-choice',
        prompt: 'I wish I ___ yesterday\'s crucial board meeting; I missed several critical announcements.',
        choices: [
          'hadn\'t missed',
          'didn\'t miss',
          'haven\'t missed',
          'wouldn\'t miss'
        ],
        correctAnswers: ['hadn\'t missed'],
        explanation: 'Ước điều nuối tiếc trong quá khứ (yesterday) dùng quá khứ hoàn thành: hadn\'t missed.',
        translation: 'Tôi ước gì mình đã không bỏ lỡ cuộc họp hội đồng quan trọng ngày hôm qua; tôi đã bỏ lỡ vài thông báo sống còn.',
        level: 'Trung bình'
      },
      {
        id: 'ws-mc-4',
        type: 'multiple-choice',
        prompt: 'It\'s high time you ___ serious preparation for your upcoming graduation thesis.',
        choices: ['started', 'start', 'have started', 'would start'],
        correctAnswers: ['started'],
        explanation: 'Cấu trúc It\'s high time + S + V2/ed (started) biểu thị đã đến lúc phải làm gì.',
        translation: 'Đã đến lúc bạn phải bắt đầu chuẩn bị nghiêm túc cho luận văn tốt nghiệp sắp tới của mình rồi.',
        level: 'Trung bình'
      },
      {
        id: 'ws-mc-5',
        type: 'multiple-choice',
        prompt: 'I wish the neighbors ___ making so much noise late at night.',
        choices: ['would stop', 'will stop', 'stopped', 'stop'],
        correctAnswers: ['would stop'],
        explanation: 'Phàn nàn về hành vi gây khó chịu của người khác và mong họ thay đổi dùng wish + would + V1.',
        translation: 'Tôi ước gì những người hàng xóm ngừng làm ồn ào vào đêm muộn như vậy.',
        level: 'Cơ bản'
      },
      {
        id: 'ws-fb-1',
        type: 'fill-blank',
        prompt: 'I wish I ___ fluent in four languages so that I could work as an international diplomat. (be)',
        hint: 'Ước trái thực tế ở hiện tại dùng were.',
        correctAnswers: ['were', 'was'],
        explanation: 'Câu ước trái hiện tại với động từ to be dùng were.',
        translation: 'Tôi ước gì mình thông thạo bốn thứ tiếng để có thể làm việc như một nhà ngoại giao quốc tế.',
        level: 'Cơ bản'
      },
      {
        id: 'ws-fb-2',
        type: 'fill-blank',
        prompt: 'The doctor recommended that she ___ two weeks off work to recover from surgery. (take)',
        hint: 'Thức giả định động từ ở dạng nguyên mẫu không chia.',
        correctAnswers: ['take'],
        explanation: 'Thức giả định sau recommended that: take ở dạng nguyên mẫu không chia -s.',
        translation: 'Bác sĩ đã khuyên cô ấy nên nghỉ làm hai tuần để hồi phục sau ca phẫu thuật.',
        level: 'Trung bình'
      },
      {
        id: 'ws-fb-3',
        type: 'fill-blank',
        prompt: 'If only we ___ invested in clean energy ten years ago! (have)',
        hint: 'Ước tiếc nuối quá khứ dùng had invested.',
        correctAnswers: ['had'],
        explanation: 'If only ước về quá khứ mười năm trước dùng quá khứ hoàn thành had invested.',
        translation: 'Giá như mười năm trước chúng ta đã đầu tư vào năng lượng sạch!',
        level: 'Cơ bản'
      },
      {
        id: 'ws-fb-4',
        type: 'fill-blank',
        prompt: 'It is crucial that the laboratory equipment ___ sterilized after every experiment. (be)',
        hint: 'Bị động giả định: be + V3.',
        correctAnswers: ['be'],
        explanation: 'Thức giả định sau It is crucial that: be sterilized.',
        translation: 'Điều cốt yếu là thiết bị phòng thí nghiệm phải được khử trùng sau mỗi thí nghiệm.',
        level: 'Nâng cao'
      },
      {
        id: 'ws-fb-5',
        type: 'fill-blank',
        prompt: 'I wish my brother ___ play his drums when I am trying to study. (would not/will not)',
        hint: 'Phàn nàn về hành vi dùng would not.',
        correctAnswers: ['would not', 'wouldn\'t'],
        explanation: 'Wish + would not để phàn nàn về hành vi gây phiền toái.',
        translation: 'Tôi ước gì em trai tôi không chơi trống khi tôi đang cố gắng học bài.',
        level: 'Cơ bản'
      },
      {
        id: 'ws-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu giả định: "The judge ordered that the defendant pays a hefty fine."',
        hint: 'Trong thức giả định sau ordered that, động từ phải là pay (nguyên mẫu không chia -s).',
        correctAnswers: [
          'The judge ordered that the defendant pay a hefty fine.'
        ],
        explanation: 'Thức giả định sau ordered that yêu cầu động từ nguyên mẫu pay (không chia pays).',
        translation: 'Thẩm phán đã ra lệnh bị cáo phải nộp một khoản tiền phạt nặng.',
        level: 'Trung bình'
      },
      {
        id: 'ws-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "I wish I would have more free time to spend with my family."',
        hint: 'Không dùng wish + would cho chính mình khi ước về hiện tại; dùng wish I had.',
        correctAnswers: [
          'I wish I had more free time to spend with my family.'
        ],
        explanation: 'Ước cho bản thân về một điều trái hiện tại dùng quá khứ đơn had, không dùng would have.',
        translation: 'Tôi ước gì mình có nhiều thời gian rảnh hơn để dành cho gia đình.',
        level: 'Cơ bản'
      },
      {
        id: 'ws-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "It is mandatory that every employee is vaccinated before entering the plant."',
        hint: 'Sau It is mandatory that, động từ to be ở dạng giả định là be.',
        correctAnswers: [
          'It is mandatory that every employee be vaccinated before entering the plant.'
        ],
        explanation: 'Thức giả định với mandatory that đòi hỏi động từ to be là be (be vaccinated), không dùng is.',
        translation: 'Điều bắt buộc là mọi nhân viên phải được tiêm phòng trước khi vào nhà máy.',
        level: 'Nâng cao'
      },
      {
        id: 'ws-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "It is high time we start taking concrete action against climate change."',
        hint: 'Sau It is high time + S + V2/ed (started).',
        correctAnswers: [
          'It is high time we started taking concrete action against climate change.'
        ],
        explanation: 'Cấu trúc It is high time đòi hỏi thì quá khứ đơn: started.',
        translation: 'Đã đến lúc chúng ta phải bắt đầu hành động cụ thể chống lại biến đổi khí hậu.',
        level: 'Trung bình'
      },
      {
        id: 'ws-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "I wish I didn\'t buy that overpriced smartphone last month."',
        hint: 'Sự việc xảy ra trong quá khứ (last month) phải dùng quá khứ hoàn thành hadn\'t bought.',
        correctAnswers: [
          'I wish I hadn\'t bought that overpriced smartphone last month.'
        ],
        explanation: 'Ước tiếc nuối về sự việc trong quá khứ (last month) phải lùi về quá khứ hoàn thành: hadn\'t bought.',
        translation: 'Tôi ước gì tháng trước mình đã không mua chiếc điện thoại thông minh bị đội giá quá đắt đó.',
        level: 'Cơ bản'
      },
      {
        id: 'ws-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết câu ước với "I wish" cho tình huống thực tế sau: "I am not tall enough to play professional basketball."',
        hint: 'I wish I were taller. / I wish I were tall enough to play professional basketball.',
        correctAnswers: [
          'I wish I were taller.',
          'I wish I were tall enough to play professional basketball.',
          'I wish I was tall enough to play professional basketball.'
        ],
        explanation: 'Ước trái hiện tại dùng were/was.',
        translation: 'Tôi ước gì mình cao hơn để chơi bóng rổ chuyên nghiệp.',
        level: 'Cơ bản'
      },
      {
        id: 'ws-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết câu ước tiếc nuối với "If only" cho sự việc quá khứ: "I didn\'t take an umbrella, so I got completely drenched."',
        hint: 'If only I had taken an umbrella.',
        correctAnswers: [
          'If only I had taken an umbrella.',
          'If only I had remembered to take an umbrella.'
        ],
        explanation: 'If only + had taken chỉ sự tiếc nuối trong quá khứ.',
        translation: 'Giá như tôi đã mang theo một chiếc ô.',
        level: 'Cơ bản'
      },
      {
        id: 'ws-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng thức giả định với "recommend": "The nutritionist advised him to reduce sugar intake."',
        hint: 'The nutritionist recommended that he reduce his sugar intake.',
        correctAnswers: [
          'The nutritionist recommended that he reduce his sugar intake.',
          'The nutritionist recommended that he reduce sugar intake.'
        ],
        explanation: 'Thức giả định: recommended that he reduce (nguyên mẫu).',
        translation: 'Chuyên gia dinh dưỡng đã khuyên anh ấy nên cắt giảm lượng đường nạp vào.',
        level: 'Trung bình'
      },
      {
        id: 'ws-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng cấu trúc "It\'s high time": "We really ought to replace these outdated office computers."',
        hint: 'It\'s high time we replaced these outdated office computers.',
        correctAnswers: [
          'It\'s high time we replaced these outdated office computers.',
          'It is high time we replaced these outdated office computers.'
        ],
        explanation: 'It\'s high time + S + V2/ed (replaced).',
        translation: 'Đã đến lúc chúng ta phải thay thế những chiếc máy tính văn phòng lỗi thời này rồi.',
        level: 'Trung bình'
      },
      {
        id: 'ws-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết một câu giả định với tính từ "vital" nhấn mạnh rằng hợp đồng phải được ký kết trước 5 giờ chiều.',
        hint: 'It is vital that the contract be signed before 5 p.m.',
        correctAnswers: [
          'It is vital that the contract be signed before 5 p.m.',
          'It is vital that the contract is signed before 5 p.m.'
        ],
        explanation: 'It is vital that + S + be + V3 (be signed).',
        translation: 'Điều quan trọng sống còn là hợp đồng phải được ký trước 5 giờ chiều.',
        level: 'Nâng cao'
      }
    ]
  },

  // 25. INVERSION
  {
    id: 'inversion',
    title: 'Inversion',
    vietnameseTitle: 'Đảo ngữ',
    category: 'Các dạng câu đặc biệt',
    categoryId: 'special-sentences',
    level: 'B2',
    summary: 'Đảo trợ động từ lên trước chủ ngữ để nhấn mạnh; đảo ngữ với phó từ phủ định, Only, Not only, So/Such và cụm giới từ chỉ nơi chốn.',
    overview: 'Đảo ngữ (Inversion) là hiện tượng đưa trợ động từ, động từ to be hoặc động từ chính lên TRƯỚC chủ ngữ. Đảo ngữ được sử dụng như một thủ pháp tu từ nghệ thuật giúp câu văn trở nên trang trọng, kịch tính, hùng hồn và tạo ấn tượng nhấn mạnh mạnh mẽ trong văn viết học thuật và diễn thuyết.',
    foundation: 'Phần lớn các cấu trúc đảo ngữ trong tiếng Anh tuân theo cấu trúc giống như một câu hỏi: [Cụm từ nhấn mạnh đầu câu] + [Trợ động từ] + [Chủ ngữ] + [Động từ chính]. Tuyệt đối lưu ý: dù có trật tự giống câu hỏi nhưng câu đảo ngữ vẫn là CÂU TRẦN THUẬT và kết thúc bằng DẤU CHẤM (.).',
    classification: [
      {
        title: 'Đảo ngữ với Phó từ phủ định / Bán phủ định (Negative Adverbs)',
        description: 'Never, Rarely, Seldom, Scarcely, Hardly...when, Barely, No sooner...than, At no time, Under no circumstances, In no way, Nowhere.'
      },
      {
        title: 'Đảo ngữ với ONLY (Chỉ khi / Chỉ sau khi)',
        description: 'Only after, Only when, Only by, Only then, Only if. LƯU Ý: Nếu sau Only là một mệnh đề phụ, sự đảo ngữ CHỈ XẢY RA Ở MỆNH ĐỀ CHÍNH.'
      },
      {
        title: 'Đảo ngữ với NOT ONLY... BUT ALSO',
        description: 'Not only + Trợ động từ + S + V, but S + also + V. (Not only did he apologize, but he also paid for the damages).'
      },
      {
        title: 'Đảo ngữ với SO... THAT & SUCH... THAT',
        description: 'So + Adj/Adv + Trợ động từ + S + that... / Such + be + Noun + that...'
      },
      {
        title: 'Đảo ngữ toàn bộ với Cụm giới từ chỉ nơi chốn (Full Inversion)',
        description: 'Cụm giới từ nơi chốn + ĐỘNG TỪ CHÍNH + CHỦ NGỮ (không mượn do/does/did). Ví dụ: On the hilltop stood an ancient fortress.'
      }
    ],
    formulas: [
      {
        title: 'Công thức Đảo ngữ với Cặp liên từ thời gian',
        formula: 'HARDLY / SCARCELY + had + S + V3 + WHEN + S + V2\nNO SOONER + had + S + V3 + THAN + S + V2',
        note: 'Nghĩa là: "Vừa mới... thì đã...". Chú ý Hardly đi với WHEN; No sooner đi với THAN.'
      },
      {
        title: 'Công thức Đảo ngữ với ONLY',
        formula: 'Only by + V-ing + Trợ động từ + S + V1\nOnly after / when + Clause phụ, + TRỢ ĐỘNG TỪ + S + V_chính',
        note: 'Chỉ đảo ở mệnh đề chính: Only when I arrived home did I realize I had lost my keys.'
      },
      {
        title: 'Công thức Đảo ngữ với SO & SUCH',
        formula: 'So + Adj + be + S + that + Clause (So cold was the night that...)\nSuch + be + Cụm danh từ + that + Clause (Such was the force of the wind that...)',
        note: 'Dùng để nhấn mạnh mức độ dữ dội của sự việc.'
      }
    ],
    usage: [
      {
        context: 'Nhấn mạnh sự cấm đoán tuyệt đối trong văn bản pháp lý/quy chế',
        explanation: 'Dùng Under no circumstances để thể hiện sự nghiêm cấm.',
        example: { english: 'Under no circumstances should confidential files be shared outside the firm.', vietnamese: 'Trong bất kỳ hoàn cảnh nào cũng không được chia sẻ các tệp tin mật ra ngoài công ty.' }
      },
      {
        context: 'Diễn tả hai sự việc nối tiếp nhau gần như tức thì với No sooner...than',
        explanation: 'Nhấn mạnh tốc độ diễn ra của chuỗi sự kiện.',
        example: { english: 'No sooner had she walked into the room than the phone rang.', vietnamese: 'Cô ấy vừa mới bước vào phòng thì chuông điện thoại đã reo.' }
      },
      {
        context: 'Miêu tả văn học ấn tượng với Đảo ngữ toàn bộ',
        explanation: 'Đặt bối cảnh không gian lên đầu câu để tạo hình ảnh sinh động.',
        example: { english: 'Down the winding mountain road rushed a torrent of muddy water.', vietnamese: 'Dọc theo con đường núi quanh co chảy xiết một dòng nước bùn xối xả.' }
      }
    ],
    examples: [
      { english: 'Never before have I witnessed such an extraordinary solar eclipse.', vietnamese: 'Chưa bao giờ trước đây tôi chứng kiến một hiện tượng nhật thực phi thường đến thế.', note: 'Never before đảo have lên trước I.' },
      { english: 'Only by working together can we overcome this unprecedented crisis.', vietnamese: 'Chỉ bằng cách làm việc cùng nhau chúng ta mới có thể vượt qua cuộc khủng hoảng chưa từng có này.', note: 'Only by + V-ing đảo can lên trước we.' },
      { english: 'Rarely does she speak in public without extensive rehearsal.', vietnamese: 'Hiếm khi cô ấy phát biểu trước công chúng mà không có sự diễn tập kỹ lưỡng.', note: 'Rarely đảo does lên trước she.' }
    ],
    importantNotes: [
      'Đảo ngữ với Only when / Only after: KHÔNG ĐƯỢC đảo ở mệnh đề phụ ngay sau only; BẮT BUỘC phải đảo ở mệnh đề chính phía sau (Sai: Only when did I arrive, I realized; Đúng: Only when I arrived did I realize).',
      'Cặp liên từ: No sooner đi với THAN (không đi với when); Hardly/Scarcely đi với WHEN (không đi với than).',
      'Đảo ngữ toàn bộ (Full inversion) với cụm nơi chốn: KHÔNG dùng trợ động từ do/does/did mà đảo thẳng động từ chính (Sai: Down the hill did roll the ball; Đúng: Down the hill rolled the ball).',
      'Nếu chủ ngữ là ĐẠI TỪ NHÂN XƯNG (he, she, it, they), KHÔNG đảo toàn bộ (Away they ran, KHÔNG viết Away ran they).'
    ],
    comparison: {
      title: 'Phân biệt Partial Inversion (Đảo trợ động từ) vs Full Inversion (Đảo toàn bộ)',
      points: [
        { concept: 'Partial Inversion (Đảo trợ động từ)', difference: 'Dùng với từ phủ định, Only: Mượn trợ động từ đảo lên trước S (Never have I seen, Only then did I know).' },
        { concept: 'Full Inversion (Đảo toàn bộ)', difference: 'Dùng với trạng từ nơi chốn/chuyển động: Đảo thẳng động từ chính lên trước S danh từ (Here comes the bus; Under the tree sat an old man).' }
      ]
    },
    communicationApp: {
      situation: 'Diễn thuyết và thuyết trình trang trọng trước hội trường',
      dialogueOrSentences: [
        { speaker: 'Diễn giả', text: 'Never in the history of science has human ingenuity faced such profound opportunities.', translation: 'Chưa từng có lúc nào trong lịch sử khoa học mà trí tuệ con người lại đối mặt với những cơ hội sâu sắc đến thế.' },
        { speaker: 'Diễn giả', text: 'Not only must we innovate rapidly, but we must also safeguard ethical principles.', translation: 'Chúng ta không những phải đổi mới nhanh chóng mà còn phải gìn giữ các nguyên tắc đạo đức.' },
        { speaker: 'Diễn giả', text: 'Only through persistent collaboration will our shared vision become reality.', translation: 'Chỉ thông qua sự hợp tác kiên định thì tầm nhìn chung của chúng ta mới trở thành hiện thực.' }
      ]
    },
    summaryPoints: [
      'Đảo ngữ = Đưa trợ động từ lên trước chủ ngữ để nhấn mạnh.',
      'Phó từ phủ định đứng đầu câu: Never, Rarely, Seldom, Hardly, Little, At no time + Aux + S + V.',
      'No sooner had S V3 THAN... / Hardly had S V3 WHEN...',
      'Only after / when + clause, Aux + S + V (đảo ở mệnh đề chính).',
      'Đảo toàn bộ với nơi chốn: Giới từ nơi chốn + V chính + S (danh từ).'
    ],
    exercises: [
      {
        id: 'inv-mc-1',
        type: 'multiple-choice',
        prompt: 'Hardly ___ the presentation when the fire alarm began to sound.',
        choices: [
          'had the speaker finished',
          'the speaker had finished',
          'did the speaker finish',
          'has the speaker finished'
        ],
        correctAnswers: ['had the speaker finished'],
        explanation: 'Cấu trúc đảo ngữ: Hardly had + S + V3... when + S + V2. Do đó đáp án là had the speaker finished.',
        translation: 'Diễn giả vừa mới kết thúc bài thuyết trình thì chuông báo cháy bắt đầu vang lên.',
        level: 'Trung bình'
      },
      {
        id: 'inv-mc-2',
        type: 'multiple-choice',
        prompt: 'No sooner had the hikers reached the shelter ___ the heavy torrential rain began.',
        choices: ['than', 'when', 'then', 'that'],
        correctAnswers: ['than'],
        explanation: 'Cặp liên từ đi với No sooner luôn là THAN (No sooner had... than...).',
        translation: 'Những người leo núi vừa mới đến được chỗ trú ẩn thì cơn mưa như trút nước bắt đầu.',
        level: 'Cơ bản'
      },
      {
        id: 'inv-mc-3',
        type: 'multiple-choice',
        prompt: 'Under no circumstances ___ the laboratory equipment without prior authorization.',
        choices: [
          'should students operate',
          'students should operate',
          'students ought operate',
          'should operate students'
        ],
        correctAnswers: ['should students operate'],
        explanation: 'Under no circumstances đứng đầu câu yêu cầu đảo trợ động từ/modal lên trước chủ ngữ: should students operate.',
        translation: 'Trong bất kỳ trường hợp nào sinh viên cũng không được vận hành thiết bị phòng thí nghiệm mà không có sự cho phép trước.',
        level: 'Trung bình'
      },
      {
        id: 'inv-mc-4',
        type: 'multiple-choice',
        prompt: 'Only after checking all financial statements twice ___ the auditor sign off on the report.',
        choices: ['did', 'was', 'has', 'had'],
        correctAnswers: ['did'],
        explanation: 'Only after + V-ing yêu cầu đảo trợ động từ ở mệnh đề chính; câu ở quá khứ đơn (sign off là V nguyên mẫu) nên mượn did: did the auditor sign off.',
        translation: 'Chỉ sau khi kiểm tra lại toàn bộ báo cáo tài chính hai lần thì kiểm toán viên mới ký duyệt báo cáo.',
        level: 'Nâng cao'
      },
      {
        id: 'inv-mc-5',
        type: 'multiple-choice',
        prompt: 'At the summit of the mountain ___ an ancient stone watchtower.',
        choices: ['stood', 'did stand', 'was stood', 'standing'],
        correctAnswers: ['stood'],
        explanation: 'Đảo ngữ toàn bộ với cụm chỉ nơi chốn đứng đầu câu: Cụm nơi chốn + V chính (stood) + S (an ancient stone watchtower). Không mượn did.',
        translation: 'Trên đỉnh núi sừng sững một tháp canh bằng đá cổ kính.',
        level: 'Nâng cao'
      },
      {
        id: 'inv-fb-1',
        type: 'fill-blank',
        prompt: 'Seldom ___ she seen such extraordinary generosity from total strangers. (has/have)',
        hint: 'Chủ ngữ she số ít.',
        correctAnswers: ['has'],
        explanation: 'Đảo trợ động từ has lên trước chủ ngữ she: Seldom has she seen...',
        translation: 'Hiếm khi cô ấy chứng kiến sự hào phóng phi thường như vậy từ những người hoàn toàn xa lạ.',
        level: 'Cơ bản'
      },
      {
        id: 'inv-fb-2',
        type: 'fill-blank',
        prompt: 'Not only ___ he break the national record, but he also won the championship. (did/had)',
        hint: 'Quá khứ đơn mượn trợ động từ did đi với break.',
        correctAnswers: ['did'],
        explanation: 'Not only did he break the national record...',
        translation: 'Anh ấy không những phá kỷ lục quốc gia mà còn giành chức vô địch.',
        level: 'Trung bình'
      },
      {
        id: 'inv-fb-3',
        type: 'fill-blank',
        prompt: 'Scarcely had the plane taken off ___ one of the engines failed. (when/than)',
        hint: 'Scarcely đi kèm với liên từ when.',
        correctAnswers: ['when'],
        explanation: 'Cấu trúc Scarcely had + S + V3 WHEN + S + V2.',
        translation: 'Máy bay vừa mới cất cánh thì một trong các động cơ bị hỏng.',
        level: 'Trung bình'
      },
      {
        id: 'inv-fb-4',
        type: 'fill-blank',
        prompt: 'Little ___ they know about the secret preparations for the surprise anniversary party. (did/do)',
        hint: 'Câu ở quá khứ.',
        correctAnswers: ['did'],
        explanation: 'Little did they know... (Họ hầu như chẳng hề hay biết gì...).',
        translation: 'Họ hầu như chẳng hề hay biết gì về những khâu chuẩn bị bí mật cho bữa tiệc kỷ niệm bất ngờ.',
        level: 'Trung bình'
      },
      {
        id: 'inv-fb-5',
        type: 'fill-blank',
        prompt: 'So intense ___ the tropical heat that all outdoor activities were cancelled. (was/were)',
        hint: 'Heat là danh từ không đếm được số ít.',
        correctAnswers: ['was'],
        explanation: 'Cấu trúc đảo ngữ So intense was the heat that...',
        translation: 'Cái nóng nhiệt đới gay gắt đến mức mọi hoạt động ngoài trời đều bị hủy bỏ.',
        level: 'Nâng cao'
      },
      {
        id: 'inv-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu đảo ngữ: "Rarely she eats fast food because she prefers home-cooked meals."',
        hint: 'Rarely đứng đầu câu phải đảo trợ động từ does lên trước she (Rarely does she eat).',
        correctAnswers: [
          'Rarely does she eat fast food because she prefers home-cooked meals.'
        ],
        explanation: 'Khi trạng từ phủ định Rarely đứng đầu câu, bắt buộc phải đảo trợ động từ: Rarely does she eat.',
        translation: 'Hiếm khi cô ấy ăn thức ăn nhanh vì cô ấy thích các bữa ăn nấu tại nhà hơn.',
        level: 'Cơ bản'
      },
      {
        id: 'inv-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "No sooner had we arrived at the resort when the tropical storm struck."',
        hint: 'No sooner đi với THAN, không đi với when.',
        correctAnswers: [
          'No sooner had we arrived at the resort than the tropical storm struck.'
        ],
        explanation: 'Cặp từ đúng là No sooner... than (không dùng when).',
        translation: 'Chúng tôi vừa mới đến khu nghỉ dưỡng thì cơn bão nhiệt đới ập tới.',
        level: 'Cơ bản'
      },
      {
        id: 'inv-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai: "Only when did the rain stop, we continued our mountain hike."',
        hint: 'Đảo ngữ ở mệnh đề chính (did we continue), không đảo ở mệnh đề phụ (when the rain stopped).',
        correctAnswers: [
          'Only when the rain stopped did we continue our mountain hike.'
        ],
        explanation: 'Với Only when, mệnh đề phụ giữ nguyên (the rain stopped), chỉ đảo trợ động từ ở mệnh đề chính: did we continue.',
        translation: 'Chỉ khi cơn mưa tạnh chúng tôi mới tiếp tục chuyến đi bộ leo núi.',
        level: 'Nâng cao'
      },
      {
        id: 'inv-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu đảo ngữ toàn bộ: "On the top of the hill did stand an ancient cathedral."',
        hint: 'Đảo ngữ toàn bộ với trạng ngữ nơi chốn không mượn did, đảo thẳng stood lên trước cathedral.',
        correctAnswers: [
          'On the top of the hill stood an ancient cathedral.'
        ],
        explanation: 'Đảo ngữ toàn bộ nơi chốn đảo thẳng động từ chính: stood an ancient cathedral (không mượn did).',
        translation: 'Trên đỉnh đồi sừng sững một nhà thờ chính tòa cổ kính.',
        level: 'Nâng cao'
      },
      {
        id: 'inv-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai về dấu câu trong câu đảo ngữ: "Never in my entire career have I witnessed such dedication?"',
        hint: 'Câu đảo ngữ là câu trần thuật nhấn mạnh, kết thúc bằng dấu chấm, không dùng dấu chấm hỏi.',
        correctAnswers: [
          'Never in my entire career have I witnessed such dedication.'
        ],
        explanation: 'Câu đảo ngữ là câu khẳng định nhấn mạnh nên kết thúc bằng dấu chấm (.), không phải câu hỏi.',
        translation: 'Chưa từng có lúc nào trong toàn bộ sự nghiệp mà tôi chứng kiến sự tận tụy đến như vậy.',
        level: 'Trung bình'
      },
      {
        id: 'inv-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau bằng cách đảo "Never" lên đầu câu: "I have never seen such a magnificent natural phenomenon."',
        hint: 'Never have I seen such a magnificent natural phenomenon.',
        correctAnswers: [
          'Never have I seen such a magnificent natural phenomenon.'
        ],
        explanation: 'Đảo have lên trước I: Never have I seen...',
        translation: 'Chưa bao giờ tôi nhìn thấy một hiện tượng tự nhiên tráng lệ đến thế.',
        level: 'Cơ bản'
      },
      {
        id: 'inv-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng cấu trúc "No sooner had... than...": "She had just received the good news, and then she burst into tears of joy."',
        hint: 'No sooner had she received the good news than she burst into tears of joy.',
        correctAnswers: [
          'No sooner had she received the good news than she burst into tears of joy.'
        ],
        explanation: 'No sooner had + S + V3 than + S + V2.',
        translation: 'Cô ấy vừa mới nhận được tin vui thì đã bật khóc vì vui sướng.',
        level: 'Trung bình'
      },
      {
        id: 'inv-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng cấu trúc đảo ngữ "Only by + V-ing": "We can overcome this global crisis only by cooperating internationally."',
        hint: 'Only by cooperating internationally can we overcome this global crisis.',
        correctAnswers: [
          'Only by cooperating internationally can we overcome this global crisis.'
        ],
        explanation: 'Only by cooperating... can we overcome...',
        translation: 'Chỉ bằng cách hợp tác quốc tế chúng ta mới có thể vượt qua cuộc khủng hoảng toàn cầu này.',
        level: 'Trung bình'
      },
      {
        id: 'inv-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng cấu trúc đảo ngữ "Not only did...": "He not only apologized to the client, but he also offered a full refund."',
        hint: 'Not only did he apologize to the client, but he also offered a full refund.',
        correctAnswers: [
          'Not only did he apologize to the client, but he also offered a full refund.'
        ],
        explanation: 'Not only did he apologize...',
        translation: 'Anh ấy không những xin lỗi khách hàng mà còn đưa ra đề nghị hoàn tiền toàn bộ.',
        level: 'Trung bình'
      },
      {
        id: 'inv-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng cấu trúc đảo ngữ "So + Adj + be + S + that...": "The storm was so violent that hundreds of trees were uprooted."',
        hint: 'So violent was the storm that hundreds of trees were uprooted.',
        correctAnswers: [
          'So violent was the storm that hundreds of trees were uprooted.'
        ],
        explanation: 'Đảo tính từ và to be lên đầu: So violent was the storm that...',
        translation: 'Cơn bão dữ dội đến mức hàng trăm cái cây đã bị bật gốc.',
        level: 'Nâng cao'
      }
    ]
  },

  // 26. CAUSATIVE STRUCTURES
  {
    id: 'causative-structures',
    title: 'Causative Structures',
    vietnameseTitle: 'Cấu trúc nhờ vả / sai khiến',
    category: 'Các dạng câu đặc biệt',
    categoryId: 'special-sentences',
    level: 'B1–B2',
    summary: 'Cấu trúc nhờ ai làm việc gì (Have/Get sb do/to do sth) và nhờ cái gì được làm (Have/Get sth done); phân biệt Make, Let và Help.',
    overview: 'Cấu trúc nhờ vả / sai khiến (Causative Structures) được sử dụng khi chúng ta không trực tiếp thực hiện một hành động, mà sắp xếp, thuê, nhờ cậy hoặc bắt buộc người khác làm hành động đó cho mình hoặc cho người khác.',
    foundation: 'Cốt lõi của thể sai khiến nằm ở sự phân biệt giữa Thể chủ động (nhắc rõ người được nhờ: have someone do sth / get someone to do sth) và Thể bị động (tập trung vào dịch vụ được hoàn thành: have / get something done by someone).',
    classification: [
      {
        title: 'HAVE ở thể sai khiến (Have - Causative)',
        description: 'Chủ động: S + have + O_người + V-inf (nguyên mẫu không to).\nBị động: S + have + O_vật + V3/ed.'
      },
      {
        title: 'GET ở thể sai khiến (Get - Causative)',
        description: 'Chủ động: S + get + O_người + TO V1 (nguyên mẫu có to).\nBị động: S + get + O_vật + V3/ed.'
      },
      {
        title: 'MAKE ở thể sai khiến (Ép buộc / Làm cho)',
        description: 'Chủ động: S + make + O + V-inf (ép buộc ai làm gì).\nBị động: S + be made + TO V1 (bị ép buộc phải làm gì).'
      },
      {
        title: 'LET ở thể cho phép (Let - Permission)',
        description: 'S + let + O + V-inf (cho phép ai làm gì). Không chuyển sang bị động với let mà đổi sang: be allowed to V1.'
      },
      {
        title: 'HELP ở thể giúp đỡ (Help - Assistance)',
        description: 'S + help + O + (to) V1 (giúp ai làm gì - có thể có \'to\' hoặc không).'
      }
    ],
    formulas: [
      {
        title: 'Bảng vàng Thể sai khiến Chủ động & Bị động',
        formula: 'HAVE:\n- Chủ động: S + have + Someone + V1 (I had the plumber fix the leak)\n- Bị động: S + have + Something + V3/ed (I had the leak fixed)\nGET:\n- Chủ động: S + get + Someone + TO V1 (I got the plumber to fix the leak)\n- Bị động: S + get + Something + V3/ed (I got the leak fixed)',
        note: 'Ở thể BỊ ĐỘNG, cả HAVE và GET đều dùng công thức giống hệt nhau: S + have/get + Something + V3/ed.'
      },
      {
        title: 'Công thức Make, Let, Help',
        formula: 'MAKE: S + make + O + V1 (He made me apologize)\nLET: S + let + O + V1 (She let me use her laptop)\nHELP: S + help + O + (to) V1 (He helped me carry the box)',
        note: 'Sau make và let là động từ nguyên mẫu KHÔNG to trong câu chủ động.'
      }
    ],
    usage: [
      {
        context: 'Sử dụng dịch vụ chuyên nghiệp (Cắt tóc, sửa xe, khám mắt)',
        explanation: 'Người bản xứ luôn dùng thể bị động sai khiến have/get sth done thay vì tự nhận mình làm.',
        example: { english: 'I must have my hair cut this weekend (KHÔNG nói: I will cut my hair, trừ khi tự lấy kéo cắt).', vietnamese: 'Tôi phải đi cắt tóc vào cuối tuần này.' }
      },
      {
        context: 'Diễn tả sự cố bất ngờ hoặc rủi ro gặp phải với Have sth done',
        explanation: 'Diễn tả việc một sự việc tiêu cực xảy ra với tài sản của mình.',
        example: { english: 'He had his wallet stolen on the crowded subway.', vietnamese: 'Anh ấy đã bị trộm ví trên chuyến tàu điện ngầm đông đúc.' }
      },
      {
        context: 'Thuyết phục hoặc trả công ai đó làm việc gì với Get',
        explanation: 'Get thường mang sắc thái thuyết phục, nài nỉ hoặc nhờ vả.',
        example: { english: 'She managed to get her brother to drive her to the airport.', vietnamese: 'Cô ấy đã xoay xở thuyết phục được anh trai chở cô ra sân bay.' }
      }
    ],
    examples: [
      { english: 'We had the house painted by a team of professional painters.', vietnamese: 'Chúng tôi đã thuê một đội thợ sơn chuyên nghiệp sơn lại ngôi nhà.', note: 'Have something done.' },
      { english: 'She got an IT specialist to recover her corrupted hard drive.', vietnamese: 'Cô ấy đã nhờ một chuyên viên công nghệ thông tin khôi phục ổ cứng bị lỗi của mình.', note: 'Get someone to do something.' },
      { english: 'The teacher made the students rewrite the assignment.', vietnamese: 'Giáo viên đã bắt các học sinh phải viết lại bài tập.', note: 'Make someone do something.' }
    ],
    importantNotes: [
      'Ghi nhớ quy tắc cốt tử: HAVE sb DO sth (V nguyên mẫu không to), nhưng GET sb TO DO sth (V có to).',
      'Ở thể bị động, cả have và get đều đi với V3/ed: have something done = get something done.',
      'Đừng tự nói "I repaired my car" nếu bạn đem xe ra tiệm sửa; hãy nói: "I had my car repaired".',
      'Make sb do sth -> Bị động: be made TO do sth.'
    ],
    comparison: {
      title: 'Phân biệt Have sb do vs Get sb to do',
      points: [
        { concept: 'Have someone DO something (V nguyên mẫu)', difference: 'Nhờ vả thông thường hoặc giao việc theo bổn phận/dịch vụ trả tiền: I had the technician check the router.' },
        { concept: 'Get someone TO DO something (To-infinitive)', difference: 'Nhấn mạnh sự thuyết phục, động viên hoặc nài nỉ để ai đồng ý làm: I got my friend to help me.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp hàng ngày: Bảo dưỡng xe cộ và nhà cửa',
      dialogueOrSentences: [
        { speaker: 'Bảo', text: 'Where were you all morning? Your phone was unreachable.', translation: 'Cậu ở đâu cả buổi sáng thế? Điện thoại cậu không liên lạc được.' },
        { speaker: 'Khánh', text: 'I had my car serviced and the brake pads replaced at the garage.', translation: 'Mình mang xe đi bảo dưỡng và thay má phanh ở xưởng sửa xe.' },
        { speaker: 'Bảo', text: 'Good idea. Next week I need to get an electrician to inspect our wiring.', translation: 'Hợp lý đấy. Tuần tới mình cũng cần nhờ thợ điện kiểm tra hệ thống dây điện nhà mình.' }
      ]
    },
    summaryPoints: [
      'Have someone DO something (V1).',
      'Get someone TO DO something (to V1).',
      'Have / Get something DONE (V3/ed) (bị động sai khiến).',
      'Make someone DO something (ép buộc); Be made TO DO something (bị ép).',
      'Let someone DO something (cho phép).'
    ],
    exercises: [
      {
        id: 'cs-mc-1',
        type: 'multiple-choice',
        prompt: 'I am going to the optometrist tomorrow to have my eyesight ___.',
        choices: ['tested', 'testing', 'to test', 'test'],
        correctAnswers: ['tested'],
        explanation: 'Cấu trúc bị động sai khiến: have + something (my eyesight) + V3/ed (tested).',
        translation: 'Ngày mai tôi sẽ đến gặp bác sĩ nhãn khoa để đo khám thị lực.',
        level: 'Cơ bản'
      },
      {
        id: 'cs-mc-2',
        type: 'multiple-choice',
        prompt: 'The manager had his assistant ___ the finalized meeting agenda to all directors.',
        choices: ['distribute', 'to distribute', 'distributed', 'distributing'],
        correctAnswers: ['distribute'],
        explanation: 'Cấu trúc chủ động với have: S + have + someone (his assistant) + V nguyên mẫu (distribute).',
        translation: 'Người quản lý đã nhờ trợ lý của mình gửi lịch trình cuộc họp đã hoàn tất cho tất cả các giám đốc.',
        level: 'Trung bình'
      },
      {
        id: 'cs-mc-3',
        type: 'multiple-choice',
        prompt: 'She managed to get the stubborn landlord ___ the leaking roof before winter.',
        choices: ['to repair', 'repair', 'repaired', 'repairing'],
        correctAnswers: ['to repair'],
        explanation: 'Cấu trúc chủ động với get: S + get + someone (the landlord) + TO V1 (to repair).',
        translation: 'Cô ấy đã xoay xở thuyết phục được ông chủ nhà khó tính sửa lại mái nhà bị dột trước mùa đông.',
        level: 'Trung bình'
      },
      {
        id: 'cs-mc-4',
        type: 'multiple-choice',
        prompt: 'The strict drill sergeant made the recruits ___ ten miles with full backpacks.',
        choices: ['run', 'to run', 'running', 'ran'],
        correctAnswers: ['run'],
        explanation: 'Cấu trúc make someone DO something (động từ nguyên mẫu không to run).',
        translation: 'Viên trung sĩ huấn luyện nghiêm khắc đã bắt các tân binh chạy mười dặm với ba lô nặng đầy lưng.',
        level: 'Cơ bản'
      },
      {
        id: 'cs-mc-5',
        type: 'multiple-choice',
        prompt: 'During the rush hour on the bus, the tourist had his passport ___.',
        choices: ['stolen', 'steal', 'stole', 'stealing'],
        correctAnswers: ['stolen'],
        explanation: 'Cấu trúc have something done diễn tả sự cố rủi ro không mong muốn: had his passport stolen.',
        translation: 'Trong giờ cao điểm trên xe buýt, người du khách đã bị móc trộm hộ chiếu.',
        level: 'Trung bình'
      },
      {
        id: 'cs-fb-1',
        type: 'fill-blank',
        prompt: 'We need to get our air conditioner ___ before the scorching summer begins. (service)',
        hint: 'Thể bị động sai khiến get something done (V3).',
        correctAnswers: ['serviced'],
        explanation: 'Cấu trúc get something done: serviced.',
        translation: 'Chúng ta cần bảo dưỡng máy điều hòa trước khi mùa hè oi bức bắt đầu.',
        level: 'Cơ bản'
      },
      {
        id: 'cs-fb-2',
        type: 'fill-blank',
        prompt: 'The teacher got all the students ___ in the community charity drive. (participate)',
        hint: 'Cấu trúc get someone to do something.',
        correctAnswers: ['to participate'],
        explanation: 'Get someone + to V1: to participate.',
        translation: 'Giáo viên đã vận động tất cả học sinh tham gia vào chiến dịch từ thiện cộng đồng.',
        level: 'Cơ bản'
      },
      {
        id: 'cs-fb-3',
        type: 'fill-blank',
        prompt: 'My parents never let me ___ video games past 9 p.m. on weekdays. (play)',
        hint: 'Sau let là động từ nguyên mẫu không to.',
        correctAnswers: ['play'],
        explanation: 'Let someone DO something: play.',
        translation: 'Bố mẹ không bao giờ cho phép tôi chơi trò chơi điện tử quá 9 giờ tối vào các ngày trong tuần.',
        level: 'Cơ bản'
      },
      {
        id: 'cs-fb-4',
        type: 'fill-blank',
        prompt: 'The patient had a professional nurse ___ his wound dressing every morning. (change)',
        hint: 'Cấu trúc have someone do something.',
        correctAnswers: ['change'],
        explanation: 'Have someone DO something: change.',
        translation: 'Bệnh nhân đã nhờ một y tá chuyên nghiệp thay băng vết thương mỗi sáng.',
        level: 'Trung bình'
      },
      {
        id: 'cs-fb-5',
        type: 'fill-blank',
        prompt: 'The young soldiers were made ___ the barracks thoroughly. (clean)',
        hint: 'Bị động của make đi với to V1.',
        correctAnswers: ['to clean'],
        explanation: 'Bị động: be made to do something (to clean).',
        translation: 'Những người lính trẻ đã bị buộc phải dọn dẹp kỹ lưỡng khu doanh trại.',
        level: 'Nâng cao'
      },
      {
        id: 'cs-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "I had the technician to repair my faulty internet router."',
        hint: 'Cấu trúc have someone do something (không có to).',
        correctAnswers: [
          'I had the technician repair my faulty internet router.',
          'I got the technician to repair my faulty internet router.'
        ],
        explanation: 'Cấu trúc: have someone DO something (repair, bỏ to) HOẶC get someone TO DO something.',
        translation: 'Tôi đã nhờ kỹ thuật viên sửa chiếc bộ định tuyến internet bị lỗi của mình.',
        level: 'Cơ bản'
      },
      {
        id: 'cs-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She got her portrait paint by an acclaimed local artist."',
        hint: 'Bị động sai khiến get something done (painted).',
        correctAnswers: [
          'She got her portrait painted by an acclaimed local artist.',
          'She had her portrait painted by an acclaimed local artist.'
        ],
        explanation: 'Cấu trúc bị động sai khiến: get/have + something + V3: painted.',
        translation: 'Cô ấy đã nhờ một nghệ sĩ nổi tiếng địa phương vẽ chân dung cho mình.',
        level: 'Cơ bản'
      },
      {
        id: 'cs-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The company let the interns to leave the office early on Friday."',
        hint: 'Sau let là động từ nguyên mẫu không to (leave).',
        correctAnswers: [
          'The company let the interns leave the office early on Friday.'
        ],
        explanation: 'Cấu trúc: let someone DO something (leave, không dùng to leave).',
        translation: 'Công ty đã cho phép các thực tập sinh rời văn phòng sớm vào ngày thứ Sáu.',
        level: 'Cơ bản'
      },
      {
        id: 'cs-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "He cut his hair at the luxury salon yesterday afternoon."',
        hint: 'Cắt tóc ở salon là nhờ người khác cắt (had his hair cut).',
        correctAnswers: [
          'He had his hair cut at the luxury salon yesterday afternoon.',
          'He got his hair cut at the luxury salon yesterday afternoon.'
        ],
        explanation: 'Dùng cấu trúc nhờ vả have his hair cut (anh ấy được cắt tóc) chứ không tự mình cắt.',
        translation: 'Chiều hôm qua anh ấy đã đi cắt tóc ở một tiệm làm tóc sang trọng.',
        level: 'Trung bình'
      },
      {
        id: 'cs-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The suspect was made confess his crime by the police."',
        hint: 'Bị động của make phải có to: was made to confess.',
        correctAnswers: [
          'The suspect was made to confess his crime by the police.'
        ],
        explanation: 'Khi make chuyển sang bị động bắt buộc phải có to: was made to confess.',
        translation: 'Nghi phạm đã bị cảnh sát ép phải thú nhận tội ác.',
        level: 'Trung bình'
      },
      {
        id: 'cs-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng cấu trúc bị động sai khiến "have something done": "A professional mechanic repaired my car yesterday."',
        hint: 'I had my car repaired by a professional mechanic yesterday.',
        correctAnswers: [
          'I had my car repaired by a professional mechanic yesterday.',
          'I had my car repaired yesterday.'
        ],
        explanation: 'S + had + my car + repaired (V3).',
        translation: 'Tôi đã nhờ thợ máy chuyên nghiệp sửa xe cho mình ngày hôm qua.',
        level: 'Cơ bản'
      },
      {
        id: 'cs-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng cấu trúc "get someone to do something": "She persuaded her brother to drive her to the airport."',
        hint: 'She got her brother to drive her to the airport.',
        correctAnswers: [
          'She got her brother to drive her to the airport.'
        ],
        explanation: 'Get someone to do something tương đương persuade someone to do something.',
        translation: 'Cô ấy đã nhờ anh trai chở mình ra sân bay.',
        level: 'Cơ bản'
      },
      {
        id: 'cs-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng cấu trúc "have someone do something": "I will tell the cleaner to clean the meeting room."',
        hint: 'I will have the cleaner clean the meeting room.',
        correctAnswers: [
          'I will have the cleaner clean the meeting room.'
        ],
        explanation: 'Have someone + V1 (clean).',
        translation: 'Tôi sẽ bảo người dọn dẹp lau dọn phòng họp.',
        level: 'Cơ bản'
      },
      {
        id: 'cs-sc-4',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau sang thể bị động với "be made to": "The coach made the players run five laps around the pitch."',
        hint: 'The players were made to run five laps around the pitch by the coach.',
        correctAnswers: [
          'The players were made to run five laps around the pitch by the coach.',
          'The players were made to run five laps around the pitch.'
        ],
        explanation: 'Be made to V1: were made to run.',
        translation: 'Các cầu thủ đã bị huấn luyện viên bắt chạy năm vòng quanh sân.',
        level: 'Trung bình'
      },
      {
        id: 'cs-sc-5',
        type: 'sentence-construction',
        prompt: 'Đặt một câu diễn đạt việc bạn sẽ đi kiểm tra răng vào ngày mai dùng cấu trúc "get my teeth checked":',
        hint: 'I will get my teeth checked tomorrow.',
        correctAnswers: [
          'I will get my teeth checked tomorrow.',
          'I am going to get my teeth checked tomorrow.'
        ],
        explanation: 'Get my teeth checked = đi khám răng.',
        translation: 'Ngày mai tôi sẽ đi khám răng.',
        level: 'Cơ bản'
      }
    ]
  },

  // 27. EMPHASIS & CLEFT SENTENCES
  {
    id: 'emphasis-cleft',
    title: 'Emphasis & Cleft Sentences',
    vietnameseTitle: 'Câu nhấn mạnh và câu chẻ',
    category: 'Các dạng câu đặc biệt',
    categoryId: 'special-sentences',
    level: 'B1–B2',
    summary: 'Kỹ thuật nhấn mạnh thông tin trong câu: Câu chẻ It is/was... that/who, Wh-cleft sentences, và dùng trợ động từ Do/Does/Did trong câu khẳng định.',
    overview: 'Trong giao tiếp và viết văn, đôi khi chúng ta muốn làm nổi bật một đối tượng, hành động hoặc bối cảnh cụ thể để thu hút sự chú ý của người nghe hoặc làm rõ sự hiểu lầm. Kỹ thuật nhấn mạnh (Emphasis) và đặc biệt là Câu chẻ (Cleft Sentences - tách một câu đơn làm hai mệnh đề) là công cụ đắc lực để đạt được mục tiêu này.',
    foundation: 'Cleft bắt nguồn từ động từ "cleave" (chẻ đôi/tách ra). Một câu đơn giản như "Nam solved the problem" được chẻ đôi thành: "It was Nam (phần được nhấn mạnh) + that solved the problem (phần thông tin nền)".',
    classification: [
      {
        title: 'Câu chẻ với IT (It-cleft sentences)',
        description: 'Cấu trúc phổ biến nhất: IT + IS / WAS + [Thành phần nhấn mạnh] + THAT / WHO + [Mệnh đề còn lại]. Nhấn mạnh Chủ ngữ, Tân ngữ hoặc Trạng ngữ.'
      },
      {
        title: 'Câu chẻ với WH- (Wh-cleft / Pseudo-cleft sentences)',
        description: 'Bắt đầu bằng What: WHAT + S + V + IS / WAS + [Thành phần nhấn mạnh]. (What I need is a good night\'s sleep).'
      },
      {
        title: 'Nhấn mạnh bằng Trợ động từ DO / DOES / DID',
        description: 'Chèn do/does/did vào trước động từ nguyên mẫu trong CÂU KHẲNG ĐỊNH để khẳng định chắc chắn sự thật hoặc phản bác: I DO love you; He DID finish the report.'
      },
      {
        title: 'Nhấn mạnh với ALL / THE THING THAT',
        description: 'All I want is your happiness / The thing that surprised me was his modesty.'
      }
    ],
    formulas: [
      {
        title: 'Công thức Câu chẻ với IT',
        formula: 'Nhấn mạnh CHỦ NGỮ: It is / was + S (người/vật) + that / who + V + O\nNhấn mạnh TÂN NGỮ: It is / was + O + that / whom + S + V\nNhấn mạnh TRẠNG NGỮ: It is / was + Trạng ngữ (thời gian/nơi chốn) + THAT + S + V',
        note: 'Khi nhấn mạnh TRẠNG NGỮ, luôn luôn dùng THAT (không dùng when hoặc where trong câu chẻ chuẩn).'
      },
      {
        title: 'Công thức Wh-Cleft',
        formula: 'WHAT + S + V + IS / WAS + [Noun / Noun phrase / To-V / Clause]',
        note: 'What annoyed me most was his arrogant attitude.'
      },
      {
        title: 'Nhấn mạnh Động từ khẳng định',
        formula: 'S + DO / DOES / DID + V (nguyên mẫu không to)',
        note: 'She DOES understand the problem (Cô ấy thực sự hiểu vấn đề).'
      }
    ],
    usage: [
      {
        context: 'Làm rõ sự nhầm lẫn hoặc đính chính thông tin (Clarifying misconception)',
        explanation: 'Nhấn mạnh chính đối tượng này chứ không phải đối tượng khác.',
        example: { english: 'It was Sarah, not Lisa, who drafted the project proposal.', vietnamese: 'Chính là Sarah, chứ không phải Lisa, người đã soạn thảo đề xuất dự án.' }
      },
      {
        context: 'Nhấn mạnh thời điểm hoặc địa điểm diễn ra sự kiện lịch sử',
        explanation: 'Dùng câu chẻ trạng ngữ.',
        example: { english: 'It was in 1945 that the United Nations was officially founded.', vietnamese: 'Chính vào năm 1945 tổ chức Liên Hợp Quốc đã chính thức được thành lập.' }
      },
      {
        context: 'Bày tỏ mong muốn thiết tha nhất với Wh-cleft',
        explanation: 'Tập trung sự chú ý vào điều ước hoặc nhu cầu duy nhất.',
        example: { english: 'What we desperately need right now is clean drinking water.', vietnamese: 'Điều chúng tôi tha thiết cần ngay lúc này là nước uống sạch.' }
      }
    ],
    examples: [
      { english: 'It was Peter who answered all the difficult technical questions.', vietnamese: 'Chính Peter là người đã trả lời tất cả các câu hỏi kỹ thuật hóc búa.', note: 'Nhấn mạnh chủ ngữ chỉ người.' },
      { english: 'It was in this small coffee shop that they first met.', vietnamese: 'Chính tại quán cà phê nhỏ này họ đã gặp nhau lần đầu.', note: 'Nhấn mạnh trạng ngữ nơi chốn dùng that.' },
      { english: 'I do appreciate everything you have done for our department.', vietnamese: 'Tôi thực sự rất trân trọng mọi điều bạn đã làm cho phòng ban chúng ta.', note: 'Do nhấn mạnh cho động từ appreciate.' }
    ],
    importantNotes: [
      'BẪY TRẠNG TỪ TRONG CÂU CHẺ: Khi nhấn mạnh trạng ngữ nơi chốn hoặc thời gian, bắt buộc dùng THAT, không dùng WHERE hay WHEN (Sai: It was in Paris where we met; Đúng: It was in Paris THAT we met).',
      'Động từ to be trong câu chẻ chỉ dùng IS (nếu câu ở hiện tại) hoặc WAS (nếu câu ở quá khứ), KHÔNG BAO GIỜ chia số nhiều are hay were (Sai: It were my brothers; Đúng: It was my brothers that...).',
      'Sau do/does/did nhấn mạnh, động từ chính luôn ở dạng NGUYÊN MẪU KHÔNG TO.',
      'Sự hòa hợp đại từ: It was me that he called (thông dụng) / It was I who called him (trang trọng).'
    ],
    comparison: {
      title: 'Phân biệt It-cleft vs Wh-cleft',
      points: [
        { concept: 'It-cleft (It is/was... that)', difference: 'Đưa thành phần nhấn mạnh lên ĐẦU CÂU ngay sau It is/was: It was your smile that charmed him.' },
        { concept: 'Wh-cleft (What... is/was)', difference: 'Đưa thành phần nhấn mạnh về CUỐI CÂU sau động từ to be: What charmed him was your smile.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp giải thích hiểu lầm trong dự án',
      dialogueOrSentences: [
        { speaker: 'Giám đốc', text: 'Why did the client complain about the product delivery?', translation: 'Tại sao khách hàng lại phàn nàn về việc giao sản phẩm thế?' },
        { speaker: 'Nhân viên', text: 'It was the shipping contractor that caused the three-day delay, not our warehouse team.', translation: 'Chính là bên nhà thầu vận chuyển đã gây ra sự chậm trễ ba ngày, chứ không phải đội kho bãi của chúng em ạ.' },
        { speaker: 'Giám đốc', text: 'I see. What we must do now is inform the client immediately.', translation: 'Tôi hiểu rồi. Điều chúng ta phải làm lúc này là thông báo cho khách hàng ngay lập tức.' }
      ]
    },
    summaryPoints: [
      'Câu chẻ It is/was + [nhấn mạnh] + that/who... chẻ câu đơn làm 2 để làm nổi bật thông tin.',
      'Nhấn mạnh trạng từ nơi chốn/thời gian BẮT BUỘC dùng that (không dùng where/when).',
      'To be trong It-cleft luôn là is hoặc was (không dùng are/were).',
      'Wh-cleft: What + S + V + is/was + [nhấn mạnh].',
      'Nhấn mạnh động từ khẳng định: S + do/does/did + V-inf.'
    ],
    exercises: [
      {
        id: 'ec-mc-1',
        type: 'multiple-choice',
        prompt: 'It was in the historic city of Rome ___ the international treaty was signed.',
        choices: ['that', 'where', 'which', 'when'],
        correctAnswers: ['that'],
        explanation: 'Trong câu chẻ nhấn mạnh trạng ngữ nơi chốn (in the historic city of Rome), bắt buộc dùng liên từ THAT, không dùng where.',
        translation: 'Chính tại thành phố lịch sử Rome hiệp ước quốc tế đã được ký kết.',
        level: 'Trung bình'
      },
      {
        id: 'ec-mc-2',
        type: 'multiple-choice',
        prompt: 'It ___ my two closest colleagues who supported me through the crisis.',
        choices: ['was', 'were', 'is', 'are'],
        correctAnswers: ['was'],
        explanation: 'Động từ to be trong câu chẻ quá khứ luôn là was, không phụ thuộc vào danh từ số nhiều theo sau: It was my two closest colleagues...',
        translation: 'Chính hai người đồng nghiệp thân thiết nhất là những người đã hỗ trợ tôi vượt qua khủng hoảng.',
        level: 'Nâng cao'
      },
      {
        id: 'ec-mc-3',
        type: 'multiple-choice',
        prompt: '___ annoyed the manager most was his complete lack of punctuality.',
        choices: ['What', 'That', 'Which', 'It'],
        correctAnswers: ['What'],
        explanation: 'Cấu trúc Wh-cleft (câu chẻ giả): What + S/V + was...: What annoyed the manager most was...',
        translation: 'Điều làm người quản lý bực mình nhất là sự hoàn toàn thiếu đúng giờ của anh ấy.',
        level: 'Trung bình'
      },
      {
        id: 'ec-mc-4',
        type: 'multiple-choice',
        prompt: 'Despite his busy schedule, he ___ attend the charity gala yesterday evening.',
        choices: ['did', 'does', 'do', 'was'],
        correctAnswers: ['did'],
        explanation: 'Dùng trợ động từ did đứng trước động từ nguyên mẫu attend trong câu khẳng định quá khứ để nhấn mạnh sự thật.',
        translation: 'Dù lịch trình bận rộn, tối qua anh ấy thực sự đã tham dự buổi dạ tiệc từ thiện.',
        level: 'Cơ bản'
      },
      {
        id: 'ec-mc-5',
        type: 'multiple-choice',
        prompt: 'It was yesterday ___ the final election results were announced to the public.',
        choices: ['that', 'when', 'which', 'at which'],
        correctAnswers: ['that'],
        explanation: 'Câu chẻ nhấn mạnh trạng từ thời gian yesterday bắt buộc dùng that, không dùng when.',
        translation: 'Chính ngày hôm qua kết quả bầu cử cuối cùng đã được công bố cho công chúng.',
        level: 'Trung bình'
      },
      {
        id: 'ec-fb-1',
        type: 'fill-blank',
        prompt: 'It was Dr. Jane ___ delivered the inspiring commencement speech. (who/whom)',
        hint: 'Nhấn mạnh chủ ngữ chỉ người.',
        correctAnswers: ['who', 'that'],
        explanation: 'Nhấn mạnh chủ ngữ chỉ người dùng who hoặc that.',
        translation: 'Chính tiến sĩ Jane là người đã trình bày bài diễn văn bế giảng đầy truyền cảm hứng.',
        level: 'Cơ bản'
      },
      {
        id: 'ec-fb-2',
        type: 'fill-blank',
        prompt: 'It was in 1969 ___ human astronauts first landed on the moon. (that/when)',
        hint: 'Câu chẻ nhấn mạnh thời gian bắt buộc dùng that.',
        correctAnswers: ['that'],
        explanation: 'Câu chẻ nhấn mạnh trạng ngữ thời gian dùng that.',
        translation: 'Chính vào năm 1969 các phi hành gia con người lần đầu tiên đặt chân lên mặt trăng.',
        level: 'Trung bình'
      },
      {
        id: 'ec-fb-3',
        type: 'fill-blank',
        prompt: 'I ___ hope that you will consider our partnership proposal favorably. (do/did)',
        hint: 'Nhấn mạnh ở thì hiện tại đơn với chủ ngữ I.',
        correctAnswers: ['do'],
        explanation: 'I do hope... dùng do để nhấn mạnh hy vọng tha thiết.',
        translation: 'Tôi thực sự rất hy vọng bạn sẽ xem xét lời đề xuất hợp tác của chúng tôi một cách thuận lợi.',
        level: 'Cơ bản'
      },
      {
        id: 'ec-fb-4',
        type: 'fill-blank',
        prompt: 'What we need right now ___ a clear, decisive action plan. (is/are)',
        hint: 'Mệnh đề danh từ What we need làm chủ ngữ số ít.',
        correctAnswers: ['is'],
        explanation: 'Mệnh đề What we need đóng vai trò chủ ngữ số ít đi với is.',
        translation: 'Điều chúng ta cần ngay lúc này là một kế hoạch hành động dứt khoát, rõ ràng.',
        level: 'Trung bình'
      },
      {
        id: 'ec-fb-5',
        type: 'fill-blank',
        prompt: 'It ___ my parents who encouraged me to pursue a medical career. (was/were)',
        hint: 'To be trong câu chẻ quá khứ luôn là was.',
        correctAnswers: ['was'],
        explanation: 'It was + [chủ ngữ được nhấn mạnh], to be luôn ở dạng số ít was.',
        translation: 'Chính bố mẹ tôi là những người đã khuyến khích tôi theo đuổi sự nghiệp y khoa.',
        level: 'Nâng cao'
      },
      {
        id: 'ec-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu chẻ: "It was in the library where I found the rare ancient manuscript."',
        hint: 'Câu chẻ nhấn mạnh trạng ngữ nơi chốn dùng that chứ không dùng where.',
        correctAnswers: [
          'It was in the library that I found the rare ancient manuscript.'
        ],
        explanation: 'Trong cấu trúc câu chẻ, nhấn mạnh nơi chốn bắt buộc dùng that, không dùng where.',
        translation: 'Chính tại thư viện tôi đã tìm thấy bản thảo cổ quý hiếm.',
        level: 'Cơ bản'
      },
      {
        id: 'ec-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu chẻ: "It were the continuous heavy rains that caused the flash flood."',
        hint: 'To be trong câu chẻ luôn là was, không dùng were.',
        correctAnswers: [
          'It was the continuous heavy rains that caused the flash flood.'
        ],
        explanation: 'Chủ ngữ giả It luôn đi với to be số ít: It was..., không dùng It were.',
        translation: 'Chính những trận mưa lớn liên tục đã gây ra trận lũ quét.',
        level: 'Trung bình'
      },
      {
        id: 'ec-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai: "I did saw him entering the office building yesterday afternoon."',
        hint: 'Sau trợ động từ did nhấn mạnh là động từ nguyên mẫu see (không dùng saw).',
        correctAnswers: [
          'I did see him entering the office building yesterday afternoon.'
        ],
        explanation: 'Sau did nhấn mạnh phải là động từ nguyên mẫu: did see (không dùng did saw).',
        translation: 'Tôi thực sự đã nhìn thấy anh ấy bước vào tòa nhà văn phòng chiều hôm qua.',
        level: 'Cơ bản'
      },
      {
        id: 'ec-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai: "It was last week when the board approved the merger proposal."',
        hint: 'Câu chẻ nhấn mạnh thời gian last week dùng that, không dùng when.',
        correctAnswers: [
          'It was last week that the board approved the merger proposal.'
        ],
        explanation: 'Nhấn mạnh thời gian trong câu chẻ chuẩn dùng that: It was last week that...',
        translation: 'Chính tuần trước ban giám đốc đã thông qua đề xuất sáp nhập.',
        level: 'Trung bình'
      },
      {
        id: 'ec-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai: "All what I want for my birthday is a quiet dinner with close friends."',
        hint: 'Cấu trúc đúng là All that I want hoặc What I want.',
        correctAnswers: [
          'All that I want for my birthday is a quiet dinner with close friends.',
          'All I want for my birthday is a quiet dinner with close friends.',
          'What I want for my birthday is a quiet dinner with close friends.'
        ],
        explanation: 'Sau All dùng đại từ that hoặc lược bỏ đại từ; không dùng all what.',
        translation: 'Tất cả những gì tôi muốn cho ngày sinh nhật là một bữa tối yên tĩnh cùng những người bạn thân.',
        level: 'Nâng cao'
      },
      {
        id: 'ec-sc-1',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau thành CÂU CHẺ nhấn mạnh CHỦ NGỮ (Mark): "Mark designed the new company logo."',
        hint: 'It was Mark who/that designed the new company logo.',
        correctAnswers: [
          'It was Mark who designed the new company logo.',
          'It was Mark that designed the new company logo.'
        ],
        explanation: 'Cấu trúc câu chẻ nhấn mạnh chủ ngữ người: It was Mark who/that...',
        translation: 'Chính Mark là người đã thiết kế logo mới của công ty.',
        level: 'Cơ bản'
      },
      {
        id: 'ec-sc-2',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau thành CÂU CHẺ nhấn mạnh TRẠNG NGỮ THỜI GIAN (yesterday): "She received the promotion letter yesterday."',
        hint: 'It was yesterday that she received the promotion letter.',
        correctAnswers: [
          'It was yesterday that she received the promotion letter.'
        ],
        explanation: 'Nhấn mạnh trạng ngữ thời gian: It was yesterday that...',
        translation: 'Chính ngày hôm qua cô ấy đã nhận được thư thăng chức.',
        level: 'Cơ bản'
      },
      {
        id: 'ec-sc-3',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau thành CÂU CHẺ nhấn mạnh TRẠNG NGỮ NƠI CHỐN (in Paris): "They fell in love in Paris."',
        hint: 'It was in Paris that they fell in love.',
        correctAnswers: [
          'It was in Paris that they fell in love.'
        ],
        explanation: 'Nhấn mạnh nơi chốn: It was in Paris that...',
        translation: 'Chính tại Paris họ đã yêu nhau.',
        level: 'Cơ bản'
      },
      {
        id: 'ec-sc-4',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau thành WH-CLEFT sentence bắt đầu bằng "What I really need": "I really need a peaceful vacation."',
        hint: 'What I really need is a peaceful vacation.',
        correctAnswers: [
          'What I really need is a peaceful vacation.'
        ],
        explanation: 'Wh-cleft: What I really need is...',
        translation: 'Điều tôi thực sự cần là một kỳ nghỉ yên bình.',
        level: 'Trung bình'
      },
      {
        id: 'ec-sc-5',
        type: 'sentence-construction',
        prompt: 'Thêm trợ động từ "did" để nhấn mạnh hành động khẳng định trong quá khứ: "I locked the front door before going to bed."',
        hint: 'I did lock the front door before going to bed.',
        correctAnswers: [
          'I did lock the front door before going to bed.'
        ],
        explanation: 'Dùng did + V nguyên mẫu để nhấn mạnh.',
        translation: 'Tôi thực sự đã khóa cửa trước trước khi đi ngủ.',
        level: 'Cơ bản'
      }
    ]
  }
]
