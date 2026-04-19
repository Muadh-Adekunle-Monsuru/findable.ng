import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">Ready to get found faster?</h2>
<p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join local businesses in Nigeria already growing with a verified Google presence.
          </p> 
        <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full text-lg hover:bg-black transition-all mb-16 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          Start Your Setup
        </button>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-gray-500 text-sm gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-300" />
            <span className="font-bold text-gray-900 uppercase">Findable<span className="text-primary">.ng</span></span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6">
            {/* <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a> */}
            <a href="https://docs.google.com/document/d/1hw18OcaJJkvKAefchgWidf3MoEbKJFoW/edit?usp=sharing&ouid=112984881172082911407&rtpof=true&sd=true" target="_blank" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="mailto:hello@findable.ng" className="hover:text-gray-900 transition-colors font-medium text-primary">hello@findable.ng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
