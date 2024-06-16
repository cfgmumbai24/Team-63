import React, { useEffect, useState } from "react";
import { getDocs, query, collection, where, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const ViewFamily = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const aa = localStorage.getItem("aadhar");
    console.log(aa);
    const getData = async () => {
      const vendorsCollection = collection(db, "Family");
      const q = query(vendorsCollection, where("volunteer", "==", aa));
      const vendorSnapshot = await getDocs(vendorsCollection);
      vendorSnapshot.forEach((docc) => {
        console.log(docc.data());
        setData((d) => [...d, docc.data()]);
      });
    };
    getData();
  }, []); // Add this useEffect to call getFamilyData on component mount or based on your requirement

  return <div>ViewFamily</div>;
};

export default ViewFamily;
