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
let numeroCarrinhoMirageR=0;
let imperial = document.querySelector('#carrinhoImperial')
let itemAddIm = document.createTextNode(' Perfume Adicionado!');
let numeroCarrinhoIm = 0;
let numeroCarrinhoGolden=0;
let valorTotal = document.querySelector('#valorTotal')
let valores = document.querySelector('#valoresX')
let perfumeZap = ''
let mirage = document.querySelector('#carrinhoMirage')
let mirageR = document.querySelector('#carrinhoRomantic')
let golden = document.querySelector('#carrinhoChallenge')
let paris = document.querySelector('#carrinhoParis');
let journey = document.querySelector('#carrinhoJourney')
let windowS = document.querySelector('#carrinhoWindow')
let shell = document.querySelector('#carrinhoShell')
let intimate = document.querySelector('#carrinhoIntimate')
let numeroCarrinhoParis=0;
let numeroCarrinhoJourney=0;
let numeroCarrinhoWindowS=0;
let numeroCarrinhoIntimate=0;
let numeroCarrinhoShell=0;
let comprar = document.querySelector('.comprar');
let cardP = document.querySelector('.cardp')
comprar.addEventListener('click',function(){
    let msgZap = 'https://api.whatsapp.com/send?phone=5547999932631&text=Olá%20me%20interessei%20nos%20seguintes%20perfumes:%20' + perfumeZap +'no%20valor%20de%20' + valorNumero+'%20Reais';
    comprar.setAttribute('href',msgZap)

});


carrinhoBotao.addEventListener('mousedown', function(){
    tela.style.display = 'block'
    
    
    

 
})
fechar.addEventListener('mousedown', function(){
    tela.style.display = 'none'
})




