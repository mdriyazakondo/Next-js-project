import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = params;
  const singleData = await dbConnect("practice_data").findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}

export async function DELETE(req, { params }) {
  const p = params;
  const deleltedData = await dbConnect("practice_data").deleteOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(deleltedData);
}

export async function PATCH(req, { params }) {
  const p = params;
  const postedData = await req.json();
  const filter = { _id: new ObjectId(p.id) };
  const updatedData = await dbConnect("practice_data").updateOne(
    filter,
    { $set: { ...postedData } },
    { upsert: true }
  );

  return Response.json(updatedData);
}
