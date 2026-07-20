require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

// Create the bot
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// List of possible replies
const responses = [
    "ofc",
    "nah",
    "HE LYING",
    "yes he is",
    "idk I forgot",
    "maybe",
    "perhaps",
    "YES TWIN YES YES YES",
    "i dont feel like answering",
    "meh",
    "prolly",
    "the lion ignores blatantly obvious ragebait",
    "ask the big GPT maybe he knows",
    "no lol",
    "dont think so",
    "isnt it pretty obvious",
    "not really",
    "I smell lies",
    "ask unrated he knows",
    "ratio",
    "whyuinthebathtub mhm",
    "PAK DE BOOM EN NIET MIJN LOON",
    "NOOOOOOO",
    "how about no",
    "how about yes",
    "fih",
    "I DONT CARE IM A CLANKER",
    "I forgor",
    "uuuhhhmmmm uuuhhhhmmmm uuuhhhmmm",
    "slop detected"
];

// Runs once when the bot starts
client.once("ready", () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

// Runs every time someone sends a message
client.on("messageCreate", (message) => {

    // Ignore messages from bots
    if (message.author.bot) return;

    // Only respond if someone mentions this bot
    if (!message.mentions.has(client.user)) return;

    // Pick a random response
    const randomReply =
        responses[Math.floor(Math.random() * responses.length)];

    // Reply
    message.reply(randomReply);
});

// Log into Discord
client.login(process.env.TOKEN);