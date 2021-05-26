// import { IoEllipse } from "react-icons/io5";
// import { MdLocationOn } from "react-icons/md";

// const UserDashBoard = () => {
//   return (
//     <div>
//       <div className="container m-auto font-Inter ">
//         <div className="flex justify-between mt-20 font-bold ">
//           <h1 className="text-2xl">{user.profile.fullName}</h1>
//           <h3 className="text-base text-recipeRed-800 bg-opacity-69">
//             200 recipies
//           </h3>
//         </div>

//         <div className="flex mt-7 text-base mb-7 font-bold">
//           <div className="flex ">
//             <MdLocationOn />
//             <h2 className="ml-3">{user.profile.location}</h2>
//           </div>

//           <div className="flex text-recipeRed-800 pl-10">
//             <IoEllipse className="mr-3 mt-1" />
//             <button className="focus:outline-none" onClick={toggleFollow()}>
//               Follow
//             </button>
//           </div>
//         </div>

//         {/* <h4 className="mb-7">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
//               explicabo sit commodi? Quibusdam vel quasi voluptate odit autem
//               obcaecati culpa nesciunt eius corporis. Neque molestiae quis quae,
//               eaque enim aliquam.
//             </h4> */}
//         {token ? (
//           <div className="bg-dashboard-100 bg-opacity-1 h-48 shadow-2xl mb-10">
//             <h4 className="text-white text-base font-bold pl-28 pt-3">
//               Your Dashboard
//             </h4>
//             <h5 className="text-white text-sm italic pl-28 pt-2">
//               private to you
//             </h5>
//             <div className="bg-white h-24 w-3/4 ml-32 mt-4 shadow-2xl flex justify-between">
//               <div className="pl-5 pt-7">
//                 <h4 className="text-sm font-bold">204</h4>
//                 <h5 className="text-xs italic pt-2">profile views</h5>
//               </div>
//               <div className=" pt-7">
//                 <h4 className="font-bold">1700</h4>
//                 <h5 className="text-xs italic pt-2">post views</h5>
//               </div>
//               <div className="pr-5 pt-7">
//                 <h4 className="font-bold">368</h4>
//                 <h5 className="text-xs italic">post comments</h5>
//               </div>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>

//       <div className="container m-auto shadow-lg mb-20">
//         <h3 className="text-activity-300 text-lg font-bold">Activity</h3>
//         <h4 className="text-recipeRed-800 text-sm bg-opacity-69">
//           35,986 followers
//         </h4>

//         <h2 className="text-center text-base font-bold mb-5">
//           Learn how to prepare Pizza with Thelma Bonney
//         </h2>
//         <div className="grid grid-cols-3 gap-5">
//           <img
//             src="images/pizzaa1.jpg"
//             alt=""
//             className="h-40 w-40 rounded-full mx-20"
//           />
//           <img
//             src="images/pizzab.jpg"
//             alt=""
//             className="h-40 w-40 rounded-full ml-10 "
//           />
//           <img
//             src="images/pizza.jpg"
//             alt=""
//             className="h-40 w-40 rounded-full "
//           />
//         </div>

//         <div className="grid grid-cols-3 gap-3 mt-20  w-full">
//           <div className="grid grid-cols-2 w-full">
//             <img
//               src="images/pizza3.jpg"
//               alt=""
//               className="w-40 h-40 rounded-full"
//             />

//             <div>
//               <h3 className="text-sm">Vegetable Pizza</h3>
//               <div className="flex">
//                 <h3 className="text-xs">751 reactions</h3>
//                 <h3 className="text-xs">300 comments</h3>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 w-full">
//             <img
//               src="images/pizza4.jpg"
//               alt=""
//               className="w-40 h-40 rounded-full"
//             />
//             <div>
//               <h3 className="text-sm">Beef Pizza</h3>
//               <div className="flex">
//                 <h3 className="text-xs ">123 reactions</h3>
//                 <h3 className="text-xs ">78 comments</h3>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 w-full">
//             <img
//               src="images/pizzaa5.jpg"
//               alt=""
//               className="w-40 h-40 rounded-full"
//             />

//             <div className="mt-16">
//               <h3 className="text-sm">Chicken Pizza</h3>
//               <div className="flex">
//                 <h3 className="text-xs ">412 reactions</h3>
//                 <h3 className="text-xs">123 comments</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashBoard;
