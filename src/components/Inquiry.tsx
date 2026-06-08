import { Factory,Mail, Phone } from "lucide-react";
import { useState } from "react";

const contactItems = [
  { icon:  <Factory size={18} />, label: "Factory Office",  value: "Plot 42, Phase III, Industrial Apparel Zone, IN" },
  { icon: <Mail size={18} />, label: "Email",           value: "info@rsenterprises.com" },
  { icon: <Phone size={18} />, label: "Phone",           value: "+91 (800) 555-SHOE" },
];

export function Inquiry() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    quantity: "", category: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBase =
    "w-full px-4 py-2.5 sm:py-3 border-[1.5px] border-slate-200 rounded-xl text-sm text-slate-800 bg-white placeholder:text-slate-400  outline-none transition-all duration-200 font-sans appearance-none";

  return (
    <section id="inquiry" className="py-14 sm:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 sm:gap-14 lg:gap-20 items-start">

          {/* Left info */}
          <div className="lg:sticky lg:top-24 flex flex-col items-center lg:items-start ">
            <span className="inline-block text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-500 rounded-full px-1">
              Get In Touch
            </span>
            <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-semibold text-slate-900 leading-tight mb-3">
              Start Your Order{" "}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-[1.75] mb-8 text-center lg:text-left">
              Whether you're a startup brand or an established retailer, we partner
              with businesses of all sizes for bulk orders, OEM production, and
              custom footwear development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center text-lg rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/[0.08] border border-orange-500/20">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.08em] text-orange-500 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-slate-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-slate-200 ">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-8 sm:py-12">
                <span className="text-5xl">✅</span>
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-slate-900">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-slate-500 leading-[1.7] max-w-xs">
                  Thank you for reaching out. Our team will get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-7 py-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-semibold text-sm rounded-full transition-all duration-300 cursor-pointer border-none"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[0.78rem] font-semibold text-slate-800">Full Name *</label>
                    <input id="name" name="name" type="text" required placeholder="John Smith"
                      className={inputBase} value={form.name} onChange={handleChange} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-[0.78rem] font-semibold text-slate-800">Company Name</label>
                    <input id="company" name="company" type="text" placeholder="Your Brand Co."
                      className={inputBase} value={form.company} onChange={handleChange} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[0.78rem] font-semibold text-slate-800">Email *</label>
                    <input id="email" name="email" type="email" required placeholder="you@company.com"
                      className={inputBase} value={form.email} onChange={handleChange} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[0.78rem] font-semibold text-slate-800">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 234 567 8900"
                      className={inputBase} value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="category" className="text-[0.78rem] font-semibold text-slate-800">Shoe Category *</label>
                    <select id="category" name="category" required
                      className={inputBase} value={form.category} onChange={handleChange}>
                      <option value="">Select Category</option>
                      <option>Running Footwear</option>
                      <option>Basketball Shoes</option>
                      <option>Training Shoes</option>
                      <option>Hiking &amp; Outdoor</option>
                      <option>Custom Design</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="quantity" className="text-[0.78rem] font-semibold text-slate-800">Estimated Quantity</label>
                    <input id="quantity" name="quantity" type="text" placeholder="e.g. 500 pairs/month"
                      className={inputBase} value={form.quantity} onChange={handleChange} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[0.78rem] font-semibold text-slate-800">Message / Requirements</label>
                  <textarea id="message" name="message" rows={4}
                    placeholder="Tell us about your requirements, preferred materials, deadlines, etc."
                    className={`${inputBase} resize-y min-h-[90px]`}
                    value={form.message} onChange={handleChange} />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 bg-gradient-to-br from-orange-500 to-orange-600 text-white font-semibold text-sm rounded-full hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border-none mt-1"
                >
                  Submit Inquiry →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
