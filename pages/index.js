import MeetUpList from "../components/meetups/meetlist";

export default function HomePage() {
  return (
    <div className=" grid grid-cols-4 gap-3 py-6">
        <MeetUpList />
    </div>
  )
}
