const levels = [
    { title: "Matematika", questions: generateMathQuestions() },
    { title: "Kimia", questions: generateChemistryQuestions() },
    { title: "Sejarah Dunia", questions: generateHistoryQuestions() }
];

let currentLevel = 0;
let currentQuestionIndex = 0;
let correctAnswers = 0;

function startGame() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("level-selection").style.display = "block";
    displayLevels();
}

function displayLevels() {
    let levelContainer = document.getElementById("levels");
    levelContainer.innerHTML = "";

    levels.forEach((level, index) => {
        let button = document.createElement("button");
        button.innerText = level.title;
        button.classList.add("level-button");
        button.onclick = () => startLevel(index);
        levelContainer.appendChild(button);
    });
}

function startLevel(index) {
    currentLevel = index;
    currentQuestionIndex = 0;
    correctAnswers = 0;

    document.getElementById("level-selection").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("level-title").innerText = levels[index].title;

    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < levels[currentLevel].questions.length) {
        document.getElementById("question").innerText = levels[currentLevel].questions[currentQuestionIndex].question;
        document.getElementById("question-number").innerText = `Soal ${currentQuestionIndex + 1} dari ${levels[currentLevel].questions.length}`;
        document.getElementById("answer").value = "";
    } else {
        endLevel();
    }
}

function checkAnswer() {
    let answerInput = document.getElementById("answer").value.trim();
    let correctAnswer = levels[currentLevel].questions[currentQuestionIndex].answer;

    if (answerInput.toLowerCase() === correctAnswer.toLowerCase()) {
        correctAnswers++;
        document.getElementById("feedback").innerText = "Benar!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").innerText = "Salah! Jawaban yang benar: " + correctAnswer;
        document.getElementById("feedback").style.color = "red";
    }

    currentQuestionIndex++;

    setTimeout(() => {
        document.getElementById("feedback").innerText = "";
        loadQuestion();
    }, 1000);
}

function endLevel() {
    alert(`Level selesai! Skor Anda: ${correctAnswers} dari ${levels[currentLevel].questions.length}`);
    document.getElementById("game").style.display = "none";
    document.getElementById("level-selection").style.display = "block";
    displayLevels();
}


