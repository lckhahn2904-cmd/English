import { useState } from 'react'
import { ArrowLeft, BookOpen, CheckCircle2, ClipboardList, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { GrammarTopic } from '../../data/grammarTopics'

type Question = { prompt: string; answer: string; reason: string; translation: string }
type QuestionGroup = { title: string; questions: Question[] }
type Example = { en: string; vi: string }
type ComparePair = { title: string; difference: string; question: string; examples: Example[] }

const goingGoals = [
  'Dùng be going to cho dự định đã có trước và dự đoán dựa trên dấu hiệu hiện tại.',
  'Tạo câu khẳng định, phủ định, Yes/No và Wh-question đúng dạng.',
  'Phân biệt be going to với will, hiện tại tiếp diễn và hiện tại đơn theo ngữ cảnh.',
]

const goingExamples: Example[] = [
  { en: 'I am going to learn English this summer.', vi: 'Mùa hè này tôi dự định học tiếng Anh.' },
  { en: 'She is going to apply for a new job.', vi: 'Cô ấy dự định ứng tuyển một công việc mới.' },
  { en: 'Look at those dark clouds. It is going to rain.', vi: 'Nhìn những đám mây đen kia kìa. Trời sắp mưa.' },
  { en: 'Be careful! You are going to fall.', vi: 'Cẩn thận! Bạn sắp ngã đấy.' },
  { en: 'Who is going to help us?', vi: 'Ai sẽ giúp chúng ta?' },
]

const comparePairs: ComparePair[] = [
  { title: 'Hiện tại đơn · Hiện tại tiếp diễn', difference: 'Hiện tại đơn nói về thói quen, sự thật, lịch trình hoặc trạng thái ổn định. Hiện tại tiếp diễn tập trung vào việc đang diễn ra, tình huống tạm thời, sự thay đổi hoặc kế hoạch đã sắp xếp.', question: 'Đây là điều thường xảy ra/ổn định hay đang diễn ra/tạm thời?', examples: [{ en: 'Lan studies English every day.', vi: 'Lan học tiếng Anh mỗi ngày.' }, { en: 'Lan is studying in the library now.', vi: 'Lan đang học trong thư viện lúc này.' }] },
  { title: 'Hiện tại hoàn thành · Quá khứ đơn', difference: 'Hiện tại hoàn thành liên hệ trải nghiệm hoặc kết quả với hiện tại, thường không nêu mốc quá khứ đã kết thúc. Quá khứ đơn đặt sự việc tại một thời điểm quá khứ đã kết thúc.', question: 'Có nêu thời điểm quá khứ đã kết thúc không; kết quả còn liên quan hiện tại không?', examples: [{ en: 'I have visited Hue twice.', vi: 'Tôi đã đến Huế hai lần.' }, { en: 'I visited Hue last summer.', vi: 'Tôi đã đến Huế mùa hè năm ngoái.' }] },
  { title: 'Hiện tại hoàn thành · Hiện tại hoàn thành tiếp diễn', difference: 'Hiện tại hoàn thành thường nhấn mạnh kết quả, sự hoàn tất hoặc số lần. Hiện tại hoàn thành tiếp diễn thường nhấn mạnh quá trình và thời lượng. Động từ chỉ trạng thái thường không dùng tiếp diễn.', question: 'Muốn nhấn mạnh kết quả/số lần hay quá trình/thời lượng?', examples: [{ en: 'She has written three emails.', vi: 'Cô ấy đã viết ba email.' }, { en: 'She has been writing emails for an hour.', vi: 'Cô ấy đã viết email suốt một giờ.' }] },
  { title: 'Quá khứ đơn · Quá khứ tiếp diễn', difference: 'Quá khứ đơn kể sự việc đã xảy ra/kết thúc. Quá khứ tiếp diễn đặt bối cảnh hoặc diễn tả việc đang diễn ra tại một mốc quá khứ; một việc ngắn có thể xen vào.', question: 'Sự việc hoàn tất hay đang diễn ra tại mốc được nhắc đến?', examples: [{ en: 'I cooked dinner yesterday.', vi: 'Hôm qua tôi đã nấu bữa tối.' }, { en: 'I was cooking when you called.', vi: 'Tôi đang nấu ăn thì bạn gọi.' }] },
  { title: 'Quá khứ đơn · Quá khứ hoàn thành', difference: 'Quá khứ hoàn thành làm rõ việc xảy ra trước một mốc/sự việc quá khứ khác. Khi thứ tự đã rõ, quá khứ đơn đôi khi vẫn đủ.', question: 'Có cần nhấn mạnh việc nào xảy ra trước không?', examples: [{ en: 'When I arrived, the meeting had started.', vi: 'Khi tôi đến, cuộc họp đã bắt đầu trước đó.' }, { en: 'I arrived at 8 a.m. and the meeting started at 9 a.m.', vi: 'Tôi đến lúc 8 giờ sáng và cuộc họp bắt đầu lúc 9 giờ.' }] },
  { title: 'Quá khứ hoàn thành · Quá khứ hoàn thành tiếp diễn', difference: 'Quá khứ hoàn thành nhấn mạnh kết quả/sự hoàn tất trước mốc quá khứ; quá khứ hoàn thành tiếp diễn nhấn mạnh quá trình/thời lượng trước mốc đó.', question: 'Việc đã hoàn tất hay quá trình kéo dài mới là điều cần nhấn mạnh?', examples: [{ en: 'She had finished her homework before dinner.', vi: 'Cô ấy đã hoàn thành bài tập trước bữa tối.' }, { en: 'She had been studying for two hours when I arrived.', vi: 'Cô ấy đã học được hai giờ khi tôi đến.' }] },
  { title: 'Tương lai đơn · Tương lai gần (be going to)', difference: 'Will thường dùng cho quyết định tại thời điểm nói, lời hứa/đề nghị hoặc dự đoán theo ý kiến. Be going to thường dùng cho dự định đã có trước hoặc dự đoán dựa trên dấu hiệu hiện tại.', question: 'Quyết định vừa nảy ra hay đã có dự định/bằng chứng hiện tại?', examples: [{ en: "I'll answer the phone.", vi: 'Tôi sẽ nghe máy. (Quyết định ngay lúc này.)' }, { en: "Look at the sky. It's going to rain.", vi: 'Nhìn bầu trời kìa. Trời sắp mưa.' }] },
  { title: 'Tương lai đơn · Tương lai tiếp diễn', difference: 'Tương lai đơn nói về sự việc, quyết định, lời hứa hoặc dự đoán. Tương lai tiếp diễn nhìn vào hoạt động đang diễn ra tại một thời điểm tương lai.', question: 'Nói về sự việc tương lai nói chung hay hoạt động đang diễn ra tại một mốc?', examples: [{ en: 'I will call you tomorrow.', vi: 'Ngày mai tôi sẽ gọi cho bạn.' }, { en: 'At 8 p.m. tomorrow, I will be studying.', vi: 'Lúc 8 giờ tối mai, tôi sẽ đang học.' }] },
  { title: 'Tương lai hoàn thành · Tương lai hoàn thành tiếp diễn', difference: 'Tương lai hoàn thành nhấn mạnh kết quả đã hoàn tất trước mốc tương lai. Tương lai hoàn thành tiếp diễn nhấn mạnh thời lượng/quá trình kéo dài đến mốc đó.', question: 'Nhấn mạnh việc hoàn tất hay khoảng thời gian hoạt động kéo dài?', examples: [{ en: 'By Friday, I will have finished the report.', vi: 'Đến thứ Sáu, tôi sẽ hoàn thành xong báo cáo.' }, { en: 'By Friday, I will have been working here for two years.', vi: 'Đến thứ Sáu, tôi sẽ làm việc ở đây được hai năm.' }] },
]

// Each exercise item carries its answer, reasoning, and Vietnamese meaning so
// learners can review the process rather than only reveal a letter/key.
const goingGroups: QuestionGroup[] = [
  { title: 'Cấp 1 · Chọn đáp án đúng (8 câu)', questions: [
    { prompt: 'I planned this last week. I ___ my aunt on Saturday. (visit) A) am going to visit  B) visited  C) visits  D) have visited', answer: 'am going to visit', reason: 'Kế hoạch đã có trước; dùng be going to và V1.', translation: 'Tôi đã lên kế hoạch tuần trước. Thứ Bảy tôi sẽ thăm dì.' },
    { prompt: 'Look at the glass on the edge! It ___. (fall) A) is going to fall  B) fell  C) falls  D) has fallen', answer: 'is going to fall', reason: 'Có dấu hiệu hiện tại rõ ràng; dự đoán dùng be going to.', translation: 'Nhìn chiếc cốc ở mép bàn kìa! Nó sắp rơi.' },
    { prompt: 'The phone is ringing. I ___ it. (answer) A) will answer  B) answered  C) answer  D) have answered', answer: 'will answer', reason: 'Quyết định được đưa ra ngay lúc nói; thường dùng will.', translation: 'Điện thoại đang reo. Tôi sẽ nghe máy.' },
    { prompt: 'Mia has booked a table for 7. She ___ dinner with us. (have) A) is having  B) had  C) has  D) will have had', answer: 'is having', reason: 'Có sự sắp xếp cụ thể đã được bố trí; hiện tại tiếp diễn phù hợp.', translation: 'Mia đã đặt bàn lúc 7 giờ. Cô ấy sẽ ăn tối cùng chúng tôi.' },
    { prompt: 'The timetable says the train ___ at 6:30. (leave) A) leaves  B) is leaving now  C) left  D) has left', answer: 'leaves', reason: 'Lịch trình cố định thường dùng hiện tại đơn.', translation: 'Thời gian biểu ghi tàu khởi hành lúc 6 giờ 30.' },
    { prompt: 'We have saved enough money and decided already. We ___ a laptop. (buy) A) are going to buy  B) bought  C) buy  D) have bought', answer: 'are going to buy', reason: 'Đây là dự định đã có từ trước.', translation: 'Chúng tôi đã tiết kiệm đủ tiền và quyết định rồi. Chúng tôi dự định mua máy tính.' },
    { prompt: 'Be careful! You ___ on that wet floor. (slip) A) are going to slip  B) slipped  C) slip  D) have slipped', answer: 'are going to slip', reason: 'Tình huống hiện tại là bằng chứng cho dự đoán.', translation: 'Cẩn thận! Bạn sắp trượt trên sàn ướt.' },
    { prompt: 'I think our team ___ the final. (win) A) will win  B) won  C) wins yesterday  D) has won', answer: 'will win', reason: 'Đây là nhận định/ý kiến dự đoán; will là lựa chọn điển hình.', translation: 'Tôi nghĩ đội chúng ta sẽ thắng trận chung kết.' },
  ] },
  { title: 'Cấp 2 · Chia động từ (8 câu)', questions: [
    { prompt: 'They ___ (move) to Da Nang; they signed the lease yesterday.', answer: 'are going to move', reason: 'Dự định đã có trước và có kế hoạch cụ thể.', translation: 'Họ dự định chuyển đến Đà Nẵng; hôm qua họ đã ký hợp đồng thuê.' },
    { prompt: 'That child ___ (run) into the road. Stop him!', answer: 'is going to run', reason: 'Dấu hiệu đang diễn ra cho thấy việc sắp xảy ra.', translation: 'Đứa trẻ đó sắp chạy ra đường. Hãy ngăn em ấy lại!' },
    { prompt: 'I ___ (not / spend) all my savings; I need them for tuition.', answer: 'am not going to spend', reason: 'Phủ định đặt not sau am/is/are, trước going to.', translation: 'Tôi không định tiêu hết tiền tiết kiệm; tôi cần tiền đóng học.' },
    { prompt: '___ you ___ (study) tonight? You made a plan this morning.', answer: 'Are / going to study', reason: 'Câu hỏi Yes/No đảo are lên trước chủ ngữ; sau going to dùng V1.', translation: 'Tối nay bạn định học à? Sáng nay bạn đã lên kế hoạch.' },
    { prompt: 'What ___ she ___ (cook) for the guests?', answer: 'is / going to cook', reason: 'Wh-word + is + chủ ngữ + going to + V1.', translation: 'Cô ấy định nấu món gì cho khách?' },
    { prompt: 'Those clouds ___ (bring) heavy rain.', answer: 'are going to bring', reason: 'Dự đoán dựa trên dấu hiệu nhìn thấy ở hiện tại.', translation: 'Những đám mây đó sắp mang mưa lớn đến.' },
    { prompt: 'He ___ (not / apply) for that job; he has chosen another one.', answer: 'is not going to apply', reason: 'Phủ định với he dùng is not going to + V1.', translation: 'Anh ấy không định ứng tuyển công việc đó; anh ấy đã chọn công việc khác.' },
    { prompt: 'When ___ they ___ (leave) for the airport?', answer: 'are / going to leave', reason: 'Câu hỏi Wh- đặt trợ động từ be trước chủ ngữ.', translation: 'Khi nào họ định rời đi đến sân bay?' },
  ] },
  { title: 'Cấp 2 · Chuyển đổi câu (5 câu)', questions: [
    { prompt: 'Đổi sang phủ định: She is going to attend the meeting.', answer: "She isn't going to attend the meeting.", reason: 'Thêm not sau is; phần going to + V1 giữ nguyên.', translation: 'Cô ấy không định tham dự cuộc họp.' },
    { prompt: 'Đổi sang câu hỏi Yes/No: They are going to cancel the trip.', answer: 'Are they going to cancel the trip?', reason: 'Đưa are lên trước chủ ngữ they.', translation: 'Họ có định hủy chuyến đi không?' },
    { prompt: 'Đặt câu hỏi Wh- hỏi việc bạn định làm ngày mai: You are going to do something tomorrow.', answer: 'What are you going to do tomorrow?', reason: 'What thay cho tân ngữ; dùng Wh + are + S + going to + V1.', translation: 'Ngày mai bạn định làm gì?' },
    { prompt: 'Đổi sang khẳng định: He is not going to join us.', answer: 'He is going to join us.', reason: 'Bỏ not để trở về dạng khẳng định.', translation: 'Anh ấy sẽ tham gia cùng chúng ta.' },
    { prompt: 'Đặt câu hỏi chủ ngữ cho câu: Someone is going to help us.', answer: 'Who is going to help us?', reason: 'Who thay thế chủ ngữ; không thêm một chủ ngữ khác sau is.', translation: 'Ai sẽ giúp chúng ta?' },
  ] },
  { title: 'Cấp 3 · Tìm và sửa lỗi (5 câu)', questions: [
    { prompt: 'Sửa lỗi: I going to learn English this summer.', answer: 'I am going to learn English this summer.', reason: 'Cấu trúc cần be chia theo chủ ngữ trước going to.', translation: 'Mùa hè này tôi dự định học tiếng Anh.' },
    { prompt: 'Sửa lỗi: She are going to leave early.', answer: 'She is going to leave early.', reason: 'She đi với is, không đi với are.', translation: 'Cô ấy dự định rời đi sớm.' },
    { prompt: 'Sửa lỗi: He is going to studying tonight.', answer: 'He is going to study tonight.', reason: 'Sau going to dùng động từ nguyên mẫu V1.', translation: 'Tối nay anh ấy dự định học.' },
    { prompt: 'Sửa câu trả lời: Are you going to call Linh? — Yes, I do.', answer: 'Yes, I am.', reason: 'Câu hỏi dùng be going to nên câu trả lời ngắn dùng be tương ứng.', translation: 'Bạn định gọi Linh à? — Vâng, tôi định gọi.' },
    { prompt: 'Sửa lỗi: Do they going to travel by train?', answer: 'Are they going to travel by train?', reason: 'Đảo be lên trước chủ ngữ; không dùng do trong cấu trúc này.', translation: 'Họ có định đi du lịch bằng tàu không?' },
  ] },
  { title: 'Cấp 4 · Viết câu theo tình huống (4 câu)', questions: [
    { prompt: 'Bạn đã quyết định từ trước và đặt vé: viết câu dùng “we / visit / our grandparents / this weekend”.', answer: 'We are going to visit our grandparents this weekend.', reason: 'Kế hoạch đã có trước nên dùng are going to + V1.', translation: 'Cuối tuần này chúng tôi dự định thăm ông bà.' },
    { prompt: 'Bạn thấy chiếc xe mất lái: viết dự đoán dùng “the car / crash”.', answer: 'The car is going to crash.', reason: 'Dự đoán có bằng chứng hiện tại dùng be going to.', translation: 'Chiếc xe sắp đâm vào đâu đó.' },
    { prompt: 'Hỏi bạn mình định ở đâu: dùng “where / you / stay”.', answer: 'Where are you going to stay?', reason: 'Câu hỏi Wh- dùng Wh + are + S + going to + V1.', translation: 'Bạn định ở đâu?' },
    { prompt: 'Viết câu phủ định về kế hoạch: “I / attend / the concert / tonight”.', answer: "I am not going to attend the concert tonight.", reason: 'Phủ định: S + am/is/are + not + going to + V1.', translation: 'Tối nay tôi không định tham dự buổi hòa nhạc.' },
  ] },
]

const contrastChoiceRows: Question[] = [
  { prompt: 'Every weekday, Mai ___ the bus; today she ___ with her sister. Choose: A takes / is taking, B is taking / takes.', answer: 'A — takes / is taking', reason: 'Thói quen dùng hiện tại đơn; hành động hôm nay đang diễn ra/tạm thời dùng hiện tại tiếp diễn.', translation: 'Mỗi ngày trong tuần Mai đi xe buýt; hôm nay cô ấy đang đi cùng chị gái.' },
  { prompt: 'Water ___ at 100°C, but this pot ___ slowly because the stove is low. Choose: A boils / is heating, B is boiling / heats.', answer: 'A — boils / is heating', reason: 'Sự thật khoa học dùng hiện tại đơn; quá trình cụ thể lúc này dùng tiếp diễn.', translation: 'Nước sôi ở 100°C, nhưng nồi này đang nóng lên chậm vì bếp để nhỏ.' },
  { prompt: 'I ___ that film before, but I ___ it again last night. Choose: A have seen / watched, B saw / have watched.', answer: 'A — have seen / watched', reason: 'Trải nghiệm không nêu mốc kết thúc liên hệ hiện tại dùng hiện tại hoàn thành; last night là mốc quá khứ đã kết thúc nên dùng quá khứ đơn.', translation: 'Tôi đã xem phim đó trước đây, nhưng tối qua tôi xem lại.' },
  { prompt: 'Nora ___ in Hue since 2021 and ___ there last month. Choose: A has lived / moved, B lived / has moved.', answer: 'A — has lived / moved', reason: 'Since 2021 mô tả trạng thái kéo dài đến hiện tại; last month là thời điểm quá khứ kết thúc.', translation: 'Nora sống ở Huế từ năm 2021 và tháng trước đã chuyển đến đó.' },
  { prompt: 'I ___ three pages so far, and I ___ the last page now. Choose: A have written / am writing, B wrote / have been writing.', answer: 'A — have written / am writing', reason: 'Nhấn kết quả/số lượng dùng hiện tại hoàn thành; việc đang làm lúc nói dùng hiện tại tiếp diễn.', translation: 'Đến giờ tôi đã viết ba trang và hiện đang viết trang cuối.' },
  { prompt: 'The kitchen smells wonderful. Dad ___ dinner for an hour and he ___ the soup. Choose: A has been cooking / has just finished, B has cooked / is finishing.', answer: 'A — has been cooking / has just finished', reason: 'Quá trình kéo dài nhấn bằng hiện tại hoàn thành tiếp diễn; kết quả vừa hoàn tất dùng hiện tại hoàn thành.', translation: 'Nhà bếp thơm quá. Bố đã nấu bữa tối suốt một giờ và vừa nêm xong món súp.' },
  { prompt: 'At 9 p.m. I ___ when the lights ___. Choose: A was reading / went out, B read / were going out.', answer: 'A — was reading / went out', reason: 'Hoạt động nền đang diễn ra dùng quá khứ tiếp diễn; sự việc xen vào dùng quá khứ đơn.', translation: 'Lúc 9 giờ tối tôi đang đọc thì đèn tắt.' },
  { prompt: 'While we ___ home, it ___ to rain. Choose: A were walking / started, B walked / was starting.', answer: 'A — were walking / started', reason: 'Quá trình đang diễn ra làm bối cảnh; sự việc bắt đầu là sự kiện xen vào.', translation: 'Trong khi chúng tôi đang đi bộ về nhà thì trời bắt đầu mưa.' },
  { prompt: 'By the time the guests arrived, we ___ dinner. Choose: A had prepared, B prepared.', answer: 'A — had prepared', reason: 'Việc chuẩn bị hoàn tất trước mốc khách đến; quá khứ hoàn thành làm rõ trình tự.', translation: 'Khi khách đến, chúng tôi đã chuẩn bị xong bữa tối.' },
  { prompt: 'I ___ the report before the 10 a.m. meeting yesterday. Choose: A finished, B had finished.', answer: 'B — had finished', reason: 'Cụm before the meeting làm rõ việc hoàn tất trước mốc quá khứ; quá khứ hoàn thành nhấn trình tự.', translation: 'Hôm qua tôi đã hoàn thành báo cáo trước cuộc họp lúc 10 giờ.' },
  { prompt: 'He was exhausted because he ___ all night before the exam. Choose: A had studied, B had been studying.', answer: 'B — had been studying', reason: 'Câu nhấn quá trình kéo dài trước mốc quá khứ, phù hợp quá khứ hoàn thành tiếp diễn.', translation: 'Anh ấy kiệt sức vì đã học suốt đêm trước kỳ thi.' },
  { prompt: 'When the mechanic arrived, the engine ___ for hours. Choose: A had failed, B had been running badly.', answer: 'B — had been running badly', reason: 'For hours nhấn thời lượng của tình trạng kéo dài trước khi thợ máy đến.', translation: 'Khi thợ máy đến, động cơ đã chạy trục trặc suốt nhiều giờ.' },
  { prompt: 'The doorbell is ringing; I ___ it. Choose: A will get, B am going to get.', answer: 'A — will get', reason: 'Quyết định được đưa ra ngay khi nghe chuông; will là cách nói điển hình.', translation: 'Chuông cửa đang reo; tôi sẽ ra mở.' },
  { prompt: 'She bought paint yesterday and ___ her room this weekend. Choose: A will repaint, B is going to repaint.', answer: 'B — is going to repaint', reason: 'Đã có dự định và chuẩn bị trước; be going to phù hợp.', translation: 'Hôm qua cô ấy mua sơn và dự định sơn lại phòng cuối tuần này.' },
  { prompt: 'At this time tomorrow, our plane ___ over the Pacific. Choose: A will fly, B will be flying.', answer: 'B — will be flying', reason: 'At this time tomorrow đặt hành động đang diễn ra tại mốc tương lai; dùng tương lai tiếp diễn.', translation: 'Giờ này ngày mai máy bay của chúng tôi sẽ đang bay qua Thái Bình Dương.' },
  { prompt: 'I promise I ___ your secret. Choose: A will not tell, B am not going to tell.', answer: 'A — will not tell', reason: 'Lời hứa thường dùng will.', translation: 'Tôi hứa sẽ không kể bí mật của bạn.' },
  { prompt: 'By the end of May, she ___ the course. Choose: A will complete, B will have completed.', answer: 'B — will have completed', reason: 'By the end of May là hạn trước đó kết quả sẽ hoàn tất; dùng tương lai hoàn thành.', translation: 'Đến cuối tháng Năm, cô ấy sẽ hoàn thành khóa học.' },
  { prompt: 'By July, they ___ here for a decade. Choose: A will have lived, B will have been living.', answer: 'B — will have been living', reason: 'For a decade nhấn thời lượng kéo dài đến mốc tương lai; tương lai hoàn thành tiếp diễn phù hợp.', translation: 'Đến tháng Bảy, họ sẽ sống ở đây được mười năm.' },
]

const contrastChoiceExtras = [
  ' C) water is boiling / heats  D) water boiled / had heated',
  ' C) have visited / had gone  D) had visited / have gone',
  ' C) has written / is finishing  D) wrote / has been finishing',
  ' C) were walking / was starting  D) had walked / starts',
  ' C) had closed / chose  D) closes / had chosen',
  ' C) had studied / was exhausted  D) studied / has been studying',
  ' C) am going to answer (a prior plan)  D) answered',
  ' C) will move (instant decision)  D) moved',
  ' C) had flown  D) is flying',
]

const contrastFormRows: Question[] = [
  { prompt: 'My brother usually ___ (drive) to work, but this week he ___ (take) the train.', answer: 'drives / is taking', reason: 'Usually đánh dấu thói quen; this week là tình huống tạm thời.', translation: 'Anh trai tôi thường lái xe đi làm, nhưng tuần này anh ấy đi tàu.' },
  { prompt: 'We ___ (not / see) that museum yet; we ___ (visit) it in 2022.', answer: "haven't seen / visited", reason: 'Yet nói về trải nghiệm đến hiện tại; in 2022 là mốc quá khứ đã kết thúc.', translation: 'Chúng tôi chưa thăm bảo tàng đó; chúng tôi đã đến đó năm 2022.' },
  { prompt: 'How many emails ___ you ___ (send) so far? You ___ (work) on them all morning.', answer: 'have / sent; have been working', reason: 'How many hỏi kết quả đếm được; all morning nhấn thời lượng quá trình.', translation: 'Đến giờ bạn đã gửi bao nhiêu email? Bạn đã làm chúng suốt buổi sáng.' },
  { prompt: 'The children ___ (play) outside when the rain ___ (begin).', answer: 'were playing / began', reason: 'Hoạt động nền đang diễn ra; begin là sự việc xen vào.', translation: 'Bọn trẻ đang chơi ngoài trời thì trời bắt đầu mưa.' },
  { prompt: 'By the time the taxi ___ (arrive), we ___ (pack) our bags.', answer: 'arrived / had packed', reason: 'Mốc kể dùng quá khứ đơn; việc đóng gói xảy ra trước đó dùng quá khứ hoàn thành.', translation: 'Khi taxi đến, chúng tôi đã đóng gói hành lý.' },
  { prompt: 'She ___ (work) at the clinic for six months by the time she got promoted.', answer: 'had been working', reason: 'For six months nhấn quá trình kéo dài đến một mốc quá khứ.', translation: 'Khi được thăng chức, cô ấy đã làm ở phòng khám được sáu tháng.' },
  { prompt: 'There is no milk. I ___ (buy) some now. (decision made while speaking)', answer: 'will buy', reason: 'Đây là quyết định mới đưa ra lúc nói; dùng will.', translation: 'Hết sữa rồi. Bây giờ tôi sẽ đi mua.' },
  { prompt: 'At 10 tomorrow morning, the team ___ (present) its plan.', answer: 'will be presenting', reason: 'Hành động sẽ đang diễn ra tại mốc tương lai cụ thể.', translation: 'Lúc 10 giờ sáng mai, nhóm sẽ đang trình bày kế hoạch.' },
  { prompt: 'By next Friday, I ___ (finish) the first draft.', answer: 'will have finished', reason: 'By next Friday đặt hạn mà trước đó bản nháp sẽ hoàn tất.', translation: 'Đến thứ Sáu tuần tới, tôi sẽ hoàn thành bản nháp đầu tiên.' },
  { prompt: 'By December, he ___ (teach) at this school for 20 years.', answer: 'will have been teaching', reason: 'For 20 years nhấn thời lượng hoạt động đến mốc tương lai.', translation: 'Đến tháng Mười Hai, thầy ấy sẽ dạy ở trường này được 20 năm.' },
  { prompt: 'I ___ (know) Sara since primary school, but I first ___ (meet) her in 2010.', answer: 'have known / met', reason: 'Know là trạng thái kéo dài đến nay; first met là sự kiện ở mốc quá khứ cụ thể.', translation: 'Tôi quen Sara từ hồi tiểu học, nhưng lần đầu gặp cô ấy là năm 2010.' },
  { prompt: 'He ___ (repair) the bike all afternoon and his hands are dirty.', answer: 'has been repairing', reason: 'All afternoon và dấu vết hiện tại nhấn quá trình vừa kéo dài.', translation: 'Anh ấy đã sửa xe đạp suốt buổi chiều và tay đang bẩn.' },
]

const contrastErrorRows: Question[] = [
  { prompt: 'Sửa lỗi: I have finished the course last month.', answer: 'I finished the course last month.', reason: 'Last month là mốc quá khứ đã kết thúc; dùng quá khứ đơn.', translation: 'Tôi đã hoàn thành khóa học tháng trước.' },
  { prompt: 'Sửa lỗi: She is knowing the answer.', answer: 'She knows the answer.', reason: 'Know thường là động từ chỉ trạng thái, không dùng tiếp diễn trong nghĩa này.', translation: 'Cô ấy biết câu trả lời.' },
  { prompt: 'Sửa lỗi: When I arrived, they ate dinner already.', answer: 'When I arrived, they had already eaten dinner.', reason: 'Bữa tối đã ăn xong trước lúc tôi đến; dùng quá khứ hoàn thành.', translation: 'Khi tôi đến, họ đã ăn tối rồi.' },
  { prompt: 'Sửa lỗi: Look at the child! He will fall! (người nói chỉ dấu hiệu đang thấy)', answer: 'Look at the child! He is going to fall!', reason: 'Dự đoán dựa trên bằng chứng hiện tại điển hình dùng be going to.', translation: 'Nhìn đứa trẻ kìa! Em ấy sắp ngã!' },
  { prompt: 'Sửa lỗi: By 2030, they will work here for ten years.', answer: 'By 2030, they will have worked here for ten years. / will have been working', reason: 'By 2030 yêu cầu góc nhìn đến một hạn tương lai; có thể nhấn kết quả (will have worked) hoặc thời lượng (will have been working).', translation: 'Đến năm 2030, họ sẽ làm việc ở đây được mười năm.' },
]

const contrastExplainRows: Question[] = [
  { prompt: 'Vì sao dùng hiện tại hoàn thành trong “I have lost my keys, so I cannot get in” thay vì quá khứ đơn?', answer: 'Hiện tại hoàn thành: mất chìa khóa là việc quá khứ có kết quả hiện tại (không vào được).', reason: 'Câu tập trung vào hệ quả đang còn đúng; nếu nêu mốc như yesterday thì dùng quá khứ đơn.', translation: 'Tôi làm mất chìa khóa nên không thể vào nhà.' },
  { prompt: 'Vì sao “At 9 last night, I was driving” dùng quá khứ tiếp diễn?', answer: 'Vì câu đặt người nói ở giữa hoạt động tại một mốc quá khứ.', reason: 'Quá khứ tiếp diễn cho thấy hành động đang diễn ra lúc 9 giờ; không nhấn sự hoàn tất.', translation: 'Lúc 9 giờ tối qua, tôi đang lái xe.' },
  { prompt: 'Vì sao “She has been painting the room” nhấn quá trình hơn “She has painted the room”?', answer: 'Dạng tiếp diễn làm nổi bật hoạt động đang/đã kéo dài; dạng đơn thường nhấn kết quả hoàn thành.', reason: 'Ngữ cảnh có thể thay đổi trọng tâm; câu đầu không khẳng định phòng đã sơn xong.', translation: 'Cô ấy đã sơn căn phòng (nhấn quá trình).' },
  { prompt: 'Vì sao “I will help you” phù hợp khi người nói vừa thấy bạn mang nhiều túi?', answer: 'Đây là lời đề nghị/quyết định ngay lúc nói; will là cách dùng điển hình.', reason: 'Be going to thường gợi ý dự định đã có trước, dù ngữ cảnh khác có thể cho phép cả hai.', translation: 'Tôi sẽ giúp bạn.' },
  { prompt: 'Trong “By noon, we will have been waiting for two hours”, ý nghĩa nào được nhấn mạnh?', answer: 'Thời lượng chờ kéo dài đến mốc trưa.', reason: 'Cụm for two hours cùng by noon cho thấy quá trình liên tục đến thời điểm tương lai.', translation: 'Đến trưa, chúng tôi sẽ chờ được hai tiếng.' },
]

const contrastPassageRows: Question[] = [
  { prompt: 'Điền hai chỗ: “Every summer, Jo ___ (work) at a café. This summer, she ___ (train) to be a chef.”', answer: 'works / is training', reason: 'Every summer là thói quen lặp lại; this summer là hoạt động tạm thời đang diễn ra.', translation: 'Mỗi mùa hè Jo làm ở quán cà phê. Mùa hè này cô ấy đang được đào tạo làm đầu bếp.' },
  { prompt: 'Điền hai chỗ: “We ___ (not / receive) the parcel yet. The courier ___ (deliver) it yesterday.”', answer: "haven't received / delivered", reason: 'Yet liên hệ đến hiện tại; yesterday là thời điểm đã kết thúc.', translation: 'Chúng tôi vẫn chưa nhận bưu kiện. Nhân viên giao hàng đã giao nó hôm qua.' },
  { prompt: 'Điền hai chỗ: “I ___ (walk) home when I ___ (see) the accident.”', answer: 'was walking / saw', reason: 'Đi bộ là hoạt động đang diễn ra; nhìn thấy tai nạn là sự kiện xen vào.', translation: 'Tôi đang đi bộ về nhà thì nhìn thấy vụ tai nạn.' },
  { prompt: 'Điền hai chỗ: “By the time the shop ___ (close), we ___ (choose) a gift.”', answer: 'closed / had chosen', reason: 'Shop đóng là mốc quá khứ; chọn quà đã hoàn tất trước mốc đó.', translation: 'Khi cửa hàng đóng cửa, chúng tôi đã chọn được món quà.' },
  { prompt: 'Điền hai chỗ: “At 7 tomorrow, I ___ (meet) Alex. By 8, we ___ (finish) dinner.”', answer: 'will be meeting / will have finished', reason: 'At 7 đặt hoạt động đang diễn ra; by 8 nói kết quả sẽ hoàn tất trước hạn.', translation: 'Lúc 7 giờ mai tôi sẽ gặp Alex. Đến 8 giờ, chúng tôi sẽ ăn tối xong.' },
]

const contrastGroups: QuestionGroup[] = [
  { title: '18 câu chọn đáp án', questions: contrastChoiceRows },
  { title: '12 câu chia động từ', questions: contrastFormRows },
  { title: '5 câu sửa lỗi', questions: contrastErrorRows },
  { title: '5 câu giải thích lựa chọn', questions: contrastExplainRows },
  { title: '5 câu điền thì vào ngữ cảnh', questions: contrastPassageRows },
]

type MixedSeed = { prompt: string; form: string; full: string; tense: string; reason: string; translation: string; wrong: string }
const mixedSeeds: MixedSeed[] = [
  { prompt: 'Every weekday, Lin ___ (walk) to school.', form: 'walks', full: 'Every weekday, Lin walks to school.', tense: 'Hiện tại đơn', reason: 'Every weekday diễn tả thói quen; Lin là ngôi thứ ba số ít nên động từ thêm -s.', translation: 'Mỗi ngày trong tuần, Lin đi bộ đến trường.', wrong: 'walk' },
  { prompt: 'The library ___ (open) at 8 a.m. according to its schedule.', form: 'opens', full: 'The library opens at 8 a.m. according to its schedule.', tense: 'Hiện tại đơn', reason: 'Lịch mở cửa cố định thường dùng hiện tại đơn.', translation: 'Theo lịch, thư viện mở cửa lúc 8 giờ sáng.', wrong: 'is opening' },
  { prompt: 'Please be quiet; the baby ___ (sleep) right now.', form: 'is sleeping', full: 'Please be quiet; the baby is sleeping right now.', tense: 'Hiện tại tiếp diễn', reason: 'Right now cho biết hành động đang diễn ra lúc nói.', translation: 'Xin hãy yên lặng; em bé đang ngủ lúc này.', wrong: 'sleeps' },
  { prompt: 'Prices ___ (rise) gradually this year, so we are reviewing the budget.', form: 'are rising', full: 'Prices are rising gradually this year, so we are reviewing the budget.', tense: 'Hiện tại tiếp diễn', reason: 'Câu mô tả xu hướng đang thay đổi trong giai đoạn hiện tại.', translation: 'Giá cả đang tăng dần trong năm nay nên chúng tôi đang xem lại ngân sách.', wrong: 'rise' },
  { prompt: 'I ___ (not / finish) the report yet, so I cannot send it.', form: "haven't finished", full: "I haven't finished the report yet, so I cannot send it.", tense: 'Hiện tại hoàn thành', reason: 'Yet và kết quả còn liên quan hiện tại phù hợp với hiện tại hoàn thành.', translation: 'Tôi vẫn chưa hoàn thành báo cáo nên chưa thể gửi.', wrong: "didn't finish" },
  { prompt: 'Mina ___ (visit) three countries so far this year.', form: 'has visited', full: 'Mina has visited three countries so far this year.', tense: 'Hiện tại hoàn thành', reason: 'So far this year là khoảng thời gian chưa kết thúc; câu nhấn số lượng trải nghiệm.', translation: 'Đến nay trong năm nay Mina đã thăm ba quốc gia.', wrong: 'visited' },
  { prompt: 'Your hands are covered in flour. What ___ you ___ (make)?', form: 'have / been making', full: 'What have you been making?', tense: 'Hiện tại hoàn thành tiếp diễn', reason: 'Dấu vết hiện tại gợi một hoạt động vừa kéo dài; câu hỏi tập trung vào quá trình.', translation: 'Bạn đã làm món gì vậy?', wrong: 'did / make' },
  { prompt: 'We ___ (wait) for the technician for forty minutes, and he is still not here.', form: 'have been waiting', full: 'We have been waiting for the technician for forty minutes, and he is still not here.', tense: 'Hiện tại hoàn thành tiếp diễn', reason: 'For forty minutes cùng hành động vẫn tiếp diễn nhấn thời lượng.', translation: 'Chúng tôi đã đợi kỹ thuật viên được 40 phút mà anh ấy vẫn chưa đến.', wrong: 'waited' },
  { prompt: 'Nora ___ (call) me after work yesterday.', form: 'called', full: 'Nora called me after work yesterday.', tense: 'Quá khứ đơn', reason: 'Yesterday đặt sự việc ở thời điểm quá khứ đã kết thúc.', translation: 'Hôm qua Nora gọi cho tôi sau giờ làm.', wrong: 'has called' },
  { prompt: 'The team ___ (not / understand) the instructions, so the coach explained them again.', form: "didn't understand", full: "The team didn't understand the instructions, so the coach explained them again.", tense: 'Quá khứ đơn', reason: 'Chuỗi sự việc đã kết thúc trong quá khứ; phủ định dùng did not + V1.', translation: 'Đội không hiểu hướng dẫn nên huấn luyện viên giải thích lại.', wrong: "doesn't understand" },
  { prompt: 'At 6 p.m. last night, Dad ___ (drive) home through heavy rain.', form: 'was driving', full: 'At 6 p.m. last night, Dad was driving home through heavy rain.', tense: 'Quá khứ tiếp diễn', reason: 'At 6 p.m. last night đặt hành động đang diễn ra tại mốc quá khứ.', translation: 'Lúc 6 giờ tối qua, bố đang lái xe về nhà dưới trời mưa lớn.', wrong: 'drove' },
  { prompt: 'I ___ (read) when the power suddenly went out.', form: 'was reading', full: 'I was reading when the power suddenly went out.', tense: 'Quá khứ tiếp diễn', reason: 'Đọc là hoạt động nền đang diễn ra; mất điện là sự kiện xen vào.', translation: 'Tôi đang đọc thì điện đột nhiên tắt.', wrong: 'read' },
  { prompt: 'By the time we reached the station, the train ___ (leave).', form: 'had left', full: 'By the time we reached the station, the train had left.', tense: 'Quá khứ hoàn thành', reason: 'Tàu rời đi trước mốc chúng tôi đến ga.', translation: 'Khi chúng tôi đến ga thì tàu đã rời đi.', wrong: 'left' },
  { prompt: 'She ___ (never / see) snow before she moved to Canada.', form: 'had never seen', full: 'She had never seen snow before she moved to Canada.', tense: 'Quá khứ hoàn thành', reason: 'Trải nghiệm chưa từng có xảy ra trước mốc chuyển đến Canada.', translation: 'Cô ấy chưa từng thấy tuyết trước khi chuyển đến Canada.', wrong: 'has never seen' },
  { prompt: 'The ground was muddy because it ___ (rain) all night.', form: 'had been raining', full: 'The ground was muddy because it had been raining all night.', tense: 'Quá khứ hoàn thành tiếp diễn', reason: 'All night nhấn quá trình kéo dài trước khi quan sát mặt đất.', translation: 'Mặt đất lầy lội vì trời đã mưa suốt đêm.', wrong: 'had rained' },
  { prompt: 'He ___ (study) for three hours when his friends arrived.', form: 'had been studying', full: 'He had been studying for three hours when his friends arrived.', tense: 'Quá khứ hoàn thành tiếp diễn', reason: 'For three hours nhấn thời lượng đến một mốc quá khứ.', translation: 'Anh ấy đã học được ba tiếng khi bạn bè đến.', wrong: 'was studying' },
  { prompt: 'The doorbell is ringing; I ___ (get) it.', form: 'will get', full: 'The doorbell is ringing; I will get it.', tense: 'Tương lai đơn', reason: 'Đây là quyết định đưa ra ngay khi nghe chuông.', translation: 'Chuông cửa đang reo; tôi sẽ ra mở.', wrong: 'am going to get' },
  { prompt: 'I promise I ___ (return) your book tomorrow.', form: 'will return', full: 'I promise I will return your book tomorrow.', tense: 'Tương lai đơn', reason: 'Will thường dùng trong lời hứa.', translation: 'Tôi hứa ngày mai sẽ trả sách cho bạn.', wrong: 'return' },
  { prompt: 'Look at that cyclist! She ___ (hit) the barrier.', form: 'is going to hit', full: 'Look at that cyclist! She is going to hit the barrier.', tense: 'Tương lai gần (be going to)', reason: 'Dấu hiệu hiện tại làm căn cứ cho dự đoán.', translation: 'Nhìn người đi xe đạp kia! Cô ấy sắp đâm vào rào chắn.', wrong: 'will hit' },
  { prompt: 'We have already booked the tickets; we ___ (fly) to Seoul next month.', form: 'are going to fly', full: 'We are going to fly to Seoul next month.', tense: 'Tương lai gần (be going to)', reason: 'Đặt vé và quyết định trước cho thấy dự định đã có.', translation: 'Chúng tôi đã đặt vé; tháng tới chúng tôi dự định bay đến Seoul.', wrong: 'fly' },
  { prompt: 'At this time tomorrow, I ___ (sit) in my final exam.', form: 'will be sitting', full: 'At this time tomorrow, I will be sitting in my final exam.', tense: 'Tương lai tiếp diễn', reason: 'At this time tomorrow xác định hành động đang diễn ra tại mốc tương lai.', translation: 'Giờ này ngày mai, tôi sẽ đang làm bài thi cuối kỳ.', wrong: 'will sit' },
  { prompt: 'This time next week, the crew ___ (install) the new equipment.', form: 'will be installing', full: 'This time next week, the crew will be installing the new equipment.', tense: 'Tương lai tiếp diễn', reason: 'This time next week nhìn vào hoạt động đang diễn ra ở thời điểm tương lai.', translation: 'Giờ này tuần sau, đội thi công sẽ đang lắp thiết bị mới.', wrong: 'installs' },
  { prompt: 'By 5 p.m., the editor ___ (check) every page.', form: 'will have checked', full: 'By 5 p.m., the editor will have checked every page.', tense: 'Tương lai hoàn thành', reason: 'By 5 p.m. đặt hạn mà trước đó việc kiểm tra sẽ hoàn tất.', translation: 'Đến 5 giờ chiều, biên tập viên sẽ kiểm tra xong từng trang.', wrong: 'will check' },
  { prompt: 'By next spring, they ___ (build) the new bridge.', form: 'will have built', full: 'By next spring, they will have built the new bridge.', tense: 'Tương lai hoàn thành', reason: 'Hành động sẽ hoàn tất trước mốc tương lai next spring.', translation: 'Đến mùa xuân tới, họ sẽ xây xong cây cầu mới.', wrong: 'will be building' },
  { prompt: 'By midnight, the nurses ___ (work) for twelve hours.', form: 'will have been working', full: 'By midnight, the nurses will have been working for twelve hours.', tense: 'Tương lai hoàn thành tiếp diễn', reason: 'For twelve hours nhấn thời lượng đến mốc tương lai midnight.', translation: 'Đến nửa đêm, các y tá sẽ làm việc được mười hai tiếng.', wrong: 'will have worked' },
  { prompt: 'By August, Sam ___ (live) in this city for five years.', form: 'will have been living', full: 'By August, Sam will have been living in this city for five years.', tense: 'Tương lai hoàn thành tiếp diễn', reason: 'For five years nhấn quá trình kéo dài đến mốc tương lai.', translation: 'Đến tháng Tám, Sam sẽ sống ở thành phố này được năm năm.', wrong: 'will live' },
  { prompt: 'My mother usually ___ (make) tea at 7, but today she ___ (work) late.', form: 'makes / is working', full: 'My mother usually makes tea at 7, but today she is working late.', tense: 'Hiện tại đơn + hiện tại tiếp diễn', reason: 'Usually là thói quen; today mô tả tình huống khác thường đang diễn ra.', translation: 'Mẹ tôi thường pha trà lúc 7 giờ, nhưng hôm nay bà đang làm muộn.', wrong: 'is making / works' },
  { prompt: 'I ___ (know) the answer now; I ___ (learn) it yesterday.', form: 'know / learned', full: 'I know the answer now; I learned it yesterday.', tense: 'Hiện tại đơn + quá khứ đơn', reason: 'Know mô tả trạng thái hiện tại; learned là sự kiện quá khứ có mốc yesterday.', translation: 'Giờ tôi biết câu trả lời; hôm qua tôi đã học nó.', wrong: 'am knowing / have learned' },
  { prompt: 'When the guests ___ (arrive), we ___ (already / prepare) the meal.', form: 'arrived / had already prepared', full: 'When the guests arrived, we had already prepared the meal.', tense: 'Quá khứ đơn + quá khứ hoàn thành', reason: 'Arrived là mốc quá khứ; việc chuẩn bị đã xong trước đó.', translation: 'Khi khách đến, chúng tôi đã chuẩn bị xong bữa ăn.', wrong: 'had arrived / already prepared' },
  { prompt: 'By the time the concert starts, we ___ (wait) outside for an hour.', form: 'will have been waiting', full: 'By the time the concert starts, we will have been waiting outside for an hour.', tense: 'Tương lai hoàn thành tiếp diễn', reason: 'For an hour nhấn thời lượng đến mốc tương lai; mệnh đề thời gian dùng hiện tại đơn.', translation: 'Khi buổi hòa nhạc bắt đầu, chúng tôi sẽ đợi bên ngoài được một tiếng.', wrong: 'will wait' },
]

const mixedFormats = [
  'Chọn dạng đúng cho chỗ trống (A: {form}; B: {wrong}; C: will have + V3; D: was/were + V-ing).',
  'Chia động từ trong ngoặc và viết lại cả câu hoàn chỉnh.',
  'Điền dạng đúng vào chỗ trống; sau đó dịch câu.',
  'Tìm và sửa lỗi trong câu sau: {wrongFull}',
  'Hoàn thành câu theo ngữ cảnh đã cho.',
  'Hội thoại: người nói cần diễn đạt đúng sự việc trong ngữ cảnh. Hoàn thành câu: {prompt}',
  'Đoạn văn: điền dạng đúng vào chỗ trống trong câu sau: {prompt}',
  'Chọn tên thì phù hợp với ngữ cảnh và hoàn thành câu: {prompt}',
  'Giải thích vì sao dạng động từ trong câu này phù hợp: {prompt}',
  'Ôn tập tổng hợp: hoàn thành câu và xác định thì: {prompt}',
]

function buildMixedGroups(): QuestionGroup[] {
  const all = Array.from({ length: 3 }, (_, round) => mixedSeeds.map((seed, seedIndex) => {
    const formatIndex = (seedIndex + round * 3) % 10
    const format = mixedFormats[formatIndex]
    const wrongSentence = seed.full.replace(seed.form, seed.wrong)
    const prompt = format
      .replace('{form}', seed.form)
      .replace('{wrong}', seed.wrong)
      .replace('{wrongFull}', wrongSentence === seed.full ? seed.prompt.replace(/___ \([^)]*\)/, seed.wrong) : wrongSentence)
      .replace('{prompt}', seed.prompt)
    return {
      prompt: prompt.includes(seed.prompt) ? prompt : `${prompt} — ${seed.prompt}`,
      answer: seed.full,
      reason: `${seed.tense}: ${seed.reason}${formatIndex === seedIndex % 10 ? ` Đáp án đúng là “${seed.form}”; các lựa chọn khác không phù hợp với mốc hoặc ý nghĩa trong câu.` : ''}`,
      translation: seed.translation,
    }
  })).flat()
  return [
    { title: 'Cấp độ 1 · Cơ bản (20 câu)', questions: all.slice(0, 20) },
    { title: 'Cấp độ 2 · Trung bình (25 câu)', questions: all.slice(20, 45) },
    { title: 'Cấp độ 3 · Nâng cao (25 câu)', questions: all.slice(45, 70) },
    { title: 'Cấp độ 4 · Thử thách tổng hợp (20 câu)', questions: all.slice(70, 90) },
  ]
}

