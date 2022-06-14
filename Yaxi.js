
const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
Yaxi.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `You only live once, so try to live for God.`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Yaxi.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
Yaxi.on("ready", () => {
    var join = Yaxi.channels.get(""); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
Yaxi.login("0TI1 0 Tc10TcyOTMzNjYO
Nzkw.GOt8BK.TSkneapY6Vw4gae
nHyFAVJpVn67qylbwbyHUFI");
