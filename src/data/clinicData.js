export const CLINIC_INFO = {
  name: "Bệnh Viện Đa Khoa Quốc Tế MediCare Plus",
  shortName: "MediCare Plus",
  slogan: "Chuẩn Mực Y Khoa Quốc Tế - Tận Tâm Vì Sức Khỏe Gia Đình",
  hotline: "1900 8899",
  emergencyPhone: "0908 115 115",
  email: "contact@medicareplus.vn",
  address: "215 Hồng Bàng, Phường 11, Quận 5, TP. Hồ Chí Minh",
  operatingHours: {
    weekdays: "Thứ 2 - Thứ 7: 07:00 - 20:30",
    sunday: "Chủ Nhật: 07:30 - 17:00",
    emergency: "Khoa Cấp cứu & Xét nghiệm khẩn cấp: 24/7"
  },
  accreditation: "JCI (Joint Commission International) Accredited Hospital",
  license: "Giấy phép hoạt động khám chữa bệnh số: 08845/BYT-GPHĐ cấp bởi Bộ Y Tế"
};

export const CLINIC_ADVANTAGES = [
  {
    id: "adv-1",
    icon: "Award",
    title: "Đạt Chuẩn Quốc Tế JCI",
    desc: "Được công nhận chất lượng chăm sóc y khoa và an toàn người bệnh theo tiêu chuẩn vàng của Hoa Kỳ."
  },
  {
    id: "adv-2",
    icon: "Users",
    title: "100% Chuyên Gia Đầu Ngành",
    desc: "Đội ngũ Giáo sư, Tiến sĩ, Bác sĩ CKII từng giữ cương vị chủ chốt tại BV Chợ Rẫy, Từ Dũ, Viện Tim TP.HCM."
  },
  {
    id: "adv-3",
    icon: "Cpu",
    title: "Trang Thiết Bị Thế Hệ Mới",
    desc: "Hệ thống CT 128 lát Siemens, MRI 1.5 Tesla, máy siêu âm màu 5D GE Healthcare nhập khẩu từ Đức & Mỹ."
  },
  {
    id: "adv-4",
    icon: "ShieldCheck",
    title: "BHYT & Bảo Lãnh Viện Phí",
    desc: "Hợp tác thông tuyến BHYT toàn quốc và bảo lãnh trực tiếp với hơn 35 công ty bảo hiểm nhân thọ & phi nhân thọ."
  }
];

