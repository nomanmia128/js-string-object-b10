const address = 'andorkilla';
const part = address.slice(2,7);
// console.log(part);

const sentence = 'I am a good and hardworking person.';
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendsStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
const friendns = friendsStr.split(' ');
console.log(friendns);
const realFriend = ['Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim'];
console.log(realFriend.join());
console.log(realFriend.join(','));
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
