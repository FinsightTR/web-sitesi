import type { ModuleKey } from "@/lib/workspace/types";

export type WorkspaceModuleSlug =
  | "dashboard"
  | "raporlama"
  | "butce-performans"
  | "nakit-akisi"
  | "teknokent-arge"
  | "belgeler"
  | "mali-surecler";

export type WorkspaceModuleSection = {
  title: string;
  description: string;
  emptyText?: string;
};

export type WorkspaceModulePageConfig = {
  slug: WorkspaceModuleSlug;
  moduleId: ModuleKey;
  title: string;
  description: string;
  sections: WorkspaceModuleSection[];
};

export const workspaceModulePages: WorkspaceModulePageConfig[] = [
  {
    slug: "dashboard",
    moduleId: "dashboard",
    title: "Dashboard",
    description: "Şirket çalışma alanı için genel görünüm, yaklaşan raporlar, açık görevler ve son dokümanlar.",
    sections: [
      { title: "Genel görünüm", description: "Yetkili modüller ve çalışma alanı durumunun özetleneceği alan." },
      { title: "Yaklaşan raporlar", description: "Raporlama takvimi ve dönem kapanışı hazırlıkları burada izlenecek." },
      { title: "Açık görevler", description: "Şirketiniz için açık aksiyonların listeleneceği alan." },
      { title: "Son dokümanlar", description: "Son yüklenen veya güncellenen dokümanların listeleneceği alan." },
    ],
  },
  {
    slug: "raporlama",
    moduleId: "reporting",
    title: "Raporlama",
    description: "Yönetim raporları, KPI görünümü ve dönem kapanış notları için güvenli raporlama alanı.",
    sections: [
      { title: "Yönetim raporları", description: "Yönetim ekibi için hazırlanacak dönemsel rapor başlıkları." },
      { title: "KPI görünümü", description: "Operasyonel ve finansal performans göstergeleri için özet alan." },
      { title: "Dönem kapanış notları", description: "Kapanış döneminde izlenecek değerlendirme ve kontrol notları." },
    ],
  },
  {
    slug: "butce-performans",
    moduleId: "budget_performance",
    title: "Bütçe & Performans",
    description: "Bütçe kullanımı, P&L takibi ve sapma analizlerinin şirket bazlı izleme alanı.",
    sections: [
      { title: "Bütçe kullanım görünümü", description: "Bütçe kalemleri ve gerçekleşen kullanımın izleneceği alan." },
      { title: "P&L takip alanı", description: "Gelir tablosu kırılımlarının dönemsel takip yüzeyi." },
      { title: "Sapma analizi", description: "Planlanan ve gerçekleşen değerler arasındaki farkların değerlendirme alanı." },
    ],
  },
  {
    slug: "nakit-akisi",
    moduleId: "cashflow",
    title: "Nakit Akışı",
    description: "12 haftalık projeksiyon, tahsilat/ödeme planı ve riskli dönemlerin izlenmesi.",
    sections: [
      { title: "12 haftalık projeksiyon", description: "Kısa vadeli nakit görünümü için haftalık projeksiyon alanı." },
      { title: "Tahsilat / ödeme planı", description: "Beklenen tahsilat ve ödeme hareketlerinin koordinasyon alanı." },
      { title: "Riskli dönemler", description: "Sıkışma riski taşıyan dönemlerin erken uyarı alanı." },
    ],
  },
  {
    slug: "teknokent-arge",
    moduleId: "teknokent_arge",
    title: "Teknokent / Ar-Ge",
    description: "Teknokent, Ar-Ge, teşvik ve proje hazırlık süreçlerinin takip alanı.",
    sections: [
      { title: "Proje listesi", description: "Teknokent ve Ar-Ge kapsamındaki projelerin izleme alanı." },
      { title: "Personel eşleştirme", description: "Proje ve personel bağlantılarının kontrol alanı." },
      { title: "Muafiyet / teşvik takip alanı", description: "Muafiyet, teşvik ve destek başlıklarının dönemsel takip alanı." },
      { title: "TÜBİTAK / Ar-Ge süreçleri hazırlık alanı", description: "Başvuru, raporlama ve hazırlık süreçleri için koordinasyon yüzeyi." },
    ],
  },
  {
    slug: "belgeler",
    moduleId: "documents",
    title: "Belgeler",
    description: "Doküman listesi, kategori alanları ve sonraki faz yükleme hazırlığı.",
    sections: [
      { title: "Doküman listesi", description: "Şirket çalışma alanına ait doküman kayıtları." },
      { title: "Kategori alanları", description: "Dokümanların süreç ve konu bazlı sınıflandırma alanı." },
      { title: "Yükleme alanı sonraki faz notu", description: "Dosya yükleme akışı bir sonraki fazda etkinleştirilecek." },
    ],
  },
  {
    slug: "mali-surecler",
    moduleId: "financial_operations",
    title: "Mali Süreçler",
    description: "Muhasebe kapanışı, bordro/beyan takibi ve mali müşavir koordinasyon alanı.",
    sections: [
      { title: "Muhasebe kapanış checklist", description: "Dönem kapanışında izlenecek kontrol başlıkları." },
      { title: "Bordro / beyan / dönemsel takip", description: "Bordro, beyanname ve dönemsel yükümlülükler için takip alanı." },
      { title: "Mali müşavir koordinasyon alanı", description: "Mali müşavirlik ekibiyle yürütülecek aksiyonların koordinasyon yüzeyi." },
    ],
  },
];

export const modulePageHrefById: Partial<Record<ModuleKey, string>> = Object.fromEntries(
  workspaceModulePages.map((modulePage) => [modulePage.moduleId, `/portal/${modulePage.slug}`])
) as Partial<Record<ModuleKey, string>>;

export function getWorkspaceModulePage(slug: WorkspaceModuleSlug) {
  return workspaceModulePages.find((modulePage) => modulePage.slug === slug);
}