export const SPECIALTIES = [
  {
    id: "noi-tong-quat",
    name: "Khoa Nội Tổng Quát",
    lead: "PGS. TS. BS. Nguyễn Văn An",
    desc: "Tầm soát, chẩn đoán sớm và điều trị toàn diện các bệnh lý tim mạch, đái tháo đường, gan mật tụy, rối loạn mỡ máu và huyết áp cao.",
    icon: "Stethoscope",
    tag: "Khám nhiều nhất",
    doctorCount: 8,
    patientsAnnual: "14.500+",
    procedures: ["Tầm soát bệnh chuyển hóa", "Theo dõi đái tháo đường", "Điều trị gan nhiễm mỡ", "Đo huyết áp liên tục 24h (Holter)"]
  },
  {
    id: "tim-mach",
    name: "Khoa Tim Mạch Can Thiệp",
    lead: "ThS. BS. Lê Hoàng Long",
    desc: "Đo điện tâm đồ gắng sức, siêu âm Doppler tim qua thành ngực, tầm soát nguy cơ nhồi máu cơ tim, xơ vữa động mạch và rối loạn nhịp tim.",
    icon: "HeartPulse",
    tag: "Chuyên sâu",
    doctorCount: 5,
    patientsAnnual: "8.200+",
    procedures: ["Siêu âm Doppler màu tim", "Đo điện tim ECG 12 chuyển đạo", "Chụp mạch vành CT liều thấp", "Đo xơ vữa động mạch"]
  },
  {
    id: "san-phu-khoa",
    name: "Khoa Sản Phụ Khoa",
    lead: "BS. CKII. Trần Thị Mai",
    desc: "Chăm sóc thai kỳ toàn diện, siêu âm hình thái thai nhi 4D/5D thế hệ mới, tầm soát ung thư cổ tử cung và điều trị bệnh lý phụ khoa mạn tính.",
    icon: "HeartHandshake",
    tag: "Kỹ thuật cao",
    doctorCount: 6,
    patientsAnnual: "11.800+",
    procedures: ["Siêu âm thai 5D Voluson E10", "Sàng lọc dị tật NIPT chuẩn Mỹ", "Tầm soát ung thư cổ tử cung Pap/HPV", "Khám tiền hôn nhân"]
  },
  {
    id: "nhi-khoa",
    name: "Khoa Nhi & Tiêm Chủng",
    lead: "BS. CKI. Phạm Thị Hương",
    desc: "Khám chữa bệnh hô hấp, tiêu hóa, dinh dưỡng cho trẻ nhỏ từ sơ sinh đến 16 tuổi. Trung tâm tiêm chủng vaccine nhập khẩu chính hãng.",
    icon: "Baby",
    tag: "Bác sĩ tận tâm",
    doctorCount: 7,
    patientsAnnual: "12.000+",
    procedures: ["Khám hô hấp & viêm phế quản", "Tư vấn dinh dưỡng biếng ăn", "Tiêm chủng vaccine 6in1, Phế cầu", "Đo vi chất cho bé"]
  },
  {
    id: "tai-mui-hong",
    name: "Khoa Tai Mũi Họng",
    lead: "BS. CKII. Hoàng Hải Yến",
    desc: "Nội soi ống mềm HD không đau phát hiện sớm ung thư vòm họng, điều trị viêm xoang polyp mũi, viêm amidan và các bệnh lý thanh quản hạt xơ.",
    icon: "Activity",
    tag: "Nội soi không đau",
    doctorCount: 4,
    patientsAnnual: "9.300+",
    procedures: ["Nội soi ống mềm Carl Storz", "Tầm soát ung thư vòm họng", "Lấy dị vật Tai Mũi Họng", "Đo thính lực đồ điện tử"]
  },
  {
    id: "co-xuong-khop",
    name: "Cơ Xương Khớp & VLTL",
    lead: "TS. BS. Vũ Minh Đức",
    desc: "Ứng dụng kỹ thuật tiêm huyết tương giàu tiểu cầu (PRP) điều trị thoái hóa khớp, thoát vị đĩa đệm, chấn thương thể thao kết hợp vật lý trị liệu.",
    icon: "Bone",
    tag: "Liệu pháp PRP",
    doctorCount: 5,
    patientsAnnual: "7.600+",
    procedures: ["Tiêm PRP thoái hóa khớp gối", "Kéo giãn cột sống kỹ thuật số", "Sóng xung kích Shockwave", "Phục hồi chức năng sau mổ"]
  },
  {
    id: "tieu-hoa-gan-mat",
    name: "Khoa Tiêu Hóa - Gan Mật",
    lead: "TS. BS. Nguyễn Thanh Tùng",
    desc: "Nội soi tiêu hóa không đau với dải tần ánh sáng hẹp NBI thế hệ mới Olympus (Nhật Bản), tầm soát sớm ung thư dạ dày - đại tràng và điều trị viêm gan virus.",
    icon: "Activity",
    tag: "Nội soi NBI Nhật Bản",
    doctorCount: 6,
    patientsAnnual: "13.200+",
    procedures: ["Nội soi dạ dày tiền mê không đau", "Nội soi đại tràng cắt polyp", "Đo độ đàn hồi mô gan FibroScan", "Test vi khuẩn HP qua hơi thở C13/C14"]
  },
  {
    id: "chan-doan-hinh-anh",
    name: "Xét Nghiệm & CĐHA",
    lead: "TS. BS. Đỗ Quốc Huy",
    desc: "Trung tâm xét nghiệm tự động hóa chuẩn ISO 15189:2012. Chụp CT Scanner 128 dãy, MRI 1.5 Tesla, X-quang kỹ thuật số và xét nghiệm sinh hóa tự động.",
    icon: "FlaskConical",
    tag: "Chuẩn xác 99.9%",
    doctorCount: 8,
    patientsAnnual: "22.000+",
    procedures: ["CT Scanner 128 lát đa tầng", "Chụp cộng hưởng từ MRI 1.5T", "Huyết học tự động 24 thông số", "Marker sinh học tầm soát K"]
  }
];

