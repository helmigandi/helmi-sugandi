# Microservices Test

### Execute Apps
- For running from docker:
  ```bash
  docker-compose up -d
  ```
- Manual:
  - install and run MongoDB
  - install and run Redis
  - install NodeJS
  - In the user-service directory:
    ```bash
    npm install
    npm start
    ```
  - In the orchestrator directory:
    ```bash
    npm install
    npm start
    ```

### API:
- get Token:
  ```html
  http://localhost:4000/getToken
  ```
- get all users:
  ```html
  http://localhost:4000/users
  ```
- post create user:
  ```html
  http://localhost:4000/users
  ```
- get user from account number:
  ```html
  http://localhost:4000/users/account/accountNumber
  ```
- get user from identity number:
  ```html
  http://localhost:4000/users/identity/identityNumber
  ```
- update user by _id:
  ```html
  http://localhost:4000/users/_id
  ```
- delete user by _id:
  ```html
  http://localhost:4000/users/_id
  ```