// **50 Soal Matematika**
function generateMathQuestions() {return [
    { question: "Berapakah hasil dari 5 + 7?", answer: "12" },
    { question: "Berapakah hasil dari 9 × 6?", answer: "54" },
    { question: "Jika x = 4, berapakah nilai dari 2x + 3?", answer: "11" },
    { question: "Berapakah hasil dari 144 ÷ 12?", answer: "12" },
    { question: "Berapakah akar kuadrat dari 64?", answer: "8" },
    { question: "Berapakah hasil dari 15 - 7?", answer: "8" },
    { question: "Berapakah luas persegi dengan sisi 5 cm?", answer: "25" },
    { question: "Jika y = 10 dan z = 3, berapakah nilai y - z?", answer: "7" },
    { question: "Berapakah hasil dari 2³?", answer: "8" },
    { question: "Berapakah keliling segitiga dengan sisi 3 cm, 4 cm, dan 5 cm?", answer: "12" },
    { question: "Jika sebuah lingkaran memiliki jari-jari 7 cm, berapakah luasnya? (Gunakan π = 3.14)", answer: "153.86" },
    { question: "Berapakah hasil dari 21 × 4?", answer: "84" },
    { question: "Berapakah hasil dari 81 ÷ 9?", answer: "9" },
    { question: "Berapakah volume kubus dengan sisi 3 cm?", answer: "27" },
    { question: "Berapakah 10% dari 250?", answer: "25" },
    { question: "Jika x² = 49, berapakah nilai x?", answer: "7" },
    { question: "Berapakah hasil dari 6! (6 faktorial)?", answer: "720" },
    { question: "Jika sebuah segitiga memiliki alas 10 cm dan tinggi 6 cm, berapakah luasnya?", answer: "30" },
    { question: "Berapakah hasil dari 3 × (4 + 5)?", answer: "27" },
    { question: "Jika sebuah balok memiliki panjang 8 cm, lebar 5 cm, dan tinggi 2 cm, berapakah volumenya?", answer: "80" },
    { question: "Berapakah hasil dari 100 ÷ 25?", answer: "4" },
    { question: "Jika a = 7 dan b = 2, berapakah hasil dari a² - b²?", answer: "45" },
    { question: "Berapakah hasil dari 2⁵?", answer: "32" },
    { question: "Berapakah jumlah sudut dalam segitiga?", answer: "180" },
    { question: "Jika luas persegi panjang adalah 40 cm² dan lebarnya 5 cm, berapakah panjangnya?", answer: "8" },
    { question: "Berapakah hasil dari 4³?", answer: "64" },
    { question: "Jika x + 3 = 10, berapakah nilai x?", answer: "7" },
    { question: "Berapakah hasil dari 7 × 8?", answer: "56" },
    { question: "Berapakah hasil dari 1000 ÷ 25?", answer: "40" },
    { question: "Jika keliling lingkaran adalah 31.4 cm (π = 3.14), berapakah diameternya?", answer: "10" },
    { question: "Berapakah hasil dari 14²?", answer: "196" },
    { question: "Jika x - 5 = 12, berapakah nilai x?", answer: "17" },
    { question: "Berapakah hasil dari 2 × 3 × 4?", answer: "24" },
    { question: "Sebuah segitiga sama kaki memiliki dua sisi yang masing-masing 6 cm dan alas 4 cm. Berapakah kelilingnya?", answer: "16" },
    { question: "Berapakah hasil dari 125^(1/3)?", answer: "5" },
    { question: "Berapakah luas permukaan kubus dengan sisi 5 cm?", answer: "150" },
    { question: "Jika 5x = 20, berapakah nilai x?", answer: "4" },
    { question: "Berapakah hasil dari 9 × 11?", answer: "99" },
    { question: "Jika sebuah tabung memiliki tinggi 10 cm dan jari-jari 7 cm, berapakah volumenya? (Gunakan π = 3.14)", answer: "1538.6" },
    { question: "Berapakah hasil dari 8! (8 faktorial)?", answer: "40320" },
    { question: "Jika jumlah dua sudut dalam segitiga adalah 90°, berapakah besar sudut ketiga?", answer: "90" },
    { question: "Berapakah hasil dari 27^(1/3)?", answer: "3" },
    { question: "Berapakah hasil dari 5⁴?", answer: "625" },
    { question: "Jika sisi miring segitiga siku-siku adalah 13 cm dan satu sisinya 5 cm, berapakah panjang sisi lainnya?", answer: "12" },
    { question: "Berapakah jumlah sudut dalam segi lima?", answer: "540" },
    { question: "Jika x³ = 125, berapakah nilai x?", answer: "5" },
    { question: "Berapakah hasil dari 3⁵?", answer: "243" },
    { question: "Sebuah prisma segitiga memiliki alas segitiga 6 cm² dan tinggi prisma 10 cm. Berapakah volumenya?", answer: "60" },
    { question: "Berapakah hasil dari 25 × 4?", answer: "100" },
    { question: "Jika suatu segitiga memiliki sudut 60° dan 45°, berapakah besar sudut ketiga?", answer: "75°" },
];
}

