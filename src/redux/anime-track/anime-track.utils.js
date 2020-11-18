// import {pushGalleryToFireStore} from '../../firebase/firebase.utils';
// export const addItemToGallery = (item,gallery)=>{
//     try{
//         if(gallery[item.mal_id]===undefined)
//         {
//         gallery[item.mal_id]=item;
//         }
//     return {...gallery};
//     }catch(error){
//         console.log(error);
//     }
// }

// export const removeItemFromGallery=(item,gallery)=>{
//     try{
//     if(gallery[item.mal_id]!==undefined)
//     {
//         delete gallery[item.mal_id];
//     }
//     if(Object.keys(gallery).length==0)
//     {
//         return {};
//     }
//     return {...gallery};
//     }catch(error){
//         console.log(error);
//     }
// }

// export const updateFirestoreGallery=(userId,gallery)=>{
//     console.log(userId);
//     console.log(gallery);
//     pushGalleryToFireStore(userId,gallery)
// }