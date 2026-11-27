export const TEENNIE_INFO = {
  name: "Nha Khoa Teennie – Teennie Clinic",
  shortName: "Teennie Clinic",
  slogan: "Nha khoa niềng răng học đường TP.HCM – Đẹp nhanh chỉ sau 6 – 36 lần hẹn",
  coFounder: "Đồng sáng lập bởi Nghệ sĩ Ngô Kiến Huy & Đội ngũ chuyên gia chỉnh nha",
  hotline: "0836 068 680",
  secondaryHotline: "098 375 8019",
  address: "Số 5 Kỳ Đồng, Phường Nhiêu Lộc, Quận 3, TP. Hồ Chí Minh",
  operatingHours: "08:30 – 19:30 (Tất cả các ngày trong tuần)",
  ecosystem: "Thuộc hệ sinh thái nha khoa San Dental",
  license: "Giấy phép hoạt động Sở Y Tế TP.HCM số: 07826/HCM-GPHĐ",
  logoUrl: "https://teennie.vn/wp-content/uploads/2025/04/logo-teennie-2.png"
};

export const PROMOTIONS = {
  studentDiscount: "Giảm 5.000.000đ cho Học sinh - Sinh viên",
  workerDiscount: "Giảm 3.000.000đ cho Người đi làm",
  freeExamPackage: "Miễn phí thăm khám 10 bước & Chụp phim 3D Cone Beam CT + Scan iTero 5D trị giá 1.500.000đ",
  installment: "Trả góp 0% lãi suất từ 12 đến 30 tháng, chỉ từ 1 - 2 triệu/tháng"
};

export const DENTAL_PROBLEMS = [
  {
    id: "ho",
    title: "Răng Hô (Vẩu)",
    desc: "Hàm trên nhô ra phía trước nhiều so với hàm dưới, môi không khép kín tự nhiên, nụ cười kém tự tin.",
    duration: "12 – 24 lần hẹn",
    solution: "Niềng răng mắc cài hoặc Invisalign kéo lui răng cửa, cân chỉnh xương ổ răng.",
    tag: "Phổ biến 45%"
  },
  {
    id: "mom",
    title: "Răng Móm (Cắn Ngược)",
    desc: "Răng hàm dưới phủ ngoài răng hàm trên, cằm chìa ra ngoài (mặt lưỡi cày), phát âm khó khăn.",
    duration: "14 – 28 lần hẹn",
    solution: "Khí cụ nới rộng kết hợp mắc cài đưa hàm dưới về đúng khớp cắn chuẩn.",
    tag: "Cần can thiệp sớm"
  },
  {
    id: "thua",
    title: "Răng Thưa (Hở Kẽ)",
    desc: "Giữa các răng có khoảng trống lớn gây dắt thức ăn, phát âm phì hơi và mất thẩm mỹ cung cười.",
    duration: "8 – 16 lần hẹn",
    solution: "Dùng lực kéo tịnh tiến thu hẹp khe hở, định hình lại đường cười rạng rỡ.",
    tag: "Khắc phục nhanh nhất"
  },
  {
    id: "lech-lac",
    title: "Răng Lệch Lạc (Khấp Khểnh)",
    desc: "Cung hàm hẹp khiến răng mọc chen chúc, xô lệch, khó vệ sinh dễ gây viêm nướu sâu răng.",
    duration: "12 – 24 lần hẹn",
    solution: "Dàn đều cung răng, tạo khoảng và cân đối trục răng chuẩn tỷ lệ vàng.",
    tag: "Phổ biến 40%"
  },
  {
    id: "can-sau",
    title: "Khớp Cắn Sâu",
    desc: "Răng cửa hàm trên che phủ gần như toàn bộ răng cửa hàm dưới, gây mòn mặt nhai và đau khớp thái dương hàm.",
    duration: "12 – 26 lần hẹn",
    solution: "Đánh lún răng trước và trồi răng sau để đưa khớp cắn về vị trí sinh lý.",
    tag: "Nguy cơ mòn men"
  },
  {
    id: "can-cheo",
    title: "Khớp Cắn Chéo",
    desc: "Một hoặc nhiều nhóm răng bị lệch vào trong hoặc ra ngoài gây méo mặt, nụ cười lệch một bên.",
    duration: "10 – 22 lần hẹn",
    solution: "Nắn chỉnh đa hướng đưa các nhóm răng về đúng khớp cắn lồng múi hoàn hảo.",
    tag: "Cần chỉnh trục"
  }
];

