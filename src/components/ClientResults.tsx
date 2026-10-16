import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const results = [
  { value: "+40%", label: "Client sales in under 6 months" },
  { value: ">20%", label: "Perishable waste reduced" },
  { value: "R100k+", label: "Revenue driven for anchor clients" },
  { value: "2 + 1", label: "Delivery scooters & full-time job" },
];

export function ClientResults() {
  return (
    <section className="py-20 border-y border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-primary">Proven results · Our track record</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Real business. Measurable impact.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our anchor township fast-food client increased sales by 40% in under six months of working with MOZK
            Solutions. KasiConnect has driven over R100,000 in revenue for anchor clients, our model cut perishable
            waste by over 20%, and app-integrated delivery mobilised two delivery scooters and created employment,
            including one full-time position.
          </p>
        </div>
        <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {results.map((result) => (
            <div key={result.label} className="border-l-2 border-primary pl-4">
              <dd className="text-4xl font-bold text-primary">{result.value}</dd>
              <dt className="mt-3 text-sm text-muted-foreground">{result.label}</dt>
            </div>
          ))}
        </dl>
        <div className="mt-10">
          <Button asChild><Link to="/contact">Let's talk about your business <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </div>
    </section>
  );
}
