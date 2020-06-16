import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';

// import the custome component.
import Item from './Item';


// main component to show the flatList
export default function App() {
  const [DATA, loadData] = React.useState({});

  useEffect(() => {
    // Load the data from microservice backend.
    loadData([
      {
        id: 'id_1',
        title: 'First Item',
        image: 'https://img.icons8.com/android/24/000000/bitcoin.png',
      },
      {
        id: 'id_2',
        title: 'Second Item',
        image: 'https://img.icons8.com/ios-filled/50/000000/monero.png',
      },
      {
        id: 'id_3',
        title: 'Third Item',
        image: 'https://img.icons8.com/carbon-copy/100/000000/cash-.png',
      },
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            id={item.id}
            title={item.title}
            onSelect={() => {
              alert(`Selected option : ${item.id}`);
            }}
            imageURI={item.image}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 10,
  },
});
