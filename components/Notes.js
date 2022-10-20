import React from 'react'
import { View, Text, ScrollView, RelationLayout } from 'react-native'
import AddNote from './AddNote'
import Note from './Note'

const Notes = ({ posts, handelAddnote, handelDeleteNote }) => {

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 140 }} style={{ padding: 10 }}>
            {
                posts.map((post) => (
                    <Note
                        post={post}
                        key={post.id}
                        text={post.text}
                        date={post.date}
                        handelDeleteNote={handelDeleteNote}
                    // handelEditNote={editNote}
                    />
                ))

            }
            < AddNote handelAddnote={handelAddnote} />
        </ScrollView >
    )
}

export default Notes;