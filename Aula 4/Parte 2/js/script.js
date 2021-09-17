let listaFilmes = [
    'https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg',
    'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg',
    'https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=85&ImageId=%27177569.png%27&ImageUrl=%27177569.png%27&EntityType=%27Item%27&EntityId=%277090%27&device=web_browser&subscriptions=Anonymous&Width=360&Height=540',
    'https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg'
]

for (let i = 0; i < listaFilmes.length; i++){
    document.write('<img src=' + listaFilmes[i] + '>');
}