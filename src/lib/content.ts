export const companyLegalAddress = "Atatürk Mah. Ertuğrul Gazi Sok. Metropol İstanbul A Blok No:2E, D:7, Ataşehir/İstanbul";

export const navItems = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetlerimiz" },
  { href: "/budget-performance-portal", label: "Çalışma Alanı" },
  { href: "/gundem", label: "Gündem" },
  { href: "/iletisim", label: "İletişim" },
];

export const services = [
  {
    title: "Budget & Performance Portal",
    description:
      "Bütçe, gerçekleşen, P&L, nakit akışı ve şirket performansını tek bir yönetici görünümünde takip etmeye hazırlanan dijital çalışma alanı yaklaşımı.",
    items: ["Bütçe hazırlama", "Bütçe-gerçekleşen karşılaştırması", "P&L dashboard", "Nakit akışı takibi", "Sapma analizi", "Yönetici raporları", "Şirket bazlı performans izleme"],
  },
  {
    title: "Teknokent ve Ar-Ge Finansal Danışmanlığı",
    description:
      "Teknokent firmaları için muafiyet süreçlerini, proje bazlı kayıtları ve denetime hazır finansal dosyalamayı sistematik hale getiren destek.",
    items: ["Teknokent muafiyet süreçleri", "Proje gider-gelir takibi", "Ar-Ge personel ve gider raporlaması", "Muafiyet raporu hazırlığı", "Denetime hazır finansal dosyalama"],
  },
];

export const insights = [
  {
    title: "KOBİ’ler için Bütçe Disiplini Neden Önemlidir?",
    tag: "Bütçe Yönetimi",
    summary: "Büyüme dönemlerinde bütçe disiplini, nakit kararlarını ve yatırım önceliklerini daha görünür hale getirir.",
  },
  {
    title: "Nakit Akışı Yönetiminde Erken Uyarı Sistemleri",
    tag: "Nakit Akışı",
    summary: "Tahsilat, ödeme ve operasyonel gider sinyallerini erken takip etmek finansal sürprizleri azaltır.",
  },
  {
    title: "Teknokent Firmalarında Finansal Raporlama Kontrol Listesi",
    tag: "Teknokent",
    summary: "Proje bazlı gelir-gider takibi ve denetime hazır dosyalama için pratik kontrol alanları.",
  },
];

export const legalLinks = [
  { slug: "kisisel-verilerin-korunmasi", label: "Kişisel Verilerin Korunması" },
  { slug: "yasal-uygulamalar", label: "Yasal Uygulamalar" },
  { slug: "bilgi-guvenligi", label: "Bilgi Güvenliği" },
  { slug: "site-sahibi", label: "Site Sahibi" },
  { slug: "yasal-uyari", label: "Yasal Uyarı" },
  { slug: "cerezler-hakkinda", label: "Çerezler Hakkında" },
  { slug: "harici-hizmet-saglayicilar", label: "Harici Hizmet Sağlayıcılar" },
  { slug: "bilgi-toplumu-hizmetleri", label: "Bilgi Toplumu Hizmetleri" },
];

