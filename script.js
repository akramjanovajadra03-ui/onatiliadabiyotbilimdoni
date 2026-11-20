
// Savol tuzilishi: [savol, to'g'ri javob, noto'g'ri 1, noto'g'ri 2, noto'g'ri 3, bo'lim]

const banks = {
  "C": [
    ["Qaysi qatorda barcha so‘zlar to‘g‘ri yozilgan?", "Ma’naviyat, e’tibor, mas’ul", "Manaviyat, e’tibor, mas’ul", "Ma’naviyat, etibor, ma’sul", "Ma’naviyat, e’tibor, masul", "Imlo"],
    ["Sinonim so‘zlar berilgan qatorni toping.", "Go‘zal, chiroyli, ko‘rkam", "Katta, kichik, ulkan", "Oq, qora, qizil", "Tez, sekin, baland", "Leksikologiya"],
    ["Qaysi so‘z ot turkumiga mansub?", "Do‘stlik", "Do‘stona", "Do‘stlashmoq", "Do‘stona", "Morfologiya"],
    ["«Kitoblar» so‘zida qaysi qo‘shimcha ko‘plik ma’nosini bildiradi?", "-lar", "-ning", "-ga", "-dan", "Morfologiya"],
    ["Qaysi qatorda faqat sifatlar berilgan?", "Aqlli, shirin, baland", "Kitob, daftar, qalam", "Yozmoq, o‘qimoq, kelmoq", "Tez, ertaga, kecha", "Morfologiya"],
    ["«Bahor keldi.» gapida ega qaysi so‘z?", "Bahor", "Keldi", "Bahor keldi", "Ega mavjud emas", "Sintaksis"],
    ["Qaysi so‘z fe’l hisoblanadi?", "Yugurmoq", "Yugurish", "Yuguruvchi", "Yugurik", "Morfologiya"],
    ["Qarama-qarshi ma’noli so‘zlar qanday ataladi?", "Antonimlar", "Sinonimlar", "Omonimlar", "Paronimlar", "Leksikologiya"],
    ["Alisher Navoiyning «Xamsa» asari nechta dostondan iborat?", "Besh", "To‘rt", "Olti", "Yetti", "Adabiyot"],
    ["«O‘tkan kunlar» romanining muallifi kim?", "Abdulla Qodiriy", "Cho‘lpon", "Oybek", "Abdulla Qahhor", "Adabiyot"]
  ],

  "C+": [
    ["Qaysi qatorda imloviy xato yo‘q?", "Taassurot, muomala, muvaffaqiyat", "Ta'surot, muomala, muvoffaqiyat", "Taassurot, muomila, muvaffaqiyat", "Taassurot, muomala, muvofaqiyat", "Imlo"],
    ["«Ko‘zi ochildi» iborasi qanday ma’noni anglatadi?", "Tushunib yetdi", "Uxlab qoldi", "Hayron bo‘ldi", "Ko‘rmay qoldi", "Frazeologiya"],
    ["Qaysi qatorda ravish berilgan?", "Ataylab", "Atayinlik", "Atayinchi", "Ataylabki", "Morfologiya"],
    ["«O‘quvchilar maktabga ketishdi» gapida kesim qaysi?", "Ketishdi", "O‘quvchilar", "Maktabga", "O‘quvchilar maktabga", "Sintaksis"],
    ["Qaysi so‘z yasama ot hisoblanadi?", "Ishchi", "Ish", "Ishlamoq", "Ishchan", "So‘z yasalishi"],
    ["Qaysi qatorda juft so‘z berilgan?", "Ota-ona", "Gulzor", "Kitobxon", "Paxtakor", "So‘z tarkibi"],
    ["«Men bugun kutubxonaga bordim» gapida hol qaysi so‘z?", "Bugun", "Men", "Kutubxonaga", "Bordim", "Sintaksis"],
    ["«Mehrobdan chayon» romanining muallifi kim?", "Abdulla Qodiriy", "Cho‘lpon", "Oybek", "G‘afur G‘ulom", "Adabiyot"],
    ["«Shum bola» qissasini kim yozgan?", "G‘afur G‘ulom", "Oybek", "Abdulla Qahhor", "Said Ahmad", "Adabiyot"],
    ["Qaysi gap so‘roq gap hisoblanadi?", "Bugun darsga borasanmi?", "Bugun darsga bordim.", "Bugun darsga bor!", "Bugun darsga borsak.", "Punktuatsiya"]
  ],

  "B": [
    ["Qaysi qatorda barcha so‘zlar qo‘shib yoziladi?", "Oqko‘ngil, belbog‘, kungaboqar", "Har kim, hech qachon, bir oz", "O‘z-o‘zidan, qip-qizil, katta-kichik", "Sotib olmoq, olib kelmoq, qaror qilmoq", "Imlo"],
    ["«Uning yuzidan tabassum arimadi» gapida «yuzidan» so‘zi qaysi kelishikda?", "Chiqish kelishigi", "Bosh kelishik", "Qaratqich kelishigi", "Jo‘nalish kelishigi", "Morfologiya"],
    ["Qaysi qatorda faqat ko‘makchilar berilgan?", "Bilan, uchun, kabi", "Va, ammo, lekin", "Kim, nima, qachon", "Juda, ancha, nihoyatda", "Yordamchi so‘zlar"],
    ["Qaysi gapda undalma qatnashgan?", "Aziz do‘stim, seni kutyapman.", "Do‘stim meni kutyapti.", "Men do‘stim bilan keldim.", "Do‘stim juda quvondi.", "Sintaksis"],
    ["Qaysi qatorda paronimlar berilgan?", "Asr — asir", "Go‘zal — chiroyli", "Katta — kichik", "Yuz — bet", "Leksikologiya"],
    ["«O‘tkan kunlar» romanidagi asosiy qahramonlardan biri kim?", "Otabek", "Farhod", "Qoravoy", "Anvar", "Adabiyot"],
    ["Cho‘lponning asl ismi qaysi javobda to‘g‘ri berilgan?", "Abdulhamid Sulaymon o‘g‘li", "Abdulla Qodiriy", "Muso Toshmuhammad o‘g‘li", "G‘afur G‘ulom", "Adabiyot"],
    ["Qaysi gapda uyushiq bo‘laklar mavjud?", "Bog‘da olma, o‘rik va shaftoli pishdi.", "Bog‘da mevalar pishdi.", "Bog‘ juda chiroyli edi.", "Biz bog‘ga bordik.", "Sintaksis"],
    ["«Alpomish» dostoni qaysi janrga mansub?", "Qahramonlik dostoni", "Roman", "Masal", "Hikoya", "Adabiyot"],
    ["Qaysi qatorda sifatdosh berilgan?", "Kelgan mehmon", "Tez yugurib", "Kitob o‘qish", "Chiroyli yozuv", "Morfologiya"]
  ],

  "B+": [
    ["Qaysi gapda kirish so‘z qatnashgan?", "Afsuski, bugun uchrasha olmadik.", "Bugun uchrashuv bo‘lib o‘tdi.", "Uchrashuv juda qiziqarli bo‘ldi.", "Biz uchrashuvga bordik.", "Sintaksis"],
    ["«O‘qigan» so‘zining grammatik shaklini aniqlang.", "O‘tgan zamon sifatdoshi", "Ravishdosh", "Harakat nomi", "Buyruq mayli", "Morfologiya"],
    ["Qaysi qatorda fe’lning orttirma nisbati berilgan?", "Yozdirdi", "Yozildi", "Yozishdi", "Yozindi", "Morfologiya"],
    ["Qaysi gapda sabab ergash gap mavjud?", "Yomg‘ir yog‘gani uchun, yo‘lga chiqmadi.", "U kelgach, suhbat boshlandi.", "Kim mehnat qilsa, u rohat ko‘radi.", "Qayerda birlik bo‘lsa, o‘sha yerda kuch bor.", "Sintaksis"],
    ["«Boburnoma» asarining muallifi kim?", "Zahiriddin Muhammad Bobur", "Alisher Navoiy", "Abdulla Qodiriy", "Ogahiy", "Adabiyot"],
    ["Qaysi qatorda ravishdosh mavjud?", "Kulib gapirdi", "Kulgili voqea", "Kulgi ovozi", "Kulmoq istagi", "Morfologiya"],
    ["Qaysi so‘zda tovush tushishi hodisasi yuz bergan?", "Og‘iz + im = og‘zim", "Kitob + im = kitobim", "Gul + lar = gullar", "Daraxt + lar = daraxtlar", "Fonetika"],
    ["«Kecha va kunduz» romanining muallifi kim?", "Cho‘lpon", "Oybek", "Abdulla Qahhor", "Hamid Olimjon", "Adabiyot"],
    ["Qaysi gapda shart ergash gap mavjud?", "Agar vaqtim bo‘lsa, siznikiga boraman.", "U kelganida, dars boshlangan edi.", "U kelgani uchun xursand bo‘ldim.", "Qayerga borsang, men ham boraman.", "Sintaksis"],
    ["Qaysi qatorda zidlov bog‘lovchisi berilgan?", "Biroq", "Chunki", "Agar", "Shuning uchun", "Yordamchi so‘zlar"]
  ],

  "A": [
    ["Qaysi gapda ajratilgan izohlovchi mavjud?", "Ukam, oilamizning kenjasi, universitetda o‘qiydi.", "Ukam universitetda o‘qiydi.", "Ukam bugun uyga keldi.", "Oilamiz katta va ahil.", "Sintaksis"],
    ["«O‘qituvchi» so‘zining yasalish tarkibini aniqlang.", "O‘qi + tuvchi", "O‘qit + uvchi", "O‘q + ituvchi", "O‘qituv + chi", "So‘z yasalishi"],
    ["Qaysi gapda shaxsi umumlashgan gap mavjud?", "Avval o‘yla, keyin so‘yla.", "Men kitob o‘qidim.", "Tong otdi.", "Ular maktabga ketishdi.", "Sintaksis"],
    ["Qaysi qatorda modal so‘z berilgan?", "Ehtimol", "Ammo", "Bilan", "Faqat", "Yordamchi so‘zlar"],
    ["«Sariq devni minib» asarining muallifi kim?", "Xudoyberdi To‘xtaboyev", "G‘afur G‘ulom", "Oybek", "Said Ahmad", "Adabiyot"],
    ["Qaysi gapda to‘ldiruvchi uyushib kelgan?", "Men kitob, daftar va qalam sotib oldim.", "Men do‘konga bordim.", "U kitobni o‘qidi.", "Dars juda qiziqarli o‘tdi.", "Sintaksis"],
    ["Qaysi qatorda ko‘chma ma’noda qo‘llangan so‘z mavjud?", "Oltin kuz", "Oltin uzuk", "Oltin tanga", "Oltin bilaguzuk", "Leksikologiya"],
    ["«Navoiy» romanining muallifi kim?", "Oybek", "Abdulla Qodiriy", "Cho‘lpon", "Pirimqul Qodirov", "Adabiyot"],
    ["Qaysi gapda ravish holi mavjud?", "U tezda javob berdi.", "U kitobni o‘qidi.", "Men maktabga bordim.", "Uning ko‘zi chaqnadi.", "Sintaksis"],
    ["Qaysi qatorda undov so‘z berilgan?", "Eh", "Balki", "Chunki", "Bilan", "Morfologiya"]
  ],

  "A+": [
    ["Qaysi gapda murakkab qo‘shma gap mavjud?", "Quyosh botgach, havo salqinlashdi va biz uyga qaytdik.", "Quyosh botdi.", "Havo salqinlashdi.", "Biz uyga qaytdik.", "Sintaksis"],
    ["«Yuragi orqasiga tortdi» iborasining ma’nosini toping.", "Qattiq qo‘rqdi", "Juda quvondi", "Xafa bo‘ldi", "Shoshilib ketdi", "Frazeologiya"],
    ["Qaysi qatorda paronim so‘zlar to‘g‘ri izohlangan?", "Abzal — ot anjomi, afzal — yaxshiroq", "Asr — yuz yil, asir — zamon", "Davo — da’vo, ikkalasi bir ma’noda", "Amr — buyruq, amir — buyruq", "Leksikologiya"],
    ["Qaysi gapda uslubiy xatolik mavjud?", "Men bu masalaga o‘z fikrimni bildirdim.", "U masalani atroflicha tahlil qildi.", "Men bu masalaga o‘z shaxsiy fikrimni bildirdim.", "Tadqiqot natijalari e’lon qilindi.", "Uslubiyat"],
    ["«Mezon ul-avzon» asarining muallifi kim?", "Alisher Navoiy", "Zahiriddin Muhammad Bobur", "Abu Rayhon Beruniy", "Ogahiy", "Adabiyot"],
    ["Qaysi gapda kesim tarkibli uyushiq bo‘laklar mavjud?", "U ham o‘qidi, ham yozdi, ham izlandi.", "U kitob o‘qidi.", "U bugun keldi.", "Uning maqsadi katta.", "Sintaksis"],
    ["Qaysi qatorda eski o‘zbek adabiy tiliga oid so‘z uchraydi?", "Andin", "Bugun", "Ertaga", "Hozir", "Tarixiy leksika"],
    ["«Qutadg‘u bilig» asarining muallifi kim?", "Yusuf Xos Hojib", "Mahmud Koshg‘ariy", "Ahmad Yugnakiy", "Alisher Navoiy", "Adabiyot"],
    ["Qaysi gapda ergash gap bosh gapga «-sa» shart mayli orqali bog‘langan?", "Mehnat qilsang, rohat ko‘rasan.", "U kelgach, biz ketdik.", "Yomg‘ir yog‘gani uchun, uyda qoldik.", "U shunday gapirdiki, hamma tingladi.", "Sintaksis"],
    ["«Devonu lug‘otit turk» asarining muallifi kim?", "Mahmud Koshg‘ariy", "Yusuf Xos Hojib", "Ahmad Yassaviy", "Alisher Navoiy", "Adabiyot"]
  ]
};

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

