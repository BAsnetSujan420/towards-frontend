import { useRouter } from "next/router";
import NewMeetup from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    router.push("/");
  };

  return <NewMeetup onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
