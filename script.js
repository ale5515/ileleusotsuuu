const generateBtn = document.getElementById('generateBtn');
const playBtn = document.getElementById('playBtn');
const messageContainer = document.getElementById('messageContainer');
const videoWrapper = document.getElementById('videoWrapper');
const myVideo = document.getElementById('myVideo');

const messagePool = [
    "I love you! ❤️",
    "Always by your side, no matter what. 🤝",
    "Muaaaaa! 😘",
    "Amakisuu! ✨",
    "You're my favorite person ever. 🧸",
    "Sending you a million Bubu hugs! 🤗",
    "You make my heart go 'pop'! 🍿",
    "I'm so lucky to have you. 🍀",
    "Eat well and stay healthy for me! 🍎",
    "Thinking of you right now... 💭",
    "You're the Dudu to my Bubu. 🐼",
    "Don't forget to smile today! 😊",
    "I'll always be your #1 fan. 📣",
    "A special kiss for you: *mwah*! 💋",
    "You're my sunshine on a rainy day. ☀️",
    "Muaaaaa! 😘",
    "Amakisuu! ✨",
    "很开心在你的身边加油加油",
    "一起努力吧",
     "我只想看你笑一笑",
    "爱你我的世界",
    "Giant Bubu hug incoming! 🤗",

    "A thousand kisses just for you! 💋",

    "Stop being so cute, it's distracting! 🙈",

    "Boop! (I touched your nose) 👃👈",

    "Sending you a pocket full of sunshine. ☀️"
];


generateBtn.addEventListener('click', () => {
    // 1. Pick a random index
    const randomIndex = Math.floor(Math.random() * messagePool.length);
    const selectedText = messagePool[randomIndex];
    // Inside the click function, after creating 'p'
    if (selectedText.includes("Muaaaaa") || selectedText.includes("Amakisuu")) {
        p.style.fontSize = "1.5rem"; // Make it bigger!
        p.style.fontWeight = "bold";
        p.style.borderStyle = "solid"; // Change dashed to solid
        p.style.backgroundColor = "#ffebf0"; // Light pink highlight
    }

    // 2. Create the element
    const p = document.createElement('p');
    p.textContent = selectedText;
    p.className = 'message-item';

    // 3. Add the cute styling (random color and slight tilt)
    p.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
    const randomRotation = (Math.random() * 10 - 5); // Random tilt between -5 and 5 degrees
    p.style.transform = `rotate(${randomRotation}deg)`;

    // 4. Put it on the screen
    messageContainer.appendChild(p);

    // Optional: Auto-scroll to the newest message
    p.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Video Play Logic
playBtn.addEventListener('click', () => {
    videoWrapper.style.display = 'block';
    myVideo.play();
    videoWrapper.scrollIntoView({ behavior: 'smooth' });
});
