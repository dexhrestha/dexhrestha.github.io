import { NotionRenderer } from "react-notion-x";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Code } from 'react-notion-x/build/third-party/code'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Collection } from 'react-notion-x/build/third-party/collection'



import 'prismjs/themes/prism-tomorrow.css'

import 'react-notion-x/src/styles.css';

import 'katex/dist/katex.min.css';

import './NotionElement.css'

const NotionElement = () => {
  const [recordMap, setRecordMap] = useState({});
  const { blogSlug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/page/${blogSlug}`);
        const response = await fetch(`${process.env.REACT_APP_NOTION_URL}/page/${blogSlug}`);
        const data = await response.json();   
        setRecordMap(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [blogSlug]); // Include blogSlug in dependency array to refetch data when it changes


    useEffect(() => {
      // Add event listeners to all <a> tags with the 'notion-link' class
      const notionLinks = document.querySelectorAll('.notion a');
      console.log(notionLinks)
      notionLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
      });
  
      // Cleanup function to remove event listeners when component unmounts
      return () => {
        notionLinks.forEach(link => {
          link.removeEventListener('click', handleLinkClick);
        });
      };
    }, [recordMap]); // Run only once on component mount
    

    const handleLinkClick = (event) => {
      event.preventDefault(); // Prevent the default anchor tag behavior (i.e., navigating to a new page)

      // Get the href attribute of the clicked anchor tag
      const href = event.target.getAttribute('href');

      // Check if the href attribute starts with '#' (indicating it's an internal link)
      if (href && href.startsWith('#')) {
        // Extract the ID from the href attribute (excluding the '#')
        const targetId = href.substring(1);

        // Find the target element with the corresponding ID
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element smoothly
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };


  return (
    <div className = "notion__full_page">
      {Object.keys(recordMap).length > 0 && (
        <NotionRenderer
        className="notion__page"
        recordMap={recordMap}
          showTableOfContents
          fullPage
          hideBlockId
          darkMode
          showCollectionViewDropdown={false}
          components = {{
            Code,Equation,Collection
          }}
        />
      )}
    </div>
  );
};

export default NotionElement;