// **50 Soal Kimia**
function generateChemistryQuestions() {
    return [
    { question: "Apa simbol kimia untuk air?", answer: "H2O" },
    { question: "Unsur paling ringan di tabel periodik adalah?", answer: "Hidrogen" },
    { question: "Apa simbol kimia untuk emas?", answer: "Au" },
    { question: "Gas yang kita hirup untuk bernapas adalah?", answer: "Oksigen" },
    { question: "Apa rumus kimia untuk karbon dioksida?", answer: "CO2" },
    { question: "Siapakah penemu tabel periodik unsur?", answer: "Dmitri Mendeleev" },
    { question: "Berapa jumlah proton dalam atom karbon?", answer: "6" },
    { question: "Gas yang menyebabkan efek rumah kaca utama adalah?", answer: "Karbon dioksida" },
    { question: "Apa nama unsur dengan simbol Fe?", answer: "Besi" },
    { question: "pH dari larutan netral adalah?", answer: "7" },
    { question: "Unsur yang banyak ditemukan dalam garam dapur adalah?", answer: "Natrium" },
    { question: "Apa rumus kimia untuk asam sulfat?", answer: "H2SO4" },
    { question: "Apa nama gas mulia dengan simbol He?", answer: "Helium" },
    { question: "Bahan utama dalam pembuatan kaca adalah?", answer: "Silikon dioksida" },
    { question: "Apa unsur paling elektronegatif di tabel periodik?", answer: "Fluor" },
    { question: "Apa nama senyawa NaCl?", answer: "Garam dapur" },
    { question: "Logam yang paling reaktif adalah?", answer: "Fransium" },
    { question: "Apa rumus kimia dari amonia?", answer: "NH3" },
    { question: "Apa gas utama dalam atmosfer bumi?", answer: "Nitrogen" },
    { question: "Zat yang menyebabkan warna hijau pada daun adalah?", answer: "Klorofil" },
    { question: "Apa simbol kimia untuk perak?", answer: "Ag" },
    { question: "Apa nama proses perubahan cair menjadi gas?", answer: "Evaporasi" },
    { question: "Apa unsur utama dalam intan?", answer: "Karbon" },
    { question: "Apa rumus kimia untuk metana?", answer: "CH4" },
    { question: "Logam yang dapat ditempa dengan sangat baik adalah?", answer: "Emas" },
    { question: "Gas yang membuat balon udara naik adalah?", answer: "Helium" },
    { question: "Apa unsur terbanyak dalam tubuh manusia?", answer: "Oksigen" },
    { question: "Berapakah nomor atom oksigen?", answer: "8" },
    { question: "Apa nama proses fotosintesis menghasilkan oksigen?", answer: "Fotolisis" },
    { question: "Apa unsur radioaktif yang digunakan dalam reaktor nuklir?", answer: "Uranium" },
    { question: "Apa yang menyebabkan hujan asam?", answer: "Asam sulfat dan asam nitrat" },
    { question: "Apa rumus kimia untuk glukosa?", answer: "C6H12O6" },
    { question: "Zat yang digunakan dalam baterai lithium-ion?", answer: "Lithium" },
    { question: "Apa unsur dengan simbol K?", answer: "Kalium" },
    { question: "Nama lain dari vitamin C dalam kimia adalah?", answer: "Asam askorbat" },
    { question: "Reaksi eksotermik menghasilkan apa?", answer: "Panas" },
    { question: "Zat yang dapat mempercepat reaksi tanpa ikut bereaksi disebut?", answer: "Katalis" },
    { question: "Apa gas yang dapat menyebabkan korosi pada besi?", answer: "Oksigen" },
    { question: "Apa nama unsur dengan simbol Pb?", answer: "Timbal" },
    { question: "Gas yang digunakan untuk mengisi lampu neon adalah?", answer: "Neon" },
    { question: "Apa yang menyebabkan warna biru pada api gas?", answer: "Pembakaran sempurna" },
    { question: "Zat yang menyebabkan karat pada besi?", answer: "Oksigen dan air" },
    { question: "Senyawa apa yang terdapat dalam cuka?", answer: "Asam asetat" },
    { question: "Apa unsur utama dalam baja?", answer: "Besi" },
    { question: "Apa rumus kimia untuk etanol?", answer: "C2H5OH" },
    { question: "Apa unsur yang banyak terdapat dalam tulang manusia?", answer: "Kalsium" },
    { question: "Zat yang digunakan dalam termometer lama sebelum dilarang?", answer: "Air raksa" },
    { question: "Apa nama lain dari batu kapur dalam kimia?", answer: "Kalsium karbonat" },
    { question: "Apa simbol kimia untuk unsur emas?", answer: "Au" },
    { question: "Apa jenis ikatan yang terjadi antara atom karbon dalam gas etena (C₂H₄)?", answer: "Ikatan rangkap" },
];
}

