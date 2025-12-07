import { Facebook, Send, Instagram, Phone, MapPin, Mail } from 'lucide-react';
import squareLogo from '@/assets/lendenlogo.png';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/lendenprobashi', label: 'Facebook' },
  { icon: Send, href: 'https://t.me/lendenprobashi', label: 'Telegram' },
  { icon: Instagram, href: 'https://instagram.com/lendenprobashi', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <img src={squareLogo} alt="Lenden Probashi" className="h-14 mb-4" />
            <p className="text-background/70 text-sm leading-relaxed">
              মালয়েশিয়া থেকে বাংলাদেশে সবচেয়ে নির্ভরযোগ্য মানি ট্রান্সফার সেবা। 
              দ্রুত, নিরাপদ ও বিশ্বস্ত।
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ করুন</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+60 14-616 3233</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@lendenprobashi.com</span>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Kuala Lumpur, Malaysia</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">সোশ্যাল মিডিয়া</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-background/50 text-sm mt-4">
              আমাদের সাথে যুক্ত থাকুন আপডেট পেতে
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-background/50 text-sm">
            © ২০২৫ লেনদেন প্রবাসী। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}
