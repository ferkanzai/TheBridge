import firebase from './';

const teams = () => firebase.firestore().collection('teams');

export const getTeams = async () => {
  const snapshot = await teams().get();

  if (snapshot.empty) {
    return [];
  }

  const documents = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return documents;
};

export const getTeamsWithChampionships = async () => {
  const snapshot = await teams()
    .where('championsips', '!=', [])
    .get();

  if (snapshot.empty) {
    return [];
  }

  const documents = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return documents;
};
