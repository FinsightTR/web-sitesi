export type AuthProvider = "placeholder" | "supabase" | "token-pin";

export const authPlan = {
  currentProvider: "placeholder" as AuthProvider,
  futureOptions: ["Supabase Auth", "Token + PIN", "SSO-ready session layer"],
  productionRule:
    "Production auth veya müşteri verisi bağlantısı açık onay olmadan etkinleştirilmez.",
};
