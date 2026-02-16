const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VU25KiSBD9l3rVGLkJQkRHLCLYCCqItMrGPpRQQCk3iwLFCf99A7t7Zh52Jnp5KrIy85zMPFnfQVHiGlmoA8p3UBHcQor6I+0qBBQwbeIYETAEEaQQKGCindjDTBxBhzF4OPHPMO6kcqeW5lQbS9yS8tph57inW35+AY8hqJpjhsM/JDTsC2rjZuGabiWVgqfZ6wSex2IW+6xGiBtZO3bU7SGXmi/g0WeEmOAi0asU5YjAzEKdAzH5Gv25nraNP+YvdnApVbpipJFxXwpuBzenWGZvp4VMUTu9b17Dr9Ffw2ZQxuptXUn6/K2VPGGxNMpjVa7N43JvbfZImHkJQyav+jv9GicFiswIFRTT7st95+ZvaDnLkgp5GymWg227IY274wPBwlc0cm3BCqxydkO88DXi6KgObDbOjvR+qjnL64Kt7u9XJ9GxWUsO+BM3uNnEW112k1+JO+RTK+f/1fcpp8t7rZlt8+NgTfH5JozFtLCnBcOL3Rw5VS0uEifzOf9r9OsDv9o2964Q6ETOKlJYNlNTw6HQMZBUriVHMv2T3540/yd9SBvyJ5bnta+OOdE/NHo0VbXOm6zGM3rSR+P12Z2Xl3SfZJyto8DybbK4J1fY0dPi4sPQLgbXqZ8ZFSeEjFxoySK/H4ugCD2svjwrOqPOjIDCPoaAoATXlECKy6K3TbghgFHroZAg+uwueN1mbSkX5r2mRTxb5/MsX97IdVV34dG+DipjlpZMFnPLkfsChqAiZYjqGkWvuKYl6ZaormGCaqD8/c8QFOhG3+f2RGP5IYgxqalfNFVWwuhzqj9uYRiWTUG9rgi1/oAIUJifZkQpLpK6b2RTQBKmuEVaCmkNlBhmNfpRIiIo+rD9iO6jIkQhzmqgAM2Giaif3cbZ23f1cFA9VbVUta/pE+1zbu+NiQKjmtvBbc5yG2l33fs009J2mmvjO5u2c/kt9A0pE1qN0/8rCVDAZRXvw810yt9hrIb4znUDfrE2LqGtZq0Bp+Iqx8KdtSCsymyecLpTkGAk6L65zPxcxqjwhVyqnfO6PpRvZLH3r4bWD3kIItTiEP0KtjXa/JRu1lq0bSru6kMx2sxWpuSzGT9PNktozutdNoP+tgldnxk0ut2+uuNu8KrpbLV1BXE+84KRE8reKVpVZoo1GSfvisqfUsYRUIDMyjzPiPxEmsgKJ/5Vf7v284BV9a1AFAxB9nRjGWHMyLIksoLISuPes78YggL2ycBbGBHwuSvZxxuFnzLqgfrfGKPnyn9E/Dbjeyt6RTGP4S+xH4/HbxZwut9t4AZz4YZGZ8TWBmsHbnm8BkkTyofjrX3bG1M0RvaVpuDx+GcIqgzSuCQ5UAAsIlI+wUnZ9Ao1i7j8A5imMqaeJGZfcQZrqv5U/RbnqKYwr4DCShLLCQzLCe9eDimrV1inQAF8fLhqFhiCvFOryqOQfm4RUPtvpo7B418y51XnYQcAAA==",  // Your bot's session ID (keep it secure)
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "on", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "923427582273",                     // Developer's contact number
    DEVELOPER_NUMBER: '923427582273@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
