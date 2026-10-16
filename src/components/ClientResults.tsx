import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const results = [
  { value: "+40%", label: "Sales in under 6 months" },
  { value: "−20%", label: "Waste with our model" },
  { value: "2", label: "Delivery scooters mobilised" },
  { value: "1", label: "Full-time position created" },
];

export function NostyResults() {
  return (
    <section className="py-20 border-y border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-primary">Proven results · Nosty's Fresh Fast Food</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Real business. Measurable impact.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Since partnering with MOZK Solutions, Nosty's Fresh Fast Food increased sales by 40% in under six months.
            Our model reduced waste by 20%, while delivery integrated into the app mobilised the restaurant with
            two delivery scooters and helped create employment, including one full-time position.
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
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild><Link to="/contact">Let's talk about your business <ArrowRight aria-hidden="true" /></Link></Button>
          <Button asChild variant="outline"><a href="https://www.nosty.co.za" target="_blank" rel="noopener noreferrer">Visit Nosty's <ExternalLink aria-hidden="true" /></a></Button>
        </div>
      </div>
    </section>
  );
}