const mixedGroups = buildMixedGroups()

const comparisonTopicIds: [string, string][] = [
  ['present-simple', 'present-continuous'], ['present-perfect', 'past-simple'],
  ['present-perfect', 'present-perfect-continuous'], ['past-simple', 'past-continuous'],
  ['past-simple', 'past-perfect'], ['past-perfect', 'past-perfect-continuous'],
  ['future-simple', 'be-going-to'], ['future-simple', 'future-continuous'],
  ['future-perfect', 'future-perfect-continuous'],
]

function ExampleBlock({ example }: { example: Example }) {
  return <div className="rounded-lg bg-white/80 p-3"><p className="font-semibold leading-6 text-gray-900">{example.en}</p><p className="mt-1 text-sm leading-5 text-gray-600">{example.vi}</p></div>
}

function QuestionGroupBlock({ group, index }: { group: QuestionGroup; index: number }) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})
  const normalize = (value: string) => value.trim().toLowerCase().replace(/[.!?]+$/g, '').replace(/\s+/g, ' ')
  const choicesFor = (question: Question) => {
    const prompt = `${question.prompt} ${group.title.startsWith('18 câu chọn') ? contrastChoiceExtras[Math.floor(group.questions.indexOf(question) / 2)] : ''}`
    const markedChoices = [...prompt.matchAll(/([A-D])\)\s*(.*?)(?=\s+[A-D]\)\s*|$)/g)]
    const chooseChoices = [...prompt.matchAll(/(?:Choose:\s*)([A-B])\s+(.*?)(?=,\s*[A-B]\s+|$)/g)]
    const matches = [...chooseChoices, ...markedChoices]
    if (matches.length < 2) return []
    return matches.map((match) => ({ key: match[1], text: match[2].trim() }))
  }
  const isCorrect = (question: Question, answer: string) => {
    const selectedChoice = answer.match(/^([A-D])$/)?.[1]
    const correctChoice = question.answer.match(/^([A-D])\s*[—-]/)?.[1]
    if (selectedChoice && correctChoice) return selectedChoice === correctChoice
    if (selectedChoice) {
      const selectedText = choicesFor(question).find((choice) => choice.key === selectedChoice)?.text
      return selectedText ? normalize(selectedText) === normalize(question.answer) : false
    }
    return normalize(answer) === normalize(question.answer)
  }
  return <section className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5" aria-labelledby={`exercise-group-${index}`}>
    <h3 id={`exercise-group-${index}`} className="font-bold text-gray-900">{group.title}</h3>
    <ol className="mt-3 space-y-3">
      {group.questions.map((question, questionIndex) => <li key={`${index}-${questionIndex}`} className="rounded-lg border border-gray-100 bg-gray-50/70 p-3 sm:p-4">
        <p className="text-sm font-medium leading-6 text-gray-900"><span className="mr-2 text-xs font-bold text-blue-700">{questionIndex + 1}.</span>{question.prompt.replace(/\s+[A-D]\)\s.*$/, '').replace(/\s+Choose:.*$/, '')}</p>
        {choicesFor(question).length > 0 ? <div className="mt-3 grid gap-2 sm:grid-cols-2">{choicesFor(question).map((choice) => <button key={choice.key} type="button" disabled={checked[questionIndex]} onClick={() => setAnswers((current) => ({ ...current, [questionIndex]: choice.key }))} className={`rounded-lg border p-2 text-left text-sm ${answers[questionIndex] === choice.key ? 'border-blue-500 bg-blue-50 text-blue-900' : 'border-gray-200 bg-white text-gray-700'} disabled:cursor-default`}>{choice.key}) {choice.text}</button>)}</div> : <input aria-label={`Câu trả lời ${questionIndex + 1}`} value={answers[questionIndex] ?? ''} disabled={checked[questionIndex]} onChange={(event) => setAnswers((current) => ({ ...current, [questionIndex]: event.target.value }))} className="mt-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="Nhập câu trả lời của bạn" />}
        {!checked[questionIndex] ? <button type="button" disabled={!answers[questionIndex]?.trim()} onClick={() => setChecked((current) => ({ ...current, [questionIndex]: true }))} className="mt-2 rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">Kiểm tra đáp án</button> : <div className={`mt-3 rounded-lg border p-3 text-sm leading-6 ${isCorrect(question, answers[questionIndex]) ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`}>
          <p className={`font-semibold ${isCorrect(question, answers[questionIndex]) ? 'text-emerald-800' : 'text-red-700'}`}>{isCorrect(question, answers[questionIndex]) ? 'Chính xác!' : 'Chưa chính xác — hãy xem lại đáp án.'}</p>
          <p className="mt-1"><span className="font-semibold">Đáp án:</span> <span className="font-medium text-emerald-900">{question.answer}</span></p>
          <p className="text-gray-700"><span className="font-semibold">Giải thích:</span> {question.reason}</p>
          <p className="text-gray-600"><span className="font-semibold">Nghĩa:</span> {question.translation}</p>
        </div>}
      </li>)}
    </ol>
  </section>
}

