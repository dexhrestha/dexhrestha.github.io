import { NotionRenderer } from "react-notion";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';


// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'


const NotionElement = () =>{
  const [blockMap, setBlockMap] = useState(null);

  const {blogSlug} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://notion-api.splitbee.io/v1/page/${blogSlug}`);
        const data = await response.json();
        setBlockMap(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return(
  <div>
{    (blockMap?
    <NotionRenderer
    blockMap={blockMap}
    fullPage
    hideHeader
    customBlockComponents={{
      page: ({ blockValue, renderComponent }) => (
        <a href={`/${blockValue.id}`}>{renderComponent()}</a>
      )
    }}
  />
  :'Loading...')}
  </div>
);
}

export default NotionElement;
