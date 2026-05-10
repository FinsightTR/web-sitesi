export type ServiceItem = {
  title: string;
  description: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  visualLabel: string;
  paragraphs: string[];
  services: ServiceItem[];
  values: ServiceItem[];
};

export type ServiceGroup = {
  title: string;
  description: string;
  slugs: string[];
};

const commonValues = [
  { title: "Uyum", description: "Mevzuat, raporlama ve iç kontrol beklentileriyle uyumlu, izlenebilir bir çalışma düzeni kurulur." },
  { title: "Verimlilik", description: "Tekrarlı işler sadeleştirilir; finans, proje ve operasyon ekiplerinin karar alma hızı artırılır." },
  { title: "Şeffaflık", description: "Yönetim için görünür, belgelenebilir ve ölçülebilir çıktı yapısı oluşturulur." },
  { title: "Risk azaltımı", description: "Süreç, veri, teşvik ve karar noktalarında oluşabilecek riskler erken aşamada görünür hale getirilir." },
];

const projectValues = [
  { title: "Başvuru disiplini", description: "Uygunluk, kapsam, bütçe ve dokümantasyon baştan doğru kurgulanır." },
  { title: "Sürdürülebilir takip", description: "Proje dönemleri, personel, gider, gelir ve raporlama adımları düzenli izlenir." },
  { title: "Denetime hazırlık", description: "Muafiyet, teşvik ve destek süreçleri belgelenebilir bir dosya düzeniyle yönetilir." },
  { title: "Finansal görünürlük", description: "Projenin mali etkisi, nakit akışı ve yönetim raporlamasıyla ilişkilendirilir." },
];

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "teknokent-yonetim-danismanligi",
    title: "Teknokent Yönetim Danışmanlığı",
    eyebrow: "Ar-Ge, muafiyet ve sürdürülebilir uyum",
    summary: "Teknokent firmaları için başvuru, proje takibi, muafiyet, mali/teknik raporlama ve denetim hazırlığı süreçlerini uçtan uca ele alır.",
    description: "4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu kapsamındaki başvuru, sürdürme, muafiyet ve raporlama süreçleri için finansal ve operasyonel danışmanlık sağlar.",
    visualLabel: "Innovation campus and technology district",
    paragraphs: [
      "Teknokent süreçleri yalnızca başvuru dosyasından ibaret değildir; proje, personel, gelir-gider ayrıştırması ve muafiyet uygulamalarının sürdürülebilir şekilde takip edilmesini gerektirir.",
      "FinCity, mali ve teknik uygunluk analizinden proje yazımı ve başvuruya, dönemsel raporlamadan denetim hazırlığına kadar bütünsel bir çalışma düzeni oluşturur.",
      "Amaç, Teknokent avantajlarının mevzuata uyumlu, belgelenebilir ve yönetim raporlamasına entegre biçimde sürdürülebilmesidir."
    ],
    services: [
      { title: "Mali ve teknik uygunluk analizi", description: "Faaliyetlerin Teknokent kapsamına uygunluğunu finansal ve operasyonel açıdan değerlendirir." },
      { title: "Proje yazım ve başvuru danışmanlığı", description: "Teknokent proje başvuruları için kapsam, çıktı, bütçe ve zaman planını hazırlar." },
      { title: "Proje gelir/gider takibi", description: "Gelir, gider ve proje bazlı maliyet ayrıştırmasını düzenli raporlama yapısına bağlar." },
      { title: "Personel süreç takibi", description: "Ar-Ge personeli, zaman kullanımı ve muafiyet ilişkisini kontrol edilebilir hale getirir." },
      { title: "Muafiyet ve teşvik sürdürülebilirliği", description: "Uygulamaların mevzuatla uyumlu şekilde devamı için kontrol noktaları tasarlar." },
      { title: "Yıllık risk analizi", description: "Mali uygulama, dosyalama ve denetim riski taşıyan alanları dönemsel olarak görünür kılar." },
      { title: "Denetim ve raporlama hazırlığı", description: "Denetime hazır finansal ve teknik dosya düzeni kurulmasına destek olur." }
    ],
    values: projectValues,
  },
  {
    slug: "arge-tasarim-merkezi-danismanligi",
    title: "Ar-Ge & Tasarım Merkezi Danışmanlığı",
    eyebrow: "5746 kapsamı ve merkez yönetimi",
    summary: "Ar-Ge/Tasarım Merkezi başvurusu, proje portföyü, personel, zaman ve maliyet kurgusu ile izleme süreçlerini yönetilebilir hale getirir.",
    description: "5746 sayılı kanun kapsamındaki merkez kurulum ve sürdürme süreçleri için uygunluk, başvuru, raporlama ve denetim hazırlığı danışmanlığı sunar.",
    visualLabel: "Research and development planning",
    paragraphs: [
      "Ar-Ge ve Tasarım Merkezi yapısı, stratejik proje portföyünün, nitelikli personelin ve maliyet kurgusunun birlikte yönetilmesini gerektirir.",
      "FinCity, merkez başvuru dosyasından faaliyet raporu ve izleme süreçlerine kadar tüm adımları finansal raporlama disipliniyle ele alır.",
      "Bu yaklaşım, teşvik ve istisna uygulamalarının sürdürülebilir, ölçülebilir ve denetime hazır olmasını hedefler."
    ],
    services: [
      { title: "Uygunluk değerlendirmesi", description: "Şirket yapısının Ar-Ge/Tasarım Merkezi kriterlerine uygunluğunu analiz eder." },
      { title: "Başvuru dosyası hazırlığı", description: "Merkez başvurusu için teknik, idari ve mali dosya yapısını hazırlar." },
      { title: "Proje portföyü tasarımı", description: "Ar-Ge/Tasarım projelerini hedef, çıktı ve iş paketi yapısıyla kurgular." },
      { title: "Personel ve zaman kurgusu", description: "Personel rol, süre ve proje ilişkisini izlenebilir hale getirir." },
      { title: "Faaliyet raporu desteği", description: "Dönemsel faaliyet ve izleme raporları için içerik ve veri düzeni sağlar." },
      { title: "Teşvik sürdürülebilirliği", description: "İstisna ve teşvik uygulamalarının mevzuatla uyumlu yönetilmesine destek olur." },
      { title: "Denetim hazırlığı", description: "Merkez denetimleri için belgelenebilir, tutarlı ve güncel dosya yapısı kurar." }
    ],
    values: projectValues,
  },
  {
    slug: "tubitak-proje-danismanligi",
    title: "TÜBİTAK Proje Danışmanlığı",
    eyebrow: "TEYDEB proje kurgusu ve raporlama",
    summary: "TÜBİTAK TEYDEB başvuruları için proje fikri, iş paketleri, bütçe, teknik/mali raporlama ve kapanış süreçlerini destekler.",
    description: "1501, 1507, 1707 ve ilgili programlara uygun proje kurgusu, başvuru dosyası, dönem raporu ve hakem değerlendirmesi hazırlığı sağlar.",
    visualLabel: "R&D project funding",
    paragraphs: [
      "TÜBİTAK projeleri, teknik yenilik iddiası ile bütçe, iş paketi, kaynak ve çıktı planının tutarlı şekilde sunulmasını gerektirir.",
      "FinCity, proje yazımı, bütçe kurgusu, raporlama ve kapanış aşamalarında teknik ekip ile finansal yönetimi aynı çalışma planında buluşturur.",
      "Amaç, başvurudan proje kapanışına kadar destek programının beklentilerine uygun, ölçülebilir ve belgelenebilir süreç yürütmektir."
    ],
    services: [
      { title: "Program uygunluk analizi", description: "Proje fikrini 1501, 1507, 1707 ve benzeri destek programları açısından değerlendirir." },
      { title: "Proje yazımı", description: "Amaç, yenilik, yöntem, iş paketi ve çıktıları anlaşılır dosya formatına taşır." },
      { title: "Bütçe ve kaynak planı", description: "Personel, hizmet, malzeme ve diğer maliyet kalemlerini destek mantığına uygun kurgular." },
      { title: "Hakem süreci hazırlığı", description: "Değerlendirme toplantıları için teknik ve mali argümanların hazırlanmasına destek olur." },
      { title: "Dönem raporları", description: "Teknik gerçekleşmeler ile mali harcamaların tutarlı raporlanmasını sağlar." },
      { title: "Kapanış dosyaları", description: "Proje tamamlanırken çıktılar, harcamalar ve belgelerin düzenli şekilde kapanmasını destekler." }
    ],
    values: projectValues,
  },
  {
    slug: "kosgeb-proje-danismanligi",
    title: "KOSGEB Proje Danışmanlığı",
    eyebrow: "KOBİ destekleri ve proje yönetimi",
    summary: "KOSGEB destekleri için uygunluk analizi, başvuru dosyası, iş planı, bütçe, ödeme talebi ve kapanış hazırlığı sunar.",
    description: "KOBİ’lerin destek programlarından doğru şekilde yararlanması için başvuru, izleme, raporlama ve ödeme süreçlerini yapılandırır.",
    visualLabel: "SME grant planning",
    paragraphs: [
      "KOSGEB projeleri, yalnızca başvuru formu değil; iş planı, bütçe, dokümantasyon ve uygulama takibinin birlikte yönetilmesini gerektirir.",
      "FinCity, destek programına uygunluk analizinden ödeme talep dosyalarına kadar KOBİ’lerin proje yönetim yükünü azaltacak bir yaklaşım sunar.",
      "Bu çalışma, desteklerin finansal etkisini ve raporlama sorumluluklarını yönetilebilir hale getirir."
    ],
    services: [
      { title: "Destek uygunluk analizi", description: "Firma ve proje yapısının ilgili KOSGEB programına uygunluğunu değerlendirir." },
      { title: "Başvuru dosyası", description: "Başvuru formu, iş planı ve destek gerekçesini yapılandırır." },
      { title: "Bütçe dokümantasyonu", description: "Harcama kalemlerini, teklifleri ve ödeme belgelerini izlenebilir hale getirir." },
      { title: "İzleme ve raporlama", description: "Proje uygulama döneminde gerçekleşmeleri raporlanabilir formatta takip eder." },
      { title: "Ödeme talep süreçleri", description: "Destek ödeme talepleri için belge, harcama ve kanıt dosyalarını düzenler." },
      { title: "Kapanış hazırlığı", description: "Proje tamamlanırken rapor, dosya ve denetim hazırlığı sağlar." }
    ],
    values: projectValues,
  },
  {
    slug: "tekmer-danismanligi",
    title: "TEKMER Danışmanlığı",
    eyebrow: "Girişim ve teknoloji merkezi yapısı",
    summary: "TEKMER başvurusu, iş modeli, proje portföyü, operasyon planı, kuruluş ve sürdürülebilirlik süreçleri için danışmanlık sunar.",
    description: "Teknoloji ve girişim odaklı merkez yapılarının başvuru, kuruluş ve izleme dönemlerinde kurumsal planlama desteği verir.",
    visualLabel: "Technology entrepreneurship center",
    paragraphs: [
      "TEKMER yapıları, girişimcilik ekosistemi, proje portföyü, operasyon modeli ve sürdürülebilirlik planının bütünsel ele alınmasını gerektirir.",
      "FinCity, başvuru hazırlığından kuruluş sonrası izleme süreçlerine kadar iş modeli, bütçe ve operasyon planının tutarlı şekilde yapılandırılmasına destek olur.",
      "Amaç, merkezi yalnızca kurmak değil; sürdürülebilir şekilde yönetilebilir bir iş ve proje yapısına dönüştürmektir."
    ],
    services: [
      { title: "Başvuru hazırlığı", description: "TEKMER başvurusu için gerekli strateji, proje ve operasyon bilgilerini yapılandırır." },
      { title: "İş modeli tasarımı", description: "Merkezin gelir modeli, paydaş yapısı ve hizmet kurgusunu netleştirir." },
      { title: "Proje portföyü", description: "Girişim, teknoloji ve Ar-Ge odaklı proje alanlarını planlar." },
      { title: "Operasyon planı", description: "Kaynak, ekip, süreç ve izleme mekanizmalarını oluşturur." },
      { title: "Kuruluş süreci", description: "Başvuru sonrası kuruluş, dokümantasyon ve takip adımlarına destek olur." },
      { title: "Sürdürülebilirlik takibi", description: "Merkezin hedef, performans ve raporlama düzenini izlenebilir hale getirir." }
    ],
    values: projectValues,
  },
  {
    slug: "yatirim-tesvik-danismanligi",
    title: "Yatırım Teşvik Danışmanlığı",
    eyebrow: "Fizibilite, belge ve kapanış süreçleri",
    summary: "Yatırım teşvik belgesi başvuru, revizyon, kapatma, fizibilite, bütçe ve makine/teçhizat planı süreçlerini destekler.",
    description: "Yatırımların mevzuat, finansman, bütçe ve operasyonel etkilerini birlikte ele alan teşvik danışmanlığı sağlar.",
    visualLabel: "Investment incentive planning",
    paragraphs: [
      "Yatırım teşvik süreçleri, yatırımın kapsamı, harcama planı, makine/teçhizat listesi ve mevzuat koşullarının uyumlu yönetilmesini gerektirir.",
      "FinCity, başvuru ve revizyon adımlarını finansal fizibilite ve nakit etkisiyle birlikte değerlendirir.",
      "Bu yaklaşım, teşvik belgesi süreçlerinin yalnızca idari değil, yatırım kararını destekleyen stratejik bir araç olarak kullanılmasını sağlar."
    ],
    services: [
      { title: "Teşvik belgesi başvurusu", description: "Yatırım kapsamı, kapasite, harcama ve belge dosyasını hazırlar." },
      { title: "Revizyon süreçleri", description: "Yatırım planındaki değişiklikleri belge ve mevzuat çerçevesinde yönetir." },
      { title: "Fizibilite ve bütçe", description: "Yatırımın finansal etkisini ve geri dönüş varsayımlarını görünür hale getirir." },
      { title: "Makine/teçhizat planı", description: "Yatırım kalemlerinin uygunluk ve dokümantasyon kurgusunu oluşturur." },
      { title: "Kapatma işlemleri", description: "Belge kapatma döneminde harcama ve belge kontrollerini destekler." },
      { title: "Mevzuat uyumu", description: "Teşvik koşulları ve uygulama yükümlülüklerinin takibini sağlar." }
    ],
    values: projectValues,
  },
  {
    slug: "ihracat-turquality-danismanligi",
    title: "İhracat & TURQUALITY / E-TURQUALITY Danışmanlığı",
    eyebrow: "Global büyüme ve destek programları",
    summary: "İhracat destekleri, TURQUALITY ve E-TURQUALITY başvuru hazırlığı, marka, pazar ve dijitalleşme planlarını kapsar.",
    description: "Küresel büyüme hedefleri için destek programı uygunluğu, başvuru dosyası, harcama takibi ve raporlama disiplini kurar.",
    visualLabel: "Global growth and export support",
    paragraphs: [
      "İhracat ve marka destekleri, şirketin global büyüme hedeflerini pazar, marka, dijitalleşme ve finansal takip disiplinleriyle birlikte ele alır.",
      "FinCity, TURQUALITY ve E-TURQUALITY benzeri programlarda başvuru hazırlığı, destek kalemleri ve raporlama takibini yapılandırır.",
      "Amaç, destek programlarını yalnızca teşvik olarak değil, markalaşma ve uluslararası büyüme stratejisinin parçası olarak yönetmektir."
    ],
    services: [
      { title: "İhracat destek uygunluğu", description: "Şirketin ürün, pazar ve harcama yapısını destek programları açısından analiz eder." },
      { title: "TURQUALITY başvuru hazırlığı", description: "Marka, pazar, strateji ve finansal dosya hazırlığına destek olur." },
      { title: "E-TURQUALITY kurgusu", description: "Dijital kanal, pazaryeri ve e-ihracat odaklı destek süreçlerini yapılandırır." },
      { title: "Global büyüme planı", description: "Pazar, marka ve operasyonel yol haritasını destek programlarıyla ilişkilendirir." },
      { title: "Harcama takibi", description: "Destek kapsamındaki harcama ve dokümantasyonu izlenebilir hale getirir." },
      { title: "Raporlama ve denetim", description: "Destek sonrası raporlama ve denetim beklentilerine hazır dosya düzeni kurar." }
    ],
    values: projectValues,
  },
  {
    slug: "avrupa-birligi-uluslararasi-fon-projeleri",
    title: "Avrupa Birliği ve Uluslararası Fon Projeleri",
    eyebrow: "Uluslararası programlar ve fon yönetimi",
    summary: "Horizon Europe, Erasmus+, EUREKA, ERA-NET, IPA, IKG, FRIT, NEET ve benzeri fonlu projeler için başvuru ve yönetim desteği sunar.",
    description: "Ortak bulma, proje yazımı, bütçe, başvuru, dönemsel raporlama ve proje yönetimi süreçlerini uluslararası fon mantığıyla yapılandırır.",
    visualLabel: "International project funding",
    paragraphs: [
      "Uluslararası fon projeleri, teknik fikir kadar konsorsiyum, bütçe, etki analizi, uygunluk ve raporlama kabiliyeti gerektirir.",
      "FinCity, AB ve uluslararası fon programlarında proje fikrinin başvuru dosyasına, bütçeye ve uygulama planına dönüştürülmesine destek olur.",
      "Bu yaklaşım, fonlu projelerde mali ve operasyonel sürdürülebilirliği başvuru aşamasından itibaren güçlendirir."
    ],
    services: [
      { title: "Program uygunluk analizi", description: "Horizon Europe, Erasmus+, EUREKA, ERA-NET ve benzeri programları değerlendirir." },
      { title: "IPA/IKG/FRIT/NEET projeleri", description: "Fonlu proje başvuruları için kapsam, hedef kitle ve bütçe kurgusu hazırlar." },
      { title: "Ortak bulma desteği", description: "Proje konsorsiyumu ve paydaş yapısının kurulmasına katkı sağlar." },
      { title: "Proje yazımı", description: "Amaç, faaliyet, çıktı, etki ve sürdürülebilirlik metinlerini yapılandırır." },
      { title: "Bütçe ve mali takip", description: "Fon kurallarına uygun bütçe, harcama ve raporlama düzeni kurar." },
      { title: "Dönemsel raporlama", description: "Uygulama dönemlerinde teknik ve mali gerçekleşmeleri raporlanabilir hale getirir." }
    ],
    values: projectValues,
  },
  {
    slug: "budget-performance-portal",
    title: "Budget & Performance Portal",
    eyebrow: "Dijital çalışma alanı",
    summary: "Bütçe, gerçekleşen, P&L, nakit akışı ve performans raporlamasını yönetici seviyesinde tek çalışma alanında toplar.",
    description: "FinCity çalışma alanı, raporlama, modül kullanımı ve mali süreç bilgi akışı için güvenli ve ölçeklenebilir bir portal vizyonu sunar.",
    visualLabel: "Budget and performance workspace",
    paragraphs: [
      "Budget & Performance Portal, finansal yönetim çıktılarının tek bir karar destek ekranında izlenebilmesi için tasarlanır.",
      "Bütçe, gerçekleşen, P&L, nakit akışı, sapma analizi ve yönetim raporları şirket bazlı performans görünümüne bağlanır.",
      "Bu sayfadaki görseller demo niteliğindedir; gerçek müşteri verisi içermez ve production auth bağlantısı kurulmadan yalnızca tanıtım amacı taşır."
    ],
    services: [
      { title: "Bütçe hazırlama", description: "Şirket, departman veya proje bazlı bütçe planlama sürecini yapılandırır." },
      { title: "Bütçe-gerçekleşen karşılaştırması", description: "Sapma ve gerçekleşme analizlerini yönetim raporu formatına taşır." },
      { title: "P&L dashboard", description: "Gelir, maliyet, brüt kâr ve operasyonel performans görünümü sunar." },
      { title: "Nakit akışı takibi", description: "Tahsilat, ödeme ve dönemsel nakit projeksiyonunu izlenebilir hale getirir." },
      { title: "Yönetici raporları", description: "Karar alıcılar için sade, özet ve aksiyon alınabilir raporlar üretir." },
      { title: "Modül altyapısı", description: "İleride kullanıcı, şirket ve yetki bazlı modüllere genişleyebilecek mimari sunar." }
    ],
    values: commonValues,
  },
  {
    slug: "mali-musavirlik-finans-operasyonlari",
    title: "Mali Müşavirlik Süreçleri ve Finans Operasyonları",
    eyebrow: "Muhasebe koordinasyonu ve finans operasyonu",
    summary: "Teknokent ve Ar-Ge firmalarına özel mali süreç, muafiyet raporu, bordro, personel, gelir/gider ayrıştırması ve finans operasyonu takibi sağlar.",
    description: "Muhasebe, mali müşavirlik ve yönetim raporlaması arasındaki bilgi akışını kontrol edilebilir ve raporlanabilir hale getirir.",
    visualLabel: "Finance operations and compliance",
    paragraphs: [
      "Mali müşavirlik ve finans operasyonları, özellikle Teknokent ve Ar-Ge firmalarında proje bazlı kayıt, muafiyet ve bordro süreçleriyle yakından ilişkilidir.",
      "FinCity, mali müşavirlik ekipleriyle yönetim raporlaması arasında köprü kurarak finansal verinin daha doğru, zamanında ve karar destek amaçlı kullanılmasına katkı sağlar.",
      "Bu yaklaşım, muhasebe kayıtları, muafiyet raporları, proje gelir/gider ayrıştırması ve yönetim raporlarının aynı kontrol düzeninde ilerlemesini hedefler."
    ],
    services: [
      { title: "Muafiyet raporları", description: "Teknokent ve Ar-Ge muafiyet süreçleri için finansal dosya hazırlığı sağlar." },
      { title: "Gelir/gider ayrıştırması", description: "Proje, faaliyet ve şirket bazlı gelir-gider takibini netleştirir." },
      { title: "Proje bazlı finansal takip", description: "Proje bütçesi, gerçekleşen ve maliyet dağılımını düzenli izler." },
      { title: "Bordro ve personel kontrolleri", description: "Personel, teşvik ve bordro ilişkisini uyumlu şekilde kontrol eder." },
      { title: "Muhasebe koordinasyonu", description: "Mali müşavirlik çıktıları ile yönetim raporlamasını uyumlu hale getirir." },
      { title: "Finans operasyon raporları", description: "Aylık kapanış, kontrol listesi ve yönetim raporu akışını düzenler." }
    ],
    values: commonValues,
  },
  {
    slug: "dijital-hizmetler",
    title: "Dijital Hizmetler",
    eyebrow: "Teknoloji ve otomasyon",
    summary: "Finans, operasyon ve satış verilerini dijitalleştirerek raporlama, entegrasyon ve otomasyon altyapısını güçlendirir.",
    description: "Dashboard, entegrasyon, veri akışı ve süreç otomasyonu ile şirket yönetiminde daha hızlı ve izlenebilir karar mekanizmaları kurar.",
    visualLabel: "Digital finance operations",
    paragraphs: [
      "Dijital hizmetler, şirketlerin finans, satış ve operasyon verilerini tekil ve anlamlı bir yönetim görünümüne dönüştürmeyi hedefler.",
      "FinCity, dashboard, veri akışı, API entegrasyonu, RPA ve low-code otomasyon yaklaşımlarıyla manuel iş yükünü azaltan, sürdürülebilir raporlama mimarileri tasarlar.",
      "Bu yaklaşım, karar alıcıların farklı sistemlerde dağınık duran verileri daha hızlı okumasını ve aksiyona dönüştürmesini sağlar."
    ],
    services: [
      { title: "RPA / Low-code Süreç Otomasyonu", description: "Tekrarlı operasyonel ve finansal süreçleri düşük kodlu otomasyonlarla hızlandırır." },
      { title: "ERP/CRM Entegrasyonları", description: "ERP, CRM ve raporlama katmanları arasında düzenli veri akışı kurar." },
      { title: "API & Veri Akışı Tasarımı", description: "Sistemler arası güvenilir veri taşıma ve kontrol kurgusu oluşturur." },
      { title: "Veri Ambarı (DWH) Kurulumu", description: "Raporlama ve analiz için merkezi, tutarlı ve izlenebilir veri yapısı kurar." },
      { title: "Yönetim Dashboard’ları (FP&A)", description: "Bütçe, nakit, P&L ve KPI görünümünü yönetici seviyesinde sunar." },
      { title: "Operasyon & Satış Raporları", description: "Satış ve operasyon performansını düzenli ve aksiyon alınabilir raporlara dönüştürür." },
      { title: "Bulut Geçişi & Mimari Yönlendirme", description: "Sürdürülebilir, güvenli ve ölçeklenebilir bulut mimarisi için yol haritası hazırlar." },
      { title: "Veri Kalitesi & Yönetişim", description: "Raporlamada tutarlılık, sahiplik ve veri doğruluğu standartları oluşturur." }
    ],
    values: commonValues,
  },
  {
    slug: "vergi-danismanligi",
    title: "Vergi Danışmanlığı",
    eyebrow: "Uyum ve stratejik vergi yönetimi",
    summary: "Vergiyi yalnızca maliyet değil, mevzuat uyumu ve stratejik karar alma alanı olarak ele alır.",
    description: "Beyannamelerden vergi teknolojilerine, KDV süreçlerinden inceleme desteğine kadar uçtan uca danışmanlık sağlar.",
    visualLabel: "Tax strategy and compliance",
    paragraphs: [
      "Vergi danışmanlığı, şirketlerin mevzuata uyumunu sağlarken finansal kararların vergi etkisini görünür hale getirir.",
      "FinCity, rutin uyum süreçleri ile stratejik vergi planlamasını birlikte ele alarak işletmenin raporlama ve kontrol düzenine katkı sağlar.",
      "Dijital vergi süreçleri, belge yönetimi ve otomasyon yaklaşımıyla vergi fonksiyonunun daha ölçülebilir ve sürdürülebilir çalışması hedeflenir."
    ],
    services: [
      { title: "Beyannameler & Uyum Hizmetleri", description: "Periyodik beyan ve uyum süreçlerinin takibini disiplinli hale getirir." },
      { title: "KDV İade Süreçleri", description: "KDV iade dosyalarının hazırlık, takip ve kontrol adımlarını destekler." },
      { title: "Transfer Fiyatlandırması", description: "Grup içi işlemler için dokümantasyon ve ekonomik analiz yaklaşımı sunar." },
      { title: "Vergi İnceleme Desteği", description: "İnceleme süreçlerinde veri hazırlığı, açıklama ve savunma desteği sağlar." },
      { title: "E-Fatura / E-Defter Uyum Hizmetleri", description: "Elektronik belge ve kayıt düzeninin mevzuata uygunluğunu güçlendirir." },
      { title: "Vergi Teknolojileri & Otomasyon", description: "Vergi süreçlerinde veri çekme, kontrol ve raporlama otomasyonları tasarlar." },
      { title: "Stratejik Vergi Planlaması", description: "İş kararlarının vergisel etkilerini önceden görünür hale getirir." },
      { title: "Vergi İnceleme & Savunma", description: "Riskli alanları tespit eder, inceleme süreci için sistematik hazırlık yapar." }
    ],
    values: commonValues,
  },
  {
    slug: "finansal-raporlama-muhasebe",
    title: "Finansal Raporlama ve Muhasebe",
    eyebrow: "Muhasebe, raporlama ve karar desteği",
    summary: "Muhasebe ve raporlamayı yalnızca uyum değil, stratejik karar alma mekanizmasının temel unsuru olarak konumlandırır.",
    description: "UFRS/IFRS dönüşümü, yönetim raporlaması, bütçeleme, faaliyet raporu ve finansal araçlar danışmanlığı sunar.",
    visualLabel: "Financial reporting accounting",
    paragraphs: [
      "Finansal raporlama ve muhasebe çalışmaları, şirketin performansını doğru, tutarlı ve yönetilebilir bir formatta sunmayı hedefler.",
      "FinCity, yasal kayıtlar, yönetim raporları, bütçe ve finansal analiz çıktıları arasındaki ilişkiyi güçlendirerek karar destek kalitesini artırır.",
      "Bu yaklaşım, finans fonksiyonunu yalnızca geçmişi kaydeden bir yapıdan, geleceği planlayan ve yönetimi destekleyen bir yapıya taşır."
    ],
    services: [
      { title: "UFRS/IFRS Dönüşüm Hizmetleri", description: "Raporlama standartlarına geçiş ve uyum süreçlerini destekler." },
      { title: "M&A Süreçlerinde Muhasebe Desteği", description: "İşlem dönemlerinde muhasebe, raporlama ve finansal analiz desteği sağlar." },
      { title: "Faaliyet Raporu ve Muhasebe Danışmanlığı", description: "Rapor formatı, içerik ve finansal açıklama yapısını güçlendirir." },
      { title: "Sermaye Piyasalarına İlişkin Danışmanlık", description: "Sermaye piyasası beklentileriyle uyumlu raporlama yaklaşımı oluşturur." },
      { title: "Yönetim Raporlaması ve Bütçeleme", description: "Bütçe, gerçekleşen ve yönetim raporları için sürdürülebilir model kurar." },
      { title: "Hazine İşlemleri ve Finansal Araçlar", description: "Finansal araç, hazine ve nakit yönetimi işlemlerinde raporlama desteği sağlar." }
    ],
    values: commonValues,
  },
  {
    slug: "risk-surec-teknoloji",
    title: "Risk, Süreç ve Teknoloji",
    eyebrow: "Kontrol, yönetişim ve süreç olgunluğu",
    summary: "Finansal, operasyonel ve teknolojik riskleri bütünsel yaklaşımla görünür ve yönetilebilir hale getirir.",
    description: "ERP riskleri, iç denetim, BT yönetişimi, finansal risk ve süreç olgunluğu alanlarında kontrol çerçevesi oluşturur.",
    visualLabel: "Risk process technology",
    paragraphs: [
      "Risk, süreç ve teknoloji çalışmaları, şirketin finansal ve operasyonel karar noktalarında kontrol, güvenlik ve izlenebilirlik seviyesini artırır.",
      "FinCity, ERP süreçleri, veri güvenliği, iç kontrol ve kurumsal yönetişim alanlarını birlikte değerlendirerek risklerin erken tespit edilmesini sağlar.",
      "Bu yaklaşım, teknolojinin yalnızca araç değil, sürdürülebilir kontrol ve karar destek yapısının bir parçası olarak konumlandırılmasını hedefler."
    ],
    services: [
      { title: "ERP Risk Hizmetleri", description: "ERP süreçlerindeki yetki, akış ve kontrol açıklarını görünür hale getirir." },
      { title: "Finansal Risk ve Regülasyon", description: "Finansal yükümlülük, limit ve regülasyon kaynaklı riskleri analiz eder." },
      { title: "Kurumsal Hazine Yönetimi", description: "Nakit, borç, kur ve likidite süreçlerinde kontrol yaklaşımı oluşturur." },
      { title: "BT Risk ve Yönetişim", description: "BT süreçlerinin erişim, güvenlik ve yönetişim katmanlarını değerlendirir." },
      { title: "İç Denetim ve Kontrol", description: "Süreç kontrollerini denetime hazır ve sürdürülebilir hale getirir." },
      { title: "Kurumsal Yönetim", description: "Yetki, sorumluluk, raporlama ve karar alma süreçlerini yapılandırır." },
      { title: "Veri Güvenliği & Süreç Olgunluğu", description: "Veri bütünlüğü ve süreç olgunluğu için iyileştirme alanlarını belirler." }
    ],
    values: commonValues,
  },
  {
    slug: "strateji-yonetim",
    title: "Strateji ve Yönetim Danışmanlığı",
    eyebrow: "Hedef, performans ve dönüşüm",
    summary: "Vizyonu uygulanabilir hedeflere çeviren, ölçülebilir ve etkili yönetim modelleri oluşturur.",
    description: "Stratejik planlama, OKR/KPI, organizasyonel strateji ve dijital dönüşüm alanlarında yönetim sistemi tasarlar.",
    visualLabel: "Strategy management advisory",
    paragraphs: [
      "Strateji ve yönetim danışmanlığı, şirket vizyonunu somut hedefler, ölçülebilir göstergeler ve uygulanabilir aksiyon planlarıyla birleştirir.",
      "FinCity, finansal görünürlük ile operasyonel hedefleri aynı yönetim dilinde buluşturarak karar alma süreçlerinin daha net işlemesini sağlar.",
      "Bu çalışma, büyüme, verimlilik, dönüşüm ve sürdürülebilirlik gündemlerinin yönetilebilir bir performans sistemine dönüşmesini hedefler."
    ],
    services: [
      { title: "Stratejik Planlama & Hedef Belirleme", description: "Şirket vizyonunu dönemsel hedef ve aksiyonlara dönüştürür." },
      { title: "OKR & KPI Yönetim Sistemleri", description: "Hedeflerin ölçülmesi ve takip edilmesi için performans mimarisi kurar." },
      { title: "Organizasyonel Strateji & Yapılanma", description: "Stratejiye uygun rol, ekip ve karar alma yapısı tasarlar." },
      { title: "Dijital & Operasyonel Dönüşüm", description: "Süreç ve teknoloji dönüşümünü uygulanabilir yol haritasına bağlar." },
      { title: "Kurumsal Performans Yönetimi", description: "Finansal ve operasyonel performansı birlikte izleyen model oluşturur." },
      { title: "Sürdürülebilirlik & ESG Stratejileri", description: "Sürdürülebilirlik hedeflerini yönetim raporlamasıyla ilişkilendirir." }
    ],
    values: commonValues,
  },
  {
    slug: "insan-yonetimi-organizasyon",
    title: "İnsan Yönetimi ve Organizasyon Danışmanlığı",
    eyebrow: "Performans, kültür ve değişim",
    summary: "İnsan kaynağını şirket stratejisiyle hizalayan performans, organizasyon ve değişim yönetimi yaklaşımı sunar.",
    description: "OKR, KPI, organizasyonel yapı, liderlik ve çalışan deneyimi alanlarında ölçülebilir yönetim sistemi kurar.",
    visualLabel: "People and organization",
    paragraphs: [
      "İnsan yönetimi ve organizasyon danışmanlığı, şirket hedeflerini ekip yapısı, rol dağılımı ve performans yönetimiyle hizalamayı amaçlar.",
      "FinCity, finansal ve operasyonel hedeflerin insan kaynağı üzerinde oluşturduğu ihtiyaçları analiz ederek daha ölçülebilir bir organizasyon yapısı kurulmasına destek olur.",
      "Bu çalışma; kültür, değişim, liderlik ve çalışan deneyimini yönetim raporlamasıyla birlikte ele alan bütünsel bir yaklaşım sağlar."
    ],
    services: [
      { title: "OKR & KPI Sistem Tasarımı", description: "Stratejik hedefleri ölçülebilir ekip ve kişi hedeflerine dönüştürür." },
      { title: "Performans Yönetimi", description: "Değerlendirme, takip ve geri bildirim süreçlerini sistematik hale getirir." },
      { title: "Organizasyonel Yapılandırma", description: "Rol, sorumluluk ve raporlama ilişkilerini daha net bir yapıya taşır." },
      { title: "Değişim Yönetimi", description: "Yeni süreç ve sistemlerin ekipler tarafından benimsenmesini destekler." },
      { title: "Liderlik & Yetenek Gelişimi", description: "Kritik rol ve liderlik kapasitesinin gelişimi için yol haritası oluşturur." },
      { title: "Kurum Kültürü & Çalışan Deneyimi", description: "Şirket değerleri, iletişim ve çalışan deneyimi alanlarında iyileştirme sağlar." }
    ],
    values: commonValues,
  },
  {
    slug: "sirket-birlesme-satin-alma",
    title: "Şirket Birleşme ve Satın Alma (M&A)",
    eyebrow: "İşlem danışmanlığı",
    summary: "İşlem öncesi, işlem sırası ve işlem sonrası süreçlerde finansal model, due diligence ve entegrasyon desteği sunar.",
    description: "Değerleme, data room, borç danışmanlığı, müzakere ve birleşme sonrası entegrasyon alanlarında uçtan uca işlem desteği sağlar.",
    visualLabel: "M&A transaction advisory",
    paragraphs: [
      "Birleşme ve satın alma süreçleri, finansal analiz, operasyonel gerçeklik, veri kalitesi ve stratejik karar alma disiplinini aynı anda gerektirir.",
      "FinCity, işlem taraflarına finansal modelleme, due diligence, değerleme ve entegrasyon planlama alanlarında anlaşılır ve yönetilebilir çıktı üretir.",
      "Bu süreçte amaç, riskleri erken görmek, değer yaratma fırsatlarını ortaya çıkarmak ve işlem sonrası uygulanabilir bir yol haritası oluşturmaktır."
    ],
    services: [
      { title: "Kurumsal Finansman Hizmetleri", description: "İşlem stratejisi, finansal model ve kaynak yapısı değerlendirmesi sunar." },
      { title: "Şirket Birleşme ve Satın Alma Desteği", description: "Alıcı veya satıcı tarafında işlem sürecinin yönetimine destek olur." },
      { title: "Due Diligence", description: "Finansal, operasyonel, BT ve İK başlıklarında durum tespiti yapar." },
      { title: "Değerleme Hizmetleri", description: "Şirket değerini etkileyen ana varsayım ve senaryoları analiz eder." },
      { title: "Borç Danışmanlığı", description: "Borç yapısı, geri ödeme kapasitesi ve finansman seçeneklerini değerlendirir." },
      { title: "M&A Veri Analitiği", description: "İşlem verilerinden karar destek sinyalleri ve risk göstergeleri üretir." },
      { title: "Data Room & Süreç PMO", description: "Veri odası hazırlığı ve işlem takibini yapılandırır." },
      { title: "Birleşme Sonrası Entegrasyon (PMI)", description: "İşlem sonrası sistem, süreç ve raporlama entegrasyonunu planlar." }
    ],
    values: commonValues,
  },
  {
    slug: "suistimal-uyum-kriz",
    title: "Suistimal, Uyum ve Kriz Yönetimi",
    eyebrow: "Etik, kontrol ve dayanıklılık",
    summary: "Etik, uyum, suistimal önleme, kriz planlama ve adli bilişim süreçlerini güçlendirir.",
    description: "Soruşturma, veri analitiği, kurumsal istihbarat ve farkındalık programlarıyla riskleri daha erken görünür hale getirir.",
    visualLabel: "Forensic compliance crisis",
    paragraphs: [
      "Suistimal, uyum ve kriz yönetimi çalışmaları, şirketlerin kontrol ortamını güçlendirerek etik ve sürdürülebilir iş yapışını destekler.",
      "FinCity, potansiyel risk alanlarının veri, süreç ve kontrol perspektifinden incelenmesine; kriz anlarında ise hızlı ve belgelenebilir aksiyon alınmasına yardımcı olur.",
      "Bu yaklaşım, yalnızca olay sonrası müdahaleyi değil; önleme, eğitim, farkındalık ve kurumsal dayanıklılık boyutlarını da kapsar."
    ],
    services: [
      { title: "Suistimal Risk Yönetimi & Soruşturmalar", description: "Riskli alanları inceler, olay ve veri bazlı değerlendirme süreci kurar." },
      { title: "Etik & Uyum Yönetimi", description: "Etik ilkeler, uyum politikaları ve izleme mekanizmalarını güçlendirir." },
      { title: "Kriz Yönetimi & Kurumsal İstihbarat", description: "Kritik olaylarda karar desteği ve bilgi akışı tasarımı sağlar." },
      { title: "Ticari Anlaşmazlık & Hasar İncelemeleri", description: "Uyuşmazlık süreçlerinde finansal ve operasyonel analiz desteği verir." },
      { title: "Veri Analitiği & Adli Bilişim", description: "Dijital kayıtlar ve veri setleri üzerinden bulgu üretimi sağlar." },
      { title: "Eğitim & Farkındalık Programları", description: "Ekiplerin etik, uyum ve kontrol farkındalığını artırır." }
    ],
    values: commonValues,
  },
  {
    slug: "aile-sirketi-hizmetleri",
    title: "Aile Şirketi Hizmetleri",
    eyebrow: "Kurumsallaşma ve kuşak geçişi",
    summary: "Aile şirketlerinin sürdürülebilir büyümesi, kurumsallaşması ve kuşaklar arası geçiş süreçlerine destek olur.",
    description: "Aile yönetimi, ortaklık yapısı, değerler, varlık yapılanması ve kurumsal yönetişim alanlarında yol haritası sunar.",
    visualLabel: "Family business advisory",
    paragraphs: [
      "Aile şirketleri için sürdürülebilir büyüme, yalnızca finansal performans değil; aile, ortaklık ve yönetim yapılarının dengeli işlemesiyle mümkündür.",
      "FinCity, kuşaktan kuşağa geçiş, kurumsal yönetim, ortakların iş modeli ve aile varlıklarının yapılanması gibi alanlarda sistematik yaklaşım sunar.",
      "Bu çalışma, aile değerleri ile profesyonel yönetim ilkelerini bir araya getirerek daha güçlü ve uzun vadeli karar mekanizmaları oluşturmayı hedefler."
    ],
    services: [
      { title: "Kuşaktan Kuşağa Geçiş", description: "Yetki, sorumluluk ve liderlik geçişlerinin planlı ilerlemesini destekler." },
      { title: "Aile Yönetimi", description: "Aile içi karar mekanizmaları ve iletişim yapısı için çerçeve oluşturur." },
      { title: "Kurumsal Yönetim", description: "Yönetim kurulu, komite ve raporlama yapılarının gelişimini destekler." },
      { title: "Ortakların İş Modeli", description: "Ortaklık ilişkileri, rol ve beklenti yönetimi için yapılandırma sağlar." },
      { title: "Değerler ve Amaçlar", description: "Aile ve şirket değerlerinin kurumsal stratejiyle uyumunu güçlendirir." },
      { title: "Aile Varlıklarının Yapılanması", description: "Varlık, yatırım ve sürdürülebilirlik perspektifinde yol haritası sunar." }
    ],
    values: commonValues,
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Ar-Ge, Teknokent ve Teşvik Danışmanlığı",
    description: "Teknokent, Ar-Ge, TÜBİTAK, KOSGEB, TEKMER, yatırım teşvikleri ve uluslararası fon süreçleri.",
    slugs: [
      "teknokent-yonetim-danismanligi",
      "arge-tasarim-merkezi-danismanligi",
      "tubitak-proje-danismanligi",
      "kosgeb-proje-danismanligi",
      "tekmer-danismanligi",
      "yatirim-tesvik-danismanligi",
      "ihracat-turquality-danismanligi",
      "avrupa-birligi-uluslararasi-fon-projeleri",
    ],
  },
  {
    title: "Finans, Vergi ve Dijital Yönetim",
    description: "Budget & Performance Portal, finansal raporlama, vergi, dijital hizmetler, risk ve finans operasyonları.",
    slugs: [
      "budget-performance-portal",
      "finansal-raporlama-muhasebe",
      "vergi-danismanligi",
      "dijital-hizmetler",
      "risk-surec-teknoloji",
      "mali-musavirlik-finans-operasyonlari",
    ],
  },
  {
    title: "Kurumsal Yönetim ve Stratejik Danışmanlık",
    description: "Strateji, organizasyon, M&A, uyum, kriz yönetimi ve aile şirketi danışmanlığı.",
    slugs: [
      "strateji-yonetim",
      "insan-yonetimi-organizasyon",
      "sirket-birlesme-satin-alma",
      "suistimal-uyum-kriz",
      "aile-sirketi-hizmetleri",
    ],
  },
];

export function getServiceCategory(slug: string) {
  return serviceCategories.find((service) => service.slug === slug);
}

export function getServicesByGroup(group: ServiceGroup) {
  return group.slugs.map((slug) => getServiceCategory(slug)).filter((service): service is ServiceCategory => Boolean(service));
}
