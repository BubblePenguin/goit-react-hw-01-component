import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../json/user.json';
import data from '../json/data.json';
export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="what" stats={data} />
    </div>
  );
};
