'use strict';

//"ランダムで曲を決める"ボタン
const selectSong = document.getElementById('select-song');

//各シーン
const doorOpenSel = document.getElementById('doorOpen');
const entSel = document.getElementById('ent');
const cakeSel  = document.getElementById('cake');
const cheersSel = document.getElementById('cheers');
const changeDressSel = document.getElementById('changeDress');
const reEntSel = document.getElementById('reEnt');
const endrollSel = document.getElementById('endroll');
const letterSel = document.getElementById('letter');
const flowerSel = document.getElementById('flower');
const finalSel = document.getElementById('final');


//"ランダムで曲を決める"ボタンが押された時の動作
selectSong.onclick = () => {

  //前回選曲した表示をすべて削除する
  delSongs();

  //曲をランダムで選び表示する
  chooseSong()

}


//前回選曲した表示をすべて削除する関数
function delSongs(){

  //迎賓
  if (doorOpenSel.children.length === 0) {
    //選曲されていなければ何もしない
  } else {
    doorOpenSel.innerHTML = "";
  }

  //新郎新婦入場
  if (entSel.children.length === 0) {
    //選曲されていなければ何もしない
  } else {
    entSel.innerHTML = "";
  }
  
  //ケーキ入刀
  if (cakeSel.children.length === 0) {
    //選曲されていなければ何もしない
  } else {
    cakeSel.innerHTML = "";
  }

    //乾杯
  if (cheersSel.children.length === 0) {
    //選曲されていなければ何もしない
  } else {
    cheersSel.innerHTML = "";
  }

  //お色直し中座
  if (changeDressSel.children.length === 0) {
    //選曲されていなければ何もしない
  } else {
    changeDressSel.innerHTML = "";
  }

  //お色直し入場
  if (reEntSel.children.length === 0) {
    //選曲されていなければ何もしない
  } else {
    reEntSel.innerHTML = "";
  }

  //エンドロール
  if (endrollSel.children.length === 0) {
    //選曲されていなければ何もしない
  } else {
    endrollSel.innerHTML = "";
  }

  //両親への手紙
  if (letterSel.children.length === 0) {
    //選曲されていなければ何もしない
  } else {
    letterSel.innerHTML = "";
  }

  //両親への花束贈呈
  if (flowerSel.children.length === 0) {
    //選曲されていなければ何もしない
  } else {
    flowerSel.innerHTML = "";
  }

  //お披楽喜
  if (finalSel.children.length === 0) {
    //選曲されていなければ何もしない
  } else {
    finalSel.innerHTML = "";
  }

};



/**
 *  曲をランダムで選び表示する関数。
 *  シーン毎に乱数を発生させ、 *  曲リストの配列の中から、発生した乱数の添え字の要素を取得し、表示する曲を決め、
 *  その曲を各該当シーンに表示させる
 *  更にその曲の動画のリンクを表示させる
 */
function chooseSong(){

  //迎賓
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


  //新郎新婦入場
  let entNum = Math.floor( Math.random() * Object.keys(wedsong.ent).length);
  const entSongArtist = wedsong.ent[entNum].artist;
  const entSongTitle = wedsong.ent[entNum].title;
  const entSong = entSongArtist + " / " + entSongTitle;

  const entDisp = document.createElement('h5');
  entDisp.innerText = entSong;
  entSel.appendChild(entDisp);

  const entSongMUrl = wedsong.ent[entNum].mUrl;
  const entMovie = document.createElement('a');
  entMovie.href = entSongMUrl;
  entMovie.target = "_blank";
  entMovie.innerText = "動画サイトで聴く";
  entSel.appendChild(entMovie)

  /*
  //ケーキ入刀
  cake

    //乾杯
  cheers

  //お色直し中座
  changeDress

  //お色直し入場
  reEnt

  //エンドロール
  endroll

  //両親への手紙
  letter

  //両親への花束贈呈
  flower 

  //お披楽喜
  final 
*/
}
