'use strict';

//"ランダムで曲を決める"ボタン
const selectSong = document.getElementById('select-song');

//各シーン
const doorOpenSel = document.getElementById('doorOpen');
//const  = document.getElementById('');


//"ランダムで曲を決める"ボタンが押された時の動作
selectSong.onclick = () => {

  //前回選曲した表示をすべて削除する
  delSongs();

  //曲をランダムで選び表示する
  chooseSong()

}

//前回選曲した表示をすべて削除する関数
function delSongs(){
  for ( let i = 1; i <3; i++){
    doorOpenSel.removeChild(doorOpen.lastChild);
  }

}


/**
 *  曲をランダムで選び表示する関数。
 *  シーン毎に乱数を発生させ、 *  曲リストの配列の中から、発生した乱数の添え字の要素を取得し、表示する曲を決め、
 *  その曲を各該当シーンに表示させる
 *  更にその曲の動画のリンクを表示させる
 */
function chooseSong(){

  //迎賓の曲
  let doorOpenNum = Math.floor( Math.random() * Object.keys(wedsong.doorOpen).length);
  const doorOpenSongArtist = wedsong.doorOpen[doorOpenNum].artist;
  const doorOpenSongTitle = wedsong.doorOpen[doorOpenNum].title;
  const doorOpenSong = doorOpenSongArtist + " / " + doorOpenSongTitle;

  const doorOpenDisp = document.createElement('h5');
  doorOpenDisp.innerText = doorOpenSong;
  doorOpenSel.appendChild(doorOpenDisp);

  const doorOpenSongMUrl = wedsong.doorOpen[doorOpenNum].mUrl;
  const doorOpenMovie = document.createElement('a');
  doorOpenMovie.href = doorOpenSongMUrl;
  doorOpenMovie.target = "_blank";
  doorOpenMovie.innerText = "動画サイトで聴く";
  doorOpenSel.appendChild(doorOpenMovie)

}
