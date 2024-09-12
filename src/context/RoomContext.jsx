import { createContext, useContext, useEffect, useState } from "react";
import { roomData } from "../db/data";


const RoomInfo = createContext();


export const RoomContext = ({ children }) => {

  const [rooms, setRooms] = useState(roomData);
  const [loading, setLoading] = useState(false);

  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kid');
  const [total, setTotal] = useState(0);


  useEffect(() => { setTotal(+adults[0] + +kids[0]) });


  const resetRoomFilterData = () => {
    setAdults('1 Adult');
    setKids('0 Kid');
    setRooms(roomData)
  };


  // user click at --> Check Now button... then execute this function...
  const handleCheck = (e) => {
    e.preventDefault();
    setLoading(true);

    // filter rooms based on total persons...
    const filterRooms = roomData.filter(room => total <= room.maxPerson)

    setTimeout(() => {
      setLoading(false);
      setRooms(filterRooms); // refresh UI with new filtered rooms after 3 second...
    }, 3000);
  }


  const shareWithChildren = {
    rooms, loading,
    adults, setAdults,
    kids, setKids,
    handleCheck,
    resetRoomFilterData,
  };


  return (
    <RoomInfo.Provider value={shareWithChildren}>
      {
        children
      }
    </RoomInfo.Provider>
  )
}

export const useRoomContext = () => useContext(RoomInfo);