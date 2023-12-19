<h1 align="center">DaurinPoin -
   Documentation API</h1>

## Tech Used 
- Express.js
- MySQL
- Sequelize
- Cloud Run
- SQL Instance
- Cloud Build
- cloud storage

## Getting Started DaurinPoin

- Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Capstone-DaurinPoin/Cloud-Computing.git
   ```

-  Navigate to the project directory:

   ```bash
   cd backend
   ```

- Install the dependencies:

   ```bash
   npm install
   ```
## Running the Application DaurinPoin

To start the Express.js server and run the database setup:

```bash
# Choose your command : 
npm run start
npm run dev
```
## API Endpoint List DaurinPoin

```bash
# Users app Daurin-api
[POST] https://daurin-api/users/register # Register User
[POST] https://daurin-api/users/login # Login User
[GET] https://daurin-api/users/ # Get User Detail
[PATCH] https://daurin-api.users/ # Update User Detail

# Shop Daurin-api
[POST] https://daurin-api/shops/ # Create shop
[PUT] https://daurin-api/shops/:shopId # redeem Shops
[GET] https://daurin-api/shops/:shopId # Get  all Shops Data
[GET] https://daurin-api/shops/ # Get  all Shops Data


#History
[GET] https://daurin-api/histories/ #hisrory shop


