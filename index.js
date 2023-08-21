let addCarrinho = document.querySelector('.carrinho');
let numeroCarrinhoS = 0;
let numeroCarrinhoW = 0;
let numeroCarrinhoB = 0;
let numeroCarrinhoSu = 0;
let numeroCarrinhoNoor = 0;
let numeroCarrinhoMir = 0;
let Watani = document.querySelector('#carrinhoWatani')
let valor = document.querySelector('.valor');
let valorNumero = 0;
let sabah = document.querySelector('#carrinhoSabah')
let carrinhoBotao = document.querySelector('#carrinhobotao')
let tela = document.querySelector('#telaCarrinho')
let fechar = document.querySelector('#fechar');
let itemAddS = document.createTextNode(' Perfume Adicionado!');
let itemAddW = document.createTextNode(' Perfume Adicionado!');
let itemAddB = document.createTextNode(' Perfume Adicionado!');
let itemAddSU = document.createTextNode(' Perfume Adicionado!');
let sultan = document.querySelector('#carrinhoSultan')
let bella = document.querySelector('#carrinhoBella');
let noor = document.querySelector('#carrinhoNoor')
let itemAddNoor = document.createTextNode(' Perfume Adicionado!');
let thahaani = document.querySelector('#carrinhoThahaani')
let itemAddTha =document.createTextNode(' Perfume Adicionado!');
let numeroCarrinhoTha = 0;
let athar = document.querySelector('#carrinhoAttar');
let itemAddAthar = document.createTextNode(' Perfume Adicionado!');
let numeroCarrinhoAthar = 0;
let imperial = document.querySelector('#carrinhoImperial')
let itemAddIm = document.createTextNode(' Perfume Adicionado!');
let numeroCarrinhoIm = 0;
let valorTotal = document.querySelector('#valorTotal')
let valores = document.querySelector('#valoresX')
let perfumeZap = ''
let mirage = document.querySelector('#carrinhoMirage')


let nomePerfume1 = document.querySelector(".nomeperfume1")
let nomePerfume2 = document.querySelector(".nomeperfume2")
let nomePerfume3 = document.querySelector(".nomeperfume3")


let imgPerfume1 = document.querySelector('.imgperfume1')



let valorPerfume1 = document.querySelector('.valorperfume1')
let valorPerfume2 = document.querySelector('.valorperfume2')
let valorPerfume3 = document.querySelector('.valorperfume3')
let ocupado1 = false;
let ocupado2 = false;
let ocupado3 = false;
let cardP = document.querySelector('.cardp')




carrinhoBotao.addEventListener('mousedown', function(){
    tela.style.display = 'block'
    
    
    

 
})
fechar.addEventListener('mousedown', function(){
    tela.style.display = 'none'
})

