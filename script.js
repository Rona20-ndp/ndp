JavaScript (script.js)

const form = document.getElementById('absen-form');
const tabelAbsenBody = document.getElementById('tabel-absen-body');

let dataAbsen = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nomor = document.getElementById('nomor').value;
    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const kehadiran = document.getElementById('kehadiran').value;
    const data = {
        nomor: nomor,
        nama: nama,
        kelas: kelas,
        kehadiran: kehadiran
    };
    dataAbsen.push(data);
    tampilkanDataAbsen();
    form.reset();
});

function tampilkanDataAbsen() {
    tabelAbsenBody.innerHTML = '';
    dataAbsen.forEach((data, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.nomor}</td>
            <td>${data.nama}</td>
            <td>${data.kelas}</td>
            <td>${data.kehadiran}</td>
        `;
        tabelAbsenBody.appendChild(row);
    });
}


