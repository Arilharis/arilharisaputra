/* Portofolio Aril Hari Saputra — semua konten diambil dari data.js */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ICONS = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    send: '<path d="M4 12l16-8-6 16-3-7-7-1z"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',
    check: '<path d="M5 12l5 5L20 7"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
  };
  const icon = (name) =>
    `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ---------- Isi konten statis ---------- */
  function fillContent() {
    const [first, ...rest] = DATA.name.split(" ");
    const lastWord = rest.pop() || "";
    $$("[data-name]").forEach((el) => (el.textContent = DATA.name));
    $$("[data-role]").forEach((el) => (el.textContent = DATA.roles[0]));
    $(".hero-title").innerHTML = `<span class="line">${esc([first, ...rest].join(" "))}</span><span class="line">${esc(lastWord)}.</span>`;
    const [dName, dTld] = DATA.domain.split(".");
    $("[data-domain]").innerHTML = `${esc(dName)}<b>.</b>${esc(dTld)}`;
    $("[data-tagline]").textContent = DATA.tagline;
    $$("[data-location]").forEach((el) => (el.textContent = DATA.location));
    $$("[data-email-text]").forEach((el) => (el.textContent = DATA.email));
    $$("[data-email-link]").forEach((el) => {
      el.href = `mailto:${DATA.email}`;
      el.textContent = DATA.email;
    });
    $$("[data-cv]").forEach((el) => (el.href = DATA.cv));
    $$("[data-icon]").forEach((el) => (el.outerHTML = icon(el.dataset.icon)));
    $("#availBadge").hidden = !DATA.available;
    $("#year").textContent = new Date().getFullYear();

    const socials = DATA.socials
      .map((s) => `<a class="icon-btn" href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}">${icon(s.icon)}</a>`)
      .join("") + `<a class="icon-btn" href="mailto:${esc(DATA.email)}" aria-label="Email">${icon("mail")}</a>`;
    $$("[data-socials]").forEach((el) => (el.innerHTML = socials));

    // Foto: jika file tidak ada, tampilkan inisial
    $$("[data-photo]").forEach((el) => {
      el.textContent = DATA.initials;
      const img = new Image();
      img.alt = `Foto ${DATA.name}`;
      img.onload = () => el.replaceChildren(img);
      img.src = DATA.photo;
    });

    $("[data-about]").innerHTML = DATA.about.map((p) => `<p>${esc(p)}</p>`).join("");
    $("[data-quote]").innerHTML = `“${esc(DATA.quote)}”${DATA.quoteAuthor ? `<cite>— ${esc(DATA.quoteAuthor)}</cite>` : ""}`;
    $("[data-stats]").innerHTML = DATA.stats
      .map((s) => `<div class="stat"><b><span-num data-to="${s.value}">0</span-num><span>${esc(s.suffix)}</span></b><small>${esc(s.label)}</small></div>`)
      .join("");
    $("[data-services]").innerHTML = DATA.services
      .map((s, i) => `<article class="service reveal"><span class="num">0${i + 1}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`)
      .join("");

    const marqueeItems = DATA.tech.map((t) => `<span class="marquee-item"><i class="${esc(t.icon)}"></i>${esc(t.name)}</span>`).join("");
    $("#marquee").innerHTML = marqueeItems + marqueeItems;
  }

  /* ---------- Proyek ---------- */
  const thumb = (p) =>
    p.image
      ? `<div class="project-thumb" style="--c:${p.color}"><img src="${esc(p.image)}" alt="Tampilan ${esc(p.title)}" loading="lazy">${p.badge ? `<span class="thumb-badge">${esc(p.badge)}</span>` : ""}</div>`
      : `<div class="project-thumb" style="--c:${p.color}" aria-hidden="true"><div class="mock"><div class="mock-bar"><i></i><i></i><i></i></div><div class="mock-title">${esc(p.title)}</div><div class="mock-line"></div><div class="mock-line short"></div><div class="mock-btn"></div></div></div>`;

  function renderProjects(filter = "Semua") {
    const list = DATA.projects.map((p, i) => ({ ...p, i })).filter((p) => filter === "Semua" || p.category === filter);
    $("#projects").innerHTML = list
      .map(
        (p) => `<button class="project" style="--c:${p.color}" data-project="${p.i}" aria-label="Lihat detail proyek ${esc(p.title)}">
          ${thumb(p)}
          <div class="project-body">
            <div class="project-meta"><span class="cat">${esc(p.category)}</span><span>${p.year}</span></div>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.summary)}</p>
            <div class="tags">${p.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
            <span class="project-more">Lihat studi kasus ${icon("arrow")}</span>
          </div>
        </button>`
      )
      .join("");
  }

  function renderFilters() {
    const cats = ["Semua", ...new Set(DATA.projects.map((p) => p.category))];
    $("#projects").classList.toggle("single", DATA.projects.length === 1);
    if (cats.length <= 2) return void ($("#filters").hidden = true);
    const count = (c) => (c === "Semua" ? DATA.projects.length : DATA.projects.filter((p) => p.category === c).length);
    $("#filters").innerHTML = cats
      .map((c, i) => `<button class="chip${i === 0 ? " active" : ""}" data-filter="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}<span class="count">${count(c)}</span></button>`)
      .join("");
    $("#filters").addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      $$(".chip").forEach((c) => {
        c.classList.toggle("active", c === b);
        c.setAttribute("aria-pressed", c === b);
      });
      renderProjects(b.dataset.filter);
    });
  }

  function openProject(i) {
    const p = DATA.projects[i];
    const links = [
      p.links?.demo && `<a class="btn btn-primary btn-sm" href="${esc(p.links.demo)}" target="_blank" rel="noopener">Live Demo ${icon("external")}</a>`,
      p.links?.repo && `<a class="btn btn-ghost btn-sm" href="${esc(p.links.repo)}" target="_blank" rel="noopener">Source Code ${icon("github")}</a>`,
    ].filter(Boolean);
    $("#modalBody").innerHTML = `
      <button class="icon-btn modal-close" data-close aria-label="Tutup">${icon("close")}</button>
      ${thumb(p)}
      <div class="modal-content">
        <div class="project-meta" style="--c:${p.color}"><span class="cat">${esc(p.category)}</span><span>${p.year}</span></div>
        <h2 id="modalTitle">${esc(p.title)}</h2>
        <p class="lead">${esc(p.summary)}</p>
        ${p.team ? `<p class="team">👥 ${esc(p.team)}</p>` : ""}
        ${p.background ? `<h4>Latar belakang</h4>${p.background.map((b) => `<p class="bg-text">${esc(b)}</p>`).join("")}` : ""}
        <div class="case">
          <div><b>Masalah</b><p>${esc(p.problem)}</p></div>
          <div><b>Solusi</b><p>${esc(p.solution)}</p></div>
          <div><b>Hasil</b><p>${esc(p.result)}</p></div>
        </div>
        <h4>Fitur utama</h4>
        <ul class="features">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        <h4>Teknologi</h4>
        <div class="tags">${p.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        ${p.gallery?.length ? `<h4 class="gallery-title">Dokumentasi</h4><div class="gallery">${p.gallery
          .map((g) => `<button class="gallery-item" data-image="${esc(g.src)}" data-caption="${esc(g.caption)}"><img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"><span>${esc(g.caption)}</span></button>`)
          .join("")}</div>` : ""}
        ${links.length ? `<div class="modal-links">${links.join("")}</div>` : `<p class="note-muted">Demo & source code tersedia atas permintaan.</p>`}
      </div>`;
    $("#projectModal").showModal();
  }

  function setupModal() {
    const modal = $("#projectModal");
    $("#projects").addEventListener("click", (e) => {
      const card = e.target.closest("[data-project]");
      if (card) openProject(+card.dataset.project);
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest("[data-close]")) modal.close();
      const img = e.target.closest("[data-image]");
      if (img) openImage(img.dataset.image, img.dataset.caption);
    });
    $("#certs").addEventListener("click", (e) => {
      const c = e.target.closest("[data-image]");
      if (c) openImage(c.dataset.image, c.dataset.caption);
    });

    const lightbox = $("#lightbox");
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.closest("[data-close]")) lightbox.close();
    });
  }

  function openImage(src, caption) {
    $("#lightboxBody").innerHTML = `
      <button class="icon-btn modal-close" data-close aria-label="Tutup">${icon("close")}</button>
      <img src="${esc(src)}" alt="${esc(caption)}">
      <p>${esc(caption)}</p>`;
    $("#lightbox").showModal();
  }

  /* ---------- Sertifikat, Tech, Timeline ---------- */
  function renderRest() {
    $("#certs").innerHTML = DATA.certificates
      .map((c) => {
        const info = `<div><h3>${esc(c.title)}</h3><p>${esc(c.issuer)} · ${c.year}</p>${c.note ? `<p class="cert-note">${esc(c.note)}</p>` : ""}</div>`;
        if (c.image)
          return `<button class="cert cert-img" data-image="${esc(c.image)}" data-caption="${esc(c.title)}" aria-label="Lihat sertifikat ${esc(c.title)}">
            <span class="cert-thumb"><img src="${esc(c.image)}" alt="" loading="lazy"></span>${info}</button>`;
        const tag = c.url ? "a" : "div";
        const attrs = c.url ? ` href="${esc(c.url)}" target="_blank" rel="noopener"` : "";
        return `<${tag} class="cert"${attrs}><span class="cert-icon">${icon("award")}</span>${info}</${tag}>`;
      })
      .join("");

    const groups = [...new Set(DATA.tech.map((t) => t.group))];
    $("#tech").innerHTML = groups
      .map(
        (g) => `<div class="tech-group"><h3>${esc(g)}</h3><div class="tech-grid">${DATA.tech
          .filter((t) => t.group === g)
          .map((t) => `<div class="tech"><i class="${esc(t.icon)}" aria-hidden="true"></i>${esc(t.name)}</div>`)
          .join("")}</div></div>`
      )
      .join("");

    $("#timeline").innerHTML = DATA.experience
      .map((x) => `<li class="tl-item reveal"><span class="tl-period">${esc(x.period)}</span><h3>${esc(x.title)}</h3><p class="tl-place">${esc(x.place)}</p><p>${esc(x.text)}</p></li>`)
      .join("");
  }

  /* ---------- Tabs ---------- */
  function setupTabs() {
    const tabs = $$(".tab");
    const indicator = $(".tab-indicator");
    const select = (i, focus) => {
      tabs.forEach((t, j) => {
        const on = i === j;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
        $("#" + t.getAttribute("aria-controls")).hidden = !on;
      });
      indicator.style.transform = `translateX(${i * 100}%)`;
      if (focus) tabs[i].focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(i));
      t.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") select((i + 1) % tabs.length, true);
        if (e.key === "ArrowLeft") select((i - 1 + tabs.length) % tabs.length, true);
      });
    });
  }

  /* ---------- Efek ketik ---------- */
  function setupTyped() {
    const el = $("#typed");
    if (reduceMotion) return void (el.textContent = DATA.roles[0]);
    let r = 0, c = 0, del = false;
    const tick = () => {
      const word = DATA.roles[r];
      c += del ? -1 : 1;
      el.textContent = word.slice(0, c);
      let wait = del ? 45 : 90;
      if (!del && c === word.length) { del = true; wait = 1800; }
      else if (del && c === 0) { del = false; r = (r + 1) % DATA.roles.length; wait = 350; }
      setTimeout(tick, wait);
    };
    tick();
  }

  /* ---------- Kartu ID bergantung (fisika pendulum ringan) ---------- */
  function setupLanyard() {
    const swing = $("#swing");
    const card = $("#idCard");
    let theta = reduceMotion ? 0 : 0.45, omega = 0;
    let dragging = false, moved = false, startX = 0, startY = 0, a0 = 0, t0 = 0;
    let lastTheta = 0, lastTime = 0;
    const K = 16, DAMP = 1.1, MAX = 1.25;

    const pivot = () => {
      const r = swing.getBoundingClientRect();
      return { x: r.left, y: r.top };
    };
    const pointerAngle = (e) => {
      const p = pivot();
      return Math.atan2(-(e.clientX - p.x), e.clientY - p.y);
    };
    const apply = () => {
      swing.style.transform = `rotate(${theta}rad)`;
      card.style.setProperty("--shine", `${theta * -120}%`);
      $$(".id-face", card).forEach((f) => f.style.setProperty("--shine", `${-60 + theta * 140}%`));
    };

    card.addEventListener("pointerdown", (e) => {
      dragging = true; moved = false;
      startX = e.clientX; startY = e.clientY;
      a0 = pointerAngle(e); t0 = theta;
      lastTheta = theta; lastTime = performance.now();
      card.setPointerCapture(e.pointerId);
      card.classList.add("dragging");
    });
    card.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      if (Math.hypot(e.clientX - startX, e.clientY - startY) > 5) moved = true;
      const now = performance.now();
      theta = Math.max(-MAX, Math.min(MAX, t0 + (pointerAngle(e) - a0)));
      const dt = (now - lastTime) / 1000;
      if (dt > 0) omega = (theta - lastTheta) / dt;
      lastTheta = theta; lastTime = now;
      apply();
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      card.classList.remove("dragging");
      if (!moved) card.classList.toggle("flipped");
    };
    card.addEventListener("pointerup", end);
    card.addEventListener("pointercancel", end);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); card.classList.toggle("flipped"); }
      if (e.key === "ArrowLeft") omega += 2;
      if (e.key === "ArrowRight") omega -= 2;
    });

    // Sentakan kecil saat halaman digulir
    let lastY = scrollY;
    addEventListener("scroll", () => {
      const dy = scrollY - lastY;
      lastY = scrollY;
      if (!reduceMotion && scrollY < innerHeight) omega += Math.max(-1.5, Math.min(1.5, dy * 0.01));
    }, { passive: true });

    let prev = performance.now();
    const loop = (now) => {
      const dt = Math.min(0.033, (now - prev) / 1000);
      prev = now;
      if (!dragging) {
        omega += (-K * Math.sin(theta) - DAMP * omega) * dt;
        theta += omega * dt;
      }
      apply();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  /* ---------- Nav, scroll, reveal ---------- */
  function setupNav() {
    const nav = $("#nav"), links = $("#navLinks"), menuBtn = $("#menuBtn"), bar = $(".progress");
    const setMenu = (open) => {
      links.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", open);
      menuBtn.innerHTML = icon(open ? "close" : "menu");
    };
    setMenu(false);
    menuBtn.addEventListener("click", () => setMenu(!links.classList.contains("open")));
    links.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));

    const onScroll = () => {
      nav.classList.toggle("scrolled", scrollY > 20);
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const navAnchors = $$("a", links);
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    $$("main section[id]").forEach((s) => spy.observe(s));
  }

  function setupReveal() {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        io.unobserve(en.target);
      }),
      { threshold: 0.12 }
    );
    $$(".reveal").forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });

    const nums = $$("span-num");
    const cio = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target, to = +el.dataset.to, start = performance.now();
      const step = (now) => {
        const k = Math.min(1, (now - start) / 1400);
        el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      };
      reduceMotion ? (el.textContent = to) : requestAnimationFrame(step);
      cio.unobserve(el);
    }), { threshold: 0.6 });
    nums.forEach((n) => cio.observe(n));
  }

  /* ---------- Tema ---------- */
  function setupTheme() {
    const btn = $("#themeToggle"), root = document.documentElement;
    const paint = () => {
      const light = root.dataset.theme === "light";
      btn.innerHTML = icon(light ? "moon" : "sun");
      $('meta[name="theme-color"]').content = light ? "#f6f5f2" : "#0b0b0e";
    };
    btn.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
      paint();
    });
    paint();
  }

  /* ---------- Kontak ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }

  function setupContact() {
    const copyBtn = $("#copyEmail");
    copyBtn.innerHTML = icon("copy");
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(DATA.email);
      } catch (e) {
        const ta = Object.assign(document.createElement("textarea"), { value: DATA.email });
        document.body.append(ta); ta.select(); document.execCommand("copy"); ta.remove();
      }
      copyBtn.innerHTML = icon("check");
      toast("Email disalin ke clipboard ✓");
      setTimeout(() => (copyBtn.innerHTML = icon("copy")), 2000);
    });

    const form = $("#contactForm");
    const rules = {
      name: (v) => (v.trim().length < 2 ? "Nama minimal 2 karakter." : ""),
      email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Format email belum benar."),
      message: (v) => (v.trim().length < 10 ? "Pesan minimal 10 karakter." : ""),
    };
    const check = (input) => {
      const msg = rules[input.name](input.value);
      const field = input.closest(".field");
      field.classList.toggle("invalid", !!msg);
      $(".err", field).textContent = msg;
      input.setAttribute("aria-invalid", !!msg);
      return !msg;
    };
    $$("input, textarea", form).forEach((i) => i.addEventListener("blur", () => check(i)));
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = $$("input, textarea", form);
      const ok = inputs.map(check).every(Boolean);
      if (!ok) return inputs.find((i) => i.getAttribute("aria-invalid") === "true").focus();
      const { name, email, message } = Object.fromEntries(new FormData(form));
      const subject = encodeURIComponent(`Halo Aril — pesan dari ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      location.href = `mailto:${DATA.email}?subject=${subject}&body=${body}`;
      toast("Membuka aplikasi email…");
      form.reset();
    });
  }

  fillContent();
  renderFilters();
  renderProjects();
  renderRest();
  setupModal();
  setupTabs();
  setupTyped();
  setupLanyard();
  setupNav();
  setupTheme();
  setupContact();
  setupReveal();
})();
