// หนังสือเรียนภาษามลายู ชั้น อต.3
module.exports = {
  grade: 3,
  lede: "ฝึกออกเสียงคำและพยางค์ ตัวเลข วันและเดือน คำนามและคำสรรพนาม การแนะนำครอบครัว และเรื่องใกล้ตัวทางศาสนา เช่น ละหมาดวันศุกร์ การถือศีลอด และการบรรลุศาสนภาวะ 11 บท ทุกบทฟังเสียงคำศัพท์ได้ มีแบบฝึกหัดพร้อมเฉลย และแบบทดสอบตนเอง ใช้ภาษามลายูมาตรฐานทั้งเล่ม",
  lede_ms: "Berlatih menyebut perkataan dan suku kata, nombor, hari dan bulan, kata nama dan kata ganti nama, memperkenalkan keluarga, serta tajuk agama yang dekat dengan kehidupan seperti solat Jumaat, berpuasa dan akil baligh dalam 11 pelajaran. Setiap pelajaran disertakan sebutan perkataan yang boleh didengar, latihan beserta jawapan, dan kuiz kendiri. Seluruh buku menggunakan bahasa Melayu standard.",
  preface_ms: [
    "Buku teks Bahasa Melayu ini disediakan untuk murid Tahun 3 Kurikulum Pendidikan Islam Peringkat Awal. Buku ini memberi tumpuan kepada sebutan perkataan, frasa dan ayat, nombor dan bilangan, hari dan bulan, golongan kata (kata nama dan kata ganti nama), perbualan tentang keluarga, serta perkataan tentang kesihatan, permainan, solat Jumaat, berpuasa pada bulan Ramadan dan akil baligh.",
    "Kandungan buku ini dibahagikan kepada 11 pelajaran. Setiap pelajaran mengandungi objektif pembelajaran, isi pelajaran, latihan dan nilai murni. Di bahagian akhir buku terdapat glosari dan jawapan latihan. Bahasa yang digunakan ialah bahasa Melayu standard sepenuhnya.",
  ],
  indicators_ms: [
    "Menyebut huruf konsonan, huruf vokal dan suku kata yang didengar",
    "Menyebut perkataan, frasa dan ayat serta menyatakan maksud perkataan yang ditetapkan",
    "Membaca dan menulis perkataan, frasa dan ayat yang ditetapkan",
    "Mendengar, menyebut, membaca dan menulis nombor, bilangan dan golongan kata yang ditetapkan",
    "Berbual dan bertukar maklumat tentang diri sendiri dan keluarga menggunakan ayat yang mudah",
    "Mengenal pasti golongan kata",
    "Menghargai nilai dan kepentingan penggunaan bahasa Melayu yang ditetapkan",
  ],
  preface: [
    "หนังสือเรียนภาษามลายูเล่มนี้จัดทำขึ้นสำหรับผู้เรียนชั้นปีที่ 3 หลักสูตรอิสลามศึกษาตอนต้น (อต.3) เน้นการออกเสียงคำ วลี และประโยค ตัวเลขและจำนวนนับ วันและเดือน ชนิดของคำ (คำนามและคำสรรพนาม) การสนทนาแนะนำครอบครัว และคำศัพท์เกี่ยวกับสุขภาพ การละเล่น การละหมาดญุมอะฮ์ การถือศีลอดเดือนเราะมะฎอน และการบรรลุศาสนภาวะ",
    "เนื้อหาแบ่งเป็น 11 บท แต่ละบทมีจุดประสงค์การเรียนรู้ เนื้อหา แบบฝึกหัด และข้อคิด ท้ายเล่มมีอภิธานศัพท์และเฉลยแบบฝึกหัด ภาษาที่ใช้เป็นภาษามลายูมาตรฐาน (Bahasa Melayu Standard) ทั้งหมด",
  ],
  indicators: [
    "ออกเสียงพยัญชนะ สระและพยางค์จากการฟัง",
    "ออกเสียงคำ วลี ประโยคและบอกความหมายของคำศัพท์ที่กำหนด",
    "อ่านและเขียน คำ วลีและประโยคที่กำหนด",
    "ฟัง พูด อ่านและเขียนตัวเลข จำนวนนับ และชนิดของคำที่กำหนด",
    "สนทนาแลกเปลี่ยนข้อมูลเกี่ยวกับตนเอง ครอบครัวโดยการใช้ประโยคง่าย ๆ",
    "ระบุชนิดของคำ",
    "เห็นคุณค่าและความสำคัญในการใช้ภาษามลายูที่กำหนด",
  ],
  units: [
    {
      title: "Bunyi Huruf dan Suku Kata", th: "เสียงพยัญชนะ สระ และพยางค์", indicators: [1, 2, 7],
      objectives: ["Mengulang kaji bunyi huruf konsonan, huruf vokal dan suku kata dalam tulisan Rumi dan Jawi||ทบทวนเสียงพยัญชนะ สระ และพยางค์ทั้งอักษรรูมีและยาวี", "Membaca perkataan 2–3 suku kata dengan lancar||อ่านคำ 2–3 พยางค์ได้คล่อง"],
      sections: [
        { title: "Bunyi huruf konsonan dan vokal", blocks: [
          { type: "p", text: "Huruf **konsonan** bergabung dengan huruf **vokal** menjadi **suku kata**, dan suku kata bergabung menjadi **perkataan**.||พยัญชนะ (**konsonan**) รวมกับสระ (**vokal**) เกิดเป็นพยางค์ (**suku kata**) แล้วพยางค์รวมกันเป็นคำ (**perkataan**)" },
          { type: "table", head: ["konsonan + vokal", "suku kata", "Jawi"], widths: [3600, 2900, 2860], align: [null, "center", "center"], sizes: [null, 36, 40], rows: [
            ["b + a", "ba", "با"], ["s + o", "so", "سو"], ["l + i", "li", "لي"], ["t + u", "tu", "تو"], ["k + i", "ki", "کي"],
          ] },
        ] },
        { title: "Perkataan dua dan tiga suku kata  คำสองและสามพยางค์", blocks: [
          { type: "table", head: ["Perkataan||คำ", "Suku kata||แยกพยางค์", "Jawi", "Maksud||ความหมาย"], widths: [2300, 2700, 2000, 2360], bolds: [true], rows: [
            ["solat", "so – lat", "صلاة", "การละหมาด"], ["masjid", "mas – jid", "مسجد", "มัสยิด"], ["sekolah", "se – ko – lah", "سکوله", "โรงเรียน"],
            ["kopiah", "ko – pi – ah", "کوڤيه", "หมวกกปิเยาะห์"], ["sejadah", "se – ja – dah", "سجادة", "ผ้าละหมาด"],
          ] },
        ] },
      ],
      latihan: [
        { q: "Dengar guru, kemudian tulis suku kata yang didengar.||ฟังครู แล้วเขียนพยางค์ที่ได้ยิน", items: ["____", "____", "____", "____"] },
        { q: "Ceraikan perkataan kepada suku kata.||แยกคำเป็นพยางค์", items: ["sekolah  =  ________", "sejadah  =  ________", "masjid  =  ________"], answers: "se–ko–lah, se–ja–dah, mas–jid" },
        { q: "Baca perkataan kepada rakan dengan lancar.||อ่านคำให้เพื่อนฟังอย่างคล่องแคล่ว", items: ["solat  •  masjid  •  sekolah  •  kopiah  •  sejadah"] },
      ],
      nilai: "การอ่านคำได้ถูกต้องเป็นพื้นฐานของการเข้าใจความรู้ทั้งทางโลกและทางศาสนา",
      nilai_ms: "Membaca perkataan dengan betul ialah asas untuk memahami ilmu dunia dan ilmu agama.",
    },
    {
      title: "Nombor dan Bilangan", th: "ตัวเลขและจำนวนนับ", indicators: [4, 7],
      objectives: ["Membaca dan menulis nombor 1–20 dan puluhan dalam bahasa Melayu||อ่านและเขียนตัวเลข 1–20 และหลักสิบเป็นภาษามลายูได้", "Menggunakan nombor ordinal pertama, kedua, ketiga||ใช้คำบอกลำดับที่ pertama, kedua, ketiga ได้"],
      sections: [
        { title: "Nombor 1 – 10", blocks: [
          { type: "letters", cols: 5, size: 40, items: [["1", "satu"], ["2", "dua"], ["3", "tiga"], ["4", "empat"], ["5", "lima"], ["6", "enam"], ["7", "tujuh"], ["8", "lapan"], ["9", "sembilan"], ["10", "sepuluh"]] },
        ] },
        { title: "Nombor 11 ke atas", blocks: [
          { type: "table", head: ["Nombor||ตัวเลข", "Bahasa Melayu", "Peraturan||หลักการ"], widths: [1400, 3600, 4360], align: ["center"], rows: [
            ["11", "sebelas", "nombor khas||เลขพิเศษ"], ["12", "dua belas", "nombor + **belas**||เลข + **belas**"], ["15", "lima belas", "nombor + **belas**||เลข + **belas**"],
            ["20", "dua puluh", "เลข + **puluh**"], ["25", "dua puluh lima", "puluhan + sa||หลักสิบ + หลักหน่วย"], ["100", "seratus", "**se** + ratus"],
          ] },
        ] },
        { title: "Nombor ordinal  ลำดับที่", blocks: [
          { type: "p", text: "Gunakan **ke-** di hadapan nombor, kecuali *pertama*.||ใช้ **ke-** นำหน้าตัวเลข ยกเว้น *pertama* (ที่หนึ่ง)" },
          { type: "vocab", noJawi: true, rows: [["pertama", "ที่หนึ่ง"], ["kedua", "ที่สอง"], ["ketiga", "ที่สาม"], ["keempat", "ที่สี่"], ["kelima", "ที่ห้า"]] },
          { type: "pattern", lines: ["Rukun Islam yang **pertama** ialah mengucap dua kalimah syahadah.", "Solat **lima** waktu sehari semalam."] },
        ] },
      ],
      latihan: [
        { q: "Tulis nombor dalam bahasa Melayu.||เขียนตัวเลขเป็นภาษามลายู", items: ["3  ________", "8  ________", "11  ________", "17  ________", "30  ________"], answers: "tiga, lapan, sebelas, tujuh belas, tiga puluh" },
        { q: "Tulis dalam bentuk angka.||เขียนเป็นตัวเลข", items: ["sembilan  ____", "dua belas  ____", "empat puluh  ____", "seratus  ____"], answers: "9, 12, 40, 100" },
        { q: "Isikan nombor ordinal.||เติมคำบอกลำดับ", items: ["Rukun Islam yang ________ ialah solat.", "Rukun Islam yang ________ ialah puasa."], answers: "kedua, ketiga" },
      ],
      nilai: "ตัวเลขช่วยให้เรานับรอกอัตละหมาดและนับวันถือศีลอดได้ถูกต้อง",
      nilai_ms: "Nombor membantu kita mengira rakaat solat dan hari berpuasa dengan betul.",
    },
    {
      title: "Hari dan Bulan", th: "วันและเดือน", indicators: [4, 7],
      objectives: ["Menyebut nama 7 hari dalam bahasa Melayu||บอกชื่อวันทั้ง 7 วันเป็นภาษามลายูได้", "Menyebut nama bulan dalam takwim Islam||บอกชื่อเดือนในปฏิทินอิสลามได้"],
      sections: [
        { title: "Hari dalam seminggu  วันในหนึ่งสัปดาห์", blocks: [
          { type: "vocab", rows: [["Ahad", "احد", "วันอาทิตย์"], ["Isnin", "اثنين", "วันจันทร์"], ["Selasa", "ثلاث", "วันอังคาร"], ["Rabu", "رابو", "วันพุธ"], ["Khamis", "خميس", "วันพฤหัสบดี"], ["Jumaat", "جمعة", "วันศุกร์"], ["Sabtu", "سبتو", "วันเสาร์"]] },
        ] },
        { title: "Bulan Islam  เดือนในปฏิทินอิสลาม", blocks: [
          { type: "table", head: ["Bil.||ที่", "Bulan", "Bil.||ที่", "Bulan"], widths: [900, 3780, 900, 3780], align: ["center", null, "center"], bolds: [false, true, false, true], rows: [
            ["1", "Muharam", "7", "Rejab"], ["2", "Safar", "8", "Syaaban"], ["3", "Rabiulawal", "9", "Ramadan"],
            ["4", "Rabiulakhir", "10", "Syawal"], ["5", "Jamadilawal", "11", "Zulkaedah"], ["6", "Jamadilakhir", "12", "Zulhijah"],
          ] },
          { type: "pattern", lines: ["Hari ini hari **Jumaat**.||Hari ini hari **Jumaat**.  (วันนี้วันศุกร์)", "Kita berpuasa pada bulan **Ramadan**.", "Hari Raya Aidilfitri pada **1 Syawal**."] },
        ] },
      ],
      latihan: [
        { q: "Tulis hari yang berikutnya.||เขียนวันถัดไป", items: ["Ahad  →  ________", "Rabu  →  ________", "Jumaat  →  ________"], answers: "Isnin, Khamis, Sabtu" },
        { q: "Jawab soalan.||ตอบคำถาม", items: ["Kita solat Jumaat pada hari apa?  ________", "Kita berpuasa pada bulan apa?  ________", "Bulan selepas Ramadan ialah bulan ________."], answers: "Jumaat, Ramadan, Syawal" },
        { q: "Susun bulan Islam mengikut urutan yang betul: Syawal, Rejab, Ramadan, Syaaban||เรียงเดือนอิสลามให้ถูกลำดับ: Syawal, Rejab, Ramadan, Syaaban", lines: 1, answers: "Rejab, Syaaban, Ramadan, Syawal" },
      ],
      nilai: "วันศุกร์เป็นวันที่ประเสริฐของสัปดาห์ และเดือนเราะมะฎอนเป็นเดือนที่ประเสริฐของปี",
      nilai_ms: "Hari Jumaat ialah hari yang paling mulia dalam seminggu, dan bulan Ramadan ialah bulan yang paling mulia dalam setahun.",
    },
    {
      title: "Keluarga Saya", th: "การสนทนาแนะนำครอบครัว", indicators: [3, 5, 7],
      objectives: ["Berbual dan bertukar maklumat tentang keluarga||สนทนาแลกเปลี่ยนข้อมูลเกี่ยวกับครอบครัวได้", "Menggunakan ayat tanya yang mudah tentang keluarga||ใช้ประโยคคำถามง่าย ๆ เกี่ยวกับครอบครัวได้"],
      sections: [
        { title: "Mari bertutur  มาพูดกันเถอะ", blocks: [
          { type: "dialog", lines: [
            ["Siti", "Berapa orang adik-beradik kamu?"],
            ["Nurul", "Kami tiga beradik. Saya anak sulung."],
            ["Siti", "Apa pekerjaan ayah kamu?"],
            ["Nurul", "Ayah saya seorang guru. Ibu saya seorang peniaga."],
            ["Siti", "Kamu tinggal dengan siapa?"],
            ["Nurul", "Saya tinggal dengan ayah, ibu, adik-adik dan nenek."],
          ] },
          { type: "vocab", noJawi: true, rows: [["adik-beradik", "พี่น้อง"], ["anak sulung", "ลูกคนโต"], ["anak bongsu", "ลูกคนสุดท้อง"], ["pekerjaan", "อาชีพ"], ["guru", "ครู"], ["peniaga", "พ่อค้า แม่ค้า"], ["petani", "ชาวนา เกษตรกร"], ["nelayan", "ชาวประมง"]] },
        ] },
      ],
      latihan: [
        { q: "Padankan soalan dengan jawapan.||จับคู่คำถามกับคำตอบ", table: { head: ["Soalan", "Jawapan"], widths: [4680, 4680], rows: [["1) Berapa orang adik-beradik kamu?", "ก.  Ayah saya seorang petani."], ["2) Apa pekerjaan ayah kamu?", "ข.  Saya tinggal di Yala."], ["3) Kamu tinggal di mana?", "ค.  Kami empat beradik."]] }, answers: "1–ค, 2–ก, 3–ข" },
        { q: "Jawab soalan tentang keluarga kamu.||ตอบคำถามเกี่ยวกับครอบครัวของตนเอง", items: ["Berapa orang adik-beradik kamu?  ____________________", "Apa pekerjaan ibu kamu?  ____________________"] },
        { q: "Temu bual seorang rakan tentang keluarganya, kemudian ceritakan kepada kelas.||สัมภาษณ์เพื่อน 1 คนเรื่องครอบครัว แล้วเล่าให้ชั้นเรียนฟัง" },
      ],
      nilai: "ครอบครัวที่อบอุ่นเริ่มจากการพูดคุยกันด้วยความรักและความเคารพ",
      nilai_ms: "Keluarga yang bahagia bermula dengan berbual sesama ahli keluarga dengan penuh kasih sayang dan hormat.",
    },
    {
      title: "Kata Nama", th: "คำนาม", indicators: [4, 6, 7],
      objectives: ["Menyatakan perbezaan antara kata nama am dan kata nama khas||บอกความแตกต่างของคำนามทั่วไปและคำนามเฉพาะได้", "Mengenal pasti kata nama dalam ayat||ระบุคำนามในประโยคได้"],
      sections: [
        { title: "Kata nama am dan kata nama khas", blocks: [
          { type: "table", head: ["Jenis||ชนิด", "Maksud||ความหมาย", "Contoh||ตัวอย่าง"], widths: [2300, 3300, 3760], bolds: [true], rows: [
            ["Kata nama am", "Nama bagi benda secara umum, dimulakan dengan huruf kecil||คำนามทั่วไป เรียกสิ่งทั่ว ๆ ไป ขึ้นต้นด้วยอักษรพิมพ์เล็ก", "baju, sekolah, guru, masjid, kucing"],
            ["Kata nama khas", "Nama khusus bagi orang, tempat, hari dan bulan, dimulakan dengan huruf besar||คำนามเฉพาะ เรียกชื่อเฉพาะของคน สถานที่ วัน เดือน ขึ้นต้นด้วยอักษรพิมพ์ใหญ่", "Ali, Fatimah, Pattani, Thailand, Ramadan, Jumaat"],
          ] },
          { type: "pattern", title: "Contoh dalam ayat||ตัวอย่างในประโยค", lines: ["**Ali** (khas) pergi ke **masjid** (am).", "**Guru** (am) saya tinggal di **Yala** (khas)."] },
        ] },
      ],
      latihan: [
        { q: "Kelaskan perkataan kepada kata nama am atau kata nama khas.||จัดคำเป็น kata nama am หรือ kata nama khas", items: ["buku  ________", "Narathiwat  ________", "Aminah  ________", "kerusi  ________", "Ramadan  ________"], answers: "am, khas, khas, am, khas" },
        { q: "Garis kata nama dalam ayat.||ขีดเส้นใต้คำนามในประโยค", items: ["Fatimah membaca buku.", "Ayah pergi ke pasar.", "Kami solat di masjid."], answers: "Fatimah, buku; Ayah, pasar; masjid" },
        { q: "Tulis 3 kata nama khas (nama kamu, nama wilayah dan nama sekolah).||เขียนคำนามเฉพาะ 3 คำ (ชื่อตนเอง ชื่อจังหวัด ชื่อโรงเรียน)", lines: 1 },
      ],
      nilai: "การเขียนชื่อคนและสถานที่ให้ถูกต้องด้วยอักษรพิมพ์ใหญ่แสดงความใส่ใจและให้เกียรติผู้อื่น",
      nilai_ms: "Menulis nama orang dan tempat dengan betul menggunakan huruf besar menunjukkan sikap prihatin dan menghormati orang lain.",
    },
    {
      title: "Kata Ganti Nama", th: "คำสรรพนาม", indicators: [4, 6, 7],
      objectives: ["Menggunakan kata ganti nama diri pertama, kedua dan ketiga dengan betul||ใช้คำสรรพนามบุรุษที่ 1, 2 และ 3 ได้ถูกต้อง", "Memilih kata ganti nama yang sopan mengikut orang yang dimaksudkan||เลือกคำสรรพนามที่สุภาพตามบุคคลได้"],
      sections: [
        { title: "Kata ganti nama diri", blocks: [
          { type: "table", head: ["Diri||บุรุษ", "Tunggal||เอกพจน์", "Jamak||พหูพจน์"], widths: [2400, 3480, 3480], bolds: [true], rows: [
            ["Pertama (penutur)||ที่ 1 (ผู้พูด)", "**saya** ฉัน ผม", "**kami** พวกเรา (ไม่รวมผู้ฟัง)  ·  **kita** พวกเรา (รวมผู้ฟัง)"],
            ["Kedua (pendengar)||ที่ 2 (ผู้ฟัง)", "**kamu / awak** เธอ  ·  **anda** คุณ (สุภาพ)", "**kamu semua** พวกเธอ"],
            ["Ketiga (orang yang diperkatakan)||ที่ 3 (ผู้ถูกกล่าวถึง)", "**dia** เขา  ·  **beliau** ท่าน (ให้เกียรติ)", "**mereka** พวกเขา"],
          ] },
          { type: "note", title: "Gunakan dengan sopan||ใช้ให้สุภาพ", lines: ["Apabila bercakap tentang guru, ibu bapa atau orang yang lebih tua, gunakan **beliau** dan bukan *dia*, contohnya *Ustaz Ahmad guru saya. Beliau sangat baik.*||เวลาพูดถึงครู พ่อแม่ หรือผู้ใหญ่ ให้ใช้ **beliau** แทน *dia* เช่น *Ustaz Ahmad guru saya. Beliau sangat baik.*"] },
        ] },
      ],
      latihan: [
        { q: "Pilih kata ganti nama yang sesuai  [ saya · dia · mereka · kita · beliau ]||เลือกคำสรรพนามที่เหมาะสม  [ saya · dia · mereka · kita · beliau ]", items: ["______ pelajar tahun tiga.", "Imam itu baik. ______ selalu menasihati kami.", "Ali dan Abu kawan saya. ______ rajin.", "Mari ______ pergi ke masjid bersama-sama."], answers: "Saya, Beliau, Mereka, kita" },
        { q: "kami atau kita?||kami หรือ kita?", items: ["(bercakap dengan rakan dalam kumpulan) Mari ______ belajar.||(พูดกับเพื่อนในกลุ่ม) Mari ______ belajar.", "(memberitahu guru) ______ sudah siap, cikgu.||(บอกครู) ______ sudah siap, cikgu."], answers: "kita, Kami" },
        { q: "Tulis 1 ayat menggunakan beliau.||เขียนประโยคโดยใช้ beliau 1 ประโยค", lines: 1 },
      ],
      nilai: "การเลือกใช้คำสรรพนามที่สุภาพเป็นส่วนหนึ่งของอัคลาก (มารยาท) ที่ดีของมุสลิม",
      nilai_ms: "Memilih kata ganti nama yang sopan ialah sebahagian daripada akhlak mulia seorang Muslim.",
    },
    {
      title: "Kesihatan", th: "สุขภาพ", indicators: [2, 3, 7],
      objectives: ["Membaca dan menulis perkataan dan frasa tentang kesihatan||อ่านและเขียนคำศัพท์และวลีเกี่ยวกับสุขภาพได้", "Menyatakan tanda-tanda sakit yang mudah dalam bahasa Melayu||บอกอาการเจ็บป่วยง่าย ๆ เป็นภาษามลายูได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["sihat", "แข็งแรง สุขภาพดี"], ["sakit", "ป่วย เจ็บ"], ["demam", "ไข้"], ["batuk", "ไอ"], ["sakit kepala", "ปวดศีรษะ"], ["sakit perut", "ปวดท้อง"], ["ubat", "ยา"], ["doktor", "หมอ"], ["klinik", "คลินิก"], ["bersenam", "ออกกำลังกาย"]] },
        ] },
        { title: "Mari bertutur  มาพูดกันเถอะ", blocks: [
          { type: "dialog", lines: [["Cikgu", "Mengapa kamu tidak datang semalam, Amin?"], ["Amin", "Saya demam, cikgu. Ibu bawa saya ke klinik."], ["Cikgu", "Sekarang kamu sudah sihat?"], ["Amin", "Alhamdulillah, saya sudah sihat."]] },
          { type: "bullets", items: ["Makan makanan yang berkhasiat.  (กินอาหารที่มีประโยชน์)", "Minum air yang cukup.  (ดื่มน้ำให้เพียงพอ)", "Tidur awal.  (นอนแต่หัวค่ำ)", "Bersenam setiap hari.  (ออกกำลังกายทุกวัน)"] },
        ] },
      ],
      latihan: [
        { q: "Tulis maksudnya.||เขียนความหมาย", items: ["demam  ________", "batuk  ________", "ubat  ________", "bersenam  ________"], answers: "ไข้, ไอ, ยา, ออกกำลังกาย" },
        { q: "Isikan perkataan  [ klinik · sihat · sakit perut ]||เติมคำ  [ klinik · sihat · sakit perut ]", items: ["Saya makan terlalu banyak. Saya ______.", "Ibu bawa adik ke ______.", "Bersenam membuat badan ______."], answers: "sakit perut, klinik, sihat" },
        { q: "Tulis 2 cara menjaga kesihatan dalam bahasa Melayu.||เขียนวิธีดูแลสุขภาพ 2 ข้อเป็นภาษามลายู", lines: 2 },
      ],
      nilai: "สุขภาพที่ดีเป็นความโปรดปรานจากอัลลอฮ์ ร่างกายที่แข็งแรงทำให้เราทำอิบาดะฮ์ได้อย่างเต็มที่",
      nilai_ms: "Kesihatan yang baik ialah nikmat daripada Allah. Tubuh badan yang sihat membolehkan kita beribadat dengan sempurna.",
    },
    {
      title: "Permainan", th: "การละเล่น", indicators: [2, 3, 7],
      objectives: ["Membaca dan menulis nama permainan tradisional dan sukan||อ่านและเขียนชื่อการละเล่นพื้นบ้านและกีฬาได้", "Bercerita tentang permainan kegemaran dengan ayat yang mudah||บอกเล่าการละเล่นที่ชอบด้วยประโยคง่าย ๆ ได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["permainan", "การละเล่น"], ["bola sepak", "ฟุตบอล"], ["sepak takraw", "ตะกร้อ"], ["main wau", "เล่นว่าว"], ["main gasing", "ปั่นลูกข่าง"], ["lompat tali", "กระโดดเชือก"], ["congkak", "หมากขุม"], ["menang", "ชนะ"], ["kalah", "แพ้"]] },
        ] },
        { title: "Mari membaca  มาอ่านกันเถอะ", blocks: [
          { type: "reading", title: "Petang di Kampung", paras: ["Pada waktu petang, kanak-kanak bermain di padang. Ali dan kawan-kawan bermain sepak takraw. Siti dan adiknya bermain lompat tali.", "Apabila azan asar berkumandang, mereka berhenti bermain dan pergi ke surau."] },
        ] },
      ],
      latihan: [
        { q: "Jawab soalan berdasarkan bacaan.||ตอบคำถามจากเรื่อง", items: ["Kanak-kanak bermain di mana?  ________", "Ali bermain apa?  ________", "Bila mereka berhenti bermain?  ________"], answers: "di padang; sepak takraw; apabila azan asar berkumandang" },
        { q: "Tulis perkataan bahasa Melayu.||เขียนคำภาษามลายู", items: ["ชนะ  ________", "แพ้  ________", "กระโดดเชือก  ________"], answers: "menang, kalah, lompat tali" },
        { q: "Tulis 2 ayat tentang permainan kegemaran kamu (Saya suka bermain ...)||เขียน 2 ประโยคเกี่ยวกับการละเล่นที่ชอบ (Saya suka bermain ...)", lines: 2 },
      ],
      nilai: "การละเล่นสอนให้รู้แพ้รู้ชนะ และเมื่อได้ยินเสียงอะซานให้หยุดเล่นไปละหมาด",
      nilai_ms: "Permainan mengajar kita menerima kemenangan dan kekalahan. Apabila mendengar azan, berhentilah bermain dan pergi menunaikan solat.",
    },
    {
      title: "Solat Jumaat di Masjid", th: "การละหมาดญุมอะฮ์ที่มัสยิด", indicators: [2, 3, 7],
      objectives: ["Membaca dan menulis perkataan tentang solat Jumaat||อ่านและเขียนคำศัพท์เกี่ยวกับการละหมาดญุมอะฮ์ได้", "Menceritakan urutan pergi menunaikan solat Jumaat dengan ayat yang mudah||เล่าลำดับการไปละหมาดวันศุกร์ด้วยประโยคง่าย ๆ ได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", rows: [["masjid", "مسجد", "มัสยิด"], ["imam", "امام", "อิหม่าม"], ["khatib", "خطيب", "ผู้แสดงคุฏบะฮ์"], ["khutbah", "خطبه", "คุฏบะฮ์ (คำเทศนา)"], ["azan", "اذان", "การอะซาน"], ["saf", "صف", "แถวละหมาด"], ["makmum", "مأموم", "ผู้ละหมาดตามอิหม่าม"]] },
        ] },
        { title: "Mari membaca  มาอ่านกันเถอะ", blocks: [
          { type: "reading", title: "Hari Jumaat", paras: ["Hari ini hari Jumaat. Ayah dan abang mandi dan memakai pakaian yang bersih. Mereka memakai kopiah dan pergi ke masjid awal.", "Di masjid, mereka mendengar khutbah dengan senyap. Kemudian, mereka solat Jumaat bersama imam."] },
          { type: "note", title: "Pengetahuan tambahan||ความรู้เพิ่มเติม", lines: ["Solat Jumaat **wajib** bagi lelaki Muslim yang sudah akil baligh, dan menggantikan solat Zuhur pada hari Jumaat.||การละหมาดญุมอะฮ์เป็น**วาญิบ**สำหรับผู้ชายมุสลิมที่บรรลุศาสนภาวะ ทำแทนละหมาดซุฮ์รีในวันศุกร์"] },
        ] },
      ],
      latihan: [
        { q: "Susun peristiwa mengikut urutan (1–4).||เรียงลำดับเหตุการณ์ (1–4)", items: ["( ___ ) Mereka solat Jumaat.", "( ___ ) Ayah mandi.", "( ___ ) Mereka mendengar khutbah.", "( ___ ) Mereka pergi ke masjid."], answers: "4, 1, 3, 2" },
        { q: "Padankan perkataan dengan maksudnya.||จับคู่คำกับความหมาย", items: ["khutbah  —  ____", "saf  —  ____", "imam  —  ____"], answers: "คำเทศนา, แถวละหมาด, อิหม่าม" },
        { q: "Tulis 2 perkara yang perlu dilakukan sebelum pergi solat Jumaat (Kita mesti ...)||เขียนสิ่งที่ควรทำก่อนไปละหมาดวันศุกร์ 2 ข้อ (Kita mesti ...)", lines: 2 },
      ],
      nilai: "การไปมัสยิดแต่เช้าและตั้งใจฟังคุฏบะฮ์ได้รับผลบุญมาก",
      nilai_ms: "Pergi ke masjid awal dan mendengar khutbah dengan teliti mendapat pahala yang besar.",
    },
    {
      title: "Berpuasa pada Bulan Ramadan", th: "การถือศีลอดเดือนเราะมะฎอน", indicators: [2, 3, 7],
      objectives: ["Membaca dan menulis perkataan tentang berpuasa||อ่านและเขียนคำศัพท์เกี่ยวกับการถือศีลอดได้", "Menceritakan aktiviti pada bulan Ramadan dengan ayat yang mudah||เล่ากิจกรรมในเดือนเราะมะฎอนด้วยประโยคง่าย ๆ ได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", rows: [["puasa", "ڤواس", "การถือศีลอด"], ["Ramadan", "رمضان", "เดือนเราะมะฎอน"], ["sahur", "سحور", "อาหารซะฮูร"], ["berbuka", "بربوک", "การละศีลอด"], ["kurma", "کورما", "อินทผลัม"], ["tarawih", "تراويح", "ละหมาดตะรอเวี๊ยะห์"], ["sabar", "صبر", "อดทน"]] },
        ] },
        { title: "Mari membaca  มาอ่านกันเถอะ", blocks: [
          { type: "reading", title: "Bulan Ramadan", paras: ["Bulan Ramadan sudah tiba. Kami bangun awal untuk bersahur. Kami tidak makan dan tidak minum dari subuh hingga maghrib.", "Apabila azan maghrib, kami berbuka puasa dengan kurma dan air. Pada waktu malam, kami solat tarawih di masjid."] },
        ] },
      ],
      latihan: [
        { q: "Jawab soalan berdasarkan bacaan.||ตอบคำถามจากเรื่อง", items: ["Bila kami bersahur?  ________", "Kami berbuka puasa dengan apa?  ________", "Kami solat apa pada waktu malam?  ________"], answers: "awal pagi / sebelum subuh; kurma dan air; tarawih" },
        { q: "Isikan perkataan  [ sahur · berbuka · sabar ]||เติมคำ  [ sahur · berbuka · sabar ]", items: ["Kami makan ______ sebelum subuh.", "Kami ______ puasa pada waktu maghrib.", "Puasa mengajar kita supaya ______."], answers: "sahur, berbuka, sabar" },
        { q: "Tulis 3 ayat tentang aktiviti yang kamu lakukan pada bulan Ramadan.||เขียนกิจกรรมที่ตนเองทำในเดือนเราะมะฎอน 3 ประโยค", lines: 3 },
      ],
      nilai: "การถือศีลอดสอนให้อดทน และเห็นใจผู้ที่หิวโหยและยากจน",
      nilai_ms: "Berpuasa mengajar kita supaya bersabar dan bersimpati dengan orang yang lapar dan miskin.",
    },
    {
      title: "Akil Baligh", th: "การบรรลุศาสนภาวะ", indicators: [2, 3, 7],
      objectives: ["Membaca dan menulis perkataan tentang peringkat umur dan akil baligh||อ่านและเขียนคำศัพท์เกี่ยวกับวัยและการบรรลุศาสนภาวะได้", "Menyatakan tanggungjawab orang yang sudah akil baligh dalam bahasa Melayu||บอกหน้าที่ของผู้ที่บรรลุศาสนภาวะเป็นภาษามลายูได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", noJawi: true, rows: [["kanak-kanak", "เด็ก"], ["remaja", "วัยรุ่น"], ["dewasa", "ผู้ใหญ่"], ["lelaki", "ผู้ชาย"], ["perempuan / wanita", "ผู้หญิง"], ["baligh", "บรรลุศาสนภาวะ"], ["wajib", "วาญิบ จำเป็นต้องทำ"], ["bertanggungjawab", "มีความรับผิดชอบ"]] },
        ] },
        { title: "Mari membaca  มาอ่านกันเถอะ", blocks: [
          { type: "reading", paras: ["Apabila seorang kanak-kanak lelaki atau perempuan sudah baligh, dia menjadi remaja.", "Remaja yang sudah baligh **wajib** menunaikan solat lima waktu dan berpuasa pada bulan Ramadan. Dia juga mesti menutup aurat dan menjaga kelakuan.", "Remaja muslim mesti bertanggungjawab."] },
          { type: "note", title: "Untuk perhatian guru||ครูควรรู้", lines: ["Pelajaran ini memberi tumpuan kepada perkataan dan tanggungjawab agama. Butiran tentang tanda-tanda akil baligh dihuraikan oleh guru mengikut kesesuaian dalam mata pelajaran Fiqah.||บทนี้เน้นคำศัพท์และหน้าที่ทางศาสนา รายละเอียดเรื่องสัญญาณของการบรรลุศาสนภาวะให้ครูอธิบายตามความเหมาะสมในวิชาฟิกฮ์"] },
        ] },
      ],
      latihan: [
        { q: "Susun peringkat umur daripada yang muda kepada yang tua.||เรียงวัยจากน้อยไปมาก", items: ["dewasa  •  kanak-kanak  •  remaja  →  ____________________"], answers: "kanak-kanak, remaja, dewasa" },
        { q: "Betul (✓) atau salah (✗).||ถูก (✓) หรือผิด (✗)", items: ["Remaja yang sudah baligh wajib solat lima waktu.  ( ___ )", "Remaja yang sudah baligh tidak perlu berpuasa.  ( ___ )"], answers: "✓, ✗" },
        { q: "Tulis maksudnya.||เขียนความหมาย", items: ["lelaki  ________", "wanita  ________", "wajib  ________"], answers: "ผู้ชาย, ผู้หญิง, จำเป็นต้องทำ" },
      ],
      nilai: "เมื่อบรรลุศาสนภาวะ เราต้องรับผิดชอบต่อการกระทำของตนเองต่อหน้าอัลลอฮ์",
      nilai_ms: "Apabila sudah akil baligh, kita bertanggungjawab atas setiap perbuatan kita di hadapan Allah.",
    },
  ],
};