function GoingToLesson() {
  return <>
    <section className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5"><h3 className="font-bold text-gray-900">Mục tiêu học tập</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-gray-700">{goingGoals.map((goal) => <li key={goal}>{goal}</li>)}</ul></section>
    <section className="space-y-3"><h3 className="font-bold text-gray-900">Khái niệm và hai cách dùng chính</h3><p className="text-sm leading-6 text-gray-700">Be going to gồm be chia theo chủ ngữ, cụm going to và động từ nguyên mẫu V1. Cấu trúc diễn đạt dự định/kế hoạch đã có từ trước hoặc dự đoán dựa trên dấu hiệu hiện tại. Thời gian như tomorrow hay soon chỉ là thông tin ngữ cảnh, không tự quyết định cấu trúc.</p><div className="grid gap-3 md:grid-cols-2">{goingExamples.slice(0, 4).map((example) => <ExampleBlock key={example.en} example={example} />)}</div></section>
    <section className="space-y-3"><h3 className="font-bold text-gray-900">Công thức và cấu trúc</h3><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{[
      ['Khẳng định (+)', 'S + am/is/are + going to + V1 + O', 'She is going to apply for a new job.', 'Cô ấy dự định ứng tuyển một công việc mới.'],
      ['Phủ định (−)', 'S + am/is/are + not + going to + V1 + O', 'They are not going to travel this weekend.', 'Cuối tuần này họ không định đi du lịch.'],
      ['Nghi vấn Yes/No (?)', 'Am/Is/Are + S + going to + V1 + O?', 'Are you going to study tonight? — Yes, I am.', 'Bạn định học tối nay à? — Vâng, đúng vậy.'],
      ['Wh- tìm C', 'Wh-word + am/is/are + S + going to + V1 + ...?', 'What are you going to do tomorrow?', 'Ngày mai bạn định làm gì?'],
      ['Wh- tìm A', 'Who + is + going to + V1 + ...?', 'Who is going to help us?', 'Ai sẽ giúp chúng ta?'],
    ].map(([label, formula, example, translation], index) => <div key={label} className={`rounded-xl border p-4 ${['border-blue-200 bg-blue-50/70', 'border-rose-200 bg-rose-50/60', 'border-emerald-200 bg-emerald-50/60', 'border-sky-100 bg-sky-50/60', 'border-emerald-100 bg-emerald-50/60'][index]}`}><p className={`text-xs font-bold uppercase tracking-wide ${['text-blue-700', 'text-red-700', 'text-emerald-700', 'text-sky-800', 'text-emerald-800'][index]}`}>{label}</p><p className={`mt-2 break-words font-mono text-base italic leading-7 ${['text-blue-950', 'text-blue-950', 'text-blue-950', 'text-sky-950', 'text-emerald-950'][index]}`}>{formula}</p><p className="mt-3 border-t border-current/10 pt-2 text-base font-medium leading-6 text-gray-900">{example}</p><p className="mt-2 text-sm leading-6 text-gray-600">{translation}</p></div>)}</div>      <div className="overflow-x-auto rounded-xl border border-gray-200"><table className="min-w-[480px] w-full border-collapse text-left text-sm"><thead className="bg-gray-50"><tr>{['Chủ ngữ', 'To be', 'Ví dụ'].map((h) => <th key={h} className="p-3 font-semibold text-gray-700">{h}</th>)}</tr></thead><tbody>{[['I','am','I am going to study.'],['You / We / They','are','They are going to study.'],['He / She / It','is','She is going to study.']].map((row) => <tr key={row[0]} className="border-t border-gray-100"><td className="p-3">{row[0]}</td><td className="p-3">{row[1]}</td><td className="p-3 font-medium">{row[2]}</td></tr>)}</tbody></table></div>
      <p className="text-sm leading-6 text-gray-700">Câu trả lời ngắn dùng to be tương ứng: <span className="font-medium">Are you going to study? — Yes, I am. / No, I'm not.</span> Với câu hỏi chủ ngữ, Who thay cho S: <span className="font-medium">Who is going to help us?</span></p>
    </section>
    <section className="space-y-3"><h3 className="font-bold text-gray-900">Chọn cấu trúc theo ngữ cảnh</h3><div className="overflow-x-auto rounded-xl border border-gray-200"><table className="min-w-[620px] w-full border-collapse text-left text-sm"><thead className="bg-gray-50"><tr>{['Ngữ cảnh', 'Cấu trúc thường phù hợp', 'Ví dụ'].map((h) => <th key={h} className="p-3 font-semibold text-gray-700">{h}</th>)}</tr></thead><tbody>{[
      ['Dự định có trước', 'Be going to', "I'm going to study tonight."], ['Bằng chứng hiện tại', 'Be going to', 'Look! The glass is going to fall.'],
      ['Quyết định vừa đưa ra / lời hứa / đề nghị', 'Will', "The phone is ringing. I'll answer it."], ['Sắp xếp cụ thể đã bố trí', 'Hiện tại tiếp diễn', "I'm meeting Lan at 7 p.m. tomorrow."], ['Lịch trình cố định', 'Hiện tại đơn', 'The train leaves at 8 a.m.'],
    ].map((row) => <tr key={row[0]} className="border-t border-gray-100 align-top">{row.map((cell, i) => <td key={i} className="p-3">{cell}</td>)}</tr>)}</tbody></table></div><p className="text-sm leading-6 text-gray-600">Đây là cách dùng điển hình, không phải quy tắc tuyệt đối. Be going to và hiện tại tiếp diễn có thể giao nhau; hãy xét điều người nói muốn nhấn mạnh.</p></section>
    <section><h3 className="font-bold text-gray-900">Lỗi thường gặp và cách sửa</h3><div className="mt-3 overflow-x-auto rounded-xl border border-gray-200"><table className="min-w-[640px] w-full border-collapse text-left text-sm"><thead className="bg-gray-50"><tr>{['Câu sai', 'Câu đúng', 'Lý do'].map((h) => <th key={h} className="p-3 font-semibold text-gray-700">{h}</th>)}</tr></thead><tbody>{[
      ['I going to study.', 'I am going to study.', 'Thiếu be chia theo chủ ngữ.'], ['She are going to leave.', 'She is going to leave.', 'She đi với is.'], ['He is going to studying.', 'He is going to study.', 'Sau going to dùng V1.'], ['Do you going to leave?', 'Are you going to leave?', 'Đảo be lên trước chủ ngữ.'], ['Are you going to study? — Yes, I do.', '— Yes, I am.', 'Câu trả lời ngắn dùng be, không dùng do.'],
    ].map((row) => <tr key={row[0]} className="border-t border-gray-100 align-top">{row.map((cell, i) => <td key={i} className="p-3">{cell}</td>)}</tr>)}</tbody></table></div></section>
    <section className="rounded-xl border border-amber-100 bg-amber-50/60 p-4"><h3 className="font-bold text-gray-900">Tóm tắt trọng tâm</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-gray-700"><li>Khẳng định: <code className="font-mono italic">S + am/is/are + going to + V1</code>.</li><li>Phủ định: <code className="font-mono italic">S + am/is/are + not + going to + V1</code>.</li><li>Nghi vấn: <code className="font-mono italic">Am/Is/Are + S + going to + V1?</code>.</li><li>Dùng cho dự định đã có trước và dự đoán có dấu hiệu hiện tại; cân nhắc will, hiện tại tiếp diễn hoặc hiện tại đơn theo ý nghĩa.</li></ul></section>
  </>
}

