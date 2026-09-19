import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({
  productName,
  customText,
  variant = 'floating',
  label = 'Chat on WhatsApp'
}) {
  const businessNumber = "918999533278";

  // Format message text based on context
  let encodedMessage = "";
  if (productName) {
    encodedMessage = encodeURIComponent(`Hi Saakis Craft Gallery, I saw your "${productName}" on your website and I'm interested in creating something similar. Can you share the details and pricing?`);
  } else if (customText) {
    encodedMessage = encodeURIComponent(customText);
  } else {
    encodedMessage = encodeURIComponent("Hi Saakis Craft Gallery! I would love to discuss an idea for a customized handmade creation with you.");
  }

  const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodedMessage}`;

  if (variant === 'floating') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={26} className="fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-out font-sans text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
          Inquire Now
        </span>
      </a>
    );
  }

  // Inline buttons variants
  const isPrimary = variant === 'primary';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
        isPrimary
          ? 'bg-terracotta-600 text-cream-50 hover:bg-terracotta-700 shadow-md shadow-terracotta-700/10'
          : 'bg-cream-200 text-espresso-900 border border-clay-200 hover:bg-clay-100'
      }`}
    >
      <MessageCircle size={15} className="fill-current" />
      {label}
    </a>
  );
}