// **50 Soal Sejarah Dunia**
function generateHistoryQuestions() {return [
    { question: "Siapa penemu mesin cetak?", answer: "Johannes Gutenberg" },
    { question: "Pada tahun berapa Perang Dunia I dimulai?", answer: "1914" },
    { question: "Negara mana yang pertama kali mendaratkan manusia di bulan?", answer: "Amerika Serikat" },
    { question: "Siapa presiden pertama Amerika Serikat?", answer: "George Washington" },
    { question: "Kota mana yang dijuluki sebagai tempat lahirnya demokrasi?", answer: "Athena" },
    { question: "Siapa penulis 'The Communist Manifesto'?", answer: "Karl Marx" },
    { question: "Apa nama kapal yang membawa para penjelajah Eropa pertama ke Amerika pada 1492?", answer: "Santa Maria" },
    { question: "Apa nama kerajaan yang dipimpin oleh Julius Caesar?", answer: "Romawi" },
    { question: "Negara mana yang membangun Tembok Besar China?", answer: "China" },
    { question: "Siapa penemu teori gravitasi?", answer: "Isaac Newton" },
    { question: "Siapa ratu Inggris yang memerintah selama Era Victoria?", answer: "Ratu Victoria" },
    { question: "Revolusi Perancis dimulai pada tahun berapa?", answer: "1789" },
    { question: "Siapa yang terkenal dengan pidatonya 'I Have a Dream'?", answer: "Martin Luther King Jr." },
    { question: "Siapa pemimpin Uni Soviet selama Perang Dunia II?", answer: "Joseph Stalin" },
    { question: "Siapa pemimpin yang mendirikan Kekaisaran Mongolia?", answer: "Genghis Khan" },
    { question: "Apa nama perang antara Amerika Serikat dan Uni Soviet yang terjadi tanpa pertempuran langsung?", answer: "Perang Dingin" },
    { question: "Siapa presiden Amerika Serikat selama Perang Saudara Amerika?", answer: "Abraham Lincoln" },
    { question: "Apa nama pesawat yang menjatuhkan bom atom di Hiroshima?", answer: "Enola Gay" },
    { question: "Siapa pelaut Portugis yang pertama kali mengelilingi dunia?", answer: "Ferdinand Magellan" },
    { question: "Apa nama perjanjian yang mengakhiri Perang Dunia I?", answer: "Perjanjian Versailles" },
    { question: "Siapa pemimpin Nazi Jerman selama Perang Dunia II?", answer: "Adolf Hitler" },
    { question: "Apa nama keajaiban dunia kuno yang digunakan sebagai mercusuar?", answer: "Mercusuar Alexandria" },
    { question: "Siapa tokoh yang bertanggung jawab atas Deklarasi Kemerdekaan Amerika Serikat?", answer: "Thomas Jefferson" },
    { question: "Kerajaan Mesir Kuno dipimpin oleh raja yang disebut?", answer: "Firaun" },
    { question: "Siapa penjelajah yang menemukan jalur laut ke India?", answer: "Vasco da Gama" },
    { question: "Negara mana yang pertama kali menggunakan tank dalam peperangan?", answer: "Inggris" },
    { question: "Apa nama revolusi industri yang pertama kali terjadi di Inggris?", answer: "Revolusi Industri" },
    { question: "Siapa presiden Amerika Serikat selama Perang Dunia II?", answer: "Franklin D. Roosevelt" },
    { question: "Kaisar Perancis yang terkenal dengan invasi Eropanya adalah?", answer: "Napoleon Bonaparte" },
    { question: "Perang Saudara Amerika berlangsung dari tahun berapa hingga tahun berapa?", answer: "1861-1865" },
    { question: "Siapa yang membangun Taj Mahal?", answer: "Shah Jahan" },
    { question: "Apa nama suku asli Amerika yang bertemu dengan Columbus?", answer: "Taino" },
    { question: "Negara mana yang pertama kali menggunakan bubuk mesiu dalam perang?", answer: "China" },
    { question: "Siapa pemimpin terkenal dari Afrika Selatan yang menentang apartheid?", answer: "Nelson Mandela" },
    { question: "Apa nama peristiwa penyerangan Jepang terhadap Amerika pada 7 Desember 1941?", answer: "Serangan Pearl Harbor" },
    { question: "Kota kuno yang hancur karena letusan Gunung Vesuvius adalah?", answer: "Pompeii" },
    { question: "Bangsa Viking berasal dari wilayah mana?", answer: "Skandinavia" },
    { question: "Siapa yang menemukan Amerika bagi bangsa Eropa?", answer: "Christopher Columbus" },
    { question: "Apa nama perjanjian yang membagi dunia antara Spanyol dan Portugal?", answer: "Perjanjian Tordesillas" },
    { question: "Negara mana yang memprakarsai Revolusi Bolshevik?", answer: "Rusia" },
    { question: "Siapa pendiri Kekaisaran Ottoman?", answer: "Osman I" },
    { question: "Apa nama perang yang menyebabkan runtuhnya Kekaisaran Romawi Barat?", answer: "Perang Barbar" },
    { question: "Apa nama proyek yang menghasilkan bom atom pertama?", answer: "Proyek Manhattan" },
    { question: "Negara mana yang membangun Piramida Giza?", answer: "Mesir" },
    { question: "Siapa raja Inggris selama Revolusi Amerika?", answer: "Raja George III" },
    { question: "Siapa pemimpin terkenal dari India yang mempromosikan perlawanan tanpa kekerasan?", answer: "Mahatma Gandhi" },
    { question: "Siapa penjelajah yang pertama kali mencapai Kutub Selatan?", answer: "Roald Amundsen" },
    { question: "Siapa penulis buku 'The Prince' yang membahas strategi politik?", answer: "Niccolò Machiavelli" },
    { question: "Apa nama kota yang menjadi pusat peradaban Maya di Meksiko?", answer: "Chichen Itza" },
    { question: "Siapa raja Prancis yang dijuluki 'Raja Matahari'?", answer: "Louis XIV" },
];
    
}