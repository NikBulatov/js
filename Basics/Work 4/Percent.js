function Calculation(time, percent, deposite, times) { // создаём действие

    let result = deposite; // переменная для цикла
        
    
      for(let n = 1; n <= time; n = n + 1) { // месяцы
       result = result + result * (percent/100/12);
        console.log('Доход за ' + n + ' месяц ' + Math.floor((result - deposite))); // вывод дохода в цикле
      } 
           
      console.log('Доход за вдвое больший срок ' +  Math.floor((result - deposite)*2)); // вывод дохода за срок в 2 раза больший
      console.log('Доход за втрое больший срок ' + Math.floor((result - deposite)*3)); // в 3 раза больший
      
    } 
      let userDeposite = +prompt('Введите сумму вклада'),
          userPercent = +prompt('Введите годовой процент'),
          userTime = +prompt('Введите срок вклада в месяцах');
      
     Calculation(userTime, userPercent, userDeposite);