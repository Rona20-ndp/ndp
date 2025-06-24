<!DOCTYPE html>
<html>
<head>
    <title>Pemesanan Tiket dengan Local Storage</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-8">
    <div class="max-w-md mx-auto">
        <h1 class="text-2xl font-bold mb-4">Pesan Tiket Bioskop</h1>
        
        <div class="mb-4">
            <label class="block mb-2">Pilih Film:</label>
            <select id="film" class="w-full p-2 border rounded">
                <option value="Hidup tanpa cerita">Hidup tanpa cerita</option>
                <option value="Dunia tidak sejahat itu">Dunia tidak sejahat itu</option>
                <option value="Tak ada yang tak mungkin">Tak ada yang tak mungkin</option>
            </select>
        </div>
        
        <div class="mb-4">
            <label class="block mb-2">Jumlah Tiket:</label>
            <input type="number" id="jumlah" min="1" value="1" class="w-full p-2 border rounded">
        </div>
        
        <div class="mb-4">
            <label class="block mb-2">Nama Pemesan:</label>
            <input type="text" id="nama" class="w-full p-2 border rounded">
        </div>
        
        <button onclick="simpanPesanan()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Pesan Tiket
        </button>
        
        <div id="daftarPesanan" class="mt-6 border-t pt-4">
            <h2 class="text-xl font-bold mb-2">Daftar Pesanan</h2>
            <!-- Daftar pesanan akan muncul di sini -->
        </div>
    </div>

    <script>
        // Fungsi untuk menyimpan pesanan ke local storage
        function simpanPesanan() {
            const film = document.getElementById('film').value;
            const jumlah = document.getElementById('jumlah').value;
            const nama = document.getElementById('nama').value;
            
            // Buat objek pesanan
            const pesanan = {
                id: Date.now(),  // ID unik
                film,
                jumlah,
                nama,
                tanggal: new Date().toLocaleString()
            };
            
            // Ambil data yang sudah ada dari local storage
            let semuaPesanan = JSON.parse(localStorage.getItem('pesanan_tiket')) || [];
            
            // Tambahkan pesanan baru
            semuaPesanan.push(pesanan);
            
            // Simpan kembali ke local storage
            localStorage.setItem('pesanan_tiket', JSON.stringify(semuaPesanan));
            
            // Tampilkan pesanan
            tampilkanPesanan();
            alert('Pesanan berhasil disimpan!');
        }
        
        // Fungsi untuk menampilkan daftar pesanan
        function tampilkanPesanan() {
            const container = document.getElementById('daftarPesanan');
            const semuaPesanan = JSON.parse(localStorage.getItem('pesanan_tiket')) || [];
            
            let html = '<div class="space-y-2">';
            if (semuaPesanan.length === 0) {
                html += '<p>Tidak ada pesanan</p>';
            } else {
                semuaPesanan.forEach(pesanan => {
                    html += `
                        <div class="p-3 border rounded">
                            <p><strong>${pesanan.film}</strong> (${pesanan.jumlah} tiket)</p>
                            <p>${pesanan.nama} - ${pesanan.tanggal}</p>
                            <button onclick="hapusPesanan(${pesanan.id})" class="text-red-500 text-sm mt-1">
                                Hapus
                            </button>
                        </div>
                    `;
                });
            }
            html += '</div>';
            
            container.innerHTML = '<h2 class="text-xl font-bold mb-2">Daftar Pesanan</h2>' + html;
        }

        // Fungsi untuk menghapus pesanan
        function hapusPesanan(id) {
            let semuaPesanan = JSON.parse(localStorage.getItem('pesanan_tiket')) || [];
            semuaPesanan = semuaPesanan.filter(pesanan => pesanan.id !== id);
            localStorage.setItem('pesanan_tiket', JSON.stringify(semuaPesanan));
            tampilkanPesanan();
        }
        
        // Tampilkan pesanan saat halaman dimuat
        tampilkanPesanan();
    </script>
</body>
</html>