let selectedLevel = "";
let studentName = "";
let questions = [];
let current = 0;
let correct = 0;
let timer = null;
let timeLeft = 20;
let locked = false;
let history = [];

document.querySelectorAll(".level").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".level").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    selectedLevel = button.dataset.level;
  });
});

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

document.getElementById("startBtn").addEventListener("click", () => {
  studentName = document.getElementById("studentName").value.trim();

  if (!studentName) {
    alert("Ism va familiyangizni kiriting!");
    return;
  }

  if (!selectedLevel) {
    alert("Avval test darajasini tanlang!");
    return;
  }

  startTest();
});

function startTest() {
  clearInterval(timer);

  questions = shuffle(banks[selectedLevel]).slice(0, 10).map(item => {
    const options = shuffle([
      { text: item[1], correct: true },
      { text: item[2], correct: false },
      { text: item[3], correct: false },
      { text: item[4], correct: false }
    ]);

    return {
      question: item[0],
      options,
      category: item[5]
    };
  });

  current = 0;
  correct = 0;
  history = [];

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  document.getElementById("levelLabel").textContent = "Daraja: " + selectedLevel;
  showQuestion();
}

function showQuestion() {
  locked = false;
  timeLeft = 20;

  const q = questions[current];

  document.getElementById("questionNumber").textContent = `${current + 1} / 10`;
  document.getElementById("progressBar").style.width = `${(current + 1) * 10}%`;
  document.getElementById("questionText").textContent = q.question;
  document.getElementById("category").textContent = q.category;
  document.getElementById("timer").textContent = timeLeft;
  document.getElementById("feedback").textContent = "";

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option.text}`;
    button.addEventListener("click", () => chooseAnswer(index));
    answers.appendChild(button);
  });

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      chooseAnswer(-1);
    }
  }, 1000);
}

function chooseAnswer(index) {
  if (locked) return;

  locked = true;
  clearInterval(timer);

  const q = questions[current];
  const selected = index === -1 ? null : q.options[index];
  const rightIndex = q.options.findIndex(option => option.correct);
  const isCorrect = selected?.correct === true;

  if (isCorrect) correct++;

  const buttons = [...document.querySelectorAll(".answer")];

  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === rightIndex) button.classList.add("correct");
    if (i === index && !isCorrect) button.classList.add("wrong");
  });

  document.getElementById("feedback").textContent =
    isCorrect ? "✓ To‘g‘ri javob!" :
    index === -1 ? "Vaqt tugadi!" : "✗ Noto‘g‘ri javob!";

  history.push({
    question: q.question,
    chosen: selected ? selected.text : "Javob berilmadi",
    correct: q.options[rightIndex].text,
    isCorrect
  });

  setTimeout(() => {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 900);
}

function showResult() {
  clearInterval(timer);
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  document.getElementById("studentResult").textContent =
    "Ishtirokchi: " + studentName;

  document.getElementById("score").textContent = correct * 10;
  document.getElementById("correctCount").textContent = correct;
  document.getElementById("wrongCount").textContent = 10 - correct;
  document.getElementById("levelResult").textContent = selectedLevel;

  const review = document.getElementById("review");
  review.innerHTML = "";

  history.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "review-item";

    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${item.question}`;

    const chosen = document.createElement("p");
    chosen.textContent = "Sizning javobingiz: " + item.chosen;
    chosen.className = item.isCorrect ? "right" : "wrong-text";

    const answer = document.createElement("p");
    answer.textContent = "To‘g‘ri javob: " + item.correct;
    answer.className = "right";

    card.append(title, chosen, answer);
    review.appendChild(card);
  });
}

document.getElementById("restartBtn").addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  document.getElementById("studentName").value = studentName;

  document.querySelectorAll(".level").forEach(button => {
    button.classList.toggle("active", button.dataset.level === selectedLevel);
  });
});
