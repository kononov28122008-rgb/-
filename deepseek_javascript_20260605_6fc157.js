// script.js — романтическая новелла с фото и переигрыванием

// ========== БАЗА СЮЖЕТА С ФОТО ==========
// каждая сцена имеет своё уникальное фото (эмодзи-заглушки, но можно заменить на реальные URL)

const storyDatabase = {
    start: {
        text: "🌙 Ты стоишь на берегу лунного озера. Вокруг танцуют светлячки. Вдруг ты замечаешь красивого незнакомца, который смотрит на звёзды. Он оборачивается и дарит тебе самую тёплую улыбку... Что скажешь? 💕",
        image: "https://i.pinimg.com/564x/2e/3b/8e/2e3b8e4f5c6d7e8f9a0b1c2d3e4f5a6b.jpg",
        choices: [
            { text: "🌸 «Привет! Тоже любишь звёзды?»", next: "star_talk" },
            { text: "🍰 «Я знаю тут одно уютное кафе. Пойдём, угощу тебя десертом?»", next: "cafe_date" },
            { text: "💌 Просто улыбнуться и протянуть руку", next: "silent_magic" }
        ]
    },
    star_talk: {
        text: "⭐ Он смущённо отвечает: «Да... но с тобой они кажутся ещё ярче». Вы смотрите на созвездия. Он рассказывает, что ищет ту самую, с кем можно делить каждый закат. Твоё сердце трепещет. Что дальше? 💫",
        image: "https://i.pinimg.com/564x/3f/4a/7d/3f4a7d8e9f0a1b2c3d4e5f6a7b8c9d0e.jpg",
        choices: [
            { text: "🌹 «А что, если я — та самая?»", next: "confess_feelings" },
            { text: "🎨 «Давай нарисуем эту ночь вместе? У меня есть краски»", next: "draw_night" }
        ]
    },
    cafe_date: {
        text: "🍰 Он улыбается и соглашается. В кафе пахнет ванилью. Вы смеётесь над глупыми шутками, делитесь детскими мечтами. Он смотрит на тебя так нежно, что ты краснеешь. Что делать? 💗",
        image: "https://i.pinimg.com/564x/5b/6c/7d/5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e.jpg",
        choices: [
            { text: "☕ «Мне кажется, я ждала эту встречу всю жизнь»", next: "true_feelings" },
            { text: "🎁 Подарить ему маленький брелок на память", next: "gift_memory" }
        ]
    },
    silent_magic: {
        text: "🤍 Он понимает без слов. Берёт твою руку, и вы идёте к старому дубу, увешанному лентами желаний. «Загадай желание», — шепчет он. Ты загадываешь его. ✨",
        image: "https://i.pinimg.com/564x/7e/8f/9a/7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b.jpg",
        choices: [
            { text: "🌟 «Я загадала, чтобы ты остался»", next: "wish_true" },
            { text: "🌙 А что загадал ты? — спросить с надеждой", next: "mutual_wish" }
        ]
    },
    confess_feelings: {
        text: "💕 Он замирает, а потом обнимает тебя. «Я тоже это чувствую, с первой секунды». Луна освещает ваш первый поцелуй. Это как в фильме! 💋",
        image: "https://i.pinimg.com/564x/1a/2b/3c/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d.jpg",
        choices: [
            { text: "💍 «Давай встречаться... навсегда?»", next: "happy_ending_forever" }
        ]
    },
    draw_night: {
        text: "🎨 Вы рисуете звёздное небо, ваши пальцы касаются. На бумаге рождается маленькое сердечко. Он пишет: «Твоя улыбка — моя галактика». 🎨💗",
        image: "img/IMG_2316.JPG",
        choices: [
            { text: "🖼️ «Подари мне этот рисунок, пожалуйста»", next: "happy_ending_art" }
        ]
    },
    true_feelings: {
        text: "💖 Он кладёт руку на твою: «Я тоже... Ты — то, чего я искал всё это время». Вы решаете, что это начало большой любви. 🥰",
        image: "img/IMG_20251122_160559_073.jpg",
        choices: [
            { text: "💌 Остаться вместе навсегда", next: "happy_ending_sweet" }
        ]
    },
    gift_memory: {
        text: "🎁 Он достаёт маленькую звезду из кармана (брелок) и дарит тебе. «Теперь мы связаны». Ты счастлива! 💫",
        image: "https://i.pinimg.com/564x/4e/5f/6a/4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b.jpg",
        choices: [
            { text: "⭐ Стать его звёздочкой навсегда", next: "happy_ending_star" }
        ]
    },
    wish_true: {
        text: "😊 Он улыбается: «Тогда я сделаю так, чтобы сбылось». И дарит тебе ожерелье с лунным камнем. Вы вместе смотрите на луну. 🌙",
        image: "https://i.pinimg.com/564x/5f/6a/7b/5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c.jpg",
        choices: [
            { text: "🤍 Согласиться быть его музой", next: "happy_ending_muse" }
        ]
    },
    mutual_wish: {
        text: "🌙 «Я загадал, чтобы ты стала моей судьбой». Вы смотрите друг на друга. Тишина говорит больше слов. 🤍",
        image: "https://i.pinimg.com/564x/6a/7b/8c/6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d.jpg",
        choices: [
            { text: "💞 Поцеловать его и начать историю любви", next: "happy_ending_kiss" }
        ]
    },

    // ========== ФИНАЛЫ ==========
    happy_ending_forever: {
        text: "💍 Через год вы стоите на том же месте. Он дарит тебе кольцо с лунным камнем. «Ты — моя вечность». Вы счастливы навсегда. 💕✨ ФИНАЛ: ЛУННОЕ ОБЕЩАНИЕ",
        image: "img/photo_8_2025-02-05_00-58-05.jpg",
        isEnding: true,
        replayOffer: true
    },
    happy_ending_art: {
        text: "🖼️ Вы вешаете рисунок в спальне. Каждый вечер он рисует тебя. Ты становишься его музой. Любовь длиною в искусство. 💗 ФИНАЛ: РИСУЯ ЛЮБОВЬ",
        image: "img/IMG_20250709_204607291 (1).jpg",
        isEnding: true,
        replayOffer: true
    },
    happy_ending_sweet: {
        text: "🥰 Вы вместе путешествуете, смеётесь и строите планы. Он каждое утро пишет тебе стихи. Это настоящая, тихая любовь. ФИНАЛ: НЕЖНОСТЬ НАВСЕГДА",
        image: "img/photo_2025-04-28_00-03-24.jpg",
        isEnding: true,
        replayOffer: true
    },
    happy_ending_star: {
        text: "⭐ Ты носишь его звёздочку всегда с собой. Вы смотрите на небо и знаете — это судьба. ФИНАЛ: ЗВЕЗДА НАШЕЙ ЛЮБВИ",
        image: "img/IMG_0779.JPG",
        isEnding: true,
        replayOffer: true
    },
    happy_ending_muse: {
        text: "🎨 Он пишет твой портрет и говорит: «Ты — моё вдохновение на всю жизнь». Вы вместе создаёте шедевры и счастье. ФИНАЛ: МУЗА И ПОЭТ",
        image: "img/IMG_0783.JPG",
        isEnding: true,
        replayOffer: true
    },
    happy_ending_kiss: {
        text: "💋 Поцелуй под луной становится началом большой романтики. Вы обещаете друг другу: «Всегда и навсегда». ФИНАЛ: ЛУННЫЙ ПОЦЕЛУЙ",
        image: "img/photo_9_2025-02-05_00-58-05 (2).jpg",
        isEnding: true,
        replayOffer: true
    }
};

