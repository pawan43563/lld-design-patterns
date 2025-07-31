// Design a music playlist system that allows users to loop through songs one by one.

class AlbumIterator {
    constructor(songs) {
        this.songs = songs;
        this.current_song_index = 0;
    }

    hasNext() {
        return this.current_song_index < this.songs.length;
    }

    next() {
        if(this.hasNext()) {
            return this.songs[this.current_song_index++];
        }
        return null;
    }
}

class Album {
    constructor(name) {
        this.name = name;
        this.songs = [];
        this.current_song_index = 0;
    }

    addSongs(song) {
        this.songs.push(song);
    }

    iterator() {
        return new AlbumIterator(this.songs);
    }

}

class Song {
    constructor(name, artist_name) {
        this.name = name;
        this.artist_name = artist_name;
    }

    play() {
        console.info("Playing", this.name);
    }
}

const tumho = new Song("tumho", "pawan");
const tumho2 = new Song("tumho2", "pawan2");
const album = new Album("saiyaara");
album.addSongs(tumho);
album.addSongs(tumho2);
const iterator = album.iterator();
while(iterator.hasNext()) {
    const song = iterator.next();
    song.play()
}

