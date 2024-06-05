const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
  ];

musicPlaylist.pop();
musicPlaylist.shift();

musicPlaylist.unshift("Golden Experience", "Sticky Finger");
musicPlaylist.push("Moody Blue");

console.log(musicPlaylist);
