window.addEventListener('DOMContentLoaded', function() {
    this.alert(localStorage.getItem('idCodigotreinamento'))
    IdTreinamento ={
        IdTreinamento: localStorage.getItem('idCodigotreinamento'),
    } 

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(IdTreinamento)
    };
  
    // Realiza a requisição para a API
    fetch('http://localhost:3001/api/users/teste', requestOptions)
    .then(response => response.json())
    .then(dataC => {
        console.log('Teeste da chamda dos case');
      const ValorTeste =localStorage.getItem('id');
      console.log('another onee:'+ValorTeste);
      if (dataC && typeof dataC === 'object') {
        var cases = dataC.result;
  
        var container = document.getElementById('containerConteudo');
  
        var row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
  
        var count = 0;
        Object.keys(cases).forEach(key => {
          var curso = cases[key];
  
          var div = document.createElement('div');
          div.innerHTML = `
            <p>Descricao: ${curso.descricao}</p>
            <p>Video: ${curso.video}</p>
          `; 
          row.appendChild(div);
  
          count++;
  
          if (count % 1 === 0) {
            row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);
            count=0;
          }
        });
  
      
      } else {
        alert('Deu Xabu!');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  
    });