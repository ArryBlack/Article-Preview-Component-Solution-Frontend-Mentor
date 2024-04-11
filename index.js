 //Link preview functionality for smaller screens
 const openBtn = document.querySelector('.share_btn');
 const closeBtn = document.querySelector('.close_btn');
 const authorDetails = document.querySelector('.author_details');
 const mobileLinkSection = document.querySelector(
     '.mobile_share_section_active'
 );
 console.log();
 openBtn.addEventListener('click', function () {
     console.log('open ');
     mobileLinkSection.classList.remove('hide_div');
     authorDetails.classList.add('hide_div');
 });
 closeBtn.addEventListener('click', function () {
     console.log('close');
     mobileLinkSection.classList.add('hide_div');
     authorDetails.classList.remove('hide_div');
 });
 //Link preview functionality for bigger (800 and above) screens
 const openBtnDesktop = document.querySelector('.share_btn_desktop');
 const closeBtnDesktop =
     document.querySelector('.close_btn_desktop');
 const linkPreview = document.querySelector(
     '.desktop_links_section'
 );
 console.log(linkPreview);
 openBtnDesktop.onclick = function () {
     linkPreview.style.display = 'block';
     closeBtnDesktop.style.display = 'block';
     openBtnDesktop.style.display = 'none';
 };
 closeBtnDesktop.onclick = function () {
     linkPreview.style.display = 'none';
     closeBtnDesktop.style.display = 'none';
     openBtnDesktop.style.display = 'block';
 };