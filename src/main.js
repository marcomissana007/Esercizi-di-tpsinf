function swap(list, pos1, pos2) {
  let temp = list[pos1];

  list[pos1] = list[pos2];
  list[pos2] = temp;

  return lista;
}

// Es 7

function creaDizionario(nomi, numeri) {
  let dizionario = {};

  for (let i = 0; i < nomi.length; i++) {
    dizionario[nomi[i]] = numeri[i];
  }

  return dizionario;
}

let labs = [
  {
    lab: '121',
    posti: 25,
    occupato: [false, true, true, false, true],
  },
  {
    lab: '122',
    posti: 26,
    occupato: [true, true, false, false, false],
  },
  {
    lab: '6',
    posti: 24,
    occupato: [false, false, true, true, true],
  },
  {
    lab: '24',
    posti: 28,
    occupato: [false, true, true, true, false],
  },
];

for (let i = 0; i < 5; i++) {
  console.log("laboratori liberi all'ora " + (i + 1) + "\n");
  labs.forEach((e) => {
    e.occupato[i] ? console.log(e.lab) : null;
  });
}
