docker run -it --rm --name my-running-script -v "$PWD":/usr/src/myapp -w /usr/src/myapp php:5.6-cli php index.html

docker run -it --rm --name my-apache-php-app -v "$PWD":/var/www/html -p 8000:80 php:5.6-apache
