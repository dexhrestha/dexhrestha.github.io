import { NotionRenderer } from "react-notion-x";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Code } from 'react-notion-x/build/third-party/code'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Collection } from 'react-notion-x/build/third-party/collection'

import './NotionElement.css'

// core styles shared by all of react-notion-x (required)
import 'prismjs/components/prism-python.js';

import 'react-notion-x/src/styles.css';

// used for rendering equations (optional)
import 'katex/dist/katex.min.css';

const NotionElement = () => {
  const [recordMap, setRecordMap] = useState({});
  const { blogSlug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/page/${blogSlug}`);
        const response = await fetch(`http://127.0.0.1:3001/page/${blogSlug}`);
        const data = await response.json();   
        setRecordMap(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [blogSlug]); // Include blogSlug in dependency array to refetch data when it changes


    console.log(recordMap)

  return (
    <div className = "notion__full_page">
      {Object.keys(recordMap).length > 0 && (
        <NotionRenderer
        recordMap={recordMap}

          darkmode
          fullPage={false}
          hideHeader
          showTableOfContents
          components = {{
            Code,Equation
          }}
        />
      )}
    </div>
  );
};

export default NotionElement;