export const DOCTORS = [
  {
    id: "bs-nguyen-van-an",
    name: "PGS. TS. BS. Nguyễn Văn An",
    specialtyId: "noi-tong-quat",
    specialtyName: "Khoa Nội Tổng Quát",
    title: "Cố Vấn Chuyên Môn - Trưởng Ban Khoa Học",
    degree: "Phó Giáo Sư - Tiến Sĩ Y Khoa",
    expYears: 28,
    workHistory: "Nguyên Phó Trưởng Khoa Nội Tổng Quát BV Chợ Rẫy, Giảng viên cao cấp ĐH Y Dược TP.HCM",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    rating: 4.98,
    reviewCount: 384,
    schedule: "Thứ 2, 4, 6 (08:00 - 16:30)",
    fee: "450.000 đ"
  },
  {
    id: "bs-tran-thi-mai",
    name: "BS. CKII. Trần Thị Mai",
    specialtyId: "san-phu-khoa",
    specialtyName: "Khoa Sản Phụ Khoa",
    title: "Trưởng Khoa Sản Phụ Khoa",
    degree: "Bác Sĩ Chuyên Khoa Cấp II Sản Phụ",
    expYears: 22,
    workHistory: "Hơn 20 năm công tác tại Bệnh viện Từ Dũ, Chuyên gia hàng đầu về chẩn đoán tiền sản và thai kỳ nguy cơ cao",
    avatar: "https://images.unsplash.com/photo-1594824813593-9c86950e32f7?auto=format&fit=crop&q=80&w=600",
    rating: 4.96,
    reviewCount: 462,
    schedule: "Thứ 3, 5, 7 (08:00 - 17:00)",
    fee: "400.000 đ"
  },
  {
    id: "bs-le-hoang-long",
    name: "ThS. BS. Lê Hoàng Long",
    specialtyId: "tim-mach",
    specialtyName: "Khoa Tim Mạch Can Thiệp",
    title: "Phó Trưởng Khoa Tim Mạch",
    degree: "Thạc Sĩ Y Học - Tu nghiệp tại Pháp",
    expYears: 17,
    workHistory: "Nguyên Bác sĩ can thiệp tim mạch Viện Tim TP.HCM, Thành viên Hội Tim Mạch Học Việt Nam (VNHA)",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
    rating: 4.92,
    reviewCount: 295,
    schedule: "Thứ 2 đến Thứ 6 (07:30 - 16:00)",
    fee: "400.000 đ"
  },
  {
    id: "bs-pham-thi-huong",
    name: "BS. CKI. Phạm Thị Hương",
    specialtyId: "nhi-khoa",
    specialtyName: "Khoa Nhi & Tiêm Chủng",
    title: "Phụ Trách Đơn Nguyên Nhi Khoa",
    degree: "Bác Sĩ Chuyên Khoa I Nhi Khoa",
    expYears: 15,
    workHistory: "Hơn 14 năm công tác tại Bệnh viện Nhi Đồng 1, chuyên gia hô hấp và điều trị dị ứng sơ sinh",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    rating: 4.95,
    reviewCount: 418,
    schedule: "Thứ 2 đến Chủ Nhật (08:00 - 19:30)",
    fee: "350.000 đ"
  },
  {
    id: "bs-vu-minh-duc",
    name: "TS. BS. Vũ Minh Đức",
    specialtyId: "co-xuong-khop",
    specialtyName: "Cơ Xương Khớp & VLTL",
    title: "Trưởng Đơn Vị Y Học Tái Tạo",
    degree: "Tiến Sĩ Y Khoa - Chấn Thương Chỉnh Hình",
    expYears: 19,
    workHistory: "Nguyên Bác sĩ phẫu thuật nội soi khớp BV Chấn Thương Chỉnh Hình TP.HCM, Tu nghiệp tại Hàn Quốc & Singapore",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    rating: 4.89,
    reviewCount: 226,
    schedule: "Thứ 3, 5, 7, CN (08:30 - 17:30)",
    fee: "450.000 đ"
  },
  {
    id: "bs-hoang-hai-yen",
    name: "BS. CKII. Hoàng Hải Yến",
    specialtyId: "tai-mui-hong",
    specialtyName: "Khoa Tai Mũi Họng",
    title: "Trưởng Khoa Tai Mũi Họng",
    degree: "Bác Sĩ Chuyên Khoa Cấp II TMH",
    expYears: 23,
    workHistory: "Nguyên Phó Trưởng Khoa BV Tai Mũi Họng TP.HCM, chuyên gia phẫu thuật nội soi mũi xoang và thanh quản",
    avatar: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600",
    rating: 4.91,
    reviewCount: 312,
    schedule: "Thứ 2, 4, 6, 7 (07:30 - 16:30)",
    fee: "400.000 đ"
  }
];

