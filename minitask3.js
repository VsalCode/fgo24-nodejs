const path = require('path')
const fs = require('fs').promises
// const path = require('node:path');

const main = async () => {
 try{
    const listFile = await fs.readdir('music')
    // console.log(listFile);
    listFile.map((item) => {
      const [artis, music] = item.split(" - ")
      console.log('artis: '+ artis + ' musik: ' + music);

      createFolder(artis)
      moveFile(item, artis)
    })
 } catch(error){
  console.log(error);
 }
}

const moveFile = async (fileName, artisFolder) => {
  try{
    const sourcePath = path.join('music', fileName)
    const direct = path.join(artisFolder, fileName)

    await fs.rename(sourcePath, direct)
    console.log(`File "${fileName}" berhasil dipindahkan ke folder "${artisFolder}"`)
  }catch(err){
    console.log(err);
    
  }
}

const createFolder = async (folderName) => {
  try {
    await fs.mkdir(folderName, { recursive: true });
      console.log("folder berhasil dibuat");
  } catch (err) {
    console.error(err);
  }
}

// const createFile = async(fileName) => {
//   try {
//     const content = ""
//     await fs.writeFile(fileName, content)
//     console.log("Write File Succes");
//   } catch (error) {
//     console.log(error);
//   }
// }

main()