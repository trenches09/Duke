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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233554742073";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_44_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3LFxuICAgICAgICA4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzLFxuICAgICAgICA5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDUyLFxuICAgICAgICA5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTExLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDk5LFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMzLFxuICAgICAgICA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBPaHNnSTNKNnlnRG1SMTBwUmFMaGJLQXFtZlpmYkRnVHNhR0hGOVhESkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzNTU0NzQyMDczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMEIyNkRCQjFCOEUxQ0ZGRDJCNTI5NzZERjg0NkQ2MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg1MDk0NDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1NTQ3NDIwNzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI1OEVFMkIyNzcxMjdDRjIyRThFMkNBNTVDQTM4OTgxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODUwOTQ0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfaEJETVFNUFRYaWttTjZfS24zU0d3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVkMjEwNzI0LTY2ODUtNGJlNS05MzdlLTcwNWFlYmM2ZjZhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDYzLFxuICAgICAgMTk2LFxuICAgICAgMjI3LFxuICAgICAgNTYsXG4gICAgICAxOCxcbiAgICAgIDEzNSxcbiAgICAgIDEwLFxuICAgICAgMTc2LFxuICAgICAgOTQsXG4gICAgICAxNDEsXG4gICAgICAyMjgsXG4gICAgICA1NixcbiAgICAgIDE1NixcbiAgICAgIDMyLFxuICAgICAgOTIsXG4gICAgICAxODAsXG4gICAgICA5NyxcbiAgICAgIDEwNSxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICAzMCxcbiAgICAgIDEzOSxcbiAgICAgIDIyNSxcbiAgICAgIDEyOSxcbiAgICAgIDIxNyxcbiAgICAgIDE0OSxcbiAgICAgIDQ1LFxuICAgICAgNDgsXG4gICAgICAxNTIsXG4gICAgICAyMzUsXG4gICAgICAxMDksXG4gICAgICAyMjgsXG4gICAgICAxMjAsXG4gICAgICAxNzcsXG4gICAgICAxODEsXG4gICAgICA3MyxcbiAgICAgIDEyNixcbiAgICAgIDE0LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdWTURaTjJOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NTQ3NDIwNzM6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NjE4MjcyMTg2Nzk2NzoyOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEdWtlIPCfpbfwn6SRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmJLM2tnUStyNjVzd1lZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJVEhCaGJOdzdML1ArZmwxeTlYcDZtNDNEU0xnd3BWRFdsaHd5SWdtWEc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNzcmVpeDRiZWlnc0c5VjcyL2RWQnZmRm0wK0t5OFY3NEYrSDBJUmFPR1Q4R0ppNEt3bTZmZFU0Q0x5MFQ0M1dQU1pXbDNaZkVwSGZ4ZkFiRUhRZkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdkU1VVemxXTTJ2dmcrYUdCVDlYNXdibjZ3WUQ5NG5pdTlqTVB5YzQ1YkZWM0VkaUpQN01pL3hQTkhXdTZZQ1RteWJ4V09sZDV6UzIwQmRMT3F6b2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU1NDc0MjA3MzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NTA5NDM4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTm4yXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFObjIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwaDZvdHY5TkVvdFF4K25yODljVjE0SjdaZGROME9pK01UQmszejVFbWZNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MjU0NDU5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4NTA5MzM1NjAzXCJ9Igp9"  // PUT your SESSION_ID 


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
