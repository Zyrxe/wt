require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

// Inisialisasi bot dengan izin membaca pesan
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once("ready", () => {
    console.log(`✅ Bot Discord berjalan sebagai ${client.user.tag}`);
});

// Event saat menerima pesan di Discord
client.on("messageCreate", async (message) => {
    if (message.author.bot) return; // Abaikan pesan dari bot sendiri

    if (message.content === "!ping") {
        message.reply("Pong! 🚀");
    }
});

// Login ke bot
client.login(process.env.DISCORD_BOT_TOKEN);
