export const CLINIC_INFO = {
  name: "Bệnh Viện Quân Y 7A - Quân Khu 7",
  shortName: "Bệnh Viện Quân Y 7A",
  unitTitle: "Cục Hậu Cần Quân Khu 7 - Bộ Quốc Phòng",
  slogan: "Y Đức Chuẩn Mực - Kỹ Thuật Chuyên Sâu - Hết Lòng Vì Bộ Đội Và Nhân Dân",
  hotline: "028 3836 6789",
  emergencyPhone: "028 3923 7801",
  email: "bvquany7a@gmail.com",
  address: "Số 466 Nguyễn Trãi, Phường 8, Quận 5, TP. Hồ Chí Minh",
  shortAddress: "466 Nguyễn Trãi, Q.5, TP.HCM",
  website: "http://bvquany7a.vn",
  operatingHours: {
    weekdays: "Thứ 2 - Thứ 6: 07:00 - 11:30 | 13:00 - 16:30",
    saturday: "Thứ 7: 07:00 - 12:00 (Khám theo yêu cầu & BHYT)",
    sunday: "Chủ Nhật: Khám cấp cứu & điều trị nội trú 24/24",
    emergency: "Khoa Hồi Sức Cấp Cứu: Trực chiến 24/7 tất cả các ngày"
  },
  accreditation: "Bệnh Viện Đa Khoa Hạng I - Tuyến Cuối Quân Khu 7",
  militaryHonor: "Đơn Vị Anh Hùng Lực Lượng Vũ Trang Nhân Dân",
  license: "Cơ sở khám chữa bệnh Quân y Hạng I - Trực thuộc Bộ Quốc Phòng"
};

export const CLINIC_ADVANTAGES = [
  {
    id: "adv-1",
    icon: "Award",
    title: "Bệnh Viện Đa Khoa Hạng I",
    desc: "Bệnh viện tuyến cuối của Quân khu 7 với bề dày truyền thống y đức, kỷ luật quân đội và chuyên môn kỹ thuật cao."
  },
  {
    id: "adv-2",
    icon: "Users",
    title: "Đội Ngũ Thầy Thuốc Quân Y",
    desc: "Quy tụ các Đại tá, Thượng tá, PGS, TS, Bác sĩ CKII giàu kinh nghiệm, tận tụy chăm sóc bộ đội và nhân dân."
  },
  {
    id: "adv-3",
    icon: "Cpu",
    title: "Mũi Nhọn Chấn Thương Chỉnh Hình",
    desc: "Thế mạnh hàng đầu khu vực phía Nam về phẫu thuật cột sống, thay khớp háng, khớp gối và vi phẫu thuật kết hợp xương."
  },
  {
    id: "adv-4",
    icon: "ShieldCheck",
    title: "Khám BHYT Toàn Dân Thông Tuyến",
    desc: "Tiếp nhận tất cả thẻ BHYT trên toàn quốc hưởng 100% quyền lợi đúng tuyến, thủ tục giải quyết nhanh gọn, minh bạch."
  }
];