export const PRICING_PACKAGES = [
  {
    id: "standard",
    name: "Gói Khám Tổng Quát Tiêu Chuẩn",
    subtitle: "Dành cho người từ 18 - 35 tuổi kiểm tra sức khỏe hàng năm",
    price: "1.450.000 đ",
    originalPrice: "1.900.000 đ",
    discount: "Tiết kiệm 24%",
    badge: "Tiêu chuẩn Bộ Y Tế",
    category: "Cơ bản",
    description: "Đánh giá toàn diện chức năng gan, thận, đường huyết, mỡ máu, tim phổi và phát hiện sớm các nguy cơ chuyển hóa âm thầm.",
    features: [
      "Khám lâm sàng Nội tổng quát cùng Bác sĩ Chuyên khoa",
      "Xét nghiệm công thức máu toàn phần tự động (24 chỉ số)",
      "Định lượng Glucose máu phát hiện sớm tiền đái tháo đường",
      "Đánh giá men gan (AST, ALT, GGT) & chức năng thận (Ure, Creatinin)",
      "Bộ mỡ máu toàn phần (Cholesterol toàn phần, Triglycerid, HDL, LDL)",
      "Chụp X-quang kỹ thuật số tim phổi thẳng (DR)",
      "Siêu âm màu bụng tổng quát (Gan, mật, tụy, lách, thận, bàng quang)",
      "Tổng phân tích nước tiểu 10 thông số phát hiện viêm nhiễm",
      "Bác sĩ chuyên khoa kết luận và lập phác đồ dinh dưỡng cá nhân"
    ],
    recommendedFor: "Người trẻ, người đi làm văn phòng ít vận động, học sinh - sinh viên kiểm tra sức khỏe định kỳ."
  },
  {
    id: "advanced",
    name: "Gói Khám Chuyên Sâu & Tầm Soát Ung Thư",
    subtitle: "Gói khám được 82% gia đình lựa chọn cho người trên 35 tuổi",
    price: "3.200.000 đ",
    originalPrice: "4.400.000 đ",
    discount: "Tiết kiệm 27%",
    isPopular: true,
    badge: "Khuyên Dùng Nhiều Nhất",
    category: "Chuyên sâu",
    description: "Kết hợp toàn bộ danh mục tiêu chuẩn và bộ 5 dấu ấn sinh học ung thư (Khối u gan, phổi, tiêu hóa, vú/tiền liệt tuyến) cùng chẩn đoán hình ảnh cao cấp.",
    features: [
      "Bao gồm TOÀN BỘ 9 danh mục xét nghiệm của Gói Tiêu Chuẩn",
      "Đo điện tâm đồ ECG 12 cần phát hiện sớm thiếu máu cơ tim",
      "Dấu ấn tầm soát ung thư gan sớm (AFP)",
      "Dấu ấn tầm soát ung thư phổi và phế quản (CYFRA 21-1)",
      "Dấu ấn tầm soát ung thư đường tiêu hóa (CEA, CA 19-9)",
      "Siêu âm tuyến giáp & Siêu âm tuyến vú (Nữ) / Tuyến tiền liệt (Nam)",
      "Nội soi Tai Mũi Họng ống mềm Carl Storz HD không đau",
      "Đo Axit Uric máu tầm soát sớm bệnh Gout mạn tính",
      "Hội chẩn trực tiếp 1-1 cùng PGS / TS / Bác sĩ CKII",
      "Hồ sơ bệnh án số hóa lưu trữ trọn đời trên MediCare Portal"
    ],
    recommendedFor: "Người trên 35 tuổi, người thường xuyên mệt mỏi, người có tiền sử gia đình có người mắc bệnh K hoặc tim mạch."
  },
  {
    id: "vip",
    name: "Gói Khám VIP Platinum Toàn Diện",
    subtitle: "Trải nghiệm chăm sóc sức khỏe thượng lưu chuẩn khách sạn 5 sao",
    price: "6.800.000 đ",
    originalPrice: "8.900.000 đ",
    discount: "Tiết kiệm 24%",
    badge: "VIP Platinum",
    category: "Thượng lưu",
    description: "Chụp Cắt lớp vi tính CT Scanner lồng ngực liều thấp, siêu âm tim Doppler chuyên sâu, phòng chờ VIP riêng tư và được đồng hành bởi trợ lý y tế 1:1.",
    features: [
      "Bao gồm TOÀN BỘ danh mục của Gói Khám Chuyên Sâu",
      "Chụp Cắt lớp vi tính CT Scanner lồng ngực 128 dãy liều thấp",
      "Siêu âm Doppler màu tim qua thành ngực bởi Chuyên gia Viện Tim",
      "Trọn bộ 8 marker sinh học tầm soát ung thư mở rộng",
      "Phòng chờ VIP riêng biệt, phục vụ trà hoa và bữa ăn dinh dưỡng",
      "Ưu tiên khám tuyệt đối không cần xếp hàng, trợ lý y tế chăm sóc 1:1",
      "Tư vấn kết quả chuyên sâu cùng Hội đồng Bác sĩ Trưởng khoa",
      "Tặng 02 buổi tái khám miễn phí và theo dõi sức khỏe trong 12 tháng"
    ],
    recommendedFor: "Lãnh đạo doanh nghiệp, người cao tuổi cần kiểm tra chuyên sâu tối đa và người mong muốn trải nghiệm dịch vụ y tế đẳng cấp."
  }
];