#News artikel berita
[GET] https://daurin-api/news/ #news artikel
```


### 1. Register User

- **Method:** `POST`
- **Path:** `/users/register`
- **Description:** endpoint for register users daurinPoin
- **Request Body:**
  ```json
  { 
    "username":"astyyuliani",
    "email":"astyyuliani@gmail.com",
    "password":"asty123"
  }
  ```
- **Response Body:**
  ```json
  {
    "status": "success",
    "message": "User was registered successfully!",
    "data": {
        "email": "astyyuliani@gmail.com",
        "username": "astyyuliani",
        "point": 0,
        "image_url": "default_image_url.jpg"
    }


  }
  ```
  
### 2. Login User

- **Method:** `POST`
- **Path:** `/users/login`
- **Description:** endpoint for login users
- **Request Body:**
  ```json
  {
    "email":"astyyuliani@gmail.com",
    "password":"asty123"
  }
  ```
- **Response Body:**
  ```json
  {
    "status": "success",
    "message": "login success",
    "data": {
        "id_user": 1,
        "username": "astyyuliani",
        "email": "astyyuliani@gmail.com",
        "password": "asty123",
        "point": 0,
        "image_url": "default_image_url.jpg",
        "createdAt": "2023-12-19T00:47:40.000Z",
        "updatedAt": "2023-12-19T00:47:40.000Z"
    }
  }
  ```

### 3. Get User Detail

- **Method:** `GET`
- **Path:** `/users`
- **Description:** endpoint for login users
- **Authorization:** Bearer token from login
- **Response Body:**
  ```json
  {
    "status": "success",
    "message": "get all user success",
    "data": [
        {
            "id_user": 1,
            "nama": "astyyuliani",
            "email": "astyyuliani@gmail.com",
            "password": "$2a$10$OAGiGPMceRWWS609ky0ivuazuARNEAje/rreiDC5MtNTEtyYdf4MK",
            "point": 0,
            "image_url": "default_image_url.jpg",
            "createdAt": "2023-12-19T01:11:01.000Z",
            "updatedAt": "2023-12-19T01:11:01.000Z"
        }
    ]
  }
  ```

### 4. Update User

- **Method:** `PATCH`
- **Path:** `/users`
- **Authorization:** Bearer token from login
- **Request Body:**
  ```json
  {
    "email":"asty@gmail.com",
    "password":"asty123"
  }
  ```
- **Response Body:**
  ```json
  {
    "status": "success",
    "message": "update user success"
  }
  ```
  
### 5. Create Shop

- **Method:** `POST`
- **Path:** `/shops`
- **Request Body:**
  ```json
   {
       
  "name": "Asty ",
  "voucher": "food",
  "price" :2000

   }
  ```
- **Response Body:**
  ```json
   {
    "status": "success",
    "message": "shop created successfully",
    "data": {
        "shop_id": 3,
        "name": "Asty ",
        "voucher": "food",
        "price": 2000,
        "updatedAt": "2023-12-18T13:07:40.204Z",
        "createdAt": "2023-12-18T13:07:40.204Z"
    }
   }
  ```

### 6. Reedem Shop

- **Method:** `PATCH`
- **Path:** `/shops`
- **Authorization:** Bearer token from login with user 
- **Parameters:**

- **Request Body:**
  ```json
   {
      "name": "Asty  ",
      "voucher": "gojek",
      "price" :2000
   }
  ```
- **Response Body:**
  ```json
   {
    "status": "success",
    "message": "Code successfully redeemed",
    "data": {
        "name": "Asty  ",
        "voucher": "gojek",
        "price": 2000
       }
   }
  ```


### 7. Get All Shop

- **Method:** `GET`
- **Path:** `/shops/`

- **Response Body:**
  ```json
   {
    "status": "success",
    "message": "get all shops success",
    "data": [
        {
            "shop_id": 1,
            "name": "Asty ",
            "voucher": "food",
            "price": 2000,
            "createdAt": "2023-12-18T06:52:33.000Z",
            "updatedAt": "2023-12-18T06:52:33.000Z"
        },
        {
            "shop_id": 2,
            "name": "Asty  ",
            "voucher": "Kouta",
            "price": 2000,
            "createdAt": "2023-12-18T13:07:40.000Z",
            "updatedAt": "2023-12-18T13:24:11.000Z"
        },
        {
            "shop_id": 3,
            "name": "Asty  ",
            "voucher": "gojek",
            "price": 2000,
            "createdAt": "2023-12-19T03:39:34.000Z",
            "updatedAt": "2023-12-19T03:39:34.000Z"
        }
    ]
   }
          
  ```

### 8. Get All history

- **Method:** `GET`
- **Path:** `/histories/`
- **Response Body:**
  ```json
   {
    "status": "success",
    "message": "Get all histories success",
    "data": [
        {
            "shop_id": 1,
            "name": "Asty ",
            "voucher": "food",
            "price": 2000
        },
        {
            "shop_id": 2,
            "name": "Asty  ",
            "voucher": "Kouta",
            "price": 2000
        },
        {
            "shop_id": 3,
            "name": "Asty  ",
            "voucher": "gojek",
            "price": 2000
        }
    ]
  }
   
  ```
  
### 9. Get news

- **Method:** `GET`
- **Path:** `/news/`

- **Response Body:**
  ```json
   {
       
    "status": "ok",
    "totalResults": 18,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "CNA"
            },
            "author": null,
            "title": "Kenaikan timbunan di satu-satunya pusat pelupusan sampah Singapura membimbangkan, kata pakar",
            "description": "Sampah yang dibuang hampir 6 juta orang di Singapura mengakibatkan lebih 2,000 tan abu dan sisa yang tidak boleh dibakar dihantar ke pusat pelupusan sampah Semakau setiap hari.",
            "url": "https://www.channelnewsasia.com/malaysia/tapak-pelupusan-sampah-semakau-singapura-3956616",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--XJ0u53Rs--/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/mediacorp/cna/image/2023/11/30/semakau_m.jpg?itok=4zcwneO0",
            "publishedAt": "2023-12-01T06:51:47Z",
            "content": "Abu ini mungkin perlu diproses semula sebelum boleh digunakan untuk sebarang jenis penambakan tanah atau sebagai contoh, membuat konkrit, katanya.\r\nBagaimanapun, isu seperti itu boleh diatasi dengan … [+2516 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Paul Tan's Automotive News"
            },
            "author": "Izwaashura Sadali",
            "title": "Johor Bahru dilanda banjir kilat – 25 lokasi terlibat",
            "description": "Hujan lebat yang melanda Johor Bahru (JB) sejak jam 1 tengahari tadi telah menyebabkan berlakunya beberapa kawasan dinaiki air di sekitar pusat bandaraya berkenaan sehingga menyebabkan berlakunya kesesakan lalu lintas serta kemalangan jalan raya. Menurut Baha…",
            "url": "https://paultan.org/2023/12/06/johor-bahru-dilanda-banjir-kilat-25-lokasi-terlibat/",
            "urlToImage": "https://paultan.org/image/2023/12/JB_Banjir_Dec23_3_BM-630x473.jpeg",
            "publishedAt": "2023-12-06T10:47:59Z",
            "content": "Hujan lebat yang melanda Johor Bahru (JB) sejak jam 1 tengahari tadi telah menyebabkan berlakunya beberapa kawasan dinaiki air di sekitar pusat bandaraya berkenaan sehingga menyebabkan berlakunya kes… [+1693 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "ReFarm TM",
            "title": "“GigaFarm” yang mampu menggantikan 1% impor pangan UEA siap dibangun di Food Tech Valley di Dubai",
            "description": "DUBAI, Uni Emirat Arab, Dec. 08, 2023 (GLOBE NEWSWIRE) -- Food Tech Valley telah menandatangani perjanjian di COP28 dengan ReFarmTM untuk memulai pembangunan “GigaFarm” inovatif di lahan seluas 900.000 kaki persegi. Lahan pertanian bersistem pemanfaatan sampa…",
            "url": "https://www.globenewswire.com/news-release/2023/12/07/2792841/0/id/GigaFarm-yang-mampu-menggantikan-1-impor-pangan-UEA-siap-dibangun-di-Food-Tech-Valley-di-Dubai.html",
            "urlToImage": null,
            "publishedAt": "2023-12-07T18:50:00Z",
            "content": "DUBAI, Uni Emirat Arab, Dec. 08, 2023 (GLOBE NEWSWIRE) -- Food Tech Valley telah menandatangani perjanjian di COP28 dengan ReFarmTM untuk memulai pembangunan GigaFarm inovatif di lahan seluas 900.000… [+2912 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Paul Tan's Automotive News"
            },
            "author": "Durrani Sharom",
            "title": "Tesla Cybertruck 2024 diperkenal – trak EV versi produksi dengan kuasa sehingga 857 PS, kalis peluru",
            "description": "Selepas diumumkan buat pertama kali pada tahun 2019, kini Tesla Cybertruck akhirnya ditunjukkan secara rasmi. Trak pikap elektrik versi produksi ini membawa kelainan yang jelas berbanding model yang diperkenalkan empat tahun lalu. Sebagai permulaan, ia lebih …",
            "url": "https://paultan.org/2023/12/01/tesla-cybertruck-2024-diperkenal-trak-ev-versi-produksi-dengan-kuasa-sehingga-857-ps-kalis-peluru/",
            "urlToImage": "https://paultan.org/image/2023/12/2024-Tesla-Cybertruck-production-debut-1-BM-1200x628.jpeg",
            "publishedAt": "2023-12-01T10:44:46Z",
            "content": "Selepas diumumkan buat pertama kali pada tahun 2019, kini Tesla Cybertruck akhirnya ditunjukkan secara rasmi. Trak pikap elektrik versi produksi ini membawa kelainan yang jelas berbanding model yang … [+5372 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kalbaronline.com"
            },
            "author": "adminkalbaronline",
            "title": "Musim Hujan Menjelang, BPBD Kalbar Imbau 4 Langkah Mudah Antisipasi Banjir",
            "description": "KalbarOnline, Pontianak – Ketua Satgas Informasi Bencana BPBD Provinsi Kalbar, Daniel mengimbau \nThe post Musim Hujan Menjelang, BPBD Kalbar Imbau 4 Langkah Mudah Antisipasi Banjir appeared first on KalbarOnline.Com.",
            "url": "https://www.kalbaronline.com/2023/11/26/musim-hujan-menjelang-bpbd-kalbar-imbau-4-langkah-mudah-antisipasi-banjir/",
            "urlToImage": "https://www.kalbaronline.com/wp-content/uploads/2023/11/IMG_20231116_194801.jpg",
            "publishedAt": "2023-11-26T14:40:50Z",
            "content": "KalbarOnline, Pontianak – Ketua Satgas Informasi Bencana BPBD Provinsi Kalbar, Daniel mengimbau kepada seluruh masyarakat untuk berpartisipasi aktif dalam mengantisipasi bencana banjir di daerahnya m… [+2274 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suaraindonesia-news.com"
            },
            "author": "admin",
            "title": "PWI Kabupaten Bogor Kunjungi PT PPLI",
            "description": "BOGOR, Senin (20/11/2023) suaraindonesia-news.com – Pengurus beserta anggota Persatuan Wartawan Indonesia (PWI) Kabupaten Bogor, kembali melaksanakan kunjungan kerja (Kunker) rutinnya, yang kali\nThe post PWI Kabupaten Bogor Kunjungi PT PPLI appeared first on …",
            "url": "https://suaraindonesia-news.com/pwi-kabupaten-bogor-kunjungi-pt-ppli/",
            "urlToImage": "https://suaraindonesia-news.com/wp-content/uploads/2023/11/IMG_20231120_171341.jpg",
            "publishedAt": "2023-11-20T10:24:34Z",
            "content": "BOGOR, Senin (20/11/2023) suaraindonesia-news.com – Pengurus beserta anggota Persatuan Wartawan Indonesia (PWI) Kabupaten Bogor, kembali melaksanakan kunjungan kerja (Kunker) rutinnya, yang kali ini … [+5981 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kalbaronline.com"
            },
            "author": "adminkalbaronline",
            "title": "Wali Kota Pontianak Apresiasi Dunia Usaha Peduli Lingkungan Lewat CSR",
            "description": "KalbarOnline, Pontianak – Pemerintah Kota (Pemkot) Pontianak menerima bantuan berupa 40 unit \nThe post Wali Kota Pontianak Apresiasi Dunia Usaha Peduli Lingkungan Lewat CSR appeared first on KalbarOnline.Com.",
            "url": "https://www.kalbaronline.com/2023/12/03/wali-kota-pontianak-apresiasi-dunia-usaha-peduli-lingkungan-lewat-csr/",
            "urlToImage": "https://www.kalbaronline.com/wp-content/uploads/2023/12/IMG-20231203-WA0009.jpg",
            "publishedAt": "2023-12-03T05:33:18Z",
            "content": "KalbarOnline, Pontianak Pemerintah Kota (Pemkot) Pontianak menerima bantuan berupa 40 unit kursi taman dan 20 unit tempat sampah dari Bank Danamon.\r\nPenyerahan bantuan Corporate Social Responsibility… [+2421 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suaraindonesia-news.com"
            },
            "author": "admin",
            "title": "TPA di Soroti Warga, Pj Bupati Mamasa Langsung ke Lokasi: Kita Akan Benahi",
            "description": "MAMASA, Sabtu (02/12/2023) suaraindonesi-news.com – Pj Bupati Mamasa Yakub F Solon meninjau lokasi Tempat Pembuangan Akhir (TPA) di Desa Salurano, Kecamatan Tandukalua,\nThe post TPA di Soroti Warga, Pj Bupati Mamasa Langsung ke Lokasi: Kita Akan Benahi appear…",
            "url": "https://suaraindonesia-news.com/tpa-di-soroti-warga-pj-bupati-mamasa-langsung-ke-lokasi-kita-akan-benahi/",
            "urlToImage": "https://suaraindonesia-news.com/wp-content/uploads/2023/12/IMG_20231202_080307.jpg",
            "publishedAt": "2023-12-02T01:13:51Z",
            "content": "MAMASA, Sabtu (02/12/2023) suaraindonesi-news.com – Pj Bupati Mamasa Yakub F Solon meninjau lokasi Tempat Pembuangan Akhir (TPA) di Desa Salurano, Kecamatan Tandukalua, Kabupaten Mamasa, Provinsi Sul… [+1057 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kalbaronline.com"
            },
            "author": "adminkalbaronline",
            "title": "Cegah Banjir, Koramil Sungai Kunyit dan Stakeholder Bersihkan Aliran Drainase Pasar",
            "description": "KalbarOnline, Mempawah – Berperan aktif dalam mencegah banjir akibat curah hujan yang \nThe post Cegah Banjir, Koramil Sungai Kunyit dan Stakeholder Bersihkan Aliran Drainase Pasar appeared first on KalbarOnline.Com.",
            "url": "https://www.kalbaronline.com/2023/12/09/cegah-banjir-koramil-sungai-kunyit-dan-stakeholder-bersihkan-aliran-drainase-pasar/",
            "urlToImage": "https://www.kalbaronline.com/wp-content/uploads/2023/12/IMG-20231209-WA0026.jpg",
            "publishedAt": "2023-12-09T08:26:42Z",
            "content": "KalbarOnline, Mempawah – Berperan aktif dalam mencegah banjir akibat curah hujan yang cukup tinggi, personel Koramil 1201-04/Sk bersama stakeholder menggelar pembersihan aliran drainase, di sekitaran… [+1463 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suaraindonesia-news.com"
            },
            "author": "admin",
            "title": "Koramil 0110 Labuan Bersih-bersih Dilingkungan Pasar Labuan",
            "description": "PANDEGLANG, Minggu (10/12/2023) suaraindonesia-news.com – Koramil 0110 Labuan, Kecamatan Labuan, Pandeglang – Banten, adakan giat kebersihan bersama warga dan Muspika Kecamatan Labuan,\nThe post Koramil 0110 Labuan Bersih-bersih Dilingkungan Pasar Labuan appea…",
            "url": "https://suaraindonesia-news.com/koramil-0110-labuan-bersih-bersih-dilingkungan-pasar-labuan/",
            "urlToImage": "https://suaraindonesia-news.com/wp-content/uploads/2023/12/IMG_20231210_140657.jpg",
            "publishedAt": "2023-12-10T07:09:47Z",
            "content": "PANDEGLANG, Minggu (10/12/2023) suaraindonesia-news.com – Koramil 0110 Labuan, Kecamatan Labuan, Pandeglang – Banten, adakan giat kebersihan bersama warga dan Muspika Kecamatan Labuan, serta turut me… [+1994 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suaraindonesia-news.com"
            },
            "author": "admin",
            "title": "Antisipasi Bahaya DBD, TNI-Polri Bersama Pemkab Pamekasan Karya Bhakti Bersih-Bersih Pasar Tradisional",
            "description": "PAMEKASAN, Jum’at (08/12/2023) suaraindonesia-news.com – Kodim 0826 Pamekasan bersinergi dengan Pemerintah Kabupaten Pamekasan dan Polri, mengambil langkah proaktif dalam mencegah penyebaran Demam\nThe post Antisipasi Bahaya DBD, TNI-Polri Bersama Pemkab Pamek…",
            "url": "https://suaraindonesia-news.com/antisipasi-bahaya-dbd-tni-polri-bersama-pemkab-pamekasan-karya-bhakti-bersih-bersih-pasar-tradisional/",
            "urlToImage": "https://suaraindonesia-news.com/wp-content/uploads/2023/12/IMG_20231208_140305.jpg",
            "publishedAt": "2023-12-08T07:24:37Z",
            "content": "PAMEKASAN, Jum’at (08/12/2023) suaraindonesia-news.com Kodim 0826 Pamekasan bersinergi dengan Pemerintah Kabupaten Pamekasan dan Polri, mengambil langkah proaktif dalam mencegah penyebaran Demam Berd… [+3141 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suaraindonesia-news.com"
            },
            "author": "admin",
            "title": "Cegah Terjadinya Longsor, Kodim 1428/Mamasa Tanam 4000 Pohon",
            "description": "MAMASA, Kamis (07/12/2023) suaraindonesi-news.com – Untuk pencegahan tanah longsor di wilayah Kodim 1428/Mamasa, sekaligus melestarikan lingkungan hidup, Kodim 1428/Mamasa beserta jajaran melakukan\nThe post Cegah Terjadinya Longsor, Kodim 1428/Mamasa Tanam 40…",
            "url": "https://suaraindonesia-news.com/cegah-terjadinya-longsor-kodim-1428-mamasa-tanam-4000-pohon/",
            "urlToImage": "https://suaraindonesia-news.com/wp-content/uploads/2023/12/IMG_20231207_183318.jpg",
            "publishedAt": "2023-12-07T11:40:40Z",
            "content": "MAMASA, Kamis (07/12/2023) suaraindonesi-news.com – Untuk pencegahan tanah longsor di wilayah Kodim 1428/Mamasa, sekaligus melestarikan lingkungan hidup, Kodim 1428/Mamasa beserta jajaran melakukan p… [+1783 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kalbaronline.com"
            },
            "author": "adminkalbaronline",
            "title": "Cegah Banjir dan Penyakit DBD, Koramil 1201-03/Mempawah Hilir Gelar Karya Bakti",
            "description": "KalbarOnline, Mempawah – Intensitas hujan yang tinggi di beberapa titik di Kabupaten \nThe post Cegah Banjir dan Penyakit DBD, Koramil 1201-03/Mempawah Hilir Gelar Karya Bakti appeared first on KalbarOnline.Com.",
            "url": "https://www.kalbaronline.com/2023/12/07/cegah-banjir-dan-penyakit-dbd-koramil-1201-03-mempawah-hilir-gelar-karya-bakti/",
            "urlToImage": "https://www.kalbaronline.com/wp-content/uploads/2023/12/IMG-20231207-WA0010.jpg",
            "publishedAt": "2023-12-07T06:38:49Z",
            "content": "KalbarOnline, Mempawah – Intensitas hujan yang tinggi di beberapa titik di Kabupaten Mempawah, mendorong Kodim 1201/Mph melalui Koramil 1201-03/Mph Hilir melaksanakan karya bakti, pada Kamis (07/12/2… [+1784 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suaraindonesia-news.com"
            },
            "author": "admin",
            "title": "TPA Disorot Warga, Pj Bupati Mamasa Langsung ke Lokasi: Kita Akan Benahi",
            "description": "MAMASA, Sabtu (02/12/2023) suaraindonesi-news.com – Pj Bupati Mamasa Yakub F Solon meninjau lokasi Tempat Pembuangan Akhir (TPA) di Desa Salurano, Kecamatan Tandukalua,\nThe post TPA Disorot Warga, Pj Bupati Mamasa Langsung ke Lokasi: Kita Akan Benahi appeared…",
            "url": "https://suaraindonesia-news.com/tpa-disorot-warga-pj-bupati-mamasa-langsung-ke-lokasi-kita-akan-benahi/",
            "urlToImage": "https://suaraindonesia-news.com/wp-content/uploads/2023/12/IMG_20231202_080307.jpg",
            "publishedAt": "2023-12-02T01:13:51Z",
            "content": "MAMASA, Sabtu (02/12/2023) suaraindonesi-news.com – Pj Bupati Mamasa Yakub F Solon meninjau lokasi Tempat Pembuangan Akhir (TPA) di Desa Salurano, Kecamatan Tandukalua, Kabupaten Mamasa, Provinsi Sul… [+1057 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Papuatoday.com"
            },
            "author": "Redaksi",
            "title": "Kuala Kencana, Kota Modern Pertama di Tengah Hutan Tropis Papua",
            "description": "JAYAPURA (PT) – Kota Kuala Kencana yang didirikan PT Freeport Indonesia (PTFI) pada 5 Desember 1995 di area seluas 17.078 hektar di area Kabupaten Mimika, Provinsi Papua Tengah merupakan kota modern pertama di Indonesia yang berada di tengah hutan tropis. Kot…",
            "url": "https://www.papuatoday.com/2023/12/06/kuala-kencana-kota-modern-pertama-di-tengah-hutan-tropis-papua/",
            "urlToImage": "https://www.papuatoday.com/wp-content/uploads/2023/12/IMG-20231206-WA0006.jpg",
            "publishedAt": "2023-12-06T09:14:44Z",
            "content": "JAYAPURA (PT) Kota Kuala Kencana yang didirikan PT Freeport Indonesia (PTFI) pada 5 Desember 1995 di area seluas 17.078 hektar di area Kabupaten Mimika, Provinsi Papua Tengah merupakan kota modern pe… [+3480 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kalbaronline.com"
            },
            "author": "adminkalbaronline",
            "title": "Kakek 76 Tahun Jatuh dari Jembatan Saat Hendak Membuang Sampah",
            "description": "KalbarOnline, Landak – Seorang pria berusia 76 tahun bernama Paulus Julan mengalami \nThe post Kakek 76 Tahun Jatuh dari Jembatan Saat Hendak Membuang Sampah appeared first on KalbarOnline.Com.",
            "url": "https://www.kalbaronline.com/2023/12/09/kakek-76-tahun-jatuh-dari-jembatan-saat-hendak-membuang-sampah/",
            "urlToImage": "https://www.kalbaronline.com/wp-content/uploads/2023/12/IMG-20231209-WA0033.jpg",
            "publishedAt": "2023-12-09T11:36:58Z",
            "content": "KalbarOnline, Landak – Seorang pria berusia 76 tahun bernama Paulus Julan mengalami nasib tragis. Warga Menjalin, Kabupaten Landak itu terjatuh dari jembatan saat hendak membuang sampah.\r\nKepala Basa… [+1096 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kalbaronline.com"
            },
            "author": "adminkalbaronline",
            "title": "Raker Komwil V Apeksi Regional Kalimantan, Pontianak Role Model Tangani Perubahan Iklim",
            "description": "KalbarOnline, Pontianak – Rapat Kerja (Raker) Komisariat Wilayah (Komwil) V Asosiasi Pemerintah \nThe post Raker Komwil V Apeksi Regional Kalimantan, Pontianak Role Model Tangani Perubahan Iklim appeared first on KalbarOnline.Com.",
            "url": "https://www.kalbaronline.com/2023/12/07/raker-komwil-v-apeksi-regional-kalimantan-pontianak-role-model-tangani-perubahan-iklim/",
            "urlToImage": "https://www.kalbaronline.com/wp-content/uploads/2023/12/IMG-20231207-WA0015.jpg",
            "publishedAt": "2023-12-07T06:57:09Z",
            "content": "KalbarOnline, Pontianak Rapat Kerja (Raker) Komisariat Wilayah (Komwil) V Asosiasi Pemerintah Kota Seluruh Indonesia (Apeksi) resmi dimulai, pada Kamis (07/12/2023). Perubahan iklim menjadi topik uta… [+3366 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kalbaronline.com"
            },
            "author": "adminkalbaronline",
            "title": "Wako Edi Harap Komunitas Berkontribusi dalam Pembangunan",
            "description": "KalbarOnline, Pontianak – Sejumlah komunitas yang bergerak di berbagai bidang, mulai dari \nThe post Wako Edi Harap Komunitas Berkontribusi dalam Pembangunan appeared first on KalbarOnline.Com.",
            "url": "https://www.kalbaronline.com/2023/12/02/wako-edi-harap-komunitas-berkontribusi-dalam-pembangunan/",
            "urlToImage": "https://www.kalbaronline.com/wp-content/uploads/2023/12/IMG-20231202-WA0020.jpg",
            "publishedAt": "2023-12-02T09:44:01Z",
            "content": "KalbarOnline, Pontianak – Sejumlah komunitas yang bergerak di berbagai bidang, mulai dari lingkungan, kesehatan, seni, ekonomi kreatif serta relawan sosial tergabung dalam Rumah Komunitas Pontianak (… [+3116 chars]"
        }
    ]
   }
   
  ```


  ```
  
