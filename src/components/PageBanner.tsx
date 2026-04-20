import banner from "@/assets/page-banner.jpg";

export function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <img
        src={banner}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={600}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="container relative mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
