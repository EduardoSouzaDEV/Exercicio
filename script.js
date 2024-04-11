function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let dia = new Date()
    let hora = dia.getHours()
    hora = 19
    msg.innerHTML = `Olá, são exatamente ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src= 'img/Manhã.png.jpg'
        document.body.style.background = 'rgb(243, 154, 53)';
    } else if (hora >= 12 && hora < 18){
        img.src= 'img/Tarde.png.jpg'
        document.body.style.background = '#61616e';
    } else {
        img.src= 'img/Noite.png.jpg'
        document.body.style.background = 'rgb(43, 33, 33)';
    }
}
