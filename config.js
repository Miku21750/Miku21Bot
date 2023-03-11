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

//2dd568eeff29fb3c-02
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
        bible: 'https://api.scrpiture.api.bible/v1/bible',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'keymikuzenz21',
    'https://api.scrpiture.api.bible/v1/bible': '5d9324630c852dcbd2bb643aa00d6987',
}


// Other
global.owner = ['6283834685279','62877311375123','6285959069150','6285755162771']
//6288292024190 bot owner hisoka
global.premium = ['6289602254720','6285771892336','6285724327261','6281229008933','62895622807893','6281267539123','6288806440825','6285709888616','6285817740811','6285707358287','62877311375121','6283834685279','6285959069150','6281703482644','6289514185002','6285755162771','6285735908827','628885835891','6289647637754']
//6285707358287 = tio = beta_tester = infinity premium
//62877311375121 = ruthy = beta tester = infinity premium
//6282327871319 = owner = infinity premium
//6285959069150 = rey = infinity premium
//6285755162771 = mey = beta tester = infinity premium
//6281703482644 = light = 30h premium (21)
//6285817740811 = selen = kel.Light
//628885835891 = Rokuta = kel.Light
//6289647637754 = keira = permanen
//6285709888616 = Keju = lek.light
//62896022547201 = depin = 30h (started 12 Aug 2022)


//6285724327261  = ??? (panti) = 30h (30 Oktober 2022)
//62895622807893 = patih = 30h (11 oktober 2022)
//6285771892336 = elang dian (panti) = 30h (28 Oktober 2022)
//6281229008933 = ??(kel panti) = 30h (28 Oktober 2022)
//6289514185002 = ???? = 30 h (started 7 juni 2022)
//6289602254720 = depin = 30h (started 12 Aug 2022)
global.packname = 'Miku21Bot'
global.author = 'WhatsApp Bot'
global.sessionName = 'miku21'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.nsfwGroup = '120363024362181197@g.us'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    banned : 'Anda Telah Dibanned. Silahkan hubungi Owner'
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/lol.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
