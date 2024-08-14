
import CategoryCart from './Component/Category/CategoryCart';
import Directory from './Component/Directory/Directory';
import { Route, Routes } from 'react-router';
import Home from './Component/Router/Home/Home.component.jsx';
import Navigation from './Component/Router/Navigation/Navigation.Component.jsx';
import SignIn from './Component/Router/sign-in/Sign-in.Component.jsx';

const Shop = () => {
  return <div> Shop </div>
}

function App() {
  return (

    <Routes>
      <Route path='/' element={<Navigation></Navigation>}>
        <Route index={true} element={<Home></Home>} ></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='signIn' element={<SignIn></SignIn>}></Route>
      </Route>


    </Routes>

  );
}

export default App;
