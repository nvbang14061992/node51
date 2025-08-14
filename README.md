# 1 - How to use
Clone the repo to your local machine
## 1.1 set up
### install nodemodules
```bash
npm i
```

### prepare .evn file
```env
DATABASE_URL=mysql://users:password@127.0.0.1:dockerPort/databaseName
PORT=input_integer_port_here

ACCESS_TOKEN_SECRET=input_secret_for_accessToken_here
REFRESH_TOKEN_SECRET=input_secret_for_refeshToken_here
ACCESS_TOKEN_EXPIRED_IN=1d_or_10s
REFRESH_TOKEN_EXPIRED_IN=1d
```

## 1.2 Prepare database
Please use the ```\database\baitap_NguyenVanBang.sql``` file for create local database


## 1.3 run
```terminal
npm run prisma
npm run dev
```
**🚀 Note** Please create local mysql database before run ```npm run prisma```, because this app is built as databasae-first approach, not model-first approach.

# 2 API doc
## 2.1 Auth
### 2.1.1 - login
#### endpoint:
```url
/auth/login
```

#### body
```json
example:
{
    "email": "jack@example.com",
    "password": "pass123"
}

```
#### response
```json
{
    "status": "success",
    "statusCode": 200,
    "message": "Login successful",
    "data": {
        "accessToken": "***",
        "refreshToken": "***"
    }
}
```
#### user list to login
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

### 2.1.1 - refesh token