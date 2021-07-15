const help = (prefix, pushname, getLevelingLevel, getLevelingXp, sender, time, patt, uangku) => { 
return `
 ╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ 「 INFORMAÇÕES 」
│ Nick : ${NamaOwner} 
│ YouTube :「 ${ytb} 」
│ Bateria : ${battre}% 
│ Prefixo:「 ${prefix} 」
╰┬────────────┈ ⳹
││ Usuário : ${pushname}
││ Data/Hora : ${time}
││ Level : ${getLevelingLevel(sender)}
││ Patente : ${patt}
│╰────────────┈ ⳹
│ 「 MENU DE COMANDOS 」
│
│♢➛${prefix}menuadms
│♢➛${prefix}menudono
│♢➛${prefix}menumusic
│♢➛${prefix}menuprem
│
└──────────────
│ 「 COMANDOS BÁSICOS 」
│ 
│♢➛${prefix}bot
│♢➛${prefix}sticker 
│♢➛${prefix}fsticker
│♢➛${prefix}toimg 
│♢➛${prefix}togif 
│♢➛${prefix}gtts 
│♢➛${prefix}wait 
│♢➛${prefix}tomp3 
│♢➛${prefix}ping 
│♢➛${prefix}destrava 
│♢➛${prefix}play 
│♢➛${prefix}gimage 
│♢➛${prefix}rename 
│♢➛${prefix}wallpaper
│
└──────────────
│ 「 CRIAR QR/ETC. 」
│
│♧➛${prefix}qrcode
│♧➛${prefix}wame 
│
└──────────────
│ 「 BRINCADEIRAS 」
│
│♡➛${prefix}gay
│♡➛${prefix}casal
│♡➛${prefix}corno
│♡➛${prefix}gado
│♡➛${prefix}amgolpe
│♡➛${prefix}tapa 
│♡➛${prefix}rankgay
│♡➛${prefix}rankpau
│♡➛${prefix}rankotakus
│♡➛${prefix}rankgays
│♡➛${prefix}rankgostosas
│♡➛${prefix}rankcornos
│♡➛${prefix}ranknazista
│♡➛${prefix}gerarnick 
│ 
└──────────────
│ 「 ALTERADOR DE VIDEO 」
│
│♢➛${prefix}fastvid 
│♢➛${prefix}slowvid 
│♢➛${prefix}reversevid 
│
└──────────────
│ 「 ALTERADOR DE AUDIO 」
│
│❖➛${prefix}grave 
│❖➛${prefix}grave2 
│❖➛${prefix}fast 
│❖➛${prefix}adolesc 
│❖➛${prefix}esquilo 
│❖➛${prefix}estourar 
│❖➛${prefix}bass 
│❖➛${prefix}bass2 
│❖➛${prefix}bass 
│
└──────────────
│ 「 FOTO DE ANIMAIS 」
│ 
│♡➛${prefix}lagarto
│♡➛${prefix}ganso
│♡➛${prefix}gato
│ 
└──────────────
│ 「 ANIMES FOTOS/GIF 」
│ 
│♡➛${prefix}walpaperanime
│♡➛${prefix}avatarAnime
│♡➛${prefix}fotosAnime
│♡➛${prefix}bonecas
│♡➛${prefix}ngif
│♡➛${prefix}carinho
│ 
└──────────────
│ 「 INFORMAÇÕES/PESQUISA 」
│
│❖➛${prefix}covidglobal
│❖➛${prefix}covid19
│❖➛${prefix}wikipedia 
│❖➛${prefix}happymod (apk nome)
│❖➛${prefix}playstore (nome)
│
└──────────────
│「 ATTPS/TTPS (TXT) 」
│
│❖➛${prefix}attp
│❖➛${prefix}attp1
│❖➛${prefix}attp2
│❖➛${prefix}attp3
│❖➛${prefix}attp4
│❖➛${prefix}attp5
│❖➛${prefix}attp6
│❖➛${prefix}ttp
│❖➛${prefix}ttp2
│❖➛${prefix}ttp3
│❖➛${prefix}ttp4
│❖➛${prefix}ttp5
│❖➛${prefix}ttp6
│
└──────────────
│「 PESQUISAS/BAIXAR 」
│
│❖➛${prefix}ytsearch (nome da msc)
│❖➛${prefix}ytsearch2 (nome da msc)
│❖➛${prefix}ytmp4 (url do search) 
│❖➛${prefix}ytmp3 (url do search) 
│❖➛${prefix}play (Música q c qr)
│❖➛${prefix}play2 (Música q c qr)
└──────────────
│「 LOGOS/CRIAR (TXT) 」
│
│❖➛${prefix}grafity (txt) 
│❖➛${prefix}thunder (txt)
│❖➛${prefix}toxic (txt)
│❖➛${prefix}harryp (txt)
│❖➛${prefix}glitch (txt)
│❖➛${prefix}wooden (txt)
│❖➛${prefix}neonblue (txt)
│❖➛${prefix}neongreen (txt)
│❖➛${prefix}romantic (txt)
│❖➛${prefix}Gold (txt)
│❖➛${prefix}neon2 (txt)
│❖➛${prefix}neon (txt)
│❖➛${prefix}comporn (txt|txt)
│❖➛${prefix}nulis (txt)
│❖➛${prefix}comentarioL (txt|txt)
│❖➛${prefix}cslogo (txt)
│❖➛${prefix}8bit (txt)
│❖➛${prefix}cemiterio (txt)
│❖➛${prefix}gradient (txt)
│❖➛${prefix}googlelogo (txt)
│❖➛${prefix}rainbow (txt)
│❖➛${prefix}neonsky (txt)
│❖➛${prefix}neonye (txt)
│❖➛${prefix}shine (txt)
│❖➛${prefix}grass (txt)
│❖➛${prefix}flower (txt)
│❖➛${prefix}batle (txt)
│❖➛${prefix}coffe (txt)
│❖➛${prefix}coffe2 (txt)
│❖➛${prefix}pubg (txt)
│❖➛${prefix}horror (txt)
│❖➛${prefix}fire (txt)
│❖➛${prefix}stone (txt)
│❖➛${prefix}break (txt)
│❖➛${prefix}hallowen (txt)
│❖➛${prefix}vidro (txt)
│❖➛${prefix}carbon (txt)
│❖➛${prefix}metalblue (txt)
│❖➛${prefix}pink (txt)
│❖➛${prefix}colaq (txt)
│❖➛${prefix}ossos (txt)
│❖➛${prefix}blood (txt)
│❖➛${prefix}areia (txt)
│❖➛${prefix}natal (txt)
│❖➛${prefix}style (txt)
│❖➛${prefix}neve (txt)
│❖➛${prefix}narutobanner (txt)
│❖➛${prefix}pornhub (txt) 
│❖➛${prefix}space (txt)
│❖➛${prefix}jokerlogo (txt)
│❖➛${prefix}love (txt)
│❖➛${prefix}lava (txt)
│❖➛${prefix}luxury (txt)
│❖➛${prefix}steel (txt)
│❖➛${prefix}narutobanner (txt)
│
└──────────────
│️「 INFO 」
│
│NOME : ${NamaOwner}
│INSTA : ${instagram}
│NÚMERO : ${ownerNumber} 
│YOUTUBE :〘 ${ytb} 〙
│
╰──「 ${NamaBot} 」`
}

exports.help = help



