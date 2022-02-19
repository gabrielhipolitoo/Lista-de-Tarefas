
    console.log('Dom carregado')
//Entrada de dados
    const inputText = document.querySelector('input[type="text"]');
    const btnAdd =  document.querySelector('#add');
    const ul = document.querySelector('ul');
    const del =  document.querySelector('#del')

//Eventos
    inputText.addEventListener('keydown',enter)

    del.addEventListener('click',(excluirTodos))
    btnAdd.addEventListener('click',infor)

//Funções e metedos

    function enter(enter){
        if(enter.key === 'Enter'){
            let valores = {
                nome: inputText.value,
                id:gerarId()
            };
            addTask(valores)

        };
    };

    //Pegando dados do InputText
    function infor(){
        let valores = {
            nome: inputText.value,
            id:gerarId()
        }

        addTask(valores)
    }

  



    //Adiocioanando LI na UL e limitando as task
    function addTask(valores){
        const li = criarTag(valores)
        inputText.value = ""
        if(valores.nome.length === 0){
            console.log('nada a enviar')

        }

        else if(document.querySelectorAll('li').length < 5){
            ul.appendChild(li)
            teste()


        }

        else{
            console.log('limite execido')
        }



    };

//Gerando tags

    function criarTag(valores){

        let li = document.createElement('li')
        const btnRemove = document.createElement('button')
        const paragrafo = document.createElement('p')


        //Adicionando filhos
        li.appendChild(paragrafo)
        paragrafo.appendChild(document.createTextNode(valores.nome))
        li.appendChild(btnRemove)

        
        btnRemove.classList.add('excluirLi')
        btnRemove.innerHTML = '<i id="trash" class="fa fa-trash"></i>'

        //Setando atributos
        li.setAttribute('id',valores.id)
        btnRemove.setAttribute('onclick','excluir('+valores.id+')');
        li.setAttribute('onclick','check('+valores.id+')');


        
        return li
    };

    function excluir(idvalor){
        const li =  document.getElementById(idvalor)
        console.log('excluiu mais um')

      
        
        if(li){
            ul.removeChild(li)
        }

        if(document.querySelectorAll('li').length === 0){
            returnP
            console.log(2)
        }


        else{
            alert('Algo diferente aconteceu, contate o suporte')
        }
    }



    function excluirTodos(){
        let li = document.querySelectorAll('li')
        const index = li.length

        
        li.forEach((item,index) => {

            console.log(item,index)
            ul.removeChild(item)
        })
        returnP()

    }

    function gerarId(){
        return Math.floor(Math.random() * 3000)
    }


    function check(id){
        const li = document.getElementById(id)
        if(li){
            li.classList.toggle('check')
        }

        else{

        }
    }

    function teste(){
        
        const li =  document.querySelectorAll('li')
        const task0 = document.getElementById('teste')

        if(task0){
            ul.removeChild(task0)
        }

  
     
    }


    function returnP(){

        const gerarP = document.createElement('p')
        ul.appendChild(gerarP)
        gerarP.appendChild(document.createTextNode('Voce não tem nenhuma tarefaaaa'))
        gerarP.setAttribute('id','teste')
        console.log(teste)


    }


 
   
   



    


