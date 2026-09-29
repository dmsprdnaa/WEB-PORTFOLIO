# NursePulse Academy - Frontend Package (Perawat & User)

Paket frontend mandiri (Static HTML, Vanilla JS, & Tailwind CSS) yang dipisahkan dari project **JOKI WEB COURSE**. Folder ini hanya memuat seluruh halaman pengguna/perawat, dari landing page, alur registrasi, dashboard utama perawat, silabus modul, video player interaktif, kuesioner evaluasi, target 90 hari, catatan belajar klinis, profil, hingga sertifikat kelulusan.

> **Catatan:** Seluruh halaman Admin **tidak disertakan** sesuai permintaan.

---

## 📂 Struktur Berkas & Halaman

| File | Halaman & Deskripsi |
| :--- | :--- |
| **index.html** | **Beranda / Landing Page** - Menampilkan profil NursePulse Academy, pilar program 90 hari, katalog modul unggulan, testimoni, dan FAQ. |
| **login.html** | **Masuk Akun** - Form login akun perawat dengan demo auto-fill dan tombol cepat. |
| **egister.html** | **Pendaftaran** - Form pendaftaran awal memasukkan email aktif perawat. |
| **erify-otp.html** | **Verifikasi OTP** - Form input 6-digit kode verifikasi email. |
| **create-password.html** | **Buat Password** - Form pembuatan kata sandi baru pasca verifikasi. |
| **dashboard.html** | **Dashboard Utama Perawat (My Learning)** - Menampilkan banner progres 90 hari, 4 kartu metrik statistik, daftar modul aktif, kalender kehadiran 90 hari, dan panduan 4 pilar kelulusan. |
| **courses.html** | **Explore Courses / Modul** - Katalog lengkap modul pelatihan keperawatan dengan filter kategori dan progress bar. |
| **course-detail.html** | **Detail Modul & Silabus** - Menampilkan daftar video playlist dan status lembar evaluasi kuesioner. |
| **ideo-player.html** | **Video Player Interaktif** - Pemutar materi klinis HD, progress tracker 100%, resume cepat, dan navigasi modul. |
| **questionnaire.html** | **Kuesioner Evaluasi / Post-Test** - Lembar ujian kasus klinis (pilihan ganda dan studi kasus) dengan passing score 80%. |
| **questionnaire-result.html** | **Hasil Skor Kuesioner** - Menampilkan skor perolehan kelulusan dan review kunci jawaban serta pembahasan klinis. |
| **schedule.html** | **Target 90 Hari & Kalender Streak** - Pemetaan kehadiran 3 bulan (90 hari), statistik hari aktif, absen, dan rekor streak. |
| **
otes.html** | **Catatan Belajar Klinis** - Fitur arsip rumus dosis dan resume medis dilengkapi modal tambah/hapus catatan interaktif (tersimpan di *LocalStorage* browser). |
| **profile.html** | **Profil Saya** - Formulir identitas perawat klinis (NIRA PPNI, nomor STR, instansi RS, unit pelayanan, foto profil). |
| **certificate.html** | **Sertifikat Kelulusan Resmi** - Sertifikat akreditasi PPNI & Kemenkes 25 SKP yang siap dicetak langsung (Print to PDF). |

---

## 🚀 Cara Menjalankan

Karena paket ini berupa **Pure Static HTML/CSS/JS**, Anda dapat membukanya dengan berbagai cara:

1. **Langsung klik dua kali (Double-click):**
   - Buka berkas index.html atau dashboard.html langsung di Google Chrome / browser apa pun.
2. **Via Laragon (Localhost):**
   - Pastikan Laragon aktif.
   - Buka browser dan akses alamat:
     http://localhost/JOKI%20WEB%20COURSE%20FRONTEND/
3. **Via VS Code Live Server:**
   - Klik kanan pada index.html -> *Open with Live Server*.

---

## 🎨 Desain & Aset
- Menggunakan Tailwind CSS CDN dengan palet warna resmi **Google Stitch Design Tokens** (*Royal Purple, Neon Mint, CE Credit Gold, Carbon Black*).
- Iconography: Google Material Symbols Outlined.
- Tipografi: Manrope, Plus Jakarta Sans, dan Source Sans 3.
- Seluruh aset logo dan cover tersimpan di folder logo/, cover course/, ackground/, dan css/.
