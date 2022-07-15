db.collection('recipes').get()
    .then(snapshot => {
        snapshot.docs.forEach(item => console.log(item.data()));
    });