
function type(d) {
  d.attack = +d.Attack;
  d.defense = +d.Defense;
  d.hp = +d.HP;
  d.speed = +d.Speed;
  d.spAttack = d['Sp. Atk'];
  d.spDefense = d['Sp. Def'];

  d.x = d.attack;
  d.y = d.defense;
  return d;
}

d3.csv('pokemon.csv', type, function(error, data) {

    if (error) {
        console.error(error)
        return;
    }

});