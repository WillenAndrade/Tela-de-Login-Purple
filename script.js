var box = document.querySelector('#box')
var popup = document.querySelector('.popup')
var btn = document.querySelector('.btn')
var begin = document.querySelector('.begin')
var second = document.querySelector('.second')
  
  function login() {
        box.style.display = 'flex';
   }
   
   
   function exit() {
         box.style.display = 'none';
    }

    function enter() {
         begin.style.display = 'none';
         popup.style.display = 'none';
         second.style.display = 'block';
    }




  /*  function exit() {
        var box = document.getElementById('box');
         box.style.visibility = 'hidden';
    } */