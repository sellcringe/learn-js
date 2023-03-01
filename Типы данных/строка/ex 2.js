"user strict"
function checkSpam(str){
    let strNow = str.toUpperCase();
    return strNow.includes('VIAGRA') || strNow.includes('XXX')
  }
 alert(checkSpam('buy ViAgRA now'));