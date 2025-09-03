// src/pages/DetailLayananPage.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeroDetailLayanan from '../components/detail-layanan/HeroDetailLayanan';
import PriceCard from '../components/detail-layanan/PriceCard';
import FeatureList from '../components/detail-layanan/FeatureList';
import CurriculumSection from '../components/detail-layanan/CurriculumSection';
import FAQSection from '../components/detail-layanan/FAQSection';
import TestimonialSection from '../components/detail-layanan/TestimonialSection';

// --- Aset gambar lokal untuk masing-masing layanan ---
// Pastikan path ini sesuai dengan struktur folder Anda
// import mahasiswaTaImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
// import mahasiswaAiImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
// import mahasiswaInternImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';

// import smaAiImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
// import smaIoTImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
// import smaHackingImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
// import smaLfImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
// import smaArmImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
// import smaDroneImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
// import smaSpiderImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';

// import sdCodingImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
// import sdElektronikaImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
// import sdRobotImg from 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';

const mahasiswaTaImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const mahasiswaAiImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const mahasiswaInternImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const smaAiImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const smaIoTImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const smaHackingImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const smaLfImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const smaArmImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const smaDroneImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const smaSpiderImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const sdCodingImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const sdElektronikaImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';
const sdRobotImg = 'https://placehold.co/600x400/8A2BE2/FFFFFF?text=SMP-SMA+1';


