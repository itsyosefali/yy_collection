#!/bin/bash
set -e

# Ensure SQLite database exists and has correct permissions
if [ "$DB_CONNECTION" = "sqlite" ] && [ ! -f "/var/www/html/database/database.sqlite" ]; then
    touch /var/www/html/database/database.sqlite
fi

# Fix permissions dynamically before starting
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database

# Cache configuration and routes for production
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run migrations
php artisan migrate --force

# Public disk URLs (/storage/...) need the symlink
php artisan storage:link --force

# Start the main process (Apache)
exec "$@"
