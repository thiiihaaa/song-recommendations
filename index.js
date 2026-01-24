const songs = [
    {
    title: "めのう",
    artist: "NUUAMM,MahiToThePeople,Ichiko Aoba",
    spotifyId: "6AjsK6LlNlIRv4W9JeDZI8"
  },
    {
    title: "Earring",
    artist: "汐れいら",
    spotifyId: "4Jh5HJiOWwREsT8zUSOJ7W?utm"
  },
  {
    title: "呼び声",
    artist: "VAUNDY",
    spotifyId: "3kQf453SpkwX7ALdgzNSNY"
  },
  {
    title: "Golden",
    artist: "EJAE, AUDREY NUNA,REI AMI",
    spotifyId: "1CPZ5BxNNd0n0nF4Orb9JS"
  },
  {
    title: "can we start again?",
    artist: "lullaboy & Glenn Yong",
    spotifyId: "5KLsWrx2OWuW8FAWX0lsNl"
  },
  {
    title: "Wherever you are",
    artist: "ONE OK ROCK",
    spotifyId: "1TZjEATJpF5LaVL7oJHDMn"
  },
  {
    title: "幾億光年",
    artist: "Omoinotake",
    spotifyId: "4dmruTsdHIOjfOIeaFitXK"
  },
  {
    title: "Love Me Not",
    artist: "Ravyn Lenae",
    spotifyId: "1UNEuG9DYOWiikf00ayr52"
  },
  {
    title: "僕らまた",
    artist: "SG",
    spotifyId: "5hzOyvCqy8sb39xGXUEdpb"
  },
  {
    title: "26",
    artist: "YOAKE",
    spotifyId: "3CHQWlWFNsIDY6XaoSAZeQ"
  },
  {
    title: "Carry On",
    artist: "ファン",
    spotifyId: "5xZjfKSfTooDP2rcAgjxlH"
  },
  {
    title: "Aria",
    artist: "アイナ. ジ. エンド",
    spotifyId: "5YqACM8RWUfAIVkOmtB2Mo"
  },
  {
    title: "On The Way",
    artist: "アイナ. ジ. エンド",
    spotifyId: "1oFqKeepmT5S8BCGqJl7Ar"
  },
  {
    title: "Dawn",
    artist: "yama",
    spotifyId: "4OvdtlIQxHJTWsh1j5I19v"
  },
  {
    title: "ポケットに魔法を入れて",
    artist: "秦基博",
    spotifyId: "5Zv31beSK1h3zMMHzjFLJG"
  },
  {
    title: "飽和",
    artist: "Ayase",
    spotifyId: "1UPtzvnvQALqV9feDrqVSs"
  },
  {
    title: "It Ain't Over",
    artist: "藤井風",
    spotifyId: "7xWKGIFGLxBJAyGSus7BOJ"
  },
  {
    title: "パラレルワールド",
    artist: "BAK",
    spotifyId: "0cAXK9udJrTR430JYSdlTD"
  },
  {
    title: "Sweet Dream",
    artist: "j-hope, Miguel",
    spotifyId: "1yX9gy5fK02j6nBnGJ1S3k"
  },
  {
    title: "秘密",
    artist: "sumika",
    spotifyId: "5Jc1VeDgY1O9rrdaBfEaTO"
  },
  {
    title: "連れてって",
    artist: "AKASAKI",
    spotifyId: "2ucRLbSLvhc5KYkrtg1vG7"
  },
  {
    title: "何色でもない花",
    artist: "宇多田ヒカル",
    spotifyId: "50tPNAlIyAbQtixQQ0huP5"
  },
  {
    title: "初恋クレイジー",
    artist: "スピッツ",
    spotifyId: "7lT84nOwp4Gk4G2Jxz3GUi"
  },
  {
    title: "MEEEEEE",
    artist: "NAYEON",
    spotifyId: "4fj3ZKe3p2f5BdZgMdsQe5"
  },
  {
    title: "恋色",
    artist: "もさを",
    spotifyId: "1zKGm1uMH5qKgpM7T2U3RY"
  },
  {
    title: "1999",
    artist: "にしな",
    spotifyId: "2pUMDJAZrM2qKx4tCJD1jK"
  },
  {
    title: "紫苑",
    artist: "Saucy Dog",
    spotifyId: "2HKHtLvr9fMFndCZ5HPR9Q"
  },
  {
    title: "フィナーレ",
    artist: "eill",
    spotifyId: "2hL8ESlWIwfXPHgPaTYTWk"
  },
  {
    title: "夏霞",
    artist: "あたらよ",
    spotifyId: "34jv2mOVzPjncrBncjYl6F"
  },
  {
    title: "大きな玉ねぎの下で",
    artist: "asmi",
    spotifyId: "4stYPN0wX9KSOf3DKkXYGQ"
  },
  {
    title: "桜日和とタイムセールマシン",
    artist: "Ado, 初音ミク",
    spotifyId: "1sEObTHGtsQxJj7nEp9kMY"
  },
  {
    title: "かげろう",
    artist: "斉藤和義",
    spotifyId: "0aUQf3YkzpBknafYbcVKwF"
  },
  {
    title: "うまく言えない",
    artist: "ゆず",
    spotifyId: "7L4jEWp6IG0YMhcJuwKpLD"
  },
  {
    title: "Cry For Me",
    artist: "Michita,愛海",
    spotifyId: "2nXH9LBb5WlpNBH791Pov8"
  },
  {
    title: "you and I",
    artist: "Nanamé",
    spotifyId: "4dvQ5HwP5SVSbrDe3s3NIB"
  },
  {
    title: "糸しいひと",
    artist: "汐れいら",
    spotifyId: "5b0p9a5ZfRUeAn1oMYpLwN"
  },
  {
    title: "Never Let Go",
    artist: "LNGSHOT",
    spotifyId: "37xebnhvUyM8VyyDDeo65d"
  },
  {
    title: "Euphoria",
    artist: "keshi",
    spotifyId: "2F6Cjiv4jXoW6WinuSsNdc"
  },
  {
    title: "her",
    artist: "JVKE",
    spotifyId: "6G9YlbU3ByPJQvOFDRdwyM"
  },
  {
    title: "10 Reasons for I love you",
    artist: "ADORA",
    spotifyId: "2fRjUQwRAExPj6MHUstGXY"
  },
  {
    title: "うたたね",
    artist: "Leina",
    spotifyId: "4C2kdvTzgJAfYO07dDwc5x"
  },
  {
    title: "燈",
    artist: "崎山蒼志",
    spotifyId: "7jtXjZ3JViUo9M3ogYAapO"
  },
  {
    title: "おどるひかり",
    artist: "Cody . Lee",
    spotifyId: "5vKeKeMQEOVVHvWoboCWdK"
  },
  {
    title: "At Least I Had You",
    artist: "Gentle Bones,JJ Lin",
    spotifyId: "58wAiG3KIamVuPH5K56tzE"
  },
  {
    title: "Midnight Talk",
    artist: "幾田りら",
    spotifyId: "7hcU6lOvSCniyGnSmTNjks"
  },
  {
    title: "猫になれ",
    artist: "スキマスイッチ",
    spotifyId: "57PoSGHNhijXLGQ8rbASbZ"
  },
  {
    title: "Pink Shadow",
    artist: "鈴木愛理",
    spotifyId: "5rFLTJYxtvDymJzR9g2Lvl"
  },
  {
    title: "Even When I Smile",
    artist: "blah",
    spotifyId: "48QPNybu3JkiUfCwG11Moq"
  },
  {
    title: "風のゆくへ",
    artist: "Ado",
    spotifyId: "28WoBIA4EDVvxiraTv2KZ2"
  },
  {
    title: "I Promise You",
    artist: "Yoolee",
    spotifyId: "7AKVgz38rGxJLYb7OKYj9A"
  },
  {
    title: "月",
    artist: "ao",
    spotifyId: "7DrwN98xjUsoLwbfPbnLRf"
  },
  {
    title: "宇宙の季節",
    artist: "Lanndo,Eve,suis from Yorushika",
    spotifyId: "1GKx2QlBo2IeXK9ecJniQy"
  },
  {
    title: "someone will love you better ",
    artist: "Johnny Orlando",
    spotifyId: "1wyAGxisJ8eiOdfFMSxBu7"
  },
  {
    title: "Glimpse of Us",
    artist: "Joji",
    spotifyId: "6xGruZOHLs39ZbVccQTuPZ"
  },
  {
    title: "If Our Love is Wrong",
    artist: "Calum Scott",
    spotifyId: "0bhBfW4mSRLILc32S4KugQ"
  },
  {
    title: "ひずみ",
    artist: "HARUHI",
    spotifyId: "1B2dsxhiNChPRUPlxyhHck"
  },
  {
    title: "君想い",
    artist: "KEISUKE",
    spotifyId: "4gyksxg8oXcUqhULEhRuOV"
  },
  {
    title: "Dive with you",
    artist: "Seori,eaj",
    spotifyId: "5KlXKygDyS1CS8ToYA1iHZ"
  },
  {
    title: "Space Dream",
    artist: "Amera Hpone",
    spotifyId: "3zbFDiAF4sAgNsqrcMJ8CX"
  },
  {
    title: "Please Please Please",
    artist: "Sabrina Carpenter",
    spotifyId: "5N3hjp1WNayUPZrA8kJmJP"
  },
  {
    title: "Missing You",
    artist: "BTOB",
    spotifyId: "3hb1KWyxOFgKNdOFHwfAbs"
  },
  {
    title: "Play",
    artist: "LUCY",
    spotifyId: "0ddSLVdbpKFO1FtIYpYnw9"
  },
  {
    title: "ur just a fan",
    artist: "suggi",
    spotifyId: "58lB8Lq0g0iiXPtqg9IPuA"
  },
  {
    title: "蜜の月",
    artist: "SEKAI NO OWARI",
    spotifyId: "15IIt0sAZjXV5ise1qfbu8"
  },
  {
    title: "Arson",
    artist: "j-hope",
    spotifyId: "2QWEMqQMJR1KDf6hDjJOs6"
  },
  {
    title: "115万キロのフィルム",
    artist: "Official髭男dism",
    spotifyId: "278JqkBGkjDovOYAwE8TW7"
  },
  {
    title: "Hontowane",
    artist: "ヤングスキニー",
    spotifyId: "1G5cJCr6WwmiKRGlCbq6WS"
  },
  {
    title: "小さな夢ｓ",
    artist: "ヒグチアイ",
    spotifyId: "169bY9djGFRpPcqMMm9hik"
  },
  {
    title: "I Do",
    artist: "911",
    spotifyId: "4Pw2nBsmnww7dIyB12Fmw8"
  },
  {
    title: "Break My Heart Again",
    artist: "FINNEAS",
    spotifyId: "7zw6nQHTwml1mVuQDf5V6k"
  },
  {
    title: "451",
    artist: "ヨルシカ",
    spotifyId: "3M6R3MaIkliOaZQ4YX67W1"
  },
  {
    title: "Canvas",
    artist: "androp",
    spotifyId: "2s4SPZq8GdvH87MIrrv3Iw"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  },
  {
    title: "Hype Boy",
    artist: "NewJeans",
    spotifyId: "1wS8pYbS0nDnncH5H0CzYt"
  }
  
];

//  DOM ELEMENTS
  

const grid = document.getElementById("grid");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const spotifyEmbed = document.getElementById("spotifyEmbed");

//  CREATE BLOCKS
  

songs.forEach((song, index) => {
  const block = document.createElement("div");
  block.className = "block";
  block.textContent = index + 1; // auto numbering

  block.addEventListener("click", () => {
    songTitle.textContent = song.title;
    artist.textContent = song.artist;

    spotifyEmbed.innerHTML = `
      <iframe
        src="https://open.spotify.com/embed/track/${song.spotifyId}"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
      </iframe>
    `;

    overlay.classList.add("active");
  });

  grid.appendChild(block);
});

// CLOSE MODAL
  

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
  spotifyEmbed.innerHTML = ""; // stop music
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    spotifyEmbed.innerHTML = "";
  }
});