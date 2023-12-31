let displayValue = '';

        function appendToDisplay(value) {
            displayValue += value;
            document.getElementById('display').innerText = displayValue;
        }

        function clearDisplay() {
            displayValue = '';
            document.getElementById('display').innerText = '0';
        }

        function calculateResult() {
            try {
                const result = eval(displayValue);
                document.getElementById('display').innerText = result;
                displayValue = result.toString();
            } catch (error) {
                document.getElementById('display').innerText = 'Error';
                displayValue = '';
            }
        }
        function backspace() {
            displayValue = displayValue.slice(0, -1);
            document.getElementById('display').innerText = displayValue;
        }  
        function formulae(){
            document.getElementById("for").innerHTML="<br><br><br><div style='display: flex; align-items: stretch;'><div ><img width='100%'' src='a.png'> </div><div ><img width='100%'' src='b.jpg'> </div></div>"
                }