export const BRACES_METHODS = [
  {
    id: "kim-loai",
    name: "Mắc Cài Kim Loại Kinh Điển",
    tagline: "Lựa chọn số 1 của học sinh - sinh viên",
    priceRange: "38.000.000đ – 58.000.000đ",
    priceSale: "Từ 38 Triệu",
    monthlyInstallment: "Chỉ từ 1.000.000đ/tháng",
    isPopular: true,
    desc: "Phương pháp niềng răng truyền thống với hiệu quả dịch chuyển răng mạnh mẽ, độ bền cao, chi phí tối ưu nhất cho các bạn trẻ.",
    features: [
      "Hiệu quả với mọi ca lệch lạc từ nhẹ đến cực kỳ phức tạp",
      "Lực kéo ổn định, rút ngắn thời gian điều trị",
      "Hơn 30 màu chun niềng cá tính thỏa sức biến tấu phong cách",
      "Áp dụng trả góp 0% tới 30 tháng tại Teennie"
    ]
  },
  {
    id: "tu-dong",
    name: "Mắc Cài Kim Loại Tự Đóng (Tự Buộc)",
    tagline: "Rút ngắn thời gian, ít đau hơn 30%",
    priceRange: "45.000.000đ – 68.000.000đ",
    priceSale: "Từ 45 Triệu",
    monthlyInstallment: "Chỉ từ 1.300.000đ/tháng",
    desc: "Nắp trượt thông minh tự giữ dây cung thay cho thun, giảm ma sát tối đa giúp răng dịch chuyển êm ái và ít phải tái khám hơn.",
    features: [
      "Hệ thống nắp trượt thông minh giảm đau và ê buốt",
      "Rút ngắn từ 4 – 6 tháng so với mắc cài thường",
      "Khoảng cách giữa các lần tái khám dài hơn (6 - 8 tuần/lần)",
      "Vệ sinh răng miệng dễ dàng, ít bám đọng thức ăn"
    ]
  },
  {
    id: "su-tham-my",
    name: "Mắc Cài Sứ Thẩm Mỹ",
    tagline: "Tự tin giao tiếp, gần như vô hình",
    priceRange: "50.000.000đ – 75.000.000đ",
    priceSale: "Từ 50 Triệu",
    monthlyInstallment: "Chỉ từ 1.500.000đ/tháng",
    desc: "Chất liệu sứ sinh học cao cấp có màu sắc tương đồng 99% với màu răng thật, giúp bạn tự tin selfie và nói chuyện suốt quá trình niềng.",
    features: [
      "Màu sứ hòa hợp với men răng tự nhiên, khó nhận biết",
      "Chất liệu sứ y tế lành tính, không gây kích ứng môi má",
      "Khả năng chịu lực tốt, không đổi màu theo thời gian",
      "Rất phù hợp cho người đi làm, diễn thuyết, giao tiếp nhiều"
    ]
  },
  {
    id: "invisalign",
    name: "Niềng Răng Trong Suốt Invisalign (Mỹ)",
    tagline: "Đỉnh cao chỉnh nha vô hình thế hệ mới",
    priceRange: "80.000.000đ – 155.000.000đ",
    priceSale: "Từ 80 Triệu",
    monthlyInstallment: "Chỉ từ 2.500.000đ/tháng",
    desc: "Khay niềng SmartTrack trong suốt độc quyền của tập đoàn Align Technology (Mỹ), tháo lắp thoải mái khi ăn uống và vệ sinh.",
    features: [
      "Khay niềng trong suốt 100%, người đối diện khó nhận ra",
      "Biết trước kết quả nụ cười qua phần mềm ClinCheck 3D",
      "Tháo lắp dễ dàng khi ăn uống các món yêu thích",
      "Không lo rớt mắc cài, cực kỳ phù hợp du học sinh"
    ]
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: 1,
    name: "Ngân Hà (22 tuổi - Sinh viên ĐH Ngoại Thương)",
    problem: "Răng hô hàm trên, cắn chìa nhiều",
    result: "Góc nghiêng thon gọn, cằm V-line, răng đều tăm tắp",
    appointments: "18 lần hẹn (14 tháng)",
    method: "Mắc cài kim loại kinh điển",
    image: "https://teennie.vn/wp-content/uploads/2026/10/nieng-rang-ho-can-chia-truoc-sau-teennie-ngan-ha.webp",
    quote: "Trước đây mình ngại cười lắm vì răng chìa ra ngoài. Đến Teennie được trả góp mỗi tháng hơn 1 triệu, bác sĩ làm rất êm. Giờ cười chụp ảnh tự tin hơn hẳn!"
  },
  {
    id: 2,
    name: "Bảo Ngân (19 tuổi - Sinh viên RMIT)",
    problem: "Răng móm cắn ngược, phát âm lệch",
    result: "Đưa khớp cắn về chuẩn 100%, nụ cười tươi tỏa sáng",
    appointments: "22 lần hẹn (16 tháng)",
    method: "Mắc cài tự đóng",
    image: "https://teennie.vn/wp-content/uploads/2026/10/nieng-rang-mom-can-nguoc-truoc-sau-teennie-bao-ngan.webp",
    quote: "Mặt lưỡi cày làm mình tự ti suốt những năm cấp 3. Nhờ Teennie và bác sĩ Huy đồng hành, mặt mình cân đối hẳn, ai gặp lại cũng khen xinh hơn!"
  },
  {
    id: 3,
    name: "Thu Trang (24 tuổi - Nhân viên Marketing)",
    problem: "Răng thưa kẽ lớn các răng cửa",
    result: "Khít hoàn toàn các khe thưa, dáng răng cung cười hoàn mỹ",
    appointments: "10 lần hẹn (8 tháng)",
    method: "Niềng răng trong suốt Invisalign",
    image: "https://teennie.vn/wp-content/uploads/2026/10/nieng-rang-thua-truoc-sau-teennie-thu-trang.webp",
    quote: "Công việc mình phải gặp khách hàng liên tục nên chọn Invisalign ở Teennie. Khay vừa khít, không ai biết mình đang niềng, mới 8 tháng răng đã khít khìn khịt."
  },
  {
    id: 4,
    name: "Thùy Trang (20 tuổi - Sinh viên Sân Khấu Điện Ảnh)",
    problem: "Răng lệch lạc, chen chúc khấp khểnh nặng",
    result: "Cung hàm đều đặn, đường cười chuẩn tỷ lệ vàng",
    appointments: "20 lần hẹn (15 tháng)",
    method: "Mắc cài sứ thẩm mỹ",
    image: "https://teennie.vn/wp-content/uploads/2026/10/nieng-rang-lech-lac-chen-chuc-truoc-sau-teennie-thuy-trang.webp",
    quote: "Phòng khám ở Kỳ Đồng rất xinh xắn, bác sĩ Trâm nhẹ nhàng chu đáo. Trả góp 0% tại phòng khám không hề áp lực tài chính cho sinh viên!"
  }
];

