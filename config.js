const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEg2bTBHVGFUblo0M3Z4cS9Fb3hvSFZEUFRubDI1REU2eTdMREtNZ2pFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHlnTGFPRHo2dDdtOUI0emNWM0hnL0lzVW1uN3QyUjdSaWYrRExTYk9BQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4R0JLdHlNWEppbGlkWDQ3NTh5RHJCbFd0cjVkeXduU3ZQMkVsWFNZcDBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlWjVBdzB0amlKZkZXcWlpajBtT0x2TnhrZDNoenJpMGVJUlJ1Syt1QVcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGR2JZUG1mREQvY3lTQy9PWXg0UWc1bkU1OU9JdTR6TGxmLzgyVlI1Mzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhKclZEOFRxSVBjQU1STDhEd0RzbjJHbDRMMkhmWHJGbEJLSUpVM0FFUTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtFK0VCNUZZRzk2Qit6Ri9hT1VMNHFmMC9NSlR4azREa0s1TFJBVjAwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVRqVkpRZTR0WDdGV2lUeHVsQWpMbWJiNk1YMHVjdW1mbmg0dFNCT05SWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdqZjJpZnNPNERrZ0R6K2piRnpjT1pUOTY0TTFiTjhNT0hrb2Z2dHJpOEdlc0VkeU9SNTMvOFFEL3VtV3RYbmZTcUlYd2lQeEViZkpCVytmMmxaTkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6ImUvNStpMGhpQ1ZCdGd1SXFFdVkweG9wcEE0cjBZQzVkL0hYWlB6VkhDLzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNzg0MzY3MTQ3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1Qjc5QTk1QTU1NDA1QThGOTJBOTQ4MTRDRkE1NUNDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzMyMDMyOTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIxMjc4NDM2NzE0N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUI5MjczNUE5QUYxRkQ0NDc1NEJBRTE2QjRCOTFDQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzczMjAzMjk3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMTI3ODQzNjcxNDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU1QkQzMjM2ODlBNzEwMURDN0UzODBFNzU1M0Y3OUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzIwMzI5N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNzg0MzY3MTQ3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RjVCQjBGMTlCNEVDRjdGNjM5Q0I4QkQ2QTE1NzJDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzMyMDMyOTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIxMjc4NDM2NzE0N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUU0RDA2NjRGNzQ5NEMzQ0JEQUU0OTMzRTc2MkExMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzczMjAzMzAwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMTI3ODQzNjcxNDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVEMjVFNzJGMzlGRTNDMTIxMDY3QUVERTlCOTVFREMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzIwMzMwMX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjo0LCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZVVBSQURFViIsIm1lIjp7ImlkIjoiMjEyNzg0MzY3MTQ3OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibXVzdGFwaGEiLCJsaWQiOiIxODEzNDcxNzU4OTUyMzE6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ltTXJ2TUNFTkhldzgwR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjQvU0pBLzBMK3IxOUI1cXA4MTRsTjZ3bDZmaldrYlZ6UFphQ01LS3A1aEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InljMUZ5TjRjK1Z6eC9SVjY2K00vQm4yY0hvMmFMaXpDRDZhdllhUWZObEoyN05MLzQ1dk9laVhhN2NYNW9ySWh4eDdMeHZNZk9DT09iSHR1Mmgwd0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsWEtYMlBxRENHM0R4bTdHTXB1cUpyVWlGRUo1czM5OTY5NHNiOVZjZ2JjcXN1RUUxUC9YTnRPR1FPdWtxYWxqQVI0Kyt6dTkxSXUyU3RTRVo2SklDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjc4NDM2NzE0Nzo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVQMGlRUDlDL3E5ZlFlYXFmTmVKVGVzSmVuNDFwRzFjejJXZ2pDaXFlWVEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MzIwMzI5NSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV5bSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Your-Own-Bot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Your-Own-Bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Your-Own-Bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ArslanMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
