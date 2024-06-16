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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_32_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExLFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk1LFxuICAgICAgICA2NCxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUzLFxuICAgICAgICA3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3LFxuICAgICAgICA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU3LFxuICAgICAgICA5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMkhNUnBXVk9lZzVxMGMwQXZoQ1QzN1U5MEhCWlZGT2NaaGRoQTVPbTh0dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1NTQ3NDIwNzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU5NzhFMDM1MkZBMUE4QUNFNTg1RDFDMTNDQkZBQUUxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODUzNzU2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzU1NDc0MjA3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDBBRTY5MzgyQjU2N0ExNzU4MTA1QUMyNUU0RjI5NTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NTM3NTYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndmdTBKV2owUjdDMlpQM0JRVjN0dUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDhiMDAwYzMtZTdhZi00MGFlLTkzMGItNmJiNzE0NWMyNmZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICA5OSxcbiAgICAgIDE5MCxcbiAgICAgIDE2NyxcbiAgICAgIDYzLFxuICAgICAgMixcbiAgICAgIDEyOSxcbiAgICAgIDksXG4gICAgICAxOTAsXG4gICAgICAyMSxcbiAgICAgIDEwMixcbiAgICAgIDUxLFxuICAgICAgMjMzLFxuICAgICAgNzEsXG4gICAgICA0MCxcbiAgICAgIDE2LFxuICAgICAgMjEsXG4gICAgICAyMTAsXG4gICAgICA5NCxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDEzMSxcbiAgICAgIDE3NCxcbiAgICAgIDgwLFxuICAgICAgMTA5LFxuICAgICAgODQsXG4gICAgICAyMzMsXG4gICAgICAxMDksXG4gICAgICAxMyxcbiAgICAgIDE2NCxcbiAgICAgIDEzNyxcbiAgICAgIDE1LFxuICAgICAgNzMsXG4gICAgICAxOTMsXG4gICAgICAxMDIsXG4gICAgICA0NCxcbiAgICAgIDIxMCxcbiAgICAgIDEzNixcbiAgICAgIDIzNyxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5DRE01SzdUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NTQ3NDIwNzM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NjE4MjcyMTg2Nzk2NzozNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEdWtlIPCfpbfwn6SRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm5LM2tnUTBKcTdzd1lZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJVEhCaGJOdzdML1ArZmwxeTlYcDZtNDNEU0xnd3BWRFdsaHd5SWdtWEc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVraDcrOTg5RE8vQzIxdjFDcHd3ZjV0UXhmNnFwa1lmaDNON1hockF6cGpzT1hnNnZmUWJkcTQ3RUFZRFRlMkYrdVpTYURxRVc5TStSS0ZVckhHOUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImoycmYydEhkNXBiRmlvZXJGOFZ6eUlIaXBYSTAzWW1URHJCUXIvSmxLODBtaVN5YVVKQTBXRkZCdnFRazF0aFhCQTNwQ2pLZjNtRzF0TC9zQTVSMWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU1NDc0MjA3MzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NTM3NTU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2wvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDbC8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
