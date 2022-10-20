import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Nav from './components/Nav'
import Notes from './components/Notes';
import axios from "axios";
import { customAlphabet } from 'nanoid/non-secure';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10)
  const LOCAL_STORAGE_KEY = "reactnative-allposts";
  const [posts, setPost] = useState([{
    id: nanoid(),
    text: 'Hi, i am krishnendu. This application for Demo perpose. Yes you can delete it :)',
    date: '20/10/2022',
  }]);
  const [serachItem, setSearchItem] = useState("");

  useState(() => {
    const getPost = async () => {
      const value = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
      console.log(value)
      if (value) {
        setPost(JSON.parse(value));
      }
    }
    getPost();
  }, [posts]);
  useEffect(() => {
    try {
      AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
    } catch (e) {
      console.log(e);
    }
  }, [posts])



  const handelSeachNote = (val) => {
    setSearchItem(val);
  }

  const deleteNote = (id) => {
    const newNotes = posts.filter((note) => note.id !== id);
    setPost(newNotes);
  };


  const addNote = (text) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    let date = dd + "/" + mm + "/" + yyyy;
    const newPost = {
      id: nanoid(),
      text: text,
      date: date,
    };

    const newPosts = [...posts, newPost];
    setPost(newPosts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Nav handelSeachNote={handelSeachNote} />
      </View>
      <Notes
        posts={posts.filter((post) =>
          post.text.toLowerCase().includes(serachItem.toLowerCase())
        )}
        handelAddnote={addNote}
        handelDeleteNote={deleteNote}
      />

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // fontFamily: "Montserrat",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  items: {
    marginBottom: 50
  },
  titleContainer: {
    backgroundColor: '#EBEAED',
  }
});
