/**
 * ################################################################# 
 * This file is for initiating your database in container 
 * You can put your schema, function definition, permission grant, 
 * type definition, trggier, Row level security here
 * #################################################################
 **/

\connect mydb

-- Tabel User
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL,
    nomor_plat VARCHAR(20) NOT NULL,
    nomor_telp INT
);

-- Tabel Slot Parkir
CREATE TABLE slot_parkir (
    parkir_id SERIAL PRIMARY KEY NOT NULL,
    area VARCHAR(5),
    nomor_slot_parkir INT NOT NULL,
    status BOOLEAN NOT NULL
);

-- Tabel Reservasi
CREATE TABLE reservasi (
    reservasi_id SERIAL PRIMARY KEY NOT NULL,
    user_id INT REFERENCES users(user_id),
    parkir_id INT REFERENCES slot_parkir(parkir_id),
    waktu_reservasi TIMESTAMP
);

-- Tabel Riwayat Transaksi
CREATE TABLE riwayat_transaksi (
    transaction_id SERIAL PRIMARY KEY NOT NULL,
    reservasi_id INT REFERENCES reservasi(reservasi_id),
    durasi INTERVAL,
    waktu_keluar TIMESTAMP,
    jumlah_pembayaran INT
);

