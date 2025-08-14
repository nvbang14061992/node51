# 1 - How to use
> [!NOTE]
> Clone the repo to your local machine
## 1.1 set up
### install nodemodules
```bash
npm i
```

### prepare .env file
```properties
DATABASE_URL=mysql://users:password@127.0.0.1:dockerPort/databaseName
PORT=input_integer_port_here

ACCESS_TOKEN_SECRET=input_secret_for_accessToken_here
REFRESH_TOKEN_SECRET=input_secret_for_refeshToken_here
ACCESS_TOKEN_EXPIRED_IN=1d_or_10s
REFRESH_TOKEN_EXPIRED_IN=1d
```
> [!CAUTION]
> If you use this repository for your own project, do not public ```.env```!!!

## 1.2 Prepare database
> [!NOTE]
> Please use the ```\database\baitap_NguyenVanBang.sql``` file for create local database


## 1.3 run
```terminal
npm run prisma
npm run dev
```
> [!NOTE]
> Please create local mysql database before run ```npm run prisma```, because this app is built as databasae-first approach, not model-first approach.

# 2 API doc
## Check server
#### endpoint
```api
GET api/
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|

#### header
```None```

#### body
```None```

### 2.2.1 - login
#### endpoint:
```api
POST api/auth/login
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|


#### header
```None```

#### body
```None```
#### response
```
"Check server working OK!!!"
```
## 2.1 Auth
### 2.1.1 - register
#### endpoint
```api
POST api/auth/register
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|

#### header
```None```

#### body
```None```

### 2.2.1 - login
#### endpoint:
```api
POST api/auth/login
```

for example
```api
localhost:3000/api/auth/login
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|


#### header
```None```

#### body
***example***
```json
{
    "email": "jack@example.com",
    "password": "pass123"
}

```
#### response
***example***
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "Login successfully",
    "data": {
        "accessToken": "***",
        "refreshToken": "***"
    }
}
```
#### user list to login
> [!NOTE]
> You can use data below to login.
user_id| full_name|email|password
------|------|------|------|
1	|Alice Smith|	alice@example.com|	pass123
2	|Bob Johnson|	bob@example.com|	pass123
3	|Carol Lee|	carol@example.com|	pass123
4	|David Kim|	david@example.com|	pass123
5	|Eva Brown|	eva@example.com|	pass123
6	|Frank Wright|	frank@example.com|	pass123
7	|Grace Hall|	grace@example.com|	pass123
8	|Henry Young|	henry@example.com|	pass123
9	|Isla King|	isla@example.com|	pass123
10	|Jack Green|	jack@example.com|	pass123

### 2.3.1 - refesh token
#### endpoint:
```api
POST api/auth/refresh-token
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|


#### header
```None```

#### body
```json
example:
{
    "accessToken": "{{accessToken}}",
    "refreshToken": "{{refreshToken}}"  
}

```
#### response
***example***
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "Refresh accessToken successfully",
    "data": {
        "accessToken": "***",
        "refreshToken": "***"
    }
}
```

## 2.2 user
### 2.2.1 get users
#### endpoint:
```api
GET api/user/
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|


#### header
|Header|Type|Description|
|---------|-----------|-------|
|Authorization|Bearer Token|use accessToken|

#### body
```json
None
```

### 2.2.2 get user likes
#### endpoint:
```api
GET api/user/likes
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|


#### header
|Header|Type|Description|
|---------|-----------|-------|
|Authorization|Bearer Token|use accessToken|

#### body
```json
None
```

#### response
***example***
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "User did not like any restaurant",
    "data": []
}
```

### 2.2.3 get user ratings
#### endpoint:
```api
GET api/user/ratings
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|


#### header
|Header|Type|Description|
|---------|-----------|-------|
|Authorization|Bearer Token|use accessToken|

#### body
```json
None
```

#### response
***example***
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "User did not rate any restaurant",
    "data": []
}
```

## 2.3 restaurant
### 2.3.1 get restaurants
#### endpoint:
```api
GET api/res/
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|


#### header
|Header|Type|Description|
|---------|-----------|-------|
|Authorization|Bearer Token|use accessToken|

#### body
```json
None
```

### 2.3.2 get rastaurant likes
#### endpoint:
```api
GET api/res/:id/likes
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|

#### Path variable
|Variable|Description|Example|
|---------|-----------|-------|
|id|restaurant id, use ```get restaurants``` endpoint to get valid ids|3|

#### header
|Header|Type|Description|
|---------|-----------|-------|
|Authorization|Bearer Token|use accessToken|

#### body
```json
None
```

#### response
***example***
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "Likes retrieved successfully",
    "data": [
        {
            "user_id": 1,
            "res_id": 1,
            "date_like": "2025-07-01T00:00:00.000Z",
            "id": 1
        },
        {
            "user_id": 4,
            "res_id": 1,
            "date_like": "2025-07-04T00:00:00.000Z",
            "id": 7
        },
        ...
    ]
}
```

### 2.3.3 get rastaurant ratings
#### endpoint:
```api
GET api/res/:id/ratings
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|

