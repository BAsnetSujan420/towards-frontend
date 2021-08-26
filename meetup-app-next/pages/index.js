import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

export default function Home(props) {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_DATA);
  }, []);

  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://mongodb:mongodb@cluster0.n4ga7.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.tile,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
