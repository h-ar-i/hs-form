import { commonAPI } from "./commonAPI";
// import { ServerUrl } from "../services/serverURL";

// register api

export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${ServerUrl}/register`,reqBody)
}

//  get allUsers
export const getAllUsersAPI = async ()=>{
    return await commonAPI("GET",`${ServerUrl}/all-users`,"")
}