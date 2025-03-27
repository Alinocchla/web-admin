function formatText(command) {
        document.execCommand(command, false, null);
    }

    function previewImage(event) {
        const imagePreview = document.getElementById('imagePreview');
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    }

    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const content = document.getElementById('editor').innerHTML;
        const gender = document.getElementById('gender').value;
        const ageGroup = document.getElementById('ageGroup').value;

        console.log("Содержимое рассылки:", content);
        console.log("Пол:", gender);
        console.log("Возрастная группа:", ageGroup);
    });

	
let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn_send = document.getElementById("send_mailing")

btn_send.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Рассылка отправлена!");
		item = "1";
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
