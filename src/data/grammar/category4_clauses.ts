import type { GrammarLessonDetail } from './types'

export const category4Lessons: GrammarLessonDetail[] = [
  // 18. RELATIVE CLAUSES
  {
    id: 'relative-clauses',
    title: 'Relative Clauses',
    vietnameseTitle: 'Mệnh đề quan hệ',
    category: 'Mệnh đề',
    categoryId: 'clauses',
    level: 'B1–B2',
    summary: 'Mệnh đề phụ đứng sau danh từ để làm rõ hoặc bổ sung thông tin; phân biệt mệnh đề xác định, không xác định và rút gọn mệnh đề quan hệ.',
    overview: 'Mệnh đề quan hệ (Relative Clauses / Adjective Clauses) là mệnh đề phụ thuộc đứng ngay sau một danh từ hoặc đại từ để bổ nghĩa, định danh hoặc cung cấp thêm thông tin chi tiết về đối tượng đó. Mệnh đề quan hệ được kết nối với mệnh đề chính bằng các đại từ quan hệ (who, whom, whose, which, that) hoặc trạng từ quan hệ (where, when, why).',
    foundation: 'Chức năng cốt lõi của mệnh đề quan hệ giống như một tính từ lớn: trả lời cho câu hỏi "Người nào?", "Vật nào?", "Cái nào?". Phân biệt sống còn trong mệnh đề quan hệ là giữa Mệnh đề xác định (Defining) và Mệnh đề không xác định (Non-defining).',
    classification: [
      {
        title: 'Mệnh đề quan hệ xác định (Defining Relative Clauses)',
        description: 'Cung cấp thông tin thiết yếu để nhận diện danh từ. Nếu bỏ đi câu sẽ tối nghĩa hoặc cụt ý. KHÔNG dùng dấu phẩy. Có thể dùng \'that\'. Có thể lược bỏ đại từ quan hệ khi nó làm tân ngữ.'
      },
      {
        title: 'Mệnh đề quan hệ không xác định (Non-defining Relative Clauses)',
        description: 'Cung cấp thêm thông tin phụ cho danh từ đã được xác định rõ (tên riêng, có this/that, tính từ sở hữu). Nếu bỏ đi câu vẫn trọn nghĩa. BẮT BUỘC có dấu phẩy. TUYỆT ĐỐI KHÔNG dùng \'that\'. KHÔNG ĐƯỢC lược bỏ đại từ quan hệ.'
      },
      {
        title: 'Các Đại từ quan hệ (Relative Pronouns)',
        description: 'Who (người, làm S/O), Whom (người, chỉ làm O), Which (vật, làm S/O), That (người/vật trong mệnh đề xác định), Whose (sở hữu cách: whose + N).'
      },
      {
        title: 'Các Trạng từ quan hệ (Relative Adverbs)',
        description: 'Where (= in/at which: nơi chốn), When (= in/on/at which: thời gian), Why (= for which: lý do).'
      },
      {
        title: 'Rút gọn Mệnh đề quan hệ (Reduced Relative Clauses)',
        description: '1. Rút về V-ing khi mang nghĩa chủ động.\n2. Rút về V3/ed khi mang nghĩa bị động.\n3. Rút về To-infinitive khi đứng sau the first, the second, the last, the only hoặc so sánh nhất.'
      }
    ],
    formulas: [
      {
        title: 'Bảng Đại từ & Trạng từ quan hệ',
        formula: 'Chỉ người:\nWho (S/O)\nWhom (O trang trọng)\nWhose (+ N)\n\nChỉ vật:\nWhich (S/O)\nThat (mệnh đề xác định)\nWhose / of which\n\nChỉ nơi chốn/thời gian:\nWhere / When / Why',
        note: 'Trong mệnh đề xác định, khi Who/Which/That làm TÂN NGỮ thì có thể lược bỏ (The man [whom] I met yesterday).'
      },
      {
        title: 'Quy tắc Rút gọn Mệnh đề quan hệ (3 Phương pháp)',
        formula: '1. Chủ động: The boy who is standing there -> The boy standing there\n2. Bị động: The book which was written by Nam -> The book written by Nam\n3. Sau The first/last/only/so sánh nhất: Neil Armstrong was the first man who walked on the moon -> the first man to walk on the moon',
        note: 'Rút gọn chỉ thực hiện được khi đại từ quan hệ đóng vai trò làm CHỦ NGỮ trong mệnh đề quan hệ.'
      }
    ],
    usage: [
      {
        context: 'Lược bỏ đại từ quan hệ khi làm tân ngữ',
        explanation: 'Giúp câu văn tự nhiên và ngắn gọn hơn trong giao tiếp.',
        example: { english: 'The documentary (that) we watched last night was thought-provoking.', vietnamese: 'Bộ phim tài liệu mà chúng tôi đã xem tối qua rất gợi nhiều suy nghĩ.' }
      },
      {
        context: 'Sử dụng Giới từ trong Mệnh đề quan hệ (Trang trọng vs Thân mật)',
        explanation: 'Trang trọng: Giới từ đứng trước Whom/Which (in which, to whom). Thân mật: Giới từ đặt ở cuối mệnh đề.',
        example: { english: 'The project on which we are working (trang trọng) = The project we are working on (thân mật).', vietnamese: 'Dự án mà chúng tôi đang triển khai.' }
      },
      {
        context: 'Dùng Whose để biểu thị quyền sở hữu',
        explanation: 'Thay thế cho his, her, their, its đứng trước danh từ.',
        example: { english: 'I met an author whose latest novel won an international literary award.', vietnamese: 'Tôi đã gặp một tác giả có cuốn tiểu thuyết mới nhất đoạt giải thưởng văn học quốc tế.' }
      }
    ],
    examples: [
      { english: 'Dr. Jane, who graduated from Oxford University, joined our research facility.', vietnamese: 'Tiến sĩ Jane, người đã tốt nghiệp Đại học Oxford, đã gia nhập cơ sở nghiên cứu của chúng tôi.', note: 'Mệnh đề quan hệ không xác định có dấu phẩy.' },
      { english: 'The candidate who possesses the strongest leadership skills will be hired.', vietnamese: 'Ứng viên nào sở hữu kỹ năng lãnh đạo mạnh mẽ nhất sẽ được tuyển dụng.', note: 'Mệnh đề quan hệ xác định không có dấu phẩy.' },
      { english: 'The bridge built in 1890 is still in active use today.', vietnamese: 'Cây cầu được xây dựng vào năm 1890 hiện nay vẫn đang được sử dụng tích cực.', note: 'Rút gọn mệnh đề quan hệ dạng bị động (which was built -> built).' }
    ],
    importantNotes: [
      'TUYỆT ĐỐI KHÔNG dùng \'That\' sau dấu phẩy (mệnh đề không xác định) hoặc sau giới từ (Sai: Dr. Jane, that lives nearby; Sai: The room in that we met).',
      'Whose luôn đi kèm với danh từ ngay sau nó (Whose car, whose father), không có mạo từ kẹp giữa (Sai: whose the car).',
      'Which có thể thay thế cho TOÀN BỘ MỆNH ĐỀ ĐỨNG TRƯỚC (ngăn cách bằng dấu phẩy): He passed the exam with flying colours, which surprised everyone.',
      'Khi danh từ đi trước có all, everything, nothing, any, the only, so sánh nhất, ưu tiên dùng \'that\' thay vì \'which\'.'
    ],
    comparison: {
      title: 'Phân biệt Defining vs Non-defining Relative Clauses',
      points: [
        { concept: 'Defining (Mệnh đề xác định)', difference: 'Không có dấu phẩy, thông tin bắt buộc phải có để hiểu rõ danh từ, dùng được \'that\', lược bỏ được khi làm tân ngữ.' },
        { concept: 'Non-defining (Mệnh đề không xác định)', difference: 'Bắt buộc có dấu phẩy, thông tin bổ sung phụ cho danh từ đã rõ, KHÔNG dùng \'that\', KHÔNG ĐƯỢC lược bỏ đại từ.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp giới thiệu nhân sự và dự án đối tác',
      dialogueOrSentences: [
        { speaker: 'Giám đốc', text: 'This is Mr. Long, who leads our overseas expansion department.', translation: 'Đây là anh Long, người đang lãnh đạo phòng phát triển thị trường nước ngoài của chúng tôi.' },
        { speaker: 'Đối tác', text: 'Nice to meet you! Is this the team that designed the mobile banking app?', translation: 'Rất hân hạnh được gặp anh! Đây có phải là đội ngũ đã thiết kế ứng dụng ngân hàng di động không?' },
        { speaker: 'Mr. Long', text: 'Yes, exactly. The app, which we launched last month, has already reached one million downloads.', translation: 'Vâng, chính xác ạ. Ứng dụng mà chúng tôi ra mắt tháng trước đã đạt mốc một triệu lượt tải rồi.' }
      ]
    },
    summaryPoints: [
      'Mệnh đề quan hệ bổ nghĩa cho danh từ đứng trước.',
      'Mệnh đề xác định không có dấu phẩy (dùng that); Mệnh đề không xác định có dấu phẩy (cấm dùng that).',
      'Đại từ quan hệ làm tân ngữ trong mệnh đề xác định có thể lược bỏ.',
      'Rút gọn mệnh đề: V-ing (chủ động), V3/ed (bị động), To-infinitive (sau the first/last/only).',
      'Whose chỉ sở hữu; Which thay thế cho cả mệnh đề đứng trước có dấu phẩy.'
    ],
    exercises: [
      {
        id: 'rc-mc-1',
        type: 'multiple-choice',
        prompt: 'The young violinist, ___ performance captivated the entire audience, received a standing ovation.',
        choices: ['whose', 'who', 'whom', 'which'],
        correctAnswers: ['whose'],
        explanation: 'Whose performance = buổi biểu diễn của nghệ sĩ vĩ cầm; whose đóng vai trò sở hữu cách đứng trước danh từ performance.',
        translation: 'Nghệ sĩ vĩ cầm trẻ, người có màn biểu diễn thu hút toàn bộ khán giả, đã nhận được sự hoan nghênh nhiệt liệt.',
        level: 'Trung bình'
      },
      {
        id: 'rc-mc-2',
        type: 'multiple-choice',
        prompt: 'The luxury apartment building in ___ she currently lives was constructed in 2022.',
        choices: ['which', 'that', 'where', 'whom'],
        correctAnswers: ['which'],
        explanation: 'Sau giới từ in bắt buộc dùng which (in which = where), tuyệt đối không dùng in that hoặc in where.',
        translation: 'Tòa nhà căn hộ sang trọng nơi cô ấy hiện đang sống được xây dựng vào năm 2022.',
        level: 'Trung bình'
      },
      {
        id: 'rc-mc-3',
        type: 'multiple-choice',
        prompt: 'Neil Armstrong was the first astronaut ___ on the surface of the moon.',
        choices: ['to walk', 'walking', 'walked', 'walks'],
        correctAnswers: ['to walk'],
        explanation: 'Sau cụm the first astronaut, mệnh đề quan hệ được rút gọn về dạng To-infinitive: to walk.',
        translation: 'Neil Armstrong là phi hành gia đầu tiên đặt chân lên bề mặt mặt trăng.',
        level: 'Nâng cao'
      },
      {
        id: 'rc-mc-4',
        type: 'multiple-choice',
        prompt: 'The passengers ___ on flight VN123 are requested to proceed to boarding gate number five.',
        choices: ['traveling', 'traveled', 'who traveling', 'are traveling'],
        correctAnswers: ['traveling'],
        explanation: 'Rút gọn mệnh đề quan hệ chủ động: who are traveling -> traveling.',
        translation: 'Các hành khách đi trên chuyến bay VN123 được yêu cầu di chuyển đến cổng lên máy bay số 5.',
        level: 'Trung bình'
      },
      {
        id: 'rc-mc-5',
        type: 'multiple-choice',
        prompt: 'He passed the grueling entrance examination with high marks, ___ surprised his parents.',
        choices: ['which', 'that', 'what', 'who'],
        correctAnswers: ['which'],
        explanation: 'Which đứng sau dấu phẩy để thay thế cho toàn bộ sự việc ở mệnh đề đứng trước (anh ấy đỗ kỳ thi).',
        translation: 'Anh ấy đã vượt qua kỳ thi tuyển sinh khắt khe với điểm số cao, điều này làm bố mẹ anh ấy bất ngờ.',
        level: 'Nâng cao'
      },
      {
        id: 'rc-fb-1',
        type: 'fill-blank',
        prompt: 'The scholarship was awarded to the student ___ essay showed the highest originality. (who/whose)',
        hint: 'Chỉ quyền sở hữu bài luận của sinh viên.',
        correctAnswers: ['whose'],
        explanation: 'Whose essay biểu thị sự sở hữu bài luận của sinh viên.',
        translation: 'Học bổng đã được trao cho sinh viên có bài luận thể hiện tính độc đáo cao nhất.',
        level: 'Cơ bản'
      },
      {
        id: 'rc-fb-2',
        type: 'fill-blank',
        prompt: 'The historical documentary ___ we watched yesterday won several international prizes. (which/where)',
        hint: 'Thay thế cho danh từ chỉ vật documentary.',
        correctAnswers: ['which', 'that'],
        explanation: 'Which hoặc that thay thế cho danh từ chỉ vật the historical documentary.',
        translation: 'Bộ phim tài liệu lịch sử mà chúng tôi đã xem hôm qua đã giành được nhiều giải thưởng quốc tế.',
        level: 'Cơ bản'
      },
      {
        id: 'rc-fb-3',
        type: 'fill-blank',
        prompt: 'That was the memorable summer ___ we first traveled across Europe together. (when/where)',
        hint: 'Thay thế cho mốc thời gian summer.',
        correctAnswers: ['when'],
        explanation: 'Trạng từ quan hệ when thay thế cho danh từ chỉ thời gian the memorable summer.',
        translation: 'Đó là mùa hè đáng nhớ khi lần đầu tiên chúng tôi cùng nhau đi du lịch khắp châu Âu.',
        level: 'Cơ bản'
      },
      {
        id: 'rc-fb-4',
        type: 'fill-blank',
        prompt: 'The heavy packages ___ by international express delivery arrived in perfect condition. (send)',
        hint: 'Rút gọn mệnh đề quan hệ ở thể bị động (which were sent).',
        correctAnswers: ['sent'],
        explanation: 'Rút gọn mệnh đề bị động: which were sent -> sent.',
        translation: 'Những kiện hàng nặng được gửi bằng dịch vụ chuyển phát nhanh quốc tế đã đến nơi trong tình trạng hoàn hảo.',
        level: 'Trung bình'
      },
      {
        id: 'rc-fb-5',
        type: 'fill-blank',
        prompt: 'Professor Anderson, ___ has published over fifty research papers, delivered the keynote address. (who/that)',
        hint: 'Mệnh đề không xác định có dấu phẩy tuyệt đối không dùng that.',
        correctAnswers: ['who'],
        explanation: 'Trong mệnh đề quan hệ không xác định có dấu phẩy chỉ người, bắt buộc dùng who.',
        translation: 'Giáo sư Anderson, người đã xuất bản hơn năm mươi bài báo nghiên cứu, đã trình bày bài phát biểu chính.',
        level: 'Cơ bản'
      },
      {
        id: 'rc-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "My uncle, that lives in Melbourne, is coming to visit us next week."',
        hint: 'Mệnh đề không xác định có dấu phẩy không được dùng that.',
        correctAnswers: [
          'My uncle, who lives in Melbourne, is coming to visit us next week.'
        ],
        explanation: 'Trong mệnh đề quan hệ không xác định có dấu phẩy, không dùng that mà phải dùng who để chỉ người.',
        translation: 'Bác tôi, người sống ở Melbourne, sẽ đến thăm chúng tôi vào tuần tới.',
        level: 'Cơ bản'
      },
      {
        id: 'rc-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The historic hotel in that we stayed during our trip was renovated recently."',
        hint: 'Không dùng that sau giới từ in (phải dùng in which).',
        correctAnswers: [
          'The historic hotel in which we stayed during our trip was renovated recently.',
          'The historic hotel where we stayed during our trip was renovated recently.'
        ],
        explanation: 'Sau giới từ không dùng that, phải dùng in which hoặc where.',
        translation: 'Khách sạn lịch sử nơi chúng tôi ở trong chuyến đi gần đây đã được tân trang lại.',
        level: 'Trung bình'
      },
      {
        id: 'rc-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She was the youngest female scientist who won the prestigious prize."',
        hint: 'Sau so sánh nhất the youngest, mệnh đề quan hệ rút gọn về To-infinitive (to win) hoặc dùng that.',
        correctAnswers: [
          'She was the youngest female scientist to win the prestigious prize.',
          'She was the youngest female scientist that won the prestigious prize.'
        ],
        explanation: 'Sau dạng so sánh nhất the youngest, rút gọn thành to win hoặc dùng đại từ that.',
        translation: 'Cô ấy là nhà khoa học nữ trẻ tuổi nhất giành được giải thưởng danh giá đó.',
        level: 'Nâng cao'
      },
      {
        id: 'rc-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The man whose you talked to yesterday is our new managing director."',
        hint: 'Hỏi người làm tân ngữ dùng whom hoặc who, không dùng whose.',
        correctAnswers: [
          'The man whom you talked to yesterday is our new managing director.',
          'The man who you talked to yesterday is our new managing director.',
          'The man to whom you talked yesterday is our new managing director.'
        ],
        explanation: 'Whose chỉ dùng cho sở hữu cách trước danh từ. Ở đây người chịu tác động của talked to là tân ngữ nên dùng whom hoặc who.',
        translation: 'Người đàn ông mà bạn đã trò chuyện hôm qua là giám đốc điều hành mới của chúng ta.',
        level: 'Trung bình'
      },
      {
        id: 'rc-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The laptop which I bought it last week suddenly stopped functioning."',
        hint: 'Đã có đại từ quan hệ which làm tân ngữ thì không lặp lại đại từ it.',
        correctAnswers: [
          'The laptop which I bought last week suddenly stopped functioning.',
          'The laptop that I bought last week suddenly stopped functioning.',
          'The laptop I bought last week suddenly stopped functioning.'
        ],
        explanation: 'Which đã thay thế cho the laptop làm tân ngữ của bought, do đó không được lặp lại it.',
        translation: 'Chiếc laptop mà tôi đã mua tuần trước đột nhiên ngừng hoạt động.',
        level: 'Cơ bản'
      },
      {
        id: 'rc-sc-1',
        type: 'sentence-construction',
        prompt: 'Kết hợp hai câu thành một câu có mệnh đề quan hệ rút gọn dạng V-ing: "The girl is playing the violin on stage. She is my niece."',
        hint: 'The girl playing the violin on stage is my niece.',
        correctAnswers: [
          'The girl playing the violin on stage is my niece.'
        ],
        explanation: 'Rút gọn who is playing -> playing the violin on stage.',
        translation: 'Cô bé đang chơi đàn vĩ cầm trên sân khấu là cháu gái tôi.',
        level: 'Cơ bản'
      },
      {
        id: 'rc-sc-2',
        type: 'sentence-construction',
        prompt: 'Kết hợp hai câu thành một câu có mệnh đề quan hệ rút gọn dạng V3: "The smartphones were manufactured in Vietnam. They are exported worldwide."',
        hint: 'The smartphones manufactured in Vietnam are exported worldwide.',
        correctAnswers: [
          'The smartphones manufactured in Vietnam are exported worldwide.'
        ],
        explanation: 'Rút gọn which were manufactured -> manufactured in Vietnam.',
        translation: 'Những chiếc điện thoại thông minh được sản xuất tại Việt Nam được xuất khẩu trên toàn thế giới.',
        level: 'Cơ bản'
      },
      {
        id: 'rc-sc-3',
        type: 'sentence-construction',
        prompt: 'Kết hợp hai câu dùng đại từ sở hữu "whose": "I know a doctor. His research has saved thousands of lives."',
        hint: 'I know a doctor whose research has saved thousands of lives.',
        correctAnswers: [
          'I know a doctor whose research has saved thousands of lives.'
        ],
        explanation: 'Thay his research bằng whose research.',
        translation: 'Tôi biết một bác sĩ có nghiên cứu đã cứu sống hàng nghìn sinh mạng.',
        level: 'Trung bình'
      },
      {
        id: 'rc-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau bằng cách lược bỏ đại từ quan hệ làm tân ngữ: "The proposal that we submitted yesterday has been accepted."',
        hint: 'The proposal we submitted yesterday has been accepted.',
        correctAnswers: [
          'The proposal we submitted yesterday has been accepted.'
        ],
        explanation: 'That làm tân ngữ trong mệnh đề xác định nên có thể lược bỏ hoàn toàn.',
        translation: 'Bản đề xuất mà chúng tôi nộp hôm qua đã được chấp thuận.',
        level: 'Cơ bản'
      },
      {
        id: 'rc-sc-5',
        type: 'sentence-construction',
        prompt: 'Kết hợp hai câu dùng "which" đứng sau dấu phẩy để thay thế cho cả mệnh đề: "He helped me solve the difficult problem. This was very kind of him."',
        hint: 'He helped me solve the difficult problem, which was very kind of him.',
        correctAnswers: [
          'He helped me solve the difficult problem, which was very kind of him.'
        ],
        explanation: 'Dấu phẩy + which thay thế cho toàn bộ hành động giúp đỡ ở vế trước.',
        translation: 'Anh ấy đã giúp tôi giải bài toán khó, điều đó thật là tử tế.',
        level: 'Nâng cao'
      }
    ]
  },

  // 19. CLAUSES
  {
    id: 'clauses',
    title: 'Clauses',
    vietnameseTitle: 'Các loại mệnh đề',
    category: 'Mệnh đề',
    categoryId: 'clauses',
    level: 'B1–B2',
    summary: 'Phân biệt mệnh đề độc lập và phụ thuộc; chuyên sâu 3 loại mệnh đề phụ cốt lõi: Mệnh đề danh từ (Noun clauses), Mệnh đề trạng ngữ (Adverbial clauses) và Mệnh đề tính từ.',
    overview: 'Mệnh đề (Clauses) là một nhóm từ chứa đầy đủ Chủ ngữ (Subject) và Vị ngữ (Predicate). Hiểu rõ các loại mệnh đề và cách kết nối chúng là chìa khóa để nâng cấp trình độ tiếng Anh từ các câu đơn giản sang những câu phức diễn đạt tư duy mạch lạc, học thuật và chuyên nghiệp.',
    foundation: 'Mệnh đề được phân thành 2 nhánh lớn: Mệnh đề độc lập (Independent clause - tự trọn nghĩa và có thể đứng một mình như một câu) và Mệnh đề phụ thuộc (Dependent clause - không trọn nghĩa, phải gắn vào mệnh đề chính để thực hiện chức năng như một danh từ, tính từ hoặc trạng từ).',
    classification: [
      {
        title: 'Mệnh đề danh từ (Noun Clauses)',
        description: 'Đóng vai trò như một danh từ trong câu: làm Chủ ngữ, Tân ngữ trực tiếp, Bổ ngữ hoặc Tân ngữ của giới từ. Bắt đầu bằng That, Whether/If, hoặc các từ để hỏi Wh- (what, where, how, why).'
      },
      {
        title: 'Mệnh đề trạng ngữ (Adverbial Clauses)',
        description: 'Đóng vai trò như một trạng từ bổ nghĩa cho động từ hoặc mệnh đề chính: chỉ thời gian (when, while, after), nguyên nhân (because, since), mục đích (so that, in order that), kết quả (so...that, such...that), nhượng bộ (although, even though), điều kiện (if, unless).'
      },
      {
        title: 'Mệnh đề tính từ / quan hệ (Adjective / Relative Clauses)',
        description: 'Đóng vai trò như một tính từ bổ nghĩa trực tiếp cho danh từ đứng trước, dẫn dắt bằng who, whom, which, that, whose, where, when.'
      }
    ],
    formulas: [
      {
        title: 'Cấu trúc Mệnh đề danh từ (Noun Clauses)',
        formula: 'Làm Chủ ngữ: [That / What / Whether + S + V] + V_chính (số ít)\nLàm Tân ngữ: S + V + [that / what / how + S + V]\nSau Giới từ: Prep + [what / how / whether + S + V]',
        note: 'What he said surprised us (What he said là S) · I know that she is honest (That she is honest là O).'
      },
      {
        title: 'Cấu trúc Mệnh đề trạng ngữ chỉ kết quả: So...that & Such...that',
        formula: 'S + be / linking verb + SO + Adj + THAT + Clause\nS + V thường + SO + Adv + THAT + Clause\nS + V + SUCH + (a/an) + Adj + Noun + THAT + Clause',
        note: 'It was so cold that the lake froze = It was such cold weather that the lake froze.'
      },
      {
        title: 'Mệnh đề trạng ngữ chỉ mục đích: So that / In order that',
        formula: 'S + V + SO THAT / IN ORDER THAT + S + can / could / will / would + V1',
        note: 'He studies hard so that he can pass the exam.'
      }
    ],
    usage: [
      {
        context: 'Sử dụng Mệnh đề danh từ làm chủ ngữ trang trọng',
        explanation: 'Nhấn mạnh một sự thật hoặc tuyên bố trong văn viết học thuật.',
        example: { english: 'That global warming poses an existential threat is undisputed.', vietnamese: 'Việc sự nóng lên toàn cầu tạo ra mối đe dọa sinh tồn là điều không thể bàn cãi.' }
      },
      {
        context: 'Diễn tả mục đích với So that',
        explanation: 'Nêu rõ mục tiêu của hành động chính.',
        example: { english: 'She left early so that she would not be caught in the rush-hour traffic.', vietnamese: 'Cô ấy đã rời đi sớm để không bị kẹt trong dòng xe cộ giờ cao điểm.' }
      },
      {
        context: 'Diễn tả kết quả tột độ với Such... that',
        explanation: 'Nhấn mạnh mức độ của danh từ dẫn đến một kết quả tất yếu.',
        example: { english: 'It was such a complicated procedure that nobody could follow it correctly.', vietnamese: 'Đó là một quy trình phức tạp đến mức không ai có thể làm theo đúng được.' }
      }
    ],
    examples: [
      { english: 'I wonder whether the flight will be delayed due to the snowstorm.', vietnamese: 'Tôi tự hỏi liệu chuyến bay có bị hoãn do bão tuyết hay không.', note: 'Whether the flight will be delayed là mệnh đề danh từ làm tân ngữ.' },
      { english: 'The lecture was so fascinating that the auditorium was completely silent.', vietnamese: 'Bài giảng lôi cuốn đến mức cả khán phòng hoàn toàn im phăng phắc.', note: 'Mệnh đề trạng ngữ chỉ kết quả với so...that.' },
      { english: 'We will start the briefing as soon as all committee members have arrived.', vietnamese: 'Chúng tôi sẽ bắt đầu buổi họp giao ban ngay khi tất cả các thành viên ủy ban đã đến.', note: 'Mệnh đề trạng ngữ chỉ thời gian với as soon as.' }
    ],
    importantNotes: [
      'Trật tự từ trong mệnh đề danh từ luôn là khẳng định (S + V), KHÔNG đảo trợ động từ như câu hỏi: I don\'t know what he wants (ĐÚNG), KHÔNG viết: I don\'t know what does he want.',
      'That trong mệnh đề danh từ làm tân ngữ có thể lược bỏ (I know [that] she is honest); nhưng That làm CHỦ NGỮ thì bắt buộc phải giữ lại (That she passed the exam delighted us).',
      'Trong mệnh đề trạng ngữ chỉ thời gian và điều kiện trong tương lai, KHÔNG dùng thì tương lai (will/shall) mà phải chia ở THÌ HIỆN TẠI ĐƠN: I will call you when I arrive (KHÔNG dùng when I will arrive).',
      'Phân biệt So that (để mà - mục đích) vs So (cho nên - kết quả).'
    ],
    comparison: {
      title: 'Phân biệt Noun Clause vs Adjective Clause vs Adverbial Clause',
      points: [
        { concept: 'Noun Clause (Mệnh đề danh từ)', difference: 'Đóng vai trò làm S, O hoặc C trong câu: What you said (S) is true.' },
        { concept: 'Adjective Clause (Mệnh đề tính từ)', difference: 'Đứng sau và bổ nghĩa cho một danh từ đi trước: The news that you heard is true.' },
        { concept: 'Adverbial Clause (Mệnh đề trạng ngữ)', difference: 'Bổ nghĩa cho động từ/cả câu, chỉ thời gian/nguyên nhân/kết quả: We left because it rained.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp giải trình dự án: Trình bày phương án giải quyết',
      dialogueOrSentences: [
        { speaker: 'Giám đốc', text: 'What we need right now is a concrete implementation timeline.', translation: 'Điều chúng ta cần ngay lúc này là một mốc thời gian triển khai cụ thể.' },
        { speaker: 'Trưởng dự án', text: 'I understand completely. We are working overtime so that we can meet the deadline.', translation: 'Em hoàn toàn hiểu ạ. Chúng em đang làm thêm giờ để có thể kịp hạn chót.' },
        { speaker: 'Giám đốc', text: 'Good! Ensure that every team member is fully informed of their role.', translation: 'Tốt! Hãy đảm bảo rằng mỗi thành viên trong đội đều được thông báo đầy đủ về vai trò của mình.' }
      ]
    },
    summaryPoints: [
      'Mệnh đề độc lập có thể đứng một mình; Mệnh đề phụ thuộc phải đi kèm mệnh đề chính.',
      'Mệnh đề danh từ làm S, O, C hoặc sau giới từ (bắt đầu bằng That, Whether, Wh-).',
      'Mệnh đề trạng ngữ chỉ thời gian, nguyên nhân, mục đích, kết quả, nhượng bộ.',
      'Cấu trúc So...that (Adj/Adv) vs Such...that (Noun phrase).',
      'Trong mệnh đề trạng ngữ chỉ thời gian/điều kiện tương lai: dùng Hiện tại đơn thay cho Tương lai đơn.'
    ],
    exercises: [
      {
        id: 'cl-mc-1',
        type: 'multiple-choice',
        prompt: 'In the sentence "What she explained at the conference enlightened all the delegates", "What she explained at the conference" is a(n) ___.',
        choices: ['noun clause functioning as subject', 'adverbial clause of reason', 'relative clause', 'independent clause'],
        correctAnswers: ['noun clause functioning as subject'],
        explanation: 'Mệnh đề bắt đầu bằng What đóng vai trò làm chủ ngữ cho động từ enlightened là mệnh đề danh từ (Noun clause).',
        translation: 'Trong câu trên, mệnh đề "What she explained..." đóng vai trò là mệnh đề danh từ làm chủ ngữ.',
        level: 'Nâng cao'
      },
      {
        id: 'cl-mc-2',
        type: 'multiple-choice',
        prompt: 'The presentation was ___ engaging that the entire audience remained seated until the very end.',
        choices: ['so', 'such', 'too', 'very'],
        correctAnswers: ['so'],
        explanation: 'Cấu trúc so + Adj + that: so engaging that...',
        translation: 'Bài thuyết trình lôi cuốn đến mức toàn bộ khán giả vẫn ngồi yên tại chỗ cho đến tận phút cuối cùng.',
        level: 'Cơ bản'
      },
      {
        id: 'cl-mc-3',
        type: 'multiple-choice',
        prompt: 'I will send you the finalized financial report as soon as the director ___ it.',
        choices: ['approves', 'will approve', 'approved', 'is approving'],
        correctAnswers: ['approves'],
        explanation: 'Trong mệnh đề trạng ngữ chỉ thời gian (as soon as), dùng thì hiện tại đơn (approves) thay cho tương lai đơn will approve.',
        translation: 'Tôi sẽ gửi cho bạn bản báo cáo tài chính đã hoàn tất ngay khi giám đốc phê duyệt nó.',
        level: 'Trung bình'
      },
      {
        id: 'cl-mc-4',
        type: 'multiple-choice',
        prompt: 'The engineers installed backup generators ___ the power would not be interrupted during surgery.',
        choices: ['so that', 'because', 'although', 'in case of'],
        correctAnswers: ['so that'],
        explanation: 'So that + Clause chỉ mục đích (để cho nguồn điện không bị gián đoạn).',
        translation: 'Các kỹ sư đã lắp đặt máy phát điện dự phòng để nguồn điện không bị gián đoạn trong ca phẫu thuật.',
        level: 'Trung bình'
      },
      {
        id: 'cl-mc-5',
        type: 'multiple-choice',
        prompt: 'It was ___ heavy snowstorm that all domestic flights were cancelled immediately.',
        choices: ['such a', 'so a', 'so', 'such'],
        correctAnswers: ['such a'],
        explanation: 'Snowstorm là danh từ đếm được số ít, cấu trúc đúng là such + a + Adj + Noun + that: such a heavy snowstorm that...',
        translation: 'Đó là một trận bão tuyết lớn đến mức tất cả các chuyến bay nội địa đều bị hủy ngay lập tức.',
        level: 'Trung bình'
      },
      {
        id: 'cl-fb-1',
        type: 'fill-blank',
        prompt: 'I have no doubt ___ she will succeed in her new leadership position. (that/whether)',
        hint: 'Biểu thị sự tin tưởng chắc chắn dùng that.',
        correctAnswers: ['that'],
        explanation: 'I have no doubt that... (Tôi không hề nghi ngờ rằng cô ấy sẽ thành công).',
        translation: 'Tôi không hề nghi ngờ rằng cô ấy sẽ thành công trong cương vị lãnh đạo mới.',
        level: 'Cơ bản'
      },
      {
        id: 'cl-fb-2',
        type: 'fill-blank',
        prompt: 'The team worked through the night ___ order that the client\'s deadline could be met. (in/so)',
        hint: 'Cụm từ chỉ mục đích in order that.',
        correctAnswers: ['in'],
        explanation: 'In order that + Clause = So that (để mà).',
        translation: 'Cả đội đã làm việc suốt đêm để có thể đáp ứng kịp hạn chót của khách hàng.',
        level: 'Trung bình'
      },
      {
        id: 'cl-fb-3',
        type: 'fill-blank',
        prompt: 'We will begin our picnic outside as long as the weather ___ sunny and warm. (remains/will remain)',
        hint: 'Mệnh đề điều kiện/thời gian chia thì hiện tại đơn.',
        correctAnswers: ['remains'],
        explanation: 'Trong mệnh đề điều kiện với as long as, dùng thì hiện tại đơn remains.',
        translation: 'Chúng tôi sẽ bắt đầu chuyến dã ngoại ngoài trời miễn là thời tiết vẫn có nắng và ấm áp.',
        level: 'Cơ bản'
      },
      {
        id: 'cl-fb-4',
        type: 'fill-blank',
        prompt: '___ surprised everyone was the sudden resignation of the chief executive. (What/That)',
        hint: 'Mệnh đề danh từ làm chủ ngữ mang nghĩa "Điều mà...".',
        correctAnswers: ['What'],
        explanation: 'What surprised everyone = Điều làm mọi người bất ngờ.',
        translation: 'Điều làm mọi người bất ngờ là sự từ chức đột ngột của tổng giám đốc điều hành.',
        level: 'Nâng cao'
      },
      {
        id: 'cl-fb-5',
        type: 'fill-blank',
        prompt: 'He spoke ___ quietly that the audience in the back rows could not hear him clearly. (so/such)',
        hint: 'So đi trực tiếp với trạng từ quietly.',
        correctAnswers: ['so'],
        explanation: 'Cấu trúc so + Adv + that: so quietly that...',
        translation: 'Anh ấy đã nói nhỏ đến mức khán giả ở những hàng ghế sau không thể nghe rõ anh nói.',
        level: 'Cơ bản'
      },
      {
        id: 'cl-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "I will call you immediately when I will arrive at the international airport."',
        hint: 'Trong mệnh đề chỉ thời gian với when, không dùng will arrive mà dùng hiện tại đơn arrive.',
        correctAnswers: [
          'I will call you immediately when I arrive at the international airport.'
        ],
        explanation: 'Trong mệnh đề trạng ngữ chỉ thời gian (when), phải dùng thì hiện tại đơn (arrive) để chỉ hành động tương lai.',
        translation: 'Tôi sẽ gọi cho bạn ngay lập tức khi tôi đến sân bay quốc tế.',
        level: 'Cơ bản'
      },
      {
        id: 'cl-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "It was so wonderful dinner that we praised the chef warmly."',
        hint: 'Dinner là danh từ, cấu trúc đúng là such a wonderful dinner.',
        correctAnswers: [
          'It was such a wonderful dinner that we praised the chef warmly.'
        ],
        explanation: 'Có danh từ dinner nên phải dùng such a wonderful dinner that... chứ không dùng so.',
        translation: 'Đó là một bữa tối tuyệt vời đến mức chúng tôi đã nồng nhiệt khen ngợi đầu bếp.',
        level: 'Trung bình'
      },
      {
        id: 'cl-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong mệnh đề danh từ: "Can you explain to me what does this technical term mean?"',
        hint: 'Mệnh đề danh từ không đảo trợ động từ does (what this technical term means).',
        correctAnswers: [
          'Can you explain to me what this technical term means?'
        ],
        explanation: 'Trong mệnh đề danh từ làm tân ngữ, giữ nguyên trật tự khẳng định: what this technical term means.',
        translation: 'Bạn có thể giải thích cho tôi thuật ngữ kỹ thuật này có nghĩa là gì không?',
        level: 'Cơ bản'
      },
      {
        id: 'cl-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She saved money in order to she could afford a trip to Japan."',
        hint: 'Sau in order to là V nguyên mẫu, còn có mệnh đề she could afford thì dùng in order that.',
        correctAnswers: [
          'She saved money in order that she could afford a trip to Japan.',
          'She saved money in order to afford a trip to Japan.',
          'She saved money so that she could afford a trip to Japan.'
        ],
        explanation: 'In order that / So that + Clause; In order to + V-inf.',
        translation: 'Cô ấy đã tiết kiệm tiền để có thể chi trả cho chuyến đi Nhật Bản.',
        level: 'Trung bình'
      },
      {
        id: 'cl-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "That he was telling the truth was obvious to all of we."',
        hint: 'Sau giới từ of phải là đại từ tân ngữ all of us.',
        correctAnswers: [
          'That he was telling the truth was obvious to all of us.'
        ],
        explanation: 'Sau giới từ of dùng đại từ tân ngữ us: all of us.',
        translation: 'Việc anh ấy đang nói sự thật là điều hiển nhiên đối với tất cả chúng tôi.',
        level: 'Trung bình'
      },
      {
        id: 'cl-sc-1',
        type: 'sentence-construction',
        prompt: 'Kết hợp hai câu thành một câu có mệnh đề danh từ làm chủ ngữ dùng "What": "She told us something yesterday. It was completely true."',
        hint: 'What she told us yesterday was completely true.',
        correctAnswers: [
          'What she told us yesterday was completely true.'
        ],
        explanation: 'What she told us yesterday đóng vai trò làm mệnh đề danh từ làm chủ ngữ.',
        translation: 'Những gì cô ấy nói với chúng tôi hôm qua là hoàn toàn đúng sự thật.',
        level: 'Trung bình'
      },
      {
        id: 'cl-sc-2',
        type: 'sentence-construction',
        prompt: 'Kết hợp hai câu thành một câu dùng cấu trúc "so...that": "The tea was very hot. I could not drink it immediately."',
        hint: 'The tea was so hot that I could not drink it immediately.',
        correctAnswers: [
          'The tea was so hot that I could not drink it immediately.'
        ],
        explanation: 'Cấu trúc so + hot + that + clause.',
        translation: 'Trà nóng đến mức tôi không thể uống ngay được.',
        level: 'Cơ bản'
      },
      {
        id: 'cl-sc-3',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau sang cấu trúc "such...that": "The film was so thrilling that we could not take our eyes off the screen."',
        hint: 'It was such a thrilling film that we could not take our eyes off the screen.',
        correctAnswers: [
          'It was such a thrilling film that we could not take our eyes off the screen.'
        ],
        explanation: 'Đổi sang such a thrilling film that...',
        translation: 'Đó là một bộ phim ly kỳ đến mức chúng tôi không thể rời mắt khỏi màn hình.',
        level: 'Trung bình'
      },
      {
        id: 'cl-sc-4',
        type: 'sentence-construction',
        prompt: 'Kết hợp hai câu dùng liên từ chỉ mục đích "so that": "He set two alarms. He wanted to ensure he would not wake up late."',
        hint: 'He set two alarms so that he would not wake up late.',
        correctAnswers: [
          'He set two alarms so that he would not wake up late.'
        ],
        explanation: 'So that + Clause chỉ mục đích.',
        translation: 'Anh ấy đã đặt hai chiếc chuông báo thức để không bị dậy muộn.',
        level: 'Cơ bản'
      },
      {
        id: 'cl-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng mệnh đề trạng ngữ chỉ thời gian với "as soon as": "Immediately after the train stopped, the passengers got off."',
        hint: 'As soon as the train stopped, the passengers got off.',
        correctAnswers: [
          'As soon as the train stopped, the passengers got off.'
        ],
        explanation: 'As soon as + S + V diễn tả hai hành động nối tiếp nhau ngay lập tức.',
        translation: 'Ngay khi tàu dừng lại, các hành khách đã bước xuống.',
        level: 'Cơ bản'
      }
    ]
  }
]
