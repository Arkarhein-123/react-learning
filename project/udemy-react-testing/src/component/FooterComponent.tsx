



import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><button className="hover:text-white transition-colors text-left cursor-pointer">Categories</button></li>
            <li><Link to="/teacher" className="hover:text-white transition-colors">Teach on Udemy</Link></li>
            <li><button className="hover:text-white transition-colors text-left cursor-pointer">Get the App</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li><button className="hover:text-white transition-colors text-left cursor-pointer">About Us</button></li>
            <li><button className="hover:text-white transition-colors text-left cursor-pointer">Careers</button></li>
            <li><button className="hover:text-white transition-colors text-left cursor-pointer">Blog</button></li>
            <li><button className="hover:text-white transition-colors text-left cursor-pointer">Press Kit</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><button className="hover:text-white transition-colors text-left cursor-pointer">Help & Support</button></li>
            <li><button className="hover:text-white transition-colors text-left cursor-pointer">Terms of Service</button></li>
            <li><button className="hover:text-white transition-colors text-left cursor-pointer">Privacy Policy</button></li>
            <li><button className="hover:text-white transition-colors text-left cursor-pointer">Cookie Settings</button></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-bold text-white mb-4">Language Selector</h3>
          <div className="relative">
            <select className="bg-slate-800 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-indigo-500 w-full appearance-none cursor-pointer">
              <option>🌐 English</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
            </select>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold text-indigo-500 hover:text-indigo-400 tracking-tight">
            U<span className="text-white">demyClone</span>
          </Link>
        </div>
        <p>© 2026 UdemyClone, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
