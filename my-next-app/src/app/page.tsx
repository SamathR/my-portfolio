"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"architecture" | "specs">("architecture");

  return (
    <div className="min-h-screen bg-[#090d16] text-gray-100 relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* Background Ambience Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Engineering Background Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* Floating Navbar */}
      <header className="sticky top-4 z-50 max-w-4xl mx-auto px-4">
        <nav className="backdrop-blur-xl bg-[#111827]/80 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50">
          <Link href="#" className="font-mono font-bold text-base tracking-wider text-white hover:text-cyan-400 transition">
            SAMATH<span className="text-cyan-400">.DEV</span>
          </Link>
          <div className="flex items-center gap-6 font-mono text-xs text-gray-400">
            <a href="#about" className="hover:text-cyan-400 transition hidden sm:inline-block">/about</a>
            <a href="#stack" className="hover:text-cyan-400 transition hidden sm:inline-block">/stack</a>
            <a href="#systems" className="hover:text-cyan-400 transition">/systems</a>
            <a 
              href="#contact" 
              className="bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400 hover:text-black px-3.5 py-1.5 rounded-lg font-medium transition duration-200"
            >
              Get In Touch
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-12 pb-24 space-y-24">
        
        {/* Hero Section */}
        <section id="about" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Bio Details */}
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for Engineering Roles</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Samath Lakshan</span>
                </h1>
                <p className="font-mono text-cyan-400 text-sm font-medium">
                  Backend Engineer & IT Undergraduate @ SLIIT
                </p>
              </div>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Specializing in robust system architecture, database optimization, and high-performance server APIs with Java, Python, and SQL.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href="#systems" 
                  className="bg-white text-black font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-200"
                >
                  Explore Systems &rarr;
                </a>
                <a 
                  href="#contact" 
                  className="bg-[#1f2937]/80 text-gray-300 border border-white/10 hover:border-white/30 font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition duration-200"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right Portrait Image Card */}
            <div className="md:col-span-5">
              <div className="relative group mx-auto max-w-[280px] md:max-w-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#111827]">
                  <Image 
                    src="/profile.jpg" 
                    alt="Samath Lakshan" 
                    fill 
                    className="object-cover object-top filter contrast-105 group-hover:scale-105 transition duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-mono text-cyan-400">Location</p>
                    <p className="text-sm font-bold text-white">Western Province, LK</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Live Terminal & System Stats */}
        <section className="bg-[#0e1526]/90 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-md font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-gray-500 text-[11px]">samath@slit-node-1:~</span>
          </div>
          <div className="space-y-2 text-gray-300">
            <p><span className="text-cyan-400">➜</span> <span className="text-emerald-400">sysinfo</span> --target=skills</p>
            <p className="text-gray-400 pl-4">▸ Java / Spring Boot • Python • PostgreSQL • MySQL • REST APIs • Docker</p>
            <p><span className="text-cyan-400">➜</span> <span className="text-emerald-400">status</span></p>
            <p className="text-emerald-400 pl-4">✔ All backend microservices operational (Uptime: 99.9%)</p>
          </div>
        </section>

        {/* Stack Bento Grid */}
        <section id="stack" className="space-y-6">
          <div className="space-y-1">
            <p className="font-mono text-cyan-400 text-xs">// 01. CAPABILITIES</p>
            <h2 className="text-2xl font-bold text-white tracking-tight">Core Backend Stack</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            <div className="bg-[#111827]/60 border border-white/10 hover:border-cyan-500/40 p-5 rounded-2xl transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-mono text-lg mb-3">
                ☕
              </div>
              <h3 className="font-bold text-white text-base">Java Architecture</h3>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                Enterprise OOP, Spring Boot APIs, JPA/Hibernate, modular service layers.
              </p>
            </div>

            <div className="bg-[#111827]/60 border border-white/10 hover:border-cyan-500/40 p-5 rounded-2xl transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-mono text-lg mb-3">
                🗄️
              </div>
              <h3 className="font-bold text-white text-base">Databases & SQL</h3>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                PostgreSQL, MySQL, indexing strategies, ACID transactions, complex schema design.
              </p>
            </div>

            <div className="bg-[#111827]/60 border border-white/10 hover:border-cyan-500/40 p-5 rounded-2xl transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-mono text-lg mb-3">
                🐍
              </div>
              <h3 className="font-bold text-white text-base">Python Scripting</h3>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                Data pipelines, automation workflows, backend logic, and system utilities.
              </p>
            </div>

          </div>
        </section>

        {/* Featured Projects */}
        <section id="systems" className="space-y-6">
          <div className="space-y-1">
            <p className="font-mono text-cyan-400 text-xs">// 02. CASE STUDIES</p>
            <h2 className="text-2xl font-bold text-white tracking-tight">Engineered Projects</h2>
          </div>

          <div className="space-y-6">

            {/* Project 1 */}
            <div className="bg-[#111827]/60 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 transition duration-300 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                  SUPPLY CHAIN BACKEND
                </span>
                <span className="text-xs font-mono text-gray-400">SLIIT Capstone</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Vehicle Spare Parts Management System
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Engineered a comprehensive inventory tracking system resolving stock anomalies, handling high-concurrency order dispatches, and normalizing complex supplier relational models.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Java", "Relational SQL", "OOP Architecture", "MVC Pattern", "REST"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono bg-white/5 border border-white/10 text-gray-300 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#111827]/60 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 transition duration-300 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                  INDUSTRIAL ERP PLATFORM
                </span>
                <span className="text-xs font-mono text-gray-400">Production Engine</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ferndale Tea Factory Management System
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Developed an end-to-end industrial management system automating raw leaf intake logging, multi-tiered worker payroll calculations, and batch tea dispatch reports.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Python / Java", "MySQL", "CRUD Engine", "Automated Payroll Logic"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono bg-white/5 border border-white/10 text-gray-300 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Contact CTA Card */}
        <section id="contact">
          <div className="relative rounded-3xl p-8 sm:p-12 border border-white/10 bg-gradient-to-b from-[#111827] to-[#0d1322] text-center space-y-6 overflow-hidden">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Ready to build scalable backends?
              </h2>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                Currently open for backend development roles, internships, and collaborative software projects.
              </p>
            </div>

            <div>
              <a 
                href="mailto:your-email@example.com" 
                className="inline-block bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-105 transition duration-200"
              >
                Send an Email
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 text-gray-500 text-xs font-mono">
              &copy; 2026 Samath Lakshan. Architected with Next.js & Tailwind CSS.
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}