import { Metadata } from "next";
import SectionTitle from "@/components/common/SectionTitle";
import { testimonials } from "@/lib/data";
import TestimonialCard from "./components/TestimonialCard";
import UlasanForm from "./components/UlasanForm";

export const metadata: Metadata = {
  title: "Ulasan Pelanggan - MoraStore",
  description: "Lihat ulasan pelanggan MoraStore tentang pengalaman top up game online mereka dan bagikan pengalaman Anda.",
};

export default function UlasanPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionTitle
        title="Ulasan Pelanggan"
        subtitle="Apa kata mereka tentang layanan MoraStore"
        centered
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testimonials.map((testimonial) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial} 
                />
              ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="glass-card p-6">
              <h2 className="text-lg font-medium mb-4">Berikan Ulasan Anda</h2>
              <UlasanForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}