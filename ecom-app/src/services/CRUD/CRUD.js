import firestore from "../firestore/firestore";

// get specific product using ID

const cleanRecord = (docSnapshot) => ({
  id: docSnapshot.id,
  ...docSnapshot.data(),
});

export const findProduct = async (id) => {
  const coldRef = firestore.collection("products");
  const docRef = coldRef.doc(id);
  const docSnap = await docRef.get();
  return cleanRecord(docSnap);
};
