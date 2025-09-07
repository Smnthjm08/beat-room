// "use server"

// import { auth } from "@workspace/auth/server";
// import { prisma } from "@workspace/db"

// export default async function createSpace(data: string){
//     try {
//         const session = await auth.api.getSession({
//     query: {
//         disableCookieCache: true,
//     }, 
//     headers: re.headers, // pass the headers
// });
//         const space = await prisma.space.create({
//             data: {
//                 title: data,
//                 createdBy: 
//             }
//         })
//     } catch (error) {
        
//     }
// }