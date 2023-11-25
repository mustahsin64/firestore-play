import React, { useState,useEffect } from 'react'

import firebase, { addLink } from './firebase'

import { fetchDocs } from './firebase'
import { doc } from 'firebase/firestore';

function App() {

  const [link, setLink] = useState('');
  const [topic, setTopic] = useState('');
  const [tags, setTags] = useState('');

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const handleSubmit = () => {
    // console.log('Link:', link);
    // console.log('Topic:', topic);
    // console.log('Tags:', tags);

    addLink(link,topic,tags).then(() => {
      setLink('');
      setTopic('');
      setTags('');
    })
  };

  useEffect(() => {
    const fetchData = async () => {
      const docs = await fetchDocs();
      console.log('*** ' + docs);
      // Do something with the docs
    };

    //fetchData();
  }, []);

  return (
      <div>
        <h2>Firestore</h2>
        <div>
      <label>
        Link:
        <input type="text" value={link} onChange={handleLinkChange} />
      </label>
      <br />
      <label>
        Topic:
        <input type="text" value={topic} onChange={handleTopicChange} />
      </label>
      <br />
      <label>
        Tags (comma-separated):
        <input type="text" value={tags} onChange={handleTagsChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
      </div>
      
  )
}

export default App
