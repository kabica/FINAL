// import React from 'react';
// import { Button } from './Button';
// import styled from 'styled-components';

// import { Link } from 'react-router-dom';
// import { generateMedia } from 'styled-media-query';
// import xbox from '../images/xbox.png';
// import ps from '../images/ps.png';
// import pc from '../images/pc.png';
// import nintendo from '../images/nintendo.png';

// function TabContentTwo() {
//   return (
//     <TabContainer>
//       <div className="tab-content">
//         <div className="tab-top-content">
//           <span style={{ fontSize: '1.5rem' }}>
//             Watch Gameplays and Game trailers anytime, anywhere — personalized for you.
//           </span>
//           <Link className="btn" to="/login">
//             <Button>try it now</Button>
//           </Link>
//         </div>
//         {/* Tab Bottom Content */}
//         <div className="tab-bottom-content">
//           {/* Tv Image Container */}
//           <div>
//             <img src={pc} />
//             <h3>Connect to your PC</h3>
//           </div>
//           {/* Tablet Image Container */}
//           <div>
//             <img src={ps} />
//             <h3>Connect to your Play Station</h3>
//           </div>
//           {/* Macbook Image Container */}
//           <div>
//             <img src={xbox}/>
//             <h3>Connect to your Xbox</h3>
//           </div>
//           <div>
//             <img src={nintendo} />
//             <h3>Connect to your Nintendo</h3>
//           </div>
//         </div>
//       </div>
//     </TabContainer>
//   );
// }

// export default TabContentTwo;

// //Media
// const customMedia = generateMedia({
//   smDesktop: '1440px',
//   tablet: '900px'
// });

// // Main Tab Content Container
// const TabContainer = styled.div`
//   background: var(--main-deep-dark);
//   .tab-content {
//     margin: 0 10%;
//   }
//   // Tab Top Content
//   .tab-top-content {
//     display: grid;
//     grid-template-columns: repeat(12, 1fr);
//     padding: 2.5rem 0;
//     ${customMedia.lessThan('smDesktop')`
//     grid-template-columns: repeat(2, 1fr);
//     `}
//     ${customMedia.lessThan('tablet')`
//       grid-template-columns: 1fr;
//       text-align: center;
//       row-gap: 1.5rem;
//     `}
//   }
//   // img {
//   //   width: 100%;
//   // }
//   span {
//     grid-column: 1 / 8;
//     ${customMedia.lessThan('tablet')`
//     grid-column: 1 / -1;
//     font-size: 1.5rem;
//   `}
//   }
//   .btn {
//     margin: 0 1.25rem 1.25rem;
//     grid-column: 10 / 12;
//     ${customMedia.lessThan('tablet')`
//     grid-column: 1 / -1;
//     margin-left: 30%;
//     margin-right: 30%;
//     color: white;
//   `}
//   }
//   // Tab Bottom Content
//   .tab-bottom-content {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-gap: 2rem;
//     text-align: center;
//     margin-top: 2rem;
//     ${customMedia.lessThan('tablet')`
//     grid-template-columns: 1fr;
//     `}
//   }
//   h3 {
//     margin: 0.5rem 0;
//   }
//   p {
//     color: var(--main-grey);
//   }
// `;