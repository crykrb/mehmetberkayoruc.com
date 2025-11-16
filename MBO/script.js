const translations = {
  tr: {
    logo: '<span class="logo-main">Mehmet Berkay</span><span class="logo-accent">Oruç</span>',
    "nav.about": "Hakkımda",
    "nav.skills": "Yetenekler",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",

    "hero.kicker": "Sistem ve Ağ Uzmanı",
    "hero.title": "Merhaba, ben",
    "hero.subtitle":
      "Fabrika ve ofis altyapılarını güvenli, dokümante ve stabil hale getiren bir sistem ve ağ uzmanıyım. FortiGate, VMware, Windows Server, AD ve QNAP üzerinde çalışıyorum.",
    "hero.highlight1": "Çok lokasyonlu domain altyapıları",
    "hero.highlight2": "Güvenlik odaklı ağ tasarımı",
    "hero.highlight3": "Yedekleme ve felaket kurtarma",
    "hero.btn.projects": "Projelerimi Gör",
    "hero.btn.contact": "İletişime Geç",
    "hero.btn.cv": "PDF CV",
    "hero.photo.role": "System & Network Specialist",
    "hero.card1.title": "Altyapı",
    "hero.card1.text":
      "Windows Server, Active Directory, DNS, DHCP, dosya sunucuları ve domain yapılarının uçtan uca tasarımı ve yönetimi.",
    "hero.card2.title": "Güvenlik",
    "hero.card2.text":
      "FortiGate firewall, VPN, VLAN segmentasyonu, erişim politikaları ve log analizi ile güvenlik odaklı ağ tasarımı.",
    "hero.card3.title": "Süreç",
    "hero.card3.text":
      "ERP projelerinde süreç analizi, departmanlar arası koordinasyon ve IT–iş birimi entegrasyonu ile verimli altyapılar.",

    "about.title": "Hakkımda",
    "about.p1":
      "Sistem ve ağ yönetimi alanında çalışan bir IT uzmanıyım. Sunucu yönetimi, ağ altyapıları, güvenlik duvarları, IP kamera sistemleri, domain–hosting yönetimi ve web site tasarlama &amp; geliştirme konularında aktif olarak çalışıyorum.",
    "about.p2":
      "Fabrika ve ofis ortamlarında karmaşık altyapıları devralıp, bunları daha güvenli, dokümante ve sürdürülebilir yapılara dönüştürmeyi hedefliyorum. Windows Server, Active Directory, DNS, DHCP, FortiGate, VMware ve QNAP NAS altyapılarıyla çalışıyorum.",
    "about.p3":
      "Teknolojiyi sürekli takip eden, detaylara önem veren ve sistemleri sade, anlaşılır ve yönetilebilir hale getirmeye odaklanan bir yapım var. Sorun çözmeyi, kök sebebe inip kalıcı çözümler üretmeyi seviyorum.",
    "about.p4":
      "İş dışında doğada vakit geçirmeyi seviyorum. Kanyoning, trekking ve farklı parkurlarda yürüyüş yapmak hem bana enerji hem de mental olarak denge sağlıyor.",
    "about.p5":
      "Kısaca; teknolojiye tutkuyla bağlı, çözüm odaklı ve sürekli gelişimi hedefleyen biriyim.",

    "skills.title": "Yetenekler",
    "skills.group1.title": "Altyapı ve Sunucu",
    "skills.group1.item1": "Windows Server 2012–2022, Active Directory, DNS, DHCP",
    "skills.group1.item2": "GPO yönetimi, oturum ve güvenlik politikaları",
    "skills.group1.item3": "Dosya sunucuları, erişim yetkileri ve paylaşım yapıları",
    "skills.group2.title": "Ağ ve Güvenlik",
    "skills.group2.item1": "Ağ topolojisi tasarımı, VLAN, trunk ve temel routing",
    "skills.group2.item2": "Fortinet FortiGate: policy, NAT, VPN, güvenlik profilleri",
    "skills.group2.item3": "Çok lokasyonlu domain ve site-to-site VPN kurguları",
    "skills.group3.title": "Sanallaştırma ve Depolama",
    "skills.group3.item1": "VMware ESXi, sanal sunucu planlama ve kaynak yönetimi",
    "skills.group3.item2": "QNAP NAS, RAID yapılandırma, snapshot ve replikasyon",
    "skills.group3.item3": "Yedekleme ve felaket kurtarma senaryoları",
    "skills.group4.title": "Uygulama ve Süreç",
    "skills.group4.item1": "ERP süreç analizi, IT–iş birimi iletişimi ve proje takibi",
    "skills.group4.item2": "Temel SQL, log analizi ve erişim kontrol planlaması",
    "skills.group4.item3": "Web sitesi altyapısı, domain–hosting yönetimi, SSL",

    "projects.title": "Projeler",
    "projects.p1.title": "Kurumsal Altyapı Yenileme",
    "projects.p1.text":
      "Mevcut sunucu, ağ ve güvenlik altyapısının modernleştirilmesi sürecini yönettim. Windows Server geçişleri, Active Directory yeniden yapılandırması, GPO düzenlemeleri ve yeni yedekleme stratejisinin devreye alınmasıyla kesinti süreleri ve manuel müdahaleler önemli ölçüde azaldı.",
    "projects.p1.tags": "Windows Server · AD · GPO · Yedekleme",
    "projects.p2.title": "FortiGate Güvenlik Duvarı Tasarımı",
    "projects.p2.text":
      "Fortinet üzerinde güvenlik politikaları, NAT ve VPN kurgularını tasarlayıp uyguladım. VLAN segmentasyonu, kullanıcı grupları ve log takibi ile hem güvenlik hem de ağ trafiği kontrolü iyileştirildi.",
    "projects.p2.tags": "FortiGate · VLAN · VPN · Log Analizi",
    "projects.p3.title": "VMware ve QNAP Üzerinde Sanallaştırma",
    "projects.p3.text":
      "Fiziksel sunucuların VMware ESXi altyapısına taşınmasını ve QNAP NAS üzerinde RAID, snapshot ve replikasyon planlamalarını gerçekleştirdim. Böylece yedekleme sürekliliği ve geri dönüş senaryoları güçlendirildi.",
    "projects.p3.tags": "VMware ESXi · QNAP · RAID · Snapshot",
    "projects.p4.title": "ERP Süreç Yeniden Yapılandırma",
    "projects.p4.text":
      "ERP geçiş sürecinde departman ihtiyaçlarını toplayarak süreç akışlarını yeniden tasarladım. IT altyapısı ile ERP uyumunu sağlayarak veri giriş hatalarını ve manuel iş yükünü azalttım.",
    "projects.p4.tags": "ERP · Süreç Analizi · IT–İş Entegrasyonu",

    "contact.title": "İletişim",
    "contact.intro":
      "Her türlü soru, proje talebi veya teknik destek için benimle iletişime geçebilirsiniz. Mail ve LinkedIn üzerinden ulaşmanız en hızlı yanıt almamı sağlar.",
    "contact.email.label": "E-posta",
    "contact.linkedin.label": "LinkedIn",
    "contact.github.label": "GitHub",
    "contact.location.label": "Konum",
    "contact.location.value": "Tekirdağ / İstanbul",
    "contact.phone.label": "Telefon",
    "contact.phone.value": "Talep üzerine paylaşılır",
    "contact.form.name.label": "Adınız",
    "contact.form.name.placeholder": "Adınız",
    "contact.form.email.label": "E-posta adresiniz",
    "contact.form.email.placeholder": "ornek@adres.com",
    "contact.form.message.label": "Mesajınız",
    "contact.form.message.placeholder": "Kısaca yazabilirsiniz",
    "contact.form.submit": "Gönder",
    "contact.form.note":
      "Not: İletişim formu ön izleme amaçlıdır. En hızlı dönüş için lütfen e-posta veya LinkedIn üzerinden ulaşın.",

    "footer.text": "Tüm hakları saklıdır."
  },

  en: {
    logo: '<span class="logo-main">Mehmet Berkay</span><span class="logo-accent">Oruç</span>',
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.kicker": "System & Network Specialist",
    "hero.title": "Hi, I'm",
    "hero.subtitle":
      "I design and maintain secure, documented and stable IT infrastructures for offices and factories. I work with FortiGate, VMware, Windows Server, Active Directory and QNAP.",
    "hero.highlight1": "Multi-site domain infrastructures",
    "hero.highlight2": "Security-focused network design",
    "hero.highlight3": "Backup and disaster recovery",
    "hero.btn.projects": "View Projects",
    "hero.btn.contact": "Contact Me",
    "hero.btn.cv": "PDF CV",
    "hero.photo.role": "System & Network Specialist",
    "hero.card1.title": "Infrastructure",
    "hero.card1.text":
      "End-to-end design and management of Windows Server, Active Directory, DNS, DHCP, file servers and domain structures.",
    "hero.card2.title": "Security",
    "hero.card2.text":
      "FortiGate firewall, VPN, VLAN segmentation, access policies and log analysis for security-focused network design.",
    "hero.card3.title": "Process",
    "hero.card3.text":
      "Process analysis in ERP projects, coordination between departments and IT–business alignment for efficient infrastructures.",

    "about.title": "About",
    "about.p1":
      "I am a system and network specialist. I actively work on server management, network infrastructures, firewalls, IP camera systems, domain–hosting management and basic web site development.",
    "about.p2":
      "I take over complex infrastructures in factory and office environments and turn them into more secure, documented and sustainable systems. I work with Windows Server, Active Directory, DNS, DHCP, FortiGate, VMware and QNAP NAS.",
    "about.p3":
      "I care about details and focus on making systems simple, understandable and manageable. I enjoy troubleshooting, getting to the root cause and producing long-term solutions.",
    "about.p4":
      "Outside of work, I like spending time in nature. Canyoning, trekking and hiking different trails help me recharge and keep my balance.",
    "about.p5":
      "In short, I am passionate about technology, solution-oriented and always aiming to improve.",

    "skills.title": "Skılls",
    "skills.group1.title": "Infrastructure and Servers",
    "skills.group1.item1": "Windows Server 2012–2022, Active Directory, DNS, DHCP",
    "skills.group1.item2": "GPO management, session and security policies",
    "skills.group1.item3": "File servers, access permissions and share structures",
    "skills.group2.title": "Network and Security",
    "skills.group2.item1": "Network topology design, VLAN, trunking and basic routing",
    "skills.group2.item2": "Fortinet FortiGate: policy, NAT, VPN, security profiles",
    "skills.group2.item3": "Multi-site domain and site-to-site VPN setups",
    "skills.group3.title": "Virtualization and Storage",
    "skills.group3.item1": "VMware ESXi, virtual server planning and resource management",
    "skills.group3.item2": "QNAP NAS, RAID configuration, snapshots and replication",
    "skills.group3.item3": "Backup and disaster recovery scenarios",
    "skills.group4.title": "Applications and Processes",
    "skills.group4.item1": "ERP process analysis, IT–business communication and project follow-up",
    "skills.group4.item2": "Basic SQL, log analysis and access control planning",
    "skills.group4.item3": "Web site infrastructure, domain–hosting management, SSL",

    "projects.title": "Projects",
    "projects.p1.title": "Corporate Infrastructure Renewal",
    "projects.p1.text":
      "Led the modernization of existing server, network and security infrastructure. Completed Windows Server migrations, Active Directory redesign, GPO clean-up and new backup strategies, reducing downtime and manual interventions.",
    "projects.p1.tags": "Windows Server · AD · GPO · Backup",
    "projects.p2.title": "FortiGate Firewall Design",
    "projects.p2.text":
      "Designed and implemented security policies, NAT and VPN setups on Fortinet. Improved both security and traffic visibility through VLAN segmentation, user groups and log monitoring.",
    "projects.p2.tags": "FortiGate · VLAN · VPN · Log Analysis",
    "projects.p3.title": "Virtualization on VMware and QNAP",
    "projects.p3.text":
      "Migrated physical servers to VMware ESXi and planned RAID, snapshot and replication on QNAP NAS. Strengthened backup continuity and restore scenarios.",
    "projects.p3.tags": "VMware ESXi · QNAP · RAID · Snapshot",
    "projects.p4.title": "ERP Process Redesign",
    "projects.p4.text":
      "Collected department requirements and redesigned process flows during an ERP transition. Improved alignment between IT infrastructure and ERP, and reduced data entry errors and manual workload.",
    "projects.p4.tags": "ERP · Process Analysis · IT–Business Alignment",

    "contact.title": "Contact",
    "contact.intro":
      "You can contact me for any questions, project requests or technical support. E-mail and LinkedIn are the fastest channels to reach me.",
    "contact.email.label": "E-mail",
    "contact.linkedin.label": "LinkedIn",
    "contact.github.label": "GitHub",
    "contact.location.label": "Location",
    "contact.location.value": "Tekirdağ / Istanbul",
    "contact.phone.label": "Phone",
    "contact.phone.value": "Available upon request",
    "contact.form.name.label": "Your name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email.label": "Your e-mail",
    "contact.form.email.placeholder": "example@mail.com",
    "contact.form.message.label": "Your message",
    "contact.form.message.placeholder": "Write briefly if you like",
    "contact.form.submit": "Send",
    "contact.form.note":
      "Note: The contact form is for preview purposes. For the fastest response, please reach out via e-mail or LinkedIn.",

    "footer.text": "All rights reserved."
  }
};

function setLanguage(lang) {
  document.body.classList.remove("show");

  setTimeout(() => {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = dict[key];
      if (!text) return;

      if (key === "logo") {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const text = dict[key];
      if (!text) return;
      el.setAttribute("placeholder", text);
    });

    const cvBtn = document.getElementById("cv-link");
if (cvBtn) {
  if (lang === "en") {
    cvBtn.href = "EN_Mehmet_Berkay_Oruc_CV.pdf";
  } else {
    cvBtn.href = "TR_Mehmet_Berkay_Oruc_CV.pdf";
  }
}

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try {
      localStorage.setItem("site_lang", lang);
    } catch (e) {}

    document.body.classList.add("show");
  }, 150);
}

document.addEventListener("DOMContentLoaded", () => {
  let savedLang = null;
  try {
    savedLang = localStorage.getItem("site_lang");
  } catch (e) {
    savedLang = null;
  }

  const initialLang = savedLang === "en" || savedLang === "tr" ? savedLang : "tr";
  setLanguage(initialLang);

  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        document.body.classList.remove("nav-open");
      }
    });
  }

  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});