Watani.addEventListener('mousedown', function(){
   
    numeroCarrinhoW++
    valorNumero +=Math.floor(298.90);
    let valorWatani = document.createTextNode('+ 298,90 Watani');
    let valorW = document.createElement('p');
    valorW.appendChild(valorWatani);
    valores.appendChild(valorW)
    let valorN = document.createTextNode('Valor Total:' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    Watani.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemWatani = document.createElement('img')
    imagemWatani.setAttribute('class','imgperfume1')
    let nome1 = document.createElement('p');
    wataniNome = document.createTextNode('Watani')
    let cardWatani = document.createElement('div');
    cardWatani.setAttribute('class', 'cardWatani')
    nome1.appendChild(wataniNome)
    nome1.setAttribute('class','nomePerfume')
    cardP.appendChild(cardWatani);
    cardWatani.appendChild(nome1)
    cardWatani.appendChild(imagemWatani)
    perfumeZap += ('Watani,%20')
    console.log(perfumeZap)
    
    
    
    
   


    
  
});
sabah.addEventListener('mousedown', function(){
    numeroCarrinhoS++
    let valorSabah = document.createTextNode('+ 298,90 Sabah');
    let valorS = document.createElement('p');
    valorS.appendChild(valorSabah);
    valores.appendChild(valorS)
    valorNumero +=Math.floor(298.90);
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    sabah.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemSabah = document.createElement('img')
    imagemSabah.setAttribute('class','imgperfume2')
    let nome2 = document.createElement('p');
    SabahNome = document.createTextNode('Sabah al Ward')
    let cardSabah = document.createElement('div');
    cardSabah.setAttribute('class', 'cardSabah')
    nome2.appendChild(SabahNome)
    nome2.setAttribute('class','nomePerfume2')
    cardP.appendChild(cardSabah);
    cardSabah.appendChild(nome2)
    cardSabah.appendChild(imagemSabah)
    perfumeZap += ('Sabah,%20')
    console.log(perfumeZap)

  
    

})
bella.addEventListener('mousedown', function(){
    numeroCarrinhoB++
    let valorBella = document.createTextNode('+ 375,00 Bella');
    let valorB = document.createElement('p');
    valorB.appendChild(valorBella);
    valores.appendChild(valorB)
    valorNumero +=Math.floor(375);
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    bella.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemBella = document.createElement('img')
    imagemBella.setAttribute('class','imgperfume3')
    let nome3 = document.createElement('p');
    bellaNome = document.createTextNode('Bella Rouge')
    let cardBella = document.createElement('div');
    cardBella.setAttribute('class', 'cardBella')
    nome3.appendChild(bellaNome)
    nome3.setAttribute('class','nomePerfume3')
    cardP.appendChild(cardBella);
    cardBella.appendChild(nome3)
    cardBella.appendChild(imagemBella)
    perfumeZap += ('Bella,%20')
    
  
    

})
sultan.addEventListener('mousedown', function(){
    numeroCarrinhoSu++
    valorNumero +=Math.floor(298);
    let valorSultan = document.createTextNode('+ 298,90 Sultan');
    let valorSu = document.createElement('p');
    valorSu.appendChild(valorSultan);
    valores.appendChild(valorSu)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    sultan.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemSultan = document.createElement('img')
    imagemSultan.setAttribute('class','imgperfume4')
    let nome4 = document.createElement('p');
    sultanNome = document.createTextNode('Sultan al lail')
    let cardSultan = document.createElement('div');
    cardSultan.setAttribute('class', 'cardSultan')
    nome4.appendChild(sultanNome)
    nome4.setAttribute('class','nomePerfume4')
    cardP.appendChild(cardSultan);
    cardSultan.appendChild(nome4)
    cardSultan.appendChild(imagemSultan)
    perfumeZap += ('Sultan,%20')
  
    

})
noor.addEventListener('mousedown', function(){
    numeroCarrinhoNoor++
    valorNumero +=Math.floor(299);
    let valorNoor = document.createTextNode('+ 299,00 Noor');
    let valorNo = document.createElement('p');
    valorNo.appendChild(valorNoor);
    valores.appendChild(valorNo)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    noor.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemNoor = document.createElement('img')
    imagemNoor.setAttribute('class','imgperfume5')
    cardP.appendChild(imagemNoor)
    let nome5 = document.createElement('p');
    noorNome = document.createTextNode('Noor al sabah')
    let cardNoor = document.createElement('div');
    cardNoor.setAttribute('class', 'cardNoor')
    nome5.appendChild(noorNome)
    nome5.setAttribute('class','nomePerfume5')
    cardP.appendChild(cardNoor);
    cardNoor.appendChild(nome5)
    cardNoor.appendChild(imagemNoor)
    perfumeZap += ('Noor,%20')
    

})
thahaani.addEventListener('mousedown', function(){
    numeroCarrinhoTha++
    valorNumero +=Math.floor(299);
    let valorThahaani = document.createTextNode('+ 299,00 Thahaani');
    let valorT = document.createElement('p');
    valorT.appendChild(valorThahaani);
    valores.appendChild(valorT)
    
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    thahaani.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemThahaani = document.createElement('img')
    imagemThahaani.setAttribute('class','imgperfume6')
    let nome6 = document.createElement('p');
    let thahaaniNome = document.createTextNode('Thahaani al sabah')
    let cardThahaani = document.createElement('div');
    cardThahaani.setAttribute('class', 'cardThahaani')
    nome6.appendChild(thahaaniNome)
    nome6.setAttribute('class','nomePerfume6')
    cardP.appendChild(cardThahaani);
    cardThahaani.appendChild(nome6)
    cardThahaani.appendChild(imagemThahaani)
    perfumeZap += ('Thahaani,%20')

   
  
    

})
athar.addEventListener('mousedown', function(){
    numeroCarrinhoAthar++
    valorNumero +=Math.floor(280);
    let valorAthar = document.createTextNode('+ 280,00 Athar');
    let valorA = document.createElement('p');
    valorA.appendChild(valorAthar);
    valores.appendChild(valorA)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    athar.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemAthar = document.createElement('img')
    imagemAthar.setAttribute('class','imgperfume7')
    let nome7 = document.createElement('p');
    let atharNome = document.createTextNode('Athar al Wesal')
    let cardAthar = document.createElement('div');
    cardAthar.setAttribute('class', 'cardAthar')
    nome7.appendChild(atharNome)
    nome7.setAttribute('class','nomePerfume7')
    cardP.appendChild(cardAthar);
    cardAthar.appendChild(nome7)
    cardAthar.appendChild(imagemAthar)
    perfumeZap += ('Athar,%20')
    
    
    
  
    

})
imperial.addEventListener('mousedown', function(){
    numeroCarrinhoIm++
    valorNumero +=Math.floor(330);
    let valorImperial = document.createTextNode('+ 330,00 Imperial Rouge');
    let valorI = document.createElement('p');
    valorI.appendChild(valorImperial);
    valores.appendChild(valorI)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    imperial.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemImperial = document.createElement('img')
    imagemImperial.setAttribute('class','imgperfume8')
    let nome8 = document.createElement('p');
    let imperialNome = document.createTextNode('Imperial Rouge')
    let cardImperial = document.createElement('div');
    cardImperial.setAttribute('class', 'cardImperial')
    nome8.appendChild(imperialNome)
    nome8.setAttribute('class','nomePerfume8')
    cardP.appendChild(cardImperial);
    cardImperial.appendChild(nome8)
    cardImperial.appendChild(imagemImperial)
    perfumeZap += ('Imperial,%20')
  
    

})

let comprar = document.querySelector('.comprar');

comprar.addEventListener('click',function(){
    let msgZap = 'https://api.whatsapp.com/send?phone=5547999932631&text=Olá%20me%20interessei%20nos%20seguintes%20perfumes:%20' + perfumeZap +'no%20valor%20de%20' + valorNumero+'%20Reais';
    comprar.setAttribute('href',msgZap)

});










