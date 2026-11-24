import type { GrammarLessonDetail } from '../types'

export const cat5Part1Lessons: GrammarLessonDetail[] = [
  // 20. PASSIVE VOICE
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    vietnameseTitle: 'Câu bị động',
    category: 'Các dạng câu đặc biệt',
    categoryId: 'special-sentences',
    level: 'A2–B2',
    summary: 'Chuyển đổi câu từ chủ động sang bị động; bảng công thức 12 thì, bị động với động từ khuyết thiếu, bị động 2 tân ngữ và bị động khách quan.',
    overview: 'Câu bị động (Passive Voice) được sử dụng khi chúng ta muốn nhấn mạnh vào HÀNH ĐỘNG hoặc ĐỐI TƯỢNG chịu tác động của hành động hơn là người thực hiện hành động đó. Câu bị động rất phổ biến trong tin tức thời sự, báo cáo khoa học, văn bản hành chính và giao tiếp trang trọng.',
    foundation: 'Quy tắc vàng của câu bị động: Tân ngữ (O) của câu chủ động chuyển lên làm Chủ ngữ (S) của câu bị động. Động từ chuyển thành dạng: [Be chia theo thì của câu gốc] + [Past Participle - V3/ed]. Người/vật thực hiện hành động được đưa về cuối câu sau giới từ \'by\' (hoặc có thể lược bỏ nếu chung chung hoặc không quan trọng).',
    classification: [
      {
        title: 'Bị động các thì cơ bản (Basic Tense Passives)',
        description: 'Hiện tại đơn: am/is/are + V3; Quá khứ đơn: was/were + V3; Tương lai đơn: will be + V3.'
      },
      {
        title: 'Bị động các thì tiếp diễn (Continuous Passives)',
        description: 'Hiện tại tiếp diễn: am/is/are + being + V3; Quá khứ tiếp diễn: was/were + being + V3.'
      },
      {
        title: 'Bị động các thì hoàn thành (Perfect Passives)',
        description: 'Hiện tại hoàn thành: have/has been + V3; Quá khứ hoàn thành: had been + V3; Tương lai hoàn thành: will have been + V3.'
      },
      {
        title: 'Bị động với Động từ khuyết thiếu (Modal Passives)',
        description: 'Modal + be + V3 (can be done, must be submitted, should be checked).'
      },
      {
        title: 'Bị động với động từ có 2 tân ngữ (Verbs with two objects)',
        description: 'Give, send, lend, offer: Có thể chuyển tân ngữ chỉ người lên làm chủ ngữ (ưu tiên) hoặc tân ngữ chỉ vật lên kèm giới từ to/for.'
      },
      {
        title: 'Bị động khách quan / ý kiến (Impersonal Passives)',
        description: 'Với say, think, believe, report: It is said that + S + V HOẶC S + is said to + V-inf / to have V3.'
      }
    ],
    formulas: [
      {
        title: 'Công thức chuyển đổi tổng quát',
        formula: 'Chủ động: S + V (chia theo thì) + O + (Adverb)\nBị động: S (cũ là O) + BE (chia cùng thì với V) + V3/ed + (by O_cũ) + (Adverb)',
        note: 'Trạng từ nơi chốn đứng TRƯỚC by-agent; Trạng từ thời gian đứng SAU by-agent (Place + by O + Time).'
      },
      {
        title: 'Bị động khách quan (Impersonal Passive Reporting)',
        formula: 'Chủ động: People say that he works hard.\nCách 1: It is said that he works hard.\nCách 2: He is said to work hard.',
        note: 'Nếu hành động trong mệnh đề that xảy ra trước hành động say/believe thì dùng: to have + V3 (He is said to have lived in Paris).'
      }
    ],
    usage: [
      {
        context: 'Khi không biết hoặc không cần thiết phải nêu rõ tác nhân',
        explanation: 'Người thực hiện hành động là ai ai cũng biết, hoặc là ẩn danh.',
        example: { english: 'The stolen car was found abandoned near the harbor.', vietnamese: 'Chiếc xe bị trộm đã được tìm thấy bị bỏ lại gần bến cảng.' }
      },
      {
        context: 'Trong văn phong học thuật, báo cáo khoa học (Academic & Scientific writing)',
        explanation: 'Tập trung tính khách quan vào kết quả nghiên cứu thay vì chủ thể nghiên cứu.',
        example: { english: 'The chemical solution was heated to exactly 100 degrees Celsius.', vietnamese: 'Dung dịch hóa học đã được đun nóng đến chính xác 100 độ C.' }
      },
      {
        context: 'Khi muốn lịch sự né tránh việc đổ lỗi (Tactful communication)',
        explanation: 'Không trực tiếp chỉ trích ai mà chỉ nêu sự việc đã xảy ra.',
        example: { english: 'A mistake has been made in the invoice calculations.', vietnamese: 'Đã có một sự nhầm lẫn trong các phép tính hóa đơn.' }
      }
    ],
    examples: [
      { english: 'All customer inquiries are answered within 24 hours.', vietnamese: 'Mọi thắc mắc của khách hàng đều được giải đáp trong vòng 24 giờ.', note: 'Hiện tại đơn bị động.' },
      { english: 'A modern hospital is being built in the suburban district.', vietnamese: 'Một bệnh viện hiện đại đang được xây dựng ở khu vực ngoại ô.', note: 'Hiện tại tiếp diễn bị động.' },
      { english: 'The novel is said to have been based on real historical events.', vietnamese: 'Cuốn tiểu thuyết được cho là đã dựa trên những sự kiện lịch sử có thật.', note: 'Bị động khách quan hoàn thành.' }
    ],
    importantNotes: [
      'Nội động từ (Intransitive verbs: happen, occur, arrive, die, sleep, fall) TUYỆT ĐỐI KHÔNG CÓ THỂ BỊ ĐỘNG (Sai: The accident was happened; Đúng: The accident happened).',
      'Có thể lược bỏ by + agent khi tác nhân là đại từ mơ hồ: by people, by someone, by them, by him, by her.',
      'Trật tự sắp xếp: Nơi chốn + by Agent + Thời gian (The bag was found in the park by a child yesterday).',
      'Động từ make ở chủ động đi với V nguyên mẫu không to (make sb do sth), nhưng khi chuyển sang bị động BẮT BUỘC phải có TO (be made to do sth).'
    ],
    comparison: {
      title: 'Phân biệt Active Voice vs Passive Voice',
      points: [
        { concept: 'Active Voice (Câu chủ động)', difference: 'Nhấn mạnh vào CHỦ THỂ THỰC HIỆN: Alexander Fleming discovered penicillin in 1928.' },
        { concept: 'Passive Voice (Câu bị động)', difference: 'Nhấn mạnh vào ĐỐI TƯỢNG VÀ KẾT QUẢ: Penicillin was discovered in 1928 by Alexander Fleming.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp công sở: Thông báo kết quả và tiến độ công việc',
      dialogueOrSentences: [
        { speaker: 'Thư ký', text: 'Has the updated quarterly financial report been finalized yet?', translation: 'Bản báo cáo tài chính quý cập nhật đã được hoàn thiện chưa ạ?' },
        { speaker: 'Kế toán', text: 'Yes, it was approved by the board of directors this morning.', translation: 'Rồi, nó đã được ban giám đốc phê duyệt sáng nay.' },
        { speaker: 'Thư ký', text: 'Excellent! The press release will be sent to the media shortly.', translation: 'Tuyệt vời! Thông cáo báo chí sẽ sớm được gửi đến giới truyền thông.' }
      ]
    },
    summaryPoints: [
      'Công thức cốt lõi: S + BE (chia theo thì) + V3/ed (+ by O).',
      'Nội động từ (happen, arrive, appear) không có thể bị động.',
      'Vị trí trạng từ: Nơi chốn -> by Agent -> Thời gian.',
      'Bị động khách quan: It is said that S + V / S is said to + V.',
      'Make sb do sth chuyển sang bị động thành be made TO do sth.'
    ],
    exercises: [
      {
        id: 'pv-mc-1',
        type: 'multiple-choice',
        prompt: 'The new suspension bridge ___ by the end of next year.',
        choices: [
          'will have been completed',
          'will be completing',
          'will have completed',
          'has been completed'
        ],
        correctAnswers: ['will have been completed'],
        explanation: 'Dấu hiệu \'by the end of next year\' đòi hỏi thì tương lai hoàn thành bị động: will have been + V3 (will have been completed).',
        translation: 'Cây cầu treo mới sẽ được hoàn thành trước cuối năm sau.',
        level: 'Nâng cao'
      },
      {
        id: 'pv-mc-2',
        type: 'multiple-choice',
        prompt: 'The historical documentary ___ on national television when the power failed.',
        choices: [
          'was being broadcast',
          'was broadcasting',
          'is being broadcast',
          'had broadcast'
        ],
        correctAnswers: ['was being broadcast'],
        explanation: 'Hành động đang diễn ra trong quá khứ ở thể bị động: was being + V3 (was being broadcast).',
        translation: 'Bộ phim tài liệu lịch sử đang được phát sóng trên truyền hình quốc gia thì bị mất điện.',
        level: 'Trung bình'
      },
      {
        id: 'pv-mc-3',
        type: 'multiple-choice',
        prompt: 'The suspect was made ___ all stolen jewelry to the police officers.',
        choices: ['to return', 'return', 'returning', 'returned'],
        correctAnswers: ['to return'],
        explanation: 'Động từ make khi chuyển sang câu bị động bắt buộc phải có \'to\': be made to return.',
        translation: 'Nghi phạm đã bị buộc phải trả lại toàn bộ đồ trang sức bị đánh cắp cho các cảnh sát viên.',
        level: 'Trung bình'
      },
      {
        id: 'pv-mc-4',
        type: 'multiple-choice',
        prompt: 'Dr. Watson is said ___ in renewable energy research for over two decades.',
        choices: [
          'to have been involved',
          'to involve',
          'involving',
          'to be involving'
        ],
        correctAnswers: ['to have been involved'],
        explanation: 'Cấu trúc bị động khách quan chỉ hành động đã xảy ra trước hiện tại: is said + to have been involved.',
        translation: 'Tiến sĩ Watson được cho là đã tham gia vào nghiên cứu năng lượng tái tạo hơn hai thập kỷ.',
        level: 'Nâng cao'
      },
      {
        id: 'pv-mc-5',
        type: 'multiple-choice',
        prompt: 'Which sentence CANNOT be converted into the passive voice?',
        choices: [
          'The tragic accident happened around midnight.',
          'The chef prepared a wonderful meal.',
          'They built the hospital in 2020.',
          'The company offered him a promotion.'
        ],
        correctAnswers: ['The tragic accident happened around midnight.'],
        explanation: 'Happen là nội động từ (intransitive verb) không có tân ngữ nên không thể chuyển sang bị động.',
        translation: 'Câu nào không thể chuyển sang bị động? -> The tragic accident happened around midnight.',
        level: 'Cơ bản'
      },
      {
        id: 'pv-fb-1',
        type: 'fill-blank',
        prompt: 'Thousands of new electric cars ___ manufactured in this factory every month. (be)',
        hint: 'Hiện tại đơn bị động số nhiều.',
        correctAnswers: ['are'],
        explanation: 'Hiện tại đơn bị động với chủ ngữ số nhiều: are manufactured.',
        translation: 'Hàng ngàn chiếc xe điện mới được sản xuất tại nhà máy này mỗi tháng.',
        level: 'Cơ bản'
      },
      {
        id: 'pv-fb-2',
        type: 'fill-blank',
        prompt: 'The confidential documents must ___ stored in a fireproof filing cabinet. (be)',
        hint: 'Bị động với động từ khuyết thiếu must.',
        correctAnswers: ['be'],
        explanation: 'Modal passive: must be + V3 (must be stored).',
        translation: 'Các tài liệu mật phải được lưu trữ trong một chiếc tủ hồ sơ chống cháy.',
        level: 'Cơ bản'
      },
      {
        id: 'pv-fb-3',
        type: 'fill-blank',
        prompt: 'The national stadium was packed; the final match was ___ broadcast live to 50 countries. (be)',
        hint: 'Quá khứ tiếp diễn bị động dùng being.',
        correctAnswers: ['being'],
        explanation: 'Quá khứ tiếp diễn bị động: was being broadcast.',
        translation: 'Sân vận động quốc gia chật kín; trận chung kết đang được phát sóng trực tiếp tới 50 quốc gia.',
        level: 'Trung bình'
      },
      {
        id: 'pv-fb-4',
        type: 'fill-blank',
        prompt: 'The flight has been cancelled ___ bad weather. (due to/by/with)',
        hint: 'Chỉ nguyên nhân không phải tác nhân con người.',
        correctAnswers: ['due to', 'because of'],
        explanation: 'Chỉ nguyên nhân gây ra sự cố dùng due to hoặc because of.',
        translation: 'Chuyến bay đã bị hủy do thời tiết xấu.',
        level: 'Cơ bản'
      },
      {
        id: 'pv-fb-5',
        type: 'fill-blank',
        prompt: 'He was ___ by the board of directors as the new head coach. (appoint)',
        hint: 'Quá khứ phân từ của appoint.',
        correctAnswers: ['appointed'],
        explanation: 'Dạng bị động was appointed.',
        translation: 'Ông ấy đã được ban giám đốc bổ nhiệm làm huấn luyện viên trưởng mới.',
        level: 'Cơ bản'
      },
      {
        id: 'pv-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The strange incident was happened late yesterday evening."',
        hint: 'Happen là nội động từ, không có dạng bị động (happen -> happened).',
        correctAnswers: [
          'The strange incident happened late yesterday evening.'
        ],
        explanation: 'Happen là nội động từ, không bao giờ dùng ở thể bị động (bỏ was).',
        translation: 'Vụ việc kỳ lạ đã xảy ra vào chiều tối muộn ngày hôm qua.',
        level: 'Cơ bản'
      },
      {
        id: 'pv-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The suspect was made confess to the crime by the investigators."',
        hint: 'Thể bị động của make là be made to do sth.',
        correctAnswers: [
          'The suspect was made to confess to the crime by the investigators.'
        ],
        explanation: 'Khi make chuyển sang câu bị động, bắt buộc phải có to: was made to confess.',
        translation: 'Nghi phạm đã bị các điều tra viên buộc phải thú nhận tội ác.',
        level: 'Trung bình'
      },
      {
        id: 'pv-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trật tự từ: "The wallet was found yesterday in the park by a student."',
        hint: 'Trật tự chuẩn: Nơi chốn -> by Agent -> Thời gian.',
        correctAnswers: [
          'The wallet was found in the park by a student yesterday.'
        ],
        explanation: 'Trật tự chuẩn trong câu bị động: Nơi chốn (in the park) + by Agent (by a student) + Thời gian (yesterday).',
        translation: 'Chiếc ví đã được một sinh viên tìm thấy trong công viên ngày hôm qua.',
        level: 'Trung bình'
      },
      {
        id: 'pv-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The historic building is being renovate by professional architects."',
        hint: 'Sau being phải là V3/ed (renovated).',
        correctAnswers: [
          'The historic building is being renovated by professional architects.'
        ],
        explanation: 'Thể bị động tiếp diễn đòi hỏi quá khứ phân từ V3: is being renovated.',
        translation: 'Tòa nhà lịch sử đang được các kiến trúc sư chuyên nghiệp tân trang lại.',
        level: 'Cơ bản'
      },
      {
        id: 'pv-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "It believes that regular meditation reduces chronic stress."',
        hint: 'Bị động khách quan: It is believed that...',
        correctAnswers: [
          'It is believed that regular meditation reduces chronic stress.'
        ],
        explanation: 'Cấu trúc bị động khách quan phải có động từ to be: It is believed that...',
        translation: 'Người ta tin rằng việc thiền định thường xuyên giúp giảm căng thẳng mãn tính.',
        level: 'Cơ bản'
      },
      {
        id: 'pv-sc-1',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau sang thể bị động: "They are renovating the ancient town hall."',
        hint: 'The ancient town hall is being renovated.',
        correctAnswers: [
          'The ancient town hall is being renovated.'
        ],
        explanation: 'Hiện tại tiếp diễn bị động: is being renovated.',
        translation: 'Tòa thị chính cổ kính đang được tân trang lại.',
        level: 'Cơ bản'
      },
      {
        id: 'pv-sc-2',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau sang thể bị động ưu tiên tân ngữ chỉ người lên làm chủ ngữ: "The committee offered him a prestigious fellowship."',
        hint: 'He was offered a prestigious fellowship by the committee.',
        correctAnswers: [
          'He was offered a prestigious fellowship by the committee.',
          'He was offered a prestigious fellowship.'
        ],
        explanation: 'Đưa tân ngữ chỉ người him lên làm chủ ngữ He: He was offered a prestigious fellowship.',
        translation: 'Anh ấy đã được ủy ban trao tặng một học bổng nghiên cứu danh giá.',
        level: 'Trung bình'
      },
      {
        id: 'pv-sc-3',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau sang bị động khách quan bắt đầu bằng "It is reported that": "Journalists report that the economy is recovering quickly."',
        hint: 'It is reported that the economy is recovering quickly.',
        correctAnswers: [
          'It is reported that the economy is recovering quickly.'
        ],
        explanation: 'Cấu trúc bị động khách quan với It: It is reported that + S + V.',
        translation: 'Có tin báo rằng nền kinh tế đang phục hồi nhanh chóng.',
        level: 'Cơ bản'
      },
      {
        id: 'pv-sc-4',
        type: 'sentence-construction',
        prompt: 'Chuyển câu trên sang cấu trúc bị động khách quan bắt đầu bằng "The economy": "The economy is reported to be recovering quickly."',
        hint: 'The economy is reported to be recovering quickly.',
        correctAnswers: [
          'The economy is reported to be recovering quickly.'
        ],
        explanation: 'S + is reported to + V-inf.',
        translation: 'Nền kinh tế được báo cáo là đang phục hồi nhanh chóng.',
        level: 'Nâng cao'
      },
      {
        id: 'pv-sc-5',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau sang bị động với động từ khuyết thiếu: "You must return all borrowed library books by Friday."',
        hint: 'All borrowed library books must be returned by Friday.',
        correctAnswers: [
          'All borrowed library books must be returned by Friday.'
        ],
        explanation: 'Modal passive: must be returned.',
        translation: 'Tất cả sách thư viện mượn phải được hoàn trả trước thứ Sáu.',
        level: 'Cơ bản'
      }
    ]
  },

  // 21. CONDITIONALS
  {
    id: 'conditionals',
    title: 'Conditionals',
    vietnameseTitle: 'Câu điều kiện',
    category: 'Các dạng câu đặc biệt',
    categoryId: 'special-sentences',
    level: 'A2–B2',
    summary: 'Câu điều kiện loại 0, 1, 2, 3 và câu điều kiện hỗn hợp (Mixed Conditionals); biến thể Unless, Provided that và hiện tượng đảo ngữ câu điều kiện.',
    overview: 'Câu điều kiện (Conditionals) dùng để diễn đạt mối quan hệ nhân - quả giữa một giả thuyết (điều kiện) và kết quả có thể xảy ra. Câu điều kiện gồm 2 phần: Mệnh đề điều kiện (If-clause) và Mệnh đề kết quả (Main clause).',
    foundation: 'Việc lựa chọn loại câu điều kiện phụ thuộc vào mức độ khả thi và tính chân thật của sự việc: có thật ở hiện tại/tương lai (Loại 0, 1), giả định trái với hiện tại (Loại 2), hay giả định tiếc nuối trái với quá khứ (Loại 3).',
    classification: [
      {
        title: 'Câu điều kiện Loại 0 (Zero Conditional)',
        description: 'Chân lý, quy luật khoa học, sự thật hiển nhiên: If + Present Simple, Present Simple. (If you heat ice, it melts).'
      },
      {
        title: 'Câu điều kiện Loại 1 (First Conditional)',
        description: 'Sự việc có thật, có khả năng cao xảy ra ở hiện tại hoặc tương lai: If + Present Simple, S + will / can / may + V1.'
      },
      {
        title: 'Câu điều kiện Loại 2 (Second Conditional)',
        description: 'Giả định trái ngược với thực tế ở hiện tại, hoặc tình huống giả tưởng khó xảy ra: If + Past Simple (to be dùng WERE cho mọi ngôi), S + would / could + V1.'
      },
      {
        title: 'Câu điều kiện Loại 3 (Third Conditional)',
        description: 'Giả định trái ngược với sự thật trong quá khứ, thể hiện sự tiếc nuối: If + Past Perfect (had + V3), S + would have + V3.'
      },
      {
        title: 'Câu điều kiện Hỗn hợp (Mixed Conditionals)',
        description: 'Loại 3 + 2: Quá khứ ảnh hưởng đến Hiện tại (If I had taken your advice, I would be successful now).\nLoại 2 + 3: Bản chất hiện tại ảnh hưởng đến Quá khứ (If I were more patient, I wouldn\'t have lost my temper yesterday).'
      },
      {
        title: 'Đảo ngữ Câu điều kiện (Inversion in Conditionals)',
        description: 'Bỏ \'If\' và đảo trợ động từ lên đầu: Loại 1 (Should + S + V1), Loại 2 (Were + S + to V / Were + S), Loại 3 (Had + S + V3).'
      }
    ],
    formulas: [
      {
        title: 'Bảng 4 loại câu điều kiện căn bản',
        formula: 'Loại 0: If + S + V1, S + V1 (sự thật hiển nhiên)\nLoại 1: If + S + V(s/es), S + will + V1 (có thể xảy ra)\nLoại 2: If + S + V2/ed (were), S + would + V1 (trái hiện tại)\nLoại 3: If + S + had + V3, S + would have + V3 (trái quá khứ)',
        note: 'Trong câu điều kiện loại 2, văn phong học thuật chuẩn dùng \'were\' cho tất cả các ngôi: If I were you...'
      },
      {
        title: 'Các từ thay thế cho IF',
        formula: 'Unless = If not (Trừ khi)\nProvided that / As long as = Miễn là\nIn case = Phòng khi (chuẩn bị trước)\nWithout / But for + Noun phrase = Nếu không có...',
        note: 'But for your help, I would have failed (Nếu không có sự giúp đỡ của bạn, tôi đã thất bại).'
      }
    ],
    usage: [
      {
        context: 'Đưa ra lời khuyên với If I were you',
        explanation: 'Dùng câu điều kiện loại 2 để khuyên nhủ ai đó một cách tế nhị.',
        example: { english: 'If I were in your position, I would accept the overseas scholarship.', vietnamese: 'Nếu tôi ở vị trí của bạn, tôi sẽ nhận học bổng du học đó.' }
      },
      {
        context: 'Bày tỏ sự tiếc nuối về sự việc trong quá khứ với Loại 3',
        explanation: 'Nhìn lại quá khứ và ước gì mình đã hành động khác đi.',
        example: { english: 'If we had left ten minutes earlier, we wouldn\'t have missed the flight.', vietnamese: 'Nếu chúng ta rời đi sớm mười phút, chúng ta đã không bị lỡ chuyến bay.' }
      },
      {
        context: 'Diễn tả mối liên hệ giữa hành động quá khứ và kết quả hiện tại (Mixed)',
        explanation: 'Giả định quá khứ nhưng kết quả kéo dài tới hiện tại (thường có dấu hiệu now/today).',
        example: { english: 'If he had studied harder at school, he would have a better job now.', vietnamese: 'Nếu anh ấy học tập chăm chỉ hơn ở trường, bây giờ anh ấy đã có công việc tốt hơn.' }
      }
    ],
    examples: [
      { english: 'If water reaches 100 degrees Celsius, it boils.', vietnamese: 'Nếu nước đạt đến 100 độ C, nó sẽ sôi.', note: 'Câu điều kiện loại 0: quy luật tự nhiên.' },
      { english: 'Had I known about the roadworks, I would have taken an alternative route.', vietnamese: 'Nếu tôi biết về công trình sửa đường, tôi đã đi một lộ trình thay thế.', note: 'Đảo ngữ câu điều kiện loại 3 (Had I known...).' },
      { english: 'You cannot enter the laboratory unless you wear protective goggles.', vietnamese: 'Bạn không thể vào phòng thí nghiệm trừ khi bạn đeo kính bảo hộ.', note: 'Unless = If you do not wear.' }
    ],
    importantNotes: [
      'KHÔNG BAO GIỜ dùng \'will\' hoặc \'would\' ngay trong mệnh đề IF (Sai: If it will rain...; Đúng: If it rains...).',
      'Unless đã mang nghĩa phủ định, nên mệnh đề đi sau unless PHẢI Ở THỂ KHẲNG ĐỊNH (Sai: Unless you don\'t study; Đúng: Unless you study).',
      'In case khác If: I will take an umbrella if it rains (trời mưa mới lấy); I will take an umbrella in case it rains (lấy sẵn ô đề phòng trời mưa).',
      'Đảo ngữ loại 1 dùng \'Should\': Should you require further assistance, please contact us.'
    ],
    comparison: {
      title: 'Phân biệt If vs In case',
      points: [
        { concept: 'IF (Nếu)', difference: 'Hành động ở mệnh đề chính CHỈ THỰC HIỆN KHI điều kiện xảy ra: I\'ll buy food if I get hungry.' },
        { concept: 'IN CASE (Phòng khi)', difference: 'Hành động ở mệnh đề chính ĐƯỢC CHUẨN BỊ TRƯỚC đề phòng: I\'ll buy food in case I get hungry.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp đàm phán hợp đồng kinh doanh',
      dialogueOrSentences: [
        { speaker: 'Đối tác', text: 'If your company offers a 10% discount, we will sign the contract immediately.', translation: 'Nếu công ty anh chiết khấu 10%, chúng tôi sẽ ký hợp đồng ngay lập tức.' },
        { speaker: 'Giám đốc', text: 'Provided that you order in bulk, we can certainly agree to those terms.', translation: 'Miễn là quý công ty đặt hàng số lượng lớn, chúng tôi chắc chắn có thể đồng ý với các điều khoản đó.' },
        { speaker: 'Đối tác', text: 'Excellent! Should you prepare the paperwork, we will review it today.', translation: 'Tuyệt vời! Nếu anh chuẩn bị giấy tờ, chúng tôi sẽ xem xét ngay hôm nay.' }
      ]
    },
    summaryPoints: [
      'Loại 0: If + V1, V1 (chân lý).',
      'Loại 1: If + V(s/es), will + V1 (có thể xảy ra ở tương lai).',
      'Loại 2: If + V2/were, would + V1 (trái thực tế hiện tại).',
      'Loại 3: If + had V3, would have V3 (trái thực tế quá khứ).',
      'Đảo ngữ: Should + S + V1 (loại 1) / Were + S (to V) (loại 2) / Had + S + V3 (loại 3).',
      'Unless = If not; But for + Noun phrase.'
    ],
    exercises: [
      {
        id: 'cond-mc-1',
        type: 'multiple-choice',
        prompt: 'If I ___ in your position, I would report the safety violation to the authorities immediately.',
        choices: ['were', 'was', 'am', 'have been'],
        correctAnswers: ['were'],
        explanation: 'Câu điều kiện loại 2 giả định trái thực tế ở hiện tại, to be chuẩn dùng were cho mọi ngôi: If I were you...',
        translation: 'Nếu tôi ở vị trí của bạn, tôi sẽ báo cáo vi phạm an toàn cho các cơ quan chức năng ngay lập tức.',
        level: 'Cơ bản'
      },
      {
        id: 'cond-mc-2',
        type: 'multiple-choice',
        prompt: 'If the paramedics had arrived five minutes earlier, they ___ the patient\'s life.',
        choices: [
          'would have saved',
          'would save',
          'saved',
          'will have saved'
        ],
        correctAnswers: ['would have saved'],
        explanation: 'Mệnh đề if ở thì quá khứ hoàn thành (had arrived) -> Câu điều kiện loại 3, mệnh đề chính là would have + V3: would have saved.',
        translation: 'Nếu các nhân viên y tế đến sớm hơn năm phút, họ đã cứu được tính mạng của bệnh nhân.',
        level: 'Trung bình'
      },
      {
        id: 'cond-mc-3',
        type: 'multiple-choice',
        prompt: '___ you encounter any technical difficulties, please dial our 24/7 hotline.',
        choices: ['Should', 'Had', 'Were', 'Unless'],
        correctAnswers: ['Should'],
        explanation: 'Đảo ngữ câu điều kiện loại 1: Should + S + V1... thay cho If you encounter...',
        translation: 'Nếu bạn gặp phải bất kỳ sự cố kỹ thuật nào, vui lòng gọi đến đường dây nóng 24/7 của chúng tôi.',
        level: 'Trung bình'
      },
      {
        id: 'cond-mc-4',
        type: 'multiple-choice',
        prompt: 'If he had taken the doctor\'s advice six months ago, he ___ in hospital right now.',
        choices: [
          'wouldn\'t be',
          'wouldn\'t have been',
          'isn\'t',
          'won\'t be'
        ],
        correctAnswers: ['wouldn\'t be'],
        explanation: 'Câu điều kiện hỗn hợp (Mixed 3-2): Hành động quá khứ (had taken) dẫn đến kết quả ở hiện tại (right now) -> wouldn\'t be.',
        translation: 'Nếu anh ấy nghe theo lời khuyên của bác sĩ sáu tháng trước, bây giờ anh ấy đã không phải nằm viện.',
        level: 'Nâng cao'
      },
      {
        id: 'cond-mc-5',
        type: 'multiple-choice',
        prompt: 'Take a raincoat with you ___ it rains during your outdoor hike.',
        choices: ['in case', 'if', 'unless', 'provided that'],
        correctAnswers: ['in case'],
        explanation: 'In case mang nghĩa phòng khi (chuẩn bị trước áo mưa đề phòng trời mưa).',
        translation: 'Hãy mang theo áo mưa phòng khi trời mưa trong suốt chuyến đi bộ leo núi ngoài trời.',
        level: 'Cơ bản'
      },
      {
        id: 'cond-fb-1',
        type: 'fill-blank',
        prompt: 'If water is heated to 100 degrees Celsius under standard pressure, it ___. (boil)',
        hint: 'Câu điều kiện loại 0 chỉ chân lý khoa học.',
        correctAnswers: ['boils'],
        explanation: 'Câu điều kiện loại 0 diễn tả quy luật vật lý: Present Simple (boils).',
        translation: 'Nếu nước được đun nóng đến 100 độ C dưới áp suất tiêu chuẩn, nó sẽ sôi.',
        level: 'Cơ bản'
      },
      {
        id: 'cond-fb-2',
        type: 'fill-blank',
        prompt: 'You will not receive your diploma ___ you settle all outstanding library fees. (unless/if)',
        hint: 'Mang nghĩa trừ khi.',
        correctAnswers: ['unless'],
        explanation: 'Unless = if you do not settle (trừ khi bạn thanh toán hết phí thư viện).',
        translation: 'Bạn sẽ không nhận được bằng tốt nghiệp trừ khi bạn thanh toán hết các khoản phí thư viện còn tồn đọng.',
        level: 'Cơ bản'
      },
      {
        id: 'cond-fb-3',
        type: 'fill-blank',
        prompt: '___ I known that you were in hospital, I would have visited you immediately. (Had/Should)',
        hint: 'Đảo ngữ câu điều kiện loại 3.',
        correctAnswers: ['Had'],
        explanation: 'Đảo ngữ loại 3: Had + S + V3 (Had I known...).',
        translation: 'Nếu tôi biết bạn đang nằm viện, tôi đã đến thăm bạn ngay lập tức.',
        level: 'Trung bình'
      },
      {
        id: 'cond-fb-4',
        type: 'fill-blank',
        prompt: 'If she ___ more fluent in Japanese, she could apply for that translation job. (be)',
        hint: 'Câu điều kiện loại 2 giả định trái hiện tại.',
        correctAnswers: ['were', 'was'],
        explanation: 'Câu điều kiện loại 2 dùng were cho chủ ngữ she.',
        translation: 'Nếu cô ấy lưu loát tiếng Nhật hơn, cô ấy đã có thể nộp đơn xin công việc biên dịch đó.',
        level: 'Cơ bản'
      },
      {
        id: 'cond-fb-5',
        type: 'fill-blank',
        prompt: 'You may borrow my digital camera as ___ as you return it by Friday. (long/far)',
        hint: 'Cụm từ as long as mang nghĩa miễn là.',
        correctAnswers: ['long'],
        explanation: 'As long as = Provided that (miễn là).',
        translation: 'Bạn có thể mượn máy ảnh kỹ thuật số của tôi miễn là bạn trả lại trước thứ Sáu.',
        level: 'Cơ bản'
      },
      {
        id: 'cond-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "If it will rain tomorrow, the outdoor festival will be postponed."',
        hint: 'Không dùng will trong mệnh đề if.',
        correctAnswers: [
          'If it rains tomorrow, the outdoor festival will be postponed.'
        ],
        explanation: 'Trong mệnh đề if của câu điều kiện loại 1, chia thì hiện tại đơn (rains), không dùng will rain.',
        translation: 'Nếu ngày mai trời mưa, lễ hội ngoài trời sẽ bị hoãn lại.',
        level: 'Cơ bản'
      },
      {
        id: 'cond-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "You will fail the driving test unless you don\'t practice every day."',
        hint: 'Unless đã mang nghĩa phủ định, mệnh đề sau phải ở thể khẳng định (unless you practice).',
        correctAnswers: [
          'You will fail the driving test unless you practice every day.',
          'You will fail the driving test if you don\'t practice every day.'
        ],
        explanation: 'Unless = If not; không dùng phủ định kép unless you don\'t practice. Sửa thành unless you practice.',
        translation: 'Bạn sẽ trượt bài thi lái xe trừ khi bạn luyện tập mỗi ngày.',
        level: 'Cơ bản'
      },
      {
        id: 'cond-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "If I knew about the meeting yesterday, I would have attended it."',
        hint: 'Hành động xảy ra trong quá khứ (yesterday) phải dùng điều kiện loại 3: If I had known.',
        correctAnswers: [
          'If I had known about the meeting yesterday, I would have attended it.'
        ],
        explanation: 'Giả định trái với quá khứ (yesterday) phải dùng thì quá khứ hoàn thành trong mệnh đề if: If I had known.',
        translation: 'Nếu hôm qua tôi biết về cuộc họp, tôi đã tham dự rồi.',
        level: 'Trung bình'
      },
      {
        id: 'cond-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu đảo ngữ: "Had she listened to my advice, she wouldn\'t be in trouble now?"',
        hint: 'Đây là câu trần thuật không phải câu hỏi, bỏ dấu chấm hỏi hoặc kiểm tra ngữ pháp.',
        correctAnswers: [
          'Had she listened to my advice, she wouldn\'t be in trouble now.'
        ],
        explanation: 'Đảo ngữ câu điều kiện không phải là câu hỏi nên kết thúc bằng dấu chấm: Had she listened to my advice, she wouldn\'t be in trouble now.',
        translation: 'Nếu cô ấy nghe theo lời khuyên của tôi, bây giờ cô ấy đã không gặp rắc rối.',
        level: 'Trung bình'
      },
      {
        id: 'cond-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "I will lend you my laptop provided if you take good care of it."',
        hint: 'Chỉ dùng provided that hoặc if, không dùng provided if.',
        correctAnswers: [
          'I will lend you my laptop provided that you take good care of it.',
          'I will lend you my laptop provided you take good care of it.',
          'I will lend you my laptop if you take good care of it.'
        ],
        explanation: 'Dùng provided that hoặc if, không ghép provided if.',
        translation: 'Tôi sẽ cho bạn mượn laptop miễn là bạn giữ gìn nó cẩn thận.',
        level: 'Trung bình'
      },
      {
        id: 'cond-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng "Unless" thay thế cho "If not": "If you do not register before Friday, you cannot attend the workshop."',
        hint: 'Unless you register before Friday, you cannot attend the workshop.',
        correctAnswers: [
          'Unless you register before Friday, you cannot attend the workshop.'
        ],
        explanation: 'Unless = If not. Mệnh đề sau unless ở thể khẳng định register.',
        translation: 'Trừ khi bạn đăng ký trước thứ Sáu, bạn sẽ không thể tham dự buổi hội thảo.',
        level: 'Cơ bản'
      },
      {
        id: 'cond-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau bằng cách dùng ĐẢO NGỮ loại 3 (Had + S + V3): "If they had invested in that startup, they would have made a huge profit."',
        hint: 'Had they invested in that startup, they would have made a huge profit.',
        correctAnswers: [
          'Had they invested in that startup, they would have made a huge profit.'
        ],
        explanation: 'Bỏ If và đảo Had lên đầu câu: Had they invested...',
        translation: 'Nếu họ đã đầu tư vào công ty khởi nghiệp đó, họ đã kiếm được một khoản lợi nhuận khổng lồ.',
        level: 'Trung bình'
      },
      {
        id: 'cond-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau bằng cách dùng ĐẢO NGỮ loại 1 (Should): "If you need any further information, please contact our helpdesk."',
        hint: 'Should you need any further information, please contact our helpdesk.',
        correctAnswers: [
          'Should you need any further information, please contact our helpdesk.'
        ],
        explanation: 'Đảo ngữ loại 1: Should + S + V1...',
        translation: 'Nếu bạn cần thêm bất kỳ thông tin nào, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi.',
        level: 'Trung bình'
      },
      {
        id: 'cond-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại tình huống thực tế sau thành câu điều kiện loại 2: "I don\'t have enough money, so I can\'t travel abroad."',
        hint: 'If I had enough money, I could travel abroad.',
        correctAnswers: [
          'If I had enough money, I could travel abroad.',
          'If I had enough money, I would travel abroad.'
        ],
        explanation: 'Giả định trái với hiện tại (don\'t have money -> had money, can\'t travel -> could travel).',
        translation: 'Nếu tôi có đủ tiền, tôi đã có thể đi du lịch nước ngoài.',
        level: 'Cơ bản'
      },
      {
        id: 'cond-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng cấu trúc "But for" thay thế cho "If it hadn\'t been for": "If it hadn\'t been for your generous support, we would have failed."',
        hint: 'But for your generous support, we would have failed.',
        correctAnswers: [
          'But for your generous support, we would have failed.'
        ],
        explanation: 'But for + Noun phrase = If it had not been for...',
        translation: 'Nếu không có sự hỗ trợ hào phóng của bạn, chúng tôi đã thất bại.',
        level: 'Nâng cao'
      }
    ]
  },

  // 22. REPORTED SPEECH
  {
    id: 'reported-speech',
    title: 'Reported Speech',
    vietnameseTitle: 'Câu tường thuật',
    category: 'Các dạng câu đặc biệt',
    categoryId: 'special-sentences',
    level: 'B1–B2',
    summary: 'Quy tắc chuyển đổi từ câu trực tiếp sang gián tiếp: lùi thì (backshift), biến đổi đại từ, biến đổi trạng từ thời gian/nơi chốn; tường thuật câu hỏi, câu mệnh lệnh và động từ tường thuật đặc biệt.',
    overview: 'Câu tường thuật (Reported Speech / Indirect Speech) là cách chúng ta thuật lại lời nói, suy nghĩ hoặc câu hỏi của một người khác mà không sử dụng nguyên văn từng từ trong dấu ngoặc kép. Nắm vững câu tường thuật là kỹ năng then chốt trong viết báo cáo, tóm tắt cuộc họp và giao tiếp hàng ngày.',
    foundation: 'Khi chuyển từ câu trực tiếp sang gián tiếp, có 3 quy tắc biến đổi cốt lõi bắt buộc phải thực hiện: (1) LÙI THÌ của động từ (nếu động từ tường thuật ở quá khứ), (2) ĐỔI ĐẠI TỪ nhân xưng và tính từ sở hữu phù hợp với ngữ cảnh mới, và (3) ĐỔI TRẠNG TỪ chỉ thời gian và nơi chốn.',
    classification: [
      {
        title: 'Tường thuật câu trần thuật (Statements)',
        description: 'S + said (that) + S + V(lùi thì) HOẶC S + told + O + (that) + S + V(lùi thì).'
      },
      {
        title: 'Tường thuật câu hỏi Yes/No (Yes/No Questions)',
        description: 'S + asked + (O) + IF / WHETHER + S + V (quay về trật tự câu khẳng định, không có trợ động từ do/does/did).'
      },
      {
        title: 'Tường thuật câu hỏi Wh- (Wh- Questions)',
        description: 'S + asked + (O) + Wh-word + S + V (trật tự khẳng định, không đảo ngữ).'
      },
      {
        title: 'Tường thuật câu mệnh lệnh & yêu cầu (Imperatives & Requests)',
        description: 'Khẳng định: S + told / asked / ordered + O + TO V1.\nPhủ định: S + told / asked + O + NOT TO V1.'
      },
      {
        title: 'Tường thuật với Động từ đặc biệt (Reporting Verbs with Gerund / Infinitive)',
        description: 'Promise/threaten/refuse/agree + TO V1; Suggest/admit/deny/apologize for + V-ING; Accuse sb of + V-ing.'
      }
    ],
    formulas: [
      {
        title: 'Bảng quy tắc Lùi thì (Backshift of Tenses)',
        formula: 'Present Simple -> Past Simple\nPresent Continuous -> Past Continuous\nPresent Perfect / Past Simple -> Past Perfect\nWill -> Would\nCan -> Could\nMay -> Might\nMust -> Had to',
        note: 'Past Perfect (had + V3) và Would/Could/Should/Might GIỮ NGUYÊN không lùi nữa.'
      },
      {
        title: 'Bảng biến đổi Trạng từ thời gian & Nơi chốn',
        formula: 'Now -> then\nToday -> that day\nYesterday -> the day before / the previous day\nTomorrow -> the following day / the next day\nAgo -> before\nHere -> there\nThis -> that\nThese -> those',
        note: 'Quy tắc này áp dụng khi thời điểm tường thuật khác với thời điểm diễn ra sự việc.'
      },
      {
        title: 'Ngoại lệ KHÔNG lùi thì',
        formula: '1. Động từ tường thuật ở HIỆN TẠI: He says (that) he is tired.\n2. Tuyên bố CHÂN LÝ, sự thật hiển nhiên: The teacher said that the Earth revolves around the Sun.\n3. Câu điều kiện loại 2 và 3 giữ nguyên.',
        note: 'Khi sự việc vẫn còn đúng tại thời điểm nói, không bắt buộc phải lùi thì.'
      }
    ],
    usage: [
      {
        context: 'Phân biệt Say và Tell',
        explanation: 'Say không bắt buộc có tân ngữ (He said that...); Tell BẮT BUỘC phải có tân ngữ người trực tiếp (He told me that...).',
        example: { english: 'She told me that the meeting was postponed. (KHÔNG dùng She said me).', vietnamese: 'Cô ấy đã bảo với tôi rằng cuộc họp đã bị hoãn.' }
      },
      {
        context: 'Tường thuật câu hỏi không dùng trợ động từ do/does/did',
        explanation: 'Câu hỏi biến thành mệnh đề danh từ khẳng định.',
        example: { english: '"Where do you live?" -> She asked me where I lived.', vietnamese: 'Cô ấy đã hỏi tôi xem tôi sống ở đâu.' }
      },
      {
        context: 'Sử dụng động từ tường thuật nâng cao thay vì dùng lặp lại say/tell',
        explanation: 'Tăng tính học thuật và chính xác: admit (thừa nhận), deny (phủ nhận), apologize (xin lỗi), recommend (khuyên).',
        example: { english: 'He apologized for being late to the interview.', vietnamese: 'Anh ấy đã xin lỗi vì đến muộn buổi phỏng vấn.' }
      }
    ],
    examples: [
      { english: 'He said, "I have lived in London for five years." -> He said that he had lived in London for five years.', vietnamese: 'Anh ấy nói rằng anh ấy đã sống ở Luân Đôn được năm năm.', note: 'Hiện tại hoàn thành lùi về quá khứ hoàn thành.' },
      { english: 'She asked, "Are you ready?" -> She asked me if I was ready.', vietnamese: 'Cô ấy đã hỏi tôi liệu tôi đã sẵn sàng chưa.', note: 'Câu hỏi Yes/No dùng if + S + was.' },
      { english: 'The doctor advised me to drink plenty of water.', vietnamese: 'Bác sĩ đã khuyên tôi nên uống nhiều nước.', note: 'Advise someone to do something.' }
    ],
    importantNotes: [
      'Không dùng: She said to me that... (dù đúng ngữ pháp nhưng ít tự nhiên hơn She told me that...). Tuyệt đối không viết: She said me.',
      'Trong câu hỏi gián tiếp, KHÔNG ĐƯỢC đảo trợ động từ lên trước chủ ngữ và BỎ DẤU CHẤM HỎI: She asked where was I (SAI) -> She asked where I was (ĐÚNG).',
      'Động từ suggest: suggest + V-ing HOẶC suggest that S + (should) + V1 (He suggested going for a walk / He suggested that we go for a walk). KHÔNG dùng suggest to do sth.',
      'Must lùi thành had to khi chỉ sự bắt buộc; giữ nguyên must khi chỉ sự suy đoán logic.'
    ],
    comparison: {
      title: 'Phân biệt Say vs Tell',
      points: [
        { concept: 'SAY (Nói rằng)', difference: 'Không có tân ngữ người đứng liền sau: He said that he was hungry (hoặc say to sb).' },
        { concept: 'TELL (Bảo với ai)', difference: 'BẮT BUỘC có tân ngữ người nhận trực tiếp: He told me that he was hungry.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp văn phòng: Báo cáo lại chỉ đạo của cấp trên',
      dialogueOrSentences: [
        { speaker: 'Huyền', text: 'What did the director say during the emergency meeting?', translation: 'Giám đốc đã nói gì trong cuộc họp khẩn cấp thế?' },
        { speaker: 'Tuấn', text: 'He told us that the marketing budget would be increased next quarter.', translation: 'Sếp bảo với chúng ta rằng ngân sách tiếp thị sẽ được tăng vào quý tới.' },
        { speaker: 'Huyền', text: 'Did he mention when we had to submit the final campaign proposal?', translation: 'Sếp có nhắc khi nào chúng ta phải nộp đề xuất chiến dịch cuối cùng không?' },
        { speaker: 'Tuấn', text: 'He instructed us to send it to him before Friday.', translation: 'Sếp hướng dẫn chúng ta phải gửi nó cho sếp trước thứ Sáu.' }
      ]
    },
    summaryPoints: [
      '3 quy tắc chuyển đổi: Lùi thì + Đổi đại từ + Đổi từ chỉ thời gian/nơi chốn.',
      'Say không có O; Tell bắt buộc có O (told me).',
      'Câu hỏi: if/whether (Yes/No) hoặc Wh-word + S + V (không đảo ngữ, không dấu hỏi).',
      'Câu mệnh lệnh: tell/ask + O + (not) to V1.',
      'Các động từ đặc biệt: suggest doing, deny doing, promise to do, apologize for doing.'
    ],
    exercises: [
      {
        id: 'rs-mc-1',
        type: 'multiple-choice',
        prompt: 'The scientist said that the Earth ___ around the sun.',
        choices: ['revolves', 'revolved', 'had revolved', 'was revolving'],
        correctAnswers: ['revolves'],
        explanation: 'Đây là chân lý khoa học, sự thật hiển nhiên bất biến của tự nhiên nên KHÔNG lùi thì (revolves).',
        translation: 'Nhà khoa học đã nói rằng Trái Đất quay xung quanh mặt trời.',
        level: 'Trung bình'
      },
      {
        id: 'rs-mc-2',
        type: 'multiple-choice',
        prompt: 'She asked me ___ I had ever visited the ancient imperial city of Hue.',
        choices: ['whether', 'weather', 'that', 'what'],
        correctAnswers: ['whether'],
        explanation: 'Tường thuật câu hỏi Yes/No dùng if hoặc whether.',
        translation: 'Cô ấy đã hỏi tôi liệu tôi đã từng đến thăm cố đô Huế chưa.',
        level: 'Cơ bản'
      },
      {
        id: 'rs-mc-3',
        type: 'multiple-choice',
        prompt: 'The architect ___ us that the blueprint would be finalized by the end of the week.',
        choices: ['told', 'said', 'spoke', 'talked'],
        correctAnswers: ['told'],
        explanation: 'Đứng trước tân ngữ người \'us\' bắt buộc dùng told (told us that...).',
        translation: 'Kiến trúc sư đã bảo với chúng tôi rằng bản thiết kế sẽ được hoàn tất trước cuối tuần.',
        level: 'Cơ bản'
      },
      {
        id: 'rs-mc-4',
        type: 'multiple-choice',
        prompt: 'The police officer instructed the driver ___ the vehicle immediately.',
        choices: ['to step out of', 'stepping out of', 'step out of', 'stepped out of'],
        correctAnswers: ['to step out of'],
        explanation: 'Tường thuật câu mệnh lệnh: instruct someone + TO V1.',
        translation: 'Viên cảnh sát đã yêu cầu người tài xế bước ra khỏi xe ngay lập tức.',
        level: 'Cơ bản'
      },
      {
        id: 'rs-mc-5',
        type: 'multiple-choice',
        prompt: 'He apologized for ___ the confidential financial spreadsheet.',
        choices: ['losing', 'lost', 'to lose', 'have lost'],
        correctAnswers: ['losing'],
        explanation: 'Cấu trúc apologize for + V-ing (apologized for losing).',
        translation: 'Anh ấy đã xin lỗi vì làm mất bảng tính tài chính mật.',
        level: 'Trung bình'
      },
      {
        id: 'rs-fb-1',
        type: 'fill-blank',
        prompt: '"I will call you tomorrow," Mark said. -> Mark said that he ___ call me the following day. (will/would)',
        hint: 'Lùi thì của will.',
        correctAnswers: ['would'],
        explanation: 'Will lùi thì thành would trong câu tường thuật.',
        translation: 'Mark đã nói rằng anh ấy sẽ gọi cho tôi vào ngày hôm sau.',
        level: 'Cơ bản'
      },
      {
        id: 'rs-fb-2',
        type: 'fill-blank',
        prompt: 'She asked me where I ___ bought that elegant leather handbag. (have/had)',
        hint: 'Lùi thì của quá khứ đơn / hiện tại hoàn thành.',
        correctAnswers: ['had'],
        explanation: 'Lùi về quá khứ hoàn thành: had bought.',
        translation: 'Cô ấy đã hỏi tôi xem tôi đã mua chiếc túi xách da thanh lịch đó ở đâu.',
        level: 'Cơ bản'
      },
      {
        id: 'rs-fb-3',
        type: 'fill-blank',
        prompt: 'The doctor advised my father ___ smoke cigarettes anymore. (not to/to not)',
        hint: 'Phủ định câu mệnh lệnh not to V.',
        correctAnswers: ['not to'],
        explanation: 'Advise someone not to do something.',
        translation: 'Bác sĩ đã khuyên bố tôi không nên hút thuốc lá nữa.',
        level: 'Cơ bản'
      },
      {
        id: 'rs-fb-4',
        type: 'fill-blank',
        prompt: 'He suggested ___ a short coffee break before continuing the seminar. (taking/to take)',
        hint: 'Suggest đi với V-ing.',
        correctAnswers: ['taking'],
        explanation: 'Cấu trúc suggest + V-ing: suggested taking a break.',
        translation: 'Anh ấy đề xuất nghỉ giải lao uống cà phê một lát trước khi tiếp tục hội thảo.',
        level: 'Trung bình'
      },
      {
        id: 'rs-fb-5',
        type: 'fill-blank',
        prompt: 'The teacher asked the class whether anyone ___ solved the riddle. (had/has)',
        hint: 'Lùi thì thành had solved.',
        correctAnswers: ['had'],
        explanation: 'Lùi thì trong câu hỏi gián tiếp thành had solved.',
        translation: 'Giáo viên đã hỏi cả lớp liệu có ai đã giải được câu đố đó chưa.',
        level: 'Trung bình'
      },
      {
        id: 'rs-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu tường thuật: "She said me that she was leaving for New York the next morning."',
        hint: 'Said không đi trực tiếp với me (dùng told me hoặc said that).',
        correctAnswers: [
          'She told me that she was leaving for New York the next morning.',
          'She said that she was leaving for New York the next morning.'
        ],
        explanation: 'Không dùng said me; phải dùng told me that hoặc said that.',
        translation: 'Cô ấy đã bảo với tôi rằng cô ấy sẽ lên đường đi New York vào sáng hôm sau.',
        level: 'Cơ bản'
      },
      {
        id: 'rs-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu hỏi gián tiếp: "He asked me where did I put the office keys."',
        hint: 'Trong câu tường thuật câu hỏi không dùng trợ động từ did, lùi thì put thành had put.',
        correctAnswers: [
          'He asked me where I had put the office keys.',
          'He asked me where I put the office keys.'
        ],
        explanation: 'Không mượn trợ động từ did trong câu hỏi gián tiếp; đổi thành mệnh đề khẳng định: where I had put.',
        translation: 'Anh ấy đã hỏi tôi xem tôi đã để chìa khóa văn phòng ở đâu.',
        level: 'Trung bình'
      },
      {
        id: 'rs-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The manager suggested us to reschedule the project kick-off."',
        hint: 'Suggest không đi với tân ngữ + to V (suggested that we reschedule).',
        correctAnswers: [
          'The manager suggested that we reschedule the project kick-off.',
          'The manager suggested rescheduling the project kick-off.'
        ],
        explanation: 'Không dùng suggest sb to do sth; phải dùng suggest that we reschedule hoặc suggest rescheduling.',
        translation: 'Người quản lý đã đề xuất chúng tôi nên lên lại lịch cho buổi khởi động dự án.',
        level: 'Nâng cao'
      },
      {
        id: 'rs-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The tour guide told the visitors do not touch the ancient artifacts."',
        hint: 'Tường thuật câu mệnh lệnh phủ định: told the visitors not to touch.',
        correctAnswers: [
          'The tour guide told the visitors not to touch the ancient artifacts.'
        ],
        explanation: 'Câu mệnh lệnh phủ định gián tiếp dùng not to V: told the visitors not to touch.',
        translation: 'Hướng dẫn viên du lịch đã bảo các du khách không được chạm vào những hiện vật cổ.',
        level: 'Cơ bản'
      },
      {
        id: 'rs-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She promised delivering the translated documents by tomorrow morning."',
        hint: 'Promise đi với to V (promised to deliver).',
        correctAnswers: [
          'She promised to deliver the translated documents by the following morning.',
          'She promised to deliver the translated documents by tomorrow morning.'
        ],
        explanation: 'Promise + to V: promised to deliver. Tomorrow morning chuyển thành the following morning.',
        translation: 'Cô ấy đã hứa sẽ chuyển các tài liệu đã dịch trước sáng hôm sau.',
        level: 'Trung bình'
      },
      {
        id: 'rs-sc-1',
        type: 'sentence-construction',
        prompt: 'Chuyển câu trực tiếp sau sang câu tường thuật: "I have lost my passport," John said.',
        hint: 'John said that he had lost his passport.',
        correctAnswers: [
          'John said that he had lost his passport.',
          'John said he had lost his passport.'
        ],
        explanation: 'Lùi thì have lost -> had lost; đổi đại từ my -> his.',
        translation: 'John đã nói rằng anh ấy đã làm mất hộ chiếu của mình.',
        level: 'Cơ bản'
      },
      {
        id: 'rs-sc-2',
        type: 'sentence-construction',
        prompt: 'Chuyển câu hỏi Yes/No sau sang câu gián tiếp: "Are you attending the seminar tomorrow?" she asked me.',
        hint: 'She asked me if I was attending the seminar the following day.',
        correctAnswers: [
          'She asked me if I was attending the seminar the following day.',
          'She asked me whether I was attending the seminar the following day.'
        ],
        explanation: 'Dùng if/whether, lùi thì are attending -> was attending, tomorrow -> the following day.',
        translation: 'Cô ấy đã hỏi tôi liệu tôi có tham dự hội thảo vào ngày hôm sau không.',
        level: 'Trung bình'
      },
      {
        id: 'rs-sc-3',
        type: 'sentence-construction',
        prompt: 'Chuyển câu hỏi Wh- sau sang câu gián tiếp: "Where did you buy this camera?" Tom asked Lan.',
        hint: 'Tom asked Lan where she had bought that camera.',
        correctAnswers: [
          'Tom asked Lan where she had bought that camera.'
        ],
        explanation: 'Bỏ did, lùi thì buy -> had bought, this camera -> that camera.',
        translation: 'Tom đã hỏi Lan xem cô ấy đã mua chiếc máy ảnh đó ở đâu.',
        level: 'Trung bình'
      },
      {
        id: 'rs-sc-4',
        type: 'sentence-construction',
        prompt: 'Chuyển câu mệnh lệnh phủ định sang câu gián tiếp: "Don\'t touch that dangerous machine!" the supervisor told the worker.',
        hint: 'The supervisor told the worker not to touch that dangerous machine.',
        correctAnswers: [
          'The supervisor told the worker not to touch that dangerous machine.'
        ],
        explanation: 'Told + O + not to V1.',
        translation: 'Người giám sát đã bảo người công nhân không được chạm vào cỗ máy nguy hiểm đó.',
        level: 'Cơ bản'
      },
      {
        id: 'rs-sc-5',
        type: 'sentence-construction',
        prompt: 'Chuyển câu sau sang câu tường thuật dùng động từ "apologized for + V-ing": "I am so sorry I broke your favorite coffee mug," he said to me.',
        hint: 'He apologized to me for breaking my favorite coffee mug.',
        correctAnswers: [
          'He apologized to me for breaking my favorite coffee mug.',
          'He apologized for breaking my favorite coffee mug.'
        ],
        explanation: 'Apologize (to sb) for + V-ing.',
        translation: 'Anh ấy đã xin lỗi tôi vì làm vỡ chiếc cốc cà phê yêu thích của tôi.',
        level: 'Nâng cao'
      }
    ]
  },

  // 23. COMPARISON
  {
    id: 'comparison',
    title: 'Comparison',
    vietnameseTitle: 'So sánh',
    category: 'Các dạng câu đặc biệt',
    categoryId: 'special-sentences',
    level: 'A2–B2',
    summary: 'So sánh bằng, so sánh hơn, so sánh nhất; so sánh kép (The more... the more...), so sánh bội số và các dạng bất quy tắc.',
    overview: 'Cấu trúc so sánh (Comparison) được sử dụng để đối chiếu tính chất, mức độ hoặc số lượng giữa hai hoặc nhiều đối tượng với nhau. Thành thạo các dạng so sánh từ cơ bản đến nâng cao là nền tảng để viết báo cáo phân tích, miêu tả biểu đồ và giao tiếp thuyết phục.',
    foundation: 'Việc hình thành dạng so sánh phụ thuộc vào độ dài của tính từ/trạng từ: ngắn (1 âm tiết hoặc 2 âm tiết tận cùng -y) hay dài (2 âm tiết trở lên). Các cấp độ so sánh gồm: Bằng (as...as), Hơn (more/-er...than), Nhất (the most/-est), và So sánh kép (The more... the more...).',
    classification: [
      {
        title: 'So sánh bằng (Equal Comparison)',
        description: 'Khẳng định: S1 + V + AS + Adj/Adv + AS + S2. Phủ định: S1 + V + NOT AS / NOT SO + Adj/Adv + AS + S2.'
      },
      {
        title: 'So sánh hơn (Comparative)',
        description: 'Ngắn: Adj/Adv + -er + THAN (faster than). Dài: MORE + Adj/Adv + THAN (more expensive than). Kém hơn: LESS + Adj/Adv + THAN.'
      },
      {
        title: 'So sánh nhất (Superlative)',
        description: 'Ngắn: THE + Adj/Adv + -est (the fastest). Dài: THE MOST + Adj/Adv (the most expensive). Kém nhất: THE LEAST + Adj/Adv.'
      },
      {
        title: 'So sánh kép (Double Comparative: Càng... Càng...)',
        description: 'THE + comparative + S1 + V1, THE + comparative + S2 + V2. Ví dụ: The more you practice, the more fluent you become.'
      },
      {
        title: 'So sánh bội số (Multiple Comparison)',
        description: 'S + V + multiple number (twice, three times, four times) + AS + much/many/Adj + AS + Noun.'
      }
    ],
    formulas: [
      {
        title: 'Bảng biến đổi Tính từ bất quy tắc',
        formula: 'good / well -> better -> the best\nbad / badly -> worse -> the worst\nmuch / many -> more -> the most\nlittle -> less -> the least\nfar -> farther (khoảng cách) / further (thêm nữa) -> farthest / furthest',
        note: 'Further information (thông tin thêm), không dùng farther information.'
      },
      {
        title: 'Công thức So sánh kép (The more... the more...)',
        formula: 'THE + [So sánh hơn 1] + S1 + V1, THE + [So sánh hơn 2] + S2 + V2',
        note: 'The harder you study, the higher scores you will achieve.'
      },
      {
        title: 'Bổ ngữ tăng cường cho So sánh hơn',
        formula: 'MUCH / FAR / A LOT / EVEN / A LITTLE / SLIGHTLY + comparative + THAN',
        note: 'Much faster (nhanh hơn nhiều) · Slightly higher (cao hơn một chút).'
      }
    ],
    usage: [
      {
        context: 'Nhấn mạnh mức độ chênh lệch lớn với Much / Far',
        explanation: 'Đứng trước dạng so sánh hơn để nhấn mạnh khoảng cách khác biệt.',
        example: { english: 'The train journey was far more comfortable than traveling by bus.', vietnamese: 'Chuyến đi bằng tàu hỏa thoải mái hơn nhiều so với việc đi bằng xe buýt.' }
      },
      {
        context: 'Diễn tả mối quan hệ tương hỗ biến thiên với So sánh kép',
        explanation: 'Hành động 1 tăng lên kéo theo hành động 2 thay đổi tương ứng.',
        example: { english: 'The earlier we depart, the sooner we will arrive at our destination.', vietnamese: 'Chúng ta xuất phát càng sớm thì chúng ta sẽ càng đến đích sớm hơn.' }
      },
      {
        context: 'So sánh bội số trong kinh tế và thống kê',
        explanation: 'Gấp đôi dùng twice as... as; gấp 3 trở lên dùng three times as... as.',
        example: { english: 'The revenue of company A is three times as high as that of company B.', vietnamese: 'Doanh thu của công ty A cao gấp ba lần so với công ty B.' }
      }
    ],
    examples: [
      { english: 'Mount Everest is the highest mountain in the world.', vietnamese: 'Đỉnh Everest là ngọn núi cao nhất thế giới.', note: 'So sánh nhất tính từ ngắn.' },
      { english: 'This luxury sedan is twice as expensive as my hatchback.', vietnamese: 'Chiếc xe sang trọng này đắt gấp đôi chiếc xe nhỏ của tôi.', note: 'So sánh bội số với twice as expensive as.' },
      { english: 'The more sophisticated the technology becomes, the more vulnerable it can be.', vietnamese: 'Công nghệ càng trở nên tinh vi thì nó càng có thể dễ bị tổn thương hơn.', note: 'So sánh kép.' }
    ],
    importantNotes: [
      'Không dùng hình thức so sánh kép thừa (Double Comparative): Sai: more better, more faster, most highest; Đúng: better, faster, highest.',
      'Tính từ 2 âm tiết tận cùng bằng -y (happy, friendly, early, noisy) được xem như TÍNH TỪ NGẮN: happier, the happiest; friendlier, the friendliest.',
      'Farther dùng cho khoảng cách vật lý đo đạc được (farther down the road); Further dùng cho mức độ trừu tượng, thông tin bổ sung (further discussion, further notice).',
      'Đại từ tân ngữ vs Đại từ chủ ngữ sau Than: Trang trọng dùng He is taller than I am; Thân mật dùng He is taller than me.'
    ],
    comparison: {
      title: 'Phân biệt Farther vs Further',
      points: [
        { concept: 'Farther (Xa hơn)', difference: 'Chỉ khoảng cách địa lý thực tế: The gas station is two miles farther.' },
        { concept: 'Further (Thêm nữa / Sâu hơn)', difference: 'Chỉ mức độ trừu tượng, bổ sung thêm: For further information, please visit our website.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp mua sắm: So sánh hai dòng điện thoại thông minh',
      dialogueOrSentences: [
        { speaker: 'Khách hàng', text: 'Which of these two smartphones has a better battery life?', translation: 'Chiếc điện thoại nào trong hai chiếc này có thời lượng pin tốt hơn?' },
        { speaker: 'Nhân viên', text: 'Model X has a much larger battery, but Model Y is slightly lighter and more compact.', translation: 'Mẫu X có pin lớn hơn nhiều, nhưng mẫu Y nhẹ hơn một chút và nhỏ gọn hơn.' },
        { speaker: 'Khách hàng', text: 'The cheaper one seems perfectly fine for my daily needs.', translation: 'Chiếc rẻ hơn có vẻ hoàn toàn phù hợp với nhu cầu hàng ngày của tôi.' }
      ]
    },
    summaryPoints: [
      'So sánh bằng: as + Adj/Adv + as; phủ định: not as/so + Adj/Adv + as.',
      'So sánh hơn: ngắn thêm -er than, dài thêm more than. So sánh nhất: the -est, the most.',
      'Tính từ tận cùng -y đổi y thành -ier / -iest (happier, happiest).',
      'So sánh kép: The + comparative, the + comparative (càng... càng...).',
      'Bổ ngữ tăng cường: much, far, a lot, slightly + comparative.',
      'Bất quy tắc: good -> better -> best; bad -> worse -> worst.'
    ],
    exercises: [
      {
        id: 'comp-mc-1',
        type: 'multiple-choice',
        prompt: 'The newly upgraded subway line is ___ faster than taking the commuter bus.',
        choices: ['much', 'more', 'very', 'too'],
        correctAnswers: ['much'],
        explanation: 'Trước dạng so sánh hơn (faster), dùng much để tăng cường mức độ (nhanh hơn nhiều). Không dùng more faster hay very faster.',
        translation: 'Tuyến tàu điện ngầm mới được nâng cấp nhanh hơn nhiều so với việc đi xe buýt.',
        level: 'Cơ bản'
      },
      {
        id: 'comp-mc-2',
        type: 'multiple-choice',
        prompt: 'The ___ you prepare for the interview, the ___ confident you will feel.',
        choices: [
          'more / more',
          'most / most',
          'better / best',
          'more / most'
        ],
        correctAnswers: ['more / more'],
        explanation: 'Cấu trúc so sánh kép The + comparative, the + comparative: The more... the more...',
        translation: 'Bạn chuẩn bị cho buổi phỏng vấn càng kỹ thì bạn sẽ càng cảm thấy tự tin hơn.',
        level: 'Trung bình'
      },
      {
        id: 'comp-mc-3',
        type: 'multiple-choice',
        prompt: 'If you require any ___ information regarding the scholarship, please email the admission office.',
        choices: ['further', 'farther', 'farthest', 'furthers'],
        correctAnswers: ['further'],
        explanation: 'Further information là cụm cố định mang nghĩa thông tin thêm/thông tin bổ sung.',
        translation: 'Nếu bạn cần thêm bất kỳ thông tin nào về học bổng, vui lòng gửi email cho phòng tuyển sinh.',
        level: 'Cơ bản'
      },
      {
        id: 'comp-mc-4',
        type: 'multiple-choice',
        prompt: 'This commercial building is ___ as high as the municipal television tower.',
        choices: ['twice', 'two times', 'twice more', 'two times more'],
        correctAnswers: ['twice'],
        explanation: 'Gấp hai lần trong so sánh bằng dùng twice: twice as high as.',
        translation: 'Tòa nhà thương mại này cao gấp đôi tháp truyền hình thành phố.',
        level: 'Trung bình'
      },
      {
        id: 'comp-mc-5',
        type: 'multiple-choice',
        prompt: 'Which of the following is the grammatically correct superlative form?',
        choices: [
          'the most knowledgeable',
          'the knowledgiest',
          'the more knowledgeable',
          'most knowledgeable'
        ],
        correctAnswers: ['the most knowledgeable'],
        explanation: 'Knowledgeable là tính từ dài 3 âm tiết, dạng so sánh nhất là the most knowledgeable.',
        translation: 'Dạng so sánh nhất đúng ngữ pháp là: -> the most knowledgeable.',
        level: 'Cơ bản'
      },
      {
        id: 'comp-fb-1',
        type: 'fill-blank',
        prompt: 'This problem is much ___ than we initially anticipated. (complicated)',
        hint: 'So sánh hơn của tính từ dài.',
        correctAnswers: ['more complicated'],
        explanation: 'Complicated là tính từ dài, so sánh hơn là more complicated.',
        translation: 'Vấn đề này phức tạp hơn nhiều so với những gì chúng tôi dự đoán ban đầu.',
        level: 'Cơ bản'
      },
      {
        id: 'comp-fb-2',
        type: 'fill-blank',
        prompt: 'His health condition became ___ yesterday after the surgery. (bad)',
        hint: 'Dạng so sánh hơn bất quy tắc của bad.',
        correctAnswers: ['worse'],
        explanation: 'Dạng so sánh hơn bất quy tắc của bad là worse.',
        translation: 'Tình trạng sức khỏe của anh ấy đã trở nên tồi tệ hơn ngày hôm qua sau ca phẫu thuật.',
        level: 'Cơ bản'
      },
      {
        id: 'comp-fb-3',
        type: 'fill-blank',
        prompt: 'The louder the music played, the ___ it became to carry on a conversation. (difficult)',
        hint: 'So sánh kép The more difficult.',
        correctAnswers: ['more difficult'],
        explanation: 'Cấu trúc so sánh kép: the louder..., the more difficult it became...',
        translation: 'Tiếng nhạc bật càng to thì việc trò chuyện càng trở nên khó khăn hơn.',
        level: 'Trung bình'
      },
      {
        id: 'comp-fb-4',
        type: 'fill-blank',
        prompt: 'She is not ___ tall as her elder sister. (as/so)',
        hint: 'Cấu trúc so sánh bằng ở thể phủ định.',
        correctAnswers: ['as', 'so'],
        explanation: 'Phủ định của so sánh bằng: not as/so tall as.',
        translation: 'Cô ấy không cao bằng chị gái của mình.',
        level: 'Cơ bản'
      },
      {
        id: 'comp-fb-5',
        type: 'fill-blank',
        prompt: 'That was by far the ___ memorable experience of my entire life. (good)',
        hint: 'Dạng so sánh nhất bất quy tắc của good đi với the.',
        correctAnswers: ['best', 'most'],
        explanation: 'By far the best / most memorable experience.',
        translation: 'Đó là trải nghiệm đáng nhớ nhất trong toàn bộ cuộc đời tôi.',
        level: 'Trung bình'
      },
      {
        id: 'comp-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "This laptop is much more cheaper than the one I saw yesterday."',
        hint: 'Cheap là tính từ ngắn nên dùng cheaper, không dùng more cheaper.',
        correctAnswers: [
          'This laptop is much cheaper than the one I saw yesterday.'
        ],
        explanation: 'Cheap là tính từ ngắn (1 âm tiết), so sánh hơn là cheaper. Không dùng more cheaper (lỗi so sánh kép thừa).',
        translation: 'Chiếc laptop này rẻ hơn nhiều so với chiếc tôi đã xem hôm qua.',
        level: 'Cơ bản'
      },
      {
        id: 'comp-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The more he practiced speaking, he became more fluent."',
        hint: 'Cả hai vế của so sánh kép đều phải có The + comparative: the more fluent he became.',
        correctAnswers: [
          'The more he practiced speaking, the more fluent he became.'
        ],
        explanation: 'Cấu trúc so sánh kép bắt buộc cả 2 vế phải có The: The more he practiced, the more fluent he became.',
        translation: 'Anh ấy càng luyện nói nhiều thì anh ấy càng trở nên lưu loát hơn.',
        level: 'Trung bình'
      },
      {
        id: 'comp-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "For farther inquiries about the job vacancy, please contact human resources."',
        hint: 'Thông tin thêm trừu tượng dùng further.',
        correctAnswers: [
          'For further inquiries about the job vacancy, please contact human resources.'
        ],
        explanation: 'Inquiries (thắc mắc) là khái niệm trừu tượng nên dùng further inquiries (không dùng farther).',
        translation: 'Để biết thêm thắc mắc về vị trí tuyển dụng, vui lòng liên hệ phòng nhân sự.',
        level: 'Cơ bản'
      },
      {
        id: 'comp-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Of the two candidates interviewed, Sarah is the most qualified."',
        hint: 'Khi chỉ so sánh giữa hai đối tượng, dùng the more qualified chứ không dùng most.',
        correctAnswers: [
          'Of the two candidates interviewed, Sarah is the more qualified.',
          'Between the two candidates interviewed, Sarah is the more qualified.'
        ],
        explanation: 'Khi so sánh giữa ĐÚNG 2 ĐỐI TƯỢNG (Of the two candidates), dùng the + comparative (the more qualified).',
        translation: 'Trong hai ứng viên được phỏng vấn, Sarah là người có trình độ hơn.',
        level: 'Nâng cao'
      },
      {
        id: 'comp-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Her essay is three times longer as mine."',
        hint: 'Cấu trúc so sánh bội số: three times as long as mine.',
        correctAnswers: [
          'Her essay is three times as long as mine.'
        ],
        explanation: 'So sánh bội số dùng: multiple + as + Adj + as (three times as long as mine).',
        translation: 'Bài luận của cô ấy dài gấp ba lần bài luận của tôi.',
        level: 'Trung bình'
      },
      {
        id: 'comp-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng cấu trúc so sánh bằng phủ định (not as...as): "Travelling by air is faster than travelling by train."',
        hint: 'Travelling by train is not as fast as travelling by air.',
        correctAnswers: [
          'Travelling by train is not as fast as travelling by air.',
          'Travelling by train is not so fast as travelling by air.'
        ],
        explanation: 'Đi tàu không nhanh bằng đi máy bay tương đương đi máy bay nhanh hơn đi tàu.',
        translation: 'Đi lại bằng tàu hỏa không nhanh bằng đi lại bằng đường hàng không.',
        level: 'Cơ bản'
      },
      {
        id: 'comp-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau bằng cách dùng cấu trúc SO SÁNH KÉP (The more... the more...): "If you read more books, you will gain more knowledge."',
        hint: 'The more books you read, the more knowledge you will gain.',
        correctAnswers: [
          'The more books you read, the more knowledge you will gain.'
        ],
        explanation: 'The more books you read, the more knowledge you will gain.',
        translation: 'Bạn càng đọc nhiều sách thì bạn sẽ càng thu nạp được nhiều kiến thức.',
        level: 'Trung bình'
      },
      {
        id: 'comp-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng so sánh nhất: "No other river in the world is as long as the Nile."',
        hint: 'The Nile is the longest river in the world.',
        correctAnswers: [
          'The Nile is the longest river in the world.'
        ],
        explanation: 'Sông Nin là con sông dài nhất trên thế giới.',
        translation: 'Sông Nin là con sông dài nhất thế giới.',
        level: 'Cơ bản'
      },
      {
        id: 'comp-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng từ tăng cường "far" để nhấn mạnh sự chênh lệch: "This new engine is better than the old model."',
        hint: 'This new engine is far better than the old model.',
        correctAnswers: [
          'This new engine is far better than the old model.',
          'This new engine is much better than the old model.'
        ],
        explanation: 'Far better mang nghĩa tốt hơn rất nhiều.',
        translation: 'Động cơ mới này tốt hơn rất nhiều so với mẫu cũ.',
        level: 'Cơ bản'
      },
      {
        id: 'comp-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng so sánh bội số "twice as...as": "My brother earns $2000, while I earn $1000."',
        hint: 'My brother earns twice as much money as I do.',
        correctAnswers: [
          'My brother earns twice as much money as I do.',
          'My brother earns twice as much as I do.',
          'My brother earns twice as much as me.'
        ],
        explanation: 'So sánh bội số: twice as much as.',
        translation: 'Anh trai tôi kiếm được số tiền nhiều gấp đôi tôi.',
        level: 'Trung bình'
      }
    ]
  }
]
