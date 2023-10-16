// Fungsi untuk membaca file JSON lokal
function readLocalJSONFile() {
  fetch("coba.json") // Ganti dengan path file JSON sesuai dengan struktur direktori proyek Anda
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal membaca file JSON lokal");
      }
      return response.json();
    })
    .then((data) => {
      // Data yang diterima dari file JSON lokal
      const rates = data.rates;

      // Dapatkan rate EUR/USD atau data lain yang Anda butuhkan
      const eurToUsdRate = rates.EURUSD.rate;
      const timestamp = rates.EURUSD.timestamp;

      // Lakukan apa pun yang Anda inginkan dengan data ini di sini
      console.log(`Rate EUR/USD: ${eurToUsdRate}`);
      console.log(`Timestamp: ${timestamp}`);
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
}

// Panggil fungsi untuk membaca file JSON lokal
readLocalJSONFile();
