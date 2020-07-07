    let bills = document.querySelectorAll('img[src$="rub.jpg"]');
      function getCoffee(name, price){
        if (money.value+score >= price && score>=price-money.value){
          money.value = money.value-price+score;
          info.innerHTML=`Coffee ${name} is being prepared`;
          balance_info.innerHTML = `Balance: ${money.value} rubles.`;
          
          	let progressBar = document.querySelector('.progress-bar'); 	// обращение к элементу на странице класса .progress-bar
            		let i = 0; 												// объявление переменной i
            		let timerId = 
            		setInterval(  											// позволяет вызывать функцию, повторяя вызов через определённый интервал времени
            			() => { 											// функция для выполнения
            				progressBar.parentNode.style.display = "flex"; 	// изменение отображения элемента класса .progress
            				i+=5; 											// увеличение переменной i
            				progressBar.style.width = i+'%'; 				// изменение ширины элемента класса .progress-bar на i%
            				if (i > 100) 									// условие проверки переменной i
            				{
            				  
            					
                        
            				  info.innerHTML=`Coffee ${name} is ready`;
            					progressBar.parentNode.style.display = "none";
            					clearInterval(timerId);						// остонавливает дальнейшее выполнение функции setInterval
            					coffee.style.display="flex";
            					

            					if(name == "Americano") { 
                         coffee.src = "img/c[3].png";
                        } 
                        else if(name == "Espresso") {
                        coffee.src = "img/c[6].png"; 
                        }
            					   else if(name == "Latte") { 
                        coffee.src = "img/c[1].png"; 
                        }
                         else if(name == "Cappuccino") { 
                        coffee.src = "img/c[2].png";
                        }
                         else if(name == "Coffee Glace") { 
                        coffee.src = "img/c[4].png"; 
                        }
            					
            					
            					
            					//i = 0;									// обнуление переменной i
            					//progressBar.style.width = i+'%';			// изменение ширины элемента класса .progress-bar на i% (т.е. width элемента класса .progress-bar будет 0)
            					
            				}
            			}, 500										//интервал с которым будет проходить выполение
            		);
            	}
        else{
          info.innerHTML=`Not enough  ${price-money.value} rubles.`;
      }
      }
      function getChange(num){
        money.value="";
        balance_info.innerHTML =  `Balance: 0 rubles.`;
        
        let left  = getRandom(0,change_tray.getBoundingClientRect().width-50);
        let top  = getRandom(0,change_tray.getBoundingClientRect().height-50);
          if (num>=10){
            change_tray.innerHTML += `<img style="top:${top}px; left:${left}px" onclick="this.style.display = 'none';" src="img/10rub.png">`;
            getChange(num-10);
        }
          else if (num>=5){
            change_tray.innerHTML += `<img style="top:${top}px; left:${left}px" onclick="this.style.display = 'none';" src="img/5rub.png">`;
            getChange(num-5);
        }
          else if (num>=2){
            change_tray.innerHTML += `<img style="top:${top}px; left:${left}px" onclick="this.style.display = 'none';" src="img/2rub.png">`;
            getChange(num-2);
        }
          else if (num>=1){
            change_tray.innerHTML += `<img style="top:${top}px; left:${left}px" onclick="this.style.display = 'none';" src="img/1rub.png">`;
        }
      }
      function getRandom(min,max){
        return Math.random()*(max-min)+min;
      }
      
      for (let i=0; i<bills.length; i++){
        bills[i].addEventListener('mousedown',()=>{
          bills[i].style.position ='absolute';
          bills[i].style.transition = 'transform .8s';
          bills[i].style.transform = 'rotate(90deg)';
          
          function onMouseMove(event){
            bills[i].style.left = event.pageX-bills[i].offsetWidth/2+'px';
            bills[i].style.top = event.pageY-bills[i].offsetHeight/2+'px';
          }
          
          document.addEventListener('mousemove', onMouseMove);
          
          bills[i].addEventListener('mouseup',()=>{
            document.removeEventListener('mousemove',onMouseMove);
            
                let bill_acc_left  = bill_acc.getBoundingClientRect().left;
            let bill_acc_right = bill_acc.getBoundingClientRect().right;
            let bill_acc_bottom= bill_acc.getBoundingClientRect().bottom;
            let bill_acc_top   = bill_acc.getBoundingClientRect().top;
            
            let bill_left = bills[i].getBoundingClientRect().left;
            let bill_right = bills[i].getBoundingClientRect().right;
            let bill_top  = bills[i].getBoundingClientRect().top;
            
            if (bill_acc_left<bill_left && bill_acc_right>bill_right &&
                bill_acc_bottom>bill_top && bill_acc_top<bill_top){
              bills[i].style.display = 'none';
              money.value = +money.value+ (+score+ (+bills[i].alt));
              balance_info.innerHTML = `Balance: ${money.value} rubles. `;
            }
          })
        });
        
        bills[i].ondragstart = function() {
          return false;
        };
      }
      