export const EQUIPMENT_LIST = [
  {
    name: "Máy CT Scanner 128 Lát Cắt Siemens Somatom (Đức)",
    desc: "Tốc độ quét siêu nhanh chỉ 0.33 giây, tái tạo hình ảnh 3D sắc nét mạch máu và lồng ngực với liều tia bức xạ giảm đến 80% so với máy thông thường.",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Máy Siêu Âm Màu 5D GE Voluson E10 (Mỹ)",
    desc: "Đỉnh cao trong chẩn đoán hình thái thai nhi, tim thai và tầm soát sớm các dị tật bẩm sinh phức tạp với độ phân giải siêu nét.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Hệ Thống Xét Nghiệm Tự Động Roche Cobas 8000 (Thụy Sĩ)",
    desc: "Công suất 3.000 xét nghiệm/giờ, kiểm soát sai số tự động đạt chuẩn quốc tế ISO 15189, trả kết quả chỉ sau 45 phút.",
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=600"
  }
];

export const TIME_SLOTS = {
  morning: [
    "07:30 - 08:15",
    "08:15 - 09:00",
    "09:00 - 09:45",
    "09:45 - 10:30",
    "10:30 - 11:15"
  ],
  afternoon: [
    "13:30 - 14:15",
    "14:15 - 15:00",
    "15:00 - 15:45",
    "15:45 - 16:30",
    "16:30 - 17:15"
  ],
  evening: [
    "17:30 - 18:15",
    "18:15 - 19:00",
    "19:00 - 19:45"
  ]
};

