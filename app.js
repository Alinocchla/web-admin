/*function formatText(command) {
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
    // Формируем сообщение для Telegram
    const message = Содержимое рассылки:\n${content}\nПол: ${gender}\nВозрастная группа: ${ageGroup};

    // Отправляем данные на сервер Telegram
   fetch('https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: 'YOUR_CHAT_ID', // Замените на ваш chat_id
            text: message,
            parse_mode: 'HTML' // Позволяет использовать HTML для форматирования текста
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Сообщение успешно отправлено в Telegram!');
            // Очистка формы после успешной отправки
			document.getElementById('editor').innerHTML = '';
            document.getElementById('imageUpload').value = '';
            document.getElementById('imagePreview').style.display = 'none';
            document.getElementById('gender').selectedIndex = 0;
            document.getElementById('ageGroup').selectedIndex = 0;
        } else {
            alert('Ошибка при отправке сообщения: ' + data.description);
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке сообщения.');
    });
});
	
*/

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
        
        // Здесь вы можете добавить код для отправки данных на сервер
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
