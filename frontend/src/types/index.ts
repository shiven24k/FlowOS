interface iUserSignupdata {
  name: string;
  email: string;
  password: string;
}
interface iUserLogindata {
 identifier:string;
  password: string;
}

export { iUserSignupdata,iUserLogindata };
