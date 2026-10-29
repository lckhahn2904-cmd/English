export type GrammarSection = '12 thì tiếng Anh' | 'Từ loại' | 'Cấu trúc câu'

export interface GrammarExample {
  english: string
  vietnamese: string
}

export interface GrammarTopic {
  id: string
  title: string
  section: GrammarSection
  level: string
  summary: string
  explanation: string
  structure: string
  usage: string[]
  examples: GrammarExample[]
}

export const grammarTopics: GrammarTopic[] = [
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
  { id: 'mixed-tense-practice', title: 'Bài tập tổng hợp chọn thì và chia động từ', section: '12 thì tiếng Anh', level: 'A1–B2', summary: 'Ôn 12 thì và be going to qua bốn cấp độ luyện tập.', explanation: 'Bài tập tăng dần từ nhận diện cấu trúc đến hội thoại, đoạn văn và tình huống có nhiều mốc thời gian.', structure: 'Chọn thì theo ngữ cảnh; chia động từ đúng dạng và giải thích lựa chọn', usage: ['Ôn kiến thức qua nhiều dạng câu.', 'Luyện dùng thì trong hội thoại và đoạn văn.'], examples: [{ english: 'By the time we arrive, the film will have started.', vietnamese: 'Khi chúng tôi đến, bộ phim sẽ bắt đầu rồi.' }] },

  { id: 'nouns', title: 'Danh từ', section: 'Từ loại', level: 'A1', summary: 'Từ chỉ người, vật, nơi chốn, ý niệm.', explanation: 'Danh từ có thể làm chủ ngữ, tân ngữ hoặc bổ ngữ. Danh từ đếm được có số ít/số nhiều; danh từ không đếm được không dùng trực tiếp với a/an.', structure: 'a/an + danh từ đếm được số ít · số nhiều thường thêm -s/-es · some + danh từ số nhiều/không đếm được', usage: ['Phân biệt danh từ đếm được và không đếm được.', 'Dùng mạo từ và dạng số nhiều phù hợp.'], examples: [{ english: 'There are three books on the table.', vietnamese: 'Có ba quyển sách trên bàn.' }] },
  { id: 'verbs', title: 'Động từ', section: 'Từ loại', level: 'A1', summary: 'Diễn tả hành động hoặc trạng thái.', explanation: 'Động từ chính kết hợp với chủ ngữ và có thể cần tân ngữ. Sau do/does/did, dùng động từ nguyên mẫu.', structure: 'S + V (+ O) · does/did + V nguyên mẫu', usage: ['Chia động từ hòa hợp với chủ ngữ.', 'Nhận biết động từ cần hoặc không cần tân ngữ.'], examples: [{ english: 'My brother plays the guitar.', vietnamese: 'Anh/em trai tôi chơi đàn ghi-ta.' }] },
  { id: 'adjectives', title: 'Tính từ', section: 'Từ loại', level: 'A1', summary: 'Miêu tả đặc điểm của danh từ hoặc chủ ngữ.', explanation: 'Tính từ thường đứng trước danh từ hoặc sau động từ nối như be, seem, look. Tính từ không thêm -s theo danh từ số nhiều.', structure: 'tính từ + danh từ · be/seem/look + tính từ', usage: ['Bổ nghĩa cho danh từ.', 'Đứng sau động từ nối để mô tả chủ ngữ.'], examples: [{ english: 'The room is quiet.', vietnamese: 'Căn phòng yên tĩnh.' }] },
  { id: 'adverbs', title: 'Trạng từ', section: 'Từ loại', level: 'A2', summary: 'Bổ nghĩa cho động từ, tính từ hoặc trạng từ khác.', explanation: 'Nhiều trạng từ chỉ cách thức được tạo bằng adjective + -ly, nhưng có ngoại lệ như fast, well. Vị trí phụ thuộc loại trạng từ và câu.', structure: 'V + trạng từ cách thức · trạng từ tần suất thường đứng trước động từ thường', usage: ['Mô tả cách hành động diễn ra.', 'Nêu tần suất hoặc mức độ.'], examples: [{ english: 'She speaks clearly and listens carefully.', vietnamese: 'Cô ấy nói rõ ràng và lắng nghe cẩn thận.' }] },
  { id: 'pronouns-determiners', title: 'Đại từ và từ hạn định', section: 'Từ loại', level: 'A2', summary: 'Thay thế hoặc xác định danh từ.', explanation: 'Đại từ nhân xưng thay cho danh từ; tính từ sở hữu đứng trước danh từ. This/that/these/those chỉ định vật theo khoảng cách và số lượng.', structure: 'I/me/my · this + danh từ số ít · these + danh từ số nhiều', usage: ['Chọn dạng chủ ngữ hoặc tân ngữ.', 'Dùng từ sở hữu và từ chỉ định đúng với danh từ.'], examples: [{ english: 'These are my notes. You can borrow them.', vietnamese: 'Đây là ghi chú của tôi. Bạn có thể mượn chúng.' }] },
  { id: 'passive-voice', title: 'Câu bị động', section: 'Cấu trúc câu', level: 'B1', summary: 'Nhấn mạnh đối tượng nhận hành động.', explanation: 'Đưa tân ngữ câu chủ động lên làm chủ ngữ; dùng be ở đúng thì và past participle. Tác nhân với by chỉ thêm khi cần.', structure: 'S + be (chia theo thì) + past participle (+ by + tác nhân)', usage: ['Không biết hoặc không cần nêu tác nhân.', 'Muốn nhấn mạnh kết quả hoặc đối tượng chịu tác động.'], examples: [{ english: 'The emails are checked every morning.', vietnamese: 'Email được kiểm tra mỗi buổi sáng.' }] },
  { id: 'conditionals', title: 'Câu điều kiện', section: 'Cấu trúc câu', level: 'B1', summary: 'Nêu điều kiện và kết quả có thể xảy ra.', explanation: 'Câu điều kiện cơ bản gồm mệnh đề if và mệnh đề kết quả. Thì dùng thay đổi theo mức độ thực tế hoặc giả định.', structure: 'Loại 0: If + present, present · Loại 1: If + present, will + V · Loại 2: If + past, would + V', usage: ['Loại 0: sự thật/quy luật.', 'Loại 1: khả năng có thể xảy ra.', 'Loại 2: giả định không thực hoặc khó xảy ra ở hiện tại.'], examples: [{ english: 'If it rains, we will stay inside.', vietnamese: 'Nếu trời mưa, chúng tôi sẽ ở trong nhà.' }] },
  { id: 'relative-clauses', title: 'Mệnh đề quan hệ', section: 'Cấu trúc câu', level: 'B1', summary: 'Bổ sung thông tin cho danh từ.', explanation: 'Who thường thay người, which thay vật, that có thể thay người hoặc vật trong mệnh đề xác định; where chỉ nơi chốn.', structure: 'danh từ + who/which/that/where + mệnh đề', usage: ['Xác định rõ người hoặc vật đang nói đến.', 'Bổ sung thông tin cần thiết cho danh từ.'], examples: [{ english: 'The woman who called you is my manager.', vietnamese: 'Người phụ nữ đã gọi cho bạn là quản lý của tôi.' }] },
  { id: 'comparisons', title: 'So sánh', section: 'Cấu trúc câu', level: 'A2', summary: 'So sánh hơn, nhất và ngang bằng.', explanation: 'Tính từ ngắn thường dùng -er/-est; tính từ dài thường dùng more/most. Một số dạng bất quy tắc như good–better–best.', structure: 'A + be + adj-er + than B · the + adj-est · as + adjective + as', usage: ['So sánh hai người/vật.', 'Nêu đối tượng nổi bật nhất trong nhóm.', 'Diễn tả mức độ ngang bằng.'], examples: [{ english: 'This route is shorter than the other one.', vietnamese: 'Tuyến đường này ngắn hơn tuyến kia.' }] },
  { id: 'common-sentence-patterns', title: 'Cấu trúc câu thông dụng', section: 'Cấu trúc câu', level: 'A1', summary: 'Tạo câu khẳng định, phủ định và câu hỏi cơ bản.', explanation: 'Câu tiếng Anh thường cần chủ ngữ rõ ràng. Với câu hỏi, trợ động từ hoặc be thường đứng trước chủ ngữ.', structure: 'S + V (+ O) · There is/are + danh từ · Do/Does/Did + S + V?', usage: ['Sắp xếp chủ ngữ và động từ.', 'Dùng there is/are để giới thiệu sự tồn tại.', 'Dùng trợ động từ để đặt câu hỏi.'], examples: [{ english: 'There are two cafés near the station.', vietnamese: 'Có hai quán cà phê gần nhà ga.' }] },
]

