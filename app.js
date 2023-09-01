const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }
    else if(password.length>=totalChar.value)
    {
        passBox.innerText = password.substring(0, totalChar.value);
        let s =  passBox.innerText
        
        let shuffle = (s) => {
            let arr = s.split(''), arr_len = arr.length;
            
            while (arr_len) {
              let rnd = Math.floor(Math.random() * arr_len--);
              [arr[arr_len], arr[rnd]] = [arr[rnd] , arr[arr_len]];
            }
            
            let str = arr.join('');
            	
                return str;
                // console.log(str);
          }
          passBox.innerText = shuffle(s);
      
    }


}


generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}