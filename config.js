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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_40_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM0LFxuICAgICAgICA5NyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI2LFxuICAgICAgICA2MSxcbiAgICAgICAgOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA5LFxuICAgICAgICAyMSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICA1NixcbiAgICAgICAgMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NixcbiAgICAgICAgODksXG4gICAgICAgIDIwMixcbiAgICAgICAgODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDksXG4gICAgICAgIDQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NixcbiAgICAgICAgMjExLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIwLFxuICAgICAgICA0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1ZzBoZ2RDSjh6NXJhZERUbWRrdmpFczFPcERSektTNmVYbHArblJOUWpRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLQloyWlFCelJSbWZBRzhwTnhHMDZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImFjOTE5NGEwLWJlNDctNDNmNC1iYTc1LTJlZDQ2MzNlZmRhZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICA2MyxcbiAgICAgIDEzMCxcbiAgICAgIDI0NSxcbiAgICAgIDc5LFxuICAgICAgMjM4LFxuICAgICAgMjMwLFxuICAgICAgNzcsXG4gICAgICAyMTYsXG4gICAgICAyMyxcbiAgICAgIDI3LFxuICAgICAgODAsXG4gICAgICAyMDksXG4gICAgICAxNjUsXG4gICAgICAxNDEsXG4gICAgICA5OSxcbiAgICAgIDEzMSxcbiAgICAgIDQ2LFxuICAgICAgMCxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMTQ3LFxuICAgICAgOTYsXG4gICAgICAxNzcsXG4gICAgICAxNDMsXG4gICAgICAyMixcbiAgICAgIDg2LFxuICAgICAgMjA2LFxuICAgICAgMTIzLFxuICAgICAgMTUzLFxuICAgICAgMTQsXG4gICAgICAyMTYsXG4gICAgICAyMjksXG4gICAgICAxOTMsXG4gICAgICAxMjEsXG4gICAgICAyMzQsXG4gICAgICA1OSxcbiAgICAgIDE3LFxuICAgICAgMTM5LFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVCTTc0M0Q1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NTQ3NDIwNzM6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NjE4MjcyMTg2Nzk2NzozNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEdWtlIPCfpbfwn6SRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnJLM2tnUWc3VFRzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJVEhCaGJOdzdML1ArZmwxeTlYcDZtNDNEU0xnd3BWRFdsaHd5SWdtWEc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZnV2NOVnNvOVpzd3AwSSs0RmlqekJ0UEVtYXpobmtvUHYzZWxUQTY0azA2ZDF4dGlZYkJjZG9oT0NyeHFKY1IyWG1NNHpBN2JJOWlwSGtQMkJTakJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpqeEZwUmh2WkNRVXVNUFZsQm9vT3FXQ0t3VWxLSnk4ODJEMTJ1alVZQ3pHMDZxQ1RPZGQ2eFFkL0srTHFkcHNJbFBmQkpXWmVlR2o4YkRRdnBscEJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU1NDc0MjA3MzozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4OTM0MDIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXB0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBcHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkRElkU2FMV1ozb0dkZ1hjSTVCMFZheHJaMWkwd1RmSzU2WVdPQ1Q3Q1lNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MjU0NDYwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4OTM0MDI3Njc1XCJ9Igp9"  // PUT your SESSION_ID 


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
