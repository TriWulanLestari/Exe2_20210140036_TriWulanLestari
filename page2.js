function kirimData(){
    var name = document.getElementById("nama").value
    var nik = document.getElementById("nik").value
    var JK = document.querySelector("input[name=JK]:checked").value
    var Alamat = document.getElementById("alamat").value
    var inputTanggal = document.getElementById("tanggalInput").value

    alert(
        "Nama : " + name +
        "\nNIK : " + nik +
        "\nJK : " + JK +
        "\nAlamat : " + Alamat +
        "\nTanggal : " + inputTanggal 
    )
}