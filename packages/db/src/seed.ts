// import { prisma } from "./index";

// const DEFAULT_POSTS = [
//   {
//     name: "post-01",
//   },
//   {
//     name: "post-02",
//   },
// ] as Array<{ name: string }>;

// (async () => {
//   try {
//     await Promise.all(
//       DEFAULT_POSTS.map((post) =>
//         prisma.post.upsert({
//           where: {
//             id: 0,
//           },
//           update: {
//             ...post,
//           },
//           create: {
//             ...post,
//           },
//         }),
//       ),
//     );
//     console.log("seed completed.✅");
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   } finally {
//     await prisma.$disconnect();
//     console.log("db disconnected...");
//   }
// })();
