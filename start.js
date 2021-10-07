const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const figlet = require("figlet");
const fs = require('fs')
const axios = require("axios")
const encodeUrl = require('encodeurl')
const { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
let {
    color, 
    bgcolor, 
    brightcolor
} = require("./lib/color");
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const colors = require('colors');
const chalk = require('chalk')

baterai = {
    
baterai: 0,
    
cas: false

}

memek = {
"actioncall": "*•IND*\nMaaf Otomatis Di Blokir Oleh Sistem, Tolong Jangan Telepon Nomor Ini, Saya Udah Rakit Khusus Dengan Penuh Keamanan Bot.\n\n*•ENG*\nSorry Automatically Blocked By The System, Please Don't Call This Number, I've Specially Assembled With Fully Bot Security.",
}

require('./ACHIL.js')
nocache('./ACHIL.js', module => console.log(`${module} is now updated!`))

const starts = async (ALDI = new WAConnection()) => {
    ALDI.logger.level = 'warn'
    ALDI.version = [2, 2123, 8]
    ALDI.browserDescription = [ 'ZuxyGanz', '', '3.0' ]
    console.log(banner.string)
    ALDI.on('qr', () => {
    ALDI.sendMessage(`6287727925499@s.whatsapp.net`, `「 ASALAMULAIKUM 」\n\nHAI KAK AWANG GANTENG\n SAYA IZIN MENGUNAKAN SCRIP KAKAK,PREFIX NYA APA YA?`, MessageType.extendedText)
        console.log(color('[','white'), color('!','red'), color(']','white'), color('scan the Qr code'))
    })
    console.log(color(figlet.textSync('                was here', {
    font: 'Standard',
    horizontalLayout: 'default',
    vertivalLayout: 'default',
    width: 80,
    whitespaceBreak: false
	}), 'cyan'))
    fs.existsSync('./Ziyx.json') && ALDI.loadAuthInfo('./Ziyx.json')
    ALDI.on('connecting', () => {
        start('2', 'Connecting...')
    })
    console.log(chalk.bgHex('#FFDF00').underline(color('HELLO WORLD I AM AWANG','black')))
    console.log(chalk.bgHex('#FFDF00').underline(color('THIS SCRIP HAS WORKED','black')))
    console.log(chalk.bgHex('#FFDF00').underline(color('NAMA : I AM AWANG','black')))
    console.log(chalk.bgHex('#FFDF00').underline(color('WA : 6287727925499','black')))
     console.log(chalk.bgHex('#FFDF00').underline(color('SCRIPT WAS RUN WELL..','red')))
    ALDI.on('open', () => {
        success('2', 'Connected')
    })
    await ALDI.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./Ziyx.json', JSON.stringify(ALDI.base64EncodedAuthInfo(), null, '\t'))
	forks('2',colors.bold.white("\nMenunggu Pesan Baru...\n  「☢︎︎」I'AM AWANG"));

/*    ALDI.on('CB:action,,battery', json => {
			const batteryLevelStr = json[2][0][1].value
			const batterylevel = parseInt(batteryLevelStr)
			lolcatjs.fromString('⟨ info ⟩ your battery:'+ batterylevel +'%')
			//console.log(battery);
		})*/
    ALDI.on (`CB:action,,battery`, json => { // Work Dengan Style Keren
       
    let batteryLevelStr = json[2][0][1].value
         
    let batterylevel = parseInt (batteryLevelStr)
          
    let isBattre = batterylevel + "%"
              
    let isCharge = json[2][0][1].live
               
    console.log(json[2][0][1])
         
    console.log(color('     Battery : ' + isBattre + '',"skyblue"), color(', Charge : ' + isCharge + '', "orange")) // Arifi Razzaq OFFICIAL 
    
    })


    		
    // Calling Action ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
    
    ALDI.on('CB:action,,call', async json => { 
    //Udah Detect Otomatis, Cuma Case On/Off nya belum Siap, Susah Kalau Pake "use strict"; cok!
    
    let callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
    ALDI.sendMessage(callerId, memek.actioncall, MessageType.text)
    await sleep(4000)
        
    await ALDI.blockUser(callerId, "add") // Block user
    
    })
    
	//welcome
	ALDI.on('group-participants-update', async (anu) => {
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		if (!welkom.includes(anu.jid)) return
		try {
		    fkontakk = { key: {
		    fromMe: false,
		    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6285697725326-1604595598@g.us' } : {})
		    },
		    message: {
		    "contactMessage":{"displayName":fake,"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;ALDI;;;\nFN:ALDI\nitem1.TEL;waid=6285697725326:+62 85697725326\nitem1.X-ABLabel:Mobile\nEND:VCARD"
		     }}}
		     const mdata = await ALDI.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
         ini_user = ALDI.contacts[num]
         namaewa = ini_user.notify
         member = mdata.participants.length
          try {
               var ppimg = await ALDI.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            try {
                var ppgc = await ALDI.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
            if (anu.action == 'add') {
            img = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/welcomer?nama=${encodeUrl(namaewa)}&namaGb=${encodeUrl(mdata.subject)}&pepeGb=${shortgc.data}&totalMem=${mdata.participants.length}&pepeUser=${shortpc.data}&bege=https://i.ibb.co/WyvDRgy/20210422-044002.jpg&apikey=hardianto`)
            
            teks = `
◧ ʜᴀʟʟᴏ
@${num.split('@')[0]}
□ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ
□ ${mdata.subject}


◧ ɪɴᴛʀᴏ ᴅᴜʟᴜ
□ ɴᴀᴍᴀ :
□ ᴜᴍᴜʀ :
□ ᴋᴇʟᴀs :
□ ᴀsᴋᴏᴛ :

Deskripsi
⌬━━━━━━━━━━━⌬
${mdata.desc}
⌬━━━━━━━━━━━⌬
`
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1

mhan = await ALDI.prepareMessage(mdata.id, kma, image, {thumbnail: img})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
ALDI.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
sendButImage(mdata.id, teks, 'Welcome message', img, [{buttonId: 'X - Dev Team', buttonText: {displayText: 'Siap bro !'}, type: 1}], {thumbnail: img, "contextInfo": {mentionedJid: [num]}, quoted: {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `+${num.split('@')[0]} Join`, 'jpegThumbnail': fs.readFileSync('./image/fake.jpeg')}}}})
      
}
//===========================[ BATAS NYA ]=============================\\
if (anu.action == 'remove') {
buffa = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/leave?nama=${namaewa}&namaGb=${encodeUrl(mdata.subject)}&pepeGb=${shortgc.data}&totalMem=${mdata.participants.length}&pepeUser=${shortpc.data}&bege=https://i.ibb.co/WyvDRgy/20210422-044002.jpg&apikey=hardianto`)
teks = `${namaewa} sayoooonara👋`
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ALDI.prepareMessage(mdata.id, kma, image, {thumbnail: buffa})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
ALDI.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
sendButImage(mdata.id, teks, 'Leave message', buffa, [{buttonId: 'X - Dev Team', buttonText: {displayText: 'Bye 👋'}, type: 1}], {thumbnail: buffa, "contextInfo": {mentionedJid: [num]}, quoted: {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `+${num.split('@')[0]} Leave`, 'jpegThumbnail': fs.readFileSync('./image/fake.jpeg')}}}})
}
if (anu.action == 'promote') {
img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Selamat anda menjadi admin group!&pp=${shortpc.data}&bg=${imgibb}`)
teks = `PROMOTE DETECT\nNomor: ${num.replace('@s.whatsapp.net', '')}\n
Pesan: Selamat anda telah menjadi admin Group!!\n@${num.split('@')[0]}`
//ALDI.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
ALDI.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]},
            
quoted: {
"key": {
"fromMe": false,
"participant": `0@s.whatsapp.net`,
"remoteJid": `0@s.whatsapp.net`
},
"message": {
"groupInviteMessage": {
"groupJid": "628983583288-1620319322@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": "IstMeAwang",
"jpegThumbnail": fs.readFileSync('./image/fake.jpeg'),
"caption": `selamat anda kena\npromote`
}

}
}
})
} else if (anu.action == 'demote') {
img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Awokawok di unadmin, mampus:v&pp=${shortpc.data}&bg=${imgibb}`)
teks = `DEMOTE DETECT\n Nomor: ${num.replace('@s.whatsapp.net', '')}\nPesan: slamat anda telah di unadmin dari group ini\nawokawokawok\n@${num.split('@')[0]}`
//ALDI.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
ALDI.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]},
quoted: {
"key": {
"fromMe": false,
"participant": `0@s.whatsapp.net`,
"remoteJid": `0@s.whatsapp.net`
},
"message": {
"groupInviteMessage": {
"groupJid": "628983583288-1620319322@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": "IstMeAwang",
"jpegThumbnail": fs.readFileSync('./image/fake.jpeg'),
"caption": `yahaha wahyuu kasihan\n di demote`
}
}
}
})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})








ALDI.on('group-update', async (anu) => {
if (!gcdetect.includes(anu.jid)) return
fkontakk = { key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6285697725326-1604595598@g.us' } : {})
               },
               message: {
                  "contactMessage":{"displayName":fake,"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;ALDI FAUZI;;;\nFN:ALDI\nitem1.TEL;waid=6285697725326:+6285697725326\nitem1.X-ABLabel:Mobile\nEND:VCARD"
               }}}
  metdata = await ALDI.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    ALDI.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Opened ] - In ${metdata.subject}`)
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    ALDI.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Closed ] - In ${metdata.subject}`)
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    ALDI.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    ALDI.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    ALDI.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
})
    ALDI.on('chat-update', async (message) => {
        require('./ACHIL.js')(ALDI, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