// --- "DATABASE" SIMULASI UNTUK LAYANAN ---
const serviceData = {
  // Mahasiswa
  "mahasiswa-ta": {
    tagline: "Untuk Mahasiswa",
    title: "Konsultasi Tugas Akhir / Skripsi",
    imageUrl: mahasiswaTaImg,
    description: "Program bimbingan intensif untuk membantu mahasiswa menyelesaikan tugas akhir atau skripsi mereka dengan sukses. Kami menyediakan panduan mulai dari pemilihan topik, metodologi penelitian, analisis data, hingga penulisan dan presentasi akhir. Dapatkan pendampingan dari para ahli di bidangnya.",
    price: "Mulai Rp 1.500.000",
    features: [
      "Bimbingan personal 1-on-1",
      "Sesi konsultasi reguler",
      "Review draf dan umpan balik konstruktif",
      "Bantuan metodologi penelitian dan analisis",
      "Persiapan presentasi dan sidang",
      "Akses ke sumber daya referensi",
      "Fleksibel sesuai jadwal mahasiswa"
    ],
    curriculumModules: [
      { title: "Pengantar Penelitian & Ideasi", description: "Memilih topik yang relevan dan merumuskan masalah penelitian." },
      { title: "Perancangan Metodologi", description: "Menentukan metode penelitian, pengumpulan, dan analisis data." },
      { title: "Pengembangan & Implementasi", description: "Membantu implementasi teknis jika tugas akhir berbasis proyek." },
      { title: "Penulisan & Validasi", description: "Menyusun laporan, format penulisan, dan persiapan ujian." }
    ],
    faqs: [
      { question: "Siapa saja yang bisa mengikuti program ini?", answer: "Program ini cocok untuk semua mahasiswa tingkat akhir yang sedang mengerjakan tugas akhir, skripsi, atau tesis dari berbagai jurusan teknik dan sains." },
      { question: "Bagaimana proses bimbingannya?", answer: "Proses bimbingan dilakukan secara online atau offline (sesuai kesepakatan) dengan sesi terjadwal, review progres, dan umpan balik berkala." },
      { question: "Apakah ada jaminan kelulusan?", answer: "Kami menyediakan bimbingan terbaik, namun kelulusan tetap bergantung pada usaha dan performa individu mahasiswa serta kebijakan kampus masing-masing." },
    ],
    testimonials: [
      { name: "Andi Pratama, Teknik Informatika", quote: "Berkat bimbingan Hackta, skripsi saya selesai tepat waktu dengan hasil memuaskan!", rating: 5, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
      { name: "Siti Rahayu, Sistem Informasi", quote: "Metodologi penelitian saya jadi lebih terarah. Terima kasih Hackta!", rating: 4, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    ]
  },
  "mahasiswa-ai": {
    tagline: "Untuk Mahasiswa & Umum",
    title: "Pelatihan Kecerdasan Buatan (AI)",
    imageUrl: mahasiswaAiImg,
    description: "Pelatihan komprehensif di bidang Artificial Intelligence (AI) mulai dari dasar hingga aplikasi tingkat lanjut. Fokus pada Computer Vision, Large Language Models (LLM), Natural Language Processing (NLP), dan Machine Learning. Siapkan diri Anda untuk berkarir di masa depan teknologi AI.",
    price: "Mulai Rp 2.500.000",
    features: [
      "Materi fundamental AI & Machine Learning",
      "Studi kasus nyata dan proyek implementasi",
      "Fokus pada Computer Vision, LLM, NLP",
      "Dibimbing oleh praktisi AI berpengalaman",
      "Sertifikat penyelesaian program",
      "Akses komunitas AI Hackta",
      "Update materi sesuai tren industri"
    ],
    curriculumModules: [
      { title: "Dasar-dasar Machine Learning", description: "Konsep dasar, algoritma supervised/unsupervised, evaluasi model." },
      { title: "Computer Vision", description: "Pengenalan citra, deteksi objek, arsitektur CNN." },
      { title: "Natural Language Processing (NLP)", description: "Pengolahan teks, sentiment analysis, pengantar LLM." },
      { title: "Proyek Akhir AI", description: "Membangun dan mengimplementasikan model AI nyata." }
    ],
    faqs: [
      { question: "Apakah perlu latar belakang coding untuk ikut?", answer: "Dasar Python direkomendasikan, namun materi akan dimulai dari dasar untuk memastikan pemahaman." },
      { question: "Berapa lama durasi pelatihan?", answer: "Durasi program bervariasi, biasanya antara 1-3 bulan tergantung level dan intensitas." },
    ],
    testimonials: [
      { name: "Budi Santoso, Developer AI", quote: "Materi sangat up-to-date dan mudah dipahami. Langsung bisa diterapkan di proyek!", rating: 5, avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
      { name: "Dewi Lestari, Data Analyst", quote: "Akhirnya paham cara kerja LLM. Pengajarnya sabar dan interaktif.", rating: 5, avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
    ]
  },
  "mahasiswa-intern": {
    tagline: "Untuk Profesional Muda",
    title: "Sertifikasi Internasional & Persiapan Karir Global",
    imageUrl: mahasiswaInternImg,
    description: "Program persiapan untuk mendapatkan sertifikasi teknologi berskala internasional (contoh: AWS, Google Cloud, Microsoft Azure, Cisco) dan bimbingan karir untuk bersaing di pasar global. Tingkatkan kredibilitas dan peluang Anda di industri teknologi.",
    price: "Mulai Rp 3.000.000",
    features: [
      "Pilihan sertifikasi industri (Cloud, Cyber Security, Jaringan)",
      "Materi studi dan ujian simulasi",
      "Bimbingan CV & portofolio global",
      "Latihan interview teknis",
      "Tips dan trik mencari kerja di luar negeri",
      "Jaringan profesional internasional"
    ],
    curriculumModules: [
      { title: "Pemilihan Sertifikasi & Strategi Belajar", description: "Memilih sertifikasi yang sesuai karir dan menyusun rencana studi." },
      { title: "Materi Teknis & Ujian Simulasi", description: "Pembahasan mendalam materi ujian dan simulasi tes." },
      { title: "Persiapan Karir Global", description: "Optimasi CV, LinkedIn, portofolio, dan strategi pencarian kerja internasional." }
    ],
    faqs: [
      { question: "Sertifikasi apa saja yang bisa dibimbing?", answer: "Kami fokus pada sertifikasi populer seperti AWS Certified Cloud Practitioner, Microsoft Azure Fundamentals, CompTIA Security+, dan Cisco CCNA." },
      { question: "Apakah ada biaya tambahan untuk ujian sertifikasi?", answer: "Biaya ujian sertifikasi dibayarkan langsung ke penyedia sertifikasi (misal: Pearson VUE) dan tidak termasuk dalam biaya program kami." },
    ],
    testimonials: [
      { name: "Rizky Firmansyah, Cloud Engineer", quote: "Lolos AWS Certified Solution Architect berkat bimbingan Hackta! Sangat direkomendasikan!", rating: 5, avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    ]
  },
  
  // SMP-SMA
  "sma-ai": {
    tagline: "Untuk SMP/SMA",
    title: "Pelatihan Dasar Kecerdasan Buatan (AI)",
    imageUrl: smaAiImg,
    description: "Pengenalan dan pelatihan dasar AI untuk siswa SMP dan SMA. Pelajari konsep-konsep dasar Machine Learning, logika AI, dan buat proyek-proyek sederhana menggunakan alat visual dan coding dasar. Membangun fondasi kuat untuk masa depan AI.",
    price: "Mulai Rp 750.000",
    features: [
      "Konsep dasar AI dengan bahasa yang mudah",
      "Pengenalan Machine Learning & Deep Learning",
      "Proyek AI berbasis visual (Scratch, ML for Kids)",
      "Coding Python dasar untuk AI",
      "Membangun model pengenalan gambar sederhana",
      "Pengajar interaktif dan pengalaman belajar seru"
    ],
    curriculumModules: [
      { title: "Apa itu AI?", description: "Sejarah, definisi, dan contoh aplikasi AI di kehidupan sehari-hari." },
      { title: "Machine Learning Sederhana", description: "Konsep data, pola, dan prediksi menggunakan contoh visual." },
      { title: "AI dalam Kehidupan", description: "Etika AI, potensi masa depan, dan karir di bidang AI." }
    ],
    faqs: [], // Contoh tidak ada FAQ untuk layanan ini
    testimonials: [] // Contoh tidak ada testimoni
  },
  "sma-iot": {
    tagline: "Untuk SMP/SMA",
    title: "Pelatihan Internet of Things (IoT)",
    imageUrl: smaIoTImg,
    description: "Belajar membuat perangkat pintar yang terhubung ke internet. Siswa akan diajarkan dasar-dasar elektronika, mikrokontroler (Arduino/Raspberry Pi), dan pemrograman untuk menciptakan solusi IoT sederhana seperti smart home atau sistem monitoring.",
    price: "Mulai Rp 850.000",
    features: [
      "Dasar-dasar elektronika & mikrokontroler",
      "Pemrograman Arduino/Raspberry Pi",
      "Membangun prototipe perangkat IoT",
      "Konektivitas WiFi & Cloud dasar",
      "Proyek Smart Home sederhana",
      "Belajar dari praktek langsung",
      "Pengembangan logika problem solving"
    ],
    curriculumModules: [
      { title: "Pengantar IoT & Elektronika", description: "Apa itu IoT, sensor, aktuator, dan komponen dasar elektronika." },
      { title: "Pemrograman Mikrokontroler", description: "Mengenal Arduino IDE, dasar coding C++ untuk Arduino." },
      { title: "Proyek IoT Sederhana", description: "Membangun sistem monitoring suhu atau kontrol lampu via aplikasi." }
    ],
    faqs: [],
    testimonials: []
  },
  "sma-hacking": {
    tagline: "Untuk SMP/SMA",
    title: "Pengenalan Cybersecurity & Ethical Hacking",
    imageUrl: smaHackingImg,
    description: "Program edukasi untuk memahami dasar-dasar keamanan siber dan etika 'hacking'. Siswa akan belajar tentang ancaman siber, cara melindungi data pribadi, serta teknik-teknik dasar keamanan jaringan dan website, diajarkan secara etis dan bertanggung jawab.",
    price: "Mulai Rp 900.000",
    features: [
      "Dasar-dasar keamanan siber",
      "Ancaman online & cara melindungi diri",
      "Prinsip Ethical Hacking",
      "Pengenalan tools keamanan",
      "Studi kasus serangan siber",
      "Membangun kesadaran digital yang aman",
      "Dipelajari dengan etika dan tanggung jawab"
    ],
    curriculumModules: [
      { title: "Dasar Cybersecurity", description: "Apa itu keamanan siber, ancaman umum, dan pentingnya privasi." },
      { title: "Mengenal Ethical Hacking", description: "Konsep, perbedaan, dan teknik dasar (misal: phishing awareness, password security)." },
      { title: "Melindungi Diri di Dunia Digital", description: "Tips keamanan untuk browsing, media sosial, dan data pribadi." }
    ],
    faqs: [],
    testimonials: []
  },
  "sma-lf": {
    tagline: "Untuk SMP/SMA",
    title: "Kelas Robot Line Follower",
    imageUrl: smaLfImg,
    description: "Belajar merancang, merakit, dan memprogram robot Line Follower. Siswa akan memahami dasar-dasar robotika, elektronika, sensor, dan algoritma kendali untuk membuat robot yang mampu mengikuti garis secara otomatis.",
    price: "Mulai Rp 800.000",
    features: [
      "Dasar robotika dan mekanika",
      "Pengenalan sensor garis (infrared)",
      "Pemrograman mikrokontroler (Arduino)",
      "Merakit chassis robot",
      "Algoritma kendali robot",
      "Persiapan kompetisi robot (opsional)",
      "Proyek langsung membangun robot"
    ],
    curriculumModules: [
      { title: "Pengantar Robotika & Komponen", description: "Definisi robot, bagian-bagian, dan pengenalan sensor garis." },
      { title: "Merakit Robot & Elektronika Dasar", description: "Perakitan mekanik, wiring motor dan sensor." },
      { title: "Pemrograman Kendali Robot", description: "Logika program untuk mengikuti garis, kalibrasi sensor." }
    ],
    faqs: [],
    testimonials: []
  },
  "sma-arm": {
    tagline: "Untuk SMP/SMA",
    title: "Kelas Robot Lengan (Robotic Arm)",
    imageUrl: smaArmImg,
    description: "Program untuk membangun dan mengendalikan robot lengan. Siswa akan belajar tentang kinematika robot, motor servo, dan pemrograman untuk melakukan tugas-tugas presisi seperti mengambil dan memindahkan objek.",
    price: "Mulai Rp 950.000",
    features: [
      "Dasar kinematika robot",
      "Penggunaan motor servo & kontroler",
      "Merancang gerakan robot lengan",
      "Pemrograman presisi untuk tugas",
      "Aplikasi industri robot lengan",
      "Proyek langsung robot lengan mini"
    ],
    curriculumModules: [
      { title: "Dasar Kinematika & Mekanika Lengan Robot", description: "Memahami sendi, derajat kebebasan, dan struktur lengan robot." },
      { title: "Kontrol Motor Servo", description: "Pemrograman Arduino untuk mengendalikan sudut motor servo." },
      { title: "Pemrograman Tugas Robot Lengan", description: "Menyusun sekuens gerakan untuk mengambil dan memindahkan objek." }
    ],
    faqs: [],
    testimonials: []
  },
  "sma-drone": {
    tagline: "Untuk SMP/SMA",
    title: "Kelas Robot Drone Dasar",
    imageUrl: smaDroneImg,
    description: "Pengenalan dan perakitan dasar robot drone. Siswa akan belajar tentang prinsip aerodinamika, komponen drone, serta dasar-dasar kalibrasi dan kontrol penerbangan. Fokus pada pemahaman operasional dan keselamatan drone.",
    price: "Mulai Rp 1.200.000",
    features: [
      "Prinsip kerja & komponen drone",
      "Aerodinamika dasar",
      "Perakitan mini drone",
      "Kalibrasi & kontrol penerbangan",
      "Peraturan & etika penggunaan drone",
      "Hands-on menerbangkan drone",
      "Dasar pemrograman untuk drone"
    ],
    curriculumModules: [
      { title: "Pengantar Drone & Fisika Penerbangan", description: "Sejarah drone, jenis, komponen utama, dan gaya aerodinamika." },
      { title: "Merakit & Kalibrasi Drone", description: "Panduan perakitan mini drone dan proses kalibrasi sensor." },
      { title: "Kontrol Penerbangan Dasar & Etika", description: "Teknik dasar menerbangkan drone, tips keselamatan, dan regulasi." }
    ],
    faqs: [],
    testimonials: []
  },
  "sma-spider": {
    tagline: "Untuk SMP/SMA",
    title: "Kelas Robot Spider (Berkaki)",
    imageUrl: smaSpiderImg,
    description: "Membuat robot berkaki (spider/hexapod) yang dapat bergerak di berbagai medan. Siswa akan mempelajari koordinat gerakan, kinematika invers, dan pemrograman untuk mengendalikan banyak motor servo secara bersamaan demi pergerakan yang kompleks.",
    price: "Mulai Rp 1.100.000",
    features: [
      "Konsep robot berkaki & kinematika",
      "Kontrol banyak motor servo",
      "Algoritma jalan (gait algorithm)",
      "Desain mekanik dasar",
      "Pemrograman pergerakan kompleks",
      "Mengatasi medan tidak rata",
      "Proyek langsung robot spider"
    ],
    curriculumModules: [
      { title: "Pengantar Robot Berkaki & Koordinat", description: "Memahami struktur robot spider, derajat kebebasan, dan sistem koordinat." },
      { title: "Kontrol Motor Servo Multiaxis", description: "Pemrograman Arduino untuk mengendalikan banyak motor servo secara simultan." },
      { title: "Algoritma Jalan (Gait) & Stabilitas", description: "Mempelajari berbagai pola jalan robot dan menjaga kestabilan." }
    ],
    faqs: [],
    testimonials: []
  },

  // SD
  "sd-coding": {
    tagline: "Untuk Anak SD",
    title: "Kelas Coding & Animasi Kreatif",
    imageUrl: sdCodingImg,
    description: "Pengenalan dasar-dasar coding melalui platform visual yang menyenangkan seperti Scratch. Anak-anak akan belajar logika pemrograman, membuat cerita interaktif, game sederhana, dan animasi kreatif yang memicu imajinasi mereka.",
    price: "Mulai Rp 500.000",
    features: [
      "Belajar coding dengan Scratch",
      "Membuat game dan animasi sendiri",
      "Mengembangkan logika berpikir",
      "Sesi interaktif dan penuh permainan",
      "Proyek kreatif yang dipandu",
      "Pengajar ramah anak"
    ],
    curriculumModules: [
      { title: "Pengantar Scratch & Blok Coding", description: "Mengenal antarmuka Scratch, blok-blok dasar, dan karakter." },
      { title: "Membuat Animasi Sederhana", description: "Menggerakkan karakter, mengubah latar, dan menambahkan suara." },
      { title: "Membangun Game Pertama", description: "Membuat game interaktif dengan skor dan interaksi pemain." }
    ],
    faqs: [
      { question: "Apakah anak saya butuh laptop sendiri?", answer: "Sangat direkomendasikan agar anak membawa laptop sendiri untuk sesi praktik yang maksimal." },
      { question: "Berapa usia minimal untuk ikut kelas ini?", answer: "Kelas ini cocok untuk anak usia 7-12 tahun yang memiliki minat pada teknologi." },
    ],
    testimonials: [
      { name: "Orang Tua Bima (8 tahun)", quote: "Bima jadi suka coding! Setiap pulang dia selalu cerita game apa yang dia buat hari ini.", rating: 5, avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    ]
  },
  "sd-elektronika": {
    tagline: "Untuk Anak SD",
    title: "Kelas Pengenalan Elektronika Dasar",
    imageUrl: sdElektronikaImg,
    description: "Jelajahi dunia elektronika dengan cara yang aman dan menyenangkan. Anak-anak akan belajar tentang sirkuit dasar, komponen elektronik seperti LED, baterai, dan saklar, serta membuat proyek-proyek sederhana seperti lampu berkedip atau alarm mini.",
    price: "Mulai Rp 550.000",
    features: [
      "Konsep dasar listrik & sirkuit",
      "Pengenalan komponen elektronik",
      "Merakit proyek sederhana",
      "Hands-on dengan kit elektronika",
      "Meningkatkan keterampilan motorik",
      "Memicu rasa ingin tahu ilmiah"
    ],
    curriculumModules: [
      { title: "Apa itu Listrik?", description: "Pengantar listrik, aman menggunakan listrik, konduktor & isolator." },
      { title: "Komponen Elektronika Dasar", description: "Mengenal LED, resistor, baterai, saklar, dan breadboard." },
      { title: "Membuat Sirkuit Sederhana", description: "Merakit lampu LED, membuat alarm sederhana dengan sensor cahaya." }
    ],
    faqs: [],
    testimonials: []
  },
  "sd-robot": {
    tagline: "Untuk Anak SD",
    title: "Kelas Robot Dasar (Robotik Fun)",
    imageUrl: sdRobotImg,
    description: "Perkenalkan anak pada dunia robotika melalui perakitan dan pemrograman robot mini yang interaktif. Mereka akan belajar tentang bagian-bagian robot, bagaimana robot bergerak, dan memprogram gerakan sederhana. Cocok untuk mengasah kemampuan problem-solving dan kreativitas.",
    price: "Mulai Rp 600.000",
    features: [
      "Pengenalan dasar robotika",
      "Merakit robot sederhana",
      "Memahami motor & sensor",
      "Pemrograman gerakan robot",
      "Bermain sambil belajar robot",
      "Mengembangkan imajinasi teknis"
    ],
    curriculumModules: [
      { title: "Apa itu Robot?", description: "Sejarah robot, jenis-jenis, dan fungsi robot di sekitar kita." },
      { title: "Bagian-bagian Robot & Merakit", description: "Mengenal motor, roda, sasis, dan merakit robot mini." },
      { title: "Memprogram Gerakan Robot", description: "Memberi perintah pada robot untuk bergerak maju, mundur, belok." }
    ],
    faqs: [],
    testimonials: [
      { name: "Orang Tua Sarah (9 tahun)", quote: "Sarah sangat antusias! Dia bangga sekali bisa membuat robotnya bergerak.", rating: 5, avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
    ]
  },
};


const DetailLayananPage = () => {
  const { slug } = useParams(); // Ambil slug dari URL
  const navigate = useNavigate();
  const service = serviceData[slug]; // Cari data layanan berdasarkan slug

  useEffect(() => {
    // Jika layanan tidak ditemukan, redirect ke halaman 404 atau homepage
    if (!service) {
      navigate('/404'); // Anda bisa membuat halaman 404 atau redirect ke '/'
    }
  }, [service, navigate]);

  if (!service) {
    return null; // Atau tampilkan loading spinner
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroDetailLayanan 
        title={service.title} 
        tagline={service.tagline} 
        imageUrl={service.imageUrl} 
      />

      {/* Konten Utama */}
      <section className="py-16 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Deskripsi & Detail */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-6 text-light-text dark:text-dark-text">Deskripsi Program</h2>
            <p className="text-lg leading-relaxed mb-8 text-light-text-secondary dark:text-dark-text-secondary">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <FeatureList title="Fitur Utama" features={service.features} />
              <PriceCard price={service.price} />
            </div>
          </div>

          {/* Kolom Samping (Opsional, bisa diisi PriceCard, Contact, dll.) */}
          <div className="lg:col-span-1">
            {/* Misalnya, bisa juga diisi form kontak singkat */}
            <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-xl shadow-lg text-center mb-12">
                <h3 className="text-2xl font-bold text-black mb-3">Siap Bergabung?</h3>
                <p className="text-black/80 mb-6">Hubungi kami untuk informasi lebih lanjut atau pendaftaran.</p>
                <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-black text-primary font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
                >
                    Kontak Kami
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      {service.curriculumModules && service.curriculumModules.length > 0 && (
        <CurriculumSection curriculumModules={service.curriculumModules} />
      )}

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <FAQSection faqs={service.faqs} />
      )}

      {/* Testimonial Section */}
      {service.testimonials && service.testimonials.length > 0 && (
        <TestimonialSection testimonials={service.testimonials} />
      )}
    </div>
  );
};

export default DetailLayananPage;