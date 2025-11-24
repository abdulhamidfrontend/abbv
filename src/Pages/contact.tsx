import Navbar from "@/components/navbar";
import { SiTelegram } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

// ❗ Bu token frontendda ochiq bo'ladi — faqat o'quv/proyekt uchun!
// Token va chat_id ni o'zingga mos yoz.
const BOT_TOKEN = "8292283966:AAEnai7OzTOY56aw77ng36in1agS-6qe5e8";
const CHAT_ID = 1982638634; // BU YERGA O'ZINGNING CHAT_ID'ing

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const phoneRegex = /^\+998\s?(69|71|88|90|91|93|94|95|97|99)\d{7}$/;
  const usernameRegex = /^@[A-Za-z0-9_]{5,}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // === VALIDATSIYA ===
    if (!phoneRegex.test(phone)) {
      setError("Telefon raqami noto‘g‘ri! Masalan: +998 90XXXXXXX");
      return;
    }

    if (!usernameRegex.test(username)) {
      setError("Username noto‘g‘ri! @ bilan boshlanishi kerak.");
      return;
    }

    if (message.trim().length < 3) {
      setError("Xabaringiz juda qisqa.");
      return;
    }

    setError("");
    setLoading(true);

    // === TELEGRAMGA YUBORILADIGAN MATN ===
    const text = `
Yangi kontakt so'rovi:
📞 Telefon: ${phone}
👤 Username: ${username}
📝 Xabar: ${message}
    `;

    // CORS cheklovini aylanib o'tish uchun proksi (backend o'rniga)
    const proxyUrl = "https://api.allorigins.win/raw?url=";
    const tgUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
      text
    )}`;

    try {
      await fetch(proxyUrl + encodeURIComponent(tgUrl));

      alert("Xabar yuborildi! ✅");
      setPhone("");
      setUsername("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("Telegramga yuborishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Navbar />

      <div className="max-w-lg my-20 max-[600px]:w-[90%] mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-white p-6 rounded-2xl shadow-xl border border-zinc-700"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <input
            type="text"
            placeholder="Nomeringiz: +998 90XXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded-lg max-[600px]:text-xs bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="TG @yourusername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-lg max-[600px]:text-xs bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows={4}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-lg max-[600px]:text-xs bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 rounded-lg font-semibold transition"
          >
            {loading ? "Yuborilmoqda..." : "Send Message"}
          </button>
        </form>

        <div className="flex items-center py-3 gap-2 justify-center">
          <a target="_blank" href="https://t.me/abbv_uz">
            <SiTelegram size={30} />
          </a>
          <a target="_blank" href="https://instagram.com/abbv.uz">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
