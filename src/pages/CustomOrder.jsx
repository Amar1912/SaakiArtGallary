import React, { useState } from 'react';
import {
  Calendar,
  IndianRupee,
  MessageCircle,
  PenTool,
  CheckCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CustomOrder() {

  // =========================================
  // FORM DATA
  // =========================================
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    category: 'Birthday Decorations',
    budget: '',
    requiredDate: '',
    idea: '',
  });

  const [fileName, setFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);


  // =========================================
  // HANDLE INPUT CHANGE
  // =========================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  // =========================================
  // SELECT PRODUCT
  // =========================================
  const selectProduct = (productName, price) => {
    setFormData((prev) => ({
      ...prev,
      category: productName,
      budget: price
    }));

    // Scroll to form
    setTimeout(() => {
      document
        .getElementById('custom-order-form')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
    }, 100);
  };


  // =========================================
  // HANDLE FILE
  // =========================================
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };


  // =========================================
  // HANDLE FORM SUBMIT
  // =========================================
  const handleSubmit = (e) => {
    e.preventDefault();

    // Confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: {
        y: 0.6
      },
      colors: [
        '#D97891',
        '#E89CAF',
        '#44383C'
      ]
    });

    // =========================================
    // BUSINESS WHATSAPP NUMBER
    // =========================================
    const businessNumber = '918999533278';


    // =========================================
    // WHATSAPP MESSAGE
    // =========================================
    const textMessage = `Hi Saakis Craft Gallery!

I would like to discuss a custom order request.

Name: ${formData.name}
WhatsApp Number: ${formData.whatsappNumber}
Product: ${formData.category}
Budget: ₹${formData.budget || 'To discuss'}
Required Date: ${formData.requiredDate || 'Flexible'}
Idea: ${formData.idea}
${fileName
        ? `Reference Image Included: Yes (${fileName})`
        : 'Reference Image Included: No'
      }

Please let me know the pricing breakdown and design consultation schedule.

Thank you!`;


    // Encode message
    const encodedMessage = encodeURIComponent(textMessage);


    // WhatsApp URL
    const whatsappUrl =
      `https://wa.me/${businessNumber}?text=${encodedMessage}`;


    // Show success screen
    setIsSubmitted(true);


    // Open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };


  return (

    <div className="pt-28 pb-24 bg-cream-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* =====================================================
            PAGE HEADER
            ===================================================== */}

        <div className="text-center space-y-4 mb-14 animate-fade-up">

          <span className="text-xs font-bold tracking-[0.25em] uppercase text-terracotta-600 block">
            Customization Studio
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-espresso-900 leading-tight">
            Have an Idea?
            <br />

            <span className="italic text-terracotta-600">
              Let's Make It Real.
            </span>
          </h1>

          <p className="text-charcoal/70 max-w-xl mx-auto font-sans text-sm sm:text-base leading-relaxed">
            Tell us what you're imagining. We will help turn your memory
            or personal concept into an exquisite handcrafted creation.
          </p>

        </div>



        {/* =====================================================
            PRODUCTS & PRICING
            ===================================================== */}

        <section className="mb-20">

          {/* Section Heading */}

          <div className="text-center mb-10">

            <div className="inline-flex items-center gap-2 mb-3">

              <Sparkles
                size={15}
                className="text-terracotta-600"
              />

              <span className="text-xs font-bold tracking-[0.25em] uppercase text-terracotta-600">
                Our Creations
              </span>

            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-espresso-900">
              Products & Pricing
            </h2>

            <p className="mt-3 text-sm text-charcoal/60 max-w-xl mx-auto">
              Explore our handcrafted creations and choose a product
              to customize according to your requirements.
            </p>

          </div>



          {/* =================================================
              PRODUCT GRID
              ================================================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


            {/* =================================================
                PRODUCT 1 — BIRTHDAY DECORATIONS
                Image: /public/img/img2.jpg
                ================================================= */}

            <div className="group bg-white rounded-3xl overflow-hidden border border-clay-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

              {/* Image */}

              <div className="relative h-64 overflow-hidden bg-blush-100">

                <img
                  src="/img/img2.jpg"
                  alt="Birthday Decorations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Bottom Pink Overlay */}

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-terracotta-700/50 to-transparent pointer-events-none" />

              </div>


              {/* Content */}

              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h3 className="text-xl font-semibold text-espresso-900">
                      Birthday Decorations
                    </h3>

                    <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                      Beautiful handcrafted decorations for birthdays
                      and special celebrations.
                    </p>

                  </div>

                </div>


                {/* Price + Button */}

                <div className="flex items-center justify-between mt-6">

                  <div>

                    <span className="text-xs text-charcoal/50 uppercase tracking-wider">
                      Starting from
                    </span>

                    <div className="text-2xl font-bold text-terracotta-600">
                      ₹599
                    </div>

                  </div>


                  <button
                    type="button"
                    onClick={() =>
                      selectProduct(
                        'Birthday Decorations',
                        '599'
                      )
                    }
                    className="px-5 py-2.5 rounded-full bg-terracotta-600 text-white text-xs font-bold tracking-wide hover:bg-terracotta-700 transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-terracotta-600/20"
                  >
                    CUSTOMIZE
                  </button>

                </div>

              </div>

            </div>



            {/* =================================================
                PRODUCT 2 — GIFT HAMPER
                Image: /public/img/img3.jpg
                ================================================= */}

            <div className="group bg-white rounded-3xl overflow-hidden border border-clay-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

              {/* Image */}

              <div className="relative h-64 overflow-hidden bg-blush-100">

                <img
                  src="/img/img3.jpg"
                  alt="Customizable Gift Hamper"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Bottom Pink Overlay */}

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-terracotta-700/50 to-transparent pointer-events-none" />

              </div>


              {/* Content */}

              <div className="p-6">

                <h3 className="text-xl font-semibold text-espresso-900">
                  Customizable Gift Hamper
                </h3>

                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  Personalized gift hampers designed specially for
                  your loved ones and special occasions.
                </p>


                {/* Price + Button */}

                <div className="flex items-center justify-between mt-6">

                  <div>

                    <span className="text-xs text-charcoal/50 uppercase tracking-wider">
                      Starting from
                    </span>

                    <div className="text-2xl font-bold text-terracotta-600">
                      ₹999
                    </div>

                  </div>


                  <button
                    type="button"
                    onClick={() =>
                      selectProduct(
                        'Customizable Gift Hamper',
                        '999'
                      )
                    }
                    className="px-5 py-2.5 rounded-full bg-terracotta-600 text-white text-xs font-bold tracking-wide hover:bg-terracotta-700 transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-terracotta-600/20"
                  >
                    CUSTOMIZE
                  </button>

                </div>

              </div>

            </div>



            {/* =================================================
                CUSTOM CREATION CARD
                ================================================= */}

            <div className="rounded-3xl border border-blush-300 bg-gradient-to-br from-blush-100 via-white to-white p-7 flex flex-col justify-center min-h-[420px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

              {/* Icon */}

              <div className="w-14 h-14 rounded-full bg-terracotta-600/10 flex items-center justify-center mb-6">

                <PenTool
                  size={24}
                  className="text-terracotta-600"
                />

              </div>


              <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-600">
                Custom Creation
              </span>


              <h3 className="mt-3 text-2xl font-serif font-bold text-espresso-900">
                Create Your Own
              </h3>


              <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">
                Have a completely different idea?
                Tell us what you're imagining and we'll
                create something specially for you.
              </p>


              <div className="mt-6">

                <span className="text-sm font-bold text-terracotta-600">
                  Price based on customization
                </span>

              </div>


              <button
                type="button"
                onClick={() =>
                  selectProduct(
                    'Custom Creation',
                    ''
                  )
                }
                className="mt-6 w-fit px-6 py-3 rounded-full border border-terracotta-600 text-terracotta-700 text-xs font-bold hover:bg-terracotta-600 hover:text-white transition-all"
              >
                START YOUR IDEA
              </button>

            </div>

          </div>

        </section>



        {/* =====================================================
            CUSTOM ORDER FORM + SIDEBAR
            ===================================================== */}

        <div
          id="custom-order-form"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >


          {/* ===================================================
              MAIN FORM
              =================================================== */}

          <div className="md:col-span-2 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-clay-200/70 animate-fade-in">

            {isSubmitted ? (

              /* =================================================
                 SUCCESS SCREEN
                 ================================================= */

              <div className="text-center py-12 space-y-4 animate-fade-in">

                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">

                  <CheckCircle size={32} />

                </div>


                <h2 className="text-2xl font-serif font-bold text-espresso-900">
                  Redirecting to WhatsApp...
                </h2>


                <p className="text-xs text-charcoal/60 max-w-xs mx-auto leading-relaxed">
                  We've formatted your customization details.
                  Your order request is being sent to Saakis Craft Gallery.
                </p>


                <div className="pt-4">

                  <div className="inline-block animate-bounce w-2 h-2 bg-terracotta-600 rounded-full mx-0.5" />

                  <div className="inline-block animate-bounce w-2 h-2 bg-terracotta-600 rounded-full mx-0.5 [animation-delay:0.2s]" />

                  <div className="inline-block animate-bounce w-2 h-2 bg-terracotta-600 rounded-full mx-0.5 [animation-delay:0.4s]" />

                </div>

              </div>

            ) : (

              /* =================================================
                 ORDER FORM
                 ================================================= */

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >


                {/* ===============================================
                    FORM TITLE
                    =============================================== */}

                <div className="mb-8">

                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-terracotta-600">
                    Order Details
                  </span>

                  <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-espresso-900">
                    Tell Us What You Need
                  </h2>

                  <p className="mt-2 text-sm text-charcoal/60">
                    Fill in the details and we'll continue the
                    conversation with you on WhatsApp.
                  </p>

                </div>



                {/* ===============================================
                    NAME
                    =============================================== */}

                <div className="space-y-2">

                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-espresso-800"
                  >
                    Your Full Name *
                  </label>


                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Amar"
                    className="w-full bg-cream-50 border border-clay-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-terracotta-600 focus:ring-2 focus:ring-terracotta-600/10 transition-all placeholder:text-charcoal/30 text-charcoal"
                  />

                </div>



                {/* ===============================================
                    WHATSAPP NUMBER
                    =============================================== */}

                <div className="space-y-2">

                  <label
                    htmlFor="whatsappNumber"
                    className="block text-xs font-semibold uppercase tracking-wider text-espresso-800"
                  >
                    WhatsApp Number *
                  </label>


                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    required
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="e.g., 08999533278"
                    className="w-full bg-cream-50 border border-clay-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-terracotta-600 focus:ring-2 focus:ring-terracotta-600/10 transition-all placeholder:text-charcoal/30 text-charcoal"
                  />

                </div>



                {/* ===============================================
                    PRODUCT CATEGORY
                    =============================================== */}

                <div className="space-y-2">

                  <label
                    htmlFor="category"
                    className="block text-xs font-semibold uppercase tracking-wider text-espresso-800"
                  >
                    What would you like?
                  </label>


                  <div className="relative">

                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-cream-50 border border-clay-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-terracotta-600 focus:ring-2 focus:ring-terracotta-600/10 appearance-none transition-all text-charcoal"
                    >

                      <option>
                        Birthday Decorations
                      </option>

                      <option>
                        Customizable Gift Hamper
                      </option>

                      <option>
                        Miniature Diorama
                      </option>

                      <option>
                        Personalized Gift
                      </option>

                      <option>
                        Wooden Photo Creation
                      </option>

                      <option>
                        Diecast Display
                      </option>

                      <option>
                        Custom Creation
                      </option>

                      <option>
                        Other Unique Artwork
                      </option>

                    </select>

                  </div>

                </div>



                {/* ===============================================
                    BUDGET + DATE
                    =============================================== */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


                  {/* Budget */}

                  <div className="space-y-2">

                    <label
                      htmlFor="budget"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso-800 flex items-center gap-1"
                    >

                      <IndianRupee size={12} />

                      Approximate Budget (₹)

                    </label>


                    <input
                      type="number"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g., 5000"
                      className="w-full bg-cream-50 border border-clay-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-terracotta-600 focus:ring-2 focus:ring-terracotta-600/10 transition-all placeholder:text-charcoal/30 text-charcoal"
                    />

                  </div>



                  {/* Date */}

                  <div className="space-y-2">

                    <label
                      htmlFor="requiredDate"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso-800 flex items-center gap-1"
                    >

                      <Calendar size={12} />

                      Required Completion Date

                    </label>


                    <input
                      type="date"
                      id="requiredDate"
                      name="requiredDate"
                      value={formData.requiredDate}
                      onChange={handleChange}
                      className="w-full bg-cream-50 border border-clay-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-terracotta-600 focus:ring-2 focus:ring-terracotta-600/10 transition-all text-charcoal"
                    />

                  </div>

                </div>



                {/* ===============================================
                    IDEA
                    =============================================== */}

                <div className="space-y-2">

                  <label
                    htmlFor="idea"
                    className="block text-xs font-semibold uppercase tracking-wider text-espresso-800 flex items-center gap-1"
                  >

                    <PenTool size={12} />

                    Tell us about your idea *

                  </label>


                  <textarea
                    id="idea"
                    name="idea"
                    required
                    rows="5"
                    value={formData.idea}
                    onChange={handleChange}
                    placeholder="Describe what you want, colours, size, occasion, people, vehicles, decorations, etc."
                    className="w-full bg-cream-50 border border-clay-200/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-terracotta-600 focus:ring-2 focus:ring-terracotta-600/10 transition-all placeholder:text-charcoal/30 text-charcoal resize-none leading-relaxed"
                  />

                </div>



                {/* ===============================================
                    REFERENCE IMAGE
                    =============================================== */}

                <div className="space-y-2">

                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-800">
                    Reference Image / Sketch
                  </label>


                  <div className="flex items-center justify-center w-full">

                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-clay-200 border-dashed rounded-xl cursor-pointer bg-cream-50 hover:bg-cream-200/60 transition-colors">

                      <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">

                        <p className="mb-2 text-xs text-charcoal/60">

                          <span className="font-semibold text-terracotta-600">
                            Click to attach photo locally
                          </span>

                          {' '}or sketch

                        </p>


                        <p className="text-[10px] text-charcoal/40 uppercase tracking-widest mt-1">

                          {fileName
                            ? `Selected: ${fileName}`
                            : 'PNG, JPG, or JPEG'
                          }

                        </p>

                      </div>


                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />

                    </label>

                  </div>

                </div>



                {/* ===============================================
                    SUBMIT
                    =============================================== */}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-terracotta-600 text-white hover:bg-terracotta-700 py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-terracotta-700/10 hover:-translate-y-0.5"
                >

                  <MessageCircle
                    size={17}
                    className="fill-current"
                  />

                  Send Order Request on WhatsApp

                </button>

              </form>

            )}

          </div>



          {/* ===================================================
              RIGHT SIDEBAR
              =================================================== */}

          <div className="space-y-6">


            {/* ===============================================
                CONSULTATION TIPS
                =============================================== */}

            <div className="bg-espresso-900 text-white p-6 rounded-3xl space-y-4 shadow-lg">

              <div className="flex items-center gap-2">

                <Sparkles
                  size={17}
                  className="text-terracotta-400"
                />

                <h3 className="font-serif text-lg font-bold text-terracotta-400">
                  Consultation Tips
                </h3>

              </div>


              <ul className="text-xs space-y-3 leading-relaxed text-white/70 list-disc pl-4">

                <li>
                  Provide clean dimensions if you have a specific
                  shelf or display requirement.
                </li>

                <li>
                  High-resolution reference pictures help us
                  create the design more accurately.
                </li>

                <li>
                  Custom miniatures may require additional time
                  depending on the complexity of the design.
                </li>

                <li>
                  Mention your required date so we can check
                  availability.
                </li>

              </ul>

            </div>



            {/* ===============================================
                WHAT HAPPENS NEXT
                =============================================== */}

            <div className="bg-blush-100 border border-clay-200 p-6 rounded-3xl space-y-3">

              <div className="flex items-center gap-2 text-espresso-900 font-semibold font-serif text-sm">

                <HelpCircle
                  size={17}
                  className="text-terracotta-600"
                />

                <span>
                  What happens next?
                </span>

              </div>


              <p className="text-xs text-charcoal/70 leading-relaxed">

                After submitting the form, your details will
                open directly in WhatsApp. Saakis Craft Gallery
                can then discuss the design, availability and
                final pricing with you.

              </p>

            </div>



            {/* ===============================================
                WHATSAPP QUICK CONTACT
                =============================================== */}

            <a
              href="https://wa.me/918999533278"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#25D366] text-white text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-all shadow-md"
            >

              <MessageCircle size={18} />

              Chat on WhatsApp

            </a>

          </div>

        </div>

      </div>

    </div>
  );
}