// --- состояние игры ---
let currentNodeId = "start";

// --- DOM элементы ---
const storyTextEl = document.getElementById("storyText");
const choicesArea = document.getElementById("choicesArea");
const resetButton = document.getElementById("resetBtn");
const storyImage = document.getElementById("storyImage");

// --- fallback изображения, если картинка не загрузится ---
function setImageSafely(url) {
    if (!url || url === "") {
        storyImage.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23ffe4d6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23c48b6e' font-size='14'%3E🌙 романтичный момент%3C/text%3E%3C/svg%3E";
        return;
    }
    storyImage.src = url;
    storyImage.onerror = () => {
        storyImage.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23ffdfce'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23b26b50' font-size='12'%3E💗 нежный момент 💗%3C/text%3E%3C/svg%3E";
    };
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderGame() {
    const node = storyDatabase[currentNodeId];
    if (!node) {
        currentNodeId = "start";
        renderGame();
        return;
    }

    // текст истории
    storyTextEl.innerHTML = node.text.replace(/\n/g, '<br>');
    
    // фото
    if (node.image) {
        setImageSafely(node.image);
    } else {
        setImageSafely(null);
    }

    choicesArea.innerHTML = "";

    // если это концовка — показываем милое сообщение + кнопку "давай переиграем"
    if (node.isEnding) {
        const endingDiv = document.createElement("div");
        endingDiv.className = "ending-message";
        endingDiv.innerHTML = "💗 " + node.text + " 💗<br><br>✨✨✨<br><strong>🎀 хочешь пережить эту историю заново? 🎀</strong>";
        choicesArea.appendChild(endingDiv);
        
        // специальная кнопка "давай переиграем"
        const replayBtn = document.createElement("button");
        replayBtn.className = "choice-btn";
        replayBtn.innerHTML = "🔄 давай переиграем! 🔄";
        replayBtn.style.textAlign = "center";
        replayBtn.style.justifyContent = "center";
        replayBtn.style.background = "#f5d5c0";
        replayBtn.onclick = () => {
            currentNodeId = "start";
            renderGame();
            scrollToTop();
        };
        choicesArea.appendChild(replayBtn);
        return;
    }

    // обычные кнопки выбора
    if (node.choices && node.choices.length > 0) {
        node.choices.forEach(choice => {
            const button = document.createElement("button");
            button.className = "choice-btn";
            button.innerHTML = choice.text;
            const handleChoice = () => {
                if (storyDatabase[choice.next]) {
                    currentNodeId = choice.next;
                } else {
                    currentNodeId = "start";
                }
                renderGame();
                scrollToTop();
            };
            button.addEventListener("click", handleChoice);
            button.addEventListener("touchstart", handleChoice, { passive: false });
            choicesArea.appendChild(button);
        });
    } else {
        // fallback — перезапуск
        const fallback = document.createElement("button");
        fallback.className = "choice-btn";
        fallback.innerHTML = "✨ начать сначала ✨";
        fallback.onclick = () => {
            currentNodeId = "start";
            renderGame();
            scrollToTop();
        };
        choicesArea.appendChild(fallback);
    }
}

function resetGame() {
    currentNodeId = "start";
    renderGame();
    scrollToTop();
}

resetButton.addEventListener("click", resetGame);
resetButton.addEventListener("touchstart", resetGame, { passive: false });

renderGame();