import clientPromise from "@/lib/mongodb";



export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("links")
    const collection = db.collection("linktree")

  const result = await   collection.insertOne({body})

    
   

    console.log(body)
  return Response.json({ success: true, message: "Added", result: result, error: false })
}