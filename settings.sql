DROP DATABASE IF EXISTS music_tracker;
CREATE DATABASE music_tracker;
CREATE USER music_trackeruser WITH PASSWORD 'music_tracker';
GRANT ALL PRIVILEGES ON DATABASE music_tracker TO music_trackeruser;