export const SPECIALTIES = [
  {
    id: "chan-thuong-chinh-hinh",
    name: "Khoa Chấn Thương Chỉnh Hình (B1)",
    lead: "Thượng tá, BS. CKI. Trần Đình Chiến",
    desc: "Mũi nhọn hàng đầu: Bơm xi măng sinh học tạo hình thân đốt sống (Vertebroplasty), phẫu thuật thay khớp háng/gối nhân tạo, kết hợp xương vi phẫu và điều trị chấn thương thể thao.",
    icon: "Bone",
    tag: "Chuyên khoa mũi nhọn",
    doctorCount: 12,
    patientsAnnual: "26.000+",
    procedures: ["Tạo hình đốt sống bằng xi măng sinh học", "Phẫu thuật thay khớp háng bán phần/toàn phần", "Nội soi tái tạo dây chằng khớp gối", "Phẫu thuật kết hợp xương gãy phức tạp"]
  },
  {
    id: "tim-than-khop",
    name: "Khoa Nội Tim - Thận - Khớp (A1)",
    lead: "Trung tá, BS. CKII. Lê Thị Kim Anh",
    desc: "Chẩn đoán và điều trị chuyên sâu bệnh lý tăng huyết áp, suy tim mạn tính, rối loạn nhịp, bệnh cầu thận, hội chứng thận hư, viêm khớp dạng thấp và thoái hóa khớp.",
    icon: "HeartPulse",
    tag: "Kỹ thuật cao",
    doctorCount: 8,
    patientsAnnual: "18.500+",
    procedures: ["Siêu âm tim Doppler màu mạch máu", "Đo điện tâm đồ gắng sức", "Theo dõi Holter huyết áp & ECG 24h", "Tiêm khớp và màng hoạt dịch điều trị viêm"]
  },
  {
    id: "ngoai-tong-hop",
    name: "Khoa Ngoại Tổng Hợp (B2)",
    lead: "Đại tá, BS. CKII. Nguyễn Văn Dũng",
    desc: "Thực hiện phẫu thuật nội soi ổ bụng thế hệ mới: phẫu thuật cắt túi mật, ruột thừa, bệnh lý đại trực tràng, dạ dày, thoát vị bẹn và phẫu thuật trĩ kỹ thuật Longo không đau.",
    icon: "Stethoscope",
    tag: "Phẫu thuật nội soi",
    doctorCount: 9,
    patientsAnnual: "14.200+",
    procedures: ["Phẫu thuật nội soi cắt ruột thừa/túi mật", "Phẫu thuật trĩ phương pháp Longo", "Tán sỏi đường mật qua da", "Phẫu thuật thoát vị bẹn đặt lưới"]
  },
  {
    id: "than-nhan-tao",
    name: "Khoa Thận Nhân Tạo (Lọc Máu)",
    lead: "Thượng tá, BS. CKI. Nguyễn Văn Thắng",
    desc: "Trung tâm lọc máu hiện đại trang bị dàn máy chạy thận Fresenius Medical Care (Đức), quy trình vô trùng tuyệt đối, phục vụ bệnh nhân suy thận mạn giai đoạn cuối.",
    icon: "Activity",
    tag: "Chuẩn Đức Fresenius",
    doctorCount: 6,
    patientsAnnual: "32.000 lượt lọc",
    procedures: ["Thận nhân tạo chu kỳ chuẩn quốc tế", "Lọc máu cấp cứu suy thận cấp", "Đặt catheter tĩnh mạch trung tâm hầm ngực", "Chăm sóc và bảo tồn cầu tay chạy thận AVF"]
  },
  {
    id: "hoi-suc-cap-cuu",
    name: "Khoa Hồi Sức Cấp Cứu (ICU)",
    lead: "Thượng tá, BS. CKI. Phạm Minh Tâm",
    desc: "Trực cấp cứu 24/24 tiếp nhận mọi ca cấp cứu chấn thương, tai nạn, ngộ độc, nhồi máu cơ tim, sốc nhiễm khuẩn và đột quỵ cấp, phối hợp xe cấp cứu ngoại viện.",
    icon: "HeartHandshake",
    tag: "Trực chiến 24/7",
    doctorCount: 10,
    patientsAnnual: "22.000+",
    procedures: ["Hồi sinh tim phổi nâng cao (ACLS)", "Đặt nội khí quản và thở máy xâm lấn", "Theo dõi huyết động liên tục đa thông số", "Cấp cứu đa chấn thương và sốc mất máu"]
  },
  {
    id: "y-hoc-co-truyen",
    name: "Khoa Y Học Cổ Truyền & PHCN (A5)",
    lead: "Trung tá, ThS. BS. Vũ Thị Lan",
    desc: "Kết hợp Đông - Tây y: châm cứu, điện châm, cấy chỉ, xoa bóp bấm huyệt, kéo giãn cột sống thắt lưng và cổ, phục hồi chức năng sau tai biến và phẫu thuật xương.",
    icon: "Smile",
    tag: "Đông - Tây y kết hợp",
    doctorCount: 7,
    patientsAnnual: "16.800+",
    procedures: ["Điện châm và thủy châm giảm đau", "Cấy chỉ điều trị đau thần kinh tọa", "Kéo giãn cột sống kỹ thuật số", "Tập vận động phục hồi chức năng sau mổ"]
  },
  {
    id: "noi-than-kinh",
    name: "Khoa Nội Thần Kinh & Đột Quỵ (A3)",
    lead: "Thượng tá, BS. CKII. Đặng Văn Thành",
    desc: "Chuyên sâu điều trị đột quỵ nhồi máu não, xuất huyết não, đau nửa đầu Migraine, rối loạn tiền đình, bệnh lý thoái hóa thần kinh Parkinson và di chứng thần kinh.",
    icon: "Baby",
    tag: "Khung giờ vàng",
    doctorCount: 6,
    patientsAnnual: "12.600+",
    procedures: ["Đo lưu huyết não và điện não đồ vi tính", "Chẩn đoán sớm nguy cơ đột quỵ não", "Điều trị đau dây thần kinh số V, số VII", "Điều trị rối loạn giấc ngủ và suy nhược thần kinh"]
  },
  {
    id: "chan-doan-hinh-anh",
    name: "Khoa CĐHA & Xét Nghiệm Tự Động",
    lead: "Đại tá, TS. BS. Lê Văn Hòa",
    desc: "Hệ thống chụp cộng hưởng từ MRI 1.5 Tesla, máy chụp CT Scanner đa lát cắt, X-quang kỹ thuật số DR, hệ thống xét nghiệm sinh hóa - miễn dịch tự động chuẩn y khoa.",
    icon: "FlaskConical",
    tag: "Chính xác tuyệt đối",
    doctorCount: 11,
    patientsAnnual: "45.000+",
    procedures: ["Chụp cộng hưởng từ MRI sọ não, cột sống, khớp", "Chụp cắt lớp vi tính CT Scanner 128 dãy", "X-quang kỹ thuật số liều xạ thấp", "Xét nghiệm máu, đường huyết, mỡ máu tự động"]
  }
];

