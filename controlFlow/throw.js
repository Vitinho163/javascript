// throw

function sayMyName(name = '') {
  if(name === '') {
    throw 'nome é obrigatório'
  }

  console.log(name)
}

// try...catch
try {
  sayMyName('Mayk')
} catch(e) {
  console.log(e)
}

console.log('após ao try/catch')