function share() {
    const share = document.getElementById('share')
    const links = document.getElementById('links')
    if(links.style.display == 'none'){
      links.style.display = 'block'
      share.classList.remove('icon-span-before')
      share.classList.add('icon-span-after')
    }else{
      links.style.display = 'none'
      share.classList.remove('icon-span-after')
      share.classList.add('icon-span-before')
    }
  }