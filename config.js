const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_47_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDM0LFxuICAgICAgICA3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDMwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzLFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2LFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgODQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYWVCSDB5ZjZsZnREWlhxNXlSMXUwZkZZUU9NMjBiaDJHYW45NzEzUUJTZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzMyNDU2NDEzNDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNEEyN0Y5ODFERDdBNjk3QUIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzA5MTI1OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzI0NTY0MTM0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EzRjk4QzZGNEFCNDI5NDU5Q0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MDkxMjYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhqZ2FxWnJzUlotaFM0Mm1ZRkNQYXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzdlNzE4YmQtZmU2NC00ZTNkLTg2NmItZGQ2ZjU4YmQ1MDI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDYyLFxuICAgICAgMTEwLFxuICAgICAgMTMwLFxuICAgICAgOSxcbiAgICAgIDEzMCxcbiAgICAgIDI5LFxuICAgICAgMTg1LFxuICAgICAgMjEwLFxuICAgICAgMzUsXG4gICAgICA3OCxcbiAgICAgIDE2MCxcbiAgICAgIDE5NCxcbiAgICAgIDE3OSxcbiAgICAgIDIyNCxcbiAgICAgIDY0LFxuICAgICAgMTA1LFxuICAgICAgMSxcbiAgICAgIDQsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDE5MCxcbiAgICAgIDE2MixcbiAgICAgIDE0LFxuICAgICAgMTgsXG4gICAgICAyNyxcbiAgICAgIDI4LFxuICAgICAgOTYsXG4gICAgICAxNTYsXG4gICAgICAxMyxcbiAgICAgIDI0NyxcbiAgICAgIDE0OCxcbiAgICAgIDIxNixcbiAgICAgIDgxLFxuICAgICAgODgsXG4gICAgICAxMzEsXG4gICAgICA5MyxcbiAgICAgIDM2LFxuICAgICAgNTgsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVdNODNUTkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0NTY0MTM0MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDY5MzY0NDgwOTg1MDI6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZKv8J2SvfCdkrbwnZOJIPCdkZTwnZOK8J2Tjl/wnZC48J2TivCdkZTwnZGS8J2Tg/CdkZJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJaW8vSndQRUxMMzRySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlzZG15TEV1cnJZajlJdFJQUkoxUU1SNy8yM3l6eFlwRTloNldYYlNaMmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRFU2U1N2bXhrK2F1SFFPOWtGY3Bzb09rZWQvMkFTR21RV1NGWEJIdFREUlo3WHEwaDlPRk9SU0JNby92NjJlTDg0MjZHOXVHRHdOcnRwOUZBS1BBQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNjdxc2dZM0EzN1JoLy9GTWNYNkhTN2xWMEFwWHhET0FnMmpJcHZmU3l0c0RyMkU4L0o3NVdGUU5ZS3orMVZKWForNCtxcDJvQWMrQ2x1ZW50cWp1aFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQ1NjQxMzQyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MDkxMjU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmdTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGZ1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtQmVVUUJUeHdEODRiR0w1UkRyVTQ1aUR2ZUF5Y3c4ZldLc3FRaGlwbU5nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQwODcyODg4NDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzA5MTI1NjczNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
