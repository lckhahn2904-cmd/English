import type { GrammarLessonDetail } from './types'

export const category6Lessons: GrammarLessonDetail[] = [
  // 28. MODAL VERBS
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    vietnameseTitle: 'Động từ khuyết thiếu',
    category: 'Cấu trúc ngữ pháp mở rộng',
    categoryId: 'extended-grammar',
    level: 'B1–B2',
    summary: 'Động từ bổ trợ diễn tả khả năng, xin phép, nghĩa vụ, lời khuyên và phỏng đoán; cấu trúc Modal Perfect (Modal + have + V3) trong quá khứ.',
    overview: 'Động từ khuyết thiếu (Modal Verbs: can, could, may, might, must, shall, should, will, would) là các trợ động từ đặc biệt dùng để bổ nghĩa cho động từ chính, biểu đạt khả năng (ability), sự cho phép (permission), nghĩa vụ bắt buộc (obligation), lời khuyên (advice), sự cần thiết (necessity) hoặc mức độ chắc chắn/suy đoán (deduction). Chúng không biến đổi theo ngôi và luôn đi cùng động từ nguyên mẫu không "to" (bare infinitive).',
    foundation: 'Modal verbs không thêm -s/-es ở ngôi thứ 3 số ít, không có dạng V-ing hay V-ed. Thể phủ định thêm NOT trực tiếp sau modal verb (cannot/can\'t, must not/mustn\'t). Thể nghi vấn đảo modal verb lên trước chủ ngữ. Phân biệt rõ giữa Must (bắt buộc chủ quan) và Have to (quy định khách quan); Mustn\'t (cấm đoán) và Don\'t have to (không bắt buộc).',
    classification: [
      {
        title: 'Khả năng và Năng lực (Ability)',
        description: 'Can (hiện tại/tổng quát); Could (quá khứ chung chung); Was/Were able to (xoay sở làm được trong tình huống cụ thể quá khứ).'
      },
      {
        title: 'Xin phép và Cho phép (Permission)',
        description: 'Can (thân mật); Could (lịch sự hơn); May (trang trọng nhất).'
      },
      {
        title: 'Bắt buộc và Cần thiết (Obligation & Necessity)',
        description: 'Must (người nói tự thấy bắt buộc); Have to (luật lệ, nội quy khách quan); Mustn\'t (cấm tuyệt đối); Don\'t have to / Needn\'t (không cần thiết).'
      },
      {
        title: 'Lời khuyên và Khuyến nghị (Advice)',
        description: 'Should / Ought to (nên làm); Had better (tốt hơn hết nên làm, cảnh báo nếu không làm sẽ có hậu quả xấu).'
      },
      {
        title: 'Suy đoán quá khứ (Modal Perfect: Modal + have + V3)',
        description: 'Must have V3 (chắc hẳn đã); Can\'t/Couldn\'t have V3 (chắc chắn không thể đã xảy ra); Should have V3 (lẽ ra nên làm mà không làm); Needn\'t have V3 (lẽ ra không cần làm nhưng đã lỡ làm).'
      }
    ],
    formulas: [
      {
        title: 'Hiện tại / Tương lai',
        formula: 'S + Modal Verb + V(bare)',
        note: 'You must submit your report before 5 PM.'
      },
      {
        title: 'Suy đoán đang diễn ra',
        formula: 'S + Modal Verb + be + V-ing',
        note: 'He is not picking up; he must be driving.'
      },
      {
        title: 'Suy đoán / nuối tiếc quá khứ (Modal Perfect)',
        formula: 'S + Modal Verb + have + V3/ed',
        note: 'She looks thrilled; she must have passed the test.'
      },
      {
        title: 'Thể bị động của Modal Verb',
        formula: 'S + Modal Verb + be + V3/ed (Quá khứ: Modal + have been + V3/ed)',
        note: 'Safety helmets must be worn at all times.'
      }
    ],
    usage: [
      {
        context: 'Phân biệt Mustn\'t và Don\'t have to',
        explanation: 'Mustn\'t là cấm đoán hoàn toàn. Don\'t have to là không bắt buộc (thích làm thì làm, không ép).',
        example: {
          english: 'You mustn\'t touch this switch; it is dangerous.',
          vietnamese: 'Bạn tuyệt đối không được chạm vào công tắc này; nó rất nguy hiểm.'
        }
      },
      {
        context: 'Phỏng đoán chắc chắn trong quá khứ',
        explanation: 'Must have + V3 khi có bằng chứng rõ ràng cho thấy hành động đã xảy ra.',
        example: {
          english: 'The grass is completely wet; it must have rained last night.',
          vietnamese: 'Cỏ ướt sũng; đêm qua chắc hẳn trời đã mưa.'
        }
      },
      {
        context: 'Trách móc hoặc hối tiếc',
        explanation: 'Should have + V3 dùng để chỉ trích một hành động đáng lẽ nên làm mà không làm.',
        example: {
          english: 'You should have locked the gate before leaving.',
          vietnamese: 'Lẽ ra bạn phải khóa cổng trước khi rời đi.'
        }
      }
    ],
    examples: [
      {
        english: 'He can speak four languages with native-like fluency.',
        vietnamese: 'Anh ấy có thể nói bốn thứ tiếng với độ lưu loát như người bản xứ.'
      },
      {
        english: 'All visitors have to sign in at the front reception desk.',
        vietnamese: 'Tất cả khách tham quan phải ký tên vào sổ tiếp đón ở bàn lễ tân.'
      },
      {
        english: 'You needn\'t have bought bread; we still have two fresh loaves.',
        vietnamese: 'Bạn lẽ ra không cần mua bánh mì; chúng ta vẫn còn hai ổ bánh tươi.'
      },
      {
        english: 'He can\'t have committed the crime because he was in Tokyo that day.',
        vietnamese: 'Anh ấy không thể nào đã phạm tội vì hôm đó anh ấy đang ở Tokyo.'
      }
    ],
    importantNotes: [
      'Không bao giờ viết "must to go" hay "can to speak" - sau modal verb là Bare Infinitive.',
      'Can không có dạng tương lai; dùng "will be able to" để diễn đạt khả năng trong tương lai.',
      'Must không có dạng quá khứ; dùng "had to" để diễn đạt sự bắt buộc trong quá khứ.',
      'Suy đoán phủ định trong quá khứ luôn dùng "can\'t have V3", tuyệt đối KHÔNG dùng "mustn\'t have V3".'
    ],
    comparison: {
      title: 'So sánh Must và Have to',
      points: [
        {
          concept: 'Must',
          difference: 'Xuất phát từ ý chí chủ quan hoặc cảm xúc của người nói (I must get fit).'
        },
        {
          concept: 'Have to',
          difference: 'Xuất phát từ hoàn cảnh bên ngoài, luật pháp, quy định công ty (I have to wear a suit at work).'
        }
      ]
    },
    communicationApp: {
      situation: 'Nhờ vả lịch sự và đưa ra lời khuyên trong công việc',
      dialogueOrSentences: [
        {
          speaker: 'Alice',
          text: 'Could you possibly review these sales figures before the board meeting?',
          translation: 'Bạn có thể vui lòng xem qua các số liệu bán hàng này trước cuộc họp hội đồng không?'
        },
        {
          speaker: 'Bob',
          text: 'Certainly! You had better double-check the final column; it might have an error.',
          translation: 'Chắc chắn rồi! Tốt hơn hết bạn nên kiểm tra lại cột cuối cùng; nó có thể có lỗi sai.'
        }
      ]
    },
    summaryPoints: [
      'Modal Verbs: Can, could, may, might, must, should, will, would + Bare Infinitive.',
      'Modal Perfect: Must have V3 (chắc đã), Can\'t have V3 (chắc không thể đã), Should have V3 (lẽ ra nên), Needn\'t have V3 (lẽ ra không cần).',
      'Phân biệt cốt lõi: Mustn\'t (cấm) vs Don\'t have to (không bắt buộc).'
    ],
    exercises: [
      {
        id: 'mv-mc-1',
        type: 'multiple-choice',
        prompt: 'The lights are off and their car is gone. They ___ left for their summer vacation.',
        choices: ['must have', 'should have', 'needn\'t have', 'can\'t have'],
        correctAnswers: ['must have'],
        explanation: 'Đèn tắt và xe không còn (bằng chứng rõ) => suy đoán chắc chắn ở quá khứ dùng must have + V3.'
      },
      {
        id: 'mv-mc-2',
        type: 'multiple-choice',
        prompt: 'This is a strictly non-smoking area. You ___ smoke here under any circumstances.',
        choices: ['mustn\'t', 'don\'t have to', 'needn\'t', 'wouldn\'t'],
        correctAnswers: ['mustn\'t'],
        explanation: 'Khu vực cấm hút thuốc tuyệt đối => diễn tả sự cấm đoán dùng mustn\'t.'
      },
      {
        id: 'mv-mc-3',
        type: 'multiple-choice',
        prompt: 'Tomorrow is a national holiday, so all employees ___ go to the office.',
        choices: ['mustn\'t', 'don\'t have to', 'can\'t', 'shouldn\'t'],
        correctAnswers: ['don\'t have to'],
        explanation: 'Ngày nghỉ lễ quốc gia nên nhân viên không bắt buộc phải đến văn phòng => don\'t have to.'
      },
      {
        id: 'mv-mc-4',
        type: 'multiple-choice',
        prompt: 'You ___ brought an umbrella; the weather forecast says it won\'t rain and I have an extra one anyway.',
        choices: ['needn\'t have', 'must have', 'shouldn\'t', 'couldn\'t'],
        correctAnswers: ['needn\'t have'],
        explanation: 'Needn\'t have + V3 diễn tả hành động đã làm trong quá khứ nhưng thực tế là không cần thiết.'
      },
      {
        id: 'mv-mc-5',
        type: 'multiple-choice',
        prompt: 'Peter\'s flight landed two hours ago, so he ___ at his hotel room by now.',
        choices: ['should be', 'can have been', 'would have', 'must to be'],
        correctAnswers: ['should be'],
        explanation: 'Should be dùng để dự đoán điều có khả năng lớn đang diễn ra theo đúng lịch trình bình thường.'
      },
      {
        id: 'mv-fb-1',
        type: 'fill-blank',
        prompt: 'You look utterly exhausted. You had better ___ (take) a short nap before the presentation.',
        correctAnswers: ['take'],
        explanation: 'Cấu trúc had better + V(bare) mang nghĩa khuyên nhủ mạnh mẽ.',
        hint: 'Dùng dạng nguyên mẫu của take sau had better.'
      },
      {
        id: 'mv-fb-2',
        type: 'fill-blank',
        prompt: 'He was so ill yesterday that he was not ___ (able) to attend the crucial board meeting.',
        correctAnswers: ['able'],
        explanation: 'Cấu trúc diễn tả khả năng trong một tình huống cụ thể quá khứ: was/were not able to + V.',
        hint: 'Điền tính từ able vào cấu trúc was not ... to.'
      },
      {
        id: 'mv-fb-3',
        type: 'fill-blank',
        prompt: 'Why didn\'t you inform me? You should ___ (tell) me earlier so I could prepare.',
        correctAnswers: ['have told'],
        explanation: 'Should have + V3 trách móc việc trong quá khứ đáng lẽ nên làm mà không làm.',
        hint: 'Chia cấu trúc hoàn thành: have + V3 của tell.'
      },
      {
        id: 'mv-fb-4',
        type: 'fill-blank',
        prompt: 'The museum admission is free today, so we do not ___ (have) to buy any tickets.',
        correctAnswers: ['have'],
        explanation: 'Phủ định của have to ở hiện tại: do not have to + V.',
        hint: 'Điền dạng nguyên mẫu của have.'
      },
      {
        id: 'mv-fb-5',
        type: 'fill-blank',
        prompt: 'Anna has lived in Tokyo for 10 years; she ___ (must) speak Japanese very fluently.',
        correctAnswers: ['must'],
        explanation: 'Suy đoán chắc chắn ở hiện tại dựa trên dữ kiện sống 10 năm: must + V(bare).',
        hint: 'Dùng động từ khuyết thiếu suy đoán must.'
      },
      {
        id: 'mv-cm-1',
        type: 'correct-mistake',
        prompt: 'She must to submit her scholarship application before the deadline tomorrow.',
        correctAnswers: ['must submit'],
        explanation: 'Sau modal verb must là động từ nguyên mẫu không to (bare infinitive) => must submit.',
        hint: 'Bỏ "to" sau động từ khuyết thiếu.'
      },
      {
        id: 'mv-cm-2',
        type: 'correct-mistake',
        prompt: 'He can\'t has finished that huge novel in only one single afternoon.',
        correctAnswers: ['have finished'],
        explanation: 'Trong Modal Perfect, sau can\'t luôn là dạng nguyên mẫu "have", không bao giờ dùng "has".',
        hint: 'Sửa "has" thành "have".'
      },
      {
        id: 'mv-cm-3',
        type: 'correct-mistake',
        prompt: 'You had not better walk alone in this deserted alley late at night.',
        correctAnswers: ['had better not'],
        explanation: 'Dạng phủ định chuẩn của cụm had better là "had better not + V".',
        hint: 'Đổi trật tự "not better" thành "better not".'
      },
      {
        id: 'mv-cm-4',
        type: 'correct-mistake',
        prompt: 'You mustn\'t pay for the dessert because it is included as a complimentary gift.',
        correctAnswers: ['don\'t have to', 'needn\'t'],
        explanation: 'Món tráng miệng được tặng miễn phí thì bạn "không cần phải trả tiền" (don\'t have to pay), không phải hành vi cấm đoán (mustn\'t).',
        hint: 'Thay "mustn\'t" bằng "don\'t have to".'
      },
      {
        id: 'mv-cm-5',
        type: 'correct-mistake',
        prompt: 'They didn\'t could reach the mountain summit yesterday due to the blizzard.',
        correctAnswers: ['could not', 'couldn\'t', 'were not able to'],
        explanation: 'Không dùng trợ động từ "didn\'t" với modal verb "could"; dùng "could not" hoặc "were not able to".',
        hint: 'Sửa "didn\'t could" thành "could not" hoặc "were not able to".'
      },
      {
        id: 'mv-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng "must have": "I am certain that David forgot about the team meeting."',
        correctAnswers: ['David must have forgotten about the team meeting.'],
        explanation: 'Cấu trúc suy đoán chắc chắn quá khứ: S + must have + V3.',
        hint: 'David must have forgotten...'
      },
      {
        id: 'mv-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng "should have": "It was a mistake for you not to listen to your doctor\'s advice."',
        correctAnswers: ['You should have listened to your doctor\'s advice.'],
        explanation: 'Lời khuyên/hối tiếc muộn màng trong quá khứ: S + should have + V3.',
        hint: 'You should have listened...'
      },
      {
        id: 'mv-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng "can\'t have": "It is impossible that Mary stole the money because she was abroad."',
        correctAnswers: ['Mary can\'t have stolen the money because she was abroad.'],
        explanation: 'Suy đoán phủ định chắc chắn quá khứ: S + can\'t have + V3.',
        hint: 'Mary can\'t have stolen...'
      },
      {
        id: 'mv-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu dùng "have to": "Wearing safety goggles is mandatory for all lab technicians."',
        correctAnswers: ['All lab technicians have to wear safety goggles.'],
        explanation: 'Mandatory (bắt buộc theo quy định) tương đương với have to + V(bare).',
        hint: 'All lab technicians have to wear...'
      },
      {
        id: 'mv-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng "needn\'t have": "You bought more bread, but we already had plenty at home."',
        correctAnswers: ['You needn\'t have bought more bread because we already had plenty at home.', 'You needn\'t have bought more bread.'],
        explanation: 'Needn\'t have + V3 diễn tả hành động đã làm một việc không cần thiết.',
        hint: 'You needn\'t have bought more bread...'
      }
    ]
  },

  // 29. GERUNDS & INFINITIVES
  {
    id: 'gerunds-infinitives',
    title: 'Gerunds & Infinitives',
    vietnameseTitle: 'Danh động từ và động từ nguyên mẫu',
    category: 'Cấu trúc ngữ pháp mở rộng',
    categoryId: 'extended-grammar',
    level: 'B1–B2',
    summary: 'Cách dùng Danh động từ (V-ing), Động từ nguyên mẫu có to (To-V) và không to (Bare V); các động từ đổi nghĩa tùy theo dạng thức đi kèm.',
    overview: 'Trong tiếng Anh, khi một động từ đi sau một động từ khác hoặc đóng vai trò như danh từ, nó phải biến đổi thành Danh động từ (Gerund - V-ing) hoặc Động từ nguyên mẫu (To-Infinitive hoặc Bare Infinitive). Việc chọn dạng thức nào phụ thuộc vào bản chất của động từ đứng trước, giới từ, tính từ hoặc mục đích diễn đạt của câu.',
    foundation: 'Danh động từ (Gerund - V-ing) mang tính chất của cả danh từ lẫn động từ, có thể làm chủ ngữ, tân ngữ, hoặc đứng sau giới từ. Động từ nguyên mẫu có to (To-Infinitive) thường chỉ mục đích hoặc hành động hướng tới tương lai. Bare Infinitive dùng sau modal verbs, let, make, have và động từ tri giác khi chứng kiến toàn bộ sự việc.',
    classification: [
      {
        title: 'Động từ chỉ đi với Gerund (V-ing)',
        description: 'Enjoy, avoid, admit, deny, consider, mind, postpone, practice, suggest, risk, appreciate, finish, keep (on)...'
      },
      {
        title: 'Động từ chỉ đi với To-Infinitive (To-V)',
        description: 'Decide, hope, plan, promise, refuse, agree, manage, afford, offer, expect, wish, intend, threaten...'
      },
      {
        title: 'Động từ đổi nghĩa rõ rệt giữa V-ing và To-V',
        description: 'Remember, forget, regret, stop, try, mean, need thay đổi bản chất về thời gian, mục đích hoặc tính chủ động/bị động.'
      },
      {
        title: 'Gerund đứng sau Giới từ và Cụm từ cố định',
        description: 'Bất kỳ động từ nào đứng sau giới từ (in, on, at, without, before, after) đều phải ở dạng V-ing. Chú ý các cụm có to là giới từ: look forward to, be used to, get used to, object to...'
      }
    ],
    formulas: [
      {
        title: 'Gerund làm chủ ngữ',
        formula: 'V-ing + V(số ít) + O/C',
        note: 'Learning a foreign language requires consistent dedication.'
      },
      {
        title: 'To-Infinitive chỉ mục đích',
        formula: 'S + V + to-V (hoặc in order to / so as to + V)',
        note: 'He arrived early to secure a front-row seat.'
      },
      {
        title: 'Cấu trúc tính từ với To-V',
        formula: 'It + be + Adj + (for sb) + to-V',
        note: 'It is essential for developers to write automated tests.'
      },
      {
        title: 'Bị động của Gerund và Infinitive',
        formula: 'Gerund: being + V3\nInfinitive: to be + V3',
        note: 'He hates being interrupted. / She expects to be promoted.'
      }
    ],
    usage: [
      {
        context: 'Phân biệt Stop V-ing và Stop to-V',
        explanation: 'Stop + V-ing là từ bỏ, ngừng hẳn việc đang làm. Stop + To-V là dừng việc đang làm lại để bắt đầu một việc khác.',
        example: {
          english: 'He stopped smoking three years ago. On the way home, he stopped to buy flowers.',
          vietnamese: 'Anh ấy đã cai thuốc 3 năm trước. Trên đường về nhà, anh ấy dừng lại để mua hoa.'
        }
      },
      {
        context: 'Phân biệt Remember V-ing và Remember to-V',
        explanation: 'Remember + V-ing: nhớ đã làm gì trong quá khứ. Remember + To-V: nhớ phải làm gì trong tương lai.',
        example: {
          english: 'I remember locking the door. Please remember to lock the door.',
          vietnamese: 'Tôi nhớ là mình đã khóa cửa rồi. Hãy nhớ khóa cửa nhé.'
        }
      },
      {
        context: 'Cấu trúc bị động với Need',
        explanation: 'S(vật) + need + V-ing có nghĩa bị động tương đương với need + to be + V3.',
        example: {
          english: 'The carpet needs cleaning (= needs to be cleaned).',
          vietnamese: 'Tấm thảm cần được giặt sạch.'
        }
      }
    ],
    examples: [
      {
        english: 'She enjoys reading historical novels by the fireplace.',
        vietnamese: 'Cô ấy thích đọc tiểu thuyết lịch sử bên lò sưởi.'
      },
      {
        english: 'They decided to postpone the launch date until next quarter.',
        vietnamese: 'Họ quyết định hoãn ngày ra mắt cho đến quý sau.'
      },
      {
        english: 'I will never forget visiting the Grand Canyon for the first time.',
        vietnamese: 'Tôi sẽ không bao giờ quên lần đầu tiên đến thăm Grand Canyon.'
      },
      {
        english: 'We are looking forward to hearing from you soon.',
        vietnamese: 'Chúng tôi rất mong sớm nhận được phản hồi từ bạn.'
      }
    ],
    importantNotes: [
      'Cảnh giác với "to" là giới từ: "look forward to", "be used to", "object to" đều đi với V-ing, KHÔNG đi với V(bare).',
      'Động từ sai khiến: Make / Let + O + V(bare) (chủ động). Khi bị động: Be made + to-V (He was made to clean the room).',
      'Prefer: S + prefer + V-ing + TO + V-ing (Thích việc này hơn việc kia).',
      'Would rather: S + would rather + V(bare) + THAN + V(bare).'
    ],
    comparison: {
      title: 'So sánh Try to V và Try V-ing',
      points: [
        {
          concept: 'Try to V',
          difference: 'Nỗ lực hết sức để vượt qua một thử thách khó khăn (He tried to lift the rock).'
        },
        {
          concept: 'Try V-ing',
          difference: 'Thử nghiệm một phương pháp, giải pháp xem kết quả ra sao (Try restarting your phone).'
        }
      ]
    },
    communicationApp: {
      situation: 'Giao tiếp công sở và đàm phán lịch sự',
      dialogueOrSentences: [
        {
          speaker: 'HR Manager',
          text: 'Would you mind submitting your certificates before Friday?',
          translation: 'Bạn có phiền nộp các chứng chỉ của mình trước thứ Sáu không?'
        },
        {
          speaker: 'Candidate',
          text: 'Not at all! I\'m looking forward to joining the engineering team.',
          translation: 'Không có gì phiền cả! Tôi rất mong được gia nhập đội ngũ kỹ thuật.'
        }
      ]
    },
    summaryPoints: [
      'Gerund (V-ing): Làm chủ ngữ, đứng sau giới từ, đi sau enjoy, avoid, suggest, mind...',
      'To-Infinitive: Chỉ mục đích, đi sau tính từ và các động từ decide, hope, promise, refuse...',
      'Bare Infinitive: Đi sau modal verbs, let, make, have, see/hear (chứng kiến toàn bộ).',
      'Đổi nghĩa quan trọng: Remember, Forget, Stop, Try, Regret, Need.'
    ],
    exercises: [
      {
        id: 'gi-mc-1',
        type: 'multiple-choice',
        prompt: 'My manager suggested ___ the team meeting until next Tuesday due to bad weather.',
        choices: ['postponing', 'to postpone', 'postpone', 'to be postponed'],
        correctAnswers: ['postponing'],
        explanation: 'Động từ suggest đi kèm trực tiếp với danh động từ (V-ing) => postponing.'
      },
      {
        id: 'gi-mc-2',
        type: 'multiple-choice',
        prompt: 'We cannot afford ___ on an expensive overseas vacation this year.',
        choices: ['to go', 'going', 'go', 'gone'],
        correctAnswers: ['to go'],
        explanation: 'Cấu trúc afford + to-V: có đủ khả năng tài chính để làm gì => to go.'
      },
      {
        id: 'gi-mc-3',
        type: 'multiple-choice',
        prompt: 'I will never forget ___ the Northern Lights in Norway for the first time; it was breathtaking.',
        choices: ['seeing', 'to see', 'see', 'saw'],
        correctAnswers: ['seeing'],
        explanation: 'Forget + V-ing diễn tả việc quên một kỷ niệm đã xảy ra trong quá khứ => seeing.'
      },
      {
        id: 'gi-mc-4',
        type: 'multiple-choice',
        prompt: 'My grandparents are really looking forward to ___ their grandchildren this summer.',
        choices: ['visiting', 'visit', 'to visit', 'visited'],
        correctAnswers: ['visiting'],
        explanation: 'Trong cụm look forward to, từ "to" là giới từ nên theo sau bắt buộc là V-ing => visiting.'
      },
      {
        id: 'gi-mc-5',
        type: 'multiple-choice',
        prompt: 'The strict teacher made all the students ___ their mobile phones inside their lockers.',
        choices: ['put', 'to put', 'putting', 'puts'],
        correctAnswers: ['put'],
        explanation: 'Cấu trúc sai khiến: make + someone + V(bare) => put.'
      },
      {
        id: 'gi-fb-1',
        type: 'fill-blank',
        prompt: 'Do you mind ___ (open) the window? It is getting quite warm in the room.',
        correctAnswers: ['opening'],
        explanation: 'Cấu trúc lịch sự Do/Would you mind + V-ing => opening.',
        hint: 'Chia dạng V-ing của open.'
      },
      {
        id: 'gi-fb-2',
        type: 'fill-blank',
        prompt: 'The living room carpet is filthy; it desperately needs ___ (clean).',
        correctAnswers: ['cleaning'],
        explanation: 'Chủ ngữ là vật chịu tác động đi với need + V-ing mang nghĩa bị động => cleaning.',
        hint: 'Dạng V-ing mang nghĩa bị động với need.'
      },
      {
        id: 'gi-fb-3',
        type: 'fill-blank',
        prompt: 'She refused ___ (accept) any monetary compensation for her volunteer work.',
        correctAnswers: ['to accept'],
        explanation: 'Động từ refuse luôn đi với động từ nguyên mẫu có to: refuse + to-V.',
        hint: 'Dạng nguyên mẫu có to của accept.'
      },
      {
        id: 'gi-fb-4',
        type: 'fill-blank',
        prompt: 'He practiced speaking English daily in order ___ (improve) his pronunciation.',
        correctAnswers: ['to improve'],
        explanation: 'Cụm từ chỉ mục đích in order to + V(bare) => to improve.',
        hint: 'Điền to-V chỉ mục đích sau in order.'
      },
      {
        id: 'gi-fb-5',
        type: 'fill-blank',
        prompt: 'Instead of ___ (complain) about the problem, why don\'t we brainstorm a viable solution?',
        correctAnswers: ['complaining'],
        explanation: 'Sau cụm giới từ "instead of" động từ luôn ở dạng V-ing => complaining.',
        hint: 'Thêm đuôi -ing vào complain.'
      },
      {
        id: 'gi-cm-1',
        type: 'correct-mistake',
        prompt: 'He promised returning the borrowed reference book to the library by Friday.',
        correctAnswers: ['to return'],
        explanation: 'Promise đòi hỏi động từ nguyên mẫu có to theo sau: promise to return.',
        hint: 'Sửa "returning" thành "to return".'
      },
      {
        id: 'gi-cm-2',
        type: 'correct-mistake',
        prompt: 'I am used to wake up at 5 AM every morning because I have an early shift.',
        correctAnswers: ['waking up'],
        explanation: 'Cấu trúc "be used to + V-ing" chỉ thói quen đã quen ở hiện tại => waking up.',
        hint: 'Sửa "wake up" thành "waking up".'
      },
      {
        id: 'gi-cm-3',
        type: 'correct-mistake',
        prompt: 'The heavy blizzard prevented us to reach the mountain peak before sunset.',
        correctAnswers: ['from reaching'],
        explanation: 'Cấu trúc prevent someone from doing something => from reaching.',
        hint: 'Sửa "to reach" thành "from reaching".'
      },
      {
        id: 'gi-cm-4',
        type: 'correct-mistake',
        prompt: 'She stopped to eat fast food because her doctor warned her about cholesterol levels.',
        correctAnswers: ['eating'],
        explanation: 'Ngừng hẳn một thói quen (từ bỏ thức ăn nhanh) phải dùng stop + V-ing (stop eating).',
        hint: 'Sửa "to eat" thành "eating".'
      },
      {
        id: 'gi-cm-5',
        type: 'correct-mistake',
        prompt: 'The coach let the exhausted players to rest for ten minutes after the drill.',
        correctAnswers: ['rest'],
        explanation: 'Sau let + object, động từ theo sau là Bare Infinitive không "to": let them rest.',
        hint: 'Bỏ "to" trước "rest".'
      },
      {
        id: 'gi-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng "prefer ... to ...": "I like reading paperback books more than watching movies."',
        correctAnswers: ['I prefer reading paperback books to watching movies.'],
        explanation: 'Cấu trúc so sánh sở thích: prefer + V-ing + TO + V-ing.',
        hint: 'I prefer reading paperback books to...'
      },
      {
        id: 'gi-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng cấu trúc chủ ngữ giả "It is + Adj + to-V": "Mastering English grammar requires a lot of patient effort."',
        correctAnswers: ['It requires a lot of patient effort to master English grammar.', 'It is necessary to put in a lot of patient effort to master English grammar.'],
        explanation: 'Chuyển chủ ngữ từ V-ing sang cấu trúc chủ ngữ giả với to-infinitive.',
        hint: 'It requires a lot of patient effort to master...'
      },
      {
        id: 'gi-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng "remember to": "Don\'t forget to submit your assignment before midnight."',
        correctAnswers: ['Remember to submit your assignment before midnight.'],
        explanation: 'Don\'t forget to do sth tương đương với câu mệnh lệnh Remember to do sth.',
        hint: 'Remember to submit...'
      },
      {
        id: 'gi-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng cấu trúc bị động "needs + V-ing": "Someone needs to repair the broken roof immediately."',
        correctAnswers: ['The broken roof needs repairing immediately.'],
        explanation: 'Need to be repaired chuyển thành needs repairing (dạng bị động với Gerund).',
        hint: 'The broken roof needs repairing...'
      },
      {
        id: 'gi-sc-5',
        type: 'sentence-construction',
        prompt: 'Kết hợp hai câu sau dùng cụm chỉ mục đích "in order to": "She woke up early. She wanted to catch the first express train."',
        correctAnswers: ['She woke up early in order to catch the first express train.'],
        explanation: 'Dùng in order to + V(bare) để nối hai mệnh đề chỉ mục đích của cùng một chủ ngữ.',
        hint: 'She woke up early in order to catch...'
      }
    ]
  },

  // 30. ELLIPSIS & SUBSTITUTION
  {
    id: 'ellipsis-substitution',
    title: 'Ellipsis & Substitution',
    vietnameseTitle: 'Lược bỏ và thay thế',
    category: 'Cấu trúc ngữ pháp mở rộng',
    categoryId: 'extended-grammar',
    level: 'B2–C1',
    summary: 'Kỹ thuật lược bỏ thành phần trùng lặp (Ellipsis) và dùng các từ thay thế (Substitution: one/ones, do so, so/not) giúp câu văn cô đọng, tự nhiên.',
    overview: 'Lược bỏ (Ellipsis) và Thay thế (Substitution) là hai phương tiện liên kết ngữ pháp thiết yếu giúp người nói và người viết tránh sự lặp lại đơn điệu của từ ngữ, cụm từ hoặc mệnh đề đã được nhắc đến trước đó, làm cho câu văn súc tích, mạch lạc và tự nhiên như phong cách của người bản ngữ.',
    foundation: 'Lược bỏ (Ellipsis) là hiện tượng tỉnh lược từ ngữ khi ngữ cảnh đã hoàn toàn rõ ràng. Thay thế (Substitution) là việc sử dụng các từ thay thế (pro-forms như one, ones, so, not, do so) để đại diện cho danh từ, động từ hoặc cả một mệnh đề phía trước. Nguyên tắc then chốt: việc lược bỏ hoặc thay thế không được làm câu trở nên mơ hồ, khó hiểu.',
    classification: [
      {
        title: 'Lược bỏ trong câu ghép và câu phức',
        description: 'Lược bỏ chủ ngữ giống nhau sau liên từ (and, but, or), lược bỏ trợ động từ, hoặc lược bỏ mệnh đề sau liên từ so sánh (as, than).'
      },
      {
        title: 'Lược bỏ với To-Infinitive (Reduced To-Infinitive)',
        description: 'Khi động từ đã được nhắc trước đó, ta chỉ giữ lại từ "to" và lược bỏ toàn bộ phần vị ngữ phía sau.'
      },
      {
        title: 'Thay thế danh từ bằng One / Ones',
        description: 'One thay thế cho danh từ đếm được số ít; Ones thay thế cho danh từ đếm được số nhiều. Tuyệt đối KHÔNG dùng one/ones cho danh từ không đếm được.'
      },
      {
        title: 'Thay thế mệnh đề bằng So / Not',
        description: 'Dùng "so" (khẳng định) và "not" (phủ định) sau các động từ bày tỏ quan điểm: think, believe, expect, hope, suppose, be afraid.'
      },
      {
        title: 'Thay thế cụm động từ bằng "Do so", "Do that", "Do it"',
        description: 'Dùng để thay thế cho một hành động có chủ đích vừa được nhắc đến trong văn phong trang trọng.'
      }
    ],
    formulas: [
      {
        title: 'Lược bỏ To-Infinitive',
        formula: 'S + want / hope / would like + to',
        note: 'Would you like to join us? - I would love to.'
      },
      {
        title: 'Thay thế danh từ',
        formula: 'The / This / That + Adj + one(s)',
        note: 'Which shoes do you like? - The black ones.'
      },
      {
        title: 'Đồng tình ngắn gọn',
        formula: 'So + Aux + S (Khẳng định)\nNeither + Aux + S (Phủ định)',
        note: 'I like classical music. - So do I. / I cannot swim. - Neither can I.'
      },
      {
        title: 'Thay thế mệnh đề với So / Not',
        formula: 'S + think / believe / hope + so / not',
        note: 'Will it rain? - I hope not. / I think so.'
      }
    ],
    usage: [
      {
        context: 'Phân biệt One và It',
        explanation: 'It chỉ chính xác vật cụ thể đã nêu. One chỉ một vật bất kỳ cùng chủng loại.',
        example: {
          english: 'I lost my watch and I am looking for it. / I lost my watch, so I bought a new one.',
          vietnamese: 'Tôi làm mất đồng hồ và đang tìm nó (vật cũ). / Tôi làm mất đồng hồ nên đã mua cái mới (cái khác cùng loại).'
        }
      },
      {
        context: 'Phủ định với Think và Hope',
        explanation: 'Với think: phủ định ở động từ chính (I don\'t think so). Với hope: phủ định ở từ thay thế (I hope not).',
        example: {
          english: 'Will they lose? - I hope not. (Không nói: I don\'t hope so).',
          vietnamese: 'Họ sẽ thua ư? - Tôi hy vọng là không.'
        }
      },
      {
        context: 'Danh từ không đếm được',
        explanation: 'Không dùng one/ones cho danh từ không đếm được; hãy lặp lại danh từ hoặc dùng some.',
        example: {
          english: 'Do you want warm milk or cold milk? (Không nói: cold one).',
          vietnamese: 'Bạn muốn sữa nóng hay sữa lạnh?'
        }
      }
    ],
    examples: [
      {
        english: 'I prefer the blue shirt to the red one.',
        vietnamese: 'Tôi thích chiếc áo sơ mi màu xanh hơn chiếc màu đỏ.'
      },
      {
        english: 'He asked his assistant to file the taxes, and she did so immediately.',
        vietnamese: 'Anh ấy yêu cầu trợ lý nộp thuế, và cô ấy đã làm như vậy ngay lập tức.'
      },
      {
        english: 'Are you going to attend the seminar? - I\'d love to, but I have a prior commitment.',
        vietnamese: 'Bạn có tham dự hội thảo không? - Tôi rất muốn, nhưng tôi có lịch hẹn trước rồi.'
      },
      {
        english: 'Emma didn\'t like the dessert, and neither did Liam.',
        vietnamese: 'Emma không thích món tráng miệng, và Liam cũng không.'
      }
    ],
    importantNotes: [
      'Không dùng tính từ sở hữu đứng một mình với one (nói "This is mine", không nói "This is my one").',
      'Nếu có tính từ bổ nghĩa ở giữa thì được phép dùng: "My new one is much faster."',
      'Tránh lược bỏ quá mức khiến người nghe không hiểu chủ thể đang nói đến là ai/cái gì.',
      '"Do so" mang tính trang trọng và thường dùng trong văn viết hơn là "do it" hoặc "do that".'
    ],
    comparison: {
      title: 'So sánh I don\'t think so và I hope not',
      points: [
        {
          concept: 'I don\'t think so',
          difference: 'Phủ định chuyển lên động từ think (Tôi không nghĩ như vậy).'
        },
        {
          concept: 'I hope not',
          difference: 'Phủ định nằm ở từ thay thế not (Tôi hy vọng điều đó không xảy ra; không dùng I don\'t hope so).'
        }
      ]
    },
    communicationApp: {
      situation: 'Trả lời nhanh và tự nhiên trong hội thoại thường nhật',
      dialogueOrSentences: [
        {
          speaker: 'David',
          text: 'Do you think our train will be delayed because of the heavy snow?',
          translation: 'Bạn có nghĩ tàu của chúng ta sẽ bị hoãn do tuyết rơi dày không?'
        },
        {
          speaker: 'Sarah',
          text: 'I certainly hope not! But if it is, we\'ll just take the later one.',
          translation: 'Tôi chắc chắn hy vọng là không! Nhưng nếu bị hoãn, chúng ta sẽ bắt chuyến sau.'
        }
      ]
    },
    summaryPoints: [
      'Ellipsis: Lược bỏ chủ ngữ, động từ hoặc phần sau "to" khi ngữ cảnh đã rõ.',
      'Substitution One/Ones: Thay thế cho danh từ đếm được số ít/số nhiều.',
      'Substitution So/Not: Thay thế cho cả mệnh đề sau think, hope, believe, suppose...',
      'Substitution Do so: Thay thế cho cụm động từ trong văn phong trang trọng.'
    ],
    exercises: [
      {
        id: 'es-mc-1',
        type: 'multiple-choice',
        prompt: 'I prefer the blue shirt to the red ___.',
        choices: ['one', 'it', 'ones', 'that'],
        correctAnswers: ['one'],
        explanation: 'Shirt là danh từ đếm được số ít, từ thay thế phù hợp sau tính từ red là "one".'
      },
      {
        id: 'es-mc-2',
        type: 'multiple-choice',
        prompt: 'These leather boots are worn out. I urgently need some new ___.',
        choices: ['ones', 'one', 'them', 'boots ones'],
        correctAnswers: ['ones'],
        explanation: 'Boots là danh từ đếm được số nhiều, từ thay thế phù hợp là "ones".'
      },
      {
        id: 'es-mc-3',
        type: 'multiple-choice',
        prompt: '"Do you think the flight will arrive on schedule?" - "I certainly hope ___."',
        choices: ['so', 'it', 'that', 'one'],
        correctAnswers: ['so'],
        explanation: 'Sau động từ hope, dùng "so" để thay thế cho cả một mệnh đề khẳng định phía trước ("hope so").'
      },
      {
        id: 'es-mc-4',
        type: 'multiple-choice',
        prompt: 'She can speak fluent German, and her younger brother can, ___.',
        choices: ['too', 'either', 'neither', 'so'],
        correctAnswers: ['too'],
        explanation: 'Trong câu khẳng định, khi đồng ý ta dùng "too" ở cuối mệnh đề.'
      },
      {
        id: 'es-mc-5',
        type: 'multiple-choice',
        prompt: 'He asked his assistant to file the tax documents, and she ___ immediately.',
        choices: ['did so', 'made so', 'did it so', 'did one'],
        correctAnswers: ['did so'],
        explanation: 'Cụm did so thay thế trang trọng cho cụm động từ chỉ hành động có chủ đích ("filed the tax documents").'
      },
      {
        id: 'es-fb-1',
        type: 'fill-blank',
        prompt: '"Would you like to join our study group tonight?" - "I would love ___, but I have to babysit."',
        correctAnswers: ['to'],
        explanation: 'Lược bỏ động từ nguyên mẫu (Reduced To-Infinitive), chỉ giữ lại từ "to" sau cụm would love to.',
        hint: 'Chỉ giữ lại "to" sau would love.'
      },
      {
        id: 'es-fb-2',
        type: 'fill-blank',
        prompt: '"Is John going to fail the final examination?" - "I hope ___! He worked very hard."',
        correctAnswers: ['not'],
        explanation: 'Sau động từ hope, ta dùng "not" để thay thế cho mệnh đề phủ định ("hope not").',
        hint: 'Điền từ phủ định sau hope.'
      },
      {
        id: 'es-fb-3',
        type: 'fill-blank',
        prompt: 'I don\'t like sweet coffee, and my sister doesn\'t, ___ .',
        correctAnswers: ['either'],
        explanation: 'Trong câu phủ định, từ "either" đứng ở cuối mệnh đề để thể hiện sự đồng tình phủ định ("cũng không").',
        hint: 'Từ đồng tình cuối câu phủ định.'
      },
      {
        id: 'es-fb-4',
        type: 'fill-blank',
        prompt: 'There are many books on the shelf, but I\'ve only read this ___ .',
        correctAnswers: ['one'],
        explanation: 'Dùng "one" để thay thế cho danh từ số ít "book" đã nêu ở vế trước.',
        hint: 'Đại từ thay thế danh từ đếm được số ít.'
      },
      {
        id: 'es-fb-5',
        type: 'fill-blank',
        prompt: 'Tom won\'t attend the graduation ceremony, and ___ will Jerry.',
        correctAnswers: ['neither'],
        explanation: 'Cấu trúc đồng tình phủ định đứng đầu mệnh đề: Neither + trợ động từ + S.',
        hint: 'Cấu trúc đồng tình phủ định đứng đầu câu.'
      },
      {
        id: 'es-cm-1',
        type: 'correct-mistake',
        prompt: 'Do you prefer sparkling water or still one with your dinner?',
        correctAnswers: ['still water', 'still'],
        explanation: 'Water là danh từ không đếm được nên không dùng đại từ "one" để thay thế; phải nói "still water" hoặc "still".',
        hint: 'Sửa "still one" thành "still water".'
      },
      {
        id: 'es-cm-2',
        type: 'correct-mistake',
        prompt: '"Will our team lose the decisive match?" - "I don\'t hope so, we trained hard."',
        correctAnswers: ['hope not'],
        explanation: 'Với động từ hope, dạng phủ định chuẩn là "I hope not", không dùng "I don\'t hope so".',
        hint: 'Thay "don\'t hope so" bằng "hope not".'
      },
      {
        id: 'es-cm-3',
        type: 'correct-mistake',
        prompt: 'I asked him to apologize to the customer, but he refused to do that it.',
        correctAnswers: ['do so', 'do it'],
        explanation: 'Chỉ dùng "do so" hoặc "do it", không ghép cả that và it lại với nhau.',
        hint: 'Sửa "do that it" thành "do so" hoặc "do it".'
      },
      {
        id: 'es-cm-4',
        type: 'correct-mistake',
        prompt: 'Your apartment is much larger than my one in the city center.',
        correctAnswers: ['mine'],
        explanation: 'Không dùng tính từ sở hữu trực tiếp với one ("my one"); phải dùng đại từ sở hữu "mine".',
        hint: 'Thay "my one" bằng "mine".'
      },
      {
        id: 'es-cm-5',
        type: 'correct-mistake',
        prompt: 'He didn\'t enjoy the movie, and so didn\'t I.',
        correctAnswers: ['neither did I', 'nor did I'],
        explanation: 'Đồng tình phủ định ở đầu vế dùng Neither did I hoặc Nor did I, không dùng so didn\'t I.',
        hint: 'Thay "so didn\'t I" bằng "neither did I".'
      },
      {
        id: 'es-sc-1',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng "one": "I lost my original umbrella, so I had to buy a replacement umbrella."',
        correctAnswers: ['I lost my original umbrella, so I had to buy a replacement one.'],
        explanation: 'Thay thế danh từ đếm được số ít umbrella ở lần nhắc thứ hai bằng đại từ one.',
        hint: 'I lost my original umbrella, so I had to buy a replacement...'
      },
      {
        id: 'es-sc-2',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng kỹ thuật lược bỏ to-infinitive: "You don\'t need to apologize if you don\'t want to apologize."',
        correctAnswers: ['You don\'t need to apologize if you don\'t want to.'],
        explanation: 'Lược bỏ phần vị ngữ trùng lặp sau to: if you don\'t want to.',
        hint: 'You don\'t need to apologize if you don\'t want...'
      },
      {
        id: 'es-sc-3',
        type: 'sentence-construction',
        prompt: 'Viết lại câu trả lời dùng "hope not": "Do you think the flight will be canceled? (No, I hope that the flight will not be canceled.)"',
        correctAnswers: ['I hope not.'],
        explanation: 'Hope not thay thế cho cả mệnh đề phủ định that the flight will not be canceled.',
        hint: 'I hope...'
      },
      {
        id: 'es-sc-4',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng cấu trúc "Neither": "Emma cannot attend the seminar, and Liam cannot attend either."',
        correctAnswers: ['Emma cannot attend the seminar, and neither can Liam.'],
        explanation: 'Cấu trúc đồng tình phủ định rút gọn: and neither + trợ động từ + S.',
        hint: 'Emma cannot attend the seminar, and neither can...'
      },
      {
        id: 'es-sc-5',
        type: 'sentence-construction',
        prompt: 'Viết lại câu sau dùng "did so": "The doctor advised him to stop smoking, and he followed the doctor\'s advice immediately."',
        correctAnswers: ['The doctor advised him to stop smoking, and he did so immediately.'],
        explanation: 'Cụm did so thay thế cho hành động có chủ đích followed the doctor\'s advice.',
        hint: 'The doctor advised him to stop smoking, and he did so...'
      }
    ]
  }
]
