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

const commonValues = [
  { title: "Uyum", description: "Mevzuat, raporlama ve iç kontrol beklentileriyle uyumlu bir çalışma düzeni oluşturulur." },
  { title: "Verimlilik", description: "Tekrarlı işler sadeleştirilir; finans ve operasyon ekiplerinin karar alma hızı artırılır." },
  { title: "Şeffaflık", description: "Yönetim ekipleri için görünür, izlenebilir ve ölçülebilir çıktı yapısı kurulur." },
  { title: "Risk azaltımı", description: "Süreç, veri ve karar noktalarında oluşabilecek finansal ve operasyonel riskler görünür hale getirilir." },
];

export const serviceCategories: ServiceCategory[] = [
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

export function getServiceCategory(slug: string) {
  return serviceCategories.find((service) => service.slug === slug);
}
