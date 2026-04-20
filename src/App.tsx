import './App.css';
import CardWithoutJSX from './Card';
import { Hello, HelloWithouJSX, } from './Hello';
import Welcome from './Welcome';
import AmazingComponent from './Button';
import UserProfile from './UserProfile';
import ContactForm from './ContactForm';
import StyledForm from './StyledForm';
import CandidateProfile from './CandidateProfile';
import Product from "./Product";
import Greeting from './Greeting';
import CardWrapper from './CardWrapper';
import {UserDetails} from './UserDetails';
import ProductList from './ProductList';


function App() {

  return (
    <div>
      <ProductList />
      <UserDetails 
      name="Bruce Wayne" 
      isOnline={true} 
      isPremium={true} 
      isNewUser={true}
      role="admin" />
      <UserDetails 
      name="Clark kent" 
      isOnline={true} 
      hideOffline={true}
      role="vip" />
      <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>saloumc147@gmail.com</p>
        <button>Edit profile</button>
      </CardWrapper>
      <Greeting message="Bruce" name="Goog morning" />
      <Greeting name="Clark" />
      <Greeting message="Welcome" />
      <Greeting />
      <Product 
      title="Gaming laptop" 
      price={1299.99} inStock={true} 
      categories={["Electronics", "Computers", "Gaming"]} />
      <Welcome name="Bruce" alias="Batman" />
      <Welcome name="Clark" alias="superman"/>
      <Welcome name="Diana" alias="Wonder Woman" />
      <CandidateProfile />
      <StyledForm />
      <ContactForm />
      <UserProfile />
      <Hello />
      <HelloWithouJSX />
      <CardWithoutJSX />
      <AmazingComponent />
    </div>
  )
}

export default App;
