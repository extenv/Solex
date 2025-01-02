Solex

Solex adalah aplikasi web modern yang dikembangkan menggunakan kombinasi teknologi terkini, termasuk SolidJS, ExpressJS, ViteJS, TailwindCSS, dan MySQL. Aplikasi ini dirancang untuk memberikan pengalaman pengembangan yang efisien, cepat, dan responsif dengan memanfaatkan kekuatan teknologi yang digunakan.

Teknologi yang Digunakan
- **SolidJS**: Framework JavaScript untuk membangun antarmuka pengguna yang cepat dan reaktif.
- **ExpressJS**: Framework minimalis untuk membangun server backend menggunakan Node.js.
- **ViteJS**: Build tool yang cepat dan efisien untuk aplikasi frontend.
- **TailwindCSS**: Utility-first CSS framework yang memungkinkan pengembangan desain responsif dan efisien.
- **MySQL**: Sistem manajemen basis data relasional yang digunakan untuk menyimpan data aplikasi secara terstruktur.

Prasyarat
Sebelum memulai, pastikan Anda memiliki perangkat lunak berikut yang terinstal di sistem Anda:
- [Node.js](https://nodejs.org/en/download/) versi 14 atau lebih baru
- [MySQL](https://dev.mysql.com/downloads/) versi 5.7 atau lebih baru
- [Git](https://git-scm.com/) untuk meng-clone repository

Langkah-langkah Instalasi
1. Clone Repository
Untuk memulai, clone repository ini ke direktori lokal Anda dengan perintah berikut:
```bash
git clone https://github.com/extenv/Solex.git
cd Solex
```

2. Install Dependencies
Setelah meng-clone repository, instal dependencies yang diperlukan menggunakan `pnpm`. Jika Anda belum menginstal `pnpm`, Anda dapat menginstalnya terlebih dahulu dengan perintah berikut:
```bash
npm install -g pnpm
```
Setelah itu, jalankan perintah berikut untuk menginstal semua dependencies:
```bash
pnpm install
```

3. Menjalankan Aplikasi
Untuk menjalankan aplikasi, Anda dapat memilih salah satu dari perintah berikut sesuai kebutuhan Anda:
- Untuk menjalankan server:
```bash
pnpm start
```
- Untuk membangun aplikasi (compile):
```bash
pnpm build
```
- Untuk menjalankan aplikasi dalam mode pengembangan (development):
```bash
pnpm dev
```

Struktur Direktori
Berikut adalah gambaran umum tentang struktur direktori aplikasi:
```
Solex/
├── src/ # Kode sumber aplikasi
│ ├── components/ # Komponen-komponen UI
│ ├── services/ # Layanan API dan utilitas
│ └── views/ # Tampilan halaman aplikasi
├── public/ # File publik seperti gambar dan assets
├── tailwind.config.js # Konfigurasi TailwindCSS
├── vite.config.js # Konfigurasi ViteJS
└── package.json # Dependensi dan script proyek
```

Kontribusi
Kami sangat mengapresiasi kontribusi dari komunitas. Jika Anda ingin berkontribusi, silakan fork repository ini, buat branch baru untuk perubahan Anda, dan ajukan pull request.