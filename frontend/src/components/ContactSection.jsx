import React from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-background/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Contact <span className="text-primary">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          
          {/* Telegram */}
          <a 
            href="https://t.me/abu_kag" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:border-primary transition hover:bg-primary/10"
          >
            <Send className="w-5 h-5" />
            <span>Telegram</span>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/KalebAs21" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:border-primary transition hover:bg-primary/10"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/kaleb-asmamaw-010801391/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:border-primary transition hover:bg-primary/10"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          {/* Gmail (mailto link) */}
          <a
            href="mailto:kalebasmamaw21@gmail.com?subject=Contact%20from%20Portfolio"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:border-primary transition hover:bg-primary/10"
            aria-label="Send email to kalebasmamaw21"
          >
            <Mail className="w-5 h-5" />
            <span>Gmail</span>
          </a>






        </div>
      </div>
    </section>
  );
};

export default ContactSection;
