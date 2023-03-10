import { useLoaderData, Link } from "react-router-dom";

import './Careers.css';



const Careers = () => {
  const careers = useLoaderData();

  return (
    <div className='app__careers'>
        {
          careers.map(c => (
            <Link className="career" key={ c.id } to={ c.id.toString() }>
              <p>{ c.title }</p>
              <p>Based in : { c.location }</p>
            </Link>
          ))
        }
    </div>
  );
};

export default Careers;

export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers');

  if (!res.ok) {
    throw Error('Could not load careers');
  }

  return res.json();
}