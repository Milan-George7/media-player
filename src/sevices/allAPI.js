import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

//upload new video
export const uploadNewVideoAPI = async (video)=>{
   return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)
}

//get all video
export const getAllVideoAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")
 }

 //view single video
export const getAVideoAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos/${id}`,"")
 }

 //remove video
export const removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${id}`,{})
 }

 //insert a video to history
export const addVideoToHistoryAPI = async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
 }


 //get a video from history
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
 }

 //remove History
export const removeHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
 }


 //add category
export const addCategoryAPI = async (category)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,category)
 }

 //getALLcategory
export const getALLcategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
 }

 //remove category
 export const removeCategoryAPI = async (id)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
}


//updateCategory
export const updateCategoryAPI = async (id,categoryDetails)=>{
   return await commonAPI("PUT",`${SERVER_URL}/categories/${id}`,categoryDetails)
}