export const DOCTORS = [
  {
    id: "bs-le-quang-tri",
    name: "Đại tá, PGS. TS. BS. Lê Quang Trí",
    specialtyId: "chan-thuong-chinh-hinh",
    specialtyName: "Khoa Chấn Thương Chỉnh Hình (B1)",
    title: "Giám Đốc Bệnh Viện Quân Y 7A",
    degree: "Phó Giáo Sư - Tiến Sĩ Y Học Ngoại Khoa",
    expYears: 32,
    workHistory: "Chuyên gia đầu ngành về phẫu thuật cột sống, bơm xi măng sinh học tạo hình đốt sống và chấn thương chỉnh hình Quân đội.",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    rating: 4.99,
    reviewCount: 540,
    schedule: "Thứ 2, Thứ 4 (Hội chẩn & Khám chuyên gia)",
    fee: "Theo quy định BHYT / Khám Quân y"
  },
  {
    id: "bs-tran-dinh-chien",
    name: "Thượng tá, BS. CKI. Trần Đình Chiến",
    specialtyId: "chan-thuong-chinh-hinh",
    specialtyName: "Khoa Chấn Thương Chỉnh Hình (B1)",
    title: "Trưởng Khoa Chấn Thương Chỉnh Hình",
    degree: "Bác Sĩ Chuyên Khoa I Chấn Thương Chỉnh Hình",
    expYears: 24,
    workHistory: "Hơn 20 năm phẫu thuật thay khớp háng, khớp gối, phẫu thuật kết hợp xương phức tạp cho thương bệnh binh và nhân dân.",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
    rating: 4.96,
    reviewCount: 420,
    schedule: "Thứ 2 đến Thứ 6 (07:30 - 16:30)",
    fee: "Theo quy định BHYT / Dịch vụ"
  },
  {
    id: "bs-nguyen-van-dung",
    name: "Đại tá, BS. CKII. Nguyễn Văn Dũng",
    specialtyId: "ngoai-tong-hop",
    specialtyName: "Khoa Ngoại Tổng Hợp (B2)",
    title: "Trưởng Khoa Ngoại Tổng Hợp",
    degree: "Bác Sĩ Chuyên Khoa Cấp II Ngoại Khoa",
    expYears: 28,
    workHistory: "Chuyên gia phẫu thuật nội soi tiêu hóa, gan mật tụy, nguyên phẫu thuật viên chính các ca mổ phức tạp tuyến Quân khu 7.",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    rating: 4.94,
    reviewCount: 380,
    schedule: "Thứ 3, Thứ 5, Thứ 7 (07:30 - 16:00)",
    fee: "Theo quy định BHYT / Dịch vụ"
  },
  {
    id: "bs-le-thi-kim-anh",
    name: "Trung tá, BS. CKII. Lê Thị Kim Anh",
    specialtyId: "tim-than-khop",
    specialtyName: "Khoa Nội Tim - Thận - Khớp (A1)",
    title: "Trưởng Khoa Nội Tim - Thận - Khớp",
    degree: "Bác Sĩ Chuyên Khoa Cấp II Nội Khoa",
    expYears: 21,
    workHistory: "Chuyên gia điều trị nội khoa tim mạch, tăng huyết áp, đái tháo đường và các bệnh lý khớp mạn tính người cao tuổi.",
    avatar: "https://images.unsplash.com/photo-1594824813593-9c86950e32f7?auto=format&fit=crop&q=80&w=600",
    rating: 4.97,
    reviewCount: 490,
    schedule: "Thứ 2 đến Thứ 6 (07:00 - 16:30)",
    fee: "Theo quy định BHYT / Dịch vụ"
  },
  {
    id: "bs-pham-minh-tam",
    name: "Thượng tá, BS. CKI. Phạm Minh Tâm",
    specialtyId: "hoi-suc-cap-cuu",
    specialtyName: "Khoa Hồi Sức Cấp Cứu (ICU)",
    title: "Trưởng Khoa Hồi Sức Cấp Cứu",
    degree: "Bác Sĩ Chuyên Khoa I Hồi Sức Cấp Cứu",
    expYears: 20,
    workHistory: "Chuyên gia xử trí cấp cứu đa chấn thương, hồi sinh tim phổi, cấp cứu ngộ độc và trực cấp cứu ngoại viện 24/24.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    rating: 4.93,
    reviewCount: 310,
    schedule: "Trực cấp cứu theo ca 24/24",
    fee: "Theo quy định BHYT / Khẩn cấp"
  },
  {
    id: "bs-vu-thi-lan",
    name: "Trung tá, ThS. BS. Vũ Thị Lan",
    specialtyId: "y-hoc-co-truyen",
    specialtyName: "Khoa Y Học Cổ Truyền & PHCN (A5)",
    title: "Trưởng Khoa Y Học Cổ Truyền",
    degree: "Thạc Sĩ Y Học Cổ Truyền",
    expYears: 18,
    workHistory: "Chuyên gia châm cứu, cấy chỉ, phục hồi chức năng sau di chứng tai biến mạch máu não và thoái hóa cột sống.",
    avatar: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600",
    rating: 4.95,
    reviewCount: 365,
    schedule: "Thứ 2 đến Thứ 7 (07:30 - 16:30)",
    fee: "Theo quy định BHYT / Dịch vụ"
  }
];

