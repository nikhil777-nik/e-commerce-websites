
import {v2 as cloudinary} from "cloudinary"
// funtion for add product 

const addProducts =async (req,res)=>{
    try{
        const{name,description,price,category,subCategory,sizes,bestseller}=req.body

        const image1=req.files.image1 && req.files.image1[0]
        const image2=req.files.image2 && req.files.image2[0]
        const image3=req.files.image3 && req.files.image3[0]
        const image4=req.files.image4 && req.files.image4[0]

         const images =[image1,image2,image3,image4].filter((item)=>item !== undefined)

         let imageurl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path)
            })
         )

        console.log(name,description,price,category,subCategory,sizes,bestseller);
        console.log(images)

        res.json({})
        

    }
    catch(error){
        res.json({success:false,Message:error.Message})
    }
}

// funtion for list product 

const listProducts=async(req,res)=>{

}


// funtion for remove product 

const removeProducts=async(req,res)=>{
    
}


// funtion for single product info 

const singleProduct=async(req,res)=>{
    
}

export {addProducts,listProducts,removeProducts,singleProduct}



