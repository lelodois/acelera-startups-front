# acelera-startups-

Instalação

Instale o nodejs (somente para gerar a imagem)
apt-get install nodejs
apt-get install npm

Baixe o projeto:
git clone https://github.com/lelodois/acelera-startups-front.git
npm install

Crie uma imagem docker:
sudo docker build -t acelera-front 
 
Execute a imagem criada:
sudo docker run -d -p 80:80 acelera-front
