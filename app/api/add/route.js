import clientPromise from "@/lib/mongodb";



export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("links")
  const collection = db.collection("linktree")

  //if the handle is already claimed you cannot create the bittree

  const doc = await collection.findOne({ handle: body.handle })
  if (doc) {
    return Response.json({ success: false, message: "this Bittree already exists.", result: null, error: true })

  }




  const result = await collection.insertOne({ body })




  console.log(body)
  return Response.json({ success: true, message: "Added", result: result, error: false })
}