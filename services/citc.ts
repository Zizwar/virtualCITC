
import { Response, RouteParams, Request } from "./../deps.ts";
//import database from "../config/db.ts";
/*
const  db = database.getDatabase;
const orderDB = db.collection("order");
const driverDB = db.collection("driver");
*/
export const orderService = async ({
    params,
    response,
    request,
}: {
    params: RouteParams;
    response: Response;
    request: Request;
}) => {
    
    const { id:typeOrder } = params;

    let body:any = await request.body();
    body = body.value;
    const refernceCode = typeOrder!=="cancel" ?Math.random().toString(36).substring(2):"cancel";
  
    const data = {refernceCode,body};
    console.log({data});

    //const insertOrder = await orderDB.insertOne(data);
    //console.log('insertDB',{insertOrder})
    const status = true;
    response.body = {typeOrder,status,data};
    response.status = 200;

};
///
export const driverService = async ({
    params,
    response,
    request,
}: {
    params: RouteParams;
    response: Response;
    request: Request;
}) => {
    const { id:typeDriver } = params;
    let body:any = await request.body();
    body = body.value;
    const refernceCode = Math.random().toString(36).substring(2);
    const data = {refernceCode,body};
    console.log({data});
    const status = true;
    response.body = {typeDriver,status,data};
    response.status = 200;

};
