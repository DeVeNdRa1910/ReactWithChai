import conf from '../conf/conf'
import { Client, Account, ID , Databases , Storage , Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
        //buckt is Storage in Docs
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId, 
                conf.appWriteCollectionId, 
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            // no need to return here
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )

            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error " , error);
            return false;
        }
    }

    //get one post

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error " , error);
            return false;
        }
    }


    //get All posts
    async getPosts(queries = [Query.equal("status", "active")]){
        // is query se hame vo sare posts mil jaynge jinka status active hoga
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error " , error);
            return false;
        }
    }




    //file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error " , error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error " , error);
            return false;
        }
    }

    //no need to do previewFile in async await bcz response of previewFile is very fast
    previewFile(fileId) {
        try {
            return  this.bucket.getFilePreview(
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: previewFile :: error " , error);
            return false;
        }
    }

    
}

const service = new Service()

export default service