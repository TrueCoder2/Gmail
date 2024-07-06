
import React, { useEffect, useState } from 'react'
import Email from './Email'
import { db } from '../firebase';
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/slice';

const Allemails = () => {
  const { searchText, emails } = useSelector(store => store.app);
  const [filterEmail, setFilterEmail] = useState(emails);
  const dispatch = useDispatch();


  useEffect(() => {
    const q = query(collection(db, "emailsend"), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(setEmails(allEmails));
    });
 
    return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
  }, []);


  useEffect(() => {
    const filteredEmail = emails?.filter((email) => {
      return email.subject.toLowerCase().includes(searchText.toLowerCase()) || email.to.toLowerCase().includes(searchText.toLowerCase()) || email.message.toLowerCase().includes(searchText.toLowerCase())
    });
    setFilterEmail(filteredEmail);
  }, [searchText, emails]);

  return (
    <div>
       {filterEmail?.map((email) => (
        <Email key={email.id} email={email} />
      ))}
    </div>
  )
}

export default Allemails