export const WHY_TEENNIE = [
  {
    step: "01",
    title: "Đẹp Nhanh 6 – 36 Lần Hẹn",
    desc: "Phác đồ cá nhân hóa rút ngắn 4 – 6 tháng so với thông thường. Bác sĩ báo trước số buổi hẹn chính xác ngay sau buổi thăm khám đầu tiên."
  },
  {
    step: "02",
    title: "Bác Sĩ Chỉnh Nha Đồng Hành 1:1",
    desc: "100% bác sĩ có chứng chỉ hành nghề chỉnh nha chuyên sâu, trực tiếp gắn mắc cài, chỉnh lực và theo sát từng lần tái khám của bạn."
  },
  {
    step: "03",
    title: "Trả Góp 0% Không Qua Ngân Hàng",
    desc: "Chỉ cần thanh toán trước từ 30%, phần còn lại chia nhỏ trả dần 1 – 2 triệu/tháng trực tiếp tại quầy Teennie, không phát sinh lãi suất."
  },
  {
    step: "04",
    title: "Thăm Khám 10 Bước Miễn Phí (0đ)",
    desc: "Tặng gói chụp phim X-quang Pano, Cepha, Cone Beam CT 3D và quét dấu răng iTero 5D nhìn trước kết quả nụ cười tương lai."
  },
  {
    step: "05",
    title: "Hợp Đồng Cam Kết Bằng Văn Bản",
    desc: "Minh bạch chi phí từ đầu đến cuối không phát sinh phụ phí ẩn. Bảo hành kết quả nụ cười và hỗ trợ hàm duy trì sau tháo niềng."
  }
];

