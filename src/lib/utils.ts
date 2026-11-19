export const cn = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(" ");

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
