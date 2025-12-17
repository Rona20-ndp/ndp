function validasi() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (nama === "" || email === "" || password === "") {
        alert("Semua field harus diisi!");
        return false;
    }
    return true;
}
