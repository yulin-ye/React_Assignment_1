import { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
//import CourseCardClass from './CourseCardClass';
import { fetchData } from './utils/api';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setData([...result]);
    };
    loadData();
  }, []);

  return (
    <div>
      {data?.map((item, index) => (
        <CourseCard key={`${new Date()}-${index}`} data={item} />
        //<CourseCardClass key={`${new Date()}-${index}`} data={item} />
      ))}
    </div>
  );
}

export default App;
