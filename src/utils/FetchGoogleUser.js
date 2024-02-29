import { getGoogleUser } from "../redux/actions/userActions";

export const fetchGoogleUserData = async () => {
  try {
    const response = await getGoogleUser();
    console.log("response:", response);
    return response;
  } catch (error) {
    console.error("Error fetching Google user data:", error);
    return null;
  }
};
