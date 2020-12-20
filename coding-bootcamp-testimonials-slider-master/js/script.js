function changeSlide() {
    TanyaImg = document.getElementById('tanyaImg')
    TanyaContent = document.getElementById('tanyaContent')
    JhonImg = document.getElementById('jhonImg')
    JhonContent = document.getElementById('jhonContent')

    if(TanyaImg.style.display !== 'none' && TanyaContent.style.display !== 'none') {
        JhonImg.style.display = 'block';
        JhonContent.style.display = 'block';

        TanyaImg.style.display = 'none';
        TanyaContent.style.display = 'none';
    }else{
        JhonImg.style.display = 'none';
        JhonContent.style.display = 'none';

        TanyaImg.style.display = 'block';
        TanyaContent.style.display = 'block';
    }
}