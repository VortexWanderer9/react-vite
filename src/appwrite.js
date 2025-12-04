import { Client, Databases, ID, Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID 
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const COLLECTION_VITE = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

   const client = new Client()
    .setEndpoint('https://syd.cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)
    const dataBase = new Databases(client)

export const updataSearchTerm = async (searchTerm, movie) =>{
 
    try {
        const result  = await dataBase.listDocuments(DATABASE_ID, COLLECTION_VITE,  [
            Query.equal(`search_term`, searchTerm)
        ] )

        if(result.documents.length > 0){
            const doc = result.documents[0];
            await dataBase.updateDocument(DATABASE_ID, COLLECTION_VITE, doc.$id, { 
                count: doc.count +1 
            })
        }

        else {
            console.log(movie.id);
            
            await dataBase.createDocument(DATABASE_ID, COLLECTION_VITE, ID.unique(), {
                search_term: searchTerm,
                movie_id: movie.id,
                count: 1,
                poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            })
        }
    } catch (error) {
        console.error(error);
        
    }
    
}

export const getTTradingMovies = async () =>{
    try {
        const result = await dataBase.listDocuments(DATABASE_ID, COLLECTION_VITE, [
            Query.limit(5),
            Query.orderDesc('count')
            
        ])
        return result.documents;
    } catch (error) {
        console.error(error);
    }
}