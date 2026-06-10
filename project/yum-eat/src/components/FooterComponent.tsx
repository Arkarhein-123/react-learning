// FooterComponent.tsx
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";

export default function FooterComponent() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 px-6 w-full">
      {/* Container set to 90% width to ensure it is not too narrow but stays clean */}
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500 tracking-tight">
            EatAndGo
          </span>
          <p className="text-sm">
            Delivering your favorite meals hot and fresh to your doorstep.
            Experience the best dining from the comfort of your home.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-fuchsia-400 cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-fuchsia-400 cursor-pointer transition">
              Delivery Areas
            </li>
            <li className="hover:text-fuchsia-400 cursor-pointer transition">
              Careers
            </li>
            <li className="hover:text-fuchsia-400 cursor-pointer transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase tracking-wider">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Yangon, Myanmar</li>
            <li>support@eatandgo.com</li>
            <li>+95 9 123 456 789</li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase tracking-wider">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <IoLogoFacebook className="text-2xl hover:text-fuchsia-400 cursor-pointer transition" />
            <IoLogoInstagram className="text-2xl hover:text-fuchsia-400 cursor-pointer transition" />
            <IoLogoTwitter className="text-2xl hover:text-fuchsia-400 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        © 2026 EatAndGo. All rights reserved by Arkar.
      </div>
    </footer>
  );
}
