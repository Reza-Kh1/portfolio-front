import './App.css';
import { useRoutes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import routes from './routes';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { refResh } from './reduxDark';
import { useDispatch } from 'react-redux';
function App() {
  const diss = useDispatch()
  const router = useRoutes(routes)
  const param = useParams()
  const selecte = useSelector(s => s.theme)
  useEffect(() => {
    diss(refResh())
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
    fetch("127.0.0.1:5000/product?page=1").then(r=>console.log(r)).catch(err=>console.log(err))
  }, [param])

  return (
    <>
      <div className={selecte.theme}>
        {router}
      </div>
    </>
  );
}
export default App;
