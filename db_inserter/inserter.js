export const insertToDB = (db)=> (chunk)=>{
    db.addEntry (chunk); 
}