FROM php:7.3-fpm
# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/api/
# Set working directory
WORKDIR /var/www/api
# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    sqlite3 libsqlite3-dev \
    php7.3-sqlite \
    curl
# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
# Install extensions
RUN docker-php-ext-configure gd --with-gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include/
RUN docker-php-ext-install gd
# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# Copy existing application directory contents
COPY . /var/www/api/
# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
