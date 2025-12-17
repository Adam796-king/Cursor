## Greco Roman Nettbutikk – modul 1 og 2

Dette er et lite fullstack‑prosjekt der temaet er en nettbutikk for Greco Roman‑bryting. Prosjektet følger alternativ 2 i oppgavebeskrivelsen (eget konsept).

### Konsept
- Nettbutikk for bryteutstyr: brytesko, singlet, hodebeskyttelse, wraps og treningsbag.
- Brukeren kan bla i produkter, og merke noen som **favoritter**.
- I modul 2 er dataene **statiske** (hardkodet i JavaScript), og det er ingen ekte innlogging eller lagring i database ennå.

### Modul 2 – Frontend
- **Filer**:
  - `index.html` – hovedside med:
    - Hjem‑seksjon (tittel, kort tekst og bilde).
    - Butikk‑seksjon med produkter.
    - Favoritter‑seksjon som viser utvalgte produkter.
    - Footer med enkel kontaktinformasjon.
  - `styles.css` – stilark med layout, farger og noen enkle animasjoner (hover‑effekter, fade‑inn).
  - `script.js` – JavaScript som:
    - Lager produktene i butikkseksjonen fra en statisk liste (`products`‑array).
    - Lar brukeren legge til / fjerne produkter fra favorittlisten.
    - Viser favoritter i en egen seksjon.
    - Har enkel smooth scroll mellom seksjoner.
    - Lager en enkel “custom cursor” (rød sirkel) på desktop.

#### Slik kjører du frontend
1. Åpne prosjektmappen i en IDE (VS Code / Cursor).
2. Åpne `index.html` i nettleseren (dobbelklikk, eller høyreklikk → “Open with Live Server” hvis du bruker en slik utvidelse).
3. Bla ned til **Butikk** og **Favoritter** for å teste funksjonaliteten.

### Modul 1 – Database
Modul 1 bruker PostgreSQL som database og Docker/Docker‑compose for å starte databasen.

- **Filer**:
  - `DATABASE.md` – beskrivelse av databasemodellen (ER‑skisse med tabeller og relasjoner).
  - `db/schema.sql` – SQL‑fil som oppretter tabellene i databasen.
  - `db/queries.sql` – SQL‑fil med eksempler på vanlige spørringer (INSERT/SELECT/UPDATE/DELETE).
  - `docker-compose.yml` – starter PostgreSQL‑database med én kommando.

#### Slik starter du databasen lokalt
Forutsetter at du har **Docker** og **docker‑compose** installert.

```bash
docker-compose up -d
```

Dette starter en PostgreSQL‑container. Når backend (modul 3) lages senere, kan den koble seg til denne databasen.

### Videre arbeid (modul 3, senere)
- Lage en Node.js/Express backend som:
  - Leser produkter fra databasen.
  - Lagrer ordre/bestillinger i databasen.
  - Eksponerer API‑endepunkter som frontend kan bruke (GET/POST).


