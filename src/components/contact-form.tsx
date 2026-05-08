const interests = [
  "Budget & Performance Portal",
  "Finansal Raporlama",
  "Teknokent ve Ar-Ge Danışmanlığı",
  "AI Destekli İş Yönetimi",
  "Sözleşme ve Fiyatlandırma Desteği",
];

export function ContactForm() {
  return (
    <form action="/api/contact" method="post" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Ad Soyad
          <input required name="name" className="rounded-2xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Şirket
          <input required name="company" className="rounded-2xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          E-posta
          <input required type="email" name="email" className="rounded-2xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Telefon
          <input name="phone" className="rounded-2xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500" />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
        Hizmet ilgisi
        <select name="interest" className="rounded-2xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500">
          {interests.map((interest) => <option key={interest}>{interest}</option>)}
        </select>
      </label>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
        Mesaj
        <textarea required name="message" rows={5} className="rounded-2xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500" />
      </label>
      <button type="submit" className="mt-5 w-full rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">
        Mesajı Gönder
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-500">
        Form otomatik cevap göndermez. Mail provider yapılandırıldığında mesajınız yasin@fincity.com.tr adresine iletilir.
      </p>
    </form>
  );
}