export const grammarSections: GrammarSection[] = ['12 thì tiếng Anh', 'Từ loại', 'Cấu trúc câu']

export interface GrammarFolderItem {
  title: string
  topicId?: string
}

export interface GrammarFolder {
  id: string
  title: string
  description: string
  items: GrammarFolderItem[]
}

// The folder catalog links to lessons that already exist. Items without a
// topicId are visible in the roadmap but do not pretend to have lesson content.
export const grammarFolders: GrammarFolder[] = [
  {
    id: 'tenses', title: '12 thì tiếng Anh', description: 'Học các mốc hiện tại, quá khứ và tương lai qua bài học chi tiết.',
    items: [
      { title: 'Thì hiện tại đơn', topicId: 'present-simple' }, { title: 'Thì hiện tại tiếp diễn', topicId: 'present-continuous' },
      { title: 'Thì hiện tại hoàn thành', topicId: 'present-perfect' }, { title: 'Thì hiện tại hoàn thành tiếp diễn', topicId: 'present-perfect-continuous' },
      { title: 'Thì quá khứ đơn', topicId: 'past-simple' }, { title: 'Thì quá khứ tiếp diễn', topicId: 'past-continuous' },
      { title: 'Thì quá khứ hoàn thành', topicId: 'past-perfect' }, { title: 'Thì quá khứ hoàn thành tiếp diễn', topicId: 'past-perfect-continuous' },
      { title: 'Thì tương lai đơn', topicId: 'future-simple' }, { title: 'Thì tương lai tiếp diễn', topicId: 'future-continuous' },
      { title: 'Thì tương lai hoàn thành', topicId: 'future-perfect' }, { title: 'Thì tương lai hoàn thành tiếp diễn', topicId: 'future-perfect-continuous' },
      { title: 'Tương lai gần (be going to)', topicId: 'be-going-to' }, { title: 'Phân biệt các thì dễ nhầm lẫn', topicId: 'tense-contrasts' }, { title: 'Bài tập chọn thì và chia động từ', topicId: 'mixed-tense-practice' },
    ],
  },
  {
    id: 'parts-of-speech', title: 'Từ loại', description: 'Nhận biết chức năng của danh từ, động từ và các nhóm từ trong câu.',
    items: [
      { title: 'Danh từ', topicId: 'nouns' }, { title: 'Đại từ và từ hạn định', topicId: 'pronouns-determiners' },
      { title: 'Mạo từ' }, { title: 'Từ chỉ lượng' }, { title: 'Động từ', topicId: 'verbs' },
      { title: 'Tính từ', topicId: 'adjectives' }, { title: 'Trạng từ', topicId: 'adverbs' }, { title: 'Cấu tạo từ (Word Formation)' },
      { title: 'Giới từ' }, { title: 'Động từ khuyết thiếu (Modal Verbs)' }, { title: 'Danh động từ và động từ nguyên mẫu' },
    ],
  },
  {
    id: 'sentence-structure', title: 'Cấu trúc câu', description: 'Từ thành phần câu và trật tự từ đến cách tạo câu rõ ràng, đúng ngữ pháp.',
    items: [
      { title: 'Nền tảng ngữ pháp và động từ' }, { title: 'Câu, chủ ngữ, động từ và các thành phần câu' },
      { title: 'Động từ thường, to be và trợ động từ' }, { title: 'Các dạng động từ: V1, V2, V3, V-ing và to V' },
      { title: 'Các mẫu câu S + V, S + V + O, S + V + C, S + V + O + O, S + V + O + C', topicId: 'common-sentence-patterns' },
      { title: 'Câu đơn, câu ghép, câu phức và câu ghép-phức' }, { title: 'Trật tự từ trong câu' },
      { title: 'Câu khẳng định, phủ định và nghi vấn' }, { title: 'Sự hòa hợp chủ ngữ – động từ' },
      { title: 'Quy tắc chia động từ cơ bản' }, { title: 'Liên từ và cách nối câu' },
    ],
  },
  {
    id: 'special-sentences', title: 'Các dạng câu đặc biệt', description: 'Các cấu trúc diễn đạt quan hệ, giả định và nhấn mạnh ý trong câu.',
    items: [
      { title: 'So sánh cơ bản', topicId: 'comparisons' }, { title: 'So sánh kép và cấu trúc mở rộng' },
      { title: 'Câu bị động', topicId: 'passive-voice' }, { title: 'Câu tường thuật' },
      { title: 'Câu điều kiện loại 0, 1 và 2', topicId: 'conditionals' }, { title: 'Câu điều kiện loại 3 và câu điều kiện hỗn hợp' },
      { title: 'Câu giả định (Subjunctive)' },
    ],
  },
  {
    id: 'clauses', title: 'Mệnh đề', description: 'Tìm hiểu cách mệnh đề bổ nghĩa, làm rõ ý và kết hợp trong câu.',
    items: [
      { title: 'Mệnh đề quan hệ', topicId: 'relative-clauses' }, { title: 'Mệnh đề danh từ' }, { title: 'Mệnh đề trạng ngữ' },
      { title: 'Mệnh đề quan hệ xác định và không xác định' }, { title: 'Đại từ quan hệ và cách sử dụng' },
      { title: 'Rút gọn mệnh đề quan hệ' }, { title: 'Kết hợp các mệnh đề trong câu' },
    ],
  },
  {
    id: 'extended-grammar', title: 'Cấu trúc ngữ pháp mở rộng', description: 'Các cấu trúc nâng cao được chia thành chủ đề riêng để dễ tra cứu.',
    items: [
      { title: 'Câu hỏi đuôi (Tag Questions)' }, { title: 'Câu hỏi gián tiếp (Indirect Questions)' },
      { title: 'Cấu trúc too…to và enough to' }, { title: 'Cấu trúc so…that và such…that' },
      { title: 'Câu đảo ngữ' }, { title: 'Câu nhấn mạnh và cleft sentences' }, { title: 'Phân từ và cấu trúc phân từ' },
      { title: 'Cụm từ cố định và collocations' },
    ],
  },
]