export const DOCTORS = [
  {
    id: "bs-doan-quoc-huy",
    name: "ThS. BS. Đoàn Quốc Huy",
    title: "Cố Vấn Chuyên Môn Chỉnh Nha Cao Cấp",
    degree: "Thạc Sĩ Y Khoa – Chuyên Gia Chỉnh Nha Hơn 18 Năm",
    avatar: "https://teennie.vn/wp-content/uploads/2026/10/banner-nieng-rang-teennie-ths-bs-doan-quoc-huy.webp",
    exp: "18+ năm kinh nghiệm, điều trị hơn 5.000 ca niềng răng thành công",
    desc: "Chuyên gia chỉnh nha hàm mặt tu nghiệp chuyên sâu tại Hoa Kỳ và Hàn Quốc, giảng viên đào tạo chỉnh nha lâm sàng."
  },
  {
    id: "bs-bich-tram",
    name: "BS. CKI. Nguyễn Thị Bích Trâm",
    title: "Bác Sĩ Trưởng Nhóm Chỉnh Nha Invisalign",
    degree: "Bác Sĩ CKI Răng Hàm Mặt – Invisalign Platinum Provider",
    avatar: "https://images.unsplash.com/photo-1594824813593-9c86950e32f7?auto=format&fit=crop&q=80&w=500",
    exp: "12+ năm kinh nghiệm, chứng chỉ chỉnh nha Invisalign toàn cầu",
    desc: "Chuyên gia nắn chỉnh răng trẻ em và người trẻ, được các bạn sinh viên yêu mến vì sự ân cần và tay nghề cực nhẹ."
  },
  {
    id: "ngo-kien-huy",
    name: "Nghệ Sĩ Ngô Kiến Huy",
    title: "Đồng Sáng Lập Teennie Clinic",
    degree: "Đại Sứ Nụ Cười Học Đường",
    avatar: "https://teennie.vn/wp-content/uploads/2026/10/banner-nieng-rang-teennie-doi-ngu-sang-lap.webp",
    exp: "Đồng hành mang lại hơn 10.000 nụ cười rạng rỡ cho học sinh - sinh viên",
    desc: "Với tâm huyết mang dịch vụ niềng răng chất lượng cao, thẩm mỹ và chi phí dễ tiếp cận nhất cho thế hệ trẻ Việt Nam."
  }
];

export const TEENNIE_FAQS = [
  {
    q: "Niềng răng tại Teennie mất bao nhiêu lần hẹn?",
    a: "Tùy mức độ lệch lạc của răng, đa số các ca niềng tại Teennie đều đẹp nhanh chỉ sau 6 – 36 lần hẹn (khoảng 8 – 18 tháng). Bác sĩ sẽ thông báo rõ số buổi hẹn dự kiến cho bạn ngay sau khi chụp phim và quét 3D."
  },
  {
    q: "Lần thăm khám đầu tiên tại Teennie có mất phí không?",
    a: "Hoàn toàn MIỄN PHÍ 0đ. Bạn được trải nghiệm quy trình thăm khám 10 bước chuyên sâu, chụp phim X-quang Pano, Cepha, Cone Beam CT và quét dấu răng 3D iTero Element 5D nhìn trước kết quả nụ cười."
  },
  {
    q: "Thủ tục trả góp 0% tại Teennie như thế nào?",
    a: "Cực kỳ đơn giản! Chỉ cần CCCD của học sinh - sinh viên hoặc phụ huynh. Bạn chỉ cần thanh toán trước từ 30%, phần còn lại chia đều trả góp từ 12 đến 30 tháng, mỗi tháng chỉ khoảng 1.000.000đ – 1.500.000đ trực tiếp tại phòng khám."
  },
  {
    q: "Niềng răng có phải nhổ răng không? Có đau nhiều không?",
    a: "Không phải ca nào cũng cần nhổ răng. Tại Teennie, bác sĩ luôn ưu tiên bảo tồn răng thật tối đa bằng các kỹ thuật nới rộng cung hàm, nong hàm hoặc mài kẽ sinh lý. Quá trình niềng chỉ có cảm giác hơi căng tức nhẹ trong 2-3 ngày đầu khi mới gắn mắc cài."
  },
  {
    q: "Địa chỉ phòng khám Teennie Clinic ở đâu tại TP.HCM?",
    a: "Phòng khám Teennie tọa lạc tại Số 5 Kỳ Đồng, Phường Nhiêu Lộc, Quận 3, TP. Hồ Chí Minh (Gần ngã tư Kỳ Đồng – Trương Định). Giờ mở cửa từ 08:30 đến 19:30 mỗi ngày."
  }
];
