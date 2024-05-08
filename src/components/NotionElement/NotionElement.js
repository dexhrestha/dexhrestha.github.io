import { NotionRenderer } from "react-notion";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Code } from 'react-notion-x/build/third-party/code'
import { Equation } from 'react-notion-x/build/third-party/equation'

// core styles shared by all of react-notion-x (required)
import 'prismjs/components/prism-python.js';

import 'react-notion-x/src/styles.css';

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css';

// used for rendering equations (optional)
import 'katex/dist/katex.min.css';

const NotionElement = () => {
  const [recordMap, setRecordMap] = useState({});
  const { blogSlug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3001/page/${blogSlug}`);
        const data = await response.json();   
        setRecordMap(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [blogSlug]); // Include blogSlug in dependency array to refetch data when it changes

  return (
    <div>
      {Object.keys(recordMap).length > 0 && (
        <NotionRenderer
          blockMap={recordMap.block}
          fullPage
          hideHeader
          components = {{
            Code,Equation
          }}
        />
      )}
    </div>
  );
};

export default NotionElement;
