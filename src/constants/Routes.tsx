// all of the possible routes of the webpage
// add or edit these routes if you add new page to the pages folder
interface RoutesProps {
  home: string;
  property: string;
  lead: string;
  addProperty: string;
  allProperties: string;
  login: string;
  register: string;
  profile: string;
  aboutUs: string;
}

export const Routes: RoutesProps = {
  home: "/", // home route

  // Properties routes
  property: "/property/", // individual property view [id] means dynamic route , append id at the end
  lead: "/lead/", // individual property view [id] means dynamic route , append id at the end
  addProperty: "/addproperty/", // add individual property page
  allProperties: "/allproperties/", // view all properties view

  // Auth pages route
  login: "/auth/login", // view all properties view
  register: "/auth/register", // view all properties view

  // Profile pages route
  profile: "/profile/", // view user profile [id] means dynamic route , append id at the end

  //About us page
  aboutUs: "/aboutus", // view user profile [id] means dynamic route , append id at the end
};