export const PRICING_PACKAGES = [
  {
    id: "standard-bhyt",
    name: "Gói Khám Sức Khỏe Tiêu Chuẩn (Thông Tuyến BHYT)",
    subtitle: "Dành cho người có thẻ BHYT quân nhân, thân nhân và nhân dân toàn quốc",
    price: "Hưởng 100% BHYT",
    originalPrice: "Theo khung Bộ Y Tế",
    discount: "Đúng tuyến BHYT",
    badge: "BHYT Toàn Quốc",
    category: "Cơ bản",
    description: "Khám lâm sàng nội ngoại tổng quát, đo sinh hiệu, xét nghiệm máu, men gan, chức năng thận, đường huyết và chụp X-quang phổi.",
    features: [
      "Khám lâm sàng Nội khoa tổng quát",
      "Khám Ngoại khoa & Chấn thương chỉnh hình",
      "Tổng phân tích tế bào máu ngoại vi (18 thông số)",
      "Đo đường huyết lúc đói (Glucose)",
      "Đánh giá chức năng gan (AST, ALT)",
      "Đánh giá chức năng thận (Ure, Creatinin)",
      "Chụp X-quang tim phổi thẳng kỹ thuật số DR",
      "Điện tâm đồ (ECG) 12 chuyển đạo"
    ],
    recommendedFor: "Mọi đối tượng có thẻ BHYT, người lao động kiểm tra sức khỏe định kỳ hàng năm."
  },
  {
    id: "co-xuong-khop-chuyensau",
    name: "Gói Tầm Soát & Điều Trị Cơ Xương Khớp Chuyên Sâu",
    subtitle: "Thế mạnh chuyên khoa nổi tiếng nhất tại Bệnh Viện Quân Y 7A",
    price: "1.650.000 đ",
    originalPrice: "2.200.000 đ",
    discount: "Hỗ trợ 25%",
    badge: "Thế mạnh Quân Y 7A",
    category: "Chuyên sâu",
    isPopular: true,
    description: "Đánh giá chi tiết mật độ xương, thoái hóa khớp gối, cột sống thắt lưng, phát hiện sớm thoát vị đĩa đệm và lún xẹp đốt sống.",
    features: [
      "Bác sĩ Chuyên khoa Chấn thương Chỉnh hình (Khoa B1) trực tiếp khám",
      "Đo mật độ xương (DEXA scan) chẩn đoán loãng xương",
      "Chụp X-quang khớp gối/cột sống thẳng nghiêng kỹ thuật số",
      "Siêu âm khớp gối/khớp vai phát hiện tràn dịch và viêm bao hoạt dịch",
      "Xét nghiệm Acid Uric (tầm soát bệnh Gút)",
      "Xét nghiệm Calci, Phospho máu",
      "Xét nghiệm yếu tố dạng thấp (RF) & máu lắng (沉)",
      "Tư vấn phác đồ bơm xi măng sinh học hoặc tập PHCN nếu có chỉ định"
    ],
    recommendedFor: "Người trên 40 tuổi, người đau nhức xương khớp, thoái hóa cột sống, tiền sử chấn thương thể thao."
  },
  {
    id: "tam-soat-toandien-dotquy",
    name: "Gói Khám Toàn Diện & Tầm Soát Đột Quỵ Não",
    subtitle: "Tầm soát chuyên sâu bệnh tim mạch, xơ vữa mạch máu và nguy cơ tai biến",
    price: "2.850.000 đ",
    originalPrice: "3.600.000 đ",
    discount: "Hỗ trợ 20%",
    badge: "Cao cấp Quân Y",
    category: "Toàn diện",
    description: "Ứng dụng máy chụp cộng hưởng từ MRI 1.5 Tesla hoặc CT-Scanner kiểm tra chi tiết mạch máu não và chức năng cơ quan đích.",
    features: [
      "Hội chẩn cùng Đại tá, PGS. TS. BS Chuyên khoa cấp cao",
      "Chụp cộng hưởng từ MRI sọ não hoặc CT-Scanner đa dãy",
      "Siêu âm Doppler màu mạch máu cảnh tầm soát mảng xơ vữa",
      "Siêu âm Doppler tim màu khảo sát cấu trúc và phân suất tống máu",
      "Bộ mỡ máu toàn phần (Cholesterol, Triglycerid, HDL-C, LDL-C)",
      "HbA1c theo dõi đường huyết 3 tháng gần nhất",
      "Siêu âm ổ bụng tổng quát màu 4D",
      "Kê đơn thuốc điện tử và hồ sơ theo dõi sức khỏe dài hạn"
    ],
    recommendedFor: "Người có tiền sử tăng huyết áp, đái tháo đường, rối loạn mỡ máu, người trung niên và cao tuổi."
  }
];