export const legalPages = {
  "kisisel-verilerin-korunmasi": {
    title: "Kişisel Verilerin Korunması",
    paragraphs: [
      "FinCity, web sitesi ve iletişim formu üzerinden iletilen kişisel verileri yalnızca talebin değerlendirilmesi, kullanıcıyla iletişim kurulması ve ilgili hizmet ihtiyacının anlaşılması amacıyla kullanır.",
      "İletişim formunda ad soyad, şirket, e-posta, hizmet ilgisi ve mesaj gibi bilgiler talep edilebilir. Bu bilgiler, talebin doğru şekilde sınıflandırılması ve FinCity ekibinin kullanıcıya dönüş yapabilmesi için işlenir.",
      "FinCity, kişisel verilerin gereksiz kişilerle paylaşılmaması, yetkisiz erişimin önlenmesi ve dijital çalışma alanı süreçlerinde veri minimizasyonu ilkesinin korunması için makul teknik ve idari tedbirleri gözetir.",
    ],
  },
  "yasal-uygulamalar": {
    title: "Yasal Uygulamalar",
    paragraphs: [
      "Bu web sitesinde yer alan açıklamalar FinCity’nin danışmanlık, raporlama, Teknokent, Ar-Ge, teşvik ve dijital çalışma alanı hizmetlerini genel hatlarıyla tanıtmak amacıyla hazırlanmıştır.",
      "Sitedeki bilgiler, herhangi bir şirket için tek başına bağlayıcı finansal, vergisel, hukuki veya teknik danışmanlık sonucu oluşturmaz. Her hizmetin kapsamı, şirketin ihtiyacına göre ayrıca değerlendirilir.",
      "FinCity ile yürütülecek hizmetlerde nihai kapsam, yöntem, sorumluluklar ve teslimatlar teklif, sözleşme ve karşılıklı yazılı değerlendirme süreçleriyle netleştirilir.",
    ],
  },
  "bilgi-guvenligi": {
    title: "Bilgi Güvenliği",
    paragraphs: [
      "FinCity, finansal raporlama, Teknokent, Ar-Ge ve dijital çalışma alanı süreçlerinde veri gizliliği, erişim kontrolü ve bilgi bütünlüğünü temel ilkeler arasında görür.",
      "Web sitesinde gösterilen dashboard, portal ve demo içerikler gerçek müşteri finansal verisi içermez. Bu alanlar yalnızca ürün ve hizmet yaklaşımını anlatmak için tasarlanmıştır.",
      "Gelecekte etkinleştirilecek kullanıcı girişi, rol bazlı erişim, veri entegrasyonu veya müşteri portalı işlevleri için üretim ortamı bağlantıları kontrollü şekilde ve ayrıca güvenlik değerlendirmesi yapılarak devreye alınmalıdır.",
    ],
  },
  "site-sahibi": {
    title: "Site Sahibi",
    paragraphs: [
      "Bu web sitesi FinCity markasına ait hizmet, ürün ve iletişim kanallarını tanıtmak amacıyla hazırlanmıştır.",
      `Yasal adres: ${companyLegalAddress}.`,
      "FinCity ile iletişim için bu web sitesindeki iletişim formu kullanılmalıdır. Web sitesinde telefon numarası yayınlanmamaktadır.",
    ],
  },
  "yasal-uyari": {
    title: "Yasal Uyarı",
    paragraphs: [
      "FinCity web sitesindeki tüm içerikler genel bilgilendirme niteliğindedir. Buradaki açıklamalar tek başına finansal, vergisel, hukuki, yatırım veya teşvik danışmanlığı yerine geçmez.",
      "Teknokent, Ar-Ge, TÜBİTAK, KOSGEB, yatırım teşvikleri, finansal raporlama ve dijital yönetim konularında her şirketin durumu kendi faaliyet alanı, kayıt düzeni, proje yapısı ve mevzuat koşulları çerçevesinde ayrıca değerlendirilmelidir.",
      "FinCity, web sitesindeki bilgilerin güncel ve anlaşılır olmasına özen gösterir; ancak nihai uygulama kararları yazılı kapsam ve uzman değerlendirmesi sonrasında alınmalıdır.",
    ],
  },
  "cerezler-hakkinda": {
    title: "Çerezler Hakkında",
    paragraphs: [
      "FinCity web sitesi, temel site işlevlerinin çalışması ve kullanıcı deneyiminin sürdürülmesi için gerekli teknik çerezleri veya benzeri teknolojileri kullanabilir.",
      "Analitik veya performans ölçümleme araçları devreye alındığında, bu araçların amacı kullanıcı deneyimini iyileştirmek, sayfa performansını izlemek ve anonim kullanım eğilimlerini anlamaktır.",
      "Ziyaretçilerin gizliliğine saygı gösterilir; zorunlu olmayan çerezlerin kullanımı halinde ilgili bilgilendirme ve tercih yönetimi mekanizmaları ayrıca yapılandırılabilir.",
    ],
  },
  "harici-hizmet-saglayicilar": {
    title: "Harici Hizmet Sağlayıcılar",
    paragraphs: [
      "FinCity web sitesi ve ileride etkinleştirilebilecek dijital çalışma alanı; barındırma, e-posta iletimi, güvenlik, performans veya analitik amaçlarla harici hizmet sağlayıcılarından yararlanabilir.",
      "Bu sağlayıcılar, yalnızca ilgili teknik işlevin yerine getirilmesi veya kullanıcı talebinin işlenmesi için gerekli ölçüde kullanılmalıdır. Gizli anahtarlar ve servis erişimleri açık kaynak kod içinde tutulmaz.",
      "Harici hizmet sağlayıcı kullanımı, veri güvenliği, erişim kontrolü ve hizmet sürekliliği ilkeleri gözetilerek değerlendirilir.",
    ],
  },
  "bilgi-toplumu-hizmetleri": {
    title: "Bilgi Toplumu Hizmetleri",
    paragraphs: [
      "Bu bölüm, FinCity web sitesine ilişkin kurumsal bilgilendirme alanı olarak düzenlenmiştir.",
      `Yasal adres: ${companyLegalAddress}.`,
      "FinCity ile iletişim için telefon numarası yerine web sitesindeki iletişim formu kullanılmalıdır. Hizmet talepleri form üzerinden alınır ve ilgili ekip tarafından değerlendirilir.",
    ],
  },
} satisfies Record<string, { title: string; paragraphs: string[] }>;

export const portalMetrics = [
  { label: "Raporlama", value: "Aylık", note: "Yönetici görünümü" },
  { label: "Bütçe & P&L", value: "%78", note: "Demo kullanım" },
  { label: "Nakit Akışı", value: "12 Hafta", note: "Projeksiyon alanı" },
  { label: "Mali Süreçler", value: "Modüler", note: "Bilgi akışı" },
];
