const path = require('path')
const fs = require('fs').promises

const main = async () => {
  try {
    const listFile = await fs.readdir('music')
    listFile.forEach(async (item) => {
      const [artis, music] = item.split(" - ")

      const folderPath = path.join('music', artis)
      const oldPath = path.join('music', item)
      const newPath = path.join(folderPath, item)

      await createFolder(folderPath)
      await moveFile(oldPath, newPath)
    })
  } catch (error) {
    console.error('Terjadi kesalahan:', error)
  }
}

const moveFile = async (oldPath, newPath) => {
  try {
    await fs.rename(oldPath, newPath)
    console.log(`File berhasil dipindahkan ke ${newPath}`)
  } catch (err) {
    console.error(`Gagal memindahkan file dari ${oldPath} ke ${newPath}:`, err)
  }
}

const createFolder = async (folderName) => {
  try {
    await fs.mkdir(folderName, { recursive: true })
    console.log(`Folder "${folderName}" berhasil dibuat`)
  } catch (err) {
    console.error(`Gagal membuat folder "${folderName}":`, err)
  }
}

main()
