/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

/**
   * Recode by Miku21
   * Contact Me on wa.me/6283834685279
   * Follow https://github.com/Miku21750
   * Script Free ^^
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, generateOrGetPreKeys, MessageType, MessageOption, Mimetype } = require('@adiwajshing/baileys')
const fs = require('fs')
const apiZenz = ``
const randomFile = require('select-random-file')
const util = require('util')
const PixivApi = require('pixiv-api-client');
const pixiv = new PixivApi();
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const xmlParser = require('xml-js')
// const xmlParser2 = require('xml2json');
const http = require('http')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const express = require('express')
const ap = express();
const FastSpeedTest = require("fast-speedtest-api")
const ejs = require('ejs')
const { Brainly } = require('brainly-scraper-v2')
const { tiktokdl, tiktokdlv2, tiktokdlv3, savefrom } = require('@bochilteam/scraper')
const brain = new Brainly()
const htmlPdf = require('html-pdf')
const levelling = require('./lib/levelling')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const { blackJackPlayer, blackJackDealer } = require('./src/Player.js')
const ps = require("prompt-sync")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
//const { wait } = require('../termux-bot-wa/lib/functions')
// const multer = require('multer')
// //const { diskStorage } = require('multer')
// const diskStorage = multer.diskStorage({destination: function (req, file,cb){
//     cb(null,path.join(___dirname,"/uploads"))
// },filename: function (req,file,cb){
//     cb(null,file.fieldname + "-" + Date.now()+path.extname(file.originalname))
// },})
const cooldown = 300000
const potion = 500
const Spotion = 150
const Bdiamond = 3000
const Sdiamond = 1000
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2000
const Smythic = 500
const Blegendary = 7500
const Slegendary = 3000
const Bsampah = 10
const Ssampah = 2
const Bpetcrate = 10000
const Spetcrate = 5000

// // read database
// //if (typeof user !== 'object') global.db.data.users[m.sender] = {}
// let tebaklagu = (typeof db.data.game.tebaklagu !== 'object' && db.data.game.tebaklagu instanceof Array) ? db.data.game.tebaklagu : db.data.game.tebaklagu = []
// let _family100 = (typeof db.data.game.family100 !== 'object' && db.data.game.family100 instanceof Array) ? db.data.game.family100 : db.data.game.family100 = []
// let kuismath = (typeof db.data.game.math !== 'object' && db.data.game.math instanceof Array) ? db.data.game.math : db.data.game.math = []
// let tebakgambar = (typeof db.data.game.tebakgambar !== 'object' && db.data.game.tebakgambar instanceof Array) ? db.data.game.tebakgambar : db.data.game.tebakgambar = []
// let tebakkata = (typeof db.data.game.tebakkata !== 'object' && db.data.game.tebakkata instanceof Array) ? db.data.game.tebakkata : db.data.game.tebakkata = []
// let caklontong = (typeof db.data.game.caklontong !== 'object' && db.data.game.caklontong instanceof Array) ? db.data.game.caklontong : db.data.game.caklontong = []
// let caklontong_desk = (typeof db.data.game.caklontong_desk !== 'object' && db.data.game.caklontong_desk instanceof Array) ? db.data.game.caklontong_desk : db.data.game.caklontong_desk = []
// let tebakkalimat = (typeof db.data.game.tebakkalimat !== 'object' && db.data.game.tebakkalimat instanceof Array) ? db.data.game.tebakkalimat : db.data.game.tebakkalimat = []
// let tebaklirik = (typeof db.data.game.tebaklirik !== 'object' && db.data.game.tebaklirik instanceof Array) ? db.data.game.tebaklirik : db.data.game.tebaklirik = []
// let tebaktebakan = (typeof db.data.game.tebaktebakan !== 'object' && db.data.game.tebaktebakan instanceof Array) ? db.data.game.tebaktebakan : db.data.game.tebaktebakan = []
// let tebakkimia = (typeof db.data.game.tebakkimia !== 'object' && db.data.game.tebakkimia instanceof Array) ? db.data.game.tebakkimia : db.data.game.tebakkimia = []
// let tebakbendera = (typeof db.data.game.tebakbendera !== 'object' && db.data.game.tebakbendera instanceof Array) ? db.data.game.tebakbendera : db.data.game.tebakbendera = []
// let susunkata = (typeof db.data.game.susunkata !== 'object' && db.data.game.susunkata instanceof Array) ? db.data.game.susunkata : db.data.game.susunkata = []
// let tebakcharanime = (typeof db.data.game.tebakcharanime !== 'object' && db.data.game.tebakcharanime instanceof Array) ? db.data.game.tebakcharanime : db.data.game.tebakcharanime = []
// let menfess = (typeof db.data.game.menfess !== 'object' && db.data.game.menfess instanceof Array) ? db.data.game.menfess : db.data.game.menfess = []
// let vote = (typeof db.data.game.vote !== 'object' && db.data.game.vote instanceof Array) ? db.data.game.vote : db.data.game.vote = []
// let fight = db.data.game.fight = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {

    try {

        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        //const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        //if(!/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)) return
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)

        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => { }) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)


        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]

            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            //ini penting nanti buat nambahin database
            if (user) {
                if (!isNumber(user.money)) user.money = 0
                if (!'banned' in user) user.banned = false
                if (!'bannedReason' in user) user.bannedReason = ''
                if (!isNumber(user.exp)) user.exp = 0
                if (!isNumber(user.jobexp)) user.jobexp = 0
                if (!isNumber(user.joblevel)) user.joblevel = 0
                if (!isNumber(user.jobcode)) user.jobcode = 0
                if (!('job' in user)) user.job = null
                if (!isNumber(user.nextjoblevel)) user.nextjoblevel = 20
                if (!isNumber(user.nextjobexp)) user.nextjobexp = 20
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
                if (!isNumber(user.level)) user.level = 0
                //let nextLevel = db.data.users[m.sender].nextLevel
                //let nextLevelExp = db.data.users[m.sender].nextLevelExp
                if (!isNumber(user.nextLevel)) user.nextLevel = 0
                if (!isNumber(user.nextLevelExp)) user.nextLevelExp = 10
                if (isPremium) user.premium = isPremium
                //set name use name or pushname
                if (!('name' in user)) user.name = m.pushName
                //getnumber
                if (!('number' in user)) user.number = m.sender
                if(!('coupleUser' in user)) user.coupleUser = '';
                //set waifu 
                if (!'waifu' in user) user.waifu = null
                if (!isNumber(user.waifuexp)) user.waifuexp = 0
                if (!('rumah' in user)) user.rumah = false
                if (!isNumber(user.kasur)) user.kasur = 0
                if (!('lahan' in user)) user.lahan = false
                if (!('jenis_rumah' in user)) user.jenis_rumah = ''
                if (!('jenis_lahan' in user)) user.jenis_lahan = ''
                if (!('jenis_kamar' in user)) user.jenis_kamar = '1'
                if (!('nama_rumah' in user)) user.nama_rumah = ''
                if (!('nama_lahan' in user)) user.nama_lahan = ''
                if (!('nama_kamar' in user)) user.nama_kamar = 'Kasur Busa'
                if (!('nikah' in user)) user.nikah = false
                if (!('anak' in user)) user.anak = false
                if (!('nama_anak' in user)) user.nama_anak = ''
                if (!isNumber(user.hp)) user.hp = 100
                if (!isNumber(user.sp)) user.sp = 50
                if (!('fish' in user)) user.fish = []
                if (!isNumber(user.diamond)) user.diamond = 0
                if (!isNumber(user.iron)) user.iron = 0
                if (!isNumber(user.crymiko)) user.crymiko = 0
                if (!isNumber(user.wifmiko)) user.wifmiko = 0
                if (!isNumber(user.GeoCoin)) user.geocoin = 0

                if (!isNumber(user.common)) user.common = 0
                if (!isNumber(user.uncommon)) user.uncommon = 0
                if (!isNumber(user.mythic)) user.mythic = 0
                if (!isNumber(user.legendary)) user.legendary = 0
                if (!isNumber(user.pet)) user.pet = 0

                if (!isNumber(user.potion)) user.potion = 0
                if (!isNumber(user.sampah)) user.sampah = 0
                if (!isNumber(user.armor)) user.armor = 0

                if (!isNumber(user.kucing)) user.kucing = 0
                if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
                if (!isNumber(user.kuda)) user.kuda = 0
                if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
                if (!isNumber(user.rubah)) user.rubah = 0
                if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
                if (!isNumber(user.anjing)) user.anjing = 0
                if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
                if (!isNumber(user.anakkucing)) user.anakkucing = 0
                if (!isNumber(user.anakkuda)) user.anakkuda = 0
                if (!isNumber(user.anakrubah)) user.anakrubah = 0
                if (!isNumber(user.anakanjing)) user.anakanjing = 0
                if (!isNumber(user.makananpet)) user.makananpet = 0

                if (!isNumber(user.antispam)) user.antispam = 0
                if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0

                if (!isNumber(user.kayu)) user.kayu = 0
                if (!isNumber(user.batu)) user.batu = 0
                if (!isNumber(user.string)) user.string = 0
                if (!isNumber(user.sword)) user.sword = 0
                if (!isNumber(user.sworddurability)) user.sworddurability = 0
                if (!isNumber(user.pickaxe)) user.pickaxe = 0
                if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
                if (!isNumber(user.fishingrod)) user.fishingrod = 0
                if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0

                if (!isNumber(user.lastadventure)) user.lastadventure = 0
                if (!isNumber(user.lastfishing)) user.lastfishing = 0
                if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
                if (!isNumber(user.lastduel)) user.lastduel = 0
                if (!isNumber(user.lastmining)) user.lastmining = 0
                if (!isNumber(user.lasthunt)) user.lasthunt = 0
                if (!isNumber(user.lastclaim)) user.lastclaim = 0
                if (!isNumber(user.lastweekly)) user.lastweekly = 0
                if (!isNumber(user.lastmonthly)) user.lastmonthly = 0

            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
                premium: isPremium,
                money: 0,
                banned: false,
                bannedReason: '',
                exp: 0,
                jobexp: 0,
                joblevel: 0,
                jobcode: 0,
                job: null,
                nextjoblevel: 20,
                nextjobexp: 20,
                level: 1,
                nextLevel: 0,
                nextLevelExp: 10,
                name: m.pushName,
                number: m.sender,
                coupleUser: '',
                waifu: null,
                waifuexp: 0,
                rumah: false,
                kasur: 0,
                lahan: false,
                jenis_rumah: '',
                jenis_lahan: '',
                jenis_kamar: '1',
                nama_rumah: '',
                nama_lahan: '',
                nama_kamar: 'Kasur Busa',
                nikah: false,
                anak: false,
                nama_anak: '',
                hp: 100,
                sp: 50,
                fish: [],
                diamond: 0,
                iron: 0,
                crymiko: 0,
                wifmiko: 0,
                geocoin: 0,
                common: 0,
                uncommon: 0,
                mythic: 0,
                legendary: 0,
                pet: 0,
                potion: 0,
                sampah: 0,
                armor: 0,
                kucing: 0,
                kucinglastclaim: 0,
                kuda: 0,
                kudalastclaim: 0,
                rubah: 0,
                rubahlastclaim: 0,
                anjing: 0,
                anjinglastclaim: 0,
                anakkucing: 0,
                anakkuda: 0,
                anakrubah: 0,
                anakanjing: 0,
                makananpet: 0,
                antispam: 0,
                antispamlastclaim: 0,
                kayu: 0,
                batu: 0,
                string: 0,
                sword: 0,
                sworddurability: 0,
                pickaxe: 0,
                pickaxedurability: 0,
                fishingrod: 0,
                fishingroddurability: 0,
                lastadventure: 0,
                lastfishing: 0,
                lastdungeon: 0,
                lastduel: 0,
                lastmining: 0,
                lasthunt: 0,
                lastclaim: 0,
                lastweekly: 0,
                lastmonthly: 0,
            }

            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antibadword' in chats)) chats.antibadword = false
                if (!('badword' in chats)) chats.badword = null
                if (!('nsfw' in chats)) chats.nsfw = false
                if (!('setwelcome' in chats)) chats.welcome = ''
                if (!('setbye' in chats)) chats.bye = null

            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antibadword: false,
                badword: null,
                nsfw: false,
                welcome: '',
                bye: null,
            }

            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('templateImage' in setting)) setting.templateImage = true
                if (!('templateVideo' in setting)) setting.templateVideo = false
                if (!('templateGif' in setting)) setting.templateGif = false
                if (!('templateMsg' in setting)) setting.templateMsg = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                templateImage: true,
                templateVideo: false,
                templateGif: false,
                templateMsg: false,
            }
            //game
            let game = global.db.data.game
            if (typeof game !== 'object') global.db.data.game = {}
            if (game) {
                //if(!('fish' in game)) game.fish = []
                if (!('tebaklagu' in game)) game.tebaklagu = []
                if (!('family100' in game)) game.family100 = []
                if (!('math' in game)) game.math = []
                if (!('tebakgambar' in game)) game.tebakgambar = []
                if (!('tebakkata' in game)) game.tebakkata = []
                if (!('caklontong' in game)) game.caklontong = []
                if (!('caklontong_desk' in game)) game.caklontong_desk = []
                if (!('tebakkalimat' in game)) game.tebakkalimat = []
                if (!('tebaklirik' in game)) game.tebaklirik = []
                if (!('tebaktebakan' in game)) game.tebaktebakan = []
                if (!('tebakkimia' in game)) game.tebakkimia = []
                if (!('tebakbendera' in game)) game.tebakbendera = []
                if (!('susunkata' in game)) game.susunkata = []
                if (!('tebakcharanime' in game)) game.tebakcharanime = []
                if (!('menfess' in game)) game.menfess = []
                if (!('vote' in game)) game.vote = []
                if (!('akinatorServer' in game)) game.akinatorServer = []
                if (!('werewolf' in game)) game.werewolf = []
                if (!('blackjack' in game)) game.blackjack = []
                if (!('jedoran' in game)) game.jedoran = []
                if (!('putus' in game)) game.putus = []


            } else global.db.data.game = {
                tebaklagu: [],
                family100: [],
                math: [],
                tebakgambar: [],
                tebakkata: [],
                caklontong: [],
                caklontong_desk: [],
                tebakkalimat: [],
                tebaklirik: [],
                tebaktebakan: [],
                tebakkimia: [],
                tebakbendera: [],
                susunkata: [],
                tebakcharanime: [],
                menfess: [],
                vote: [],
                akinatorServer: [],
                werewolf: [],
                blackjack: [],
                jedoran: [],
                putus: [],
            }

        } catch (err) {
            console.error(err)
        }
        let tebaklagu = db.data.game.tebaklagu
        let _family100 = db.data.game.family100
        let kuismath = db.data.game.math
        let tebakgambar = db.data.game.tebakgambar
        let tebakkata = db.data.game.tebakkata
        let caklontong = db.data.game.caklontong
        let caklontong_desk = db.data.game.caklontong_desk
        let tebakkalimat = db.data.game.tebakkalimat
        let tebaklirik = db.data.game.tebaklirik
        let tebaktebakan = db.data.game.tebaktebakan
        let tebakkimia = db.data.game.tebakkimia
        let tebakbendera = db.data.game.tebakbendera
        let susunkata = db.data.game.susunkata
        let tebakcharanime = db.data.game.tebakcharanime
        let menfess = db.data.game.menfess
        let vote = db.data.game.vote
        // let fight = db.data.game.fight 
        let akinatorServer = db.data.game.akinatorServer
        let werewolf = db.data.game.werewolf
        let blackjack = db.data.game.blackjack
        let jedoran = db.data.game.jedoran
        let putus = db.data.game.putus

        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.readMessages(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        // reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

        // auto set bio
        if (db.data.settings[botNumber].autobio) {
            let setting = global.db.data.settings[botNumber]
            if (new Date() * 1 - setting.status > 1000) {
                let uptime = await runtime(process.uptime())
                await hisoka.setStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
                setting.status = new Date() * 1
            }
        }

        // Anti Link
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
                if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await hisoka.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
                if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
                if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
                hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }

        //anti badword
        if (db.data.chats[m.chat].antibadword) {
            let badword = db.data.chats[m.chat].badword
            for (let i of badword) {
                if (budy.match(i)) {
                    m.reply(`「 ANTI BADWORD 」\n\nKamu terdeteksi mengirim badword, maaf kamu akan di kick !`)
                    if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                    if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
                    if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
                    hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
            }
        }

        // Mute Chat
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }
        if (db.data.users[m.sender].banned) {
            return
        }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
            let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
            let { text, mentionedJid } = hash
            let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
                userJid: hisoka.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            hisoka.ev.emit('messages.upsert', msg)
        }

        if (('family100' + m.chat in _family100) /*&& isCmd*/) {
            kuis = true
            let room = _family100['family100' + m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = ` 
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
                return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
            }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) } }).then(mes => { return _family100['family100' + m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100' + m.chat]
        }
        if (tebaklagu.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = tebaklagu[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                // await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                await hisoka.sendText(`🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklagu[m.chat]
            } else return
        }

        if (kuismath.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = kuismath[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\nKamu mendapat ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.chat]
            } else return
        }
        console.log(menfess.hasOwnProperty(m.chat), isCmd)
        if (menfess.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            let txt = `Ada balasan dari menfess kamu dari @${menfess[m.chat].target.split('@')[0]}\n\n *${budy}* \n\nnote: _balas lagi secara manual_`
            //let menst = [orang, jodoh]
            let menst = [menfess[m.chat].target, menfess[m.chat].asal]
            if (budy.toLowerCase()) {
                hisoka.sendText(`${menfess[m.chat].asal}`, txt, m, { mentions: menst })
                delete menfess[m.chat]
            } else return
        }
        // if(akinatorServer.hasOwnProperty(m.chat)){
        //     kuis = true

        // }
        if (tebakgambar.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = tebakgambar[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                //get exp and money
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                // await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                await hisoka.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP`,m)
                delete tebakgambar[m.chat]
            } else return
        }

        if (tebakbendera.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = tebakbendera[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                // await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                await hisoka.sendText(m.chat,`🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP`,m)
                delete tebakbendera[m.chat]
            }
        }
        if (tebakkimia.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = tebakkimia[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                //get exp and money
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                // await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kimia', buttonText: { displayText: 'Tebak Kimia' }, type: 1 }], `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                await hisoka.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP`,m)
                delete tebakgambar[m.chat]
            } else return
        }
        if (tebakkata.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = tebakkata[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                // await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nKamu mendapat ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                await hisoka.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP`,m)
                delete tebakkata[m.chat]
            } else return
        }

        if (caklontong.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = caklontong[m.chat]
            deskripsi = caklontong_desk[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                // await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\nKamu mendapat ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                await hisoka.sendText(m.chat, `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP`,m)
                delete caklontong[m.chat]
                delete caklontong_desk[m.chat]
            } else return
        }

        if (tebakkalimat.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = tebakkalimat[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                // await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\nKamu mendapat ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                await hisoka.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP`,m)
                delete tebakkalimat[m.chat]
            } else return
        }

        if (tebaklirik.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = tebaklirik[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                // await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\nKamu mendapat ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                await hisoka.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP`,m)
                delete tebaklirik[m.chat]
            } else return
        }

        if (tebaktebakan.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = tebaktebakan[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                // await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\nKamu mendapat ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                await hisoka.sendText(m.chat, `🎮 Tebak tebakan 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP`,m)
                delete tebaktebakan[m.chat]
            } else return
        }
        if (susunkata.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = susunkata[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                // await hisoka.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: 'Susun Kata' }, type: 1 }], `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\nKamu mendapat ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                await hisoka.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP`,m)
                delete susunkata[m.chat]
            } else return
        }
        if (tebakcharanime.hasOwnProperty(m.chat) /*&& isCmd*/) {
            kuis = true
            jawaban = tebakcharanime[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                // await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak charanime', buttonText: { displayText: 'Tebak Char Anime' }, type: 1 }], `🎮 Tebak Char Anime 🎮\n\nJawaban Benar 🎉\nKamu mendapat ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                await hisoka.sendText(m.chat, `🎮 Tebak Char Anime 🎮\n\nJawaban Benar 🎉\nKamu mendapatkan ${money} MIKO dan ${exp} EXP`,m)
                delete tebakcharanime[m.chat]
            } else return
        }

        //TicTacToe
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                m.reply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                }[ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                }[v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) })
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        //jedoran
        this.jedoran = this.jedoran ? this.jedoran : {}
        let jedor = Object.values(this.jedoran).find(jedor => jedor.id && jedor.status && [jedor.p, jedor.p2].includes(m.sender))
        if(jedor){
            let org = [jedor.p2, jedor.p]
            if (m.sender == jedor.p2 && /^(acc(ept)?|terima|gas|oke?|iya|tidak|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && jedor.status == 'wait') {
                if (/^(tidak|tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    hisoka.sendText(m.chat, `@${jedor.p2.split`@`[0]} menolak jedoran anda, yah sayang sekali masih jomblo :), tetep semangat yah ;)`, m, { mentions: org })
                    delete this.jedoran[jedor.id]
                    return !0
                }
                hisoka.sendText(m.chat,`@${jedor.p2.split`@`[0]} telah menerima anda, ciee pj nya nyusul ya ;)`,m, {mentions: org})
                global.db.data.users[jedor.p].coupleUser = jedor.p2
                global.db.data.users[jedor.p2].coupleUser = jedor.p

                delete this.jedoran[jedor.id]
            }

        }
        this.putus = this.putus ? this.putus : {}
        let brk = Object.values(this.putus).find(brk => brk.id && brk.status && [brk.p, brk.p2].includes(m.sender))
        if(brk){
            let org = [brk.p2, brk.p]
            if (m.sender == brk.p2 && /^(acc(ept)?|terima|gas|oke?|iya|tidak|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && !m.isGroup && brk.status == 'wait') {
                if (/^(tidak|tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    hisoka.sendText(brk.p, `@${brk.p2.split`@`[0]} menolak putus anda, Semoga tetep langgeng yah ;)`, m, { mentions: org })
                    delete this.putus[brk.id]
                    return !0
                }
                hisoka.sendText(brk.p,`@${brk.p2.split`@`[0]} telah sepakat, waduh semangat ya ;)`,m, {mentions: org})
                global.db.data.users[brk.p].coupleUser = ''
                global.db.data.users[brk.p2].coupleUser = ''

                delete this.putus[brk.id]
            }

        }

        //Suit PvP
        this.suit = this.suit ? this.suit : {}
        let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            let org = [roof.p2, roof.p]
            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    hisoka.sendText(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m, { mentions: org  })
                    delete this.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu
                hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
                if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
                if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        let org = [roof.p, roof.p2]
                        hisoka.sendText(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m, { mentions: [org] })
                    }
                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
                delete this.suit[roof.id]
            }
        }

        //fight
        this.fight = this.fight ? this.fight : {}
        let arena = Object.values(this.fight).find(arena => arena.id && arena.status && arena.p.includes(m.sender))
        if (arena) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            if(!/^(fight|skill|item|run|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^(fight|skill|item)$/.test(m.text)
            if (m.sender !== arena.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (m.sender === arena.game.winner) isWin = true

            // let win = ''
            // let lose = ''
            // //&& m.isGroup && roof.status == 'wait'
            // if (m.sender == arena.p && m.isGroup && arena.status == 'wait') {
            //     arena.status = 'play'
            //     arena.asal = m.chat
            //     hisoka.sendText(m.chat, `Menemukan lawan, ${m.pushName} melawan ${arena.monster_random_name}\nSilahkan pilih [fight],[skill],[item],atau [run]`)
            //     ///^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)
            //     if (/^(run)/i.test(m.text)) {
            //         hisoka.sendText(m.chat, `${m.pushName} meninggalkan lawan, tidak mendapatkan apa apa`, m)
            //         delete this.fight[arena.id]
            //         return !0
            //     }
            //     if (/^(fight)/i.test(m.text)) {
            //         hisoka.sendText(m.chat, `${m.pushName} memilih untuk bertarung`, m)
            //         arena.status = 'fight'
            //         arena.waktu_milih = setTimeout(() => {
            //             if (!arena.pilih) hisoka.sendText(m.chat)
            //         })
            //     }
            // }
            //hisoka.sendText(m.chat, `${m.pushName} sedang mencari lawan, mohon tunggu.....`,m)

        }


        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            //if (mentionUser = itsMe) throw `Kok saya bang?`
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())

        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        //adding level in every exp
        let exp = db.data.users[m.sender].exp
        let level = db.data.users[m.sender].level
        let nextLevel = db.data.users[m.sender].nextLevel
        let nextLevelExp = db.data.users[m.sender].nextLevelExp
        if (exp >= nextLevelExp) {
            level++
            nextLevelExp = Math.floor(nextLevelExp * 1.5)
            nextLevel = nextLevelExp - exp
            db.data.users[m.sender].level = level
            db.data.users[m.sender].nextLevel = nextLevel
            db.data.users[m.sender].nextLevelExp = nextLevelExp
            m.reply(`
Kamu telah mencapai level ${level}
Kamu akan mencapai level ${level + 1} setelah ${nextLevel} EXP
`.trim())
        }
        let jobexp = db.data.users[m.sender].jobexp
        let joblevel = db.data.users[m.sender].joblevel
        let nextjoblevel = db.data.users[m.sender].nextjoblevel
        let nextjobexp = db.data.users[m.sender].nextjobexp
        if (jobexp >= nextjobexp) {
            joblevel++
            nextjobexp = Math.floor(nextjobexp * 1.2)
            nextjoblevel = nextjobexp - jobexp
            db.data.users[m.sender].joblevel = joblevel
            db.data.users[m.sender].nextjoblevel = nextjoblevel
            db.data.users[m.sender].nextjobexp = nextjobexp
            m.reply(`
Kamu telah mencapai Job level ${level}
Kamu akan mencapai Job level ${level + 1} setelah ${nextLevel} EXP
            `.trim())
        }




        switch (command) {
            //add data global.premium
            case 'addpremium': {
                if (!isCreator) return m.reply('Kamu bukan Creator')

                //const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) 
                // let id = args[0]
                // let time = args[1]
                // if (!id || !time) return m.reply('Kamu perlu mengirimkan ID dan waktu')
                // if (isNaN(time)) return m.reply('Waktu harus berupa angka')
                // if (time < 0) return m.reply('Waktu tidak boleh negatif')
                // if (time > 86400) return m.reply('Waktu tidak boleh lebih dari 1 hari')
                // if (global.premium[id]) return m.reply('ID sudah ada di premium')
                // global.premium[id] = time
                // m.reply('Berhasil menambahkan ID ke premium')
                let user = m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
                if (user == isPremium) throw 'user sudah premium'
                global.premium.push(user.split('@')[0])
                m.reply('berhasil ditambahkan')
            }
                break
            case 'delpremium': {
                if (!isCreator) return m.reply('Kamu bukan Creator')
                let user = m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
                if (user != isPremium) throw 'user belum premium, ingin coba tambah? addpremium'
                global.premium.push(user.split('@')[0])
                m.reply('berhasil ditambahkan')
            }
                break
            case 'changename': {
                if (!text) return m.reply('Kamu perlu mengirimkan nama')
                let user = global.db.data.users[m.sender]
                user.name = text
                hisoka.sendText(m.chat, `Namamu telah diganti menjadi ${user.name}`)
            }
                break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${user.name} Telah Afk${text ? ': ' + text : ''}`)
            }
                break
            case 'ttc': case 'ttt': case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    m.reply('Partner ditemukan!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        }[v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
                    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) })
                    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
                break
            case 'delttc': case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        hisoka.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        m.reply(`Session TicTacToe🎮 tidak ada`)
                    } else throw '?'
                } catch (e) {
                    m.reply('rusak')
                }
            }
                break
            case 'suitpvp': case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
                if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
                if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                this.suit[id] = {
                    chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
                        delete this.suit[id]
                    }, 60000), poin, poin_lose, timeout
                }
            }
                break
            //rpg
            case 'listmonster': {
                let monster = db.data.monster
                let text = ''
                for (let i in monster) {
                    text += `${i}. ${global.sp + monster[i].name}\nStat ${monster[i].Stat}, Desc : ${monster[i].Desc}\n\n`
                }
                hisoka.sendText(m.chat, text, m)
            }
                break
            //fight a random monster
            case 'fight': {
                this.fight = this.fight ? this.fight : {}
                let user = global.db.data.users[m.sender]
                //set hp and sp based on level
                if (Object.values(this.fight).find(arena => arena.id.startsWith('fight') && [arena.p, arena.p2].includes(m.sender))) m.reply(`Selesaikan fight mu yang sebelumnya`)
                if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
                if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
                if (Object.values(this.fight).find(arena => arena.id.startsWith('fight') && [arenaroof.p, arena.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
                let id = 'fight_' + new Date() * 1
                let caption = `_*DUEL PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk berduel

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
                this.fight[id]={
                    chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(()=>{
                        if(this.fight[id]) hisoka.sendText(m.chat, `_Waktu fight habis_`, m)
                        delete this.fight[id]
                    },60000)
                }
//                 let hp = user.level * 10
//                 let sp = user.level * 5
//                 //if (Object.values(this.arena).find(arena => arena.id.startsWith('fight') && arena.p.includes(m.sender))) return m.reply(`Selesaikan fight mu yang sebelumnya`)
//                 let id = 'fight_' + new Date() * 1
//                 let caption = `_*Fight*_
// @${m.sender.split('@')[0]} sedang mencari lawan, mohon tunggu....`
//                 //set monster
//                 let monster = db.data.monster
//                 let monster_id = Object.keys(monster)
//                 let monster_random = monster_id[Math.floor(Math.random() * monster_id.length)]
//                 let monster_random_name = monster[monster_random].name
//                 let monster_random_stat = monster[monster_random].Stat
//                 let monster_random_desc = monster[monster_random].Desc
//                 //randomize hp monster based on level user
//                 let monster_random_hp = Math.floor(Math.random() * (user.level * 10))
//                 let timeout = 800000000
//                 //randomize atk monster based on level user
//                 let monster_random_atk = Math.floor(Math.random() * (user.level * 5))
//                 this.fight[id] = {
//                     chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
//                     id: id,
//                     p: m.sender,
//                     hp: hp,
//                     sp: sp,
//                     status: 'wait',
//                     monster: monster_random_name,
//                     monster_stat: monster_random_stat,
//                     monster_desc: monster_random_desc,
//                     monster_hp: monster_random_hp,
//                     monster_atk: monster_random_atk,
//                     waktu: setTimeout(() => {
//                         if (this.arena[id]) hisoka.sendText(m.chat, `_Waktu fight habis_`, m)
//                         delete this.arena[id]
//                     }, 800000000), timeout
//                 }
//                 console.log(this.fight[id])
            }
                break

            case 'p': {
                m.reply('Iyah?')
            }
                break
            case 'assalamualaikum': {
                m.reply('waalaikumsalam')
            }
                break
            //adventure
            case 'adventure': {
                let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
                let _timers = (cooldown - __timers)
                let timers = clockString(_timers)
                if (global.db.data.users[m.sender].hp > 79) {
                    if (new Date - global.db.data.users[m.sender].lastadventure > cooldown) {
                        let armor = global.db.data.users[m.sender].armor
                        let rubah = global.db.data.users[m.sender].rubah
                        let kuda = global.db.data.users[m.sender].kuda
                        let kucing = global.db.data.users[m.sender].kucing
                        let ____hph = `${Math.floor(Math.random() * 101)}`.trim()
                        let ___hph = (____hph * 1)
                        let kucingnya = (kucing == 0 ? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : '' || kucing == 5 ? 30 : '')
                        let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
                        let __hph = (___hph > 60 ? ___hph - kucingnya - armornya : ___hph)
                        //const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
                        let hp = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __hph : ___hph)
                        let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
                        let uang = `${Math.floor(Math.random() * 500)}`.trim()
                        let _potion = `${Math.floor(Math.random() * 2)}`.trim()
                        let potion = (_potion * 1)
                        let _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '')
                        let diamond = (_diamond * 1)
                        let _common = `${Math.floor(Math.random() * 3)}`.trim()
                        let common = (_common * 1)
                        let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
                        let uncommon = (_uncommon * 1)
                        let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
                        let mythic = (_mythic * 1)
                        let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
                        let sampah = `${Math.floor(Math.random() * 300)}`.trim()
                        let legendary = (_legendary * 1)
                        let str = `
    Nyawa mu berkurang -${hp * 1} karena Kamu telah berpetualang sampai ${pickRandom(['Jepang', 'Korea', 'Bali', 'Amerika', 'Iraq', 'Arab', 'Pakistan', 'German', 'Finlandia', 'Ke bawa dunia mimpi', 'Ujung dunia', 'Mars', 'Bulan', 'Pluto', 'Matahari', 'Hatinya dia', '...'])} dan mendapatkan
    *exp:* ${exp} 
    *uang:* ${uang}
    *sampah:* ${sampah}${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*uncommon crate:* ' + uncommon + ''}
    `.trim()
                        hisoka.sendText(m.chat, str, m)
                        if (mythic > 0) {
                            global.db.data.users[m.sender].mythic += mythic * 1
                            hisoka.sendText(m.chat, '*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + ' Mythic Crate', m)
                        }
                        if (legendary > 0) {
                            global.db.data.users[m.sender].legendary += legendary * 1
                            hisoka.sendText(m.chat, '*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + ' Legendary Crate', m)
                        }
                        global.db.data.users[m.sender].hp -= hp * 1
                        global.db.data.users[m.sender].exp += exp * 1
                        global.db.data.users[m.sender].money += uang * 1
                        global.db.data.users[m.sender].potion += potion * 1
                        global.db.data.users[m.sender].diamond += diamond * 1
                        global.db.data.users[m.sender].common += common * 1
                        global.db.data.users[m.sender].uncommon += uncommon * 1
                        global.db.data.users[m.sender].sampah += sampah * 1
                        global.db.data.users[m.sender].lastadventure = new Date * 1
                    } else hisoka.sendText(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi`, m)
                } else hisoka.sendText(m.chat, 'Minimal 80 hp untuk bisa berpetualang, beli nyawa dulu dengan ketik *' + prefix + command + 'shop buy potion <jumlah>*\ndan ketik *' + prefix + command + 'use potion <jumlah>*\n\n_Untuk mendapat MIKO dan potion gratis ketik_ *' + prefix + command + 'claim*', m)
            }
                break
            case 'shop': case 'adventureshop': {
                const _armor = global.db.data.users[m.sender].armor
                const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
                let type = (args[0] || '').toLowerCase()
                let _type = (args[1] || '').toLowerCase()
                let jualbeli = (args[0] || '').toLowerCase()
                const Kchat = `
            ${prefix}shop <Buy|sell> <item> <jumlah>\n
            Contoh penggunaan: *${prefix}shop buy potion 1*\n\n
            List Barang:\n\n
            *Barang   |  Harga beli*\n
            Potion:       ${potion}
            Diamond:     ${Bdiamond}
            Common:     ${Bcommon}
            Uncommon:  ${Buncommon}
            Mythic:     ${Bmythic}
            Legendary: ${Blegendary}
            Sampah:     ${Bsampah}
            Armor:       ${armor}
            Pet Crate :     ${Bpetcrate}\n\n
            *Barang   | Harga Jual*\n
            Potion:       ${Spotion}
            Diamond:     ${Sdiamond}
            Common:     ${Scommon}
            Uncommon:  ${Suncommon}
            Mythic:     ${Smythic}
            Legendary: ${Slegendary}
            Sampah:     ${Ssampah}
            Pet Crate:     ${Spetcrate}\n\n
            `.trim()
                try {
                    if (/shop|toko/i.test(command)) {
                        const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
                        const sampah = global.db.data.users[m.sender].sampah
                        switch (jualbeli) {
                            case 'buy':
                                switch (_type) {
                                    case 'potion':
                                        if (global.db.data.users[m.sender].money >= potion * count) {
                                            global.db.data.users[m.sender].money -= potion * count
                                            global.db.data.users[m.sender].potion += count * 1
                                            hisoka.sendText(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} MIKO\n\nGunakan potion dengan ketik: *${prefix}use potion <jumlah>*`, m)
                                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} MIKO`,)
                                        break
                                    case 'diamond':
                                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                            global.db.data.users[m.sender].diamond += count * 1
                                            global.db.data.users[m.sender].money -= Bdiamond * count
                                            hisoka.sendText(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} MIKO`, m)
                                        } else hisoka.sendText(m.chat, `MIKO anda tidak cukup`, m)

                                        break
                                    case 'common':
                                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                            global.db.data.users[m.sender].common += count * 1
                                            global.db.data.users[m.sender].money -= Bcommon * count
                                            hisoka.sendText(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} MIKO`, m)
                                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open common*`, m)

                                        break
                                    case 'uncommon':
                                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                            global.db.data.users[m.sender].uncommon += count * 1
                                            global.db.data.users[m.sender].money -= Buncommon * count
                                            hisoka.sendText(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} MIKO`, m)
                                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open uncommon*`, m)

                                        break
                                    case 'mythic':
                                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                            global.db.data.users[m.sender].mythic += count * 1
                                            global.db.data.users[m.sender].money -= Bmythic * count
                                            hisoka.sendText(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} MIKO`, m)
                                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open mythic*`, m)

                                        break
                                    case 'legendary':
                                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                            global.db.data.users[m.sender].legendary += count * 1
                                            global.db.data.users[m.sender].money -= Blegendary * count
                                            hisoka.sendText(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} MIKO`, m)
                                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open legendary*`, m)

                                        break

                                    case 'petcrate': {
                                        if (global.db.data.users[m.sender].money >= Bpetcrate * count) {
                                            global.db.data.users[m.sender].pet += count * 1
                                            global.db.data.users[m.sender].money -= Bpetcrate * count
                                            hisoka.sendText(m.chat, `Succes membeli ${count} Pet Crate dengan harga ${Bpetcrate * count} MIKO`, m)
                                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Pet Crate dengan harga ${Bpetcrate * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open petcrate*`, m)
                                    }
                                        break
                                    case 'sampah':
                                        if (global.db.data.users[m.sender].money >= Bsampah * count) {
                                            global.db.data.users[m.sender].sampah += count * 1
                                            global.db.data.users[m.sender].money -= Bsampah * count
                                            hisoka.sendText(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} MIKO`, m)
                                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} MIKO`.trim(), m)

                                        break
                                    case 'armor':
                                        if (global.db.data.users[m.sender].armor == 5) return hisoka.sendText(m.chat, 'Armormu sudah *Level Max*', m)
                                        if (global.db.data.users[m.sender].money > armor) {
                                            global.db.data.users[m.sender].armor += 1
                                            global.db.data.users[m.sender].money -= armor * 1
                                            hisoka.sendText(m.chat, `Succes membeli armor seharga ${armor} MIKO`, m)
                                        } else hisoka.sendText(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} MIKO`, m)

                                        break
                                    default:
                                        return hisoka.sendText(m.chat, Kchat, m)
                                }
                                break
                            case 'sell':
                                switch (_type) {
                                    case 'potion':
                                        if (global.db.data.users[m.sender].potion >= count * 1) {
                                            global.db.data.users[m.sender].money += Spotion * count
                                            global.db.data.users[m.sender].potion -= count * 1
                                            hisoka.sendText(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} MIKO`.trim(), m)
                                        } else hisoka.sendText(m.chat, `Potion kamu tidak cukup`.trim(), m)
                                        break
                                    case 'common':
                                        if (global.db.data.users[m.sender].common >= count * 1) {
                                            global.db.data.users[m.sender].money += Scommon * count
                                            global.db.data.users[m.sender].common -= count * 1
                                            hisoka.sendText(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} MIKO`.trim(), m)
                                        } else hisoka.sendText(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                                        break
                                    case 'uncommon':
                                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                                            global.db.data.users[m.sender].money += Suncommon * count
                                            global.db.data.users[m.sender].uncommon -= count * 1
                                            hisoka.sendText(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} MIKO`.trim(), m)
                                        } else hisoka.sendText(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                                        break
                                    case 'mythic':
                                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                                            global.db.data.users[m.sender].money += Smythic * count
                                            global.db.data.users[m.sender].mythic -= count * 1
                                            hisoka.sendText(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} MIKO`.trim(), m)
                                        } else hisoka.sendText(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                                        break
                                    case 'legendary':
                                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                                            global.db.data.users[m.sender].money += Slegendary * count
                                            global.db.data.users[m.sender].legendary -= count * 1
                                            hisoka.sendText(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} MIKO`.trim(), m)
                                        } else hisoka.sendText(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                                        break
                                    case 'sampah':
                                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                                            global.db.data.users[m.sender].sampah -= count * 1
                                            global.db.data.users[m.sender].money += Ssampah * count
                                            hisoka.sendText(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} MIKO`, m)
                                        } else hisoka.sendText(m.chat, `Sampah anda tidak cukup`, m)
                                        break
                                    case 'diamond':
                                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                                            global.db.data.users[m.sender].diamond -= count * 1
                                            global.db.data.users[m.sender].money += Sdiamond * count
                                            hisoka.sendText(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} MIKO`, m)
                                        } else hisoka.sendText(m.chat, `Diamond anda tidak cukup`, m)
                                        break
                                    default:
                                        return hisoka.sendText(m.chat, Kchat, m)
                                }
                                break
                            default:
                                return hisoka.sendText(m.chat, Kchat, m)
                        }
                    } else if (/beli|buy/i.test(command)) {
                        const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
                        switch (type) {
                            case 'potion':
                                if (global.db.data.users[m.sender].money >= potion * count) {
                                    global.db.data.users[m.sender].money -= potion * count
                                    global.db.data.users[m.sender].potion += count * 1
                                    hisoka.sendText(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} MIKO\n\nGunakan potion dengan ketik: *${prefix}   <jumlah>*`, m)
                                } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} MIKO`, m)

                                break
                            case 'diamond':
                                if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                    global.db.data.users[m.sender].diamond += count * 1
                                    global.db.data.users[m.sender].money -= Bdiamond * count
                                    hisoka.sendText(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} MIKO`, m)
                                } else hisoka.sendText(m.chat, `MIKO anda tidak cukup`, m)

                                break
                            case 'common':
                                if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                    global.db.data.users[m.sender].common += count * 1
                                    global.db.data.users[m.sender].money -= Bcommon * count
                                    hisoka.sendText(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} MIKO`, m)
                                } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open common*`, m)

                                break
                            case 'uncommon':
                                if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                    global.db.data.users[m.sender].uncommon += count * 1
                                    global.db.data.users[m.sender].money -= Buncommon * count
                                    hisoka.sendText(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} MIKO`, m)
                                } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open uncommon*`, m)

                                break
                            case 'mythic':
                                if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                    global.db.data.users[m.sender].money -= Bmythic * count
                                    hisoka.sendText(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} MIKO`, m)
                                } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open mythic*`, m)

                                break
                            case 'legendary':
                                if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                    global.db.data.users[m.sender].legendary += count * 1
                                    global.db.data.users[m.sender].money -= Blegendary * count
                                    hisoka.sendText(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} MIKO`, m)
                                } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open legendary*`, m)

                                break
                            case 'sampah':
                                if (global.db.data.users[m.sender].money >= Bsampah * count) {
                                    global.db.data.users[m.sender].sampah += count * 1
                                    global.db.data.users[m.sender].money -= Bsampah * count
                                    hisoka.sendText(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} MIKO`, m)
                                } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} MIKO`.trim(), m)

                                break
                            case 'armor':
                                if (global.db.data.users[m.sender].armor == 5) return hisoka.sendText(m.chat, 'Armormu sudah *Level Max*', m)
                                if (global.db.data.users[m.sender].money > armor * 1) {
                                    global.db.data.users[m.sender].armor += 1
                                    global.db.data.users[m.sender].money -= armor * 1
                                    hisoka.sendText(m.chat, `Succes membeli armor seharga ${armor} MIKO`, m)

                                } else hisoka.sendText(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} MIKO`, m)

                                break
                            default:
                                return hisoka.sendText(m.chat, Kchat, m)
                        }
                    } else if (/sell|jual|/i.test(command)) {
                        const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
                        switch (type) {
                            case 'potion':
                                if (global.db.data.users[m.sender].potion >= count * 1) {
                                    global.db.data.users[m.sender].money += Spotion * count
                                    global.db.data.users[m.sender].potion -= count * 1
                                    hisoka.sendText(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} MIKO`.trim(), m)
                                } else hisoka.sendText(m.chat, `Potion kamu tidak cukup`.trim(), m)
                                break
                            case 'common':
                                if (global.db.data.users[m.sender].common >= count * 1) {
                                    global.db.data.users[m.sender].money += Scommon * count
                                    global.db.data.users[m.sender].common -= count * 1
                                    hisoka.sendText(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} MIKO`.trim(), m)
                                } else hisoka.sendText(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                                break
                            case 'uncommon':
                                if (global.db.data.users[m.sender].uncommon >= count * 1) {
                                    global.db.data.users[m.sender].money += Suncommon * count
                                    global.db.data.users[m.sender].uncommon -= count * 1
                                    hisoka.sendText(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} MIKO`.trim(), m)
                                } else hisoka.sendText(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                                break
                            case 'mythic':
                                if (global.db.data.users[m.sender].mythic >= count * 1) {
                                    global.db.data.users[m.sender].money += Smythic * count
                                    global.db.data.users[m.sender].mythic -= count * 1
                                    hisoka.sendText(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} MIKO`.trim(), m)
                                } else hisoka.sendText(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                                break
                            case 'legendary':
                                if (global.db.data.users[m.sender].legendary >= count * 1) {
                                    global.db.data.users[m.sender].money += Slegendary * count
                                    global.db.data.users[m.sender].legendary -= count * 1
                                    hisoka.sendText(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} MIKO`.trim(), m)
                                } else hisoka.sendText(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                                break
                            case 'sampah':
                                if (global.db.data.users[m.sender].sampah >= count * 1) {
                                    global.db.data.users[m.sender].sampah -= count * 1
                                    global.db.data.users[m.sender].money += Ssampah * count
                                    hisoka.sendText(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} MIKO`.trim(), m)
                                } else hisoka.sendText(m.chat, `Sampah anda tidak cukup`.trim(), m)
                                break
                            case 'diamond':
                                if (global.db.data.users[m.sender].diamond >= count * 1) {
                                    global.db.data.users[m.sender].diamond -= count * 1
                                    global.db.data.users[m.sender].money += Sdiamond * count
                                    hisoka.sendText(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} MIKO`, m)
                                } else hisoka.sendText(m.chat, `Diamond anda tidak cukup`, m)
                                break
                            default:
                                return hisoka.sendText(m.chat, Kchat, m)
                        }
                    }
                } catch (e) {
                    hisoka.sendText(m.chat, Kchat, m)
                    console.log(e)
                    if (DevMode) {
                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                            conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                        }
                    }
                }
            }
                break
            case 'buy': {
                const _armor = global.db.data.users[m.sender].armor
                const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
                let type = (args[0] || '').toLowerCase()
                let _type = (args[1] || '').toLowerCase()
                let jualbeli = (args[0] || '').toLowerCase()
                const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
                switch (type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            hisoka.sendText(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} MIKO\n\nGunakan potion dengan ketik: *${prefix}   <jumlah>*`, m)
                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} MIKO`, m)

                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            hisoka.sendText(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} MIKO`, m)
                        } else hisoka.sendText(m.chat, `MIKO anda tidak cukup`, m)

                        break
                    case 'common':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            hisoka.sendText(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} MIKO`, m)
                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open common*`, m)

                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            hisoka.sendText(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} MIKO`, m)
                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open uncommon*`, m)

                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            hisoka.sendText(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} MIKO`, m)
                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open mythic*`, m)

                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            hisoka.sendText(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} MIKO`, m)
                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} MIKO\n\nBuka crate dengan ketik: *${prefix}open legendary*`, m)

                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].money >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].money -= Bsampah * count
                            hisoka.sendText(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} MIKO`, m)
                        } else hisoka.sendText(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} MIKO`.trim(), m)

                        break
                    case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return hisoka.sendText(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            hisoka.sendText(m.chat, `Succes membeli armor seharga ${armor} MIKO`, m)

                        } else hisoka.sendText(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} MIKO`, m)

                        break
                    default:
                        return hisoka.sendText(m.chat, `Apa yang mau dibeli? cek !shop`, m)
                }
            }
                break
            case 'sell': {
                const _armor = global.db.data.users[m.sender].armor
                const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
                let type = (args[0] || '').toLowerCase()
                let _type = (args[1] || '').toLowerCase()
                let jualbeli = (args[0] || '').toLowerCase()
                const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
                switch (type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            hisoka.sendText(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} MIKO`.trim(), m)
                        } else hisoka.sendText(m.chat, `Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            hisoka.sendText(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} MIKO`.trim(), m)
                        } else hisoka.sendText(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            hisoka.sendText(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} MIKO`.trim(), m)
                        } else hisoka.sendText(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            hisoka.sendText(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} MIKO`.trim(), m)
                        } else hisoka.sendText(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            hisoka.sendText(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} MIKO`.trim(), m)
                        } else hisoka.sendText(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].money += Ssampah * count
                            hisoka.sendText(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} MIKO`.trim(), m)
                        } else hisoka.sendText(m.chat, `Sampah anda tidak cukup`.trim(), m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            hisoka.sendText(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} MIKO`, m)
                        } else hisoka.sendText(m.chat, `Diamond anda tidak cukup`, m)
                        break
                    default:
                        return hisoka.sendText(m.chat, `Apa yang mau dijual? cek inv`, m)
                }
            }
                break
            case 'inventory': case 'inv': {
                let user = global.db.data.users[m.sender]
                if (m.mentionedJid[0]) user = global.db.data.users[m.mentionedJid[0]]
                let hp = user.hp
                let armor = user.armor
                let pet = user.pet
                let kucing = user.kucing
                let _kucing = user.anakkucing
                let rubah = user.rubah
                let _rubah = user.anakrubah
                let kuda = user.kuda
                let _kuda = user.anakkuda
                let diamond = user.diamond
                let potion = user.potion
                let common = user.common
                let makananpet = user.makananpet
                let uncommon = user.uncommon
                let mythic = user.mythic
                let legendary = user.legendary
                let level = user.level
                let money = user.money
                let exp = user.exp
                let sampah = user.sampah
                let { min, xp, max } = levelling.xpRange(level, global.multiplier)
                let math = max - xp
                let name = user.name
                let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
                let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
                let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
                let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
                let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
                let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
                let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
                let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
                let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
                let usersmoney = sortedmoney.map(v => v[0])
                let usersdiamond = sorteddiamond.map(v => v[0])
                let userspotion = sortedpotion.map(v => v[0])
                let userssampah = sortedsampah.map(v => v[0])
                let userslevel = sortedlevel.map(v => v[0])
                let userscommon = sortedcommon.map(v => v[0])
                let usersuncommon = sorteduncommon.map(v => v[0])
                let usersmythic = sortedmythic.map(v => v[0])
                let userslegendary = sortedlegendary.map(v => v[0])
                let str = `
            Inventory *${name}*

            hph: *${hp}*
            Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*\n
            MIKO: *${money}*
            Level: *${level}*
            Exp: *${exp}*

            *Inventory*
            Diamond: *${diamond}*
            Potion: *${potion}*
            Sampah: *${sampah}*
            Makanan Pet: *${makananpet}*
            Total inv: *${diamond + potion + sampah + makananpet}* item

            *Crate*
            Common: *${common}*
            Uncommon: *${uncommon}*
            Mythic: *${mythic}*
            Legendary: *${legendary}*
            Pet: *${pet}*

            *Pet*
            Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
            Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
            Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*\n\n
            *Proges*\n
            ╭────────────────
            │Level *${level}* To Level *${level + 1}*
            │Exp *${exp}* -> *${max}* [${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`}]
            ╰────────────────
            ╭────────────────
            │Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah * 100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
            ╰────────────────
            ╭────────────────
            │Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing * 100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
            ╰────────────────
            ╭────────────────
            │Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda * 100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
            ╰────────────────


            *achievement*
            1.Top level *${userslevel.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${userslevel.length}*
            2.Top MIKO *${usersmoney.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${usersmoney.length}*
            3.Top Diamond *${usersdiamond.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${usersdiamond.length}*
            4.Top Potion *${userspotion.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${userspotion.length}*
            5.Top Common *${userscommon.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${userscommon.length}*
            6.Top Uncommon *${usersuncommon.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${usersuncommon.length}*
            7.Top Mythic *${usersmythic.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${usersmythic.length}*
            8.Top Legendary *${userslegendary.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${userslegendary.length}*
            9.Top Sampah *${userssampah.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${userssampah.length}*
            Banned: *No*
            `.trim()
                hisoka.sendText(m.chat, str, m)
            }
                break
            case 'heal': {
                let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
                try {
                    let msgkurang = (pickRandom(['potionmu tidak cukup', 'ciaa gk cukup potionyya :v', 'wtf gk cukup :v', 'beli potion dulu, potionmu gk cukup', 'Duaarr potionmu gk cukup', 'eyyyy potionmu kurang', 'beli dulu lah, masak mau pakai potion tapi gk ada potionnnya :v', 'minta ke orang lain suruh transfer potion, biar potionmu gk kurang :v', 'Beli potion dulu KK']))
                    let msgpenuh = (pickRandom(['Nyawamu sudah penuh', 'coba deh liat inv mu, nyawamu kan dah 100 ngapai ngunain potion lagi?', 'hph mu dah penuh woyy', 'ws kebek weh :v', 'nyawamu dah penuh :v', 'udh weh, udh penuh']))
                    let kucing = global.db.data.users[m.sender].kucing
                    let usepotion = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '' || kucing == 6 ? 70 : '' || kucing == 7 ? 75 : '' || kucing == 8 ? 80 : '' || kucing == 9 ? 85 : '' || kucing == 10 ? 90 : '')
                    let hp = global.db.data.users[m.sender].hp
                    try {
                        let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].hp) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].hp) / usepotion)), 1)
                        let msgsucces = (pickRandom(['success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + '* Potion')
                        if (global.db.data.users[m.sender].hp < 100) {
                            if (global.db.data.users[m.sender].potion >= count * 1) {
                                global.db.data.users[m.sender].potion -= count * 1
                                global.db.data.users[m.sender].hp += usepotion * count
                                hisoka.sendText(m.chat, msgsucces, m)
                            } else hisoka.sendText(m.chat, msgkurang, m)
                        } else hisoka.sendText(m.chat, msgpenuh, m)
                    } catch (e) {
                        console.log(e)
                        m.reply(msgerror)
                        if (DevMode) {
                            let file = require.resolve(__filename)
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                            }
                        }
                    }
                } catch (e) {
                    console.log(e)
                    hisoka.sendText(m.chat, msgerror, m)
                    if (DevMode) {
                        let file = require.resolve(__filename)
                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                            conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                        }
                    }
                }
            }
                break
            case 'use': case 'adventureuse': {
                let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
                try {
                    let msgkurang = (pickRandom(['potionmu tidak cukup', 'ciaa gk cukup potionyya :v', 'wtf gk cukup :v', 'beli potion dulu, potionmu gk cukup', 'Duaarr potionmu gk cukup', 'eyyyy potionmu kurang', 'beli dulu lah, masak mau pakai potion tapi gk ada potionnnya :v', 'minta ke orang lain suruh transfer potion, biar potionmu gk kurang :v', 'Beli potion dulu KK']))
                    let msgpenuh = (pickRandom(['Nyawamu sudah penuh', 'coba deh liat inv mu, nyawamu kan dah 100 ngapai ngunain potion lagi?', 'hph mu dah penuh woyy', 'ws kebek weh :v', 'nyawamu dah penuh :v', 'udh weh, udh penuh']))
                    let kucing = global.db.data.users[m.sender].kucing
                    let usepotion = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '' || kucing == 6 ? 70 : '' || kucing == 7 ? 75 : '' || kucing == 8 ? 80 : '' || kucing == 9 ? 85 : '' || kucing == 10 ? 90 : '')
                    let hp = global.db.data.users[m.sender].hp
                    if (/use|pakai/i.test(command)) {
                        try {
                            let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].hp) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].hp) / usepotion)), 1)
                            let msgsucces = (pickRandom(['success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + '* Potion')
                            if (args[0] === 'potion') {
                                if (global.db.data.users[m.sender].hp < 100) {
                                    if (global.db.data.users[m.sender].potion >= count * 1) {
                                        global.db.data.users[m.sender].potion -= count * 1
                                        global.db.data.users[m.sender].hp += usepotion * count
                                        hisoka.sendText(m.chat, msgsucces, m)
                                    } else hisoka.sendText(m.chat, msgkurang, m)
                                } else hisoka.sendText(m.chat, msgpenuh, m)
                            } else if (args.length > 2 && args[0] === !'potion') m.reply(pickRandom(['Hanya bisa menggunakan potion', 'Mau ngunain apa? Cuma bisa gunain potion :v', 'Wih mau gunain apa kamu, kan hanya bisa potion', 'Waduheck, hanya bisa potion', 'lah, mau gunain apa?, kan hanya bisa potion']) + '\nContoh penggunaan: *' + prefix + 'potion 1*')
                        } catch (e) {
                            console.log(e)
                            m.reply(msgerror)
                            if (DevMode) {
                                let file = require.resolve(__filename)
                                for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                    conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                                }
                            }
                        }
                    } else if (/heal/i.test(command)) {
                        try {
                            let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].hp) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].hp) / usepotion)), 1)
                            let msgsucces = (pickRandom(['success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + '* Potion')
                            if (global.db.data.users[m.sender].hp < 100) {
                                if (global.db.data.users[m.sender].potion >= count * 1) {
                                    global.db.data.users[m.sender].potion -= count * 1
                                    global.db.data.users[m.sender].hp += usepotion * count
                                    hisoka.sendText(m.chat, msgsucces, m)
                                } else hisoka.sendText(m.chat, msgkurang, m)
                            } else hisoka.sendText(m.chat, msgpenuh, m)
                        } catch (e) {
                            console.log(e)
                            m.reply(msgerror)
                            if (DevMode) {
                                let file = require.resolve(__filename)
                                for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                    conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.log(e)
                    hisoka.sendText(m.chat, msgerror, m)
                    if (DevMode) {
                        let file = require.resolve(__filename)
                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                            conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                        }
                    }
                }
            }
                break
            case 'open': {
                let bruh = `${prefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${prefix}open common 10*\n\nlist crate:\n*common*\n*uncommon*\n*mythic*\n*legendary*`
                let _lmao = args[0]
                let Lmao = `Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${prefix}open ${args > 2 ? _lmao : pickRandom(['common', 'uncommon', 'mythic', 'legendary'])} 10*`
                let type = (args[0] || '').toLowerCase()
                let jumlah = (args[1] || '').toLowerCase()
                switch (type) {
                    case 'common':
                        switch (jumlah) {
                            case '1':
                            case 'crate':
                                let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                                let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                                let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                                let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                                let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                                let cm = (_cm * 1)
                                let cc = (_cc * 1)
                                let cp = (_cp * 1)
                                let ce = (_ce * 1)
                                let cu = (_cu * 1)
                                let Hcom = `
            Anda telah membuka *Common crate* dan mendapatkan:${cm > 0 ? `\nMIKO: ${cm}` : ''}${ce > 0 ? `\nExp: ${ce} *exp*` : ''}${cp > 0 ? `\nPotion: ${cp} *potion*` : ''}${cc > 0 ? `\ncommon crate: ${cc} *crate*` : ''}${cu > 0 ? `\nUncommon crate: ${cu} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].common >= 1) {
                                    global.db.data.users[m.sender].common -= 1
                                    global.db.data.users[m.sender].money += cm * 1
                                    global.db.data.users[m.sender].exp += ce * 1
                                    global.db.data.users[m.sender].potion += cp * 1
                                    global.db.data.users[m.sender].uncommon += cu * 1
                                    global.db.data.users[m.sender].common += cc * 1
                                    hisoka.sendText(m.chat, Hcom, m)
                                } else hisoka.sendText(m.chat, 'Common crate anda tidak cukup', m)
                                break
                            case '10':
                                let _cm1 = `${Math.floor(Math.random() * 500)}`.trim()
                                let _cc1 = `${Math.floor(Math.random() * 5)}`.trim()
                                let _cp1 = `${Math.floor(Math.random() * 3)}`.trim()
                                let _ce1 = `${Math.floor(Math.random() * 700)}`.trim()
                                let _cu1 = `${Math.floor(Math.random() * 3)}`.trim()
                                let cm1 = (_cm1 * 1)
                                let cc1 = (_cc1 * 1)
                                let cp1 = (_cp1 * 1)
                                let ce1 = (_ce1 * 1)
                                let cu1 = (_cu1 * 1)
                                let Hcom1 = `
            Anda telah membuka *Common crate* dan mendapatkan:${cm1 > 0 ? `\nMIKO: ${cm1}` : ''}${ce1 > 0 ? `\nExp: ${ce1} *exp*` : ''}${cp1 > 0 ? `\nPotion: ${cp1} *potion*` : ''}${cc1 > 0 ? `\ncommon crate: ${cc1} *crate*` : ''}${cu1 > 0 ? `\nUncommon crate: ${cu1} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].common >= 10) {
                                    global.db.data.users[m.sender].common -= 10
                                    global.db.data.users[m.sender].money += cm1 * 1
                                    global.db.data.users[m.sender].exp += ce1 * 1
                                    global.db.data.users[m.sender].potion += cp1 * 1
                                    global.db.data.users[m.sender].uncommon += cu1 * 1
                                    global.db.data.users[m.sender].common += cc1 * 1
                                    hisoka.sendText(m.chat, Hcom1, m)
                                } else hisoka.sendText(m.chat, 'Common crate anda tidak cukup', m)
                                break
                            case '100':
                                let _cm2 = `${Math.floor(Math.random() * 5000)}`.trim()
                                let _cc2 = `${Math.floor(Math.random() * 50)}`.trim()
                                let _cp2 = `${Math.floor(Math.random() * 20)}`.trim()
                                let _ce2 = `${Math.floor(Math.random() * 7500)}`.trim()
                                let _cu2 = `${Math.floor(Math.random() * 30)}`.trim()
                                let cm2 = (_cm2 * 1)
                                let cc2 = (_cc2 * 1)
                                let cp2 = (_cp2 * 1)
                                let ce2 = (_ce2 * 1)
                                let cu2 = (_cu2 * 1)
                                let Hcom2 = `
            Anda telah membuka *Common crate* dan mendapatkan:${cm2 > 0 ? `\nMIKO: ${cm2}` : ''}${ce2 > 0 ? `\nExp: ${ce2} *exp*` : ''}${cp2 > 0 ? `\nPotion: ${cp2} *potion*` : ''}${cc2 > 0 ? `\ncommon crate: ${cc2} *crate*` : ''}${cu2 > 0 ? `\nUncommon crate: ${cu2} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].common >= 100) {
                                    global.db.data.users[m.sender].common -= 100
                                    global.db.data.users[m.sender].money += cm2 * 1
                                    global.db.data.users[m.sender].exp += ce2 * 1
                                    global.db.data.users[m.sender].potion += cp2 * 1
                                    global.db.data.users[m.sender].uncommon += cu2 * 1
                                    global.db.data.users[m.sender].common += cc2 * 1
                                    hisoka.sendText(m.chat, Hcom2, m)
                                } else hisoka.sendText(m.chat, 'Common crate anda tidak cukup', m)
                                break
                            case '1000':
                                let _cm3 = `${Math.floor(Math.random() * 50000)}`.trim()
                                let _cc3 = `${Math.floor(Math.random() * 350)}`.trim()
                                let _cp3 = `${Math.floor(Math.random() * 100)}`.trim()
                                let _ce3 = `${Math.floor(Math.random() * 80000)}`.trim()
                                let _cu3 = `${Math.floor(Math.random() * 200)}`.trim()
                                let cm3 = (_cm3 * 1)
                                let cc3 = (_cc3 * 1)
                                let cp3 = (_cp3 * 1)
                                let ce3 = (_ce3 * 1)
                                let cu3 = (_cu3 * 1)
                                let Hcom3 = `
            Anda telah membuka *Common crate* dan mendapatkan:${cm3 > 0 ? `\nMIKO: ${cm3}` : ''}${ce3 > 0 ? `\nExp: ${ce3} *exp*` : ''}${cp3 > 0 ? `\nPotion: ${cp3} *potion*` : ''}${cc3 > 0 ? `\ncommon crate: ${cc3} *crate*` : ''}${cu3 > 0 ? `\nUncommon crate: ${cu3} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].common >= 1000) {
                                    global.db.data.users[m.sender].common -= 1000
                                    global.db.data.users[m.sender].money += cm3 * 1
                                    global.db.data.users[m.sender].exp += ce3 * 1
                                    global.db.data.users[m.sender].potion += cp3 * 1
                                    global.db.data.users[m.sender].uncommon += cu3 * 1
                                    global.db.data.users[m.sender].common += cc3 * 1
                                    hisoka.sendText(m.chat, Hcom3, m)
                                } else hisoka.sendText(m.chat, 'Common crate anda tidak cukup', m)
                                break
                            default:
                                return hisoka.sendText(m.chat, Lmao, m)
                        }
                        break
                    case 'uncommon':
                        switch (jumlah) {
                            case '1':
                            case 'crate':
                                let _ud = `${Math.floor(Math.random() * 2)}`.trim()
                                let _ue = `${Math.floor(Math.random() * 100)}`.trim()
                                let _um = `${Math.floor(Math.random() * 150)}`.trim()
                                let _up = `${Math.floor(Math.random() * 2)}`.trim()
                                let _umc = `${Math.floor(Math.random() * 1)}`.trim()
                                let _uu = `${Math.floor(Math.random() * 2)}`.trim()
                                let _uc = `${Math.floor(Math.random() * 3)}`.trim()
                                let ud = (_ud * 1)
                                let ue = (_ue * 1)
                                let um = (_um * 1)
                                let up = (_up * 1)
                                let umc = (_umc * 1)
                                let uu = (_uu * 1)
                                let uc = (_uc * 1)
                                let Hun = `
            Anda telah membuka *Uncommon crate* dan mendapatkan:${um > 0 ? `\nMIKO: ${um}` : ''}${ue > 0 ? `\nExp: ${ue} *exp*` : ''}${ud > 0 ? `\nDiamond: ${ud} *diamond*` : ''}${up > 0 ? `\nPotion: ${up} *potion*` : ''}${uc > 0 ? `\nCommon crate: ${uc} *crate*` : ''}${uu > 0 ? `\nUncommon crate: ${uu} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].uncommon >= 1) {
                                    global.db.data.users[m.sender].uncommon -= 1
                                    global.db.data.users[m.sender].money += um * 1
                                    global.db.data.users[m.sender].diamond += ud * 1
                                    global.db.data.users[m.sender].exp += ue * 1
                                    global.db.data.users[m.sender].potion += up * 1
                                    global.db.data.users[m.sender].common += uc * 1
                                    global.db.data.users[m.sender].uncommon += uu * 1
                                    hisoka.sendText(m.chat, Hun, m)
                                    if (umc > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc} Mythic Crate`)
                                        global.db.data.users[m.sender].mythic += umc * 1
                                    }
                                } else hisoka.sendText(m.chat, 'Uncommon crate anda tidak cukup', m)
                                break
                            case '10':
                                let _ud1 = `${Math.floor(Math.random() * 5)}`.trim()
                                let _ue1 = `${Math.floor(Math.random() * 750)}`.trim()
                                let _um1 = `${Math.floor(Math.random() * 400)}`.trim()
                                let _up1 = `${Math.floor(Math.random() * 7)}`.trim()
                                let _umc1 = `${Math.floor(Math.random() * 2)}`.trim()
                                let _uu1 = `${Math.floor(Math.random() * 4)}`.trim()
                                let _uc1 = `${Math.floor(Math.random() * 7)}`.trim()
                                let ud1 = (_ud1 * 1)
                                let ue1 = (_ue1 * 1)
                                let um1 = (_um1 * 1)
                                let up1 = (_up1 * 1)
                                let umc1 = (_umc1 * 1)
                                let uu1 = (_uu1 * 1)
                                let uc1 = (_uc1 * 1)
                                let Hun1 = `
            Anda telah membuka *Uncommon crate* dan mendapatkan:${um1 > 0 ? `\nMIKO: ${um1}` : ''}${ue1 > 0 ? `\nExp: ${ue1} *exp*` : ''}${ud1 > 0 ? `\nDiamond: ${ud1} *diamond*` : ''}${up1 > 0 ? `\nPotion: ${up1} *potion*` : ''}${uc1 > 0 ? `\nCommon crate: ${uc1} *crate*` : ''}${uu1 > 0 ? `\nUncommon crate: ${uu1} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].uncommon >= 10) {
                                    global.db.data.users[m.sender].uncommon -= 10
                                    global.db.data.users[m.sender].money += um1 * 1
                                    global.db.data.users[m.sender].diamond += ud1 * 1
                                    global.db.data.users[m.sender].exp += ue1 * 1
                                    global.db.data.users[m.sender].potion += up1 * 1
                                    global.db.data.users[m.sender].common += uc1 * 1
                                    global.db.data.users[m.sender].uncommon += uu1 * 1
                                    hisoka.sendText(m.chat, Hun1, m)
                                    if (umc1 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc1} Mythic Crate`)
                                        global.db.data.users[m.sender].mythic += umc1 * 1
                                    }
                                } else hisoka.sendText(m.chat, 'Uncommon crate anda tidak cukup', m)
                                break
                            case '100':
                                let _ud2 = `${Math.floor(Math.random() * 20)}`.trim()
                                let _ue2 = `${Math.floor(Math.random() * 8000)}`.trim()
                                let _um2 = `${Math.floor(Math.random() * 5000)}`.trim()
                                let _up2 = `${Math.floor(Math.random() * 20)}`.trim()
                                let _umc2 = `${Math.floor(Math.random() * 10)}`.trim()
                                let _uu2 = `${Math.floor(Math.random() * 25)}`.trim()
                                let _uc2 = `${Math.floor(Math.random() * 50)}`.trim()
                                let ud2 = (_ud2 * 1)
                                let ue2 = (_ue2 * 1)
                                let um2 = (_um2 * 1)
                                let up2 = (_up2 * 1)
                                let umc2 = (_umc2 * 1)
                                let uu2 = (_uu2 * 1)
                                let uc2 = (_uc2 * 1)
                                let Hun2 = `
            Anda telah membuka *Uncommon crate* dan mendapatkan:${um2 > 0 ? `\nMIKO: ${um2}` : ''}${ue2 > 0 ? `\nExp: ${ue2} *exp*` : ''}${ud2 > 0 ? `\nDiamond: ${ud2} *diamond*` : ''}${up2 > 0 ? `\nPotion: ${up2} *potion*` : ''}${uc2 > 0 ? `\nCommon crate: ${uc2} *crate*` : ''}${uu2 > 0 ? `\nUncommon crate: ${uu2} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].uncommon >= 100) {
                                    global.db.data.users[m.sender].uncommon -= 100
                                    global.db.data.users[m.sender].money += um2 * 1
                                    global.db.data.users[m.sender].diamond += ud2 * 1
                                    global.db.data.users[m.sender].exp += ue2 * 1
                                    global.db.data.users[m.sender].potion += up2 * 1
                                    global.db.data.users[m.sender].common += uc2 * 1
                                    global.db.data.users[m.sender].uncommon += uu2 * 1
                                    hisoka.sendText(m.chat, Hun2, m)
                                    if (umc2 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc2} Mythic Crate`)
                                        global.db.data.users[m.sender].mythic += umc2 * 1
                                    }
                                } else hisoka.sendText(m.chat, 'Uncommon crate anda tidak cukup', m)
                                break
                            case '1000':
                                let _ud3 = `${Math.floor(Math.random() * 50)}`.trim()
                                let _ue3 = `${Math.floor(Math.random() * 100000)}`.trim()
                                let _um3 = `${Math.floor(Math.random() * 50000)}`.trim()
                                let _up3 = `${Math.floor(Math.random() * 100)}`.trim()
                                let _umc3 = `${Math.floor(Math.random() * 100)}`.trim()
                                let _uu3 = `${Math.floor(Math.random() * 100)}`.trim()
                                let _uc3 = `${Math.floor(Math.random() * 200)}`.trim()
                                let ud3 = (_ud3 * 1)
                                let ue3 = (_ue3 * 1)
                                let um3 = (_um3 * 1)
                                let up3 = (_up3 * 1)
                                let umc3 = (_umc3 * 1)
                                let uu3 = (_uu3 * 1)
                                let uc3 = (_uc3 * 1)
                                let Hun3 = `
            Anda telah membuka *Uncommon crate* dan mendapatkan:${um3 > 0 ? `\nMIKO: ${um3}` : ''}${ue3 > 0 ? `\nExp: ${ue3} *exp*` : ''}${ud3 > 0 ? `\nDiamond: ${ud3} *diamond*` : ''}${up3 > 0 ? `\nPotion: ${up3} *potion*` : ''}${uc3 > 0 ? `\nCommon crate: ${uc3} *crate*` : ''}${uu3 > 0 ? `\nUncommon crate: ${uu3} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].uncommon >= 1000) {
                                    global.db.data.users[m.sender].uncommon -= 1000
                                    global.db.data.users[m.sender].money += um3 * 1
                                    global.db.data.users[m.sender].diamond += ud3 * 1
                                    global.db.data.users[m.sender].exp += ue3 * 1
                                    global.db.data.users[m.sender].potion += up3 * 1
                                    global.db.data.users[m.sender].common += uc3 * 1
                                    global.db.data.users[m.sender].uncommon += uu3 * 1
                                    hisoka.sendText(m.chat, Hun3, m)
                                    if (umc3 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${umc3} Mythic Crate`)
                                        global.db.data.users[m.sender].mythic += umc3 * 1
                                    }
                                } else hisoka.sendText(m.chat, 'Uncommon crate anda tidak cukup', m)
                                break
                            default:
                                return hisoka.sendText(m.chat, Lmao, m)
                        }
                        break
                    case 'mythic':
                        switch (jumlah) {
                            case '1':
                            case 'crate':
                                let _mm = `${Math.floor(Math.random() * 500)}`.trim()
                                let _mmm = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                                let _me = `${Math.floor(Math.random() * 250)}`.trim()
                                let _mp = `${Math.floor(Math.random() * 3)}`.trim()
                                let _mu = `${Math.floor(Math.random() * 3)}`.trim()
                                let _mc = `${Math.floor(Math.random() * 5)}`.trim()
                                let _ml = `${pickRandom(['0', '0', '1', '0', '0'])}`.trim()
                                let _md = `${Math.floor(Math.random() * 3)}`.trim()
                                let mm = (_mm * 1)
                                let mmm = (_mmm * 1)
                                let me = (_me * 1)
                                let mp = (_mp * 1)
                                let mu = (_mu * 1)
                                let mc = (_mc * 1)
                                let ml = (_ml * 1)
                                let md = (_md * 1)
                                let Mychat = `
            Anda telah membuka *Mythic crate* dan mendapatkan:${mm > 0 ? `\nMIKO: ${mm}` : ''}${me > 0 ? `\nExp: ${me} *exp*` : ''}${md > 0 ? `\nDiamond: ${md} *diamond*` : ''}${mp > 0 ? `\nPotion: ${mp} *potion*` : ''}${mc > 0 ? `\nCommon crate: ${mc} *crate*` : ''}${mu > 0 ? `\nUncommon crate: ${mu} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].mythic >= 1) {
                                    console.log(global.db.data.users[m.sender].mythic)
                                    global.db.data.users[m.sender].mythic -= 1
                                    console.log(global.db.data.users[m.sender].mythic)
                                    global.db.data.users[m.sender].money += mm * 1
                                    global.db.data.users[m.sender].diamond += md * 1
                                    global.db.data.users[m.sender].exp += me * 1
                                    global.db.data.users[m.sender].potion += mp * 1
                                    global.db.data.users[m.sender].common += mc * 1
                                    global.db.data.users[m.sender].uncommon += mu * 1
                                    hisoka.sendText(m.chat, Mychat, m)
                                    if (mmm > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm} Mythic Crate`)
                                        global.db.data.users[m.sender].mythic += mmm * 1
                                    }
                                    if (ml > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml} Legendary Crate`)
                                        global.db.data.users[m.sender].legendary += ml * 1
                                    }
                                } else hisoka.sendText(m.chat, 'Mythic crate anda tidak cukup', m)
                                break
                            case '10':
                                let _mm1 = `${Math.floor(Math.random() * 5000)}`.trim()
                                let _mmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                                let _me1 = `${Math.floor(Math.random() * 3000)}`.trim()
                                let _mp1 = `${Math.floor(Math.random() * 6)}`.trim()
                                let _mu1 = `${Math.floor(Math.random() * 6)}`.trim()
                                let _mc1 = `${Math.floor(Math.random() * 11)}`.trim()
                                let _ml1 = `${Math.floor(Math.random() * 1)}`.trim()
                                let _md1 = `${Math.floor(Math.random() * 5)}`.trim()
                                let mm1 = (_mm1 * 1)
                                let mmm1 = (_mmm1 * 1)
                                let me1 = (_me1 * 1)
                                let mp1 = (_mp1 * 1)
                                let mu1 = (_mu1 * 1)
                                let mc1 = (_mc1 * 1)
                                let ml1 = (_ml1 * 1)
                                let md1 = (_md1 * 1)
                                let Mychat1 = `
            Anda telah membuka *Mythic crate* dan mendapatkan:${mm1 > 0 ? `\nMIKO: ${mm1}` : ''}${me1 > 0 ? `\nExp: ${me1} *exp*` : ''}${md1 > 0 ? `\nDiamond: ${md1} *diamond*` : ''}${mp1 > 0 ? `\nPotion: ${mp1} *potion*` : ''}${mc1 > 0 ? `\nCommon crate: ${mc1} *crate*` : ''}${mu1 > 0 ? `\nUncommon crate: ${mu1} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].mythic >= 10) {
                                    global.db.data.users[m.sender].mythic -= 10
                                    global.db.data.users[m.sender].money += mm1 * 1
                                    global.db.data.users[m.sender].diamond += md1 * 1
                                    global.db.data.users[m.sender].exp += me1 * 1
                                    global.db.data.users[m.sender].potion += mp1 * 1
                                    global.db.data.users[m.sender].common += mc1 * 1
                                    global.db.data.users[m.sender].uncommon += mu1 * 1
                                    hisoka.sendText(m.chat, Mychat1, m)
                                    if (mmm1 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm1} Mythic Crate`)
                                        global.db.data.users[m.sender].mythic += mmm1 * 1
                                    }
                                    if (ml1 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml1} Legendary Crate`)
                                        global.db.data.users[m.sender].legendary += ml1 * 1
                                    }
                                } else hisoka.sendText(m.chat, 'Mythic crate anda tidak cukup', m)
                                break
                            case '100':
                                let _mm2 = `${Math.floor(Math.random() * 50000)}`.trim()
                                let _mmm2 = `${Math.floor(Math.random() * 10)}`.trim()
                                let _me2 = `${Math.floor(Math.random() * 30000)}`.trim()
                                let _mp2 = `${Math.floor(Math.random() * 50)}`.trim()
                                let _mu2 = `${Math.floor(Math.random() * 80)}`.trim()
                                let _mc2 = `${Math.floor(Math.random() * 150)}`.trim()
                                let _ml2 = `${Math.floor(Math.random() * 6)}`.trim()
                                let _md2 = `${Math.floor(Math.random() * 20)}`.trim()
                                let mm2 = (_mm2 * 1)
                                let mmm2 = (_mmm2 * 1)
                                let me2 = (_me2 * 1)
                                let mp2 = (_mp2 * 1)
                                let mu2 = (_mu2 * 1)
                                let mc2 = (_mc2 * 1)
                                let ml2 = (_ml2 * 1)
                                let md2 = (_md2 * 1)
                                let Mychat2 = `
            Anda telah membuka *Mythic crate* dan mendapatkan:${mm2 > 0 ? `\nMIKO: ${mm2}` : ''}${me2 > 0 ? `\nExp: ${me2} *exp*` : ''}${md2 > 0 ? `\nDiamond: ${md2} *diamond*` : ''}${mp2 > 0 ? `\nPotion: ${mp2} *potion*` : ''}${mc2 > 0 ? `\nCommon crate: ${mc2} *crate*` : ''}${mu2 > 0 ? `\nUncommon crate: ${mu2} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].mythic >= 100) {
                                    global.db.data.users[m.sender].mythic -= 100
                                    global.db.data.users[m.sender].money += mm2 * 1
                                    global.db.data.users[m.sender].diamond += md2 * 1
                                    global.db.data.users[m.sender].exp += me2 * 1
                                    global.db.data.users[m.sender].potion += mp2 * 1
                                    global.db.data.users[m.sender].common += mc2 * 1
                                    global.db.data.users[m.sender].uncommon += mu2 * 1
                                    hisoka.sendText(m.chat, Mychat2, m)
                                } else hisoka.sendText(m.chat, 'Mythic crate anda tidak cukup', m)
                                break
                            case '1000':
                                let _mm3 = `${Math.floor(Math.random() * 500000)}`.trim()
                                let _mmm3 = `${Math.floor(Math.random() * 50)}`.trim()
                                let _me3 = `${Math.floor(Math.random() * 750000)}`.trim()
                                let _mp3 = `${Math.floor(Math.random() * 70)}`.trim()
                                let _mu3 = `${Math.floor(Math.random() * 250)}`.trim()
                                let _mc3 = `${Math.floor(Math.random() * 750)}`.trim()
                                let _ml3 = `${Math.floor(Math.random() * 10)}`.trim()
                                let _md3 = `${Math.floor(Math.random() * 50)}`.trim()
                                let mm3 = (_mm3 * 1)
                                let mmm3 = (_mmm3 * 1)
                                let me3 = (_me3 * 1)
                                let mp3 = (_mp3 * 1)
                                let mu3 = (_mu3 * 1)
                                let mc3 = (_mc3 * 1)
                                let ml3 = (_ml3 * 1)
                                let md3 = (_md3 * 1)
                                let Mychat3 = `
            Anda telah membuka *Mythic crate* dan mendapatkan:${mm3 > 0 ? `\nMIKO: ${mm3}` : ''}${me3 > 0 ? `\nExp: ${me3} *exp*` : ''}${md3 > 0 ? `\nDiamond: ${md3} *diamond*` : ''}${mp3 > 0 ? `\nPotion: ${mp3} *potion*` : ''}${mc3 > 0 ? `\nCommon crate: ${mc3} *crate*` : ''}${mu3 > 0 ? `\nUncommon crate: ${mu3} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].mythic >= 1000) {
                                    global.db.data.users[m.sender].mythic -= 1000
                                    global.db.data.users[m.sender].money += mm3 * 1
                                    global.db.data.users[m.sender].diamond += md3 * 1
                                    global.db.data.users[m.sender].exp += me3 * 1
                                    global.db.data.users[m.sender].potion += mp3 * 1
                                    global.db.data.users[m.sender].common += mc3 * 1
                                    global.db.data.users[m.sender].uncommon += mu3 * 1
                                    hisoka.sendText(m.chat, Mychat3, m)
                                    if (mmm3 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${mmm3} Mythic Crate`)
                                        global.db.data.users[m.sender].mythic += mmm3 * 1
                                    }
                                    if (ml3 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n${ml3} Legendary Crate`)
                                        global.db.data.users[m.sender].legendary += ml3 * 1
                                    }
                                } else hisoka.sendText(m.chat, 'Mythic crate anda tidak cukup', m)
                                break
                            default:
                                return hisoka.sendText(m.chat, Lmao, m)
                        }
                        break
                    case 'legendary':
                        switch (jumlah) {
                            case '1':
                            case 'crate':
                                let _lm = `${Math.floor(Math.random() * 5000)}`.trim()
                                let _le = `${Math.floor(Math.random() * 550)}`.trim()
                                let _lp = `${Math.floor(Math.random() * 5)}`.trim()
                                let _lu = `${Math.floor(Math.random() * 7)}`.trim()
                                let _lc = `${Math.floor(Math.random() * 10)}`.trim()
                                let _ll = `${pickRandom(['0', '0', '1', '0'])}`.trim()
                                let _lpp = `${pickRandom(['0', '1', '0'])}`.trim()
                                let _ld = `${Math.floor(Math.random() * 5)}`.trim()
                                let _lmm = `${pickRandom(['0', '1', '0', '1', '0', '0'])}`.trim()
                                let lm = (_lm * 1)
                                let le = (_le * 1)
                                let lp = (_lp * 1)
                                let lu = (_lu * 1)
                                let lc = (_lc * 1)
                                let ll = (_ll * 1)
                                let lpp = (_lpp * 1)
                                let ld = (_ld * 1)
                                let lmm = (_lmm * 1)
                                let Lechat = `
            Anda telah membuka *Legendary crate* dan mendapatkan:${lm > 0 ? `\nMIKO: ${lm}` : ''}${le > 0 ? `\nExp: ${le} *exp*` : ''}${ld > 0 ? `\nDiamond: ${ld} *diamond*` : ''}${lp > 0 ? `\nPotion: ${lp} *potion*` : ''}${lc > 0 ? `\nCommon crate: ${lc} *crate*` : ''}${lu > 0 ? `\nUncommon crate: ${lu} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].legendary >= 1) {
                                    global.db.data.users[m.sender].legendary -= 1
                                    global.db.data.users[m.sender].money += lm * 1
                                    global.db.data.users[m.sender].diamond += ld * 1
                                    global.db.data.users[m.sender].exp += le * 1
                                    global.db.data.users[m.sender].potion += lp * 1
                                    global.db.data.users[m.sender].common += lc * 1
                                    global.db.data.users[m.sender].uncommon += lu * 1
                                    hisoka.sendText(m.chat, Lechat, m)
                                    if (lmm > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm} Mythic Crate`)
                                        global.db.data.users[m.sender].mythic += lmm * 1
                                    }
                                    if (ll > 0 || lpp > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll > 0 ? `\n${ll} Legendary Crate` : ''}${lpp > 0 ? `\n${lpp} Pet Crate` : ''}`)
                                        global.db.data.users[m.sender].legendary += ll * 1
                                        global.db.data.users[m.sender].pet += lpp * 1
                                    }
                                } else hisoka.sendText(m.chat, 'Legendary crate anda tidak cukup', m)
                                break
                            case '10':
                                let _lm1 = `${Math.floor(Math.random() * 100000)}`.trim()
                                let _le1 = `${Math.floor(Math.random() * 15000)}`.trim()
                                let _lp1 = `${Math.floor(Math.random() * 30)}`.trim()
                                let _lu1 = `${Math.floor(Math.random() * 50)}`.trim()
                                let _lc1 = `${Math.floor(Math.random() * 75)}`.trim()
                                let _ll1 = `${Math.floor(Math.random() * 2)}`.trim()
                                let _lpp1 = `${Math.floor(Math.random() * 6)}`.trim()
                                let _ld1 = `${Math.floor(Math.random() * 16)}`.trim()
                                let _lmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                                let lm1 = (_lm1 * 1)
                                let le1 = (_le1 * 1)
                                let lp1 = (_lp1 * 1)
                                let lu1 = (_lu1 * 1)
                                let lc1 = (_lc1 * 1)
                                let ll1 = (_ll1 * 1)
                                let lpp1 = (_lpp1 * 1)
                                let ld1 = (_ld1 * 1)
                                let lmm1 = (_lmm1 * 1)
                                let Lechat1 = `
            Anda telah membuka *Legendary crate* dan mendapatkan:${lm1 > 0 ? `\nMIKO: ${lm1}` : ''}${le1 > 0 ? `\nExp: ${le1} *exp*` : ''}${ld1 > 0 ? `\nDiamond: ${ld1} *diamond*` : ''}${lp1 > 0 ? `\nPotion: ${lp1} *potion*` : ''}${lc1 > 0 ? `\nCommon crate: ${lc1} *crate*` : ''}${lu1 > 0 ? `\nUncommon crate: ${lu1} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].legendary >= 10) {
                                    global.db.data.users[m.sender].legendary -= 10
                                    global.db.data.users[m.sender].money += lm1 * 1
                                    global.db.data.users[m.sender].diamond += ld1 * 1
                                    global.db.data.users[m.sender].exp += le1 * 1
                                    global.db.data.users[m.sender].potion += lp1 * 1
                                    global.db.data.users[m.sender].common += lc1 * 1
                                    global.db.data.users[m.sender].uncommon += lu1 * 1
                                    hisoka.sendText(m.chat, Lechat1, m)
                                    if (lmm1 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm1} Mythic Crate`)
                                        global.db.data.users[m.sender].mythic += lmm1 * 1
                                    }
                                    if (ll1 > 0 || lpp1 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll1 > 0 ? `\n${ll1} Legendary Crate` : ''}${lpp1 > 0 ? `\n${lpp1} Pet Crate` : ''}`)
                                        global.db.data.users[m.sender].legendary += ll1 * 1
                                        global.db.data.users[m.sender].pet += lpp1 * 1
                                    }
                                } else hisoka.sendText(m.chat, 'Legendary crate anda tidak cukup', m)
                                break
                            case '100':
                                let _lm2 = `${Math.floor(Math.random() * 500000)}`.trim()
                                let _le2 = `${Math.floor(Math.random() * 200000)}`.trim()
                                let _lp2 = `${Math.floor(Math.random() * 100)}`.trim()
                                let _lu2 = `${Math.floor(Math.random() * 250)}`.trim()
                                let _lc2 = `${Math.floor(Math.random() * 750)}`.trim()
                                let _ll2 = `${Math.floor(Math.random() * 11)}`.trim()
                                let _lpp2 = `${Math.floor(Math.random() * 51)}`.trim()
                                let _ld2 = `${Math.floor(Math.random() * 50)}`.trim()
                                let _lmm2 = `${Math.floor(Math.random() * 11)}`.trim()
                                let lm2 = (_lm2 * 1)
                                let le2 = (_le2 * 1)
                                let lp2 = (_lp2 * 1)
                                let lu2 = (_lu2 * 1)
                                let lc2 = (_lc2 * 1)
                                let ll2 = (_ll2 * 1)
                                let lpp2 = (_lpp2 * 1)
                                let ld2 = (_ld2 * 1)
                                let lmm2 = (_lmm2 * 1)
                                let Lechat2 = `
            Anda telah membuka *Legendary crate* dan mendapatkan:${lm2 > 0 ? `\nMIKO: ${lm2}` : ''}${le2 > 0 ? `\nExp: ${le2} *exp*` : ''}${ld2 > 0 ? `\nDiamond: ${ld2} *diamond*` : ''}${lp2 > 0 ? `\nPotion: ${lp2} *potion*` : ''}${lc2 > 0 ? `\nCommon crate: ${lc2} *crate*` : ''}${lu2 > 0 ? `\nUncommon crate: ${lu2} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].legendary >= 100) {
                                    global.db.data.users[m.sender].legendary -= 100
                                    global.db.data.users[m.sender].money += lm2 * 1
                                    global.db.data.users[m.sender].diamond += ld2 * 1
                                    global.db.data.users[m.sender].exp += le2 * 1
                                    global.db.data.users[m.sender].potion += lp2 * 1
                                    global.db.data.users[m.sender].common += lc2 * 1
                                    global.db.data.users[m.sender].uncommon += lu2 * 1
                                    hisoka.sendText(m.chat, Lechat2, m)
                                    if (lmm2 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm2} Mythic Crate`)
                                        global.db.data.users[m.sender].mythic += lmm2 * 1
                                    }
                                    if (ll2 > 0 || lpp2 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll2 > 0 ? `\n${ll2} Legendary Crate` : ''}${lpp2 > 0 ? `\n${lpp2} Pet Crate` : ''}`)
                                        global.db.data.users[m.sender].legendary += ll2 * 1
                                        global.db.data.users[m.sender].pet += lpp2 * 1
                                    }
                                } else hisoka.sendText(m.chat, 'Legendary crate anda tidak cukup', m)
                                break
                            case '1000':
                                let _lm3 = `${Math.floor(Math.random() * 2000000)}`.trim()
                                let _le3 = `${Math.floor(Math.random() * 5000000)}`.trim()
                                let _lp3 = `${Math.floor(Math.random() * 500)}`.trim()
                                let _lu3 = `${Math.floor(Math.random() * 1000)}`.trim()
                                let _lc3 = `${Math.floor(Math.random() * 2500)}`.trim()
                                let _ll3 = `${Math.floor(Math.random() * 51)}`.trim()
                                let _lpp3 = `${Math.floor(Math.random() * 222)}`.trim()
                                let _ld3 = `${Math.floor(Math.random() * 250)}`.trim()
                                let _lmm3 = `${Math.floor(Math.random() * 111)}`.trim()
                                let lm3 = (_lm3 * 1)
                                let le3 = (_le3 * 1)
                                let lp3 = (_lp3 * 1)
                                let lu3 = (_lu3 * 1)
                                let lc3 = (_lc3 * 1)
                                let ll3 = (_ll3 * 1)
                                let lpp3 = (_lpp3 * 1)
                                let ld3 = (_ld3 * 1)
                                let lmm3 = (_lmm3 * 1)
                                let Lechat3 = `
            Anda telah membuka *Legendary crate* dan mendapatkan:${lm3 > 0 ? `\nMIKO: ${lm3}` : ''}${le3 > 0 ? `\nExp: ${le3} *exp*` : ''}${ld3 > 0 ? `\nDiamond: ${ld3} *diamond*` : ''}${lp3 > 0 ? `\nPotion: ${lp3} *potion*` : ''}${lc3 > 0 ? `\nCommon crate: ${lc3} *crate*` : ''}${lu3 > 0 ? `\nUncommon crate: ${lu3} *crate*` : ''}
            `.trim()
                                if (global.db.data.users[m.sender].legendary >= 1000) {
                                    global.db.data.users[m.sender].legendary -= 1000
                                    global.db.data.users[m.sender].money += lm3 * 1
                                    global.db.data.users[m.sender].diamond += ld3 * 1
                                    global.db.data.users[m.sender].exp += le3 * 1
                                    global.db.data.users[m.sender].potion += lp3 * 1
                                    global.db.data.users[m.sender].common += lc3 * 1
                                    global.db.data.users[m.sender].uncommon += lu3 * 1
                                    hisoka.sendText(m.chat, Lechat3, m)
                                    if (lmm3 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n${lmm3} Mythic Crate`)
                                        global.db.data.users[m.sender].mythic += lmm3 * 1
                                    }
                                    if (ll3 > 0 || lpp3 > 0) {
                                        m.reply(`*Selamat anda mendapatkan item Epic yaitu*${ll3 > 0 ? `\n${ll3} Legendary Crate` : ''}${lpp3 > 0 ? `\n${lpp3} Pet Crate` : ''}`)
                                        global.db.data.users[m.sender].legendary += ll3 * 1
                                        global.db.data.users[m.sender].pet += lpp3 * 1
                                    }
                                } else hisoka.sendText(m.chat, 'Legendary crate anda tidak cukup', m)
                                break
                            default:
                                return hisoka.sendText(m.chat, Lmao, m)
                        }
                        break
                    case 'pet':
                        let _mknp = pickRandom([1, 2, 1, 5, 3, 2, 1, 2, 4, 1, 3, 5, 2, 4, 3])
                        let mknp = (_mknp * 1)
                        let kucing = global.db.data.users[m.sender].kucing
                        let rubah = global.db.data.users[m.sender].rubah
                        let kuda = global.db.data.users[m.sender].kuda
                        let _pet = `${pickRandom(['kucing', 'rubah', 'kuda'])}`.trim()
                        if (global.db.data.users[m.sender].pet > 0) {
                            global.db.data.users[m.sender].pet -= 1
                            if (_pet == 'kucing' && kucing > 0) {
                                global.db.data.users[m.sender].potion += 2
                                global.db.data.users[m.sender].makananpet += mknp * 1
                                hisoka.sendText(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`, m)
                            } else if (_pet == 'kucing' && kucing == 0) {
                                global.db.data.users[m.sender].kucing += 1
                                global.db.data.users[m.sender].makananpet += mknp * 1
                                hisoka.sendText(m.chat, `*Selamat Anda mendapatkan pet${_pet} ${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                            } else if (_pet == 'rubah' && rubah > 0) {
                                global.db.data.users[m.sender].potion += 2
                                global.db.data.users[m.sender].makananpet += mknp * 1
                                hisoka.sendText(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion ${mknp > 0 ? `Dan ${mknp} Makanan Pet` : ''}`, m)
                            } else if (_pet == 'rubah' && rubah == 0) {
                                global.db.data.users[m.sender].rubah += 1
                                global.db.data.users[m.sender].makananpet += mknp * 1
                                hisoka.sendText(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                            } else if (_pet == 'kuda' && kuda > 0) {
                                global.db.data.users[m.sender].potion += 2
                                global.db.data.users[m.sender].makananpet += mknp * 1
                                hisoka.sendText(m.chat, `Anda sudah memiliki pet ${_pet}, Hadiahmu diganti dengan 2 potion${mknp > 0 ? ` Dan ${mknp} Makanan Pet` : ''}`, m)
                            } else if (_pet == 'kuda' && kuda == 0) {
                                global.db.data.users[m.sender].kuda += 1
                                global.db.data.users[m.sender].makananpet += mknp * 1
                                hisoka.sendText(m.chat, `*Selamat Anda mendapatkan pet ${_pet}${mknp > 0 ? ` Dan ${mknp} Makanan Pet*` : '*'}`, m)
                            } else {
                                global.db.data.users[m.sender].makananpet += mknp * 1
                                m.reply(pickRandom(['Anda kurang beruntung', 'Coba buka lagi lain kali, karena gk dapet pet', 'kasian gk dapet pet', 'Mungkin lagi gk hoki dan gk dapet pet', 'wkwkkwkwke']) + '. Anda hanya mendapatkan *' + mknp + '* makanan pet')
                            }
                        } else m.reply('Pet Crate kamu tidak cukup')
                        break
                    default:
                        return hisoka.sendText(m.chat, bruh, m)
                }
            }
                break
            case 'feed': {
                let type = (args[0] || '').toLowerCase()
                let rubah = global.db.data.users[m.sender].rubah
                let kuda = global.db.data.users[m.sender].kuda
                let kucing = global.db.data.users[m.sender].kucing
                switch (type) {
                    case 'rubah':
                        if (rubah == 0) return m.reply('*Kamu belum memiliki Pet Rubah*')
                        if (rubah == 5) return m.reply('*Pet kamu dah lvl max*')
                        let __waktur = (new Date - global.db.data.users[m.sender].rubahlastclaim)
                        let _waktur = (600000 - __waktur)
                        let waktur = clockString(_waktur)
                        if (new Date - global.db.data.users[m.sender].rubahlastclaim > 600000) {
                            if (global.db.data.users[m.sender].makananpet > 0) {
                                global.db.data.users[m.sender].makananpet -= 1
                                global.db.data.users[m.sender].anakrubah += 20
                                global.db.data.users[m.sender].rubahlastclaim = new Date * 1
                                hisoka.sendText(m.chat, `Berhasil memberi makan pet ${type}`, m)
                                if (rubah > 0) {
                                    let naiklvl = ((rubah * 100) - 1)
                                    if (global.db.data.users[m.sender].anakrubah > naiklvl) {
                                        global.db.data.users[m.sender].rubah += 1
                                        global.db.data.users[m.sender].anakrubah -= (rubah * 100)
                                        hisoka.sendText(m.chat, `*Selamat Pet Rubah kamu naik level*`, m)
                                    }
                                }
                            } else m.reply(`Makanan pet kamu tidak cukup`)
                        } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktur}* lagi`)
                        break
                    case 'kuda':
                        if (kuda == 0) return m.reply('*Kamu belum memiliki Pet Kuda*')
                        if (kuda == 5) return m.reply('*Pet kamu dah lvl max*')
                        let __waktuk = (new Date - global.db.data.users[m.sender].kudalastclaim)
                        let _waktuk = (600000 - __waktuk)
                        let waktuk = clockString(_waktuk)
                        if (new Date - global.db.data.users[m.sender].kudalastclaim > 600000) {
                            if (global.db.data.users[m.sender].makananpet > 0) {
                                global.db.data.users[m.sender].makananpet -= 1
                                global.db.data.users[m.sender].anakkuda += 20
                                global.db.data.users[m.sender].kudalastclaim = new Date * 1
                                hisoka.sendText(m.chat, `Berhasil memberi makan pet ${type}`, m)
                                if (kuda > 0) {
                                    let naiklvl = ((kuda * 100) - 1)
                                    if (global.db.data.users[m.sender].anakkuda > naiklvl) {
                                        global.db.data.users[m.sender].kuda += 1
                                        global.db.data.users[m.sender].anakkuda -= (kuda * 100)
                                        hisoka.sendText(m.chat, `*Selamat Pet Kuda kamu naik level*`, m)
                                    }
                                }
                            } else m.reply(`Makanan pet kamu tidak cukup`)
                        } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuk}* lagi`)
                        break
                    case 'kucing':
                        if (kucing == 0) return m.reply('*Kamu belum memiliki Pet Kucing*')
                        if (kucing == 5) return m.reply('*Pet kamu dah lvl max*')
                        let __waktu = (new Date - global.db.data.users[m.sender].kucinglastclaim)
                        let _waktu = (600000 - __waktu)
                        let waktu = clockString(_waktu)
                        if (new Date - global.db.data.users[m.sender].kucinglastclaim > 600000) {
                            if (global.db.data.users[m.sender].makananpet > 0) {
                                global.db.data.users[m.sender].makananpet -= 1
                                global.db.data.users[m.sender].anakkucing += 20
                                global.db.data.users[m.sender].kucinglastclaim = new Date * 1
                                hisoka.sendText(m.chat, `Berhasil memberi makan pet ${type}`, m)
                                if (kucing > 0) {
                                    let naiklvl = ((kucing * 100) - 1)
                                    if (global.db.data.users[m.sender].anakkucing > naiklvl) {
                                        global.db.data.users[m.sender].kucing += 1
                                        global.db.data.users[m.sender].anakkucing -= (kucing * 100)
                                        hisoka.sendText(m.chat, `*Selamat Pet Kucing kamu naik level*`, m)
                                    }
                                }
                            } else m.reply(`Makanan pet kamu tidak cukup`)
                        } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktu}* lagi`)
                        break
                    default:
                        return hisoka.sendText(m.chat, `${prefix}feed [kucing | rubah | kuda]\nContoh penggunaan: *${prefix}feed kucing*`, m)
                }
            }
                break
            case 'claim': {
                //let buttons = [
                //{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                //{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                //]
                let buttons = [
                    { buttonId: `claimdaily`, buttonText: { displayText: 'Daily' }, type: 1 },
                    { buttonId: `claimweekly`, buttonText: { displayText: 'Weekly' }, type: 1 },
                    { buttonId: `claimmonthly`, buttonText: { displayText: 'Monthly' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `Pilih Claim`, hisoka.user.name, m)
            }
                break
            case 'claimdaily': {
                let cooldownn = 86400000
                let user = global.db.data.users[m.sender]
                let __timers = (new Date - user.lastclaim)
                let _timers = (cooldownn - __timers)
                let timers = clockString(_timers)
                if (new Date - user.lastclaim > cooldownn) {
                    hisoka.sendText(m.chat, `Anda sudah mengklaim dan mendapatkan 1000 MIKO dan 1 potion`, m)
                    user.money += 1000
                    user.potion += 1
                    user.lastclaim = new Date * 1
                } else {
                    hisoka.sendText(m.chat, `silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, m)
                }
            }
                break
            case 'claimweekly': {
                let cooldownn = 604800000
                let user = global.db.data.users[m.sender]
                let __timers = (new Date - user.lastweekly)
                let _timers = (cooldownn - __timers)
                let timers = clockString(_timers)
                if (new Date - user.lastweekly > cooldownn) {
                    hisoka.sendText(m.chat, `Anda sudah mengklaim dan mendapatkan 5000 MIKO dan 5 Myhtic Crate`, m)
                    user.money += 5000
                    user.mythic += 1
                    user.lastweekly = new Date * 1
                } else {
                    hisoka.sendText(m.chat, `silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, m)
                }
            }
                break
            case 'claimmonthly': {
                let cooldownn = 2592000000
                let user = global.db.data.users[m.sender]
                let __timers = (new Date - user.lastmonthly)
                let _timers = (cooldownn - __timers)
                let timers = clockString(_timers)
                if (new Date - user.lastmonthly > cooldownn) {
                    hisoka.sendText(m.chat, `Anda sudah mengklaim dan mendapatkan 20000 MIKO, 5 Legendary Crate, dan 3 pet Crate`, m)
                    user.money += 20000
                    user.legendary += 5
                    user.pet += 3
                    user.lastmonthly = new Date * 1
                } else {
                    hisoka.sendText(m.chat, `silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, m)
                }
            }
                break
            case 'work': {
                let user = global.db.data.users[m.sender]
                let money = user.money
                let getmoney = Math.floor(Math.random() * (100 - 1) + 1)
                if ((user.jenis_kamar === '3' && user.jenis_rumah === '4') || (user.jenis_kamar === '4' && user.jenis_rumah === '4')) {
                    let bonusmoney = Math.floor(Math.random() * (150 - 1) + 1)
                    getmoney += bonusmoney
                } else if (user.jenis_kamar === '3' || user.jenis_kamar === '4' || user.jenis_rumah === '4') {
                    let bonusmoney = Math.floor(Math.random() * (70 - 1) + 1)
                    getmoney += bonusmoney
                }
                money += getmoney
                //adding exp
                let exp = user.exp
                let getexp = Math.floor(Math.random() * (10 - 1) + 1)
                exp += getexp
                hisoka.sendText(m.chat, `${user.name} mendapatkan gaji sebesar ${getmoney} MIKO dan mendapat exp sebesar ${getexp}\nJumlah MIKO kamu : ${money}`, m)
                user.exp = exp
                user.money = money
            }
                break
            case 'jobwork': {
                let user = global.db.data.users[m.sender]
                let jobcode = user.jobcode
                let joblevel = user.joblevel
                let jobexp = user.jobexp
                let job = user.job
                let money = user.money
                let txt = ''
                //get money based on job code
                switch (jobcode) {
                    case 1: {
                        //get money
                        let getmoney = Math.floor(Math.random() * (100 - 1) + 1)
                        //get risk
                        let risk = Math.floor(Math.random() * (100 - 1) + 1)
                        //if risk then
                        let riskbol = false
                        if (risk < 10) {
                            riskbol = true
                            //get three chance
                            let chance = Math.floor(Math.random() * (3 - 1) + 1)
                            txt += "kamu mendapat risk\n"
                            //if chance 1 then
                            if (chance == 1) {
                                //get loss
                                let loss = Math.floor(Math.random() * (100 - 1) + 1)
                                textt = pickRandom(['Kamu menghancurkan barang', 'Kamu dipalak preman', 'Kamu teledor, kehilangan uang'])
                                txt += textt + ', Kamu kehilangan ' + loss + ' MIKO'
                                user.money - loss
                            } else if (chance == 2) {
                                //get fired
                                textt = pickRandom(['Kamu menghancurkan barang', 'Kamu melakukan kesalahan'])
                                txt += textt + ', Kamu dipecat'
                                jobcode = 0
                                job = null
                            } else if (chance == 3) {
                                let bonus = Math.floor(Math.random() * (100 - 1) + 1)
                                let expbonus = Math.floor(Math.random() * (10 - 1) + 1)
                                textt = pickRandom(['Kamu diberi pangkat', 'Kamu mendapatkan penghargaan', 'Kamu menolong boss'])
                                txt += textt + ', Kamu mendapat bonus' + bonus + ' MIKO dan ' + expbonus + ' Jobexp'
                            }
                        }
                        money += getmoney
                        let jobexpp = Math.floor(Math.random() * (10 - 1) + 1)
                        user.jobexp + jobexpp
                        txt += `\n\nKamu bekerja menjadi ${user.job} dan mendapat gaji sebesar ${getmoney} MIKO dan ${jobexpp} jobexp`
                        hisoka.sendText(m.chat, txt, m)
                    }
                }
            }
                break
            case 'lamar': case 'jobchange': {
                let user = global.db.data.users[m.sender]
                let joblevel = user.joblevel
                let jobexp = user.jobexp
                let job = user.job
                let txt = `
Halo ${user.name}
Job Level : ${joblevel}
Job Exp : ${jobexp}`
                if (job) {
                    txt += `Kamu sekarang bekerja menjadi ${job}`
                } else {
                    txt += `Kamu belum bekerja sekarang`
                }
                txt += `
Pilih pekerjaan yang ingin dilamar
List Pekerjaan :
1. Kuli (Job Level 0)
2. Pegawai Fotocopy (Job Level 5) 
3. Pegawai Grosir (Job Level 5) 
4. Asisten Supir (Job Level 5) 
5. Pegawai Electronic Hp (Job Level 10)
6. Supir (Job Level 10)
7. Pedagang (Job Level 10) (Modal 1000 MIKO)
8. Mandor (Job Level 15) 
9. Satpam (Job Level 15)
10. Pengidar Narkoba (Job level 20) (Modal 5000 MIKO) (High Risk High Profit)
11. Service Enginering (Job Level 20)
12. Photographer (Job Level 25) (Modal 10000 MIKO)
13. Editor (Job Level 25) (Modal 7000 MIKO)
14. PNS (Job Level 30) (Modal 20000 MIKO)
15. Adventurer (Job Level 35) (Modal 25000 MIKO)

Note : 
Change Job membutuhkan job level. Dan ada pekerjaan yang membutuhkan modal. Biasanya menaikan sedikit profit.
Saat Change Job berarti mereset Job Level.
Setiap pekerjaan ada risk nya tersendiri. Semakin tinggi tingkat pekerjaan, semakin tinggi risk (Kecuali pengedar narkoba)
Risk yang didapat biasanya berbentuk Hutang, Pajak, atau dipecat 
Dengan dipecat, akan mengurangi sebagian dari job level
                `
                if (!text) throw txt
                if (args[0] === "1") {
                    user.jobcode = 1
                    user.job = "Kuli"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "2") {
                    //if joblevel != 5 return 
                    if (user.joblevel < 5) return m.reply("Job Level anda tidak mencukupi")
                    user.jobcode = 2
                    user.job = "Pegawai Fotocopy"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "3") {
                    if (user.joblevel < 5) return m.reply("Job Level anda tidak mencukupi")
                    user.jobcode = 3
                    user.job = "Pegawai Grosir"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "4") {
                    if (user.joblevel < 5) return m.reply("Job Level anda tidak mencukupi")
                    user.jobcode = 4
                    user.job = "Asisten Supir"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "5") {
                    if (user.joblevel < 10) return m.reply("Job Level anda tidak mencukupi")
                    user.jobcode = 5
                    user.job = "Pegawai Electronic Hp"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "6") {
                    if (user.joblevel < 10) return m.reply("Job Level anda tidak mencukupi")
                    user.jobcode = 6
                    user.job = "Supir"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "7") {
                    if (user.joblevel < 10) return m.reply("Job Level anda tidak mencukupi")
                    if (user.money < 1000) return m.reply("Modal anda tidak cukup")
                    user.jobcode = 7
                    user.job = "Pedagang"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "8") {
                    if (user.joblevel < 15) return m.reply("Job Level anda tidak mencukupi")
                    user.jobcode = 8
                    user.job = "Mandor"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "9") {
                    if (user.joblevel < 15) return m.reply("Job Level anda tidak mencukupi")
                    user.jobcode = 9
                    user.job = "Satpam"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "10") {
                    if (user.joblevel < 20) return m.reply("Job Level anda tidak mencukupi")
                    if (user.money < 5000) return m.reply("Modal anda tidak cukup")
                    user.jobcode = 10
                    user.job = "Pengidar Narkoba"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "11") {
                    if (user.joblevel < 20) return m.reply("Job Level anda tidak mencukupi")
                    user.jobcode = 11
                    user.job = "Service Enginnering"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "12") {
                    if (user.joblevel < 25) return m.reply("Job Level anda tidak mencukupi")
                    if (user.money < 10000) return m.reply("Modal anda tidak cukup")
                    user.jobcode = 12
                    user.job = "Photographer"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "13") {
                    if (user.joblevel < 25) return m.reply("Job Level anda tidak mencukupi")
                    if (user.money < 7000) return m.reply("Modal anda tidak cukup")
                    user.jobcode = 13
                    user.job = "Editor"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "14") {
                    if (user.joblevel < 30) return m.reply("Job Level anda tidak mencukupi")
                    user.jobcode = 14
                    user.job = "PNS"
                    user.joblevel = 0
                    user.jobexp = 0
                } else if (args[0] === "15") {
                    if (user.joblevel < 35) return m.reply("Job Level anda tidak mencukupi")
                    user.jobcode = 15
                    user.job = "Adventurer"
                    user.joblevel = 0
                    user.jobexp = 0
                } else return

            }
                break
            case 'invest': {
                let user = db.data.users[m.sender]
                //set price of crymiko,wifmiko,and geocoin by random price
                let Bcrymiko = Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000
                let Bwifmiko = Math.floor(Math.random() * (150000 - 10000 + 1)) + 10000
                let Bgeocoin = Math.floor(Math.random() * (200000 - 10000 + 1)) + 10000
                let Scrymiko = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
                let Swifmiko = Math.floor(Math.random() * (149999 - 10000 + 1)) + 10000
                let Sgeocoin = Math.floor(Math.random() * (199999 - 10000 + 1)) + 10000
                //for every minute, increase the price of crymiko,wifmiko,and geocoin by 1%
                let crymiko = Math.floor(Bcrymiko * (1 + (user.crymiko / 100)))
                let wifmiko = Math.floor(Bwifmiko * (1 + (user.wifmiko / 100)))
                let geocoin = Math.floor(Bgeocoin * (1 + (user.geocoin / 100)))

            }
                break
            case 'casino': {
                let user = global.db.data.users[m.sender]
                let money = user.money
                if (!text) throw `Masukan jumlah`
                let kasih = Number(args[0])
                console.log(kasih)
                //check if not number return
                if (isNaN(kasih)) return m.reply(`Masukan angka`)
                if (money < kasih) return m.reply(`${user.name} tidak memiliki jumlah MIKO yang cukup`)
                money -= kasih
                let gacha1 = Math.floor(Math.random() * (100 - 1) + 1)
                let gacha2 = Math.floor(Math.random() * (100 - 1) + 1)
                if (gacha1 > gacha2) {
                    win = Math.floor(kasih * 2)
                    money += win
                    hisoka.sendText(m.chat, `Hasil : ${user.name} = ${gacha1}, bot = ${gacha2} \n ${user.name} mendapatkan ${win} MIKO dari casino`, m)
                    console.log(money)
                    user.money = money
                } else {
                    win = 0
                    hisoka.sendText(m.chat, `Hasil : ${user.name} = ${gacha1}, bot = ${gacha2} \n ${user.name} kalah dari casino`, m)
                    console.log(money)
                    user.money = money
                }
                //adding exp
                let exp = user.exp
                let getexp = Math.floor(Math.random() * (10 - 1) + 1)
                exp += getexp
                user.exp = exp
                user.money = money
            }
                break

            //blackjack
            case 'blackjack': {
                let user = global.db.data.users[m.sender]
                let money = user.money
                if (!args[0]) return m.reply('masukan jumlah taruhan');
                let kasih = Number(args[0])
                console.log(kasih)
                //check if not number return
                if (isNaN(kasih)) return m.reply(`Masukan angka`)
                if (money < kasih) return m.reply(`${user.name} tidak memiliki jumlah MIKO yang cukup`)
                // const prompt = ps()
                let txt = 'Welcome to BlackJack\n\n'
                // txt += '┌────────────────────────────────────────┐'
                // txt += '│        Black Jack Terminal Game        │'
                // txt += '└────────────────────────────────────────┘\n│'
                let userValue = 0;
                let dealerValue = 0;
                let cardUser1 = Math.floor(Math.random() *(13 - 1)+1)
                let cardUser2 = Math.floor(Math.random() *(13 - 1)+1)
                let cardDealer1 = Math.floor(Math.random() *(13 - 1)+1)
                let cardDealer2 = Math.floor(Math.random() *(13 - 1)+1)
                switch(cardDealer1){
                    case 1 : txt+='Card Dealer 1 = ACE\n'; break;
                    case 2 : txt+='Card Dealer 1 = 2\n'; break;
                    case 3 : txt+='Card Dealer 1 = 3\n'; break;
                    case 4 : txt+='Card Dealer 1 = 4\n'; break;
                    case 5 : txt+='Card Dealer 1 = 5\n'; break;
                    case 6 : txt+='Card Dealer 1 = 6\n'; break;
                    case 7 : txt+='Card Dealer 1 = 7\n'; break;
                    case 8 : txt+='Card Dealer 1 = 8\n'; break;
                    case 9 : txt+='Card Dealer 1 = 9\n'; break;
                    case 10 : txt+='Card Dealer 1 = 10\n'; break;
                    case 11 : txt+='Card Dealer 1 = JACK\n'; break;
                    case 12 : txt+='Card Dealer 1 = QUEEN\n'; break;
                    case 13 : txt+='Card Dealer 1 = KING\n'; break;
                    default : txt+= 'error';
                }
                dealerValue += cardDealer1
                txt += `Card Dealer 2 = ?????\n Dealer Value = ${dealerValue} + ???\n\n`
                switch(cardUser1){
                    case 1 : txt+='Card User 1 = ACE\n'; break;
                    case 2 : txt+='Card User 1 = 2\n'; break;
                    case 3 : txt+='Card User 1 = 3\n'; break;
                    case 4 : txt+='Card User 1 = 4\n'; break;
                    case 5 : txt+='Card User 1 = 5\n'; break;
                    case 6 : txt+='Card User 1 = 6\n'; break;
                    case 7 : txt+='Card User 1 = 7\n'; break;
                    case 8 : txt+='Card User 1 = 8\n'; break;
                    case 9 : txt+='Card User 1 = 9\n'; break;
                    case 10 : txt+='Card User 1 = 10\n'; break;
                    case 11 : txt+='Card User 1 = JACK\n'; break;
                    case 12 : txt+='Card User 1 = QUEEN\n'; break;
                    case 13 : txt+='Card User 1 = KING\n'; break;
                    default : txt+= 'error';
                }
                switch(cardUser2){
                    case 1 : txt+='Card User 2 = ACE\n'; break;
                    case 2 : txt+='Card User 2 = 2\n'; break;
                    case 3 : txt+='Card User 2 = 3\n'; break;
                    case 4 : txt+='Card User 2 = 4\n'; break;
                    case 5 : txt+='Card User 2 = 5\n'; break;
                    case 6 : txt+='Card User 2 = 6\n'; break;
                    case 7 : txt+='Card User 2 = 7\n'; break;
                    case 8 : txt+='Card User 2 = 8\n'; break;
                    case 9 : txt+='Card User 2 = 9\n'; break;
                    case 10 : txt+='Card User 2 = 10\n'; break;
                    case 11 : txt+='Card User 2 = JACK\n'; break;
                    case 12 : txt+='Card User 2 = QUEEN\n'; break;
                    case 13 : txt+='Card User 2 = KING\n'; break;
                    default : txt+= 'error';
                }
                userValue += cardUser1 + cardUser2
                txt += `User Value = ${userValue}\n`
                // const human = new blackJackPlayer(user.name)
                // const dealer = new blackJackDealer('Dealer')
                // txt += `│\n│  Welcome to Black Jack ${human.name}!`
                user.money -= kasih
                // dealer.shuffleDeck()
                //Deals two cards to each the player and dealer to start of the match
                // for (let i = 0; i < 2; i++) {
                //     human.addCard(dealer.deal())
                //     dealer.addCard(dealer.deal())
                // }
                // txt += dealer.showOverview(false)
                // txt += dealer.showHandCover()
                // txt += human.showOverview()
                // txt += human.showHand()

                // hisoka.sendText(m.chat, txt, m)
                // let blackJack
                // //If initial dealing equals 21, so ace and a facecard, they win 1.5 times their bet
                // //setting the variable equal to true allows the computer to differentiate getting Black Jack and having a normal hand of 21 later on
                if(userValue === 21){
                    hisoka.sendText(m.chat, `│  Black Jack! You have have won ${Math.floor(kasih * 3)} MIKO\n│`, m)
                    money += (kasih * 3)
                    //adding exp
                    let exp = user.exp
                    let getexp = Math.floor(Math.random() * (10 - 1) + 1)
                    exp += getexp
                    user.exp = exp
                    user.money = money
                    delete blackjack[m.chat]
                    
                    return;
                }
                // if (human.handValue === 21) {
                //     console.log('│')
                //     hisoka.sendText(m.chat, `│  Black Jack! You have have won $${Math.floor(kasih * 2.5)}\n│`, m)
                //     // human.addFunds(bet * 2.5)
                //     user.money += (bet * kasih)
                //     blackJack = true
                // }
                // // console.log(blackjack)
                blackjack[m.chat] ={
                    dealerVal: dealerValue,
                    bet: kasih,
                    userVal: userValue,
                    text: txt,
                    turn: 3,
                }
                // blackjack[m.chat] = {
                //     handValue: human.handValue,
                //   \n'  bet: kasih,
                // }
                // console.log(human.hand, human.handValue,)
                
                // let buttons = [
                //     { buttonId: 'bjhit', buttonText: { displayText: 'Hit' }, type: 1 },
                //     { buttonId: 'bjstand', buttonText: { displayText: 'Stand' }, type: 1 },
                // ]
                // await hisoka.sendButtonText(m.chat, buttons, txt+'\n\nHit or Stand??', hisoka.user.name, m)
                await hisoka.sendText(m.chat, txt+'\n\n ketik bjhit untuk Hit dan bjstand untuk Stand',m)
            }
                break
            case 'bjhit': {
                if(!blackjack.hasOwnProperty(m.chat)) return
                let user = global.db.data.users[m.sender]
                let money = user.money
                let blackjackData = blackjack[m.chat]
                // human.addCard(dealer.deal())
                // if (human.handValue > 21) {
                    //     if (human.hand.map(card => card.rank).includes('A', index)) {
                        //         human.handValue -= 10
                        //         index = human.hand.map(card => card.rank).indexOf('A') + 1
                        //     }
                        // }
                let cardUser = Math.floor(Math.random() *(13 - 1)+1)
                let txt = blackjackData.text
                let userValue = blackjackData.userVal
                let kasih = blackjackData.bet
                switch(cardUser){
                    case 1 : txt+=`Card User ${blackjackData.turn} = ACE\n`; break;
                    case 2 : txt+=`Card User ${blackjackData.turn} = 2\n`; break;
                    case 3 : txt+=`Card User ${blackjackData.turn} = 3\n`; break;
                    case 4 : txt+=`Card User ${blackjackData.turn} = 4\n`; break;
                    case 5 : txt+=`Card User ${blackjackData.turn} = 5\n`; break;
                    case 6 : txt+=`Card User ${blackjackData.turn} = 6\n`; break;
                    case 7 : txt+=`Card User ${blackjackData.turn} = 7\n`; break;
                    case 8 : txt+=`Card User ${blackjackData.turn} = 8\n`; break;
                    case 9 : txt+=`Card User ${blackjackData.turn} = 9\n`; break;
                    case 10 : txt+=`Card User ${blackjackData.turn} = 10\n`; break;
                    case 11 : txt+=`Card User ${blackjackData.turn} = JACK\n`; break;
                    case 12 : txt+=`Card User ${blackjackData.turn} = QUEEN\n`; break;
                    case 13 : txt+=`Card User ${blackjackData.turn} = KING\n`; break;
                    default : txt+='error';
                }
                userValue += cardUser
                txt += `User Value = ${userValue}\n`
                // txt += human.showOverview()
                // txt += human.showHand()
                // txt += dealer.showOverview(false)
                // txt += dealer.showHandCover()
                // hisoka.sendText(m.chat, txt, m)
                // let blackjack
                //If initial dealing equals 21, so ace and a facecard, they win 1.5 times their bet
                //setting the variable equal to true allows the computer to differentiate getting Black Jack and having a normal hand of 21 later on
                // if (human.handValue === 21) {
                //     console.log('│')
                //     hisoka.sendText(m.chat, `│  Black Jack! You have have won $${Math.floor(kasih * 2.5)}\n│`, m)
                //     // human.addFunds(bet * 2.5)
                //     user.money += (bet * kasih)
                //     blackJack = true
                // }
                if(userValue === 21){
                    hisoka.sendText(m.chat, txt+`│  Black Jack! You have have won ${Math.floor(kasih * 2.5)} MIKO\n│`, m)
                    money += (kasih * 2.5)
                    //adding exp
                    let exp = user.exp
                    let getexp = Math.floor(Math.random() * (10 - 1) + 1)
                    exp += getexp
                    user.exp = exp
                    user.money = money
                    delete blackjack[m.chat]
                }else if(userValue > 21){
                    hisoka.sendText(m.chat, txt+`│  I'm Sorry, You're lose\n│`, m)
                    delete blackjack[m.chat]
                }else{
                    blackjackData.userVal = userValue
                    blackjackData.text = txt
                    blackjackData.turn = 4
                    // blackjack[m.chat] = {
                    //     handValue: human.handValue,
                    //     bet: kasih,
                    // }
                    // let buttons = [
                    //     { buttonId: 'bjhit', buttonText: { displayText: 'Hit' }, type: 1 },
                    //     { buttonId: 'bjStand', buttonText: { displayText: 'Stand' }, type: 1 },
                    // ]
                    // await hisoka.sendButtonText(m.chat, buttons, txt+'\n\nHit or Stand??', hisoka.user.name, m)
                    await hisoka.sendText(m.chat, txt+'\n\n ketik bjhit untuk Hit dan bjstand untuk Stand',m)
                }
            }
            break
            case 'bjstand':{
                if(!blackjack.hasOwnProperty(m.chat)) return
                let user = global.db.data.users[m.sender]
                let money = user.money
                let blackjackData = blackjack[m.chat]
                let txt = blackjackData.text
                let userValue = blackjackData.userVal
                let dealerValue = blackjackData.dealerVal
                let kasih = blackjackData.bet
                let turnDealer = 2
                txt+= '\n\nCard Dealer\n'
                while(dealerValue < 21 && dealerValue < userValue){
                    let cardDealer = Math.floor(Math.random() *(13 - 1)+1)
                    switch(cardDealer){
                        case 1 : txt+=`Card ${turnDealer} = ACE\n`; break;
                        case 2 : txt+=`Card ${turnDealer} = 2\n`; break;
                        case 3 : txt+=`Card ${turnDealer} = 3\n`; break;
                        case 4 : txt+=`Card ${turnDealer} = 4\n`; break;
                        case 5 : txt+=`Card ${turnDealer} = 5\n`; break;
                        case 6 : txt+=`Card ${turnDealer} = 6\n`; break;
                        case 7 : txt+=`Card ${turnDealer} = 7\n`; break;
                        case 8 : txt+=`Card ${turnDealer} = 8\n`; break;
                        case 9 : txt+=`Card ${turnDealer} = 9\n`; break;
                        case 10 : txt+=`Card ${turnDealer} = 10\n`; break;
                        case 11 : txt+=`Card ${turnDealer} = JACK\n`; break;
                        case 12 : txt+=`Card ${turnDealer} = QUEEN\n`; break;
                        case 13 : txt+=`Card ${turnDealer} = KING\n`; break;
                        default : txt+='error';
                    }
                    dealerValue += cardDealer
                    turnDealer++;
                }
                txt += `Dealer Value = ${dealerValue}\n`
                // hisoka.sendText(m.chat, txt, m)
                if(dealerValue < userValue || dealerValue > 21){
                    hisoka.sendText(m.chat, txt+`\n\n│  WIN! You have have won ${Math.floor(kasih * 2.5)} MIKO\n│`, m)
                    money += (kasih * 2.5)
                    //adding exp
                    let exp = user.exp
                    let getexp = Math.floor(Math.random() * (10 - 1) + 1)
                    exp += getexp
                    user.exp = exp
                    user.money = money
                }else{
                    hisoka.sendText(m.chat, txt+`│  I'm Sorry, You're lose\n│`, m)
                }
                delete blackjack[m.chat]
            }
            break

            //gacha
            case 'gacha': {
                if (!text) throw `Pilih Jenis Gacha : \n⭔Bronze(20 MIKO) \n⭔Silver(50 MIKO) \n⭔Gold(100 MIKO)`
                let user = global.db.data.users[m.sender]
                let money = user.money
                if (args[0] === 'bronze') {
                    if (money < 20) throw `${user.name} tidak memiliki jumlah MIKO yang cukup`
                    money -= 20
                    let gacha1 = Math.floor(Math.random() * (100 - 1) + 1)
                    let gacha2 = Math.floor(Math.random() * (100 - 1) + 1)
                    if (gacha1 > gacha2) {
                        win = Math.floor(20 * 3)
                        money += win
                        hisoka.sendText(m.chat, `Hasil : ${user.name} = ${gacha1}, bot = ${gacha2} \n ${user.name} mendapatkan ${win} MIKO dari gacha`, m)
                        console.log(money)
                    } else {
                        win = 0
                        hisoka.sendText(m.chat, `Hasil : ${user.name} = ${gacha1}, bot = ${gacha2} \n ${user.name} kalah dari gacha`, m)
                        console.log(money)
                    }
                    user.money = money
                }
                if (args[0] === 'silver') {
                    if (money < 50) throw `${user.name} tidak memiliki jumlah MIKO yang cukup`
                    money -= 50
                    let gacha1 = Math.floor(Math.random() * (100 - 1) + 1)
                    let gacha2 = Math.floor(Math.random() * (100 - 1) + 1)
                    if (gacha1 > gacha2) {
                        win = Math.floor(50 * 3)
                        money += win
                        hisoka.sendText(m.chat, `Hasil : ${user.name} = ${gacha1}, bot = ${gacha2} \n ${user.name} mendapatkan ${win} MIKO dari gacha`, m)
                        console.log(money)
                    } else {
                        win = 0
                        hisoka.sendText(m.chat, `Hasil : ${user.name} = ${gacha1}, bot = ${gacha2} \n ${user.name} kalah dari gacha`, m)
                        console.log(money)
                    }
                    user.money = money
                }
                if (args[0] === 'gold') {
                    if (money < 100) throw `${user.name} tidak memiliki jumlah MIKO yang cukup`
                    money -= 100
                    let gacha1 = Math.floor(Math.random() * (100 - 1) + 1)
                    let gacha2 = Math.floor(Math.random() * (100 - 1) + 1)
                    if (gacha1 > gacha2) {
                        win = Math.floor(100 * 3)
                        money += win
                        hisoka.sendText(m.chat, `Hasil : ${user.name} = ${gacha1}, bot = ${gacha2} \n ${user.name} mendapatkan ${win} MIKO dari gacha`, m)
                        console.log(money)
                    } else {
                        win = 0
                        hisoka.sendText(m.chat, `Hasil : ${user.name} = ${gacha1}, bot = ${gacha2} \n ${user.name} kalah dari gacha`, m)
                        console.log(money)
                    }
                    user.money = money
                }
                //adding exp
                let exp = user.exp
                let getexp = Math.floor(Math.random() * (10 - 1) + 1)
                exp += getexp
                user.exp = exp
                user.money = money
            }
                break
            case 'mancing': case 'fishing': {
                let user = global.db.data.users[m.sender]
                //get fish in user
                let fish = user.fish
                //get fish data in database
                let fishData = global.db.data.fish

                //get one of those fishData
                let fishName = Object.keys(fishData)[Math.floor(Math.random() * Object.keys(fishData).length)]
                let fishDataName = fishData[fishName]
                //get fish name
                let fishName2 = fishDataName.name
                //get fish price
                let fishPrice = fishDataName.price
                let data = fishName
                //check if user have a same fish
                let same = fish.some(element => {
                    if (element.name === fishName2) {
                        return true
                    } else {
                        return false
                    }
                })
                if (same) {
                    //add count in fish at fish.name = fishName2
                    let count = fish.find(element => {
                        if (element.name === fishName2) {
                            return element
                        }
                    }
                    ).count
                    count++
                    //remove fish at fish.name = fishName2
                    fish = fish.filter(element => {
                        if (element.name !== fishName2) {
                            return element
                        }
                    }
                    )
                    //add new fish with count
                    fish.push({ name: fishName2, price: fishPrice, count: count })
                    //add fish to user
                    user.fish = fish
                    //else, add new fish
                } else {
                    let fishh = {
                        name: fishName2,
                        price: fishPrice,
                        count: 1
                    }
                    user.fish.push(fishh)
                }
                hisoka.sendText(m.chat, `Kamu memancing, dan mendapatkan ${fishName2}`, m)
                //add exp
                let exp = user.exp
                let getexp = Math.floor(Math.random() * (10 - 1) + 1)
                exp += getexp
                user.exp = exp

            }
                break
            case 'akuarium': {
                let user = global.db.data.users[m.sender]
                let fish = user.fish
                let fishData = global.db.data.fish[fish]
                let fishName = []
                let fishPrice = []
                let fishKode = ''
                let txt = 'AKUARIUM (Kode, Nama Ikan, Harga, Jumlah)'
                for (let i in fish) {

                    fishKode = Object.keys(fish[i])
                    fishName.push(fish[i].name)
                    fishPrice.push(fish[i].price)
                    txt += `\n${global.sp + i} ${fish[i].name} : ${fish[i].price} MIKO : ${fish[i].count}`
                }
                txt += `\n\n NOTE: BETA, Kamu hanya bisa menjual semua ikan yang ada, tidak bisa disisakan`
                hisoka.sendText(m.chat, txt, m)
            }
                break
            case 'jualikan': {
                if (!args[0]) throw `Pilih Kode Ikan `
                //if !args[1] args[1] = count
                let user = global.db.data.users[m.sender]
                let fish = user.fish
                //check if don't have
                if (!fish[args[0]]) throw `${user.name} tidak memiliki ikan dengan kode ${args[0]}`
                //check if count < args[1]
                //if(fish[args[0]].count < args[1]) throw `${user.name} tidak memiliki jumlah ikan dengan kode ${args[0]} yang cukup`
                //get fish data in user fish
                let fishData = fish[text]
                //get the price
                let fishPrice = fishData.price
                //multiple price by count
                let fishPrice2 = fishPrice * fishData.count
                let money = user.money
                console.log(money, fishPrice)
                //sell the fish
                money += fishPrice
                fish.splice(text, 1)
                user.money = money
                hisoka.sendText(m.chat, `${user.name} berhasil menjual ikan ${fishData.name}\nJumlah MIKO Kamu ${user.money}`, m)
            }
                break
            //jual semua ikan
            case 'jualsemuaikan': {
                let user = global.db.data.users[m.sender]
                let fish = user.fish
                let money = user.money
                for (let i in fish) {
                    money += fish[i].price * fish[i].count
                }
                user.money = money
                fish = []
                user.fish = fish
                hisoka.sendText(m.chat, `${user.name} berhasil menjual semua ikan\nJumlah MIKO Kamu ${user.money}`, m)
            }
                break
            //
            /**let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
                let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
                let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
                let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
                let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
                let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
                let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
                let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
                let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
                let usersmoney = sortedmoney.map(v => v[0])
                let usersdiamond = sorteddiamond.map(v => v[0])
                let userspotion = sortedpotion.map(v => v[0])
                let userssampah = sortedsampah.map(v => v[0])
                let userslevel = sortedlevel.map(v => v[0])
                let userscommon = sortedcommon.map(v => v[0])
                let usersuncommon = sorteduncommon.map(v => v[0])
                let usersmythic = sortedmythic.map(v => v[0])
                let userslegendary = sortedlegendary.map(v => v[0]) 
                
                
                
            *achievement*
            1.Top level *${userslevel.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${userslevel.length}*
            2.Top MIKO *${usersmoney.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${usersmoney.length}*
            3.Top Diamond *${usersdiamond.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${usersdiamond.length}*
            4.Top Potion *${userspotion.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${userspotion.length}*
            5.Top Common *${userscommon.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${userscommon.length}*
            6.Top Uncommon *${usersuncommon.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${usersuncommon.length}*
            7.Top Mythic *${usersmythic.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${usersmythic.length}*
            8.Top Legendary *${userslegendary.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${userslegendary.length}*
            9.Top Sampah *${userssampah.indexOf(m.mentionedJid[0] || m.sender) + 1}* dari *${userssampah.length}*
            Banned: *No**/
            case 'top': {
                if (!text) return
                let user = global.db.data.users
                switch (args[0]) {
                    case 'level': {
                        let level = []
                        for (let i in user) {
                            level.push(user[i].level)
                        }
                        //sort data
                        level.sort(function (a, b) { return b - a })
                        //take top 5 data
                        let top5 = []
                        for (let i = 0; i < 5; i++) {
                            top5.push(level[i])
                        }
                        //send top 5 data
                        let text = ''
                        let org = []
                        for (let i = 0; i < 5; i++) {
                            for (let j in user) {
                                if (user[j].level === top5[i]) {
                                    //use tag number instead of name
                                    text += `${i + 1}. @${j.split('@')[0]} = ${user[j].level} Level\n`
                                    //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`
                                    org.push(j)

                                }
                            }
                        }
                        hisoka.sendText(m.chat, text, m, { mentions: org })
                    }
                        break
                    case 'miko': case 'money': {
                        let money = []
                        for (let i in user) {
                            money.push(user[i].money)
                        }
                        //sort data
                        money.sort(function (a, b) { return b - a })
                        //take top 5 data
                        let top5 = []
                        for (let i = 0; i < 20; i++) {
                            top5.push(money[i])
                        }
                        //send top 5 data
                        let text = ''
                        let org = []
                        for (let i = 0; i < 20; i++) {
                            for (let j in user) {
                                if (user[j].money === top5[i]) {
                                    //use tag number instead of name
                                    text += `${i + 1}. @${j.split('@')[0]} = ${user[j].money} MIKO\n`
                                    org.push(j)
                                    //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`

                                }
                            }
                        }

                        hisoka.sendText(m.chat, text, m, { mentions: org })
                    }
                        break
                    case 'diamond': {
                        let diamond = []
                        for (let i in user) {
                            diamond.push(user[i].diamond)
                        }
                        //sort data
                        diamond.sort(function (a, b) { return b - a })
                        //take top 5 data
                        let top5 = []
                        for (let i = 0; i < 20; i++) {
                            top5.push(diamond[i])
                        }
                        //send top 5 data
                        let text = ''
                        let org = []
                        for (let i = 0; i < 20; i++) {
                            for (let j in user) {
                                if (user[j].diamond === top5[i]) {
                                    //use tag number instead of name
                                    text += `${i + 1}. @${j.split('@')[0]} = ${user[j].diamond} Diamond\n`
                                    org.push(j)
                                    //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`

                                }
                            }
                        }
                        hisoka.sendText(m.chat, text, m, { mentions: org })
                    }
                        break
                    case 'potion': {
                        let potion = []
                        for (let i in user) {
                            potion.push(user[i].potion)
                        }
                        //sort data
                        potion.sort(function (a, b) { return b - a })
                        //take top 5 data
                        let top5 = []
                        for (let i = 0; i < 20; i++) {
                            top5.push(potion[i])
                        }
                        //send top 5 data
                        let text = ''
                        let org = []
                        for (let i = 0; i < 20; i++) {
                            for (let j in user) {
                                if (user[j].potion === top5[i]) {
                                    //use tag number instead of name
                                    text += `${i + 1}. @${j.split('@')[0]} = ${user[j].potion} potion\n`
                                    org.push(j)
                                    //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`

                                }
                            }
                        }
                        hisoka.sendText(m.chat, text, m, { mentions: org })
                    }
                        break
                    case 'common': {
                        let common = []
                        for (let i in user) {
                            common.push(user[i].common)
                        }
                        //sort data
                        common.sort(function (a, b) { return b - a })
                        //take top 5 data
                        let top5 = []
                        for (let i = 0; i < 20; i++) {
                            top5.push(common[i])
                        }
                        //send top 5 data
                        let text = ''
                        let org = []
                        for (let i = 0; i < 20; i++) {
                            for (let j in user) {
                                if (user[j].common === top5[i]) {
                                    //use tag number instead of name
                                    text += `${i + 1}. @${j.split('@')[0]} = ${user[j].common} common\n`
                                    org.push(j)
                                    //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`

                                }
                            }
                        }
                        hisoka.sendText(m.chat, text, m, { mentions: org })
                    }
                        break
                    case 'uncommon': {
                        let uncommon = []
                        for (let i in user) {
                            uncommon.push(user[i].uncommon)
                        }
                        //sort data
                        uncommon.sort(function (a, b) { return b - a })
                        //take top 5 data
                        let top5 = []
                        for (let i = 0; i < 20; i++) {
                            top5.push(uncommon[i])
                        }
                        //send top 5 data
                        let text = ''
                        let org = []
                        for (let i = 0; i < 20; i++) {
                            for (let j in user) {
                                if (user[j].uncommon === top5[i]) {
                                    //use tag number instead of name
                                    text += `${i + 1}. @${j.split('@')[0]} = ${user[j].uncommon} uncommon\n`
                                    org.push(j)
                                    //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`

                                }
                            }
                        }
                        hisoka.sendText(m.chat, text, m, { mentions: org })
                    }
                        break
                    case 'mythic': {
                        let mythic = []
                        for (let i in user) {
                            mythic.push(user[i].mythic)
                        }
                        //sort data
                        mythic.sort(function (a, b) { return b - a })
                        //take top 5 data
                        let top5 = []
                        for (let i = 0; i < 20; i++) {
                            top5.push(mythic[i])
                        }
                        //send top 5 data
                        let text = ''
                        let org = []
                        for (let i = 0; i < 20; i++) {
                            for (let j in user) {
                                if (user[j].mythic === top5[i]) {
                                    //use tag number instead of name
                                    text += `${i + 1}. @${j.split('@')[0]} = ${user[j].mythic} mythic\n`
                                    org.push(j)
                                    //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`

                                }
                            }
                        }
                        hisoka.sendText(m.chat, text, m, { mentions: org })
                    }
                        break
                    case 'legendary': {
                        let legendary = []
                        for (let i in user) {
                            legendary.push(user[i].legendary)
                        }
                        //sort data
                        legendary.sort(function (a, b) { return b - a })
                        //take top 5 data
                        let top5 = []
                        for (let i = 0; i < 20; i++) {
                            top5.push(legendary[i])
                        }
                        //send top 5 data
                        let text = ''
                        let org = []
                        for (let i = 0; i < 20; i++) {
                            for (let j in user) {
                                if (user[j].legendary === top5[i]) {
                                    //use tag number instead of name
                                    text += `${i + 1}. @${j.split('@')[0]} = ${user[j].legendary} legendary\n`
                                    org.push(j)
                                    //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`

                                }
                            }
                        }
                        hisoka.sendText(m.chat, text, m, { mentions: org })
                    }
                        break
                    case 'sampah': {
                        let sampah = []
                        for (let i in user) {
                            sampah.push(user[i].sampah)
                        }
                        //sort data
                        sampah.sort(function (a, b) { return b - a })
                        //take top 5 data
                        let top5 = []
                        for (let i = 0; i < 20; i++) {
                            top5.push(sampah[i])
                        }
                        //send top 5 data
                        let text = ''
                        let org = []
                        for (let i = 0; i < 20; i++) {
                            for (let j in user) {
                                if (user[j].sampah === top5[i]) {
                                    //use tag number instead of name
                                    text += `${i + 1}. @${j.split('@')[0]} = ${user[j].sampah} sampah\n`
                                    org.push(j)
                                    //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`

                                }
                            }
                        }
                        hisoka.sendText(m.chat, text, m, { mentions: org })
                    }
                        break
                    default: return m.reply('masukan jenis')
                }
            }
                break
            //leaderbord money
            case 'topmoney': case 'topmiko': {
                let user = global.db.data.users
                //take all data of money
                let money = []
                for (let i in user) {
                    money.push(user[i].money)
                }
                //sort data
                money.sort(function (a, b) { return b - a })
                //take top 5 data
                let top5 = []
                for (let i = 0; i < 50; i++) {
                    top5.push(money[i])
                }
                //send top 5 data
                let text = ''
                let org = []
                for (let i = 0; i < 50; i++) {
                    for (let j in user) {
                        if (user[j].money === top5[i]) {
                            //use tag number instead of name
                            text += `${i + 1}. @${j.split('@')[0]} = ${user[j].money} MIKO\n`
                            org.push(j)
                            //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`

                        }
                    }
                }

                hisoka.sendText(m.chat, text, m, { mentions: org })
            }
                break
            case 'toplokal': {
                /*
                take all data of money
            let money = []
            for(let i in user){
                money.push(user[i].money)
            }
            //sort data
            money.sort(function(a, b){return b-a})
            //take top 5 data
            let top5 = []
            for(let i = 0; i < 5; i++){
                top5.push(money[i])
            }
            //send top 5 data
            let text = ''
            for(let i = 0; i < 5; i++){
                for(let j in user){
                    if(user[j].money === top5[i]){
                        //use tag number instead of name
                        text += `${i+1}. @${j.split('@')[0]} = ${user[j].money} MIKO\n`
                        //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`
                        console.log(user[j], user[j].money)
                    }
                }
            }
            hisoka.sendTextWithMentions(m.chat, text, m) */
                if (!m.isGroup) throw `Hanya bisa digunakan di grup`
                //let mem = participants
                let jmlmem = participants.length
                let mem = []
                for (let i = 0; i < jmlmem; i++) {
                    mem.push(participants[i].id)
                }
                let user = global.db.data.users
                let money = []
                let level = []
                for (let i of mem) {
                    //if (typeof user !== 'object') global.db.data.users[m.sender] = {}
                    if (typeof global.db.data.users[i].money !== 'object') return money.push(0)
                    money.push(global.db.data.users[i].money)
                    level.push(global.db.data.users[i].level)
                }
                // console.log(user)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                // let money = []
                // let level = []
                // for(let i = 0; i < user.length; i++){
                //     console.log(i)
                //     money.push(user[i].money)
                //     level.push(user[i].level)
                // }
                money.sort(function (a, b) { return b - a })
                level.sort(function (a, b) { return b - a })
                let top5money = []
                let top5level = []

                for (let i = 0; i < 5; i++) {
                    top5money.push(money[i])
                    top5level.push(money[i])
                }
                let txt = 'TOP LOKAL\n'
                txt += `TOP MIKO LOKAL\n`
                let org = []
                for (let i = 0; i < 5; i++) {

                    for (let j in user) {
                        console.log(i, j)
                        if (user[j].money === top5money[i]) {
                            txt += `${i + 1}. @${j.split('@')[0]} = ${user[j].money} MIKO\n`
                            console.log(user[j], user[j].money)
                            org.push(j)
                        }/* 
                        `
                        if(user[j].level === top5level[i]){
                            txt += `${i+1}. @${j.split('@')[0]} = ${user[j].level} LEVEL\n`
                        } */
                    }
                }
                hisoka.sendText(m.chat, txt, m, { mentions: org })
                // hisoka.sendTextWithMentions(m.chat, txt, m)
            }
                break

            //top level
            case 'toplevel': {
                let user = global.db.data.users
                //take all data of level
                let level = []
                for (let i in user) {
                    level.push(user[i].level)
                }
                //sort data
                level.sort(function (a, b) { return b - a })
                //take top 5 data
                let top5 = []
                for (let i = 0; i < 5; i++) {
                    top5.push(level[i])
                }
                //send top 5 data
                let text = ''
                let org = []
                for (let i = 0; i < 5; i++) {
                    for (let j in user) {
                        if (user[j].level === top5[i]) {
                            //use tag number instead of name
                            text += `${i + 1}. @${j.split('@')[0]} = ${user[j].level} Level\n`
                            //text += `${i+1}. @${user[j].number.split('@')[0]} - ${top5[i]} MIKO\n`
                            org.push(j)

                        }
                    }
                }
                hisoka.sendText(m.chat, text, m, { mentions: org })
            }
                break
            //transfer money 
            /*case 'transfer': case 'tf' : {
            if(!text) throw `Masukan jumlah`
            if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa transfer dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu transfer?_\nTag orangnya..\n\nContoh : ${prefix}transfer @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            let user22 = m.mentionedJid[0].split('@')
            let user = global.db.data.users[m.sender]
            let money = user.money
            //force the args into number
            let kasih = Number(args[1])
            if(kasih < 1) throw `Masukan jumlah yang valid`
            if(kasih > money) throw `${user.name} tidak memiliki jumlah MIKO yang cukup`
            money -= kasih
            let user2 = global.db.data.users[m.mentionedJid[0]]
            let money2 = user2.money
            money2 += kasih
            user.money = money
            user2.money = money2
            hisoka.sendText(m.chat, `${user.name} telah mengirim ${kasih} MIKO ke ${user.name}`,m)
            hisoka.sendText(m.sender, `${user.name} telah menerima ${kasih} MIKO dari ${user.name}`,m)
            
            break*/
            case 'transfer': case 'tf': {
                if (args.length < 3) {
                    return hisoka.sendText(m.chat, `Gunakan format ${prefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${prefix}transfer money 100 @tag*`.trim(), m)
                } else try {
                    let type = (args[0] || '').toLowerCase()
                    let count = args[1] && args[1].length > 0 ? Math.min(9999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
                    let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
                    if (!m.mentionedJid || !args[2]) throw 'Tag salah satu, atau ketik Nomernya!!'
                    let users = global.db.data.users
                    switch (type) {
                        case 'money': case 'miko':
                            console.log(args[0], args[1], args[2], args[3])
                            if (!isPremium && count > 50000) return m.reply(`Hanya bisa transfer hingga 50.000 MIKO. Upgrade ke Premium untuk lebih`)
                            if (global.db.data.users[m.sender].money >= count * 1) {
                                try {
                                    global.db.data.users[m.sender].money -= count * 1
                                    global.db.data.users[who].money += count * 1
                                    hisoka.sendText(m.chat, `Berhasil mentransfer money sebesar ${count}`.trim(), m)
                                } catch (e) {
                                    global.db.data.users[m.sender].money += count * 1
                                    m.reply('Gagal Menstransfer')
                                    console.log(e)
                                    if (DevMode) {
                                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                            conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                                        }
                                    }
                                }
                            } else hisoka.sendText(m.chat, `Uang kamu tidak mencukupi untuk mentransfer Money sebesar ${count}`.trim(), m)
                            break
                        case 'potion':
                            if (global.db.data.users[m.sender].potion >= count * 1) {
                                try {
                                    global.db.data.users[m.sender].potion -= count * 1
                                    global.db.data.users[who].potion += count * 1
                                    hisoka.sendText(m.chat, `Berhasil mentransfer ${count} Potion`.trim(), m)
                                } catch (e) {
                                    global.db.data.users[m.sender].potion += count * 1
                                    m.reply('Gagal Menstransfer')
                                    console.log(e)
                                    if (DevMode) {
                                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                            conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                                        }
                                    }
                                }
                            } else hisoka.sendText(m.chat, `Potion kamu tidak cukup`.trim(), m)
                            break
                        case 'sampah':
                            if (global.db.data.users[m.sender].sampah >= count * 1) {
                                try {
                                    global.db.data.users[m.sender].sampah -= count * 1
                                    global.db.data.users[who].sampah += count * 1
                                    hisoka.sendText(m.chat, `Berhasil mentransfer ${count} Sampah`.trim(), m)
                                } catch (e) {
                                    global.db.data.users[m.sender].sampah += count * 1
                                    m.reply('Gagal Menstransfer')
                                    console.log(e)
                                    if (DevMode) {
                                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                            conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                                        }
                                    }
                                }
                            } else hisoka.sendText(m.chat, `Sampah kamu tidak cukup`.trim(), m)
                            break
                        case 'diamond':
                            if (global.db.data.users[m.sender].diamond >= count * 1) {
                                try {
                                    global.db.data.users[m.sender].diamond -= count * 1
                                    global.db.data.users[who].diamond += count * 1
                                    hisoka.sendText(m.chat, `Berhasil mentransfer ${count} Diamond`.trim(), m)
                                } catch (e) {
                                    global.db.data.users[m.sender].diamond += count * 1
                                    m.reply('Gagal Menstransfer')
                                    console.log(e)
                                    if (DevMode) {
                                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                            conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                                        }
                                    }
                                }
                            } else hisoka.sendText(m.chat, `Diamond kamu kamu tidak cukup`.trim(), m)
                            break
                        case 'common':
                            if (global.db.data.users[m.sender].common >= count * 1) {
                                try {
                                    global.db.data.users[m.sender].common -= count * 1
                                    global.db.data.users[who].common += count * 1
                                    hisoka.sendText(m.chat, `Berhasil mentransfer ${count} Common Crate`.trim(), m)
                                } catch (e) {
                                    global.db.data.users[m.sender].common += count * 1
                                    m.reply('Gagal Menstransfer')
                                    console.log(e)
                                    if (DevMode) {
                                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                            conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                                        }
                                    }
                                }
                            } else hisoka.sendText(m.chat, `Common crate kamu kamu tidak cukup`.trim(), m)
                            break
                        case 'uncommon':
                            if (global.db.data.users[m.sender].uncommon >= count * 1) {
                                try {
                                    global.db.data.users[m.sender].uncommon -= count * 1
                                    global.db.data.users[who].uncommon += count * 1
                                    hisoka.sendText(m.chat, `Berhasil mentransfer ${count} Uncommon Crate`.trim(), m)
                                } catch (e) {
                                    global.db.data.users[m.sender].uncommon += count * 1
                                    m.reply('Gagal Menstransfer')
                                    console.log(e)
                                    if (DevMode) {
                                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                            conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                                        }
                                    }
                                }
                            } else hisoka.sendText(m.chat, `Uncommon crate kamu kamu tidak cukup`.trim(), m)
                            break
                        case 'mythic':
                            if (global.db.data.users[m.sender].mythic >= count * 1) {
                                try {
                                    global.db.data.users[m.sender].mythic -= count * 1
                                    global.db.data.users[who].mythic += count * 1
                                    hisoka.sendText(m.chat, `Berhasil mentransfer ${count} Mythic crate`.trim(), m)
                                } catch (e) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                    m.reply('Gagal Menstransfer')
                                    console.log(e)
                                    if (DevMode) {
                                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                            conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                                        }
                                    }
                                }
                            } else hisoka.sendText(m.chat, `Mythic crate kamu kamu tidak cukup`.trim(), m)
                            break
                        case 'legendary':
                            if (global.db.data.users[m.sender].legendary >= count * 1) {
                                try {
                                    global.db.data.users[m.sender].legendary -= count * 1
                                    global.db.data.users[who].legendary += count * 1
                                    hisoka.sendText(m.chat, `Berhasil mentransfer ${count} Legendary crate`.trim(), m)
                                } catch (e) {
                                    global.db.data.users[m.sender].legendary += count * 1
                                    m.reply('Gagal Menstransfer')
                                    console.log(e)
                                    if (DevMode) {
                                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                            conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                                        }
                                    }
                                }
                            } else hisoka.sendText(m.chat, `Legendary crate kamu kamu tidak cukup`.trim(), m)
                            break
                        default:
                            return hisoka.sendText(m.chat, `Gunakan format ${prefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${prefix}transfer money 100 @tag*\n\n*List yang bisa di transfer*\nMoney\nPotion\nSampah\nDiamond\nCommon\nUncommon\nMythic\nLegendary`.trim(), m)
                    }
                } catch (e) {
                    hisoka.sendText(m.chat, `Format yang anda gunakan salah\n\nGunakan format ${prefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${prefix}transfer money 100 @tag*`.trim(), m)
                    console.log(e)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        hisoka.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
                break
            case 'tfall': {
                let user = global.db.data.users[m.sender]
                let moneyA = user.money
                let intA = moneyA * 1
                let who = m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
                let userB = global.db.data.users[who]
                try {
                    global.db.data.users[m.sender].money -= intA
                    global.db.data.users[who].money += intA
                    hisoka.sendText(m.chat, `Berhasil mentransfer money sebesar ${intA}`.trim(), m)
                } catch (e) {
                    global.db.data.users[m.sender].money += intA
                    m.reply('Gagal Menstransfer')
                    console.log(e)
                    if (DevMode) {
                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                            conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                        }
                    }
                }
            }
                break
            case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {

                let user = global.db.data.users[m.sender]
                hisoka.sendMessage(m.chat, { image: global.thumb, caption: `*Hai Kak ${user.name}*\n\n Bot Rental Prices\n⭔ 10k Per Group via E-Walet 1 Month\n⭔ 15k via pulsa 1 Month\n\n Premium Price Bot\n⭔ 5k per User 1 bulan\n\nPayment can be via saweria/trakteer/shopee/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6283834685279 (Owner)\n\nDonate For Me : \n\n⭔ Saweria : https://saweria.co/Miku21Margareth\n⭔ Trakteer : https://trakteer.id/miku21-margareth` }, { quoted: m })
            }
                break
            case 'sc': case 'script': {
                m.reply('Script Base : https://github.com/DikaArdnt/Hisoka-Morou\nScript Miku21Bot : https://github.com/Miku21750\nDonate For Me : \n\n⭔ https://wa.me/6283834685279 (Owner)\n\n⭔ Saweria : https://saweria.co/Miku21Margareth\n⭔ Trakteer : https://trakteer.id/miku21-margareth')
            }
                break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1           . mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({ archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    //hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                    hisoka.chatModify(
                        { clear: { messages: [{ id: m.id, fromMe: true, timestamp: m.messageTimestamp }] } },
                        m.chat, []
                    ).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
                break
            case 'clearallchat': {
                //let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                //hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                for (let { jid } of store.chats.all()) {
                    await hisoka.chatModify(
                        { clear: { messages: [{ id: m.id, fromMe: true, timestamp: m.messageTimestamp }] } },
                        jid, []
                    ).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
                break
            case 'teststatus': {
                let anu = await hisoka.fetchStatus(m.sender)
                let txt = null
                console.log(anu)
                if (!anu) { txt = '' }
                else {
                    let date = new Date(`${anu.setAt}`)
                    txt = `${anu.status}, ${date}`
                    console.log(txt)
                }
            }
                break
            case 'malch': {
                if (!text) throw `Masukan Input`
                let anu = await fetchJson(`https://api.jikan.moe/v4/characters/${args[0]}`)
                let res = anu.data
                let mess = `Data Waifu\n\nName : ${res.name}\nMal Id: ${res.mal_id}\n\nAbout:\n${res.about}`
                console.log(mess)
                await hisoka.sendImage(m.chat, res.images.jpg.image_url || res.images.webp.image_url, mess, m)
            }
                break
            case 'malsearch': {

                if (!text) throw `Masukan Input`
                let anu = await fetchJson(`https://api.jikan.moe/v4/characters?q=${text}`)
                let res = anu.data[0]
                let mess = `Data Waifu\n\nName : ${res.name}\nMal Id: ${res.mal_id}\n\nAbout:\n${res.about}`
                console.log(mess)
                await hisoka.sendImage(m.chat, res.images.jpg.image_url || res.images.webp.image_url, mess, m)
            }
                break
            case 'claimwaifu': {
                if (!text) throw `Masukan ID waifu/husbu yang tertera pada MAL. jika ingin tahu lebih lanjut bisa gunakan ${prefix} malsearch (text), atau cari sendiri di mal itu sendiri`
                let user = global.db.data.users[m.sender]
                if (user.waifu != null) return hisoka.sendText(m.chat, `Anda sudah memiliki waifu/husbu`, m)
                let anu = await fetchJson(`https://api.jikan.moe/v4/characters/${args[0]}`)
                let res = anu.data
                let waifu = res
                if (!waifu) throw `Waifu/Husbu tidak ditemukan, coba cek !searchwaifu dan masukan kode nya sesuai mal`
                let keys = Object.keys(global.db.data.users)
                for (let i = 0; i < keys.length; i++) {
                    //console.log('p')
                    let key = keys[i], arr = global.db.data.users[key]
                    let menst = [global.db.data.users[key].number]
                    //console.log(global.db.data.users[key].waifu, waifu.mal_id)
                    if (global.db.data.users[key].waifu == waifu.mal_id) return hisoka.sendText(m.chat, `Waifu/Husbu sudah diclaim oleh ${global.db.data.users[key].name} @${global.db.data.users[key].number.split('@')[0]}`, m, { mentions: menst })
                }
                user.waifu = waifu.mal_id
                hisoka.sendImage(m.chat, waifu.images.jpg.image_url || waifu.images.webp.image_url, `${user.name} telah mengambil waifu/husbu ${waifu.name} \n\n Silahkan Cek !pdkt untuk berinteraksi dengan waifu/husbu mu`, m)
                //if(waifu.claim === true) return hisoka.sendTextWithMentions(m.chat, `Waifu/Husbu sudah diclaim oleh ${waifu.with} @${waifu.number.split('@')[0]}`, m)

                //user.waifu = waifu.mal_id
                //hisoka.sendImage(m.chat, waifu.images.jpg.image_url,`${user.name} telah mengambil waifu/husbu ${waifu.name} \n\n Silahkan Cek !pdkt untuk berinteraksi dengan waifu/husbu mu`, m)
            }
                break
            case 'unclaim': {
                let user = global.db.data.users[m.sender]
                if (!user.waifu) throw `Anda tidak memiliki waifu/husbu`
                let anu = await fetchJson(`https://api.jikan.moe/v4/characters/${user.waifu}`)
                let res = anu.data
                let waifu = res
                if (!waifu) throw `Waifu/Husbu tidak ditemukan`
                user.waifu = null
                hisoka.sendText(m.chat, ` waifu/husbu ${waifu.name} telah di unclaim`, m)
                user.waifuexp = 0
            }
                break
            case 'waifusaya': case 'mywaifu': {
                let user = global.db.data.users[m.sender]
                if (!user.waifu) throw `Anda tidak memiliki waifu/husbu`
                let anu = await fetchJson(`https://api.jikan.moe/v4/characters/${user.waifu}`)
                let res = anu.data
                let waifu = res
                let claim = false
                let number = ''
                let keys = Object.keys(global.db.data.users)
                for (let i = 0; i < keys.length; i++) {
                    //console.log('p')
                    let key = keys[i], arr = global.db.data.users[key]
                    let menst = [global.db.data.users[key].number]
                    //console.log(global.db.data.users[key].waifu, waifu.mal_id)
                    if (global.db.data.users[key].waifu == waifu.mal_id) {
                        claim = true
                        number = key
                    }
                }
                let datawaifu = `*Waifu/Husbu Saya*\n\nNama : ${waifu.name}\n\nMal Id : ${waifu.mal_id}\n\nClaim : ${claim}\n\nWith : @${number.split('@')[0]}\n\nMarried : ${user.nikah}\n\nStatus:\nLove EXP:${user.waifuexp}\n\nDesc:\n${waifu.about}`
                //Deskripsi : ${waifu.desc}\n\n
                let menst = [number]
                await hisoka.sendImage(m.chat, waifu.images.jpg.image_url || waifu.images.webp.image_url, datawaifu, m, { mentions: menst })
            }
                break
            //see one status of the list 
            case 'statuswaifu': {
                if (!args[0]) throw `Masukan nomor waifu/husbu yang ingin dicek`
                let anu = await fetchJson(`https://api.jikan.moe/v4/characters/${args[0]}`)
                let res = anu.data
                let waifu = res
                let claim = false
                let num = []
                let number = ''
                let user = ''
                if (!waifu) throw `Waifu/Husbu tidak ditemukan, coba cek !searchwaifu dan masukan kode nya sesuai mal`
                let keys = Object.keys(global.db.data.users)
                for (let i = 0; i < keys.length; i++) {
                    //console.log('p')
                    let key = keys[i], arr = global.db.data.users[key]
                    let menst = [global.db.data.users[key].number]
                    //console.log(global.db.data.users[key].waifu, waifu.mal_id)
                    if (global.db.data.users[key].waifu == waifu.mal_id) {
                        claim = true
                        user = global.db.data.users[key]
                        num.push(key)
                        number = key
                    }
                }
                let datawaifu = `*DATA Waifu/Husbu*\n\nNama : ${waifu.name}\n\nMal Id : ${waifu.mal_id}\n\nClaim : ${claim}\n\nWith : @${number.split('@')[0]}\n\nMarried : ${user.nikah}\n\nStatus:\nLove EXP:${user.waifuexp}\n\nDesc:\n${waifu.about}`
                //Deskripsi : ${waifu.desc}\n\n
                await hisoka.sendImage(m.chat, waifu.images.jpg.image_url || waifu.images.webp.image_url, datawaifu, m, { mentions: num })
            }
                break
            //see all list of waifu
            case 'listwaifu': {
                //let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                // let waifu = global.db.data.waifu
                // let datawaifu = `*List Waifu/Husbu*\n\n`
                // for(let i in waifu){
                //     datawaifu += `${global.sp + waifu[i].no} ${waifu[i].name}\n`
                //     if(waifu[i].claim == true) datawaifu += `With : ${waifu[i].with} @${waifu[i].number.split('@')[0]}\n `
                // }
                // hisoka.sendTextWithMentions(m.chat, datawaifu, m)
                let txt = `
karena memakai myAnimeList, jadi list waifu difreeze dahulu. pakai ini saja
CARA PAKAI CLAIM WAIFU 
claim dengan nomor karakter yang ada di myanimelist pada bagian link. kalau malas cari, bisa gunakan fitur !malsearch, tapi ya mohon moaaf saja, fitur nya kruang akurat biasanya
lalu untuk pdkt, disitu ada keterangannya. untuk nikah dengan waifu, syarat harus membeli rumah dahulu. lalu untuk fitur lainnya masih WIP, jadi mohon bersabar
`
                hisoka.sendImage(m.chat, 'https://i.ibb.co/R3yfs3w/tutorclaimwaifu.png', txt, m)
            }
                break
            //search the waifu by the name
            case 'searchwaifu': {
                if (!text) throw `Masukan nama waifu/husbu`
                let anu = await fetchJson(`https://api.jikan.moe/v4/characters?q=${text}`)
                let res = anu.data[0]
                let waifu = res
                let claim = false
                let number = ''
                let num = []
                let user = ''
                if (!waifu) throw `Waifu/Husbu tidak ditemukan, coba cek !searchwaifu dan masukan kode nya sesuai mal`
                let keys = Object.keys(global.db.data.users)
                for (let i = 0; i < keys.length; i++) {
                    //console.log('p')
                    let key = keys[i], arr = global.db.data.users[key]
                    let menst = [global.db.data.users[key].number]
                    //console.log(global.db.data.users[key].waifu, waifu.mal_id)
                    if (global.db.data.users[key].waifu == waifu.mal_id) {
                        claim = true
                        user = global.db.data.users[key]
                        number = key
                        num.push(key)
                    }
                }
                let datawaifu = `*DATA Waifu/Husbu*\n\nNama : ${waifu.name}\n\nMal Id : ${waifu.mal_id}\n\nClaim : ${claim}\n\nWith : @${number.split('@')[0]}\n\nMarried : ${user.nikah}\n\nStatus:\nLove EXP:${user.waifuexp}\n\nDesc:\n${waifu.about}`
                //Deskripsi : ${waifu.desc}\n\n
                await hisoka.sendImage(m.chat, waifu.images.jpg.image_url || waifu.images.webp.image_url, datawaifu, m, { mentions: num })
            }
                break
            // //search waifu by the anime
            // case 'searchwaifuanime':{
            //     if(!text) throw `Masukan nama anime`
            //     let waifu = global.db.data.waifu
            //     let datawaifu = `*List Waifu/Husbu*\n\n`
            //     for(let i in waifu){
            //         if(waifu[i].anime.toLowerCase().includes(text.toLowerCase())){
            //             datawaifu += `${global.sp + waifu[i].no} ${waifu[i].name}\n${waifu[i].anime}\n`
            //             if(waifu[i].claim == true) datawaifu += `With : ${waifu[i].with} @${waifu[i].number.split('@')[0]}\n `
            //         }
            //     }
            //     hisoka.sendTextWithMentions(m.chat, datawaifu, m)
            // }
            // break
            //randomize waifu
            case 'randomwaifu': {
                let anu = await fetchJson('https://api.jikan.moe/v4/random/characters')
                let res = anu.data
                let waifu = res
                let claim = false
                let number = ''
                let num = []
                let user = ''
                if (!waifu) throw `BUG, Coba lagi`
                let keys = Object.keys(global.db.data.users)
                for (let i = 0; i < keys.length; i++) {
                    //console.log('p')
                    let key = keys[i], arr = global.db.data.users[key]
                    let menst = [global.db.data.users[key].number]
                    //console.log(global.db.data.users[key].waifu, waifu.mal_id)
                    if (global.db.data.users[key].waifu == waifu.mal_id) {
                        claim = true
                        user = global.db.data.users[key]
                        number = key
                        num.push(key)
                    }
                }
                let datawaifu = `*RANDOM Waifu/Husbu*\n\nNama : ${waifu.name}\n\nMal Id : ${waifu.mal_id}\n\nClaim : ${claim}\n\nWith : @${number.split('@')[0]}\n\nMarried : ${user.nikah}\n\nStatus:\nLove EXP:${user.waifuexp}\n\nDesc:\n${waifu.about}`
                //Deskripsi : ${waifu.desc}\n\n
                //hisoka.sendImage(m.chat, waifu[random].image, datawaifu, m)
                let buttons = [
                    { buttonId: `claimwaifu ${waifu.mal_id}`, buttonText: { displayText: 'Claim' }, type: 1 },
                    { buttonId: `randomwaifu`, buttonText: { displayText: 'Next' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: waifu.images.jpg.image_url || waifu.images.webp.image_url },
                    caption: datawaifu,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m }, { mentions: num })
            }
                break
            //tutor claim waifu
            case 'tutorclaim': {
                //https://i.ibb.co/R3yfs3w/tutorclaimwaifu.png
                let txt = `
CARA PAKAI CLAIM WAIFU 
claim waifu dengan nomor character, misal : "claimwaifu 40016". Untuk no characternya bisa dicari dengan menggunakan fitur !searchwaifu  misal: "searchwaifu tanaka asuka" atau dengan buka website my anime list seperti gambar diatas
\n\nlalu untuk pdkt, disitu ada keterangannya. untuk nikah dengan waifu, syarat harus membeli rumah dahulu. lalu untuk fitur lainnya masih WIP, jadi mohon bersabar
`
                hisoka.sendImage(m.chat, 'https://i.ibb.co/R3yfs3w/tutorclaimwaifu.png', txt, m)
            }
                break
            //interaction with waifu
            case 'pdkt': {
                let pdkt = (args[0] || '').toLowerCase()
                let interaksi = (args[1] || '').toLowerCase()
                let inte_type = (args[1] || '').toLowerCase()
                let touch = (args[2] || '').toLowerCase()
                let present = (args[2] || '').toLowerCase()
                let special = (args[2] || '').toLowerCase()
                let gift = (args[3] || '').toLowerCase()
                let nikah = (args[3] || '').toLowerCase()
                let user = global.db.data.users[m.sender]
                if (!user.waifu) throw `Anda tidak memiliki waifu, claim dulu`
                let anu = await fetchJson(`https://api.jikan.moe/v4/characters/${user.waifu}`)
                let reswaifu = anu.data
                let waifu = reswaifu
                if (!waifu) throw 'BUG, coba lagi nanti'

                let namawaifu = waifu.name
                let text = ` *Status Waifu*
Waifu : ${waifu.name}
ID : ${waifu.mal_id}
Silahkan Pilih jenis ~pdkt~ interaksi
                `
                let button = [
                    { buttonId: `pdkt jalanjalan`, buttonText: { displayText: 'Jalan Jalan' }, type: 1 },
                    { buttonId: `pdkt kencan`, buttonText: { displayText: 'Kencan' }, type: 1 },
                    { buttonId: `pdkt interaksi`, buttonText: { displayText: 'Interaksi' }, type: 1 },
                ]
                let buttonMessage = {
                    caption: text,
                    footer: hisoka.user.name,
                    buttons: button,
                    headerType: 1
                }
                switch (pdkt) {
                    case 'jalanjalan': {
                        let lokasi = pickRandom(['Taman Bunga', 'Wisata Alam', 'Candi Borobudur', 'Rumah', 'Hati Kamu', 'Alfamart', 'Indomart'])
                        let ekspresi = pickRandom(['U-umm.. Aku senang...', 'Horee, bisa jalan jalan bareng ayank', 'Aku senang sekali', 'Terimakasih ayank'])
                        //randomize biaya
                        let duit = Math.floor(Math.random() * (500 - 1) + 1)
                        if (duit > user.money) throw `Duit kamu belum cukup untuk mengajak ayank mu jalan jalan. Minimal 500 MIKO untuk mengajaknya`
                        user.money -= duit
                        let lovexp = Math.floor(Math.random() * (20 - 1) + 1)
                        let special = Math.floor(Math.random() * (100 - 1) + 1)
                        let spesial = null
                        if (special > 85) {
                            spesial = pickRandom(['Gendongin Ayank', 'Ciuman depan umum', 'Jajanin Ayank', 'Beli Oleh Oleh'])
                            lovexp + 10
                        }
                        user.waifuexp += lovexp
                        let text = `*Jalan Jalan*
Kamu bersama ${waifu.name} Jalan Jalan ke ${lokasi} dan menghabiskan ${duit} MIKO.
${waifu.name} : ${ekspresi}
Love EXP kamu naik ${lovexp}. Love EXP kamu sekarang ${user.waifuexp}
                        `
                        if (spesial !== null) {
                            text += `\nKamu memiliki momen spesial : " ${spesial} "`
                        }
                        hisoka.sendText(m.chat, text, m)
                        //let text = `*Jalan Jalan*\n${waifu.name} : "mau jalan kemana yank?"`
                    }
                        break
                    case 'kencan': {
                        let lokasi = pickRandom(['Caffe', 'Restoran b5', 'Rumah Makan Padang', 'Rumah', 'Hati Kamu', 'Warung'])
                        let ekspresi = pickRandom(['U-umm.. Aku senang...', 'Horee, bisa makan bareng ayank', 'Aku senang sekali', 'Terimakasih ayank udah jajanin'])
                        //randomize biaya
                        let duit = Math.floor(Math.random() * (5000 - 1) + 1)
                        if (duit > user.money) throw `Duit kamu belum cukup untuk mengajak ayank mu jalan jalan. Minimal 500 MIKO untuk mengajaknya`
                        user.money -= duit
                        let lovexp = Math.floor(Math.random() * (40 - 1) + 1)
                        let special = Math.floor(Math.random() * (100 - 1) + 1)
                        let spesial = null
                        if (special > 85) {
                            spesial = pickRandom(['Suap Suapan', 'Dicium ayank', 'Kiss tidak langsung'])
                            lovexp + 10
                        }
                        user.waifuexp += lovexp
                        let text = `*Kencan*
Kamu bersama ${waifu.name} ~Makan makan~ ke ${lokasi} dan menghabiskan ${duit} MIKO.
${waifu.name} : ${ekspresi}
Love EXP kamu naik ${lovexp}. Love EXP kamu sekarang ${user.waifuexp}
                        `
                        if (spesial !== null) {
                            text += `\nKamu memiliki momen spesial : " ${spesial} "`
                        }
                        hisoka.sendText(m.chat, text, m)
                    }
                        break
                    case 'interaksi': {
                        let button = [
                            { buttonId: `pdkt interaksi touch`, buttonText: { displayText: 'Touch (On Progress)' }, type: 1 },
                            { buttonId: `pdkt interaksi present`, buttonText: { displayText: 'Present' }, type: 1 },
                            { buttonId: `pdkt interaksi special`, buttonText: { displayText: 'Special' }, type: 1 }
                        ]
                        let textinter = `Pilih jenis interaksi dengan ${waifu.name}`

                        console.log(args[0], args[1], args[2], args[3], args[4])
                        switch (inte_type) {
                            case 'touch': {
                                let button = [
                                    { buttonId: `pdkt interaksi touch peluk`, buttonText: { displayText: 'Peluk (ON Progress)' }, type: 1 },
                                    { buttonId: `pdkt interaksi touch pat`, buttonText: { displayText: 'Pat Pat (ON Progress)' }, type: 1 },
                                    { buttonId: `pdkt interaksi touch ciuman`, buttonText: { displayText: 'Ciuman (ON Progress)' }, type: 1 }
                                ]
                                let texttouch = `Pilih jenis interaksi touch dengan ${waifu.name}`
                                switch (touch) {
                                    case 'peluk': {
                                        let ekspresi = pickRandom([''])
                                    }
                                        break
                                }
                                //hisoka.sendButtonText(m.chat, button, texttouch, hisoka.user.name, m)
                            }
                                break
                            case 'present': {
                                let button = [
                                    { buttonId: `pdkt interaksi present uang`, buttonText: { displayText: 'Beri Uang (Sedang Perbaikan)' }, type: 1 },
                                    { buttonId: `pdkt interaksi present gift`, buttonText: { displayText: 'Beri Gift' }, type: 1 }
                                ]
                                let textpresent = `Pilih jenis interaksi present dengan ${waifu.name}`
                                console.log(args[0], args[1], args[2], args[3], args[4])
                                switch (present) {
                                    case 'uang': {
                                        m.reply('masukan jumlah uang')
                                        let ekspresi = ''
                                        let lovexp = 0
                                        m.on('text', (msg) => {
                                            let uang = parseInt(msg.text)
                                            if (uang > user.money) throw `Duit kamu tidak cukup`
                                            user.money -= uang
                                            if (uang > 10000) {
                                                ekspresi = pickRandom(['E-ehh...i-ini banyak sekali, T-terimakasih..', 'A-aku sudah menerima uangmu..', 'U-ummm..', 'Banyaknya, Terimakasih ayank', 'Terimakasih yang...'])
                                                lovexp = Math.floor(Math.random() * (80 - 1) + 1)
                                            } else if (uang > 5000) {
                                                ekspresi = pickRandom(['E-ehh...T-terimakasih..', 'A-aku sudah menerima uangmu..', 'U-ummm..', 'Lumayan, Terimakasih ayank', 'Terimakasih yang...'])
                                                lovexp = Math.floor(Math.random() * (40 - 1) + 1)
                                            } else if (uang > 2000) {
                                                ekspresi = pickRandom(['E-ehh...T-terimakasih..', 'A-aku sudah menerima uangmu..', 'U-ummm..', 'Lumayan, Terimakasih ayank', 'Terimakasih yang...'])
                                                lovexp = Math.floor(Math.random() * (20 - 1) + 1)
                                            } else return m.reply('masukan jumlah yang valid (Minimal 2000 MIKO)')
                                        })
                                        user.waifuexp = lovexp
                                        let textpresentmoney = `*Present*
Kamu Memberikan uang sejumlah ${uang} MIKO Ke ${waifu.name}.
${waifu.name} : ${ekspresi}
Love EXP kamu naik ${lovexp}. Love EXP kamu sekarang ${user.waifuexp}
`
                                        user.waifuexp = lovexp
                                        hisoka.sendText(m.chat, textpresentmoney, m)
                                    }
                                        break
                                    case 'gift': {
                                        let button = [
                                            { buttonId: `pdkt interaksi present gift gift1`, buttonText: { displayText: 'Gift Bunga (2000 MIKO)' }, type: 1 },
                                            { buttonId: `pdkt inter1aksi present gift gift2`, buttonText: { displayText: 'Gift Chocolate (5000 MIKO)' }, type: 1 },
                                            { buttonId: `pdkt interaksi present gift gift3`, buttonText: { displayText: 'Gift Parfum (10000 MIKO)' }, type: 1 }
                                        ]

                                        console.log(args[0], args[1], args[2], args[3], args[4])
                                        switch (gift) {
                                            case 'gift1': {
                                                let duit = 2000
                                                if (duit > user.money) throw `Duit kamu tidak cukup`
                                                user.money -= duit
                                                let lovexp = Math.floor(Math.random() * (50 - 1) + 1)
                                                let ekspresi = pickRandom(['T-terimakasih..', 'Aku suka sekali bunga, Terimakasih', 'Wahhhhh, gift dari ayang, makasih', 'Umm..m-makasih', 'aww, baik banget kamu yang'])
                                                user.waifuexp += lovexp
                                                let textgift1 = `*Gift*
Kamu Memberikan Bunga seharga ${duit} ke ${waifu.name}.
${waifu.name} : ${ekspresi}
Love EXP kamu naik ${lovexp}. Love EXP kamu sekarang ${user.waifuexp}
                                                `
                                                return hisoka.sendText(m.chat, textgift1, m)
                                            }
                                                break
                                            case 'gift2': {
                                                let duit = 5000
                                                if (duit > user.money) throw `Duit kamu tidak cukup`
                                                user.money -= duit
                                                let lovexp = Math.floor(Math.random() * (50 - 1) + 1)
                                                let ekspresi = pickRandom(['T-terimakasih..', 'Aku suka sekali coklat, Terimakasih', 'Wahhhhh, gift dari ayang, makasih', 'Umm..m-makasih', 'aww, baik banget kamu yang'])
                                                user.waifuexp += lovexp
                                                let textgift2 = `*Gift*
Kamu Memberikan Coklat seharga ${duit} ke ${waifu.name}.
${waifu.name} : ${ekspresi}
Love EXP kamu naik ${lovexp}. Love EXP kamu sekarang ${user.waifuexp}
                                       `
                                                return hisoka.sendText(m.chat, textgift2, m)
                                            }
                                                break
                                            case 'gift3': {
                                                let duit = 10000
                                                if (duit > user.money) throw `Duit kamu tidak cukup`
                                                user.money -= duit
                                                let lovexp = Math.floor(Math.random() * (50 - 1) + 1)
                                                let ekspresi = pickRandom(['T-terimakasih..', 'Aku suka sekali harum parfum, Terimakasih', 'Wahhhhh, gift dari ayang, makasih', 'Umm..m-makasih', 'aww, baik banget kamu yang'])
                                                user.waifuexp += lovexp
                                                let textgift3 = `*Gift*
Kamu Memberikan Parfum seharga ${duit} ke ${waifu.name}.
${waifu.name} : ${ekspresi}
Love EXP kamu naik ${lovexp}. Love EXP kamu sekarang ${user.waifuexp}
                                                `
                                                return hisoka.sendText(m.chat, textgift3, m)
                                            }
                                                break
                                            default: return hisoka.sendButtonText(m.chat, button, 'Pilih Hadiah yang ingin diberikan', hisoka.user.name, m)
                                        }
                                    }
                                        break
                                    default: return hisoka.sendButtonText(m.chat, button, textpresent, hisoka.user.name, m)
                                }
                            }
                                break
                            case 'special': {
                                let button = [
                                    { buttonId: `pdkt interaksi special lewd`, buttonText: { displayText: 'Lewd (Dalam perbaikan)' }, type: 1 },
                                    { buttonId: `pdkt interaksi special nikah`, buttonText: { displayText: 'Nikah' }, type: 1 },
                                    { buttonId: `pdkt interaksi special segs`, buttonText: { displayText: 'EKHEMMM (ON Progress)' }, type: 1 },
                                ]
                                console.log(args[0], args[1], args[2], args[3])
                                let textspecial = `Pilih interaksi spesial dengan ${waifu.name}`
                                switch (special) {
                                    case 'lewd': {
                                        let gamau = pickRandom(['Gak mau ah', 'Ihh, mesum', 'Bego', 'Gamau', 'n-nakal'])
                                        let mau = pickRandom(['Ara~, Sini sini', 'm-mesum', 'NIH', 'n-nih', 'n-nakal'])
                                        if (user.waifuexp < 300) {
                                            let textlewd = `Waifumu Tidak mau
${waifu.name} : ${gamau}
Love Exp kamu belum cukup. Love Exp kamu sekarang ${user.waifuexp}. Butuh 300 LoveExp agar dia mau
`
                                            hisoka.sendText(m.sender, textlewd, m)
                                        } else {
                                            let word = waifu.name
                                            // let anu = await fetchJson(`https://api.zahwazein.xyz/searching/pixiv?query=${word}&apikey=keymikuzenz21`)
                                            // let mess = `${mau}\n`
                                            // for(var i in anu.result){
                                            //     var key = i;
                                            //     var val = anu.result[i]
                                            //     for(var j in val){
                                            //         var sub_key = j
                                            //         var res = val[j]
                                            //     }
                                            // }
                                            // hisoka.sendImage(m.chat, res.regular , mess, m)
                                            let anu = axios.get(`https://api.lolicon.app/setu/v2?size=regular&r18=1&num=20&keyword=${word}`).then(({ data }) => {
                                                let _data = data.data, result = []
                                                if (_data.length == 0) return m.reply('error, coba query lain')
                                                for (let i of _data) {
                                                    result.push({
                                                        title: i.title,
                                                        author: i.author,
                                                        url: i.urls.regular,
                                                        ext: i.ext,
                                                    })
                                                }
                                                let res = result[Math.floor(result.length * Math.random())]
                                                let txt = `Title : ${res.title}\nAuthor : ${res.author}`
                                                hisoka.sendImage(m.chat, res.url, txt, m)
                                            }).catch((e) => { m.reply(e) })
                                        }
                                    }
                                        break
                                    case 'nikah': {

                                        console.log(args[0], args[1], args[2], args[3])
                                        let gamau = pickRandom(['Gak mau ah', 'A-aku belum siap...', 'Bego', 'Gamau', 'Emangnya kamu yakin??', 'GAK'])
                                        let mau = pickRandom(['Ehhh..Yakin?? Aku siap sih...', 'Hu-um..Aku mau', 'Mau', 'YEYY, MAU!!', 'IYAA'])
                                        if (user.nikah == true) throw (`Kamu sudah menikah dengan ${waifu.name}. Ceraikan dahulu`)
                                        if (user.waifuexp < 500) {
                                            let textnikah = `Waifumu Tidak mau
${waifu.name} : ${gamau}
Love Exp kamu belum cukup. Love Exp kamu sekarang ${user.waifuexp}. Butuh 500 LoveExp agar dia mau menikah denganmu
`
                                            hisoka.sendText(m.chat, textnikah, m)
                                        } else {
                                            if (user.rumah == false && user.kasur == 0) {
                                                let textnikah = `Kamu belum memiliki Rumah atau kamar, ayo beli dulu, cek !buyrumah atau !kamar`
                                                hisoka.sendText(m.chat, textnikah, m)
                                            } else {
                                                let button = [
                                                    { buttonId: `pdkt interaksi special nikah biasa`, buttonText: { displayText: 'Biasa (50000 MIKO)' }, type: 1 },
                                                    { buttonId: `pdkt interaksi special nikah spesial`, buttonText: { displayText: 'Spesial (70000 MIKO)' }, type: 1 }
                                                ]
                                                let textnikah = `Pilih jenis pernikahanmu`
                                                switch (nikah) {
                                                    case 'biasa': {
                                                        let biaya = 50000
                                                        if (user.money < biaya) throw `Uang kamu tidak cukup`
                                                        user.money -= biaya
                                                        user.nikah = true
                                                        let txt = `kamu berjanji tidak akan meninggalkan ${waifu.name}
${waifu.name} : ${mau}
Kamu telah menikah dengan ${waifu.name}. selamat menjalani hidup :)
Kamu menghabiskan ${biaya} untuk pernikahan ini`
                                                        hisoka.sendText(m.chat, txt, m)
                                                    }
                                                        break
                                                    case 'spesial': {
                                                        let biaya = 70000
                                                        let bonuslove = 400
                                                        if (user.money < biaya) throw `Uang kamu tidak cukup`
                                                        user.money -= biaya
                                                        user.lovexp += bonuslove
                                                        user.nikah = true
                                                        let txt = `kamu berjanji tidak akan meninggalkan ${waifu.name}
${waifu.name} : ${mau}
Kamu telah menikah dengan ${waifu.name}. selamat menjalani hidup :)
Kamu menghabiskan ${biaya} untuk pernikahan ini
dan mendapatkan bonus love exp sebesar ${bonuslove}`
                                                        hisoka.sendText(m.chat, txt, m)
                                                    }
                                                        break
                                                    default: return hisoka.sendButtonText(m.chat, button, textnikah, hisoka.user.name, m)
                                                }

                                            }
                                        }
                                    }
                                        break
                                    case 'segs': {
                                        let gamau = pickRandom(['Gak mau ah', 'A-aku belum siap...', 'Bego', 'mesum', 'Gamau', 'Anumu kecil', 'GAK'])
                                        let mau = pickRandom(['Ehhh..Yakin?? Aku m-mau sih...', 'Hu-um..Aku urut', 'Mau', 'YEYY, MAU!!', 'IYAA', 'u-umm...Kamu mau? o-oke..'])
                                        if (user.waifuexp < 1000) {
                                            let textsegs = `Waifumu Tidak mau
${waifu.name} : ${gamau}
Love Exp kamu belum cukup. Love Exp kamu sekarang ${user.waifuexp}. Butuh 1000 LoveExp agar dia mau EKHEMMM denganmu
`
                                            hisoka.sendText(m.chat, textsegs, m)
                                        }

                                        else {
                                            return m.reply('bentar mas, mohon maaf, masih dibenerin, nanti kalau udah jadi saia kabarin')
                                            let ratemandul = Math.floor(Math.random() * (100 - 1) + 1)
                                            if(ratemandul < 7) {
                                                my
                                            }
                                        }
                                    }
                                        break
                                    default: return hisoka.sendButtonText(m.chat, button, textspecial, hisoka.user.name, m)
                                }
                            }
                                break
                            default: return hisoka.sendButtonText(m.chat, button, textinter, hisoka.user.name, m)
                        }
                    }
                        break
                    default:
                        return hisoka.sendButtonText(m.chat, button, text, hisoka.user.name, m)
                }

            }
                break
            case 'rumah': {
                let user = global.db.data.users[m.sender]
                if (user.rumah == false) throw `Kamu belum membeli rumah. silahkan membeli rumah terlebih dahulu di !buyrumah`
                let txtrumah = `
Kamu memiliki rumah tipe ${user.nama_rumah} di lokasi ${user.nama_lahan}`
                hisoka.sendText(m.chat, txtrumah, m)
            }
                break
            case 'buyrumah': {
                let user = global.db.data.users[m.sender]
                let textrumah = `
Selamat datang, ${user.name}. Selamat datang di 21Property
Kami mempunyai Rumah di dengan lokasi berikut
1. Desa Persikanan
Lokasi ini asri, indah. Cocok untuk meningkatkan kemesraan bersama pasangan anda, tetapi akan sulit untuk bekerja disana
Harga Lokasi ini 27000 MIKO
2. Puri Asri Marhaesih
Lokasi ini cocok untuk anda yang ingin bekerja dengan ringan, namun hati hati. Puri ini memiliki banyak ~ocehan tentangga yang bikin pasanganmu negatif thinking~
Harga Lokasi ini 30000 MIKO
3. Perumahan Lunatik Fajarasih
Lokasi ini sangat sempurna. lokasi yang sangat memudahkan bagi anda untuk bekerja, dan sangat nyaman.
Harga Lokasi ini 40000 MIKO

Beli lokasi dahulu, baru anda bisa membeli rumah.
Kami juga menyediakan rumah dengan jenis berikut :
1. Tipe rumah 21/24
Tipe ini low budget. Cocok bagi single/pasangan yang belum mempunyai anak. 1 buah kamar
dijual seharga 20000 MIKO
2. Tipe rumah 45
Minimalis. Cocok bagi pasangan yang mempunyai 1 anak. 2 buah kamar
dijual seharga 30000 MIKO
3. Tipe rumah 54
Cocok bagi yang mempunyai 2 anak. 3 buah kamar
dijual seharga 50000 MIKO
4. Tipe rumah 120
Cocok bagi yang ingin memiliki keluarga besar. Booster tambahan pada pekerjaanmu
Dijual seharga 70000 MIKO

Jika sudah membeli rumah, dan ingin pindah lokasi, maka harus jual terlebih dahulu rumah tersebut
Jika sudah dipertimbangkan, silahkan beli dengan cara !buyrumah (Lokasi) (Tipe rumah)
                `
                if (user.rumah == true) throw `Kamu sudah memiliki rumah, Jika ingin pindah maka jual dulu rumah sebelumnya`
                let lokasi = 0
                let rumah = 0
                let nama_rumah = ''
                let nama_lokasi = ''
                if (args[0] === '1') {
                    lokasi = 27000
                    nama_lokasi = 'Desa Persikanan'
                } else if (args[0] === '2') {
                    lokasi = 30000
                    nama_lokasi = 'Puri Asri Marhaesih'
                } else if (args[0] === '3') {
                    lokasi = 40000
                    nama_lokasi = 'Perumahan Lunatik Fajarasih'
                } else return hisoka.sendText(m.chat, textrumah, m)
                //rumah
                if (args[1] === '1') {
                    rumah = 20000
                    nama_rumah = '21/24'
                } else if (args[1] === '2') {
                    rumah = 30000
                    nama_rumah = '45'
                } else if (args[1] === '3') {
                    rumah = 50000
                    nama_rumah = '54'
                } else if (args[1] === '4') {
                    rumah = 70000
                    nama_rumah = '120'
                } else return hisoka.sendText(m.chat, textrumah, m)

                let harga = lokasi + rumah
                console.log(lokasi, rumah, harga)
                if (harga > user.money) return hisoka.sendText(m.chat, `Miko Kamu tidak mencukupi. kamu memerlukan ${harga} MIKO`)
                user.money -= harga
                user.rumah = true
                user.lahan = true
                user.jenis_lahan = args[0]
                user.jenis_rumah = args[1]
                user.nama_lahan = nama_lokasi
                user.nama_rumah = nama_rumah
                hisoka.sendText(m.chat, `Sukses membeli lahan di ${nama_lokasi} dan rumah tipe ${nama_rumah} seharga ${harga}.`)
            }
                break
            case 'kamar': {
                let user = global.db.data.users[m.sender]
                let kamar = (args[0] || '').toLowerCase()
                let jenis_kmr = (args[1] || '').toLowerCase()
                let txtkamar = `
Kamu sekarang memiliki ${user.kasur} dengan jenis ${user.nama_kamar}. Jika ingin perencanaan mempunyai anak, maka belilah 2 kasur.
Kami juga menyediakan jenis jenis kamar yaitu sebagai berikut:
1. Kasur Busa
Kasur dengan bahan busa. Jika anda belum pernah membeli kasur, maka kasur ini akan menjadi default anda
Kasur ini seharga 2000 MIKO
2. Kasur Spring Bed
Kasur dengan bahan busa yang dilapisi per. Menaikan tingkat kemesraan bersama pasangan.
Kasur ini seharga 5000 MIKO
3. Kasur Latex
Kasur dengan bahan karet alami. Menaikan tingkat kenyamanan bekerja anda
Kasur ini seharga 7000 MIKO
4. Kasur Memory Foam
Kasur paling nyaman. meningkatkan kemesraan (~tidak berisik saat EKHEMM~), dan meningkatkan kenyamanan bekerja
Kasur ini seharga 12000 MIKO

Jika ingin membeli kasur baru, ketik ${prefix + command} tambah
Jika hanya ingin mengganti jenis, ketik ${prefix + command} jenis (Nomor jenis yang ingin diganti)
                `
                switch (kamar) {
                    case 'tambah': {
                        let jumlah = args[0]
                        let jenis = user.jenis_kamar
                        let jenis_rumah = user.jenis_rumah
                        if (jenis === '1') {
                            harga = 2000
                            if (harga > user.money) throw 'uang MIKO kamu tidak mencukupi'
                            switch (jenis_rumah) {
                                case '1': {
                                    hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 1 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                }
                                    break
                                case '2': {
                                    if (user.kasur == 2) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 2 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                case '3': {
                                    if (user.kasur == 3) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 3 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                case '4': {
                                    if (user.kasur == 5) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 5 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                default: return hisoka.sendText(m.chat, txtkamar, m)
                            }
                        } else if (jenis === '2') {
                            harga = 5000
                            if (harga > user.money) throw 'uang MIKO kamu tidak mencukupi'
                            switch (jenis_rumah) {
                                case '1': {
                                    hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 1 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                }
                                    break
                                case '2': {
                                    if (user.kasur == 2) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 2 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                case '3': {
                                    if (user.kasur == 3) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 3 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                case '4': {
                                    if (user.kasur == 5) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 5 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                default: return hisoka.sendText(m.chat, txtkamar, m)
                            }
                        } else if (jenis === '3') {
                            harga = 7000
                            if (harga > user.money) throw 'uang MIKO kamu tidak mencukupi'
                            switch (jenis_rumah) {
                                case '1': {
                                    hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 1 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                }
                                    break
                                case '2': {
                                    if (user.kasur == 2) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 2 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                case '3': {
                                    if (user.kasur == 3) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 3 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                case '4': {
                                    if (user.kasur == 5) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 5 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                default: return hisoka.sendText(m.chat, txtkamar, m)
                            }
                        } else if (jenis === '4') {
                            harga = 12000
                            if (harga > user.money) throw 'uang MIKO kamu tidak mencukupi'
                            switch (jenis_rumah) {
                                case '1': {
                                    hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 1 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                }
                                    break
                                case '2': {
                                    if (user.kasur == 2) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 2 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                case '3': {
                                    if (user.kasur == 3) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 3 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                case '4': {
                                    if (user.kasur == 5) return hisoka.sendText(m.chat, `Kamu hanya bisa memiliki 5 kasur di rumah tipe ${user.nama_rumah}. Beli jenis rumah lainnya`)
                                    user.kasur += 1
                                    hisoka.sendText(m.chat, `Sukses membeli 1 kasur. kasur kamu sekarang berjumlah ${user.kasur}`)
                                }
                                    break
                                default: return hisoka.sendText(m.chat, txtkamar, m)
                            }

                        }
                    }
                        break
                    case 'jenis': {
                        let jml_kamar = user.kasur
                        switch (jenis_kmr) {
                            case '1': {
                                console.log(args[0], args[1], kamar, jenis_kmr)
                                let jenis_sebelum = user.jenis
                                if (jenis_sebelum === '1') {
                                    let kembali = jml_kamar * 2000
                                    let beli = jml_kamar * 2000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur busa dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '1'
                                    user.nama_kamar = 'Kasur Busa'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                } else if (jenis_sebelum === '2') {
                                    let kembali = jml_kamar * 5000
                                    let beli = jml_kamar * 2000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur busa dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '1'
                                    user.nama_kamar = 'Kasur Busa'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                } else if (jenis_sebelum === '3') {
                                    let kembali = jml_kamar * 7000
                                    let beli = jml_kamar * 2000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur busa dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '1'
                                    user.nama_kamar = 'Kasur Busa'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                } else if (jenis_sebelum === '4') {
                                    let kembali = jml_kamar * 12000
                                    let beli = jml_kamar * 2000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur busa dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '1'
                                    user.nama_kamar = 'Kasur Busa'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                }
                            }
                                break
                            case '2': {
                                let jenis_sebelum = user.jenis
                                if (jenis_sebelum === '1') {
                                    let kembali = jml_kamar * 2000
                                    let beli = jml_kamar * 5000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur spring bed dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '2'
                                    user.nama_kamar = 'Kasur Spring Bed'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                } else if (jenis_sebelum === '2') {
                                    let kembali = jml_kamar * 5000
                                    let beli = jml_kamar * 5000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur spring bed dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '2'
                                    user.nama_kamar = 'Kasur Spring Bed'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                } else if (jenis_sebelum === '3') {
                                    let kembali = jml_kamar * 7000
                                    let beli = jml_kamar * 5000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur spring bed dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '2'
                                    user.nama_kamar = 'Kasur Spring Bed'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                } else if (jenis_sebelum === '4') {
                                    let kembali = jml_kamar * 12000
                                    let beli = jml_kamar * 5000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur spring bed dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '2'
                                    user.nama_kamar = 'Kasur Spring Bed'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                }
                            }
                                break
                            case '3': {
                                let jenis_sebelum = user.jenis
                                if (jenis_sebelum === '1') {
                                    let kembali = jml_kamar * 2000
                                    let beli = jml_kamar * 7000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur Latex dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '3'
                                    user.nama_kamar = 'Kasur Latex'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                } else if (jenis_sebelum === '2') {
                                    let kembali = jml_kamar * 5000
                                    let beli = jml_kamar * 7000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur Latex dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '3'
                                    user.nama_kamar = 'Kasur Latex'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                } else if (jenis_sebelum === '3') {
                                    let kembali = jml_kamar * 7000
                                    let beli = jml_kamar * 7000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur Latex dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '3'
                                    user.nama_kamar = 'Kasur Latex'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                } else if (jenis_sebelum === '4') {
                                    let kembali = jml_kamar * 12000
                                    let beli = jml_kamar * 7000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur Latex dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '3'
                                    user.nama_kamar = 'Kasur Latex'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                }
                            }
                                break
                            case '4': {
                                let jenis_sebelum = user.jenis
                                if (jenis_sebelum === '1') {
                                    let kembali = jml_kamar * 2000
                                    let beli = jml_kamar * 12000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur Memory Foam dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '4'
                                    user.nama_kamar = 'Kasur Memory Foam'
                                } else if (jenis_sebelum === '2') {
                                    let kembali = jml_kamar * 5000
                                    let beli = jml_kamar * 12000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur Memory Foam dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '4'
                                    user.nama_kamar = 'Kasur Memory Foam'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                } else if (jenis_sebelum === '3') {
                                    let kembali = jml_kamar * 7000
                                    let beli = jml_kamar * 12000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur Memory Foam dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '4'
                                    user.nama_kamar = 'Kasur Memory Foam'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                } else if (jenis_sebelum === '4') {
                                    let kembali = jml_kamar * 12000
                                    let beli = jml_kamar * 12000
                                    if (beli > user.money) throw `Kamu tidak memiliki MIKO yang cukup`
                                    user.money += kembali
                                    user.money -= beli
                                    let txt_jenis = `Kamu menjual semua kamarmu, mendapatkan ${kembali} MIKO untuk membeli kamar dengan jenis kasur Memory Foam dan mengeluarkan biaya seharga ${beli} MIKO`
                                    user.jenis_kamar = '4'
                                    user.nama_kamar = 'Kasur Memory Foam'
                                    hisoka.sendText(m.chat, txt_jenis, m)
                                }
                            }
                                break
                            default: return hisoka.sendText(m.chat, txtkamar, m)
                        }
                    }
                        break
                    default: return hisoka.sendText(m.chat, txtkamar, m)
                }
            }
                break

            case 'family100': {
                if ('family100' + m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100' + m.chat] = {
                    id: 'family100' + m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
                break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
                if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                break
            case 'tod': {
                let button = [
                    { buttonId: `todtruth`, buttonText: { displayText: 'Truth' }, type: 1 },
                    { buttonId: `toddare`, buttonText: { displayText: 'Dare' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, button, `Pilih Tipe ToD`, hisoka.user.name, m)
            }
                break
            case 'todtruth': {
                // return m.reply('lagi error mohon maaf')
                let res = await fetchJson(`https://api.zahwazein.xyz/entertainment/truth?apikey=keymikuzenz21`)
                hisoka.sendText(m.chat, res.result, m)
            }
                break
            case 'toddare': {
                // return m.reply('lagi error mohon maaf')
                let res = await fetchJson('https://api.zahwazein.xyz/entertainment/dare?apikey=keymikuzenz21')
                hisoka.sendText(m.chat, res.result, m)
            }
                break
            case 'susunkata': {
                if (susunkata.hasOwnProperty(m.chat)) throw `Sudah ada susunan kata di chat ini`
                let anu = await fetchJson('https://api.lolhuman.xyz/api/tebak/susunkata?apikey=keymikulolhuman21')
                let result = anu.result
                hisoka.sendText(m.chat, `Susun kata berikut\n${result.pertanyaan}\n\nJawab Selama 60s`, m).then(() => {
                    susunkata[m.chat] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (susunkata.hasOwnProperty(m.chat)) {
                    console.log("Jawaban: " + result.jawaban)
                    // hisoka.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: 'Susun Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${susunkata[m.chat]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    hisoka.sendText(m.chat,`Waktu Habis\nJawaban:  ${susunkata[m.chat]}`, m)
                    delete susunkata[m.chat]
                }
            }
                break
            case 'akinator': {
                if (akinatorServer.hasOwnProperty(m.chat)) throw `Masih ada sesi yang belum diselesaikan`
                let anu = await fetchJson('https://api.lolhuman.xyz/api/akinator/start?apikey=keymikulolhuman21')
                let result = anu.result
                hisoka.sendButtonText(m.chat, [{ buttonId: 'akinatoranswer ya', buttonText: { displayText: 'Ya' }, type: 1 }, { buttonId: 'akinatoranswer tidak', buttonText: { displayText: 'Tidak' }, type: 1 }], `Akinator\n${result.question}\nProgress : ${result.progression}\nStep : ${result.step}`, m).then(() => {
                    akinatorServer[m.chat] = {
                        server: result.server,
                        frontaddr: result.frontaddr,
                        session: result.session,
                        signature: result.signature,
                        step: result.step,
                    }
                })
            }
                break;
            case 'akinatoranswer': {
                if (akinatorServer.hasOwnProperty(m.chat) /*&& isCmd*/) {
                    // kuis = true
                    // let txt = `Ada balasan dari menfess kamu dari @${menfess[m.chat].target.split('@')[0]}\n\n *${budy}* \n\nnote: _balas lagi secara manual_`
                    // //let menst = [orang, jodoh]
                    // let menst = [menfess[m.chat].target,menfess[m.chat].asal]
                    // if (budy.toLowerCase()) {
                    //     hisoka.sendText(`${menfess[m.chat].asal}`,txt,m,{mentions: menst})
                    //     delete menfess[m.chat]
                    // } else return
                    switch (args[0]) {
                        case 'ya': {
                            let anu = await fetchJson(`https://api.lolhuman.xyz/api/akinator/answer?apikey=keymikulolhuman21&server=${akinatorServer.server}&frontaddr=${akinatorServer.frontaddr}&session=${akinatorServer.session}&signature=${akinatorServer.signature}&step=${akinatorServer.step}&answer=${args[0]}`)

                        }
                            break
                        case 'tidak': {

                        }
                            break
                        default: return; break;
                    }
                }

            }
                break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong\n7.kimia\n8.bendera\n9.CharAnime`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.chat)) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                        tebaklagu[m.chat] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.chat)) {
                        console.log("Jawaban: " + result.jawaban)
                        // hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.chat]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        hisoka.sendText(m.chat,`Waktu Habis\nJawaban:  ${tebaklagu[m.chat]}`,m)
                        delete tebaklagu[m.chat]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.chat)) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                        tebakgambar[m.chat] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.chat)) {
                        console.log("Jawaban: " + result.jawaban)
                        // hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.chat]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        hisoka.sendText(m.chat,`Waktu Habis\nJawaban:  ${tebakgambar[m.chat]}`,m)
                        delete tebakgambar[m.chat]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakkimia.hasOwnProperty(m.chat)) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    // return m.reply('lagi error maaf')
                    let anu = await fetchJson('https://api.zahwazein.xyz/entertainment/tebakbendera?apikey=keymikuzenz21')
                    let res = anu.result
                    hisoka.sendImage(m.chat, res.img, `Silahkan Tebak Bendera Di Atas Ini\nClue : ${res.flag}\n\nWaktu : 60s`, m).then(() => {
                        tebakkimia[m.chat] = res.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.chat)) {
                        console.log("Jawaban: " + res.name)
                        // hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkimia[m.chat]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        hisoka.sendText(m.chat,`Waktu Habis\nJawaban:  ${tebakkimia[m.chat]}`,m)
                        delete tebakkimia[m.chat]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.chat)) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkata[m.chat] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.chat)) {
                        console.log("Jawaban: " + result.jawaban)
                        // hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.chat]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        hisoka.sendText(m.chat,`Waktu Habis\nJawaban:  ${tebakkata[m.chat]}`,m)
                        delete tebakkata[m.chat]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.chat)) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkalimat[m.chat] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.chat)) {
                        console.log("Jawaban: " + result.jawaban)
                        // hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.chat]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        hisoka.sendText(m.chat,`Waktu Habis\nJawaban:  ${tebakkalimat[m.chat]}`,m)
                        delete tebakkalimat[m.chat]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.chat)) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaklirik[m.chat] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.chat)) {
                        console.log("Jawaban: " + result.jawaban)
                        // hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.chat]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        hisoka.sendText(m.chat,`Waktu Habis\nJawaban:  ${tebaklirik[m.chat]}`,m)
                        delete tebaklirik[m.chat]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.chat)) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                        caklontong[m.chat] = result.jawaban.toLowerCase()
                        caklontong_desk[m.chat] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.chat)) {
                        console.log("Jawaban: " + result.jawaban)
                        // hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.chat]}\nDeskripsi : ${caklontong_desk[m.chat]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        hisoka.sendText(m.chat,`Waktu Habis\nJawaban:  ${caklontong[m.chat]}\nDeskripsi : ${caklontong_desk[m.chat]}`,m)
                        delete caklontong[m.chat]
                        delete caklontong_desk[m.chat]
                    }
                } else if (args[0] === 'kimia') {
                    let anu = await fetchJson('https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=keymikulolhuman21')
                    let res = anu.result
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n*${res.lambang}* Adalah unsur kimia...\nWaktu : 60s`, m).then(() => {
                        tebakkimia[m.chat] = res.nama.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.chat)) {
                        console.log("Jawaban: " + res.nama)
                        // hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kimia', buttonText: { displayText: 'Tebak Kimia' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkimia[m.chat]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        hisoka.sendText(m.chat,`Waktu Habis\nJawaban:  ${tebakkimia[m.chat]}`,m)
                        delete tebakkimia[m.chat]
                    }
                } else if (args[0] === 'charanime') {
                    let anu = await fetchJson('https://api.jikan.moe/v4/random/characters')
                    let res = anu.data
                    hisoka.sendImage(m.chat, res.images.jpg.image_url || res.images.webp.image_url, `Silahkan tebak siapa kah dia? \nClue : \n ${res.about}`, m).then(() => {
                        tebakcharanime[m.chat] = res.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakcharanime.hasOwnProperty(m.chat)) {
                        console.log("Jawaban: " + res.name)
                        // hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak charanime', buttonText: { displayText: 'Tebak Char Anime' }, type: 1 }], `Waktu Habis\n Jawaban: ${tebakcharanime[m.chat]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                        hisoka.sendText(m.chat,`Waktu Habis\nJawaban:  ${tebakcharanime[m.chat]}`,m)
                        delete tebakcharanime[m.chat]
                    }


                    /*hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.chat] = result.jawaban.toLowerCase()*/
                }
            }
                break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.chat)) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.chat] = result.jawaban

                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.chat)) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                    delete kuismath[m.chat]
                }
                /* if (kuismath.hasOwnProperty(m.chat) && isCmd) {
            kuis = true
            jawaban = kuismath[m.chat]
            if (budy.toLowerCase().replace(/[^\w\s\-]+/, '') == jawaban) {
                let exp = Math.floor(Math.random() * (10 - 1) + 1)
                let money = Math.floor(Math.random() * (100 - 1) + 1)
                let user = db.data.users[m.sender]
                user.exp += exp
                user.money += money
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\nKamu mendapat ${money} MIKO dan ${exp} EXP\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.chat]
            } else return
        } */
            }
                break
            case 'jodohku': {
                if (!m.isGroup) throw mess.group
                let member = participants.map(u => u.id)
                let me = m.sender
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let ments = [me, jodoh]
                let buttons = [
                    { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                ]
                // await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, { mentions: ments })
                await hisoka.sendText(m.chat, jawab, m, {mentions: ments})
            }
                break
            case 'jadian': {
                if (!m.isGroup) throw mess.group
                let member = participants.map(u => u.id)
                let orang = member[Math.floor(Math.random() * member.length)]
                let jodoh = member[Math.floor(Math.random() * member.length)]
                let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                let menst = [orang, jodoh]
                let buttons = [
                    { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                ]
                // await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, { mentions: menst })
                await hisoka.sendText(m.chat, jawab, m, {mentions: menst})
            }
                break
            case 'apakah': {
                if (!text) throw `Example : ${prefix + command} Saya Bilek`
                apakah = text
                const apakahh = ["Ya", "Tidak", "Ga tau", "ga mungkin", "bisa jadi", "mungkin", "Yo Ndak Tau Kok Tanya Saia"]
                const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
                hisoka.sendText(m.chat, `Pertanyaan : ${apakah}\n\nJawaban : *${kah}*`, m)
            }
                break
            case 'siapakah': {
                if (!m.isGroup) throw mess.group
                if (!text) throw `Example : ${prefix + command} Babu Saya`
                let member = participants.map(u => u.id)
                let orang = member[Math.floor(Math.random() * member.length)]
                siapakah = text
                let siapa = `Pertanyaan : ${siapakah}\n\nJawaban : @${orang.split('@')[0]}`
                let menst = [orang]
                await hisoka.sendText(m.chat, siapa, m, { mentions: menst })
            }
                break



            case 'bisakah': {
                if (!text) throw `Example : ${prefix + command} Saia dapet jodoh`
                bisakah = text
                const bisakahh = ["Bisa", "Tidak Bisa", "Ga tau", "mungkin", "Yo Gak Tau Kok Tanya Saia"]
                const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)]
                hisoka.sendText(m.chat, `Pertanyaan : ${bisakah}\n\nJawaban : *${keh}*`, m)
            }
                break
            case 'kapankah': {
                if (!text) throw `Example : ${prefix + command} Saia beraq`
                kapankah = text
                const kapankahh = ["1 Minggu lagi", "1 Bulan lagi", "1 Tahun lagi", "100 tahun lagi", "gatau", "2030", "1 Jam lagi", "1 Menit lagi"]
                const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
                hisoka.sendText(m.chat, `Pertanyaan : ${kapankah}\n\nJawaban : *${koh}*`, m)
            }
                break
            case 'rate': {
                ratee = ["100%", "95%", "90%", "85%", "80%", "75%", "70%", "65%", "60%", "55%", "50%", "45%", "40%", "35%", "30%", "25%", "20%", "15%", "10%", "5%"]
                const te = ratee[Math.floor(Math.random() * ratee.length)]
                hisoka.sendText(m.chat, `Rate dari saya : *${te}*`, m)
            }
                break
            case 'hobby': case 'hobi': case 'hobbi': case 'hoby': {
                if (!text) throw `Example : ${prefix + command} Nandog`
                hobby = text
                hob = ["ngeue sapi", "ngeue kambing", "Memasak", "Membantu Atok", "jilatin gambar anime", "cium layar hp", "nonton hentai", "Mabar", "Nobar", "Sosmed an", "Membantu Orang lain", "Nonton Anime", "Nonton Drakor", "Naik Motor", "Nyanyi", "Menari", "Bertumbuk", "Menggambar", "Foto fotoan Ga jelas", "Maen Game", "Berbicara Sendiri"]
                const by = hob[Math.floor(Math.random() * hob.length)]
                hisoka.sendText(m.chat, `Pertanyaan : ${hobby}\n\nJawaban : *${by}*`, m)
            }
                break
            case 'watak': {
                if (!text) throw `Example : ${prefix + command} Nandog`
                watak = text
                wa = ["penyayang", "pemurah", "Pemarah", "Pemaaf", "Penurut", "Baik", "baperan", "Baik Hati", "penyabar", "Uwu", "top deh, pokoknya", "Suka Membantu", "alay", "jamet", "furry", "satir", "hornian", "stres", "horny"]
                const tak = wa[Math.floor(Math.random() * wa.length)]
                hisoka.sendText(m.chat, `Pertanyaan : ${watak}\n\nJawaban : *${tak}*`, m)
            }
                break

            case 'cantikcek': case 'cekcantik': {
                if (!text) throw `Example : ${prefix + command} Aprilia`
                cantik = text
                const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v', '30% Semangat Kaka Merawat Dirinya><', '20% Semangat Ya Kaka👍', '40% Wahh Kaka><', '50% kaka cantik deh><', '60% Hai Cantik🐊', '70% Hai Ukhty🐊', '62% Kakak Cantik><', '74% Kakak ni cantik deh><', '83% Love You Kakak><', '97% Assalamualaikum Ukhty🐊', '100% Kakak Pake Susuk ya??:v', '29% Semangat Kakak:)', '94% Hai Cantik><', '75% Hai Kakak Cantik', '82% wihh Kakak Pasti Sering Perawatan kan??', '41% Semangat:)', '39% Lebih Semangat🐊']
                const tik = can[Math.floor(Math.random() * can.length)]
                //hisoka.sendText(m.chat, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', m)
                hisoka.sendText(m.chat, `Pertanyaan : Cantik Cek Kakak ${cantik}\n\nPersen Kecantikan : ${tik}`, m)
            }
                break
            case 'gantengcek': case 'cekganteng': {
                if (!text) throw `Example : ${prefix + command} Fidelis`
                ganteng = text
                const gan = ['10% banyak" dirawat ya bang :v', '30% Semangat Bang', '20% Semangat ya bang👍', '40% Wah Bang><', '50% Abang Ganteng Deh', '60% Hai Gamteng', '70% Hamlo Gamteng', '62% Abang Ganteng><', '74% Abang ni Ganteng banget><', '83% Ganteng banget, suka deh', '97% Assalamualaikum gamteng', '100% Pelet abang apaan ya', '29% Semangat abang:)', '94% Hai gamteng><', '75% Hai abang gamteng', '82% Abang make make up apa???', '41% Semangat:)', '39% Lebih semangat :)']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                hisoka.sendText(m.chat, `Pertanyaan : Ganteng cek abang ${ganteng}\n\nPersen Ganteng : ${teng}`, m)
            }
                break
            case 'persengay': case 'gaypersen': {
                if (!text) throw `Example : ${prefix + command} Fernando`
                gay = text
                persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*", "*9%*\n\n*OTW Tobat Gan:v*", "*17%*\n\n*Kang Coli*", "*28%*\n\n*Buset Dah Gay🤦*", "*34%*\n\n *Korban Tusbol*", "*48%*\n\n*Kang Hunter Bool:v*", "*59%*\n\n *Bahaya Ni Orang Gan*", "*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*", "*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*", "83%\n\n Yaallah Nak🤦", "97%\n\nAstagfirullah🤦", "100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃", "29%\n\n amann:v", "94%\n\n Yaallah🏃", "75%\n\nHadehh Gay🤦", "82%\n\nMending Lu Tobat Dah🏃", "41%\n\nSering Cari Bool Diperempatan", "39%\n\nSering Tusbol Bool Topan🏃"]
                const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
                hisoka.sendText(m.chat, `Persen Gay *${gay}*\n\n${kl}`, m)
            }
                break
            case 'persenlesbi': case 'lesbipersen': {
                if (!text) throw `Example : ${prefix + command} Febri`
                gay = text
                persengayy = ["*4%*\n\n*Tobat Ngelesbi Gan:v*", "*9%*\n\n*OTW Tobat Gan:v*", "*17%*\n\n*Kang Colm---*", "*28%*\n\n*Buset Dah Belok🤦*", "*34%*\n\n *Korban Gunting-guntingan*", "*48%*\n\n*Kang Hunter Meki:v*", "*59%*\n\n *Bahaya Ni Orang Gan*", "*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*", "*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*", "83%\n\n Yaallah Nak🤦", "97%\n\nAstagfirullah🤦", "100%\n\nKabur ae Gan Daripada Digunting lu🏃", "29%\n\n amann:v", "94%\n\n Yaallah🏃", "75%\n\nHadehh Belok🤦", "82%\n\nMending Lu Tobat Dah🏃", "41%\n\nSering Cari Cewe Diperempatan", "39%\n\nSering Belok ama April🏃"]
                const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
                hisoka.sendText(m.chat, `Persen Lesbi *${gay}*\n\n${kl}`, m)
            }
                break
            case 'persentolol': case 'tololpersen': {
                if (!text) throw `Example ${prefix + command} Fajrul`
                tol = text
                persentoll = []
            }
            case 'say': {
                if (!text) throw `Example : ${prefix + command} Ingin nyebur akherat`
                say = text
                hisoka.sendText(m.chat, `${say}`)
            }
                break
            case 'replybot': {
                if (!isCreator) throw mess.owner
                let pesann = text
                if (!pesann) return m.reply("*Silahkan masukan :*\npenerima\npesan kamu\n\nContoh :\nmenfess 62898989898\nbabi lu")
                m.reply("Pessan telah dikirim")
                //replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                let rep = args?.join(" ")?.trim()?.split("\n")?.[0]?.trim()
                let penerima = args?.join(" ")?.trim()?.split("\n")?.[0]?.trim().replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                //let mess = args?.join(" ")?.trim()?.split("\n")?.[1]?.trim()
                let mess = text.replace(rep, "")
                console.log(penerima, mess)
                pesan = `「 reply Bot 」\n\n${mess}`
                hisoka.sendText(penerima, pesan, m)
            }
                break
            case 'replybotgc': {
                if (!isCreator) throw mess.owner
                let pesann = text
                if (!pesann) return m.reply("*Silahkan masukan :*\npenerima\npesan kamu\n\nContoh :\nmenfess 62898989898\nbabi lu")
                m.reply("Pessan telah dikirim")
                let rep = args?.join(" ")?.trim()?.split("\n")?.[0]?.trim()
                let penerima = args?.join(" ")?.trim()?.split("\n")?.[0]?.trim()
                //let mess = args?.join(" ")?.trim()?.split("\n")?.[1]?.trim()
                let mess = text.replace(rep, "")
                console.log(penerima, mess)
                pesan = `「 reply Bot 」\n\n${mess}`
                hisoka.sendText(penerima, pesan, m)
            }
                break
            case 'testreply': {
                if (!isCreator) throw mess.owner
                let pesann = text
                if (!pesann) return m.reply("*Silahkan masukan :*\npenerima\npesan kamu\n\nContoh :\nmenfess 62898989898\nbabi lu")
                m.reply("Pessan telah dikirim")
                let penerima = m.chat
                let mess = args?.join(" ")?.trim()?.split("\n")?.[1]?.trim()
                console.log(penerima, m.chat, mess)
                pesan = `「 reply Bot 」\n\n${mess}`
                hisoka.sendText(penerima, pesan)
            }
                break
            // hisoka.sendText(penerima,pesan).then(() => {
            //     menfess[m.chat] = m.sender
            // })
            // menfess[m.chat] = m.sender
            // let menf = menfess[m.chat]
            case 'menfess': {
                let pesann = text
                if (!pesann) return m.reply("*Silahkan masukan :*\npenerima\npesan kamu\n\nContoh :\nmenfess 62898989898\nbabi lu")
                m.reply("Pessan telah dikirim")
                let penerima = args?.join(" ")?.trim()?.split("\n")?.[0]?.trim().replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                let rep = args?.join(" ")?.trim()?.split("\n")?.[0]?.trim() //untuk replace, abaikan
                let mess = text.replace(rep, "")
                let buttons = [
                    { buttonId: 'balasmenfess', buttonText: { displayText: ' Balas Menfess' }, type: 1 }
                ]
                pesan = `Ada menfess :\n\n ===================\n${mess}\n=================== \n\n_note: Jika ingin membalas, langsung ketikan saja 1 bubble. jika tidak, abaikan saja_`

                let ch = m.chat
                console.log(ch)
                menfess[penerima] = {
                    target: penerima,
                    asal: m.chat
                }
                hisoka.sendText(penerima, pesan).then(() => {
                    menfess[penerima] = {
                        target: penerima,
                        asal: m.chat
                    }
                })
                //let menf = menfess[penerima]
                //console.log(menf, menfess.hasOwnProperty(penerima), menfess.hasOwnProperty(m.chat))
                // await sleep(60000)
                // if (menfess.hasOwnProperty(penerima)) {
                //     console.log(menfess[m.chat])
                //     hisoka.sendText(penerima,"Kamu mengabaikan menfess")
                //     hisoka.sendText(m.chat, "Target mengabaikan pesan kamu")
                //     delete kuismath[m.chat]
                // }
                /* 
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst}) */
                /* if (kuismath.hasOwnProperty(m.chat)) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.chat] = result.jawaban

                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.chat)) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                    delete kuismath[m.chat]
                } */
                //hisoka.send5ButImg(`${penerima}@s.whatsapp.net`,pesan, hisoka.user.name, global.thumb, btn)
            }
                break
            case 'balasmenfess': {
                if (menfess.hasOwnProperty(m.chat)) throw 'biarin yang menfess dulu'

            }
                break
            case 'fitnah': case 'fakereply': {
                // let cm = m.sender
                // let who
                // if (m.isGroup) who = cm.participant = m.mentionedJid[0]
                // else who = m.chat
                // if (!who) throw 'Tag salah satu lah'
                // cm.key.fromMe = false
                // cm.message[m.mtype] = copy(m.msg)
                // let sp = '@' + who.split`@`[0]
                // let [fake, ...real] = text.split(sp)
                // hisoka.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd()/*, { contextInfo: {
                // mentionedJid: [hisoka.parseMention(real.join(sp))]
                // }}*/)
                let text1 = args?.join(" ").split("|")[1]
                let text2 = args?.join(" ").split("|")[2]
                let who = m.mentionedJid[0]
                if (!who) throw `Tag yang ingin difitnah. Example ${prefix + command} @siapa | halo |halo`
                if (!text1) throw `Masukan pesan. Example ${prefix + command} @siapa | halo |halo`
                if (!text2) throw `Masukan pesan. Example ${prefix + command} @siapa | halo | halo`
                // hisoka.sendText(m.chat, text1, {quoted: {text: text2, sender: who}})

                // hisoka.sendMessage(m.chat, { text: text1 }, { quoted: {

                // } })
                // const ContextInfo = {participant: who}
                // const ExtendedTextMessage={
                //     text: text2,
                //     previewType: 0,
                //     contextInfo: ContextInfo,
                //     inviteLinkGroupTypeV2: 0
                //   }
                // const Message ={
                //     extendedTextMessage: ExtendedTextMessage,
                //   }
                const quotedMessage = {
                    key: {
                        //id: 'inexistentId',
                        fromMe: false,
                        //remoteJid: who,
                        participant: who
                    },
                    message: { conversation: text1 },
                    // sender: who,
                    // participant: who,
                    // fromMe: false,
                    // isGroup: true,

                }
                console.log(quotedMessage, who, m.chat)
                hisoka.sendMessage(m.chat, { text: text2 }, { quoted: quotedMessage })
                // console.log(m)
                /* 
                {
      key: {
        remoteJid: '120363025409991464@g.us',
        fromMe: false,
        id: '1417D111E39FA088CA8A022D44AD9D5A',
        participant: '6283834685279@s.whatsapp.net'
      },
      messageTimestamp: 1664421000,
      pushName: 'Miku21 OWN BOT BKN BOTNYE',
      message: Message {
        extendedTextMessage: ExtendedTextMessage {
          text: '!fitnah @62877311375121 asu|asu',
          previewType: 0,
          contextInfo: [ContextInfo],
          inviteLinkGroupTypeV2: 0
        }
      },
      id: '1417D111E39FA088CA8A022D44AD9D5A',
      isBaileys: false,
      chat: '120363025409991464@g.us',
      fromMe: false,
      isGroup: true,
      sender: '6283834685279@s.whatsapp.net',
      participant: '6283834685279@s.whatsapp.net',
      mtype: 'extendedTextMessage',
      msg: ExtendedTextMessage {
        text: '!fitnah @62877311375121 asu|asu',
        previewType: 0,
        contextInfo: ContextInfo {
          mentionedJid: [Array],
          stanzaId: 'BAE59C7DE12885D9',
          participant: '6283834685418@s.whatsapp.net',
          quotedMessage: [Message]
        },
        inviteLinkGroupTypeV2: 0
      },
      body: '!fitnah @62877311375121 asu|asu',
      quoted: {
        text: 'Iyah?',
        mtype: 'conversation',
        id: 'BAE59C7DE12885D9',
        chat: '120363025409991464@g.us',
        isBaileys: true,
        sender: '6283834685418@s.whatsapp.net',
        fromMe: false,
        mentionedJid: [ '62877311375121@s.whatsapp.net' ],
        fakeObj: WebMessageInfo {
          messageStubParameters: [],
          labels: [],
          userReceipt: [],
          reactions: [],
          pollUpdates: [],
          key: [MessageKey],
          message: [Message],
          participant: '6283834685418@s.whatsapp.net'
        },
        delete: [Function (anonymous)],
        copyNForward: [Function (anonymous)],
        download: [Function (anonymous)]
      },
      mentionedJid: [ '62877311375121@s.whatsapp.net' ],
      getQuotedMessage: [AsyncFunction (anonymous)],
      getQuotedObj: [AsyncFunction (anonymous)],
      text: '!fitnah @62877311375121 asu|asu',
      reply: [Function (anonymous)],
      copy: [Function (anonymous)],
      copyNForward: [Function (anonymous)]
    } */
                // hisoka.sendText(m.chat, m.toString())
                // function reply(m,text2,quote){

                // }
            }
                break
            case 'testfake': {
                const quotedMessage = {
                    key: {
                        id: 'inexistentId',
                        remoteJid: '0@s.whatsapp.net',
                        participant: '0@s.whatsapp.net'
                    },
                    message: { conversation: 'fake' }
                }
                hisoka.sendMessage(m.chat, { text: 'hm' }, { quoted: quotedMessage })
            }
                break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                hisoka.sendMessage(m.chat, reactionMessage)
            }
                break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'setexif': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Example : ${prefix + command} packname|author`
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
                break
            case 'kick': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'add': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'promote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'demote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'block': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'unblock': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'ban': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                let alasan = ''
                if (args[1]) alasan = args?.join(" ")?.trim()?.split("\n")?.[1]?.trim()
                let user = global.db.data.users[users]
                user.banned = true
                user.bannedReason = alasan

                m.reply(`${users} telah di ban`)
                let pa7rick = await hisoka.sendContact(users, global.owner)
                //hisoka.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
                hisoka.sendMessage(users, { text: `Kamu telah dibanned dengan alasan ${alasan}, silahkan minta owner untuk dibuka` }, { quoted: pa7rick })
                /*let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${user.name} Telah Afk${x ? ': ' + text : ''}`)*/
            }
                break
            case 'unban': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                let user = global.db.data.users[users]
                user.banned = false
                m.reply(`${users} telah di unban`)
            }
                break
            case 'listban': case 'banlist': {
                capt = '*List Banned*'
                let org = []
                for (let i in global.db.data.users) {
                    if (global.db.data.users[i].banned) {
                        capt += `\n@${i.split('@')[0]}\nAlasan : ${global.db.data.users[i].bannedReason}`
                        org.push(i)
                    }
                }
                hisoka.sendText(m.chat, capt, m, { mentions: org })
            }
                break

            //report error to the owner 
            case 'report': case 'messagetowner': {
                if (!text) throw `Gunakan ini untuk report pada bug yang ada di bot ini. Example : ${prefix + command} bug waifu`
                let user = global.db.data.users[m.sender]
                user.report = text
                let org = [m.sender]
                //send message to owner
                let owner = global.owner
                let mess = `*Report*\n\n⇒ *${m.pushName} @${m.sender.split('@')[0]}*\n⇒ *${user.report}*\n⇒ *${m.chat}*`
                //private message owner
                m.reply(`Terima kasih sudah melaporkan error ini kepada saya`)
                //add the bug mess to the database
                global.db.data.bugs[m.sender] = {
                    user: m.sender,
                    message: user.report,
                    chat: m.chat
                }
                //hisoka.sendText('120363025409991464@g.us', mess, m, {mentions: org})
                hisoka.sendText('120363042654363151@g.us', mess, m, { mentions: org })
                //m.reply(`${m.pushName} Telah Report ${text ? ': ' + text : ''}`)
            }
                break

            //get all bug message
            case 'listbug': {
                let capt = '*List Bug*'
                let org = []
                for (let i in global.db.data.bugs) {
                    let bug = global.db.data.bugs[i]
                    capt += `\nFrom : @${bug.user.split('@')[0]}\n   Message : ${bug.message}\n   Chat : ${bug.chat}`
                    org.push(bug.user)
                }
                hisoka.sendText(m.chat, capt, m, { mentions: org })
            }
                break

            case 'setname':{
                if(!text) throw `Example: ${prefix + command} Miku21Margareth`
                let user = db.data.users[m.sender]
                user.name = text
                m.reply('done')
            }
            break

            //add balance
            case 'addmiko': case 'addmoney': {
                if (!isCreator) throw mess.owner
                let count = args[1] && args[1].length > 0 ? Math.min(9999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
                if (!count) throw 'masukan jumlah'
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                let user = global.db.data.users[users]
                user.money += count
                m.reply('Berhasil ditambahkan')
            }
                break
            case 'tarikmiko': case 'delmiko': {
                if (!isCreator) throw mess.owner
                let count = args[1] && args[1].length > 0 ? Math.min(9999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
                if (!count) throw 'masukan jumlah'
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                let user = global.db.data.users[users]
                user.money -= count
                m.reply('Berhasil ditarik')
            }
                break
            case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
                break
            case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
            }
                break
            case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
            }
                break

            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break
            case 'hidetag': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
                if (!text) text = 'hidetag'
                hisoka.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, { quoted: m })
            }
                break
            case 'style': case 'styletext': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let { styletext } = require('./lib/scraper')
                if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
            }
                break
            case 'vote': {
                if (!m.isGroup) throw mess.group
                if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
                if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
                m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
                vote[m.chat] = [q, [], []]
                await sleep(1000)
                upvote = vote[m.chat][1]
                devote = vote[m.chat][2]
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}upvote* - untuk up vote
*${prefix}devote* - untuk de vote
*${prefix}hapusvote* - untuk menghapus vote
`
                let buttonsVote = [
                    { buttonId: `${prefix}upvote`, buttonText: { displayText: '𝚄𝙿𝚅𝙾𝚃𝙴' }, type: 1 },
                    { buttonId: `${prefix}devote`, buttonText: { displayText: '𝙳𝙴𝚅𝙾𝚃𝙴' }, type: 1 }
                ]

                let buttonMessageVote = {
                    text: teks_vote,
                    footer: hisoka.user.name,
                    buttons: buttonsVote,
                    headerType: 1
                }
                // hisoka.sendMessage(m.chat, buttonMessageVote)
                hisoka.sendText(m.chat, teks_vote)

            }
                break
            case 'upvote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) throw 'Kamu Sudah Vote'
                vote[m.chat][1].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}upvote* - untuk up vote
*${prefix}devote* - untuk de vote
*${prefix}hapusvote* - untuk menghapus vote`
                let buttonsUpvote = [
                    { buttonId: `${prefix}upvote`, buttonText: { displayText: '𝚄𝙿𝚅𝙾𝚃𝙴' }, type: 1 },
                    { buttonId: `${prefix}devote`, buttonText: { displayText: '𝙳𝙴𝚅𝙾𝚃𝙴' }, type: 1 }
                ]

                let buttonMessageUpvote = {
                    text: teks_vote,
                    footer: hisoka.user.name,
                    buttons: buttonsUpvote,
                    headerType: 1,
                    mentions: menvote
                }
                // hisoka.sendMessage(m.chat, buttonMessageUpvote)
                hisoka.sendText(m.chat, teks_vote, {mentions: menvote})
            }
                break
            case 'devote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                isVote = vote[m.chat][1].concat(vote[m.chat][2])
                wasVote = isVote.includes(m.sender)
                if (wasVote) throw 'Kamu Sudah Vote'
                vote[m.chat][2].push(m.sender)
                menvote = vote[m.chat][1].concat(vote[m.chat][2])
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}upvote* - untuk up vote
*${prefix}devote* - untuk de vote
*${prefix}hapusvote* - untuk menghapus vote`
                let buttonsDevote = [
                    { buttonId: `${prefix}upvote`, buttonText: { displayText: '𝚄𝙿𝚅𝙾𝚃𝙴' }, type: 1 },
                    { buttonId: `${prefix}devote`, buttonText: { displayText: '𝙳𝙴𝚅𝙾𝚃𝙴' }, type: 1 }
                ]

                let buttonMessageDevote = {
                    text: teks_vote,
                    footer: hisoka.user.name,
                    buttons: buttonsDevote,
                    headerType: 1,
                    mentions: menvote
                }
                // hisoka.sendMessage(m.chat, buttonMessageDevote)
                hisoka.sendText(m.chat, teks_vote, {mentions: menvote})
            }
                break

            case 'cekvote':
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}upvote* - untuk up vote
*${prefix}devote* - untuk de vote
*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
                hisoka.sendTextWithMentions(m.chat, teks_vote, m)
                break
            case 'deletevote': case 'delvote': case 'hapusvote': {
                if (!m.isGroup) throw mess.group
                if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
                delete vote[m.chat]
                m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
            }
                break
            case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close') {
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)

                }
            }
                break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'open') {
                    await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)

                }
            }
                break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].antilink = true
                    m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                    db.data.chats[m.chat].antilink = false
                    m.reply(`Antilink Tidak Aktif !`)
                } else {
                    let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
                }
            }
                break
            /*case 'lorem': {
               let txt = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, rerum! Laboriosam dolorem blanditiis neque. Laboriosam rerum earum eius doloribus, voluptatibus facere? Minima corporis quidem aperiam sapiente. Vel aliquam necessitatibus blanditiis.'
               hisoka.sendText(m.chat,txt_jenis,m)
            }
            break*/
            case 'antibadword': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antibadword) return m.reply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].antibadword = true
                    m.reply(`Antibadword Aktif !`)
                }
                else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antibadword) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                    db.data.chats[m.chat].antibadword = false
                    m.reply(`Antibadword Tidak Aktif !`)
                }
                else {
                    let buttons = [
                        { buttonId: 'antibadword on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antibadword off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antibadword`, hisoka.user.name, m)
                }

            }
                break
            //adding list badword
            case 'addbadword': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!args[0]) return m.reply(`_*Format:*_ *${prefix}addbadword* _<kata>_\n_*Contoh:*_ *${prefix}addbadword* _kontol_`)
                db.data.chats[m.chat].badword.push(args.join(' '))
                m.reply(`_*Berhasil Menambahkan Kata*_ *${args.join(' ')}* _*Ke Daftar Badword*_`)
            }
                break
            case 'delbadword': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!args[0]) return m.reply(`_*Format:*_ *${prefix}delbadword* _<kata>_\n_*Contoh:*_ *${prefix}delbadword* _kontol_`)
                let index = db.data.chats[m.chat].badword.indexOf(args.join(' '))
                if (index === -1) return m.reply(`_*Kata*_ *${args.join(' ')}* _*Tidak Ada Dalam Daftar Badword*_`)
                db.data.chats[m.chat].badword.splice(index, 1)
                m.reply(`_*Berhasil Menghapus Kata*_ *${args.join(' ')}* _*Dari Daftar Badword*_`)
            }
                break
            case 'listbadword': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!db.data.chats[m.chat].badword) return m.reply(`_*Tidak Ada Daftar Badword*_`)
                let list = db.data.chats[m.chat].badword.map((badword) => `*${badword}*`).join('\n')
                m.reply(`_*Daftar Badword*_\n${list}`)

            }
                break
            case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].mute = true
                    m.reply(`${hisoka.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                    db.data.chats[m.chat].mute = false
                    m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
                } else {
                    let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
                }
            }
                break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!isBotAdmins) throw mess.botAdmin
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
                break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
                break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                // if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                console.log(isBaileys, fromMe, isBotAdmins)
                if (!isBaileys) {
                    if (!isBotAdmins) throw mess.botAdmin
                    if (!isAdmins) throw mess.admin
                    let key = {}
                    try {
                        key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
                        key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
                        key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
                        key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
                    } catch {
                        m.reply('cannot delete')
                    }
                    hisoka.sendMessage(m.chat, { delete: key })
                } else {
                    hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
                }

            }
                break
            case 'fwrdb': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                if (!args[0]) throw `Ketik no tujuan`
                await hisoka.sendMessage(`${args[0]}@s.whatsapp.net`, text, m)
            }
                break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: 'Source Code',
                            url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                        }
                    }, {
                        callButton: {
                            displayText: 'Number Phone Owner',
                            phoneNumber: '+62 851-6282-4043'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Status Bot',
                            id: 'ping'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Contact Owner',
                            id: 'owner'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Script',
                            id: 'sc'
                        }
                    }]
                    let txt = `「 Broadcast Bot 」\n\n${text}`
                    //check if have a pict, then broadcast with pict
                    if (m.hasMedia) {
                        hisoka.sendMessage(i, txt, hisoka.user.name, m.media, btn)
                    } else {
                        hisoka.sendImage(i, global.thumb, txt, m)
                    }
                    //hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
                break
            case 'bcmedia':
                if (!isCreator) return m.reply('Kamu siapa?')
                if (args.length < 1) return m.reply('.......')
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                let txt = `「 Broadcast Bot 」\n\n${text}`
                if (/image/.test(mime)) {
                    let mdia = await quoted.download()
                    for (let i of anu) {
                        // let status = [
                        //     {buttonId: `${prefix}statusbot`, buttonText: {displayText: 'Status'}, type: 1},
                        //     {buttonId: `${prefix}owner`, buttonText: {displayText: 'Owner'}, type: 1},
                        //     {buttonId: `${prefix}donasi`, buttonText: {displayText: 'Donasi'}, type: 1}
                        //   ]
                        // let buttonbcmedia = {
                        //     image: media,
                        //     text: `[ Izin Broadcast ]\n\n${body.slice(4)}`,
                        //     footer: hisoka.user.name,
                        //     buttons: status,
                        //     headerType: 1
                        // }
                        //hisoka.sendMessage(m.chat, { image: {url: `https://api.zahwazein.xyz/photoeditor/${command}?url=${fatGans.data.url}?v=4&apikey=keymikuzenz21`}, caption: `Photo Editor ${command}` }, { quoted: m })
                        hisoka.sendMessage(i, { image: mdia, caption: txt })
                    }
                    m.reply('Suksess broadcast')
                } else if (/video/.test(mime)) {
                    let mdia = await quoted.download()
                    for (let i of anu) {
                        hisoka.sendMessage(i, { video: mdia, mimetype: 'video/mp4', fileName: `bcmedia.mp4`, caption: txt }, { quoted: m })
                    }
                }
                else {
                    m.reply('reply media')
                }
                break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
                for (let yoi of anu) {
                    await sleep(1500)
                    let btn = [{
                        urlButton: {
                            displayText: 'Source Code',
                            url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                        }
                    }, {
                        callButton: {
                            displayText: 'Number Phone Owner',
                            phoneNumber: '+62 851-6282-4043'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Status Bot',
                            id: 'ping'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Contact Owner',
                            id: 'owner'
                        }
                    }, {
                        quickReplyButton: {
                            displayText: 'Script',
                            id: 'sc'
                        }
                    }]
                    let txt = `「 Broadcast Bot 」\n\n${text}`
                    hisoka.send5ButImg(yoi, txt, hisoka.user.name, global.thumb, btn)
                }
                m.reply('Sukses Broadcast')
            }
                break
            //set bc with hidetag

            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'q': case 'quoted': {
                if (!m.quoted) return m.reply('Reply Pesannya!!')
                let wokwol = await hisoka.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
                break
            case 'listpc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'listgc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                for (let i of anu) {
                    let metadata = await hisoka.groupMetadata(i)
                    teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
                break
            case 'listonline': case 'liston': {
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
            }
                break
            case 'sticker': case 's': case 'stiker': case 'stickergif': case 'sgif': {
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }

            }
                break
            case 'take': case 'wm': {
                if (!quoted) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
                if (!text) return reply(`Kirim perintah ${prefix + command} packname|author`)
                if (!text.includes('|')) return reply(`Kirim perintah ${prefix + command} packname|author`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
                    let media = await quoted.download()
                    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
                    await fs.unlinkSync(encmedia)
                } else {
                    reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
                }
            }
                break
            case 'ebinary': {
                if (!text) throw `Example : ${prefix + command} text`
                let { eBinary } = require('./lib/binary')
                let eb = await eBinary(text)
                m.reply(eb)
            }
                break
            case 'dbinary': {
                if (!text) throw `Example : ${prefix + command} text`
                let { dBinary } = require('./lib/binary')
                let db = await dBinary(text)
                m.reply(db)
            }
                break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
                if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                    await fs.unlinkSync(encmedia)
                }
            }
                break
            case 'emojimix2': {
                if (!text) throw `Example : ${prefix + command} 😅`
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                    await fs.unlinkSync(encmedia)
                }
            }
                break
            case 'attp': case 'attp2': case 'ttp': {
                if (!text) throw `Example : ${prefix + command} text`
                //await hisoka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${encodeURIComponent(text)}`, 'hisoka', 'morou', m, {asSticker: true})
                //hisoka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
                //    await hisoka.sendImageAsSticker(m.chat, `https://api.zahwazein.xyz/creator/${command}?text=${encodeURIComponent(text)}`, m, { packname: global.packname, author: global.auhor })
                await hisoka.sendImage(m.chat, `https://api.lolhuman.xyz/api/${command}?apikey=keymikulolhuman21&text=${encodeURIComponent(text)}`, m)

            }
                break
            case 'shortlink': case 'tinyurl': {
                if (!text) throw `Example : ${prefix + command} https://miku21750.github.io`
                m.reply(mess.wait)
                let anu = `https://api.lolhuman.xyz/api/shortlink?apikey=keymikulolhuman21&url=${text}`
                if (anu.status == false) return ('Enter a valid query')
                hisoka.sendtext(m.chat, `Tinyurl: \n\n${anu.result}`, m)
            }
                break
            case 'pacarserti': {
                if (!text) throw `Example : ${prefix + command} nama1|nama2`
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                if (atas.length > 20) return m.reply('Text 1 maksimal 20 karakter!')
                if (bawah.length > 20) return m.reply('Text 2 maksimal 20 karakter!')
                await hisoka.sendImage(m.chat, `https://api.lolhuman.xyz/api/pacarserti?apikey=keymikulolhuman21&name1=${atas}&name2=${bawah}`, m)
            }
                break
            case 'tololserti': {
                if (!text) throw `Example : ${prefix + command} nama`
                await hisoka.sendImage(m.chat, `hhttps://api.lolhuman.xyz/api/toloserti?apikey=keymikulolhuman21&name=${text}`, m)
            }
                break
            case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
                let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) throw respond
                if (!text) throw respond
                m.reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                if (atas.length > 20) return m.reply('Text 1 maksimal 20 karakter!')
                if (bawah.length > 20) return m.reply('Text 2 maksimal 20 karakter!')

                let dwnld = await quoted.download()
                let { floNime } = require('./lib/uploader')
                let fatGans = await floNime(dwnld)
                //let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.data.url}
                let smeme = `https://api.zahwazein.xyz/creator/smeme?text=${atas}&text2=${bawah}&url=${fatGans.data.url}&apikey=keymikuzenz21`
                // let smeme = `https://api.lolhuman.xyz/api/memecreator?apikey=keymikulolhuman21&text1=${atas}&text2=${bawah}&img=${fatGans.data.url}`
                /*
                    let media = await quoted.download()
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author }) */
                let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
                await fs.unlinkSync(FaTiH)
            }
                break

            case 'simih': case 'simisimi': case 'miku21': case 'miku': {
                if (!text) throw `Example : ${prefix + command} text`
                //base
                let response = await axios.post(
                    'https://api.simsimi.vn/v1/simtalk',
                    new URLSearchParams({
                        'text': encodeURIComponent(text),
                        'lc': 'id'
                    })
                );
                m.reply(response.data.message);

                // hm = await fetchJson(`https://api.simsimi.net/v2/?text=${encodeURIComponent(text)}&lc=id&cf=false`)
                // if (hm.success) {
                //     m.reply(hm.success)
                // } else {
                //     // m.reply(response)
                // }

                //alter
                //hm = await fetchJson(`https://simsimi.info/api/?lc=id&text=${text}`)
                //m.reply(hm.message)
            }
                break
            case 'mikualter': {
                if (!text) throw `Example : ${prefix + command} text`
                //base
                // hm = await fetchJson(`https://api.simsimi.net/v2/?text=${encodeURIcomponent(text)}&lc=id&cf=false`)
                // m.reply(hm.success)
                //alter
                hm = await fetchJson(`https://simsimi.info/api/?lc=id&text=${encodeURIComponent(text)}`)
                m.reply(hm.message)
            }
                break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
                break
            case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
                break
            case 'toaud': case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                hisoka.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'tomp3': {
                if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await quoted.download()
                let { toAudio } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                hisoka.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3` }, { quoted: m })
            }
                break
            case 'tovn': case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
                if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await quoted.download()
                let { toPTT } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                hisoka.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
            }
                break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
                break
            case 'kenal': {
                if (args[0] === "dimas") {
                    hisoka.sendImage(m.chat, 'https://i.ibb.co/DKS9QVk/IMG-20221004-WA0181.jpg', 'DIMASUKIN KNTL', m)
                } else if (args[0] === "luis") {
                    hisoka.sendImage(m.chat, 'https://i.ibb.co/DKS9QVk/IMG-20221004-WA0181.jpg', 'LUISEP KNTL', m)
                } else if (args[0] === "dika") {
                    hisoka.sendImage(m.chat, 'https://i.ibb.co/DKS9QVk/IMG-20221004-WA0181.jpg', 'DIKASIH KNTL', m)
                }
                //hisoka.sendImage(m.chat, 'https://i.ibb.co/DKS9QVk/IMG-20221004-WA0181.jpg','DIMASUKIN KNTL',m)
            }
                break
            case 'tourl': {
                m.reply(mess.wait)
                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
                break

            //ml
            case 'heroml': {
                let link = ''
                if (text) link = '?heroName=' + args[0]
                let anu = await fetchJson('https://api.dazelpro.com/mobile-legends/hero' + link);
                if (anu.success == false) throw `Error, tolong report dengan !report ${command} menu`
                let txt = 'LIST HERO ML'
                for (let i = 0; i < anu.hero.length; i++) {
                    let hero = anu.hero[i]
                    txt += `\n⭔ Hero Id : ${hero.hero_id}\n⭔Name : ${hero.hero_name}\n⭔Role : ${hero.hero_role}\n⭔Speciality : ${hero.hero_specially}\n___________________________________________`
                }
                await hisoka.sendText(m.chat, txt, m)
            }
                break
            case 'detailheroml': {
                if (!args[0]) throw 'Masukan ID hero ml yang tertera di command !heroml'
                let anu = await fetchJson('https://api.dazelpro.com/mobile-legends/hero/' + args[0]);
                if (anu.success == false) throw `Masukan ID hero ml yang tertera di command !heroml`
                let txt = `Detail Hero ${anu.hero[0].hero_name}`
                let hero = anu.hero[0]
                txt += `\n⭔ Hero Id : ${hero.hero_id}\n⭔Name : ${hero.hero_name}\n⭔Role : ${hero.hero_role}\n⭔Speciality : ${hero.hero_specially}\n⭔Durability : ${hero.hero_overview.hero_durability}\n⭔Offence : ${hero.hero_overview.hero_offence}\n⭔Ability : ${hero.hero_overview.hero_ability}\n⭔Difficulty : ${hero.hero_overview.hero_difficulty}\n___________________________________________`
                await hisoka.sendText(m.chat, txt, m)
            }
                break

            //ml end here
            case 'imagenobg': case 'removebg': case 'remove-bg': {
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let dwnld = await quoted.download()
                    let { floNime } = require('./lib/uploader')
                    let fatGans = await floNime(dwnld)
                    console.log(fatGans)
                    //https://api.zahwazein.xyz/convert/sticker-nobg?url=&apikey=keymikuzenz21
                    let encmedia = await hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/removebg?apikey=keymikulolhuman21&img=${fatGans.data.url}` }, caption: `Photo Editor ${command}` }, { quoted: m })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar`
                }
                // let remobg = require('remove.bg')
                // let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
                // let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
                // hmm = await './src/remobg-'+getRandom('')
                // localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
                // outputFile = await './src/hremo-'+getRandom('.png')
                // m.reply(mess.wait)
                // remobg.removeBackgroundFromImageFile({
                //   path: localFile,
                //   apiKey: apinobg,
                //   size: "regular",
                //   type: "auto",
                //   scale: "100%",
                //   outputFile 
                // }).then(async result => {
                // hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
                // await fs.unlinkSync(localFile)
                // await fs.unlinkSync(outputFile)
                // })
            }
                break
            case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From ' + text + '\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
            }
                break
            case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({ 'query': text }).then(res => {
                    let teks = `Google Search From : ${text}\n\n`
                    for (let g of res) {
                        teks += `⭔ *Title* : ${g.title}\n`
                        teks += `⭔ *Description* : ${g.snippet}\n`
                        teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                    }
                    m.reply(teks)
                })
            }
                break
            case 'gimage': {
                if (!text) throw `Example : ${prefix + command} kaori cicak`
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    let buttons = [
                        { buttonId: `gimage ${text}`, buttonText: { displayText: 'Next Image' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: { url: images },
                        caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                        // footer: hisoka.user.name,
                        // buttons: buttons,
                        // headerType: 4
                    }
                    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                    // hisoka.sendMessage()
                })
            }
                break
            case 'play': case 'ytplay': {
                //if (!isPremium) throw 'Tidak Bisa menggunakan Fitur ini, silahkan upgrade ke premium'
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[0]
                let buttons = [
                    { buttonId: `ytmp3 ${anu.url}`, buttonText: { displayText: '♫ Audio' }, type: 1 },
                    { buttonId: `ytmp4 ${anu.url}`, buttonText: { displayText: '► Video' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}

untuk download silahkan ${prefix}ytmp3 ${anu.url} untuk lagu, atau ${prefix}ytmp4 ${anu.url} untuk video`,
                    // footer: hisoka.user.name,
                    // buttons: buttons,
                    // headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'ytmp3': case 'ytaudio': {
                //if (!isPremium) throw 'Tidak Bisa menggunakan Fitur ini, silahkan upgrade ke premium'
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=keymikulolhuman21&url=${text}`)
                if (anu.status == 500) return m.reply("Masukan Link yang benar / Error, hubungi Owner")
                let media = anu.result
                // hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                hisoka.sendImage(m.chat, media.thumbnail, `⭔ Title : ${media.title}\n⭔ File Size : ${media.size}\n⭔ Url : ${isUrl(text)}`)
                hisoka.sendMessage(m.chat, { audio: { url: media.link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`}, { quoted: m })
                hisoka.sendMessage(m.chat, { document: { url: media.link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
                break
            case 'ytmp4': case 'ytvideo': {
                //if (!isPremium) throw 'Tidak Bisa menggunakan Fitur ini, silahkan upgrade ke premium'
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=keymikulolhuman21&url=${text}`)
                if (anu.status == 500) return m.reply("Masukan Link yang benar / Error, hubungi Owner")
                let media = anu.result
                hisoka.sendMessage(m.chat, { video: { url: media.link.link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.link.size}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP4\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                hisoka.sendMessage(m.chat, { document: { url: media.link.link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4` }, { quoted: m })
            }
                break
            case 'getmusic': {
                //if (!isPremium) throw 'Tidak Bisa menggunakan Fitur ini, silahkan upgrade ke premium'
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('Link :  ' + util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
                break
            case 'getvideo': {
                //if (!isPremium) throw 'Tidak Bisa menggunakan Fitur ini, silahkan upgrade ke premium'
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('Link :  ' + util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
                break
            case 'pixiv': {
                if (!text) throw `Apa yang ingin dicari`
                let word = text
                let metadata_id = groupMetadata.id
                let group = db.data.chats[m.chat]
                // if (m.isGroup && group.nsfw == false) throw 'Tidak Bisa menggunakan Fitur ini, silahkan join Gc NFSW atau private message bot'
                //for the sake of ramadhan, nsfw will be only in private chat
                if (m.isGroup) throw 'Tidak Bisa menggunakan Fitur ini di group chat, silahkan private message bot'
                // let anu = await fetchJson(`https://api.zahwazein.xyz/searching/pixiv?query=${word}&apikey=keymikuzenz21`)
                // let mess = 'PIXIV SEARCHER\n'
                // for(var i in anu.result){
                //     var key = i;
                //     var val = anu.result[i]
                //     for(var j in val){
                //         var sub_key = j
                //         var res = val[j]
                //         mess += `⭔${j}:${res}\n`
                //     }
                // }
                // let buttons =[
                //     {buttonId: `pixiv ${word}`, buttonText: {displayText: 'Next'}, type: 1}
                // ]
                // let buttonMessage = {
                //     image: {url: res.regular},
                //     caption: mess,
                //     footer: hisoka.user.name,
                //     buttons: buttons,
                //     headerType: 4
                // }
                // hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })

                let anu = axios.get(`https://api.lolicon.app/setu/v2?size=regular&r18=1&num=20&keyword=${word}`).then(({ data }) => {
                    let _data = data.data, result = []
                    if (_data.length == 0) return m.reply('error, coba query lain')
                    for (let i of _data) {
                        result.push({
                            title: i.title,
                            author: i.author,
                            url: i.urls.regular,
                            ext: i.ext,
                        })
                    }
                    let res = result[Math.floor(result.length * Math.random())]
                    let txt = `Title : ${res.title}\nAuthor : ${res.author}`
                    hisoka.sendImage(m.chat, res.url, txt, m)
                }).catch((e) => { m.reply(e) })
            }
                break
            case 'pinterest': {
                // m.reply('bug, pinterest dimatikan sementara')
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=keymikulolhuman21&query=${text}`)
                //let res = anu.result
                if (anu.status != 200) return ('Gambar tidak ditemukan, coba query yang lain')
                //result = res[Math.floor(Math.random() * res.length)]
                //hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
                hisoka.sendImage(m.chat, anu.result, `NIH`, m)
            }
                break
            case 'shinobu': case 'megumin': case 'waifu': case 'neko': {
                m.reply(mess.wait)
                axios.get(`https://api.waifu.pics/sfw/${command}`)
                    .then(({ data }) => {
                        hisoka.sendImage(m.chat, data.url, `NIH`, m)
                    })
            }
                break
            case 'character': {
                let helptxt = `/*LIST CHARACTER*/
${global.sp} akira
${global.sp} akiyama
${global.sp} ana
${global.sp} asuna
${global.sp} ayuzawa
${global.sp} brouto
${global.sp} chitanda
${global.sp} chitoge
${global.sp} deidara
${global.sp} doraemon
${global.sp} elaina
${global.sp} emilia
${global.sp} erza
${global.sp} gremory
${global.sp} hestia
${global.sp} hinata
${global.sp} inori
${global.sp} isuzu
${global.sp} itachi
${global.sp} itori
${global.sp} kaga
${global.sp} kagura
${global.sp} kakashi
${global.sp} kaori
${global.sp} kaneki
${global.sp} kosaki
${global.sp} kotori
${global.sp} kuriyama
${global.sp} kuroha
${global.sp} kurumi
${global.sp} madara
${global.sp} megumin
${global.sp} mikasa
${global.sp} miku
${global.sp} minato
${global.sp} naruto
${global.sp} natsukawa
${global.sp} nekonime
${global.sp} nishimiya
${global.sp} onepiece
${global.sp} pokemon
${global.sp} rem
${global.sp} rize
${global.sp} sagiri
${global.sp} sakura
${global.sp} sasuke
${global.sp} shina
${global.sp} shinka
${global.sp} shizuka
${global.sp} tomori
${global.sp} toukachan
${global.sp} tsunade
${global.sp} yatogami
${global.sp} yuki
`
                if (!args[0]) return m.reply(helptxt)
                // return m.reply('mohon maaf fitur sedang error')
                m.reply(mess.wait)
                let img = `https://api.zahwazein.xyz/randomanime/v2/${args[0]}?apikey=keymikuzenz21`
                try {
                    hisoka.sendImage(m.chat, img, `NIH`, m)
                } catch (e) {
                    m.reply(e)
                }
            }
                break
            // case 'patrick': case 'dadu': case 'amongus': case 'gawrgura': case 'anjing':case 'bucinstick':{
            //     m.reply(mess.wait)
            //     let img = `https://api.lolhuman.xyz/sticker/${command}apikey=keymikulolhuman21`

            //         hisoka.sendImageAsSticker(m.chat, `https://api.lolhuman.xyz/sticker/${command}apikey=keymikulolhuman21`, m,{ packname: global.packname, author: global.author })

            // }
            // break
            case 'bully': case 'cuddle': case 'cry': case 'hug': case 'awoo': case 'kiss': case 'lick': case 'pat': case 'smug': case 'bonk': case 'yeet': case 'blush': case 'smile': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp': case 'slap': case 'kill': case 'kick': case 'happy': case 'wink': case 'poke': case 'dance': case 'cringe': {
                //let user = m.mentionedJid[0]
                //if (!m.mentionedJid[0]) return user = null
                m.reply(mess.wait)
                axios.get(`https://api.waifu.pics/sfw/${command}`)
                    .then(({ data }) => {
                        //text : q ? q : '' , mentions: participants.map(a => a.id)
                        hisoka.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
                    })
            }
                break
            case 'uniform': case 'maid': case 'marin-kitagawa': case 'mori-calliope': case 'raiden-shogun': case 'oppai': case 'selfies': {
                m.reply(mess.wait)
                axios.get(`https://api.waifu.im/search/?included_tags=${command}`)

                    .then(({ data }) => {
                        console.log(command, data.images[0].url, data.images)
                        hisoka.sendImage(m.chat, data.images[0].url, `NIH`, m)
                    })
            }
                break
            case 'hutao': {
                let dir = "./src/hutao"
                let files = fs.readdirSync('./src/hutao')
                let chosenFile = files[Math.floor(Math.random() * files.length)]
                hisoka.sendImage(m.chat, './src/hutao/' + chosenFile, `nih`, m)
                console.log(chosenFile)
                m.reply('test')
            }
                break
            case 'husbu': case 'cecan': case 'cogan': case 'estetic': case 'elf': case 'loli': case 'shota': case 'kanna': case 'art': {
                m.reply(mess.wait)
                try {
                    hisoka.sendImage(m.chat, `https://api.lolhuman.xyz/api/random/${command}?apikey=keymikulolhuman21`, `NIH`, m)
                } catch (e) {
                    m.reply(e)
                }
            }
                break

            case 'cosplay':{
                // return m.reply('maaf lagi error')
                if (!isPremium) throw 'Tidak Bisa menggunakan Fitur ini, silahkan upgrade ke premium'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/randomimage/${command}?apikey=keymikuzenz21` }, caption: `NIH` }, { quoted: m })
            }
                break
            case 'meme': case 'memeindo': {
                // return m.reply('maaf lagi error')
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/randomimage/${command}?apikey=keymikuzenz21` }, caption: `NIH` }, { quoted: m })
            }
                break
            case 'darkjoke': {
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=keymikulolhuman21` }, caption: `NIH` }, { quoted: m })

            }
                break
            case 'nekopoirandom': {
                let metadata_id = groupMetadata.id
                let group = db.data.chats[m.chat]
                // if (m.isGroup && group.nsfw == false) throw 'Tidak Bisa menggunakan Fitur ini, silahkan join Gc NFSW atau private message bot'
                //for the sake of ramadhan, nsfw will be only in private chat
                if (m.isGroup) throw 'Tidak Bisa menggunakan Fitur ini di group chat, silahkan private message bot'
                //if not premium return
                if (!isPremium) throw 'Tidak Bisa menggunakan Fitur ini, silahkan upgrade ke premium'
                return m.reply('maaf lagi error')
                // let anu = await fetchJson('https://api.zahwazein.xyz/animeweb/nekopoi/latest?apikey=keymikuzenz21')
                axios.get('https://api.zahwazein.xyz/animeweb/nekopoi/latest?apikey=keymikuzenz21').then(({ data }) => {
                    let res = data.data
                    let rand = res[Math.floor(Math.random() * res.length)]
                    console.log(rand)
                    let txt = `Title : ${rand.title}\nId : ${rand.id}\n\nDesc : ${rand.description}`
                    // hisoka.sendImage(m.chat, `${rand.image}`, txt,m)
                    hisoka.sendMessage(m.chat, { image: { url: rand.image }, caption: txt }, { quoted: m })
                    //hisoka.sendMessage(m.chat, {image: {url : `https://api.zahwazein.xyz/creator/${command}?text=${text}&apikey=keymikuzenz21`}, caption: `Creator ${command}`}, {quoted:m})
                })
            }
                break
            case 'hentaivid': {
                // return m.reply('maaf lagi error')
                let metadata_id = groupMetadata.id
                let group = db.data.chats[m.chat]
                // if (m.isGroup && group.nsfw == false) throw 'Tidak Bisa menggunakan Fitur ini, silahkan join Gc NFSW atau private message bot'
                //for the sake of ramadhan, nsfw will be only in private chat
                if (m.isGroup) throw 'Tidak Bisa menggunakan Fitur ini di group chat, silahkan private message bot'
                //if not premium return
                if (!isPremium) throw 'Tidak Bisa menggunakan Fitur ini, silahkan upgrade ke premium'
                let data = await fetchJson('https://api.zahwazein.xyz/downloader/hentaivid/longer?apikey=keymikuzenz21')
                if (data.status != 'OK') throw 'Error, tolong report dengan menggunakan fitur !report'
                let res = data.result
                let txt = `Title : ${res.title}\n Category : ${res.category}\n\n${res.link}`
                await hisoka.sendMessage(m.chat, { video: { url: res.video_1 || res.video_2, caption: txt } }, { quoted: m })
            }
                break

            case 'nhentai': {
                let metadata_id = groupMetadata.id
                let group = db.data.chats[m.chat]
                // if (m.isGroup && group.nsfw == false) throw 'Tidak Bisa menggunakan Fitur ini, silahkan join Gc NFSW atau private message bot'
                //for the sake of ramadhan, nsfw will be only in private chat
                if (m.isGroup) throw 'Tidak Bisa menggunakan Fitur ini di group chat, silahkan private message bot'
                //if not premium return
                if (!isPremium) throw 'Tidak Bisa menggunakan Fitur ini, silahkan upgrade ke premium'
                if (!args[0]) throw 'Masukan text'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${args[0]}?apikey=keymikulolhuman21`)
                if (anu) {
                    return hisoka.sendMessage(m.chat, { document: { url: anu.result }, mimetype: 'application/pdf', fileName: `${text}.pdf` })
                } else {
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${args[0]}?apikey=keymikulolhuman21`)

                    let res = anu.result
                    let page = res.image
                    let leng = page.length
                    hisoka.sendText(m.chat, `Title :\n ${res.title_native}\n\nTunggu Sebentar`, m)
                    for (var i = 0; i <= leng; i++) {
                        await hisoka.sendImage(m.chat, page[i], `Page ${i}`, m)
                        // var file = fs.createWriteStream(`${i}.jpg`);
                        // var request = http.get(page[i], function(response) {
                        // response.pipe(file);

                        // // after download completed close filestream
                        // file.on("finish", () => {
                        //     file.close();
                        //     console.log("Download Completed");
                        // });
                        // });
                    }
                }
            }
                break
            case 'nsfw': {
                //get group metadata id
                let metadata_id = groupMetadata.id
                let group = db.data.chats[m.chat]
                //get group metadata id
                //if metadata.id not same as global.nsfwGroup return
                console.log(metadata_id, global.nsfwGroup, metadata_id == global.nsfwGroup, m.isGroup || metadata_id != global.nsfwGroup)

                // if (m.isGroup && group.nsfw == false) throw 'Tidak Bisa menggunakan Fitur ini, silahkan join Gc NFSW atau private message bot'
                //for the sake of ramadhan, nsfw will be only in private chat
                if (m.isGroup) throw 'Tidak Bisa menggunakan Fitur ini di group chat, silahkan private message bot'
                //if not premium return
                if (!isPremium) throw 'Tidak Bisa menggunakan Fitur ini, silahkan upgrade ke premium'
                let helptxt = `/*LIST NSFW*/
${global.sp} waifu
${global.sp} neko
${global.sp} trap
${global.sp} blowjob
${global.sp} ass
${global.sp} hentai
${global.sp} milf
${global.sp} oral
${global.sp} paizuri
${global.sp} echhi
${global.sp} ero
${global.sp} ahegao
${global.sp} bdsm
${global.sp} cuckold
${global.sp} cum
${global.sp} femdom
${global.sp} foot
${global.sp} gangbang (CLOSED, BUG)
${global.sp} glasses
${global.sp} hentaigif
${global.sp} jahy
${global.sp} maid
${global.sp} manga
${global.sp} masturbation
${global.sp} mobilewall
${global.sp} netorare
${global.sp} orgy
${global.sp} panties
${global.sp} pussy
${global.sp} tentacles
${global.sp} thighs
${global.sp} yuri
${global.sp} lolipai
${global.sp} loli
${global.sp} chiisaihentai
${global.sp} yaoi
${global.sp} hololewd
${global.sp} sideoppai
${global.sp} animearmpits
${global.sp} lewdanimegirls
${global.sp} biganimetiddies
${global.sp} feet
${global.sp} ngif
${global.sp} gasm
${global.sp} anal 
${global.sp} feetg
${global.sp} erok
${global.sp} holoero
${global.sp} erokemo
${global.sp} foxgirl (kadang bukan nsfw, maap)
${global.sp} futanari

NOTE : Premium only. Minat? chat !owner atau !buypremium
                `
                if (!text) return m.reply(helptxt)
                if (text === 'waifu' || text === 'neko' || text === 'trap' || text === 'blowjob') {
                    m.reply(mess.wait)
                    axios.get(`https://api.waifu.pics/nsfw/${text}`)
                        .then(({ data }) => {
                            hisoka.sendImage(m.chat, data.url, `NIH`, m)
                        })
                } else if (text === 'ass' || text === 'hentai' || text === 'milf' || text === 'oral' || text === 'paizuri' || text === 'ecchi' || text === 'ero') {
                    m.reply(mess.wait)
                    axios.get(`https://api.waifu.im/search/?included_tags=${text}`)
                        .then(({ data }) => {
                            hisoka.sendImage(m.chat, data.images[0].url, `NIH`, m)
                        })
                } else if (text === 'bdsm' || text === 'cuckold' || text === 'gangbang' || text === 'foot' || text === 'glasses' || text === 'jahy' || text === 'maid' || text === 'manga' || text === 'masturbation' || text === 'mobilewall' || text === 'netorare' || text === 'orgy' || text === 'panties' || text === 'pussy' || text === 'tentacles' || text === 'tighs' || text === 'yuri' || text === 'cum') {
                    // return m.reply('maaf lagi error')
                    m.reply(mess.wait)
                    //hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                    hisoka.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/api/morensfw/${text}?apikey=keymikuzenz21` }, caption: `NIH` }, { quoted: m })
                } else if (text === 'hentaigif') {
                    m.reply(mess.wait)
                    //
                    hisoka.sendImageAsSticker(m.chat, `https://api.zahwazein.xyz/api/morensfw/${text}?apikey=keymikuzenz21`, m, { packname: global.packname, author: global.author })
                } else if (text === 'ahegao' || text === 'loli' || text === 'chiisaihentai' || text === 'yaoi' || text === 'hololewd' || text === 'sideoppai' || text === 'animearmpits' || text === 'lewdanimegirls' || text === 'biganimetiddies') {
                    m.reply(mess.wait)
                    try {
                        // hisoka.sendImage(m.chat, `https://api.lolhuman.xyz/api/random/nsfw/${text}?apikey=keymikulolhuman21`, `NIH`, m)
                        let anu = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=keymikulolhuman21`)
                        hisoka.sendText(m.chat,anu.message,m);
                    } catch (e) {
                        m.reply(e)
                    }
                } else if  (text === 'femdom' || text === 'feet' || text === 'feetg' || text === 'erok' || text === 'holoero' || text === 'erokemo' || text === 'foxgirl' || text === 'futanari') {
                    m.reply(mess.wait)
                    try {
                        hisoka.sendImage(m.chat, `https://api.lolhuman.xyz/api/random2/${text}?apikey=keymikulolhuman21`, `NIH`, m)
                    } catch (e) {
                        m.reply(e)
                    }
                } else if (text === 'ngif' || text === 'gasm' || text === 'anal') {
                    m.reply(mess.wait)
                    //
                    hisoka.sendImageAsSticker(m.chat, `https://api.lolhuman.xyz/api/random2/${text}?apikey=keymikulolhuman21`, m, { packname: global.packname, author: global.author })
                } else if (text === 'lolipai') {

                    // let rawdata = fs.readFileSync('student.json');
                    // let student = JSON.parse(rawdata);
                    // console.log(student);

                    // let anu = require('./src/lolipai.json')
                    // let img = anu[Math.floor(Math.random() * anu.length)]
                    // console.log(img, anu.length)
                    // hisoka.sendImage(m.chat, img.link, `NIH`, m)


                    let dir = "./src/lolipai"
                    let files = fs.readdirSync('./src/lolipai')
                    let chosenFile = files[Math.floor(Math.random() * files.length)]
                    hisoka.sendImage(m.chat, './src/lolipai/' + chosenFile, `nih`, m)
                    console.log(chosenFile)
                    m.reply('test')
                }


            }
                break
            case 'cersex': {
                // return m.reply('maaf lagi error')
                let metadata_id = groupMetadata.id
                let group = db.data.chats[m.chat]
                // if (m.isGroup && group.nsfw == false) throw 'Tidak Bisa menggunakan Fitur ini, silahkan join Gc NFSW atau private message bot'
                //for the sake of ramadhan, nsfw will be only in private chat
                if (m.isGroup) throw 'Tidak Bisa menggunakan Fitur ini di group chat, silahkan private message bot'
                let anu = await fetchJson(`https://api.zahwazein.xyz/randomtext/cersex?apikey=keymikuzenz21`)
                let res = anu.result
                let txt = res.Cerita
                hisoka.sendText(m.chat, txt, m)
            }
                break
            case 'doujindesu': {
                let metadata_id = groupMetadata.id
                let group = db.data.chats[m.chat]
                // if (m.isGroup && group.nsfw == false) throw 'Tidak Bisa menggunakan Fitur ini, silahkan join Gc NFSW atau private message bot'
                //for the sake of ramadhan, nsfw will be only in private chat
                if (m.isGroup) throw 'Tidak Bisa menggunakan Fitur ini di group chat, silahkan private message bot'
                if (!isPremium) throw 'Tidak Bisa menggunakan Fitur ini, silahkan upgrade ke premium'
                if (!text) throw `Example: ${prefix + command} (latest|search)`
                if (args[0] === 'latest') {
                    let anu = await fetchJson(`https://api.lolhuman.xyz/api/doujindesulatest?apikey=keymikulolhuman21`)
                    let button = [{ buttonId: command, buttonText: { displayText: 'Next' }, type: 1 }]
                    let res = anu.result
                    let resultt = res[Math.floor(Math.random() * res.length)]
                    console.log(res, resultt)
                    let buttonMessage = {
                        image: { url: resultt.thumbnail },
                        caption: resultt.title + '\n\n' + resultt.link,
                        footer: hisoka.user.name,
                        buttons: button,
                        headerType: 4
                    }
                    hisoka.sendMessage(m.chat, buttonMessage, m)
                } else if (args[0] === 'search') {
                    if (!args[1]) throw `Apa yang dicari? Example ${prefix + command} search love`
                    let anu = await fetchJson(`https://api.lolhuman.xyz/api/doujindesusearch?apikey=keymikulolhuman21&query=${args[1]}`)
                    let button = [{ buttonId: command, buttonText: { displayText: 'Next' }, type: 1 }]
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let buttonMessage = {
                        image: { url: result.thumbnail },
                        caption: result.title + '\n\n' + result.link,
                        footer: hisoka.user.name,
                        buttons: button,
                        headerType: 4
                    }
                } else throw `Example: ${prefix + command} (latest|search)`
            }
                break

            case 'nsfwgroup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].nsfw) return m.reply(`Sudah Aktif Sebelumnya`)
                    db.data.chats[m.chat].nsfw = true
                    m.reply(`${hisoka.user.name} telah mengaktifkan fitur nsfw di group ini !`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].nsfw) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                    db.data.chats[m.chat].nsfw = false
                    m.reply(`${hisoka.user.name} telah menonaktifkan fitur nsfw di group ini !`)
                } else {
                    let buttons = [
                        { buttonId: 'nsfwgroup on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'nsfwgroup off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Nfsw.`, hisoka.user.name, m)
                }
            }
                break
            //give the group link
            case 'gcofficial': {

                let user = global.db.data.users[m.sender]
                let gclink = `Hi, ${user.name}\n\n Official gc link Bot Miku21 : https://chat.whatsapp.com/ExgUuloEFIj7fxa9SyzdAV \n Official gc link NSFW : https://chat.whatsapp.com/Kxp5Z9FGnHd66icmBLzWzn`
                m.reply(gclink)
            }
                break

            case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
                break
            case 'coffe': case 'kopi': {
                let buttons = [
                    { buttonId: `coffe`, buttonText: { displayText: 'Next Image' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    // footer: hisoka.user.name,
                    // buttons: buttons,
                    // headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'wallpaper': {
                return m.reply('maaf error')
                if (!text) throw 'Masukkan Query Title'
                let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `wallpaper ${text}`, buttonText: { displayText: 'Next Image' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'brainly': {
                if (!text) throw `Example ${prefix + command} apa itu nkri`
                brain.search(text, "id").then(function (data) {
                    let rand = data[Math.floor(Math.random() * data.length)]
                    let txt = ''
                    //pertanyaan
                    txt += `Judul : ${rand.question.content}\nJenis Pertanyaan : ${rand.question.education},\nKelas : ${rand.question.grade}`
                    //jawaban
                    txt += '\n---------------------------------\n'
                    // txt += ``
                    for(var i=0;i<rand.answers.length;i++){
                        txt += `${rand.answers[i].content}`
                        txt += '\n---------------------------------\n'
                    }
                    hisoka.sendText(m.chat, txt, m);
                    // console.log(rand.answers)
                    
                }).catch(console.error)
            }
                break
            case 'chatgpt':{
                if (!text) throw `Example ${prefix + command} contoh kode html`
                let txt = ''
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/openai?apikey=keymikulolhuman21&text=${text}&user=${m.sender}`)
                if(anu.status != 200) return m.reply('error, tolong hubungi owner')
                hisoka.sendText(m.chat, anu.result, m);
            }
            break
            case 'translate':{
                /* if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase())) */
                if(!m.quoted) throw `Reply text yang ingin ditranslate`
                if(!args[0]) throw ('masukan kode bahasa (id,en,fr,dll)')
                kodebahasa = args[0]
                let anu = await fetchJson(`https://api.zahwazein.xyz/information/translate/${kodebahasa}?apikey=keymikuzenz21&query=${m.quoted.text}`)
                if(anu.status == false) return m.reply('error, tolong hubungi owner')
                hisoka.sendText(m.chat, anu.result ,m);
            }
            break
            case 'kbbi' :{
                if(!text) throw `Kirim text nya, contoh : ${prefix + command} text`
                let anu = await fetchJson(`https://api.zahwazein.xyz/information/kbbi?apikey=keymikuzenz21&query=${text}`)
                if(anu.status == false) return m.reply('error, tolong hubungi owner')
                hisoka.sendText(m.chat,`Title : ${anu.result.title}\n\n${anu.result.arti}`)
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
                let { wikimedia } = require('./lib/scraper')
                let anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `wikimedia ${text}`, buttonText: { displayText: 'Next Image' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    // footer: hisoka.user.name,
                    // buttons: buttons,
                    // headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'quotesanime': case 'quoteanime': {
                let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    { buttonId: `quotesanime`, buttonText: { displayText: 'Next' }, type: 1 }
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    // footer: 'Press The Button Below',
                    // buttons: buttons,
                    // headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'pantun': case 'jawaquote': case 'faktaunik': case 'muslimquote': {
                let anu = await fetchJson(`https://api.zahwazein.xyz/randomtext/${command}?apikey=keymikuzenz21`)
                let buttons = [
                    { buttonId: command, buttonText: { displayText: 'Next' }, type: 1 }
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    // footer: 'Press The Button Below',
                    // buttons: buttons,
                    // headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'cerpen': {
                let anu = await fetchJson('https://api.lolhuman.xyz/api/cerpen?apikey=keymikulolhuman21')
                // hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m
                hisoka.sendText(m.chat, `CERPEN : \n${anu.result.title}\nkarya: ${anu.result.creator}\n${anu.result.cerpen}`)
            }
                break
            case 'nulis': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/nulis?apikey=keymikulolhuman21&text=${text}` }, caption: `Creator ${command}` }, { quoted: m })
            }
                break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater': case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                // return m.reply('maaf lagi error')
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/textpro/${command}?text=${text}&apikey=keymikuzenz21` }, caption: `Text Pro ${command}` }, { quoted: m })
            }
                break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                // return m.reply('maaf lagi error')
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/ephoto/${command}?text=${text}&apikey=keymikuzenz21` }, caption: `Ephoto ${command}` }, { quoted: m })
            }
                break
            case 'agedetect': {
                if (!quoted) throw 'Reply Image'
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let dwnld = await quoted.download()
                    let { floNime } = require('./lib/uploader')
                    let fatGans = await floNime(dwnld)
                    console.log(fatGans)
                    let anu = await fetchJson(`https://api.lolhuman.xyz/api/agedetect?apikey=keymikulolhuman21&img=${fatGans.data.url}`)
                    await m.reply(anu.result)

                }
            }
            case 'horny': case 'gay': case 'contrast': case 'pixelate': case 'sepia': case 'brighten': case 'greyscale': case 'circle': case 'blur': case 'invert': case '2x': case 'glass': case 'wasted': case 'wanted': case 'gun': case 'passed': case 'comrade': case 'jail': {
                // return m.reply('maaf lagi error')
                if (!quoted) throw 'Reply Image'
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let dwnld = await quoted.download()
                    let { floNime } = require('./lib/uploader')
                    let fatGans = await floNime(dwnld)
                    console.log(fatGans)
                    let encmedia = await hisoka.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/photoeditor/${command}?url=${fatGans.data.url}?v=4&apikey=keymikuzenz21` }, caption: `Photo Editor ${command}` }, { quoted: m })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Reply Gambar`
                }

                /* 
                
            let dwnld = await quoted.download()
            let { floNime } = require('./lib/uploader')
            let fatGans = await floNime(dwnld)
            //let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.data.url}
            let smeme = `https://api.zahwazein.xyz/creator/smeme?text=${atas}&text2=${bawah}&url=${fatGans.data.url}&apikey=keymikuzenz21` */

            }
                break
            case '1977': case 'aden': case 'brannan': case 'brooklyn': case 'clarendon': case 'gingham': case 'hudson': case 'inkwell': case 'earlybird': case 'kelvin': case 'lark': case 'lofi': case 'maven': case 'mayfair': case 'nashville': case 'perpetua': case 'reyes': case 'rise': case 'slumber': case 'stinson': case 'toaster': case 'valencia': case 'walden': case 'willow': case 'xpro2': {
                //https://api.lolhuman.xyz/api/filter/clarendon?apikey=keymikulolhuman21&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpgm.reply(mess.wait)
                if (/image/.test(mime)) {
                    let dwnld = await quoted.download()
                    let { floNime } = require('./lib/uploader')
                    let fatGans = await floNime(dwnld)
                    console.log(fatGans)
                    //https://api.lolhuman.xyz/api/creator1/trigger?apikey=keymikulolhuman21&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
                    //https://api.zahwazein.xyz/photoeditor/${command}?url=${fatGans.data.url}?v=4&apikey=keymikuzenz21
                    let encmedia = await hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/filter/${command}?apikey=keymikulolhuman21&img=${fatGans.data.url}` }, caption: `Photo Editor ${command}` }, { quoted: m })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Reply Gambar`
                }
            }
                break
            case 'imagecolor': {
                if (!args[0]) throw `Cari hexnya terlebih dahulu. contoh ${prefix + command} FF0000\n\nnote: Hex bisa dicari di google `
                if (!quoted) throw 'Reply Image'
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let dwnld = await quoted.download()
                    let { floNime } = require('./lib/uploader')
                    let fatGans = await floNime(dwnld)
                    console.log(fatGans)
                    //https://api.lolhuman.xyz/api/creator1/trigger?apikey=keymikulolhuman21&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
                    //https://api.zahwazein.xyz/photoeditor/${command}?url=${fatGans.data.url}?v=4&apikey=keymikuzenz21
                    let encmedia = await hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagecolor?apikey=keymikulolhuman21&img=${fatGans.data.url}&hex=${args[0]}` }, caption: `Photo Editor ${command}` }, { quoted: m })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Reply Gambar`
                }
            }
                break
            case 'pencil': case 'fisheye': {
                if (!quoted) throw 'Reply Image'
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let dwnld = await quoted.download()
                    let { floNime } = require('./lib/uploader')
                    let fatGans = await floNime(dwnld)
                    console.log(fatGans)
                    //https://api.lolhuman.xyz/api/creator1/trigger?apikey=keymikulolhuman21&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
                    //https://api.zahwazein.xyz/photoeditor/${command}?url=${fatGans.data.url}?v=4&apikey=keymikuzenz21
                    let encmedia = await hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/editor/${command}?apikey=keymikulolhuman21&img=${fatGans.data.url}` }, caption: `Photo Editor ${command}` }, { quoted: m })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Reply Gambar`
                }
            }
                break
            case 'deepfry': {
                if (!quoted) throw 'Reply Image'
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let dwnld = await quoted.download()
                    let { floNime } = require('./lib/uploader')
                    let fatGans = await floNime(dwnld)
                    console.log(fatGans)
                    //https://api.lolhuman.xyz/api/creator1/trigger?apikey=keymikulolhuman21&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
                    //https://api.zahwazein.xyz/photoeditor/${command}?url=${fatGans.data.url}?v=4&apikey=keymikuzenz21
                    let encmedia = await hisoka.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/${command}?apikey=keymikulolhuman21&img=${fatGans.data.url}` }, caption: `Photo Editor ${command}` }, { quoted: m })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Reply Gambar`
                }
            }
                break
            // case 'trigerred': {
            //     if(!quoted) throw 'Reply Image'
            //     m.reply(mess.wait)
            //     if (/image/.test(mime)) {
            //         let dwnld = await quoted.download()
            //         let { floNime } = require('./lib/uploader')
            //         let fatGans = await floNime(dwnld)
            //         console.log(fatGans)
            //         //https://api.lolhuman.xyz/api/creator1/trigger?apikey=keymikulolhuman21&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
            //         //https://api.zahwazein.xyz/photoeditor/${command}?url=${fatGans.data.url}?v=4&apikey=keymikuzenz21
            //         //hisoka.sendImageAsSticker(m.chat, `https://api.zahwazein.xyz/photoeditor/${command}?url=${fatGans.data.url}?v=4&apikey=keymikuzenz21`, m, { packname: global.packname, author: global.author })
            //         hisoka.sendImageAsSticker(m.chat, `https://api.lolhuman.xyz/api/editor/${command}?apikey=keymikulolhuman21&img=${fatGans.data.url}`,m, { packname: global.packname, author: global.author })
            //         await fs.unlinkSync(encmedia)
            //     }else {
            //         throw `Reply Gambar`
            //     }
            // }
            // break
            case 'trigger': {
                if (!quoted) throw 'Reply Image'
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let dwnld = await quoted.download()
                    let { floNime } = require('./lib/uploader')
                    let fatGans = await floNime(dwnld)
                    console.log(fatGans)
                    //https://api.lolhuman.xyz/api/creator1/trigger?apikey=keymikulolhuman21&img=https://i.postimg.cc/CM34YRFb/photo-2021-02-05-10-13-39.jpg
                    //https://api.zahwazein.xyz/photoeditor/${command}?url=${fatGans.data.url}?v=4&apikey=keymikuzenz21
                    //hisoka.sendImageAsSticker(m.chat, `https://api.zahwazein.xyz/photoeditor/${command}?url=${fatGans.data.url}?v=4&apikey=keymikuzenz21`, m, { packname: global.packname, author: global.author })
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, `https://api.lolhuman.xyz/api/creator1/${command}?apikey=keymikulolhuman21&img=${fatGans.data.url}`, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Reply Gambar`
                }
            }
                break
            case 'pet': {
                /* }else if(text === 'hentaigif'){
                    m.reply(mess.wait)
                    hisoka.sendImageAsSticker(m.chat, `https://api.zahwazein.xyz/api/morensfw/${text}?apikey=keymikuzenz21`, m, { packname: global.packname, author: global.author }) */
                // return m.reply('maaf lagi error')
                if (!quoted) throw 'Reply Image'
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let dwnld = await quoted.download()
                    let { floNime } = require('./lib/uploader')
                    let fatGans = await floNime(dwnld)
                    hisoka.sendImageAsSticker(m.chat, `https://api.zahwazein.xyz/photoeditor/${command}?url=${fatGans.data.url}?v=4&apikey=keymikuzenz21`, m, { packname: global.packname, author: global.author })
                } else {
                    throw `Reply Gambar`
                }

            }
                break
            case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
                break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
                break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
                break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
                break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
                break
            case 'sifatusaha': {
                if (!ext) throw `Example : ${prefix + command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
                break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
                break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
                break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
                break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
                break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
                break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
                break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix + command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_, _d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])

                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
                break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
                break
            case 'bmkg': {
                if (!text) return m.reply(`Example : ${prefix + command} type (${prefix + command} cuaca jakarta\n\nList Type : \n1. gempa\n2.cuaca (masukan nama kota)`)
                // if(args[0] === 'gempa'){
                //     let anu = await fetchJson(`https://api.zahwazein.xyz/information/bmkg/gempa?apikey=keymikuzenz21`)
                //     let res = anu.result
                //     let txt = `⭔ *Tanggal :* ${res.tanggal}\n⭔ *Jam :* ${res.jam}\n⭔ *Lokasi :* ${res.wilayah}\n⭔ *Coordinat :* ${res.coordinates}\n⭔ *Magnitude :* ${res.magnitude}\n⭔ *Kedalaman :* ${res.kedalaman}\n⭔ *Dirasakan :* ${res.dirasakan}\n⭔ *Keterangan :* ${res.potensi}`
                //     hisoka.sendImage(m.chat, anu.result.shakemap, txt, m)
                // }else if(!args[4]){
                //     let anu = await fetchJson(`https://api.zahwazein.xyz/information/bmkg/weather/${args[2]}?apikey=keymikuzenz21`)
                //     let res = anu.result
                // }else if(args[4]){
                //     let anu = await fetchJson(`https://api.zahwazein.xyz/information/bmkg/weather/${args[2]}/${args[4]}?apikey=keymikuzenz21`)
                //     let res = anu.result
                // }
                switch (args[0]) {
                    case 'gempa': {
                        let anu = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=keymikulolhuman21`)
                        if (anu.status != 200) throw ('error, mohon untuk report ke owner')
                        let res = anu.result
                        let txt = ''
                        txt += `Lokasi : ${res.lokasi}\nPotensi dirasakan : ${res.potensi}\nKoordinat : ${res.koordinat}\nKedalaman : ${res.kedalaman}\nMagnitude : ${res.magnitude}\nWaktu : ${res.waktu}`
                        await hisoka.sendImage(m.chat, res.map, txt, m)
                    }
                        break
                    case 'cuaca': {
                        if (!args[1]) return m.reply('Masukan prefix yang benar')
                        let anu = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${args[1]}?apikey=keymikulolhuman21`)
                        if (anu.status != 200) return m.reply('Tidak ditemukan. Coba ketik kota dengan benar')
                        let res = anu.result
                        let txt = ''
                        txt += `Nama kota : ${res.tempat}\nLatitude : ${res.latitude}\nLongitude : ${res.longitude}\n\nCuaca : ${res.cuaca}\nAngin : ${res.angin}\nKelembapan : ${res.kelembapan}\n Suhu : ${res.suhu}\nUdara : ${res.udara}\nPermukaan Laut : ${res.permukaan_laut}\nDeskripsi : ${res.description}`
                        hisoka.sendText(m.chat, txt, m)
                    }
                        break
                }
            }
                break
            case 'hitungwr': {
                if (!args[0] || !args[1] || !args[2]) throw `Example : ${prefix + command} (total match) (total winrate) (request winrate)`
                let anu = await fetchJson(`https://api.zahwazein.xyz/information/hitungwr?apikey=keymikuzenz21&text=${args[0]}&text2=${args[1]}&text3=${args[2]}`)
                let res = anu.result
                m.reply(res.description)
            }
                break
            case 'stalker': case 'stalk': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix + command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    hisoka.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
                    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
                    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix + command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
                break
            case 'tiktok': case 'tiktoknowm': {
                // m.reply('bug, tiktokdl dimatikan sementara')
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                //https://api.zahwazein.xyz/downloader/tiktok?apikey=keymikuzenz21&url=https://www.tiktok.com/@bestpart_lai/video/7133205394347937029?_r=1&_t=8UwAHZLVFpp&is_from_webapp=v1&item_id=7133205394347937029
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=keymikulolhuman21&url=${text}`)
                if (!anu) throw 'Cannot download link'
                if (anu.status == false) throw 'Cannot download link'
                if (!anu.result.link) throw 'Cannot download link, Silahkan coba tiktokwm, atau coba lagi'
                let txt = `Tiktokdl\n\n🔗 *Url:* ${text}`
                //await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                hisoka.sendMessage(m.chat, { video: { url: anu.result.link }, caption: txt }, { quoted: m })

                // let desc = ''
                // if(anu.description) {desc = anu.description}
                // let txt = `Tiktokdl\n\n🔗 *Url:* ${text} \n🧏 *Nickname:* ${anu.author.nickname} \n🖹 *Description:${desc}* `
                // const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
                // const url = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw
                // if (!url) throw 'Can\'t download video!'
                // hisoka.sendFileUrl(m.chat, media, url, `
                // 🔗 *Url:* ${url}
                // 🧏 *Nickname:* ${nickname}${description ? `🖹 *Description:* ${description}` : ''}
                // `.trim(), m)

                // let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                // let buttons = [
                //     {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                //     {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                // ]
                // let buttonMessage = {
                //     video: { url: anu.result.nowatermark },
                //     caption: `Download From ${text}`,
                //     footer: 'Press The Button Below',
                //     buttons: buttons,
                //     headerType: 5
                // }
                // hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'tiktokwm': case 'tiktokwatermark': {
                // m.reply('bug, tiktokdl dimatikan sementara')
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                // let anu = await fetchJson(`https://api.zahwazein.xyz/downloader/tiktok?apikey=keymikuzenz21&url=${text}`)
                // if(!anu) throw 'Cannot download link'
                // if(anu.status == false) throw 'Cannot download link'
                // if(!anu.download.wm) throw 'Cannot download link, Silahkan coba tiktoknowm, atau coba lagi'
                // let desc = ''
                // if(anu.description) {desc = anu.description}
                // let txt = `Tiktokdl\n\n🔗 *Url:* ${text} \n🧏 *Nickname:* ${anu.author.nickname} \n🖹 *Description:${desc}* `
                let txt = `Tiktokdl\n\n🔗 *Url:* ${text}`
                // //await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await hisoka.sendMessage(m.chat, { video: { url: `https://api.lolhuman.xyz/api/tiktokwm?apikey=keymikulolhuman21&url=${text}` }, caption: txt }, { quoted: m })
                // if (!text) throw 'Masukkan Query Link!'
                // m.reply(mess.wait)
                // let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                // if(!anu.result) return 'Link tidak dapat didownload, coba lagi'
                // let buttons = [
                //     {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                //     {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                // ]
                // let buttonMessage = {
                //     video: { url: anu.result.watermark },
                //     caption: `Download From ${text}`,
                //     footer: 'Press The Button Below',
                //     buttons: buttons,
                //     headerType: 5
                // }
                // hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                break
            case 'saveform': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await savefrom(text)
                let link = anu.url.toString()
                console.log(link)
                let txt = `Tiktokdl\n🔗 *Url:* ${text}\n🧏 *Judul:* ${anu.meta.title}`
            }
                break
            case 'tiktokmp3': case 'tiktokaudio': {
                return m.reply('maaf lagi error')
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    { buttonId: `tiktoknowm ${text}`, buttonText: { displayText: '► No Watermark' }, type: 1 },
                    { buttonId: `tiktokwm ${text}`, buttonText: { displayText: '► With Watermark' }, type: 1 }
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                if (!anu.result.audio) return 'Link tidak dapat didownload, coba lagi'
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg' }, { quoted: msg })
            }
                break
            case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=keymikulolhuman21&url=${text}`)
                    if (anu.status != 200) return 'Link tidak dapat didownload, coba lagi'
                    // for (let media of anu.result.media) hisoka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                    for (let media of anu.result) hisoka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
                // else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                //     let anu = await fetchJson(`https://api.zahwazein.xyz/downloader/instagram/story/v2?apikey=keymikuzenz21&url=${text}`)
                //     if(anu.status == false) return 'Link tidak dapat didownload, coba lagi'
                //     for (let media of anu.result) hisoka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                // }
            }
                break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=keymikulolhuman21&query=${text}`)
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu + '.m4a' }, { quoted: msg })
            }
                break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title + '.m4a' }, { quoted: msg })
            }
                break
            case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/twitter2?apikey=keymikulolhuman21&url=${text}`)
                //hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                let buttons = [
                    { buttonId: `twittermp3 ${text}`, buttonText: { displayText: '► Audio' }, type: 1 }
                ]
                let vid = '';
                var resolusi = 0;
                for (let i = 0; i < anu.result.link.length; i++) {
                    if (resolusi < anu.result.link[i].bitrate) {
                        resolusi = anu.result.link[i].bitrate
                        vid = anu.result.link[i].url
                    }
                }
                let buttonMessage = {
                    video: { url: anu.result.hd || anu.result.sd },
                    caption: `NIH`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, { video: { url: anu.result.hd } })
            }
                break
            case 'twittermp3': case 'twitteraudio': {
                return m.reply('maaf lagi error')
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.zahwazein.xyz/downloader/twitter?apikey=keymikuzenz21&url=${text}`)
                let buttons = [
                    { buttonId: `twitter ${text}`, buttonText: { displayText: '► Video' }, type: 1 }
                ]
                let buttonMessage = {
                    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
                break
            case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=keymikulolhuman21&url=${text}`)
                if (anu.status === "false") return 'Link tidak dapat didownload, coba lagi'
                hisoka.sendMessage(m.chat, { video: { url: anu.result[0] }, caption: text }, { quoted: m })
            }
                break
            case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
                break
            case 'umma': case 'ummadl': {
                if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
                let anu = await umma(isUrl(text)[0])
                if (anu.type == 'video') {
                    let buttons = [
                        { buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: { displayText: '♫ Audio' }, type: 1 },
                        { buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: { displayText: '► Video' }, type: 1 }
                    ]
                    let buttonMessage = {
                        image: { url: anu.author.profilePic },
                        caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
                        // footer: hisoka.user.name,
                        // buttons,
                        // headerType: 4
                    }
                    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                } else if (anu.type == 'image') {
                    anu.media.map(async (url) => {
                        hisoka.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
                    })
                }
            }
                break
            case 'ringtone': {
                if (!text) throw `Example : ${prefix + command} black rover`
                let { ringtone } = require('./lib/scraper')
                let anu = await ringtone(text)
                let result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'iqra': {
                return m.reply('maaf lagi error')
                oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
                if (!text) throw oh
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                hisoka.sendMessage(m.chat, { document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf` }, { quoted: m }).catch((err) => m.reply(oh))
            }
                break
            case 'juzamma': {
                return m.reply('maaf lagi error')
                if (args[0] === 'pdf') {
                    m.reply(mess.wait)
                    hisoka.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf' }, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf' }, { quoted: m })
                } else if (args[0] === 'docx') {
                    m.reply(mess.wait)
                    hisoka.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx' }, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx' }, { quoted: m })
                } else if (args[0] === 'pptx') {
                    m.reply(mess.wait)
                    hisoka.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx' }, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx' }, { quoted: m })
                } else if (args[0] === 'xlsx') {
                    m.reply(mess.wait)
                    hisoka.sendMessage(m.chat, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx' }, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx' }, { quoted: m })
                } else {
                    m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
                }
            }
                break
            case 'hadis': case 'hadist': {
                return m.reply('maaf lagi error')
                if (!args[0]) throw `Contoh:
            ${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
                if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
                try {
                    let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                    let { number, arab, id } = res.find(v => v.number == args[1])
                    m.reply(`No. ${number}

${arab}

${id}`)
                } catch (e) {
                    m.reply(`Hadis tidak ditemukan !`)
                }
            }
                break
            case 'alquran': {
                if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
                // 		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                // 		let txt = `*Arab* : ${res.result.data.text.arab}
                // *English* : ${res.result.data.translation.en}
                // *Indonesia* : ${res.result.data.translation.id}

                // ( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                // 		m.reply(txt)
                // m.reply
                let res = await fetchJson(`https://api.lolhuman.xyz/api/quran/${args[0]}/${args[1]}?apikey=keymikulolhuman21`)
                let txt = `*Arab* : ${res.result.ayat[0].arab}
*Latin* : ${res.result.ayat[0].latin}
*Indonesia* : ${res.result.ayat[0].indonesia}

( Q.S ${res.result.surah} : ${res.result.nomor} )`
                m.reply(txt)
                // hisoka.sendMessage(m.chat, txt, {quoted: m})
                hisoka.sendMessage(m.chat, { audio: { url: res.result.ayat[0].audio }, mimetype: 'audio/mpeg' }, { quoted: m })
            }
                break
            case 'tafsirsurah': {
                return m.reply('maaf lagi error')
                if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                m.reply(txt)
            }
                break
            case 'bible': {

                //let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                if (!text) throw `Example : ${prefix + command} john 3 16 web\nKet : (Book, Chapter:Verse - Translation)\nTranslation : Cherokee | Bbe | Kjv | web(default) | oeb-cw | webbe | oeb-us | Clementine | Almeida | rccv`
                console.log(args[0], args[1], args[2], args[3])

                if (!args[3]) args[3] = 'web'
                let res = await fetchJson(`https://bible-api.com/${args[0]}+${args[1]}:${args[2]}?translation=${args[3]}`)
                let txt = `「 *Bible*  」
            ${res.text}
            ${res.reference}
            ___________________________________________
            `
                m.reply(txt)
                //if(!text) throw `Example : ${prefix + command} TB Yohannes 3 16 \nKet : (Version, Book, Chapter Verse)\nTranslation : TB | TL`

            }
                break
            case 'alkitab': {
                if (!text) throw `Example : ${prefix + command} Yohannes 3 16 tb \nKet : (Version, Book, Chapter Verse)\nTranslation : tb | bis | net`
                if (!args[3]) args[3] = 'tb'

                // let res = await fetchJson(`https://api-alkitab.herokuapp.com/v2/passage/${args[0]}/${args[1]}/${args[2]}?ver=${args[3]}`)
                console.log(res)
                let teks = `「 *Alkitab*  」
            ${res.title} 
            ${res.verses[0].content}
            ___________________________________________
            `
                m.reply(teks)
            }
                break
            case 'biblelist': {
                let txt = `*Bible List*
GEN Genesis
EXO Exodus
LEV Leviticus
NUM Numbers
DEU Deuteronomy
JOS Joshua
JDG Judges
RUT Ruth
1SA 1 Samuel
2SA 2 Samuel
1KI 1 Kings
2KI 2 Kings
1CH 1 Chronicles
2CH 2 Chronicles
EZR Ezra
NEH Nehemiah
EST Ester
JOB Job
PSA Psalms
PRO Proverbs
ECC Ecclesiastes
SNG Song of Solomon
ISA Isaiah
JER Jeremiah
LAM Lamentations
EZK Ezekiel
DAN Daniel
HOS Hosea
JOL Joel
AMO Amos
OBA Obadiah
JON Jonah
MIC Micah
NAM Nahum
HAB Habakkuk
ZEP Zephaniah
HAG Haggai
ZEC Zechariah
MAL Malachi
TOB Tobit
JDT Judith
ESG Esther
WIS Wisdom of Solomon
SIR Sirah
BAR Baruch
LJE Jeremy Letter
S3Y 3 Holy Children Song
SUS Susanna
BEL Bel and The Dragon
1MA 1 Maccabes
2MA 2 Maccabes
1ES 1 Esdras
MAN Prayer of Manases
PS2 Psalm 151
3MA 3 Maccabes
2ES 2 Esdras
4MA 4 Maccabes
MAT Matthew
MRK Mark
LUK Luke
JHN John
ACT Acts
ROM Romans
1CO 1 Corinthians
2CO 2 Corinthians
GAL Galatians
EPH Ephesians
PHP Philippians
COL Collosians
1TH 1 Thessalonians
2TH 2 Thessalonians
1TI 1 Timothy
2TI 2 Timothy
TIT Titus
PHM Philemon
HEB Hebrews
JAS James
1PE 1 Peter
2PE 2 Peter
1JN 1 John
2JN 2 John
3JN 3 John
JUD Jude
REV Revelation
GLO Glossary

            `
                m.reply(txt)
            }
                break
            //get list of bible
            case 'alkitablist': {
                let res = await fetchJson(`https://api-alkitab.herokuapp.com/v2/passage/list`)
                //show all the list of bible
                //for let i of passage list
                console.log(res)
                let txt = `「 *Bible List*  」
            `
                for (let i of res.passage_list) {
                    txt += `${global.sp + i.book_name} | ${i.abbreviation} | ${i.total_chapter} \n`
                }
                txt += `___________________________________________
            `
                m.reply(txt)
                //if(!text) throw `Example : ${prefix + command} TB Yohannes 3 16 \nKet : (Version, Book, Chapter Verse)\nTranslation : TB | TL`
            }
                break

            case 'ayatotd': {
                let res = await fetchJson(`http://alkitab.sabda.org/scripts/vod.js`)
            }
            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                    let set
                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        m.reply(mess.wait)
                        let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                        let ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return m.reply(err)
                            let buff = fs.readFileSync(ran)
                            hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
                            fs.unlinkSync(ran)
                        })
                    } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                    m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
                break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
                break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], []) })
            }
                break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
                break
            //set custom welcome message and leave message
            case 'setwelcome': {
                if (!isBotAdmins) throw `bot belum menjadi admin`
                if (!isAdmins) throw `Hanya Admin yang bisa menggunakan command ini`
                if (!text) throw `Ketikkan pesan yang ingin di set\n Ket : Ambil nama gc dengan $labelgc dan nama user dengan $user\n\nExample : ${prefix + command} Halo $user, `
                //if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                console.log(text)
                global.db.data.chats[m.chat].welcome = text
                m.reply('berhasil di set')
            }
                break

            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
                m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
                break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
                break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
                let teks = '「 LIST DATABASE 」\n\n'
                for (let i of seplit) {
                    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                m.reply(teks)
            }
                break
            case 'delmsg': case 'deletemsg': {
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
                delete msgs[text.toLowerCase()]
                m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
                break
            case 'anonymous': case 'mutualan': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                /*this.anonymous = this.anonymous ? this.anonymous : {}
                let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)*/
                let user = global.db.data.users
                //Object.keys(fishData)[Math.floor(Math.random() * Object.keys(fishData).length)]
                let user_rand = Object.keys(user)[Math.floor(Math.random() * Object.keys(user).length)]
                let txt = `Partner found.\n\nhttps://wa.me/${user_rand.split('@')[0]}\n\nKlik button Next untuk mencari button lainnya`
                let button = [
                    { buttonId: 'anonymous', buttonText: { displayText: 'Next' }, type: 1 }
                ]
                // hisoka.sendButtonText(m.chat, button, txt, m)
                hisoka.sendText(m.chat, txt, m)
            }
                break
            /*case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }*/
            case 'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
                break
            case 'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
                break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
                break
            // case 'speedtest': {
            //     m.reply('Testing Speed...')
            //     let cp = require('child_process')
            //     let { promisify } = require('util')
            //     let exec = promisify(cp.exec).bind(cp)
            //     let o
            //     try {
            //         o = await exec('python speed.py')
            //     } catch (e) {
            //         o = e
            //     } finally {
            //         let { stdout, stderr } = o
            //         if (stdout.trim()) m.reply(stdout)
            //         if (stderr.trim()) m.reply(stderr)
            //     }
            // }
            //     break
            case 'speedtest':{
                m.reply('testing speed...')
                let speedtest = new FastSpeedTest({
                    token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
                    timeout: 10000,
                    unit: FastSpeedTest.UNITS.Mbps
                })
                speedtest.getSpeed().then(s=>{
                    m.reply(`Speed: ${s} Mbps`)
                }).catch(e =>{
                    m.reply(e.message);
                })
            }   
            break
            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
                break
            case 'playstore': {
                if (!text) throw `Example : ${prefix + command} clash of clans`
                let res = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=keymikulolhuman21&query=${text}`)
                if(anu.status != 200) return m.reply('error, mohon lapor owner')
                let teks = `⭔ Playstore Search From : ${text}\n`
                for (let i of res.result) {
                    teks += `\n⭔ Name : ${i.title}\n`
                    teks += `⭔ Developer : ${i.developer}\n`
                    teks += `⭔ Summary : ${i.summary}\n`
                    teks += `──────────────────────\n`
                }
                m.reply(teks)
            }
                break
            case 'gsmarena': {
                if (!text) throw `Example : ${prefix + command} samsung`
                let res = await fetchJson(`https://api.zahwazein.xyz/webzone/gsmarena?query=${text}&apikey=keymikuzenz21`)
                let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
                let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
                hisoka.sendImage(m.chat, thumb, capt, m)
            }
                break
            case 'jadwalbioskop': {
                if (!text) throw `Example: ${prefix + command} jakarta`
                let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
                let capt = `Jadwal Bioskop From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Title: ${i.title}\n`
                    capt += `⭔ Thumbnail: ${i.thumb}\n`
                    capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
                }
                hisoka.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
                break
            case 'nowplayingbioskop': {
                let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
                let capt = `Now Playing Bioskop\n\n`
                for (let i of res.result) {
                    capt += `⭔ Title: ${i.title}\n`
                    capt += `⭔ Url: ${i.url}\n`
                    capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
                }
                hisoka.sendImage(m.chat, res.result[0].img, capt, m)
            }
                break
            case 'aminio': {
                if (!text) throw `Example: ${prefix + command} free fire`
                let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
                let capt = `Amino Search From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Community: ${i.community}\n`
                    capt += `⭔ Community Link: ${i.community_link}\n`
                    capt += `⭔ Thumbnail: ${i.community_thumb}\n`
                    capt += `⭔ Description: ${i.community_desc}\n`
                    capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
                }
                hisoka.sendImage(m.chat, 'https://' + res.result[0].community_thumb, capt, m)
            }
                break
            case 'wattpad': {
                if (!text) throw `Example : ${prefix + command} love`
                let res = await fetchJson(`https://api.zahwazein.xyz/webzone/wattpad?apikery=keymikuzenz21&query=${text}`)
                let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
                let capt = `Wattpad From ${text}\n\n`
                capt += `⭔ Judul: ${judul}\n`
                capt += `⭔ Dibaca: ${dibaca}\n`
                capt += `⭔ Divote: ${divote}\n`
                capt += `⭔ Bab: ${bab}\n`
                capt += `⭔ Waktu: ${waktu}\n`
                capt += `⭔ Url: ${url}\n`
                capt += `⭔ Deskripsi: ${description}`
                hisoka.sendImage(m.chat, thumb, capt, m)
            }
                break
            case 'webtoons': {
                if (!text) throw `Example : ${prefix + command} love`
                let res = await fetchJson(`https://api.zahwazein.xyz/webzone/webtoons?apikery=keymikuzenz21&query=${text}`)
                let capt = `Webtoons Search From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Judul: ${i.judul}\n`
                    capt += `⭔ Like: ${i.like}\n`
                    capt += `⭔ Creator: ${i.creator}\n`
                    capt += `⭔ Genre: ${i.genre}\n`
                    capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
                }
                m.reply(capt)
            }
                break
            case 'drakor': {
                if (!text) throw `Example : ${prefix + command} love`
                let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
                let capt = `Drakor Search From : ${text}\n\n`
                for (let i of res.result) {
                    capt += `⭔ Judul: ${i.judul}\n`
                    capt += `⭔ Years: ${i.years}\n`
                    capt += `⭔ Genre: ${i.genre}\n`
                    capt += `⭔ Url: ${i.url}\n`
                    capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
                }
                hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
                break
            case 'setmenu': {
                if (!isCreator) throw mess.owner
                let setbot = db.data.settings[botNumber]
                if (args[0] === 'templateImage') {
                    setbot.templateImage = true
                    setbot.templateVideo = false
                    setbot.templateGif = false
                    setbot.templateMsg = false
                    m.reply(mess.success)
                } else if (args[0] === 'templateVideo') {
                    setbot.templateImage = false
                    setbot.templateVideo = true
                    setbot.templateGif = false
                    setbot.templateMsg = false
                    m.reply(mess.success)
                } else if (args[0] === 'templateGif') {
                    setbot.templateImage = false
                    setbot.templateVideo = false
                    setbot.templateGif = true
                    setbot.templateMsg = false
                    m.reply(mess.success)
                } else if (args[0] === 'templateMessage') {
                    setbot.templateImage = false
                    setbot.templateVideo = false
                    setbot.templateGif = false
                    setbot.templateMsg = true
                    m.reply(mess.success)
                } else {
                    let sections = [
                        {
                            title: "CHANGE MENU BOT",
                            rows: [
                                { title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image` },
                                { title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video` },
                                { title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif` },
                                { title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message` }
                            ]
                        },
                    ]
                    hisoka.sendListMsg(m.chat, `Please select the menu you want to change!`, hisoka.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
                break
            case 'jedor':{
                let user = global.db.data.users[m.sender]
                let who = m.mentionedJid[0]
                if (!who) throw `Tag yang ingin dijedor. Example ${prefix + command} @siapa`
                if(user.coupleUser !== '') return hisoka.sendText(m.chat, `Kamu sudah memiliki @${user.coupleUser.split`@`[0]}`,m,{mentions: [user.coupleUser]})
                let user2 = global.db.data.users[who]
                if(user2.coupleUser !== '') return hisoka.sendText(m.chat, `@${user.coupleUser.split`@`[0]} sudah memiliki @${user2.coupleUser.split`@`[0]}`,m,{mentions: [user.coupleUser,user2.coupleUser]})
                if(who == m.sender) throw 'tidak bisa jedor diri sendiri (jangan selfcest ;D )'
                this.jedoran = this.jedoran ? this.jedoran : {}
                let id = 'jedor_'+who+'_'+ new Date() * 1
                let caption = `_*JEDOR*_\n\n@${m.sender.split`@`[0]} menembak @${m.mentionedJid[0].split`@`[0]}, jawab (iya/tidak) untuk merespon`
                this.jedoran[id] = {
                    chat: await hisoka.sendText(m.chat, caption, m , {mentions: parseMention(caption)}),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                }
            }
            break
            case 'putus': {
                let user = global.db.data.users[m.sender]
                if(user.coupleUser == '') return
                let user2 = global.db.data.users[user.coupleUser]
                this.putus = this.putus ? this.putus : {}
                let id = 'putus_'+m.sender+'_'+ new Date() * 1
                let caption = `_*PUTUS*_\n\n@${m.sender.split`@`[0]} ingin berputus dengan @${user.coupleUser.split`@`[0]}, jawab (iya/tidak) untuk merespon`
                this.putus[id] = {
                    chat: await hisoka.sendText(user.coupleUser, caption, m , {mentions: parseMention(caption)}),
                    id: id,
                    p: m.sender,
                    p2: user.coupleUser,
                    status: 'wait',
                }
            }
            break
            case 'profile': {
                let user = global.db.data.users[m.sender]
                let num = m.sender
                console.log(m.mentionedJid[0])
                let st = null
                let date = null

                if (m.mentionedJid[0]) {
                    user = global.db.data.users[m.mentionedJid[0]]
                    num = m.mentionedJid[0]
                }
                try {
                    let status = await hisoka.fetchStatus(m.sender)
                    if (m.mentionedJid[0]) status = await hisoka.fetchStatus(m.mentionedJid[0])
                    if (!status) { st = ''; date = ''; }
                    else {
                        date = new Date(`${status.setAt}`)
                        st = status.status
                    }
                } catch {
                    st = ''; date = '';
                }
                let waifu = ''
                let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
                let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
                let usersmoney = sortedmoney.map(v => v[0])
                let userslevel = sortedlevel.map(v => v[0])
                if (user.waifu !== '') {
                    //https://api.jikan.moe/v4/characters/${args[0]}
                    let anu = await fetchJson(`https://api.jikan.moe/v4/characters/${user.waifu}`)
                    let res = anu.data
                    waifu = res
                }
                let couple = false
                let org = []
                if(user.coupleUser !== ''){
                    couple = true
                    org = [user.coupleUser]
                }
                try {
                    ppuser = await hisoka.profilePictureUrl(m.sender, 'image')
                    if (m.mentionedJid[0]) ppuser = await hisoka.profilePictureUrl(m.mentionedJid[0], 'image')
                } catch {
                    ppuser = 'https://mycipongkor.com/wp-content/uploads/2022/05/Foto-profil-WA-kosong-senyum-min.jpg'
                }
                profile = `┌──⭓ *Profile
│
│⭔ Nama         : ${user.name}
│⭔ Status       : 
${st}
│  Updated at    : 
${date}
│
│*BOT FEATURE*
│⭔ Level        : ${user.level}
│⭔ Exp          : ${user.exp}
│⭔ Money        : ${user.money} MIKO
│⭔ Job          : ${user.job}
│⭔ Job Level    : ${user.joblevel}`
                if(user.coupleUser !== ''){
                    profile +=`
│⭔ Pacar      : @${user.coupleUser.split`@`[0]}
                    `
                }else{
                    profile +=`
│⭔ Pacar      : Anime
                    `
                }
                if (user.waifu !== null) {
                    profile += `
│⭔ Married      : ${user.nikah}
│⭔ Married With : ${waifu.name} KODE ${user.waifu}`
                } else {
                    profile += `
│⭔ Married With : No one yet`
                }
                profile += `
│⭔ Limit        : ${user.limit}
│⭔ Premium      : ${user.premium}
│
│⭔ Top level *${userslevel.indexOf(user) + 1}* dari *${userslevel.length}*
│⭔ Top MIKO *${usersmoney.indexOf(user) + 1}* dari *${usersmoney.length}*
│
└───────⭓
                `
                if(couple){
                    hisoka.sendImage(m.chat, ppuser, profile, m,{mentions: org})
                }else{
                    hisoka.sendImage(m.chat, ppuser, profile, m)
                }

            }
                break
            case 'money': case 'koin': case 'coin': case 'miko': {
                let user = global.db.data.users[m.sender]
                if (m.mentionedJid[0]) user = global.db.data.users[m.mentionedJid[0]]
                hisoka.sendText(m.chat, `⭔ Money : ${user.money} MIKO `, m)
            }
                break
            case 'level': case 'exp': {
                let user = global.db.data.users[m.sender]
                if (m.mentionedJid[0]) user = global.db.data.users[m.mentionedJid[0]]
                hisoka.sendText(m.chat, `⭔ Level : ${user.level}\n⭔ Exp : ${user.exp}\n⭔ nextLevel : ${user.nextLevelExp}`, m)
            }
                break
            case 'job': {
                let user = global.db.data.users[m.sender]
                hisoka.sendText(m.chat, `⭔ Job saat ini : ${user.job}\n⭔ Job Level : ${user.joblevel}\n⭔ Job Exp : ${user.jobexp}`, m)
            }
                break


            case 'menu': {
                let user = global.db.data.users[m.sender]
                let anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner


┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}setwelcome [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}nsfwgroup [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│⭔ ${prefix}afk
│       
└───────⭓

┌──⭓ *Webzone Menu*
│
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
│
└───────⭓


┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│⭔ ${prefix}doujindesu (search|latest) (bug)
│
└───────⭓

┌──⭓ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}stalk [option] [query]
│
└───────⭓

┌──⭓ *Random Photo Menu*
│
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}pantun
│⭔ ${prefix}jawaquote
│⭔ ${prefix}muslimquote
│⭔ ${prefix}cerpen
│⭔ ${prefix}couple
│⭔ ${prefix}meme
│⭔ ${prefix}memeindo
│⭔ ${prefix}darkjoke
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}cosplay (agak nsfw satu ni)
│⭔ ${prefix}cecan
│⭔ ${prefix}cogan
│⭔ ${prefix}estetic
│⭔ ${prefix}elf
│⭔ ${prefix}loli
│⭔ ${prefix}shota
│⭔ ${prefix}kanna
│⭔ ${prefix}art
│⭔ ${prefix}neko
│⭔ ${prefix}uniform
│⭔ ${prefix}maid
│⭔ ${prefix}marin-kitagawa
│⭔ ${prefix}mori-calliope
│⭔ ${prefix}raiden-shogun
│⭔ ${prefix}hutao
│⭔ ${prefix}character (query)
│⭔ ${prefix}oppai
│⭔ ${prefix}selfies
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│⭔ ${prefix}bully
│⭔ ${prefix}cuddle
│⭔ ${prefix}cry
│⭔ ${prefix}hug
│⭔ ${prefix}awoo
│⭔ ${prefix}kiss
│⭔ ${prefix}lick
│⭔ ${prefix}pat
│⭔ ${prefix}smug
│⭔ ${prefix}bonk
│⭔ ${prefix}yeet
│⭔ ${prefix}blush
│⭔ ${prefix}smile
│⭔ ${prefix}wave
│⭔ ${prefix}highfive
│⭔ ${prefix}handhold
│⭔ ${prefix}nom
│⭔ ${prefix}bite
│⭔ ${prefix}glomp
│⭔ ${prefix}slap
│⭔ ${prefix}kill
│⭔ ${prefix}kick
│⭔ ${prefix}happy
│⭔ ${prefix}wink
│⭔ ${prefix}poke
│⭔ ${prefix}dance
│⭔ ${prefix}cringe
│⭔ ${prefix}nsfw (query)
│
└───────⭓

┌──⭓ *Claim Waifu Menu*
│
│⭔ ${prefix}claimwaifu
│⭔ ${prefix}unclaim
│⭔ ${prefix}waifusaya
│⭔ ${prefix}searchwaifu
│⭔ ${prefix}searchwaifuanime (bug)
│⭔ ${prefix}randomwaifu
│⭔ ${prefix}pdkt
│⭔ ${prefix}tutorclaim
│
└───────⭓

┌──⭓ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
└───────⭓

┌──⭓ *Ephoto Menu*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│
└───────⭓

┌──⭓ *Editor Photo Menu*
│
│⭔ ${prefix}horny
│⭔ ${prefix}gay
│⭔ ${prefix}contrast
│⭔ ${prefix}pixelate
│⭔ ${prefix}sepia
│⭔ ${prefix}brighten
│⭔ ${prefix}greyscale
│⭔ ${prefix}circle
│⭔ ${prefix}blur
│⭔ ${prefix}invert
│⭔ ${prefix}2x
│⭔ ${prefix}glass
│⭔ ${prefix}wasted
│⭔ ${prefix}wanted
│⭔ ${prefix}gun
│⭔ ${prefix}passed
│⭔ ${prefix}comrade
│⭔ ${prefix}jail
│⭔ ${prefix}pet
│⭔ ${prefix}pencil
│⭔ ${prefix}triggered
│⭔ ${prefix}trigger
│⭔ ${prefix}fisheye
│⭔ ${prefix}deepfry
│⭔ ${prefix}imagecolor (hexcolor) 
│⭔ ${prefix}removebg
│⭔ ${prefix}1977
│⭔ ${prefix}aden
│⭔ ${prefix}brannan
│⭔ ${prefix}brooklyn
│⭔ ${prefix}clarendon
│⭔ ${prefix}gingham
│⭔ ${prefix}hudson
│⭔ ${prefix}inkwell
│⭔ ${prefix}earlybird
│⭔ ${prefix}kelvin
│⭔ ${prefix}lark
│⭔ ${prefix}lofi
│⭔ ${prefix}maven
│⭔ ${prefix}mayfair
│⭔ ${prefix}nashville
│⭔ ${prefix}perpetua
│⭔ ${prefix}reyes
│⭔ ${prefix}rise
│⭔ ${prefix}slumber
│⭔ ${prefix}stinson
│⭔ ${prefix}toaster
│⭔ ${prefix}valencia
│⭔ ${prefix}walden
│⭔ ${prefix}willow
│⭔ ${prefix}xpro2
│
└───────⭓


┌──⭓ *Fun Menu*
│
│⭔ ${prefix}simih
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}apakah
│⭔ ${prefix}siapakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}kapankah
│⭔ ${prefix}cantikcek
│⭔ ${prefix}gantengcek
│⭔ ${prefix}persengay
│⭔ ${prefix}persenlesbi
│⭔ ${prefix}watak
│⭔ ${prefix}hobbi
│⭔ ${prefix}say
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│⭔ ${prefix}transfer
│
└───────⭓

┌──⭓ *Game Menu*
│
│⭔ ${prefix}work
│⭔ ${prefix}casino 
│⭔ ${prefix}gacha bronze|silver|gold
│⭔ ${prefix}mancing
│⭔ ${prefix}jualikan (kode)
│⭔ ${prefix}akuarium
│⭔ ${prefix}adventure
│⭔ ${prefix}shop (buy|sell) item
│⭔ ${prefix}open (crate) (jumlah)
│⭔ ${prefix}use (item) (jumlah)
│⭔ ${prefix}feed (nama hewan)
│
└───────⭓

┌──⭓ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
│
└───────⭓

┌──⭓ *Convert Menu*
│
│⭔ ${prefix}attp
│⭔ ${prefix}ttp
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}shortlink
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│⭔ ${prefix}smeme
│
└───────⭓

┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│⭔ ${prefix}report
│
└───────⭓

┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓

┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous / mutualan
│⭔ ${prefix}menfess
│
└───────⭓

┌──⭓ *Islamic Menu*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│
└───────⭓

┌──⭓ *Chatolic Menu*
│
│⭔ ${prefix}bible
│⭔ ${prefix}biblelist
│⭔ ${prefix}alkitab (indonesia version)
│⭔ ${prefix}alkitablist (indonesia version)
│
└───────⭓

┌──⭓ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────⭓

┌──⭓ *Owner Menu*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│⭔ ${prefix}setmenu [option]
│
└───────⭓`
                // let btn = [{
                //                 urlButton: {
                //                     displayText: 'Source Code',
                //                     url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                //                 }
                //             }, {
                //                 callButton: {
                //                     displayText: 'Number Phone Owner',
                //                     phoneNumber: '+62 851-6282-4043'
                //                 }
                //             }, {
                //                 quickReplyButton: {
                //                     displayText: 'Status Bot',
                //                     id: 'ping'
                //                 }
                //             }, {
                //                 quickReplyButton: {
                //                     displayText: 'Contact Owner',
                //                     id: 'owner'
                //                 }  
                //             }, {
                //                 quickReplyButton: {
                //                     displayText: 'Script',
                //                     id: 'sc'
                //                 }
                //             }]
                let setbot = db.data.settings[botNumber]
                // if (setbot.templateImage) {
                // hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                // } else if (setbot.templateGif) {
                // hisoka.send5ButGif(m.chat, anu, hisoka.user.name, global.visoka, btn)
                // } else if (setbot.templateVid) {
                // hisoka.send5ButVid(m.chat, anu, hisoka.user.name, global.visoka, btn)
                // } else if (setbot.templateMsg) {
                // hisoka.send5ButMsg(m.chat, anu, hisoka.user.name, btn)
                // }
                // hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                //hisoka.sendImage(m.chat, res.images.jpg.image_url, mess, m)
                //hisoka.sendImage(m.chat, global.thumb, anu, m)
                switch (args[0]) {
                    case 'all': {
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'group': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}setwelcome [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}nsfwgroup [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│⭔ ${prefix}afk
│       
└───────⭓
`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'webzone': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Webzone Menu*
│
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'downloader': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│⭔ ${prefix}doujindesu (search|latest)
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'search': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}stalk [option] [query]
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'random_photo': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Random Photo Menu*
│
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}pantun
│⭔ ${prefix}jawaquote
│⭔ ${prefix}muslimquote
│⭔ ${prefix}cerpen
│⭔ ${prefix}couple
│⭔ ${prefix}meme
│⭔ ${prefix}memeindo
│⭔ ${prefix}darkjoke
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│⭔ ${prefix}cosplay (agak nsfw satu ni)
│⭔ ${prefix}cecan
│⭔ ${prefix}cogan
│⭔ ${prefix}estetic
│⭔ ${prefix}elf
│⭔ ${prefix}loli
│⭔ ${prefix}shota
│⭔ ${prefix}kanna
│⭔ ${prefix}art
│⭔ ${prefix}neko
│⭔ ${prefix}uniform
│⭔ ${prefix}maid
│⭔ ${prefix}marin-kitagawa
│⭔ ${prefix}mori-calliope
│⭔ ${prefix}raiden-shogun
│⭔ ${prefix}hutao
│⭔ ${prefix}character (query)
│⭔ ${prefix}oppai
│⭔ ${prefix}selfies
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│⭔ ${prefix}bully
│⭔ ${prefix}cuddle
│⭔ ${prefix}cry
│⭔ ${prefix}hug
│⭔ ${prefix}awoo
│⭔ ${prefix}kiss
│⭔ ${prefix}lick
│⭔ ${prefix}pat
│⭔ ${prefix}smug
│⭔ ${prefix}bonk
│⭔ ${prefix}yeet
│⭔ ${prefix}blush
│⭔ ${prefix}smile
│⭔ ${prefix}wave
│⭔ ${prefix}highfive
│⭔ ${prefix}handhold
│⭔ ${prefix}nom
│⭔ ${prefix}bite
│⭔ ${prefix}glomp
│⭔ ${prefix}slap
│⭔ ${prefix}kill
│⭔ ${prefix}kick
│⭔ ${prefix}happy
│⭔ ${prefix}wink
│⭔ ${prefix}poke
│⭔ ${prefix}dance
│⭔ ${prefix}cringe
│⭔ ${prefix}nsfw (query)
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'claim_waifu': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Claim Waifu Menu*
│
│⭔ ${prefix}claimwaifu
│⭔ ${prefix}unclaim
│⭔ ${prefix}waifusaya
│⭔ ${prefix}listwaifu
│⭔ ${prefix}searchwaifu
│⭔ ${prefix}searchwaifuanime
│⭔ ${prefix}randomwaifu
│⭔ ${prefix}pdkt
│⭔ ${prefix}tutorclaim
│
└───────⭓
bingung cara pake? ketik ${prefix}tutorclaim
`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'text_pro': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner
┌──⭓ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'ephoto': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Ephoto Menu*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'editor_photo': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Editor Photo Menu*
│
│⭔ ${prefix}horny
│⭔ ${prefix}gay
│⭔ ${prefix}contrast
│⭔ ${prefix}pixelate
│⭔ ${prefix}sepia
│⭔ ${prefix}brighten
│⭔ ${prefix}greyscale
│⭔ ${prefix}circle
│⭔ ${prefix}blur
│⭔ ${prefix}invert
│⭔ ${prefix}2x
│⭔ ${prefix}glass
│⭔ ${prefix}wasted
│⭔ ${prefix}wanted
│⭔ ${prefix}gun
│⭔ ${prefix}passed
│⭔ ${prefix}comrade
│⭔ ${prefix}jail
│⭔ ${prefix}pet
│⭔ ${prefix}pencil
│⭔ ${prefix}triggered
│⭔ ${prefix}trigger
│⭔ ${prefix}fisheye
│⭔ ${prefix}deepfry 
│⭔ ${prefix}imagecolor (hexcolor) 
│⭔ ${prefix}removebg
│⭔ ${prefix}1977
│⭔ ${prefix}aden
│⭔ ${prefix}brannan
│⭔ ${prefix}brooklyn
│⭔ ${prefix}clarendon
│⭔ ${prefix}gingham
│⭔ ${prefix}hudson
│⭔ ${prefix}inkwell
│⭔ ${prefix}earlybird
│⭔ ${prefix}kelvin
│⭔ ${prefix}lark
│⭔ ${prefix}lofi
│⭔ ${prefix}maven
│⭔ ${prefix}mayfair
│⭔ ${prefix}nashville
│⭔ ${prefix}perpetua
│⭔ ${prefix}reyes
│⭔ ${prefix}rise
│⭔ ${prefix}slumber
│⭔ ${prefix}stinson
│⭔ ${prefix}toaster
│⭔ ${prefix}valencia
│⭔ ${prefix}walden
│⭔ ${prefix}willow
│⭔ ${prefix}xpro2
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'fun': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Fun Menu*
│
│⭔ ${prefix}simih
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}apakah
│⭔ ${prefix}siapakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}kapankah
│⭔ ${prefix}cantikcek
│⭔ ${prefix}gantengcek
│⭔ ${prefix}persengay
│⭔ ${prefix}persenlesbi
│⭔ ${prefix}watak
│⭔ ${prefix}hobbi
│⭔ ${prefix}say
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│⭔ ${prefix}transfer
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'game': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Game Menu*
│
│⭔ ${prefix}work
│⭔ ${prefix}casino 
│⭔ ${prefix}gacha bronze|silver|gold
│⭔ ${prefix}mancing
│⭔ ${prefix}jualikan (kode)
│⭔ ${prefix}akuarium
│⭔ ${prefix}adventure
│⭔ ${prefix}shop (buy|sell) item
│⭔ ${prefix}open (crate) (jumlah)
│⭔ ${prefix}use (item) (jumlah)
│⭔ ${prefix}feed (nama hewan)
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'primbon': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'convert': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Convert Menu*
│
│⭔ ${prefix}attp
│⭔ ${prefix}ttp
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}shortlink
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│⭔ ${prefix}smeme
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'main': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│⭔ ${prefix}report
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'database': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'anonymous': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous / mutualan
│⭔ ${prefix}menfess
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'islamic': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Islamic Menu*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'chatolic': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Chatolic Menu*
│
│⭔ ${prefix}bible
│⭔ ${prefix}biblelist
│⭔ ${prefix}alkitab (indonesia version)
│⭔ ${prefix}alkitablist (indonesia version)
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'voice_changer': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    case 'owner': {
                        anu = `Halo, Kak ${user.name}
Mau cek lebih spesifik?
-menu all
-menu group
-menu webzone
-menu downloader
-menu search
-menu random_photo
-menu claim_waifu
-menu text_pro
-menu ephoto
-menu editor_photo
-menu fun
-menu game
-menu primbon
-menu convert
-menu main
-menu database
-menu anonymous
-menu islamic
-menu chatolic
-menu voice_changer
-menu owner

┌──⭓ *Owner Menu*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│⭔ ${prefix}setmenu [option]
│
└───────⭓`
                        hisoka.sendImage(m.chat, global.thumb, anu, m)
                    }
                        break
                    default: return hisoka.sendImage(m.chat, global.thumb, anu, m)
                }
            }
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }

                if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        m.reply(util.format(err))
    }
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
