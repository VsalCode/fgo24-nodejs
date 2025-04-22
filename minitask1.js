let fs = require('fs').promises
const path = require('node:path');

async function createFile(fileName, content){
  try {
    const content = ""
    await fs.writeFile(fileName, content)
    console.log("Write File Succes");
  } catch (error) {
    console.log(error);
  }
}

const listMusic = [
  "Oasis - Wonderwall",
  "Oasis - The MasterPlan",
  "Oasis - Stand By Me",
  "The Beatles - Hey Jude",
  "The Beatles - Strawberry Fields",
  "The Beatles" - "Let It Be",
  "Coldplay - Fix You",
  "Coldplay - The Scientist",
  "Hindia - Secukupnya",
  "Hindia - Alexandra,"
]

listMusic.forEach(music => {
  createFile(path.join("music",`${music}.mp3`))
})

