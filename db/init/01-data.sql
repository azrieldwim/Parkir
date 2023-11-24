/**
 * #################################################################
 * This file is for initiating some data in the database
 * You can insert some data for testing or initiating
 * #################################################################
 **/

\connect mydb

-- Masukkan data ke Tabel "user"
INSERT INTO "user" (username, password, nomor_plat, nomor_telp)
VALUES ('john_doe', 'secretpassword', 'ABC123', 123456789);

-- Masukkan data ke Tabel "slot_parkir"
INSERT INTO slot_parkir (area, nomor_slot_parkir, status)
VALUES ('A', 1, true);

-- Masukkan data ke Tabel "reservasi"
INSERT INTO reservasi (user_id, parkir_id, waktu_reservasi)
VALUES (1, 1, CURRENT_TIMESTAMP);

-- Masukkan data ke Tabel "riwayat_transaksi"
INSERT INTO riwayat_transaksi (reservasi_id, durasi, waktu_keluar, jumlah_pembayaran)
VALUES (1, '2 hours', CURRENT_TIMESTAMP, 10);