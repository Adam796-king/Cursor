## Databasemodell – Greco Roman Nettbutikk

Databasen er laget for en enkel nettbutikk. Vi bruker **PostgreSQL**.

### Tabeller

1. **products**
   - `id` (SERIAL, primærnøkkel)
   - `name` (VARCHAR)
   - `price` (INTEGER, pris i øre for å unngå desimaltall)
   - `description` (TEXT)
   - `image_url` (TEXT)

2. **customers**
   - `id` (SERIAL, primærnøkkel)
   - `name` (VARCHAR)
   - `email` (VARCHAR, unik)

3. **orders**
   - `id` (SERIAL, primærnøkkel)
   - `customer_id` (INT, fremmednøkkel → `customers.id`)
   - `created_at` (TIMESTAMP)

4. **order_items**
   - `id` (SERIAL, primærnøkkel)
   - `order_id` (INT, fremmednøkkel → `orders.id`)
   - `product_id` (INT, fremmednøkkel → `products.id`)
   - `quantity` (INT)
   - `unit_price` (INTEGER, pris i øre ved bestillingstidspunktet)

### Enkel ER‑skisse (tekst)

- Én **kunde** kan ha mange **ordrer**:
  - `customers (1) ────< orders (m)`
- Én **ordre** kan ha mange **ordrelinjer**:
  - `orders (1) ────< order_items (m)`
- Én **ordrelinje** peker på ett **produkt**:
  - `products (1) ────< order_items (m)`

Dette gir:
- Mulighet til å liste alle ordre for en kunde.
- Mulighet til å se hvilke produkter som ligger i en bestemt ordre.
- Mulighet til å beregne totalsum på en ordre.


