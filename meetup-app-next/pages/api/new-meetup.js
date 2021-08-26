import { MongoClient } from "mongodb";

//POST/api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    //storing data in Database
    const client = await MongoClient.connect(
      "mongodb+srv://mongodb:mongodb@cluster0.n4ga7.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({ data });

    client.close();

    res.status(201).json({ message: "Meetup Inserted" });
  }
}
