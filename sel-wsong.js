'use strict';

//"ランダムで曲を決める"ボタン
const selectSong1 = document.getElementById('select-song1');
const selectSong2 = document.getElementById('select-song2');

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


//"ランダムで曲を決める"ボタン1が押された時の動作
selectSong1.onclick = () => {

  //前回選曲した表示をすべて削除する
  delSongs();

  //曲をランダムで選び表示する
  chooseSong()

}

//"ランダムで曲を決める"ボタン2が押された時の動作
selectSong2.onclick = () => {

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


  //ケーキ入刀
  let cakeNum = Math.floor( Math.random() * Object.keys(wedsong.cake).length);
  const cakeSongArtist = wedsong.cake[cakeNum].artist;
  const cakeSongTitle = wedsong.cake[cakeNum].title;
  const cakeSong = cakeSongArtist + " / " + cakeSongTitle;

  const cakeDisp = document.createElement('h5');
  cakeDisp.innerText = cakeSong;
  cakeSel.appendChild(cakeDisp);

  const cakeSongMUrl = wedsong.cake[cakeNum].mUrl;
  const cakeMovie = document.createElement('a');
  cakeMovie.href = cakeSongMUrl;
  cakeMovie.target = "_blank";
  cakeMovie.innerText = "動画サイトで聴く";
  cakeSel.appendChild(cakeMovie)


  //乾杯
  let cheersNum = Math.floor( Math.random() * Object.keys(wedsong.cheers).length);
  const cheersSongArtist = wedsong.cheers[cheersNum].artist;
  const cheersSongTitle = wedsong.cheers[cheersNum].title;
  const cheersSong = cheersSongArtist + " / " + cheersSongTitle;

  const cheersDisp = document.createElement('h5');
  cheersDisp.innerText = cheersSong;
  cheersSel.appendChild(cheersDisp);

  const cheersSongMUrl = wedsong.cheers[cheersNum].mUrl;
  const cheersMovie = document.createElement('a');
  cheersMovie.href = cheersSongMUrl;
  cheersMovie.target = "_blank";
  cheersMovie.innerText = "動画サイトで聴く";
  cheersSel.appendChild(cheersMovie)



  //お色直し中座
  let changeDressNum = Math.floor( Math.random() * Object.keys(wedsong.changeDress).length);
  const changeDressSongArtist = wedsong.changeDress[changeDressNum].artist;
  const changeDressSongTitle = wedsong.changeDress[changeDressNum].title;
  const changeDressSong = changeDressSongArtist + " / " + changeDressSongTitle;

  const changeDressDisp = document.createElement('h5');
  changeDressDisp.innerText = changeDressSong;
  changeDressSel.appendChild(changeDressDisp);

  const changeDressSongMUrl = wedsong.changeDress[changeDressNum].mUrl;
  const changeDressMovie = document.createElement('a');
  changeDressMovie.href = changeDressSongMUrl;
  changeDressMovie.target = "_blank";
  changeDressMovie.innerText = "動画サイトで聴く";
  changeDressSel.appendChild(changeDressMovie)


  //お色直し入場
  let reEntNum = Math.floor( Math.random() * Object.keys(wedsong.reEnt).length);
  const reEntSongArtist = wedsong.reEnt[reEntNum].artist;
  const reEntSongTitle = wedsong.reEnt[reEntNum].title;
  const reEntSong = reEntSongArtist + " / " + reEntSongTitle;

  const reEntDisp = document.createElement('h5');
  reEntDisp.innerText = reEntSong;
  reEntSel.appendChild(reEntDisp);

  const reEntSongMUrl = wedsong.reEnt[reEntNum].mUrl;
  const reEntMovie = document.createElement('a');
  reEntMovie.href = reEntSongMUrl;
  reEntMovie.target = "_blank";
  reEntMovie.innerText = "動画サイトで聴く";
  reEntSel.appendChild(reEntMovie)


  //エンドロール
  let endrollNum = Math.floor( Math.random() * Object.keys(wedsong.endroll).length);
  const endrollSongArtist = wedsong.endroll[endrollNum].artist;
  const endrollSongTitle = wedsong.endroll[endrollNum].title;
  const endrollSong = endrollSongArtist + " / " + endrollSongTitle;

  const endrollDisp = document.createElement('h5');
  endrollDisp.innerText = endrollSong;
  endrollSel.appendChild(endrollDisp);

  const endrollSongMUrl = wedsong.endroll[endrollNum].mUrl;
  const endrollMovie = document.createElement('a');
  endrollMovie.href = endrollSongMUrl;
  endrollMovie.target = "_blank";
  endrollMovie.innerText = "動画サイトで聴く";
  endrollSel.appendChild(endrollMovie)


  //両親への手紙
  let letterNum = Math.floor( Math.random() * Object.keys(wedsong.letter).length);
  const letterSongArtist = wedsong.letter[letterNum].artist;
  const letterSongTitle = wedsong.letter[letterNum].title;
  const letterSong = letterSongArtist + " / " + letterSongTitle;

  const letterDisp = document.createElement('h5');
  letterDisp.innerText = letterSong;
  letterSel.appendChild(letterDisp);

  const letterSongMUrl = wedsong.letter[letterNum].mUrl;
  const letterMovie = document.createElement('a');
  letterMovie.href = letterSongMUrl;
  letterMovie.target = "_blank";
  letterMovie.innerText = "動画サイトで聴く";
  letterSel.appendChild(letterMovie)

  //両親への花束贈呈
  let  flowerNum = Math.floor( Math.random() * Object.keys(wedsong. flower).length);
  const  flowerSongArtist = wedsong. flower[ flowerNum].artist;
  const  flowerSongTitle = wedsong. flower[ flowerNum].title;
  const  flowerSong =  flowerSongArtist + " / " +  flowerSongTitle;

  const  flowerDisp = document.createElement('h5');
   flowerDisp.innerText =  flowerSong;
   flowerSel.appendChild( flowerDisp);

  const  flowerSongMUrl = wedsong. flower[ flowerNum].mUrl;
  const  flowerMovie = document.createElement('a');
   flowerMovie.href =  flowerSongMUrl;
   flowerMovie.target = "_blank";
   flowerMovie.innerText = "動画サイトで聴く";
   flowerSel.appendChild( flowerMovie)


  //お披楽喜
  let finalNum = Math.floor( Math.random() * Object.keys(wedsong.final).length);
  const finalSongArtist = wedsong.final[finalNum].artist;
  const finalSongTitle = wedsong.final[finalNum].title;
  const finalSong = finalSongArtist + " / " + finalSongTitle;

  const finalDisp = document.createElement('h5');
  finalDisp.innerText = finalSong;
  finalSel.appendChild(finalDisp);

  const finalSongMUrl = wedsong.final[finalNum].mUrl;
  const finalMovie = document.createElement('a');
  finalMovie.href = finalSongMUrl;
  finalMovie.target = "_blank";
  finalMovie.innerText = "動画サイトで聴く";
  finalSel.appendChild(finalMovie)

}