#### Path variable
|Variable|Description|Example|
|---------|-----------|-------|
|id|restaurant id (integer) |3|

> [!TIP]
> Use ```get restaurants api``` to get valid id.

#### header
|Header|Type|Description|
|---------|-----------|-------|
|Authorization|Bearer Token|use accessToken|

#### body
```json
None
```

#### response
***example***
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "Ratings retrieved successfully",
    "data": [
        {
            "user_id": 1,
            "res_id": 1,
            "amount": 5,
            "date_rate": "2025-07-01T00:00:00.000Z",
            "id": 1
        },
        {
            "user_id": 4,
            "res_id": 1,
            "amount": 5,
            "date_rate": "2025-07-04T00:00:00.000Z",
            "id": 4
        },
        {
            "user_id": 7,
            "res_id": 1,
            "amount": 5,
            "date_rate": "2025-07-07T00:00:00.000Z",
            "id": 7
        }
    ]
}
```

## 2.4 like
### 2.4.1 toggle like
#### endpoint:
```api
POST api/like/toggle-like
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|

#### Path variable
|Variable|Description|Example|
|---------|-----------|-------|
|None|None|None|

#### header
|Header|Type|Description|
|---------|-----------|-------|
|Authorization|Bearer Token|use accessToken|

#### body
```json
{
    "restaurantId": 1
}
```
> [!TIP]
> Use ```get restaurants api``` to get valid restaurantId.

#### response
***example***
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "Like toggled successfully",
    "data": {
        "message": "Like added",
        "like": {
            "user_id": 10,
            "res_id": 1,
            "date_like": "2025-08-14T16:14:07.000Z",
            "id": 16
        }
    }
}
```

## 2.5 rating
### 2.5.1 create rating
#### endpoint:
```api
POST api/rating/create-rate
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|

#### Path variable
|Variable|Description|Example|
|---------|-----------|-------|
|None|None|None|

#### header
|Header|Type|Description|
|---------|-----------|-------|
|Authorization|Bearer Token|use accessToken|

#### body
```json
{
    "restaurantId": 1,
    "amount": 5
}
```
> [!TIP]
> Use ```get restaurants api``` to get valid restaurantId.
> Use integer for ```"amount"```

#### response
***example***
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "You have already rated this restaurant",
    "data": null
}
```

## 2.6 order
### 2.6.1 get foods
#### endpoint:
```api
GET api/order/foods
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|


#### header
|Header|Type|Description|
|---------|-----------|-------|
|Authorization|Bearer Token|use accessToken|

#### body
```json
None
```
#### response
***example***
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "Get all foods successfully",
    "data": [
        {
            "food_id": 1,
            "food_name": "Spaghetti Carbonara",
            "image": "carbonara.jpg",
            "price": 12.99,
            "descr": "Classic Italian pasta",
            "type_id": 1
        },
        {
            "food_id": 2,
            "food_name": "Cheeseburger",
            "image": "cheeseburger.jpg",
            "price": 9.49,
            "descr": "Beef patty with cheese",
            "type_id": 2
        },
        ...
    ]
}
```

### 2.6.3 get subfoods
#### endpoint:
```api
GET api/order/subfoods
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|


#### header
|Header|Type|Description|
|---------|-----------|-------|
|Authorization|Bearer Token|use accessToken|

#### body
```json
None
```
#### response
***example***
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "Get all foods successfully",
    "data": [
        {
            "sub_id": 1,
            "sub_name": "Extra Cheese",
            "sub_price": 1.5,
            "food_id": 1
        },
        {
            "sub_id": 2,
            "sub_name": "Avocado Topping",
            "sub_price": 2,
            "food_id": 4
        },
        ...
    ]
}
```

### 2.6.2 create new order
#### endpoint:
```api
POST api/order/create-order
```
#### Parameter
|Parameter|Description|Example|
|---------|-----------|-------|
|None|None|None|

#### Path variable
|Variable|Description|Example|
|---------|-----------|-------|
|None|None|None|

#### header
|Header|Type|Description|
|---------|-----------|-------|
|Authorization|Bearer Token|use accessToken|

#### body
```json
{
    "food_id": 5,
    "arr_sub_id": 2,
    "amount": 10
}
```
> [!TIP]
> Use [get foods api](###2.6.1-get-foods) to get valid ```food_id```.
> Use ```get subfoods api``` to get valid ```arr_sub_id```.

#### response
***example***
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "Order created successfully",
    "data": {
        "user_id": 10,
        "food_id": 5,
        "amount": 10,
        "code": "ORD2046638",
        "arr_sub_id": "2",
        "id": 28
    }
}
```

> [!TIP]
> You can use export of postman collection in [baitap_res_node51.postman_collection.json](baitap_res_node51.postman_collection.json) for testing api.
> This export including some scripts and global variables for avoiding some rework of login, get tokens
