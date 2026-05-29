const playlist = {
  songs: ["moonlight", "cold"],

  showSongs() {
    console.log(this.songs);
  }
};

playlist.showSongs();

playlist.songs.push("lovely");

playlist.showSongs();
