import { sql } from './db.js'

// sql`drop table if exists videos`.then(() => {
//     console.log('Tabela apagada')
// })

sql`CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INT
);`
.then(() => {
    console.log('Tabela criada!')
})