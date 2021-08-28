'use strict';

//"ランダムで曲を決める"ボタン
const selectSong = document.getElementById('select-song');

//各進行プログラム
const doorOpenSel = document.getElementById('doorOpen');

//"ランダムで曲を決める"ボタンが押された時の動作
selectSong.onclick = () => {

  //前回選曲した表示を削除する
  doorOpenSel.removeChild(doorOpen.lastChild);


  //進行プログラム毎に乱数を発生させる
  const doorOpenNum = Math.floor( Math.random() * Object.keys(wedsong.doorOpen).length);


  //曲リストの配列の中から、発生した乱数の添え字の要素を取得し、表示する曲を決める

  //const doorOpenSong = "EXITE"

  const doorOpenSongArtist = wedsong.doorOpen[doorOpenNum].artist;
  const doorOpenSongTitle = wedsong.doorOpen[doorOpenNum].title;
  const doorOpenSong = doorOpenSongArtist + " / " + doorOpenSongTitle;

  //その要素を各該当項目に表示させる
  const doorOpenDisp = document.createElement('h5');
  doorOpenDisp.innerText = doorOpenSong;
  doorOpenSel.appendChild(doorOpenDisp);

};