function ContrastLesson() {
  const formulaPairs = [
    ['S + V(s/es)', 'S + am/is/are + V-ing'],
    ['S + have/has + V3', 'S + V2/ed'],
    ['S + have/has + V3', 'S + have/has + been + V-ing'],
    ['S + V2/ed', 'S + was/were + V-ing'],
    ['S + V2/ed', 'S + had + V3'],
    ['S + had + V3', 'S + had + been + V-ing'],
    ['S + will + V1', 'S + am/is/are + going to + V1'],
    ['S + will + V1', 'S + will + be + V-ing'],
    ['S + will + have + V3', 'S + will + have + been + V-ing'],
  ]
  return <>
    <section className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5"><h3 className="font-bold text-gray-900">Mục tiêu và cách chọn thì</h3><p className="mt-2 text-sm leading-6 text-gray-700">Xác định mốc thời gian, diễn biến sự việc và trọng tâm thông tin. Các dấu hiệu như since, for, already, yet, yesterday, while và by the time gợi ý nhưng không tự quyết định thì.</p></section>
    <section className="space-y-4"><h3 className="font-bold text-gray-900">Chọn một cặp thì để đối chiếu</h3>{comparePairs.map((pair, index) => <article key={pair.title} className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm sm:p-5">
      <h4 className="text-base font-bold text-blue-950">{pair.title}</h4>
      <p className="mt-2 text-sm leading-6 text-gray-700">{pair.difference}</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">{formulaPairs[index].map((formula, formulaIndex) => <div key={formula} className={`rounded-xl border p-3 ${formulaIndex === 0 ? 'border-sky-100 bg-sky-50/70' : 'border-violet-100 bg-violet-50/60'}`}><p className="text-xs font-semibold uppercase tracking-wide text-gray-600">{formulaIndex === 0 ? 'Cau truc thu nhat' : 'Cau truc thu hai'}</p><p className="mt-1 break-words font-mono text-base italic leading-7 text-blue-950">{formula}</p><div className="mt-3 border-t border-white/80 pt-3"><ExampleBlock example={pair.examples[formulaIndex]} /></div></div>)}</div>
      <div className="mt-3 rounded-lg border border-amber-100 bg-amber-50/60 p-3"><p className="text-sm font-semibold text-amber-950">Tự kiểm tra</p><p className="mt-1 text-sm leading-6 text-gray-800">{pair.question}</p><p className="mt-2 text-xs leading-5 text-gray-600">Mẹo nhớ: Đọc cả ngữ cảnh và xác định điều người nói muốn nhấn mạnh trước khi chia động từ.</p></div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">{comparisonTopicIds[index].map((id) => <Link key={id} to={`/dashboard/grammar/${id}`} className="text-sm font-semibold text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-900">Mở bài học liên quan</Link>)}</div>
      <div className="mt-4 border-t border-gray-100 pt-3"><QuestionGroupBlock group={{ title: 'Tự luyện cặp thì này', questions: contrastChoiceRows.slice(index * 2, index * 2 + 2) }} index={100 + index} /></div>
    </article>)}</section>
    <section className="rounded-xl border border-amber-100 bg-amber-50/60 p-4"><h3 className="font-bold text-gray-900">Lỗi thường gặp</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-gray-700"><li>Chọn thì chỉ vì thấy một từ khóa mà không xét nghĩa toàn câu.</li><li>Dùng hiện tại hoàn thành với mốc quá khứ đã kết thúc như yesterday hoặc last year.</li><li>Không xét hành động nền và sự kiện xen vào trong câu có when/while.</li><li>Dùng quá khứ hoàn thành khi thứ tự sự việc đã rõ mà không cần nhấn mạnh.</li><li>Phân biệt kết quả/số lượng với quá trình/thời lượng.</li></ul></section>
    <section className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4"><h3 className="font-bold text-gray-900">Tóm tắt</h3><p className="mt-2 text-sm leading-6 text-gray-700">Kết hợp mốc thời gian, diễn biến và trọng tâm thông tin. Khi ngữ cảnh cho phép nhiều cách nói tự nhiên, hãy chú ý đến sắc thái thay vì coi một dấu hiệu thời gian là quy tắc tuyệt đối.</p></section>
  </>
}
function MixedPracticeLesson() {
  const [activeLevel, setActiveLevel] = useState<number | null>(null)
  return <>
    <section className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5"><h3 className="font-bold text-gray-900">Mục tiêu và cách làm</h3><p className="mt-2 text-sm leading-6 text-gray-700">Bài ôn tập bao phủ 12 thì và be going to. Mỗi câu có đáp án, tên thì/dạng động từ, giải thích và bản dịch. Làm theo từng cấp độ; trước khi xem đáp án, hãy tự xác định mốc thời gian, ý nghĩa và điều câu muốn nhấn mạnh.</p><p className="mt-2 text-sm leading-6 text-gray-700">Các dạng được luân phiên: chọn đáp án, chia động từ, điền chỗ trống, sửa lỗi, hoàn thành câu, hội thoại, đoạn văn, chọn thì theo ngữ cảnh, giải thích lựa chọn và ôn tập tổng hợp.</p></section>
    <section><h3 className="font-bold text-gray-900">Phạm vi cấu trúc</h3><div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">{[
      ['Hiện tại đơn','V(s/es)'], ['Hiện tại tiếp diễn','am/is/are + V-ing'], ['Hiện tại hoàn thành','have/has + V3'], ['Hiện tại hoàn thành tiếp diễn','have/has + been + V-ing'],
      ['Quá khứ đơn','V2/ed'], ['Quá khứ tiếp diễn','was/were + V-ing'], ['Quá khứ hoàn thành','had + V3'], ['Quá khứ hoàn thành tiếp diễn','had + been + V-ing'],
      ['Tương lai đơn','will + V1'], ['Tương lai gần','am/is/are + going to + V1'], ['Tương lai tiếp diễn','will + be + V-ing'], ['Tương lai hoàn thành','will + have + V3'], ['Tương lai hoàn thành tiếp diễn','will + have + been + V-ing'],
    ].map(([tense, formula]) => <div key={tense} className="rounded-lg border border-gray-200 p-3"><p className="text-xs font-semibold text-gray-700">{tense}</p><p className="mt-1 break-words font-mono text-sm italic leading-6 text-blue-950">{formula}</p></div>)}</div></section>
    <section className="space-y-3"><h3 className="font-bold text-gray-900">Chọn cấp độ luyện tập</h3><div className="grid gap-3 sm:grid-cols-2">{mixedGroups.map((group, index) => <div key={group.title} className="rounded-xl border border-blue-100 bg-blue-50/50 p-4"><h4 className="font-semibold text-gray-900">{group.title}</h4><p className="mt-1 text-sm leading-6 text-gray-600">{['Ôn các cấu trúc quen thuộc và nhận diện mốc thời gian.','Kết hợp nhiều thì trong tình huống rõ ràng.','Luyện câu dài hơn, sửa lỗi và phân biệt sắc thái.','Tổng hợp nhiều dạng bài theo ngữ cảnh.'][index]}</p><button type="button" onClick={() => setActiveLevel(index)} className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white"><BookOpen className="h-4 w-4" />{activeLevel === index ? 'Đang luyện tập' : 'Bắt đầu cấp độ'}</button></div>)}</div></section>
    {activeLevel !== null && <section className="space-y-3"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-bold text-gray-900">{mixedGroups[activeLevel].title}</h3><button type="button" onClick={() => setActiveLevel(null)} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700"><RotateCcw className="h-4 w-4" />Chọn cấp độ khác</button></div><QuestionGroupBlock group={mixedGroups[activeLevel]} index={activeLevel} /></section>}
    <section className="rounded-xl border border-amber-100 bg-amber-50/60 p-4"><h3 className="font-bold text-gray-900">Nhắc nhanh</h3><p className="mt-2 text-sm leading-6 text-gray-700">Dấu hiệu thời gian chỉ hỗ trợ. Xem trình tự sự việc, thời lượng, kết quả, thói quen, dự định và bằng chứng trước khi chọn thì. Nếu ngữ cảnh có thể chấp nhận hơn một cấu trúc, lời giải ghi rõ sắc thái phù hợp.</p></section>
  </>
}

export default function TenseSupplementLesson({ topic, onClose }: { topic: GrammarTopic; onClose: () => void }) {
  const isGoingTo = topic.id === 'be-going-to'
  const isContrast = topic.id === 'tense-contrasts'
  const isMixed = topic.id === 'mixed-tense-practice'
  const groups = isGoingTo ? goingGroups : isContrast ? contrastGroups.slice(1) : mixedGroups
  const questionCount = groups.reduce((total, group) => total + group.questions.length, 0)

  return <article className="mb-6 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
    <button onClick={onClose} className="mb-4 inline-flex min-h-9 items-center gap-1 rounded-lg px-2 text-xs font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"><ArrowLeft className="h-4 w-4" /> Quay lại danh sách 12 thì</button>
    <header className="mb-5"><p className="text-xs font-semibold uppercase tracking-wide text-violet-700">12 thì tiếng Anh · {topic.level}</p><h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">{topic.title}</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">{topic.summary}</p></header>
    <div className="space-y-6">
      {isGoingTo ? <GoingToLesson /> : isContrast ? <ContrastLesson /> : <MixedPracticeLesson />}
      {!isMixed && <section className="space-y-3"><div className="flex items-center gap-2"><ClipboardList className="h-4 w-4 text-blue-700" /><h3 className="font-bold text-gray-900">Bài tập và lời giải ({questionCount} câu)</h3></div><p className="text-sm leading-6 text-gray-600">Tự trả lời, kiểm tra đáp án rồi xem giải thích và nghĩa tiếng Việt.</p><div className="space-y-4">{groups.map((group, index) => <QuestionGroupBlock key={group.title} group={group} index={index} />)}</div></section>}
      <aside className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4"><h3 className="flex items-center gap-2 font-bold text-gray-900"><CheckCircle2 className="h-4 w-4 text-emerald-700" /> Hoàn thành bài học</h3><p className="mt-1 text-sm leading-6 text-gray-700">Hãy thử tự trả lời trước khi mở lời giải. Sau đó quay lại các bài 12 thì liên quan để ôn cấu trúc cụ thể.</p><div className="mt-2 flex items-center gap-2 text-xs font-semibold text-blue-700"><BookOpen className="h-4 w-4" /> Nội dung bổ trợ cho lộ trình 12 thì</div></aside>
    </div>
  </article>
}