export const EQUIPMENT_LIST = [
  {
    name: "Hệ Thống Chụp Cộng Hưởng Từ MRI 1.5 Tesla",
    desc: "Chẩn đoán hình ảnh độ phân giải cực cao, không xâm lấn, phát hiện sớm tổn thương sọ não, cột sống, tủy sống và dây chằng khớp gối.",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Máy Chụp Cắt Lớp Vi Tính CT-Scanner Đa Dãy",
    desc: "Tốc độ quét nhanh, liều xạ thấp, hỗ trợ dựng hình 3D trong cấp cứu đa chấn thương gãy xương, đột quỵ và tầm soát u phổi, gan mật.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Hệ Thống Tăng Sáng Truyền Hình C-Arm Phẫu Thuật",
    desc: "Thiết bị hỗ trợ dẫn đường phẫu thuật chấn thương chỉnh hình: bơm xi măng sinh học đốt sống, nắn chỉnh kết hợp xương với độ chính xác đến từng milimet.",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Trung Tâm Lọc Máu Thận Nhân Tạo Fresenius (Đức)",
    desc: "Hệ thống máy thận nhân tạo thông minh thế hệ mới, màng lọc tương thích sinh học cao giúp lọc sạch độc chất ure, creatinin an toàn.",
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Hệ Thống Phẫu Thuật & Nội Soi Tiêu Hóa Karl Storz",
    desc: "Công nghệ nội soi phóng đại độ nét cao chuẩn Đức, phát hiện sớm polyp tiền ung thư ống tiêu hóa và hỗ trợ mổ nội soi ổ bụng ít xâm lấn.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Máy Đo Mật Độ Xương DEXA Toàn Thân",
    desc: "Tiêu chuẩn vàng của Tổ chức Y tế Thế giới (WHO) trong chẩn đoán mức độ loãng xương, tiên lượng nguy cơ gãy xương ở người lớn tuổi.",
    img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800"
  }
];

