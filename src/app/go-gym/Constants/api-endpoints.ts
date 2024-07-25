export const GYM_API_ENDPOINTS = {
  //Go-gym end-points
  DELETE_GYM_ITEM: '/GymItem/DeleteGymItem',
  GET_ALL_GYM_ITEMS: '/GymItem/GetAllGymItems',
  GET_GYM_ITEMS_BY_USER_ID: '/GymItem/GetGymItemsByUserId',
  GET_GYM_ITEM_BY_ID: '/GymItem/GetGymItemById',
  CREATE_GYM_ITEM: '/GymItem/CreateGymItem',
  UPDATE_GYM_ITEM: '/GymItem/UpdateGymeItem',

};

export const USER_API_ENDPOINTS = {
  //User endpoints
  LOGIN: '/User/RequestToken',
  CREATE_USER: '/User/CreateUser',
  UPDATE_USER: '/User/UpdateUserDetails',
  GET_USER_DETAILS: '/User/GetUserByEmailorUsername',
  RESET_PASSWORD: '/User/ResetPassword',
};