mirage.addEventListener('mousedown', function(){
    numeroCarrinhoMir++
    valorNumero +=Math.floor(209);
    let valormirage = document.createTextNode('+ 209,00 Mirage World');
    let valorMir = document.createElement('p');
    valorMir.appendChild(valormirage);
    valores.appendChild(valorMir)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    mirage.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemmirage = document.createElement('img')
    imagemmirage.setAttribute('class','imgperfume9')
    let nome9 = document.createElement('p');
    let mirageNome = document.createTextNode('Mirage World')
    let cardmirage = document.createElement('div');
    cardmirage.setAttribute('class', 'cardMirage')
    nome9.appendChild(mirageNome)
    nome9.setAttribute('class','nomePerfume9')
    cardP.appendChild(cardmirage);
    cardmirage.appendChild(nome9)
    cardmirage.appendChild(imagemmirage)
    perfumeZap += ('Mirage World,%20')
  
    

})
mirageR.addEventListener('mousedown', function(){
    numeroCarrinhoMirageR++
    valorNumero +=Math.floor(209);
    let valorMirageRomantic = document.createTextNode('+ 209,00 Mirage World Romantic');
    let valorMirageR = document.createElement('p');
    valorMirageR.appendChild(valorMirageRomantic);
    valores.appendChild(valorMirageR)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    mirageR.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemmirageR = document.createElement('img')
    imagemmirageR.setAttribute('class','imgperfume10')
    let nome10 = document.createElement('p');
    let mirageRNome = document.createTextNode('Mirage World Romantic')
    let cardmirageR = document.createElement('div');
    cardmirageR.setAttribute('class', 'cardMirage')
    nome10.appendChild(mirageRNome)
    nome10.setAttribute('class','nomePerfume10')
    cardP.appendChild(cardmirageR);
    cardmirageR.appendChild(nome10)
    cardmirageR.appendChild(imagemmirageR)
    perfumeZap += ('Mirage World Romantic,%20')
  
    

})
golden.addEventListener('mousedown', function(){
    numeroCarrinhoGolden++
    valorNumero +=Math.floor(125);
    let valorGolden = document.createTextNode('+ 125,00 Golden Challenge');
    let valorGoldenC = document.createElement('p');
    valorGoldenC.appendChild(valorGolden);
    valores.appendChild(valorGoldenC)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    golden.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemGolden= document.createElement('img')
    imagemGolden.setAttribute('class','imgperfume11')
    let nome11 = document.createElement('p');
    let goldenNome = document.createTextNode('Golden Challenge')
    let cardGolden = document.createElement('div');
    cardGolden.setAttribute('class', 'cardGolden')
    nome11.appendChild(goldenNome)
    nome11.setAttribute('class','nomePerfume11')
    cardP.appendChild(cardGolden);
    cardGolden.appendChild(nome11)
    cardGolden.appendChild(imagemGolden)
    perfumeZap += ('Golden Challenge,%20')
  
    

})
paris.addEventListener('mousedown', function(){
    numeroCarrinhoParis
    valorNumero +=Math.floor(198);
    let valorParis = document.createTextNode('+198,00 RosialeParis');
    let valorParisR = document.createElement('p');
    valorParisR.appendChild(valorParis);
    valores.appendChild(valorParisR)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    paris.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemParis= document.createElement('img')
    imagemParis.setAttribute('class','imgperfume12')
    let nome12 = document.createElement('p');
    let parisNome = document.createTextNode('Rosiale Paris')
    let cardParis = document.createElement('div');
    cardParis.setAttribute('class', 'cardParis')
    nome12.appendChild(parisNome)
    nome12.setAttribute('class','nomePerfume12')
    cardP.appendChild(cardParis);
    cardParis.appendChild(nome12)
    cardParis.appendChild(imagemParis)
    perfumeZap += ('Paris Challenge,%20')
  
    

})
journey.addEventListener('mousedown', function(){
    numeroCarrinhoJourney++
    valorNumero +=Math.floor(160);
    let valorJourney = document.createTextNode('+160,00 Journey Patchouli');
    let valorJourneyR = document.createElement('p');
    valorJourneyR.appendChild(valorJourney);
    valores.appendChild(valorJourneyR)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    journey.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemJourney= document.createElement('img')
    imagemJourney.setAttribute('class','imgperfume13')
    let nome13 = document.createElement('p');
    let JourneyNome = document.createTextNode('Journey Patchouli')
    let cardJourney = document.createElement('div');
    cardJourney.setAttribute('class', 'cardJourney')
    nome13.appendChild(JourneyNome)
    nome13.setAttribute('class','nomePerfume13')
    cardP.appendChild(cardJourney);
    cardJourney.appendChild(nome13)
    cardJourney.appendChild(imagemJourney)
    perfumeZap += ('Journey Patchouli,%20')
  
    

})
windowS.addEventListener('mousedown', function(){
    numeroCarrinhoWindowS++
    valorNumero +=Math.floor(159);
    let valorWindowS = document.createTextNode('+159,00 Blue Window');
    let valorWindowSR = document.createElement('p');
    valorWindowSR.appendChild(valorWindowS);
    valores.appendChild(valorWindowSR)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    windowS.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemWindowS= document.createElement('img')
    imagemWindowS.setAttribute('class','imgperfume14')
    let nome14 = document.createElement('p');
    let WindowSNome = document.createTextNode('Blue Window')
    let cardWindowS = document.createElement('div');
    cardWindowS.setAttribute('class', 'cardWindowS')
    nome14.appendChild(WindowSNome)
    nome14.setAttribute('class','nomePerfume14')
    cardP.appendChild(cardWindowS);
    cardWindowS.appendChild(nome14)
    cardWindowS.appendChild(imagemWindowS)
    perfumeZap += ('Blue Window,%20')
  
    

})
shell.addEventListener('mousedown', function(){
    numeroCarrinhoShell++
    valorNumero +=Math.floor(195);
    let valorShell = document.createTextNode('+195,00 Gold Shell');
    let valorShellR = document.createElement('p');
    valorShellR.appendChild(valorShell);
    valores.appendChild(valorShellR)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    shell.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemShell= document.createElement('img')
    imagemShell.setAttribute('class','imgperfume15')
    let nome15 = document.createElement('p');
    let ShellNome = document.createTextNode('Gold Shell')
    let cardShell = document.createElement('div');
    cardShell.setAttribute('class', 'cardShell')
    nome15.appendChild(ShellNome)
    nome15.setAttribute('class','nomePerfume15')
    cardP.appendChild(cardShell);
    cardShell.appendChild(nome15)
    cardShell.appendChild(imagemShell)
    perfumeZap += ('Gold Shell,%20')
  
    

})
intimate.addEventListener('mousedown', function(){
    numeroCarrinhoIntimate++
    valorNumero +=Math.floor(179);
    let valorIntimate = document.createTextNode("+179,00 L'intimate");
    let valorIntimateR = document.createElement('p');
    valorIntimateR.appendChild(valorIntimate);
    valores.appendChild(valorIntimateR)
    let valorN = document.createTextNode('Valor Total:   ' + valorNumero +' R$')
    valorTotal.replaceChildren(valorN)
    intimate.style.backgroundColor = 'rgb(184, 182, 182)';
    let imagemIntimate= document.createElement('img')
    imagemIntimate.setAttribute('class','imgperfume16')
    let nome16 = document.createElement('p');
    let IntimateNome = document.createTextNode("L'intimate")
    let cardIntimate = document.createElement('div');
    cardIntimate.setAttribute('class', 'cardIntimate')
    nome16.appendChild(IntimateNome)
    nome16.setAttribute('class','nomePerfume16')
    cardP.appendChild(cardIntimate);
    cardIntimate.appendChild(nome16)
    cardIntimate.appendChild(imagemIntimate)
    perfumeZap += ("L'intimate,%20")
  
    

})