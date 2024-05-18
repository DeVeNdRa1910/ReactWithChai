import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({email, password, name}) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        // call another method -> if user created then use login bhi karva do
        return this.login(email, password)
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite service :: account creation :: error ", error);
    }
  } 

  async login({email, password}) {
    try {
      return await this.account.createEmailSession(email, password)
    } catch (error) {
      console.log("Appwrite service :: login :: error ", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get()
    } catch (error) {
      console.log("Appwrite service :: getting current user :: error ", error);
    }

    return null;
  }

  async resetPassword({email}){
    try {
      await this.account.createRecovery(email, "reset password ka route")
    } catch (error) {
      console.log("Appwrite service :: forgot password :: error ", error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions()
    } catch (error) {
      console.log("Appwrite service :: logout :: error ", error);
    }

    return null;
  }

}

const authService = new AuthService()

export default authService;