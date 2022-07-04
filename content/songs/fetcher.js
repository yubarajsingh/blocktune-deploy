 import songs from './songs.metadata.json';

 export const getAllSongs = () => {
    return {
        data:songs,
        songMap : songs.reduce((a,s,i) => {
            a[s.id] = s
            a[s.id].index = i
            return a;
        },{})
    }
 }