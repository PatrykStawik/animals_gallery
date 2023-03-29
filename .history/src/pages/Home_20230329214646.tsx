import { Link, useNavigation } from 'react-router-dom';

export const Home = () => {
  const {navigate} = useNavigation()
  return <button>click me</button>;
};
