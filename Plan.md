## Plan for prosjektet

Dette prosjektet er en enkel nettbutikk for Greco Roman‑bryteutstyr. Oppgaven følger alternativ 2 i kravene.

### Teknologier
- **Frontend (modul 2)**: HTML, CSS og ren JavaScript med statiske (hardkodede) data.
- **Database (modul 1)**: PostgreSQL (kjøres via Docker og `docker-compose`).
- **Backend (modul 3, senere)**: Node.js / Express (ikke ferdig i denne modulen, kun planlagt).

### Funksjonalitet (modul 2)
- Vise produkter (sko, singlet, beskyttelse osv.) på en butikk‑side.
- Kunne legge produkter til / fjerne produkter fra en favoritt‑liste (lagres bare i minnet i nettleseren).
- En enkel hjem‑seksjon og kontaktinfo i footer.

### Database (modul 1)
- Lage en enkel databasemodell med tabell for produkter og tabeller for ordre/bestillinger.
- Lage SQL‑script som oppretter tabeller og relasjoner.
- Lage en egen SQL‑fil med eksempler på INSERT/SELECT/UPDATE‑spørringer.
- Lage en `docker-compose.yml` som starter PostgreSQL‑databasen.

### Grov tidsplan
- **Steg 1**: Ferdigstille modul 2 (frontend) og rydde i kommentarer.
- **Steg 2**: Designe databasemodell og skrive `DATABASE.md`.
- **Steg 3**: Lage `schema.sql` med CREATE TABLE‑setninger.
- **Steg 4**: Lage `queries.sql` med dokumenterte SQL‑spørringer.
- **Steg 5**: Lage `docker-compose.yml` for å starte databasen.


