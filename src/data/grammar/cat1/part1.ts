import type { GrammarLessonDetail } from '../types'

export const cat1Part1Lessons: GrammarLessonDetail[] = [
  // 1. NOUNS
  {
    id: 'nouns',
    title: 'Nouns',
    vietnameseTitle: 'Danh từ',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A1–B1',
    summary: 'Từ chỉ người, sự vật, địa điểm, khái niệm và hoạt động; phân biệt đếm được, không đếm được và sở hữu cách.',
    overview: 'Danh từ (Nouns) là từ loại dùng để gọi tên con người (teacher, doctor), sự vật (car, table), địa điểm (city, Vietnam), hiện tượng tự nhiên (rain, thunderstorm) hoặc các khái niệm trừu tượng (freedom, happiness). Danh từ giữ vai trò cốt lõi trong việc hình thành chủ ngữ, tân ngữ và bổ ngữ của câu.',
    foundation: 'Bản chất của danh từ là định danh đối tượng. Dấu hiệu nhận biết danh từ trong câu: thường đứng sau mạo từ (a, an, the), từ hạn định (this, that, some, every), tính từ sở hữu (my, our), sau tính từ miêu tả, hoặc đứng sau giới từ (in, at, with).',
    classification: [
      {
        title: 'Danh từ chung & Danh từ riêng (Common & Proper Nouns)',
        description: 'Danh từ chung chỉ người, vật, địa điểm chung (student, country, river). Danh từ riêng chỉ tên riêng cụ thể và luôn viết hoa (David, Vietnam, London, Amazon).'
      },
      {
        title: 'Danh từ đếm được & Không đếm được (Countable & Uncountable)',
        description: 'Danh từ đếm được có dạng số ít và số nhiều (book -> books). Danh từ không đếm được chỉ chất liệu, chất lỏng, khối hoặc khái niệm trừu tượng (water, information, advice) và không đếm trực tiếp bằng số.'
      },
      {
        title: 'Danh từ cụ thể & Trừu tượng (Concrete & Abstract)',
        description: 'Danh từ cụ thể nhận biết bằng giác quan (apple, desk, music). Danh từ trừu tượng chỉ ý tưởng, cảm xúc, phẩm chất (honesty, knowledge, patience).'
      },
      {
        title: 'Danh từ tập hợp (Collective Nouns)',
        description: 'Chỉ một nhóm cá nhân hay tập thể xem như một thể thống nhất (family, team, committee, government).'
      },
      {
        title: 'Danh từ ghép (Compound Nouns)',
        description: 'Kết hợp từ hai từ trở lên để tạo thành danh từ mới (toothbrush, washing machine, mother-in-law).'
      }
    ],
    formulas: [
      {
        title: 'Quy tắc chuyển sang số nhiều',
        formula: 'N số ít + s / es (cats, buses, boxes, watches, potatoes)',
        note: 'Tận cùng s, ss, sh, ch, x, z thêm -es. Phụ âm + y đổi y thành -ies (family -> families).'
      },
      {
        title: 'Số nhiều bất quy tắc thường gặp',
        formula: 'child -> children\nperson -> people\nman -> men\nwoman -> women\ntooth -> teeth\nfoot -> feet\nmouse -> mice\ndeer -> deer\nsheep -> sheep',
        note: 'Các từ này không thêm -s khi biểu thị số nhiều.'
      },
      {
        title: 'Sở hữu cách (Possessive Case)',
        formula: 'Số ít: N + \'s (Peter\'s bag)\nSố nhiều tận cùng -s: N + \' (teachers\' room)\nSố nhiều bất quy tắc: N + \'s (children\'s books)',
        note: 'Với đồ vật vô tri ưu tiên cấu trúc of: the color of the car.'
      }
    ],
    usage: [
      {
        context: 'Làm chủ ngữ trong câu (Subject)',
        explanation: 'Danh từ đứng trước động từ chính để biểu thị đối tượng thực hiện hành động hoặc chịu trạng thái.',
        example: { english: 'The teacher explained the lesson clearly.', vietnamese: 'Giáo viên đã giải thích bài học một cách rõ ràng.' }
      },
      {
        context: 'Làm tân ngữ trực tiếp hoặc gián tiếp (Object)',
        explanation: 'Danh từ đứng sau ngoại động từ hoặc giới từ để chịu tác động của hành động.',
        example: { english: 'She sent her mother a lovely postcard.', vietnamese: 'Cô ấy đã gửi cho mẹ một tấm bưu thiếp đáng yêu.' }
      },
      {
        context: 'Làm bổ ngữ cho chủ ngữ hoặc tân ngữ (Complement)',
        explanation: 'Đứng sau động từ nối (to be, become, seem) để bổ nghĩa cho chủ ngữ.',
        example: { english: 'My brother became a professional pilot.', vietnamese: 'Anh trai tôi đã trở thành một phi công chuyên nghiệp.' }
      }
    ],
    examples: [
      { english: 'Education is essential for future success.', vietnamese: 'Giáo dục là điều cốt yếu cho thành công tương lai.', note: 'Danh từ trừu tượng không đếm được làm chủ ngữ.' },
      { english: 'Two police officers entered the building.', vietnamese: 'Hai cảnh sát viên đã bước vào tòa nhà.', note: 'Danh từ ghép đếm được ở số nhiều.' },
      { english: 'Could you give me a piece of advice?', vietnamese: 'Bạn có thể cho tôi một lời khuyên được không?', note: 'Đơn vị đo lường đi với danh từ không đếm được.' }
    ],
    importantNotes: [
      'Tuyệt đối không thêm -s vào các danh từ không đếm được: advice, information, furniture, luggage, equipment, traffic, baggage.',
      'Muốn đếm danh từ không đếm được, dùng cụm từ đo lường: a bottle of water, a piece of information, a bar of chocolate.',
      'Một số từ tận cùng có đuôi -s nhưng là danh từ số ít: news, physics, mathematics, economics, politics.',
      'Một số từ luôn ở số nhiều: glasses (kính mắt), trousers/pants (quần dài), scissors (kéo), clothes (quần áo), police (cảnh sát).'
    ],
    comparison: {
      title: 'Phân biệt Countable vs Uncountable Nouns',
      points: [
        { concept: 'Danh từ đếm được (Countable)', difference: 'Dùng được với a/an, có dạng số nhiều thêm -s/-es, dùng với many, few, a few, số đếm.' },
        { concept: 'Danh từ không đếm được (Uncountable)', difference: 'Không dùng trực tiếp với a/an, không có dạng số nhiều, động từ luôn chia số ít, dùng với much, little, a little.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp tại nơi làm việc: Trao đổi về thông tin và tài liệu dự án',
      dialogueOrSentences: [
        { speaker: 'Huy', text: 'Did you receive the new information about the meeting?', translation: 'Bạn đã nhận được thông tin mới về cuộc họp chưa?' },
        { speaker: 'Linh', text: 'Yes, the manager gave us several useful pieces of advice.', translation: 'Rồi, người quản lý đã cho chúng ta vài lời khuyên rất hữu ích.' },
        { speaker: 'Huy', text: 'Great, let\'s review the client\'s requirements together.', translation: 'Tuyệt, hãy cùng nhau xem lại các yêu cầu của khách hàng nhé.' }
      ]
    },
    summaryPoints: [
      'Danh từ định danh người, vật, nơi chốn, hiện tượng, khái niệm.',
      'Phân biệt rõ đếm được (có số nhiều) và không đếm được (luôn chia động từ số ít).',
      'Nắm vững số nhiều bất quy tắc: children, people, teeth, feet, mice, deer.',
      'Nhớ quy tắc sở hữu cách: \'s cho số ít và số nhiều bất quy tắc; chỉ thêm \' cho số nhiều tận cùng -s.',
      'Không thêm -s vào advice, information, furniture, luggage.'
    ],
    exercises: [
      {
        id: 'nouns-mc-1',
        type: 'multiple-choice',
        prompt: 'The consultant provided us with valuable ___ to improve our sales strategy.',
        choices: ['advices', 'advice', 'an advice', 'pieces of advices'],
        correctAnswers: ['advice'],
        explanation: 'Advice là danh từ không đếm được, không dùng a/an và không thêm -s.',
        translation: 'Chuyên gia tư vấn đã cung cấp cho chúng tôi lời khuyên quý giá để cải thiện chiến lược bán hàng.',
        level: 'Cơ bản'
      },
      {
        id: 'nouns-mc-2',
        type: 'multiple-choice',
        prompt: 'The farmer owns a large flock of fifty ___ grazing in the meadow.',
        choices: ['sheeps', 'sheep', 'sheepes', 'sheeps\''],
        correctAnswers: ['sheep'],
        explanation: 'Sheep là danh từ có dạng số ít và số nhiều giống nhau: fifty sheep.',
        translation: 'Người nông dân sở hữu một đàn lớn gồm năm mươi con cừu đang gặm cỏ trên đồng cỏ.',
        level: 'Trung bình'
      },
      {
        id: 'nouns-mc-3',
        type: 'multiple-choice',
        prompt: 'The ___ toys were put away neatly into the storage bin before bedtime.',
        choices: ['childrens\'', 'children\'s', 'child\'s', 'childrens'],
        correctAnswers: ['children\'s'],
        explanation: 'Children là danh từ số nhiều bất quy tắc không tận cùng -s, nên sở hữu cách là children\'s.',
        translation: 'Đồ chơi của các em nhỏ đã được cất gọn gàng vào thùng chứa trước giờ đi ngủ.',
        level: 'Cơ bản'
      },
      {
        id: 'nouns-mc-4',
        type: 'multiple-choice',
        prompt: 'The local ___ are patrolling the neighborhood to ensure safety during the festival.',
        choices: ['police', 'policeman', 'polices', 'police\'s'],
        correctAnswers: ['police'],
        explanation: 'Police là danh từ tập hợp luôn mang nghĩa số nhiều và đi với động từ số nhiều (are).',
        translation: 'Cảnh sát địa phương đang tuần tra khu phố để đảm bảo an toàn trong suốt lễ hội.',
        level: 'Trung bình'
      },
      {
        id: 'nouns-mc-5',
        type: 'multiple-choice',
        prompt: 'We need to purchase two new ___ for our newly renovated conference room.',
        choices: ['items of furniture', 'furnitures', 'item of furnitures', 'pieces of furniture'],
        correctAnswers: ['items of furniture', 'pieces of furniture'],
        explanation: 'Furniture không đếm được; khi đếm dùng items of furniture hoặc pieces of furniture.',
        translation: 'Chúng tôi cần mua hai món đồ nội thất mới cho phòng hội nghị mới được tân trang.',
        level: 'Nâng cao'
      },
      {
        id: 'nouns-fb-1',
        type: 'fill-blank',
        prompt: 'The dental hygienist cleaned both of my painful ___ this morning. (tooth)',
        hint: 'Biến đổi sang danh từ số nhiều bất quy tắc.',
        correctAnswers: ['teeth'],
        explanation: 'Dạng số nhiều bất quy tắc của tooth là teeth.',
        translation: 'Chuyên viên nha khoa đã vệ sinh cả hai chiếc răng đau của tôi sáng nay.',
        level: 'Cơ bản'
      },
      {
        id: 'nouns-fb-2',
        type: 'fill-blank',
        prompt: 'In autumn, the golden ___ fall gently from the tall oak trees. (leaf)',
        hint: 'Danh từ tận cùng -f đổi thành -ves khi ở số nhiều.',
        correctAnswers: ['leaves'],
        explanation: 'Leaf có dạng số nhiều là leaves.',
        translation: 'Vào mùa thu, những chiếc lá vàng rơi nhẹ nhàng từ những cây sồi cao.',
        level: 'Cơ bản'
      },
      {
        id: 'nouns-fb-3',
        type: 'fill-blank',
        prompt: 'Several brave firefighters were hailed as national ___ after the rescue. (hero)',
        hint: 'Danh từ tận cùng -o đi kèm phụ âm thêm -es.',
        correctAnswers: ['heroes'],
        explanation: 'Hero có dạng số nhiều là heroes.',
        translation: 'Nhiều lính cứu hỏa dũng cảm đã được ca ngợi như những người hùng quốc gia sau cuộc giải cứu.',
        level: 'Trung bình'
      },
      {
        id: 'nouns-fb-4',
        type: 'fill-blank',
        prompt: 'The chef used three sharp ___ to prepare the banquet dinner. (knife)',
        hint: 'Danh từ tận cùng -fe đổi thành -ves.',
        correctAnswers: ['knives'],
        explanation: 'Knife có dạng số nhiều là knives.',
        translation: 'Đầu bếp đã dùng ba con dao sắc để chuẩn bị bữa tiệc chiêu đãi.',
        level: 'Cơ bản'
      },
      {
        id: 'nouns-fb-5',
        type: 'fill-blank',
        prompt: 'Mathematics ___ always been his strongest academic discipline. (have/has)',
        hint: 'Mathematics là môn học nên là danh từ số ít.',
        correctAnswers: ['has'],
        explanation: 'Mathematics là tên môn học số ít, do đó đi với trợ động từ has.',
        translation: 'Toán học luôn là môn học thế mạnh nhất của anh ấy.',
        level: 'Trung bình'
      },
      {
        id: 'nouns-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The secretary gave me many useful informations about the conference."',
        hint: 'Information không đếm được, không dùng many hay đuôi -s.',
        correctAnswers: [
          'The secretary gave me much useful information about the conference.',
          'The secretary gave me a lot of useful information about the conference.'
        ],
        explanation: 'Information là danh từ không đếm được, không thêm -s và không đi với many. Dùng much hoặc a lot of.',
        translation: 'Thư ký đã cho tôi rất nhiều thông tin hữu ích về hội nghị.',
        level: 'Cơ bản'
      },
      {
        id: 'nouns-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The international news were broadcast live on prime-time television."',
        hint: 'News là danh từ số ít.',
        correctAnswers: [
          'The international news was broadcast live on prime-time television.'
        ],
        explanation: 'News là danh từ không đếm được số ít, động từ to be phải chia là was.',
        translation: 'Bản tin quốc tế đã được phát sóng trực tiếp trên truyền hình vào khung giờ vàng.',
        level: 'Cơ bản'
      },
      {
        id: 'nouns-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "My father bought a new pair of reading glass at the optician."',
        hint: 'Kính mắt là danh từ số nhiều (glasses).',
        correctAnswers: [
          'My father bought a new pair of reading glasses at the optician.'
        ],
        explanation: 'Kính mắt luôn ở dạng số nhiều là glasses (a pair of reading glasses).',
        translation: 'Bố tôi đã mua một cặp kính đọc sách mới ở tiệm kính mắt.',
        level: 'Trung bình'
      },
      {
        id: 'nouns-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Those two countrys have established strong diplomatic ties."',
        hint: 'Country tận cùng phụ âm + y đổi sang số nhiều thành -ies.',
        correctAnswers: [
          'Those two countries have established strong diplomatic ties.'
        ],
        explanation: 'Country tận cùng là phụ âm \'r\' + \'y\', chuyển sang số nhiều thành countries.',
        translation: 'Hai quốc gia đó đã thiết lập mối quan hệ ngoại giao bền chặt.',
        level: 'Cơ bản'
      },
      {
        id: 'nouns-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "All the woman engineers in our firm received prestigious awards."',
        hint: 'Danh từ ghép với woman ở số nhiều phải đổi cả hai từ.',
        correctAnswers: [
          'All the women engineers in our firm received prestigious awards.'
        ],
        explanation: 'Danh từ ghép có woman đứng trước bổ nghĩa phải đổi sang số nhiều là women: women engineers.',
        translation: 'Tất cả các nữ kỹ sư trong công ty chúng tôi đều nhận được các giải thưởng danh giá.',
        level: 'Nâng cao'
      },
      {
        id: 'nouns-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng sở hữu cách (\'s): "The school bags belonging to the students were left outside."',
        hint: 'Dùng the students\' school bags.',
        correctAnswers: [
          'The students\' school bags were left outside.',
          'The students\' bags were left outside.'
        ],
        explanation: 'Students là danh từ số nhiều tận cùng -s, nên chỉ thêm dấu nháy đơn (\') để chỉ sở hữu: the students\' school bags.',
        translation: 'Cặp sách của các học sinh đã bị để ở bên ngoài.',
        level: 'Trung bình'
      },
      {
        id: 'nouns-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sử dụng cụm danh từ "a piece of equipment": "The hospital purchased a new medical machine."',
        hint: 'Thay machine bằng a piece of new medical equipment.',
        correctAnswers: [
          'The hospital purchased a new piece of medical equipment.',
          'The hospital purchased a piece of new medical equipment.'
        ],
        explanation: 'Equipment là danh từ không đếm được, dùng a piece of medical equipment để chỉ một thiết bị cụ thể.',
        translation: 'Bệnh viện đã mua một thiết bị y tế mới.',
        level: 'Nâng cao'
      },
      {
        id: 'nouns-sc-3',
        type: 'sentence-construction',
        prompt: 'Chuyển toàn bộ câu sau sang dạng số nhiều: "The policeman caught the thief in the dark alley."',
        hint: 'Policeman -> policemen; thief -> thieves; alley -> alleys.',
        correctAnswers: [
          'The policemen caught the thieves in the dark alleys.'
        ],
        explanation: 'Policeman đổi thành policemen; thief đổi thành thieves; alley đổi thành alleys.',
        translation: 'Các cảnh sát đã bắt được những tên trộm trong các con hẻm tối.',
        level: 'Nâng cao'
      },
      {
        id: 'nouns-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu kết hợp sử dụng sở hữu cách đồng sở hữu: "Tom and Anna share this modern apartment."',
        hint: 'Chỉ thêm \'s vào tên người thứ hai: Tom and Anna\'s...',
        correctAnswers: [
          'This is Tom and Anna\'s modern apartment.',
          'This modern apartment is Tom and Anna\'s.'
        ],
        explanation: 'Đồng sở hữu chỉ thêm \'s vào danh từ cuối cùng: Tom and Anna\'s apartment.',
        translation: 'Đây là căn hộ hiện đại của Tom và Anna.',
        level: 'Trung bình'
      },
      {
        id: 'nouns-sc-5',
        type: 'sentence-construction',
        prompt: 'Đặt một câu hoàn chỉnh với danh từ trừu tượng "Patience" (Sự kiên nhẫn) làm chủ ngữ đi với động từ to be.',
        hint: 'Mẫu câu: Patience is a virtue.',
        correctAnswers: [
          'Patience is a great virtue in life.',
          'Patience is necessary for success.',
          'Patience is a virtue.'
        ],
        explanation: 'Patience là danh từ trừu tượng không đếm được, làm chủ ngữ số ít đi với động từ is.',
        translation: 'Kiên nhẫn là một đức tính tốt đẹp.',
        level: 'Cơ bản'
      }
    ]
  },

  // 2. PRONOUNS
  {
    id: 'pronouns',
    title: 'Pronouns',
    vietnameseTitle: 'Đại từ',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A1–B1',
    summary: 'Từ thay thế cho danh từ để tránh lặp lại; gồm đại từ nhân xưng, sở hữu, phản thân, chỉ định, bất định, quan hệ và nghi vấn.',
    overview: 'Đại từ (Pronouns) là từ dùng để thay thế cho danh từ hoặc cụm danh từ đã được nhắc đến trước đó, giúp câu văn trở nên trôi chảy, tự nhiên và tránh việc lặp từ gây nhàm chán.',
    foundation: 'Đại từ luôn có một danh từ quy chiếu (antecedent). Dạng của đại từ phải phù hợp với danh từ mà nó thay thế về mặt ngôi (ngôi 1, 2, 3), giống (đực, cái, trung tính), số (ít, nhiều) và chức năng ngữ pháp trong câu (chủ ngữ hay tân ngữ).',
    classification: [
      {
        title: 'Đại từ nhân xưng (Personal Pronouns)',
        description: 'Dạng chủ ngữ: I, you, he, she, it, we, they. Dạng tân ngữ: me, you, him, her, it, us, them.'
      },
      {
        title: 'Đại từ sở hữu (Possessive Pronouns)',
        description: 'Thay thế cho cụm [tính từ sở hữu + danh từ]: mine, yours, his, hers, ours, theirs. Đứng độc lập, không có danh từ theo sau.'
      },
      {
        title: 'Đại từ phản thân (Reflexive Pronouns)',
        description: 'Dùng khi chủ ngữ và tân ngữ cùng chỉ một đối tượng, hoặc để nhấn mạnh: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.'
      },
      {
        title: 'Đại từ chỉ định (Demonstrative Pronouns)',
        description: 'Chỉ đối tượng theo khoảng cách không gian/thời gian: this, that (số ít); these, those (số nhiều).'
      },
      {
        title: 'Đại từ bất định (Indefinite Pronouns)',
        description: 'Chỉ đối tượng không xác định cụ thể: someone, anyone, everyone, no one, something, anything, everything, nothing, each, either, neither, both, few, many.'
      },
      {
        title: 'Đại từ nghi vấn & Đại từ quan hệ (Interrogative & Relative Pronouns)',
        description: 'Nghi vấn dùng đặt câu hỏi: who, whom, whose, which, what. Quan hệ dùng nối mệnh đề: who, whom, whose, which, that.'
      }
    ],
    formulas: [
      {
        title: 'Bảng quy đổi Đại từ nhân xưng & Sở hữu',
        formula: 'Chủ ngữ (S) -> Tân ngữ (O) -> Tính từ sở hữu -> Đại từ sở hữu -> Phản thân\nI -> me -> my -> mine -> myself\nYou -> you -> your -> yours -> yourself/yourselves\nHe -> him -> his -> his -> himself\nShe -> her -> her -> hers -> herself\nIt -> it -> its -> (không có) -> itself\nWe -> us -> our -> ours -> ourselves\nThey -> them -> their -> theirs -> themselves',
        note: 'Đại từ sở hữu đứng độc lập (That book is mine); tính từ sở hữu phải có danh từ (That is my book).'
      },
      {
        title: 'Quy tắc hòa hợp với Đại từ bất định',
        formula: 'Everyone / Somebody / Anyone / Nobody + V (số ít)',
        note: 'Dù mang nghĩa tập hợp mọi người, các đại từ tận cùng -one, -body, -thing luôn chia động từ số ít.'
      }
    ],
    usage: [
      {
        context: 'Làm chủ ngữ trong câu (Subject Pronoun)',
        explanation: 'Đứng trước động từ chính để làm chủ ngữ.',
        example: { english: 'She called the client immediately.', vietnamese: 'Cô ấy đã gọi điện cho khách hàng ngay lập tức.' }
      },
      {
        context: 'Làm tân ngữ cho động từ hoặc giới từ (Object Pronoun)',
        explanation: 'Đứng sau ngoại động từ hoặc sau giới từ.',
        example: { english: 'The manager sent him the contract yesterday.', vietnamese: 'Người quản lý đã gửi hợp đồng cho anh ấy ngày hôm qua.' }
      },
      {
        context: 'Nhấn mạnh hành động tự thực hiện (Reflexive Pronoun)',
        explanation: 'Dùng by + reflexive pronoun (tự mình làm) hoặc đặt sau chủ ngữ để nhấn mạnh.',
        example: { english: 'She completed the entire project by herself.', vietnamese: 'Cô ấy đã tự mình hoàn thành toàn bộ dự án.' }
      }
    ],
    examples: [
      { english: 'This umbrella is yours, but where is mine?', vietnamese: 'Chiếc ô này là của bạn, nhưng chiếc của tôi ở đâu?', note: 'Yours và mine là đại từ sở hữu đứng độc lập.' },
      { english: 'Everyone is ready for the presentation.', vietnamese: 'Mọi người đều đã sẵn sàng cho bài thuyết trình.', note: 'Everyone đi với động từ số ít \'is\'.' },
      { english: 'The cat looked at itself in the mirror.', vietnamese: 'Con mèo đã nhìn chính mình trong gương.', note: 'Đại từ phản thân làm tân ngữ.' }
    ],
    importantNotes: [
      'Phân biệt đại từ sở hữu (mine, yours, hers) và tính từ sở hữu (my, your, her): Đại từ sở hữu KHÔNG ĐƯỢC có danh từ theo sau (Không viết: mine book).',
      'Đại từ tân ngữ dùng sau giới từ: \'between you and me\' (không dùng \'between you and I\').',
      'Đại từ bất định tận cùng -one, -body, -thing luôn chia động từ số ít: \'Everyone has their own opinion\'.',
      'Không nhầm lẫn its (tính từ sở hữu) và it\'s (viết tắt của it is / it has).'
    ],
    comparison: {
      title: 'Phân biệt Possessive Adjective vs Possessive Pronoun',
      points: [
        { concept: 'Tính từ sở hữu (my, your, his, her, our, their)', difference: 'Bắt buộc phải có danh từ đứng ngay sau: That is my laptop.' },
        { concept: 'Đại từ sở hữu (mine, yours, his, hers, ours, theirs)', difference: 'Đứng độc lập, thay thế hoàn toàn cụm [tính từ sở hữu + danh từ]: That laptop is mine.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp hàng ngày: Tìm đồ đạc thất lạc tại văn phòng',
      dialogueOrSentences: [
        { speaker: 'An', text: 'Is this notebook yours or Minh\'s?', translation: 'Quyển sổ này là của bạn hay của Minh thế?' },
        { speaker: 'Bình', text: 'It isn\'t mine. His notebook is blue, but this one is black.', translation: 'Nó không phải của tôi. Sổ của anh ấy màu xanh, còn cuốn này màu đen.' },
        { speaker: 'An', text: 'Someone must have left it here after the meeting.', translation: 'Chắc hẳn ai đó đã để quên nó ở đây sau cuộc họp.' }
      ]
    },
    summaryPoints: [
      'Đại từ thay thế danh từ để tránh lặp từ.',
      'Sử dụng đúng đại từ chủ ngữ (I, he, they) và đại từ tân ngữ (me, him, them).',
      'Đại từ sở hữu (mine, yours, ours) đứng độc lập không đi kèm danh từ.',
      'Đại từ bất định (everyone, nobody, something) chia động từ số ít.',
      'Đại từ phản thân dùng khi chủ ngữ tự tác động lên mình hoặc để nhấn mạnh tính tự lập (by oneself).'
    ],
    exercises: [
      {
        id: 'pronouns-mc-1',
        type: 'multiple-choice',
        prompt: 'The manager invited Lan and ___ to attend the regional conference in Da Nang.',
        choices: ['I', 'me', 'mine', 'myself'],
        correctAnswers: ['me'],
        explanation: 'Sau động từ invited và liên từ and cần đại từ tân ngữ (me).',
        translation: 'Người quản lý đã mời Lan và tôi tham dự hội nghị khu vực tại Đà Nẵng.',
        level: 'Cơ bản'
      },
      {
        id: 'pronouns-mc-2',
        type: 'multiple-choice',
        prompt: 'That laptop is not hers; ___ is the silver one on the left desk.',
        choices: ['her', 'hers', 'she', 'herself'],
        correctAnswers: ['hers'],
        explanation: 'Cần đại từ sở hữu \'hers\' đứng độc lập làm chủ ngữ thay cho \'her laptop\'.',
        translation: 'Chiếc laptop đó không phải của cô ấy; chiếc của cô ấy là chiếc màu bạc ở bàn bên trái.',
        level: 'Cơ bản'
      },
      {
        id: 'pronouns-mc-3',
        type: 'multiple-choice',
        prompt: 'The young athlete trained ___ rigorously every single morning before dawn.',
        choices: ['him', 'himself', 'his', 'he'],
        correctAnswers: ['himself'],
        explanation: 'Chủ ngữ the young athlete tự luyện tập cho chính mình nên dùng đại từ phản thân himself.',
        translation: 'Vận động viên trẻ đã tự huấn luyện bản thân vô cùng nghiêm ngặt mỗi sáng sớm trước bình minh.',
        level: 'Trung bình'
      },
      {
        id: 'pronouns-mc-4',
        type: 'multiple-choice',
        prompt: 'Neither of the proposals ___ considered suitable for the upcoming campaign.',
        choices: ['is', 'are', 'were', 'have been'],
        correctAnswers: ['is'],
        explanation: 'Neither of + danh từ số nhiều đi với động từ số ít trong văn phong chuẩn.',
        translation: 'Không có bản đề xuất nào trong hai bản được xem là phù hợp cho chiến dịch sắp tới.',
        level: 'Nâng cao'
      },
      {
        id: 'pronouns-mc-5',
        type: 'multiple-choice',
        prompt: 'This secret should remain strictly between you and ___.',
        choices: ['I', 'me', 'mine', 'myself'],
        correctAnswers: ['me'],
        explanation: 'Sau giới từ between bắt buộc dùng dạng đại từ tân ngữ (you and me).',
        translation: 'Bí mật này nên được giữ kín tuyệt đối giữa bạn và tôi.',
        level: 'Trung bình'
      },
      {
        id: 'pronouns-fb-1',
        type: 'fill-blank',
        prompt: 'Lan forgot her umbrella at home, so Mary lent her ___. (mine/hers/yours)',
        hint: 'Mary cho mượn chiếc ô của chính Mary.',
        correctAnswers: ['hers'],
        explanation: 'Hers thay thế cho cụm her umbrella, đóng vai trò tân ngữ.',
        translation: 'Lan quên ô ở nhà, nên Mary đã cho cô ấy mượn chiếc ô của mình.',
        level: 'Cơ bản'
      },
      {
        id: 'pronouns-fb-2',
        type: 'fill-blank',
        prompt: 'Everybody in the meeting hall ___ listening attentively to the speaker. (was/were)',
        hint: 'Everybody chia động từ số ít.',
        correctAnswers: ['was'],
        explanation: 'Everybody là đại từ bất định đi với động từ số ít (was).',
        translation: 'Mọi người trong hội trường đang chăm chú lắng nghe diễn giả.',
        level: 'Cơ bản'
      },
      {
        id: 'pronouns-fb-3',
        type: 'fill-blank',
        prompt: 'We painted the entire living room by ___ over the weekend. (reflexive pronoun of we)',
        hint: 'Đại từ phản thân của we.',
        correctAnswers: ['ourselves'],
        explanation: 'Đại từ phản thân tương ứng với chủ ngữ we là ourselves.',
        translation: 'Chúng tôi đã tự mình sơn toàn bộ phòng khách vào dịp cuối tuần.',
        level: 'Cơ bản'
      },
      {
        id: 'pronouns-fb-4',
        type: 'fill-blank',
        prompt: 'The dog wagged ___ tail happily when its owner returned home. (its/it\'s)',
        hint: 'Tính từ sở hữu của it.',
        correctAnswers: ['its'],
        explanation: 'Its là tính từ sở hữu (của nó); it\'s là viết tắt của it is.',
        translation: 'Con chó vẫy đuôi vui mừng khi chủ của nó trở về nhà.',
        level: 'Cơ bản'
      },
      {
        id: 'pronouns-fb-5',
        type: 'fill-blank',
        prompt: 'Has ___ seen my car keys anywhere in the office? (anyone/someone/nobody)',
        hint: 'Dùng trong câu hỏi nghi vấn.',
        correctAnswers: ['anyone', 'anybody'],
        explanation: 'Trong câu nghi vấn hỏi xem có ai thấy không, dùng anyone hoặc anybody.',
        translation: 'Có ai thấy chìa khóa xe của tôi ở đâu đó trong văn phòng không?',
        level: 'Trung bình'
      },
      {
        id: 'pronouns-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "My brother and me visited our grandparents last Sunday."',
        hint: 'Chủ ngữ phải dùng dạng đại từ chủ ngữ (I).',
        correctAnswers: [
          'My brother and I visited our grandparents last Sunday.'
        ],
        explanation: 'Đứng ở vị trí chủ ngữ của câu, phải dùng đại từ nhân xưng chủ ngữ: My brother and I.',
        translation: 'Anh trai tôi và tôi đã đến thăm ông bà vào Chủ nhật tuần trước.',
        level: 'Cơ bản'
      },
      {
        id: 'pronouns-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Everyone in the office have submitted their monthly report."',
        hint: 'Everyone chia động từ số ít (has).',
        correctAnswers: [
          'Everyone in the office has submitted their monthly report.'
        ],
        explanation: 'Everyone là đại từ bất định số ít, động từ chia has submitted thay vì have submitted.',
        translation: 'Mọi người trong văn phòng đều đã nộp báo cáo hàng tháng của mình.',
        level: 'Cơ bản'
      },
      {
        id: 'pronouns-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Her new apartment is much larger than my."',
        hint: 'Đại từ sở hữu đứng độc lập phải là mine.',
        correctAnswers: [
          'Her new apartment is much larger than mine.',
          'Her new apartment is much larger than my apartment.'
        ],
        explanation: 'My là tính từ sở hữu bắt buộc có danh từ theo sau; ở đây đứng độc lập so sánh phải dùng đại từ sở hữu mine.',
        translation: 'Căn hộ mới của cô ấy lớn hơn nhiều so với căn hộ của tôi.',
        level: 'Trung bình'
      },
      {
        id: 'pronouns-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "They enjoyed them at the annual beach party."',
        hint: 'Họ tự tận hưởng niềm vui dùng đại từ phản thân themselves.',
        correctAnswers: [
          'They enjoyed themselves at the annual beach party.'
        ],
        explanation: 'Cụm enjoy oneself (vui vẻ, tận hưởng), chủ ngữ là they nên dùng đại từ phản thân themselves.',
        translation: 'Họ đã tận hưởng khoảng thời gian vui vẻ tại bữa tiệc bãi biển thường niên.',
        level: 'Trung bình'
      },
      {
        id: 'pronouns-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The company announced it\'s annual financial results today."',
        hint: 'Phân biệt it\'s và tính từ sở hữu its.',
        correctAnswers: [
          'The company announced its annual financial results today.'
        ],
        explanation: 'It\'s là viết tắt của it is/it has; tính từ sở hữu của company phải là its (không có dấu nháy).',
        translation: 'Hôm nay công ty đã công bố kết quả tài chính thường niên của mình.',
        level: 'Cơ bản'
      },
      {
        id: 'pronouns-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng đại từ sở hữu thay thế cho cụm danh từ lặp lại: "Your car is fast, but my car is much faster."',
        hint: 'Thay my car bằng mine.',
        correctAnswers: [
          'Your car is fast, but mine is much faster.'
        ],
        explanation: 'Mine là đại từ sở hữu thay thế cho cụm my car để tránh lặp từ.',
        translation: 'Xe của bạn nhanh, nhưng xe của tôi nhanh hơn nhiều.',
        level: 'Cơ bản'
      },
      {
        id: 'pronouns-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu nhấn mạnh việc tự mình làm bằng cụm by + reflexive pronoun: "She cooked the entire three-course dinner without any help."',
        hint: 'Dùng cooked the entire three-course dinner by herself.',
        correctAnswers: [
          'She cooked the entire three-course dinner by herself.'
        ],
        explanation: 'By herself đồng nghĩa với without any help, biểu thị tính tự lập.',
        translation: 'Cô ấy đã tự mình nấu toàn bộ bữa tối ba món mà không cần ai giúp.',
        level: 'Trung bình'
      },
      {
        id: 'pronouns-sc-3',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau sang thể phủ định hoàn toàn dùng đại từ bất định "Nobody": "Anybody did not understand the complicated instruction."',
        hint: 'Dùng Nobody understood...',
        correctAnswers: [
          'Nobody understood the complicated instruction.',
          'No one understood the complicated instruction.'
        ],
        explanation: 'Nobody/No one mang nghĩa phủ định sẵn, đi với động từ khẳng định: Nobody understood...',
        translation: 'Không một ai hiểu được bản hướng dẫn phức tạp đó.',
        level: 'Trung bình'
      },
      {
        id: 'pronouns-sc-4',
        type: 'sentence-construction',
        prompt: 'Kết hợp hai câu thành một câu sử dụng đại từ quan hệ "who": "The architect designed this building. She won an international prize."',
        hint: 'The architect who designed this building...',
        correctAnswers: [
          'The architect who designed this building won an international prize.'
        ],
        explanation: 'Who là đại từ quan hệ thay thế cho the architect làm chủ ngữ của mệnh đề quan hệ.',
        translation: 'Kiến trúc sư người đã thiết kế tòa nhà này đã giành giải thưởng quốc tế.',
        level: 'Nâng cao'
      },
      {
        id: 'pronouns-sc-5',
        type: 'sentence-construction',
        prompt: 'Đặt một câu giao tiếp hỏi xem vật này thuộc về ai dùng đại từ sở hữu "whose": "Chiếc ô này của ai thế?"',
        hint: 'Whose umbrella is this? hoặc Whose is this umbrella?',
        correctAnswers: [
          'Whose umbrella is this?',
          'Whose is this umbrella?'
        ],
        explanation: 'Whose dùng để hỏi về quyền sở hữu: Whose umbrella is this?',
        translation: 'Chiếc ô này là của ai thế?',
        level: 'Cơ bản'
      }
    ]
  },

  // 3. DETERMINERS
  {
    id: 'determiners',
    title: 'Determiners',
    vietnameseTitle: 'Từ hạn định',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A2–B1',
    summary: 'Từ đứng trước danh từ để giới hạn và xác định danh từ; bao gồm chỉ định, sở hữu, lượng từ và từ phân bổ.',
    overview: 'Từ hạn định (Determiners) là từ đứng trước danh từ để làm rõ danh từ đó đang chỉ đối tượng cụ thể hay chung chung, thuộc về ai, ở khoảng cách nào hoặc với số lượng bao nhiêu. Khác với đại từ đứng độc lập, từ hạn định LUÔN LUÔN đi kèm với một danh từ theo sau.',
    foundation: 'Vị trí của từ hạn định luôn đứng trước danh từ và trước cả các tính từ miêu tả bổ nghĩa cho danh từ đó: [Từ hạn định] + [Tính từ] + [Danh từ] (ví dụ: this beautiful painting, my new laptop). Trong tiếng Anh, một danh từ đếm được số ít không bao giờ được đứng trơ trọi một mình mà bắt buộc phải có ít nhất một từ hạn định đi kèm.',
    classification: [
      {
        title: 'Mạo từ (Articles)',
        description: 'a, an (bất định) và the (xác định).'
      },
      {
        title: 'Từ hạn định chỉ định (Demonstrative Determiners)',
        description: 'this, that (đi với danh từ số ít hoặc không đếm được); these, those (đi với danh từ số nhiều).'
      },
      {
        title: 'Từ hạn định sở hữu (Possessive Determiners / Adjectives)',
        description: 'my, your, his, her, its, our, their. Đi trước danh từ để xác định chủ sở hữu.'
      },
      {
        title: 'Từ hạn định chỉ số lượng (Quantifying Determiners)',
        description: 'some, any, many, much, few, little, several, all, no, enough.'
      },
      {
        title: 'Từ hạn định phân bổ (Distributive Determiners)',
        description: 'each, every, either, neither. Đi với danh từ đếm được số ít.'
      },
      {
        title: 'Từ hạn định nghi vấn & số thứ tự (Interrogative & Numbers)',
        description: 'which, what, whose; one, two, first, second.'
      }
    ],
    formulas: [
      {
        title: 'Trật tự trong cụm danh từ',
        formula: '[Pre-determiner] + [Central determiner] + [Post-determiner] + [Adjectives] + [Noun]',
        note: 'Ví dụ: all (pre) + my (central) + three (post) + close (adj) + friends (noun).'
      },
      {
        title: 'Quy tắc Mỗi / Mọi (Each vs Every)',
        formula: 'Each / Every + N (số ít) + V (số ít)',
        note: 'Each nhấn mạnh từng cá thể riêng rẽ; Every nhấn mạnh toàn bộ các thành viên trong tập hợp.'
      },
      {
        title: 'Either & Neither',
        formula: 'Either + N (số ít): một trong hai\nNeither + N (số ít): không ai/vật nào trong hai',
        note: 'Cả hai đều đi trực tiếp với danh từ số ít và động từ số ít.'
      }
    ],
    usage: [
      {
        context: 'Xác định khoảng cách đối tượng (Demonstratives)',
        explanation: 'This/These chỉ đối tượng gần người nói; That/Those chỉ đối tượng xa người nói.',
        example: { english: 'This document requires your urgent signature.', vietnamese: 'Tài liệu này cần chữ ký khẩn cấp của bạn.' }
      },
      {
        context: 'Phân bổ từng đối tượng trong nhóm (Distributives)',
        explanation: 'Each/Every phân phối đến từng cá thể trong một nhóm.',
        example: { english: 'Every employee has completed the annual training.', vietnamese: 'Mỗi nhân viên đều đã hoàn thành khóa đào tạo hàng năm.' }
      },
      {
        context: 'Lựa chọn giữa hai đối tượng (Either / Neither)',
        explanation: 'Dùng khi chỉ có đúng 2 đối tượng được đề cập.',
        example: { english: 'Neither candidate met all the required criteria.', vietnamese: 'Cả hai ứng viên đều không đáp ứng đủ các tiêu chí yêu cầu.' }
      }
    ],
    examples: [
      { english: 'All these old photographs bring back memories.', vietnamese: 'Tất cả những bức ảnh cũ này gợi lại nhiều kỷ niệm.', note: 'All (pre-determiner) đi với these (central determiner).' },
      { english: 'Each participant received a certificate of completion.', vietnamese: 'Mỗi người tham gia đã nhận được một chứng nhận hoàn thành.', note: 'Each + danh từ số ít + động từ số ít.' },
      { english: 'Neither solution is completely perfect.', vietnamese: 'Không giải pháp nào trong hai giải pháp là hoàn toàn hoàn hảo.', note: 'Neither đi với danh từ số ít solution.' }
    ],
    importantNotes: [
      'Từ hạn định KHÔNG BAO GIỜ đứng một mình; nó luôn có danh từ theo sau (Khác với đại từ: This is mine [this là đại từ]; This book is mine [this là từ hạn định]).',
      'Không dùng 2 từ hạn định trung tâm cùng lúc trước một danh từ (Sai: \'the my car\', \'this your idea\'; Đúng: \'my car\', \'this idea of yours\').',
      'Every không thể đi một mình không có danh từ (Sai: \'Every of them\'; Đúng: \'Each of them\').',
      'Both đi với danh từ số nhiều (both students); Either/Neither đi với danh từ số ít (either student).'
    ],
    comparison: {
      title: 'Phân biệt Determiner vs Pronoun',
      points: [
        { concept: 'Determiner (Từ hạn định)', difference: 'Bắt buộc đứng trước danh từ: That house is old.' },
        { concept: 'Pronoun (Đại từ)', difference: 'Đứng một mình thay thế danh từ: That is an old house.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp mua sắm: Lựa chọn sản phẩm tại cửa hàng',
      dialogueOrSentences: [
        { speaker: 'Salesperson', text: 'Which shoes would you like to try on, sir?', translation: 'Thưa anh, anh muốn thử đôi giày nào ạ?' },
        { speaker: 'Customer', text: 'I like both pairs, but neither pair seems to match my suit.', translation: 'Tôi thích cả hai đôi, nhưng không đôi nào có vẻ hợp với bộ com-lê của tôi.' },
        { speaker: 'Salesperson', text: 'Let me show you this new leather collection.', translation: 'Để em giới thiệu với anh bộ sưu tập da mới này nhé.' }
      ]
    },
    summaryPoints: [
      'Từ hạn định đứng trước danh từ để xác định và giới hạn ý nghĩa danh từ.',
      'Bao gồm: mạo từ, chỉ định (this/that), sở hữu (my/your), lượng từ (some/many), phân bổ (each/every).',
      'Danh từ đếm được số ít luôn cần có từ hạn định đi kèm.',
      'Each/Every/Neither/Either đi trực tiếp với danh từ số ít và động từ số ít.',
      'Phân biệt rõ từ hạn định (có danh từ đi kèm) và đại từ (đứng một mình).'
    ],
    exercises: [
      {
        id: 'determiners-mc-1',
        type: 'multiple-choice',
        prompt: '___ student in the academy is assigned an academic advisor.',
        choices: ['Every', 'All', 'Both', 'Many'],
        correctAnswers: ['Every'],
        explanation: 'Student là danh từ số ít và động từ chia is assigned (số ít), do đó từ hạn định phù hợp là Every.',
        translation: 'Mỗi học viên trong học viện đều được chỉ định một cố vấn học tập.',
        level: 'Cơ bản'
      },
      {
        id: 'determiners-mc-2',
        type: 'multiple-choice',
        prompt: 'I tried two different keys, but ___ key opened the locked cabinet.',
        choices: ['neither', 'either', 'both', 'none'],
        correctAnswers: ['neither'],
        explanation: 'Nhắc đến 2 đối tượng và mang nghĩa phủ định (không chiếc nào), đi với danh từ số ít key nên dùng neither.',
        translation: 'Tôi đã thử hai chiếc chìa khóa khác nhau, nhưng không chiếc nào mở được chiếc tủ đã khóa.',
        level: 'Trung bình'
      },
      {
        id: 'determiners-mc-3',
        type: 'multiple-choice',
        prompt: '___ applicants who passed the interview will be invited to the second round.',
        choices: ['All the', 'Every', 'Each', 'This'],
        correctAnswers: ['All the'],
        explanation: 'Applicants là danh từ số nhiều, đi với pre-determiner \'All the\'.',
        translation: 'Tất cả các ứng viên đã vượt qua buổi phỏng vấn sẽ được mời vào vòng hai.',
        level: 'Trung bình'
      },
      {
        id: 'determiners-mc-4',
        type: 'multiple-choice',
        prompt: 'Could you please pass me ___ documents over there on the counter?',
        choices: ['those', 'these', 'this', 'that'],
        correctAnswers: ['those'],
        explanation: 'Documents là danh từ số nhiều ở vị trí xa người nói (over there) nên dùng từ hạn định those.',
        translation: 'Bạn có thể làm ơn đưa cho tôi những tài liệu ở đằng kia trên quầy được không?',
        level: 'Cơ bản'
      },
      {
        id: 'determiners-mc-5',
        type: 'multiple-choice',
        prompt: 'We can schedule the meeting on Monday or Tuesday; ___ day suits me fine.',
        choices: ['either', 'neither', 'both', 'every'],
        correctAnswers: ['either'],
        explanation: 'Either đi với danh từ số ít day để chỉ \'bất kỳ ngày nào trong hai ngày\'.',
        translation: 'Chúng ta có thể lên lịch họp vào thứ Hai hoặc thứ Ba; ngày nào trong hai ngày cũng tiện cho tôi.',
        level: 'Nâng cao'
      },
      {
        id: 'determiners-fb-1',
        type: 'fill-blank',
        prompt: '___ applicant must bring their original diploma to the verification room. (each/all)',
        hint: 'Đi kèm danh từ số ít applicant.',
        correctAnswers: ['Each', 'Every'],
        explanation: 'Applicant là danh từ số ít nên dùng từ hạn định Each hoặc Every.',
        translation: 'Mỗi ứng viên phải mang theo văn bằng gốc đến phòng đối chiếu.',
        level: 'Cơ bản'
      },
      {
        id: 'determiners-fb-2',
        type: 'fill-blank',
        prompt: '___ of the two brothers wanted to take over their family business. (Neither/None)',
        hint: 'Khi chỉ có 2 đối tượng dùng neither.',
        correctAnswers: ['Neither'],
        explanation: 'Khi nói về hai đối tượng phủ định, dùng Neither of the two...',
        translation: 'Không người nào trong hai anh em muốn tiếp quản công việc kinh doanh của gia đình.',
        level: 'Trung bình'
      },
      {
        id: 'determiners-fb-3',
        type: 'fill-blank',
        prompt: 'Look at ___ high mountain peak in the distance. (this/that)',
        hint: 'Vật ở xa (in the distance) dùng that.',
        correctAnswers: ['that'],
        explanation: 'Chỉ vật ở xa người nói dùng that.',
        translation: 'Hãy nhìn đỉnh núi cao đằng xa kia kìa.',
        level: 'Cơ bản'
      },
      {
        id: 'determiners-fb-4',
        type: 'fill-blank',
        prompt: 'She spent ___ her savings on her daughter\'s overseas education. (all/every)',
        hint: 'All có thể đứng trước tính từ sở hữu.',
        correctAnswers: ['all'],
        explanation: 'All có thể đóng vai trò pre-determiner đứng trước tính từ sở hữu her savings.',
        translation: 'Cô ấy đã dành toàn bộ tiền tiết kiệm cho việc du học của con gái.',
        level: 'Trung bình'
      },
      {
        id: 'determiners-fb-5',
        type: 'fill-blank',
        prompt: '___ member of the orchestra tuned their instrument before the rehearsal started. (Every/All)',
        hint: 'Member là danh từ số ít.',
        correctAnswers: ['Every', 'Each'],
        explanation: 'Every/Each đi với danh từ số ít member.',
        translation: 'Mọi thành viên của dàn nhạc đều chỉnh dây nhạc cụ trước khi buổi diễn tập bắt đầu.',
        level: 'Cơ bản'
      },
      {
        id: 'determiners-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Every students in the classroom was taking notes carefully."',
        hint: 'Every đi với danh từ số ít (student).',
        correctAnswers: [
          'Every student in the classroom was taking notes carefully.'
        ],
        explanation: 'Từ hạn định Every chỉ đi với danh từ đếm được số ít: Every student.',
        translation: 'Mọi học sinh trong lớp học đều đang ghi chép cẩn thận.',
        level: 'Cơ bản'
      },
      {
        id: 'determiners-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "I do not agree with the this proposal presented by the marketing team."',
        hint: 'Không dùng 2 từ hạn định trung tâm cùng lúc (the this).',
        correctAnswers: [
          'I do not agree with this proposal presented by the marketing team.'
        ],
        explanation: 'Không được dùng kết hợp \'the this\'; chỉ dùng một từ hạn định: this proposal.',
        translation: 'Tôi không đồng ý với bản đề xuất này do đội ngũ tiếp thị trình bày.',
        level: 'Trung bình'
      },
      {
        id: 'determiners-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "These type of problem requires deep mathematical analysis."',
        hint: 'Type là số ít nên phải đi với This.',
        correctAnswers: [
          'This type of problem requires deep mathematical analysis.',
          'These types of problems require deep mathematical analysis.'
        ],
        explanation: 'Type là danh từ số ít nên từ hạn định phải là This type (hoặc số nhiều: These types).',
        translation: 'Dạng bài toán này đòi hỏi sự phân tích toán học sâu sắc.',
        level: 'Trung bình'
      },
      {
        id: 'determiners-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Neither restaurants we visited last night served authentic Italian food."',
        hint: 'Neither đi với danh từ số ít restaurant.',
        correctAnswers: [
          'Neither restaurant we visited last night served authentic Italian food.'
        ],
        explanation: 'Từ hạn định Neither đi trực tiếp với danh từ số ít: Neither restaurant.',
        translation: 'Không có nhà hàng nào trong hai nhà hàng chúng tôi ghé tối qua phục vụ món Ý chính hiệu.',
        level: 'Nâng cao'
      },
      {
        id: 'determiners-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Every of the employees received a performance bonus."',
        hint: 'Every không đứng trước of; phải dùng Each of.',
        correctAnswers: [
          'Each of the employees received a performance bonus.',
          'Every employee received a performance bonus.'
        ],
        explanation: 'Every không thể làm đại từ đứng trước of; cấu trúc đúng là Each of the employees hoặc Every employee.',
        translation: 'Mỗi nhân viên đều đã nhận được tiền thưởng theo hiệu suất.',
        level: 'Nâng cao'
      },
      {
        id: 'determiners-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng từ hạn định "Each": "All members of the club have their own locker."',
        hint: 'Each member of the club has...',
        correctAnswers: [
          'Each member of the club has their own locker.',
          'Each member of the club has his or her own locker.'
        ],
        explanation: 'Each đi với danh từ số ít member và động từ số ít has.',
        translation: 'Mỗi thành viên của câu lạc bộ đều có tủ đồ riêng.',
        level: 'Trung bình'
      },
      {
        id: 'determiners-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại hai câu sau thành một câu dùng từ hạn định "Neither": "Hotel A was not cheap. Hotel B was not cheap either."',
        hint: 'Neither hotel was cheap.',
        correctAnswers: [
          'Neither hotel was cheap.'
        ],
        explanation: 'Neither hotel was cheap tóm gọn cả hai khách sạn đều không rẻ.',
        translation: 'Không có khách sạn nào trong hai khách sạn là rẻ cả.',
        level: 'Trung bình'
      },
      {
        id: 'determiners-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau bằng cách dùng từ hạn định chỉ định số nhiều "Those": "That student over there received a scholarship."',
        hint: 'Đổi that student thành those students và chia động từ phù hợp.',
        correctAnswers: [
          'Those students over there received scholarships.',
          'Those students over there received a scholarship.'
        ],
        explanation: 'Số nhiều của that student là those students.',
        translation: 'Những học sinh ở đằng kia đã nhận được học bổng.',
        level: 'Cơ bản'
      },
      {
        id: 'determiners-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng từ hạn định "Either" để diễn đạt quyền lựa chọn: "You can take Bus 15 or Bus 20. Both buses go to the airport."',
        hint: 'Either bus goes to the airport.',
        correctAnswers: [
          'Either bus goes to the airport.'
        ],
        explanation: 'Either bus goes to the airport nghĩa là bất kỳ xe buýt nào trong 2 xe cũng đều đi đến sân bay.',
        translation: 'Bất kỳ xe buýt nào trong hai xe cũng đều đi đến sân bay.',
        level: 'Nâng cao'
      },
      {
        id: 'determiners-sc-5',
        type: 'sentence-construction',
        prompt: 'Đặt một câu sử dụng cụm danh từ có pre-determiner "all", possessive "my" và danh từ "books".',
        hint: 'Mẫu: All my books are on the shelf.',
        correctAnswers: [
          'All my books are on the bookshelf.',
          'All my books are packed in the box.',
          'All my books are on the shelf.'
        ],
        explanation: 'All my books tuân theo trật tự: pre-determiner (all) + possessive determiner (my) + noun (books).',
        translation: 'Tất cả sách của tôi đều ở trên giá sách.',
        level: 'Cơ bản'
      }
    ]
  },

  // 4. ARTICLES
  {
    id: 'articles',
    title: 'Articles',
    vietnameseTitle: 'Mạo từ',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A1–B2',
    summary: 'Mạo từ bất định (A, An), mạo từ xác định (The) và mạo từ số không (Zero article Ø); quy tắc dùng mạo từ với danh từ chung và địa danh.',
    overview: 'Mạo từ (Articles) là một dạng từ hạn định đặc biệt dùng để chỉ ra danh từ đang được nói đến là đối tượng chưa xác định (A, An) hay đối tượng đã xác định, cả người nói và người nghe đều biết rõ (The), hoặc nói về đối tượng chung nói chung không dùng mạo từ (Zero Article Ø).',
    foundation: 'Việc sử dụng mạo từ phụ thuộc vào 3 yếu tố cốt lõi: tính chất đếm được hay không đếm được của danh từ, danh từ ở số ít hay số nhiều, và mức độ xác định của danh từ trong ngữ cảnh giao tiếp.',
    classification: [
      {
        title: 'Mạo từ bất định (Indefinite Articles): A / An',
        description: 'Dùng trước danh từ đếm được số ít khi được nhắc đến lần đầu tiên hoặc mang nghĩa "một". Dùng \'An\' trước các từ bắt đầu bằng một NGUYÊN ÂM PHÁT ÂM (/e/, /æ/, /ɪ/, /ɒ/, /ʌ/...), dùng \'A\' trước PHỤ ÂM PHÁT ÂM.'
      },
      {
        title: 'Mạo từ xác định (Definite Article): The',
        description: 'Dùng trước danh từ (số ít, số nhiều, không đếm được) khi đối tượng đã được xác định cụ thể, được nhắc đến lần thứ hai, là duy nhất, hoặc có mệnh đề/cụm từ bổ nghĩa đi sau.'
      },
      {
        title: 'Mạo từ số không (Zero Article: Ø)',
        description: 'Không dùng mạo từ trước danh từ không đếm được hoặc danh từ số nhiều khi nói về tính chất chung, tên môn học, bữa ăn, ngôn ngữ, thể thao, hoặc tên quốc gia/thành phố đơn lẻ.'
      }
    ],
    formulas: [
      {
        title: 'Quy tắc chọn A vs An (Dựa theo PHIÊN ÂM, không theo chữ cái viết)',
        formula: 'An + [nguyên âm phát âm]: an apple, an hour (/ˈaʊər/), an honest man (/ˈɒnɪst/), an MBA (/ˌem.biːˈeɪ/)\nA + [phụ âm phát âm]: a book, a university (/ˌjuː.nɪˈvɜː.sə.ti/), a European (/ˌjʊə.rəˈpiː.ən/), a one-way street (/wʌn/)',
        note: 'Hour bắt đầu bằng chữ \'h\' câm nên dùng an; University bắt đầu bằng chữ \'u\' phát âm là phụ âm /j/ nên dùng a.'
      },
      {
        title: 'Các trường hợp bắt buộc dùng THE',
        formula: '1. Vật duy nhất: the sun, the moon, the earth, the sky\n2. So sánh nhất & số thứ tự: the tallest, the best, the first\n3. Nhạc cụ: play the guitar, play the piano\n4. Dãy núi, quần đảo, sa mạc, sông, đại dương: the Himalayas, the Sahara, the Thames, the Pacific\n5. Quốc gia có số nhiều hoặc liên bang: the United States, the United Kingdom, the Philippines, the Netherlands\n6. The + Adj = nhóm người: the poor, the rich, the elderly',
        note: 'Núi đơn lẻ (Mount Everest) và hồ đơn lẻ (Lake Baikal) không dùng the.'
      }
    ],
    usage: [
      {
        context: 'Giới thiệu đối tượng lần đầu vs Nhắc lại (A/An -> The)',
        explanation: 'Lần đầu nhắc đến dùng a/an; từ lần thứ hai trở đi khi đối tượng đã xác định dùng the.',
        example: { english: 'I saw a man in front of the house. The man was holding a package.', vietnamese: 'Tôi nhìn thấy một người đàn ông trước ngôi nhà. Người đàn ông đó đang cầm một kiện hàng.' }
      },
      {
        context: 'Quy tắc các địa điểm công cộng (School, Hospital, Prison, Church)',
        explanation: 'Đến đúng mục đích chính không dùng the (go to school để học; go to hospital để chữa bệnh). Đến vì mục đích thăm viếng/khác dùng the (go to the school để đón con).',
        example: { english: 'He is in hospital after an accident, but his mother went to the hospital to visit him.', vietnamese: 'Anh ấy đang nằm viện sau tai nạn, nhưng mẹ anh ấy đã đến bệnh viện để thăm anh ấy.' }
      },
      {
        context: 'Nói về sự vật chung chung (General Statements)',
        explanation: 'Danh từ số nhiều hoặc không đếm được nói chung không dùng mạo từ.',
        example: { english: 'Children love playing video games.', vietnamese: 'Trẻ em thích chơi trò chơi điện tử.' }
      }
    ],
    examples: [
      { english: 'She is an honest and hardworking employee.', vietnamese: 'Cô ấy là một nhân viên trung thực và chăm chỉ.', note: 'Honest có âm \'h\' câm nên đi với mạo từ \'an\'.' },
      { english: 'The Pacific Ocean is the largest ocean on Earth.', vietnamese: 'Thái Bình Dương là đại dương lớn nhất trên Trái Đất.', note: 'Đại dương và so sánh nhất đều dùng \'the\'.' },
      { english: 'Breakfast is the most important meal of the day.', vietnamese: 'Bữa sáng là bữa ăn quan trọng nhất trong ngày.', note: 'Tên bữa ăn nói chung không dùng mạo từ.' }
    ],
    importantNotes: [
      'Phát âm quyết định A hay An: an hour (h câm), an heir, a European (/j/), a university (/j/), a uniform (/j/), a unique opportunity (/j/).',
      'Tên các môn thể thao, ngôn ngữ, bữa ăn thông thường không có mạo từ: play football, speak English, have lunch.',
      'Không dùng the với tên quốc gia có 1 từ: Vietnam, France, Japan. Nhưng bắt buộc dùng the với quốc gia có Republic, Kingdom, States, hoặc tận cùng có -s: the USA, the UK, the Netherlands, the Philippines.',
      'Không dùng the trước tên lục địa, hồ đơn, đỉnh núi đơn: Asia, Lake Michigan, Mount Fuji.'
    ],
    comparison: {
      title: 'Phân biệt A/An vs The vs Zero Article (Ø)',
      points: [
        { concept: 'A / An (Bất định)', difference: 'Dùng với danh từ đếm được số ít, người nghe chưa biết cụ thể là ai/cái gì: I bought a car.' },
        { concept: 'The (Xác định)', difference: 'Cả người nói và nghe đều biết rõ đối tượng đang nói đến: The car I bought is electric.' },
        { concept: 'Zero Article Ø', difference: 'Dùng cho danh từ số nhiều hoặc không đếm được mang nghĩa khái quát: Cars cause pollution.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp du lịch: Hỏi đường và thông tin điểm tham quan',
      dialogueOrSentences: [
        { speaker: 'Tourist', text: 'Excuse me, is there an ATM near here?', translation: 'Xin lỗi, có cây ATM nào ở gần đây không ạ?' },
        { speaker: 'Local', text: 'Yes, go straight and you will see the national bank on the right.', translation: 'Có, anh cứ đi thẳng là sẽ thấy ngân hàng quốc gia ở bên tay phải.' },
        { speaker: 'Tourist', text: 'Thank you! Can you also recommend a good local restaurant?', translation: 'Cảm ơn anh! Anh có thể gợi ý một nhà hàng địa phương ngon được không?' }
      ]
    },
    summaryPoints: [
      'A dùng trước phụ âm phát âm; An dùng trước nguyên âm phát âm (chuẩn theo phiên âm quốc tế).',
      'The dùng khi đối tượng đã xác định, là duy nhất, so sánh nhất, hoặc tên sông/biển/dãy núi.',
      'Zero Article (Ø) dùng cho danh từ số nhiều/không đếm được nói chung, tên môn học, bữa ăn, thể thao.',
      'Chú ý bẫy âm: an hour, an honest man nhưng a university, a European country.',
      'Quy tắc trường học/bệnh viện: đi đúng mục đích không dùng the; đi thăm viếng dùng the.'
    ],
    exercises: [
      {
        id: 'articles-mc-1',
        type: 'multiple-choice',
        prompt: 'Dr. John holds ___ European medical degree and works at the central hospital.',
        choices: ['a', 'an', 'the', 'Ø'],
        correctAnswers: ['a'],
        explanation: 'European bắt đầu bằng âm phụ âm /j/ (/ˌjʊə.rəˈpiː.ən/), do đó phải dùng mạo từ \'a\'.',
        translation: 'Bác sĩ John sở hữu một tấm bằng y khoa châu Âu và làm việc tại bệnh viện trung ương.',
        level: 'Cơ bản'
      },
      {
        id: 'articles-mc-2',
        type: 'multiple-choice',
        prompt: 'We stayed at a luxury resort near ___ Nile River during our trip to Egypt.',
        choices: ['the', 'a', 'an', 'Ø'],
        correctAnswers: ['the'],
        explanation: 'Tên các con sông trên thế giới luôn đi với mạo từ xác định The: the Nile River.',
        translation: 'Chúng tôi đã nghỉ tại một khu nghỉ dưỡng sang trọng gần sông Nin trong chuyến đi Ai Cập.',
        level: 'Trung bình'
      },
      {
        id: 'articles-mc-3',
        type: 'multiple-choice',
        prompt: '___ honesty is considered one of the most admirable human qualities.',
        choices: ['Ø', 'The', 'An', 'A'],
        correctAnswers: ['Ø'],
        explanation: 'Honesty là danh từ trừu tượng không đếm được nói chung, không dùng mạo từ (Zero article).',
        translation: 'Sự trung thực được xem là một trong những phẩm chất đáng ngưỡng mộ nhất của con người.',
        level: 'Trung bình'
      },
      {
        id: 'articles-mc-4',
        type: 'multiple-choice',
        prompt: 'My brother has been learning how to play ___ violin for three years.',
        choices: ['the', 'a', 'an', 'Ø'],
        correctAnswers: ['the'],
        explanation: 'Động từ play khi đi kèm nhạc cụ bắt buộc dùng mạo từ the: play the violin.',
        translation: 'Em trai tôi đã học chơi đàn vĩ cầm được ba năm.',
        level: 'Cơ bản'
      },
      {
        id: 'articles-mc-5',
        type: 'multiple-choice',
        prompt: 'Mount Everest is ___ highest mountain in the world.',
        choices: ['the', 'a', 'an', 'Ø'],
        correctAnswers: ['the'],
        explanation: 'Trước tính từ ở dạng so sánh nhất (highest) bắt buộc phải dùng mạo từ the.',
        translation: 'Đỉnh Everest là ngọn núi cao nhất trên thế giới.',
        level: 'Cơ bản'
      },
      {
        id: 'articles-fb-1',
        type: 'fill-blank',
        prompt: 'It takes approximately ___ hour to drive from the city centre to the airport. (a/an/the)',
        hint: 'Hour có âm h câm.',
        correctAnswers: ['an'],
        explanation: 'Hour có âm \'h\' câm, bắt đầu bằng nguyên âm /aʊ/ nên dùng an.',
        translation: 'Mất khoảng một giờ để lái xe từ trung tâm thành phố ra sân bay.',
        level: 'Cơ bản'
      },
      {
        id: 'articles-fb-2',
        type: 'fill-blank',
        prompt: 'They went on holiday to ___ United Kingdom last summer. (a/an/the/Ø)',
        hint: 'Tên quốc gia có Kingdom đi với the.',
        correctAnswers: ['the'],
        explanation: 'Tên quốc gia có United Kingdom bắt buộc có mạo từ the.',
        translation: 'Họ đã đi nghỉ ở Vương quốc Anh vào mùa hè năm ngoái.',
        level: 'Cơ bản'
      },
      {
        id: 'articles-fb-3',
        type: 'fill-blank',
        prompt: '___ breakfast is served daily from 6:30 a.m. to 10:00 a.m. (A/An/The/Ø)',
        hint: 'Tên bữa ăn nói chung không dùng mạo từ.',
        correctAnswers: ['Ø'],
        explanation: 'Tên bữa ăn thông thường nói chung dùng mạo từ số không (Ø).',
        translation: 'Bữa sáng được phục vụ hàng ngày từ 6:30 đến 10:00 sáng.',
        level: 'Cơ bản'
      },
      {
        id: 'articles-fb-4',
        type: 'fill-blank',
        prompt: 'She applied for ___ MBA program at Harvard University. (a/an/the)',
        hint: 'MBA phát âm bắt đầu bằng /em/ (nguyên âm e).',
        correctAnswers: ['an'],
        explanation: 'Từ viết tắt MBA phát âm là /ˌem.biːˈeɪ/ bắt đầu bằng nguyên âm /e/ nên dùng an.',
        translation: 'Cô ấy đã nộp hồ sơ vào một chương trình MBA tại Đại học Harvard.',
        level: 'Trung bình'
      },
      {
        id: 'articles-fb-5',
        type: 'fill-blank',
        prompt: '___ sun rises in the east and sets in the west. (A/An/The/Ø)',
        hint: 'Vật thể duy nhất trong tự nhiên.',
        correctAnswers: ['The'],
        explanation: 'Mặt trời là vật thể duy nhất trong tự nhiên, bắt buộc dùng The.',
        translation: 'Mặt trời mọc ở hướng đông và lặn ở hướng tây.',
        level: 'Cơ bản'
      },
      {
        id: 'articles-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "He is an university professor teaching computer science."',
        hint: 'University bắt đầu bằng phụ âm /j/ nên dùng a.',
        correctAnswers: [
          'He is a university professor teaching computer science.'
        ],
        explanation: 'University phát âm bắt đầu bằng phụ âm /j/ (/ˌjuː.nɪˈvɜː.sə.ti/), do đó phải dùng mạo từ a chứ không phải an.',
        translation: 'Ông ấy là một giáo sư đại học giảng dạy ngành khoa học máy tính.',
        level: 'Cơ bản'
      },
      {
        id: 'articles-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "We visited the Mount Everest during our trekking expedition in Nepal."',
        hint: 'Đỉnh núi đơn lẻ không dùng the.',
        correctAnswers: [
          'We visited Mount Everest during our trekking expedition in Nepal.'
        ],
        explanation: 'Tên các đỉnh núi đơn lẻ (Mount Everest, Mount Fuji) không dùng mạo từ the.',
        translation: 'Chúng tôi đã ghé thăm đỉnh Everest trong chuyến thám hiểm đi bộ đường dài ở Nepal.',
        level: 'Trung bình'
      },
      {
        id: 'articles-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "My little sister loves playing the basketball after school."',
        hint: 'Môn thể thao không dùng mạo từ the.',
        correctAnswers: [
          'My little sister loves playing basketball after school.'
        ],
        explanation: 'Tên các môn thể thao (basketball, football, tennis) không đi với mạo từ the.',
        translation: 'Em gái tôi rất thích chơi bóng rổ sau giờ học.',
        level: 'Cơ bản'
      },
      {
        id: 'articles-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The government should provide better healthcare for poor."',
        hint: 'The + tính từ để chỉ một nhóm người (the poor).',
        correctAnswers: [
          'The government should provide better healthcare for the poor.',
          'The government should provide better healthcare for poor people.'
        ],
        explanation: 'Khi dùng tính từ để đại diện cho một tầng lớp/nhóm người, bắt buộc phải có the: the poor (người nghèo).',
        translation: 'Chính phủ nên cung cấp dịch vụ chăm sóc y tế tốt hơn cho người nghèo.',
        level: 'Trung bình'
      },
      {
        id: 'articles-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She can speak the English fluently and accurately."',
        hint: 'Tên ngôn ngữ đứng độc lập không dùng mạo từ the.',
        correctAnswers: [
          'She can speak English fluently and accurately.',
          'She can speak the English language fluently and accurately.'
        ],
        explanation: 'Tên ngôn ngữ (English, French, Vietnamese) không dùng mạo từ the (trừ khi có từ language: the English language).',
        translation: 'Cô ấy có thể nói tiếng Anh một cách lưu loát và chính xác.',
        level: 'Cơ bản'
      },
      {
        id: 'articles-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau kết hợp sử dụng mạo từ A -> The khi nhắc lại đối tượng: "I bought a novel yesterday. The novel was written by a famous author."',
        hint: 'Viết thành 1 câu hoặc nối 2 câu mạch lạc.',
        correctAnswers: [
          'I bought a novel yesterday, and the novel was written by a famous author.',
          'I bought a novel yesterday, which was written by a famous author.'
        ],
        explanation: 'Lần đầu nhắc đến dùng a novel, khi nhắc lại ở vế sau dùng the novel.',
        translation: 'Hôm qua tôi đã mua một cuốn tiểu thuyết, và cuốn tiểu thuyết đó được viết bởi một tác giả nổi tiếng.',
        level: 'Cơ bản'
      },
      {
        id: 'articles-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sử dụng cấu trúc "The + Adj" để chỉ nhóm người: "Rich people should support charities to help those in need."',
        hint: 'Thay Rich people bằng The rich.',
        correctAnswers: [
          'The rich should support charities to help those in need.'
        ],
        explanation: 'The rich là danh từ tập hợp chỉ những người giàu có, đi với động từ số nhiều.',
        translation: 'Người giàu nên ủng hộ các tổ chức từ thiện để giúp đỡ những người có hoàn cảnh khó khăn.',
        level: 'Trung bình'
      },
      {
        id: 'articles-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu diễn đạt mục đích khám bệnh sử dụng "go to hospital" không dùng mạo từ the: "Peter was injured, so he had to visit the hospital for medical treatment."',
        hint: 'Peter was injured, so he had to go to hospital.',
        correctAnswers: [
          'Peter was injured, so he had to go to hospital.',
          'Peter was injured, so he had to go to hospital for treatment.'
        ],
        explanation: 'Khi đến bệnh viện vì mục đích chữa bệnh, không dùng the: go to hospital.',
        translation: 'Peter bị thương nên anh ấy phải nhập viện để điều trị.',
        level: 'Nâng cao'
      },
      {
        id: 'articles-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết một câu hoàn chỉnh nói về đại dương lớn nhất hành tinh dùng mạo từ the cho cả đại dương và cấp so sánh nhất: "The Pacific Ocean is the largest ocean on Earth."',
        hint: 'Mẫu: The Pacific Ocean is the largest ocean in the world.',
        correctAnswers: [
          'The Pacific Ocean is the largest ocean on Earth.',
          'The Pacific Ocean is the largest ocean in the world.'
        ],
        explanation: 'Cả tên đại dương (The Pacific Ocean) và so sánh nhất (the largest) đều bắt buộc dùng the.',
        translation: 'Thái Bình Dương là đại dương lớn nhất trên Trái Đất.',
        level: 'Trung bình'
      },
      {
        id: 'articles-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết một câu khái quát nói về loài sư tử là động vật nguy hiểm dùng danh từ số nhiều không mạo từ: "Lions are dangerous animals."',
        hint: 'Không dùng the trước lions khi nói về loài sư tử nói chung.',
        correctAnswers: [
          'Lions are dangerous animals.',
          'Lions are wild and dangerous animals.'
        ],
        explanation: 'Khi phát biểu chân lý hoặc tính chất chung của cả loài dùng danh từ số nhiều không mạo từ: Lions are dangerous animals.',
        translation: 'Sư tử là loài động vật nguy hiểm.',
        level: 'Cơ bản'
      }
    ]
  }
]
