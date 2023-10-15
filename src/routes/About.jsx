import PageHeading from "../components/PageHeading";

const About = () => {
  return (
    <section className=" bg-gray-800">
      <div className="py-16 px-4 mx-auto max-w-screen-md flex flex-col justify-center items-center min-h-screen">
        <PageHeading title="About App" />
        <div className="flex flex-col justify-center items-center text-white p-10 bg-gray-700 border border-gray-600 rounded-lg">
          <h1 className="text-3xl font-bold">Movie App</h1>
          <p>
            Movie App adalah sebuah aplikasi web untuk menampilkan daftar film
            yang telah diproduksi. Aplikasi berbasis Web yang dibuat ini
            mengambil data film dari{" "}
            <span>
              <a href="https://www.omdbapi.com/" className="underline">
                https://www.omdbapi.com/
              </a>
            </span>
            . Film-film yang saya ambil yaitu berhubungan dengan Marvel.
            Aplikasi Web ini dibuat untuk memenuhi Tugas Individu Mata Kuliah
            Pemrograman Web Lanjut Minggu ke-3, Terima Kasih.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
