const conf = {
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectId: String(import.meta.env.VITE_APPERITE_PROJECT_ID),
    appWriteDatabaseId: String(import.meta.env.VITE_APPERITE_DATABASE_ID),
    appWriteCollectionId: String(import.meta.env.VITE_APPERITE_COLLECTION_ID),
    appWriteBucketId: String(import.meta.env.VITE_APPERITE_BUCKET_ID)
}
// appWriteUrl is our endPoint


export default conf