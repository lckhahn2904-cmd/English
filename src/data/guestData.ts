export interface VocabWord {
  id: string
  word: string
  ipa: string
  partOfSpeech: string
  vietnamese: string
  exampleEn: string
  exampleVi: string
  topic: string
}

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  duration: string
  description: string
  xpReward: number
  dialogue: Array<{
    speaker: string
    avatar: string
    en: string
    vi: string
  }>
  vocabulary: VocabWord[]
  quiz: QuizQuestion[]
}

export interface Course {
  id: string
  title: string
  englishTitle: string
  description: string
  icon: string
  level: string
  color: 'blue' | 'purple' | 'emerald'
  totalLessons: number
  trialAvailable: boolean
  lessons: Lesson[]
}

export const guestCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Giao tiếp hàng ngày',
    englishTitle: 'Daily English Conversation',
    description: 'Các tình huống giao tiếp phổ biến nhất trong cuộc sống hàng ngày',
    icon: '💬',
    level: 'Beginner (A1 - A2)',
    color: 'blue',
    totalLessons: 3,
    trialAvailable: true,
    lessons: [
      {
        id: 'lesson-1-1',
        courseId: 'course-1',
        title: 'Bài 1: Chào hỏi & Tự giới thiệu',
        duration: '10 phút',
        description: 'Làm quen, giới thiệu bản thân, nghề nghiệp và sở thích một cách tự nhiên.',
        xpReward: 30,
        dialogue: [
          {
            speaker: 'Alex',
            avatar: '👨‍💼',
            en: 'Hello! Nice to meet you. My name is Alex.',
            vi: 'Xin chào! Rất vui được gặp bạn. Tên tôi là Alex.',
          },
          {
            speaker: 'Linh',
            avatar: '👩‍🎓',
            en: 'Hi Alex! Nice to meet you too. I am Linh from Vietnam.',
            vi: 'Chào Alex! Tôi cũng rất vui được gặp bạn. Tôi là Linh đến từ Việt Nam.',
          },
          {
            speaker: 'Alex',
            avatar: '👨‍💼',
            en: 'What do you do for a living, Linh?',
            vi: 'Bạn làm nghề gì vậy Linh?',
          },
          {
            speaker: 'Linh',
            avatar: '👩‍🎓',
            en: 'I am a software engineer. How about you?',
            vi: 'Tôi là kỹ sư phần mềm. Còn bạn thì sao?',
          },
        ],
        vocabulary: [
          {
            id: 'v-101',
            word: 'introduce',
            ipa: '/ˌɪntrəˈduːs/',
            partOfSpeech: 'verb',
            vietnamese: 'giới thiệu',
            exampleEn: 'Let me introduce myself to the team.',
            exampleVi: 'Để tôi tự giới thiệu bản thân với cả nhóm.',
            topic: 'Giao tiếp cơ bản',
          },
          {
            id: 'v-102',
            word: 'pleasure',
            ipa: '/ˈpleʒər/',
            partOfSpeech: 'noun',
            vietnamese: 'niềm vinh hạnh, niềm vui',
            exampleEn: 'It is a pleasure to meet you.',
            exampleVi: 'Thật là một niềm vinh hạnh khi được gặp bạn.',
            topic: 'Giao tiếp cơ bản',
          },
          {
            id: 'v-103',
            word: 'occupation',
            ipa: '/ˌɑːkjuˈpeɪʃn/',
            partOfSpeech: 'noun',
            vietnamese: 'nghề nghiệp',
            exampleEn: 'Please state your name and occupation.',
            exampleVi: 'Vui lòng nêu tên và nghề nghiệp của bạn.',
            topic: 'Giao tiếp cơ bản',
          },
          {
            id: 'v-104',
            word: 'hometown',
            ipa: '/ˈhoʊmtaʊn/',
            partOfSpeech: 'noun',
            vietnamese: 'quê hương, quê quán',
            exampleEn: 'Da Nang is my beautiful hometown.',
            exampleVi: 'Đà Nẵng là quê hương xinh đẹp của tôi.',
            topic: 'Giao tiếp cơ bản',
          },
        ],
        quiz: [
          {
            id: 1,
            question: 'Cách đáp lại câu "Nice to meet you" tự nhiên và lịch sự nhất là gì?',
            options: [
              'You are welcome.',
              'Nice to meet you too.',
              'I do not know.',
              'Thank you so much.',
            ],
            correctIndex: 1,
            explanation: '"Nice to meet you too" là cách đáp lại chuẩn xác và thân thiện khi ai đó nói "Nice to meet you".',
          },
          {
            id: 2,
            question: 'Khi muốn hỏi nghề nghiệp của một người, bạn có thể nói câu nào sau đây?',
            options: [
              'Where do you live?',
              'How old are you?',
              'What do you do for a living?',
              'What time is it?',
            ],
            correctIndex: 2,
            explanation: '"What do you do for a living?" là câu hỏi thông dụng nhất bằng tiếng Anh để hỏi ai đó làm nghề gì.',
          },
          {
            id: 3,
            question: 'Từ "pleasure" trong câu "It\'s a pleasure to meet you" có nghĩa là gì?',
            options: [
              'Nỗi buồn',
              'Sự bận rộn',
              'Niềm vui / niềm vinh hạnh',
              'Thời gian rảnh',
            ],
            correctIndex: 2,
            explanation: '"Pleasure" mang nghĩa niềm vui, sự hân hạnh hay niềm vinh dự.',
          },
        ],
      },
      {
        id: 'lesson-1-2',
        courseId: 'course-1',
        title: 'Bài 2: Gọi món tại quán cà phê & nhà hàng',
        duration: '12 phút',
        description: 'Tự tin gọi đồ uống, yêu cầu món ăn và thanh toán hóa đơn bằng tiếng Anh.',
        xpReward: 35,
        dialogue: [
          {
            speaker: 'Barista',
            avatar: '☕',
            en: 'Welcome to Star Café! What can I get for you today?',
            vi: 'Chào mừng bạn đến với Star Café! Hôm nay tôi có thể lấy gì cho bạn?',
          },
          {
            speaker: 'Guest',
            avatar: '🙋‍♂️',
            en: 'Could I have an iced latte with oat milk, please?',
            vi: 'Cho tôi một ly latte đá với sữa yến mạch được không?',
          },
          {
            speaker: 'Barista',
            avatar: '☕',
            en: 'Sure thing! What size would you like: small, medium, or large?',
            vi: 'Chắc chắn rồi! Bạn muốn cỡ nào: nhỏ, vừa hay lớn?',
          },
          {
            speaker: 'Guest',
            avatar: '🙋‍♂️',
            en: 'A medium, please. And can I pay by credit card?',
            vi: 'Cho tôi cỡ vừa nhé. Và tôi có thể thanh toán bằng thẻ tín dụng không?',
          },
        ],
        vocabulary: [
          {
            id: 'v-105',
            word: 'recommend',
            ipa: '/ˌrekəˈmend/',
            partOfSpeech: 'verb',
            vietnamese: 'gợi ý, giới thiệu món',
            exampleEn: 'Can you recommend a signature drink?',
            exampleVi: 'Bạn có thể gợi ý một món đồ uống đặc trưng không?',
            topic: 'Nhà hàng & Cà phê',
          },
          {
            id: 'v-106',
            word: 'bill / check',
            ipa: '/bɪl/',
            partOfSpeech: 'noun',
            vietnamese: 'hóa đơn tính tiền',
            exampleEn: 'Excuse me, could we have the bill, please?',
            exampleVi: 'Xin lỗi, chúng tôi có thể xin hóa đơn được không?',
            topic: 'Nhà hàng & Cà phê',
          },
          {
            id: 'v-107',
            word: 'receipt',
            ipa: '/rɪˈsiːt/',
            partOfSpeech: 'noun',
            vietnamese: 'biên lai thanh toán',
            exampleEn: 'Do you need a receipt for this purchase?',
            exampleVi: 'Bạn có cần biên lai cho giao dịch này không?',
            topic: 'Nhà hàng & Cà phê',
          },
        ],
        quiz: [
          {
            id: 1,
            question: 'Khi muốn xin hóa đơn trong nhà hàng, câu nào sau đây là tự nhiên nhất?',
            options: [
              'Give me money now!',
              'Could we have the bill, please?',
              'Where is the kitchen?',
              'I want more food.',
            ],
            correctIndex: 1,
            explanation: '"Could we have the bill, please?" là cách yêu cầu thanh toán lịch sự và thông dụng nhất.',
          },
          {
            id: 2,
            question: 'Từ "receipt" (/rɪˈsiːt/) có chữ "p" là âm câm (không phát âm). Đúng hay sai?',
            options: [
              'Đúng, chữ "p" không phát âm',
              'Sai, phải phát âm rõ chữ "p"',
            ],
            correctIndex: 0,
            explanation: 'Chính xác! Trong từ "receipt", phụ âm "p" là âm câm, phát âm chuẩn là /rɪˈsiːt/.',
          },
        ],
      },
      {
        id: 'lesson-1-3',
        courseId: 'course-1',
        title: 'Bài 3: Hỏi đường & Định hướng nơi công cộng',
        duration: '10 phút',
        description: 'Hỏi và chỉ phương hướng, tìm ga tàu điện ngầm hoặc địa điểm du lịch.',
        xpReward: 30,
        dialogue: [
          {
            speaker: 'Tourist',
            avatar: '🗺️',
            en: 'Excuse me, could you tell me how to get to the Central Station?',
            vi: 'Xin lỗi, bạn có thể chỉ cho tôi đường đến Nhà ga Trung tâm không?',
          },
          {
            speaker: 'Local',
            avatar: '🚶',
            en: 'Go straight for two blocks, then turn left at the traffic light.',
            vi: 'Đi thẳng qua hai dãy nhà, sau đó rẽ trái ở cột đèn giao thông.',
          },
        ],
        vocabulary: [
          {
            id: 'v-108',
            word: 'intersection',
            ipa: '/ˌɪntərˈsekʃn/',
            partOfSpeech: 'noun',
            vietnamese: 'ngã tư, giao lộ',
            exampleEn: 'Turn right at the next intersection.',
            exampleVi: 'Rẽ phải ở ngã tư tiếp theo.',
            topic: 'Du lịch & Định hướng',
          },
          {
            id: 'v-109',
            word: 'straight',
            ipa: '/streɪt/',
            partOfSpeech: 'adverb',
            vietnamese: 'thẳng, thẳng phía trước',
            exampleEn: 'Go straight until you see the bank.',
            exampleVi: 'Đi thẳng cho đến khi bạn nhìn thấy ngân hàng.',
            topic: 'Du lịch & Định hướng',
          },
        ],
        quiz: [
          {
            id: 1,
            question: '"Go straight ahead" có nghĩa là gì?',
            options: [
              'Rẽ sang bên phải',
              'Quay đầu lại',
              'Đi thẳng về phía trước',
              'Dừng lại ngay',
            ],
            correctIndex: 2,
            explanation: '"Go straight ahead" có nghĩa là đi thẳng về phía trước.',
          },
        ],
      },
    ],
  },
  {
    id: 'course-2',
    title: 'Tiếng Anh công sở',
    englishTitle: 'Business English Essentials',
    description: 'Viết email, thảo luận công việc và tham gia cuộc họp chuyên nghiệp',
    icon: '💼',
    level: 'Intermediate (B1 - B2)',
    color: 'purple',
    totalLessons: 1,
    trialAvailable: true,
    lessons: [
      {
        id: 'lesson-2-1',
        courseId: 'course-2',
        title: 'Bài 1: Viết email công việc chuẩn mực',
        duration: '15 phút',
        description: 'Cách mở đầu, diễn đạt lịch sự và kết thúc email chuyên nghiệp bằng tiếng Anh.',
        xpReward: 40,
        dialogue: [
          {
            speaker: 'Manager',
            avatar: '👩‍💼',
            en: 'Dear Team, please find the quarterly report attached below.',
            vi: 'Kính gửi cả nhóm, vui lòng xem báo cáo quý được đính kèm bên dưới.',
          },
          {
            speaker: 'Colleague',
            avatar: '👨‍💼',
            en: 'Thank you. I will review it and follow up by the end of the day.',
            vi: 'Cảm ơn bạn. Tôi sẽ xem xét và phản hồi trước cuối ngày.',
          },
        ],
        vocabulary: [
          {
            id: 'v-201',
            word: 'deadline',
            ipa: '/ˈdedlaɪn/',
            partOfSpeech: 'noun',
            vietnamese: 'hạn chót, thời hạn nộp',
            exampleEn: 'We need to meet the deadline by Friday.',
            exampleVi: 'Chúng ta cần hoàn thành trước thời hạn vào thứ Sáu.',
            topic: 'Công sở & Kinh doanh',
          },
          {
            id: 'v-202',
            word: 'follow up',
            ipa: '/ˈfɑːloʊ ʌp/',
            partOfSpeech: 'phrasal verb',
            vietnamese: 'theo dõi tiến độ, phản hồi tiếp',
            exampleEn: 'I will follow up with the client tomorrow morning.',
            exampleVi: 'Tôi sẽ theo dõi và liên hệ lại với khách hàng vào sáng mai.',
            topic: 'Công sở & Kinh doanh',
          },
        ],
        quiz: [
          {
            id: 1,
            question: 'Cụm từ viết tắt phổ biến "ASAP" trong email công việc có nghĩa là gì?',
            options: [
              'As Slow As Possible',
              'As Soon As Possible (Càng sớm càng tốt)',
              'Always Send All Papers',
              'After Some Afternoon Projects',
            ],
            correctIndex: 1,
            explanation: '"ASAP" là viết tắt của "As Soon As Possible" — càng sớm càng tốt.',
          },
        ],
      },
    ],
  },
  {
    id: 'course-3',
    title: 'Từ vựng IELTS Foundation',
    englishTitle: 'IELTS Vocabulary Foundation',
    description: 'Bộ từ vựng học thuật theo chủ đề giúp nâng band điểm IELTS',
    icon: '📚',
    level: 'Advanced (B2 - C1)',
    color: 'emerald',
    totalLessons: 1,
    trialAvailable: true,
    lessons: [
      {
        id: 'lesson-3-1',
        courseId: 'course-3',
        title: 'Bài 1: Môi trường & Đô thị hóa',
        duration: '15 phút',
        description: 'Từ vựng học thuật về biến đổi khí hậu, năng lượng tái tạo và phát triển bền vững.',
        xpReward: 45,
        dialogue: [
          {
            speaker: 'Examiner',
            avatar: '👨‍🏫',
            en: 'What are the main environmental challenges in your country?',
            vi: 'Những thách thức môi trường chính ở đất nước bạn là gì?',
          },
          {
            speaker: 'Candidate',
            avatar: '👩‍🎓',
            en: 'Air pollution and deforestation are two critical issues that require urgent attention.',
            vi: 'Ô nhiễm không khí và nạn phá rừng là hai vấn đề nghiêm trọng cần sự quan tâm khẩn cấp.',
          },
        ],
        vocabulary: [
          {
            id: 'v-301',
            word: 'sustainable',
            ipa: '/səˈsteɪnəbl/',
            partOfSpeech: 'adjective',
            vietnamese: 'bền vững, thân thiện với môi trường',
            exampleEn: 'We must promote sustainable energy sources.',
            exampleVi: 'Chúng ta phải thúc đẩy các nguồn năng lượng bền vững.',
            topic: 'Học thuật IELTS',
          },
          {
            id: 'v-302',
            word: 'deforestation',
            ipa: '/diːˌfɔːrɪˈsteɪʃn/',
            partOfSpeech: 'noun',
            vietnamese: 'nạn chặt phá rừng',
            exampleEn: 'Deforestation causes severe habitat loss for wildlife.',
            exampleVi: 'Chặt phá rừng gây ra sự mất môi trường sống nghiêm trọng cho động vật hoang dã.',
            topic: 'Học thuật IELTS',
          },
        ],
        quiz: [
          {
            id: 1,
            question: 'Từ nào đồng nghĩa với "sustainable development"?',
            options: [
              'Phát triển nóng, không kiểm soát',
              'Phát triển bền vững, lâu dài',
              'Suy thoái kinh tế',
              'Ô nhiễm môi trường',
            ],
            correctIndex: 1,
            explanation: '"Sustainable development" là thuật ngữ chuẩn cho phát triển bền vững.',
          },
        ],
      },
    ],
  },
]

// All vocabularies aggregated for the Vocabulary library page
export const allGuestVocab: VocabWord[] = guestCourses.flatMap((c) =>
  c.lessons.flatMap((l) => l.vocabulary)
)
