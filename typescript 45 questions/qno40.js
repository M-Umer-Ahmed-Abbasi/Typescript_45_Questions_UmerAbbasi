function Make_Album(Artist_name, Album_name, Track_Number) {
    return {
        ArtisName: Artist_name,
        Album_name: Album_name,
        NumberOfTraks: Track_Number
    };
}
console.log("Object 1", Make_Album("Atif Aslam", "Bekar Song"));
console.log("Object 2", Make_Album("Arijit Singh", "Favorite Song"));
console.log("Object 3", Make_Album("Jubin Notiyal", "All Time Favorite Song", 29));
