/*.trigger*/
let trigger = document.getElementsByClassName('trigger')[0],
    gnb = document.querySelector('.gnb ul');
    sns = document.querySelector('.sns');

  trigger.addEventListener('click', function(){
  this.classList.toggle('active');
  gnb.classList.toggle('click_menu');
  sns.classList.toggle('click_menu');
});
