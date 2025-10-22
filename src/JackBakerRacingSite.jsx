import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, CalendarDays, Instagram, Youtube, Mail, MapPin } from "lucide-react";

export default function JackBakerRacingSite() {
  useEffect(() => {
    document.title = "Jack Baker Racing | Junior X30 Driver";
    const link = document.querySelector("link[rel='icon']") || document.createElement("link");
    link.setAttribute("rel", "icon");
    link.setAttribute("href", "/favicon.ico");
    document.head.appendChild(link);
  }, []);

  const latest = {
    youtubeVideoId: "ZbU_DpUpE9I",
    youtubeUrl: "https://www.youtube.com/@JackBakerRacing",
    instagramUrl: "https://www.instagram.com/jack.baker.racing/",
  };

  const photos = [
    "/Kim1.jpg",
    "/Kim2.jpg",
    "/Kim3.jpg",
    "/Interview.jpg",
    "/Shen1.jpeg",
    "/Shen2.JPG",
    "/Shen3.jpg",
  ];
  
  const results = [
    { event: "Kimbolton (Wet Final)", pos: "P2 + Fastest Lap", notes: "Strong pace in clean air" },
    { event: "TB Kart Int'l Final, Paris", pos: "P5 Overall", notes: "Qualified via 2024 Junior Pro title" },
    { event: "Mr Karting 2024", pos: "Junior Pro Champion", notes: "Won Winter/Summer/Autumn series" },
  ];

  const updates = [
    { date: "2025-10-12", title: "Kimbolton Round 9 — Quali Pace & Race Craft", tag: "Race Report", excerpt: "Strong wet pace with fastest laps in clean air. Learning: defend earlier and commit on exit." , link: "#" },
    { date: "2025-10-05", title: "X30 Shenington Lap Practice Video", tag: "Video", excerpt: "New onboard — lines, braking markers, rotational braking drills.", link: latest.youtubeUrl },
    { date: "2025-09-18", title: "X-Kart Scholarship — P2 Overall", tag: "Announcement", excerpt: "Mega day — topped corporate sessions, strong interviews. Proud to come away P2.", link: "#" },
  ];

  const FORMSPREE_ENDPOINT = "";
  const CONTACT_EMAIL = "joshbaker_uk@yahoo.com";

  return (
    <div className="min-h-screen bg-[#0b1424] text-neutral-50">
      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <img src="/images/kimbolton-apex.jpg" alt="Jack Baker racing at Kimbolton"
          className="absolute inset-0 w-full h-full object-cover opacity-25 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1424]/60 to-[#0b1424] -z-10" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">Junior X30 | Kart #45</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">Jack Baker
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-blue-500">Racing</span>
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl">
              Dyslexic & autistic — and laser-focused. 2024 Junior Pro Champion (Mr Karting), TB Kart International Finalist (Paris), and 2024 Overall Champion.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#contact" className="rounded-xl bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-white/90 transition">Sponsor Jack</a>
              <a href="#results" className="rounded-1 ring-1 ring-white/20 px-5 py-3 font-medium hover:bg-white/10 transition inline-flex items-center gap-2">
                <Trophy className="h-4 w-4" /> Latest Results
              </a>
              <a href={latest.youtubeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 ring-1 ring-white/20 rounded-xl hover:bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.2-2.2C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.3.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.2 2.2c1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5a3 3 0 0 0 2.2-2.2A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.8 15.5v-7l6.2 3.5Z"/></svg>
                YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LATEST */}
      <section id="latest" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Latest</h2>
          <p className="mt-2 text-white/80">X30 Shenington Lap Practice</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
              <h3 className="font-semibold mb-3">YouTube</h3>
              <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10">
                <iframe className="w-full h-full"
                  src={`https://www.youtube.com/embed/${latest.youtubeVideoId}`}
                  title="X30 Shenington Lap Practice"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
              </div>
              <a href={latest.youtubeUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm underline">Open channel</a>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
              <h3 className="font-semibold mb-3">Instagram</h3>
              <div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-4 text-white/80">
                <p>Latest paddock and race weekend posts.</p>
                <a href={latest.instagramUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm underline">Open @jack.baker.racing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Gallery</h2>
          <p className="mt-3 text-white/80">Kimbolton & Shenington Recents — Photos © Stu Stretton Photography</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.slice(0,6).map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
                <img src={src} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
