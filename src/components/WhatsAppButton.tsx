
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "6281234567890";

  const message = encodeURIComponent(
    "Halo Anjanieed Cake, saya ingin bertanya mengenai koleksi kue."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi Anjanieed Cake melalui WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-[#20BA5A] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16 animate-float"
    >
      <FaWhatsapp className="text-3xl sm:text-4xl" />
    </a>
  );
}