export const CLINIC_FAQS = [
  {
    q: "Đi khám tại MediCare Plus có được thanh toán BHYT nhà nước không?",
    a: "Có. Phòng khám MediCare Plus tiếp nhận thẻ BHYT nhà nước theo đúng chính sách thông tuyến của Bộ Y Tế. Người bệnh được hưởng đầy đủ quyền lợi chi trả cho các xét nghiệm, chẩn đoán hình ảnh và thuốc nằm trong danh mục BHYT."
  },
  {
    q: "Tôi cần chuẩn bị gì trước khi đến làm xét nghiệm máu hoặc khám tổng quát?",
    a: "Đối với các gói khám tổng quát có xét nghiệm máu và siêu âm ổ bụng, quý khách vui lòng nhịn ăn ít nhất 6 - 8 tiếng trước giờ khám (chỉ uống nước lọc), không uống rượu bia, nước ngọt hay cafe, và mang theo CMND/CCCD cùng thẻ BHYT."
  },
  {
    q: "Đặt lịch khám trực tuyến qua website có mất thêm phí không?",
    a: "Hoàn toàn miễn phí. Đặt hẹn trực tuyến giúp quý khách giữ chỗ ưu tiên trong khung giờ mong muốn, được phòng khám đón tiếp đúng giờ mà không cần xếp hàng lấy số."
  },
  {
    q: "Kết quả khám bệnh được trả như thế nào?",
    a: "Kết quả bản cứng được Bác sĩ trực tiếp tư vấn và bàn giao ngay trong buổi khám. Đồng thời, hồ sơ bệnh án điện tử và các file ảnh chụp (X-Quang, CT, Siêu âm) được bảo mật số hóa gửi qua Email / Tin nhắn SMS cho người bệnh tra cứu mọi lúc."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Cô Trần Thị Mai Lan",
    age: 58,
    address: "Quận 10, TP.HCM",
    comment: "Tôi bị tiểu đường và tăng huyết áp hơn 7 năm. Trước đây mỗi lần đi viện lớn tái khám đều phải dậy từ 5h sáng chờ hàng tiếng đồng hồ. Chuyển sang khám cùng bác sĩ An tại MediCare Plus, tôi đặt hẹn trước qua mạng, đến nơi là vào phòng khám ngay. Bác sĩ tư vấn rất ân cần, giải thích kỹ từng chỉ số mỡ máu.",
    doctor: "PGS. TS. BS. Nguyễn Văn An",
    rating: 5,
    tag: "Bệnh nhân Nội mạn tính",
    date: "15/05/2026"
  },
  {
    id: 2,
    name: "Anh Hoàng Minh Tuấn",
    age: 36,
    address: "Bình Thạnh, TP.HCM",
    comment: "Bé nhà mình 3 tuổi bị sốt co giật và viêm đường hô hấp, được người quen giới thiệu đến BS Hương. Phòng khám cực kỳ sạch sẽ, các cô điều dưỡng dỗ dành bé rất khéo nên bé không hề khóc. Sau 3 ngày uống thuốc theo đơn bác sĩ, bé đã khỏi hẳn và ăn uống vui vẻ trở lại.",
    doctor: "BS. CKI. Phạm Thị Hương",
    rating: 5,
    tag: "Phụ huynh bệnh nhi",
    date: "22/05/2026"
  },
  {
    id: 3,
    name: "Chị Lê Ngọc Hân",
    age: 31,
    address: "Quận 7, TP.HCM",
    comment: "Mình theo dõi thai kỳ tại đây từ tuần thứ 8 cho đến lúc sinh. Máy siêu âm 5D Voluson E10 cho hình ảnh em bé cử động trong bụng cực kỳ rõ và xúc động. Bác sĩ Mai khám cẩn thận từng ngón tay ngón chân của con, giúp hai vợ chồng an tâm tuyệt đối.",
    doctor: "BS. CKII. Trần Thị Mai",
    rating: 5,
    tag: "Khám thai định kỳ",
    date: "28/05/2026"
  }
];

export const HEALTH_ARTICLES = [
  {
    id: 1,
    title: "10 Dấu hiệu cảnh báo sớm bệnh lý tim mạch bạn không nên bỏ qua",
    category: "Tim mạch học",
    readTime: "5 phút đọc",
    author: "ThS. BS. Lê Hoàng Long",
    date: "25/05/2026",
    summary: "Đau tức ngực trái, hồi hộp trống ngực, khó thở khi gắng sức hay phù nhẹ vùng mắt cá chân có thể là triệu chứng khởi phát của xơ vữa động mạch vành.",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Lịch tiêm chủng mở rộng và các mũi vaccine dịch vụ cần thiết cho trẻ",
    category: "Nhi khoa",
    readTime: "7 phút đọc",
    author: "BS. CKI. Phạm Thị Hương",
    date: "18/05/2026",
    summary: "Hướng dẫn phụ huynh chi tiết thời điểm vàng tiêm các mũi 6 trong 1, phế cầu khuẩn Synflorix/Prevenar 13, sởi - quai bị - rubella giúp trẻ có miễn dịch trọn đời.",
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Tầm soát ung thư đường tiêu hóa: Khi nào nên nội soi đại tràng dạ dày?",
    category: "Nội tiêu hóa",
    readTime: "6 phút đọc",
    author: "PGS. TS. BS. Nguyễn Văn An",
    date: "12/05/2026",
    summary: "Hơn 90% trường hợp ung thư đại trực tràng và dạ dày có thể chữa khỏi hoàn toàn nếu được phát hiện ở giai đoạn polyp qua kỹ thuật nội soi phóng đại NBI.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
  }
];
