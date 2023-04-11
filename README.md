# Project Title

Online Shopping API'S

This project developed using node, express and mongo. It provides apis related to online shoppping.

## Authors

- [@Salma Khanum](https://github.com/salmakhanum401)

## API Reference

#### Get all products items

```http
  GET /products
```

##### Response

```
    [{
        productName: String,
        imgUrl: String,
        price: String,
        description:  String,
        rating: String
    }]
```

#### Get Single product

```http
  GET /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

##### Response

```
    {
        productName: String,
        imgUrl: String,
        price: String,
        description:  String,
        rating: String
    }
```

#### Create User

```http
  POST /users
```

| Body              | Type     | Description                               |
| :---------------- | :------- | :---------------------------------------- |
| `firstName`       | `string` | **Required**. first name of the user      |
| `lastName`        | `string` | **Required**. last name of the user       |
| `emailId`         | `string` | **Required**. emailId of the user         |
| `password`        | `string` | **Required**. password of the user        |
| `confirmPassword` | `string` | **Required**. confirmPassword of the user |
| `gender`          | `string` | **Required**. gender of the user          |
| `phoneNumber`     | `number` | **Required**. phoneNumber of the user     |
| `address`         | `string` | **Required**. address of the user         |

#### Get Single User

```http
  GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

##### Response

```
    {
        firstName: String,
        lastName: String,
        emailId: String,
        password:  String,
        confirmPassword: String,
        gender: String,
        phoneNumber: Number,
        address: String,
    }
```

### Create Order

```http
  POST /orders
```

| Body | Type | Description |
| :--- | :--- | :---------- |
|`userId`|`string`|**Required**. user Id|
|`products`|`string`|**Required**. products Id|


# Project Title

Online Shopping API'S

This project developed using node, express and mongo. It provides apis related to online shoppping.

## Authors

- [@Salma Khanum](https://github.com/salmakhanum401)

## API Reference

#### Get all products items

```http
  GET /products
```

##### Response

```
    [{
        productName: String,
        imgUrl: String,
        price: String,
        description:  String,
        rating: String
    }]
```

#### Get Single product

```http
  GET /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

##### Response

```
    {
        productName: String,
        imgUrl: String,
        price: String,
        description:  String,
        rating: String
    }
```

#### Create User

```http
  POST /users
```

| Body              | Type     | Description                               |
| :---------------- | :------- | :---------------------------------------- |
| `firstName`       | `string` | **Required**. first name of the user      |
| `lastName`        | `string` | **Required**. last name of the user       |
| `emailId`         | `string` | **Required**. emailId of the user         |
| `password`        | `string` | **Required**. password of the user        |
| `confirmPassword` | `string` | **Required**. confirmPassword of the user |
| `gender`          | `string` | **Required**. gender of the user          |
| `phoneNumber`     | `number` | **Required**. phoneNumber of the user     |
| `address`         | `string` | **Required**. address of the user         |

#### Get Single User

```http
  GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

##### Response

```
    {
        firstName: String,
        lastName: String,
        emailId: String,
        password:  String,
        confirmPassword: String,
        gender: String,
        phoneNumber: Number,
        address: String,
    }
```






## Installation

* Download and Install Nodejs from the Nodejs website
* And run the below command in project root directory


```bash
  npm install
```

Then to run the project run the below command

```bash
  npm start
```
## Docker Installation 
* Download and install Docker Desktop 
* Create a file with the name Dockerfile and paste below code in it
``` 
FROM node:16
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 8000
CMD npm start
```
### Build Docker image using below command
```
docker build -t <your_tag_name> .
```

 ### Run the Docker image inside the container using below command
 ```
 docker run -d -p 9090:8000 <your_tag_name>
 ```
### Open the below url to access the application
```
http://localhost:9090
```



    