export const CLINIC_FAQS = [
  {
    q: "Bệnh nhân có thẻ BHYT đăng ký tại trạm y tế hoặc bệnh viện khác có được khám tại BV Quân y 7A không?",
    a: "Hoàn toàn ĐƯỢC và hưởng 100% quyền lợi BHYT đúng tuyến! Theo quy định thông tuyến khám chữa bệnh BHYT, mọi người dân có thẻ BHYT trên phạm vi toàn quốc khi đến khám chữa bệnh ngoại trú hoặc nội trú tại Bệnh Viện Quân Y 7A đều được thanh toán theo đúng mức hưởng trên thẻ mà không cần giấy chuyển viện."
  },
  {
    q: "Kỹ thuật bơm xi măng sinh học tạo hình thân đốt sống (Khoa B1) tại BV Quân y 7A có ưu điểm gì?",
    a: "Đây là kỹ thuật mũi nhọn nổi tiếng do Đại tá, PGS. TS. BS. Lê Quang Trí trực tiếp chủ trì. Kỹ thuật xâm lấn tối thiểu qua da, không cần mổ hở, thời gian thực hiện chỉ khoảng 30 - 45 phút. Bệnh nhân lún xẹp đốt sống do loãng xương hoặc chấn thương có thể hết đau tức thì và tự đi lại được ngay trong ngày."
  },
  {
    q: "Bệnh viện Quân y 7A có khám chữa bệnh vào Thứ 7 và ngày nghỉ không?",
    a: "Có. Khoa Khám bệnh làm việc sáng Thứ 7 từ 07h00 đến 12h00 (tiếp nhận cả khám BHYT và khám dịch vụ theo yêu cầu). Riêng Khoa Hồi Sức Cấp Cứu và các khu điều trị nội trú luôn duy trì kíp trực chiến 24/24 tất cả các ngày trong năm, sẵn sàng tiếp nhận cấp cứu khẩn cấp."
  },
  {
    q: "Vị trí Bệnh viện Quân y 7A ở đâu và có chỗ đỗ xe ô tô không?",
    a: "Bệnh viện tọa lạc tại số 466 Nguyễn Trãi, Phường 8, Quận 5, TP.HCM (ngay trung tâm Quận 5, thuận tiện di chuyển từ Quận 1, Quận 6, Quận 8, Quận 10, Quận 11). Bệnh viện có khuôn viên rộng rãi với bãi đỗ xe máy và xe ô tô có lực lượng vệ binh quân đội trông giữ an toàn 24/24."
  },
  {
    q: "Đối tượng nào được ưu tiên khi đăng ký khám tại Bệnh viện Quân y 7A?",
    a: "Bệnh viện thực hiện chế độ ưu tiên tiếp đón theo điều lệnh Quân đội: Bà Mẹ Việt Nam Anh Hùng, thương binh, bệnh binh, quân nhân tại ngũ, người cao tuổi từ 75 tuổi trở lên, người khuyết tật nặng và các trường hợp cấp cứu khẩn cấp."
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Thương binh Nguyễn Văn Hải",
    age: 68,
    address: "Quận 5, TP.HCM",
    doctor: "PGS. TS. BS. Lê Quang Trí (Khoa B1)",
    comment: "Tôi bị xẹp đốt sống thắt lưng đau buốt không đi lại được. Được Giám đốc Trí và kíp mổ Khoa Chấn thương Chỉnh hình bơm xi măng sinh học chỉ 30 phút, sáng mổ chiều tôi đã đứng dậy đi lại bình thường. Tác phong bộ đội Quân khu 7 vô cùng trách nhiệm và chu đáo.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Chị Trần Thanh Thảo",
    age: 45,
    address: "Bình Chánh, TP.HCM",
    doctor: "BS. CKII. Lê Thị Kim Anh (Khoa A1)",
    comment: "Mẹ tôi chạy thận nhân tạo định kỳ tại Khoa Thận Lọc Máu BV Quân y 7A hơn 3 năm nay. Máy móc Fresenius rất mới, phòng lọc sạch sẽ, điều dưỡng tận tình gọi dạ bảo vâng. BHYT thanh toán đúng tuyến 100% đỡ gánh nặng kinh tế gia đình rất nhiều.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Anh Hoàng Minh Tuấn",
    age: 34,
    address: "Quận 10, TP.HCM",
    doctor: "BS. CKII. Nguyễn Văn Dũng (Khoa B2)",
    comment: "Tôi mổ ruột thừa nội soi tại Khoa Ngoại B2. Bác sĩ mổ vết rạch siêu nhỏ, không đau nhiều, nằm viện 2 ngày là được xuất viện. Thủ tục nhập viện xuất viện tại khu đón tiếp rất nhanh nhẹn, trật tự đúng chất kỷ luật quân y.",
    rating: 5
  }
];

