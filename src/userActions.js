import { userConstants } from "./userConstants";

export const createUser = user => {
  return {
    type: userConstants.USER_CREATE_SUCCESS,
    user
  };
};

// export const listAclAction = () => {
//   return dispatch => {
//     let allSitesList = undefined;
//     let allAclList = undefined;
//     dispatch(listACLProcessing(true));
//     getACL()
//       .then(
//         response => {
//           const data = response.data.data;
//           if (data) {
//             allAclList = data;
//             dispatch(getAllSitesProcessingAction(true));
//             return getAllSites();
//             // dispatch(listACLSuccess(data));
//           }
//         },
//         error => {
//           dispatch(listACLProcessing(false));
//           dispatch(listACLFailure(error));
//         }
//       )
//       .then(
//         response => {
//           dispatch(getAllSitesProcessingAction(false));

//           if (response !== undefined && response.data && response.data.data) {
//             allSitesList = response.data.data;
//             if (allSitesList !== undefined) {
//               for (let i = 0; i < allAclList.length; i++) {
//                 let aclInfo = allAclList[i];
//                 for (let index = 0; index < allSitesList.length; index++) {
//                   let siteInfo = allSitesList[index];
//                   if (aclInfo.siteId === siteInfo.id) {
//                     aclInfo.siteName = siteInfo.name;
//                     break;
//                   }
//                 }
//               }
//               dispatch(listACLSuccess(allAclList));
//               dispatch(listACLProcessing(false));
//             } else {
//               dispatch(listACLSuccess(allAclList));
//               dispatch(listACLProcessing(false));
//             }
//           } else {
//             dispatch(listACLProcessing(false));
//             if (allSitesList !== undefined) {
//               dispatch(getAllSitesSuccessAction(allSitesList));
//               dispatch(listACLProcessing(false));
//             }
//           }
//         },
//         error => {
//           dispatch(getAllSitesProcessingAction(false));
//           dispatch(getAllSitesFailureAction(error));
//         }
//       );
//   };
// };

// export const listACLProcessing = isProcessing => {
//   return { type: AclConstants.ACL_LIST_PROCESSING, isProcessing };
// };
// export const listACLSuccess = data => {
//   return { type: AclConstants.ACL_LIST_SUCCESS, data };
// };
// export const listACLFailure = error => {
//   return { type: AclConstants.ACL_LIST_FAILURE, error };
// };

// // Create ACL Action
// export const createACLAction = newACLDetails => {
//   return dispatch => {
//     dispatch(createACLProcessing(true));

//     createACLName(newACLDetails).then(
//       response => {
//         const data = response.data;
//         if (data && data.networkAcl) {
//           dispatch(createACLProcessing(false));
//           dispatch(createACLSuccess());
//           let notification = {
//             title: "Success!",
//             message: "Acl created successfully"
//           };
//           dispatch(Notifications.success(notification));
//           history.push("/");
//           history.push("/acl");
//         } else {
//           dispatch(createACLProcessing(false));
//         }
//       },
//       error => {
//         dispatch(createACLProcessing(false));
//         dispatch(createACLFailure(error.response.data.adviceArgs[0]));
//       }
//     );
//   };
// };

// export const createACLProcessing = isProcessing => {
//   return { type: AclConstants.ACL_CREATE_PROCESSING, isProcessing };
// };
// export const createACLSuccess = data => {
//   return { type: AclConstants.ACL_CREATE_SUCCESS };
// };

// export const createACLFailure = error => {
//   return { type: AclConstants.ACL_CREATE_FAILURE, error };
// };
