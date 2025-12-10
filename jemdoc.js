document.addEventListener("DOMContentLoaded", function() {
    const cvLink = document.querySelector('a[href="Doc/Sanjit_Kumar_Roy_CV.pdf"]');
    if (cvLink) {
        cvLink.setAttribute('target', '_blank');
        cvLink.setAttribute('rel', 'noopener noreferrer');
    }

    const phdLink = document.querySelector('a[href="Doc/Sanjit_Kumar_Roy_136101002_PhD_Thesis.pdf"]');
    if (phdLink) {
        phdLink.setAttribute('target', '_blank');
        phdLink.setAttribute('rel', 'noopener noreferrer');
    }

    const mtechLink = document.querySelector('a[href="Doc/Sanjit_Kumar_Roy_11_IT_415_MTech_Thesis.pdf"]');
    if (mtechLink) {
        mtechLink.setAttribute('target', '_blank');
        mtechLink.setAttribute('rel', 'noopener noreferrer');
    }

//	const h1 = document.querySelector("#toptitle h1");
//	if (h1) {
//   	 h1.addEventListener("click", function() {
//   	     alert("Hello from Sanjit");
//   	 });
//	}
});
