# fullcycle-docker-nginx-challenge

## Full Cycle challenge

### Goal

The challenge was to build the software with three services that respect the requirements below.

#### Requirements

- The database should have a table named `people`;
- The node app should insert a name into the database on startup;
- The node app should serve a route on `/` that shows the following content:
  ```html
  <h1>Full Cycle Rocks!</h1>
  {the name list should be rendered here}
  ```
- The node app should only expose port 3000 to the docker network;
- Nginx should map port 8080 to the internal network port 3000.

To run the software just run the following command and access `http://localhost:8080`:

```bash
docker compose up -d
```