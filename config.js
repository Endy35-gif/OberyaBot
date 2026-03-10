/**

* Global Configuration for WhatsApp MD Bot
  */

module.exports = {

// Bot Owner Configuration
ownerNumber: [
    '212656245701',
    '85253382438',
    '212775270361',
    '5511967898841',
    '212693877842',
    '393926427789'
],

ownerName: [
    'Endy',
    'noxtra',
    'Zeyno bot',
    'ksav',
    'medalis',
    'knor'
],

// Bot Configuration
botName: 'Zeyno Bot',

// Prefissi multipli
prefix: ['.', '!', '#', '/', '?', '*'],

sessionName: 'session',
sessionID: process.env.SESSION_ID || '',

newsletterJid: '120363161513685998@newsletter',

updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip',

// Sticker Configuration
packname: 'Zeyno Bot',

// Bot Behavior
selfMode: false,
autoRead: true,
autoTyping: true,
autoBio: false,
autoSticker: true,
autoReact: true,
autoReactMode: 'bot',
autoDownload: false,

// Group Settings Defaults
defaultGroupSettings: {
  antilink: true,
  antilinkAction: 'delete',
  antitag: false,
  antitagAction: 'delete',
  antiall: false,
  antiviewonce: false,
  antibot: false,
  anticall: false,
  antigroupmention: false,
  antigroupmentionAction: 'delete',

  welcome: true,

  welcomeMessage: '👋 Benvenuto @user!\n\nSei entrato nel gruppo *#groupName*\n\n👥 Membri: #memberCount\n⏰ Orario: time\n\nDivertiti!',

  goodbye: true,
  goodbyeMessage: '👋 Addio @user',

  antiSpam: true,
  antidelete: true,
  nsfw: false,
  detect: false,
  chatbot: false,
  autosticker: true
},

// API Keys
apiKeys: {
  openai: '',
  deepai: '',
  remove_bg: ''
},

// Message Configuration
messages: {
  wait: '⏳ Attendi...',
  success: '✅ Fatto!',
  error: '❌ Errore!',
  ownerOnly: '👑 Solo owner!',
  adminOnly: '🛡️ Solo admin del gruppo!',
  groupOnly: '👥 Solo nei gruppi!',
  privateOnly: '💬 Solo in chat privata!',
  botAdminNeeded: '🤖 Il bot deve essere admin!',
  invalidCommand: '❓ Comando non valido! Usa !menu'
},

// Timezone
timezone: 'Europe/Rome',

// Limits
maxWarnings: 3,

// Social Links
social: {
  github: '',
  instagram: '',
  youtube: ''
}

};