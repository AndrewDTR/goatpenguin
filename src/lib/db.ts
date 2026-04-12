import Database from 'better-sqlite3';

const db = new Database('gp.db');
db.pragma('journal_mode = WAL');

db.exec(`CREATE TABLE IF NOT EXISTS games
(
    id              TEXT PRIMARY KEY NOT NULL,
    article         TEXT             NOT NULL,
    friendly        TEXT             NOT NULL,
    categories      TEXT             NOT NULL,
    day             TEXT             NOT NULL UNIQUE,
    dayNum          INT              NOT NULL UNIQUE,
    acceptedGuesses TEXT             NOT NULL,
    blurb           TEXT             NOT NULL,
    img             TEXT,
    imgSize         TEXT
)`);

export default db;
