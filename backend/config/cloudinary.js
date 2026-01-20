import {v2 as cloudinary} from "cloudinary"


const connectCloudinary = async()=>{
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_APL_KEY,
        api_secret_key:process.env.CLOUDINARY_SECRECT_KEY

    })
}

export default connectCloudinary