export const HEALTH_ARTICLES = [
  {
    id: "art-1",
    title: "Lún xẹp đốt sống ở người lớn tuổi: Giải pháp giảm đau tức thì bằng xi măng sinh học",
    category: "Chấn Thương Chỉnh Hình",
    readTime: "5 phút đọc",
    summary: "Phương pháp tạo hình thân đốt sống qua da (Vertebroplasty) tại BV Quân y 7A giúp bệnh nhân lớn tuổi hết đau lưng tức thì, tránh nguy cơ nằm bất động gây loét tỳ đè và viêm phổi.",
    author: "Đại tá, PGS. TS. BS. Lê Quang Trí",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "art-2",
    title: "Quyền lợi thông tuyến BHYT toàn quốc khi khám chữa bệnh tại Bệnh Viện Quân Y 7A",
    category: "Chính Sách BHYT",
    readTime: "4 phút đọc",
    summary: "Hướng dẫn chi tiết thủ tục hưởng 100% quyền lợi BHYT đúng tuyến cho người dân có thẻ BHYT trên cả nước khi khám ngoại trú và nội trú tại Bệnh Viện Quân Y 7A.",
    author: "Ban Kế Hoạch Tổng Hợp Quân Y 7A",
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "art-3",
    title: "Chăm sóc và bảo tồn chức năng thận ở bệnh nhân tăng huyết áp và đái tháo đường",
    category: "Nội Tim - Thận - Khớp",
    readTime: "6 phút đọc",
    summary: "Lời khuyên từ bác sĩ chuyên khoa A1 về chế độ dinh dưỡng giảm muối, kiểm soát huyết áp mục tiêu và lịch khám định kỳ nhằm ngăn ngừa tiến triển suy thận mạn.",
    author: "Trung tá, BS. CKII. Lê Thị Kim Anh",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  }
];

export const TIME_SLOTS = [
  { id: "slot-1", time: "07:00 - 08:30", label: "Buổi Sáng (Ca 1)" },
  { id: "slot-2", time: "08:30 - 10:00", label: "Buổi Sáng (Ca 2)" },
  { id: "slot-3", time: "10:00 - 11:30", label: "Buổi Sáng (Ca 3)" },
  { id: "slot-4", time: "13:00 - 14:30", label: "Buổi Chiều (Ca 4)" },
  { id: "slot-5", time: "14:30 - 16:30", label: "Buổi Chiều (Ca 5)" }
];
