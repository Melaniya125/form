<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="script.js"></script>
    <script src="script-jqury.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    
</head>
<body>

    <section>
        <div class="container">
            <div class="feedback">
                <div class="feedback__in">
                    
                    <h2 class="feedback__title">Обратная связь</h2>
                    <span class="feedback__description">Заполните форму и мы свяжемся с вами</span>
                    <form action="./ajax.php" method="post" class="feedback__form" id="form">
                        <div class="feedback__form-small">
                            <input class="form-field" type="text" name="name" id="name" placeholder="Имя" required>
                            <input class="form-field" type="text" name="surname" id="surname" placeholder="Фамилия">
                            <input class="form-field" type="email" name="email" id="email" placeholder="Email*">
                            <input class="form-field" type="tel" name="phone" id="phone" placeholder="Телефон*" required>
                        </div>
                        <textarea class="form-field" name="comment" cols="40" rows="7" placeholder="Сообщение"></textarea>
                        <button type="submit" name="submit">Отправить</button>
                    </form>

                    <div class="error">Неверный email</div>
                    <div class="error">Не заполнено обязательное поле "Имя"</div>
                    <div class="error">Неверное имя</div>
                    <div class="error">Неверный номер телефона</div>
                    <div class="error-empty-mail">Не заполнено обязательное поле "email"</div>
                    <div class="error-empty-phone">Не заполнено обязательное поле "телефон"</div>

                    <div class="thx-mess"></div>
                    <div class="error-status"></div>

                    
                    <div id="form_result"></div>
                </div>

            </div>

        </div>
    </section>


</body>
</html>

