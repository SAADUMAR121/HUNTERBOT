
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Share MR Bot group Link And Support. wp Link https://chat.whatsapp.com/Fc97ajkg5DvBbSGYfmRU8M`
let img = 'https://graph.org/file/56c0fb63b1eb1b2ca789c.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
