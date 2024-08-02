document.addEventListener('DOMContentLoaded', function() {
  const recommendBtn = document.getElementById('recommend_btn');
  const popup = document.getElementById('popup');
  const popupButton = popup.querySelector('button');

  recommendBtn.addEventListener('click', function() {
      // Formdan veri gönderimi yapıldığını varsayıyoruz.
      // Bu işlemi yapmadan önce form verilerini burada işleyebilirsiniz.
      
      // Pop-up'ı göster
      popup.style.display = 'block';
  });

  popupButton.addEventListener('click', function() {
      // Pop-up'ı gizle
      popup.style.display = 'none';
  });
});
