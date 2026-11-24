import type { GrammarLessonDetail } from '../types'

export const cat1Part3Lessons: GrammarLessonDetail[] = [
  // 9. PREPOSITIONS
  {
    id: 'prepositions',
    title: 'Prepositions',
    vietnameseTitle: 'Giới từ',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A1–B1',
    summary: 'Từ chỉ mối quan hệ về thời gian, không gian, phương hướng hoặc phương thức giữa các từ trong câu; gồm in, on, at và các cụm giới từ cố định.',
    overview: 'Giới từ (Prepositions) là từ thường đứng trước danh từ, đại từ hoặc danh động từ (V-ing) để thiết lập mối quan hệ về thời gian (khi nào), địa điểm (ở đâu), hướng di chuyển (đi đâu) hoặc nguyên nhân/mục đích giữa đối tượng đó với các thành phần khác trong câu.',
    foundation: 'Cụm giới từ (Prepositional Phrase) có cấu trúc: [Giới từ] + [Cụm danh từ / Đại từ / V-ing]. Sau giới từ, đại từ bắt buộc phải ở dạng tân ngữ (with him, for me) và động từ bắt buộc phải thêm đuôi -ing (thank you for helping me).',
    classification: [
      {
        title: 'Giới từ chỉ thời gian (Prepositions of Time)',
        description: 'At (giờ giấc cụ thể, dịp lễ ngắn: at 5 p.m., at Christmas); On (ngày trong tuần, ngày tháng cụ thể: on Monday, on July 4th); In (tháng, năm, mùa, thế kỷ: in May, in 2026, in summer).'
      },
      {
        title: 'Giới từ chỉ nơi chốn (Prepositions of Place)',
        description: 'At (địa điểm cụ thể, điểm dừng: at the bus stop, at home); On (trên bề mặt, số tầng: on the table, on the second floor); In (bên trong không gian 3D, thành phố, quốc gia: in the box, in Hanoi, in Vietnam).'
      },
      {
        title: 'Giới từ chỉ phương hướng & chuyển động (Direction & Movement)',
        description: 'to, into, out of, onto, towards, across, through, along, past.'
      },
      {
        title: 'Giới từ đi kèm Tính từ / Động từ cố định (Dependent Prepositions)',
        description: 'good at, interested in, proud of, depend on, apologize for, succeed in, look forward to.'
      }
    ],
    formulas: [
      {
        title: 'Tam giác giới từ Thời gian & Nơi chốn: IN - ON - AT',
        formula: 'IN (Rộng nhất / Khái quát nhất):\nIn 2026, in summer, in July\nIn Vietnam, in the room\n\nON (Cụ thể hơn / Bề mặt & Ngày):\nOn Monday, on July 10th\nOn the wall, on the table\n\nAT (Chính xác nhất / Điểm cụ thể):\nAt 8:30 a.m., at midnight\nAt the corner, at the door',
        note: 'Quy tắc tam giác ngược từ rộng (In) -> vừa (On) -> hẹp/chính xác (At).'
      },
      {
        title: 'Quy tắc sau Giới từ',
        formula: 'Preposition + Noun / Pronoun (dạng tân ngữ) / Gerund (V-ing)',
        note: 'Interested in learning (V-ing). Talk to him (O).'
      }
    ],
    usage: [
      {
        context: 'Chỉ mốc thời gian biểu diễn theo lịch và đồng hồ',
        explanation: 'Áp dụng công thức In - On - At.',
        example: { english: 'The conference begins at 9:00 a.m. on Friday in December.', vietnamese: 'Hội nghị bắt đầu lúc 9:00 sáng vào thứ Sáu trong tháng Mười Hai.' }
      },
      {
        context: 'Chỉ phương tiện giao thông (By vs In vs On)',
        explanation: 'By + phương tiện nói chung (by car, by bus, by plane). On + phương tiện công cộng/xe đạp (on the bus, on the train, on a bicycle). In + phương tiện nhỏ/xe hơi riêng (in a car, in a taxi).',
        example: { english: 'She traveled by train, while her brother went in a private car.', vietnamese: 'Cô ấy đã di chuyển bằng tàu hỏa, trong khi anh trai cô ấy đi trong một chiếc ô tô riêng.' }
      },
      {
        context: 'Diễn tả sự chuyển động xuyên qua hoặc dọc theo',
        explanation: 'Through dùng cho không gian 3 chiều (hầm, rừng); Along dùng cho đường dài (dọc bờ biển, bờ sông).',
        example: { english: 'They walked along the sandy beach and through the dense pine forest.', vietnamese: 'Họ đi dạo dọc theo bãi biển cát trắng và xuyên qua khu rừng thông rậm rạp.' }
      }
    ],
    examples: [
      { english: 'She is exceptionally good at solving mathematical problems.', vietnamese: 'Cô ấy đặc biệt giỏi trong việc giải các bài toán.', note: 'Good at + V-ing.' },
      { english: 'We are looking forward to hearing from you soon.', vietnamese: 'Chúng tôi rất mong sớm nhận được tin từ bạn.', note: 'Look forward to + V-ing (to là giới từ).' },
      { english: 'He was born on October 10th, 1995.', vietnamese: 'Anh ấy sinh vào ngày 10 tháng 10 năm 1995.', note: 'Có ngày cụ thể nên dùng mạo từ on.' }
    ],
    importantNotes: [
      'Không dùng in/on/at trước các từ: this, that, next, last, every, tomorrow, yesterday (Ví dụ: see you next Monday, KHÔNG dùng see you on next Monday).',
      'Look forward to + V-ing: Từ \'to\' ở đây là giới từ chứ không phải to-infinitive.',
      'Phân biệt: in the end (cuối cùng/kết cục) vs at the end of (ở phần cuối của cái gì đó).',
      'Phân biệt: in time (vừa kịp lúc) vs on time (đúng giờ theo lịch trình).'
    ],
    comparison: {
      title: 'Phân biệt In time vs On time',
      points: [
        { concept: 'On time (Đúng giờ)', difference: 'Đúng theo lịch trình đã định sẵn (xe buýt, giờ họp): The train left on time.' },
        { concept: 'In time (Kịp lúc)', difference: 'Kịp trước khi quá muộn hoặc kịp để làm điều gì đó: We arrived in time to catch the flight.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp hẹn gặp đối tác: Xác nhận thời gian và địa điểm',
      dialogueOrSentences: [
        { speaker: 'Hương', text: 'Shall we meet at 2 p.m. on Thursday at the central coffee shop?', translation: 'Chúng ta gặp nhau lúc 2 giờ chiều thứ Năm tại quán cà phê trung tâm nhé?' },
        { speaker: 'Mark', text: 'Thursday works for me! Are you arriving by taxi or on foot?', translation: 'Thứ Năm tiện cho tôi đấy! Bạn sẽ đến bằng taxi hay đi bộ?' },
        { speaker: 'Hương', text: 'I will go by bus. I look forward to seeing you there.', translation: 'Tôi sẽ đi bằng xe buýt. Rất mong được gặp bạn ở đó.' }
      ]
    },
    summaryPoints: [
      'In: năm, tháng, mùa, buổi trong ngày; không gian rộng, thành phố, đất nước.',
      'On: thứ trong tuần, ngày cụ thể, ngày lễ có từ \'day\'; trên bề mặt, số tầng.',
      'At: giờ giấc chính xác, thời điểm cụ thể (midnight, noon); địa chỉ số nhà, địa điểm cụ thể.',
      'Sau giới từ luôn là danh từ, đại từ tân ngữ hoặc V-ing.',
      'Không dùng in/on/at trước next, last, this, every.'
    ],
    exercises: [
      {
        id: 'prep-mc-1',
        type: 'multiple-choice',
        prompt: 'The keynote presentation is scheduled to start promptly ___ 8:30 a.m. ___ Monday.',
        choices: ['at / on', 'in / on', 'on / at', 'at / in'],
        correctAnswers: ['at / on'],
        explanation: 'Giờ giấc cụ thể dùng at (at 8:30 a.m.); ngày trong tuần dùng on (on Monday).',
        translation: 'Bài thuyết trình quan trọng dự kiến bắt đầu đúng 8:30 sáng vào thứ Hai.',
        level: 'Cơ bản'
      },
      {
        id: 'prep-mc-2',
        type: 'multiple-choice',
        prompt: 'She has always been deeply interested ___ ancient archaeological discoveries.',
        choices: ['in', 'at', 'on', 'about'],
        correctAnswers: ['in'],
        explanation: 'Cụm tính từ đi với giới từ cố định: interested in (quan tâm, thích thú cái gì).',
        translation: 'Cô ấy luôn rất quan tâm đến các phát hiện khảo cổ học cổ đại.',
        level: 'Cơ bản'
      },
      {
        id: 'prep-mc-3',
        type: 'multiple-choice',
        prompt: 'The express train arrived just ___ time for the passengers to make their connecting flight.',
        choices: ['in', 'on', 'at', 'by'],
        correctAnswers: ['in'],
        explanation: 'In time mang nghĩa vừa kịp lúc để làm gì tiếp theo (kịp chuyến bay nối chuyến).',
        translation: 'Chuyến tàu tốc hành đã đến vừa kịp lúc để các hành khách kịp chuyến bay nối chuyến của mình.',
        level: 'Trung bình'
      },
      {
        id: 'prep-mc-4',
        type: 'multiple-choice',
        prompt: 'We are all looking forward to ___ you at the annual alumni reunion next week.',
        choices: ['meeting', 'meet', 'met', 'have met'],
        correctAnswers: ['meeting'],
        explanation: 'Cụm look forward to đi với danh động từ V-ing (to là giới từ).',
        translation: 'Tất cả chúng tôi đều rất mong chờ được gặp bạn tại buổi họp mặt cựu sinh viên thường niên vào tuần tới.',
        level: 'Trung bình'
      },
      {
        id: 'prep-mc-5',
        type: 'multiple-choice',
        prompt: 'The hikers walked ___ the narrow tunnel before reaching the open valley.',
        choices: ['through', 'across', 'along', 'over'],
        correctAnswers: ['through'],
        explanation: 'Through dùng khi di chuyển xuyên qua một không gian bao bọc 3D như đường hầm.',
        translation: 'Những người leo núi đã đi xuyên qua đường hầm hẹp trước khi đến được thung lũng thoáng đãng.',
        level: 'Nâng cao'
      },
      {
        id: 'prep-fb-1',
        type: 'fill-blank',
        prompt: 'Vietnam gained its independence ___ 1945. (in/on/at)',
        hint: 'Năm dùng giới từ in.',
        correctAnswers: ['in'],
        explanation: 'Năm dùng giới từ in (in 1945).',
        translation: 'Việt Nam giành được độc lập vào năm 1945.',
        level: 'Cơ bản'
      },
      {
        id: 'prep-fb-2',
        type: 'fill-blank',
        prompt: 'He was waiting patiently ___ the bus stop when it started pouring with rain. (in/on/at)',
        hint: 'Điểm dừng cụ thể dùng at.',
        correctAnswers: ['at'],
        explanation: 'Trạm dừng xe buýt là địa điểm cụ thể dùng at (at the bus stop).',
        translation: 'Anh ấy đang kiên nhẫn đợi ở trạm xe buýt thì trời bắt đầu đổ mưa như trút nước.',
        level: 'Cơ bản'
      },
      {
        id: 'prep-fb-3',
        type: 'fill-blank',
        prompt: 'The students are extremely proud ___ their academic achievements this semester. (of/about/in)',
        hint: 'Proud đi với giới từ of.',
        correctAnswers: ['of'],
        explanation: 'Cụm tính từ cố định: proud of (tự hào về điều gì).',
        translation: 'Các sinh viên vô cùng tự hào về những thành tích học tập của mình trong học kỳ này.',
        level: 'Cơ bản'
      },
      {
        id: 'prep-fb-4',
        type: 'fill-blank',
        prompt: 'Our family usually gathers together for dinner ___ Christmas Eve. (in/on/at)',
        hint: 'Ngày lễ có từ Eve hoặc Day dùng on.',
        correctAnswers: ['on'],
        explanation: 'Các ngày cụ thể như Christmas Eve / Christmas Day đi với giới từ on.',
        translation: 'Gia đình chúng tôi thường quây quần bên nhau ăn tối vào đêm Giáng sinh.',
        level: 'Trung bình'
      },
      {
        id: 'prep-fb-5',
        type: 'fill-blank',
        prompt: 'Thank you so much ___ helping me carry these heavy parcels. (for/to/with)',
        hint: 'Cảm ơn vì điều gì dùng thank you for + V-ing.',
        correctAnswers: ['for'],
        explanation: 'Thank someone for doing something.',
        translation: 'Cảm ơn bạn rất nhiều vì đã giúp tôi mang những kiện hàng nặng này.',
        level: 'Cơ bản'
      },
      {
        id: 'prep-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "I will see you on next Monday at the marketing office."',
        hint: 'Không dùng giới từ on trước từ next.',
        correctAnswers: [
          'I will see you next Monday at the marketing office.'
        ],
        explanation: 'Không dùng giới từ on/in/at trước next Monday: see you next Monday.',
        translation: 'Tôi sẽ gặp bạn vào thứ Hai tới tại văn phòng tiếp thị.',
        level: 'Cơ bản'
      },
      {
        id: 'prep-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She was traveling on a yellow taxi when the accident occurred."',
        hint: 'Xe taxi đi với giới từ in.',
        correctAnswers: [
          'She was traveling in a yellow taxi when the accident occurred.'
        ],
        explanation: 'Đi bằng xe taxi riêng dùng giới từ in (in a taxi), không dùng on.',
        translation: 'Cô ấy đang di chuyển trong một chiếc taxi màu vàng thì tai nạn xảy ra.',
        level: 'Trung bình'
      },
      {
        id: 'prep-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The train departed on time, so we arrived in London in time."',
        hint: 'Nghĩa đúng theo lịch trình là on time.',
        correctAnswers: [
          'The train departed on time, so we arrived in London on time.'
        ],
        explanation: 'Đến đúng giờ theo lịch trình là on time.',
        translation: 'Chuyến tàu đã khởi hành đúng giờ, nên chúng tôi đã đến Luân Đôn đúng giờ.',
        level: 'Trung bình'
      },
      {
        id: 'prep-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "He apologized to his colleagues about being late for the meeting."',
        hint: 'Xin lỗi vì điều gì dùng apologize for.',
        correctAnswers: [
          'He apologized to his colleagues for being late for the meeting.'
        ],
        explanation: 'Cấu trúc: apologize to someone FOR doing something (apologized for being late).',
        translation: 'Anh ấy đã xin lỗi các đồng nghiệp vì đến muộn cuộc họp.',
        level: 'Trung bình'
      },
      {
        id: 'prep-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "We walked across the river along the newly built wooden bridge."',
        hint: 'Đi qua cầu dùng across the bridge.',
        correctAnswers: [
          'We walked across the river on the newly built wooden bridge.',
          'We walked across the newly built wooden bridge over the river.'
        ],
        explanation: 'Băng qua cây cầu dùng across the bridge hoặc on the bridge.',
        translation: 'Chúng tôi đã đi bộ qua cây cầu gỗ mới xây bắc qua sông.',
        level: 'Nâng cao'
      },
      {
        id: 'prep-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sử dụng cụm "good at": "She plays the piano with great skill and elegance."',
        hint: 'She is very good at playing the piano.',
        correctAnswers: [
          'She is very good at playing the piano.',
          'She is good at playing the piano.'
        ],
        explanation: 'Good at + V-ing biểu thị năng khiếu giỏi làm việc gì.',
        translation: 'Cô ấy rất giỏi chơi đàn dương cầm.',
        level: 'Cơ bản'
      },
      {
        id: 'prep-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng cụm "depend on": "Our final decision will be based on the weather forecast."',
        hint: 'Our final decision will depend on the weather forecast.',
        correctAnswers: [
          'Our final decision will depend on the weather forecast.'
        ],
        explanation: 'Depend on mang nghĩa phụ thuộc vào / dựa vào.',
        translation: 'Quyết định cuối cùng của chúng tôi sẽ phụ thuộc vào dự báo thời tiết.',
        level: 'Cơ bản'
      },
      {
        id: 'prep-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sử dụng cụm "in time": "We reached the boarding gate before it closed."',
        hint: 'We reached the boarding gate in time before it closed.',
        correctAnswers: [
          'We reached the boarding gate in time.',
          'We reached the boarding gate in time before it closed.'
        ],
        explanation: 'In time mang nghĩa kịp giờ trước khi cửa đóng.',
        translation: 'Chúng tôi đã đến cổng lên máy bay vừa kịp lúc.',
        level: 'Trung bình'
      },
      {
        id: 'prep-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sử dụng cấu trúc "look forward to + V-ing": "I eagerly anticipate meeting you next week."',
        hint: 'I look forward to meeting you next week.',
        correctAnswers: [
          'I look forward to meeting you next week.'
        ],
        explanation: 'Look forward to meeting you biểu thị sự mong chờ háo hức.',
        translation: 'Tôi rất mong chờ được gặp bạn vào tuần tới.',
        level: 'Cơ bản'
      },
      {
        id: 'prep-sc-5',
        type: 'sentence-construction',
        prompt: 'Đặt một câu sử dụng giới từ "at" cho giờ và "on" cho ngày trong tuần để hẹn lịch phỏng vấn.',
        hint: 'Mẫu: The interview is at 10 a.m. on Friday.',
        correctAnswers: [
          'The interview is at 10 a.m. on Friday.',
          'Our interview is at 9 a.m. on Monday.',
          'The meeting is at 2 p.m. on Wednesday.'
        ],
        explanation: 'Quy tắc: at + giờ, on + thứ trong tuần.',
        translation: 'Buổi phỏng vấn diễn ra lúc 10 giờ sáng thứ Sáu.',
        level: 'Cơ bản'
      }
    ]
  },

  // 10. CONJUNCTIONS
  {
    id: 'conjunctions',
    title: 'Conjunctions',
    vietnameseTitle: 'Liên từ',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A2–B1',
    summary: 'Từ dùng để nối từ, cụm từ hoặc mệnh đề; gồm liên từ kết hợp (FANBOYS), liên từ phụ thuộc và liên từ tương quan.',
    overview: 'Liên từ (Conjunctions) là chiếc cầu nối ngôn ngữ trong tiếng Anh. Liên từ kết nối các từ, cụm từ hoặc các mệnh đề với nhau để tạo nên những câu văn mạch lạc, chặt chẽ về mặt logic và ý nghĩa.',
    foundation: 'Liên từ chia thành 3 nhóm lớn: Liên từ kết hợp nối các thành phần ngữ pháp ngang hàng; Liên từ phụ thuộc nối mệnh đề phụ vào mệnh đề chính; Liên từ tương quan luôn đi thành từng cặp cố định.',
    classification: [
      {
        title: 'Liên từ kết hợp (Coordinating Conjunctions: FANBOYS)',
        description: 'For (vì), And (và), Nor (cũng không), But (nhưng), Or (hoặc), Yet (tuy nhiên), So (cho nên). Nối hai từ loại, hai cụm từ hoặc hai mệnh đề độc lập.'
      },
      {
        title: 'Liên từ phụ thuộc (Subordinating Conjunctions)',
        description: 'Dẫn dắt mệnh đề phụ chỉ nguyên nhân (because, since, as), nhượng bộ (although, even though, though), thời gian (when, while, before, after, until, as soon as), điều kiện (if, unless).'
      },
      {
        title: 'Liên từ tương quan (Correlative Conjunctions)',
        description: 'Luôn đi theo cặp: both...and (cả...và), either...or (hoặc...hoặc), neither...nor (không...cũng không), not only...but also (không những...mà còn).'
      }
    ],
    formulas: [
      {
        title: 'Quy tắc dấu phẩy với FANBOYS',
        formula: 'Mệnh đề độc lập 1, + [FANBOYS] + Mệnh đề độc lập 2',
        note: 'Khi nối hai mệnh đề hoàn chỉnh, bắt buộc phải có dấu phẩy trước liên từ kết hợp: I was tired, but I finished the report.'
      },
      {
        title: 'Quy tắc vị trí Mệnh đề phụ thuộc',
        formula: '[Liên từ phụ thuộc] + Mệnh đề phụ, + Mệnh đề chính\nMệnh đề chính + [Liên từ phụ thuộc] + Mệnh đề phụ (KHÔNG có dấu phẩy)',
        note: 'Although it rained, we went out. KHÁC We went out although it rained (không phẩy).'
      },
      {
        title: 'Sự hòa hợp chủ ngữ với Liên từ tương quan',
        formula: 'Either A or B + V (chia theo B)\nNeither A nor B + V (chia theo B)\nNot only A but also B + V (chia theo B)\nBoth A and B + V (luôn chia số NHIỀU)',
        note: 'Động từ hòa hợp với chủ ngữ đứng gần nó nhất (B), riêng Both...and luôn số nhiều.'
      }
    ],
    usage: [
      {
        context: 'Thể hiện mối quan hệ đối lập, tương phản (Contrast)',
        explanation: 'Dùng But hoặc Yet để nối hai ý trái ngược nhau.',
        example: { english: 'The technology is complex, yet it is surprisingly user-friendly.', vietnamese: 'Công nghệ này phức tạp, nhưng nó lại thân thiện với người dùng một cách đáng ngạc nhiên.' }
      },
      {
        context: 'Thể hiện nguyên nhân và kết quả (Cause and Effect)',
        explanation: 'Because dẫn mệnh đề nguyên nhân; So dẫn mệnh đề kết quả.',
        example: { english: 'Because the flight was delayed, we missed our connecting train.', vietnamese: 'Bởi vì chuyến bay bị hoãn, chúng tôi đã lỡ chuyến tàu nối chuyến.' }
      },
      {
        context: 'Nhấn mạnh cả hai yếu tố với Not only... but also',
        explanation: 'Nối hai thành phần cùng từ loại để tăng tính thuyết phục.',
        example: { english: 'She is not only intelligent but also extremely diligent.', vietnamese: 'Cô ấy không những thông minh mà còn vô cùng chăm chỉ.' }
      }
    ],
    examples: [
      { english: 'Neither the manager nor the assistants were aware of the change.', vietnamese: 'Cả người quản lý lẫn các trợ lý đều không biết về sự thay đổi đó.', note: 'Động từ were chia theo assistants.' },
      { english: 'Although he worked overtime, he could not finish the task.', vietnamese: 'Mặc dù anh ấy đã làm thêm giờ, anh ấy vẫn không thể hoàn thành nhiệm vụ.', note: 'Mệnh đề nhượng bộ đứng trước có dấu phẩy.' },
      { english: 'You must submit the form today, or your registration will be cancelled.', vietnamese: 'Bạn phải nộp đơn hôm nay, nếu không việc đăng ký của bạn sẽ bị hủy.', note: 'Or mang nghĩa nếu không thì.' }
    ],
    importantNotes: [
      'Không dùng Both \'Although\' và \'But\' trong cùng một câu tiếng Anh (Sai: Although it rained, but we went out; Đúng: Although it rained, we went out).',
      'Tương tự, không dùng cả \'Because\' và \'So\' trong một câu (Sai: Because I was ill, so I stayed home; Đúng: Because I was ill, I stayed home).',
      'Phân biệt Liên từ phụ thuộc (Because + Clause) với Giới từ (Because of + Noun/V-ing).',
      'Phân biệt Liên từ phụ thuộc (Although + Clause) với Giới từ (Despite / In spite of + Noun/V-ing).'
    ],
    comparison: {
      title: 'Phân biệt Conjunction vs Preposition (Although vs Despite / Because vs Because of)',
      points: [
        { concept: 'Although / Because (Liên từ)', difference: 'Bắt buộc đi theo sau là một MỆNH ĐỀ hoàn chỉnh (S + V): Although it was raining...' },
        { concept: 'Despite / Because of (Giới từ)', difference: 'Bắt buộc đi theo sau là một CỤM DANH TỪ hoặc DANH ĐỘNG TỪ: Despite the heavy rain...' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp giải quyết vấn đề: Thương lượng lịch làm việc',
      dialogueOrSentences: [
        { speaker: 'Minh', text: 'We can either finish the presentation tonight or wake up early tomorrow.', translation: 'Chúng ta có thể hoặc là hoàn thành bài thuyết trình tối nay, hoặc là dậy sớm vào sáng mai.' },
        { speaker: 'An', text: 'I am exhausted, so I prefer working on it tomorrow morning.', translation: 'Mình kiệt sức rồi, nên mình muốn làm nó vào sáng mai hơn.' },
        { speaker: 'Minh', text: 'Fair enough. As soon as you arrive, we will start right away.', translation: 'Hợp lý đấy. Ngay khi bạn đến, chúng ta sẽ bắt đầu ngay nhé.' }
      ]
    },
    summaryPoints: [
      'Liên từ kết nối từ, cụm từ hoặc mệnh đề.',
      'Nhớ nhóm FANBOYS: For, And, Nor, But, Or, Yet, So (có dấu phẩy khi nối 2 mệnh đề độc lập).',
      'Liên từ tương quan: either...or, neither...nor, not only...but also (chia theo chủ ngữ thứ hai); both...and (chia số nhiều).',
      'Tuyệt đối không dùng song song Although...but hoặc Because...so.',
      'Phân biệt rõ liên từ (+ S + V) và giới từ (+ Cụm danh từ / V-ing).'
    ],
    exercises: [
      {
        id: 'conj-mc-1',
        type: 'multiple-choice',
        prompt: '___ the traffic was congested, they arrived at the airport in time for check-in.',
        choices: ['Although', 'Despite', 'Because of', 'However'],
        correctAnswers: ['Although'],
        explanation: 'Theo sau là một mệnh đề hoàn chỉnh \'the traffic was congested\', thể hiện sự tương phản nên dùng liên từ Although.',
        translation: 'Mặc dù giao thông bị tắc nghẽn, họ vẫn đến sân bay kịp giờ làm thủ tục.',
        level: 'Cơ bản'
      },
      {
        id: 'conj-mc-2',
        type: 'multiple-choice',
        prompt: 'Neither the team leader nor the engineers ___ able to identify the software glitch.',
        choices: ['were', 'was', 'is', 'has been'],
        correctAnswers: ['were'],
        explanation: 'Với cấu trúc Neither...nor, động từ hòa hợp theo chủ ngữ thứ hai (the engineers - số nhiều), câu ở quá khứ nên chia were.',
        translation: 'Cả trưởng nhóm lẫn các kỹ sư đều không thể xác định được lỗi phần mềm.',
        level: 'Trung bình'
      },
      {
        id: 'conj-mc-3',
        type: 'multiple-choice',
        prompt: 'You should leave early, ___ you will get stuck in the evening rush-hour gridlock.',
        choices: ['or', 'and', 'so', 'but'],
        correctAnswers: ['or'],
        explanation: 'Or dùng để chỉ hậu quả tiêu cực nếu không làm theo mệnh lệnh (nếu không thì).',
        translation: 'Bạn nên rời đi sớm, nếu không thì bạn sẽ bị kẹt trong tình trạng ùn tắc vào giờ cao điểm buổi tối.',
        level: 'Cơ bản'
      },
      {
        id: 'conj-mc-4',
        type: 'multiple-choice',
        prompt: 'He not only completed the marathon ___ broke the national amateur record.',
        choices: ['but also', 'and also', 'as well as', 'but too'],
        correctAnswers: ['but also'],
        explanation: 'Cặp liên từ tương quan cố định: not only... but also (không những... mà còn).',
        translation: 'Anh ấy không những hoàn thành cuộc chạy marathon mà còn phá kỷ lục nghiệp dư quốc gia.',
        level: 'Cơ bản'
      },
      {
        id: 'conj-mc-5',
        type: 'multiple-choice',
        prompt: 'We cancelled the outdoor camping trip ___ the torrential rainstorm.',
        choices: ['because of', 'because', 'although', 'even though'],
        correctAnswers: ['because of'],
        explanation: 'Theo sau là cụm danh từ \'the torrential rainstorm\', do đó dùng giới từ chỉ nguyên nhân because of.',
        translation: 'Chúng tôi đã hủy chuyến cắm trại ngoài trời vì cơn bão mưa như trút nước.',
        level: 'Trung bình'
      },
      {
        id: 'conj-fb-1',
        type: 'fill-blank',
        prompt: '___ Peter and Susan have received job offers from top multinational corporations. (Both/Either)',
        hint: 'Đi kèm với and.',
        correctAnswers: ['Both'],
        explanation: 'Cặp liên từ: Both...and (cả hai).',
        translation: 'Cả Peter và Susan đều đã nhận được lời mời làm việc từ các tập đoàn đa quốc gia hàng đầu.',
        level: 'Cơ bản'
      },
      {
        id: 'conj-fb-2',
        type: 'fill-blank',
        prompt: 'You can ___ take the express train or book a domestic flight. (either/neither)',
        hint: 'Đi kèm với or.',
        correctAnswers: ['either'],
        explanation: 'Cặp liên từ: either...or (hoặc cái này hoặc cái kia).',
        translation: 'Bạn có thể hoặc là đi tàu tốc hành hoặc là đặt một chuyến bay nội địa.',
        level: 'Cơ bản'
      },
      {
        id: 'conj-fb-3',
        type: 'fill-blank',
        prompt: 'The manager was tired, ___ he continued working late into the night. (yet/and/or)',
        hint: 'Mang nghĩa tương phản đối lập.',
        correctAnswers: ['yet', 'but'],
        explanation: 'Yet / But dùng để diễn đạt sự đối lập tương phản giữa mệt mỏi và tiếp tục làm việc.',
        translation: 'Người quản lý rất mệt, nhưng ông ấy vẫn tiếp tục làm việc muộn vào ban đêm.',
        level: 'Trung bình'
      },
      {
        id: 'conj-fb-4',
        type: 'fill-blank',
        prompt: '___ soon as you arrive at the hotel lobby, please call me. (As/So)',
        hint: 'Cụm liên từ chỉ thời gian ngay khi.',
        correctAnswers: ['As'],
        explanation: 'Cụm liên từ As soon as (ngay khi).',
        translation: 'Ngay khi bạn đến sảnh khách sạn, làm ơn hãy gọi điện cho tôi nhé.',
        level: 'Cơ bản'
      },
      {
        id: 'conj-fb-5',
        type: 'fill-blank',
        prompt: 'Neither the director nor his deputy ___ present at the emergency briefing. (was/were)',
        hint: 'Chia theo chủ ngữ gần nhất his deputy (số ít).',
        correctAnswers: ['was'],
        explanation: 'Theo quy tắc SVA với Neither...nor, động từ chia theo chủ ngữ gần nhất his deputy (số ít) -> was.',
        translation: 'Cả giám đốc lẫn phó giám đốc đều không có mặt tại buổi họp giao ban khẩn cấp.',
        level: 'Nâng cao'
      },
      {
        id: 'conj-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Although it was raining heavily, but we still went for a walk."',
        hint: 'Không dùng cả Although và but trong cùng một câu.',
        correctAnswers: [
          'Although it was raining heavily, we still went for a walk.',
          'It was raining heavily, but we still went for a walk.'
        ],
        explanation: 'Trong tiếng Anh, không bao giờ dùng cặp từ Although... but. Chỉ giữ lại một trong hai.',
        translation: 'Mặc dù trời mưa to, chúng tôi vẫn đi dạo.',
        level: 'Cơ bản'
      },
      {
        id: 'conj-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Because he was sick, so he could not attend the workshop."',
        hint: 'Không dùng cả Because và so trong cùng một câu.',
        correctAnswers: [
          'Because he was sick, he could not attend the workshop.',
          'He was sick, so he could not attend the workshop.'
        ],
        explanation: 'Không dùng đồng thời Because... so trong một câu tiếng Anh. Bỏ so hoặc bỏ Because.',
        translation: 'Bởi vì anh ấy bị ốm, anh ấy đã không thể tham dự buổi hội thảo.',
        level: 'Cơ bản'
      },
      {
        id: 'conj-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Despite he studied diligently, he did not pass the examination."',
        hint: 'Sau Despite phải là cụm danh từ hoặc V-ing, hoặc đổi thành Although.',
        correctAnswers: [
          'Although he studied diligently, he did not pass the examination.',
          'Despite studying diligently, he did not pass the examination.'
        ],
        explanation: 'Despite là giới từ không đi với mệnh đề (he studied). Đổi thành liên từ Although hoặc dùng Despite studying diligently.',
        translation: 'Mặc dù anh ấy đã học tập chăm chỉ, anh ấy đã không vượt qua kỳ thi.',
        level: 'Trung bình'
      },
      {
        id: 'conj-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Both my brother or my sister enjoy classical chamber music."',
        hint: 'Cặp từ đúng là Both...and.',
        correctAnswers: [
          'Both my brother and my sister enjoy classical chamber music.'
        ],
        explanation: 'Both luôn đi kèm với and (Both...and), không đi với or.',
        translation: 'Cả anh trai và chị gái tôi đều yêu thích nhạc thính phòng cổ điển.',
        level: 'Cơ bản'
      },
      {
        id: 'conj-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "You will fail the driving test if you don\'t practice, unless you are very lucky."',
        hint: 'Câu thừa lặp điều kiện gây rườm rà; viết lại chuẩn câu điều kiện với unless.',
        correctAnswers: [
          'You will fail the driving test unless you practice.',
          'You will fail the driving test if you don\'t practice.'
        ],
        explanation: 'Unless = If not. Dùng: You will fail the driving test unless you practice.',
        translation: 'Bạn sẽ trượt bài thi lái xe trừ khi bạn luyện tập chăm chỉ.',
        level: 'Nâng cao'
      },
      {
        id: 'conj-sc-1',
        type: 'sentence-construction',
        prompt: 'Kết hợp hai câu thành một câu sử dụng liên từ "Although": "He was inexperienced. He managed the crisis exceptionally well."',
        hint: 'Although he was inexperienced, he managed the crisis exceptionally well.',
        correctAnswers: [
          'Although he was inexperienced, he managed the crisis exceptionally well.',
          'He managed the crisis exceptionally well although he was inexperienced.'
        ],
        explanation: 'Although đứng đầu mệnh đề nhượng bộ thể hiện sự tương phản.',
        translation: 'Mặc dù anh ấy thiếu kinh nghiệm, anh ấy đã xử lý cuộc khủng hoảng một cách đặc biệt tốt.',
        level: 'Cơ bản'
      },
      {
        id: 'conj-sc-2',
        type: 'sentence-construction',
        prompt: 'Kết hợp hai câu thành một câu dùng cặp liên từ "Not only... but also": "She is a talented musician. She is an accomplished writer."',
        hint: 'She is not only a talented musician but also an accomplished writer.',
        correctAnswers: [
          'She is not only a talented musician but also an accomplished writer.'
        ],
        explanation: 'Not only... but also nối hai cụm danh từ ngang hàng.',
        translation: 'Cô ấy không những là một nhạc sĩ tài năng mà còn là một nhà văn tài ba.',
        level: 'Trung bình'
      },
      {
        id: 'conj-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng "Because of" thay cho "Because": "Because the weather was foggy, the flight could not take off."',
        hint: 'Because of the foggy weather, the flight could not take off.',
        correctAnswers: [
          'Because of the foggy weather, the flight could not take off.'
        ],
        explanation: 'Because of đi với cụm danh từ the foggy weather.',
        translation: 'Bởi vì thời tiết sương mù, chuyến bay đã không thể cất cánh.',
        level: 'Trung bình'
      },
      {
        id: 'conj-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sử dụng cặp liên từ "Neither...nor": "David does not eat meat. His wife does not eat meat either."',
        hint: 'Neither David nor his wife eats meat.',
        correctAnswers: [
          'Neither David nor his wife eats meat.'
        ],
        explanation: 'Neither...nor nối hai chủ ngữ, động từ chia theo his wife (số ít -> eats).',
        translation: 'Cả David lẫn vợ anh ấy đều không ăn thịt.',
        level: 'Nâng cao'
      },
      {
        id: 'conj-sc-5',
        type: 'sentence-construction',
        prompt: 'Nối hai mệnh đề độc lập thành một câu ghép dùng liên từ FANBOYS "so" và dấu phẩy: "I woke up very late. I missed the morning train."',
        hint: 'I woke up very late, so I missed the morning train.',
        correctAnswers: [
          'I woke up very late, so I missed the morning train.'
        ],
        explanation: 'Dùng dấu phẩy và liên từ so để nối hai mệnh đề độc lập chỉ kết quả.',
        translation: 'Tôi thức dậy rất muộn, cho nên tôi đã lỡ chuyến tàu buổi sáng.',
        level: 'Cơ bản'
      }
    ]
  },

  // 11. INTERJECTIONS
  {
    id: 'interjections',
    title: 'Interjections',
    vietnameseTitle: 'Thán từ',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A1–B1',
    summary: 'Từ hoặc cụm từ ngắn dùng để bộc lộ cảm xúc tức thời; ít liên kết ngữ pháp trực tiếp với các thành phần khác trong câu.',
    overview: 'Thán từ (Interjections) là những từ hoặc âm thanh ngắn được thốt ra để bộc lộ cảm xúc tức thì của người nói như ngạc nhiên (Wow, Oh), vui sướng (Hurrah, Yay), đau đớn (Ouch), thất vọng (Alas, Oops), do dự (Um, Uh), hoặc dùng để chào hỏi và thu hút sự chú ý (Hey, Hi, Look).',
    foundation: 'Về mặt cú pháp, thán từ đứng khá độc lập và không chi phối cấu trúc câu. Chúng thường đứng ở đầu câu và được ngăn cách với phần còn lại bằng dấu phẩy (nếu cảm xúc nhẹ nhàng) hoặc dấu chấm than (nếu cảm xúc mãnh liệt).',
    classification: [
      {
        title: 'Thán từ biểu lộ cảm xúc mạnh (Strong Emotion)',
        description: 'Wow! (ngạc nhiên, trầm trồ), Ouch! (đau đớn đột ngột), Yay! / Hurrah! (vui sướng chiến thắng), Oh no! (kinh ngạc, lo lắng).'
      },
      {
        title: 'Thán từ biểu lộ sự nhẹ nhàng / do dự (Mild Emotion & Hesitation)',
        description: 'Well, (à thì, thôi thì), Oh, (ồ), Um / Uh, (ừm, ấp úng khi suy nghĩ).'
      },
      {
        title: 'Thán từ chào hỏi & gây chú ý (Greeting & Attention-getting)',
        description: 'Hey! (này), Hi! / Hello! (xin chào), Look! (nhìn kìa), Listen! (nghe này), Shh! (suỵt, trật tự).'
      },
      {
        title: 'Thán từ đồng tình & bác bỏ (Agreement & Disapproval)',
        description: 'Yeah! / Yep! (đồng ý), Nah! / Nope! (từ chối), Eww! / Yuck! (ghê tởm), Oops! (khi lỡ tay làm sai).'
      }
    ],
    formulas: [
      {
        title: 'Quy tắc dùng dấu câu với Thán từ',
        formula: 'Cảm xúc mạnh: Interjection! + [Mệnh đề] (Ouch! That really hurts!)\nCảm xúc vừa phải: Interjection, + [Mệnh đề] (Well, I am not quite sure about that.)',
        note: 'Dấu chấm than (!) dùng khi cảm xúc dữ dội; dấu phẩy (,) dùng khi cảm xúc nhẹ hoặc làm từ đệm.'
      }
    ],
    usage: [
      {
        context: 'Bộc lộ sự ngạc nhiên và thán phục (Surprise & Admiration)',
        explanation: 'Dùng Wow hoặc Oh my goodness khi chứng kiến điều kỳ diệu.',
        example: { english: 'Wow! That fireworks display is truly breathtaking!', vietnamese: 'Ồ tuyệt quá! Màn trình diễn pháo hoa đó thực sự ngoạn mục!' }
      },
      {
        context: 'Thừa nhận sai sót nhỏ một cách tự nhiên với Oops',
        explanation: 'Dùng khi vô tình làm đổ nước, gõ nhầm phím hoặc làm rơi đồ.',
        example: { english: 'Oops! I accidentally deleted the wrong file.', vietnamese: 'Ối! Tôi vô tình xóa nhầm tập tin rồi.' }
      },
      {
        context: 'Dùng làm từ đệm suy nghĩ trong văn nói (Fillers)',
        explanation: 'Dùng Well, Um để câu nói tự nhiên trong khi đang tìm từ diễn đạt.',
        example: { english: 'Well, I think we should explore other alternatives first.', vietnamese: 'À thì, tôi nghĩ chúng ta nên thăm dò các phương án khác trước.' }
      }
    ],
    examples: [
      { english: 'Ouch! A sharp thorn just pricked my finger.', vietnamese: 'Ái! Một cái gai nhọn vừa đâm vào ngón tay tôi.', note: 'Ouch biểu thị cơn đau đột ngột.' },
      { english: 'Shh! The baby has just fallen asleep.', vietnamese: 'Suỵt! Em bé vừa mới ngủ thiếp đi đấy.', note: 'Shh dùng để yêu cầu giữ trật tự.' },
      { english: 'Alas! Our efforts were all in vain.', vietnamese: 'Than ôi! Mọi nỗ lực của chúng tôi đều uổng công vô ích.', note: 'Alas là thán từ trang trọng cổ điển chỉ sự tiếc nuối.' }
    ],
    importantNotes: [
      'Thán từ chủ yếu xuất hiện trong văn nói, hội thoại hàng ngày, kịch bản hoặc tin nhắn thân mật.',
      'HẠN CHẾ tối đa dùng thán từ trong văn bản học thuật (IELTS Writing Task 2, luận văn, báo cáo nghiên cứu) vì chúng làm giảm tính khách quan.',
      'Không dùng quá nhiều thán từ liên tiếp trong một câu.',
      'Chú ý dấu câu: sau thán từ có dấu chấm than thì từ tiếp theo phải viết hoa chữ cái đầu.'
    ],
    comparison: {
      title: 'Phân biệt Interjection vs Adverb',
      points: [
        { concept: 'Interjection (Thán từ: Oh, Wow, Well)', difference: 'Độc lập ngữ pháp, không bổ nghĩa cho từ nào, chỉ biểu lộ cảm xúc người nói.' },
        { concept: 'Adverb (Trạng từ: Quickly, Very, Fortunately)', difference: 'Gắn liền với cấu trúc ngữ pháp, bổ nghĩa trực tiếp cho động từ, tính từ hoặc mệnh đề.' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp hàng ngày: Sự cố bất ngờ tại quán cà phê',
      dialogueOrSentences: [
        { speaker: 'Hải', text: 'Oops! I just spilled some iced coffee on the table.', translation: 'Ối! Mình vừa làm đổ chút cà phê đá ra bàn rồi.' },
        { speaker: 'Linh', text: 'Oh no! Don\'t worry, let me grab some napkins right away.', translation: 'Ôi không! Đừng lo, để mình lấy khăn giấy ngay đây.' },
        { speaker: 'Hải', text: 'Phew! Fortunately, it didn\'t get on my laptop.', translation: 'Phù! May mắn là nó không dính vào laptop của mình.' }
      ]
    },
    summaryPoints: [
      'Thán từ bộc lộ cảm xúc tức thời (vui, buồn, đau, ngạc nhiên, thất vọng).',
      'Đứng độc lập về mặt ngữ pháp, thường ở đầu câu.',
      'Dấu chấm than (!) cho cảm xúc mạnh; dấu phẩy (,) cho cảm xúc nhẹ hoặc từ đệm.',
      'Thường dùng trong văn nói và hội thoại; tránh dùng trong văn phong học thuật.',
      'Các thán từ phổ biến: Wow, Ouch, Oops, Phew, Shh, Well, Alas.'
    ],
    exercises: [
      {
        id: 'interj-mc-1',
        type: 'multiple-choice',
        prompt: '___! That boiling water splashed on my hand!',
        choices: ['Ouch', 'Yay', 'Alas', 'Well'],
        correctAnswers: ['Ouch'],
        explanation: 'Ouch là thán từ dùng để bộc lộ cảm giác đau đớn đột ngột.',
        translation: 'Ái! Nước sôi đó bắn vào tay tôi rồi!',
        level: 'Cơ bản'
      },
      {
        id: 'interj-mc-2',
        type: 'multiple-choice',
        prompt: '___! You look stunning in that traditional dress!',
        choices: ['Wow', 'Oops', 'Eww', 'Shh'],
        correctAnswers: ['Wow'],
        explanation: 'Wow dùng để bộc lộ sự ngạc nhiên, ngưỡng mộ và tán thưởng.',
        translation: 'Chà! Bạn trông thật lộng lẫy trong bộ trang phục truyền thống đó!',
        level: 'Cơ bản'
      },
      {
        id: 'interj-mc-3',
        type: 'multiple-choice',
        prompt: '___! The librarian is asking everyone to lower their voices.',
        choices: ['Shh', 'Hurrah', 'Oops', 'Yay'],
        correctAnswers: ['Shh'],
        explanation: 'Shh dùng để nhắc nhở người khác im lặng hoặc giữ trật tự.',
        translation: 'Suỵt! Thủ thư đang yêu cầu mọi người nói nhỏ lại đấy.',
        level: 'Cơ bản'
      },
      {
        id: 'interj-mc-4',
        type: 'multiple-choice',
        prompt: '___, we made it just before the ticket gates closed!',
        choices: ['Phew', 'Ouch', 'Alas', 'Yuck'],
        correctAnswers: ['Phew'],
        explanation: 'Phew thốt lên khi cảm thấy nhẹ nhõm sau khi vừa thoát khỏi một tình huống căng thẳng hay nguy hiểm.',
        translation: 'Phù, chúng ta đã đến vừa kịp lúc trước khi cổng soát vé đóng lại!',
        level: 'Trung bình'
      },
      {
        id: 'interj-mc-5',
        type: 'multiple-choice',
        prompt: '___! I completely forgot to attach the quarterly financial report to the email.',
        choices: ['Oops', 'Hurrah', 'Bravo', 'Yay'],
        correctAnswers: ['Oops'],
        explanation: 'Oops thốt lên khi người nói nhận ra mình vừa phạm phải một sai sót sơ suất.',
        translation: 'Ối! Tôi hoàn toàn quên đính kèm báo cáo tài chính quý vào email rồi.',
        level: 'Cơ bản'
      },
      {
        id: 'interj-fb-1',
        type: 'fill-blank',
        prompt: '___! We won the championship match in the final minute! (Yay/Ouch)',
        hint: 'Bộc lộ niềm vui chiến thắng.',
        correctAnswers: ['Yay', 'Hurrah'],
        explanation: 'Yay / Hurrah biểu thị sự hân hoan vui sướng khi chiến thắng.',
        translation: 'Hoan hô! Chúng ta đã giành chức vô địch ở phút cuối cùng!',
        level: 'Cơ bản'
      },
      {
        id: 'interj-fb-2',
        type: 'fill-blank',
        prompt: '___, that stepped on my foot! (Ouch/Wow)',
        hint: 'Cảm giác đau đớn khi bị dẫm lên chân.',
        correctAnswers: ['Ouch'],
        explanation: 'Ouch dùng khi bị đau.',
        translation: 'Ái, dẫm lên chân tôi rồi kìa!',
        level: 'Cơ bản'
      },
      {
        id: 'interj-fb-3',
        type: 'fill-blank',
        prompt: '___, I am not completely certain that this strategy will work. (Well/Ouch)',
        hint: 'Từ đệm suy nghĩ mở đầu câu.',
        correctAnswers: ['Well'],
        explanation: 'Well thường mở đầu câu nói khi người nói đang cân nhắc hoặc bày tỏ sự ngập ngừng.',
        translation: 'À thì, tôi không hoàn toàn chắc chắn rằng chiến lược này sẽ hiệu quả.',
        level: 'Cơ bản'
      },
      {
        id: 'interj-fb-4',
        type: 'fill-blank',
        prompt: '___! There is a huge spider crawling under the sofa! (Look/Alas)',
        hint: 'Gây sự chú ý nhìn vào sự vật.',
        correctAnswers: ['Look'],
        explanation: 'Look! dùng để thu hút sự chú ý của người nghe nhìn vào một sự vật.',
        translation: 'Nhìn kìa! Có một con nhện khổng lồ đang bò dưới ghế sofa!',
        level: 'Cơ bản'
      },
      {
        id: 'interj-fb-5',
        type: 'fill-blank',
        prompt: '___! Our noble hero could not survive the perilous journey. (Alas/Wow)',
        hint: 'Thán từ cổ điển trang trọng than vãn về sự mất mát.',
        correctAnswers: ['Alas'],
        explanation: 'Alas là thán từ trang trọng biểu thị sự đau buồn, tiếc thương sâu sắc.',
        translation: 'Than ôi! Người anh hùng cao quý của chúng ta đã không thể sống sót qua cuộc hành trình đầy hiểm nguy.',
        level: 'Nâng cao'
      },
      {
        id: 'interj-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Hurrah! I failed my driving test for the third time."',
        hint: 'Trượt bài thi là tin buồn, không thể dùng Hurrah (hoan hô).',
        correctAnswers: [
          'Alas! I failed my driving test for the third time.',
          'Oh no! I failed my driving test for the third time.'
        ],
        explanation: 'Hurrah biểu thị vui sướng chiến thắng; khi trượt thi phải dùng Oh no! hoặc Alas! biểu thị thất vọng.',
        translation: 'Ôi không! Tôi đã trượt bài thi lái xe lần thứ ba rồi.',
        level: 'Cơ bản'
      },
      {
        id: 'interj-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Ouch, that fireworks display looks magnificent!"',
        hint: 'Ngắm pháo hoa đẹp không dùng Ouch (chỉ sự đau đớn).',
        correctAnswers: [
          'Wow, that fireworks display looks magnificent!',
          'Wow! That fireworks display looks magnificent!'
        ],
        explanation: 'Ouch chỉ dùng khi đau đớn; để khen ngợi pháo hoa đẹp ta dùng Wow.',
        translation: 'Chà, màn trình diễn pháo hoa đó trông thật tráng lệ!',
        level: 'Cơ bản'
      },
      {
        id: 'interj-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Oops! We won the gold medal in the Olympic finals!"',
        hint: 'Giành huy chương vàng dùng Hurrah hoặc Yay.',
        correctAnswers: [
          'Yay! We won the gold medal in the Olympic finals!',
          'Hurrah! We won the gold medal in the Olympic finals!'
        ],
        explanation: 'Oops chỉ dùng khi lỡ làm sai; giành huy chương vàng Olympic dùng Hurrah! hoặc Yay! để ăn mừng.',
        translation: 'Hoan hô! Chúng ta đã giành huy chương vàng trong trận chung kết Olympic!',
        level: 'Cơ bản'
      },
      {
        id: 'interj-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai về dấu câu: "Ouch that hot coffee burned my tongue!"',
        hint: 'Cần có dấu phẩy hoặc dấu chấm than sau Ouch.',
        correctAnswers: [
          'Ouch! That hot coffee burned my tongue!',
          'Ouch, that hot coffee burned my tongue!'
        ],
        explanation: 'Thán từ Ouch phải được ngăn cách với câu bằng dấu chấm than hoặc dấu phẩy.',
        translation: 'Ái! Cốc cà phê nóng đó làm bỏng lưỡi tôi rồi!',
        level: 'Trung bình'
      },
      {
        id: 'interj-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "Shh! Why are you singing so loudly in the quiet study zone?"',
        hint: 'Câu này đúng ngữ cảnh nhưng chú ý sự phù hợp sắc thái giao tiếp.',
        correctAnswers: [
          'Shh! Why are you singing so loudly in the quiet study zone?'
        ],
        explanation: 'Shh! dùng đúng để yêu cầu giữ trật tự trong khu vực học yên tĩnh.',
        translation: 'Suỵt! Tại sao bạn lại hát to thế trong khu vực học tập yên tĩnh?',
        level: 'Cơ bản'
      },
      {
        id: 'interj-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết một câu cảm thán dùng thán từ "Wow" để khen ngợi bức tranh phong cảnh tuyệt đẹp.',
        hint: 'Mẫu: Wow! What a breathtaking painting!',
        correctAnswers: [
          'Wow! What a breathtaking landscape painting!',
          'Wow! What a beautiful painting!',
          'Wow! This painting is absolutely gorgeous!'
        ],
        explanation: 'Wow dùng mở đầu câu cảm thán khen ngợi vẻ đẹp.',
        translation: 'Chà! Thật là một bức tranh phong cảnh ngoạn mục!',
        level: 'Cơ bản'
      },
      {
        id: 'interj-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết một câu xin lỗi tự nhiên dùng thán từ "Oops" khi bạn vô tình làm rơi chiếc cốc.',
        hint: 'Oops! I accidentally dropped the cup.',
        correctAnswers: [
          'Oops! I accidentally dropped the glass.',
          'Oops! I accidentally dropped the cup.'
        ],
        explanation: 'Oops dùng khi lỡ tay làm rơi vỡ đồ đạc.',
        translation: 'Ối! Tôi vô tình làm rơi chiếc cốc rồi.',
        level: 'Cơ bản'
      },
      {
        id: 'interj-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết một câu yêu cầu mọi người giữ im lặng trong thư viện dùng thán từ "Shh".',
        hint: 'Shh! Please be quiet in the library.',
        correctAnswers: [
          'Shh! Please be quiet in the library.',
          'Shh! You must keep quiet in the library.'
        ],
        explanation: 'Shh! dùng để ra hiệu trật tự.',
        translation: 'Suỵt! Xin vui lòng giữ trật tự trong thư viện.',
        level: 'Cơ bản'
      },
      {
        id: 'interj-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết một câu mở đầu bằng "Well," thể hiện sự cân nhắc trước khi đưa ra quyết định.',
        hint: 'Well, let me think about that proposal.',
        correctAnswers: [
          'Well, let me think about that proposal.',
          'Well, I will consider your offer carefully.'
        ],
        explanation: 'Well, đứng đầu câu làm từ đệm chỉ sự suy ngẫm.',
        translation: 'À thì, để tôi suy nghĩ về bản đề xuất đó nhé.',
        level: 'Trung bình'
      },
      {
        id: 'interj-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết một câu thở phào nhẹ nhõm dùng thán từ "Phew" khi kỳ thi căng thẳng đã kết thúc.',
        hint: 'Phew! The difficult exam is finally over.',
        correctAnswers: [
          'Phew! The difficult exam is finally over.',
          'Phew! We have finally finished the exam.'
        ],
        explanation: 'Phew! biểu thị sự nhẹ nhõm khi qua khỏi kỳ thi căng thẳng.',
        translation: 'Phù! Kỳ thi khó khăn cuối cùng cũng kết thúc rồi.',
        level: 'Cơ bản'
      }
    ]
  },

  // 12. WORD FORMATION
  {
    id: 'word-formation',
    title: 'Word Formation',
    vietnameseTitle: 'Cấu tạo từ',
    category: 'Từ loại',
    categoryId: 'parts-of-speech',
    level: 'A2–B2',
    summary: 'Quy tắc phái sinh từ vựng qua tiền tố (prefixes) và hậu tố (suffixes); nhận diện từ loại và chuyển đổi linh hoạt giữa danh, động, tính, trạng.',
    overview: 'Cấu tạo từ (Word Formation) là nghệ thuật mở rộng vốn từ vựng thông qua việc thêm tiền tố (Prefixes) hoặc hậu tố (Suffixes) vào từ gốc (Root word), hoặc ghép từ (Compounding). Nắm vững cấu tạo từ giúp người học dễ dàng đoán nghĩa từ mới và xử lý xuất sắc các bài tập biến đổi từ loại trong các kỳ thi.',
    foundation: 'Tiền tố (Prefix) thường thay đổi Ý NGHĨA của từ (thường tạo nghĩa phủ định, đối lập hoặc lặp lại), trong khi Hậu tố (Suffix) chủ yếu thay đổi TỪ LOẠI của từ (biến động từ thành danh từ, danh từ thành tính từ, v.v.).',
    classification: [
      {
        title: 'Tiền tố phủ định (Negative Prefixes)',
        description: 'un- (unhappy), in- (incorrect), im- (impossible, đi trước m/p), il- (illegal, đi trước l), ir- (irregular, đi trước r), dis- (disagree), mis- (misunderstand - hiểu sai).'
      },
      {
        title: 'Hậu tố tạo Danh từ (Noun Suffixes)',
        description: '-tion / -sion (action, decision), -ment (development), -ness (happiness), -ity (activity), -ance / -ence (importance, difference), -er / -or / -ist (teacher, doctor, scientist).'
      },
      {
        title: 'Hậu tố tạo Tính từ (Adjective Suffixes)',
        description: '-ful (careful), -less (careless), -able / -ible (comfortable, flexible), -ous (dangerous), -ic / -ical (economic, economical), -ive (creative), -al (national).'
      },
      {
        title: 'Hậu tố tạo Động từ & Trạng từ (Verb & Adverb Suffixes)',
        description: 'Tạo động từ: -ize / -ise (modernize), -en (widen, strengthen), -ify (simplify). Tạo trạng từ: -ly (quickly, happily).'
      }
    ],
    formulas: [
      {
        title: 'Quy trình giải bài tập Cấu tạo từ (Word Formation Process)',
        formula: 'Bước 1: Xác định TỪ LOẠI cần điền dựa vào vị trí cú pháp (sau to be cần Adj, sau mạo từ cần N, bổ nghĩa V cần Adv...)\nBước 2: Xác định Ý NGHĨA (tích cực hay tiêu cực, phủ định hay khẳng định)\nBước 3: Thêm tiền tố/hậu tố phù hợp và kiểm tra chính tả (y -> i trước -ness/-ly)',
        note: 'Luôn kiểm tra ngữ cảnh câu có mang nghĩa tiêu cực không để thêm tiền tố phủ định un-/dis-/in-.'
      },
      {
        title: 'Các cặp tính từ phái sinh dễ nhầm lẫn',
        formula: 'economic (thuộc về nền kinh tế) KHÁC economical (tiết kiệm)\nhistoric (mang tính lịch sử trọng đại) KHÁC historical (thuộc về lịch sử)\nclassic (kinh điển, xuất sắc) KHÁC classical (cổ điển)',
        note: 'Chọn đúng từ theo văn cảnh thực tế.'
      }
    ],
    usage: [
      {
        context: 'Biến đổi động từ thành danh từ chỉ hành động hoặc người',
        explanation: 'Thêm -ment, -tion cho hành động; thêm -er, -ist cho người thực hiện.',
        example: { english: 'Employ (động từ) -> employment (sự tuyển dụng) / employer (người sử dụng lao động) / employee (nhân viên).', vietnamese: 'Tuyển dụng -> việc làm / chủ / người làm công.' }
      },
      {
        context: 'Tạo tính từ có khả năng làm được việc gì với -able',
        explanation: 'Động từ + -able = có thể làm được.',
        example: { english: 'Rely (dựa vào) -> reliable (đáng tin cậy); Adapt -> adaptable.', vietnamese: 'Dựa vào -> đáng tin cậy; thích ứng -> có thể thích ứng.' }
      },
      {
        context: 'Tạo động từ từ tính từ bằng hậu tố -en',
        explanation: 'Adj + -en = làm cho trở nên...',
        example: { english: 'Wide (rộng) -> widen (mở rộng); Deep -> deepen; Strong -> strengthen.', vietnamese: 'Rộng -> mở rộng; sâu -> làm sâu sắc; mạnh -> củng cố.' }
      }
    ],
    examples: [
      { english: 'Her remarkable creativity impressed the entire board of directors.', vietnamese: 'Sự sáng tạo đáng nể của cô ấy đã gây ấn tượng với toàn bộ ban giám đốc.', note: 'Create (V) -> creative (Adj) -> creativity (N).' },
      { english: 'It was completely irresponsible of him to abandon the project.', vietnamese: 'Anh ấy thật hoàn toàn vô trách nhiệm khi bỏ rơi dự án.', note: 'Responsible -> irresponsible (tiền tố phủ định ir-).' },
      { english: 'The municipal council plans to widen the main avenue next year.', vietnamese: 'Hội đồng thành phố dự định mở rộng đại lộ chính vào năm tới.', note: 'Wide (Adj) -> widen (V).' }
    ],
    importantNotes: [
      'Quy tắc biến đổi chính tả: phụ âm + y khi thêm hậu tố thường đổi y thành i (happy -> happiness -> happily).',
      'Đừng quên xét nghĩa phủ định: Nhiều thí sinh biết cần điền tính từ nhưng quên thêm tiền tố phủ định un-, im-, dis- dẫn đến sai nghĩa của câu.',
      'Phân biệt đuôi -ful (đầy) và -less (không có): hopeful (đầy hy vọng) vs hopeless (vô vọng); careful (cẩn thận) vs careless (bất cẩn).',
      'Gốc từ kết thúc bằng đuôi -e thường bỏ -e trước khi thêm hậu tố bắt đầu bằng nguyên âm (create -> creating, creator).'
    ],
    comparison: {
      title: 'Phân biệt Economic vs Economical & Historic vs Historical',
      points: [
        { concept: 'Economic (Tính từ)', difference: 'Thuộc về kinh tế, tài chính: economic growth (tăng trưởng kinh tế).' },
        { concept: 'Economical (Tính từ)', difference: 'Tiết kiệm thời gian, tiền bạc, nhiên liệu: an economical hybrid car.' },
        { concept: 'Historic (Tính từ)', difference: 'Có ý nghĩa lịch sử trọng đại: a historic victory (chiến thắng lịch sử).' },
        { concept: 'Historical (Tính từ)', difference: 'Liên quan đến quá khứ, lịch sử: historical research (nghiên cứu lịch sử).' }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp đánh giá nhân sự: Nhận xét năng lực ứng viên',
      dialogueOrSentences: [
        { speaker: 'Giám đốc nhân sự', text: 'What is your impression of candidate Nam?', translation: 'Ấn tượng của anh về ứng viên Nam như thế nào?' },
        { speaker: 'Trưởng phòng', text: 'He is highly knowledgeable, adaptable, and communicative.', translation: 'Cậu ấy rất am hiểu kiến thức, có khả năng thích ứng cao và giao tiếp tốt.' },
        { speaker: 'Giám đốc nhân sự', text: 'His enthusiasm and punctuality are also remarkable.', translation: 'Sự nhiệt huyết và đúng giờ của cậu ấy cũng rất đáng nể.' }
      ]
    },
    summaryPoints: [
      'Tiền tố (Prefix) thay đổi ý nghĩa (thường tạo nghĩa phủ định: un-, in-, im-, dis-).',
      'Hậu tố (Suffix) thay đổi từ loại (tạo danh từ, tính từ, động từ, trạng từ).',
      '3 bước làm bài Word Formation: Xác định từ loại -> Xác định nghĩa (+ hay -) -> Biến đổi từ và kiểm tra chính tả.',
      'Ghi nhớ các cặp từ phái sinh dễ nhầm: economic/economical, historic/historical.',
      'Để ý đuôi -en tạo động từ: widen, shorten, sharpen, strengthen.'
    ],
    exercises: [
      {
        id: 'wf-mc-1',
        type: 'multiple-choice',
        prompt: 'The young entrepreneur demonstrated outstanding ___ during the market crisis.',
        choices: ['leadership', 'leader', 'lead', 'leading'],
        correctAnswers: ['leadership'],
        explanation: 'Sau tính từ outstanding cần một danh từ chỉ phẩm chất khả năng lãnh đạo (leadership).',
        translation: 'Doanh nhân trẻ đã thể hiện khả năng lãnh đạo xuất sắc trong cuộc khủng hoảng thị trường.',
        level: 'Cơ bản'
      },
      {
        id: 'wf-mc-2',
        type: 'multiple-choice',
        prompt: 'Buying a fuel-efficient compact car is a very ___ choice for daily commuting.',
        choices: ['economical', 'economic', 'economics', 'economize'],
        correctAnswers: ['economical'],
        explanation: 'Economical mang nghĩa tiết kiệm tiền/nhiên liệu; economic mang nghĩa thuộc về nền kinh tế.',
        translation: 'Mua một chiếc xe nhỏ gọn tiết kiệm nhiên liệu là một lựa chọn rất tiết kiệm cho việc đi lại hàng ngày.',
        level: 'Trung bình'
      },
      {
        id: 'wf-mc-3',
        type: 'multiple-choice',
        prompt: 'It is almost ___ to predict the exact path of the tropical hurricane.',
        choices: ['impossible', 'possible', 'possibility', 'impossibly'],
        correctAnswers: ['impossible'],
        explanation: 'Cấu trúc It is + Adj + to V; ngữ cảnh dự đoán đường đi của bão là hầu như không thể nên dùng impossible.',
        translation: 'Hầu như không thể dự đoán chính xác đường đi của cơn bão nhiệt đới.',
        level: 'Cơ bản'
      },
      {
        id: 'wf-mc-4',
        type: 'multiple-choice',
        prompt: 'The government plans to ___ the main bridge to relieve traffic bottlenecks.',
        choices: ['strengthen', 'strength', 'strong', 'strongly'],
        correctAnswers: ['strengthen'],
        explanation: 'Sau \'plans to\' cần một động từ nguyên mẫu; strengthen là động từ (gia cố, củng cố) từ gốc strong.',
        translation: 'Chính phủ dự định gia cố cây cầu chính để giải tỏa các điểm nghẽn giao thông.',
        level: 'Trung bình'
      },
      {
        id: 'wf-mc-5',
        type: 'multiple-choice',
        prompt: 'The research team made a ___ discovery that could revolutionize cancer treatment.',
        choices: ['historic', 'history', 'historical', 'historian'],
        correctAnswers: ['historic'],
        explanation: 'Historic mang nghĩa có tầm quan trọng lịch sử to lớn (a historic discovery).',
        translation: 'Nhóm nghiên cứu đã tạo ra một phát hiện mang tính lịch sử có thể cách mạng hóa việc điều trị ung thư.',
        level: 'Nâng cao'
      },
      {
        id: 'wf-fb-1',
        type: 'fill-blank',
        prompt: 'Her exceptional musical ___ was recognized when she was only six years old. (ABLE)',
        hint: 'Cần danh từ chỉ khả năng, năng lực.',
        correctAnswers: ['ability'],
        explanation: 'Danh từ của able là ability (khả năng, tài năng).',
        translation: 'Tài năng âm nhạc đặc biệt của cô ấy đã được công nhận khi cô mới sáu tuổi.',
        level: 'Cơ bản'
      },
      {
        id: 'wf-fb-2',
        type: 'fill-blank',
        prompt: 'Many students feel ___ about their upcoming university entrance exams. (ANXIETY)',
        hint: 'Cần tính từ miêu tả cảm xúc lo lắng.',
        correctAnswers: ['anxious'],
        explanation: 'Tính từ của anxiety là anxious (lo lắng).',
        translation: 'Nhiều sinh viên cảm thấy lo lắng về kỳ thi tuyển sinh đại học sắp tới của mình.',
        level: 'Cơ bản'
      },
      {
        id: 'wf-fb-3',
        type: 'fill-blank',
        prompt: 'The manager decided to ___ the production process to boost efficiency. (SIMPLE)',
        hint: 'Cần động từ nguyên mẫu sau to.',
        correctAnswers: ['simplify'],
        explanation: 'Động từ của simple là simplify (đơn giản hóa).',
        translation: 'Người quản lý đã quyết định đơn giản hóa quy trình sản xuất để tăng hiệu quả.',
        level: 'Trung bình'
      },
      {
        id: 'wf-fb-4',
        type: 'fill-blank',
        prompt: 'It was highly ___ of the driver to exceed the speed limit in a school zone. (RESPONSIBLE)',
        hint: 'Cần tính từ mang nghĩa phủ định (vô trách nhiệm).',
        correctAnswers: ['irresponsible'],
        explanation: 'Tiền tố phủ định ir- kết hợp với responsible -> irresponsible (vô trách nhiệm).',
        translation: 'Người tài xế đã hết sức vô trách nhiệm khi vượt quá tốc độ cho phép trong khu vực trường học.',
        level: 'Trung bình'
      },
      {
        id: 'wf-fb-5',
        type: 'fill-blank',
        prompt: 'Regular physical exercise helps to ___ your cardiovascular system. (STRONG)',
        hint: 'Động từ nguyên mẫu sau helps to.',
        correctAnswers: ['strengthen'],
        explanation: 'Động từ của strong là strengthen (tăng cường, củng cố).',
        translation: 'Tập thể dục thường xuyên giúp tăng cường hệ tim mạch của bạn.',
        level: 'Trung bình'
      },
      {
        id: 'wf-err-1',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "His careless in driving caused a serious multi-car accident."',
        hint: 'Sau tính từ sở hữu His cần một danh từ (carelessness).',
        correctAnswers: [
          'His carelessness in driving caused a serious multi-car accident.'
        ],
        explanation: 'Careless là tính từ; ở đây cần danh từ chỉ sự bất cẩn làm chủ ngữ: carelessness.',
        translation: 'Sự bất cẩn trong lái xe của anh ấy đã gây ra một vụ tai nạn liên hoàn nghiêm trọng.',
        level: 'Cơ bản'
      },
      {
        id: 'wf-err-2',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The company announced the develop of a revolutionary new smartphone."',
        hint: 'Sau mạo từ the cần danh từ development.',
        correctAnswers: [
          'The company announced the development of a revolutionary new smartphone.'
        ],
        explanation: 'Develop là động từ; danh từ tương ứng là development (sự phát triển/chế tạo).',
        translation: 'Công ty đã công bố sự phát triển của một mẫu điện thoại thông minh mới mang tính cách mạng.',
        level: 'Cơ bản'
      },
      {
        id: 'wf-err-3',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "It is unlegal to park your vehicle in front of an emergency fire hydrant."',
        hint: 'Tiền tố phủ định của legal là il- (illegal).',
        correctAnswers: [
          'It is illegal to park your vehicle in front of an emergency fire hydrant.'
        ],
        explanation: 'Tiền tố phủ định đi với từ bắt đầu bằng chữ \'l\' là il- (illegal), không dùng unlegal.',
        translation: 'Đỗ xe trước trụ cứu hỏa khẩn cấp là hành vi bất hợp pháp.',
        level: 'Cơ bản'
      },
      {
        id: 'wf-err-4',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "She was complete unaware of the changes in company policy."',
        hint: 'Bổ nghĩa cho tính từ unaware cần trạng từ completely.',
        correctAnswers: [
          'She was completely unaware of the changes in company policy.'
        ],
        explanation: 'Cần trạng từ completely để bổ nghĩa cho tính từ unaware.',
        translation: 'Cô ấy hoàn toàn không hay biết về những thay đổi trong chính sách công ty.',
        level: 'Trung bình'
      },
      {
        id: 'wf-err-5',
        type: 'correct-mistake',
        prompt: 'Tìm và sửa lỗi sai trong câu: "The city council plans to wide the riverbank promenade next summer."',
        hint: 'Động từ của wide là widen.',
        correctAnswers: [
          'The city council plans to widen the riverbank promenade next summer.'
        ],
        explanation: 'Sau \'plans to\' cần động từ nguyên mẫu: widen (mở rộng), không dùng tính từ wide.',
        translation: 'Hội đồng thành phố dự định mở rộng lối đi dạo ven bờ sông vào mùa hè tới.',
        level: 'Trung bình'
      },
      {
        id: 'wf-sc-1',
        type: 'sentence-construction',
        prompt: 'Chuyển đổi câu sau bằng cách dùng dạng danh từ của động từ "decide": "She decided to study abroad, which surprised her family."',
        hint: 'Her decision to study abroad surprised her family.',
        correctAnswers: [
          'Her decision to study abroad surprised her family.'
        ],
        explanation: 'Danh từ của decide là decision (quyết định).',
        translation: 'Quyết định đi du học của cô ấy đã làm gia đình cô bất ngờ.',
        level: 'Cơ bản'
      },
      {
        id: 'wf-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng tính từ phủ định của "polite": "It is rude to interrupt someone while they are speaking."',
        hint: 'It is impolite to interrupt someone while they are speaking.',
        correctAnswers: [
          'It is impolite to interrupt someone while they are speaking.'
        ],
        explanation: 'Tiền tố phủ định của polite là im- (impolite: bất lịch sự), đồng nghĩa với rude.',
        translation: 'Thật là bất lịch sự khi ngắt lời ai đó trong khi họ đang nói.',
        level: 'Cơ bản'
      },
      {
        id: 'wf-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng động từ "shorten" từ gốc tính từ "short": "The editor made the article shorter before publication."',
        hint: 'The editor shortened the article before publication.',
        correctAnswers: [
          'The editor shortened the article before publication.'
        ],
        explanation: 'Shorten là động từ mang nghĩa rút ngắn (quá khứ là shortened).',
        translation: 'Biên tập viên đã rút ngắn bài báo trước khi xuất bản.',
        level: 'Trung bình'
      },
      {
        id: 'wf-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng danh từ "variety" từ gốc tính từ "various": "The bookstore offers various genres of international fiction."',
        hint: 'The bookstore offers a wide variety of international fiction genres.',
        correctAnswers: [
          'The bookstore offers a wide variety of international fiction genres.',
          'The bookstore offers a variety of international fiction genres.'
        ],
        explanation: 'A variety of = various (sự đa dạng, nhiều loại khác nhau).',
        translation: 'Hiệu sách cung cấp đa dạng các thể loại tiểu thuyết quốc tế.',
        level: 'Nâng cao'
      },
      {
        id: 'wf-sc-5',
        type: 'sentence-construction',
        prompt: 'Đặt một câu sử dụng tính từ "reliable" (đáng tin cậy) từ gốc động từ "rely".',
        hint: 'Mẫu: He is a very reliable employee.',
        correctAnswers: [
          'He is a very reliable employee in our company.',
          'She is a reliable and hardworking assistant.',
          'This is a reliable car for long trips.'
        ],
        explanation: 'Rely + able -> reliable (tính từ: đáng tin cậy).',
        translation: 'Anh ấy là một nhân viên rất đáng tin cậy trong công ty chúng tôi.',
        level: 'Cơ bản'
      }
    ]
  }
]
