import Character from './js/Character';
import Team from './js/Team';

const team = new Team();

team
  .add(new Character('Лучник', 'Bowman'))
  .add(new Character('Мечник', 'Swordsman'))
  .add(new Character('Маг', 'Magician'));

console.log('for...of:');
for (const character of team) {
  console.log(character);
}

console.log('spread:');
console.log([...team]);