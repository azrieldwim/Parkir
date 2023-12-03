# EXPRESS REST API SISTEM PARKIR UNIVERSITAS
## Background 

Sistem menggunakan database server PostgresSql, Javascript dengan Node Package Manager dan Express js sebagai framework.

## Structure 

```s
.
+-- server.js                // Application entry point
+-- models                  // Sequelize ORM model layer
+-- services                // Business logic layer
+-- routes                  // Routing and controlling layer
+-- db                      // database image 
|       +-- 00-database.sql // Database schema initiation file
|       +-- 01-data/sql     // Database data initiation file 
+-- database.js             // Sequelize database connection configuration
+-- .env
+-- ...
```

## Setup

#### Database

Melakukan installasi Dbeaver sebagai Database Management System dan PostgreSQL sebagai server database.

[DBeaver](https://dbeaver.io/download/)

[PostgreSQL Server](https://www.postgresql.org/download/)

Jalankan PostgreSQL server lalu import database pada folder db.

---
#### Node JS

Install seluruh package yang ada pada package.json dengan perintah sebagai berikut :

```s
npm install

```
---
#### Koneksi DB

Lakukan perubahan pada isi file database.js sesuaikan dengan server postgre yang sedang berjalan.


## Test

Jika semua setup sudah dilakukan maka jalankan server express dengan perintah ini pada terminal :

```s
npm start

```

Server akan berjalan pada 
```s
http://localhost:8080/api-docs/#
```
