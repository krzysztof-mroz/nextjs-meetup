import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/Meetuplist';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://www.tz.de/bilder/2020/06/15/13801212/1717068546-muenchen-skyline-2rZNQU9OvHf9.jpg',
        address: 'Some address 5, 12345 SomeCity',
        description: 'THis is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://www.tz.de/bilder/2020/06/15/13801212/1717068546-muenchen-skyline-2rZNQU9OvHf9.jpg',
        address: 'Some address 5, 12345 SomeCity',
        description: 'THis is a second meetup!'
    }
];

function Homepage() {
    return  <MeetupList meetups={DUMMY_MEETUPS}/>
}
    
export default Homepage;