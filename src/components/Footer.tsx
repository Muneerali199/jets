"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  const footerLinks = [
    {
      title: "DISCOVER",
      links: ["Fleet", "Experience", "Destinations", "Membership"],
    },
    {
      title: "COMPANY",
      links: ["About Us", "Careers", "Press", "Sustainability"],
    },
    {
      title: "SUPPORT",
      links: ["Contact", "FAQ", "Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.h3
              className="text-white text-2xl md:text-3xl font-light tracking-luxury mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              JESKO JETS
            </motion.h3>
            <motion.p
              className="text-white/50 text-sm font-light leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Redefining high-altitude luxury. 
              The new standard of private aviation.
            </motion.p>
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {["Instagram", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/40 text-xs tracking-widest hover:text-white transition-colors duration-300"
                >
                  {social.toUpperCase()}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, columnIndex) => (
            <div key={column.title}>
              <motion.h4
                className="text-white/40 text-xs tracking-widest mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: columnIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {column.title}
              </motion.h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: columnIndex * 0.1 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-white/70 text-sm font-light hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-white/30 text-xs tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              © 2026 JESKO JETS. ALL RIGHTS RESERVED.
            </motion.p>
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-white/30 text-xs tracking-wider hover:text-white/60 transition-colors">
                PRIVACY
              </a>
              <a href="#" className="text-white/30 text-xs tracking-wider hover:text-white/60 transition-colors">
                TERMS
              </a>
              <a href="#" className="text-white/30 text-xs tracking-wider hover:text-white/60 transition-colors">
                COOKIES
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </footer>
  );
};
