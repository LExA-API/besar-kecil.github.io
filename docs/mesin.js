const pilihanPlayer = document.querySelector('.pilihan');
const postHasil = document.querySelector('.hasil');
const poinHtml = document.querySelector('.poin');
const postHasilDadu = document.querySelector('.hasil-dadu');
const kehokian = document.querySelector('.kehokian');

kehokian.innerHTML = '';
let poin = 0;
//console.log(poin);
//-------------INI BAGIAN MESIN HOKI NYA--------------
//mesinHoki1();
//mesinHoki2();
function mesinHoki1(){
   let angka1 = Math.floor(Math.random()*10+3)/2;
    if(angka1 >= 1 && angka1 <= 2)return 1;
    if(angka1 >= 2 && angka1 <= 3)return 2;
    if(angka1 >= 4 && angka1 <= 5)return 4;
    if(angka1 >= 5 && angka1 <= 6)return 5;
    if(angka1 >= 3 && angka1 <= 4)return 3;
    if(angka1 >= 6 && angka1 < 7)return 6;
}
function mesinHoki2(){
   let angka2 = Math.floor(Math.random()*10+3)/2;
    if(angka2 >= 1 && angka2 <= 2)return 1;
    if(angka2 >= 2 && angka2 <= 3)return 2;
    if(angka2 >= 3 && angka2 <= 4)return 3;
    if(angka2 >= 4 && angka2 <= 5)return 4;
    if(angka2 >= 5 && angka2 <= 6)return 5;
    if(angka2 >= 6 && angka2 < 7)return 6;
}


//----------INI BAGIAN MESIN PLAYER----------
let pilihanP;
const pilB = document.querySelector('.BESAR');
pilB.addEventListener('click', function(){
    pilihanP = 'BESAR';
    pilihanPlayer.innerHTML = 'Kamu memilih:BESAR';
    postHasil.innerHTML = '';
    kehokian.innerHTML = '';
});

const pilK = document.querySelector('.KECIL');
pilK.addEventListener('click', function(){
    pilihanP = 'KECIL';
    pilihanPlayer.innerHTML = 'Kamu memilih:KECIL';
    postHasil.innerHTML = '';
    kehokian.innerHTML = '';
});


//--------HASIL KEHOKIAN PLAYER--------
function gethasilAkhir(pilPlay,hasilDadu){
    if(hasilDadu == pilPlay){
        //console.log('menang');
        postHasil.innerHTML = 'Anda menang! GACOR KANK POIN +1';
        return 'menang';
    }
    if(hasilDadu != pilPlay){
        //console.log('kalah');
        postHasil.innerHTML = 'Anda kalah! RUNGKAD GOBLOK POIN -1';
        return 'kalah';
    }
    
}


//----------JARAK DADU 1-6=KECIL 6-12 BESAR-----------
function rangeDadu(dadu1,dadu2){
    const dataDadu = (dadu1 + dadu2);
    if(dataDadu >= 1 && dataDadu <= 6)return ('KECIL');
    if(dataDadu >= 7 && dataDadu <= 12)return ('BESAR');
}
//console.log(rangeDadu());
//console.log(dadu1);
//console.log(dadu2);

function acak(){
    const imgDadu1 = document.querySelector('.dadu1');
    const imgDadu2 = document.querySelector('.dadu2');
    const gambarDadu1 = ['1', '2', '3', '4', '5', '6'];
    const gambarDadu2 = ['1', '2', '3', '4', '5', '6'];
    let i = 0;
    const waktu = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktu > 3000){
            clearInterval;
            return;
        }
        imgDadu1.setAttribute('src','./asset/img/' + gambarDadu1[i++] + '.png');
        if(i == gambarDadu1.length)i=0;
        imgDadu2.setAttribute('src','./asset/img/' + gambarDadu2[i++] + '.png');
        if(i == gambarDadu2.length)i=0;
    },100);
}

//----------TOMBOL START PERMAINAN------------
const START = document.querySelector('.start');
START.addEventListener('click',function(){
    //const dadu1 = mesinHoki1();
    //const dadu2 = mesinHoki2();
    const dadu1 = mesinHoki1();
    const dadu2 = mesinHoki2();
    const dadu = rangeDadu(dadu1,dadu2);
    //console.log(dadu);
    const pil = pilihanP;
    if(pil==undefined){
        postHasil.innerHTML = 'Pilih BESAR atau KECIL dulu'
        return;
    }
    
    postHasil.innerHTML = '';
    acak();

    setTimeout(function(){
        const imgDadu1 = document.querySelector('.dadu1');
        imgDadu1.setAttribute('src','./asset/img/' + dadu1 + '.png');
        const imgDadu2 = document.querySelector('.dadu2');
        imgDadu2.setAttribute('src','./asset/img/' + dadu2 + '.png');
        const hasil = gethasilAkhir(pil,dadu);

        if(hasil=='menang'){   
            poin+=1;
        }else if(hasil=='kalah'){
            poin-=1;
        }
        poinHtml.innerHTML = 'POIN:' + poin;

        //dadu.style.color = 'white';
        postHasilDadu.innerHTML = 'Hasil dadu:' + dadu;        
    },3000);


    pilihanP = undefined;
    pilihanPlayer.innerHTML = '';
    postHasil.innerHTML = '';
    postHasilDadu.innerHTML = '';
    kehokian.innerHTML = 'KEHOKIAN MU:';
});

