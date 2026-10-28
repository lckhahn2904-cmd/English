export interface DialogueTurn {
  speaker: string
  role: 'you' | 'partner'
  english: string
  vietnamese: string
}

export interface SpeakingScenario {
  id: string
  title: string
  goal: string
  level: string
  turns: DialogueTurn[]
}

export interface SpeakingCategory {
  id: string
  title: string
  description: string
  scenarios: SpeakingScenario[]
}

export const speakingCategories: SpeakingCategory[] = [
  {
    id: 'daily', title: 'Giao tiếp hàng ngày', description: 'Chào hỏi, làm quen và sắp xếp kế hoạch.', scenarios: [
      { id: 'daily-introduction', title: 'Làm quen với hàng xóm', goal: 'Chào hỏi và hỏi thăm ngắn gọn.', level: 'A1', turns: [
        { speaker: 'Alex', role: 'partner', english: 'Hi, I’m Alex. I just moved in next door.', vietnamese: 'Chào bạn, mình là Alex. Mình vừa chuyển đến nhà bên cạnh.' },
        { speaker: 'You', role: 'you', english: 'Nice to meet you, Alex. I’m Linh.', vietnamese: 'Rất vui được gặp bạn, Alex. Mình là Linh.' },
        { speaker: 'Alex', role: 'partner', english: 'How long have you lived here?', vietnamese: 'Bạn sống ở đây bao lâu rồi?' },
        { speaker: 'You', role: 'you', english: 'For about two years. Let me know if you need anything.', vietnamese: 'Khoảng hai năm. Cứ cho mình biết nếu bạn cần giúp gì nhé.' },
      ] },
      { id: 'daily-plans', title: 'Rủ bạn đi uống cà phê', goal: 'Đưa ra lời mời và thống nhất thời gian.', level: 'A2', turns: [
        { speaker: 'You', role: 'you', english: 'Would you like to get coffee after work?', vietnamese: 'Bạn có muốn đi uống cà phê sau giờ làm không?' },
        { speaker: 'Mai', role: 'partner', english: 'Sure. What time works for you?', vietnamese: 'Được chứ. Mấy giờ thì tiện cho bạn?' },
        { speaker: 'You', role: 'you', english: 'How about six thirty?', vietnamese: 'Sáu giờ rưỡi nhé?' },
        { speaker: 'Mai', role: 'partner', english: 'That works. See you at the café.', vietnamese: 'Được đó. Gặp bạn ở quán cà phê nhé.' },
      ] },
    ],
  },
  {
    id: 'shopping-travel', title: 'Mua sắm, ăn uống và du lịch', description: 'Gọi món, hỏi giá và tìm đường.', scenarios: [
      { id: 'restaurant-order', title: 'Gọi món ở nhà hàng', goal: 'Gọi món và hỏi lựa chọn phù hợp.', level: 'A1', turns: [
        { speaker: 'Server', role: 'partner', english: 'Are you ready to order?', vietnamese: 'Quý khách đã sẵn sàng gọi món chưa?' },
        { speaker: 'You', role: 'you', english: 'Yes. I’d like the grilled fish, please.', vietnamese: 'Rồi. Cho tôi cá nướng nhé.' },
        { speaker: 'Server', role: 'partner', english: 'Would you like rice or potatoes with that?', vietnamese: 'Quý khách muốn ăn kèm cơm hay khoai tây?' },
        { speaker: 'You', role: 'you', english: 'Rice, please. And a glass of water.', vietnamese: 'Cho tôi cơm. Và một ly nước lọc.' },
      ] },
      { id: 'travel-directions', title: 'Hỏi đường đến ga tàu', goal: 'Hỏi đường và xác nhận chỉ dẫn.', level: 'A2', turns: [
        { speaker: 'You', role: 'you', english: 'Excuse me, how can I get to the train station?', vietnamese: 'Xin lỗi, tôi có thể đến ga tàu bằng cách nào?' },
        { speaker: 'Local', role: 'partner', english: 'Go straight and turn left at the traffic lights.', vietnamese: 'Đi thẳng rồi rẽ trái ở đèn giao thông.' },
        { speaker: 'You', role: 'you', english: 'Is it far from here?', vietnamese: 'Từ đây đến đó có xa không?' },
        { speaker: 'Local', role: 'partner', english: 'No, it’s about a five-minute walk.', vietnamese: 'Không, đi bộ khoảng năm phút.' },
      ] },
    ],
  },
  {
    id: 'study-work', title: 'Học tập và công việc', description: 'Trao đổi với bạn học và đồng nghiệp.', scenarios: [
      { id: 'ask-colleague', title: 'Nhờ đồng nghiệp hỗ trợ', goal: 'Đề nghị giúp đỡ một cách lịch sự.', level: 'A2', turns: [
        { speaker: 'You', role: 'you', english: 'Could you help me check this spreadsheet?', vietnamese: 'Bạn có thể giúp mình kiểm tra bảng tính này không?' },
        { speaker: 'Chris', role: 'partner', english: 'Of course. What should I look for?', vietnamese: 'Được chứ. Mình nên kiểm tra điều gì?' },
        { speaker: 'You', role: 'you', english: 'Please check the totals in the last column.', vietnamese: 'Bạn kiểm tra giúp tổng ở cột cuối nhé.' },
        { speaker: 'Chris', role: 'partner', english: 'I’ll take a look now.', vietnamese: 'Mình sẽ xem ngay.' },
      ] },
      { id: 'study-project', title: 'Lên kế hoạch làm bài nhóm', goal: 'Phân công việc và thống nhất hạn hoàn thành.', level: 'B1', turns: [
        { speaker: 'You', role: 'you', english: 'When should we meet to work on the project?', vietnamese: 'Khi nào chúng ta nên gặp để làm bài dự án?' },
        { speaker: 'Nam', role: 'partner', english: 'I’m free on Thursday afternoon.', vietnamese: 'Chiều thứ Năm mình rảnh.' },
        { speaker: 'You', role: 'you', english: 'Great. I’ll prepare the research notes before then.', vietnamese: 'Tuyệt. Mình sẽ chuẩn bị ghi chú nghiên cứu trước lúc đó.' },
        { speaker: 'Nam', role: 'partner', english: 'I’ll make an outline for our presentation.', vietnamese: 'Mình sẽ lập dàn ý cho bài thuyết trình.' },
      ] },
    ],
  },
  {
    id: 'workplace', title: 'Hội thoại tại nơi làm việc', description: 'Mở đầu cuộc họp và sắp xếp lịch.', scenarios: [
      { id: 'start-meeting', title: 'Bắt đầu cuộc họp', goal: 'Chào nhóm và giới thiệu nội dung họp.', level: 'B1', turns: [
        { speaker: 'You', role: 'you', english: 'Good morning, everyone. Thanks for joining.', vietnamese: 'Chào buổi sáng mọi người. Cảm ơn mọi người đã tham dự.' },
        { speaker: 'Jordan', role: 'partner', english: 'Good morning. What’s on the agenda today?', vietnamese: 'Chào buổi sáng. Hôm nay chúng ta có nội dung gì?' },
        { speaker: 'You', role: 'you', english: 'First, we’ll review the launch schedule.', vietnamese: 'Đầu tiên, chúng ta sẽ xem lại lịch ra mắt.' },
        { speaker: 'Jordan', role: 'partner', english: 'Sounds good. I have the latest figures ready.', vietnamese: 'Được đấy. Tôi đã chuẩn bị số liệu mới nhất.' },
      ] },
      { id: 'schedule-meeting', title: 'Sắp xếp lịch họp', goal: 'Đề xuất và xác nhận khung giờ.', level: 'B1', turns: [
        { speaker: 'You', role: 'you', english: 'Are you available for a meeting tomorrow morning?', vietnamese: 'Sáng mai bạn có rảnh họp không?' },
        { speaker: 'Taylor', role: 'partner', english: 'I’m available after ten.', vietnamese: 'Tôi rảnh sau 10 giờ.' },
        { speaker: 'You', role: 'you', english: 'Would 10:30 work for you?', vietnamese: '10 giờ 30 có tiện cho bạn không?' },
        { speaker: 'Taylor', role: 'partner', english: 'Yes. Please send me the calendar invite.', vietnamese: 'Được. Vui lòng gửi lời mời lịch cho tôi.' },
      ] },
    ],
  },
]
