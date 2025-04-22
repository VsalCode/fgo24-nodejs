let fs = require('fs').promises
const path = require('node:path');
const url = "https://gist.githubusercontent.com/fulsep/58daee79a699d0fe143da36bbc47e3d6/raw/dcc2e9c970af553011ba6d2d13331e68f5cf42ff/lagu.json"


fetch(url).then((res) => {
  return res.json() 
}).then((data) => {
  let listMusic = data.map(item => item.split(" - ").reverse().join(" - "))
  return listMusic
}).catch((err) => {
  console.log(err);
})


async function createFile(fileName){
  try {
    const content = ""
    await fs.writeFile(fileName, content)
    console.log("Write File Succes");
  } catch (error) {
    console.log(error);
  }
}

listMusic.forEach(music => {
  createFile(path.join("music",`${music}.mp3`))
})

