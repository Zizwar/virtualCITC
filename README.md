# virtualCITC by Dndoon


1- https://deno.land/#installation

2- clone: 
```sh 
git clone https://github.com/ibrahimbidi/virtualCITC.git 
```

3- terminal: 
```sh
deno run --allow-net --allow-env --allow-read --allow-write --allow-plugin .\app.ts
```
### Post Driver
CREATE,EDIT,DEACTIVATE,...
```sh
http://localhost:2020/api/Driver/create || http://localhost:2020/api/Driver/edit || ...
```
param:
```sh
{
    "credential": {
        "companyName": "******",
        "password": "*********="
    },
    "driver": {
        "nationalityId": "xn0UMTPfYuc=",
        "identityTypeId": "NV25GlPuOnQ=",
        "idNumber": "1000011021",
        "dateOfBirth": 19771023,
        "registrationDate": "2020-04-02T17:41:59.277Z",
        "mobile": "012547845",
        "regionId": "NV25GlPuOnQ=",
        "carTypeId": "oIcaYzeDfQQ=",
        "cityId": "NV25GlPuOnQ=",
        "carNumber": "12364272"
    }
}
```
respense:
```sh
{
    "status": true
    "data": {
        "refernceCode": "mt4zwgs3g0f",
        "body": {...driver }
            
        }
    },
   
}
```
### Post Order
CREATE,ACCEPT,CANCEL,REJECT,...
```sh
http://localhost:2020/api/Order/create || http://localhost:2020/api/Order/cancel || ...
```
### ...
