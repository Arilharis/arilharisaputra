/* ==========================================================
   DATA PORTOFOLIO — edit file ini saja untuk mengganti isi web.
   Bagian bertanda [ISI] masih perlu dilengkapi dengan data asli.
   ========================================================== */

const DATA = {
  name: "Aril Hari Saputra",
  shortName: "Aril",
  initials: "AH",
  domain: "rielll.dev",
  location: "Bandar Lampung, Lampung",
  email: "ariacilegon@gmail.com",
  photo: "assets/foto.jpg",  // taruh foto kamu di folder assets/ (jika tidak ada, inisial yang tampil)
  cv: "assets/CV-Aril-Hari-Saputra.pdf", // taruh file CV di folder assets/
  available: true,           // badge "Terbuka untuk proyek"

  // Peran pertama juga tampil di kartu ID.
  roles: ["Full-Stack Developer", "Frontend Developer", "Backend Developer", "Game Developer"],

  tagline:
    "Full-stack developer dari Lampung yang membangun aplikasi web dan game edukasi — dari tampilan sampai server.",

  about: [
    "Halo! Saya Aril Hari Saputra, mahasiswa Teknologi Rekayasa Perangkat Lunak di Politeknik Negeri Lampung yang menekuni pengembangan web full-stack: merancang tampilan yang nyaman dipakai sekaligus membangun logika di sisi server.",
    "Bersama tim TetraVenture, saya ikut mengembangkan TourVenture: Lampung, game edukasi pixel art yang memperkenalkan budaya dan wisata Lampung. Game ini meraih Juara 2 kategori Art & Visualization di KMIPN VIII 2026, dan pada tahun yang sama saya meraih 1st Innovation & Creativity di International Innovation 4Force 2026.",
  ],

  quote: "Satu-satunya orang yang tidak pernah membuat kesalahan adalah orang yang tidak pernah melakukan apapun.",
  quoteAuthor: "Albert Einstein",

  stats: [
    { value: 2, suffix: "", label: "Penghargaan 2026" },
    { value: 5, suffix: "", label: "Negara peserta ajang internasional" },
    { value: 15, suffix: "", label: "Kab/kota dijelajahi di game TourVenture" },
  ],

  socials: [
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/arilharisaputra" },
    { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/rielll_realll" },
    { label: "GitHub", icon: "github", url: "https://github.com/Arilharis" },
  ],

  services: [
    { title: "Aplikasi Web Full-Stack", text: "Membangun website dan aplikasi web lengkap: tampilan, logika server, hingga database." },
    { title: "Game Edukasi Berbasis Web", text: "Game ringan yang bisa dipasang di HP tanpa Play Store, dengan konten edukasi dan budaya lokal." },
    { title: "Website & Landing Page", text: "Halaman profil, company profile, atau landing page yang responsif dan cepat dibuka dari HP." },
  ],

  // image: thumbnail proyek. gallery: foto tambahan di halaman detail.
  // links: kosongkan jika belum ada (tombolnya otomatis disembunyikan).
  projects: [
    {
      title: "TourVenture: Lampung",
      category: "Game Dev",
      year: 2026,
      image: "assets/tourventure.jpg",
      badge: "🥈 Juara 2 KMIPN VIII 2026",
      summary:
        "Game petualangan edukatif berkonsep pixel art yang mengajak pemain menjelajahi 15 kabupaten/kota di Lampung sambil mengenal rumah adat, ikon Siger, dan kekayaan alamnya.",
      background: [
        "Sepanjang 2025, Lampung mencatat 24.702.664 kunjungan wisatawan — tumbuh 53,50% dibanding 2024 dan menyumbang Rp53,11 triliun bagi perekonomian provinsi (sumber: lampungprov.go.id). Secara nasional, Lampung berada di posisi ke-9 destinasi wisata yang diminati menurut Kementerian Pariwisata.",
        "Namun, kunjungan masih timpang (tourism inequality): mayoritas wisatawan terpusat di Bandar Lampung, Lampung Selatan, dan Pesawaran, sementara wilayah seperti Lampung Barat, Pesisir Barat, hingga Way Kanan belum tereksplorasi secara optimal.",
      ],
      problem: "Kunjungan wisata Lampung menumpuk di beberapa daerah saja; potensi wisata di wilayah penyangga belum banyak dikenal.",
      solution: "Game petualangan pixel art yang memperkenalkan budaya dan destinasi di 15 kabupaten/kota secara interaktif dan menyenangkan.",
      result: "Juara 2 kategori Art & Visualization, cabang Pengembangan Aplikasi Permainan, KMIPN VIII 2026 di Politeknik Negeri Ujung Pandang.",
      tech: ["HTML", "CSS", "JavaScript"],
      features: [
        "Petualangan menjelajahi 15 kabupaten/kota di Lampung",
        "Visual pixel art: rumah adat, ikon Siger, dan alam Lampung",
        "Bisa di-install di HP tanpa Play Store, progres tersimpan di perangkat",
        "Gratis dan ringan dimainkan",
      ],
      team: "Tim TetraVenture — Agatha Takkas Samosir, Aril Hari Saputra, Yuki Anisa Putri",
      gallery: [
        { src: "assets/medali-kmipn.webp", caption: "Medali Runner Up KMIPN VIII 2026" },
        { src: "assets/sertifikat-kmipn.webp", caption: "Sertifikat Juara 2 KMIPN VIII 2026" },
      ],
      links: { demo: "https://tetraventureeee.netlify.app/install.html", repo: "" },
      color: "#f2b632",
    },
  ],

  certificates: [
    {
      title: "1st Innovation & Creativity — Kategori Expo",
      issuer: "International Innovation 4Force 2026 · Politeknik Negeri Lampung",
      year: 2026,
      note: "Ajang internasional mahasiswa dari Indonesia, Kamboja, Vietnam, Thailand, dan Malaysia.",
      image: "assets/sertifikat-4force.jpg",
    },
    {
      title: "Juara 2 — Kategori Art & Visualization",
      issuer: "KMIPN VIII 2026 · Politeknik Negeri Ujung Pandang",
      year: 2026,
      note: "Cabang Pengembangan Aplikasi Permainan, bersama tim TetraVenture.",
      image: "assets/sertifikat-kmipn.webp",
    },
  ],

  // icon: nama kelas dari https://devicon.dev — [ISI] sesuaikan dengan yang benar-benar kamu kuasai
  tech: [
    { name: "HTML", icon: "devicon-html5-plain colored", group: "Frontend" },
    { name: "CSS", icon: "devicon-css3-plain colored", group: "Frontend" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", group: "Frontend" },
    { name: "React", icon: "devicon-react-original colored", group: "Frontend" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original colored", group: "Frontend" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored", group: "Backend" },
    { name: "PHP", icon: "devicon-php-plain colored", group: "Backend" },
    { name: "MySQL", icon: "devicon-mysql-original colored", group: "Backend" },
    { name: "Git", icon: "devicon-git-plain colored", group: "Tools" },
    { name: "Figma", icon: "devicon-figma-plain colored", group: "Tools" },
    { name: "Netlify", icon: "devicon-netlify-plain colored", group: "Tools" },
    { name: "VS Code", icon: "devicon-vscode-plain colored", group: "Tools" },
  ],

  experience: [
    { period: "Sep 2026", title: "Juara 2 KMIPN VIII 2026", place: "Politeknik Negeri Ujung Pandang, Makassar", text: "Kategori Art & Visualization, cabang Pengembangan Aplikasi Permainan, lewat game TourVenture: Lampung bersama tim TetraVenture." },
    { period: "2026", title: "1st Innovation & Creativity", place: "International Innovation 4Force 2026", text: "Juara 1 kategori Expo dengan tema “Tech and Creativity in Action: Engineering Smart Solutions for the Future”." },
    { period: "2025", title: "Anggota ASTECH", place: "Association of Software Engineering Technology Student", text: "Aktif sebagai anggota organisasi mahasiswa di bidang teknologi rekayasa perangkat lunak." },
    { period: "2025 — Sekarang", title: "Teknologi Rekayasa Perangkat Lunak", place: "Jurusan Teknologi Informasi · Politeknik Negeri Lampung", text: "Menekuni pengembangan web dan aplikasi, serta aktif mengikuti kompetisi teknologi tingkat nasional dan internasional." },
    // { period: "20XX — 20XX", title: "[ISI jurusan]", place: "[ISI nama SMA/SMK]", text: "" },
  ],
};
