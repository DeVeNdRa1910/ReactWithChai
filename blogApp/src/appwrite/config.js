import conf from "../conf/conf"
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client)
  }
  // Storage and bucket are same

  async createPost({title, slug, content, featuredImage, status, userId}){
    try {
      //inplace of slug you can give Id.unique() or nanoid() 
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      )
    } catch ( error ) {
      console.log( " Appwrite service :: createPost :: error  " ,error);
    }
  }

  async updatePost(slug, {title , content, featuredImage, status}){
    //slug is basically document id
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseIdm,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      console.log( " Appwrite service :: updatePost :: error  " ,error);
    }
  }

  async deletePost(slug){
    try {
      // no need to return
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true;
    } catch (error) {
      console.log( " Appwrite service :: deletePost :: error  " ,error);
      return false;
    }
  }

  // get One Post
  async getPost(slug){
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log( " Appwrite service :: getPost :: error  " ,error);
      return false;
    }
  }

  // get all post who have active status
  async getPosts(queries = [Query.equal("status","active")]){
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      )
    } catch (error) {
      console.log( " Appwrite service :: getPosts :: error  " ,error);
      return false;
    }
  }

  //file upload methods

  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log( " Appwrite service :: uploadFile :: error  " ,error);
      return false;
    }
  }

  async deleteFile(fileId){
    try {
      return await this.Storage.deleteFile(conf.appwriteBucketId,
      fileId)
    } catch (error) {
      console.log( " Appwrite service :: deleteFile :: error " ,error);
    }
  }

  async getFilePreview(fileId){
    try {
      return await this.Storage.getFilePreview(
        conf.appwriteBucketId,
        fileId
      )
    } catch (error) {
      console.log( " Appwrite service :: getFilePreview :: error " ,error);
    }
  }
}

const service = new Service()

export default service