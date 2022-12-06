// delete Item in local Storage
const deleteUser = () => {
  console.log("user deleting in process");
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  return true 
};

export {  deleteUser };
